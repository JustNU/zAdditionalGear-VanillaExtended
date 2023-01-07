"use strict";
const customItemsFunctions = require("./customItems.js");

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const jsonUtil = container.resolve("JsonUtil");
		const core = container.resolve("JustNUCore");
		const VFS = container.resolve("VFS");
		const modDb = `user/mods/zAdditionalGear-VanillaExtended/db`;
		const config = require("../config/config.json");
		const itemConfig = require("../config/itemConfig.json");
		const itemData = require("../db/items/itemData.json");
		const enLocale = jsonUtil.deserialize(VFS.readFile(`${modDb}/locales/en.json`));
		
		// edge cases
		const customItems = [
			"AddGearVanExt_GEN4_Light",
			"AddGearVanExt_6B43_Light",
			"AddGearVanExt_6B43_Assault",
			"AddGearVanExt_6B43_Mobility",
			"AddGearVanExt_ANA_M2_Armor",
			"AddGearVanExt_Defender2_Light",
			"AddGearVanExt_Bagariy_Armor",
			"AddGearVanExt_Bagariy_Armor_No_Bear",
			"AddGearVanExt_Osprey_Armor",
			"AddGearVanExt_Osprey_Assault_Armor",
			"AddGearVanExt_RBAV_Armor",
			"AddGearVanExt_Redut_Light_Olive",
			"AddGearVanExt_Redut_Light_Woodland"
		];
		
		// add retextures
		for (const categoryId in itemConfig) {
			for (const itemId in itemConfig[categoryId]) {
				
				// handle locale
				for (const localeID in database.locales.global) {
					
					// en placeholder
					if (enLocale[itemId]) {
						if (enLocale[itemId].Name)
							database.locales.global[localeID][`${itemId} Name`] = enLocale[itemId].Name;
						if (enLocale[itemId].ShortName)
							database.locales.global[localeID][`${itemId} ShortName`] = enLocale[itemId].ShortName;
						if (enLocale[itemId].Description)
							database.locales.global[localeID][`${itemId} Description`] = enLocale[itemId].Description;
					}
					// actual locale
					if (VFS.exists(`${modDb}/locales/${localeID}.json`) && localeID != "en") {
						const actualLocale = jsonUtil.deserialize(VFS.readFile(`${modDb}/locales/${localeID}.json`));

						if (actualLocale[itemId]) {
							if (actualLocale[itemId].Name)
								database.locales.global[localeID][`${itemId} Name`] = actualLocale[itemId].Name;
							if (actualLocale[itemId].ShortName)
								database.locales.global[localeID][`${itemId} ShortName`] = actualLocale[itemId].ShortName;
							if (actualLocale[itemId].Description)
								database.locales.global[localeID][`${itemId} Description`] = actualLocale[itemId].Description;
						}
					}
					
					// replace some default locale
					if (VFS.exists(`${modDb}/localesReplace/${localeID}.json`)) {
						const replaceLocale = jsonUtil.deserialize(VFS.readFile(`${modDb}/localesReplace/en.json`));
						
						for (const localeItem in replaceLocale) {
							for (const localeItemEntry in replaceLocale[localeItem]) {
								database.locales.global[localeID][`${localeItem} ${localeItemEntry}`] = replaceLocale[localeItem][localeItemEntry];
							}
						}
					}
					
				}
				
				// skip custom itens, handle them later
				if (customItems.includes(itemId)) {
					continue;
				}
				
				// add item retexture that is 1:1 to original item
				if (itemConfig[categoryId][itemId]) {
					core.addItemRetexture(itemId, itemData[itemId].BaseItemID, itemData[itemId].BundlePath, config.EnableTradeOffers, config.AddToBots, itemData[itemId].LootWeigthMult);
				}
			}
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredVests = [
				["AddGearVanExt_GEN4_Light"],
				["AddGearVanExt_6B43_Light"],
				["AddGearVanExt_6B43_Assault"],
				["AddGearVanExt_6B43_Mobility"],
				["AddGearVanExt_ANA_M2_Armor"],
				["AddGearVanExt_Defender2_Light"],
				["AddGearVanExt_Bagariy_Armor"],
				["AddGearVanExt_Bagariy_Armor_No_Bear"],
				["AddGearVanExt_Bagariy_No_Bear"],
				["AddGearVanExt_Osprey_Armor"],
				["AddGearVanExt_Osprey_Assault_Armor"],
				["AddGearVanExt_RBAV_Armor"],
				["AddGearVanExt_6B5_15_Khaki"],
				["AddGearVanExt_6B5_16_Flora"],
				["AddGearVanExt_Redut_Light_Olive"],
				["AddGearVanExt_Redut_Light_Woodland"]
			];
			
			// The survivalist path. Unprotected, but dangerous
			if (database.templates.quests["5d25aed386f77442734d25d2"]) {
				const unprotectedButDangerousGear = database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(unprotectedButDangerousGear),
					...armoredVests
				];
			}
			
			// Swift one
			if (database.templates.quests["60e729cf5698ee7b05057439"]) {
				const swiftOneGear = database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(swiftOneGear),
					...armoredVests
				];
			}
		}
		
		// deal with custom items
		customItemsFunctions.handleCustomItems(database, core, config, itemConfig, itemData);
	}
}

module.exports = { mod: new Mod() }