export default {
  id: "fractured_orb",
  name: "Fractured Orb",
  type: "tool",
  playable: false,
  weight: 3,
  pack: "cycle",
  destroy: {
    actions: [
      { action: "stat", what: "mana", key: "current", value: 4 },
      { action: "draw", value: 2 },
    ],
  },
  slots: 2,
  shardUpgrades: {
    destroy: {
      actions: [
        { action: "stat", what: "mana", key: "current", value: 6 },
        { action: "draw", value: 4 },
      ],
    },
  },
  bothShardUpgrades: {
    retain: true,
  },
};
