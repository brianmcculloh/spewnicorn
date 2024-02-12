export default {
    id: 'ouroboros', name: 'Ouroboros', type: 'magic', mana: 0, tier: 'rare', addable: false, retain: true, vanish: true,
    dmg: [4],
    blk: [6],
    magic: [{type: 'aligned', amount: 10}],
    slots: 1,
    actions: [
        {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
    ],
    combine: {
        actions: [
            {action: 'addCard', value: 1, what: 'tesseract', to: 'handCards'},
            {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
        ]
    },
    shardUpgrades: {
        dmg: [8],
        blk: [12],
        magic: [{type: 'aligned', amount: 15}],
    },
};