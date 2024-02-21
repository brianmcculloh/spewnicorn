export default {
  id: "purify",
  name: "Purify",
  type: "tool",
  mana: 1,
  tier: "rare",
  weight: 2,
  courage: 5,
  actions: [{ action: "removeHexes", to: "player" }],
  slots: 1,
  shardUpgrades: {
    mana: 0,
  },
};
