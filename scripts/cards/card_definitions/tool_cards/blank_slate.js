export default {
  id: "blank_slate",
  name: "Blank Slate",
  type: "tool",
  tier: "rare",
  mana: 1,
  courage: 5,
  vanish: true,
  pack: "cycle",
  actions: [{ action: "destroyHand" }, { action: "draw", value: 4 }],
  slots: 2,
  shardUpgrades: {
    vanish: false,
  },
  bothShardUpgrades: {
    actions: [{ action: "destroyHand" }, { action: "draw", value: 8 }],
  },
};
