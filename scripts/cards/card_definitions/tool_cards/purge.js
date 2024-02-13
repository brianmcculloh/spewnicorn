export default {
  id: "purge",
  name: "Purge",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  blk: [10],
  actions: [{ action: "destroy", value: 1 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    blk: [16],
  },
};
