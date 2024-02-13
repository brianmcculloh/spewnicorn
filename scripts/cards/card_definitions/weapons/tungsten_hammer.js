export default {
  id: "tungsten_hammer",
  name: "Tungsten Hammer",
  type: "attack",
  mana: 3,
  target: "monster",
  weight: 2,
  addable: false,
  tier: "uncommon",
  weapon: true,
  dmg: [24],
  effects: [{ effect: "punch", amount: -0.1, turns: -1, hex: true }],
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    dmg: [36],
  },
  trade: ["molten_hammer"],
};
