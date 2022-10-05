import { useCallback } from "react";
import { Table } from "react-daisyui";

import { Item } from "assets";
import allItems from "assets/allItems.json";

import StatsTable from "../common/StatsTable";

export type ItemStatsData = {
	id: number;
	count: number;
	placement_avg: number;
};
export type ItemsStatsData = {
	nb_games: number;
	stats: Array<ItemStatsData>;
};

interface ItemStatsRowProps {
	itemStats: ItemStatsData;
	totalGames: number;
}

interface ItemStatsTableProps {
	data: ItemsStatsData;
}

const ItemStatsRow = ({ itemStats, totalGames }: ItemStatsRowProps) => {
	const itemName =
		allItems.find((item) => item.id === itemStats.id)?.displayName ?? "";

	return (
		<Table.Row>
			<span className="flex justify-items-center items-center">
				<Item itemId={itemStats.id} itemName={itemName} className="h-10 w-10" />
				<span className="ml-3">{itemName}</span>
			</span>
			<span>{itemStats.placement_avg.toFixed(2)}</span>
			<span>
				{itemStats.count} ({((100 * itemStats.count) / totalGames).toFixed(2)}
				%)
			</span>
		</Table.Row>
	);
};

const ItemStatsTable = ({ data }: ItemStatsTableProps) => {
	const headers: Array<{ name: string; sortField: keyof ItemStatsData }> = [
		{
			name: "Item",
			sortField: "id",
		},
		{ name: "Avg Place", sortField: "placement_avg" },
		{ name: "Played", sortField: "count" },
	];

	const renderRow = useCallback(
		(dataRow: ItemStatsData) => (
			<ItemStatsRow
				itemStats={dataRow}
				totalGames={data.nb_games}
				key={dataRow.id}
			/>
		),
		[data.nb_games]
	);

	return <StatsTable data={data} columns={headers} renderRow={renderRow} />;
};

export default ItemStatsTable;
