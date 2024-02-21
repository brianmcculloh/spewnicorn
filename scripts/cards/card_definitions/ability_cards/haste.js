export default {
  id: "haste",
  name: "Haste",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  weight: 4,
  pack: "rainbow",
  effects: [{ effect: "mage", amount: 1, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "mage", amount: 2, turns: -1 }],
  },
  iceShardUpgrades: {
    natural: true,
  },
};
