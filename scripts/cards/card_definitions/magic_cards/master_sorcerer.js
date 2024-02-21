export default {
  id: "master_sorcerer",
  name: "Master Sorcerer",
  type: "magic",
  mana: 1,
  tier: "rare",
  weight: 4,
  courage: 5,
  pack: "rainbow",
  magic: [{ type: "aligned", amount: 12 }],
  sound: "magic16",
  effects: [{ effect: "sorcery", amount: 0.5, turns: 2 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "sorcery", amount: 0.5, turns: 4 }],
  },
  iceShardUpgrades: {
    magic_2: [{ type: "aligned", amount: 24 }],
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 18 }],
  },
};
