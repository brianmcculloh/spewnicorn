export default {
  id: "ice_spell",
  name: "Ice Spell",
  type: "magic",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  courage: 3,
  pack: "cycle",
  sound: "magic15",
  magic: [{ type: "aligned", amount: 2 }],
  actions: [{ action: "discard", value: 1 }],
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 3 }],
    actions: [
      { action: "draw", value: 1 },
      { action: "discard", value: 1 },
    ],
  },
  iceShardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
    actions: [
      { action: "draw", value: 2 },
      { action: "discard", value: 2 },
    ],
  },
};
