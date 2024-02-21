export default {
  id: "mired",
  name: "Mired",
  type: "clutter",
  addable: false,
  playable: false,
  draw: {
    actions: [{ action: "stat", what: "mana", key: "current", value: -1 }],
    target: "player",
  },
};
