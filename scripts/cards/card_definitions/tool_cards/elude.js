export default {
  id: "elude",
  name: "Elude",
  type: "tool",
  tier: "uncommon",
  mana: 1,
  retain: true,
  pack: "combine",
  vanish: true,
  blk: [15],
  slots: 1,
  shardUpgrades: {
    blk: [22],
  },
  combine: {
    actions: [{ action: "addCard", value: 1, what: "evade", to: "drawCards" }],
  },
};
