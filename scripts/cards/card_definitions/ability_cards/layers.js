export default {
  id: "layers",
  name: "Layers",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  courage: 4,
  pack: "combine",
  effects: [{ effect: "fend", amount: 10, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "fend", amount: 18, turns: -1 }],
  },
};
