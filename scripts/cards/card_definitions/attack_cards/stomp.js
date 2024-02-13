export default {
  id: "stomp",
  name: "Stomp",
  type: "attack",
  mana: 2,
  target: "monster",
  dmg: [12],
  sound: "attack2",
  effects: [{ effect: "might", amount: -3, turns: 1, hex: true }],
  slots: 1,
  shardUpgrades: {
    dmg: [20],
    effects: [{ effect: "might", amount: -6, turns: 1, hex: true }],
  },
};
