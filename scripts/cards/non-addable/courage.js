export default {
    id: 'courage', name: 'Courage', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine',
    slots: 1,
    actions: [
        {action: 'stat', what: 'courage', value: 1},
    ],
    shardUpgrades: {
        actions: [
            {action: 'stat', what: 'courage', value: 2},
        ],
    },
};