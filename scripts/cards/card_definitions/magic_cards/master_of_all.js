export default {
  id: "master_of_all",
  name: "Master of All",
  type: "magic",
  mana: 3,
  target: "monster",
  tier: "rare",
  vanish: true,
  ephemeral: true,
  pack: "combine",
  courage: 4,
  dmg: [10],
  blk: [20],
  armor: [8],
  magic: [{ type: "aligned", amount: 12 }],
  sound: "magic16",
  actions: [{ action: "addCard", value: 2, what: "impresa", to: "drawCards" }],
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
    blk: [5],
    dmg: [1],
  },
  slots: 2,
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 15 }],
  },
  iceShardUpgrades: {
    blk: [25],
    blk_2: [30],
  },
  fireShardUpgrades: {
    dmg: [15],
    dmg_2: [20],
  },
  bothShardUpgrades: {
    mana: 2,
    ephemeral: false,
  },
};
