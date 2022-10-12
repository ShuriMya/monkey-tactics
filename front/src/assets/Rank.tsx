import { PlayerProfileData } from "pages/PlayerProfile/PlayerProfileHeader";
import Asset from "./Asset";

interface RankProps {
	rank: PlayerProfileData["tier"];
	className?: string;
}

const getRankAssetName = (rank: PlayerProfileData["tier"]) => {
	return rank.split(" ")[0].toLowerCase();
};

const Rank = ({ rank, className }: RankProps) => {
	return (
		<Asset type="Ranks" name={getRankAssetName(rank)} className={className} />
	);
};

export default Rank;
