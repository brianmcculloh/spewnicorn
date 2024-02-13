export default {
  id: "repurpose",
  name: "Repurpose",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 3,
  pack: "combine",
  effects: [{ effect: "cunning", amount: 1, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    effects: [{ effect: "cunning", amount: 1.5, turns: -1 }],
  },
};
