export default {
  id: "molten_hammer",
  name: "Molten Hammer",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 1,
  addable: false,
  tier: "uncommon",
  weapon: true,
  dmg: [30],
  effects: [{ effect: "punch", amount: -0.15, turns: -1, hex: true }],
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [40],
  },
  trade: ["hammer_of_justice"],
};
