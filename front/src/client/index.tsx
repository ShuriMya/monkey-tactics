import { PlayersRankingData } from "pages/Leaderboard/PlayersRankings";
import { MatchHistoryData } from "pages/PlayerProfile";
import { ChampionsStatsData } from "pages/Stats/Champions/ChampionStatsTable";
import { AugmentsStatsData } from "pages/Stats/Augments/AugmentsStatsTable";
import { TraitsStatsData } from "pages/Stats/Traits/TraitsStatsTable";
import { ItemsStatsData } from "pages/Stats/Items/ItemsStatsTable";
import { PatchFilters } from "pages/Stats/common/Filters";
import { PlayerProfileData } from "pages/PlayerProfile/PlayerProfileHeader";

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
): Promise<PlayerProfileData | undefined> => {
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
	only_monitored: boolean;
}): Promise<ChampionsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/champions/?patch=${filters.patch}&only_monitored=${filters.only_monitored}`,
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
	only_monitored: boolean;
}): Promise<AugmentsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/augments/?patch=${filters.patch}&only_monitored=${filters.only_monitored}`,
			{}
		);
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error("There has been a problem when fetching the stats", error);
		return undefined;
	}
};

export const getTraitsStats = async (filters: {
	patch: string;
	only_monitored: boolean;
}): Promise<TraitsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/traits/?patch=${filters.patch}&only_monitored=${filters.only_monitored}`,
			{}
		);
		if (results.ok) return results.json();
		return undefined;
	} catch (error) {
		console.error("There has been a problem when fetching the stats", error);
		return undefined;
	}
};

export const getItemsStats = async (filters: {
	patch: string;
	only_monitored: boolean;
}): Promise<ItemsStatsData | undefined> => {
	let results;
	try {
		results = await fetch(
			`${BACKEND_URL}/stats/items/?patch=${filters.patch}&only_monitored=${filters.only_monitored}`,
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
