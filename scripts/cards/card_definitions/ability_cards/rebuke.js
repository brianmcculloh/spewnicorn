export default {
  id: "rebuke",
  name: "Rebuke",
  type: "ability",
  mana: 2,
  tier: "uncommon",
  courage: 3,
  pack: "combine",
  effects: [{ effect: "angered", amount: 2, turns: -1 }],
  slots: 2,
  shardUpgrades: {
    effects: [{ effect: "angered", amount: 3, turns: -1 }],
  },
  bothShardUpgrades: {
    effects: [{ effect: "angered", amount: 4, turns: -1 }],
  },
};
