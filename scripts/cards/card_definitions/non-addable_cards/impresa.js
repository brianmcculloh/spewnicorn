export default {
  id: "impresa",
  name: "Impresa",
  type: "magic",
  mana: 1,
  tier: "uncommon",
  addable: false,
  retain: true,
  vanish: true,
  magic: [{ type: "aligned", amount: 5 }],
  slots: 1,
  combine: {
    magic: [{ type: "aligned", amount: 10 }],
    actions: [
      { action: "addCard", value: 1, what: "ouroboros", to: "handCards" },
    ],
  },
  draw: {
    magic: [{ type: "aligned", amount: 1 }],
  },
  shardUpgrades: {
    magic: [{ type: "aligned", amount: 10 }],
  },
};
