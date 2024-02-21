export default {
  id: "hammer_thrust",
  name: "Hammer Thrust",
  type: "attack",
  target: "monster",
  mana: 2,
  weight: 4,
  dmg: [12],
  sound: "attack2",
  effects: [
    { effect: "punch", amount: -0.25, turns: 1, hex: true },
    { effect: "might", amount: -2, turns: 1, hex: true },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "punch", amount: -0.5, turns: 1, hex: true },
      { effect: "might", amount: -4, turns: 1, hex: true },
    ],
  },
};
