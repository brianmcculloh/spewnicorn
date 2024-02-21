export default {
  id: "blitzkrieg",
  name: "Blitzkrieg",
  type: "tool",
  tier: "rare",
  mana: 3,
  courage: 5,
  vanish: true,
  actions: [{ action: "playHand" }],
  slots: 2,
  shardUpgrades: {
    vanish: false,
  },
  bothShardUpgrades: {
    mana: 2,
  },
  weight: 1,
};
