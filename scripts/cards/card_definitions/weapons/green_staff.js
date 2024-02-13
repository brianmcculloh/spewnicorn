export default {
  id: "green_staff",
  name: "Green Staff",
  type: "magic",
  mana: 1,
  weight: 0.5,
  use: 3,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 6 }],
  effects: [{ effect: "conjure", amount: 1, turns: -1 }],
  sound: "magic4",
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 0,
    magic: [{ type: "aligned", amount: 11 }],
  },
};
