export default {
  id: "premeditated_slash",
  name: "Premeditated Slash",
  type: "attack",
  target: "monster",
  mana: 0,
  tier: "uncommon",
  use: 1,
  pack: "combine",
  dmg: [6],
  actions: [
    { action: "addCard", value: 2, what: "battle_move", to: "drawCards" },
  ],
  slots: 1,
  fireShardUpgrades: {
    dmg: [12],
  },
  iceShardUpgrades: {
    use: 2,
  },
};
