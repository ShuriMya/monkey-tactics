# Monkey Tactics

A lolchess-like app that allows to track only some specified players.
This app requires a Riot API token in order to fetch the players' game history, and a CDN that serves the game assets (unit, items, augments, little legends images)

## Env Setup

For backend setup, create and complete this `.env` file in the back folder

```
DJANGO_SETTINGS_MODULE=app.settings

RIOT_API_URL=
RIOT_EUW_MATCHES_API_URL=
RIOT_API_TOKEN=

DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

Front end `.env` setup

```
VITE_BACKEND_URL=
VITE_ASSETS_URL=
VITE_LITTLE_LEGENDS_ASSETS_URL=
```
