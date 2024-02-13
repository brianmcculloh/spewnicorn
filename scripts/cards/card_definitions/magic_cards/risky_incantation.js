export default {
  id: "risky_incantation",
  name: "Risky Incantation",
  type: "magic",
  mana: 2,
  tier: "rare",
  weight: 6,
  courage: 3,
  magic: [{ type: "random", amount: 15 }],
  effects: [{ effect: "arcane", amount: 8, turns: 2 }],
  slots: 2,
  shardUpgrades: {
    magic: [{ type: "random", amount: 20 }],
    effects: [{ effect: "arcane", amount: 8, turns: 3 }],
  },
  iceShardUpgrades: {
    mana_2: 1,
  },
  bothShardUpgrades: {
    magic: [{ type: "random", amount: 20 }],
    effects: [{ effect: "arcane", amount: 8, turns: 4 }],
  },
};
