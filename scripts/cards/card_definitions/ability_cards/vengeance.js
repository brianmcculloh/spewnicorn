export default {
  id: "vengeance",
  name: "Vengeance",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  weight: 8,
  effects: [
    { effect: "retaliate", amount: 10, turns: -1 },
    { effect: "spikes", amount: 12, turns: -1 },
  ],
  slots: 1,
  fireShardUpgrades: {
    effects: [
      { effect: "retaliate", amount: 16, turns: -1 },
      { effect: "spikes", amount: 20, turns: -1 },
    ],
  },
  iceShardUpgrades: {
    mana: 0,
  },
};
