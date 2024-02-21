export default {
  id: "scholar",
  name: "Scholar",
  type: "tool",
  mana: 1,
  pack: "combine",
  tier: "rare",
  weight: 3,
  courage: 5,
  effects: [{ effect: "wisdom", amount: 1, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    natural: true,
  },
};
