export default {
  id: "quaking_staff",
  name: "Quaking Staff",
  type: "magic",
  mana: 3,
  weight: 0.8,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "aligned", amount: 16 }],
  sound: "magic4",
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 21 }],
  },
  trade: ["runemark", "darksphere", "staff_of_wonder"],
};
