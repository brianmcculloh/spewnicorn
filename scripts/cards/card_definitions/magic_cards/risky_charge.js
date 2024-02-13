export default {
  id: "risky_charge",
  name: "Risky Charge",
  type: "magic",
  mana: 1,
  tier: "common",
  magic: [{ type: "random", amount: 15 }],
  sound: "magic3",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "random", amount: 20 }],
  },
};
