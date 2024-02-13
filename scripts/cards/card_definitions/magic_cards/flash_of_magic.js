export default {
  id: "flash_of_magic",
  name: "Flash of Magic",
  type: "magic",
  mana: 0,
  pack: "combine",
  vanish: true,
  magic: [{ type: "aligned", amount: 4 }],
  sound: "magic2",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 7 }],
  },
  combine: {
    actions: [
      { action: "addCard", value: 1, what: "blaze_of_magic", to: "handCards" },
    ],
  },
};
