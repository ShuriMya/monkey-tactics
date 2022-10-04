import { useCallback, useEffect, useState } from "react";
import { getFilters } from "../../../client";
import Filters, { PatchFilters } from "../common/Filters";

interface StatsPageData<StatsDataT> {
	nb_games: number;
	stats: Array<StatsDataT>;
}

interface StatsPageState<StatsDataT> {
	stats: StatsPageData<StatsDataT>;
	filters: PatchFilters;
	selectedFilter: string | undefined;
	loading: boolean;
}

interface StatsPageProps<StatsDataT> {
	fetchStats: (filters: {
		patch: string;
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
		const stats = (await fetchStats({
			patch: pageState.selectedFilter,
		})) ?? {
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
		return <></>;
	}

	return (
		<>
			<Filters
				onPatchFilterChange={onPatchFilterChange}
				allFilters={pageState.filters}
				selectedFilter={pageState.selectedFilter || ""}
			/>
			<StatsTableComponent data={pageState.stats} />
		</>
	);
};

export default StatsPage;
