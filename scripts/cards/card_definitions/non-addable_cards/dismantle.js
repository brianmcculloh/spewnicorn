export default {
  id: "dismantle",
  name: "Dismantle",
  type: "tool",
  mana: 0,
  addable: false,
  vanish: true,
  actions: [{ action: "destroy", value: 1 }],
  slots: 1,
  shardUpgrades: {
    actions: [{ action: "destroy", value: 2, optional: true }],
  },
};
