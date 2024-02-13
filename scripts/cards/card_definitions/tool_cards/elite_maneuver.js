export default {
  id: "elite_maneuver",
  name: "Elite Maneuver",
  type: "tool",
  mana: 3,
  tier: "rare",
  pack: "cycle",
  weight: 3,
  courage: 5,
  sound: "tool23",
  blk: [12],
  actions: [
    { action: "draw", value: 4 },
    { action: "destroy", value: 2, optional: true },
  ],
  draw: {
    blk: [5],
    armor: [1],
  },
  slots: 2,
  shardUpgrades: {
    blk: [20],
    actions: [
      { action: "draw", value: 6 },
      { action: "destroy", value: 3, optional: true },
    ],
  },
  bothShardUpgrades: {
    mana: 2,
    blk: [30],
  },
};
