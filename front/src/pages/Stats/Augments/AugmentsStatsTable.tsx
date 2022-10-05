import { useCallback } from "react";
import { Table } from "react-daisyui";

import Augment from "assets/Augments";
import allAugments from "assets/allAugments.json";
import StatsTable from "../common/StatsTable";

export type AugmentStatsData = {
	name: string;
	count: number;
	placement_avg: number;
};
export type AugmentsStatsData = {
	nb_games: number;
	stats: Array<AugmentStatsData>;
};

interface ChampionStatsRowProps {
	augmentStats: AugmentStatsData;
	totalGames: number;
}

interface ChampionStatsTableProps {
	data: AugmentsStatsData;
}

const ChampionStatsRow = ({
	augmentStats,
	totalGames,
}: ChampionStatsRowProps) => {
	return (
		<Table.Row>
			<span className="flex justify-items-center items-center">
				<Augment
					augmentName={augmentStats.name}
					className="w-[32px] h-[32px] mr-4"
				/>
				{
					allAugments.find(
						(allAugment) => allAugment.name === augmentStats.name
					)?.displayName
				}
			</span>
			<span>{augmentStats.placement_avg.toFixed(2)}</span>
			<span>
				{augmentStats.count} (
				{((100 * augmentStats.count) / totalGames).toFixed(2)} %)
			</span>
		</Table.Row>
	);
};

const ChampionStatsTable = ({ data }: ChampionStatsTableProps) => {
	const headers: Array<{ name: string; sortField: keyof AugmentStatsData }> = [
		{
			name: "Augment",
			sortField: "name",
		},
		{ name: "Avg Place", sortField: "placement_avg" },
		{ name: "Played", sortField: "count" },
	];

	const renderRow = useCallback(
		(dataRow: AugmentStatsData) => (
			<ChampionStatsRow
				augmentStats={dataRow}
				totalGames={data.nb_games}
				key={dataRow.name}
			/>
		),
		[data.nb_games]
	);

	return <StatsTable data={data} columns={headers} renderRow={renderRow} />;
};

export default ChampionStatsTable;
