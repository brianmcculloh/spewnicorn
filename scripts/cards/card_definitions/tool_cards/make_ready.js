export default {
  id: "make_ready",
  name: "Make Ready",
  type: "tool",
  mana: 2,
  tier: "uncommon",
  pack: "cycle",
  sound: "tool9",
  actions: [
    { action: "addCard", value: 1, what: "acquire", to: "handCards" },
    {
      action: "addCard",
      select: 1,
      value: 7,
      type: "bottled",
      to: "drawCards",
    },
  ],
  slots: 2,
  fireShardUpgrades: {
    mana: 1,
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "acquire", to: "handCards" },
      {
        action: "addCard",
        select: 1,
        value: 7,
        type: "bottled",
        to: "drawCards",
      },
    ],
    actions_2: [
      {
        action: "addCard",
        value: 2,
        what: "acquire",
        to: "handCards",
        with: ["frost"],
      },
      {
        action: "addCard",
        select: 2,
        value: 7,
        type: "bottled",
        to: "drawCards",
      },
    ],
  },
  bothShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "acquire", to: "handCards" },
      {
        action: "addCard",
        select: 2,
        value: 7,
        type: "bottled",
        to: "drawCards",
      },
    ],
  },
};
