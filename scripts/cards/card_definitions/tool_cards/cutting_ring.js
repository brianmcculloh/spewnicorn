export default {
  id: "cutting_ring",
  name: "Cutting Ring",
  type: "tool",
  playable: false,
  tier: "uncommon",
  pack: "cycle",
  draw: {
    dmg: [5],
  },
  discard: {
    actions: [{ action: "draw", value: 2 }],
  },
  slots: 1,
  fireShardUpgrades: {
    retain: true,
    draw: {
      dmg: [10],
    },
  },
  iceShardUpgrades: {
    retain: true,
    discard: {
      actions: [{ action: "draw", value: 3 }],
    },
  },
};
