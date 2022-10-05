import { getTraitsStats } from "client";
import ItemsStatsTable from "./TraitsStatsTable";
import StatsPage from "../common/StatsPage";

const TraitsStats = () => {
	return (
		<StatsPage
			fetchStats={getTraitsStats}
			StatsTableComponent={ItemsStatsTable}
		/>
	);
};

export default TraitsStats;
