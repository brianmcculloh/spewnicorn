export default {
    id: 'shimmer', name: 'Shimmer', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine',
    sound: 'shimmerAmount',
    descOverride: '<span class="desc-item-value">+<span class="amount shimmer-amount" data-amount="1">1</span> Shimmer (+<span class="amount speed-amount" data-amount="2">2</span> Speed at max level)</span>',
    slots: 1,
    actions: [
        {action: 'stat', what: 'shimmer', key: 'current', value: 1},
    ],
    shardUpgrades: {
        descOverride: '<span class="desc-item-value">+<span class="amount shimmer-amount" data-amount="2">2</span> Shimmer (+<span class="amount speed-amount" data-amount="2">2</span> Speed at max level)</span>',
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 2},
        ],
    },
};