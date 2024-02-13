export default {
  id: "sparks",
  name: "Sparks",
  type: "magic",
  mana: 0,
  addable: false,
  vanish: true,
  sound: "magic5",
  magic: [{ type: "aligned", amount: 2 }],
  slots: 1,
  actions: [{ action: "draw", value: 1 }],
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 4 }],
    effects: [{ effect: "lightning", amount: 1, turns: -1 }],
  },
};
