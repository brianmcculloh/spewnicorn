export default {
  id: "recoil",
  name: "Recoil",
  type: "tool",
  mana: 0,
  weight: 7,
  pack: "cycle",
  blk: [7],
  actions: [{ action: "discard", value: 1 }],
  slots: 1,
  shardUpgrades: {
    blk: [12],
    actions: [
      { action: "draw", value: 1 },
      { action: "discard", value: 1 },
    ],
  },
};
