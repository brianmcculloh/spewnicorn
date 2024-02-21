export default {
  id: "deter",
  name: "Deter",
  type: "tool",
  target: "monster",
  mana: 2,
  linger: 1,
  natural: true,
  pack: "rainbow",
  blk: [10],
  effects: [{ effect: "punch", amount: -0.3, turns: 1, hex: true }],
  slots: 2,
  shardUpgrades: {
    blk: [15],
    effects: [{ effect: "punch", amount: -0.4, turns: 1, hex: true }],
  },
  bothShardUpgrades: {
    mana: 1,
    blk: [20],
  },
};
