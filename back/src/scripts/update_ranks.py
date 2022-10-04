from players.update_db import add_rank_history
from players.models import Player


def run():
    players = Player.objects.filter(monitored=True)
    for player in players:
        add_rank_history(player.id)
