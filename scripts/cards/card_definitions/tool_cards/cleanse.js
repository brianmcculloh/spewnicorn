export default {
  id: "cleanse",
  name: "Cleanse",
  type: "tool",
  mana: 1,
  pack: "cycle",
  weight: 1,
  sound: "tool1",
  actions: [
    { action: "draw", value: 1 },
    { action: "discard", value: 1 },
    { action: "destroy", value: 1, optional: true },
  ],
  slots: 2,
  shardUpgrades: {
    actions: [
      { action: "draw", value: 2 },
      { action: "discard", value: 1 },
      { action: "destroy", value: 1, optional: true },
    ],
  },
  bothShardUpgrades: {
    actions: [
      { action: "draw", value: 3 },
      { action: "discard", value: 2 },
      { action: "destroy", value: 1, optional: true },
    ],
  },
};
