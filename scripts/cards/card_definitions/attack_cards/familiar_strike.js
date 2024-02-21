export default {
  id: "familiar_strike",
  name: "Familiar Strike",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "uncommon",
  weight: 3,
  courage: 3,
  pack: "rainbow",
  dmg: [12],
  actions: [
    { action: "addCard", value: 1, what: "familiar_agony", to: "handCards" },
  ],
  slots: 1,
  shardUpgrades: {
    actions: [
      { action: "addCard", value: 2, what: "familiar_agony", to: "handCards" },
    ],
  },
  bothShardUpgrades: {
    mana: 2,
  },
};
