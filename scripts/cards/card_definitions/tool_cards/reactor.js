export default {
  id: "reactor",
  name: "Reactor",
  type: "tool",
  mana: 0,
  tier: "rare",
  use: 1,
  weight: 3,
  courage: 4,
  sound: "tool18",
  actions: [{ action: "addCard", value: 2, what: "energize", to: "handCards" }],
  slots: 2,
  shardUpgrades: {
    use: 2,
    actions: [
      { action: "addCard", value: 3, what: "energize", to: "handCards" },
    ],
  },
  fireShardUpgrades: {
    actions_2: [
      {
        action: "addCard",
        value: 3,
        what: "energize",
        to: "handCards",
        with: ["flame"],
      },
    ],
    linger_2: 1,
  },
  bothShardUpgrades: {
    retain: true,
  },
};
