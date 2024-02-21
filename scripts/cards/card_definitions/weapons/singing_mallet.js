export default {
  id: "singing_mallet",
  name: "Singing Mallet",
  type: "attack",
  mana: 1,
  target: "monster",
  weight: 0.05,
  addable: false,
  tier: "legendary",
  weapon: true,
  dmg: [50],
  effects: [{ effect: "punch", amount: -0.25, turns: -1, hex: true }],
  additionalDesc: "Level VII Weapon",
  slots: 1,
  shardUpgrades: {
    mana: 0,
    dmg: [65],
  },
};
