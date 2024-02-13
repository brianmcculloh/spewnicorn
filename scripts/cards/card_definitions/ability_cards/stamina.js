export default {
  id: "stamina",
  name: "Stamina",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  weight: 6,
  courage: 3,
  effects: [{ effect: "regen", amount: 5 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    effects: [{ effect: "regen", amount: 8 }],
  },
};
