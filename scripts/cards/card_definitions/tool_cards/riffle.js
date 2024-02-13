export default {
  id: "riffle",
  name: "Riffle",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  pack: "cycle",
  weight: 6,
  sound: "tool14",
  actions: [
    { action: "draw", value: 2 },
    { action: "discard", value: 2 },
  ],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    actions: [
      { action: "draw", value: 3 },
      { action: "discard", value: 3 },
    ],
  },
};
