export default {
  id: "cheap_shot",
  name: "Cheap Shot",
  type: "attack",
  target: "monster",
  mana: 0,
  pack: "combine",
  vanish: true,
  dmg: [7],
  slots: 1,
  shardUpgrades: {
    dmg: [12],
  },
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "head_shot", to: "drawCards" },
    ],
  },
};
