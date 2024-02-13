export default {
  id: "timid",
  name: "Timid",
  type: "clutter",
  addable: false,
  playable: false,
  draw: {
    effects: [{ effect: "might", amount: -1, turns: 1, hex: true }],
    target: "player",
  },
};
