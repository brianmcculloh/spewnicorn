export default {
  id: "safeguard",
  name: "Safeguard",
  type: "tool",
  mana: 2,
  tier: "uncommon",
  pack: "combine",
  blk: [18],
  actions: [{ action: "addCard", value: 1, what: "safety", to: "handCards" }],
  slots: 1,
  fireShardUpgrades: {
    actions: [
      { action: "addCard", value: 1, what: "safety", to: "handCards" },
      {
        action: "addCard",
        value: 1,
        what: "safety",
        to: "handCards",
        with: ["flame"],
      },
    ],
  },
  iceShardUpgrades: {
    blk: [30],
  },
};
