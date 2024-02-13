export default {
  id: "sacrifice",
  name: "Sacrifice",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  use: 1,
  pack: "cycle",
  weight: 4,
  courage: 3,
  sound: "tool7",
  actions: [{ action: "destroy", value: 1 }],
  slots: 2,
  shardUpgrades: {
    use: 2,
    linger: 1,
  },
  bothShardUpgrades: {
    use: 3,
    retain: true,
  },
};
