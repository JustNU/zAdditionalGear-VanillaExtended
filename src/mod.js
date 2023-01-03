"use strict";

class Mod
{
	
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const jsonUtil = container.resolve("JsonUtil");
		const core = container.resolve("JustNUCore");
		const modDb = `user/mods/zAdditionalGear-VanillaExtended/db/`;
		const config = require("../config/config.json");
		const itemConfig = require("../config/itemConfig.json");
		const itemData = require("../db/items/itemData.json");
		
		// edge cases
		const edgeCases = ["AddGearVanExt_GEN4_Light", "AddGearVanExt_6B43_Light", "AddGearVanExt_6B43_Assault", "AddGearVanExt_6B43_Mobility"];
		
		//add retextures
		for (const categoryId in itemConfig) {
			for (const itemId in itemConfig[categoryId]) {
				// skip edge cases, handle them later
				if (edgeCases.includes(itemId)) {
					continue;
				}
				
				if (itemConfig[categoryId][itemId]) {
					core.addItemRetexture(modDb, itemId, itemData[itemId].BaseItemID, itemData[itemId].BundlePath, config.EnableTradeOffers, config.AddToBots, itemData[itemId].LootWeigthMult);
				}
			}
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredVests = [
				["AddGearVanExt_GEN4_Light"],
				["AddGearVanExt_6B43_Light"],
				["AddGearVanExt_6B43_Assault"],
				["AddGearVanExt_6B43_Mobility"]
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
		
		// deal with edge cases
		// GEN4 light
		if (itemConfig["Armored Vests"]["AddGearVanExt_GEN4_Light"]) {
			core.addItemRetexture(modDb, "AddGearVanExt_GEN4_Light", itemData["AddGearVanExt_GEN4_Light"].BaseItemID, itemData["AddGearVanExt_GEN4_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_GEN4_Light"].LootWeigthMult);
			
			// change stats
			const gen4Light = database.templates.items["AddGearVanExt_GEN4_Light"];
			
			if (gen4Light._props.Weight > 0)
				gen4Light._props.Weight = 10;
			if (gen4Light._props.Width != 1 && gen4Light._props.Height != 1) {
				gen4Light._props.Height = 3;
				gen4Light._props.Width = 3;
			}
			
			gen4Light._props.Durability = Math.round(gen4Light._props.MaxDurability - (gen4Light._props.MaxDurability * 0.08));
			gen4Light._props.MaxDurability = Math.round(gen4Light._props.MaxDurability - (gen4Light._props.MaxDurability * 0.08));
			
			if (gen4Light._props.speedPenaltyPercent != 0)
				gen4Light._props.speedPenaltyPercent = gen4Light._props.speedPenaltyPercent + 1;
			if (gen4Light._props.mousePenalty != 0)
				gen4Light._props.mousePenalty = gen4Light._props.mousePenalty + 1;
			if (gen4Light._props.weaponErgonomicPenalty != 0)
				gen4Light._props.weaponErgonomicPenalty = gen4Light._props.weaponErgonomicPenalty + 1;
			
			// change price
			database.templates.prices["AddGearVanExt_GEN4_Light"] = 85000;
			
			for (const handbookItemIndex in database.templates.handbook.Items) {
				if (database.templates.handbook.Items[handbookItemIndex].Id === "AddGearVanExt_GEN4_Light") {
					database.templates.handbook.Items[handbookItemIndex].Price = 85000;
					break;
				}
			}
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_GEN4_Light", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 90222, 3)
		}
		
		// 6b43 light
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Light"]) {
			core.addItemRetexture(modDb, "AddGearVanExt_6B43_Light", itemData["AddGearVanExt_6B43_Light"].BaseItemID, itemData["AddGearVanExt_6B43_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_GEN4_Light"].LootWeigthMult);
			
			// change stats
			const sixB43Light = database.templates.items["AddGearVanExt_6B43_Light"];
			
			if (sixB43Light._props.Weight > 0)
				sixB43Light._props.Weight = 14;
			if (sixB43Light._props.Width != 1 && sixB43Light._props.Height != 1) {
				sixB43Light._props.Width = 3;
				sixB43Light._props.Height = 3;
			}
			
			
			sixB43Light._props.Durability = Math.round(sixB43Light._props.MaxDurability - (sixB43Light._props.MaxDurability * 0.37));
			sixB43Light._props.MaxDurability = Math.round(sixB43Light._props.MaxDurability - (sixB43Light._props.MaxDurability * 0.37));
			
			if (sixB43Light._props.speedPenaltyPercent != 0)
				sixB43Light._props.speedPenaltyPercent = sixB43Light._props.speedPenaltyPercent + 3;
			if (sixB43Light._props.mousePenalty != 0)
				sixB43Light._props.mousePenalty = sixB43Light._props.mousePenalty + 3;
			if (sixB43Light._props.weaponErgonomicPenalty != 0)
				sixB43Light._props.weaponErgonomicPenalty = sixB43Light._props.weaponErgonomicPenalty + 3;
			
			// change price
			database.templates.prices["AddGearVanExt_6B43_Light"] = 85000;
			
			for (const handbookItemIndex in database.templates.handbook.Items) {
				if (database.templates.handbook.Items[handbookItemIndex].Id === "AddGearVanExt_6B43_Light") {
					database.templates.handbook.Items[handbookItemIndex].Price = 85000;
					break;
				}
			}
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_6B43_Light", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 90222, 3)
		}
		
		// 6b43 assault
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Assault"]) {
			core.addItemRetexture(modDb, "AddGearVanExt_6B43_Assault", itemData["AddGearVanExt_6B43_Assault"].BaseItemID, itemData["AddGearVanExt_6B43_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Assault"].LootWeigthMult);
			
			// change stats
			const sixB43Assault = database.templates.items["AddGearVanExt_6B43_Assault"];
			if (sixB43Assault._props.Weight > 0)
				sixB43Assault._props.Weight = 18;
			if (sixB43Assault._props.Width != 1 && sixB43Assault._props.Height != 1) {
				sixB43Assault._props.Width = 4;
				sixB43Assault._props.Height = 3;
			}
			
			
			sixB43Assault._props.Durability = Math.round(sixB43Assault._props.MaxDurability - (sixB43Assault._props.MaxDurability * 0.21));
			sixB43Assault._props.MaxDurability = Math.round(sixB43Assault._props.MaxDurability - (sixB43Assault._props.MaxDurability * 0.21));
			
			if (sixB43Assault._props.speedPenaltyPercent != 0)
				sixB43Assault._props.speedPenaltyPercent = sixB43Assault._props.speedPenaltyPercent + 1;
			if (sixB43Assault._props.mousePenalty != 0)
				sixB43Assault._props.mousePenalty = sixB43Assault._props.mousePenalty + 1;
			if (sixB43Assault._props.weaponErgonomicPenalty != 0)
				sixB43Assault._props.weaponErgonomicPenalty = sixB43Assault._props.weaponErgonomicPenalty + 1;
			
			// change price
			database.templates.prices["AddGearVanExt_6B43_Assault"] = 85000;
			
			for (const handbookItemIndex in database.templates.handbook.Items) {
				if (database.templates.handbook.Items[handbookItemIndex].Id === "AddGearVanExt_6B43_Assault") {
					database.templates.handbook.Items[handbookItemIndex].Price = 85000;
					break;
				}
			}
		}
		
