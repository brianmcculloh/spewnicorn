export default {
  id: "clever_maneuver",
  name: "Clever Maneuver",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  pack: "cycle",
  weight: 4,
  sound: "tool10",
  actions: [
    { action: "draw", value: 3 },
    { action: "discard", value: 1 },
  ],
  draw: {
    blk: [6],
  },
  slots: 1,
  fireShardUpgrades: {
    actions: [
      { action: "draw", value: 5 },
      { action: "discard", value: 2 },
    ],
  },
  iceShardUpgrades: {
    draw: {
      blk: [12],
    },
  },
};
