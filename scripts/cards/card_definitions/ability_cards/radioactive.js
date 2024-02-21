export default {
  id: "radioactive",
  name: "Radioactive",
  type: "ability",
  mana: 1,
  tier: "rare",
  courage: 5,
  weight: 3,
  effects: [{ effect: "irradiate", amount: 7, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "irradiate", amount: 12, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "irradiate", amount: 16, turns: -1 }],
  },
};
