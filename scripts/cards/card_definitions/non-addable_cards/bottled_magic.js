export default {
  id: "bottled_magic",
  name: "Bottled Magic",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
  },
  discard: {
    magic: [{ type: "aligned", amount: 6 }],
  },
  destroy: {
    magic: [{ type: "aligned", amount: 20 }],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      magic: [{ type: "aligned", amount: 2 }],
    },
    discard: {
      magic: [{ type: "aligned", amount: 12 }],
    },
    destroy: {
      magic: [{ type: "aligned", amount: 40 }],
    },
  },
};
