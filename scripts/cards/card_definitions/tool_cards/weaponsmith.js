export default {
  id: "weaponsmith",
  name: "Weaponsmith",
  type: "tool",
  mana: 2,
  tier: "rare",
  weight: 2,
  courage: 6,
  pack: "combine",
  actions: [
    {
      action: "addCard",
      value: 2,
      type: "weapon",
      tier: "common",
      to: "handCards",
      modifiers: { mana: 0, vanish: true },
    },
  ],
  slots: 2,
  shardUpgrades: {
    actions: [
      {
        action: "addCard",
        value: 3,
        type: "weapon",
        tier: "common",
        to: "handCards",
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
  bothShardUpgrades: {
    actions: [
      {
        action: "addCard",
        value: 4,
        type: "weapon",
        tier: "common",
        to: "handCards",
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
  fireShardUpgrades: {
    actions_2: [
      {
        action: "addCard",
        value: 4,
        type: "weapon",
        tier: "common",
        to: "handCards",
        with: ["flame"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
  iceShardUpgrades: {
    actions_2: [
      {
        action: "addCard",
        value: 4,
        type: "weapon",
        tier: "common",
        to: "handCards",
        with: ["frost"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
};
