export default {
  id: "mystical_energy",
  name: "Mystical Energy",
  type: "magic",
  mana: 0,
  tier: "rare",
  vanish: true,
  weight: .8,
  courage: 5,
  magic: [{ type: "aligned", amount: 7 }],
  actions: [
    { action: "removeHexes", to: "player" },
    { action: "stat", what: "mana", key: "current", value: 1 },
  ],
  draw: {
    magic: [{ type: "aligned", amount: 2 }],
    blk: [6],
  },
  slots: 2,
  shardUpgrades: {
    vanish: false,
    linger: 1,
    use: 2,
  },
  bothShardUpgrades: {
    vanish: false,
    linger: 2,
    use: 3,
    magic: [{ type: "aligned", amount: 9 }],
  },
};
