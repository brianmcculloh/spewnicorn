export default {
  id: "non_newtonian",
  name: "Non-Newtonian",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  effects: [{ effect: "hardened", amount: 4, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "hardened", amount: 6, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "hardened", amount: 8, turns: -1 }],
  },
};
