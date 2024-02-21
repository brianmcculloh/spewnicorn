export default {
  id: "reaper",
  name: "Reaper",
  type: "attack",
  mana: 2,
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
    mana: 1,
    dmg: [15, 15, 15, 15],
  },
};
