export default {
  id: "emergence",
  name: "Emergence",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  pack: "cycle",
  effects: [{ effect: "ward", amount: 10, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "ward", amount: 18, turns: -1 }],
  },
};
