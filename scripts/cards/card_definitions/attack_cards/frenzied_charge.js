export default {
  id: "frenzied_charge",
  name: "Frenzied Charge",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "uncommon",
  pack: "cycle",
  dmg: [20],
  sound: "attack5",
  actions: [{ action: "discard", value: 1 }],
  slots: 1,
  fireShardUpgrades: {
    dmg: [35],
  },
  iceShardUpgrades: {
    mana: 1,
  },
};
