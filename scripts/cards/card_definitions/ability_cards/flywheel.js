export default {
  id: "flywheel",
  name: "Flywheel",
  type: "ability",
  mana: 2,
  tier: "uncommon",
  weight: 6,
  pack: "cycle",
  effects: [{ effect: "momentum", amount: 2, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    mana: 1,
  },
  fireShardUpgrades: {
    effects_2: [{ effect: "momentum", amount: 4, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "momentum", amount: 3, turns: -1 }],
  },
};
