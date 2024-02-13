export default {
  id: "dark_codex",
  name: "Dark Codex",
  type: "ability",
  mana: 1,
  tier: "rare",
  courage: 6,
  pack: "rainbow",
  effects: [{ effect: "retain", amount: 1, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "retain", amount: 2, turns: -1 }],
  },
};
