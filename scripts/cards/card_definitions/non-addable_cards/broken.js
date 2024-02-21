export default {
  id: "broken",
  name: "Broken",
  type: "clutter",
  addable: false,
  mana: 1,
  vanish: true,
  draw: {
    effects: [{ effect: "solid", amount: -1, turns: 1, hex: true }],
    target: "player",
  },
};
