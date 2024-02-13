export default {
  id: "prescience",
  name: "Prescience",
  type: "ability",
  mana: 2,
  tier: "rare",
  weight: 9,
  courage: 6,
  effects: [{ effect: "muster", amount: 4, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "muster", amount: 7, turns: -1 }],
  },
  fireShardUpgrades: {
    effects_2: [{ effect: "muster", amount: 10, turns: -1 }],
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
