export default {
    id: 'battle_move', name: 'Battle Move', type: 'attack', mana: 1, tier: 'uncommon', target: 'monster', addable: false, retain: true, vanish: true,
    dmg: [9],
    //sound: 'attack17',
    slots: 1,
    combine: {
        actions: [
            {action: 'addCard', value: 1, what: 'battle_combo', to: 'handCards'},
        ]
    },
    draw: {
        blk: [3]
    },
    shardUpgrades: {
        dmg: [15],
    },
};