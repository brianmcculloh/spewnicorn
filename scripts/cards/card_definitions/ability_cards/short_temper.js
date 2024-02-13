export default {
  id: "short_temper",
  name: "Short Temper",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 3,
  effects: [{ effect: "rowdy", amount: 8, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "rowdy", amount: 15, turns: -1 }],
  },
};
