export default {
  id: "bottled_speed",
  name: "Bottled Speed",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    actions: [{ action: "stat", what: "speed", key: "current", value: 1 }],
  },
  discard: {
    actions: [{ action: "stat", what: "speed", key: "current", value: 2 }],
  },
  destroy: {
    actions: [{ action: "stat", what: "speed", key: "current", value: 4 }],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      actions: [{ action: "stat", what: "speed", key: "current", value: 2 }],
    },
    discard: {
      actions: [{ action: "stat", what: "speed", key: "current", value: 4 }],
    },
    destroy: {
      actions: [{ action: "stat", what: "speed", key: "current", value: 8 }],
    },
  },
};
