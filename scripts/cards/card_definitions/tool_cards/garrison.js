export default {
  id: "garrison",
  name: "Garrison",
  type: "tool",
  mana: 1,
  tier: "uncommon",
  natural: true,
  vanish: true,
  blk: [15],
  actions: [{ action: "addCard", value: 1, what: "garrison", to: "drawCards" }],
  slots: 2,
  fireShardUpgrades: {
    blk: [30],
    actions_2: [
      {
        action: "addCard",
        value: 1,
        what: "garrison",
        to: "drawCards",
        with: ["flame", "flame"],
      },
    ],
  },
  iceShardUpgrades: {
    mana: 0,
    actions_2: [
      {
        action: "addCard",
        value: 1,
        what: "garrison",
        to: "drawCards",
        with: ["frost", "frost"],
      },
    ],
  },
};
