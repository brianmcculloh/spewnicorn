export default {
  id: "metamorphose",
  name: "Metamorphose",
  type: "magic",
  mana: 0,
  tier: "uncommon",
  weight: 7,
  courage: 3,
  pack: "rainbow",
  magic: [{ type: "aligned", amount: 5 }],
  sound: "magic10",
  actions: [{ action: "transmute", select: 2, from: "handCards" }],
  slots: 1,
  fireShardUpgrades: {
    linger: 1,
  },
  iceShardUpgrades: {
    actions: [{ action: "transmute", select: 3, from: "handCards" }],
  },
};
