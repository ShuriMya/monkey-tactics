from django.db.models import (
    Model,
    ManyToManyField,
    CharField,
    TextField,
    IntegerField,
    PositiveIntegerField,
    DateTimeField,
    ForeignKey,
    JSONField,
    FloatField,
    UniqueConstraint,
    PROTECT,
    CASCADE,
)
from sortedm2m.fields import SortedManyToManyField

from players.models import Player


class Trait(Model):
    class Meta:
        constraints = [
            UniqueConstraint(
                fields=["name", "tier", "num_units", "max_tiers"],
                name="unique_trait_tier",
            )
        ]

    name = CharField(max_length=64)
    num_units = PositiveIntegerField()
    tier = PositiveIntegerField()
    max_tiers = PositiveIntegerField()


class Item(Model):
    id = IntegerField(primary_key=True)
    name = CharField(max_length=64)


class Champion(Model):
    name = CharField(max_length=64)
    stars = IntegerField()
    items = SortedManyToManyField(Item, related_name="items")

    rarity = PositiveIntegerField()


class Augment(Model):
    name = CharField(max_length=64)


class Match(Model):
    id = CharField(primary_key=True, max_length=32)
    queue_id = IntegerField()
    timestamp = DateTimeField()
    game_length = FloatField()
    game_version = TextField()


class MatchComp(Model):
    class Meta:
        constraints = [
            UniqueConstraint(
                fields=["player", "match"],
                name="unique_player_matchcomp",
            )
        ]

    player = ForeignKey(Player, on_delete=PROTECT)
    match = ForeignKey(Match, on_delete=CASCADE, related_name="comps")
    placement = PositiveIntegerField()
    level = PositiveIntegerField()
    gold_left = IntegerField()
    last_round = IntegerField()
    time_eliminated = FloatField()
    damage_to_players = IntegerField()
    companion = JSONField()
    augments = SortedManyToManyField(Augment)
    units = ManyToManyField(Champion, related_name="units")
    traits = ManyToManyField(Trait, related_name="traits")
