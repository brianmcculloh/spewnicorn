export default {
  id: "power_surge",
  name: "Power Surge",
  type: "tool",
  mana: 0,
  tier: "rare",
  use: 1,
  weight: 4,
  courage: 4,
  pack: "cycle",
  sound: "tool19",
  actions: [
    { action: "stat", what: "mana", key: "current", value: 2 },
    { action: "stat", what: "health", key: "current", value: -4 },
    { action: "draw", value: 1 },
    { action: "destroy", value: 1, optional: true },
  ],
  draw: {
    dmg: [3],
  },
  slots: 2,
  shardUpgrades: {
    use: 2,
    actions: [
      { action: "stat", what: "mana", key: "current", value: 3 },
      { action: "stat", what: "health", key: "current", value: -4 },
      { action: "draw", value: 2 },
      { action: "destroy", value: 1, optional: true },
    ],
  },
  fireShardUpgrades: {
    use_2: 3,
  },
  bothShardUpgrades: {
    actions: [
      { action: "stat", what: "mana", key: "current", value: 3 },
      { action: "stat", what: "health", key: "current", value: -4 },
      { action: "draw", value: 4 },
      { action: "destroy", value: 1, optional: true },
    ],
  },
};
