export default {
  id: "ruby_staff",
  name: "Ruby Staff",
  type: "magic",
  mana: 3,
  weight: 1,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 14 }],
  sound: "magic4",
  additionalDesc: "Level IV Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 19 }],
  },
  trade: ["emanating_staff", "shuddering_staff", "quaking_staff"],
};
