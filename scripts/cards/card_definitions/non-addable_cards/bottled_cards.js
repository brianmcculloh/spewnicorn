export default {
  id: "bottled_cards",
  name: "Bottled Cards",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    actions: [{ action: "draw", value: 2 }],
  },
  discard: {
    actions: [{ action: "draw", value: 3 }],
  },
  destroy: {
    actions: [{ action: "draw", value: 6 }],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      actions: [{ action: "draw", value: 3 }],
    },
    discard: {
      actions: [{ action: "draw", value: 5 }],
    },
    destroy: {
      actions: [{ action: "draw", value: 10 }],
    },
  },
};
