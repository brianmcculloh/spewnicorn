export default {
  id: "dark_converter",
  name: "Dark Converter",
  type: "converter",
  mana: 0,
  tier: "uncommon",
  addable: false,
  vanish: true,
  sound: "magic4",
  slots: 1,
  actions: [{ action: "stat", what: "rainbow", key: "type", value: "dark" }],
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
  },
};
