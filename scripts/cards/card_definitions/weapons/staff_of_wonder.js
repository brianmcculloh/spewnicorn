export default {
  id: "staff_of_wonder",
  name: "Staff of Wonder",
  type: "magic",
  mana: 3,
  weight: 0.6,
  weapon: true,
  addable: false,
  tier: "rare",
  magic: [{ type: "aligned", amount: 18 }],
  sound: "magic4",
  additionalDesc: "Level VI Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 23 }],
  },
  trade: ["skycaller", "windrift", "ember", "deepcore", "felcrystal"],
};
