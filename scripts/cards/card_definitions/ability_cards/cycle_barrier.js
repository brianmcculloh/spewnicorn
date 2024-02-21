export default {
  id: "cycle_barrier",
  name: "Cycle Barrier",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  pack: "cycle",
  effects: [{ effect: "preserve", amount: 10, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "preserve", amount: 18, turns: -1 }],
  },
};
