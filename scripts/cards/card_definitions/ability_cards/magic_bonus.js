export default {
  id: "magic_bonus",
  name: "Magic Bonus",
  type: "ability",
  mana: 3,
  tier: "rare",
  courage: 5,
  effects: [{ effect: "conjure", amount: 4, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "conjure", amount: 8, turns: -1 }],
  },
  iceShardUpgrades: {
    mana_2: 2,
  },
  bothShardUpgrades: {
    effects: [{ effect: "conjure", amount: 6, turns: -1 }],
  },
};
