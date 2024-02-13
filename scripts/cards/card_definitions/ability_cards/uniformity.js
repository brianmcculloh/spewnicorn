export default {
  id: "uniformity",
  name: "Uniformity",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 3,
  weight: 6,
  effects: [{ effect: "arcane", amount: 10, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "arcane", amount: 20, turns: -1 }],
  },
  iceShardUpgrades: {
    natural: true,
  },
};
