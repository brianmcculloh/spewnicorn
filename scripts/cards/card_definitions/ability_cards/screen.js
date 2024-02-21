export default {
  id: "screen",
  name: "Screen",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  pack: "rainbow",
  effects: [{ effect: "cover", amount: 10, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "cover", amount: 18, turns: -1 }],
  },
};
