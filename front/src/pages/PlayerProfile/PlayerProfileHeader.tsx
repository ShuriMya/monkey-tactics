import { Progress, Stats } from "react-daisyui";

import Rank from "assets/Rank";
import { PlayersRankingData } from "pages/Leaderboard/PlayersRankings";

export type PlayerProfileData = PlayersRankingData & {
	wins: number;
	avg_place: number;
};

interface PlayerProfileHeaderProps {
	playerName: string;
	profile: PlayerProfileData;
	games: number;
}

const PlayerProfileHeader = ({
	playerName,
	profile,
	games,
}: PlayerProfileHeaderProps) => {
	return (
		<div>
			<div className="text-3xl font-bold p-6 mb-3 bg-base-300 text-center">
				{playerName}
			</div>

			<div className="grid grid-cols-12 gap-3">
				<div className="bg-base-300 p-4 col-span-4">
					<div className="mb-4 flex flex-col items-center">
						<Rank rank={profile.tier} />
						<div>
							<div>
								{profile.tier} {profile.rank}
							</div>
							<div>{profile.lp} LP</div>
						</div>
					</div>

					<Stats className="bg-base-200 stats-vertical mr-1">
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

					<Stats className="bg-base-200 stats-vertical ml-1">
						<Stats.Stat>
							<Stats.Stat.Item variant="title">Average Place</Stats.Stat.Item>
							<Stats.Stat.Item variant="value">
								{profile.avg_place.toFixed(2)}
							</Stats.Stat.Item>
						</Stats.Stat>

						<Stats.Stat>
							<Stats.Stat.Item variant="title">Wins</Stats.Stat.Item>
							<Stats.Stat.Item variant="value">{profile.wins}</Stats.Stat.Item>
							<Stats.Stat.Item variant="desc" className="mt-1">
								<span>
									<Progress
										className="w-24 progress-primary mr-2"
										value={profile.wins / games}
									/>
									{((100 * profile.wins) / games).toFixed(1)} %
								</span>
							</Stats.Stat.Item>
						</Stats.Stat>
					</Stats>
				</div>
				<div className="col-span-8 bg-base-300 p-4">
					<div>XXX</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default PlayerProfileHeader;
