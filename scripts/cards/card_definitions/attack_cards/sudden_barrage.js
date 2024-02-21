export default {
  id: "sudden_barrage",
  name: "Sudden Barrage",
  type: "attack",
  target: "all",
  mana: 0,
  tier: "uncommon",
  weight: 2,
  vanish: true,
  dmg: [2, 2, 2, 2],
  effects: [{ effect: "might", amount: -1, turns: -1, hex: true }],
  slots: 1,
  shardUpgrades: {
    dmg: [3, 3, 3, 3],
    effects: [{ effect: "might", amount: -2, turns: -1, hex: true }],
  },
};
