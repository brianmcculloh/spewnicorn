export default {
  id: "colossus",
  name: "Colossus",
  type: "ability",
  mana: 3,
  tier: "legendary",
  courage: 8,
  effects: [
    { effect: "muster", amount: 4, turns: -1 },
    { effect: "stout", amount: 15, turns: -1 },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "muster", amount: 7, turns: -1 },
      { effect: "stout", amount: 22, turns: -1 },
    ],
  },
};
