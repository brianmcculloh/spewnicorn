export default {
  id: "cascade",
  name: "Cascade",
  type: "tool",
  tier: "rare",
  mana: 1,
  courage: 5,
  vanish: true,
  pack: "cycle",
  actions: [{ action: "discardHand" }, { action: "draw", value: 5 }],
  slots: 2,
  shardUpgrades: {
    vanish: false,
  },
  bothShardUpgrades: {
    mana: 0,
  },
};
