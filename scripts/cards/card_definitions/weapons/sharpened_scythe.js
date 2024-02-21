export default {
  id: "sharpened_scythe",
  name: "Sharpened Scythe",
  type: "attack",
  mana: 3,
  vanish: true,
  target: "all",
  weight: 10,
  weapon: true,
  addable: false,
  dmg: [6],
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [10],
  },
  trade: ["blackblade", "spiked_scythe"],
};
