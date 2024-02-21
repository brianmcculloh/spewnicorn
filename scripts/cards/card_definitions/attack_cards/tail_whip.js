export default {
  id: "tail_whip",
  name: "Tail Whip",
  type: "attack",
  mana: 2,
  target: "monster",
  ephemeral: true,
  dmg: [4, 5, 6, 7, 8],
  slots: 1,
  shardUpgrades: {
    dmg: [5, 6, 7, 8, 9],
    ephemeral: false,
  },
};
