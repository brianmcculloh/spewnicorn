export default {
  id: "depthsight",
  name: "Depthsight",
  type: "ability",
  mana: 2,
  tier: "rare",
  courage: 5,
  weight: 2,
  pack: "cycle",
  effects: [{ effect: "replenish", amount: 1, turns: -1 }],
  slots: 1,
  iceShardUpgrades: {
    effects: [{ effect: "replenish", amount: 2, turns: -1 }],
  },
  fireShardUpgrades: {
    mana: 1,
  },
};
