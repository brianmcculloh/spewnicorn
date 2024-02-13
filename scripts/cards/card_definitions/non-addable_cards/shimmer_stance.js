export default {
  id: "shimmer_stance",
  name: "Shimmer Stance",
  type: "tool",
  tier: "uncommon",
  mana: 0,
  vanish: true,
  addable: false,
  ephemeral: true,
  sound: "shimmerAmount",
  blk: [10],
  armor: [1],
  slots: 2,
  actions: [{ action: "stat", what: "stance", value: "shimmer" }],
  draw: {
    actions: [{ action: "draw", value: 1 }],
  },
  shardUpgrades: {
    blk: [20],
    armor: [2],
  },
  bothShardUpgrades: {
    vanish: false,
    ephemeral: false,
  },
};
