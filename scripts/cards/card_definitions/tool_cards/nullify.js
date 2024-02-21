export default {
  id: "nullify",
  name: "Nullify",
  type: "tool",
  mana: 0,
  vanish: true,
  pack: "rainbow",
  effects: [{ effect: "vex", amount: 2, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "vex", amount: 4, turns: -1 }],
  },
};
