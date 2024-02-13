export default {
  id: "magical_maneuver",
  name: "Magical Maneuver",
  type: "magic",
  mana: 1,
  tier: "uncommon",
  pack: "cycle",
  courage: 3,
  sound: "magic12",
  magic: [{ type: "aligned", amount: 4 }],
  actions: [
    { action: "draw", value: 1 },
    { action: "discard", value: 1 },
  ],
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "aligned", amount: 8 }],
  },
  iceShardUpgrades: {
    actions: [
      { action: "draw", value: 2 },
      { action: "discard", value: 2 },
    ],
  },
};
