export default {
  id: "sharpened_axe",
  name: "Sharpened Axe",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 2,
  addable: false,
  tier: "uncommon",
  weapon: true,
  dmg: [10, 10, 10],
  effects: [{ effect: "might", amount: 4, turns: 1 }],
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [10, 10, 10, 10],
  },
  trade: ["redfury"],
};
