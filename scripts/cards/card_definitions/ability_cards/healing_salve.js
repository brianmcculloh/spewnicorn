export default {
  id: "healing_salve",
  name: "Healing Salve",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  weight: 6,
  courage: 3,
  effects: [{ effect: "heal", amount: 10 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    effects: [{ effect: "heal", amount: 15 }],
  },
};
