export default {
  id: "sacrificial_spell",
  name: "Sacrificial Spell",
  type: "magic",
  tier: "uncommon",
  playable: false,
  pack: "cycle",
  destroy: {
    dmg: [10],
    magic: [{ type: "aligned", amount: 20 }],
  },
  slots: 1,
  shardUpgrades: {
    retain: true,
  },
};
