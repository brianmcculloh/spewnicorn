export default {
  id: "rainbow_converter",
  name: "Rainbow Converter",
  type: "converter",
  mana: 0,
  tier: "uncommon",
  addable: false,
  vanish: true,
  sound: "magic4",
  slots: 1,
  actions: [{ action: "stat", what: "rainbow", key: "type", value: "rainbow" }],
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
  },
};
