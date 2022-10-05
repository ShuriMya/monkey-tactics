import { Rating } from "react-daisyui";
import { Champion } from "assets";
import Item from "assets/Item";
import { Comp } from "./MatchHistoryTable";

interface UnitsProps {
	units: Comp["units"];
}

const Units = ({ units }: UnitsProps) => {
	return (
		<div className="flex text-center">
			{units
				.sort((unit1, unit2) => {
					const starsCompare = unit2.stars - unit1.stars;
					const tierCompare = unit2.rarity - unit1.rarity;

					if (starsCompare !== 0) return starsCompare;
					if (tierCompare !== 0) return tierCompare;

					return unit2.items.length - unit1.items.length;
				})
				.map((unit, idx) => (
					<div
						className="w-12 h-full m-1"
						key={unit.name + unit.stars + unit.items.join() + idx}
					>
						<Rating>
							{Array(unit.stars)
								.fill(null)
								.map(() => (
									<Rating.Item className="mask mask-star w-3 h-3" />
								))}
						</Rating>
						<Champion champion={unit} className="w-12 h-12" />
						<div className="flex text-center">
							{unit.items.map(({ id, name }, idx) => (
								<Item
									itemId={id}
									itemName={name}
									key={name + idx}
									className="flex w-4 h-4"
								/>
							))}
						</div>
					</div>
				))}
		</div>
	);
};

export default Units;
