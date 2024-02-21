export default {
  id: "acuity",
  name: "Acuity",
  type: "ability",
  mana: 2,
  tier: "rare",
  weight: 6,
  courage: 4,
  pack: "combine",
  effects: [{ effect: "wisdom", amount: 2, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "wisdom", amount: 3, turns: -1 }],
  },
  iceShardUpgrades: {
    natural_2: true,
  },
  bothShardUpgrades: {
    effects: [{ effect: "wisdom", amount: 4, turns: -1 }],
  },
};
