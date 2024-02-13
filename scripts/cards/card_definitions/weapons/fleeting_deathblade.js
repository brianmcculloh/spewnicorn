export default {
  id: "fleeting_deathblade",
  name: "Fleeting Deathblade",
  type: "attack",
  mana: 0,
  expire: 4,
  target: "all",
  weight: 0.05,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [10, 10, 10, 10],
  draw: {
    dmg: [1, 1, 1, 1],
  },
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    expire: 6,
    dmg: [15, 15, 15, 15],
  },
};
