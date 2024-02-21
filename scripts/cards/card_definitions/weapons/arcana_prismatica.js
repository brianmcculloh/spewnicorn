export default {
  id: "arcana_prismatica",
  name: "Arcana Prismatica",
  type: "magic",
  mana: 2,
  weight: 0.05,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "rainbow", amount: 80 }],
  sound: "magic4",
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    magic: [{ type: "rainbow", amount: 95 }],
  },
};
