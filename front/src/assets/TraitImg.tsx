import { useCallback } from "react";
import { Trait } from "pages/PlayerProfile/MatchHistoryTable";
import Asset from "./Asset";
import allTraits from "./allTraits.json";

const getAssetBorderName = (traitLevel: number) => {
	return ["bronze", "silver", "gold", "prismatic"][traitLevel];
};

export const getTraitLevel = (traitName: string, numUnits: number) => {
	const traitData = allTraits.find((trait) => trait.name === traitName);
	if (traitData === undefined) return -1;

	const traitRequirements = traitData.traitRequirements;
	let level = traitRequirements.length;
	while (level--) {
		const unitsReq = traitRequirements[level];
		if (unitsReq !== null && numUnits >= unitsReq) {
			return level + 1;
		}
	}

	return 0;
};

const TraitImg = ({
	trait,
	traitLevel,
	className,
}: {
	trait: Pick<Trait, "name" | "num_units">;
	traitLevel: number;
	className?: string;
}) => {
	const getAsset = useCallback((name: string) => {
		return allTraits.find((trait) => trait.name === name);
	}, []);

	const asset = getAsset(trait.name);
	const assetColor = getAssetBorderName(traitLevel);

	return (
		<Asset
			className={`${assetColor} h-[24px] w-[24px] justify-center items-center flex`}
			type="TraitBorders"
			name={assetColor}
			extension="svg"
			asBackground
		>
			<Asset
				type="Traits"
				name={asset?.assetName ?? trait.name}
				title={`${trait.num_units} ${asset?.assetName}` || trait.name}
				className={`${className} h-[14px] w-[14px]`}
				extension="svg"
			/>
		</Asset>
	);
};

export default TraitImg;
