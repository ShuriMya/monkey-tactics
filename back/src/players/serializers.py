from rest_framework import serializers
from .models import Player, RankHistory


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ["name", "id"]


class LeaderboardSerializer(serializers.ModelSerializer):
    player = serializers.CharField(source="player.name")

    class Meta:
        model = RankHistory
        fields = ["player", "tier", "rank", "lp", "timestamp", "tops", "bottoms"]
