export default {
  id: "nuclear",
  name: "Nuclear",
  type: "ability",
  mana: 1,
  addable: false,
  pack: "combine",
  tier: "rare",
  slots: 1,
  effects: [{ effect: "irradiate", amount: 60, turns: -1 }],
  shardUpgrades: {
    effects: [{ effect: "irradiate", amount: 90, turns: -1 }],
  },
};
