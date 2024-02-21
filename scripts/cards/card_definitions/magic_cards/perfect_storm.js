export default {
  id: "perfect_storm",
  name: "Perfect Storm",
  type: "magic",
  mana: 2,
  tier: "legendary",
  courage: 8,
  pack: "rainbow",
  sound: "magic23",
  magic: [{ type: "aligned", amount: 10 }],
  effects: [
    { effect: "lightning", amount: 5, turns: 2 },
    { effect: "thunder", amount: 0.5, turns: 2 },
  ],
  slots: 1,
  shardUpgrades: {
    effects: [
      { effect: "lightning", amount: 10, turns: 2 },
      { effect: "thunder", amount: 1, turns: 2 },
    ],
  },
};
