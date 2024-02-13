export default {
  id: "cloudburst",
  name: "Cloudburst",
  type: "tool",
  mana: 1,
  vanish: true,
  pack: "rainbow",
  tier: "rare",
  weight: 2,
  courage: 5,
  actions: [
    { action: "stat", what: "thunder", key: "current", value: "double" },
  ],
  slots: 1,
  shardUpgrades: {
    vanish: false,
  },
};
