export default {
  id: "master_summoner",
  name: "Master Summoner",
  type: "magic",
  mana: 1,
  tier: "rare",
  weight: 4,
  courage: 5,
  pack: "combine",
  magic: [{ type: "aligned", amount: 12 }],
  sound: "magic16",
  effects: [{ effect: "summon", amount: 8, turns: 2 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "summon", amount: 8, turns: 4 }],
  },
  fireShardUpgrades: {
    magic_2: [{ type: "aligned", amount: 16 }],
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 16 }],
  },
};
