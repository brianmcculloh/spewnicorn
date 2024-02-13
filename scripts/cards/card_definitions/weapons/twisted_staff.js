export default {
  id: "twisted_staff",
  name: "Twisted Staff",
  type: "magic",
  mana: 2,
  use: 2,
  weight: 0.8,
  weapon: true,
  addable: false,
  magic: [{ type: "aligned", amount: 10 }],
  effects: [{ effect: "summon", amount: 2, turns: -1 }],
  sound: "magic4",
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
};
