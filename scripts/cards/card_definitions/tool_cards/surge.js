export default {
  id: "surge",
  name: "Surge",
  type: "tool",
  mana: 1,
  vanish: true,
  tier: "rare",
  weight: 2,
  courage: 5,
  actions: [{ action: "stat", what: "might", key: "current", value: "double" }],
  slots: 1,
  shardUpgrades: {
    vanish: false,
  },
};
