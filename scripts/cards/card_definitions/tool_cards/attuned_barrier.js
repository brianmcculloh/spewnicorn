export default {
  id: "attuned_barrier",
  name: "Attuned Barrier",
  type: "tool",
  mana: 2,
  pack: "rainbow",
  descOverride: "Gain block equal to your max rainbow",
  actions: [{ action: "rainbowShield", value: 1 }],
  slots: 2,
  shardUpgrades: {
    mana: 1,
    descOverride:
      '<div class="desc-item"><span class="highlight">Mana:</span> 1</div><div class="desc-item">Gain block equal to your max rainbow &times; <span class="highlight">1.25</span></div>',
    actions: [{ action: "rainbowShield", value: 1.25 }],
  },
  bothShardUpgrades: {
    descOverride:
      '<div class="desc-item"><span class="highlight">Linger:</span> 1</div><div class="desc-item"><span class="highlight">Mana:</span> 1</div><div class="desc-item">Gain block equal to your max rainbow &times; <span class="highlight">1.5</span></div>',
    actions: [{ action: "rainbowShield", value: 1.5 }],
    linger: 1,
  },
};
