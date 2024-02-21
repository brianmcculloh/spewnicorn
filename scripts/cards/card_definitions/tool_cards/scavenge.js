export default {
  id: "scavenge",
  name: "Scavenge",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  sound: "tool11",
  actions: [
    { action: "addCard", select: 1, value: 3, type: "any", to: "handCards" },
  ],
  slots: 1,
  shardUpgrades: {
    actions: [
      { action: "addCard", select: 2, value: 5, type: "any", to: "handCards" },
    ],
  },
};
