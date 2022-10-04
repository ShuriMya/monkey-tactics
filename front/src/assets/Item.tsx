import { useCallback } from "react";
import Asset from "./Asset";

const Item = ({
	itemId,
	itemName,
	className,
}: {
	itemId: number;
	itemName: string;
	className?: string;
}) => {
	const getAsset = useCallback((itemId: number) => {
		return [
			{ id: 34, displayName: "Archangel's Staff", imgName: "ArchangelsStaff" },
			{ id: 2325, displayName: "Assassin Emblem", imgName: "AssassinEmblem" },
			{ id: undefined, displayName: "Astral Emblem", imgName: "AstralEmblem" },
			{ id: 79, displayName: "Banshee’s Claw", imgName: "BansheesClaw" },
			{ id: 1, displayName: "B.F. Sword", imgName: "BFSword" },
			{ id: 44, displayName: "Blue Buff", imgName: "BlueBuff" },
			{ id: 2, displayName: "Recurve Bow", imgName: "Bow" },
			{ id: 55, displayName: "Bramble Vest", imgName: "Bramble" },
			{ id: 2305, displayName: "Bruiser Emblem", imgName: "BruiserEmblem" },
			{ id: 16, displayName: "Bloodthirster", imgName: "BT" },
			{
				id: 2301,
				displayName: "Cannoneer Emblem",
				imgName: "CannoneerEmblem",
			},
			{
				id: 2307,
				displayName: "Cavalier Emblem",
				imgName: "CavalierEmblem",
			},
			{ id: 5, displayName: "Chain Vest", imgName: "ChainVest" },
			{ id: 46, displayName: "Chalice of Power", imgName: "Chalice" },
			{
				id: 3008,
				displayName: "Crown of Champions",
				imgName: "CrownofChampions",
			},
			{ id: 11, displayName: "Deathblade", imgName: "DB" },
			{
				id: 3005,
				displayName: "Determined Investor",
				imgName: "DeterminedInvestor",
			},
			{
				id: 2101,
				displayName: "Darkflight Emblem",
				imgName: "DarkflightEmblem",
			},
			{ id: 3006, displayName: "Diamond Hands", imgName: "DiamondHands" },
			{ id: 3050, displayName: "Darkflight Essence", imgName: "3050" },
			{
				id: 2426,
				displayName: "Dragonmancer Emblem",
				imgName: "DragonmancerEmblem",
			},
			{
				id: undefined,
				displayName: "Dragon Blessing",
				imgName: "DragonmancersBlessing",
			},
			{ id: 66, displayName: "Dragon's Claw", imgName: "DragonsClaw" },
			{ id: 3001, displayName: " Draven's Axe", imgName: "DravensAxe" },
			{ id: 94, displayName: "Edge of Night", imgName: "EdgeOfNight" },
			{ id: 2317, displayName: "Evoker Emblem", imgName: "EvokerEmblem" },
			{
				id: 45,
				displayName: "Protector's Vow",
				imgName: "Fimbulwinter",
			},
			{
				id: 88,
				displayName: "Tactician's Crown",
				imgName: "ForceofNature",
			},
			{ id: 3004, displayName: "Gambler's Blade", imgName: "GamblersBlade" },
			{ id: 7, displayName: "Giant's Belt", imgName: "GiantsBelt" },
			{ id: 12, displayName: "Giant Slayer", imgName: "GiantSlayer" },
			{ id: 9, displayName: "Sparring Gloves", imgName: "Glove" },
			{
				id: 3003,
				displayName: "Goldmancer's Staff",
				imgName: "GoldmancersStaff",
			},
			{
				id: 2323,
				displayName: "Guardian Emblem",
				imgName: "GuardianEmblem",
			},
			{ id: 2318, displayName: "Guild Emblem", imgName: "GuildEmblem" },
			{
				id: 23,
				displayName: "Guinsoo's Rageblade",
				imgName: "GuinsoosRageblade",
			},
			{ id: 13, displayName: "Hextech Gunblade", imgName: "HextechGunblade" },
			{ id: 49, displayName: "Hand of Justice", imgName: "HOJ" },
			{ id: 19, displayName: "Infinity Edge", imgName: "InfinityEdge" },
			{ id: 36, displayName: "Ionic Spark", imgName: "IonicSpark" },
			{ id: 2324, displayName: "Jade Emblem", imgName: "JadeEmblem" },
			{ id: 2100, displayName: "Lagoon Emblem", imgName: "LagoonEmblem" },
			{ id: 29, displayName: "Last Whisper", imgName: "LastWhisper" },
			{
				id: 35,
				displayName: "Locket of the Iron Solari",
				imgName: "Locket",
			},
			{ id: 2311, displayName: "Mage Emblem", imgName: "MageEmblem" },
			{ id: 2314, displayName: "Mirage Emblem", imgName: "MirageEmblem" },
			{ id: 3000, displayName: "Mogul's Mail", imgName: "MogulsMail" },
			{ id: 37, displayName: "Morellonomicon", imgName: "Morellonomicon" },
			{ id: 2312, displayName: "Mystic Emblem", imgName: "MysticEmblem" },
			{
				id: 3002,
				displayName: "Needlessly Big Gem",
				imgName: "NeedlesslyBigGem",
			},
			{
				id: 3,
				displayName: "Needlessly Large Rod",
				imgName: "NeedlesslyLargeRod",
			},
			{ id: 6, displayName: "Negatron Cloak", imgName: "NegatronCloak" },
			{
				id: 9006,
				displayName: "Obsidian Cleaver",
				imgName: "OrnnItemBlackCleaver",
			},
			{
				id: 9002,
				displayName: "Death's Defiance",
				imgName: "OrnnItemDeathsDance",
			},
			{
				id: 9003,
				displayName: "Eternal Winter",
				imgName: "OrnnItemEverfrost",
			},
			{ id: 9005, displayName: "Manazane", imgName: "OrnnItemMuramana" },
			{
				id: 9007,
				displayName: "Randuin's Sanctum",
				imgName: "OrnnItemRanduinsOmen",
			},
			{
				id: 9008,
				displayName: "Rocket-Propelled Fist",
				imgName: "OrnnItemRocketPropelledFist",
			},
			{
				id: 9001,
				displayName: "Anima Visage",
				imgName: "OrnnItemSpiritVisage",
			},
			{
				id: 9009,
				displayName: "Gold Collector",
				imgName: "OrnnItemTheCollector",
			},
			{
				id: 9004,
				displayName: "Infinity Force",
				imgName: "OrnnItemTrinityForce",
			},
			{
				id: 9010,
				displayName: "Zhonya's Paradox",
				imgName: "OrnnItemZhonyasHourglass",
			},
			{ id: 69, displayName: "Quicksilver", imgName: "Quicksilver" },
			{
				id: 33,
				displayName: "Rabadon's Deathcap",
				imgName: "RabadonsDeathcap",
			},
			{
				id: 2034,
				displayName: "Urf-Angel's Staff",
				imgName: "RadientArchangelsStaff",
			},
			{
				id: 2079,
				displayName: "Banshee's Silence",
				imgName: "RadientBansheesClaw",
			},
			{
				id: 2016,
				displayName: "Blessed Bloodthirster",
				imgName: "RadientBloodthirster",
			},
			{
				id: 2044,
				displayName: "Blue Blessing",
				imgName: "RadientBlueBuff",
			},
			{
				id: 2055,
				displayName: "Rosethorn Vest",
				imgName: "RadientBrambleVest",
			},
			{
				id: 2046,
				displayName: "Chalice of Charity",
				imgName: "RadientChaliceofPower",
			},
			{
				id: 2011,
				displayName: "Luminous Deathblade",
				imgName: "RadientDeathblade",
			},
			{
				id: 2066,
				displayName: "Dragon's Will",
				imgName: "RadientDragonsClaw",
			},
			{
				id: 2015,
				displayName: "Brink of Dawn",
				imgName: "RadientEdgeofNight",
			},
			{
				id: 2056,
				displayName: "Dvarapala Stoneplate",
				imgName: "RadientGargoyleStoneplate",
			},
			{
				id: 2012,
				displayName: "Demon Slayer",
				imgName: "RadientGiantSlayer",
			},
			{
				id: 2023,
				displayName: "Guinsoo's Reckoning",
				imgName: "RadientGuinsoosRageblade",
			},
			{
				id: 2049,
				displayName: "Fist of Fairness",
				imgName: "RadientHandofJustice",
			},
			{
				id: 2013,
				displayName: "Hextech Lifeblade",
				imgName: "RadientHextechGunblade",
			},
			{
				id: 2019,
				displayName: "Zenith Edge",
				imgName: "RadientInfinityEdge",
			},
			{
				id: 2036,
				displayName: "Covalent Spark",
				imgName: "RadientIonicSpark",
			},
			{
				id: 2039,
				displayName: "Glamorous Gauntlet",
				imgName: "RadientJeweledGauntlet",
			},
			{
				id: 2029,
				displayName: "Eternal Whisper",
				imgName: "RadientLastWhisper",
			},
			{
				id: 2035,
				displayName: "Locket of Targon Prime",
				imgName: "RadientLocketoftheIronSolari",
			},
			{
				id: 2037,
				displayName: "More More-ellonomicon",
				imgName: "RadientMorellonomicon",
			},
			{
				id: 2069,
				displayName: "Quickestsilver",
				imgName: "RadientQuicksilver",
			},
			{
				id: 2033,
				displayName: "Rabadon's Ascended Deathcap",
				imgName: "RadientRabadonsDeathcap",
			},
			{
				id: 2022,
				displayName: "Rapid Lightcannon",
				imgName: "RadientRapidFirecannon",
			},
			{
				id: 2047,
				displayName: "Absolution",
				imgName: "RadientRedemption",
			},
			{
				id: 2026,
				displayName: "Runaan's Tempest",
				imgName: "RadientRunaansHurricane",
			},
			{
				id: 2059,
				displayName: "Shroud of Reverance",
				imgName: "RadientShroudofStillness",
			},
			{
				id: 2014,
				displayName: "Spear of Hirana",
				imgName: "RadientSpearofShojin",
			},
			{
				id: 2024,
				displayName: "Statikk Favor",
				imgName: "RadientStatikkShiv",
			},
			{
				id: 2057,
				displayName: "Sunlight Cape",
				imgName: "RadientSunfireCape",
			},
			{
				id: 2099,
				displayName: "Rascal's Gloves",
				imgName: "RadientThiefsGloves",
			},
			{
				id: 2025,
				displayName: "Titan's Vow",
				imgName: "RadientTitansResolve",
			},
			{
				id: 2077,
				displayName: "Warmog's Pride",
				imgName: "RadientWarmogsArmor",
			},
			{
				id: 2017,
				displayName: "Zeke's Harmony",
				imgName: "RadientZekesHerald",
			},
			{
				id: 2045,
				displayName: "Bulwark's Oath",
				imgName: "RadiantFimbulwinter",
			},
			{ id: 2067, displayName: "Mistral", imgName: "RadientZephyr" },
			{
				id: 2027,
				displayName: "Zz'Rots Invitation",
				imgName: "RadientZzRotPortal",
			},
			{
				id: undefined,
				displayName: "Ragewing Emblem",
				imgName: "RagewingEmblem",
			},
			{ id: 47, displayName: "Redemption", imgName: "Redemption" },
			{ id: 22, displayName: "Rapid Firecannon", imgName: "RFC" },
			{
				id: 26,
				displayName: "Runaan's Hurricane",
				imgName: "RunaansHurricane",
			},
			{
				id: 2300,
				displayName: " Scalescorn Emblem",
				imgName: "ScalescornEmblem",
			},
			{
				id: 2302,
				displayName: "Shimmerscale Emblem",
				imgName: "ShimmerscaleEmblem",
			},
			{ id: 14, displayName: "Spear of Shojin", imgName: "Shojin" },
			{ id: 59, displayName: "Shroud of Stillness", imgName: "Shroud" },
			{ id: 8, displayName: "Spatula", imgName: "Spatula" },
			{ id: 39, displayName: "Jeweled Gauntlet", imgName: "Spellcrit" },
			{ id: 24, displayName: "Statikk Shiv", imgName: "StatikkShiv" },
			{ id: 56, displayName: "Gargoyle Stoneplate", imgName: "Stoneplate" },
			{ id: 57, displayName: "Sunfire Cape", imgName: "SunfireCape" },
			{
				id: 2313,
				displayName: "Swiftshot Emblem",
				imgName: "SwiftshotEmblem",
			},
			{ id: 4, displayName: "Tear of the Goddess", imgName: "Tear" },
			{
				id: 2310,
				displayName: "Tempest Emblem",
				imgName: "TempestEmblem",
			},
			{ id: 99, displayName: "Thief's Gloves", imgName: "ThiefsGloves" },
			{ id: 25, displayName: "Titan’s Resolve", imgName: "TitansResolve" },
			{ id: 77, displayName: "Warmog's Armor", imgName: "Warmog" },
			{ id: 2308, displayName: "Warrior Emblem", imgName: "WarriorEmblem" },
			{ id: 2303, displayName: "Whispers Emblem", imgName: "WhispersEmblem" },
			{ id: 17, displayName: "Zeke's Herald", imgName: "ZekesHerald" },
			{ id: 67, displayName: "Zephyr", imgName: "Zephyr" },
			{ id: 27, displayName: "Zz'Rot Portal", imgName: "ZzRotPortal" },
		].find((asset) => asset.id === itemId);
	}, []);

	const asset = getAsset(itemId);

	return (
		<Asset
			type="Items"
			name={asset?.imgName ?? ""}
			title={asset?.displayName ?? `${itemId} ${itemName}`}
			className={className}
		/>
	);
};

export default Item;
