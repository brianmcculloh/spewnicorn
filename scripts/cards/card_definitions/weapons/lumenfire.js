export default {
  id: "lumenfire",
  name: "Lumenfire",
  type: "magic",
  mana: 3,
  weight: 0.8,
  use: 2,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "aligned", amount: 10 }],
  effects: [
    { effect: "mage", amount: 2, turns: -1 },
    { effect: "enchanter", amount: 1, turns: -1 },
  ],
  sound: "magic4",
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  trade: ["endless_light"],
};
