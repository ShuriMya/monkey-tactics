import React, { useCallback, useEffect, useState } from "react";
import { getFilters } from "client";
import Filters, { PatchFilters } from "../common/Filters";

interface StatsPageData<StatsDataT> {
	nb_games: number;
	stats: Array<StatsDataT>;
}

interface StatsPageState<StatsDataT> {
	stats: StatsPageData<StatsDataT>;
	filters: PatchFilters;
	selectedFilters: {
		game_version: string | undefined;
		only_monitored: boolean;
	};
	loading: boolean;
}

interface StatsPageProps<StatsDataT> {
	fetchStats: (filters: {
		patch: string;
		only_monitored: boolean;
	}) => Promise<StatsPageData<StatsDataT> | undefined>;
	StatsTableComponent: (props: {
		data: StatsPageData<StatsDataT>;
	}) => JSX.Element;
}

const StatsPage = <StatsDataT,>({
	fetchStats,
	StatsTableComponent,
}: StatsPageProps<StatsDataT>) => {
	const [pageState, setPageState] = useState<StatsPageState<StatsDataT>>({
		loading: true,
		stats: { nb_games: 0, stats: [] },
		filters: [],
		selectedFilters: { game_version: undefined, only_monitored: false },
	});

	const onPatchFilterChange = useCallback((newPatch: string) => {
		setPageState((oldState) => ({
			...oldState,
			selectedFilters: {
				...oldState.selectedFilters,
				game_version: newPatch,
			},
		}));
	}, []);

	const onMonitorFilterChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPageState((oldState) => ({
				...oldState,
				selectedFilters: {
					...oldState.selectedFilters,
					only_monitored: e.target.checked,
				},
			}));
		},
		[]
	);

	const initPage = useCallback(async () => {
		const filters = await getFilters();
		setPageState((oldState) => ({
			...oldState,
			loading: false,
			filters,
			selectedFilters: {
				...oldState.selectedFilters,
				game_version: filters[filters.length - 1].game_version,
			},
		}));
	}, []);

	const updateStats = useCallback(async () => {
		if (!pageState.selectedFilters) return;
		const stats = (await fetchStats({
			patch: pageState.selectedFilters.game_version ?? "",
			only_monitored: pageState.selectedFilters.only_monitored,
		})) ?? {
			nb_games: 0,
			stats: [],
		};
		setPageState((oldState) => ({ ...oldState, stats }));
	}, [pageState.selectedFilters]);

	useEffect(() => {
		initPage();
	}, []);

	useEffect(() => {
		updateStats();
	}, [pageState.selectedFilters]);

	if (pageState.loading) {
		return <></>;
	}

	return (
		<>
			<Filters
				onPatchFilterChange={onPatchFilterChange}
				onMonitoredFilterChange={onMonitorFilterChange}
				allFilters={pageState.filters}
				selectedFilters={pageState.selectedFilters}
			/>
			<StatsTableComponent data={pageState.stats} />
		</>
	);
};

export default StatsPage;
