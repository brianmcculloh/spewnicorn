export default {
  id: "robustness",
  name: "Robustness",
  type: "ability",
  mana: 2,
  tier: "uncommon",
  courage: 3,
  effects: [{ effect: "solid", amount: 6, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 1,
  },
  iceShardUpgrades: {
    effects: [{ effect: "solid", amount: 12, turns: -1 }],
  },
};
