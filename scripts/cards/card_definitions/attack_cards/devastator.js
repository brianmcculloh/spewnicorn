export default {
  id: "devastator",
  name: "Devastator",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "rare",
  courage: 4,
  dmg: [7, 8, 9],
  effects: [{ effect: "momentum", amount: 2 }],
  actions: [{ action: "addCard", value: 3, what: "slash", to: "handCards" }],
  slots: 2,
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 3, what: "momentous_slash", to: "handCards" },
    ],
    actions_2: [
      {
        action: "addCard",
        value: 3,
        what: "momentous_slash",
        to: "handCards",
        with: ["frost"],
      },
    ],
  },
  fireShardUpgrades: {
    effects: [{ effect: "momentum", amount: 3 }],
    effects_2: [{ effect: "momentum", amount: 4 }],
  },
  bothShardUpgrades: {
    actions: [
      { action: "addCard", value: 3, what: "momentous_slash", to: "handCards" },
    ],
    effects: [{ effect: "momentum", amount: 3 }],
  },
};
