export default {
    id: 'stun', name: 'Stun', type: 'tool', mana: 0, addable: false, target: 'monster',
    effects: [
        {effect: 'punch', amount: -.5, turns: 1, hex: true},
    ],
    slots: 1,
    shardUpgrades: {
        effects: [
            {effect: 'punch', amount: -.5, turns: 2, hex: true}
        ],
    },
}