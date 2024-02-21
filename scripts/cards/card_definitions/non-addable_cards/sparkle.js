export default {
  id: "sparkle",
  name: "Sparkle",
  type: "tool",
  mana: 0,
  tier: "uncommon",
  addable: false,
  vanish: true,
  pack: "combine",
  sound: "sparkleAmount",
  descOverride:
    '<span class="desc-item-value">+<span class="amount sparkle-amount" data-amount="1">1</span> Sparkle (+<span class="amount health-amount" data-amount="5">5</span> Health at max level)</span>',
  slots: 1,
  actions: [{ action: "stat", what: "sparkle", key: "current", value: 1 }],
  shardUpgrades: {
    descOverride:
      '<span class="desc-item-value">+<span class="amount sparkle-amount" data-amount="2">2</span> Sparkle (+<span class="amount health-amount" data-amount="5">5</span> Health at max level)</span>',
    actions: [{ action: "stat", what: "sparkle", key: "current", value: 2 }],
  },
};
