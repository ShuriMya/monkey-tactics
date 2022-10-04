import { useCallback, useEffect, useState } from "react";
import { getFilters, getStats } from "../../client";
import ChampionStatsTable, { ChampionsStatsData } from "./ChampionStatsTable";
import Filters, { PatchFilters } from "./Filters";

interface StatsPageState {
	stats: ChampionsStatsData;
	filters: PatchFilters;
	selectedFilter: string | undefined;
	loading: boolean;
}

const Stats = () => {
	const [pageState, setPageState] = useState<StatsPageState>({
		loading: true,
		stats: { nb_games: 0, stats: [] },
		filters: [],
		selectedFilter: undefined,
	});

	const onPatchFilterChange = useCallback((selectedFilter: string) => {
		setPageState((oldState) => ({ ...oldState, selectedFilter }));
	}, []);

	const initPage = useCallback(async () => {
		const filters = await getFilters();
		setPageState((oldState) => ({
			...oldState,
			loading: false,
			filters,
			selectedFilter: filters[filters.length - 1].game_version,
		}));
	}, []);

	const updateStats = useCallback(async () => {
		if (!pageState.selectedFilter) return;
		const stats = (await getStats({ patch: pageState.selectedFilter })) ?? {
			nb_games: 0,
			stats: [],
		};
		setPageState((oldState) => ({ ...oldState, stats }));
	}, [pageState.selectedFilter]);

	useEffect(() => {
		initPage();
	}, []);
	useEffect(() => {
		updateStats();
	}, [pageState.selectedFilter]);

	if (pageState.loading) {
		return <h1 className="text-xl font-bold mb-6">Stats (Loading...)</h1>;
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Stats</h1>
			<Filters
				onPatchFilterChange={onPatchFilterChange}
				allFilters={pageState.filters}
				selectedFilter={pageState.selectedFilter || ""}
			/>
			<ChampionStatsTable data={pageState.stats} />
		</>
	);
};

export default Stats;
