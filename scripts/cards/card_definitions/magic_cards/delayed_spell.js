export default {
  id: "delayed_spell",
  name: "Delayed Spell",
  type: "magic",
  tier: "uncommon",
  playable: false,
  pack: "cycle",
  discard: {
    dmg: [5],
    magic: [{ type: "aligned", amount: 10 }],
  },
  slots: 1,
  shardUpgrades: {
    retain: true,
  },
};
