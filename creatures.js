import Util from './utils.js';
const util = new Util();

class Creatures {
    constructor({
        guid,
        type = 'monster',
        block = 0, 
        armor = 0, 
        health, 
        actions = [],

        // effects
        solid = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        speed = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        might = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        punch = {base: 1, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        mend = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        craft = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        cunning = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        vigor = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},   
        stout = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        muster = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        rowdy = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        fierce = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        mastery = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        heal = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        conjure = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        sorcery = {base: 1, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        rainbow = {base: 0, current: 0, temp: [], turns: 0, max: 0, type: 'rainbow'},
        momentum = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        wield = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false}, 
        resistance = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        lemonade = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        spikes = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        vex = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        mage = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        enchanter = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        summon = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        arcane = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        fatality = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        retaliate = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        mystery = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        regen = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        wisdom = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},

        // abilities
        protection = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        unreachable = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        tank = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        toothache = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        prepared = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        bless = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        hypnotize = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        stockpile = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        sift = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        panic = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        
        // monster specific
        id, 
        name, 
        pattern = 'fixed',
        moveSet = [],
        tier = 1, 
        category = 'normal', // normal, boss, ice_guardian, fire_guardian

        // player specific
        courage = 0, // TODO: reset this to 0
        momentumAmount = 0,

    }) {
        this.dead = false;
        this.guid = guid;
        this.type = type;
        this.block = block;
        this.armor = armor;
        this.health = health;
        this.actions = actions;
        this.actionsDom = '';
        this.statsDom = '';

        // effects
        this.solid = solid;
        this.might = might;
        this.punch = punch;
        this.mend = mend;
        this.craft = craft;
        this.cunning = cunning;
        this.vigor = vigor;
        this.stout = stout;
        this.muster = muster;
        this.rowdy = rowdy;
        this.fierce = fierce;
        this.mastery = mastery;
        this.heal = heal;
        this.sorcery = sorcery;
        this.conjure = conjure;
        this.momentum = momentum;
        this.wield = wield;
        this.resistance = resistance;
        this.lemonade = lemonade;
        this.spikes = spikes;
        this.vex = vex;
        this.mage = mage;
        this.enchanter = enchanter;
        this.summon = summon;
        this.arcane = arcane;
        this.fatality = fatality;
        this.retaliate = retaliate;
        this.mystery = mystery;
        this.regen = regen;
        this.wisdom = wisdom;
        this.effectsDom = '';

        // abilities
        this.protection = protection;
        this.unreachable = unreachable;
        this.tank = tank;
        this.toothache = toothache;
        this.prepared = prepared;
        this.bless = bless;
        this.hypnotize = hypnotize;
        this.stockpile = stockpile;
        this.sift = sift;
        this.panic = panic;
        this.abilitiesDom = '';

        // monster specific
        this.id = id;
        this.name = name;
        this.pattern = pattern;
        this.moveSet = moveSet;
        this.chosenMoveSetIndex = -1;
        this.tier = tier;
        this.category = category;

        // player specific
        this.stance = 'none'; // TODO: reset to 'none'
        this.sparkle = {current: 0, level: 0};
        this.shimmer = {current: 0, level: 0};
        this.aura = {current: 0, level: 0};
        this.aggro = {current: 0, level: 0};
        this.courage = courage;
        this.cardsOwned = 0;
        this.cardRetain = 0;
        this.treasures = [];
        this.candies = [];
        this.mana = {base: 3, current: 0, temp: 0}; // TODO: reset to base 3
        this.rainbow = rainbow;
        this.speed = speed;
        this.momentumAmount = momentumAmount;
    }
}

