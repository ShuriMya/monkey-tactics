from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.db.models import Subquery

from .models import RankHistory
from .serializers import LeaderboardSerializer


class LeaderboardViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = RankHistory.objects.filter(
            pk__in=Subquery(
                RankHistory.objects.select_related("player")
                .order_by("player__id", "-timestamp")
                .distinct("player__id")
                .values("pk")
            )
        ).order_by("-orderable_rank", "-lp")
        serializer = LeaderboardSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        try:
            queryset = (
                RankHistory.objects.select_related("player")
                .filter(player__name=pk)
                .latest("timestamp")
            )
            serializer = LeaderboardSerializer(queryset)
        except RankHistory.DoesNotExist:
            raise NotFound()
        return Response(serializer.data)
