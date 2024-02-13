export default {
  id: "chaos_converter",
  name: "Chaos Converter",
  type: "converter",
  mana: 0,
  tier: "uncommon",
  addable: false,
  vanish: true,
  sound: "magic4",
  slots: 1,
  actions: [{ action: "stat", what: "rainbow", key: "type", value: "chaos" }],
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 5 }],
  },
};
