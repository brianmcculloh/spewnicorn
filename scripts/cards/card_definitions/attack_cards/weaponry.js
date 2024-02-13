export default {
  id: "weaponry",
  name: "Weaponry",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "rare",
  weight: 3,
  courage: 3,
  dmg: [15],
  sound: "attack2",
  draw: {
    dmg: [2],
    blk: [4],
  },
  actions: [
    {
      action: "addCard",
      select: 1,
      value: 3,
      type: "attack",
      tier: "uncommon",
      to: "handCards",
      modifiers: { mana: 0, vanish: true },
    },
  ],
  slots: 2,
  fireShardUpgrades: {
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 3,
        type: "attack",
        tier: "uncommon",
        to: "handCards",
        with: ["flame"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
    actions_2: [
      {
        action: "addCard",
        select: 1,
        value: 4,
        type: "attack",
        tier: "uncommon",
        to: "handCards",
        with: ["flame"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
  iceShardUpgrades: {
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 3,
        type: "attack",
        tier: "uncommon",
        to: "handCards",
        with: ["frost"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
    actions_2: [
      {
        action: "addCard",
        select: 1,
        value: 4,
        type: "attack",
        tier: "uncommon",
        to: "handCards",
        with: ["frost"],
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
  bothShardUpgrades: {
    dmg: [25],
    actions: [
      {
        action: "addCard",
        select: 1,
        value: 4,
        type: "attack",
        tier: "uncommon",
        to: "handCards",
        modifiers: { mana: 0, vanish: true },
      },
    ],
  },
};
