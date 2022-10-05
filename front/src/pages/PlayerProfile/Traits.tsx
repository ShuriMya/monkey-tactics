import { Comp } from "./MatchHistoryTable";
import { TraitImg } from "assets";
import { getTraitLevel } from "assets/TraitImg";

interface TraitsProps {
	traits: Comp["traits"];
}

const Traits = ({ traits }: TraitsProps) => {
	return (
		<div className="flex text-center items-center h-full w-full">
			{traits
				.sort((trait1, trait2) => {
					const tierCompare =
						getTraitLevel(trait2.name, trait2.num_units) -
						getTraitLevel(trait1.name, trait1.num_units);
					if (tierCompare !== 0) return tierCompare;
					return trait2.num_units - trait1.num_units;
				})
				.map((trait) => (
					<div className="flex-col w-5 h-5 m-1" key={trait.name}>
						<TraitImg
							trait={trait}
							traitLevel={getTraitLevel(trait.name, trait.num_units)}
						/>
						<div className="text-xs pt-1">{trait.num_units}</div>
					</div>
				))}
		</div>
	);
};

export default Traits;
