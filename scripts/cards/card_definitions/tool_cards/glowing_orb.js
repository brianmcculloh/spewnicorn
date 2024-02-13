export default {
  id: "glowing_orb",
  name: "Glowing Orb",
  type: "tool",
  playable: false,
  pack: "cycle",
  discard: {
    actions: [
      { action: "stat", what: "mana", key: "current", value: 1 },
      { action: "draw", value: 1 },
    ],
  },
  slots: 2,
  shardUpgrades: {
    discard: {
      actions: [
        { action: "stat", what: "mana", key: "current", value: 2 },
        { action: "draw", value: 2 },
      ],
    },
  },
  bothShardUpgrades: {
    retain: true,
  },
};
