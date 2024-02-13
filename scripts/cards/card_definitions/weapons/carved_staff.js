export default {
  id: "carved_staff",
  name: "Carved Staff",
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
  trade: ["gold_staff", "green_staff", "purple_staff"],
};
