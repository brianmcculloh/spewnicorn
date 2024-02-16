export default {
  id: "risky_charm",
  name: "Risky Charm",
  type: "magic",
  mana: 0,
  tier: "common",
  weight: 7,
  retain: true,
  magic: [{ type: "random", amount: 15 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "random", amount: 30 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
