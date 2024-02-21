export default {
  id: "exposed_strike",
  name: "Exposed Strike",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 6,
  dmg: [18],
  draw: {
    dmg: [2],
    target: "player",
  },
  slots: 2,
  shardUpgrades: {
    dmg: [24],
    draw: {
      dmg: [1],
      target: "player",
    },
  },
  bothShardUpgrades: {
    dmg: [28],
    draw: {
      dmg: [1],
      target: "monster",
    },
  },
};
