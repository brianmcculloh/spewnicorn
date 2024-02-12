export default {
    id: 'self_enhance', name: 'Self-Enhance', type: 'tool', mana: 1, addable: false, tier: 'uncommon', retain: true, vanish: true,
    blk: [16],
    slots: 1,
    combine: {
        actions: [
            {action: 'addCard', value: 1, what: 'self_advance', to: 'handCards'},
        ]
    },
    draw: {
        blk: [6]
    },
    shardUpgrades: {
        blk: [24]
    },
};