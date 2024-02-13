export default {
  id: "elemental_charm",
  name: "Elemental Charm",
  type: "magic",
  mana: 0,
  tier: "common",
  retain: true,
  magic: [{ type: "elemental", amount: 4 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "elemental", amount: 8 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
