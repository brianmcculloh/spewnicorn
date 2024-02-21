export default {
  id: "thwack",
  name: "Thwack",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  pack: "combine",
  retain: true,
  vanish: true,
  dmg: [15],
  slots: 1,
  shardUpgrades: {
    dmg: [25],
  },
  combine: {
    actions: [{ action: "addCard", value: 1, what: "thrash", to: "drawCards" }],
  },
};
