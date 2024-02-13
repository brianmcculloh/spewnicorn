export default {
  id: "overwhelming_barrage",
  name: "Overwhelming Barrage",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "legendary",
  courage: 8,
  dmg: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  sound: "attack18",
  effects: [{ effect: "might", amount: 3, turns: -1 }],
  slots: 1,
  shardUpgrades: {
    effects: [{ effect: "might", amount: 5, turns: -1 }],
  },
};
