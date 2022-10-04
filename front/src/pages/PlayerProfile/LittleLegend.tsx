import { Avatar } from "react-daisyui";
import { Companion } from "./MatchHistoryTable";

interface LittleLegendProps {
	littleLegend: Companion;
	level: number;
}

const LittleLegend = ({ littleLegend, level }: LittleLegendProps) => {
	return (
		<Avatar>
			<>
				<div className="ring-1 ring-offset-base-100 ring-primary rounded-full w-12 h-12">
					<img
						src={`${import.meta.env.VITE_LITTLE_LEGENDS_ASSETS_URL}/${
							littleLegend.content_ID
						}.png`}
					/>
				</div>
				<div className="ring-1 ring-primary rounded-full w-5 h-5 absolute -bottom-1 -right-1 bg-neutral">
					<span>{level}</span>
				</div>
			</>
		</Avatar>
	);
};

export default LittleLegend;
