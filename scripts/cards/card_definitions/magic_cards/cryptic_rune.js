export default {
  id: "cryptic_rune",
  name: "Cryptic Rune",
  type: "magic",
  mana: 1,
  tier: "uncommon",
  use: 1,
  pack: "combine",
  weight: 3,
  courage: 3,
  magic: [{ type: "aligned", amount: 2 }],
  sound: "magic11",
  actions: [{ action: "addCard", value: 2, what: "impresa", to: "drawCards" }],
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
  },
  slots: 2,
  shardUpgrades: {
    use: 2,
  },
  fireShardUpgrades: {
    draw: {
      magic: [{ type: "aligned", amount: 2 }],
    },
    draw_2: {
      magic: [{ type: "aligned", amount: 4 }],
    },
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 4 }],
  },
};
