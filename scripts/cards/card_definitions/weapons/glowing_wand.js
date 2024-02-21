export default {
  id: "glowing_wand",
  name: "Glowing Wand",
  type: "magic",
  mana: 3,
  weight: 0.8,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 19 }],
  sound: "magic4",
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 25 }],
  },
  trade: ["glowing_sceptre"],
};
