export default {
  id: "fury",
  name: "Fury",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "uncommon",
  weight: 4,
  pack: "combine",
  dmg: [20],
  sound: "attack8",
  abilities: [{ ability: "panic", turns: 2, enabled: true, target: "player" }],
  slots: 1,
  shardUpgrades: {
    dmg: [30],
    abilities: [
      { ability: "panic", turns: 3, enabled: true, target: "player" },
    ],
  },
  bothShardUpgrades: {
    mana: 1,
  },
};