const ALL_MONSTERS = [

    /* MONSTER EXAMPLE
    new Creatures({
        type: 'monster',
        id: 'monster_name', 
        name: 'Monster Name', 
        armor: 0, 
        health: {base: 20, current: 0, max: 20},
        tier: 2, // default is tier 1

        // monsters are either normal, boss (arena only), ice_guardian (ice gate), or fire_guardian (fire gate)

        category: 'boss',

        // pattern is either random or fixed. if random, p: (probability) is taken into account to determine moveset

        pattern: 'random',

        // moveset will go in order unless pattern is set to random. p would need to add up to 1 total for all movesets

        moveSet: [
            {dmg: [20], blk: [], p: .5},
            {dmg: [], blk: [20], p: .5, effects: [
                {effect: 'might', amount: 1, turns: -1},
                {effect: 'might', amount: -1, turns: -1, hex: true},
                {effect: 'stout', amount: -2, turns: -1, hex: true},
                {effect: 'solid', amount: -1, turns: 2, hex: true, persist: true}
            ], abilities: [

                // use turns for counting turns normally, use baseTurns only for -1 (permanent this combat)

                {ability: 'unreachable', baseTurns: -1, enabled: true},
                {ability: 'protection', turns: 2, enabled: true},
                {ability: 'tank', turns: 2, enabled: true}
            ], actions: [
                {action: 'addCard', value: 2, what: 'junk', to: 'handCards'},
                {action: 'addCard', value: 3, what: 'pain', to: 'drawCards'},
            ]}
        ],

        // monsters can have default effects

        cunning: {base: 1, current: 0, temp: [2], turns: 2},
        cunning: {base: 1, current: 0, temp: [2], turns: 4, persist: true},
        might: {base: 1, current: 0, temp: [], turns: -1},
        punch: {base: 1.1, current: 0, temp: [], turns: -1},

        // monsters can have default actions

        actions: [
            {action: 'stat', what: 'might', key: 'current', value: 2},
        ],

        // monsters can have default abilities

        unreachable: {enabled: true, baseTurns: -1, turns: 0},
        protection: {enabled: true, baseTurns: 0, turns: 2}
        panic: {enabled: true, baseTurns: 0, turns: 4, persist: true},
    }),



    MONSTER LIST

    Tier 1:
    -------
    Pixie
    Mummy
    Stone Walker
    Sludge
    Imp


    Tier 2:
    -------
    Shatter
    Void Fairy
    Enchantress
    Power Liche
    Iron Walker


    Tier 3:
    -------
    Swarm
    Sorcerer
    Red Dragon
    Green Dragon
    Cyberskull


    Tier 4:
    -------
    Transfigurer
    Gold Dragon
    Black Dragon
    Obsidian Walker
    Seething Entity


    Arena:
    ------
    Ultraumaton
    Unmaker
    Arch Summoner




    */
    
    // TIER 1
    
    new Creatures({
        type: 'monster',
        id: 'pixie', 
        name: 'Pixie', 
        health: {base: 22, current: 0, max: 22},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 1, turns: -1},
                {effect: 'heal', amount: 5, turns: -1}
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 1, turns: -1},
                {effect: 'heal', amount: 5, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'mummy', 
        name: 'Mummy', 
        health: {base: 35, current: 0, max: 35},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]},
            {dmg: [8]},
            {dmg: [2, 2]},
            {blk: [10], effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]}
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'stone_walker', 
        name: 'Stone Walker', 
        health: {base: 30, current: 0, max: 30},
        armor: 10,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: 2}
            ], p: .2},
            {dmg: [8], blk: [4], p: .2},
            {dmg: [4], blk: [8], p: .2},
            {dmg: [11], armor: [3], p: .2},
            {blk: [8], armor: [5], p: .2},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'sludge', 
        name: 'Sludge', 
        health: {base: 20, current: 0, max: 20},
        block: 20,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.2, turns: 1, hex: true}
            ]},
            {effects: [
                {effect: 'might', amount: 2, turns: 2},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
            ]},
            {dmg: [10]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
            ]},
            {dmg: [10]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
            ]},
        ],
        stout: {base: 3, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'imp', 
        name: 'Imp', 
        health: {base: 35, current: 0, max: 35},
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, hex: true},
                {effect: 'solid', amount: -2, turns: 1, hex: true}
            ], p: .2},
            {dmg: [12], p: .2},
            {dmg: [5], blk: [5], p: .3},
            {abilities: [
                {ability: 'tank', hex: true}
            ], dmg: [15], p: .3}
        ],
    }),
    
    // TIER 2 

    new Creatures({
        type: 'monster',
        id: 'shatter', 
        name: 'Shatter', 
        health: {base: 48, current: 0, max: 48},
        tier: 2,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: .2, turns: -1},
            ], p: .2},
            {dmg: [15], p: .2},
            {blk: [10], p: .2},
            {armor: [4], effects: [
                {effect: 'retaliate', amount: .1, turns: -1},
            ], p: .2},
            {dmg: [1, 2, 3, 4], p: .2},
        ],
        retaliate: {base: .1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'void_fairy', 
        name: 'Void Fairy', 
        health: {base: 38, current: 0, max: 38},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'resistance', amount: .5, turns: 2}
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {dmg: [7, 7]},
            {abilities: [
                {ability: 'unreachable', hex: true},
            ], dmg: [1, 1, 1, 1, 1]},
            {blk: [12]},
            {dmg: [15], blk: [5]},
            {effects: [
                {effect: 'punch', amount: -.1, turns: 3, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', hex: true},
                {ability: 'tank', hex: true}
            ], dmg: [2, 2, 2, 2, 2]},
            {dmg: [35]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'enchantress', 
        name: 'Enchantress', 
        health: {base: 58, current: 0, max: 58},
        tier: 2,
        armor: 5,
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 2, what: 'execrate', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'execrate', to: 'discardCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'discardCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'discardCards'},
            ], p: .1},
            {armor: [15], dmg: [10], p: .2},
            {blk: [15], dmg: [16], p: .2}
        ],
        resistance: {base: .4, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        id: 'power_liche', 
        name: 'Power Liche', 
        health: {base: 59, current: 0, max: 59},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 4, turns: -1},
                {effect: 'resistance', amount: .3, turns: 2}
            ]},
            {dmg: [5]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'iron_walker', 
        name: 'Iron Walker', 
        health: {base: 75, current: 0, max: 75},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'stout', amount: 1, turns: -1},
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [14]},
        ],
    }),
    

    // TIER 3 

    new Creatures({
        type: 'monster',
        id: 'swarm', 
        name: 'Swarm', 
        health: {base: 70, current: 0, max: 70},
        tier: 3,
        armor: 30,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], p: .2},
            {effects: [
                {effect: 'craft', amount: 3, turns: -1},
            ], p: .2},
            {effects: [
                {effect: 'vigor', amount: 1, turns: -1},
            ], p: .2},
            {dmg: [3, 3, 3, 3, 3, 3], 
            effects: [
                {effect: 'punch', amount: -.1, turns: -1, hex: true},
                {effect: 'might', amount: -1, turns: -1, hex: true},
            ], p: .2},
            {dmg: [5, 5, 5, 5], p: .2},
        ],
        heal: {base: 5, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        id: 'sorcerer', 
        name: 'Sorcerer', 
        health: {base: 95, current: 0, max: 95},
        tier: 3,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, turns: -1, hex: true},
                {effect: 'conjure', amount: -2, turns: -1, hex: true},
                {effect: 'sorcery', amount: -.5, turns: -1, hex: true},
                {effect: 'summon', amount: -5, turns: -1, hex: true},
                {effect: 'wield', amount: -1, turns: -1, hex: true},
                {effect: 'enchanter', amount: -5, turns: -1, hex: true},
                {effect: 'arcane', amount: -5, turns: -1, hex: true}
            ]},
            {dmg: [8, 8]},
            {blk: [10], dmg: [10]},
            {dmg: [9, 9]},
            {blk: [10], dmg: [10]},
            {dmg: [10, 10]},
            {blk: [10], dmg: [10]},
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        id: 'red_dragon', 
        name: 'Red Dragon', 
        health: {base: 185, current: 0, max: 185},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: .5, turns: 1}
            ], p: .1},
            {effects: [
                {effect: 'spikes', amount: .5, turns: 1}
            ], armor: [20], p: .1},
            {effects: [
                {effect: 'might', amount: 2, turns: -1}
            ], p: .1},
            {dmg: [24], p: .1},
            {dmg: [14], p: .1},
            {dmg: [18], p: .1},
            {dmg: [12], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], armor: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'green_dragon', 
        name: 'Green Dragon', 
        health: {base: 185, current: 0, max: 185},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'solid', amount: -1, turns: -1, hex: true},
                {effect: 'resistance', amount: .2, turns: 2}
            ], p: .1},
            {effects: [
                {effect: 'craft', amount: -2, turns: -1, hex: true}
            ], armor: [20], p: .1},
            {effects: [
                {effect: 'might', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [24], p: .1},
            {dmg: [14], p: .1},
            {dmg: [18], p: .1},
            {dmg: [12], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], armor: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'cyberskull', 
        name: 'Cyberskull', 
        health: {base: 120, current: 0, max: 120},
        pattern: 'fixed',
        tier: 3,
        moveSet: [{
            effects: [
                {effect: 'might', amount: 5, turns: -1},
            ], dmg: [1, 1, 1, 1]},
        ],
    }),


    // TIER 4

    new Creatures({
        type: 'monster',
        id: 'transfigurer', 
        name: 'Transfigurer', 
        health: {base: 210, current: 0, max: 210},
        pattern: 'fixed',
        tier: 4,
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.25, turns: -1, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [15]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [15]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [35]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [35]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [15]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [15]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [35]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [35]},
            {armor: [8], dmg: [25]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'gold_dragon', 
        name: 'Gold Dragon', 
        health: {base: 260, current: 0, max: 260},
        armor: 30,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], p: .3},
            {dmg: [25], p: .3},
            {dmg: [45], p: .1},
            {actions: [
                {action: 'addCard', value: 1, what: 'timid', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'lethargy', to: 'discardCards'},
                {action: 'addCard', value: 1, what: 'broken', to: 'handCards'},
            ], p: .3},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'black_dragon', 
        name: 'Black Dragon', 
        health: {base: 195, current: 0, max: 195},
        armor: 68,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {dmg: [12], armor: [10], p: .25},
            {dmg: [24], armor: [5], p: .25},
            {effects: [
                {effect: 'resistance', amount: .8, turns: 1}
            ], dmg: [26], armor: [15], p: .25},
            {blk: [10], armor: [10], p: .25},
        ],
        cunning: {base: 1, current: 0, temp: [], turns: -1},
        vigor: {base: 1, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        id: 'obsidian_walker', 
        name: 'Obsidian Walker', 
        health: {base: 330, current: 0, max: 330},
        tier: 4,
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 5, what: 'chaff', to: 'drawCards'},
            ], dmg: [5, 5]},
            {effects: [
                {effect: 'stout', amount: 5, turns: -1},
                {effect: 'solid', amount: 2, turns: -1},
            ]},
            {blk: [18]},
            {dmg: [36]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'seething_entity', 
        name: 'Seething Entity', 
        health: {base: 215, current: 0, max: 215},
        tier: 4,
        armor: 20,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], dmg: [5, 5, 5], p: .25},
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
            ], p: .25},
            {dmg: [3, 3, 3, 3, 3, 3, 3], 
            effects: [
                {effect: 'punch', amount: -.4, turns: 2, hex: true}
            ], 
            actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'discardCards'},
            ], p: .25},
            {dmg: [4, 4, 4, 4, 4], p: .25},
        ],
        heal: {base: 5, current: 0, temp: [], turns: -1}
    }),
    

    // ARENA BOSS

    new Creatures({
        type: 'monster',
        id: 'ultraumaton', 
        name: 'Ultraumaton', 
        health: {base: 380, current: 0, max: 380},
        tier: 1,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {blk: [30]},
            {effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {effects: [
                {effect: 'punch', amount: .1, turns: -1},
            ]},
            {effects: [
                {effect: 'solid', amount: -1, turns: 1, hex: true},
            ]},
            {dmg: [60]},
            {dmg: [20], effects: [
                {effect: 'might', amount: -2, turns: 3, hex: true}
            ], 
            actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'briars', to: 'discardCards'},
            ]},
            {dmg: [30]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'unmaker', 
        name: 'Unmaker', 
        health: {base: 425, current: 0, max: 425},
        tier: 1,
        category: 'boss',
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 10, turn: 1},
                {effect: 'resistance', amount: .4, turns: 2}
            ], p: .25},
            {dmg: [35], p: .25},
            {dmg: [18, 18], p: .1},
            {dmg: [20], armor: [10], blk: [10], p: .1},
            {actions: [
                {action: 'addCard', value: 1, what: 'timid', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'lethargy', to: 'discardCards'},
            ], p: .15},
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'flay', to: 'discardCards'},
            ], p: .15},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'arch_summoner', 
        name: 'Arch Summoner', 
        health: {base: 400, current: 0, max: 400},
        tier: 1,
        category: 'boss',
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, turns: -1, hex: true},
                {effect: 'sorcery', amount: -.5, turns: -1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
            ], dmg: [15], p: .2},
            {effects: [
                {effect: 'conjure', amount: -5, turns: -1, hex: true},
                {effect: 'enchanter', amount: -5, turns: -1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
            ], p: .2},
            {effects: [
                {effect: 'summon', amount: -5, turns: -1, hex: true},
                {effect: 'wield', amount: -1, turns: -1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
            ], dmg: [10], p: .2},
            {effects: [
                {effect: 'enchanter', amount: -5, turns: -1, hex: true},
                {effect: 'arcane', amount: -5, turns: -1, hex: true}
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
            ], dmg: [20], p: .2},
            {dmg: [35], p: .1},
            {effects: [
                {effect: 'might', amount: 10, turn: 1},
            ], dmg: [15], p: .1},
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    


    // FIRE GUARDIAN

    new Creatures({
        type: 'monster',
        id: 'flame_guardian', 
        name: 'Flame Guardian', 
        health: {base: 600, current: 0, max: 600},
        tier: 1,
        category: 'fire_guardian',
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 5, what: 'execrate', to: 'drawCards'},
            ]},
            {dmg: [25]},
            {armor: [15], blk: [15]},
            {dmg: [4, 4, 4, 4],
            effects: [
                {effect: 'might', amount: 4, turns: -1},
            ]},
        ],
    }),


    // ICE GUARDIAN

    new Creatures({
        type: 'monster',
        id: 'frost_guardian', 
        name: 'Frost Guardian', 
        health: {base: 600, current: 0, max: 600},
        tier: 1,
        category: 'ice_guardian',
        pattern: 'random',
        moveSet: [
            {blk: [30], armor: [30], p: .1},
            {dmg: [45], p: .1},
            {effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'punch', amount: -.2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'solid', amount: -2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'speed', amount: -2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'conjure', amount: -2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'sorcery', amount: -.2, turns: 2, hex: true},
            ], dmg: [30], p: .1},
            {effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
            ], blk: [25], p: .1},
            {effects: [
                {effect: 'punch', amount: -.2, turns: 2, hex: true},
            ], blk: [25], p: .1},
            
        ],
    }),

    
];

