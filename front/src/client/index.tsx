import { PlayersRankingData } from "pages/Leaderboard/PlayersRankings";
import { MatchHistoryData, PlayerProfile } from "pages/PlayerProfile";
import { ChampionsStatsData } from "pages/Stats/Champions/ChampionStatsTable";
import { AugmentsStatsData } from "pages/Stats/Augments/AugmentsStatsTable";
import { PatchFilters } from "pages/Stats/common/Filters";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getLeaderboard = async (): Promise<Array<PlayersRankingData>> => {
	let results;
	try {
		results = await fetch(`${BACKEND_URL}/players/`, {});
		if (results.ok) return results.json();
		return [];
	} catch (error) {
		console.error(
			"There has been a problem when fetching the leaderboard",
			error
		);
		return [];
	}
};

export const getProfile = async (
	playerName: string
): Promise<PlayerProfile | undefined> => {
	let results;
	try {
		results = await fetch(`${BACKEND_URL}/players/${playerName}`, {});
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error(
			"There has been a problem when fetching the player profile",
			error
		);
		return undefined;
	}
};

export const getMatchHistory = async (
	playerName: string,
	page: number = 1
): Promise<MatchHistoryData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/matches/${playerName}/?page=${page}`,
			{}
		);
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error(
			"There has been a problem when fetching the player profile",
			error
		);
		return undefined;
	}
};

export const getChampionsStats = async (filters: {
	patch: string;
}): Promise<ChampionsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/champions/?patch=${filters.patch}`,
			{}
		);
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error("There has been a problem when fetching the stats", error);
		return undefined;
	}
};

export const getAugmentsStats = async (filters: {
	patch: string;
}): Promise<AugmentsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/augments/?patch=${filters.patch}`,
			{}
		);
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error("There has been a problem when fetching the stats", error);
		return undefined;
	}
};

export const getFilters = async (): Promise<PatchFilters> => {
	let results;
	try {
		results = await fetch(`${BACKEND_URL}/matches/filters`, {});
		if (results.ok) return results.json();
		return [];
	} catch (error) {
		console.error("There has been a problem when fetching the filters", error);
		return [];
	}
};
