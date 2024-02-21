export default {
  id: "hinder_strike",
  name: "Hinder Strike",
  type: "attack",
  mana: 1,
  target: "monster",
  weight: 2,
  pack: "rainbow",
  dmg: [10],
  effects: [{ effect: "vex", amount: 1, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    dmg: [20],
    effects: [{ effect: "vex", amount: 2, turns: -1 }],
  },
};
