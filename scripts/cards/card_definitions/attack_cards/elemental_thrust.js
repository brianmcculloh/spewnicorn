export default {
  id: "elemental_thrust",
  name: "Elemental Thrust",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 4,
  courage: 3,
  pack: "rainbow",
  dmg: [7],
  magic: [{ type: "elemental", amount: 7 }],
  slots: 1,
  shardUpgrades: {
    dmg: [14],
    magic: [{ type: "elemental", amount: 12 }],
  },
};
