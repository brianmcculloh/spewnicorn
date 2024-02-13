export default {
  id: "gravitas",
  name: "Gravitas",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 0.6,
  addable: false,
  tier: "rare",
  weapon: true,
  dmg: [50],
  effects: [{ effect: "punch", amount: -0.25, turns: -1, hex: true }],
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [60],
  },
  trade: ["singing_mallet", "firmament_mover"],
};
