export default {
  id: "arsenal",
  name: "Arsenal",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  dmg: [14],
  sound: "attack2",
  actions: [
    { action: "addCard", select: 1, value: 3, type: "attack", to: "handCards" },
  ],
  slots: 1,
  fireShardUpgrades: {
    actions: [
      {
        action: "addCard",
        select: 2,
        value: 3,
        type: "attack",
        to: "handCards",
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
        to: "handCards",
        modifiers: { mana: 0 },
      },
    ],
  },
};
