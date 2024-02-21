export default {
  id: "euphoria",
  name: "Euphoria",
  type: "ability",
  mana: 1,
  tier: "legendary",
  courage: 8,
  effects: [
    { effect: "regen", amount: 5 },
    { effect: "heal", amount: 8 },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "regen", amount: 8 },
      { effect: "heal", amount: 10 },
    ],
  },
};
