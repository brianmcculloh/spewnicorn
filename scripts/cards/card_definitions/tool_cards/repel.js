export default {
  id: "repel",
  name: "Repel",
  type: "tool",
  mana: 2,
  weight: 6,
  pack: "cycle",
  blk: [3, 3, 3, 3, 3],
  actions: [
    { action: "draw", value: 1 },
    { action: "discard", value: 1 },
  ],
  slots: 2,
  shardUpgrades: {
    blk: [3, 3, 3, 3, 3, 3, 3],
    actions: [
      { action: "draw", value: 2 },
      { action: "discard", value: 2 },
    ],
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
