export default {
  id: "scorch",
  name: "Scorch",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "rare",
  weight: 1,
  courage: 5,
  vanish: true,
  dmg: [20],
  sound: "attack11",
  actions: [
    {
      action: "ensharden",
      type: "flame",
      select: -1,
      from: "handCards",
      random: true,
    },
  ],
  slots: 2,
  shardUpgrades: {
    actions: [
      {
        action: "ensharden",
        type: "flame",
        select: -1,
        from: "allCards",
        random: true,
      },
    ],
  },
  bothShardUpgrades: {
    mana: 2,
  },
};
