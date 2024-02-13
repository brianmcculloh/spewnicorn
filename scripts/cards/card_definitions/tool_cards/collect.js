export default {
  id: "collect",
  name: "Collect",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  pack: "cycle",
  actions: [{ action: "draw", value: 5 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    actions: [{ action: "draw", value: 8 }],
  },
};
