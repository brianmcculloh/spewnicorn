export default {
    id: 'auxiliary', name: 'Auxiliary', type: 'tool', mana: 0, retain: true, addable: false, vanish: true,
    actions: [
        {action: 'playOldest'}
    ],
    slots: 1,
    shardUpgrades: {
        actions: [
            {action: 'playOldest'},
            {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
        ],
    },
}