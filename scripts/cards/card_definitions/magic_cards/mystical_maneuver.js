export default {
  id: "mystical_maneuver",
  name: "Mystical Maneuver",
  type: "magic",
  mana: 1,
  tier: "rare",
  use: 2,
  linger: 1,
  pack: "cycle",
  courage: 3,
  magic: [{ type: "aligned", amount: 2 }],
  sound: "magic17",
  actions: [
    { action: "draw", value: 2 },
    { action: "discard", value: 1 },
  ],
  draw: {
    magic: [{ type: "aligned", amount: 2 }],
    dmg: [2],
  },
  slots: 2,
  shardUpgrades: {
    actions: [
      { action: "draw", value: 4 },
      { action: "discard", value: 2 },
    ],
  },
  iceShardUpgrades: {
    linger: 2,
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 4 }],
    draw: {
      magic: [{ type: "aligned", amount: 4 }],
      dmg: [4],
    },
  },
};
