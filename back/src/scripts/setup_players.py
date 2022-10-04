from players.update_db import add_player


SETUP_PLAYERS = [
    "KC Double61",
    "IZI Lyyyress",
    "SLY Voltariux",
    "AEG PasDeBol",
    "KC Canbizz",
    "SLY L3SCoco",
    "AEG Magarky",
    "LIL Aware",
    "Zyk0o",
    "PCS Xperion",
    "AEG Un33D",
    "Zoro5773",
    "Texita",
    "Exalty Gheed",
    "BGN Kenobi",
    "iamTLT",
]


def run():
    for player in SETUP_PLAYERS:
        add_player(player, monitored=True)
