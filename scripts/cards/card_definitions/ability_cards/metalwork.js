export default {
  id: "metalwork",
  name: "Metalwork",
  type: "ability",
  mana: 3,
  tier: "uncommon",
  weight: 4,
  courage: 4,
  abilities: [{ ability: "stockpile", enabled: true, baseTurns: -1 }],
  slots: 2,
  shardUpgrades: {
    mana: 2,
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
