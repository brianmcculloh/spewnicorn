export default {
  id: "black_oak_wand",
  name: "Black Oak Wand",
  type: "magic",
  mana: 3,
  weight: 2,
  weapon: true,
  addable: false,
  magic: [{ type: "aligned", amount: 10 }],
  sound: "magic4",
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 14 }],
  },
  trade: ["hooked_wand"],
};
