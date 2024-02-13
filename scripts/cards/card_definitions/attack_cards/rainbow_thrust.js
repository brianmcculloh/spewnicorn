export default {
  id: "rainbow_thrust",
  name: "Rainbow Thrust",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  pack: "rainbow",
  dmg: [7],
  sound: "attack4",
  magic: [{ type: "rainbow", amount: 10 }],
  slots: 1,
  shardUpgrades: {
    dmg: [14],
    magic: [{ type: "rainbow", amount: 15 }],
  },
};
