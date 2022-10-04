from rest_framework import serializers

from players.serializers import PlayerSerializer
from .models import Item, Match, MatchComp, Augment, Champion, Trait


class AugmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Augment
        fields = ["name"]


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "name"]


class UnitSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Champion
        fields = ["name", "stars", "items", "rarity"]


class TraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait
        fields = ["name", "num_units", "tier", "max_tiers"]


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ["id", "queue_id", "timestamp", "game_length", "game_version"]


class PlayerMatchHistorySerializer(serializers.ModelSerializer):
    augments = AugmentSerializer(many=True)
    units = UnitSerializer(many=True)
    traits = TraitSerializer(many=True)
    match = MatchSerializer()
    player = PlayerSerializer()

    class Meta:
        model = MatchComp
        fields = [
            "placement",
            "level",
            "gold_left",
            "last_round",
            "time_eliminated",
            "damage_to_players",
            "companion",
            "augments",
            "units",
            "traits",
            "match",
            "player",
        ]
