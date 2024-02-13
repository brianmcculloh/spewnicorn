export default {
  id: "auto_attack",
  name: "Auto Attack",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 6,
  dmg: [12],
  draw: {
    dmg: [5],
  },
  slots: 1,
  fireShardUpgrades: {
    dmg: [24],
  },
  iceShardUpgrades: {
    draw: {
      dmg: [12],
    },
  },
};
