export default {
  id: "thresh",
  name: "Thresh",
  type: "tool",
  tier: "rare",
  mana: 1,
  courage: 4,
  use: 2,
  weight: 3,
  pack: "rainbow",
  effects: [{ effect: "lemonade", amount: 2, turns: 2 }],
  actions: [{ action: "addCard", value: 4, what: "chaff", to: "drawCards" }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "lemonade", amount: 3, turns: 2 }],
    actions: [{ action: "addCard", value: 5, what: "chaff", to: "drawCards" }],
  },
};
