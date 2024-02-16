export default {
  id: "delayed_charge",
  name: "Delayed Charge",
  type: "magic",
  tier: "common",
  playable: false,
  pack: "cycle",
  sound: "magic3",
  discard: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  slots: 1,
  shardUpgrades: {
    retain: true,
  },
};
