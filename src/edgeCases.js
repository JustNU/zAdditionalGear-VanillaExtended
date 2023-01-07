"use strict";

class EdgeCases {
	static handleEdgeCases(database, core, config, itemConfig, itemData)
	{
		// GEN4 light
		if (itemConfig["Armored Vests"]["AddGearVanExt_GEN4_Light"]) {
			core.addItemRetexture("AddGearVanExt_GEN4_Light", itemData["AddGearVanExt_GEN4_Light"].BaseItemID, itemData["AddGearVanExt_GEN4_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_GEN4_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_GEN4_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 1; // 12
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.08)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.08)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.10)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.23)); // -13
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.08)); // -11
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_GEN4_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 95019
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_GEN4_Light"])
				database.templates.prices["AddGearVanExt_GEN4_Light"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearVanExt_GEN4_Light", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 3);
			
		}
		
		// 6b43 light
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Light"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Light", itemData["AddGearVanExt_6B43_Light"].BaseItemID, itemData["AddGearVanExt_6B43_Light"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 4; // 16
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.29)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.29)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.40)); // -21
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.29)); // -15
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.40)); // -16
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.60)); // 153987
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Light"])
				database.templates.prices["AddGearVanExt_6B43_Light"] = dbItemHandbook.Price;
		}
		
		// 6b43 assault
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Assault"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Assault", itemData["AddGearVanExt_6B43_Assault"].BaseItemID, itemData["AddGearVanExt_6B43_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Assault"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Assault"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 2; // 18
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.12)); // 75
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.12)); // 75
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.12)); // -31
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.24)); // -16
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.30)); // -19
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Assault"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 307974
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Assault"])
				database.templates.prices["AddGearVanExt_6B43_Assault"] = dbItemHandbook.Price;
		}
		
		// 6b43 mobility
		if (itemConfig["Armored Vests"]["AddGearVanExt_6B43_Mobility"]) {
			core.addItemRetexture("AddGearVanExt_6B43_Mobility", itemData["AddGearVanExt_6B43_Mobility"].BaseItemID, itemData["AddGearVanExt_6B43_Mobility"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_6B43_Mobility"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearVanExt_6B43_Mobility"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3; // 17
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.24)); // 65
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.24)); // 65
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.37)); // -22
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.10)); // -19
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.37)); // -17
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearVanExt_6B43_Mobility"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 230981
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearVanExt_6B43_Mobility"])
				database.templates.prices["AddGearVanExt_6B43_Mobility"] = dbItemHandbook.Price;
		}
		
		// ana2 plate
		if (itemConfig["Armored Vests"]["AddGearVanExt_ANA_M2_Armor"]) {
			core.addItemRetexture("AddGearVanExt_ANA_M2_Armor", itemData["AddGearVanExt_ANA_M2_Armor"].BaseItemID, itemData["AddGearVanExt_ANA_M2_Armor"].BundlePath, false, config.AddToBots, itemData["AddGearVanExt_ANA_M2_Armor"].LootWeigthMult);
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
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.25)); // -6
			dbItem._props.mousePenalty = rigItem._props.mousePenalty;
			dbItem._props.weaponErgonomicPenalty =  Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.50)); // -1
			
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
				dbItem._props.Weight = dbItem._props.Weight - 1 // 10.5
			
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
				dbItem._props.Weight = rigItem._props.Weight - 1; // 12
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
				dbItem._props.Weight = rigItem._props.Weight - 1; // 12
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
			dbItem._props.Durability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.17)); // 50
			dbItem._props.MaxDurability = Math.round(rigItem._props.MaxDurability - (rigItem._props.MaxDurability * 0.17)); // 50
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(rigItem._props.speedPenaltyPercent - (rigItem._props.speedPenaltyPercent * 0.18)); // -9
			dbItem._props.mousePenalty = Math.round(rigItem._props.mousePenalty - (rigItem._props.mousePenalty * 0.27)); // -8
			dbItem._props.weaponErgonomicPenalty = Math.round(rigItem._props.weaponErgonomicPenalty - (rigItem._props.weaponErgonomicPenalty * 0.14)); // -6.
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
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
	}
}

module.exports = EdgeCases;