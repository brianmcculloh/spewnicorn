export default {
  id: "expunge",
  name: "Expunge",
  type: "tool",
  mana: 2,
  tier: "rare",
  pack: "cycle",
  weight: 4,
  courage: 4,
  sound: "tool22",
  actions: [{ action: "destroy", value: 10, optional: true }],
  slots: 1,
  shardUpgrades: {
    mana: 1,
  },
};
