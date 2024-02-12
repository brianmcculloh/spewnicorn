export default {
    id: 'tesseract', name: 'Tesseract', type: 'magic', target: 'monster', mana: 3, addable: false, retain: true, vanish: true, tier: 'legendary',
    dmg: [10],
    blk: [15],
    magic: [{type: 'aligned', amount: 40}],
    additionalDesc: 'Absolute power',
    sound: 'magic1',
    actions: [
        {action: 'addCard', value: 4, what: 'impresa', to: 'discardCards'},
    ],
    slots: 2,
    iceShardUpgrades: {
        blk: [25],
        blk_2: [35],
        additionalDesc: 'Frozen to the core',
        magic: [{type: 'aligned', amount: 50}],
        magic_2: [{type: 'aligned', amount: 60}],
    },
    fireShardUpgrades: {
        dmg: [20],
        dmg_2: [30],
        magic: [{type: 'aligned', amount: 50}],
        magic_2: [{type: 'aligned', amount: 60}],
        additionalDesc: 'Hot to the touch',
    },
    bothShardUpgrades: {
        dmg: [20],
        blk: [25],
        magic: [{type: 'aligned', amount: 60}],
    },
};