export default {
  id: "bulwark",
  name: "Bulwark",
  type: "tool",
  mana: 2,
  tier: "rare",
  weight: 6,
  courage: 3,
  blk: [24],
  effects: [{ effect: "stout", amount: 5, turns: 3 }],
  slots: 2,
  shardUpgrades: {
    blk: [32],
    effects: [{ effect: "stout", amount: 8, turns: 3 }],
  },
  bothShardUpgrades: {
    blk: [40],
    effects: [{ effect: "stout", amount: 12, turns: 3 }],
  },
};
