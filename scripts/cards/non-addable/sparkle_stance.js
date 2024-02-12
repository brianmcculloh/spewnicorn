export default {
    id: 'sparkle_stance', name: 'Sparkle Stance', type: 'tool', tier: 'uncommon', mana: 0, vanish: true, addable: false, ephemeral: true,
    sound: 'sparkleAmount',
    slots: 2,
    actions: [
        {action: 'stat', what: 'stance', value: 'sparkle'},
    ],
    effects: [
        {effect: 'might', amount: 3, turns: 1},
    ],
    draw: {
        actions: [
            {action: 'draw', value: 1}
        ]
    },
    shardUpgrades: {
        effects: [
            {effect: 'might', amount: 6, turns: 1},
        ],
    },
    bothShardUpgrades: {
        vanish: false,
        ephemeral: false
    }
}