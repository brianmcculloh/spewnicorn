import Util from './utils.js';
const util = new Util();

class Quests {
    constructor({
        id,
        name,
        desc,
        options,
        weight = 5,
        seen = false,
    }) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.options = options;
        this.weight = weight;
        this.seen = seen;
    }
}

const ALL_QUESTS = [
    new Quests({
        id: 'workshop',
        name: 'Workshop',
        desc: 'A myriad of tools adorn the walls and tables.',
        weight: 1,
        options: [
            {id: 'explore', name: 'Explore', desc: 'Sharpen your skills',
                options: [
                    {id: 'quickness', name: 'Quickness', desc: 'Gain 1 Speed'},
                    {id: 'strength', name: 'Strength', desc: 'Gain 2 Might'},
                    {id: 'thickness', name: 'Thickness', desc: 'Gain 3 Solid'},
                    {id: 'wizardry', name: 'Wizardry', desc: 'Gain 5 Lightning'},
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'oracle',
        name: 'Oracle',
        desc: 'A powerful green light washes over you, beckoning you closer.',
        weight: 5,
        options: [
            {id: 'explore', name: 'Inquire',
                options: [
                    {id: 'simplicity', name: 'Simplicity', desc: 'Remove a card'},
                    {id: 'metamorphosis', name: 'Metamorphosis', desc: 'Transform a card'},
                    {id: 'improvement', name: 'Improvement', desc: 'Ensharden a card'},
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'alchemy_lab',
        name: 'Alchemy Lab',
        desc: 'There is a strange scent in the air. It is warm and fragrant.',
        weight: 5,
        options: [
            {id: 'transform', name: 'Transmute', desc: 'Transform up to 3 cards'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'midnight_glade',
        name: 'Midnight Glade',
        desc: 'You come across a glad that is both dark and light at the same time.',
        weight: 7,
        options: [
            {id: 'sleep', name: 'Sleep', desc: 'Remove a card'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'midnight_meadow',
        name: 'Midnight Meadow',
        desc: 'You come across a meadow that is both dark and light at the same time.',
        weight: 7,
        options: [
            {id: 'sleep', name: 'Sleep', desc: 'Remove a card'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'challenge',
        name: 'Challenge!',
        desc: 'You hear a distant call to pick up arms and challenge an unseen opponent. Who will win?',
        weight: 7,
        options: [
            {id: 'meet_challenge', name: 'Meet Challenge', desc: '75% chance to gain 3 courage coins, 25% chance to lose 3 health',
                options: [
                    {id: 'rematch', name: 'Rematch!', desc: '50% chance to gain 5 courage coins, 50% chance to lose 5 health',
                        options: [
                            {id: 'final_battle', name: 'Final Battle', desc: '25% chance to gain 10 courage coins, 75% chance to lose 10 health'},
                            {id: 'leave', name: 'Leave'}
                        ]
                    },
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'deep_well',
        name: 'Deep Well',
        desc: 'It is so deep that you cannot see the bottom.',
        weight: 5,
        options: [
            {id: 'toss_a_coin_in', name: 'Toss A Coin In',
                options: [
                    {id: 'wish_for_protection', name: 'Wish For Protection', desc: 'Gain 35 armor'},
                    {id: 'wish_for_healing', name: 'Wish For Healing', desc: 'Gain 25 health'},
                    {id: 'wish_for_long_life', name: 'Wish For Long Life', desc: 'Gain 10 max health'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'library',
        name: 'Library',
        desc: 'There are so many to choose from. What will you take?',
        weight: 2,
        options: [
            {id: 'find_a_card', name: 'Find A Card', desc: 'Choose 1 of 20 random cards to add to your deck.'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'altar',
        name: 'Altar',
        desc: 'You wonder what god this altar was built for. The altar feels... expectant...',
        weight: 3,
        options: [
            {id: 'minor_sacrifice', name: 'Minor Sacrifice', desc: 'Lose 4 health and gain a random common treasure.'},
            {id: 'major_sacrifice', name: 'Major Sacrifice', desc: 'Lose 12 health and gain a random uncommon treasure.'},
            {id: 'ultimate_sacrifice', name: 'Ultimate Sacrifice', desc: 'Lose 21 health and gain a random rare treasure.'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'reliquary',
        name: 'Reliquary',
        desc: 'You enter a very old shop filled with wondrous treasures of various rarities.',
        weight: 3,
        options: [
            {id: 'old_relic', name: 'Old Relic', desc: 'Lose 2 max health and gain a random common treasure.'},
            {id: 'ancient_relic', name: 'Ancient Relic', desc: 'Lose 5 max health and gain a random uncommon treasure.'},
            {id: 'primeval_relic', name: 'Primeval Relic', desc: 'Lose 9 max health and gain a random rare treasure.'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'oratory',
        name: 'Oratory',
        desc: 'A consecrated space where you can improve yourself - at a cost.',
        weight: 5,
        options: [
            {id: 'pray', name: 'Pray', desc: 'Lose 15 health and gain 5 courage coins.'},
            {id: 'meditate', name: 'Meditate', desc: 'Lose 15 health and gain 3 shimmer.'},
            {id: 'fast', name: 'Fast', desc: 'Lose 15 health and gain 3 sparkle.'},
            {id: 'hold_vigil', name: 'Hold Vigil', desc: 'Lose 15 health and gain 3 aura.'},
            {id: 'worship', name: 'Worship', desc: 'Lose 15 health and gain 10 max health.'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'dark_sanctuary',
        name: 'Dark Sanctuary',
        desc: 'A mysterious space that offers protection - at a cost.',
        weight: 4,
        options: [
            {id: 'physical_blow', name: 'Physical Blow', desc: 'Lose 12 health and reduce aggro by 4.'},
            {id: 'mental_blow', name: 'Mental Blow', desc: 'Lose 5 max health and reduce aggro by 4.'},
            {id: 'spiritual_blow', name: 'Spiritual Blow', desc: 'Lose 4 courage coins and reduce aggro by 4.'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'bakery',
        name: 'Bakery',
        desc: 'Delicious confections for sale!',
        weight: 6,
        options: [
            {id: 'buy_1_candy', name: 'Get 1 Candy', desc: 'For free'},
            {id: 'buy_2_candies', name: 'Buy 2 Candies', desc: 'For 1 courage coin'},
            {id: 'buy_3_candies', name: 'Buy 3 Candies', desc: 'For 2 courage coins'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'mossy_pedestal',
        name: 'Mossy Pedestal',
        desc: 'It looks ancient. Does it contain any secrets?',
        weight: 1,
        options: [
            {id: 'touch_the_pedestal', name: 'Touch the pedestal',
                options: [
                    {id: 'attack', name: 'Attack', desc: 'Choose 1 of 3 rare attack cards'},
                    {id: 'tool', name: 'Tool', desc: 'Choose 1 of 3 rare tool cards'},
                    {id: 'ability', name: 'Ability', desc: 'Choose 1 of 3 rare ability cards'},
                    {id: 'magic', name: 'Magic', desc: 'Choose 1 of 3 rare magic cards'},
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'three_trunks',
        name: 'Three Trunks',
        desc: 'You come upon three interesting tree trunks. They look dead. And yet, they feel alive.',
        weight: 2,
        options: [
            {id: 'small_trunk', name: 'Small Trunk', desc: '100% to gain 1 courage coin'},
            {id: 'medium_trunk', name: 'Medium Trunk', desc: '66% to gain 4 courage coins'},
            {id: 'large_trunk', name: 'Large Trunk', desc: '33% to gain 9 courage coins'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'leap_of_faith',
        name: 'Leap of Faith',
        desc: 'The landing will sting, but there is a chance of profit.',
        weight: 5,
        options: [
            {id: 'leap1', name: 'Leap', desc: '25% chance to gain a common treasure, lose 5 health',
                options: [
                    {id: 'leap2', name: 'Leap Again', desc: '35% chance to gain a common treasure, lose 5 health',
                        options: [
                            {id: 'leap3', name: 'Leap Again', desc: '45% chance to gain a common treasure, lose 5 health',
                                options: [
                                    {id: 'leap4', name: 'Leap Again', desc: '55% chance to gain a common treasure, lose 5 health',
                                        options: [
                                            {id: 'leap5', name: 'Leap Again', desc: '65% chance to gain a common treasure, lose 5 health',
                                                options: [
                                                    {id: 'leap6', name: 'Leap Again', desc: '75% chance to gain a common treasure, lose 5 health',
                                                        options: [
                                                            {id: 'leap7', name: 'Leap Again', desc: '85% chance to gain a common treasure, lose 5 health',
                                                                options: [
                                                                    {id: 'leap8', name: 'Leap Again', desc: '95% chance to gain a common treasure, lose 5 health',
                                                                        options: [
                                                                            {id: 'leap9', name: 'Leap Again', desc: '100% chance to gain a common treasure, lose 5 health'},
                                                                            {id: 'leave', name: 'Leave'}
                                                                        ]
                                                                    },
                                                                    {id: 'leave', name: 'Leave'}
                                                                ]
                                                            },
                                                            {id: 'leave', name: 'Leave'}
                                                        ]
                                                    },
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'leave', name: 'Leave'}
                        ]
                    },
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'stained_glass_mirror',
        name: 'Stained Glass Mirror',
        desc: 'How can a mirror be made of stained glass? Whatever the mechanism, it is extremely colorful...',
        weight: 4,
        options: [
            {id: 'peer_into_the_mirror', name: 'Peer into the mirror',
                options: [
                    {id: 'see_color', name: 'See Color', desc: 'Increase rainbow base by 10'},
                    {id: 'see_depth', name: 'See Depth', desc: 'Increase rainbow base by 5 and max by 5'},
                    {id: 'see_clarity', name: 'See Clarity', desc: 'Increase rainbow base by 5 and decrease rainbow max by 5'},
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'singing_cavern',
        name: 'Singing Cavern',
        desc: 'It is pleasant so far. How deep do you want to go?',
        weight: 6,
        options: [
            {id: 'enter', name: 'Enter',
                options: [
                    {id: 'look_around', name: 'Look Around', desc: 'Ensharden one chosen card'},
                    {id: 'go_deeper', name: 'Go Deeper', desc: 'Ensharden two chosen cards and lose 5 health'},
                    {id: 'fully_explore', name: 'Fully Explore', desc: 'Ensharden three chosen cards and lose 15 health'},
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'lucky_spring',
        name: 'Lucky Spring',
        desc: 'Lady luck has shined on you. Do you drink from the blue waters of the spring?',
        weight: 6,
        options: [
            {id: 'drink_a_draught', name: 'Drink a Draught', desc: 'Ensharden two random cards'},
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'labyrinth',
        name: 'Labyrinth',
        desc: 'You wonder if this labyrinth contains a minotaur... or worse.',
        weight: 2,
        options: [
            {id: 'enter', name: 'Enter',
                options: [
                    {id: 'straight', name: 'Go Straight',
                        options: [
                            {id: 'straight1', name: 'Go Straight',
                                options: [
                                    {id: 'straight11', name: 'Go Straight',
                                        options: [
                                            {id: 'straight111', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1111', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1111', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1111', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left111', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1112', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1112', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1112', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right111', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1113', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1113', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1113', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left11', name: 'Go Left',
                                        options: [
                                            {id: 'straight112', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1121', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1121', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1121', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left112', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1122', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1122', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1122', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right112', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1123', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1123', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1123', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right11', name: 'Go Right',
                                        options: [
                                            {id: 'straight113', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1131', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1131', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1131', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left113', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1132', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1132', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1132', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right113', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1133', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1133', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1133', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'left1', name: 'Go Left',
                                options: [
                                    {id: 'straight12', name: 'Go Straight',
                                        options: [
                                            {id: 'straight121', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1211', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1211', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1211', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left121', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1212', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1212', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1212', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right121', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1213', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1213', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1213', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left12', name: 'Go Left',
                                        options: [
                                            {id: 'straight122', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1221', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1221', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1221', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left122', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1222', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1222', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1222', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right122', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1223', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1223', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1223', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right12', name: 'Go Right',
                                        options: [
                                            {id: 'straight123', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1231', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1231', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1231', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left123', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1232', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1232', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1232', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right123', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1233', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1233', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1233', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'right1', name: 'Go Right',
                                options: [
                                    {id: 'straight13', name: 'Go Straight',
                                        options: [
                                            {id: 'straight131', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1311', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1311', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1311', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left131', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1312', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1312', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1312', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right131', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1313', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1313', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1313', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left13', name: 'Go Left',
                                        options: [
                                            {id: 'straight132', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1321', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1321', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1321', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left132', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1322', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1322', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1322', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right132', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1323', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1323', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1323', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right13', name: 'Go Right',
                                        options: [
                                            {id: 'straight133', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight1331', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1331', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1331', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left133', name: 'Go Left',
                                                options: [
                                                    {id: 'straight1332', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1332', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1332', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right133', name: 'Go Right',
                                                options: [
                                                    {id: 'straight1333', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left1333', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right1333', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'leave', name: 'Leave'}
                        ]
                    },
                    {id: 'left', name: 'Go Left',
                        options: [
                            {id: 'straight2', name: 'Go Straight',
                                options: [
                                    {id: 'straight21', name: 'Go Straight',
                                        options: [
                                            {id: 'straight211', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2111', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2111', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2111', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left211', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2112', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2112', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2112', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right211', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2113', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2113', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2113', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left21', name: 'Go Left',
                                        options: [
                                            {id: 'straight212', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2121', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2121', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2121', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left212', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2122', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2122', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2122', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right212', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2123', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2123', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2123', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right21', name: 'Go Right',
                                        options: [
                                            {id: 'straight213', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2131', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2131', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2131', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left213', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2132', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2132', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2132', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right213', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2133', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2133', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2133', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'left2', name: 'Go Left',
                                options: [
                                    {id: 'straight22', name: 'Go Straight',
                                        options: [
                                            {id: 'straight221', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2211', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2211', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2211', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left221', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2212', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2212', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2212', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right221', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2213', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2213', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2213', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left22', name: 'Go Left',
                                        options: [
                                            {id: 'straight222', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2221', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2221', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2221', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left222', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2222', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2222', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2222', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right222', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2223', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2223', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2223', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right22', name: 'Go Right',
                                        options: [
                                            {id: 'straight223', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2231', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2231', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2231', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left223', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2232', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2232', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2232', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right223', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2233', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2233', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2233', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'right2', name: 'Go Right',
                                options: [
                                    {id: 'straight23', name: 'Go Straight',
                                        options: [
                                            {id: 'straight231', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2311', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2311', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2311', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left231', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2312', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2312', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2312', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right231', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2313', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2313', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2313', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left23', name: 'Go Left',
                                        options: [
                                            {id: 'straight232', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2321', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2321', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2321', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left232', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2322', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2322', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2322', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right232', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2323', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2323', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2323', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right23', name: 'Go Right',
                                        options: [
                                            {id: 'straight233', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight2331', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2331', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2331', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left233', name: 'Go Left',
                                                options: [
                                                    {id: 'straight2332', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2332', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2332', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right233', name: 'Go Right',
                                                options: [
                                                    {id: 'straight2333', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left2333', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right2333', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'leave', name: 'Leave'}
                        ]
                    },
                    {id: 'right', name: 'Go Right',
                        options: [
                            {id: 'straight3', name: 'Go Straight',
                                options: [
                                    {id: 'straight31', name: 'Go Straight',
                                        options: [
                                            {id: 'straight311', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3111', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3111', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3111', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left311', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3112', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3112', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3112', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right311', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3113', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3113', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3113', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left31', name: 'Go Left',
                                        options: [
                                            {id: 'straight312', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3121', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3121', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3121', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left312', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3122', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3122', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3122', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right312', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3123', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3123', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3123', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right31', name: 'Go Right',
                                        options: [
                                            {id: 'straight313', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3131', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3131', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3131', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left313', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3132', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3132', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3132', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right313', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3133', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3133', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3133', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'left3', name: 'Go Left',
                                options: [
                                    {id: 'straight32', name: 'Go Straight',
                                        options: [
                                            {id: 'straight321', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3211', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3211', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3211', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left321', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3212', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3212', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3212', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right321', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3213', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3213', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3213', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left32', name: 'Go Left',
                                        options: [
                                            {id: 'straight322', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3221', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3221', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3221', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left322', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3222', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3222', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3222', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right322', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3223', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3223', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3223', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right32', name: 'Go Right',
                                        options: [
                                            {id: 'straight323', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3231', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3231', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3231', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left323', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3232', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3232', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3232', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right323', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3233', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3233', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3233', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'right3', name: 'Go Right',
                                options: [
                                    {id: 'straight33', name: 'Go Straight',
                                        options: [
                                            {id: 'straight331', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3311', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3311', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3311', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left331', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3312', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3312', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3312', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right331', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3313', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3313', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3313', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'left33', name: 'Go Left',
                                        options: [
                                            {id: 'straight332', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3321', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3321', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3321', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left332', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3322', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3322', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3322', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right332', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3323', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3323', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3323', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'right33', name: 'Go Right',
                                        options: [
                                            {id: 'straight333', name: 'Go Straight',
                                                options: [
                                                    {id: 'straight3331', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3331', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3331', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'left333', name: 'Go Left',
                                                options: [
                                                    {id: 'straight3332', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3332', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3332', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'right333', name: 'Go Right',
                                                options: [
                                                    {id: 'straight3333', name: 'Go Straight', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'left3333', name: 'Go Left', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'right3333', name: 'Go Right', options: [{id: 'leave', name: 'You find nothing and exit'}]},
                                                    {id: 'leave', name: 'Leave'}
                                                ]
                                            },
                                            {id: 'leave', name: 'Leave'}
                                        ]
                                    },
                                    {id: 'leave', name: 'Leave'}
                                ]
                            },
                            {id: 'leave', name: 'Leave'}
                        ]
                    },
                    {id: 'leave', name: 'Leave'}
                ]
            },
            {id: 'leave', name: 'Leave'}
        ]
    }),
    new Quests({
        id: 'sudden_trap',
        name: 'Sudden Trap',
        desc: 'The walls close in and there is nowhere to go. But a mysterious figure offers a hand, for a price.',
        weight: 6,
        options: [
            {id: 'buy_your_way_out', name: 'Buy your way out', desc: 'Pay 5 courage coins'},
        ]
    }),
    new Quests({
        id: 'the_liar',
        name: 'The Liar',
        desc: 'She tells you she will give you a gift and you quickly accept. Probably too quickly.',
        weight: 5,
        options: [
            {id: 'lose_1_shimmer', name: 'Lose 3 Shimmer'},
            {id: 'lose_1_sparkle', name: 'Lose 3 Sparkle'},
            {id: 'lose_1_aura', name: 'Lose 3 Aura'},
        ]
    }),
    new Quests({
        id: 'briar_patch',
        name: 'Briar Patch',
        desc: 'How shall you navigate this bramble thicket?',
        weight: 5,
        options: [
            {id: 'run_through', name: 'Run Through', desc: 'Lose 10 max health'},
            {id: 'take_your_time', name: 'Take Your Time', desc: 'Lose 30 health'},
        ]
    }),
    new Quests({
        id: 'market_of_arms',
        name: 'Market of Arms',
        desc: 'You come across a hooded figure offering a special item in exchange for hauling away some of his junk.',
        weight: 2,
        options: [
            {id: 'accept_offer', name: 'Accept Offer', desc: 'Receive a random weapon and 3 clutter'},
            {id: 'reject_offer', name: 'Reject Offer'},
        ]
    }),
    
];


export default function Quest() {

    let quests = ALL_QUESTS;

    return {
        quests
    }

}

