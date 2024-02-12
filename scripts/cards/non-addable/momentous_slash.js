export default {
    id: 'momentous_slash', name: 'Momentous Slash', type: 'attack', mana: 0, addable: false, target: 'monster', vanish: true,
    dmg: [2],
    effects: [
        {effect: 'momentum', amount: 1}
    ],
    slots: 1,
    shardUpgrades: {
        dmg: [4],
    },
};