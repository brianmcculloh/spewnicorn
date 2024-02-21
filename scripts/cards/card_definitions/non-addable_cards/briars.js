export default {
  id: "briars",
  name: "Briars",
  type: "clutter",
  addable: false,
  playable: false,
  draw: {
    actions: [{ action: "stat", what: "speed", key: "current", value: -1 }],
    target: "player",
  },
};
