export default {
  id: "smash_and_grab",
  name: "Smash & Grab",
  type: "attack",
  vanish: true,
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 4,
  pack: "cycle",
  dmg: [14],
  sound: "attack7",
  actions: [
    { action: "addCard", value: 2, type: "attack", to: "drawCards" },
    { action: "draw", value: 1 },
  ],
  slots: 1,
  fireShardUpgrades: {
    dmg: [24],
  },
  iceShardUpgrades: {
    actions: [
      { action: "addCard", value: 2, type: "attack", to: "drawCards" },
      { action: "draw", value: 2 },
    ],
  },
};
