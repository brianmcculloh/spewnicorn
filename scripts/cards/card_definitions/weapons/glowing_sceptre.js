export default {
  id: "glowing_sceptre",
  name: "Glowing Sceptre",
  type: "magic",
  mana: 3,
  weight: 0.6,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 25 }],
  sound: "magic4",
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 32 }],
  },
  trade: ["darkfeather", "heart_of_chaos", "evernature", "arcana_prismatica"],
};
