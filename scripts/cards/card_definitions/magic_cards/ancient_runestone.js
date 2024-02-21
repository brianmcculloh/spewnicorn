export default {
  id: "ancient_runestone",
  name: "Ancient Runestone",
  type: "magic",
  mana: 3,
  tier: "rare",
  pack: "rainbow",
  weight: 3,
  courage: 5,
  magic: [{ type: "aligned", amount: 3 }],
  effects: [
    { effect: "mage", amount: 2, turns: 2 },
    { effect: "enchanter", amount: 2, turns: 1 },
  ],
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
  },
  slots: 2,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 4 }],
    effects: [
      { effect: "mage", amount: 3, turns: 2 },
      { effect: "enchanter", amount: 3, turns: 1 },
    ],
  },
  fireShardUpgrades: {
    draw_2: {
      magic: [{ type: "aligned", amount: 4 }],
    },
  },
  bothShardUpgrades: {
    effects: [
      { effect: "mage", amount: 4, turns: 2 },
      { effect: "enchanter", amount: 4, turns: 1 },
    ],
  },
};
