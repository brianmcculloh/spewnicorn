export default {
  id: "obelisk",
  name: "Obelisk",
  type: "magic",
  mana: 1,
  tier: "rare",
  pack: "rainbow",
  weight: 6,
  courage: 4,
  magic: [{ type: "aligned", amount: 3 }],
  sound: "magic9",
  actions: [{ action: "addCard", value: 2, what: "sparks", to: "drawCards" }],
  slots: 2,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 4 }],
    actions: [{ action: "addCard", value: 3, what: "sparks", to: "drawCards" }],
  },
  iceShardUpgrades: {
    magic_2: [{ type: "aligned", amount: 5 }],
    actions_2: [
      {
        action: "addCard",
        value: 5,
        what: "sparks",
        to: "drawCards",
        with: ["frost"],
      },
    ],
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
    actions: [{ action: "addCard", value: 5, what: "sparks", to: "drawCards" }],
  },
};
