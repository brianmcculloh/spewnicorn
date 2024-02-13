export default {
  id: "mantleblight",
  name: "Mantleblight",
  type: "attack",
  mana: 2,
  target: "all",
  weight: 0.1,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [10, 10, 10],
  draw: {
    dmg: [1, 1, 1],
  },
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    dmg: [15, 15, 15],
  },
};
