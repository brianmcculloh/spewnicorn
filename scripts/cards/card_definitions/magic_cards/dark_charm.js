export default {
  id: "dark_charm",
  name: "Dark Charm",
  type: "magic",
  mana: 0,
  tier: "common",
  retain: true,
  magic: [{ type: "dark", amount: 4 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "dark", amount: 8 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
