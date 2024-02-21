export default {
  id: "untold_contract",
  name: "Untold Contract",
  type: "tool",
  mana: 1,
  use: 2,
  tier: "legendary",
  courage: 8,
  pack: "combine",
  sound: "tool28",
  actions: [
    { action: "addCard", value: 2, what: "self_enhance", to: "handCards" },
    { action: "addCard", value: 2, what: "impresa", to: "handCards" },
    { action: "addCard", value: 2, what: "battle_move", to: "handCards" },
  ],
  slots: 1,
  shardUpgrades: {
    natural: true,
    use: 3,
  },
};
