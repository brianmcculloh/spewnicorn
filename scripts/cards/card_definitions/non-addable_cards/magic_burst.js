export default {
  id: "magic_burst",
  name: "Magic Burst",
  type: "magic",
  mana: 1,
  retain: true,
  natural: true,
  tier: "uncommon",
  addable: false,
  magic: [{ type: "aligned", amount: 20 }],
  slots: 1,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 30 }],
  },
};
