export default {
  id: "endless_edge",
  name: "Endless Edge",
  type: "attack",
  mana: 2,
  target: "monster",
  weight: 0.2,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [10, 10, 10, 10, 10],
  effects: [{ effect: "punch", amount: 0.4, turns: 2 }],
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    dmg: [10, 10, 10, 10, 10, 10],
  },
};
