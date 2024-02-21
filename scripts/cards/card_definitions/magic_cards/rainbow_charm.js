export default {
  id: "rainbow_charm",
  name: "Rainbow Charm",
  type: "magic",
  mana: 0,
  tier: "common",
  retain: true,
  magic: [{ type: "rainbow", amount: 5 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "rainbow", amount: 10 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
