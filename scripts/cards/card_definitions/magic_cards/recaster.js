export default {
  id: "recaster",
  name: "Recaster",
  type: "magic",
  mana: 0,
  tier: "uncommon",
  pack: "rainbow",
  weight: 3,
  courage: 5,
  sound: "magic13",
  actions: [
    {
      action: "addCard",
      select: 1,
      value: 4,
      type: "converter",
      to: "handCards",
    },
  ],
  slots: 1,
  shardUpgrades: {
    actions: [
      {
        action: "addCard",
        select: 3,
        value: 4,
        type: "converter",
        to: "handCards",
      },
    ],
  },
};
