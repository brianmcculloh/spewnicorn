export default {
  id: "forethought",
  name: "Forethought",
  type: "ability",
  mana: 1,
  tier: "uncommon",
  weight: 7,
  courage: 3,
  pack: "cycle",
  abilities: [{ ability: "prepared", enabled: true, baseTurns: -1 }],
  slots: 1,
  fireShardUpgrades: {
    mana: 0,
  },
  iceShardUpgrades: {
    natural: true,
  },
};
