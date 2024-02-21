export default {
  id: "firmament_mover",
  name: "Firmament Mover",
  type: "attack",
  mana: 2,
  target: "monster",
  weight: 0.05,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [70],
  effects: [{ effect: "punch", amount: -0.35, turns: -1, hex: true }],
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    dmg: [85],
  },
};
