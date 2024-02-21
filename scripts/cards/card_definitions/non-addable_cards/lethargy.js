export default {
  id: "lethargy",
  name: "Lethargy",
  type: "clutter",
  addable: false,
  ephemeral: true,
  playable: false,
  draw: {
    effects: [{ effect: "punch", amount: -0.25, turns: 1, hex: true }],
    target: "player",
  },
};
