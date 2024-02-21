export default {
  id: "broadsword",
  name: "Broadsword",
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
  trade: ["hardened_steel"],
};
