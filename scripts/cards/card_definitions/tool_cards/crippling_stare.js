export default {
  id: "crippling_stare",
  name: "Crippling Stare",
  type: "tool",
  target: "monster",
  mana: 1,
  tier: "legendary",
  courage: 8,
  vanish: true,
  retain: true,
  sound: "tool24",
  effects: [
    { effect: "might", amount: -2, turns: -1, hex: true },
    { effect: "punch", amount: -0.8, turns: 1, hex: true },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "might", amount: -4, turns: -1, hex: true },
      { effect: "punch", amount: -0.9, turns: 1, hex: true },
    ],
  },
};
