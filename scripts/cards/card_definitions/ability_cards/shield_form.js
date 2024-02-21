export default {
  id: "shield_form",
  name: "Shield Form",
  type: "ability",
  mana: 3,
  tier: "uncommon",
  weight: 8,
  pack: "combine",
  effects: [{ effect: "stout", amount: 10, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "stout", amount: 14, turns: -1 }],
  },
  iceShardUpgrades: {
    mana_2: 2,
    effects_2: [{ effect: "stout", amount: 18, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "stout", amount: 18, turns: -1 }],
  },
};
