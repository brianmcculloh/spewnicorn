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
        punch = {base: 1, current: 1, temp: [], turns: 0, persist: false, hexed: false},
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
        sorcery = {base: 1, current: 1, temp: [], turns: 0, persist: false, hexed: false}, 
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
        lightning = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},  
        thunder = {base: 1, current: 1, temp: [], turns: 0, persist: false, hexed: false},
        retain = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        antimomentum = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        marked = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        insulate = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        irradiate = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        replenish = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        combiner = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        fatigued = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        vulnerable = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        stifled = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        angered = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        hardened = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        shapeshifter = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        fend = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        ward = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},
        cover = {base: 0, current: 0, temp: [], turns: 0, persist: false, hexed: false},

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
        expirex = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        magick = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        amplify = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        explode = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        guild_member = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        resurrect = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        supernatural = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        eternal = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        frozen = {enabled: false, baseTurns: 0, turns: 0, persist: false, permanent: false},
        
        // monster specific
        id, 
        breed,
        name, 
        pattern = 'fixed',
        moveSet = [],
        tier = 1, 
        context = 'forest', // forest, frost, or flame - this is matched with the game.overworld value to query for creatures
        category = 'normal', // normal, boss, ice_guardian, or fire_guardian

        // player specific
        courage = 0, // TODO: reset this to 0
        momentumAmount = 0,
        antimomentumAmount = 0,
        mana,

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
        this.lightning = lightning;
        this.thunder = thunder;
        this.retain = retain;
        this.antimomentum = antimomentum;
        this.marked = marked;
        this.insulate = insulate;
        this.irradiate = irradiate;
        this.replenish = replenish;
        this.combiner = combiner;
        this.fatigued = fatigued;
        this.vulnerable = vulnerable;
        this.stifled = stifled;
        this.angered = angered;
        this.hardened = hardened;
        this.shapeshifter = shapeshifter;
        this.fend = fend;
        this.ward = ward;
        this.cover = cover;
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
        this.expirex = expirex;
        this.magick = magick;
        this.amplify = amplify;
        this.explode = explode;
        this.guild_member = guild_member;
        this.resurrect = resurrect;
        this.supernatural = supernatural;
        this.eternal = eternal;
        this.frozen = frozen;
        this.abilitiesDom = '';

        // monster specific
        this.id = id;
        this.breed = breed;
        this.name = name;
        this.pattern = pattern;
        this.moveSet = moveSet;
        this.chosenMoveSetIndex = -1;
        this.tier = tier;
        this.context = context;
        this.category = category;

        // player specific
        this.stance = 'none'; // TODO: reset to 'none'
        this.sparkle = {current: 0, level: 0};
        this.shimmer = {current: 0, level: 0};
        this.aura = {current: 0, level: 0};
        this.aggro = {current: 0, level: 0};
        this.courage = courage;
        this.cardsOwned = 0;
        //this.cardRetain = 0; // moved to an official effect
        this.treasures = [];
        this.candies = [];
        this.mana = mana;
        this.rainbow = rainbow;
        this.speed = speed;
        this.momentumAmount = momentumAmount;
        this.antimomentumAmount = antimomentumAmount;
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

        // on frost and flame maps, monsters will be upgraded to be either flame or frost

        context: 'forest',

        // pattern is either random or fixed. if random, p: (probability) is taken into account to determine moveset

        pattern: 'random',

        // breed groups similar monsters together

        breed: 'pixie',

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
    Fel Dragon
    Cunning Dragon
    Cyberskull


    Tier 4:
    -------
    Transfigurer
    Writhing Dragon
    Darkness Dragon
    Obsidian Walker
    Seething Entity


    Arena:
    ------
    Ultraumaton
    Unmaker
    Arch Summoner


    Gate:
    -----
    Frost Guardian
    Flame Guardian
    Super Frozen Frost Guardian
    Super Burning Frost Guardian
    Super Frozen Flame Guardian
    Super Burning Flame Guardian




    */
    
    // TIER 1
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'pixie', 
        breed: 'pixie',
        name: 'Pixie', 
        health: {base: 32, current: 0, max: 32},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'heal', amount: 5, turns: -1}
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
                {effect: 'heal', amount: 5, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 4, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'mummy', 
        breed: 'mummy',
        name: 'Mummy', 
        health: {base: 45, current: 0, max: 45},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]},
            {dmg: [12]},
            {dmg: [6, 6]},
            {blk: [10], effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]}
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'stone_walker', 
        breed: 'stone_walker',
        name: 'Stone Walker', 
        health: {base: 34, current: 0, max: 34},
        armor: 10,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: 2}
            ], p: .2},
            {dmg: [8], blk: [4], p: .2},
            {dmg: [4], blk: [8], p: .2},
            {dmg: [11], p: .2},
            {armor: [8], p: .2},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'sludge', 
        breed: 'sludge',
        name: 'Sludge', 
        health: {base: 26, current: 0, max: 26},
        block: 20,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.1, turns: 1, hex: true}
            ]},
            {effects: [
                {effect: 'might', amount: 1, turns: 3},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'junk', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'debris', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'mired', to: 'drawCards'},
            ]},
        ],
        stout: {base: 2, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'imp', 
        breed: 'imp',
        name: 'Imp', 
        health: {base: 40, current: 0, max: 40},
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, hex: true},
                {effect: 'solid', amount: -2, turns: 1, hex: true}
            ], p: .2},
            {dmg: [15], p: .2},
            {dmg: [9], blk: [5], p: .3},
            {abilities: [
                {ability: 'tank', hex: true}
            ], dmg: [15], p: .3}
        ],
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_pixie', 
        breed: 'pixie',
        name: 'Frost Pixie', 
        health: {base: 64, current: 0, max: 64},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'heal', amount: 5, turns: -1}
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
                {effect: 'heal', amount: 5, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 4, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_mummy',
        breed: 'mummy', 
        name: 'Frost Mummy', 
        health: {base: 90, current: 0, max: 90},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]},
            {dmg: [12]},
            {dmg: [6, 6]},
            {blk: [10], effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]}
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_stone_walker', 
        breed: 'stone_walker',
        name: 'Frost Stone Walker', 
        health: {base: 68, current: 0, max: 68},
        armor: 20,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: 2}
            ], p: .2},
            {dmg: [8], blk: [4], p: .2},
            {dmg: [4], blk: [8], p: .2},
            {dmg: [11], p: .2},
            {armor: [8], p: .2},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_sludge',
        breed: 'sludge', 
        name: 'Frost Sludge', 
        health: {base: 52, current: 0, max: 52},
        block: 40,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.1, turns: 1, hex: true}
            ]},
            {effects: [
                {effect: 'might', amount: 1, turns: 3},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'junk', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'debris', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'mired', to: 'drawCards'},
            ]},
        ],
        stout: {base: 2, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_imp', 
        breed: 'imp',
        name: 'Frost Imp', 
        health: {base: 80, current: 0, max: 80},
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, hex: true},
                {effect: 'solid', amount: -2, turns: 1, hex: true}
            ], p: .2},
            {dmg: [15], p: .2},
            {dmg: [9], blk: [5], p: .3},
            {abilities: [
                {ability: 'tank', hex: true}
            ], dmg: [15], p: .3}
        ],
    }),
    
    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_pixie', 
        breed: 'pixie',
        name: 'Flame Pixie', 
        health: {base: 32, current: 0, max: 32},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'heal', amount: 5, turns: -1}
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
                {effect: 'heal', amount: 5, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
            {effects: [
                {effect: 'might', amount: 4, turns: -1},
            ]},
            {dmg: [1, 1, 1]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_mummy', 
        breed: 'mummy',
        name: 'Flame Mummy', 
        health: {base: 45, current: 0, max: 45},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: -1},
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]},
            {dmg: [12]},
            {dmg: [6, 6]},
            {blk: [10], effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]}
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_stone_walker', 
        breed: 'stone_walker',
        name: 'Flame Stone Walker', 
        health: {base: 34, current: 0, max: 34},
        armor: 10,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 2, turns: 2}
            ], p: .2},
            {dmg: [8], blk: [4], p: .2},
            {dmg: [4], blk: [8], p: .2},
            {dmg: [11], p: .2},
            {armor: [8], p: .2},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_sludge', 
        breed: 'sludge',
        name: 'Flame Sludge', 
        health: {base: 26, current: 0, max: 26},
        block: 20,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.1, turns: 1, hex: true}
            ]},
            {effects: [
                {effect: 'might', amount: 1, turns: 3},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'junk', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'debris', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ]},
            {dmg: [15]},
            {blk: [10]},
            {dmg: [5, 5]},
            {blk: [10], actions: [
                {action: 'addCard', value: 1, what: 'briars', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'mired', to: 'drawCards'},
            ]},
        ],
        stout: {base: 2, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_imp', 
        breed: 'imp',
        name: 'Flame Imp', 
        health: {base: 40, current: 0, max: 40},
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -5, hex: true},
                {effect: 'solid', amount: -2, turns: 1, hex: true}
            ], p: .2},
            {dmg: [15], p: .2},
            {dmg: [9], blk: [5], p: .3},
            {abilities: [
                {ability: 'tank', hex: true}
            ], dmg: [15], p: .3}
        ],
    }),


    // TIER 2 
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'shatter', 
        breed: 'shatter',
        name: 'Shatter', 
        health: {base: 50, current: 0, max: 50},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1},
            ]},
            {dmg: [20]},
            {dmg: [8, 8], blk: [10]},
            {armor: [4], effects: [
                {effect: 'retaliate', amount: 3, turns: -1},
            ]},
            {dmg: [1, 2, 3, 4, 5]},
        ],
        retaliate: {base: 4, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'void_fairy', 
        breed: 'void_fairy',
        name: 'Void Fairy', 
        health: {base: 65, current: 0, max: 65},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [12], effects: [
                {effect: 'resistance', amount: .5, turns: 2}
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {dmg: [11, 11]},
            {abilities: [
                {ability: 'unreachable', hex: true},
            ], dmg: [1, 1, 1, 1, 1, 1, 1, 1]},
            {blk: [12]},
            {dmg: [25], blk: [5]},
            {effects: [
                {effect: 'punch', amount: -.4, turns: 3, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', hex: true},
                {ability: 'tank', hex: true}
            ], dmg: [2, 2, 2, 2, 2]},
            {dmg: [35]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'enchantress', 
        breed: 'enchantress',
        name: 'Enchantress', 
        health: {base: 48, current: 0, max: 48},
        tier: 2,
        armor: 5,
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'discardCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'discardCards'},
            ], p: .1},
            {dmg: [15], actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'discardCards'},
            ], p: .1},
            {armor: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {blk: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['swirler', 'striker'], value: 2},
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['blob', 'flamehead'], value: 2},
            ], p: .1}
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        id: 'power_liche', 
        breed: 'power_liche',
        name: 'Power Liche', 
        health: {base: 70, current: 0, max: 70},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [15]},
            {effects: [
                {effect: 'might', amount: 7, turns: -1},
                {effect: 'resistance', amount: .3, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ]}
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'iron_walker', 
        breed: 'iron_walker',
        name: 'Iron Walker', 
        health: {base: 92, current: 0, max: 92},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'stout', amount: 2, turns: -1},
                {effect: 'might', amount: 3, turns: -1},
            ]},
            {dmg: [28]},
        ],
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_shatter', 
        breed: 'shatter',
        name: 'Frost Shatter', 
        health: {base: 100, current: 0, max: 100},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1},
            ]},
            {dmg: [20]},
            {dmg: [8, 8], blk: [10]},
            {armor: [4], effects: [
                {effect: 'retaliate', amount: 3, turns: -1},
            ]},
            {dmg: [1, 2, 3, 4, 5]},
        ],
        retaliate: {base: 4, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_void_fairy',
        breed: 'void_fairy', 
        name: 'Frost Void Fairy', 
        health: {base: 130, current: 0, max: 130},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [12], effects: [
                {effect: 'resistance', amount: .5, turns: 2}
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {dmg: [11, 11]},
            {abilities: [
                {ability: 'unreachable', hex: true},
            ], dmg: [1, 1, 1, 1, 1, 1, 1, 1]},
            {blk: [12]},
            {dmg: [25], blk: [5]},
            {effects: [
                {effect: 'punch', amount: -.4, turns: 3, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', hex: true},
                {ability: 'tank', hex: true}
            ], dmg: [2, 2, 2, 2, 2]},
            {dmg: [35]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_enchantress', 
        breed: 'enchantress',
        name: 'Frost Enchantress', 
        health: {base: 96, current: 0, max: 96},
        tier: 2,
        armor: 10,
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'discardCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'discardCards'},
            ], p: .1},
            {dmg: [15], actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'discardCards'},
            ], p: .1},
            {armor: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {blk: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['swirler', 'striker'], value: 2},
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['blob', 'flamehead'], value: 2},
            ], p: .1}
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_power_liche', 
        breed: 'power_liche',
        name: 'Frost Power Liche', 
        health: {base: 140, current: 0, max: 140},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [15]},
            {effects: [
                {effect: 'might', amount: 7, turns: -1},
                {effect: 'resistance', amount: .3, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ]}
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_iron_walker', 
        breed: 'iron_walker',
        name: 'Frost Iron Walker', 
        health: {base: 184, current: 0, max: 184},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'stout', amount: 2, turns: -1},
                {effect: 'might', amount: 3, turns: -1},
            ]},
            {dmg: [28]},
        ],
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_shatter', 
        breed: 'shatter',
        name: 'Flame Shatter', 
        health: {base: 50, current: 0, max: 50},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1},
            ]},
            {dmg: [20]},
            {dmg: [8, 8], blk: [10]},
            {armor: [4], effects: [
                {effect: 'retaliate', amount: 3, turns: -1},
            ]},
            {dmg: [1, 2, 3, 4, 5]},
        ],
        retaliate: {base: 4, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_void_fairy', 
        breed: 'void_fairy',
        name: 'Flame Void Fairy', 
        health: {base: 65, current: 0, max: 65},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [12], effects: [
                {effect: 'resistance', amount: .5, turns: 2}
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {dmg: [11, 11]},
            {abilities: [
                {ability: 'unreachable', hex: true},
            ], dmg: [1, 1, 1, 1, 1, 1, 1, 1]},
            {blk: [12]},
            {dmg: [25], blk: [5]},
            {effects: [
                {effect: 'punch', amount: -.4, turns: 3, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', hex: true},
                {ability: 'tank', hex: true}
            ], dmg: [2, 2, 2, 2, 2]},
            {dmg: [35]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_enchantress',
        breed: 'enchantress', 
        name: 'Flame Enchantress', 
        health: {base: 48, current: 0, max: 48},
        tier: 2,
        armor: 5,
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'drawCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'discardCards'},
            ], p: .1},
            {actions: [
                {action: 'addCard', value: 2, what: 'curse', to: 'discardCards'},
            ], p: .1},
            {dmg: [15], actions: [
                {action: 'addCard', value: 2, what: 'flay', to: 'discardCards'},
            ], p: .1},
            {armor: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {blk: [15], dmg: [23], actions: [
                {action: 'removeHexes', to: 'self'}
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['swirler', 'striker'], value: 2},
            ], p: .1},
            {actions: [
                {action: 'summonMonster', what: ['blob', 'flamehead'], value: 2},
            ], p: .1}
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_power_liche', 
        breed: 'power_liche',
        name: 'Flame Power Liche', 
        health: {base: 70, current: 0, max: 70},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {dmg: [15]},
            {effects: [
                {effect: 'might', amount: 7, turns: -1},
                {effect: 'resistance', amount: .3, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ]}
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_iron_walker', 
        breed: 'iron_walker',
        name: 'Flame Iron Walker', 
        health: {base: 92, current: 0, max: 92},
        tier: 2,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'stout', amount: 2, turns: -1},
                {effect: 'might', amount: 3, turns: -1},
            ]},
            {dmg: [28]},
        ],
    }),
    


    // TIER 3 
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'swarm', 
        breed: 'swarm',
        name: 'Swarm', 
        health: {base: 25, current: 0, max: 25},
        tier: 3,
        armor: 25,
        block: 25,
        pattern: 'fixed',
        moveSet: [
            {dmg: [20], blk: [25], effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ]},
            {blk: [25], effects: [
                {effect: 'vigor', amount: 1, turns: -1},
                {effect: 'craft', amount: 3, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3]},
            {dmg: [5, 5, 5, 5, 5, 5]},
        ],
        heal: {base: 10, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        id: 'sorcerer', 
        breed: 'sorcerer',
        name: 'Sorcerer', 
        health: {base: 95, current: 0, max: 95},
        tier: 3,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'conjure', amount: -4, turns: 4, hex: true},
            ]},
            {dmg: [8, 8]},
            {blk: [10], effects: [
                {effect: 'stifled', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [9, 9]},
            {blk: [10], dmg: [10, 10]},
            {dmg: [10, 10]},
            {blk: [10]},
        ],
        vex: {base: 3, current: 0, temp: [], turns: -1},
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        id: 'fel_dragon',
        breed: 'fel_dragon', 
        name: 'Fel Dragon', 
        health: {base: 125, current: 0, max: 125},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'retaliate', amount: 7, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'spikes', amount: 10, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 2, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'cunning_dragon', 
        breed: 'cunning_dragon',
        name: 'Cunning Dragon', 
        health: {base: 125, current: 0, max: 125},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'solid', amount: -1, turns: -1, hex: true},
                {effect: 'resistance', amount: .2, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'craft', amount: -2, turns: -1, hex: true},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 1, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'cyberskull', 
        breed: 'cyberskull',
        name: 'Cyberskull', 
        health: {base: 110, current: 0, max: 110},
        pattern: 'fixed',
        tier: 3,
        moveSet: [{
            effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [2, 2, 2, 2, 2, 2]},
        ],
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_swarm',
        breed: 'swarm',
        name: 'Frost Swarm', 
        health: {base: 50, current: 0, max: 50},
        tier: 3,
        armor: 50,
        block: 50,
        pattern: 'fixed',
        moveSet: [
            {dmg: [20], blk: [25], effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ]},
            {blk: [25], effects: [
                {effect: 'vigor', amount: 1, turns: -1},
                {effect: 'craft', amount: 3, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3]},
            {dmg: [5, 5, 5, 5, 5, 5]},
        ],
        heal: {base: 10, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_sorcerer',
        breed: 'sorcerer', 
        name: 'Frost Sorcerer', 
        health: {base: 190, current: 0, max: 190},
        tier: 3,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'conjure', amount: -4, turns: 4, hex: true},
            ]},
            {dmg: [8, 8]},
            {blk: [10], effects: [
                {effect: 'stifled', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [9, 9]},
            {blk: [10], dmg: [10, 10]},
            {dmg: [10, 10]},
            {blk: [10]},
        ],
        vex: {base: 3, current: 0, temp: [], turns: -1},
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_fel_dragon', 
        breed: 'fel_dragon',
        name: 'Frost Fel Dragon', 
        health: {base: 250, current: 0, max: 250},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'retaliate', amount: 7, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'spikes', amount: 10, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 2, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_cunning_dragon', 
        breed: 'cunning_dragon',
        name: 'Frost Cunning Dragon', 
        health: {base: 250, current: 0, max: 250},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'solid', amount: -1, turns: -1, hex: true},
                {effect: 'resistance', amount: .2, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'craft', amount: -2, turns: -1, hex: true},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 1, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_cyberskull', 
        breed: 'cyberskull',
        name: 'Frost Cyberskull', 
        health: {base: 220, current: 0, max: 220},
        pattern: 'fixed',
        tier: 3,
        moveSet: [{
            effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [2, 2, 2, 2, 2, 2]},
        ],
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_swarm',
        breed: 'swarm', 
        name: 'Flame Swarm', 
        health: {base: 25, current: 0, max: 25},
        tier: 3,
        armor: 25,
        block: 25,
        pattern: 'fixed',
        moveSet: [
            {dmg: [20], blk: [25], effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ]},
            {blk: [25], effects: [
                {effect: 'vigor', amount: 1, turns: -1},
                {effect: 'craft', amount: 3, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3]},
            {dmg: [5, 5, 5, 5, 5, 5]},
        ],
        heal: {base: 10, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_sorcerer', 
        breed: 'sorcerer',
        name: 'Flame Sorcerer', 
        health: {base: 95, current: 0, max: 95},
        tier: 3,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'conjure', amount: -4, turns: 4, hex: true},
            ]},
            {dmg: [8, 8]},
            {blk: [10], effects: [
                {effect: 'stifled', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [9, 9]},
            {blk: [10], dmg: [10, 10]},
            {dmg: [10, 10]},
            {blk: [10]},
        ],
        vex: {base: 3, current: 0, temp: [], turns: -1},
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_fel_dragon', 
        breed: 'fel_dragon',
        name: 'Flame Fel Dragon', 
        health: {base: 125, current: 0, max: 125},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'retaliate', amount: 7, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'spikes', amount: 10, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 2, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_cunning_dragon', 
        breed: 'cunning_dragon',
        name: 'Flame Cunning Dragon', 
        health: {base: 125, current: 0, max: 125},
        tier: 3,
        pattern: 'random',
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'solid', amount: -1, turns: -1, hex: true},
                {effect: 'resistance', amount: .2, turns: 2},
                {effect: 'vex', amount: 1, turns: -1}
            ], p: .1},
            {dmg: [15], effects: [
                {effect: 'craft', amount: -2, turns: -1, hex: true},
                {effect: 'vex', amount: 1, turns: -1}
            ], armor: [20], p: .1},
            {dmg: [22], effects: [
                {effect: 'might', amount: 1, turns: -1}
            ], 
            abilities: [
                {ability: 'stockpile', turns: -1, enabled: true},
            ], p: .1},
            {dmg: [34], p: .1},
            {dmg: [10], blk: [15], p: .1},
            {dmg: [18], p: .1},
            {blk: [15], p: .1},
            {dmg: [8], armor: [10], blk: [10], p: .1},
            {dmg: [5], blk: [20], p: .1},
            {blk: [20], p: .1},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_cyberskull', 
        breed: 'cyberskull',
        name: 'Flame Cyberskull', 
        health: {base: 110, current: 0, max: 110},
        pattern: 'fixed',
        tier: 3,
        moveSet: [{
            effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [2, 2, 2, 2, 2, 2]},
        ],
    }),




    // TIER 4
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'transfigurer', 
        breed: 'transfigurer',
        name: 'Transfigurer', 
        health: {base: 175, current: 0, max: 175},
        pattern: 'fixed',
        tier: 4,
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'punch', amount: -.25, turns: -1, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25], effects: [
                {effect: 'vulnerable', amount: 1, turns: -1, hex: true},
            ]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
        id: 'writhing_dragon', 
        breed: 'writhing_dragon',
        name: 'Writhing Dragon', 
        health: {base: 220, current: 0, max: 220},
        armor: 30,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [30], p: .3},
            {effects: [
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [40], p: .3},
            {dmg: [50], p: .1},
            {blk: [10], actions: [
                {action: 'addCard', value: 2, what: 'broken', to: 'handCards'},
            ], p: .3},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'darkness_dragon', 
        breed: 'darkness_dragon',
        name: 'Darkness Dragon', 
        health: {base: 165, current: 0, max: 165},
        armor: 68,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {blk: [12], armor: [10], p: .25},
            {dmg: [34], armor: [5], p: .25},
            {effects: [
                {effect: 'resistance', amount: .8, turns: 2}
            ], dmg: [36], armor: [15], p: .25},
            {dmg: [16], blk: [10], armor: [10], p: .25},
        ],
        vigor: {base: 1, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        id: 'obsidian_walker', 
        breed: 'obsidian_walker',
        name: 'Obsidian Walker', 
        health: {base: 250, current: 0, max: 250},
        tier: 4,
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 5, what: 'chaff', to: 'drawCards'},
            ], dmg: [5, 5, 5, 5, 5, 5]},
            {effects: [
                {effect: 'stout', amount: 5, turns: -1},
                {effect: 'solid', amount: 4, turns: -1},
            ]},
            {blk: [18]},
            {dmg: [35]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'seething_entity', 
        breed: 'seething_entity',
        name: 'Seething Entity', 
        health: {base: 150, current: 0, max: 150},
        tier: 4,
        armor: 20,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], blk: [15]},
            {dmg: [2, 2, 2, 2, 2, 2, 2, 2], effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3], effects: [
                {effect: 'punch', amount: -.4, turns: 2, hex: true}
            ]},
            {dmg: [4, 4, 4, 4, 4, 4, 4, 4]},
        ],
        heal: {base: 8, current: 0, temp: [], turns: -1},
        regen: {base: 5, current: 0, temp: [], turns: -1}
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_transfigurer', 
        breed: 'transfigurer',
        name: 'Frost Transfigurer', 
        health: {base: 350, current: 0, max: 350},
        pattern: 'fixed',
        tier: 4,
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'punch', amount: -.25, turns: -1, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25], effects: [
                {effect: 'vulnerable', amount: 1, turns: -1, hex: true},
            ]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
        context: 'frost',
        id: 'frost_writhing_dragon', 
        breed: 'writhing_dragon',
        name: 'Frost Writhing Dragon', 
        health: {base: 440, current: 0, max: 440},
        armor: 60,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [30], p: .3},
            {effects: [
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [40], p: .3},
            {dmg: [50], p: .1},
            {blk: [10], actions: [
                {action: 'addCard', value: 2, what: 'broken', to: 'handCards'},
            ], p: .3},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_darkness_dragon', 
        breed: 'darkness_dragon',
        name: 'Frost Darkness Dragon', 
        health: {base: 330, current: 0, max: 330},
        armor: 136,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {blk: [12], armor: [10], p: .25},
            {dmg: [34], armor: [5], p: .25},
            {effects: [
                {effect: 'resistance', amount: .8, turns: 2}
            ], dmg: [36], armor: [15], p: .25},
            {dmg: [16], blk: [10], armor: [10], p: .25},
        ],
        vigor: {base: 1, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_obsidian_walker', 
        breed: 'obsidian_walker',
        name: 'Frost Obsidian Walker', 
        health: {base: 500, current: 0, max: 500},
        tier: 4,
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 5, what: 'chaff', to: 'drawCards'},
            ], dmg: [5, 5, 5, 5, 5, 5]},
            {effects: [
                {effect: 'stout', amount: 5, turns: -1},
                {effect: 'solid', amount: 4, turns: -1},
            ]},
            {blk: [18]},
            {dmg: [35]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_seething_entity', 
        breed: 'seething_entity',
        name: 'Frost Seething Entity', 
        health: {base: 300, current: 0, max: 300},
        tier: 4,
        armor: 40,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], blk: [15]},
            {dmg: [2, 2, 2, 2, 2, 2, 2, 2], effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3], effects: [
                {effect: 'punch', amount: -.4, turns: 2, hex: true}
            ]},
            {dmg: [4, 4, 4, 4, 4, 4, 4, 4]},
        ],
        heal: {base: 8, current: 0, temp: [], turns: -1},
        regen: {base: 5, current: 0, temp: [], turns: -1}
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_transfigurer', 
        breed: 'transfigurer',
        name: 'Flame Transfigurer', 
        health: {base: 175, current: 0, max: 175},
        pattern: 'fixed',
        tier: 4,
        moveSet: [
            {dmg: [15], effects: [
                {effect: 'punch', amount: -.25, turns: -1, hex: true},
            ]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25], effects: [
                {effect: 'vulnerable', amount: 1, turns: -1, hex: true},
            ]},
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
            {armor: [8], dmg: [25]},
            {abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ]},
            {armor: [5], dmg: [25]},
            {armor: [8], dmg: [25]},
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
        context: 'flame',
        id: 'flame_writhing_dragon', 
        breed: 'writhing_dragon',
        name: 'Flame Writhing Dragon', 
        health: {base: 220, current: 0, max: 220},
        armor: 30,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 3, turns: -1},
            ], dmg: [30], p: .3},
            {effects: [
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [40], p: .3},
            {dmg: [50], p: .1},
            {blk: [10], actions: [
                {action: 'addCard', value: 2, what: 'broken', to: 'handCards'},
            ], p: .3},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_darkness_dragon', 
        breed: 'darkness_dragon',
        name: 'Flame Darkness Dragon', 
        health: {base: 165, current: 0, max: 165},
        armor: 68,
        tier: 4,
        pattern: 'random',
        moveSet: [
            {blk: [12], armor: [10], p: .25},
            {dmg: [34], armor: [5], p: .25},
            {effects: [
                {effect: 'resistance', amount: .8, turns: 2}
            ], dmg: [36], armor: [15], p: .25},
            {dmg: [16], blk: [10], armor: [10], p: .25},
        ],
        vigor: {base: 1, current: 0, temp: [], turns: -1}
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_obsidian_walker',
        breed: 'obsidian_walker', 
        name: 'Flame Obsidian Walker', 
        health: {base: 250, current: 0, max: 250},
        tier: 4,
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 5, what: 'chaff', to: 'drawCards'},
            ], dmg: [5, 5, 5, 5, 5, 5]},
            {effects: [
                {effect: 'stout', amount: 5, turns: -1},
                {effect: 'solid', amount: 4, turns: -1},
            ]},
            {blk: [18]},
            {dmg: [35]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_seething_entity', 
        breed: 'seething_entity',
        name: 'Flame Seething Entity', 
        health: {base: 150, current: 0, max: 150},
        tier: 4,
        armor: 20,
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'regen', amount: 5, turns: -1},
            ], blk: [15]},
            {dmg: [2, 2, 2, 2, 2, 2, 2, 2], effects: [
                {effect: 'might', amount: 1, turns: -1},
            ]},
            {dmg: [3, 3, 3, 3, 3, 3, 3, 3], effects: [
                {effect: 'punch', amount: -.4, turns: 2, hex: true}
            ]},
            {dmg: [4, 4, 4, 4, 4, 4, 4, 4]},
        ],
        heal: {base: 8, current: 0, temp: [], turns: -1},
        regen: {base: 5, current: 0, temp: [], turns: -1}
    }),
    



    // ARENA BOSS
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'ultraumaton', 
        breed: 'ultraumaton',
        name: 'Ultraumaton', 
        health: {base: 310, current: 0, max: 310},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {blk: [25], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ], effects: [
                {effect: 'marked', amount: 1, turns: 5, hex: true},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: 'seer', value: 3},
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ], effects: [
                {effect: 'might', amount: 4, turns: -1},
                {effect: 'punch', amount: .1, turns: -1},
            ]},
            {blk: [25], effects: [
                {effect: 'vex', amount: 1, turns: -1},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {blk: [25], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'unmaker', 
        breed: 'unmaker',
        name: 'Unmaker', 
        health: {base: 350, current: 0, max: 350},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 10, turn: 1},
                {effect: 'resistance', amount: .4, turns: 2}
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [25, 25], actions: [
                {action: 'summonMonster', what: 'stinger', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {armor: [20], blk: [20], effects: [
                {effect: 'fatigued', amount: 1, turns: 6, hex: true},
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'timid', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'lethargy', to: 'discardCards'},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'flay', to: 'discardCards'},
                {action: 'summonMonster', what: 'cave_spider', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        id: 'arch_summoner', 
        breed: 'arch_summoner',
        name: 'Arch Summoner', 
        health: {base: 300, current: 0, max: 300},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -2, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.2, turns: 1, hex: true},
            ], dmg: [3, 3, 3, 3, 3, 3, 3, 3], actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'rainbow', amount: -4, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.4, turns: 1, hex: true},
            ], dmg: [4, 4, 4, 4, 4, 4, 4, 4], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 2, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'discardCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {dmg: [5, 5, 5, 5, 5, 5, 5, 5], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'might', amount: 5, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [6, 6, 6, 6, 6, 6, 6, 6], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),


    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_ultraumaton', 
        breed: 'ultraumaton',
        name: 'Frost Ultraumaton', 
        health: {base: 620, current: 0, max: 620},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {blk: [25], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ], effects: [
                {effect: 'marked', amount: 1, turns: 5, hex: true},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: 'seer', value: 3},
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ], effects: [
                {effect: 'might', amount: 4, turns: -1},
                {effect: 'punch', amount: .1, turns: -1},
            ]},
            {blk: [25], effects: [
                {effect: 'vex', amount: 1, turns: -1},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {blk: [25], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_unmaker', 
        breed: 'unmaker',
        name: 'Frost Unmaker', 
        health: {base: 700, current: 0, max: 700},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 10, turn: 1},
                {effect: 'resistance', amount: .4, turns: 2}
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [25, 25], actions: [
                {action: 'summonMonster', what: 'stinger', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {armor: [20], blk: [20], effects: [
                {effect: 'fatigued', amount: 1, turns: 6, hex: true},
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'timid', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'lethargy', to: 'discardCards'},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'flay', to: 'discardCards'},
                {action: 'summonMonster', what: 'cave_spider', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'frost_arch_summoner', 
        breed: 'arch_summoner',
        name: 'Frost Arch Summoner', 
        health: {base: 600, current: 0, max: 600},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -2, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.2, turns: 1, hex: true},
            ], dmg: [3, 3, 3, 3, 3, 3, 3, 3], actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'rainbow', amount: -4, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.4, turns: 1, hex: true},
            ], dmg: [4, 4, 4, 4, 4, 4, 4, 4], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 2, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'discardCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {dmg: [5, 5, 5, 5, 5, 5, 5, 5], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'might', amount: 5, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [6, 6, 6, 6, 6, 6, 6, 6], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 10, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_ultraumaton', 
        breed: 'ultraumaton',
        name: 'Flame Ultraumaton', 
        health: {base: 310, current: 0, max: 310},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {blk: [25], abilities: [
                {ability: 'protection', turns: -1, enabled: true},
            ], effects: [
                {effect: 'marked', amount: 1, turns: 5, hex: true},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: 'seer', value: 3},
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ], effects: [
                {effect: 'might', amount: 4, turns: -1},
                {effect: 'punch', amount: .1, turns: -1},
            ]},
            {blk: [25], effects: [
                {effect: 'vex', amount: 1, turns: -1},
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {blk: [25], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [40], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 0, desc: 'Remove might', additive: false},
                {action: 'stat', what: 'punch', key: 'current', value: 1, desc: 'Remove punch', additive: false},
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_unmaker', 
        breed: 'unmaker',
        name: 'Flame Unmaker', 
        health: {base: 350, current: 0, max: 350},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: 10, turn: 1},
                {effect: 'resistance', amount: .4, turns: 2}
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [35], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [25, 25], actions: [
                {action: 'summonMonster', what: 'stinger', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {armor: [20], blk: [20], effects: [
                {effect: 'fatigued', amount: 1, turns: 6, hex: true},
            ], actions: [
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'timid', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'lethargy', to: 'discardCards'},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
            {dmg: [30], actions: [
                {action: 'addCard', value: 1, what: 'execrate', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'flay', to: 'discardCards'},
                {action: 'summonMonster', what: 'cave_spider', value: 2},
                {action: 'stat', what: 'solid', key: 'current', value: 0, desc: 'Remove solid', additive: false},
                {action: 'stat', what: 'stout', key: 'current', value: 0, desc: 'Remove stout', additive: false},
            ]},
        ],
        vex: {base: 1, current: 0, temp: [], turns: -1},
    }),
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'flame_arch_summoner', 
        breed: 'arch_summoner',
        name: 'Flame Arch Summoner', 
        health: {base: 300, current: 0, max: 300},
        tier: 5,
        category: 'boss',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'rainbow', amount: -2, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.2, turns: 1, hex: true},
            ], dmg: [3, 3, 3, 3, 3, 3, 3, 3], actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 1, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'drawCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'rainbow', amount: -4, turns: 1, hex: true},
                {effect: 'sorcery', amount: -.4, turns: 1, hex: true},
            ], dmg: [4, 4, 4, 4, 4, 4, 4, 4], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'conjure', amount: -5, turns: 2, hex: true},
            ],
            actions: [
                {action: 'addCard', value: 1, what: 'curse', to: 'discardCards'},
                {action: 'removeHexes', to: 'self'},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {actions: [
                {action: 'summonMonster', what: ['red_skeleton', 'blue_skeleton'], value: 1},
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {dmg: [5, 5, 5, 5, 5, 5, 5, 5], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
            {effects: [
                {effect: 'might', amount: 5, turns: 1},
                {effect: 'vex', amount: 1, turns: -1}
            ], dmg: [6, 6, 6, 6, 6, 6, 6, 6], actions: [
                {action: 'stat', what: 'thunder', key: 'current', value: 1, desc: 'Remove thunder', additive: false},
                {action: 'stat', what: 'lightning', key: 'current', value: 0, desc: 'Remove lightning', additive: false},
            ]},
        ],
        resistance: {base: .5, current: 0, temp: [], turns: -1, persist: false},
    }),
    



    // FIRE GUARDIAN
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'flame_guardian', 
        breed: 'flame_guardian',
        name: 'Flame Guardian', 
        health: {base: 250, current: 0, max: 250},
        tier: 6,
        category: 'fire_guardian',
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [6, 6, 6, 6, 6]},
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [8, 8, 8, 8]},
            {effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ], actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [10, 10, 10]},
            {actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ]},
            {blk: [20], dmg: [12, 12], effects: [
                {effect: 'might', amount: 6, turns: -1}
            ]},
            {dmg: [16], actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ], effects: [
                {effect: 'might', amount: 3, turns: -1}
            ]},
        ]
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'super_frozen_flame_guardian', 
        breed: 'flame_guardian',
        name: 'Super Frozen Flame Guardian', 
        health: {base: 500, current: 0, max: 500},
        tier: 6,
        category: 'fire_guardian',
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [6, 6, 6, 6, 6]},
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [8, 8, 8, 8]},
            {effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ], actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [10, 10, 10]},
            {actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ]},
            {blk: [20], dmg: [12, 12], effects: [
                {effect: 'might', amount: 6, turns: -1}
            ]},
            {dmg: [16], actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ], effects: [
                {effect: 'might', amount: 3, turns: -1}
            ]},
        ]
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'super_burning_flame_guardian', 
        breed: 'flame_guardian',
        name: 'Super Burning Flame Guardian', 
        health: {base: 250, current: 0, max: 250},
        tier: 6,
        category: 'fire_guardian',
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [6, 6, 6, 6, 6]},
            {actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [8, 8, 8, 8]},
            {effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ], actions: [
                {action: 'removeBuffs', to: 'player'}
            ]},
            {blk: [20], dmg: [10, 10, 10]},
            {actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ]},
            {blk: [20], dmg: [12, 12], effects: [
                {effect: 'might', amount: 6, turns: -1}
            ]},
            {dmg: [16], actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'removeHexes', to: 'self'}
            ], effects: [
                {effect: 'might', amount: 3, turns: -1}
            ]},
        ]
    }),




    // ICE GUARDIAN
    // NORMAL
    new Creatures({
        type: 'monster',
        id: 'frost_guardian', 
        breed: 'frost_guardian',
        name: 'Frost Guardian', 
        health: {base: 500, current: 0, max: 500},
        tier: 6,
        category: 'ice_guardian',
        pattern: 'fixed',
        moveSet: [
            {dmg: [35], armor: [30]},
            {effects: [
                {effect: 'antimomentum', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [30], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ], actions: [
                {action: 'summonMonster', what: ['daggerhawk', 'crystalice', 'ghost_spider'], value: 2},
            ]},
            {blk: [40], armor: [30]},
            {dmg: [20], abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ], effects: [
                {effect: 'solid', amount: -2, turns: 2, hex: true},
            ]},
            {blk: [45], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [30], armor: [30], actions: [
                {action: 'summonMonster', what: ['seraphim', 'cherubim'], value: 2},
            ]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1}
            ]},
            {blk: [45]},
            {dmg: [35]},
            {effects: [
                {effect: 'heal', amount: 250, turns: 2},
                {effect: 'retaliate', amount: 1, turns: -1}
            ], actions: [
                {action: 'removeHexes', to: 'self'}
            ]},
        ],
        vex: {base: 2, current: 0, temp: [], turns: -1},
        retaliate: {base: 2, current: 0, temp: [], turns: -1},
    }),

    // FROST
    new Creatures({
        type: 'monster',
        context: 'frost',
        id: 'super_frozen_frost_guardian', 
        breed: 'frost_guardian',
        name: 'Super Frozen Frost Guardian', 
        health: {base: 1000, current: 0, max: 1000},
        tier: 6,
        category: 'ice_guardian',
        pattern: 'fixed',
        moveSet: [
            {dmg: [35], armor: [30]},
            {effects: [
                {effect: 'antimomentum', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [30], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ], actions: [
                {action: 'summonMonster', what: ['daggerhawk', 'crystalice', 'ghost_spider'], value: 2},
            ]},
            {blk: [40], armor: [30]},
            {dmg: [20], abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ], effects: [
                {effect: 'solid', amount: -2, turns: 2, hex: true},
            ]},
            {blk: [45], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [30], armor: [30], actions: [
                {action: 'summonMonster', what: ['seraphim', 'cherubim'], value: 2},
            ]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1}
            ]},
            {blk: [45]},
            {dmg: [35]},
            {effects: [
                {effect: 'heal', amount: 250, turns: 2},
                {effect: 'retaliate', amount: 1, turns: -1}
            ], actions: [
                {action: 'removeHexes', to: 'self'}
            ]},
        ],
        vex: {base: 2, current: 0, temp: [], turns: -1},
        retaliate: {base: 2, current: 0, temp: [], turns: -1},
    }),

    // FLAME
    new Creatures({
        type: 'monster',
        context: 'flame',
        id: 'super_burning_frost_guardian', 
        breed: 'frost_guardian',
        name: 'Super Burning Frost Guardian', 
        health: {base: 500, current: 0, max: 500},
        tier: 6,
        category: 'ice_guardian',
        pattern: 'fixed',
        moveSet: [
            {dmg: [35], armor: [30]},
            {effects: [
                {effect: 'antimomentum', amount: 1, turns: -1, hex: true},
            ]},
            {dmg: [30], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ], actions: [
                {action: 'summonMonster', what: ['daggerhawk', 'crystalice', 'ghost_spider'], value: 2},
            ]},
            {blk: [40], armor: [30]},
            {dmg: [20], abilities: [
                {ability: 'unreachable', turns: 1, enabled: true},
            ], effects: [
                {effect: 'solid', amount: -2, turns: 2, hex: true},
            ]},
            {blk: [45], effects: [
                {effect: 'might', amount: -2, turns: 2, hex: true},
                {effect: 'might', amount: 2, turns: -1},
            ]},
            {dmg: [30], armor: [30], actions: [
                {action: 'summonMonster', what: ['seraphim', 'cherubim'], value: 2},
            ]},
            {effects: [
                {effect: 'might', amount: 2, turns: -1}
            ]},
            {blk: [45]},
            {dmg: [35]},
            {effects: [
                {effect: 'heal', amount: 250, turns: 2},
                {effect: 'retaliate', amount: 1, turns: -1}
            ], actions: [
                {action: 'removeHexes', to: 'self'}
            ]},
        ],
        vex: {base: 2, current: 0, temp: [], turns: -1},
        retaliate: {base: 2, current: 0, temp: [], turns: -1},
    }),

    // THE SINGULARITY
    new Creatures({
        type: 'monster',
        id: 'singularity', 
        breed: 'singularity',
        name: 'Singularity', 
        health: {base: 15, current: 0, max: 15},
        tier: 7,
        category: 'singularity',
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1},
                {effect: 'might', amount: 50, turns: -1}
            ]},
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1}
            ]},
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1}
            ]},
            {effects: [
                {effect: 'retaliate', amount: 2, turns: -1}
            ]},
            {dmg: [1], effects: [
                {effect: 'retaliate', amount: 2, turns: -1}
            ], actions: [
                {action: 'stat', what: 'might', key: 'current', value: 'double'},
            ],},
        ],
        hardened: {base: 5, current: 0, temp: [], turns: -1},
        unreachable: {enabled: true, baseTurns: 0, turns: -1, persist: true, permanent: true},
        resurrect: {enabled: true, baseTurns: 0, turns: -1, persist: true, permanent: true},
        eternal: {enabled: true, baseTurns: 0, turns: -1, persist: true, permanent: true},
        vex: {base: 2, current: 0, temp: [], turns: -1},
    }),



    new Creatures({
        type: 'monster',
        id: 'cave_spider', 
        tier: 0,
        breed: 'ghost',
        name: 'Cave Spider', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'random',
        moveSet: [
            {dmg: [10], p: .2},
            {dmg: [5], p: .2},
            {dmg: [15], p: .2},
            {dmg: [7], p: .2},
            {dmg: [3], p: .2},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'stinger', 
        tier: 0,
        breed: 'ghost',
        name: 'Stinger', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'fixed',
        moveSet: [
            {dmg: [1, 1, 1, 1, 1]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'seer', 
        tier: 0,
        breed: 'ghost',
        name: 'Seer', 
        health: {base: 20, current: 0, max: 20},
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 1, what: 'mired', to: 'discardCards'}
            ], p: .3},
            {blk: [10], p: .4},
            {actions: [
                {action: 'addCard', value: 1, what: 'mired', to: 'discardCards'},
                {action: 'kill', to: 'self'}
            ], p: .3},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'flamehead', 
        tier: 0,
        breed: 'ghost',
        name: 'Flamehead', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'conjure', amount: -1, turns: 1, hex: true}
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'daggerhawk', 
        tier: 0,
        breed: 'ghost',
        name: 'Daggerhawk', 
        health: {base: 18, current: 0, max: 18},
        pattern: 'fixed',
        moveSet: [
            {dmg: [5]},
            {dmg: [4]},
            {dmg: [3]},
            {dmg: [2]},
            {dmg: [1]},
            {dmg: [40], actions: [
                {action: 'kill', to: 'self'}
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'crystalice', 
        tier: 0,
        breed: 'ghost',
        name: 'Crystalice', 
        health: {base: 35, current: 0, max: 35},
        pattern: 'fixed',
        moveSet: [
            {dmg: [5]},
            {dmg: [4]},
            {dmg: [3]},
            {dmg: [2]},
            {dmg: [1]},
            {actions: [
                {action: 'removeBuffs', to: 'player'},
                {action: 'kill', to: 'self'}
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'blob', 
        tier: 0,
        breed: 'ghost',
        name: 'Blob', 
        health: {base: 25, current: 0, max: 25},
        pattern: 'random',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 2, what: 'junk', to: 'handCards'}
            ], p: .5},
            {actions: [
                {action: 'addCard', value: 1, what: 'gunk', to: 'handCards'}
            ], p: .5},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'cherubim', 
        tier: 0,
        breed: 'ghost',
        name: 'Cherubim', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'marked', amount: 1, turns: 1, hex: true},
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'red_skeleton', 
        tier: 0,
        breed: 'ghost',
        name: 'Red Skeleton', 
        health: {base: 30, current: 0, max: 30},
        pattern: 'fixed',
        moveSet: [
            {dmg: [7], blk: [7]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'blue_skeleton', 
        tier: 0,
        breed: 'ghost',
        name: 'Blue Skeleton', 
        health: {base: 18, current: 0, max: 18},
        pattern: 'fixed',
        moveSet: [
            {dmg: [12]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'seraphim', 
        tier: 0,
        breed: 'ghost',
        name: 'Seraphim', 
        health: {base: 20, current: 0, max: 20},
        pattern: 'fixed',
        moveSet: [
            {actions: [
                {action: 'addCard', value: 1, type: 'clutter', to: 'drawCards'},
            ], effects: [
                {effect: 'regen', amount: 1, turns: -1},
            ]},
            {actions: [
                {action: 'addCard', value: 1, what: 'broken', to: 'drawCards'},
            ], effects: [
                {effect: 'regen', amount: 1, turns: -1},
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'striker', 
        tier: 0,
        breed: 'ghost',
        name: 'Striker', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true}
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'swirler', 
        tier: 0,
        breed: 'ghost',
        name: 'Swirler', 
        health: {base: 15, current: 0, max: 15},
        pattern: 'fixed',
        moveSet: [
            {effects: [
                {effect: 'punch', amount: -.1, turns: 1, hex: true}
            ]},
        ],
    }),
    new Creatures({
        type: 'monster',
        id: 'ghost_spider', 
        tier: 0,
        breed: 'ghost',
        name: 'Ghost Spider', 
        health: {base: 45, current: 0, max: 45},
        pattern: 'fixed',
        moveSet: [
            {dmg: [5]},
            {dmg: [4]},
            {dmg: [3]},
            {dmg: [2]},
            {dmg: [1]},
            {effects: [
                {effect: 'vulnerable', amount: 1, turns: 5, hex: true},
                {effect: 'antimomentum', amount: 1, turns: 5, hex: true},
            ], actions: [
                {action: 'kill', to: 'self'}
            ]},
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
        if ($('.monster:not(.dead):not(.ghost)').length > 0) {
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

    function summonMonster(monster, id, form) {
        let aliveMonsters = game.currentMonsters.filter(i => i.dead == false);
        //if(aliveMonsters.length < 7) {
            let thisMonster = createMonster(false, id, false, false, false, false, monster, form);
            game.currentMonsters.push(thisMonster);
        //}
    }

    function loadMonsters() {
    
        let currentMonsters = [];

        let excluded = game.previousMonsters;

        let context = game.overworld;
        
        game.previousMonsters = [];

        if(game.mapType == 'arena') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(5, i, 'boss', excluded);
                    currentMonsters.push(thisMonster);
                }
            } else {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(5, i, 'boss', excluded, context);
                    currentMonsters.push(thisMonster);
                }
            }

        } else if(game.mapType == 'fire_gate') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(6, i, 'fire_guardian');
                    currentMonsters.push(thisMonster);
                }
            } else {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(6, i, 'fire_guardian', [], context);
                    currentMonsters.push(thisMonster);
                }
            }

        } else if(game.mapType == 'ice_gate') {

            if(game.map==1) {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(6, i, 'ice_guardian');
                    currentMonsters.push(thisMonster);
                }
            } else {
                for (let i = 0; i < 1; i++) {
                    let thisMonster = createMonster(6, i, 'ice_guardian', [], context);
                    currentMonsters.push(thisMonster);
                }
            }

        } else if(game.mapType == 'singularity') {

            for (let i = 0; i < 1; i++) {
                let thisMonster = createMonster(7, i, 'singularity', [], 'forest', false, 'singularity');
                currentMonsters.push(thisMonster);
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
                        switch(game.floor) {
                            case 1:
                                // 3/2 super pixies, 2/1 standard pixies
                                var numStandard = util.chance(75) ? 2 : 1;
                                var numSuper = util.chance(75) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'pixie');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'pixie');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 2:
                                // 3/2 super mummies, 3/2 standard mummies
                                var numStandard = util.chance(75) ? 3 : 2;
                                var numSuper = util.chance(75) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'mummy');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'mummy');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 3:
                                // 3/2 super stone walkers, 2/1 standard stone walkers
                                var numStandard = util.chance(80) ? 2 : 1;
                                var numSuper = util.chance(80) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'stone_walker');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'stone_walker');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 2:
                    if(game.map==1) {
                        // 1 Tier 2 monster
                        let thisMonster = createMonster(2, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {
                        switch(game.floor) {
                            case 4:
                                // 3/2 super sludges, 2/1 standard sludges
                                var numStandard = util.chance(80) ? 2 : 1;
                                var numSuper = util.chance(80) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'sludge');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'sludge');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 5:
                                // 3/2 super imps, 2/1 standard imps
                                var numStandard = util.chance(80) ? 2 : 1;
                                var numSuper = util.chance(80) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'imp');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'imp');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 6:
                                // 3/2 super shatters, 2/1 standard shatters
                                var numStandard = util.chance(75) ? 2 : 1;
                                var numSuper = util.chance(75) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'shatter');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'shatter');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
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
                        switch(game.floor) {
                            case 7:
                                // 3/2 super void fairies, 2/1 standard void fairies
                                var numStandard = util.chance(75) ? 2 : 1;
                                var numSuper = util.chance(75) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'void_fairy');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'void_fairy');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 8:
                                // 3/2 super enchantresses, 2 standard enchantresses
                                var numStandard = util.chance(75) ? 2 : 2;
                                var numSuper = util.chance(75) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'enchantress');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'enchantress');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 9:
                                // 3/2 super power liches, 2 standard power liches
                                var numStandard = util.chance(80) ? 2 : 2;
                                var numSuper = util.chance(80) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'power_liche');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'power_liche');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 4:
                    if(game.map==1) {
                        // 1 Tier 3 monster
                        let thisMonster = createMonster(3, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {
                        switch(game.floor) {
                            case 10:
                                // 3/2 super iron walkers, 2 standard iron walkers
                                var numStandard = util.chance(80) ? 2 : 2;
                                var numSuper = util.chance(80) ? 3 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'iron_walker');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'iron_walker');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 11:
                                // 2/1 super swarms, 3/2 standard swarms
                                var numStandard = util.chance(75) ? 3 : 2;
                                var numSuper = util.chance(75) ? 2 : 1;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'swarm');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'swarm');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 12:
                                // 2/1 super sorcerer, 3/2 standard sorcerers
                                var numStandard = util.chance(75) ? 3 : 2;
                                var numSuper = util.chance(75) ? 2 : 1;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'sorcerer');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'sorcerer');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 5:
                    if(game.map==1) {
                        // 1 Tier 4 monster
                        let thisMonster = createMonster(4, game, 'normal', excluded);
                        currentMonsters.push(thisMonster);
                    } else {
                        switch(game.floor) {
                            case 13:
                                // 2 super Fel Dragons, 3/2 standard Fel Dragons
                                var numStandard = util.chance(50) ? 3 : 2;
                                var numSuper = util.chance(75) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'fel_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'fel_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 14:
                                // 2 super Cunning Dragons, 3/2 standard Cunning Dragons
                                var numStandard = util.chance(50) ? 3 : 2;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'cunning_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'cunning_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 15:
                                // 2 super cyberskulls, 3/2 standard cyberskulls
                                var numStandard = util.chance(75) ? 3 : 2;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'cyberskull');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'cyberskull');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 16:
                                // 2 super transfigurers, 2/1 standard transfigurer
                                var numStandard = util.chance(75) ? 2 : 1;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'transfigurer');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'transfigurer');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
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
                        switch(game.floor) {
                            case 17:
                                // 2 super Writhing Dragons, 1 standard Writhing Dragon
                                var numStandard = util.chance(75) ? 1 : 1;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'writhing_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'writhing_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 18:
                                // 2 super Darkness Dragon, 1 standard Darkness Dragon
                                var numStandard = util.chance(75) ? 1 : 1;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'darkness_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'darkness_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 19:
                                // 2 super obsidian walkers, 1 standard obsidian walker
                                var numStandard = util.chance(75) ? 1 : 1;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'obsidian_walker');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'obsidian_walker');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 20:
                                // 2 super seething entities, 1 standard seething entity
                                var numStandard = util.chance(75) ? 1 : 1;
                                var numSuper = util.chance(80) ? 2 : 2;
                                for (let i = 0; i < numStandard; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], 'forest', 'seething_entity');
                                    currentMonsters.push(thisMonster);
                                }
                                for (let i = 0; i < numSuper; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'seething_entity');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 7:
                    if(game.map==1) {
                        // 1 Tier 4 monster and 1 Tier 3 monster (60%) or 1 Tier 4 monster and 2 Tier 2 monsters (40%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            let thisMonster = createMonster(4, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(2, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            let thisMonster = createMonster(4, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                            thisMonster = createMonster(3, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                        }
                    } else {
                        switch(game.floor) {
                            case 21:
                                // 1 from each tier
                                var thisMonster = createMonster(1, game, 'normal', [], context, 'pixie');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'shatter');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'swarm');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'seething_entity');
                                currentMonsters.push(thisMonster);
                            break;
                            case 22:
                                // 1 from each tier
                                var thisMonster = createMonster(1, game, 'normal', [], context, 'mummy');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'power_liche');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'sorcerer');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'transfigurer');
                                currentMonsters.push(thisMonster);
                            break;
                            case 23:
                                // 1 from each tier
                                var thisMonster = createMonster(1, game, 'normal', [], context, 'stone_walker');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'iron_walker');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'cunning_dragon');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'writhing_dragon');
                                currentMonsters.push(thisMonster);
                            break;
                        }
                    }

                break;
                case 8:
                    if(game.map==1) {
                        // 2 Tier 4 monsters (60%) or 4 Tier 3 monsters (40%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(4, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                let thisMonster = createMonster(3, i, 'normal');
                                currentMonsters.push(thisMonster);
                            }
                        }
                    } else {
                        switch(game.floor) {
                            case 24:
                                // 1 from each tier
                                var thisMonster = createMonster(1, game, 'normal', [], context, 'sludge');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'enchantress');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'fel_dragon');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'darkness_dragon');
                                currentMonsters.push(thisMonster);
                            break;
                            case 25:
                                // 1 from each tier
                                var thisMonster = createMonster(1, game, 'normal', [], context, 'imp');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'void_fairy');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'cyberskull');
                                currentMonsters.push(thisMonster);
                                thisMonster = createMonster(1, game, 'normal', [], context, 'obsidian_walker');
                                currentMonsters.push(thisMonster);
                            break;
                            case 26:
                                // 3 Tier 4 monsters
                                for (let i = 0; i < 3; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'transfigurer');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 9:
                    if(game.map==1) {
                        // 5 Tier 3 monsters (40%) or 1 Tier 4 monster and 3 Tier 3 monsters (60%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 5; i++) {
                                let thisMonster = createMonster(3, i, 'normal');
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            let thisMonster = createMonster(4, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                            for (let i = 0; i < 3; i++) {
                                let thisMonster = createMonster(3, i, 'normal');
                                currentMonsters.push(thisMonster);
                            }
                        }
                    } else {
                        switch(game.floor) {
                            case 27:
                                // 3 Tier 4 monsters
                                for (let i = 0; i < 3; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'writhing_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 28:
                                // 3 Tier 4 monsters
                                for (let i = 0; i < 3; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'darkness_dragon');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                            case 29:
                                // 3 Tier 4 monsters
                                for (let i = 0; i < 3; i++) {
                                    let thisMonster = createMonster(1, i, 'normal', [], context, 'obsidian_walker');
                                    currentMonsters.push(thisMonster);
                                }
                            break;
                        }
                    }

                break;
                case 10:
                    if(game.map==1) {
                        // 2 Tier 4 monsters and 2 Tier 3 monsters (40%) or 2 Tier 4 monsters, 1 Tier 3 monster, 1 Tier 2 monster, and 2 Tier 1 monsters (60%)
                        let initial = 40;
                        let increase = 0;
                        let chance = util.monsterNumChance(initial, increase);
                        if(util.chance(chance)) {
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(3, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(4, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        } else {
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(4, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                            let thisMonster = createMonster(3, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                            thisMonster = createMonster(2, game, 'normal', excluded);
                            currentMonsters.push(thisMonster);
                            for (let i = 0; i < 2; i++) {
                                let thisMonster = createMonster(1, i, 'normal', excluded);
                                currentMonsters.push(thisMonster);
                            }
                        }
                    } else {
                        // 1 of each dragon color
                        var thisMonster = createMonster(1, game, 'normal', [], context, 'fel_dragon');
                        currentMonsters.push(thisMonster);
                        thisMonster = createMonster(1, game, 'normal', [], context, 'cunning_dragon');
                        currentMonsters.push(thisMonster);
                        thisMonster = createMonster(1, game, 'normal', [], context, 'writhing_dragon');
                        currentMonsters.push(thisMonster);
                        thisMonster = createMonster(1, game, 'normal', [], context, 'darkness_dragon');
                        currentMonsters.push(thisMonster);
                    }

                break;
            }
        }

        game.currentMonsters = currentMonsters;
        updateStatusBar();
    
    }

    function createMonster(tier, i = 0, category = 'normal', excluded = [], context = 'forest', breed = false, id = false, form = false) {

        let monster = undefined;
        let possibleMonsters = undefined;

        if(id) {
            possibleMonsters = monsters.filter(i => i.id == id);
        } else {
            possibleMonsters = monsters.filter(i => i.tier == tier && i.category == category && i.context == context);
            possibleMonsters = possibleMonsters.filter( x => !excluded.filter( y => y.id === x.id).length);
            
            if(breed) { // we're calling a direct breed of monster
                possibleMonsters = monsters.filter(i => i.breed == breed && i.context == context);
            }
        }

        let copiedMonsters = JSON.parse(JSON.stringify(possibleMonsters)); // necessary to create a deep copy
        monster = util.randFromArray(copiedMonsters);

        if(monster == undefined) return;

        game.previousMonsters.push(monster);

        monster.health.current = monster.health.base;
        monster.guid = util.randString();
        if(form == 'ghost') {
            monster.breed = 'ghost';
        }

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
            if(((game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'thunder') && (to[game.effects[i].id].current == 1)) ||
                ((game.effects[i].id != 'punch' && game.effects[i].id != 'sorcery' && game.effects[i].id != 'thunder') && (to[game.effects[i].id].current == 0))) {
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

        if(to.breed == 'ghost') {
            dom += "<div class='single-status tooltip' style='background-position:-482px -6624px;' data-id='ghost' data-powertip='Ghost'></div>";
        }

        for(let i = 0; i < game.effects.length; i++) {
            
            if(game.effects[i].id != 'speed' && game.effects[i].id != 'mana' && game.effects[i].id != 'rainbow') {
                
                if(((game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'thunder') && (to[game.effects[i].id].current == 1)) ||
                ((game.effects[i].id != 'punch' && game.effects[i].id != 'sorcery' && game.effects[i].id != 'thunder') && (to[game.effects[i].id].current == 0))) {

                    // don't show anything if current value is 0, or if current value is 1 for punch/resistance/sorcery

                } else {

                    let turns = to[game.effects[i].id].turns > 0 ? '<span class="turns">' + to[game.effects[i].id].turns + '</span>' : '';
                    let effectText = to[game.effects[i].id].current;
                    if(game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'resistance' || game.effects[i].id == 'thunder') {
                        effectText = Math.round((effectText + Number.EPSILON) * 100);
                        // resistance should top out at 100, when in reality it can actually go higher with no effect
                        if(game.effects[i].id == 'resistance' && effectText > 100) {
                            effectText = 100;
                        }
                        effectText += '%';
                    }
                    let amount = '<span class="amount">' + effectText + '</span>';

                    let counter = '';

                    if(game.effects[i].id == 'momentum') {
                        counter = '<span class="counter">' + to.momentumAmount + '</span>';
                    }
                    if(game.effects[i].id == 'antimomentum') {
                        counter = '<span class="counter">' + to.antimomentumAmount + '</span>';
                    }

                    let x = game.effects[i].x != undefined ? game.effects[i].x : '';
                    let y = game.effects[i].y != undefined ? game.effects[i].y : '';
                    let desc = '<span class="amount ' + game.effects[i].id + '" data-amount="' + to[game.effects[i].id].current + '">' + effectText + '</span> <span class="highlight">' + game.effects[i].name + ':</span> ' + game.effects[i].desc;
                    dom += "<div class='single-status status-effect tooltip' style='background-position:" + x + "px " + y + "px;' data-id='" + game.effects[i].id + "' data-powertip='" + desc + "'>" + turns + amount + counter + "</div>";
                
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

                let counter = '';
                if(game.abilities[i].id == 'resurrect') {
                    counter = '<span class="counter">' + game.toResurrect + '</span>';
                }

                dom += "<div class='single-status status-ability tooltip' style='background-position:" + x + "px " + y + "px;' data-id='" + game.abilities[i].id + "' data-powertip='" + desc + "'>" + turns + counter + "</div>";
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

        if(game.floor < 4) {
            game.monsterGroup = 1;
        } else if(game.floor < 7) {
            game.monsterGroup = 2;
        } else if(game.floor < 10) {
            game.monsterGroup = 3;
        } else if(game.floor < 13) {
            game.monsterGroup = 4;
        } else if(game.floor < 17) {
            game.monsterGroup = 5;
        } else if(game.floor < 21) {
            game.monsterGroup = 6;
        } else if(game.floor < 24) {
            game.monsterGroup = 7;
        } else if(game.floor < 27) {
            game.monsterGroup = 8;
        } else if(game.floor < 30) {
            game.monsterGroup = 9;
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
        summonMonster,
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
        mana: {base: 3, current: 0, temp: 0}, // TODO: reset to base 3
        rainbow: {base: 0, current: 0, temp: [], turns: 0, max: 20, type: 'rainbow'},
        //retain: {base: 2, current: 2, temp: [], turns: 0, persist: false, hexed: false}, // how to add a default effect
        //stockpile: {enabled: true, baseTurns: 0, turns: 10, persist: false, permanent: true}, // how to add a default ability
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