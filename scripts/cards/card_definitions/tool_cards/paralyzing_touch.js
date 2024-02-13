export default {
  id: "paralyzing_touch",
  name: "Paralyzing Touch",
  type: "tool",
  target: "monster",
  mana: 1,
  vanish: true,
  tier: "rare",
  weight: 4,
  courage: 6,
  abilities: [{ ability: "frozen", turns: 1, enabled: true }],
  slots: 2,
  shardUpgrades: {
    vanish: false,
    use: 1,
  },
  bothShardUpgrades: {
    use: 2,
  },
};
