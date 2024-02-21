export default {
  id: "swift_battle_axe",
  name: "Swift Battle Axe",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 2,
  addable: false,
  tier: "uncommon",
  weapon: true,
  dmg: [30],
  effects: [{ effect: "punch", amount: 0.2, turns: 1 }],
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [40],
  },
  trade: ["cleave"],
};
