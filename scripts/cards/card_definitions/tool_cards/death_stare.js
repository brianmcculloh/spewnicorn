export default {
  id: "death_stare",
  name: "Death Stare",
  type: "tool",
  mana: 1,
  weight: 2,
  target: "monster",
  effects: [{ effect: "might", amount: -6, turns: 1, hex: true }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "might", amount: -10, turns: 1, hex: true }],
  },
  sparkle: {
    effects: [{ effect: "might", amount: 6, turns: 1 }],
  },
};
