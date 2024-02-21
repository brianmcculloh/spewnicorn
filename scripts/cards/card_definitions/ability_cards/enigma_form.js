export default {
  id: "enigma_form",
  name: "Enigma Form",
  type: "ability",
  mana: 0,
  tier: "uncommon",
  weight: 4,
  courage: 4,
  effects: [{ effect: "mystery", amount: 2, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "mystery", amount: 3, turns: -1 }],
  },
};
