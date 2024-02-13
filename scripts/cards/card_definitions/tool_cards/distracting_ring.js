export default {
  id: "distracting_ring",
  name: "Distracting Ring",
  type: "tool",
  playable: false,
  tier: "uncommon",
  weight: 4,
  pack: "cycle",
  draw: {
    dmg: [3],
  },
  destroy: {
    actions: [{ action: "draw", value: 4 }],
  },
  slots: 1,
  fireShardUpgrades: {
    retain: true,
    destroy: {
      dmg: [3],
      actions: [{ action: "draw", value: 5 }],
    },
  },
  iceShardUpgrades: {
    retain: true,
    draw: {
      dmg: [10],
    },
  },
};
