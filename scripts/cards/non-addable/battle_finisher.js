export default {
    id: 'battle_finisher', name: 'Battle Finisher', type: 'attack', target: 'monster', mana: 0, tier: 'rare', ephemeral: true, vanish: true, addable: false,
    dmg: [10, 10, 10, 10],
    sound: 'attack16',
    additionalDesc: 'Finish Him!',
    actions: [
        {action: 'addCard', value: 4, what: 'battle_move', to: 'discardCards'},
    ],
    slots: 2,
    fireShardUpgrades: {
        dmg: [48],
        dmg_2: [60]
    },
    iceShardUpgrades: {
        dmg: [12, 12, 12, 12],
        dmg_2: [15, 15, 15, 15],
    },
    bothShardUpgrades: {
        dmg: [14, 14, 14, 14],
    }
};