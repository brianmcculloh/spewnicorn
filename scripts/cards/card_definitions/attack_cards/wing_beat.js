export default {
  id: "wing_beat",
  name: "Wing Beat",
  type: "attack",
  mana: 1,
  target: "monster",
  dmg: [18],
  actions: [{ action: "stat", what: "health", key: "current", value: -2 }],
  slots: 1,
  shardUpgrades: {
    dmg: [28],
    mana: 0,
  },
};
