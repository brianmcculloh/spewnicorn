export default {
  id: "berserk",
  name: "Berserk",
  type: "attack",
  target: "monster",
  mana: 2,
  tier: "rare",
  pack: "cycle",
  weight: 4,
  courage: 4,
  dmg: [4, 4, 4, 4, 4],
  actions: [{ action: "destroy", value: 1 }],
  draw: {
    dmg: [1, 1, 1],
    target: "player",
  },
  slots: 2,
  fireShardUpgrades: {
    dmg: [4, 4, 4, 4, 4, 4, 4],
    draw_2: {
      dmg: [1, 1, 1],
      target: "monster",
    },
  },
  iceShardUpgrades: {
    dmg: [4, 4, 4, 4, 4, 4, 4],
    mana_2: 1,
  },
  bothShardUpgrades: {
    dmg: [4, 4, 4, 4, 4, 4, 4],
    draw: {
      dmg: [1],
      target: "monster",
    },
  },
};
