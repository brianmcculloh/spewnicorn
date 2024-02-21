export default {
  id: "tactics",
  name: "Tactics",
  type: "tool",
  mana: 3,
  tier: "rare",
  pack: "combine",
  weight: 4,
  courage: 4,
  actions: [
    {
      action: "addCard",
      select: 1,
      value: 3,
      type: "tool",
      tier: "rare",
      to: "handCards",
    },
    { action: "addCard", value: 1, what: "self_enhance", to: "drawCards" },
    { action: "discard", value: 1 },
  ],
  slots: 2,
  shardUpgrades: {
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 3,
        type: "tool",
        tier: "rare",
        to: "handCards",
      },
      { action: "addCard", value: 2, what: "self_enhance", to: "drawCards" },
      { action: "discard", value: 1 },
    ],
  },
  bothShardUpgrades: {
    mana: 2,
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 3,
        type: "tool",
        tier: "rare",
        to: "handCards",
        with: ["flame", "frost"],
      },
      { action: "addCard", value: 3, what: "self_enhance", to: "drawCards" },
      { action: "discard", value: 1 },
    ],
  },
};
