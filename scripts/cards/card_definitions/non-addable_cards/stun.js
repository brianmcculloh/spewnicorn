export default {
  id: "stun",
  name: "Stun",
  type: "tool",
  mana: 0,
  addable: false,
  target: "monster",
  effects: [{ effect: "punch", amount: -0.4, turns: 1, hex: true }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "punch", amount: -0.6, turns: 1, hex: true }],
  },
};
