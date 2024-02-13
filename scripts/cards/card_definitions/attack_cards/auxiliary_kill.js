export default {
  id: "auxiliary_kill",
  name: "Auxiliary Kill",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "rare",
  weight: 6,
  courage: 3,
  pack: "combine",
  dmg: [25],
  sound: "attack13",
  actions: [{ action: "playOldest" }],
  slots: 2,
  fireShardUpgrades: {
    actions: [
      { action: "playOldest" },
      { action: "addCard", value: 1, what: "auxiliary", to: "handCards" },
    ],
    actions_2: [
      { action: "playOldest" },
      {
        action: "addCard",
        value: 1,
        what: "auxiliary",
        to: "handCards",
        with: ["flame"],
      },
    ],
    dmg_2: [35],
  },
  iceShardUpgrades: {
    actions: [
      { action: "playOldest" },
      { action: "addCard", value: 1, what: "auxiliary", to: "handCards" },
    ],
    mana_2: 1,
  },
  bothShardUpgrades: {
    dmg_2: [30],
    actions: [
      { action: "playOldest" },
      { action: "addCard", value: 1, what: "auxiliary", to: "handCards" },
    ],
  },
};
