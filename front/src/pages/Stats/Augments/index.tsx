import { getAugmentsStats } from "client";
import AugmentsStatsTable from "./AugmentsStatsTable";
import StatsPage from "../common/StatsPage";

const AugmentsStats = () => {
	return (
		<StatsPage
			fetchStats={getAugmentsStats}
			StatsTableComponent={AugmentsStatsTable}
		/>
	);
};

export default AugmentsStats;
