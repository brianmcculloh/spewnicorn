export default {
  id: "superstorm",
  name: "Superstorm",
  type: "tool",
  mana: 1,
  vanish: true,
  pack: "rainbow",
  tier: "rare",
  weight: 2,
  courage: 5,
  actions: [
    { action: "stat", what: "lightning", key: "current", value: "double" },
  ],
  slots: 1,
  shardUpgrades: {
    vanish: false,
  },
};
