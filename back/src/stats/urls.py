from django.urls import include, path
from rest_framework import routers

from .views import StatsViewset

router = routers.DefaultRouter()
router.register(r"", StatsViewset, basename="stats")

urlpatterns = [
    path("", include(router.urls)),
]
