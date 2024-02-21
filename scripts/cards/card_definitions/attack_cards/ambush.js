export default {
  id: "ambush",
  name: "Ambush",
  type: "attack",
  mana: 2,
  target: "monster",
  weight: 1,
  dmg: [10],
  slots: 1,
  shardUpgrades: {
    dmg: [18],
  },
  aura: {
    dmg: [10],
    actions: [{ action: "addCard", value: 2, what: "boost", to: "handCards" }],
  },
};
