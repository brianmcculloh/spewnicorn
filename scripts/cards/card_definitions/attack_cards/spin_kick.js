export default {
  id: "spin_kick",
  name: "Spin Kick",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 6,
  dmg: [2, 2, 2, 2],
  sound: "attack1",
  actions: [
    { action: "addCard", value: 1, what: "hind_kick", to: "handCards" },
  ],
  draw: {
    blk: [6],
  },
  slots: 1,
  shardUpgrades: {
    dmg: [2, 2, 2, 2, 2, 2, 2],
    linger: 1,
  },
};
