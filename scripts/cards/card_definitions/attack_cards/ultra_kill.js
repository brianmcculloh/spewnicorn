export default {
  id: "ultra_kill",
  name: "Ultra Kill",
  type: "attack",
  target: "monster",
  mana: 3,
  tier: "rare",
  weight: 2,
  courage: 5,
  dmg: [1],
  sound: "attack12",
  effects: [
    { effect: "fatality", amount: 1.2, turns: 1, persist: true },
    { effect: "punch", amount: 0.05, turns: -1 },
  ],
  slots: 2,
  shardUpgrades: {
    effects: [
      { effect: "fatality", amount: 1.3, turns: 1, persist: true },
      { effect: "punch", amount: 0.1, turns: -1 },
    ],
  },
  iceShardUpgrades: {
    effects: [
      { effect: "fatality", amount: 1.3, turns: 1, persist: true },
      { effect: "punch", amount: 0.1, turns: -1 },
    ],
    effects_2: [
      { effect: "fatality", amount: 1.7, turns: 1, persist: true },
      { effect: "punch", amount: 0.15, turns: -1 },
    ],
    mana_2: 2,
  },
  bothShardUpgrades: {
    effects: [
      { effect: "fatality", amount: 1.5, turns: 1, persist: true },
      { effect: "punch", amount: 0.15, turns: -1 },
    ],
  },
};
