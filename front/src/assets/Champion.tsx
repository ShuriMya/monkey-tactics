import { useCallback } from "react";
import { Unit } from "pages/PlayerProfile/MatchHistoryTable";
import Asset from "./Asset";
import allUnits from "./allUnits.json";

const getAssetBorderClass = (rarity: number) => {
	const colors = [
		"border-[#576272]",
		"border-[#18773f]",
		"border-[#1e81dd]",
		"border-[#2852e9]",
		"border-[#941782]",
		"border-[#7713f4]",
		"border-[#ee9213]",
		"border-[#ed6767]",
	];
	const borderColor = colors[rarity] || "border-[#000000]";

	return `border-2 ${borderColor} rounded-lg`;
};

const Champion = ({
	champion,
	className,
}: {
	champion: Pick<Unit, "name" | "rarity">;
	className?: string;
}) => {
	const getAsset = useCallback((name: string) => {
		return allUnits.find((unit) => unit.name === name);
	}, []);

	const asset = getAsset(champion.name);
	return (
		<Asset
			type="Champions"
			name={asset?.assetName ?? ""}
			className={`${className} ${getAssetBorderClass(champion.rarity)}`}
			title={asset?.displayName ?? champion.name}
		/>
	);
};

export default Champion;
