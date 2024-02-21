export default {
  id: "collateral_damage",
  name: "Collateral Damage",
  type: "attack",
  target: "monster",
  mana: 1,
  tier: "uncommon",
  weight: 3,
  courage: 3,
  dmg: [9],
  actions: [{ action: "destroy", value: 1 }],
  slots: 1,
  fireShardUpgrades: {
    dmg: [15],
    actions: [{ action: "destroy", value: 2 }],
  },
  iceShardUpgrades: {
    retain: true,
  },
};
