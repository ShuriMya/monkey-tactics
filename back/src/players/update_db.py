from api_client.riot_client import (
    get_riot_ids,
    get_tft_profile_from_id,
    get_riot_username_from_puuid,
)
from .models import (
    Player,
    RankHistory,
)


def add_player(username, monitored=False):
    riot_ids = get_riot_ids(username)
    Player.objects.get_or_create(
        name=username,
        id=riot_ids["id"],
        account_id=riot_ids["account_id"],
        puuid=riot_ids["puuid"],
        monitored=monitored,
    )


def add_player_by_puuid(player_puuid, monitored=False):
    try:
        Player.objects.get(puuid=player_puuid)
    except Player.DoesNotExist:
        riot_ids_and_username = get_riot_username_from_puuid(player_puuid)
        Player.objects.create(
            name=riot_ids_and_username["username"],
            puuid=player_puuid,
            account_id=riot_ids_and_username["account_id"],
            id=riot_ids_and_username["id"],
            monitored=monitored,
        )


def update_player_name(db_player):
    new_username = get_riot_username_from_puuid(db_player.puuid)["username"]
    if new_username != db_player.name:
        db_player.name = new_username
        db_player.save()


def add_rank_history(player_id):
    def rankToOrderableRank(tier, rank):
        tiers = [
            "IRON",
            "BRONZE",
            "SILVER",
            "GOLD",
            "PLATINUM",
            "DIAMOND",
            "MASTER",
            "GRANDMASTER",
            "CHALLENGER",
        ]
        return (tiers.index(tier.upper()) + 1) * 10 + 4 - romanToArabNumber(rank)

    def romanToArabNumber(roman):
        return {"I": 1, "II": 2, "III": 3, "IV": 4}[roman]

    player = Player.objects.get(id=player_id)
    update_player_name(player)
    tft_profile = get_tft_profile_from_id(player_id)

    if tft_profile:
        RankHistory.objects.create(
            player=player,
            rank=romanToArabNumber(tft_profile["rank"]),
            tier=tft_profile["tier"],
            lp=tft_profile["lp"],
            tops=tft_profile["wins"],
            bottoms=tft_profile["losses"],
            orderable_rank=rankToOrderableRank(
                tft_profile["tier"], tft_profile["rank"]
            ),
        )
