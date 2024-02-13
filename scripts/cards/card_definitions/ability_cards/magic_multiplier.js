export default {
  id: "magic_multiplier",
  name: "Magic Multiplier",
  type: "ability",
  mana: 3,
  tier: "rare",
  courage: 5,
  effects: [{ effect: "sorcery", amount: 0.4, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "sorcery", amount: 0.5, turns: -1 }],
  },
  iceShardUpgrades: {
    mana_2: 2,
  },
  bothShardUpgrades: {
    effects: [{ effect: "sorcery", amount: 0.6, turns: -1 }],
  },
};
