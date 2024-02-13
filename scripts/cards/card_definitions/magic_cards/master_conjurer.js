export default {
  id: "master_conjurer",
  name: "Master Conjurer",
  type: "magic",
  mana: 2,
  tier: "rare",
  weight: 4,
  courage: 5,
  pack: "cycle",
  magic: [{ type: "aligned", amount: 12 }],
  sound: "magic16",
  effects: [{ effect: "conjure", amount: 3, turns: 3 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "conjure", amount: 4, turns: 3 }],
  },
  fireShardUpgrades: {
    effects_2: [{ effect: "conjure", amount: 5, turns: 3 }],
  },
  bothShardUpgrades: {
    magic: [{ type: "aligned", amount: 16 }],
  },
};
