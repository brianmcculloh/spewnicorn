export default {
  id: "battle_combo",
  name: "Battle Combo",
  type: "tool",
  mana: 0,
  tier: "rare",
  addable: false,
  retain: true,
  vanish: true,
  blk: [9],
  slots: 1,
  effects: [
    { effect: "fierce", amount: 10, turns: 1 },
    { effect: "mastery", amount: 1.5, turns: 1 },
    { effect: "rowdy", amount: 15, turns: 1 },
  ],
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "battle_sequence", to: "handCards" },
    ],
  },
  shardUpgrades: {
    blk: [15],
    effects: [
      { effect: "fierce", amount: 15, turns: 1 },
      { effect: "mastery", amount: 2, turns: 1 },
      { effect: "rowdy", amount: 20, turns: 1 },
    ],
  },
};
