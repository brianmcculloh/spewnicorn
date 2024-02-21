export default {
  id: "chaos_charm",
  name: "Chaos Charm",
  type: "magic",
  mana: 0,
  tier: "common",
  retain: true,
  magic: [{ type: "chaos", amount: 4 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "chaos", amount: 8 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
