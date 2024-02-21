export default {
  id: "violent_rage",
  name: "Violent Rage",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  weight: 4,
  courage: 4,
  effects: [{ effect: "might", amount: 3, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "might", amount: 4, turns: -1 }],
  },
  iceShardUpgrades: {
    effects_2: [{ effect: "might", amount: 6, turns: -1 }],
  },
  bothShardUpgrades: {
    mana: 0,
    effects: [{ effect: "might", amount: 5, turns: -1 }],
  },
};
