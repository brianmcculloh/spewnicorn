export default {
  id: "mezmerize",
  name: "Mezmerize",
  type: "tool",
  mana: 1,
  tier: "rare",
  vanish: true,
  ephemeral: true,
  courage: 4,
  pack: "rainbow",
  abilities: [{ ability: "hypnotize", turns: 1, enabled: true }],
  slots: 2,
  shardUpgrades: {
    abilities: [{ ability: "hypnotize", turns: 2, enabled: true }],
  },
  bothShardUpgrades: {
    mana: 0,
  },
};
