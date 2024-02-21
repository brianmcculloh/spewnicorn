export default {
  id: "masterwork",
  name: "Masterwork",
  type: "ability",
  mana: 2,
  tier: "uncommon",
  weight: 3,
  courage: 4,
  effects: [{ effect: "craft", amount: 5, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "craft", amount: 10, turns: -1 }],
  },
};
