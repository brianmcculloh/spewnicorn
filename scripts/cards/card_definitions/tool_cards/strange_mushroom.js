export default {
  id: "strange_mushroom",
  name: "Strange Mushroom",
  type: "tool",
  tier: "uncommon",
  mana: 0,
  use: 2,
  weight: 3,
  pack: "rainbow",
  effects: [{ effect: "lemonade", amount: 1, turns: -1 }],
  actions: [{ action: "addCard", value: 1, type: "clutter", to: "drawCards" }],
  slots: 1,
  shardUpgrades: {
    use: 3,
    actions: [
      { action: "addCard", value: 1, type: "clutter", to: "drawCards" },
      { action: "addCard", value: 1, what: "chaff", to: "drawCards" },
    ],
  },
};
