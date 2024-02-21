export default {
  id: "reckless_abandon",
  name: "Reckless Abandon",
  type: "ability",
  mana: 3,
  tier: "rare",
  courage: 6,
  weight: 2,
  pack: "cycle",
  effects: [
    { effect: "might", amount: 10, turns: -1 },
    { effect: "vulnerable", amount: 2, turns: -1 },
  ],
  slots: 2,
  shardUpgrades: {
    effects: [
      { effect: "might", amount: 16, turns: -1 },
      { effect: "vulnerable", amount: 2, turns: -1 },
    ],
  },
  bothShardUpgrades: {
    effects: [
      { effect: "might", amount: 16, turns: -1 },
      { effect: "vulnerable", amount: 1, turns: -1 },
    ],
  },
};
