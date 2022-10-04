import { useCallback } from "react";
import Asset from "./Asset";

export const allAugments = [
	{
		name: "TFT7_Augment_AFK",
		displayName: "AFK",
		imgName: "AFK_1653546570",
	},
	{
		name: "TFT7_Augment_AgeOfDragons",
		displayName: "Age Of Dragons",
		imgName: "AgeofDragons_1661401711-age-of-dragons-iii -1-",
	},
	{
		name: "TFT6_Augment_TomeOfTraits1",
		displayName: "Ancient Archives",
		imgName: "TomeOfTraits1_1654642044",
	},
	{
		name: "TFT7_Augment_TomeOfTraits2",
		displayName: "Ancient Archives II",
		imgName: "AncientArchivesII_1653545006",
	},
	{
		name: "TFT6_Augment_Ascension",
		displayName: "Ascension",
		imgName: "Ascension_1655945403",
	},
	{
		name: "TFT7_Augment_AssassinCutthroat",
		displayName: "Cutthroat",
		imgName: "AssassinCutthroat_1656045252",
	},
	{
		name: "TFT7_Augment_AssassinEmblem",
		displayName: "Assassin Crest",
		imgName: "assassinemblem2-tft_set6",
	},
	{
		name: "TFT7_Augment_AssassinEmblem2",
		displayName: "Assassin Crown",
		imgName: "assassinemblem3-tft_set6",
	},
	{
		name: "TFT7_Augment_AssassinTrait",
		displayName: "Assassin Heart",
		imgName: "assassinheart1-tft_set6",
	},
	{
		name: "",
		displayName: "Astral Heart",
		imgName: "AstralHeart_1655945450",
	},
	{
		name: "TFT7_Augment_AxiomArc1",
		displayName: "Axiom Arc I",
		imgName: "AxiomArcI_1653545056",
	},
	{
		name: "TFT7_Augment_AxiomArc2",
		displayName: "Axiom Arc II",
		imgName: "AxiomArcII_1653545065",
	},
	{
		name: "TFT7_Augment_BandOfThieves1",
		displayName: "Band of Thieves I ",
		imgName: "BandofThievesI_1653545314",
	},
	{
		name: "TFT6_Augment_BandOfThieves2",
		displayName: "Band of Thieves II",
		imgName: "bandthieves3-tft_set6",
	},
	{
		name: "TFT6_Augment_Battlemage1",
		displayName: "Battlemage I",
		imgName: "BattlemageI_1662627650-battlemage-i-a.tft_set7.5",
	},
	{
		name: "TFT6_Augment_Battlemage2",
		displayName: "Battlemage II",
		imgName: "BattlemageII_1662627791-battlemage-ii-a.tft_set7.5",
	},
	{
		name: "TFT6_Augment_Battlemage3",
		displayName: "Battlemage III",
		imgName: "BattlemageIII_1662628186-battlemage-iii-a.tft_set7.5",
	},
	{
		name: "TFT7_Augment_ScalescornBaseCamp",
		displayName: "Base Camp",
		imgName: "BaseCamp_1661402195-nomads-ii-tft_set7 -1- -1-",
	},
	{
		name: "TFT7_Augment_ShapeshifterBeastsDen",
		displayName: "Beast's Den",
		imgName: "BeastsDen_1653546288",
	},
	{
		name: "TFT7_Augment_BestFriends1",
		displayName: "Best Friends I",
		imgName: "BestFriendsI_1653546774",
	},
	{
		name: "TFT7_Augment_BestFriends2",
		displayName: "Best Friends II",
		imgName: "BestFriendsII_1653546782",
	},
	{
		name: "TFT7_Augment_BestFriends3",
		displayName: "Best Friends III",
		imgName: "BestFriendsIII_1653546791",
	},
	{
		name: "TFT7_Augment_MikaelsGift",
		displayName: "Better Together",
		imgName: "BetterTogether_1653545361",
	},
	{
		name: "TFT7_Augment_BigFriend",
		displayName: "Big Friend I",
		imgName: "BigFriend_1653545421",
	},
	{
		name: "TFT7_Augment_BigFriend2",
		displayName: "Big Friend II",
		imgName: "BigFriend2_1654828042",
	},
	{
		name: "TFT6_Augment_BinaryAirdrop",
		displayName: "Binary Airdrop",
		imgName: "BinaryAirdrop_1654642099",
	},
	{
		name: "TFT7_Augment_BirthdayPresents",
		displayName: "Birthday Present",
		imgName: "BirthdayPresent_1661402259-golden-gifts-ii-tft_set6_stage2 -",
	},
	{
		name: "TFT6_Augment_BlueBattery1",
		displayName: "Blue Battery I",
		imgName: "BlueBattery_1653609460",
	},
	{
		name: "TFT6_Augment_BlueBattery2",
		displayName: "Blue Battery II",
		imgName: "BlueBattery3_1662614105-blue-battery-iii.tft_set7.5",
	},
	{
		name: "TFT7_Augment_BruiserEmblem",
		displayName: "Bruiser Crest",
		imgName: "bruiseremblem2-tft_set6",
	},
	{
		name: "TFT7_Augment_BruiserEmblem2",
		displayName: "Bruiser Crown",
		imgName: "bruiseremblem3-tft_set6",
	},
	{
		name: "TFT7_Augment_BruiserTrait",
		displayName: "Bruiser Heart",
		imgName: "bruiserheart1-tft_set6",
	},
	{
		name: "TFT6_Augment_Traitless1",
		displayName: "Built Different I",
		imgName: "builtdifferent1-tft_set6",
	},
	{
		name: "TFT6_Augment_Traitless2",
		displayName: "Built Different II",
		imgName: "builtdifferent2-tft_set6",
	},
	{
		name: "TFT6_Augment_Traitless3",
		displayName: "Built Different III",
		imgName: "builtdifferent3-tft_set6",
	},
	{
		name: "TFT6_Augment_CalculatedLoss",
		displayName: "Calculated Loss",
		imgName: "CalculatedLoss_1654642247",
	},
	{
		name: "TFT7_Augment_CannoneerEmblem",
		displayName: "Cannoneer Crest",
		imgName: "CannoneerCrest_1653547276",
	},
	{
		name: "TFT7_Augment_CannoneerEmblem2",
		displayName: "Cannoneer Crown",
		imgName: "CannoneerCrown_1653547292",
	},
	{
		name: "TFT7_Augment_CannoneerTrait",
		displayName: "Cannoneer Heart",
		imgName: "CannoneerHeart_1653547284",
	},
	{
		name: "TFT7_Augment_CavalierEmblem",
		displayName: "Cavalier Crest",
		imgName: "CavalierCrest_1653545151",
	},
	{
		name: "TFT7_Augment_CavalierEmblem2",
		displayName: "Cavalier Crown",
		imgName: "CavalierCrown_1653545162",
	},
	{
		name: "TFT7_Augment_CavalierTrait",
		displayName: "Cavalier Heart",
		imgName: "CavalierHeart_1653545142",
	},
	{
		name: "TFT7_Augment_CavalierForAllUnits",
		displayName: "Cavalier Unity",
		imgName: "CavalierUnity_1653545114",
	},
	{
		name: "TFT6_Augment_CelestialBlessing1",
		displayName: "Celestial Blessing I",
		imgName: "celestialblessing1-tft_set6",
	},
	{
		name: "TFT6_Augment_CelestialBlessing2",
		displayName: "Celestial Blessing II",
		imgName: "celestialblessing2-tft_set6",
	},
	{
		name: "TFT6_Augment_CelestialBlessing3",
		displayName: "Celestial Blessing III",
		imgName: "celestialblessing3-tft_set6",
	},
	{
		name: "TFT6_Augment_ClearMind",
		displayName: "Clear Mind",
		imgName: "clearmind2-tft_set6",
	},
	{
		name: "TFT7_Augment_ClutteredMind",
		displayName: "Cluttered Mind",
		imgName: "ClutteredMind_1653877989",
	},
	{
		name: "TFT7_Augment_Bloodlust1",
		displayName: "Combat Training I",
		imgName: "CombatTrainingII_1653546733",
	},
	{
		name: "TFT7_Augment_Bloodlust2",
		displayName: "Combat Training II",
		imgName: "CombatTrainingIII_1653546742",
	},
	{
		name: "TFT6_Augment_ComponentGrabBag",
		displayName: "Component Grab Bag",
		imgName: "componentgrabbag-ii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_Consistency",
		displayName: "Consistency",
		imgName: "Consistency_1661401592-consistency-ii -1-",
	},
	{
		name: "TFT7_Augment_SacrificialPact",
		displayName: "Cruel Pact",
		imgName: "CruelPact_1653546592",
	},
	{
		name: "TFT7_Augment_CursedCrown",
		displayName: "Cursed Crown",
		imgName: "CursedCrown_1653554356",
	},
	{
		name: "TFT6_Augment_CyberneticShell1",
		displayName: "Cybernetic Shell I",
		imgName: "cybernetic-shell-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticShell2",
		displayName: "Cybernetic Shell II",
		imgName: "cybernetic-shell-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticShell3",
		displayName: "Cybernetic Shell III",
		imgName: "cybernetic-shell-iii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticUplink1",
		displayName: "Cybernetic Uplink I",
		imgName: "cybernetic-uplink-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticUplink2",
		displayName: "Cybernetic Uplink II",
		imgName: "cybernetic-uplink-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticUplink3",
		displayName: "Cybernetic Uplink III",
		imgName: "cybernetic-uplink-iii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_CyberneticImplants1",
		displayName: "Cybernetic Implants I",
		imgName: "cybernetic1-tft_set6",
	},
	{
		name: "TFT6_Augment_CyberneticImplants2",
		displayName: "Cybernetic Implants II",
		imgName: "cybernetic2-tft_set6",
	},
	{
		name: "TFT6_Augment_CyberneticImplants3",
		displayName: "Cybernetic Implants III",
		imgName: "cybernetic3-tft_set6",
	},
	{
		name: "TFT7_Augment_DarkflightEmblem",
		displayName: "Darkflight Crest",
		imgName: "DarkflightCrest_1661401384-darkflightcrest-2 -1-",
	},
	{
		name: "TFT7_Augment_DarkflightEmblem2",
		displayName: "Darkflight Crown",
		imgName: "DarkflightCrown_1661401404-darkflightcrown-3 -1-",
	},
	{
		name: "TFT7_Augment_DarkflightTrait",
		displayName: "Darkflight Heart",
		imgName: "DarkflightHeart_1661401393-darkflightheart-1 -1-",
	},
	{
		name: "TFT7_Augment_CavalierDevastatingCharge",
		displayName: "Devastating Charge",
		imgName: "DevastatingCharge_1653547210",
	},
	{
		name: "TFT6_Augment_Twins1",
		displayName: "Double Trouble I",
		imgName: "double-trouble-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Twins2",
		displayName: "Double Trouble II",
		imgName: "double-trouble-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Twins3",
		displayName: "Double Trouble III",
		imgName: "double-trouble-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_DragonAlliance",
		displayName: "Dragon Alliance",
		imgName: "DragonAlliance_1653555730",
	},
	{
		name: "TFT7_Augment_DragonHorde",
		displayName: "Dragon Horde",
		imgName: "DragonHorde_1653877808",
	},
	{
		name: "TFT7_Augment_DragonImperialist",
		displayName: "Dragon Imperialist",
		imgName: "DragonImperialist_1661402030-dragon-brood-ii-tft_set7 -1-",
	},
	{
		name: "TFT7_Augment_DragonmancerConference",
		displayName: "Dragonmancer Conference",
		imgName: "DragonmancerConference_1661401748-dragonmancerconference-2 -",
	},
	{
		name: "TFT7_Augment_DragonmancerEmblem",
		displayName: "Dragonmancer Crest",
		imgName: "DragonmancerCrest_1653546404",
	},
	{
		name: "TFT7_Augment_DragonmancerEmblem2",
		displayName: "Dragonmancer Soul",
		imgName: "DragonmancerSoul_1653546421",
	},
	{
		name: "TFT7_Augment_DragonTrait2",
		displayName: "Dragon Soul",
		imgName: "DragonSoul_1661401738-dragon-crown-iii -1-",
	},
	{
		name: "TFT6_Augment_Electrocharge1",
		displayName: "Electrocharge I",
		imgName: "electrocharge-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Electrocharge2",
		displayName: "Electrocharge II",
		imgName: "electrocharge-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Electrocharge3",
		displayName: "Electrocharge III",
		imgName: "electrocharge-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_MageEssenceTheft",
		displayName: "Essence Theft",
		imgName: "EssenceTheft2_1661401514-essence-theft-mage-ii -1-",
	},
	{
		name: "TFT7_Augment_JadeEternalProtection",
		displayName: "Eternal Protection",
		imgName: "EternalProtection_1653546324",
	},
	{
		name: "TFT7_Augment_EvokerEmblem",
		displayName: "Evoker Crest",
		imgName: "EvokerCrest_1653546540",
	},
	{
		name: "TFT7_Augment_EvokerEmblem2",
		displayName: "Evoker Crown",
		imgName: "EvokerCrown_1653546555",
	},
	{
		name: "TFT7_Augment_EvokerTrait",
		displayName: "Evoker Heart",
		imgName: "EvokerHeart_1653546548",
	},
	{
		name: "TFT6_Augment_Distancing",
		displayName: "Exiles I",
		imgName: "exiles1-tft_set6",
	},
	{
		name: "TFT6_Augment_Distancing2",
		displayName: "Exiles II",
		imgName: "exiles2-tft_set6",
	},
	{
		name: "TFT6_Augment_Distancing3",
		displayName: "Exiles III",
		imgName: "exiles3-tft_set6",
	},
	{
		name: "TFT7_Augment_TempestEyeOfTheStorm",
		displayName: "Eye Of The Storm",
		imgName: "EyeoftheStorm_1653547356",
	},
	{
		name: "TFT6_Augment_Featherweights1",
		displayName: "Featherweights I",
		imgName: "featherweights1-tft_set6",
	},
	{
		name: "TFT6_Augment_Featherweights2",
		displayName: "Featherweights II",
		imgName: "featherweights2-tft_set6",
	},
	{
		name: "TFT6_Augment_Featherweights3",
		displayName: "Featherweights III",
		imgName: "featherweights3-tft_set6",
	},
	{
		name: "TFT6_Augment_FirstAidKit",
		displayName: "First Aid Kit I",
		imgName: "firstaidkit1-tft_set6",
	},
	{
		name: "TFT7_Augment_FirstAidKit2",
		displayName: "First Aid Kit II",
		imgName: "FirstAidKitIII_1654770992",
	},
	{
		name: "TFT6_Augment_FuturePeepers",
		displayName: "Future Sight I",
		imgName: "future-sight-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_FuturePeepers2",
		displayName: "Future Sight II",
		imgName: "future-sight-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_GadgetExpert",
		displayName: "Gadget Expert",
		imgName: "GadgetExpert_1653545273",
	},
	{
		name: "TFT7_Augment_GuildGearUpgrades",
		displayName: "Gear Upgrades",
		imgName: "GearUpgrades_1653877917",
	},
	{
		name: "TFT6_Augment_GachaAddict",
		displayName: "Golden Ticket",
		imgName: "GoldenTicket_1662627362-goldenticket3.tft_set7.5",
	},
	{
		name: "TFT6_Augment_GrandGambler",
		displayName: "High Roller",
		imgName: "grandgambler3-tft_set6",
	},
	{
		name: "TFT7_Augment_GuardianEmblem",
		displayName: "Guardian Crest",
		imgName: "GuardianCrest_1653546032",
	},
	{
		name: "TFT7_Augment_GuardianEmblem2",
		displayName: "Guardian Crown",
		imgName: "GuardianCrown_1653546046",
	},
	{
		name: "TFT7_Augment_GuardianTrait",
		displayName: "Guardian Heart",
		imgName: "GuardianHeart_1653546039",
	},
	{
		name: "TFT7_Augment_GuildEmblem",
		displayName: "Guild Crest",
		imgName: "GuildCrest_1653545230",
	},
	{
		name: "TFT7_Augment_GuildEmblem2",
		displayName: "Guild Crown",
		imgName: "GuildCrown_1653545215",
	},
	{
		name: "TFT7_Augment_GuildTrait",
		displayName: "Guild Heart",
		imgName: "GuildHeart_1653545195",
	},
	{
		name: "TFT7_Augment_MirageHallucinate",
		displayName: "Hallucinate",
		imgName: "Hallucinate_1653546865",
	},
	{
		name: "TFT7_Augment_GuardianHeroicPresence",
		displayName: "Heroic Presence",
		imgName: "HeroicPresence_1653546306",
	},
	{
		name: "TFT7_Augment_DragonmancerInTraining",
		displayName: "Hero-In-Training",
		imgName: "HeroInTraining_1661401602-veterancy-ii-tft_set7 -1-",
	},
	{
		name: "TFT6_Augment_HighEndShopping",
		displayName: "High-End Shopping",
		imgName: "highend3-tft_set6",
	},
	{
		name: "TFT7_Augment_LagoonHighTide",
		displayName: "High Tide",
		imgName: "HighTide_1661401278-hightide-2 -1-",
	},
	{
		name: "TFT7_Augment_CannoneerHotShot",
		displayName: "Hot Shot",
		imgName: "HotShot_1653545442",
	},
	{
		name: "TFT6_Augment_HyperRoll",
		displayName: "Hustler",
		imgName: "HyperRoll_1654642668",
	},
	{ name: "", displayName: "Inspire", imgName: "Inspire_1653545027" },
	{
		name: "TFT7_Augment_AstralIntercosmicGifts",
		displayName: "Intercosmic Gifts",
		imgName: "IntercosmicGifts_1653546496",
	},
	{
		name: "TFT6_Augment_ItemGrabBag1",
		displayName: "Item Grab Bag I",
		imgName: "itemgrabbag1-tft_set6",
	},
	{
		name: "TFT6_Augment_ItemGrabBag2",
		displayName: "Item Grab Bag II",
		imgName: "itemgrabbag3-tft_set6",
	},
	{
		name: "TFT7_Augment_JadeEmblem",
		displayName: "Jade Crest",
		imgName: "JadeCrest_1654822001",
	},
	{
		name: "TFT7_Augment_JadeTrait2",
		displayName: "Jade Crown",
		imgName: "JadeCrown_1653545848",
	},
	{
		name: "TFT7_Augment_JadeTrait",
		displayName: "Jade Heart",
		imgName: "JadeHeart_1654821988",
	},
	{
		name: "TFT6_Augment_MeleeStarBlade1",
		displayName: "Knife's Edge I",
		imgName: "KnifesEdgeI_1662629263-cqctraining1.tft_set7.5",
	},
	{
		name: "TFT6_Augment_MeleeStarBlade2",
		displayName: "Knife's Edge II",
		imgName: "KnifesEdgeII_1662629350-cqctraining2.tft_set7.5",
	},
	{
		name: "TFT6_Augment_MeleeStarBlade3",
		displayName: "Knife's Edge III",
		imgName: "KnifesEdgeIII_1662629420-cqctraining3.tft_set7.5",
	},
	{
		name: "TFT6_Augment_JeweledLotus",
		displayName: "Jeweled Lotus",
		imgName: "jeweled-lotus-ii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_LagoonEmblem",
		displayName: "Lagoon Crest",
		imgName: "LagoonCrest_1661401482-lagooncrest-2 -1-",
	},
	{
		name: "TFT7_Augment_LagoonEmblem2",
		displayName: "Lagoon Crown",
		imgName: "LagoonCrown_1661401496-lagooncrown-3 -1-",
	},
	{
		name: "TFT7_Augment_LagoonTrait",
		displayName: "Lagoon Heart",
		imgName: "LagoonHeart_1661401489-lagoonheart-1 -1-",
	},
	{
		name: "TFT7_Augment_LastStand",
		displayName: "Last Stand",
		imgName: "LastStand_1653546979",
	},
	{
		name: "TFT7_Augment_LategameSpecialist",
		displayName: "Lategame Specialist",
		imgName: "LategameSpecialist_1653546811",
	},
	{
		name: "TFT6_Augment_MaxLevel10",
		displayName: "Level Up",
		imgName: "levelup3-tft_set6",
	},
	{
		name: "TFT7_Augment_LivingForge",
		displayName: "Living Forge",
		imgName: "LivingForge_1653545956",
	},
	{
		name: "TFT7_Augment_GuildLoot",
		displayName: "Loot Master",
		imgName: "LootMaster_1653546635",
	},
	{
		name: "TFT7_Augment_LuckyGloves",
		displayName: "Lucky Gloves",
		imgName: "LuckyGloves_1661401690-lucky-gloves-iii -1-",
	},
	{
		name: "TFT6_Augment_LudensEcho1",
		displayName: "Luden's Echo I",
		imgName: "ludens-echo-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_LudensEcho2",
		displayName: "Luden's Echo II",
		imgName: "ludens-echo-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_LudensEcho3",
		displayName: "Luden's Echo III",
		imgName: "ludens-echo-iii-tft_set6_stage2",
	},
	{
		name: "",
		displayName: "Mage Conference",
		imgName: "MageConference_1653546378",
	},
	{
		name: "TFT7_Augment_MageEmblem2",
		displayName: "Mage Crown",
		imgName: "MageCrown_1653546369",
	},
	{
		name: "TFT7_Augment_MageEmblem",
		displayName: "Mage Crest",
		imgName: "MageCrest_1653546352",
	},
	{
		name: "TFT7_Augment_MageTrait",
		displayName: "Mage Heart",
		imgName: "MageHeart_1653546361",
	},
	{
		name: "TFT6_Augment_MakeshiftArmor1",
		displayName: "Makeshift Armor I",
		imgName: "makeshift1-tft_set6",
	},
	{
		name: "TFT6_Augment_MakeshiftArmor2",
		displayName: "Makeshift Armor II",
		imgName: "makeshift2-tft_set6",
	},
	{
		name: "TFT6_Augment_MakeshiftArmor3",
		displayName: "Makeshift Armor III",
		imgName: "makeshift3-tft_set6",
	},
	{
		name: "TFT6_Augment_Meditation1",
		displayName: "Meditation I",
		imgName: "meditation-i-a-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Meditation2",
		displayName: "Meditation II",
		imgName: "meditation-ii-a-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_Meditation3",
		displayName: "Meditation III",
		imgName: "meditation-iii-a-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_MetabolicAccelerator",
		displayName: "Metabolic Accelerator",
		imgName: "metabolicaccel2-tft_set6",
	},
	{
		name: "TFT7_Augment_MirageEmblem",
		displayName: "Mirage Crest",
		imgName: "MageCrest_1653546352",
	},
	{
		name: "TFT7_Augment_MirageEmblem2",
		displayName: "Mirage Crown",
		imgName: "MirageCrown_1653546158",
	},
	{
		name: "TFT7_Augment_MirageTrait",
		displayName: "Mirage Heart",
		imgName: "MirageHeart_1653546151",
	},
	{
		name: "TFT7_Augment_MysticTrait",
		displayName: "Mystic Heart",
		imgName: "MysticHeart_1653546194",
	},
	{
		name: "TFT7_Augment_MysticTrait2",
		displayName: "Mystic Soul",
		imgName: "MysticSoul_1653546223",
	},
	{
		name: "TFT6_Augment_ForceOfNature",
		displayName: "New Recruit",
		imgName: "newrecruit3-tft_set6",
	},
	{
		name: "TFT7_Augment_LagoonOasis",
		displayName: "Oasis",
		imgName: "Oasis_1661401472-oasis-2 -1-",
	},
	{
		name: "TFT6_Augment_PandorasItems",
		displayName: "Pandora's Items",
		imgName: "pandora1-tft_set6",
	},
	{
		name: "TFT7_Augment_PandorasBench",
		displayName: "Pandora's Bench",
		imgName: "PandorasBench_1653547237",
	},
	{
		name: "",
		displayName: "Part Time Assassins",
		imgName: "PartTimeAssassins_1661401699-assassin-unity-iii -1-",
	},
	{
		name: "TFT7_Augment_JadePenitence",
		displayName: "Penitence",
		imgName: "Penitence_1653546827",
	},
	{
		name: "TFT7_Augment_BruiserPersonalTraining",
		displayName: "Personal Training",
		imgName: "PersonalTraining_1653543863",
	},
	{
		name: "TFT6_Augment_PortableForge",
		displayName: "Portable Forge",
		imgName: "portableforge2-tft_set6",
	},
	{
		name: "TFT7_Augment_Preparation",
		displayName: "Preparation I",
		imgName: "Preparation_1653552879",
	},
	{
		name: "TFT7_Augment_Preparation2",
		displayName: "Preparation II",
		imgName: "PreparationII_1653553047",
	},
	{
		name: "TFT7_Augment_Preparation3",
		displayName: "Preparation III",
		imgName: "PreparationIII_1653876914",
	},
	{
		name: "TFT7_Augment_SwiftshotPressTheAttack",
		displayName: "Press The Attack",
		imgName: "PresstheAttack_1653546902",
	},
	{
		name: "TFT7_Augment_AstralIntercosmicProtection",
		displayName: "Protectors of the Cosmos ",
		imgName: "ProtectorsoftheCosmos_1661401915-arcane-comet-ii-tft_set7 -1",
	},
	{
		name: "TFT6_Augment_RadiantRelics",
		displayName: "Radiant Relics",
		imgName: "radiantrelic-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_RagewingTrait2",
		displayName: "Ragewing Crest",
		imgName: "RagewingCrest_1653545692",
	},
	{
		name: "",
		displayName: "Ragewing Heart",
		imgName: "RagewingHeart_1653545710",
	},
	{
		name: "TFT7_Augment_RagewingTrait",
		displayName: "Ragewing Soul",
		imgName: "RagewingSoul_1661402103-ragewing-crown-iii-tft_set7 -2- -1-",
	},
	{
		name: "TFT7_Augment_ShimmerscaleSpending",
		displayName: "Reckless Spending",
		imgName: "RecklessSpending_1653545472",
	},
	{
		name: "TFT6_Augment_Recombobulator",
		displayName: "Recombobulator",
		imgName: "recombobulator-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_RichGetRicher",
		displayName: "Rich Get Richer",
		imgName: "RichGetRicher_1654659210",
	},
	{
		name: "TFT6_Augment_RichGetRicherPlus",
		displayName: "Rich Get Richer +",
		imgName: "RichGetRicherPlus_1653552611",
	},
	{
		name: "TFT7_Augment_CannoneerRicochet",
		displayName: "Ricochet",
		imgName: "Ricochet_1653545335",
	},
	{
		name: "TFT6_Augment_SalvageBin",
		displayName: "Salvage Bin",
		imgName: "salvage2-tft_set6",
	},
	{
		name: "TFT7_Augment_ScalescornEmblem",
		displayName: "Scalescorn Crest",
		imgName: "ScalescornCrest_1653545775",
	},
	{
		name: "TFT7_Augment_ScalescornEmblem2",
		displayName: "Scalescorn Crown",
		imgName: "ScalescornCrown_1653545790",
	},
	{
		name: "TFT7_Augment_ScalescornTrait",
		displayName: "Scalescorn Heart",
		imgName: "ScalescornHeart_1653545782",
	},
	{
		name: "TFT7_Augment_ScopedWeapons1",
		displayName: "Scoped Weapons I",
		imgName: "ScopedWeaponsI_1661401674-scopedweapons2-tft_set6 -1-",
	},
	{
		name: "TFT7_Augment_ScopedWeapons2",
		displayName: "Scoped Weapons II",
		imgName: "ScopedWeaponsII_1661401682-scopedweapons3-tft_set6 -1-",
	},
	{
		name: "TFT7_Augment_RagewingScorch",
		displayName: "Scorch",
		imgName: "Scorch_1653545091",
	},
	{
		name: "TFT6_Augment_SecondWind1",
		displayName: "Second Wind I",
		imgName: "second--wind-i-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_SecondWind2",
		displayName: "Second Wind II",
		imgName: "second--wind-ii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_ShapeshifterTrait",
		displayName: "Shapeshifter Heart",
		imgName: "ShapeshifterHeart_1653547413",
	},
	{
		name: "TFT7_Augment_ShapeshifterTrait2",
		displayName: "Shapeshifter Soul",
		imgName: "ShapeshifterSoul_1653547423",
	},
	{
		name: "TFT7_Augment_ShimmerscaleEmblem",
		displayName: "Shimmerscale Crest",
		imgName: "ShimmerscaleCrest_1654821371",
	},
	{
		name: "TFT7_Augment_ShimmerscaleTrait",
		displayName: "Shimmerscale Heart",
		imgName: "ShimmerscaleHeart_1654821380",
	},
	{
		name: "TFT7_Augment_ShimmerscaleTrait2",
		displayName: "Shimmerscale Soul",
		imgName: "ShimmerscaleSoul_1653545902",
	},
	{ name: "", displayName: "Shrug It Off", imgName: "shrugoff1-tft_set6" },
	{
		name: "TFT6_Augment_SlowAndSteady",
		displayName: "March Of Progress",
		imgName: "slowandsteady3-tft_set6",
	},
	{ name: "", displayName: "Smoke Bomb", imgName: "smokebomb2-tft_set6" },
	{
		name: "TFT7_Augment_DarkflightSoulSiphon",
		displayName: "Soul Siphon",
		imgName: "SoulSiphon_1661401506-soulsiphon-1 -1-",
	},
	{
		name: "TFT6_Augment_Diversify1",
		displayName: "Stand United I",
		imgName: "standunited1-tft_set6",
	},
	{
		name: "TFT6_Augment_Diversify2",
		displayName: "Stand United II",
		imgName: "standunited2-tft_set6",
	},
	{
		name: "TFT6_Augment_Diversify3",
		displayName: "Stand United III",
		imgName: "standunited3-tft_set6",
	},
	{
		name: "TFT6_Augment_SunfireBoard",
		displayName: "Sunfire Board",
		imgName: "sunfireboard2-tft_set6",
	},
	{
		name: "TFT7_Augment_SwiftshotEmblem",
		displayName: "Swiftshot Crest",
		imgName: "SwiftshotCrest_1653545514",
	},
	{
		name: "TFT7_Augment_SwiftshotEmblem2",
		displayName: "Swiftshot Crown",
		imgName: "SwiftshotCrown_1653545538",
	},
	{
		name: "TFT7_Augment_SwiftshotTrait",
		displayName: "Swiftshot Heart",
		imgName: "SwiftshotHeart_1653545525",
	},
	{
		name: "TFT7_Augment_RagewingTantrum",
		displayName: "Tantrum",
		imgName: "Tantrum_1653878074",
	},
	{
		name: "TFT6_Augment_TargetDummies",
		displayName: "Target Dummies",
		imgName: "TargetDummies_1653551273",
	},
	{
		name: "TFT7_Augment_TempestEmblem",
		displayName: "Tempest Crest",
		imgName: "TempestCrest_1653547319",
	},
	{
		name: "TFT7_Augment_TempestEmblem2",
		displayName: "Tempest Crown",
		imgName: "TempestCrown_1653547327",
	},
	{
		name: "TFT7_Augment_TempestTrait",
		displayName: "Tempest Heart",
		imgName: "TempestHeart_1653547369",
	},
	{
		name: "TFT7_Augment_WhispersTerrify",
		displayName: "Terrify",
		imgName: "Terrify_1661400854-terrify-ii -1-",
	},
	{
		name: "TFT6_Augment_TheGoldenEgg",
		displayName: "The Golden Egg",
		imgName: "the-golden-egg-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_ThinkFast",
		displayName: "Think Fast",
		imgName: "ThinkFast_1653546238",
	},
	{
		name: "TFT6_Augment_ThreesCompany",
		displayName: "Three's Company",
		imgName: "threes-company-ii-tft_set6_stage2",
	},
	{
		name: "TFT6_Augment_ThrillOfTheHunt1",
		displayName: "Thrill Of The Hunt I",
		imgName: "thrillhunt1-tft_set6",
	},
	{
		name: "TFT6_Augment_ThrillOfTheHunt2",
		displayName: "Thrill Of The Hunt II",
		imgName: "thrillhunt2-tft_set6",
	},
	{
		name: "TFT7_Augment_WarriorTiamat",
		displayName: "Tiamat",
		imgName: "Tiamat_1653546923",
	},
	{
		name: "TFT6_Augment_TinyTitans",
		displayName: "Tiny Titans",
		imgName: "TinyTitans_1649800066",
	},
	{
		name: "TFT7_Augment_BruiserTitanicStrength",
		displayName: "Titanic Strength",
		imgName: "TitanicStrength_1653543886",
	},
	{
		name: "TFT6_Augment_TradeSector",
		displayName: "Trade Sector",
		imgName: "trade2-tft_set6",
	},
	{
		name: "TFT6_Augment_TradeSectorPlus",
		displayName: "Trade Sector +",
		imgName: "TradeSectorPlus_1655948867",
	},
	{
		name: "TFT6_Augment_TriForce1",
		displayName: "TriForce I",
		imgName: "TriForce_1654841806",
	},
	{
		name: "TFT6_Augment_TriForce2",
		displayName: "TriForce II",
		imgName: "TriForce2_1654841812",
	},
	{
		name: "TFT6_Augment_TriForce3",
		displayName: "TriForce III",
		imgName: "TriForce3_1654824496",
	},
	{
		name: "TFT6_Augment_TrueTwos",
		displayName: "True Twos",
		imgName: "true-twos-ii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_UrfsGrabBag1",
		displayName: "Urf's Grab Bag I",
		imgName: "UrfsGrabBagI_1653546467",
	},
	{
		name: "TFT7_Augment_UrfsGrabBag2",
		displayName: "Urf's Grab Bag II",
		imgName: "UrfsGrabBagII_1653546474",
	},
	{
		name: "TFT6_Augment_VerdantVeil",
		displayName: "Verdant Veil",
		imgName: "verdant-veil-iii-tft_set6_stage2",
	},
	{
		name: "TFT7_Augment_WarriorEmblem",
		displayName: "Warrior Crest",
		imgName: "WarriorCrest_1653546663",
	},
	{
		name: "TFT7_Augment_WarriorEmblem2",
		displayName: "Warrior Crown",
		imgName: "WarriorCrown_1653546680",
	},
	{
		name: "TFT7_Augment_WarriorTrait",
		displayName: "Warrior Heart",
		imgName: "WarriorHeart_1653546671",
	},
	{
		name: "TFT6_Augment_Weakspot",
		displayName: "Weakspot",
		imgName: "weakspot1-tft_set6",
	},
	{
		name: "",
		displayName: "Whispers Crest",
		imgName: "WhispersCrest_1653545990",
	},
	{
		name: "",
		displayName: "Whispers Crown",
		imgName: "WhispersCrown_1653546005",
	},
	{
		name: "TFT7_Augment_WhispersTrait",
		displayName: "Whispers Heart",
		imgName: "WhispersHeart_1653545997",
	},
	{
		name: "TFT6_Augment_Windfall",
		displayName: "Windfall",
		imgName: "windfall3-tft_set6",
	},
	{
		name: "TFT6_Augment_WindfallPlus",
		displayName: "Windfall +",
		imgName: "WindfallPlus_1654659493",
	},
	{
		name: "TFT6_Augment_WindfallPlusPlus",
		displayName: "Windfall ++",
		imgName: "WindfallPlusPlus_1654659560",
	},
	{
		name: "TFT6_Augment_ThriftShop",
		displayName: "Wise Spending",
		imgName: "wisespending3-tft_set6",
	},
	{
		name: "TFT6_Augment_WoodlandCharm",
		displayName: "Woodland Charm",
		imgName: "WoodlandCharm_1661401899-woodlandcharm3-tft_set6 -1-",
	},
];

const Augment = ({
	augmentName,
	className,
}: {
	augmentName: string;
	className?: string;
}) => {
	const getAsset = useCallback((augmentName: string) => {
		return allAugments.find((asset) => asset.name === augmentName);
	}, []);

	const asset = getAsset(augmentName);

	return (
		<Asset
			type="Augments"
			name={asset?.imgName ?? ""}
			className={className}
			title={asset?.displayName ?? augmentName}
		/>
	);
};

export default Augment;
