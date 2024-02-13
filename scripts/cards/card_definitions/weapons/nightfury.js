export default {
  id: "nightfury",
  name: "Nightfury",
  type: "attack",
  mana: 2,
  target: "monster",
  weight: 0.1,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [60],
  effects: [{ effect: "punch", amount: 0.25, turns: -1 }],
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 1,
    dmg: [75],
  },
};
