export default {
  id: "bottled_block",
  name: "Bottled Block",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    blk: [4],
  },
  discard: {
    blk: [20],
  },
  destroy: {
    blk: [50],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      blk: [6],
    },
    discard: {
      blk: [25],
    },
    destroy: {
      blk: [60],
    },
  },
};
