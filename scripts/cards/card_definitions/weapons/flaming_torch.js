export default {
  id: "flaming_torch",
  name: "Flaming Torch",
  type: "magic",
  mana: 3,
  weight: 10,
  weapon: true,
  addable: false,
  magic: [{ type: "aligned", amount: 10 }],
  sound: "magic4",
  additionalDesc: "Level II Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  trade: ["blazing_torch"],
};
