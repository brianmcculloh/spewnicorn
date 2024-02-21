export default {
  id: "elemental_charge",
  name: "Elemental Charge",
  type: "magic",
  mana: 1,
  tier: "common",
  magic: [{ type: "elemental", amount: 10 }],
  sound: "magic3",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "elemental", amount: 20 }],
  },
};
