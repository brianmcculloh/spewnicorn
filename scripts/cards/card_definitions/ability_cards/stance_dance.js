export default {
  id: "stance_dance",
  name: "Stance Dance",
  type: "ability",
  mana: 1,
  tier: "rare",
  courage: 5,
  effects: [{ effect: "shapeshifter", amount: 15, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "shapeshifter", amount: 25, turns: -1 }],
  },
  iceShardUpgrades: {
    mana: 0,
  },
};
