export default {
  id: "atomic",
  name: "Atomic",
  type: "ability",
  mana: 1,
  addable: false,
  pack: "combine",
  tier: "uncommon",
  retain: true,
  slots: 1,
  effects: [{ effect: "irradiate", amount: 10, turns: -1 }],
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "nuclear", to: "drawCards" },
    ],
  },
  shardUpgrades: {
    effects: [{ effect: "irradiate", amount: 15, turns: -1 }],
  },
};
