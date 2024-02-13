export default {
  id: "bottled_energy",
  name: "Bottled Energy",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    actions: [{ action: "stat", what: "mana", key: "current", value: 1 }],
  },
  discard: {
    actions: [{ action: "stat", what: "mana", key: "current", value: 1 }],
  },
  destroy: {
    actions: [{ action: "stat", what: "mana", key: "current", value: 3 }],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      actions: [{ action: "stat", what: "mana", key: "current", value: 2 }],
    },
    discard: {
      actions: [{ action: "stat", what: "mana", key: "current", value: 2 }],
    },
    destroy: {
      actions: [{ action: "stat", what: "mana", key: "current", value: 6 }],
    },
  },
};
