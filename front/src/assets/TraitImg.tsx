import { tr } from "date-fns/locale";
import { useCallback } from "react";
import { Trait } from "../pages/PlayerProfile/MatchHistoryTable";
import Asset from "./Asset";

export const traits: {
	[k: string]: {
		assetName: string;
		traitRequirements: Array<number | undefined>;
	};
} = {
	Set7_Assassin: {
		assetName: "Assassin",
		traitRequirements: [undefined, 4, 6],
	},
	Set7_Astral: {
		assetName: "Astral",
		traitRequirements: [5, 8, undefined],
	},
	Set7_Bard: {
		assetName: "Bard",
		traitRequirements: [undefined, 1, undefined],
	},
	Set7_Bruiser: { assetName: "Bruiser", traitRequirements: [4, 6, 8] },
	Set7_Cannoneer: {
		assetName: "Cannoneer",
		traitRequirements: [4, 6, undefined],
	},
	Set7_Cavalier: { assetName: "Cavalier", traitRequirements: [3, 5, 6] },
	Set7_Darkflight: {
		assetName: "Darkflight",
		traitRequirements: [4, 6, 8],
	},
	Set7_Dragon: {
		assetName: "Dragon",
		traitRequirements: [2, 5, undefined],
	},
	Set7_Dragonmancer: {
		assetName: "Dragonmancer",
		traitRequirements: [4, 6, 8],
	},
	Set7_Evoker: {
		assetName: "Evoker",
		traitRequirements: [3, 4, undefined],
	},
	Set7_Guardian: { assetName: "Guardian", traitRequirements: [4, 6, 8] },
	Set7_Guild: { assetName: "Guild", traitRequirements: [3, 7, 8] },
	Set7_Jade: { assetName: "Jade", traitRequirements: [5, 7, 9] },
	Set7_Lagoon: { assetName: "Lagoon", traitRequirements: [6, 9, 12] },
	Set7_Mage: { assetName: "Mage", traitRequirements: [5, 7, 9] },
	Set7_Mirage: { assetName: "Mirage", traitRequirements: [4, 6, 8] },
	Set7_Monolith: {
		assetName: "Monolith",
		traitRequirements: [undefined, 3, undefined],
	},
	Set7_Mystic: { assetName: "Mystic", traitRequirements: [3, 4, 5] },
	Set7_Prodigy: {
		assetName: "Prodigy",
		traitRequirements: [undefined, 3, undefined],
	},
	Set7_Ragewing: {
		assetName: "Ragewing",
		traitRequirements: [4, 8, undefined],
	},
	Set7_Scalescorn: {
		assetName: "Scalescorn",
		traitRequirements: [undefined, 4, 6],
	},
	Set7_Shapeshifter: {
		assetName: "Shapeshifter",
		traitRequirements: [undefined, 4, undefined],
	},
	Set7_Shimmerscale: {
		assetName: "Shimmerscale",
		traitRequirements: [5, 7, 9],
	},
	Set7_SpellThief: {
		assetName: "SpellThief",
		traitRequirements: [undefined, 1, undefined],
	},
	Set7_Starcaller: {
		assetName: "Starcaller",
		traitRequirements: [undefined, 1, undefined],
	},
	Set7_Swiftshot: {
		assetName: "Swiftshot",
		traitRequirements: [3, 4, 5],
	},
	Set7_Tempest: { assetName: "Tempest", traitRequirements: [4, 6, 8] },
	Set7_Warrior: {
		assetName: "Warrior",
		traitRequirements: [undefined, 4, 6],
	},
	Set7_Whispers: {
		assetName: "Whispers",
		traitRequirements: [4, 6, undefined],
	},
};

const getAssetBorderName = (traitLevel: number) => {
	return ["bronze", "silver", "gold", "prismatic"][traitLevel];
};

export const getTraitLevel = (traitName: string, numUnits: number) => {
	const traitData = traits[traitName];
	if (traitData === undefined) return -1;

	const traitRequirements = traitData.traitRequirements;
	let level = traitRequirements.length;
	while (level--) {
		const unitsReq = traitRequirements[level];
		if (unitsReq !== undefined && numUnits >= unitsReq) {
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
	trait: Trait;
	traitLevel: number;
	className?: string;
}) => {
	const getAsset = useCallback((name: string) => {
		return traits[name] ?? { assetName: "", traitRequirements: [] };
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
				name={asset.assetName}
				title={`${trait.num_units} ${asset.assetName}` || trait.name}
				className={`${className} h-[14px] w-[14px]`}
				extension="svg"
			/>
		</Asset>
	);
};

export default TraitImg;
