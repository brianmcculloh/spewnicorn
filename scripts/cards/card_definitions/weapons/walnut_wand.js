export default {
  id: "walnut_wand",
  name: "Walnut Wand",
  type: "magic",
  mana: 3,
  weight: 10,
  weapon: true,
  addable: false,
  magic: [{ type: "aligned", amount: 7 }],
  sound: "magic4",
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 10 }],
  },
  trade: ["black_oak_wand"],
};
