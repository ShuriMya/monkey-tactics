from django.urls import include, path
from rest_framework import routers

from .views import (
    ChampionStatsViewset,
    AugmentStatsViewset,
    TraitStatsViewset,
    ItemStatsViewset,
)

router = routers.DefaultRouter()
router.register(r"champions", ChampionStatsViewset, basename="champion_stats")
router.register(r"augments", AugmentStatsViewset, basename="augment_stats")
router.register(r"traits", TraitStatsViewset, basename="trait_stats")
router.register(r"items", ItemStatsViewset, basename="item_stats")

urlpatterns = [
    path("", include(router.urls)),
]
