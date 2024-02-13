export default {
  id: "malevolent_blow",
  name: "Malevolent Blow",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "legendary",
  courage: 8,
  pack: "cycle",
  dmg: [3, 3, 3, 3],
  sound: "attack21",
  effects: [{ effect: "might", amount: 1, turns: -1 }],
  draw: {
    effects: [{ effect: "might", amount: 1, turns: -1 }],
  },
  slots: 1,
  shardUpgrades: {
    dmg: [3, 3, 3, 3, 3, 3],
    draw: {
      effects: [{ effect: "might", amount: 2, turns: -1 }],
    },
    effects: [{ effect: "might", amount: 2, turns: -1 }],
  },
};
