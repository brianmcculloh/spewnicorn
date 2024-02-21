export default {
  id: "cardistry",
  name: "Cardistry",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 3,
  pack: "rainbow",
  effects: [{ effect: "wield", amount: 1, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "wield", amount: 2, turns: -1 }],
  },
  iceShardUpgrades: {
    natural: true,
  },
};
