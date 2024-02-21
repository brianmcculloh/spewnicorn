export default {
  id: "boost",
  name: "Boost",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  retain: true,
  vanish: true,
  addable: false,
  actions: [{ action: "stat", what: "speed", key: "current", value: 2 }],
  slots: 1,
  shardUpgrades: {
    actions: [{ action: "stat", what: "speed", key: "current", value: 3 }],
  },
};
