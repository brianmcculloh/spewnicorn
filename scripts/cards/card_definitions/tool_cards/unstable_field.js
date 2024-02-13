export default {
  id: "unstable_field",
  name: "Unstable Field",
  type: "tool",
  tier: "uncommon",
  playable: false,
  weight: 3,
  courage: 3,
  pack: "cycle",
  destroy: {
    effects: [{ effect: "might", amount: 8, turns: -1 }],
  },
  slots: 2,
  shardUpgrades: {
    destroy: {
      effects: [{ effect: "might", amount: 12, turns: -1 }],
    },
  },
  bothShardUpgrades: {
    retain: true,
  },
};
