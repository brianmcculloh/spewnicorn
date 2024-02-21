export default {
  id: "burning_branch",
  name: "Burning Branch",
  type: "magic",
  mana: 3,
  weight: 0.8,
  weapon: true,
  pack: "rainbow",
  magic: [{ type: "aligned", amount: 5 }],
  sound: "magic4",
  additionalDesc: "Level I Weapon",
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 10 }],
  },
  trade: ["flaming_torch"],
};
