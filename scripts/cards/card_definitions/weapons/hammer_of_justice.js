export default {
  id: "hammer_of_justice",
  name: "Hammer of Justice",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 0.8,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [40],
  effects: [{ effect: "punch", amount: -0.2, turns: -1, hex: true }],
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [50],
  },
  trade: ["gravitas"],
};
