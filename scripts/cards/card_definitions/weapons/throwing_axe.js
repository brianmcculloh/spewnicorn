export default {
  id: "throwing_axe",
  name: "Throwing Axe",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 10,
  addable: false,
  weapon: true,
  dmg: [4, 4, 4],
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [5, 5, 5, 5],
  },
  trade: ["sharpened_axe"],
};
