export default {
  id: "hooked_wand",
  name: "Hooked Wand",
  type: "magic",
  mana: 3,
  weight: 1,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 14 }],
  sound: "magic4",
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 19 }],
  },
  trade: ["glowing_wand"],
};
