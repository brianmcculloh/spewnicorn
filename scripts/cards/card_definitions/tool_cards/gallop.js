export default {
  id: "gallop",
  name: "Gallop",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  use: 1,
  sound: "tool4",
  actions: [{ action: "addCard", value: 1, what: "boost", to: "handCards" }],
  slots: 1,
  fireShardUpgrades: {
    use: 2,
    actions: [{ action: "addCard", value: 2, what: "boost", to: "handCards" }],
  },
  iceShardUpgrades: {
    use: 3,
  },
};
