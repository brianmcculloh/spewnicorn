export default {
    id: 'aura_stance', name: 'Aura Stance', type: 'tool', tier: 'uncommon', mana: 0, vanish: true, addable: false, ephemeral: true,
    sound: 'auraAmount',
    slots: 2,
    actions: [
        {action: 'stat', what: 'mana', key: 'current', value: 1},
        {action: 'stat', what: 'stance', value: 'aura'},
    ],
    draw: {
        actions: [
            {action: 'draw', value: 1}
        ]
    },
    shardUpgrades: {
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 2}
        ],
    },
    bothShardUpgrades: {
        vanish: false,
        ephemeral: false
    }
}