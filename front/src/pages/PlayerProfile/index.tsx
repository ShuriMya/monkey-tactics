import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile, getMatchHistory } from "client";
import MatchHistoryPagination from "./MatchHistoryPagination";
import MatchHistoryTable, { MatchHistory } from "./MatchHistoryTable";
import PlayerProfileHeader, { PlayerProfileData } from "./PlayerProfileHeader";

export type MatchHistoryData = { count: number; results: MatchHistory };

interface PlayerProfileState {
	profile: PlayerProfileData | undefined;
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
	const { playerName = "" } = useParams();

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
			<PlayerProfileHeader
				playerName={playerName}
				profile={profile}
				games={games}
			/>

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
