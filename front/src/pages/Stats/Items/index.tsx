import { getItemsStats } from "client";
import ItemsStatsTable from "./ItemsStatsTable";
import StatsPage from "../common/StatsPage";

const ItemsStats = () => {
	return (
		<StatsPage
			fetchStats={getItemsStats}
			StatsTableComponent={ItemsStatsTable}
		/>
	);
};

export default ItemsStats;
