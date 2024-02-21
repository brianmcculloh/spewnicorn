export default {
  id: "magic_flare",
  name: "Magic Flare",
  type: "magic",
  tier: "uncommon",
  mana: 1,
  pack: "combine",
  vanish: true,
  retain: true,
  magic: [{ type: "aligned", amount: 8 }],
  sound: "magic2",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 14 }],
  },
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "magic_burst", to: "handCards" },
    ],
  },
};
