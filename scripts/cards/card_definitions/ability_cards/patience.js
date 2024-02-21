export default {
  id: "patience",
  name: "Patience",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  weight: 4,
  pack: "rainbow",
  effects: [{ effect: "enchanter", amount: 1, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    effects: [{ effect: "enchanter", amount: 2, turns: -1 }],
  },
  iceShardUpgrades: {
    natural: true,
  },
};
