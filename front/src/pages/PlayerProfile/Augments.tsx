import { Comp } from "./MatchHistoryTable";
import Augment from "assets/Augments";

interface AugmentsProps {
	augments: Comp["augments"];
}

const Augments = ({ augments }: AugmentsProps) => {
	return (
		<div className="flex text-center items-center h-full w-full">
			{augments.map((augment) => (
				<div className="flex-col w-8 h-8 m-1" key={augment.name}>
					<Augment augmentName={augment.name} className="w-full h-full" />
				</div>
			))}
		</div>
	);
};

export default Augments;
