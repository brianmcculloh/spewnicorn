export default {
  id: "disintegrate",
  name: "Disintegrate",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "rare",
  pack: "cycle",
  weight: 6,
  courage: 3,
  dmg: [20],
  sound: "attack15",
  actions: [{ action: "destroy", value: 1 }],
  slots: 1,
  shardUpgrades: {
    dmg: [30],
    actions: [
      { action: "draw", value: 1 },
      { action: "destroy", value: 1 },
    ],
  },
};
