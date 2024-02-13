export default {
  id: "champions_cutlass",
  name: "Champion's Cutlass",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 1,
  addable: false,
  tier: "uncommon",
  weapon: true,
  dmg: [30],
  effects: [{ effect: "punch", amount: 0.15, turns: -1 }],
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [40],
  },
  trade: ["glacial_blade"],
};
