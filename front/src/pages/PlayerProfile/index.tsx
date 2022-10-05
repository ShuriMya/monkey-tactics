import { useCallback, useEffect, useState } from "react";
import { Progress, Stats } from "react-daisyui";
import { useParams } from "react-router-dom";
import { getProfile, getMatchHistory } from "client";
import { PlayersRankingData } from "pages/Leaderboard/PlayersRankings";
import MatchHistoryPagination from "./MatchHistoryPagination";
import MatchHistoryTable, { MatchHistory } from "./MatchHistoryTable";

export type PlayerProfile = PlayersRankingData;
export type MatchHistoryData = { count: number; results: MatchHistory };

interface PlayerProfileState {
	profile: PlayerProfile | undefined;
	matchHistory: MatchHistoryData | undefined;
	loading: boolean;
	page: number;
}

const PlayerProfile = () => {
	const [pageState, setPageState] = useState<PlayerProfileState>({
		profile: undefined,
		matchHistory: undefined,
		loading: true,
		page: 1,
	});
	const { playerName } = useParams();

	const updatePage = useCallback(
		(newPage: number) => async () => {
			if (!playerName) return;
			const matchHistory = await getMatchHistory(playerName, newPage);
			setPageState({
				...pageState,
				matchHistory,
				loading: false,
				page: newPage,
			});
			window.scrollTo(0, 0);
		},
		[playerName, pageState]
	);

	const fetchProfile = useCallback(async () => {
		if (!playerName) {
			setPageState({
				...pageState,
				profile: undefined,
				matchHistory: undefined,
				loading: true,
			});
		} else {
			const profile = await getProfile(playerName);
			const matchHistory = await getMatchHistory(playerName, pageState.page);
			setPageState({ ...pageState, profile, matchHistory, loading: false });
		}
	}, [playerName]);

	useEffect(() => {
		fetchProfile();
	}, []);

	if (pageState.loading) return <div>Loading...</div>;
	if (!pageState.profile) return <div>Player {playerName} not found</div>;

	const { profile } = pageState;
	const games = profile.tops + profile.bottoms;
	return (
		<>
			<div className="bg-base-300">
				<div>
					<div className="text-3xl font-bold">{playerName}</div>
					<div>
						{profile.tier} {profile.rank} - {profile.lp} LP
					</div>
				</div>
				<div>
					<Stats className="bg-base-200 stats-vertical">
						<Stats.Stat>
							<Stats.Stat.Item variant="title">Games played</Stats.Stat.Item>
							<Stats.Stat.Item variant="value">{games}</Stats.Stat.Item>
						</Stats.Stat>

						<Stats.Stat>
							<Stats.Stat.Item variant="title">Top 4s</Stats.Stat.Item>
							<Stats.Stat.Item variant="value">{profile.tops}</Stats.Stat.Item>
							<Stats.Stat.Item variant="desc" className="mt-1">
								<span>
									<Progress
										className="w-24 progress-primary mr-2"
										value={profile.tops / games}
									/>
									{((100 * profile.tops) / games).toFixed(1)} %
								</span>
							</Stats.Stat.Item>
						</Stats.Stat>
					</Stats>
				</div>
			</div>

			{pageState.matchHistory?.results.length ? (
				<div>
					<MatchHistoryTable
						data={pageState.matchHistory.results}
						playerName={playerName ?? ""}
					/>
					<MatchHistoryPagination
						count={pageState.matchHistory.count}
						currentPage={pageState.page}
						updatePage={updatePage}
					/>
				</div>
			) : (
				<div>No match found</div>
			)}
		</>
	);
};

export default PlayerProfile;
