import os
import requests
import logging
import backoff
from dotenv import load_dotenv
from ratelimit import limits, sleep_and_retry

logging.basicConfig()

logger = logging.getLogger("riot_client")
logger.setLevel(logging.INFO)

load_dotenv()
RIOT_API_URL = os.getenv("RIOT_API_URL")
RIOT_EUW_MATCHES_API_URL = os.getenv("RIOT_EUW_MATCHES_API_URL")
RIOT_API_TOKEN = os.getenv("RIOT_API_TOKEN")


class UserNotFoundError(Exception):
    pass


class MatchNotFoundError(Exception):
    pass


class RateLimitedError(Exception):
    pass


def backoff_hdlr(details):
    logger.warn(
        "Rate limited for {target} on URL: {args}. Backing off {wait:0.1f}s".format(
            **details
        )
    )


@backoff.on_exception(
    backoff.fibo, RateLimitedError, logger=None, on_backoff=[backoff_hdlr]
)
def get_from_riot(url):
    logger.debug(f"Request to {url}")
    resp = requests.get(url, headers={"X-Riot-Token": RIOT_API_TOKEN})

    if resp.status_code == 429:
        raise RateLimitedError

    return resp


def get_riot_ids(username):
    resp = get_from_riot(
        f"{RIOT_API_URL}/tft/summoner/v1/summoners/by-name/{username}",
    )

    if resp.status_code != 200:
        raise UserNotFoundError(f"{username} not found")

    resp = resp.json()
    return {"id": resp["id"], "puuid": resp["puuid"], "account_id": resp["accountId"]}


def get_riot_username_from_puuid(player_puuid):
    resp = get_from_riot(
        f"{RIOT_API_URL}/tft/summoner/v1/summoners/by-puuid/{player_puuid}",
    )

    if resp.status_code != 200:
        raise UserNotFoundError(f"{player_puuid} not found")

    resp = resp.json()
    return {
        "id": resp["id"],
        "username": resp["name"],
        "account_id": resp["accountId"],
    }


def get_tft_profile_from_id(summonerId):
    resp = get_from_riot(
        f"{RIOT_API_URL}/tft/league/v1/entries/by-summoner/{summonerId}",
    )

    if resp.status_code != 200:
        raise UserNotFoundError()

    json_resp = resp.json()

    if not json_resp:
        return

    json_resp = json_resp[0]
    return {
        "id": json_resp["leagueId"],
        "tier": json_resp["tier"],
        "rank": json_resp["rank"],
        "lp": json_resp["leaguePoints"],
        "wins": json_resp["wins"],
        "losses": json_resp["losses"],
    }


def get_user_latest_matches_ids(puuid, count=50, start_time=None):
    url = f"{RIOT_EUW_MATCHES_API_URL}/tft/match/v1/matches/by-puuid/{puuid}/ids?count={count}"

    if start_time:
        url += f"&startTime={start_time}"

    resp = get_from_riot(url)

    if resp.status_code != 200:
        raise MatchNotFoundError()

    return resp.json()


def get_match_from_id(match_id):
    resp = get_from_riot(
        f"{RIOT_EUW_MATCHES_API_URL}/tft/match/v1/matches/{match_id}",
    )

    if resp.status_code != 200:
        raise MatchNotFoundError()

    return resp.json()
