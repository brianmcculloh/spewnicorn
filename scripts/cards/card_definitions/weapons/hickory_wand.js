export default {
  id: "hickory_wand",
  name: "Hickory Wand",
  type: "magic",
  mana: 3,
  weight: 0.7,
  weapon: true,
  pack: "rainbow",
  magic: [{ type: "aligned", amount: 5 }],
  sound: "magic4",
  additionalDesc: "Level I Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 7 }],
  },
  trade: ["walnut_wand"],
};
