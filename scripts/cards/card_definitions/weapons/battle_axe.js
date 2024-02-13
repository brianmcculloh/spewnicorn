export default {
  id: "battle_axe",
  name: "Battle Axe",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 10,
  addable: false,
  weapon: true,
  dmg: [12],
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [20],
  },
  trade: ["swift_battle_axe"],
};
