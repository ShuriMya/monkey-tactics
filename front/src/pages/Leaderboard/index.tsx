import { useCallback, useEffect, useState } from "react";

import PlayersRankings, { PlayersRankingData } from "./PlayersRankings";
import { getLeaderboard } from "../../client";

const Leaderboard = () => {
	const [leaderboard, setLeaderboard] = useState<Array<PlayersRankingData>>([]);

	const fetchLeaderboard = useCallback(async () => {
		const res = await getLeaderboard();
		setLeaderboard(res);
	}, []);

	useEffect(() => {
		fetchLeaderboard();
	}, []);

	return (
		<>
			<PlayersRankings data={leaderboard} />
		</>
	);
};

export default Leaderboard;
