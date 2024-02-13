export default {
  id: "thwart",
  name: "Thwart",
  type: "tool",
  target: "monster",
  mana: 2,
  retain: true,
  weight: 4,
  pack: "combine",
  blk: [15],
  effects: [
    { effect: "might", amount: -1, turns: 1, hex: true },
    { effect: "punch", amount: -0.1, turns: 1, hex: true },
  ],
  slots: 2,
  shardUpgrades: {
    blk: [20],
    effects: [
      { effect: "might", amount: -3, turns: 1, hex: true },
      { effect: "punch", amount: -0.2, turns: 1, hex: true },
    ],
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
