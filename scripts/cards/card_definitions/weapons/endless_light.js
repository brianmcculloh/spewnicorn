export default {
  id: "endless_light",
  name: "Endless Light",
  type: "magic",
  mana: 3,
  weight: 0.6,
  use: 2,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "aligned", amount: 10 }],
  effects: [
    { effect: "mage", amount: 2, turns: -1 },
    { effect: "enchanter", amount: 2, turns: -1 },
  ],
  sound: "magic4",
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  trade: ["dreadfurnace"],
};
