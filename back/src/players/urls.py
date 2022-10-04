from django.urls import include, path
from rest_framework import routers

from .views import LeaderboardViewset

router = routers.DefaultRouter()
router.register(r"", LeaderboardViewset, basename="leaderboard")

urlpatterns = [
    path("", include(router.urls)),
]
