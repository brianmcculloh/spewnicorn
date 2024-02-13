export default {
  id: "sage",
  name: "Sage",
  type: "ability",
  mana: 3,
  tier: "rare",
  courage: 6,
  weight: 2,
  pack: "combine",
  effects: [
    { effect: "wisdom", amount: 4, turns: -1 },
    { effect: "stifled", amount: 2, turns: -1 },
  ],
  slots: 2,
  shardUpgrades: {
    effects: [
      { effect: "wisdom", amount: 8, turns: -1 },
      { effect: "stifled", amount: 2, turns: -1 },
    ],
  },
  bothShardUpgrades: {
    effects: [
      { effect: "wisdom", amount: 8, turns: -1 },
      { effect: "stifled", amount: 1, turns: -1 },
    ],
  },
};
