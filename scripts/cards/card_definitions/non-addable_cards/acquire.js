export default {
  id: "acquire",
  name: "Acquire",
  type: "tool",
  mana: 0,
  addable: false,
  vanish: true,
  actions: [{ action: "draw", value: 1 }],
  slots: 1,
  shardUpgrades: {
    actions: [{ action: "draw", value: 2 }],
  },
};
