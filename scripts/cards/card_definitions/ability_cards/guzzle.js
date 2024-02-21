export default {
  id: "guzzle",
  name: "Guzzle",
  type: "ability",
  mana: 1,
  tier: "rare",
  weight: 4,
  courage: 5,
  effects: [{ effect: "vigor", amount: 0.5, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "vigor", amount: 0.75, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "vigor", amount: 1, turns: -1 }],
  },
};
