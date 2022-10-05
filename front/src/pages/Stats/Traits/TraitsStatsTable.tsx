import { useCallback } from "react";
import { Table } from "react-daisyui";

import { TraitImg } from "assets";
import { getTraitLevel } from "assets/TraitImg";
import allTraits from "assets/allTraits.json";

import StatsTable from "../common/StatsTable";

export type TraitStatsData = {
	name: string;
	num_units: number;
	count: number;
	placement_avg: number;
};
export type TraitsStatsData = {
	nb_games: number;
	stats: Array<TraitStatsData>;
};

interface TraitStatsRowProps {
	traitStats: TraitStatsData;
	totalGames: number;
}

interface TraitStatsTableProps {
	data: TraitsStatsData;
}

const TraitStatsRow = ({ traitStats, totalGames }: TraitStatsRowProps) => {
	const traitName = allTraits.find(
		(trait) => trait.name === traitStats.name
	)?.assetName;

	return (
		<Table.Row>
			<span className="flex justify-items-center items-center">
				<TraitImg
					trait={traitStats}
					traitLevel={getTraitLevel(traitStats.name, traitStats.num_units)}
				/>
				<span className="ml-2">{`${traitStats.num_units} ${traitName}`}</span>
			</span>
			<span>{traitStats.placement_avg.toFixed(2)}</span>
			<span>
				{traitStats.count} ({((100 * traitStats.count) / totalGames).toFixed(2)}
				%)
			</span>
		</Table.Row>
	);
};

const TraitStatsTable = ({ data }: TraitStatsTableProps) => {
	const headers: Array<{ name: string; sortField: keyof TraitStatsData }> = [
		{
			name: "Trait",
			sortField: "name",
		},
		{ name: "Avg Place", sortField: "placement_avg" },
		{ name: "Played", sortField: "count" },
	];

	const renderRow = useCallback(
		(dataRow: TraitStatsData) => (
			<TraitStatsRow
				traitStats={dataRow}
				totalGames={data.nb_games}
				key={dataRow.num_units + dataRow.name}
			/>
		),
		[data.nb_games]
	);

	return <StatsTable data={data} columns={headers} renderRow={renderRow} />;
};

export default TraitStatsTable;
