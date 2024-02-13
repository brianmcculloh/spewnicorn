export default {
  id: "neigh",
  name: "Neigh",
  type: "tool",
  mana: 0,
  linger: 1,
  use: 1,
  weight: 4,
  target: "monster",
  effects: [{ effect: "punch", amount: -0.15, turns: -1, hex: true }],
  slots: 1,
  shardUpgrades: {
    linger: 2,
    use: 2,
  },
};
