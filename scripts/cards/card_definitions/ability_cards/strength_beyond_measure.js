export default {
  id: "strength_beyond_measure",
  name: "Strength Beyond Measure",
  type: "ability",
  mana: 2,
  tier: "legendary",
  courage: 8,
  effects: [
    { effect: "punch", amount: 0.4, turns: -1 },
    { effect: "might", amount: 5, turns: -1 },
    { effect: "fierce", amount: 20, turns: -1 },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "punch", amount: 0.5, turns: -1 },
      { effect: "might", amount: 8, turns: -1 },
      { effect: "fierce", amount: 30, turns: -1 },
    ],
  },
};
