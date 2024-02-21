export default {
  id: "jester",
  name: "Jester",
  type: "tool",
  tier: "uncommon",
  mana: 1,
  vanish: true,
  pack: "combine",
  sound: "jester",
  effects: [{ effect: "lemonade", amount: 1, turns: -1 }],
  actions: [
    { action: "addCard", value: 1, what: "junk", to: "drawCards" },
    { action: "addCard", value: 1, what: "junk", to: "handCards" },
    { action: "addCard", value: 1, what: "junk", to: "discardCards" },
  ],
  slots: 1,
  shardUpgrades: {
    vanish: false,
    use: 1,
  },
};
