# Generated by Django 4.0.6 on 2022-09-06 17:17

from django.db import migrations
import sortedm2m.fields
from sortedm2m.operations import AlterSortedManyToManyField


class Migration(migrations.Migration):

    dependencies = [
        ("matches", "0001_initial"),
    ]

    operations = [
        AlterSortedManyToManyField(
            model_name="champion",
            name="items",
            field=sortedm2m.fields.SortedManyToManyField(
                help_text=None, related_name="items", to="matches.item"
            ),
        ),
        AlterSortedManyToManyField(
            model_name="matchcomp",
            name="augments",
            field=sortedm2m.fields.SortedManyToManyField(
                help_text=None, to="matches.augment"
            ),
        ),
    ]