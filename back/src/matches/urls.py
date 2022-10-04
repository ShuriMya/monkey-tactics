from django.urls import include, path
from rest_framework import routers

from .filters import PatchFilterViewset
from .views import PlayerMatchHistoryViewset

router = routers.DefaultRouter()
router.register(r"filters", PatchFilterViewset, basename="patch_filter")
router.register(r"", PlayerMatchHistoryViewset, basename="match_history")

urlpatterns = [
    path("", include(router.urls)),
]