		// 6b43 mobility
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Mobility"]) {
			core.addItemRetexture(modDb, "AddGearVanExt_6B43_Mobility", itemData["AddGearVanExt_6B43_Mobility"].BaseItemID, itemData["AddGearVanExt_6B43_Mobility"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Mobility"].LootWeigthMult);
			
			// change stats
			const sixB43Mobility = database.templates.items["AddGearVanExt_6B43_Mobility"];
			if (sixB43Mobility._props.Weight > 0)
				sixB43Mobility._props.Weight = 16;
			if (sixB43Mobility._props.Width != 1 && sixB43Mobility._props.Height != 1) {
				sixB43Mobility._props.Width = 3;
				sixB43Mobility._props.Height = 4;
			}
			
			
			sixB43Mobility._props.Durability = Math.round(sixB43Mobility._props.MaxDurability - (sixB43Mobility._props.MaxDurability * 0.32));
			sixB43Mobility._props.MaxDurability = Math.round(sixB43Mobility._props.MaxDurability - (sixB43Mobility._props.MaxDurability * 0.32));
			
			if (sixB43Mobility._props.speedPenaltyPercent != 0)
				sixB43Mobility._props.speedPenaltyPercent = sixB43Mobility._props.speedPenaltyPercent + 2;
			if (sixB43Mobility._props.mousePenalty != 0)
				sixB43Mobility._props.mousePenalty = sixB43Mobility._props.mousePenalty + 2;
			if (sixB43Mobility._props.weaponErgonomicPenalty != 0)
				sixB43Mobility._props.weaponErgonomicPenalty = sixB43Mobility._props.weaponErgonomicPenalty + 2;
			
			// change price
			database.templates.prices["AddGearVanExt_6B43_Mobility"] = 85000;
			
			for (const handbookItemIndex in database.templates.handbook.Items) {
				if (database.templates.handbook.Items[handbookItemIndex].Id === "AddGearVanExt_6B43_Mobility") {
					database.templates.handbook.Items[handbookItemIndex].Price = 85000;
					break;
				}
			}
		}
	}
}

module.exports = { mod: new Mod() }