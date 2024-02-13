export default {
  id: "quick_stab",
  name: "Quick Stab",
  type: "attack",
  target: "monster",
  mana: 0,
  weight: 6,
  pack: "cycle",
  dmg: [6],
  draw: {
    actions: [{ action: "draw", value: 1 }],
  },
  slots: 1,
  shardUpgrades: {
    dmg: [10],
    draw: {
      actions: [{ action: "draw", value: 2 }],
    },
  },
};
