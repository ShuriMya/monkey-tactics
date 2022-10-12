from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.db.models import Avg, Count, Subquery, Q

from matches.models import MatchComp
from .models import RankHistory
from .serializers import LeaderboardSerializer, WinCountSerializer


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
            basic_profile_qs = (
                RankHistory.objects.select_related("player")
                .filter(player__name=pk)
                .latest("timestamp")
            )
            basic_profile_serializer = LeaderboardSerializer(basic_profile_qs)

            all_player_games = MatchComp.objects.select_related("player").filter(
                player__name=pk
            )
            avg_place = all_player_games.aggregate(avg_place=Avg("placement"))
            nb_wins = all_player_games.filter(placement=1).count()

        except RankHistory.DoesNotExist:
            raise NotFound()
        return Response(
            {
                "wins": nb_wins,
                **basic_profile_serializer.data,
                **avg_place,
            }
        )
