export default {
  id: "aligned_charm",
  name: "Aligned Charm",
  type: "magic",
  mana: 1,
  tier: "uncommon",
  pack: "rainbow",
  weight: 3,
  courage: 3,
  magic: [{ type: "aligned", amount: 8 }],
  sound: "magic2",
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "aligned", amount: 16 }],
  },
  iceShardUpgrades: {
    linger: 1,
  },
};
