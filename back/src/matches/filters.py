from rest_framework import viewsets, serializers

from .models import Match


class PatchFilterSerializer(serializers.Serializer):
    game_version = serializers.CharField()


class PatchFilterViewset(viewsets.ModelViewSet):
    queryset = Match.objects.distinct("game_version").values("game_version")
    serializer_class = PatchFilterSerializer
