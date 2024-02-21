export default {
  id: "gears_of_war",
  name: "Gears of War",
  type: "tool",
  mana: 2,
  tier: "uncommon",
  weight: 4,
  courage: 3,
  pack: "combine",
  sound: "tool12",
  actions: [
    { action: "addCard", value: 3, type: "tool", to: "drawCards" },
    { action: "draw", value: 1 },
  ],
  slots: 1,
  fireShardUpgrades: {
    mana: 1,
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 5, type: "tool", to: "drawCards" },
      { action: "draw", value: 2 },
    ],
  },
};
