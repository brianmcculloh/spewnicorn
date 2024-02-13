export default {
  id: "entity",
  name: "Entity",
  type: "tool",
  tier: "uncommon",
  playable: false,
  weight: 3,
  pack: "cycle",
  discard: {
    effects: [{ effect: "might", amount: 2, turns: -1 }],
  },
  slots: 2,
  shardUpgrades: {
    discard: {
      effects: [{ effect: "might", amount: 3, turns: -1 }],
    },
  },
  bothShardUpgrades: {
    retain: true,
  },
};
