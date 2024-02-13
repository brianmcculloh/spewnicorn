export default {
  id: "self_fulfill",
  name: "Self-Fulfill",
  type: "tool",
  mana: 3,
  retain: true,
  addable: false,
  vanish: true,
  tier: "legendary",
  additionalDesc: "Achievement unlocked",
  actions: [
    { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
    { action: "stat", what: "shimmer", key: "current", value: 1 },
    { action: "stat", what: "sparkle", key: "current", value: 1 },
    { action: "stat", what: "aura", key: "current", value: 1 },
    { action: "stat", what: "health", key: "max", value: 1 },
    { action: "stat", what: "health", key: "current", value: 1 },
  ],
  slots: 2,
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
      { action: "stat", what: "shimmer", key: "current", value: 1 },
      { action: "stat", what: "sparkle", key: "current", value: 1 },
      { action: "stat", what: "aura", key: "current", value: 1 },
      { action: "stat", what: "health", key: "max", value: 1 },
      { action: "stat", what: "aggro", key: "current", value: -1 },
    ],
    actions_2: [
      { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
      { action: "stat", what: "shimmer", key: "current", value: 1 },
      { action: "stat", what: "sparkle", key: "current", value: 1 },
      { action: "stat", what: "aura", key: "current", value: 1 },
      { action: "stat", what: "health", key: "max", value: 2 },
      { action: "stat", what: "aggro", key: "current", value: -3 },
    ],
  },
  fireShardUpgrades: {
    actions: [
      { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
      { action: "stat", what: "courage", value: 3 },
      { action: "stat", what: "health", key: "max", value: 1 },
      { action: "stat", what: "aggro", key: "current", value: -1 },
    ],
    actions_2: [
      { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
      { action: "stat", what: "courage", value: 3 },
      { action: "stat", what: "health", key: "max", value: 2 },
      { action: "stat", what: "aggro", key: "current", value: -3 },
    ],
  },
  bothShardUpgrades: {
    actions: [
      { action: "addCard", value: 4, what: "self_enhance", to: "discardCards" },
      { action: "stat", what: "health", key: "max", value: 2 },
      { action: "stat", what: "aggro", key: "current", value: -6 },
    ],
  },
};
