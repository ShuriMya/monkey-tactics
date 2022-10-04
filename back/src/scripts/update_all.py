import logging

from matches.update_db import get_players_latest_game_timestamp, update_player_matches
from players.update_db import add_rank_history
from players.models import Player

logging.basicConfig()

logger = logging.getLogger("update_all")
logger.setLevel(logging.INFO)


SET_START_TIMESTAMP = 1662588000


def run():
    players = Player.objects.filter(monitored=True)
    for player in players:
        logger.info(f"Updating player {player.name} (id: {player.id})")
        add_rank_history(player.id)

        # latest_game = get_players_latest_game_timestamp(player.id)
        # start_time = SET_START_TIMESTAMP if not latest_game else latest_game
        start_time = SET_START_TIMESTAMP
        update_player_matches(player.id, 100, start_time)
