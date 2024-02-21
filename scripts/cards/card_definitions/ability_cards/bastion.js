export default {
  id: "bastion",
  name: "Bastion",
  type: "ability",
  mana: 3,
  tier: "rare",
  ephemeral: true,
  weight: 1,
  courage: 6,
  abilities: [{ ability: "protection", enabled: true, baseTurns: -1 }],
  slots: 2,
  shardUpgrades: {
    natural: true,
    ephemeral: false,
  },
  bothShardUpgrades: {
    mana: 2,
  },
};
