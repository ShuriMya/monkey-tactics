from django.db.models import (
    Model,
    CharField,
    IntegerField,
    PositiveIntegerField,
    DateTimeField,
    ForeignKey,
    Index,
    BooleanField,
    PROTECT,
)


class Player(Model):
    name = CharField(max_length=32)
    id = CharField(primary_key=True, max_length=63)
    account_id = CharField(max_length=56)
    puuid = CharField(max_length=78)
    monitored = BooleanField(default=False)


class RankHistory(Model):
    class Meta:
        indexes = [Index(fields=["player", "-timestamp"])]

    player = ForeignKey(Player, on_delete=PROTECT)
    tier = CharField(max_length=16)
    rank = PositiveIntegerField()
    lp = IntegerField(default=0)
    tops = PositiveIntegerField(default=0)
    bottoms = PositiveIntegerField(default=0)
    orderable_rank = PositiveIntegerField(default=0)
    timestamp = DateTimeField(auto_now_add=True)
