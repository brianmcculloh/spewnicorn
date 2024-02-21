export default {
  id: "bottled_attack",
  name: "Bottled Attack",
  type: "bottled",
  playable: false,
  addable: false,
  draw: {
    dmg: [2],
  },
  discard: {
    dmg: [10],
  },
  destroy: {
    dmg: [25],
  },
  slots: 1,
  shardUpgrades: {
    draw: {
      dmg: [4],
    },
    discard: {
      dmg: [20],
    },
    destroy: {
      dmg: [50],
    },
  },
};
