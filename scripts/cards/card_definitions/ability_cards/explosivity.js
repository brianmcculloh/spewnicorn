export default {
  id: "explosivity",
  name: "Explosivity",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 3,
  effects: [{ effect: "fierce", amount: 18, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "fierce", amount: 30, turns: -1 }],
  },
  iceShardUpgrades: {
    mana: 0,
  },
};
