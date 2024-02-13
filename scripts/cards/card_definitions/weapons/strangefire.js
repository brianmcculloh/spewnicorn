export default {
  id: "strangefire",
  name: "Strangefire",
  type: "magic",
  mana: 3,
  weight: 1,
  use: 2,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 10 }],
  effects: [
    { effect: "mage", amount: 1, turns: -1 },
    { effect: "enchanter", amount: 1, turns: -1 },
  ],
  sound: "magic4",
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  trade: ["lumenfire"],
};
