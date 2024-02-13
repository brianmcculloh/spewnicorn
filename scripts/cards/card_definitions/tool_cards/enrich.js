export default {
  id: "enrich",
  name: "Enrich",
  type: "tool",
  mana: 1,
  tier: "rare",
  weight: 8,
  courage: 3,
  pack: "combine",
  sound: "tool21",
  actions: [
    { action: "addCard", value: 2, type: "any", tier: "rare", to: "drawCards" },
  ],
  slots: 2,
  shardUpgrades: {
    actions: [
      {
        action: "addCard",
        value: 3,
        type: "any",
        tier: "rare",
        to: "drawCards",
      },
    ],
  },
  iceShardUpgrades: {
    actions_2: [
      {
        action: "addCard",
        value: 3,
        type: "any",
        tier: "rare",
        to: "drawCards",
        with: ["frost"],
      },
    ],
  },
  bothShardUpgrades: {
    actions: [
      {
        action: "addCard",
        value: 4,
        type: "any",
        tier: "rare",
        to: "drawCards",
      },
    ],
  },
};
