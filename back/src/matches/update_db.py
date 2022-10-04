from datetime import datetime
from django.db import transaction
import pytz
import logging

logging.basicConfig()


from api_client.riot_client import (
    get_user_latest_matches_ids,
    get_match_from_id,
)

from players.models import Player
from players.update_db import add_player_by_puuid, update_player_name

from .models import (
    Augment,
    Champion,
    Item,
    MatchComp,
    Match,
    Trait,
)

logger = logging.getLogger("update_matches")
logger.setLevel(logging.INFO)


def get_players_latest_game_timestamp(player_id):
    try:
        latest_game = (
            MatchComp.objects.select_related("player", "match")
            .filter(player__id=player_id)
            .latest("match__timestamp")
        )
        return int(latest_game.match.timestamp.timestamp())
    except MatchComp.DoesNotExist:
        return None


def update_player_matches(
    player_id,
    count=None,
    start_time=None,
):
    player = Player.objects.get(id=player_id)
    update_player_name(player)

    latest_matches_ids = get_user_latest_matches_ids(player.puuid, count, start_time)

    for match_num, match_id in enumerate(latest_matches_ids):
        try:
            Match.objects.get(
                id=match_id,
            )
            logger.info(
                f"Match {match_id} already added. ({match_num + 1} / {len(latest_matches_ids)})"
            )
        except Match.DoesNotExist:
            match = get_match_from_id(match_id)
            for participant_puuid in match["metadata"]["participants"]:
                add_player_by_puuid(participant_puuid)

            with transaction.atomic():
                match_obj = Match.objects.create(
                    id=match["metadata"]["match_id"],
                    queue_id=match["info"]["queue_id"],
                    timestamp=datetime.fromtimestamp(
                        match["info"]["game_datetime"] / 1000, pytz.UTC
                    ),
                    game_length=match["info"]["game_length"],
                    game_version=match["info"]["game_version"],
                )

                for participant_comp in match["info"]["participants"]:
                    match_comp, _ = MatchComp.objects.get_or_create(
                        player=Player.objects.get(puuid=participant_comp["puuid"]),
                        match=match_obj,
                        placement=participant_comp["placement"],
                        level=participant_comp["level"],
                        gold_left=participant_comp["gold_left"],
                        last_round=participant_comp["last_round"],
                        time_eliminated=participant_comp["time_eliminated"],
                        damage_to_players=participant_comp["total_damage_to_players"],
                        companion=participant_comp["companion"],
                    )
                    for unit in participant_comp["units"]:
                        champion = Champion.objects.create(
                            name=unit["character_id"],
                            stars=unit["tier"],
                            rarity=unit["rarity"],
                        )
                        for item_slot, item_name in enumerate(unit["itemNames"]):
                            item, _ = Item.objects.get_or_create(
                                id=unit["items"][item_slot], name=item_name
                            )
                            champion.items.add(item)
                        match_comp.units.add(champion)

                    for augment_name in participant_comp["augments"]:
                        augment, _ = Augment.objects.get_or_create(name=augment_name)
                        match_comp.augments.add(augment)

                    for trait in participant_comp["traits"]:
                        if trait["tier_current"] > 0:
                            trait_obj, _ = Trait.objects.get_or_create(
                                name=trait["name"],
                                num_units=trait["num_units"],
                                tier=trait["tier_current"],
                                max_tiers=trait["tier_total"],
                            )
                            match_comp.traits.add(trait_obj)
            logger.info(
                f"Match {match_id} added. ({match_num + 1} / {len(latest_matches_ids)})"
            )
