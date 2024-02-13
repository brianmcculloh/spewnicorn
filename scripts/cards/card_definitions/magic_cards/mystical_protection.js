export default {
  id: "mystical_protection",
  name: "Mystical Protection",
  type: "magic",
  mana: 1,
  tier: "uncommon",
  weight: 4,
  courage: 4,
  magic: [{ type: "aligned", amount: 10 }],
  effects: [{ effect: "vex", amount: 2, turns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    magic: [{ type: "aligned", amount: 16 }],
  },
  iceShardUpgrades: {
    effects: [{ effect: "vex", amount: 4, turns: -1 }],
  },
};
