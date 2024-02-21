export default {
  id: "bravery",
  name: "Bravery",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  pack: "combine",
  weight: 2,
  courage: 3,
  sound: "tool13",
  actions: [
    { action: "addCard", value: 1, what: "courage", to: "handCards" },
    { action: "addCard", value: 2, what: "self_enhance", to: "drawCards" },
  ],
  slots: 1,
  fireShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "courage", to: "handCards" },
      { action: "addCard", value: 2, what: "self_enhance", to: "drawCards" },
    ],
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 1, what: "courage", to: "handCards" },
      { action: "addCard", value: 4, what: "self_enhance", to: "drawCards" },
    ],
  },
};
