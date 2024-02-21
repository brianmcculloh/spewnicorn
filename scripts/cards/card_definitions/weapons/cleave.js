export default {
  id: "cleave",
  name: "Cleave",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 1,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [30],
  effects: [{ effect: "punch", amount: 0.3, turns: 1 }],
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [40],
  },
  trade: ["forge", "dragons_bane"],
};
