import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { MatchInfo } from "./MatchHistoryTable";

interface PlacementProps {
	matchInfo: MatchInfo;
	placement: number;
}

const Placement = ({ placement, matchInfo }: PlacementProps) => {
	let placementColor: string;

	if (placement === 1) placementColor = "text-orange-400";
	else if (placement < 4) placementColor = "text-green-600";
	else if (placement < 5) placementColor = "text-blue-400";
	else placementColor = "text-zinc-400";
	const placementColorClass = `${placementColor} text-3xl`;

	return ((num: number) => {
		let ordinal: string;

		if (placement === 1) ordinal = "st";
		else if (placement === 2) ordinal = "nd";
		else if (placement === 3) ordinal = "rd";
		else ordinal = "th";

		return (
			<div className="text-center">
				<div className={placementColorClass}>
					<span>{num}</span>
					<sup>{ordinal}</sup>
				</div>
				<div className="text-sm font-normal">
					{formatDistanceToNowStrict(parseISO(matchInfo.timestamp), {
						addSuffix: true,
					})}
				</div>
			</div>
		);
	})(placement);
};

export default Placement;
