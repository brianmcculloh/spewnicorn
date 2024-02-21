export default {
  id: "gift",
  name: "Gift",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  weight: 6,
  pack: "rainbow",
  sound: "tool6",
  actions: [{ action: "addCard", value: 1, type: "any", to: "handCards" }],
  slots: 1,
  fireShardUpgrades: {
    use: 2,
    vanish: false,
  },
  iceShardUpgrades: {
    actions: [{ action: "addCard", value: 3, type: "any", to: "handCards" }],
  },
};
