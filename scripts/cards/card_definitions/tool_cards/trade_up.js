export default {
  id: "trade_up",
  name: "Trade Up",
  type: "tool",
  mana: 1,
  tier: "rare",
  vanish: true,
  weight: 7,
  courage: 3,
  sound: "tool20",
  actions: [
    {
      action: "addCard",
      select: 1,
      value: 3,
      type: "any",
      tier: "rare",
      to: "handCards",
    },
  ],
  slots: 2,
  shardUpgrades: {
    vanish: false,
    use: 2,
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 5,
        type: "any",
        tier: "rare",
        to: "handCards",
      },
    ],
  },
  bothShardUpgrades: {
    mana: 0,
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 5,
        type: "any",
        tier: "rare",
        to: "handCards",
        with: ["frost", "flame"],
      },
    ],
  },
};
