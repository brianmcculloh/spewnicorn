export default {
  id: "secret_arts",
  name: "Secret Arts",
  type: "magic",
  mana: 3,
  tier: "rare",
  ephemeral: true,
  pack: "rainbow",
  weight: 3,
  courage: 4,
  magic: [{ type: "aligned", amount: 7 }],
  effects: [
    { effect: "conjure", amount: 2, turns: 2 },
    { effect: "sorcery", amount: 0.2, turns: 2 },
    { effect: "summon", amount: 4, turns: 2 },
    { effect: "arcane", amount: 3, turns: 2 },
  ],
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
  },
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "conjure", amount: 2, turns: 3 },
      { effect: "sorcery", amount: 0.2, turns: 3 },
      { effect: "summon", amount: 4, turns: 3 },
      { effect: "arcane", amount: 3, turns: 3 },
    ],
    ephemeral: false,
  },
};
