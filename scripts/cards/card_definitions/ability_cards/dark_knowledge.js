export default {
  id: "dark_knowledge",
  name: "Dark Knowledge",
  type: "ability",
  mana: 3,
  tier: "rare",
  courage: 6,
  weight: 2,
  pack: "rainbow",
  effects: [
    { effect: "mage", amount: 2, turns: -1 },
    { effect: "enchanter", amount: 2, turns: -1 },
    { effect: "fatigued", amount: 2, turns: -1 },
  ],
  slots: 2,
  shardUpgrades: {
    effects: [
      { effect: "mage", amount: 3, turns: -1 },
      { effect: "enchanter", amount: 3, turns: -1 },
      { effect: "fatigued", amount: 2, turns: -1 },
    ],
  },
  bothShardUpgrades: {
    effects: [
      { effect: "mage", amount: 3, turns: -1 },
      { effect: "enchanter", amount: 3, turns: -1 },
      { effect: "fatigued", amount: 1, turns: -1 },
    ],
  },
};
