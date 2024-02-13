export default {
  id: "sprint",
  name: "Sprint",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  use: 1,
  weight: 2,
  courage: 3,
  pack: "combine",
  draw: {
    dmg: [1],
    target: "player",
  },
  actions: [
    { action: "stat", what: "speed", key: "current", value: 4 },
    { action: "stat", what: "health", key: "current", value: -4 },
  ],
  slots: 1,
  fireShardUpgrades: {
    use: 2,
    actions: [
      { action: "stat", what: "speed", key: "current", value: 6 },
      { action: "stat", what: "health", key: "current", value: -4 },
    ],
  },
  iceShardUpgrades: {
    draw: {
      dmg: [1],
      target: "monster",
    },
    actions: [{ action: "stat", what: "speed", key: "current", value: 4 }],
  },
};
