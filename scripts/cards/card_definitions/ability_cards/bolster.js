export default {
  id: "bolster",
  name: "Bolster",
  type: "ability",
  mana: 2,
  tier: "rare",
  courage: 6,
  weight: 2,
  pack: "cycle",
  effects: [{ effect: "insulate", amount: 3, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "insulate", amount: 6, turns: -1 }],
  },
};
