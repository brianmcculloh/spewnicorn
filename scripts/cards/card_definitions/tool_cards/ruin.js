export default {
  id: "ruin",
  name: "Ruin",
  type: "tool",
  mana: 3,
  tier: "uncommon",
  weight: 3,
  courage: 3,
  pack: "cycle",
  sound: "tool9",
  actions: [
    { action: "addCard", value: 1, what: "dismantle", to: "handCards" },
    {
      action: "addCard",
      select: 1,
      value: 7,
      type: "bottled",
      to: "handCards",
    },
  ],
  slots: 2,
  fireShardUpgrades: {
    mana: 2,
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "dismantle", to: "handCards" },
      {
        action: "addCard",
        select: 1,
        value: 7,
        type: "bottled",
        to: "handCards",
      },
    ],
    actions_2: [
      { action: "addCard", value: 2, what: "dismantle", to: "handCards" },
      {
        action: "addCard",
        select: 2,
        value: 7,
        type: "bottled",
        to: "handCards",
        with: ["frost"],
      },
    ],
  },
  bothShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "dismantle", to: "handCards" },
      {
        action: "addCard",
        select: 2,
        value: 7,
        type: "bottled",
        to: "handCards",
      },
    ],
  },
};
