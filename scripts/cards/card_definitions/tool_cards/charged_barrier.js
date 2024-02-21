export default {
  id: "charged_barrier",
  name: "Charged Barrier",
  type: "tool",
  mana: 0,
  pack: "rainbow",
  descOverride: "Gain block equal to your summoned rainbow amount",
  actions: [{ action: "chargedShield", value: 1 }],
  slots: 1,
  shardUpgrades: {
    descOverride:
      '<div class="desc-item">Gain block equal to your summoned rainbow amount &times; <span class="highlight">2</span></div>',
    actions: [{ action: "chargedShield", value: 2 }],
  },
};
