export default {
  id: "provisioned_attack",
  name: "Provisioned Attack",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  vanish: true,
  pack: "combine",
  dmg: [15],
  actions: [
    {
      action: "addCard",
      value: 1,
      what: "provisioned_attack",
      to: "drawCards",
    },
  ],
  slots: 2,
  fireShardUpgrades: {
    dmg: [20],
    actions: [
      {
        action: "addCard",
        value: 1,
        what: "provisioned_attack",
        to: "drawCards",
        with: ["flame"],
      },
    ],
    dmg_2: [30],
    actions_2: [
      {
        action: "addCard",
        value: 1,
        what: "provisioned_attack",
        to: "drawCards",
        with: ["flame", "flame"],
      },
    ],
  },
  iceShardUpgrades: {
    dmg: [20],
    actions: [
      {
        action: "addCard",
        value: 1,
        what: "provisioned_attack",
        to: "drawCards",
        with: ["frost"],
      },
    ],
    dmg_2: [30],
    actions_2: [
      {
        action: "addCard",
        value: 1,
        what: "provisioned_attack",
        to: "drawCards",
        with: ["frost", "frost"],
      },
    ],
  },
  bothShardUpgrades: {
    dmg: [25],
    actions: [
      {
        action: "addCard",
        value: 1,
        what: "provisioned_attack",
        to: "drawCards",
        with: ["frost", "flame"],
      },
    ],
  },
};
