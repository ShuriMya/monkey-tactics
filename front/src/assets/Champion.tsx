import { useCallback } from "react";
import { Unit } from "pages/PlayerProfile/MatchHistoryTable";
import Asset from "./Asset";

export const units: {
	[k: string]: string;
} = {
	TFT7_AoShin: "AoShin",
	TFT7_Aphelios: "Aphelios",
	TFT7_AurelionSol: "AurelionSol",
	TFT7_Bard: "Bard",
	TFT7_Braum: "Braum",
	TFT7_DragonBlue: "Daeja",
	TFT7_Diana: "Diana",
	TFT7_Ezreal: "Ezreal",
	TFT7_Gnar: "Gnar",
	TFT7_Graves: "Graves",
	TFT7_Hecarim: "Hecarim",
	TFT7b_Heimerdinger: "Heimerdinger",
	TFT7_DragonGold: "Idas",
	TFT7_Jax: "Jax",
	TFT7_Jayce: "Jayce",
	TFT7_Kaisa: "Kaisa",
	TFT7_Karma: "Karma",
	TFT7_LeeSin: "LeeSin",
	TFT7_Leona: "Leona",
	TFT7_Lillia: "Lillia",
	TFT7b_Lulu: "Lulu",
	TFT7_Lux: "Lux",
	TFT7_Malphite: "Malphite",
	TFT7_Nasus: "Nasus",
	TFT7_Nidalee: "Nidalee",
	TFT7_Nilah: "Nilah",
	TFT7_NomsyCannoneer: "Nomsy",
	TFT7_NomsyEvoker: "Nomsy",
	TFT7_NomsyMage: "Nomsy",
	TFT7_Nunu: "Nunu",
	TFT7_Olaf: "Olaf",
	TFT7_Pantheon: "Pantheon",
	TFT7_Qiyana: "Qiyana",
	TFT7_Rakan: "Rakan",
	TFT7_Rell: "Rell",
	TFT7_Rengar: "Rengar",
	TFT7_Sejuani: "Sejuani",
	TFT7_Senna: "Senna",
	TFT7_Seraphine: "Seraphine",
	TFT7_Sett: "Sett",
	TFT7_DragonGreen: "ShiOhYu",
	TFT7_Shyvana: "Shyvana",
	TFT7_Skarner: "Skarner",
	TFT7_AquaticDragon: "Sohm",
	TFT7_Soraka: "Soraka",
	TFT7_DragonSwain: "Swain",
	TFT7_DragonPurple: "Syfen",
	TFT7_Sylas: "Sylas",
	TFT7_Taliyah: "Taliyah",
	TFT7_DragonEarth: "Terra",
	TFT7b_Tristana: "Tristana",
	TFT7_Twitch: "Twitch",
	TFT7_Varus: "Varus",
	TFT7_Vladimir: "Vladimir",
	TFT7b_Volibear: "Volibear",
	TFT7_Wukong: "Wukong",
	TFT7_Xayah: "Xayah",
	TFT7_Yasuo: "Yasuo",
	TFT7_Yone: "Yone",
	TFT7_Zac: "Zac",
	TFT7_Zeri: "Zeri",
	TFT7_DragonGuild: "Zippy",
	TFT7_Zoe: "Zoe",
	TFT7_Zyra: "Zyra",
};

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
	const getAssetName = useCallback((name: string) => {
		return units[name] ?? "";
	}, []);

	const assetName = getAssetName(champion.name);

	return (
		<Asset
			type="Champions"
			name={assetName}
			className={`${className} ${getAssetBorderClass(champion.rarity)}`}
			title={assetName || champion.name}
		/>
	);
};

export default Champion;
