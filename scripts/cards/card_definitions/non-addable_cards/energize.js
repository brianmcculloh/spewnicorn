export default {
  id: "energize",
  name: "Energize",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  addable: false,
  actions: [{ action: "stat", what: "mana", key: "current", value: 1 }],
  slots: 1,
  shardUpgrades: {
    retain: true,
  },
};
