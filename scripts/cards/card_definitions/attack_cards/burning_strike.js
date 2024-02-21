export default {
  id: "burning_strike",
  name: "Burning Strike",
  type: "attack",
  mana: 2,
  target: "monster",
  expire: 2,
  dmg: [40],
  slots: 2,
  shardUpgrades: {
    dmg: [45],
    expire: 3,
  },
  bothShardUpgrades: {
    expire: 4,
    natural: true,
  },
};
