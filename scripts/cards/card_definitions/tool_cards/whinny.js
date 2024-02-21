export default {
  id: "whinny",
  name: "Whinny",
  type: "tool",
  mana: 0,
  linger: 2,
  use: 2,
  weight: 4,
  target: "monster",
  effects: [{ effect: "might", amount: -2, turns: -1, hex: true }],
  slots: 1,
  shardUpgrades: {
    linger: 3,
    use: 3,
  },
};
