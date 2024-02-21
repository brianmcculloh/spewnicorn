export default {
  id: "sparkling_rainbow_spell",
  name: "Sparkling Rainbow Spell",
  type: "magic",
  mana: 1,
  weight: 1,
  tier: "common",
  pack: "rainbow",
  magic: [{ type: "rainbow", amount: 8 }],
  sound: "magic3",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "rainbow", amount: 14 }],
  },
  sparkle: {
    magic: [{ type: "rainbow", amount: 12 }],
  },
};
