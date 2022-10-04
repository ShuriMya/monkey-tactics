from django.db import connection
from rest_framework import viewsets
from rest_framework.response import Response


def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


class StatsViewset(viewsets.ViewSet):
    def list(self, request):
        game_version = request.query_params.get("patch")

        with connection.cursor() as cur:
            cur.execute(
                f"""
                    select count(*) from matches_match
                    join matches_matchcomp on matches_match.id = matches_matchcomp.match_id
                    where game_version = '{game_version}'
                """
            )
            nb_games = cur.fetchone()[0]

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
