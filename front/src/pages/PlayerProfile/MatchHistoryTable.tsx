import { Table } from "react-daisyui";
import Augments from "./Augments";
import LittleLegend from "./LittleLegend";
import Placement from "./Placement";
import Traits from "./Traits";
import Units from "./Units";

export type MatchInfo = {
	id: string;
	queue_id: string;
	timestamp: string;
	game_length: number;
	game_version: string;
};

export type Unit = {
	name: string;
	stars: number;
	items: Array<{ id: number; name: string }>;
	rarity: number;
};

export type Trait = {
	name: string;
	max_tiers: number;
	num_units: number;
	tier: number;
};

export type Companion = {
	species: string;
	skin_ID: number;
	content_ID: string;
};

export type Comp = {
	companion: Companion;
	damage_to_players: number;
	gold_left: number;
	last_round: number;
	level: number;
	placement: number;
	time_eliminated: number;
	traits: Array<Trait>;
	units: Array<Unit>;
	augments: Array<{ name: string }>;
	player: {
		name: string;
		id: string;
	};
};

export type Match = {
	match_info: MatchInfo;
	comps: Array<Comp>;
};

export type MatchHistory = Array<Match>;

interface MatchHistoryTableProps {
	data: MatchHistory;
	playerName: string;
}

interface MatchHistoryRowProps {
	matchInfo: MatchInfo;
	comp: Comp;
}

const MatchHistoryRow = ({ matchInfo, comp }: MatchHistoryRowProps) => {
	return (
		<Table.Row className="flex-row justify-items-center items-center">
			<Placement placement={comp.placement} matchInfo={matchInfo} />
			<LittleLegend littleLegend={comp.companion} level={comp.level} />
			<Traits traits={comp.traits} />
			<Augments augments={comp.augments} />
			<Units units={comp.units} />
		</Table.Row>
	);
};

const MatchHistoryTable = ({ data, playerName }: MatchHistoryTableProps) => {
	return (
		<Table className="rounded-box w-full">
			<Table.Body>
				{data.map((match) => {
					const playerComp = match.comps.find(
						(comp) => comp.player.name === playerName
					);
					if (playerComp) {
						return (
							<MatchHistoryRow
								matchInfo={match.match_info}
								comp={playerComp}
								key={match.match_info.id}
							/>
						);
					}
				})}
			</Table.Body>
		</Table>
	);
};

export default MatchHistoryTable;
