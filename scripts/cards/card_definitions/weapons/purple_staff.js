export default {
  id: "purple_staff",
  name: "Purple Staff",
  type: "magic",
  mana: 3,
  weight: 2,
  weapon: true,
  addable: false,
  tier: "uncommon",
  magic: [{ type: "aligned", amount: 12 }],
  sound: "magic4",
  additionalDesc: "Level III Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 17 }],
  },
  trade: ["sapphire_staff", "emerald_staff", "ruby_staff"],
};
