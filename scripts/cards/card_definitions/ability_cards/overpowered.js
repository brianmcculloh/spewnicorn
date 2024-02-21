export default {
  id: "overpowered",
  name: "Overpowered",
  type: "ability",
  mana: 1,
  tier: "rare",
  courage: 4,
  effects: [{ effect: "punch", amount: 0.25, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "punch", amount: 0.5, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "punch", amount: 0.75, turns: -1 }],
  },
};
