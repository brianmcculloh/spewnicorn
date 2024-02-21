export default {
  id: "luminous_rainbow_spell",
  name: "Luminous Rainbow Spell",
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
  aura: {
    magic: [{ type: "rainbow", amount: 12 }],
  },
};
