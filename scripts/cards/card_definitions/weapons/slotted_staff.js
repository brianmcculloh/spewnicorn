export default {
  id: "slotted_staff",
  name: "Slotted Staff",
  type: "magic",
  mana: 1,
  use: 3,
  weight: 0.8,
  weapon: true,
  addable: false,
  magic: [{ type: "aligned", amount: 5 }],
  effects: [{ effect: "summon", amount: 1, turns: -1 }],
  sound: "magic4",
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 10 }],
  },
};
