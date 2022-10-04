import { Table } from "react-daisyui";
import { Champion } from "../../assets";
import { units } from "../../assets/Champion";

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
			<span>{championStats.count}</span>
			<span>{((100 * championStats.count) / totalGames).toFixed(2)} %</span>
			<span>{championStats.placement_avg.toFixed(2)}</span>
		</Table.Row>
	);
};

const ChampionStatsTable = ({ data }: ChampionStatsTableProps) => {
	return (
		<Table className="rounded-box w-full">
			<Table.Head>
				<span>Unit</span>
				<span>Played</span>
				<span>Play Rate</span>
				<span>Average Placement</span>
			</Table.Head>
			<Table.Body>
				{data.stats.map((champion) => (
					<ChampionStatsRow
						championStats={champion}
						totalGames={data.nb_games}
						key={champion.name}
					/>
				))}
			</Table.Body>
		</Table>
	);
};

export default ChampionStatsTable;
