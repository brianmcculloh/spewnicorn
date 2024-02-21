export default {
  id: "dreadfurnace",
  name: "Dreadfurnace",
  type: "magic",
  mana: 2,
  weight: 0.05,
  use: 2,
  weapon: true,
  addable: false,
  tier: "legendary",
  magic: [{ type: "aligned", amount: 25 }],
  effects: [
    { effect: "mage", amount: 2, turns: -1 },
    { effect: "enchanter", amount: 2, turns: -1 },
  ],
  sound: "magic4",
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    effects: [
      { effect: "mage", amount: 3, turns: -1 },
      { effect: "enchanter", amount: 3, turns: -1 },
    ],
    magic: [{ type: "aligned", amount: 40 }],
  },
};
