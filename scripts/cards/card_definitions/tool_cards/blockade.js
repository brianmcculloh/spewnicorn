export default {
  id: "blockade",
  name: "Blockade",
  type: "tool",
  mana: 2,
  tier: "rare",
  ephemeral: true,
  weight: 6,
  courage: 3,
  blk: [15],
  abilities: [{ ability: "tank", turns: 1, enabled: true }],
  slots: 2,
  shardUpgrades: {
    blk: [20],
    ephemeral: false,
  },
  iceShardUpgrades: {
    blk_2: [30],
  },
  bothShardUpgrades: {
    abilities: [{ ability: "tank", turns: 3, enabled: true }],
  },
};
