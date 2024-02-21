export default {
  id: "erupt",
  name: "Erupt",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "legendary",
  courage: 8,
  dmg: [10],
  sound: "attack22",
  effects: [{ effect: "momentum", amount: 2, turns: 2 }],
  actions: [
    { action: "addCard", value: 1, what: "fleeting_slash", to: "handCards" },
    { action: "addCard", value: 1, what: "slash", to: "handCards" },
    { action: "addCard", value: 1, what: "lingering_slash", to: "handCards" },
    { action: "addCard", value: 1, what: "momentous_slash", to: "handCards" },
  ],
  slots: 1,
  shardUpgrades: {
    dmg: [20],
    actions: [
      { action: "addCard", value: 2, what: "fleeting_slash", to: "handCards" },
      { action: "addCard", value: 2, what: "slash", to: "handCards" },
      { action: "addCard", value: 2, what: "lingering_slash", to: "handCards" },
      { action: "addCard", value: 2, what: "momentous_slash", to: "handCards" },
    ],
  },
};
