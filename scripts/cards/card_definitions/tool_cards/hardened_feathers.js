export default {
  id: "hardened_feathers",
  name: "Hardened Feathers",
  type: "tool",
  mana: 1,
  weight: 2,
  blk: [12],
  slots: 1,
  shardUpgrades: {
    blk: [20],
  },
  aura: {
    actions: [{ action: "stat", what: "speed", key: "current", value: 2 }],
  },
};
