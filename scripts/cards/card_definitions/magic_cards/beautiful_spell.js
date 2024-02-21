export default {
  id: "beautiful_spell",
  name: "Beautiful Spell",
  type: "magic",
  mana: 1,
  weight: 2,
  tier: "common",
  magic: [{ type: "elemental", amount: 7 }],
  sound: "magic3",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "elemental", amount: 12 }],
  },
  sparkle: {
    magic: [{ type: "elemental", amount: 10 }],
  },
};
