export default {
  id: "blacksmith",
  name: "Blacksmith",
  type: "ability",
  mana: 2,
  tier: "rare",
  courage: 5,
  weight: 2,
  pack: "combine",
  effects: [{ effect: "combiner", amount: 1, turns: -1 }],
  slots: 1,
  iceShardUpgrades: {
    effects: [{ effect: "combiner", amount: 2, turns: -1 }],
  },
  fireShardUpgrades: {
    mana: 1,
  },
};
