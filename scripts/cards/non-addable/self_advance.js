export default {
    id: 'self_advance', name: 'Self-Advance', type: 'tool', tier: 'rare', mana: 0, addable: false, retain: true, vanish: true,
    blk: [5],
    armor: [3],
    slots: 1,
    actions: [
        {action: 'stat', what: 'health', key: 'current', value: 6},
    ],
    combine: {
        actions: [
            {action: 'addCard', value: 1, what: 'self_fulfill', to: 'handCards'},
        ]
    },
    shardUpgrades: {
        blk: [10],
        armor: [6],
        actions: [
            {action: 'stat', what: 'health', key: 'current', value: 10},
        ],
    },
};