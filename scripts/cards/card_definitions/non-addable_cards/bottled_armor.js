export default {
  id: "bottled_armor",
  name: "Bottled Armor",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    armor: [1],
  },
  discard: {
    armor: [5],
  },
  destroy: {
    armor: [15],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      armor: [2],
    },
    discard: {
      armor: [10],
    },
    destroy: {
      armor: [30],
    },
  },
};
