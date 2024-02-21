export default {
  id: "seeing_ring",
  name: "Seeing Ring",
  type: "tool",
  mana: 1,
  tier: "rare",
  vanish: true,
  ephemeral: true,
  sound: "tool3",
  actions: [{ action: "findDrawCard", value: 1 }],
  slots: 2,
  shardUpgrades: {
    actions: [{ action: "findDrawCard", value: 2 }],
  },
  bothShardUpgrades: {
    natural: true,
    ephemeral: false,
  },
};
