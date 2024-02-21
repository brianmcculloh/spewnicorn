export default {
  id: "target",
  name: "Target",
  type: "tool",
  target: "all",
  mana: 2,
  tier: "uncommon",
  weight: 1,
  effects: [{ effect: "marked", amount: 2, turns: -1, hex: true }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "marked", amount: 4, turns: -1, hex: true }],
  },
};
