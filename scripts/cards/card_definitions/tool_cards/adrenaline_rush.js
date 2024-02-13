export default {
  id: "adrenaline_rush",
  name: "Adrenaline Rush",
  type: "tool",
  mana: 0,
  tier: "legendary",
  courage: 8,
  sound: "tool27",
  actions: [
    { action: "stat", what: "mana", key: "current", value: 2 },
    { action: "stat", what: "speed", key: "current", value: 2 },
  ],
  slots: 1,
  shardUpgrades: {
    actions: [
      { action: "stat", what: "mana", key: "current", value: 3 },
      { action: "stat", what: "speed", key: "current", value: 3 },
    ],
  },
};
