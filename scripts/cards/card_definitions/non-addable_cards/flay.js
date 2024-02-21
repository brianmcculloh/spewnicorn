export default {
  id: "flay",
  name: "Flay",
  type: "clutter",
  mana: 1,
  addable: false,
  vanish: true,
  draw: {
    effects: [{ effect: "solid", amount: -1, turns: 1, hex: true }],
    target: "player",
  },
};
