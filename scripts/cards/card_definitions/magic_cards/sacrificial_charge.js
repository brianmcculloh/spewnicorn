export default {
  id: "sacrificial_charge",
  name: "Sacrificial Charge",
  type: "magic",
  tier: "common",
  playable: false,
  pack: "cycle",
  sound: "magic3",
  destroy: {
    magic: [{ type: "aligned", amount: 30 }],
  },
  slots: 1,
  shardUpgrades: {
    retain: true,
  },
};
