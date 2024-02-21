export default {
  id: "forbid",
  name: "Forbid",
  type: "tool",
  target: "monster",
  mana: 1,
  tier: "rare",
  weight: 1,
  courage: 6,
  pack: "rainbow",
  actions: [{ action: "removeBuffs", to: "target" }],
  slots: 2,
  shardUpgrades: {
    mana: 0,
  },
  bothShardUpgrades: {
    linger: 1,
  },
  fireShardUpgrades: {
    linger_2: 2,
  },
};
