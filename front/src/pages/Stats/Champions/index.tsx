import { getChampionsStats } from "../../../client";
import ChampionStatsTable, { ChampionsStatsData } from "./ChampionStatsTable";
import { PatchFilters } from "../common/Filters";
import StatsPage from "../common/StatsPage";

const ChampionsStats = () => {
	return (
		<StatsPage
			fetchStats={getChampionsStats}
			StatsTableComponent={ChampionStatsTable}
		/>
	);
};
export default ChampionsStats;
