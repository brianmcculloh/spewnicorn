export default {
  id: "deathmaker",
  name: "Deathmaker",
  type: "attack",
  mana: 2,
  target: "monster",
  weight: 0.2,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [10, 10, 10, 10, 10],
  effects: [{ effect: "might", amount: 8, turns: 2 }],
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    dmg: [10, 10, 10, 10, 10, 10],
  },
};
