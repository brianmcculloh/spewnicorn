export default {
  id: "eternal_runestone",
  name: "Eternal Runestone",
  type: "magic",
  mana: 2,
  vanish: true,
  tier: "legendary",
  retain: true,
  pack: "rainbow",
  courage: 8,
  magic: [{ type: "aligned", amount: 5 }],
  sound: "magic24",
  effects: [
    { effect: "mage", amount: 3, turns: 2 },
    { effect: "enchanter", amount: 3, turns: 1 },
  ],
  slots: 1,
  shardUpgrades: {
    vanish: false,
    use: 1,
    linger: 1,
  },
};
