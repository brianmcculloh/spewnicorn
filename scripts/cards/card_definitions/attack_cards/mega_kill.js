export default {
  id: "mega_kill",
  name: "Mega Kill",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "rare",
  pack: "combine",
  weight: 4,
  courage: 4,
  dmg: [12, 12],
  sound: "attack14",
  actions: [
    { action: "addCard", value: 2, what: "battle_move", to: "drawCards" },
  ],
  slots: 2,
  shardUpgrades: {
    dmg: [14, 14],
    actions: [
      { action: "addCard", value: 3, what: "battle_move", to: "drawCards" },
    ],
  },
  bothShardUpgrades: {
    dmg: [16, 16],
    actions: [
      { action: "addCard", value: 4, what: "battle_move", to: "drawCards" },
    ],
  },
};
