export default {
  id: "dazzle",
  name: "Dazzle",
  type: "magic",
  mana: 1,
  tier: "rare",
  vanish: true,
  pack: "combine",
  courage: 3,
  effects: [{ effect: "enchanter", amount: 2, turns: 1 }],
  actions: [{ action: "addCard", value: 2, what: "impresa", to: "drawCards" }],
  slots: 1,
  shardUpgrades: {
    vanish: false,
    use: 1,
    mana: 0,
  },
};
