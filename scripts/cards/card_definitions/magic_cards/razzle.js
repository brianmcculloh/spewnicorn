export default {
  id: "razzle",
  name: "Razzle",
  type: "magic",
  mana: 1,
  tier: "rare",
  vanish: true,
  pack: "combine",
  courage: 3,
  effects: [{ effect: "mage", amount: 2, turns: 3 }],
  actions: [{ action: "addCard", value: 2, what: "impresa", to: "drawCards" }],
  slots: 1,
  shardUpgrades: {
    vanish: false,
    use: 1,
    mana: 0,
  },
};
