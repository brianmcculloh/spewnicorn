export default {
  id: "remember",
  name: "Remember",
  type: "tool",
  mana: 1,
  weight: 2,
  use: 3,
  actions: [{ action: "findDiscardCard", value: 1 }],
  slots: 2,
  shardUpgrades: {
    mana: 0,
    use: 4,
  },
  bothShardUpgrades: {
    actions: [{ action: "findDiscardCard", value: 2 }],
  },
};
