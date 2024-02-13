export default {
  id: "clever_trick",
  name: "Clever Trick",
  type: "attack",
  target: "monster",
  mana: 1,
  weight: 3,
  courage: 3,
  pack: "combine",
  dmg: [10],
  actions: [
    {
      action: "ensharden",
      type: "random",
      select: -1,
      from: "handCards",
      random: true,
    },
  ],
  slots: 1,
  shardUpgrades: {
    dmg: [15],
    retain: true,
  },
};
