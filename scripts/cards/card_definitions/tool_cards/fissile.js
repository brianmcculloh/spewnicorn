export default {
  id: "fissile",
  name: "Fissile",
  type: "tool",
  mana: 0,
  retain: true,
  pack: "combine",
  vanish: true,
  slots: 1,
  effects: [{ effect: "irradiate", amount: 4, turns: 2 }],
  combine: {
    actions: [{ action: "addCard", value: 1, what: "atomic", to: "drawCards" }],
  },
  shardUpgrades: {
    effects: [{ effect: "irradiate", amount: 8, turns: 2 }],
  },
};
