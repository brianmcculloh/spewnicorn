export default {
  id: "grow",
  name: "Grow",
  type: "magic",
  mana: 0,
  use: 3,
  linger: 1,
  tier: "uncommon",
  pack: "rainbow",
  weight: 9,
  courage: 3,
  sound: "grow",
  magic: [{ type: "aligned", amount: 1 }],
  actions: [{ action: "stat", what: "rainbow", key: "max", value: 5 }],
  effects: [{ effect: "sorcery", amount: 0.1, turns: 1 }],
  slots: 1,
  shardUpgrades: {
    use: 4,
    linger: 2,
    /*magic: [{type: 'aligned', amount: 2}],
            effects: [
                {effect: 'sorcery', amount: .2, turns: 2}
            ],*/
  },
};
