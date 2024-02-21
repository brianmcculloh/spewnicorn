export default {
  id: "prisma",
  name: "Prisma",
  type: "ability",
  mana: 1,
  tier: "rare",
  courage: 4,
  effects: [{ effect: "summon", amount: 6, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "summon", amount: 12, turns: -1 }],
  },
};
