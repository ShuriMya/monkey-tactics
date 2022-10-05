import { getChampionsStats } from "client";
import ChampionStatsTable from "./ChampionStatsTable";
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
