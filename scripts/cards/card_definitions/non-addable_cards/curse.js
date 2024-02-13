export default {
  id: "curse",
  name: "Curse",
  type: "clutter",
  addable: false,
  playable: false,
  draw: {
    effects: [{ effect: "rainbow", amount: -1, hex: true }],
    target: "player",
  },
};
