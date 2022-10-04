import { useCallback } from "react";
import { Table } from "react-daisyui";
import { Champion } from "../../../assets";
import { units } from "../../../assets/Champion";
import StatsTable from "../common/StatsTable";

export type ChampionStatsData = {
	name: string;
	rarity: number;
	count: number;
	placement_avg: number;
};
export type ChampionsStatsData = {
	nb_games: number;
	stats: Array<ChampionStatsData>;
};

interface ChampionStatsRowProps {
	championStats: ChampionStatsData;
	totalGames: number;
}

interface ChampionStatsTableProps {
	data: ChampionsStatsData;
}

const ChampionStatsRow = ({
	championStats,
	totalGames,
}: ChampionStatsRowProps) => {
	return (
		<Table.Row>
			<span className="flex justify-items-center items-center">
				<Champion
					champion={{ name: championStats.name, rarity: championStats.rarity }}
					className="w-12 h-12 mr-3"
				/>
				{units[championStats.name]}
			</span>
			<span>{championStats.placement_avg.toFixed(2)}</span>
			<span>
				{championStats.count} (
				{((100 * championStats.count) / totalGames).toFixed(2)} %)
			</span>
		</Table.Row>
	);
};

const ChampionStatsTable = ({ data }: ChampionStatsTableProps) => {
	const headers: Array<{ name: string; sortField: keyof ChampionStatsData }> = [
		{
			name: "Unit",
			sortField: "name",
		},
		{ name: "Avg Place", sortField: "placement_avg" },
		{ name: "Played", sortField: "count" },
	];

	const renderRow = useCallback(
		(champion: ChampionStatsData) => (
			<ChampionStatsRow
				championStats={champion}
				totalGames={data.nb_games}
				key={champion.name}
			/>
		),
		[data.nb_games]
	);

	return <StatsTable data={data} columns={headers} renderRow={renderRow} />;
};

export default ChampionStatsTable;
