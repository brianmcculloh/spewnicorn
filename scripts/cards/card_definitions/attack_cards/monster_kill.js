export default {
  id: "monster_kill",
  name: "Monster Kill",
  type: "attack",
  target: "monster",
  vanish: true,
  mana: 3,
  tier: "legendary",
  courage: 8,
  pack: "combine",
  dmg: [15],
  sound: "attack19",
  effects: [{ effect: "fatality", amount: 1.5, turns: 1, persist: true }],
  slots: 1,
  shardUpgrades: {
    dmg: [25],
    effects: [{ effect: "fatality", amount: 2, turns: 1, persist: true }],
  },
};
