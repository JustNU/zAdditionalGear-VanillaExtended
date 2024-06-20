"use strict";

class CustomItems {
	static handleCustomItems(database, core, config, itemConfig, itemData, jsonUtil)
	{
		if (itemConfig["Armored Vests"]["AddGearVanExt_GEN4_Light"]) {
			core.addItemRetexture("AddGearVanExt_GEN4_Light", itemData["AddGearVanExt_GEN4_Light"].BaseItemID, itemData["AddGearVanExt_GEN4_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_GEN4_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_GEN4_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 2; // 11
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}

			// change debuffs
			//dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.10)); // -10
			//dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.23)); // -13
			//dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.08)); // -11
			
			// remove plates from specific slots
			const replaceSlots = dbItem._props.Slots.filter((i) => i._name != "Groin")
													.filter((i) => i._name != "Groin_back");
			dbItem._props.Slots = replaceSlots;
			
			// remove plates from item preset
			const replaceItemPreset = database.globals.ItemPresets[`AddGearVanExt_GEN4_Light_GlobalsItemPreset`]._items.filter((i) => i.slotId != "Groin")
																													   .filter((i) => i.slotId != "Groin_back");
			database.globals.ItemPresets[`AddGearVanExt_GEN4_Light_GlobalsItemPreset`]._items = replaceItemPreset;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_GEN4_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 95019
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_GEN4_Light"])
				database.templates.prices["AddGearVanExt_GEN4_Light"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_GEN4_Light", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 4);
			
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Light"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Light", itemData["AddGearVanExt_6B43_Light"].BaseItemID, itemData["AddGearVanExt_6B43_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 5; // 15
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change debuffs
			//dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.40)); // -21
			//dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.29)); // -15
			//dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.40)); // -16
			
			// remove plates from specific slots
			const replaceSlots = dbItem._props.Slots.filter((i) => i._name != "Shoulder_l")
													.filter((i) => i._name != "Shoulder_r")
													.filter((i) => i._name != "Groin");
			dbItem._props.Slots = replaceSlots;
			
			// remove plates from item preset
			const replaceItemPreset = database.globals.ItemPresets[`AddGearVanExt_6B43_Light_GlobalsItemPreset`]._items.filter((i) => i.slotId != "Shoulder_l")
																													   .filter((i) => i.slotId != "Shoulder_r")
																													   .filter((i) => i.slotId != "Groin");
			database.globals.ItemPresets[`AddGearVanExt_6B43_Light_GlobalsItemPreset`]._items = replaceItemPreset;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.60)); // 153987
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Light"])
				database.templates.prices["AddGearVanExt_6B43_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Assault"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Assault", itemData["AddGearVanExt_6B43_Assault"].BaseItemID, itemData["AddGearVanExt_6B43_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Assault"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Assault"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3; // 17
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			}

			// change debuffs
			/*
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.12)); // -31
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.24)); // -16
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.30)); // -19
			*/
			
			// remove plates from specific slots
			const replaceSlots = dbItem._props.Slots.filter((i) => i._name != "Groin");
			dbItem._props.Slots = replaceSlots;
			
			// remove plates from item preset
			const replaceItemPreset = database.globals.ItemPresets[`AddGearVanExt_6B43_Assault_GlobalsItemPreset`]._items.filter((i) => i.slotId != "Groin");
			database.globals.ItemPresets[`AddGearVanExt_6B43_Assault_GlobalsItemPreset`]._items = replaceItemPreset;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Assault"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 307974
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Assault"])
				database.templates.prices["AddGearVanExt_6B43_Assault"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Mobility"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Mobility", itemData["AddGearVanExt_6B43_Mobility"].BaseItemID, itemData["AddGearVanExt_6B43_Mobility"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Mobility"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Mobility"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 4; // 16
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			}
			
			// change debuffs
			/*
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.37)); // -22
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.10)); // -19
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.37)); // -17
			*/
			
			// remove plates from specific slots
			const replaceSlots = dbItem._props.Slots.filter((i) => i._name != "Shoulder_l")
													.filter((i) => i._name != "Shoulder_r");
			dbItem._props.Slots = replaceSlots;
			
			// remove plates from item preset
			const replaceItemPreset = database.globals.ItemPresets[`AddGearVanExt_6B43_Mobility_GlobalsItemPreset`]._items.filter((i) => i.slotId != "Shoulder_l")
																													   .filter((i) => i.slotId != "Shoulder_r");
			database.globals.ItemPresets[`AddGearVanExt_6B43_Mobility_GlobalsItemPreset`]._items = replaceItemPreset;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Mobility"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 230981
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Mobility"])
				database.templates.prices["AddGearVanExt_6B43_Mobility"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_ANA_M2_Armor"]) {
			core.addItemRetexture("AddGearVanExt_ANA_M2_Armor", itemData["AddGearVanExt_ANA_M2_Armor"].BaseItemID, itemData["AddGearVanExt_ANA_M2_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_ANA_M2_Armor"].LootWeigthMult, false);
			const dbItem = database.templates.items["AddGearVanExt_ANA_M2_Armor"];
			const rigItem = database.templates.items["5ab8dced86f774646209ec87"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1; // 6
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.Slots = rigItem._props.Slots;
			
			// change slots parents id
			for (const slotIndex in dbItem._props._Slots)
			{
				dbItem._props._Slots[slotIndex]._parent = "AddGearVanExt_ANA_M2_Armor";
			}
			
			// add item preset
			const newItemPreset = jsonUtil.clone(database.globals.ItemPresets["6571952aacb85662e7024c01"]);
			newItemPreset._encyclopedia = "AddGearVanExt_ANA_M2_Armor";
			newItemPreset._id = `AddGearVanExt_ANA_M2_Armor_GlobalsItemPreset`;
			newItemPreset._items[0]._tpl = "AddGearVanExt_ANA_M2_Armor";
			database.globals.ItemPresets[`AddGearVanExt_ANA_M2_Armor_GlobalsItemPreset`] = newItemPreset;
			
			//database.globals.ItemPresets[`AddGearVanExt_ANA_M2_Armor_GlobalsItemPreset`]._items = database.globals.ItemPresets[`6571952aacb85662e7024c01`]._items;
			//database.globals.ItemPresets[`AddGearVanExt_ANA_M2_Armor_GlobalsItemPreset`]._items[0]._tpl = "AddGearVanExt_ANA_M2_Armor";
			
			// change debuffs
			/*
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.25)); // -6
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.50)); // -1
			*/
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_ANA_M2_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "5ab8dced86f774646209ec87"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 61819
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_ANA_M2_Armor"])
				database.templates.prices["AddGearVanExt_ANA_M2_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_ANA_M2_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 3);
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Defender2_Light"]) {
			core.addItemRetexture("AddGearVanExt_Defender2_Light", itemData["AddGearVanExt_Defender2_Light"].BaseItemID, itemData["AddGearVanExt_Defender2_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Defender2_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Defender2_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 1.5; // 10
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.07)); // 65
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.07)); // 65
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.33)); // -6
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.16)); // -10
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -6
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Defender2_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 230981
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Defender2_Light"])
				database.templates.prices["AddGearVanExt_Defender2_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Bagariy_Armor"]) {
			core.addItemRetexture("AddGearVanExt_Bagariy_Armor", itemData["AddGearVanExt_Bagariy_Armor"].BaseItemID, itemData["AddGearVanExt_Bagariy_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Bagariy_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Bagariy_Armor"];
			const rigItem = database.templates.items["628d0618d1ba6e4fa07ce5a4"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 2; // 11
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.24)); // -16
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.35)); // -9
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.22)); // -7
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Bagariy_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "628d0618d1ba6e4fa07ce5a4"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 84600
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Bagariy_Armor"])
				database.templates.prices["AddGearVanExt_Bagariy_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Bagariy_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 4);
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Bagariy_Armor_No_Bear"]) {
			core.addItemRetexture("AddGearVanExt_Bagariy_Armor_No_Bear", itemData["AddGearVanExt_Bagariy_Armor_No_Bear"].BaseItemID, itemData["AddGearVanExt_Bagariy_Armor_No_Bear"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Bagariy_Armor_No_Bear"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Bagariy_Armor_No_Bear"];
			const rigItem = database.templates.items["628d0618d1ba6e4fa07ce5a4"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 2; // 11
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.24)); // -16
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.35)); // -9
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.22)); // -7
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Bagariy_Armor_No_Bear"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "628d0618d1ba6e4fa07ce5a4"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 84600
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Bagariy_Armor_No_Bear"])
				database.templates.prices["AddGearVanExt_Bagariy_Armor_No_Bear"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Bagariy_Armor_No_Bear", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 4);
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Osprey_Armor"]) {
			core.addItemRetexture("AddGearVanExt_Osprey_Armor", itemData["AddGearVanExt_Osprey_Armor"].BaseItemID, itemData["AddGearVanExt_Osprey_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Osprey_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Osprey_Armor"];
			const rigItem = database.templates.items["60a3c70cde5f453f634816a3"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 0.7; // 10
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change durability
			dbItem._props.Durability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.08)); // 55
			dbItem._props.MaxDurability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.08)); // 55
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.18)); // -9
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.27)); // -8
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.14)); // -6.
			
			// other stats
			if (rigItem._props.armorZone.includes("Stomach")) {
				dbItem._props.armorZone = ["Chest", "Stomach"];
			} else {
				dbItem._props.armorZone = ["Chest"];
			}
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Osprey_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "60a3c70cde5f453f634816a3"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.40)); // 74400
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Osprey_Armor"])
				database.templates.prices["AddGearVanExt_Osprey_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Osprey_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 2);
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Osprey_Assault_Armor"]) {
			core.addItemRetexture("AddGearVanExt_Osprey_Assault_Armor", itemData["AddGearVanExt_Osprey_Assault_Armor"].BaseItemID, itemData["AddGearVanExt_Osprey_Assault_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Osprey_Assault_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Osprey_Assault_Armor"];
			const rigItem = database.templates.items["60a3c68c37ea821725773ef5"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1; // 11.5
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.armorZone = rigItem._props.armorZone;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.06)); // -15
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.09)); // -10
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.18)); // -9
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Osprey_Assault_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "60a3c68c37ea821725773ef5"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 139500
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Osprey_Assault_Armor"])
				database.templates.prices["AddGearVanExt_Osprey_Assault_Armor"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_RBAV_Armor"]) {
			core.addItemRetexture("AddGearVanExt_RBAV_Armor", itemData["AddGearVanExt_RBAV_Armor"].BaseItemID, itemData["AddGearVanExt_RBAV_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_RBAV_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_RBAV_Armor"];
			const rigItem = database.templates.items["628dc750b910320f4c27a732"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1; // 6.5
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.armorZone = rigItem._props.armorZone;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.12)); // -7
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.33)); // -4
			dbItem._props.weaponErgonomicPenalty = rigItem._props.weaponErgonomicPenalty;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_RBAV_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "628dc750b910320f4c27a732"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 76500
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_RBAV_Armor"])
				database.templates.prices["AddGearVanExt_RBAV_Armor"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Redut_Light_Olive"]) {
			core.addItemRetexture("AddGearVanExt_Redut_Light_Olive", itemData["AddGearVanExt_Redut_Light_Olive"].BaseItemID, itemData["AddGearVanExt_Redut_Light_Olive"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Redut_Light_Olive"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Redut_Light_Olive"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3.5; // 10
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.23)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.33)); // -8
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.09)); // -10
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Redut_Light_Olive"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 82299
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Redut_Light_Olive"])
				database.templates.prices["AddGearVanExt_Redut_Light_Olive"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Redut_Light_Woodland"]) {
			core.addItemRetexture("AddGearVanExt_Redut_Light_Woodland", itemData["AddGearVanExt_Redut_Light_Woodland"].BaseItemID, itemData["AddGearVanExt_Redut_Light_Woodland"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Redut_Light_Woodland"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Redut_Light_Woodland"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3.5; // 10
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.23)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.33)); // -8
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.09)); // -10
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Redut_Light_Woodland"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 82299
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Redut_Light_Woodland"])
				database.templates.prices["AddGearVanExt_Redut_Light_Woodland"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Redut_Assault_Olive"]) {
			core.addItemRetexture("AddGearVanExt_Redut_Assault_Olive", itemData["AddGearVanExt_Redut_Assault_Olive"].BaseItemID, itemData["AddGearVanExt_Redut_Assault_Olive"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Redut_Assault_Olive"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Redut_Assault_Olive"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3; // 13.5
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.70)); // -11
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.06)); // -14
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -12
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Redut_Assault_Olive"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 150637
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Redut_Assault_Olive"])
				database.templates.prices["AddGearVanExt_Redut_Assault_Olive"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Redut_Assault_Woodland"]) {
			core.addItemRetexture("AddGearVanExt_Redut_Assault_Woodland", itemData["AddGearVanExt_Redut_Assault_Woodland"].BaseItemID, itemData["AddGearVanExt_Redut_Assault_Woodland"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Redut_Assault_Woodland"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Redut_Assault_Woodland"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3; // 13.5
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.70)); // -11
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.06)); // -14
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -12
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Redut_Assault_Woodland"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 150637
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Redut_Assault_Woodland"])
				database.templates.prices["AddGearVanExt_Redut_Assault_Woodland"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_TacTec_Armor"]) {
			core.addItemRetexture("AddGearVanExt_TacTec_Armor", itemData["AddGearVanExt_TacTec_Armor"].BaseItemID, itemData["AddGearVanExt_TacTec_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_TacTec_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_TacTec_Armor"];
			const rigItem = database.templates.items["5b44cad286f77402a54ae7e5"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1.5; // 8
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.armorZone = rigItem._props.armorZone;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.28)); // -5
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.33)); // -2
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.66)); // -1
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_TacTec_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "5b44cad286f77402a54ae7e5"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.10)); // 81900
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_TacTec_Armor"])
				database.templates.prices["AddGearVanExt_TacTec_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_TacTec_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 4);
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_THOR_ICBA_Light"]) {
			core.addItemRetexture("AddGearVanExt_THOR_ICBA_Light", itemData["AddGearVanExt_THOR_ICBA_Light"].BaseItemID, itemData["AddGearVanExt_THOR_ICBA_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_THOR_ICBA_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_THOR_ICBA_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 7; // 11
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.28)); // 65
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.28)); // 65
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.50)); // -7
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.50)); // -4
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.50)); // -5
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_THOR_ICBA_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 206700
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_THOR_ICBA_Light"])
				database.templates.prices["AddGearVanExt_THOR_ICBA_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_THOR_ICBA_Assault"]) {
			core.addItemRetexture("AddGearVanExt_THOR_ICBA_Assault", itemData["AddGearVanExt_THOR_ICBA_Assault"].BaseItemID, itemData["AddGearVanExt_THOR_ICBA_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_THOR_ICBA_Assault"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_THOR_ICBA_Assault"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 2; // 16
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.14)); // -12
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.37)); // -5
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.20)); // -8
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_THOR_ICBA_Assault"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 275600
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_THOR_ICBA_Assault"])
				database.templates.prices["AddGearVanExt_THOR_ICBA_Assault"] = dbItemHandbook.Price;
		}
		
		// THOR MOBILITY
		if (itemConfig["Armored Vests"]["AddGearVanExt_THOR_ICBA_Mobility"]) {
			core.addItemRetexture("AddGearVanExt_THOR_ICBA_Mobility", itemData["AddGearVanExt_THOR_ICBA_Mobility"].BaseItemID, itemData["AddGearVanExt_THOR_ICBA_Mobility"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_THOR_ICBA_Mobility"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_THOR_ICBA_Mobility"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 4; // 14
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.28)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.12)); // -7
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.50)); // -5
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_THOR_ICBA_Mobility"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.30)); // 241150
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_THOR_ICBA_Mobility"])
				database.templates.prices["AddGearVanExt_THOR_ICBA_Mobility"] = dbItemHandbook.Price;
		}
		
		// STRANDHOGG ARMOR
		if (itemConfig["Armored Vests"]["AddGearVanExt_Strandhogg_Armor"]) {
			core.addItemRetexture("AddGearVanExt_Strandhogg_Armor", itemData["AddGearVanExt_Strandhogg_Armor"].BaseItemID, itemData["AddGearVanExt_Strandhogg_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Strandhogg_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Strandhogg_Armor"];
			const rigItem = database.templates.items["61bcc89aef0f505f0c6cd0fc"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1.5; // 5
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.33)); // -2
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = rigItem._props.weaponErgonomicPenalty;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Strandhogg_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "61bcc89aef0f505f0c6cd0fc"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.46)); // 61101
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Strandhogg_Armor"])
				database.templates.prices["AddGearVanExt_Strandhogg_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Strandhogg_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 3);
		}
		
		// KNIGHT MASK NO WIRES
		if (itemConfig["Face Cover"]["AddGearVanExt_Knight_Mask_No_Wires"]) {
			core.addItemRetexture("AddGearVanExt_Knight_Mask_No_Wires", itemData["AddGearVanExt_Knight_Mask_No_Wires"].BaseItemID, itemData["AddGearVanExt_Knight_Mask_No_Wires"].BundlePath, config.EnableTradeOffers, config.AddToBots, itemData["AddGearVanExt_Knight_Mask_No_Wires"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Knight_Mask_No_Wires"];
			
			// change headwear restict
			dbItem._props.BlocksHeadwear = false;
		}
		
		// BANSHEE ARMOR
		if (itemConfig["Armored Vests"]["AddGearVanExt_Banshee_Armor"]) {
			core.addItemRetexture("AddGearVanExt_Banshee_Armor", itemData["AddGearVanExt_Banshee_Armor"].BaseItemID, itemData["AddGearVanExt_Banshee_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Banshee_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Banshee_Armor"];
			const rigItem = database.templates.items["639343fce101f4caa40a4ef3"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 0.9; // 6
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.33)); // -2
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.33)); // -2
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Banshee_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "639343fce101f4caa40a4ef3"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.50)); // 58000
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Banshee_Armor"])
				database.templates.prices["AddGearVanExt_Banshee_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Banshee_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 2);
		}
		
		// ANA M1 ARMOR
		if (itemConfig["Armored Vests"]["AddGearVanExt_ANA_M1_Armor"]) {
			core.addItemRetexture("AddGearVanExt_ANA_M1_Armor", itemData["AddGearVanExt_ANA_M1_Armor"].BaseItemID, itemData["AddGearVanExt_ANA_M1_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_ANA_M1_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_ANA_M1_Armor"];
			const rigItem = database.templates.items["5c0e722886f7740458316a57"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1.3; // 7
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.Slots = rigItem._props.Slots;
			
			// change slots parents id
			for (const slotIndex in dbItem._props._Slots)
			{
				dbItem._props._Slots[slotIndex]._parent = "AddGearVanExt_ANA_M1_Armor";
			}
			
			// add item preset
			const newItemPreset = jsonUtil.clone(database.globals.ItemPresets["6576616086f11bca4106d35f"]);
			newItemPreset._encyclopedia = "AddGearVanExt_ANA_M1_Armor";
			newItemPreset._id = `AddGearVanExt_ANA_M1_Armor_GlobalsItemPreset`;
			newItemPreset._items[0]._tpl = "AddGearVanExt_ANA_M1_Armor";
			database.globals.ItemPresets[`AddGearVanExt_ANA_M1_Armor_GlobalsItemPreset`] = newItemPreset;
			
			// change debuffs
			/*
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.4)); // -3
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = rigItem._props.weaponErgonomicPenalty;
			*/
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_ANA_M1_Armor"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "5c0e722886f7740458316a57"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.3)); // 65422
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_ANA_M1_Armor"])
				database.templates.prices["AddGearVanExt_ANA_M1_Armor"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_ANA_M1_Armor", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 2);
		}
		
		// BELT-A RIG
		if (itemConfig["Rigs"]["AddGearVanExt_Belt_A"]) {
			core.addItemRetexture("AddGearVanExt_Belt_A", itemData["AddGearVanExt_Belt_A"].BaseItemID, itemData["AddGearVanExt_Belt_A"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Belt_A"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Belt_A"];
			const rigItem = database.templates.items["5c0e6a1586f77404597b4965"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 0.7; // 1
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 1.0)); // 0
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = rigItem._props.weaponErgonomicPenalty;
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Belt_A"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "5c0e6a1586f77404597b4965"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.34)); // 26448
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Belt_A"])
				database.templates.prices["AddGearVanExt_Belt_A"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Belt_A", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 2);
		}
	
		// BELT-B RIG
		if (itemConfig["Rigs"]["AddGearVanExt_Belt_B"]) {
			core.addItemRetexture("AddGearVanExt_Belt_B", itemData["AddGearVanExt_Belt_B"].BaseItemID, itemData["AddGearVanExt_Belt_B"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Belt_B"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Belt_B"];
			const rigItem = database.templates.items["5c0e6a1586f77404597b4965"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1.0; // 0.7
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 1;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.armorZone = rigItem._props.armorZone;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = rigItem._props.speedPenaltyPercent;
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 1.0)); // 0
			
			// rig layout
			dbItem._props.RigLayoutName = "sprofi_mk2";
			dbItem._props.Grids = [
				{
					"_id": "60a621c59c197e4e8c4455e8",
					"_name": "1",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
					"cellsH": 1,
					"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455e9",
					"_name": "2",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455ea",
					"_name": "3",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455eb",
					"_name": "4",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455ec",
					"_name": "5",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455ed",
					"_name": "6",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455ee",
					"_name": "7",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455ef",
					"_name": "8",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 0,
						"cellsV": -1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a",
									"54009119af1c881c07000029"
								],
								"Filter": []
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455f0",
					"_name": "9",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 0,
						"cellsV": -1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a",
									"54009119af1c881c07000029"
								],
								"Filter": []
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455f1",
					"_name": "10",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 0,
						"cellsV": -1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a",
									"54009119af1c881c07000029"
								],
								"Filter": []
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a621c59c197e4e8c4455f2",
					"_name": "11",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				},
				{
					"_id": "60a65b5ff3cdbd565f577a54",
					"_name": "12",
					"_parent": "60a621c49c197e4e8c4455e6",
					"_props": {
						"cellsH": 1,
						"cellsV": 1,
						"filters": [
							{
								"ExcludedFilter": [
									"5448bf274bdc2dfc2f8b456a"
								],
								"Filter": [
									"54009119af1c881c07000029"
								]
							}
						],
						"isSortingTable": false,
						"maxCount": 0,
						"maxWeight": 0,
						"minCount": 0
					},
					"_proto": "55d329c24bdc2d892f8b4567"
				}
			];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Belt_B"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "5c0e6a1586f77404597b4965"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.76)); // 9918
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Belt_B"])
				database.templates.prices["AddGearVanExt_Belt_B"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_Belt_B", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 1);
		}
		
		if (itemConfig["Rigs"]["AddGearVanExt_Osprey_Protection_Armless_Rig"]) {
			core.addItemRetexture("AddGearVanExt_Osprey_Protection_Armless_Rig", itemData["AddGearVanExt_Osprey_Protection_Armless_Rig"].BaseItemID, itemData["AddGearVanExt_Osprey_Protection_Armless_Rig"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Osprey_Protection_Armless_Rig"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Osprey_Protection_Armless_Rig"];
			
			// change weight
			if (dbItem._props.Weight > 0) {
				dbItem._props.Weight = dbItem._props.Weight - 2.5; // 10
			} else {
				dbItem._props.Weight = dbItem._props.Weight;
			}
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = dbItem._props.Width;
				dbItem._props.Height = dbItem._props.Height;
			}
			
			// change stats
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.09)); // 50
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.09)); // 50
			if (dbItem._props.armorZone.includes("Stomach")) {
				dbItem._props.armorZone = ["Chest", "Stomach"];
			} else {
				dbItem._props.armorZone = ["Chest"];
			}
			
			// change debuffs
			dbItem._props.speedPenaltyPercent =  Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.25)); // -6
			dbItem._props.mousePenalty = dbItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.40)); // -3
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Osprey_Protection_Armless_Rig"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.35)); // 125937.5
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Osprey_Protection_Armless_Rig"])
				database.templates.prices["AddGearVanExt_Osprey_Protection_Armless_Rig"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Osprey_Protection_Armor_Light"]) {
			core.addItemRetexture("AddGearVanExt_Osprey_Protection_Armor_Light", itemData["AddGearVanExt_Osprey_Protection_Armor_Light"].BaseItemID, itemData["AddGearVanExt_Osprey_Protection_Armor_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Osprey_Protection_Armor_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Osprey_Protection_Armor_Light"];
			const rigItem = database.templates.items["60a3c68c37ea821725773ef5"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 0.7; // 10
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			
			// change durability
			dbItem._props.Durability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.09)); // 50
			dbItem._props.MaxDurability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.09)); // 50
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.25)); // -6
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.00)); // 
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.60)); // -2
			
			// other stats
			if (rigItem._props.armorZone.includes("Stomach")) {
				dbItem._props.armorZone = ["Chest", "Stomach"];
			} else {
				dbItem._props.armorZone = ["Chest"];
			}
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Osprey_Protection_Armor_Light"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "60a3c68c37ea821725773ef5"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.05)); // 184062.5
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Osprey_Protection_Armor_Light"])
				database.templates.prices["AddGearVanExt_Osprey_Protection_Armor_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearVanExt_Osprey_Assault_Armor_Light"]) {
			core.addItemRetexture("AddGearVanExt_Osprey_Assault_Armor_Light", itemData["AddGearVanExt_Osprey_Assault_Armor_Light"].BaseItemID, itemData["AddGearVanExt_Osprey_Assault_Armor_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Osprey_Assault_Armor"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Osprey_Assault_Armor_Light"];
			const rigItem = database.templates.items["60a3c70cde5f453f634816a3"];
			
			// change weight
			if (rigItem._props.Weight > 0) {
				dbItem._props.Weight = rigItem._props.Weight - 1.7; // 10.8
			} else {
				dbItem._props.Weight = rigItem._props.Weight;
			}
			
			// change inventory space
			if (rigItem._props.Width != 1 && rigItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = rigItem._props.Width;
				dbItem._props.Height = rigItem._props.Height;
			}
			
			// same stats as rig
			dbItem._props.RepairCost = rigItem._props.RepairCost;
			dbItem._props.CanSellOnRagfair = rigItem._props.CanSellOnRagfair;
			dbItem._props.armorClass = rigItem._props.armorClass;
			dbItem._props.BluntThroughput = rigItem._props.BluntThroughput;
			dbItem._props.ArmorMaterial = rigItem._props.ArmorMaterial;
			dbItem._props.ArmorType = rigItem._props.ArmorType;
			dbItem._props.Durability = rigItem._props.Durability;
			dbItem._props.MaxDurability = rigItem._props.MaxDurability;
			dbItem._props.Indestructibility = rigItem._props.Indestructibility;
			dbItem._props.MaterialType = rigItem._props.MaterialType;
			dbItem._props.armorZone = rigItem._props.armorZone;
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.20)); // -4
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.00)); // unchanged
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.00)); //unchanged
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Osprey_Assault_Armor_Light"});
			const rigHandbookEntry = database.templates.handbook.Items.find((item) => {return item.Id === "60a3c70cde5f453f634816a3"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(rigHandbookEntry.Price - (rigHandbookEntry.Price * 0.18)); // 122002.88
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Osprey_Assault_Armor_Light"])
				database.templates.prices["AddGearVanExt_Osprey_Assault_Armor_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Rigs"]["AddGearVanExt_Rhino_Rig"]) {
			core.addItemRetexture("AddGearVanExt_Rhino_Rig", itemData["AddGearVanExt_Rhino_Rig"].BaseItemID, itemData["AddGearVanExt_Rhino_Rig"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_Rhino_Rig"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_Rhino_Rig"];
			
			// change weight
			if (dbItem._props.Weight > 0) {
				dbItem._props.Weight = dbItem._props.Weight - 0.7; // 10 
			} else {
				dbItem._props.Weight = dbItem._props.Weight;
			}
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			} else {
				dbItem._props.Width = dbItem._props.Width;
				dbItem._props.Height = dbItem._props.Height;
			}
			
			// change stats
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.09)); // 55
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.09)); // 55
			if (dbItem._props.armorZone.includes("Stomach")) {
				dbItem._props.armorZone = ["Chest", "Stomach"];
			} else {
				dbItem._props.armorZone = ["Chest"];
			}
			
			// change debuffs
			dbItem._props.speedPenaltyPercent =  Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.18)); // -4
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.27)); // -1
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -3
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_Rhino_Rig"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 119027.2
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_Rhino_Rig"])
				database.templates.prices["AddGearVanExt_Rhino_Rig"] = dbItemHandbook.Price;
		}
	}
}

module.exports = CustomItems;