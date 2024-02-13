export default {
  id: "glacial_blade",
  name: "Glacial Blade",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 0.8,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [40],
  effects: [{ effect: "punch", amount: 0.2, turns: -1 }],
  additionalDesc: "Level V Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [50],
  },
  trade: ["nightfury"],
};
