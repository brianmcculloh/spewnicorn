export default {
  id: "heart_of_chaos",
  name: "Heart of Chaos",
  type: "magic",
  mana: 2,
  weight: 0.05,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "chaos", amount: 70 }],
  sound: "magic4",
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    magic: [{ type: "chaos", amount: 85 }],
  },
};
