export default {
  id: "mysterious_fissure",
  name: "Mysterious Fissure",
  type: "tool",
  tier: "rare",
  playable: false,
  weight: 7,
  courage: 3,
  pack: "cycle",
  discard: {
    dmg: [5],
    target: "player",
    actions: [{ action: "stat", what: "mana", key: "current", value: 3 }],
  },
  slots: 1,
  shardUpgrades: {
    discard: {
      dmg: [5],
      target: "monster",
      actions: [{ action: "stat", what: "mana", key: "current", value: 4 }],
    },
  },
};
