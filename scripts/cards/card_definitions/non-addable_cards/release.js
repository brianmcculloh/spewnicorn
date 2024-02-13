export default {
  id: "release",
  name: "Release",
  type: "tool",
  mana: 0,
  addable: false,
  vanish: true,
  actions: [{ action: "discard", value: 1 }],
  slots: 1,
  shardUpgrades: {
    actions: [{ action: "discard", value: 2 }],
  },
};
