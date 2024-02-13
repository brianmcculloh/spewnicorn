export default {
  id: "roar",
  name: "Roar",
  type: "tool",
  mana: 1,
  vanish: true,
  tier: "rare",
  weight: 2,
  courage: 5,
  actions: [{ action: "stat", what: "punch", key: "current", value: "double" }],
  slots: 1,
  shardUpgrades: {
    vanish: false,
  },
};
