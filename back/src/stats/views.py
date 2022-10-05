from django.db import connection
from rest_framework import viewsets
from rest_framework.response import Response


def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


def get_num_games(cursor, game_version):
    cursor.execute(
        f"""
            select count(*) from matches_match
            join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
            where game_version = '{game_version}'
        """
    )
    return cursor.fetchone()[0]


class ChampionStatsViewset(viewsets.ViewSet):
    def list(self, request):
        game_version = request.query_params.get("patch")

        with connection.cursor() as cur:
            nb_games = get_num_games(cur, game_version)
            cur.execute(
                f"""
                    select name, rarity, count(*) as count, avg(placement) as placement_avg
                    from matches_champion
                    join (
                        select * from matches_matchcomp_units
                        join (
                            select matches_matchcomp.id, matches_matchcomp.player_id, matches_matchcomp.placement from matches_match
                            join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
                            where game_version = '{game_version}'
                            group by matches_matchcomp.id
                        ) as current_patch_comps
	                    on matches_matchcomp_units.matchcomp_id = current_patch_comps.id
                    ) as current_patch_champions 
                    on matches_champion.id = current_patch_champions.champion_id
                    group by name, rarity
                    order by count desc
                """
            )
            return Response({"nb_games": nb_games, "stats": dictfetchall(cur)})


class AugmentStatsViewset(viewsets.ViewSet):
    def list(self, request):
        game_version = request.query_params.get("patch")

        with connection.cursor() as cur:
            nb_games = get_num_games(cur, game_version)
            cur.execute(
                f"""
                    select name, count(*) as count, avg(placement) as placement_avg
                    from matches_augment
                    join (
                        select * from matches_matchcomp_augments
                        join (
                            select matches_matchcomp.id, matches_matchcomp.player_id, matches_matchcomp.placement from matches_match
                            join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
                            where game_version = '{game_version}'
                            group by matches_matchcomp.id
                        ) as current_patch_comps
	                    on matches_matchcomp_augments.matchcomp_id = current_patch_comps.id
                    ) as current_patch_augments 
                    on matches_augment.id = current_patch_augments.augment_id
                    group by name
                    order by count desc
                """
            )
            return Response({"nb_games": nb_games, "stats": dictfetchall(cur)})


class TraitStatsViewset(viewsets.ViewSet):
    def list(self, request):
        game_version = request.query_params.get("patch")

        with connection.cursor() as cur:
            nb_games = get_num_games(cur, game_version)
            cur.execute(
                f"""
                    select name, min(num_units) as num_units, count(*) as count, avg(placement) as placement_avg
                    from matches_trait
                    join (
                        select * from matches_matchcomp_traits
                        join (
                            select matches_matchcomp.id, matches_matchcomp.player_id, matches_matchcomp.placement from matches_match
                            join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
                            where game_version = '{game_version}'
                            group by matches_matchcomp.id
                        ) as current_patch_comps
	                    on matches_matchcomp_traits.matchcomp_id = current_patch_comps.id
                    ) as current_patch_traits
                    on matches_trait.id = current_patch_traits.trait_id
                    group by name, tier
                    order by count desc
                """
            )
            return Response({"nb_games": nb_games, "stats": dictfetchall(cur)})


class ItemStatsViewset(viewsets.ViewSet):
    def list(self, request):
        game_version = request.query_params.get("patch")

        with connection.cursor() as cur:
            nb_games = get_num_games(cur, game_version)
            cur.execute(
                f"""
                    select matches_item.id, count(*) as count, avg(placement) as placement_avg
                    from matches_item
                    join (
						select * from matches_champion_items
						join (
							select * from matches_matchcomp_units
							join (
								select matches_matchcomp.id, matches_matchcomp.player_id, matches_matchcomp.placement from matches_match
								join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
                                where game_version = '{game_version}'
								group by matches_matchcomp.id
							) as current_patch_comps
							on matches_matchcomp_units.matchcomp_id = current_patch_comps.id
						) as current_patch_champions 
						on matches_champion_items.id = current_patch_champions.champion_id
                    ) as current_patch_items
                    on matches_item.id = current_patch_items.item_id	
                    group by matches_item.id
                    order by count desc
                """
            )
            return Response({"nb_games": nb_games, "stats": dictfetchall(cur)})
