from itertools import groupby
from operator import itemgetter
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from .models import MatchComp
from .serializers import PlayerMatchHistorySerializer


class PlayerMatchHistoryPagination(PageNumberPagination):
    page_size = 80


class PlayerMatchHistoryViewset(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        pagination = PlayerMatchHistoryPagination()
        try:
            matches_ids = (
                MatchComp.objects.select_related("player", "match")
                .filter(player__name=pk)
                .order_by("-match__timestamp")
                .values("match")
            )
            queryset = (
                MatchComp.objects.select_related("player", "match")
                .filter(match__id__in=matches_ids)
                .order_by("-match__timestamp")
            )

            paginated_qs = pagination.paginate_queryset(queryset, request)
            serializer = PlayerMatchHistorySerializer(paginated_qs, many=True)

            results = [
                {"match_info": match, "comps": [comp for comp in comps]}
                for match, comps in groupby(serializer.data, itemgetter("match"))
            ]

        except MatchComp.DoesNotExist:
            raise NotFound()
        return pagination.get_paginated_response(results)
