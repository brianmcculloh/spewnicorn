export default {
  id: "myriad",
  name: "Myriad",
  type: "tool",
  mana: 2,
  use: 1,
  tier: "legendary",
  courage: 8,
  pack: "cycle",
  sound: "tool29",
  actions: [
    { action: "addCard", value: 1, what: "acquire", to: "handCards" },
    { action: "addCard", value: 1, what: "dismantle", to: "handCards" },
    { action: "addCard", value: 1, what: "release", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_speed", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_energy", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_armor", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_block", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_attack", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_cards", to: "handCards" },
    { action: "addCard", value: 1, what: "bottled_magic", to: "handCards" },
  ],
  slots: 1,
  shardUpgrades: {
    use: 2,
  },
};
