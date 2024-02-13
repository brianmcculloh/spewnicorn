export default {
  id: "sidestep",
  name: "Sidestep",
  type: "tool",
  mana: 0,
  pack: "combine",
  vanish: true,
  blk: [8],
  slots: 1,
  shardUpgrades: {
    blk: [14],
  },
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "forestall", to: "drawCards" },
    ],
  },
};
