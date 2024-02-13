export default {
  id: "high_voltage",
  name: "High Voltage",
  type: "ability",
  mana: 2,
  tier: "uncommon",
  weight: 4,
  courage: 4,
  effects: [{ effect: "lightning", amount: 5, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "lightning", amount: 7, turns: -1 }],
  },
  iceShardUpgrades: {
    effects_2: [{ effect: "lightning", amount: 9, turns: -1 }],
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