export function Monster() {

    let monsters = ALL_MONSTERS;
    let game = window.game;

    function dying(monster) {
        if(monster.health.current == 0 && !monster.dead) {
            monster.dead = true;
            return true;
        }
        return false;
    }


    function dead(monster) {
        if(monster.health.current == 0 || monster.dead) {
            monster.dead = true;
            return true;
        }
        return false;
    }

    function allDead() {
        if ($('.monster:not(.dead)').length > 0) {
            return false;
        } else {
            return true;
        }
    }

    function buildStatsDom(monster) {
        let dom = '';
        dom += '<div class="monster-intent"></div>';
        dom += '<div class="monster-name">' + monster.name + '</div>';
        return dom;
    }

    async function addMonsterToDom(monster, id) {
        await util.appendMonster(monster, id);
		updateMonsterStats(monster, id);
    }

    function updateMonsterStats(monster) {
        let healthLeft = util.getStatPercentage(monster.health.current, monster.health.max);
        let armorLeft = util.getStatPercentage(monster.armor, monster.health.current);
        $('.monster[data-guid=' + monster.guid + '] .monster-armor').html('armor: ' + monster.armor);
        $('.monster[data-guid=' + monster.guid + '] .health-amount').css('width', healthLeft + '%');
        $('.monster[data-guid=' + monster.guid + '] .armor-amount').css('width', armorLeft + '%');
        $('.monster[data-guid=' + monster.guid + '] .health-number').html(monster.health.current);
	    $('.monster[data-guid=' + monster.guid + '] .armor-number').html(monster.armor);
	    $('.monster[data-guid=' + monster.guid + '] .block-number').html(monster.block);
        if(monster.block == 0) {
            $('.monster[data-guid=' + monster.guid + '] .monster-health .block-amount').removeClass('shown');
            $('.monster[data-guid=' + monster.guid + '] .monster-health').removeClass('blocked');
        } else {
            $('.monster[data-guid=' + monster.guid + '] .monster-health .block-amount').addClass('shown');
            $('.monster[data-guid=' + monster.guid + '] .monster-health').addClass('blocked');
        }
    }

    function loadMonsters() {
    
        let currentMonsters = [];

        let excluded = game.previousMonsters;
        
        game.previousMonsters = [];

        if(game.mapType == 'arena') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(1, i, 'boss', excluded);
                    currentMonsters.push(thisMonster);
                }
            } else {

            }

        } else if(game.mapType == 'fire_gate') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(1, i, 'fire_guardian');
                    currentMonsters.push(thisMonster);
                }
            } else {

            }

        } else if(game.mapType == 'ice_gate') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(1, i, 'ice_guardian');
                    currentMonsters.push(thisMonster);
                }
            } else {

            }

        } else {

            switch(game.monsterGroup) {
                case 1:
                    if(game.map==1) {
                        // 1-2 Tier 1 monsters
                        let initial = 0;
                        let increase = 20;
                        let chance = util.monsterNumChance(initial, increase);
                        let num = util.chance(chance) ? 2 : 1;
                        if(game.floor == 1 || game.floor == 2) num = 1; // never more than one monster on floors 1 and 2
                        for (let i = 0; i < num; i++) {
                            let thisMonster = createMonster(1, i, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                        }
                    } else {

                    }

                break;
                case 2:
                    if(game.map==1) {
                        // 1 Tier 2 monster
                        let thisMonster = createMonster(2, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {

                    }

                break;
                case 3:
                    if(game.map==1) {
                        // 1 Tier 1 monster and 1 Tier 2 monster
                        let thisMonster = createMonster(1, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                        thisMonster = createMonster(2, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {

                    }

                break;
                case 4:
                    if(game.map==1) {
                        // 1 Tier 3 monster
                        let thisMonster = createMonster(3, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {
                        
                    }

                break;
                case 5:
                    if(game.map==1) {
                        // 1 Tier 4 monster
                        let thisMonster = createMonster(4, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {

                    }

                break;
                case 6:
                    if(game.map==1) {
                        // 1 Tier 4 monster and 1 Tier 2 monster
                        let thisMonster = createMonster(4, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                        thisMonster = createMonster(2, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {

                    }

                break;
                case 7:
                    if(game.map==1) {
                        // 2 Tier 4 monsters (60%) or 3 Tier 3 monsters (40%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 3; i++) {
                                let thisMonster = createMonster(3, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(4, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        }
                    } else {

                    }

                break;
                case 8:
                    if(game.map==1) {
                        // 2 Tier 4 monsters, 1 Tier 3 monster, 1 Tier 2 monster (60%)
                        // or 5 Tier 2 monsters (40%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(4, i, 'normal');
                                currentMonsters.push(thisMonster);
                            }
                            for (let i = 0; i < 1; i++) {
                                let thisMonster = createMonster(3, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                            for (let i = 0; i < 1; i++) {
                                let thisMonster = createMonster(2, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            for (let i = 0; i < 5; i++) {
                                let thisMonster = createMonster(2, i, 'normal');
                                currentMonsters.push(thisMonster);
                            }
                        }
                    } else {

                    }

                break;
                case 9:
                    if(game.map==1) {
                        // 3 Tier 4 monsters
                        for (let i = 0; i < 3; i++) {
                            let thisMonster = createMonster(4, i, 'normal');
                            currentMonsters.push(thisMonster);
                        }
                    } else {

                    }

                break;
                case 10:
                    if(game.map==1) {
                        // 4 Tier 4 monsters and 1 Tier 3 monster
                        for (let i = 0; i < 4; i++) {
                            let thisMonster = createMonster(4, i, 'normal');
                            currentMonsters.push(thisMonster);
                        }

                        let initial = 0;
                        let increase = 20;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 1; i++) {
                                let thisMonster = createMonster(3, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } 

                    } else {

                    }

                break;
            }
        }

        game.currentMonsters = currentMonsters;
        updateStatusBar();
    
    }

    function createMonster(tier, i = 0, category = 'normal', excluded = []) {

        let possibleMonsters = monsters.filter(i => i.tier == tier && i.category == category);
        possibleMonsters = possibleMonsters.filter( x => !excluded.filter( y => y.id === x.id).length);
        let copiedMonsters = JSON.parse(JSON.stringify(possibleMonsters)); // necessary to create a deep copy
        let monster = util.randFromArray(copiedMonsters);

        if(monster == undefined) return;

        game.previousMonsters.push(monster);

        monster.health.current = monster.health.base;
        monster.guid = util.randString();

        setEffects(monster);
        setAbilities(monster);

        monster.statsDom = buildStatsDom(monster);
        monster.effectsDom = buildEffectsDom(monster);
        monster.abilitiesDom = buildAbilitiesDom(monster);
        monster.actionsDom = buildActionsDom(monster);

        addMonsterToDom(monster, i);

        return monster;

    }

    function setEffects(to) {
        // note: this function sets effects for both player and monsters
        for(let i = 0; i < game.effects.length; i++) {
            // sometimes there are lingering current values, like in the case of rowdy for players
            // otherwise, set all current effects to their base values
            if(to[game.effects[i].id].current == 0) {
                to[game.effects[i].id].current = to[game.effects[i].id].base;	

            }
            // effect will not persist to the next combat unless re-persisted again this combat
            to[game.effects[i].id].persist = false;
        }
    }

    function setAbilities(to) {
        // note: this function sets effects for both player and monsters
        for(let i = 0; i < game.abilities.length; i++) {
            // sometimes there are lingering current values
            // otherwise, set all current effects to their base values
            if((to[game.abilities[i].id].turns == 0) ||
                (to[game.abilities[i].id].persist == true && to[game.abilities[i].id].turns < 0) ||
                (to[game.abilities[i].id].persist == false)) {
                // not all treasures and candies have baseTurn set - we don't want .turns to be undefined
                if(to[game.abilities[i].id].baseTurn != undefined) {
                    to[game.abilities[i].id].turns = to[game.abilities[i].id].baseTurns;
                }
                if(to[game.abilities[i].id].turns == 0) {
                    to[game.abilities[i].id].enabled = false;
                }
            }
            // ability will not persist to the next combat unless re-persisted again this combat
            to[game.abilities[i].id].persist = false;
        }
    }

    function updateStatusBar(to = false) {

        if(to) {
            to.statsDom = buildStatsDom(to);
            to.effectsDom = buildEffectsDom(to);
            to.abilitiesDom = buildAbilitiesDom(to);
            to.actionsDom = buildActionsDom(to);
            $('.player-panel .status-bar').html(to.effectsDom + to.abilitiesDom + to.actionsDom);
        } else {
            for(let i = 0; i < game.currentMonsters.length; i++) {
                let thisMonster = game.currentMonsters[i];
                thisMonster.statsDom = buildStatsDom(thisMonster);
                thisMonster.effectsDom = buildEffectsDom(thisMonster);
                thisMonster.abilitiesDom = buildAbilitiesDom(thisMonster);
                thisMonster.actionsDom = buildActionsDom(thisMonster);
                $('.monster[data-guid=' + thisMonster.guid + '] .status-bar').html(thisMonster.effectsDom + thisMonster.abilitiesDom + thisMonster.actionsDom);
            }
        }

        util.setTooltips('.status-bar');

    }

    function buildEffectsDom(to) {
        let dom = '';
        for(let i = 0; i < game.effects.length; i++) {
            
            if(game.effects[i].id != 'speed' && game.effects[i].id != 'mana' && game.effects[i].id != 'rainbow') {
                
                if(((game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery') && (to[game.effects[i].id].current == 1)) ||
                ((game.effects[i].id != 'punch' && game.effects[i].id != 'sorcery') && (to[game.effects[i].id].current == 0))) {

                    // don't show anything if current value is 0, or if current value is 1 for punch/resistance/sorcery

                } else {

                    let turns = to[game.effects[i].id].turns > 0 ? '<span class="turns">' + to[game.effects[i].id].turns + '</span>' : '';
                    let effectText = to[game.effects[i].id].current;
                    if(game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'resistance') {
                        effectText = Math.round((effectText + Number.EPSILON) * 100);
                        effectText += '%';
                    }
                    let amount = '<span class="amount">' + effectText + '</span>';

                    let x = game.effects[i].x != undefined ? game.effects[i].x : '';
                    let y = game.effects[i].y != undefined ? game.effects[i].y : '';
                    let desc = '<span class="amount ' + game.effects[i].id + '" data-amount="' + to[game.effects[i].id].current + '">' + effectText + '</span> <span class="highlight">' + game.effects[i].name + ':</span> ' + game.effects[i].desc;
                    dom += "<div class='single-status status-effect tooltip' style='background-position:" + x + "px " + y + "px;' data-id='" + game.effects[i].id + "' data-powertip='" + desc + "'>" + turns + amount + "</div>";
                
                }

            }
            
        }
        return dom;
    }
    function buildAbilitiesDom(to) {
        let dom = '';
        for(let i = 0; i < game.abilities.length; i++) {
            if(to[game.abilities[i].id].enabled) {
                let x = game.abilities[i].x != undefined ? game.abilities[i].x : '';
                let y = game.abilities[i].y != undefined ? game.abilities[i].y : '';
                let desc = '<span class="highlight">' + game.abilities[i].name + ':</span> ' + game.abilities[i].desc;
                let turns = to[game.abilities[i].id].turns > 0 ? '<span class="turns">' + to[game.abilities[i].id].turns + '</span>' : '';
                dom += "<div class='single-status status-ability tooltip' style='background-position:" + x + "px " + y + "px;' data-id='" + game.abilities[i].id + "' data-powertip='" + desc + "'>" + turns + "</div>";
            }
        }
        return dom;
    }

    function buildActionsDom(to) {
        let dom = '';
        // this currently doesn't do anything because it was never implemented (it doesn't really need to either)
        // if i wanted it to work, it should be game.actions.length rather than to.actions.length and work like buildEffectsDom and buildAbilitiesDom
        // (but actions work differently and are not attached to the player/monster as an attribute)
        for(let i = 0; i < to.actions.length; i++) {
            let id = to.actions[i].action;
            let action = game.actions.find(o => o.id === id);
            let name = action.name;
            let desc = action.desc;
            let what = to.actions[i].what;
            let value = to.actions[i].value;
            let to = to.actions[i].to; // future use
            let x = game.actions[i].x != undefined ? game.actions[i].x : '';
            let y = game.actions[i].y != undefined ? game.actions[i].y : '';
            what = what != undefined ? ' (' + what + ')' : '';
            value = value != undefined ? ' +' + value : '';
            desc = '<span class="highlight">' + name + ':</span> ' + desc + what + value;
            dom += '<div class="single-status status-action tooltip" style="background-position:' + x + 'px ' + y + 'px;" data-id="' + game.actions[i].id + '" data-powertip="' + desc + '"></div>';
        }
        return dom;
    }

    function updateMonsterGroup() {

        if(game.floor < 5) {
            game.monsterGroup = 1;
        } else if(game.floor < 8) {
            game.monsterGroup = 2;
        } else if(game.floor < 11) {
            game.monsterGroup = 3;
        } else if(game.floor < 14) {
            game.monsterGroup = 4;
        } else if(game.floor < 17) {
            game.monsterGroup = 5;
        } else if(game.floor < 20) {
            game.monsterGroup = 6;
        } else if(game.floor < 23) {
            game.monsterGroup = 7;
        } else if(game.floor < 26) {
            game.monsterGroup = 8;
        } else if(game.floor < 29) {
            game.monsterGroup = 9;
        } else if(game.floor < 32) {
            game.monsterGroup = 10;
        } else {
            game.monsterGroup = 10;
        }

    }

    return {
        monsters,
        dead,
        dying,
        allDead,
        buildStatsDom,
        buildEffectsDom,
        buildAbilitiesDom,
        buildActionsDom,
        addMonsterToDom,
        updateMonsterStats,
        updateStatusBar,
        loadMonsters,
        setEffects,
        setAbilities,
        updateMonsterGroup
    }

}

export function Player() {

    let player = new Creatures({
        guid: util.randString(),
        type: 'player',
        id: 'player',
        name: 'Player',
        armor: 0, // TODO: set to 0
        block: 0,
        health: {base: 75, current: 75, max: 75}, // TODO: reset all values to 75
        speed: {base: 5, current: 0, temp: [], turns: 0}, // TODO: reset base to 5
        rainbow: {base: 0, current: 0, temp: [], turns: 0, max: 20, type: 'rainbow'},
    });

    function dead(player) {
        if(player.health.current == 0) {
            return true;
        }
        return false;
    }

    function addTreasure(treasure, player) {
        treasure.owned = true;
        player.treasures.push(treasure);
        util.appendTreasure(treasure, '.treasures');
    }

    function addCandy(candy, player) {
        candy.guid = util.randString();
        player.candies.push(candy);
        let slot = util.getFirstEmptyElement('.candies .candy-slot');
        if(slot.length > 0) {
            let clickable = true;
            util.appendCandy(candy, slot, clickable);
        }
    }
    
    return {
        player,
        dead,
        addTreasure,
        addCandy
    }
}