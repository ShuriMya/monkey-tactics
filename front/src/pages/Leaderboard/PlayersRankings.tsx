import { useCallback } from "react";
import { Table } from "react-daisyui";
import { Link } from "react-router-dom";

export type PlayersRankingData = {
	player: string;
	tier: string;
	rank: number;
	lp: number;
	tops: number;
	bottoms: number;
};

interface PlayersRankingProps {
	ranking: PlayersRankingData;
}

interface PlayersRankingsProps {
	data: Array<PlayersRankingData>;
}

const PlayerRanking = ({ ranking }: PlayersRankingProps) => {
	const formatRank = useCallback(() => {
		if (["CHALLENGER", "GRANDMASTER", "MASTER"].includes(ranking.tier)) {
			return ranking.tier;
		}
		return `${ranking.tier} ${ranking.rank}`;
	}, [ranking]);

	return (
		<Table.Row className="hover">
			<Link className="hover:underline" to={ranking.player}>
				{ranking.player}
			</Link>
			<div>{formatRank()}</div>
			<div>{ranking.lp}</div>
			<div>{ranking.tops + ranking.bottoms}</div>
			<div>{ranking.tops}</div>
			<div>
				{((100 * ranking.tops) / (ranking.tops + ranking.bottoms)).toFixed(1)}%
			</div>
		</Table.Row>
	);
};

const PlayersRankings = ({ data }: PlayersRankingsProps) => {
	return (
		<Table className="table-zebra w-full text-center">
			<Table.Head>
				<span>Player</span>
				<span>Tier</span>
				<span>LP</span>
				<span>Played</span>
				<span>Top 4</span>
				<span>Top 4 %</span>
			</Table.Head>
			<Table.Body>
				{data.map((ranking) => (
					<PlayerRanking ranking={ranking} key={ranking.player} />
				))}
			</Table.Body>
		</Table>
	);
};

export default PlayersRankings;
