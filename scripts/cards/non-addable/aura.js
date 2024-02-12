export default {
    id: 'aura', name: 'Aura', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine',
    sound: 'auraAmount',
    descOverride: '<span class="desc-item-value">+<span class="amount aura-amount" data-amount="1">1</span> Aura (+<span class="amount mana-amount" data-amount="1">1</span> Mana at max level)</span>',
    slots: 1,
    actions: [
        {action: 'stat', what: 'aura', key: 'current', value: 1},
    ],
    shardUpgrades: {
        descOverride: '<span class="desc-item-value">+<span class="amount aura-amount" data-amount="2">2</span> Aura (+<span class="amount mana-amount" data-amount="1">1</span> Mana at max level)</span>',
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 2},
        ],
    },
};