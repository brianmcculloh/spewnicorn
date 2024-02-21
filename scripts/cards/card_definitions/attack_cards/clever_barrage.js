export default {
  id: "clever_barrage",
  name: "Clever Barrage",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "rare",
  ephemeral: true,
  courage: 4,
  pack: "combine",
  dmg: [6, 5, 4, 3],
  actions: [
    {
      action: "ensharden",
      type: "random",
      select: -1,
      from: "handCards",
      random: true,
    },
  ],
  slots: 2,
  shardUpgrades: {
    dmg: [7, 6, 5, 4, 3, 2],
    actions: [
      {
        action: "ensharden",
        type: "random",
        select: -1,
        from: "allCards",
        random: true,
      },
    ],
    ephemeral: false,
  },
  bothShardUpgrades: {
    dmg: [8, 7, 6, 5, 4, 3, 2, 1],
    actions: [
      {
        action: "ensharden",
        type: "random",
        select: -1,
        from: "allCards",
        random: true,
      },
    ],
    ephemeral: false,
    mana: 2,
  },
};
