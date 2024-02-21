export default {
  id: "bloom",
  name: "Bloom",
  type: "magic",
  mana: 2,
  tier: "uncommon",
  pack: "rainbow",
  vanish: true,
  expire: 2,
  weight: 1,
  courage: 4,
  additionalDesc: "BASE MAGIC ",
  actions: [{ action: "stat", what: "rainbow", key: "base", value: 1 }],
  draw: {
    blk: [8],
  },
  slots: 2,
  fireShardUpgrades: {
    actions: [{ action: "stat", what: "rainbow", key: "base", value: 2 }],
  },
  iceShardUpgrades: {
    expire: 3,
  },
  bothShardUpgrades: {
    actions: [{ action: "stat", what: "rainbow", key: "base", value: 2 }],
    expire: 3,
  },
};
