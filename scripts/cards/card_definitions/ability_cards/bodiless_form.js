export default {
  id: "bodiless_form",
  name: "Bodiless Form",
  type: "ability",
  mana: 3,
  tier: "rare",
  ephemeral: true,
  weight: 2,
  courage: 5,
  abilities: [
    { ability: "unreachable", enabled: true, turns: 2, persist: true },
    { ability: "toothache", enabled: true, baseTurns: -1 },
  ],
  slots: 1,
  shardUpgrades: {
    abilities: [
      { ability: "unreachable", enabled: true, turns: 3, persist: true },
      { ability: "toothache", enabled: true, baseTurns: -1 },
    ],
    ephemeral: false,
  },
};
