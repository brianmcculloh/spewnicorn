export default {
  id: "maelstrom",
  name: "Maelstrom",
  type: "magic",
  mana: 2,
  tier: "rare",
  weight: 6,
  courage: 3,
  magic: [{ type: "muddled", amount: 30 }],
  sound: "magic8",
  effects: [{ effect: "arcane", amount: 5, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    magic: [{ type: "muddled", amount: 35 }],
  },
  bothShardUpgrades: {
    magic: [{ type: "muddled", amount: 40 }],
  },
};
