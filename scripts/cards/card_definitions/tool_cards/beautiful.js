export default {
  id: "beautiful",
  name: "Beautiful",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  pack: "combine",
  weight: 2,
  courage: 3,
  sound: "tool5",
  actions: [
    { action: "addCard", value: 1, what: "shimmer", to: "handCards" },
    { action: "addCard", value: 2, what: "self_enhance", to: "drawCards" },
  ],
  slots: 1,
  fireShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "shimmer", to: "handCards" },
      { action: "addCard", value: 2, what: "self_enhance", to: "drawCards" },
    ],
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 1, what: "shimmer", to: "handCards" },
      { action: "addCard", value: 4, what: "self_enhance", to: "drawCards" },
    ],
  },
};
