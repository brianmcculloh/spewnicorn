export default {
  id: "storm",
  name: "Storm",
  type: "ability",
  mana: 2,
  tier: "rare",
  courage: 4,
  pack: "rainbow",
  effects: [{ effect: "thunder", amount: 0.35, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "thunder", amount: 0.6, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "thunder", amount: 0.85, turns: -1 }],
  },
};
