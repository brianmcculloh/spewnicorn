export default {
  id: "serrated_pike",
  name: "Serrated Pike",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 10,
  weapon: true,
  addable: false,
  dmg: [12],
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [20],
  },
  trade: [
    "ancient_spear",
    "runed_bayonet",
    "cursed_spike",
    "frozen_harpoon",
    "ornate_javelin",
    "double_headed_lance",
  ],
};
