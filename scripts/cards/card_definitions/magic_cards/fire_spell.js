export default {
  id: "fire_spell",
  name: "Fire Spell",
  type: "magic",
  mana: 0,
  tier: "uncommon",
  vanish: true,
  courage: 3,
  pack: "cycle",
  sound: "magic14",
  magic: [{ type: "aligned", amount: 2 }],
  actions: [{ action: "destroy", value: 1, optional: true }],
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 3 }],
    actions: [
      { action: "draw", value: 1 },
      { action: "destroy", value: 1, optional: true },
    ],
  },
  fireShardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
    actions: [
      { action: "draw", value: 2 },
      { action: "destroy", value: 2, optional: true },
    ],
  },
};
