export default {
  id: "emerald_staff",
  name: "Emerald Staff",
  type: "magic",
  mana: 0,
  weight: 0.3,
  use: 3,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 7 }],
  effects: [{ effect: "sorcery", amount: 0.1, turns: -1 }],
  sound: "magic4",
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    use: 4,
    magic: [{ type: "aligned", amount: 12 }],
  },
};
