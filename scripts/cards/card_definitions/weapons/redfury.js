export default {
  id: "redfury",
  name: "Redfury",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 1,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [10, 10, 10],
  effects: [{ effect: "might", amount: 6, turns: 1 }],
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [10, 10, 10, 10],
  },
  trade: ["endless_edge", "deathmaker"],
};
