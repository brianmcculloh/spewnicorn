export default {
  id: "spectrum",
  name: "Spectrum",
  type: "ability",
  mana: 3,
  tier: "legendary",
  courage: 8,
  effects: [
    { effect: "conjure", amount: 6, turns: -1 },
    { effect: "summon", amount: 6, turns: -1 },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "conjure", amount: 10, turns: -1 },
      { effect: "summon", amount: 10, turns: -1 },
    ],
  },
};
