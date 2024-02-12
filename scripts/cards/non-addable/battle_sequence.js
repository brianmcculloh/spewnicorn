export default {
    id: 'battle_sequence', name: 'Battle Sequence', type: 'tool', mana: 3, retain: true, addable: false, vanish: true, tier: 'legendary',
    effects: [
        {effect: 'fierce', amount: 15, turns: 1},
        {effect: 'mastery', amount: 3, turns: 1},
        {effect: 'rowdy', amount: 30, turns: 1}
    ],
    actions: [
        {action: 'addCard', value: 1, what: 'battle_finisher', to: 'handCards'},
    ],
    slots: 2,
    shardUpgrades: {
        effects: [
            {effect: 'fierce', amount: 20, turns: 1},
            {effect: 'mastery', amount: 4, turns: 1},
            {effect: 'rowdy', amount: 40, turns: 1}
        ],
    },
    bothShardUpgrades: {
        effects: [
            {effect: 'fierce', amount: 25, turns: 1},
            {effect: 'mastery', amount: 5, turns: 1},
            {effect: 'rowdy', amount: 50, turns: 1}
        ],
    }
};