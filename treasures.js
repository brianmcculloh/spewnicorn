import Util from './utils.js';
const util = new Util();

class Shard {
    constructor({
       id,
       name,
       type
    }) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

const ALL_SHARDS = [
    new Shard({
        id:'frost', 
        name: 'Frost', 
        type: 'ice'
    }),
    new Shard({
        id:'flame', 
        name: 'Flame', 
        type: 'fire'
    })
];

class Candy {
    constructor({
        id,
        type = 'candy',
        name,
        descOverride,
        weight = 5,
        courage = 2,
        target = '',
        dmg = [],
        blk = [],
        armor = [],
        magic = [],
        effects = [],
        abilities = [],
        actions = [],
        combatOnly = true,
        x = 0,
        y = 0,
    }) {
        this.guid = '';
        this.id = id;
        this.type = type;
        this.name = name;
        this.descOverride = descOverride;
        this.weight = weight;
        this.courage = courage;
        this.target = target;
        this.dmg = dmg;
        this.blk = blk;
        this.armor = armor;
        this.magic = magic;
        this.effects = effects;
        this.abilities = abilities;
        this.actions = actions;
        this.combatOnly = combatOnly;
        this.x = x;
        this.y = y;
    }
}

const ALL_CANDY= [
    
    /* Candies work just like cards as far as effects/abilities/actions/dmg/blk/armor/magic */

    // basic
    new Candy({
        id:'nut_clusters', 
        name: 'Nut Clusters', 
        dmg: [40],
        weight: 7,
        target: 'monster',
        x: -384,
        y: -3456
    }),
    new Candy({
        id:'circus_peanuts', 
        name: 'Circus Peanuts', 
        weight: 7,
        blk: [50],
        x: -480,
        y: -3456
    }),
    new Candy({
        id:'rock_candy', 
        name: 'Rock Candy', 
        weight: 7,
        armor: [25],
        combatOnly: false,
        x: -448,
        y: -2464
    }),
    new Candy({
        id:'cherry_taffy', 
        name: 'Cherry Taffy', 
        weight: 7,
        blk: [25],
        armor: [15],
        combatOnly: false,
        x: -288,
        y: -4224
    }),
    new Candy({
        id:'caramel_creme', 
        name: 'Caramel Creme', 
        weight: 4,
        dmg: [50],
        target: 'monster',
        x: -160,
        y: -3870
    }),
    new Candy({
        id:'marshmallows', 
        name: 'Marshmallows', 
        weight: 4,
        blk: [60],
        x: -256,
        y: -3872
    }),
    new Candy({
        id:'kettle_corn', 
        name: 'Kettle Corn', 
        weight: 4,
        courage: 3,
        armor: [35],
        combatOnly: false,
        x: -64,
        y: -1568
    }),
    new Candy({
        id:'caramel_corn', 
        name: 'Caramel Corn', 
        weight: 2,
        courage: 3,
        dmg: [50],
        target: 'monster',
        x: -64,
        y: -1696
    }),
    new Candy({
        id:'swedish_fish', 
        name: 'Swedish Fish', 
        weight: 2,
        courage: 3,
        blk: [70],
        x: -32,
        y: -1666
    }),
    new Candy({
        id:'trail_mix', 
        name: 'Trail Mix',
        weight: 2,
        courage: 3,
        armor: [45],
        combatOnly: false,
        x: 0,
        y: -1760
    }),

    // magic
    new Candy({
        id:'blueberry_hard_candy', 
        name: 'Blueberry Hard Candy', 
        weight: 6,
        magic: [{type: 'rainbow', amount: 40}],
        x: -64,
        y: -14816
    }),
    new Candy({
        id:'grape_hard_candy', 
        name: 'Grape Hard Candy', 
        magic: [{type: 'dark', amount: 40}],
        x: -128,
        y: -14816
    }),
    new Candy({
        id:'cherry_hard_candy', 
        name: 'Cherry Hard Candy', 
        magic: [{type: 'chaos', amount: 40}],
        x: -32,
        y: -14816
    }),
    new Candy({
        id:'lime_hard_candy', 
        name: 'Lime Hard Candy', 
        magic: [{type: 'elemental', amount: 40}],
        x: -96,
        y: -14816
    }),
    new Candy({
        id:'orange_hard_candy', 
        name: 'Orange Hard Candy', 
        courage: 3,
        weight: 4,
        magic: [{type: 'aligned', amount: 40}],
        x: -0,
        y: -14816
    }),
    new Candy({
        id:'mystery_hard_candy', 
        name: 'Mystery Hard Candy', 
        weight: 6,
        magic: [{type: 'random', amount: 60}],
        x: -160,
        y: -14816
    }),
    new Candy({
        id:'blueberry_lollipop', 
        name: 'Blueberry Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 40}],
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        x: -192,
        y: -1152
    }),
    new Candy({
        id:'cherry_lollipop', 
        name: 'Cherry Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 40}],
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        x: -192,
        y: -1088
    }),
    new Candy({
        id:'grape_lollipop', 
        name: 'Grape Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 40}],
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        x: -192,
        y: -1216
    }),
    new Candy({
        id:'lime_lollipop', 
        name: 'Lime Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 40}],
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        x: -192,
        y: -1280
    }),

    // actions
    new Candy({
        id:'cherry_cordial', 
        name: 'Cherry Cordial', 
        weight: 4,
        actions: [
            {action: 'draw', value: 4},
        ],
        x: -416,
        y: -3808
    }),
    new Candy({
        id:'cinnamon_candy_stick', 
        name: 'Cinnamon Candy Stick', 
        courage: 1,
        weight: 3,
        actions: [
            {action: 'ensharden', type: 'flame', select: -1, from: 'allCards', random: true}
        ],
        x: -286,
        y: -832
    }),
    new Candy({
        id:'spearmint_candy_stick', 
        name: 'Spearmint Candy Stick', 
        courage: 1,
        weight: 3,
        actions: [
            {action: 'ensharden', type: 'frost', select: -1, from: 'allCards', random: true}
        ],
        x: -286,
        y: -928
    }),
    new Candy({
        id:'peppermint_candy_stick', 
        name: 'Peppermint Candy Stick', 
        courage: 1,
        weight: 4,
        actions: [
            {action: 'ensharden', type: 'random', select: -1, from: 'allCards', random: true}
        ],
        x: -286,
        y: -992
    }),
    new Candy({
        id:'jawbreaker', 
        name: 'Jawbreaker', 
        courage: 3,
        weight: 2,
        actions: [
            {action: 'removeHexes', to: 'player'}
        ],
        x: -32,
        y: -3360
    }),
    new Candy({
        id:'candy_corn', 
        name: 'Candy Corn', 
        weight: 4,
        actions: [
            {action: 'addCard', value: 3, what: 'energize', to: 'handCards'}
        ],
        x: -256,
        y: -3584
    }),
    new Candy({
        id:'peanut_butter_cup', 
        name: 'Peanut Butter Cup', 
        weight: 4,
        actions: [
            {action: 'addCard', value: 3, what: 'boost', to: 'handCards'}
        ],
        x: -482,
        y: -3744
    }),
    new Candy({
        id:'cotton_candy', 
        name: 'Cotton Candy', 
        weight: 7,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'health', key: 'current', value: 30}
        ],
        x: -256,
        y: -2080
    }),
    new Candy({
        id:'salted_caramel', 
        name: 'Salted Caramel', 
        courage: 3,
        weight: 4,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'health', key: 'max', value: 15}
        ],
        x: -96,
        y: -3808
    }),
    new Candy({
        id:'lemon_gumdrop', 
        name: 'Lemon Gumdrop', 
        courage: 1,
        weight: 8,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'courage', value: 3}
        ],
        x: -32,
        y: -962
    }),
    new Candy({
        id:'grape_gumdrop', 
        name: 'Grape Gumdrop', 
        courage: 3,
        weight: 3,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 3}
        ],
        x: -32,
        y: -1026
    }),
    new Candy({
        id:'blueberry_gumdrop', 
        name: 'Blueberry Gumdrop', 
        courage: 3,
        weight: 3,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'sparkle', key: 'current', value: 3}
        ],
        x: -32,
        y: -898
    }),
    new Candy({
        id:'cherry_gumdrop', 
        name: 'Cherry Gumdrop', 
        courage: 3,
        weight: 3,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 3}
        ],
        x: -32,
        y: -994
    }),



    // effects
    new Candy({
        id:'chocolate_fudge', 
        name: 'Chocolate Fudge', 
        blk: [10],
        effects: [
            {effect: 'solid', amount: 6, turns: -1}
        ],
        x: -384,
        y: -3776
    }),
    new Candy({
        id:'white_fudge', 
        name: 'White Fudge', 
        weight: 3,
        courage: 3,
        blk: [20],
        effects: [
            {effect: 'solid', amount: 12, turns: -1}
        ],
        x: -352,
        y: -3776
    }),
    new Candy({
        id:'chocolate_bar', 
        name: 'Chocolate Bar', 
        target: 'monster',
        dmg: [10],
        effects: [
            {effect: 'might', amount: 4, turns: -1}
        ],
        x: -320,
        y: -834
    }),
    new Candy({
        id:'white_chocolate_bar', 
        name: 'White Chocolate Bar', 
        weight: 3,
        courage: 3,
        target: 'monster',
        dmg: [20],
        effects: [
            {effect: 'might', amount: 8, turns: -1}
        ],
        x: -320,
        y: -962
    }),
    new Candy({
        id:'white_chocolate_clusters', 
        name: 'White Chocolate Clusters', 
        weight: 1,
        courage: 3,
        target: 'monster',
        dmg: [30], 
        effects: [
            {effect: 'might', amount: 12, turns: -1}
        ],
        x: 0,
        y: -962
    }),
    new Candy({
        id:'chocolate_cookie', 
        name: 'Chocolate Cookie', 
        target: 'monster',
        dmg: [10],
        effects: [
            {effect: 'punch', amount: .3, turns: -1}
        ],
        x: -128,
        y: -3872
    }),
    new Candy({
        id:'white_chocolate_cookie', 
        name: 'White Chocolate Cookie', 
        weight: 3,
        courage: 3,
        target: 'monster',
        dmg: [20],
        effects: [
            {effect: 'punch', amount: .6, turns: -1}
        ],
        x: -416,
        y: -3904
    }),
    new Candy({
        id:'chocolate_clusters', 
        name: 'Chocolate Clusters',
        dmg: [30], 
        weight: 1,
        courage: 3,
        target: 'monster',
        effects: [
            {effect: 'punch', amount: .8, turns: -1}
        ],
        x: 0,
        y: -832
    }),
    new Candy({
        id:'dark_truffle', 
        name: 'Dark Truffle', 
        magic: [{type: 'aligned', amount: 10}],
        effects: [
            {effect: 'conjure', amount: 4, turns: -1}
        ],
        x: -418,
        y: -4386
    }),
    new Candy({
        id:'white_truffle', 
        name: 'White Truffle', 
        weight: 3,
        courage: 3,
        magic: [{type: 'aligned', amount: 20}],
        effects: [
            {effect: 'conjure', amount: 8, turns: -1}
        ],
        x: -418,
        y: -4514
    }),
    new Candy({
        id:'chocolate_pudding', 
        name: 'Chocolate Pudding', 
        magic: [{type: 'aligned', amount: 10}],
        effects: [
            {effect: 'sorcery', amount: .3, turns: -1}
        ],
        x: -480,
        y: -3650
    }),
    new Candy({
        id:'vanilla_pudding', 
        name: 'Vanilla Pudding', 
        weight: 3,
        courage: 3,
        magic: [{type: 'aligned', amount: 20}],
        effects: [
            {effect: 'sorcery', amount: .6, turns: -1}
        ],
        x: -288,
        y: -3650
    }),
    new Candy({
        id:'gumball', 
        name: 'Gumball', 
        effects: [
            {effect: 'momentum', amount: 3, turns: -1}
        ],
        x: 0,
        y: -3360
    }),
    new Candy({
        id:'sour_bears', 
        name: 'Sour Bears', 
        weight: 4,
        effects: [
            {effect: 'vex', amount: 3, turns: -1}
        ],
        x: -96,
        y: -3458
    }),
    new Candy({
        id:'black_licorice', 
        name: 'Black Licorice', 
        courage: 4,
        weight: 1,
        effects: [
            {effect: 'fatality', amount: 1.2, turns: 1, persist: true}
        ],
        x: -128,
        y: -1760
    }),
    new Candy({
        id:'blueberry_taffy', 
        name: 'Blueberry Taffy', 
        weight: 7,
        effects: [
            {effect: 'regen', amount: 6, turns: -1}
        ],
        x: -320,
        y: -4224
    }),
    new Candy({
        id:'watermelon_gobstopper', 
        name: 'Watermelon Gobstopper', 
        magic: [{type: 'aligned', amount: 5}],
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        x: -416,
        y: -2496
    }),
    new Candy({
        id:'blueberry_gobstopper', 
        name: 'Blueberry Gobstopper', 
        weight: 3,
        courage: 3,
        magic: [{type: 'aligned', amount: 10}],
        effects: [
            {effect: 'lightning', amount: 10, turns: -1}
        ],
        x: -416,
        y: -2432
    }),
    new Candy({
        id:'grape_gobstopper', 
        name: 'Grape Gobstopper', 
        magic: [{type: 'aligned', amount: 5}],
        effects: [
            {effect: 'thunder', amount: .3, turns: -1}
        ],
        x: -416,
        y: -2464
    }),
    new Candy({
        id:'orange_gobstopper', 
        name: 'Orange Gobstopper', 
        weight: 3,
        courage: 3,
        magic: [{type: 'aligned', amount: 10}],
        effects: [
            {effect: 'thunder', amount: .6, turns: -1}
        ],
        x: -416,
        y: -2528
    }),
    new Candy({
        id:'pixie_sugar', 
        name: 'Pixie Sugar', 
        effects: [
            {effect: 'mystery', amount: 4, turns: -1}
        ],
        x: -416,
        y: -800
    }),
    new Candy({
        id:'candy_lemon_slice', 
        name: 'Candy Lemon Slice', 
        effects: [
            {effect: 'lemonade', amount: 2, turns: -1}
        ],
        x: -416,
        y: -4160
    }),
    new Candy({
        id:'sour_apple_candy', 
        name: 'Sour Apple Candy', 
        effects: [
            {effect: 'spikes', amount: 24, turns: -1}
        ],
        x: -128,
        y: -3584
    }),
    new Candy({
        id:'spicy_cinnammon_candy', 
        name: 'Spicy Cinnammon Candy', 
        effects: [
            {effect: 'retaliate', amount: 20, turns: -1}
        ],
        x: -288,
        y: -3520
    }),
    new Candy({
        id:'strawberry_pastry', 
        name: 'Strawberry Pastry', 
        magic: [{type: 'aligned', amount: 5}],
        effects: [
            {effect: 'summon', amount: 8, turns: -1}
        ],
        x: -96,
        y: -4224
    }),
    new Candy({
        id:'peanut_butter_pastry', 
        name: 'Peanut Butter Pastry', 
        weight: 3,
        courage: 3,
        magic: [{type: 'aligned', amount: 10}],
        effects: [
            {effect: 'summon', amount: 16, turns: -1}
        ],
        x: -160,
        y: -4224
    }),
    



    // abilities
    new Candy({
        id:'pixie_dust', 
        name: 'Pixie Dust', 
        courage: 3,
        weight: 2,
        abilities: [
            {ability: 'unreachable', turns: 1, enabled: true}
        ],
        x: -256,
        y: -800
    }),
    new Candy({
        id:'cinnamon_drop', 
        name: 'Cinnamon Drop', 
        courage: 3,
        weight: 2,
        abilities: [
            {ability: 'hypnotize', turns: 1, enabled: true}
        ],
        x: -256,
        y: -736
    }),
    new Candy({
        id:'chocolate_chips', 
        name: 'Chocolate Chips',
        courage: 3, 
        weight: 2,
        abilities: [
            {ability: 'explode', turns: 1, enabled: true}
        ],
        x: -256,
        y: -3456
    }),
    new Candy({
        id:'white_chocolate_chips', 
        name: 'White Chocolate Chips', 
        courage: 3,
        weight: 1,
        abilities: [
            {ability: 'explode', turns: 2, enabled: true}
        ],
        x: -288,
        y: -3584
    }),
    
];

class Treasure {
    constructor({
       id,
       type = 'treasure',
       name,
       descOverride,
       owned = false,
       weight = 5,
       tier = 1,
       courage = 9,
       trigger = {counter: -1, when: 'turns', at: 3, per: 'combat', once: false},
       effects = [],
       abilities = [],
       actions = [],
       x = 0,
       y = 0,
       permanent = false,
       starting = false
    }) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.descOverride = descOverride;
        this.owned = owned;
        this.weight = weight;
        this.tier = tier;
        this.courage = courage;
        this.trigger = trigger;
        this.effects = effects;
        this.abilities = abilities;
        this.actions = actions;
        this.x = x;
        this.y = y;
        this.permanent = permanent;
        this.starting = starting;
    }
}

const ALL_TREASURES = [

    /* TREASURE EXAMPLE 
    new Treasure({
        id:'treasure_id', 
        name: 'Treasure Name', 

        // relative to other treasures, can be any values but we can use 1 - 9
        weight: 5,

        // tiers can be 1 through 4: common, uncommon, rare, legendary
        tier: 1,

        // how much the treasure costs at a shop
        courage: 8,

        // whether the treasure should get activated only once when first obtained or every combat
        permanent: false,

        // denotes the treasure is in the starting treasure pool
        starting: true,

        // whether this treasure is already owned - this is a hacky way to remove a treasure from the possible treasures pool
        // so treasures which are explictly added by id from events typically are marked owned by default even if they are not yet owned
        owned: false,

        // optional: when the treasure should fire
        trigger: {counter: 0, when: 'cardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        trigger: {counter: 0, when: 'attackCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        trigger: {counter: 0, when: 'turns', at: 2, per: 'combat', once: true, activated: false},

        // treasure effects and abilities work just like card effects and abilities
        // generally speaking, when triggers are used, if turns is -1 then persist should be false
        effects: [
            {effect: 'cunning', amount: 3, turns: -1, persist: false},
        ],

        // use turns for counting turns normally, use baseTurns only for -1 (permanent this combat)

        abilities: [
            {ability: 'panic', enabled: true, turns: 10, persist: true}, // this will persist between combats
            {ability: 'panic', enabled: true, baseTurns: -1, permanent: true}, // this will apply the effect permanently
        ]
    }),
    */

    // STARTING
    new Treasure({
        id:'gift_of_healing', 
        name: 'Gift Of Healing',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'heal', base: 8}
        ],
        x: -416,
        y: -3104
    }),
    new Treasure({
        id:'gift_of_strength', 
        name: 'Gift Of Strength',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'might', base: 3}
        ],
        x: -416,
        y: -2912
    }),
    new Treasure({
        id:'gift_of_covering', 
        name: 'Gift Of Covering',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'muster', base: 3}
        ],
        x: -416,
        y: -3200
    }),
    new Treasure({
        id:'gift_of_protection', 
        name: 'Gift Of Protection',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'solid', base: 3}
        ],
        x: -416,
        y: -3040
    }),
    new Treasure({
        id:'gift_of_conjuring', 
        name: 'Gift Of Conjuring',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'conjure', base: 3}
        ],
        x: -416,
        y: -2976
    }),
    new Treasure({
        id:'gift_of_summoning', 
        name: 'Gift Of Summoning',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'summon', base: 5}
        ],
        x: -416,
        y: -3008
    }),
    new Treasure({
        id:'gift_of_power', 
        name: 'Gift Of Power',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'lightning', base: 6}
        ],
        x: -416,
        y: -3072
    }),
    new Treasure({
        id:'gift_of_longevity', 
        name: 'Gift Of Longevity',
        permanent: true,
        starting: true,
        owned: true,
        actions: [
            {action: 'stat', what: 'health', key: 'max', value: 25},
            {action: 'stat', what: 'health', key: 'current', value: 25}
        ],
        x: -416,
        y: -3168
    }),
    new Treasure({
        id:'gift_of_the_craftsman', 
        name: 'Gift Of The Craftsman',
        permanent: true,
        starting: true,
        owned: true,
        effects: [
            {effect: 'craft', base: 4}
        ],
        x: -416,
        y: -2880
    }),
    new Treasure({
        id:'gift_of_magic', 
        name: 'Gift Of Magic',
        permanent: true,
        starting: true,
        owned: true,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'base', value: 12},
        ],
        x: -416,
        y: -2944
    }),
    

    // TIER 1
    new Treasure({
        id:'burning_ruby', 
        name: 'Burning Ruby',
        permanent: true,
        effects: [
            {effect: 'mastery', base: 2}
        ],
        x: -64,
        y: -674
    }),
    new Treasure({
        id:'gleaming_emerald', 
        name: 'Gleaming Emerald', 
        permanent: true,
        effects: [
            {effect: 'fierce', base: 30}
        ],
        x: -32,
        y: -674
    }),
    new Treasure({
        id:'twinkling_sapphire', 
        name: 'Twinkling Sapphire',
        permanent: true, 
        effects: [
            {effect: 'rowdy', base: 10}
        ],
        x: -0,
        y: -674
    }),
    new Treasure({
        id:'glowing_totem', 
        name: 'Glowing Totem', 
        courage: 10,
        permanent: true,
        effects: [
            {effect: 'conjure', base: 4}
        ],
        x: -64,
        y: -768
    }),
    new Treasure({
        id:'talisman', 
        name: 'Talisman', 
        permanent: true,
        effects: [
            {effect: 'mage', base: 1}
        ],
        x: -320,
        y: -15072
    }),
    new Treasure({
        id:'magic_dust', 
        name: 'Magic Dust',
        permanent: true, 
        weight:2,
        effects: [
            {effect: 'enchanter', base: 1}
        ],
        x: -192,
        y: -3680
    }),
    new Treasure({
        id:'black_cauldron', 
        name: 'Black Cauldron', 
        weight: 4,
        courage: 11,
        permanent: true,
        effects: [
            {effect: 'summon', base: 6}
        ],
        x: -224,
        y: -6080
    }),
    new Treasure({
        id:'opaque_charm', 
        name: 'Opaque Charm', 
        courage: 8,
        permanent: true,
        effects: [
            {effect: 'arcane', base: 10}
        ],
        x: -288,
        y: -544
    }),
    new Treasure({
        id:'pridwen', 
        name: "Pridwen", 
        weight: 6,
        permanent: true,
        effects: [
            {effect: 'solid', base: 4}
        ],
        x: -32,
        y: -15008
    }),
    new Treasure({
        id:'snakestone', 
        name: "Snakestone", 
        courage: 8,
        permanent: true,
        effects: [
            {effect: 'mend', base: 2}
        ],
        x: -480,
        y: -14912
    }),
    new Treasure({
        id:'charmstone', 
        name: "Charmstone", 
        courage: 8,
        weight: 6,
        permanent: true,
        effects: [
            {effect: 'cunning', base: 2}
        ],
        x: -96,
        y: -736
    }),
    new Treasure({
        id:'thunderstone', 
        name: "Thunderstone", 
        permanent: true,
        effects: [
            {effect: 'stout', base: 10}
        ],
        x: -160,
        y: -15008
    }),
    new Treasure({
        id:'dew_of_yarva', 
        name: "Dew of Yarva", 
        permanent: true,
        weight: 3,
        effects: [
            {effect: 'heal', base: 10}
        ],
        x: -480,
        y: -2752
    }),
    new Treasure({
        id:'dew_of_lunya', 
        name: "Dew of Lunya", 
        permanent: true,
        weight: 3,
        effects: [
            {effect: 'regen', base: 5}
        ],
        x: -480,
        y: -2688
    }),
    new Treasure({
        id:'razor_barb', 
        name: 'Razor Barb', 
        courage: 8,
        weight: 7,
        permanent: true,
        effects: [
            {effect: 'retaliate', base: 15}
        ],
        x: -0,
        y: -5344
    }),
    new Treasure({
        id:'lemon', 
        name: 'Lemon', 
        courage: 8,
        weight: 1,
        permanent: true,
        effects: [
            {effect: 'lemonade', base: 1}
        ],
        x: -0,
        y: -4096
    }),
    new Treasure({
        id:'spiked_punch', 
        name: 'Spiked Punch', 
        courage: 8,
        weight: 1,
        //permanent: true,
        effects: [
            {effect: 'lemonade', amount: 1, turns: -1}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'junk', to: 'drawCards'}
        ],
        trigger: {counter: 0, when: 'turns', at: 4, per: 'combat', once: false, activated: false},
        x: -64,
        y: -4256
    }),
    new Treasure({
        id:'pricket', 
        name: 'Pricket', 
        courage: 8,
        weight: 7,
        permanent: true,
        effects: [
            {effect: 'spikes', base: 18}
        ],
        x: -448,
        y: -3392
    }),
    new Treasure({
        id:'sifter', 
        name: 'Sifter', 
        courage: 6,
        weight: 8,
        permanent: false,
        abilities: [
            {ability: 'sift', baseTurns: -1, enabled: true, permanent: true}
        ],
        x: -192,
        y: -1632
    }),
    new Treasure({
        id:'library_card', 
        name: 'Library Card', 
        courage: 6,
        weight: 2,
        permanent: false,
        abilities: [
            {ability: 'expirex', baseTurns: -1, enabled: true, permanent: true}
        ],
        x: -64,
        y: -384
    }),
    new Treasure({
        id:'amulet', 
        name: "Amulet", 
        weight: .5,
        descOverride: 'Each turn, when you play at least as many cards as your maximum speed, gain protection.',
        abilities: [
            {ability: 'protection', turns: 1, enabled: true}
        ],
        trigger: {counter: 0, when: 'cardsPlayed', at: -1, per: 'turn', oncePerTurn: true, activated: false},
        x: -224,
        y: -10498
    }),
    new Treasure({
        id:'sparkling_fragment', 
        name: "Sparkling Fragment", 
        courage: 6,
        weight: 6,
        permanent: true,
        actions: [
            {action: 'stat', what: 'sparkle', key: 'current', value: 8}
        ],
        x: -192,
        y: -896
    }),
    new Treasure({
        id:'shimmering_fragment', 
        name: "Shimmering Fragment", 
        courage: 6,
        weight: 6,
        permanent: true,
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 8}
        ],
        x: -192,
        y: -1024
    }),
    new Treasure({
        id:'radiating_fragment', 
        name: "Radiating Fragment", 
        courage: 6,
        weight: 6,
        permanent: true,
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 8}
        ],
        x: -192,
        y: -992
    }),
    new Treasure({
        id:'pewter_mug', 
        name: "Pewter Mug", 
        courage: 5,
        permanent: true,
        actions: [
            {action: 'stat', what: 'courage', value: 7}
        ],
        x: -320,
        y: -192
    }),
    new Treasure({
        id:'torch', 
        name: "Torch", 
        tier: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 2},
        ],
        trigger: {counter: 0, when: 'turns', at: 3, per: 'combat', once: false, activated: false},
        x: -0,
        y: -320
    }), 
    new Treasure({
        id:'candlestick', 
        name: "Candlestick", 
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'current', value: 2},
        ],
        trigger: {counter: 0, when: 'cardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -64,
        y: -320
    }),
    new Treasure({
        id:'frozen_knife', 
        name: "Frozen Knife", 
        tier: 1,
        permanent: true,
        actions: [
            {action: 'addCard', value: 10, what: 'fleeting_slash', to: 'handCards'}
        ],
        trigger: {counter: 0, when: 'turns', at: 4, per: 'combat', once: false, activated: false},
        x: -448,
        y: -9856
    }),  
    new Treasure({
        id:'vibrating_shiv', 
        name: "Vibrating Shiv", 
        tier: 1,
        permanent: true,
        actions: [
            {action: 'addCard', value: 1, what: 'lingering_slash', to: 'handCards'}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -352,
        y: -9856
    }), 
    new Treasure({
        id:'glowing_sludge', 
        name: 'Glowing Sludge', 
        courage: 10,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'irradiate', base: 10}
        ],
        x: -256,
        y: -5472
    }),
    new Treasure({
        id:'pile_o_coins', 
        name: "Pile o Coins", 
        courage: 10,
        permanent: true,
        abilities: [
            {ability: 'guild_member', baseTurns: -1, enabled: true, permanent: true}
        ],
        x: -384,
        y: -192
    }),


   
    


    // TIER 2

    new Treasure({
        id:'ancient_runestone', 
        name: 'Ancient Runestone', 
        courage: 12,
        tier: 2,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'wield', base: 1}
        ],
        x: -416,
        y: -14816
    }),
    new Treasure({
        id:'awl_of_the_master', 
        name: "Awl of the Master", 
        courage: 12,
        tier: 2,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'craft', base: 4}
        ],
        x: -384,
        y: -544
    }),
    new Treasure({
        id:'excalibur', 
        name: "Excalibur", 
        courage: 10,
        tier: 2,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'might', base: 5}
        ],
        x: -96,
        y: -9792
    }),
    new Treasure({
        id:'alatyr', 
        name: "Alatyr", 
        courage: 10,
        tier: 2,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'vigor', base: .5}
        ],
        x: -96,
        y: -14976
    }),
    new Treasure({
        id:'snowball', 
        name: "Snowball", 
        courage: 13,
        tier: 2,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'momentum', base: 2}
        ],
        x: -320,
        y: -5600
    }),
    new Treasure({
        id:'hidden_relic', 
        name: "Hidden Relic", 
        courage: 11,
        tier: 2,
        weight: 4,
        effects: [
            {effect: 'vex', amount: 3, turns: -1}
        ],
        x: -320,
        y: -766
    }),
    new Treasure({
        id:'cross_of_coronado', 
        name: "Cross of Coronado", 
        courage: 13,
        tier: 2,
        weight: 1,
        effects: [
            {effect: 'intercept', amount: 4, turns: -1}
        ],
        x: -320,
        y: -5760
    }),
    new Treasure({
        id:'black_vial', 
        name: "Black Vial", 
        courage: 15,
        tier: 2,
        weight: 3,
        effects: [
            {effect: 'fatality', amount: 1.1, turns: 1, persist: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 4, per: 'combat', once: true, activated: false},
        x: -384,
        y: -4064
    }),
    new Treasure({
        id:'enigma_scroll', 
        name: 'Enigma Scroll', 
        courage: 12,
        tier: 2,
        weight: 2,
        permanent: true,
        effects: [
            {effect: 'mystery', base: 2}
        ],
        x: -448,
        y: -352
    }),
    new Treasure({
        id:'prisma', 
        name: 'Prisma', 
        courage: 10,
        tier: 2,
        weight: 4,
        permanent: true,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'base', value: 12},
        ],
        x: -64,
        y: -10048
    }),
    new Treasure({
        id:'dark_rift', 
        name: "Dark Rift", 
        courage: 13,
        tier: 2,
        weight: 1,
        abilities: [
            {ability: 'unreachable', turns: 1, enabled: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 2, per: 'combat', once: true, activated: false},
        x: -384,
        y: -5728
    }),
    new Treasure({
        id:'time_potion', 
        name: "Time Potion", 
        courage: 11,
        tier: 2,
        weight: 4,
        permanent: false,
        abilities: [
            {ability: 'prepared', baseTurns: -1, enabled: true, permanent: true}
        ],
        x: -128,
        y: -2336
    }),
    new Treasure({
        id:'bracelet', 
        name: "Bracelet", 
        courage: 13,
        tier: 2,
        weight: 3,
        permanent: false,
        abilities: [
            {ability: 'bless', baseTurns: -1, enabled: true, permanent: true}
        ],
        x: -480,
        y: -15488
    }),
    new Treasure({
        id:'locket', 
        name: "Locket", 
        courage: 10,
        tier: 2,
        actions: [
            {action: 'draw', value: 2}
        ],
        trigger: {counter: 0, when: 'attackCardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        x: -0,
        y: -13056
    }),
    new Treasure({
        id:'pendant', 
        name: "Pendant", 
        weight: 4,
        effects: [
            {effect: 'might', amount: 4, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'attackCardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        x: -320,
        y: -14944
    }),
    new Treasure({
        id:'medallion', 
        name: "Medallion", 
        tier: 2,
        weight: 4,
        effects: [
            {effect: 'solid', amount: 4, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'toolCardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        x: -192,
        y: -14880
    }),
    new Treasure({
        id:'ornamental_staff', 
        name: "Ornamental Staff", 
        tier: 2,
        weight: 4,
        effects: [
            {effect: 'conjure', amount: 6, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'magicCardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        x: -480,
        y: -9822
    }),
    new Treasure({
        id:'greased_cogwheel', 
        name: "Greased Cogwheel", 
        courage: 12,
        tier: 2,
        weight: 3,
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 2},
            {action: 'draw', value: 2}
        ],
        trigger: {counter: 0, when: 'toolCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -32,
        y: -0
    }), 
    new Treasure({
        id:'hammerblade', 
        name: "Hammerblade", 
        courage: 12,
        tier: 2,
        weight: 2,
        effects: [
            {effect: 'punch', amount: .75, turns: 2, persist: true}
        ],
        trigger: {counter: 0, when: 'attackCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -128,
        y: -10016
    }), 
    new Treasure({
        id:'storm_staff', 
        name: "Storm Staff", 
        courage: 12,
        tier: 2,
        weight: 2,
        effects: [
            {effect: 'sorcery', amount: .75, turns: 2, persist: true}
        ],
        trigger: {counter: 0, when: 'magicCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -288,
        y: -9792
    }), 
    new Treasure({
        id:'mark_of_narfallow', 
        name: "Mark of Narfallow", 
        courage: 12,
        tier: 2,
        weight: 2,
        effects: [
            {effect: 'craft', amount: 6, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'toolCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -384,
        y: -14880
    }), 
    new Treasure({
        id:'unending_hourglass', 
        name: "Unending Hourglass", 
        courage: 13,
        tier: 2,
        weight: 2,
        abilities: [
            {ability: 'hypnotize', turns: 1, enabled: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 5, per: 'combat', once: true, activated: false},
        x: -162,
        y: -544
    }),
    new Treasure({
        id:'bronze_helm', 
        name: "Bronze Helm", 
        courage: 13,
        tier: 2,
        weight: 4,
        abilities: [
            {ability: 'tank', turns: 2, enabled: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 2, per: 'combat', once: true, activated: false},
        x: -32,
        y: -13794
    }),
    new Treasure({
        id:'strongbox', 
        name: "Strongbox", 
        courage: 13,
        tier: 2,
        weight: 4,
        abilities: [
            {ability: 'stockpile', turns: 2, enabled: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 4, per: 'combat', once: true, activated: false},
        x: -192,
        y: -418
    }),
    new Treasure({
        id:'charged_wand', 
        name: "Charged Wand", 
        courage: 10,
        tier: 2,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'lightning', base: 5}
        ],
        x: -128,
        y: -10112
    }),
    new Treasure({
        id:'charged_gauntlet', 
        name: "Charged Gauntlet", 
        weight: 4,
        effects: [
            {effect: 'lightning', amount: 4, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'magicCardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        x: -354,
        y: -15520
    }),
    new Treasure({
        id:'thunder_cloak', 
        name: "Thunder Cloak", 
        courage: 12,
        tier: 2,
        weight: 2,
        effects: [
            {effect: 'thunder', amount: .75, turns: 2, persist: true}
        ],
        trigger: {counter: 0, when: 'magicCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -480,
        y: -12352
    }), 
    new Treasure({
        id:'myriad_staff', 
        name: "Myriad Staff", 
        courage: 15,
        tier: 2,
        weight: 1,
        actions: [
            {action: 'addCard', value: 1, what: 'unstable_attack', to: 'drawCards', permanent: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: true, activated: false},
        x: -32,
        y: -10208
    }), 
    new Treasure({
        id:'red_envelope', 
        name: 'Red Envelope', 
        courage: 13,
        weight: 1,
        permanent: true,
        effects: [
            {effect: 'retain', base: 1}
        ],
        x: -480,
        y: -320
    }),
    new Treasure({
        id:'magical_lantern', 
        name: 'Magical Lantern', 
        courage: 15,
        weight: 2,
        permanent: true,
        abilities: [
            {ability: 'amplify', turns: -1, enabled: true}
        ],
        x: -320,
        y: -320
    }),


    // TIER 3

    new Treasure({
        id:'hawthorn_staff', 
        name: "Hawthorn Staff", 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'courage', value: 20},
            {action: 'stat', what: 'health', key: 'max', value: 5},
            {action: 'stat', what: 'health', key: 'current', value: 5}
        ],
        x: -352,
        y: -10112
    }),
    new Treasure({
        id:'hemlock_staff', 
        name: "Hemlock Staff", 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'courage', value: 15},
            {action: 'stat', what: 'health', key: 'max', value: 15},
            {action: 'stat', what: 'health', key: 'current', value: 15}
        ],
        x: -192,
        y: -9792
    }),
    new Treasure({
        id:'hickory_staff', 
        name: "Hickory Staff", 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'courage', value: 10},
            {action: 'stat', what: 'health', key: 'max', value: 25},
            {action: 'stat', what: 'health', key: 'current', value: 25}
        ],
        x: -256,
        y: -9568
    }),
    new Treasure({
        id:'falcon_feather', 
        name: "Falcon Feather", 
        courage: 14,
        tier: 3,
        weight: .8,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1},
            {action: 'stat', what: 'health', key: 'current', value: -5},
            {action: 'stat', what: 'health', key: 'max', value: -5}
            
        ],
        x: -288,
        y: -2208
    }),
    new Treasure({
        id:'hummingbird_feather', 
        name: "Hummingbird Feather", 
        courage: 14,
        tier: 3,
        weight: .8,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1},
            {action: 'stat', what: 'courage', value: -4},
        ],
        x: -288,
        y: -2144
    }),
    new Treasure({
        id:'swift_feather', 
        name: "Swift Feather", 
        courage: 14,
        tier: 3,
        weight: .8,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1},
            {action: 'stat', what: 'shimmer', key: 'current', value: -1},
            {action: 'stat', what: 'sparkle', key: 'current', value: -1},
            {action: 'stat', what: 'aura', key: 'current', value: -1},
        ],
        x: -288,
        y: -1888
    }),
    new Treasure({
        id:'labrys_of_zeus', 
        name: "Labrys of Zeus", 
        courage: 15,
        tier: 3,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'punch', base: .25}
        ],
        x: -96,
        y: -10240
    }),
    new Treasure({
        id:'philosopher_stone', 
        name: "Philosopher Stone", 
        courage: 15,
        tier: 3,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'muster', base: 6}
        ],
        x: -480,
        y: -672
    }),
    new Treasure({
        id:'crystalized_wand', 
        name: 'Crystalized Wand', 
        courage: 15,
        tier: 3,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'sorcery', base: .4}
        ],
        x: -448,
        y: -10272
    }),
    new Treasure({
        id:'signet_ring', 
        name: 'Signet Ring', 
        courage: 13,
        tier: 3,
        weight: 1,
        permanent: true,
        effects: [
            {effect: 'wisdom', base: 4}
        ],
        x: -416,
        y: -13088
    }),
    new Treasure({
        id:'death_vial', 
        name: "Death Vial", 
        courage: 15,
        tier: 3,
        weight: 2,
        effects: [
            {effect: 'fatality', amount: 1.2, turns: 1, persist: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 3, per: 'combat', once: true, activated: false},
        x: -192,
        y: -4032
    }),
    new Treasure({
        id:'gold_leaf', 
        name: "Gold Leaf", 
        courage: 13,
        tier: 3,
        weight: 3,
        actions: [
            {action: 'ensharden', type: 'random', select: 3, from: 'drawCards', random: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: true, activated: false},
        x: -96,
        y: -2752
    }),
    new Treasure({
        id:'thunder_blade', 
        name: "Thunder Blade", 
        courage: 15,
        tier: 3,
        weight: 3,
        permanent: true,
        effects: [
            {effect: 'thunder', base: .25}
        ],
        x: -128,
        y: -9824
    }),
    new Treasure({
        id:'organic_shield', 
        name: "Organic Shield", 
        tier: 3,
        weight: 2,
        courage: 15,
        permanent: true,
        effects: [
            {effect: 'stout', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -384,
        y: -14976
    }), 
    new Treasure({
        id:'organic_armor', 
        name: "Organic Armor", 
        tier: 3,
        weight: 2,
        courage: 15,
        permanent: true,
        effects: [
            {effect: 'muster', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -480,
        y: -13440
    }),
    new Treasure({
        id:'organic_staff', 
        name: "Organic Staff", 
        tier: 3,
        weight: 2,
        courage: 15,
        permanent: true,
        effects: [
            {effect: 'summon', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -288,
        y: -10016
    }),  


    // TIER 4
    new Treasure({
        id:'luminous_crown', 
        name: "Luminous Crown", 
        courage: 20,
        tier: 4,
        weight: .5,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 1}
        ],
        x: -160,
        y: -14080
    }),
    new Treasure({
        id:'resplendent_helm', 
        name: "Resplendent Helm", 
        courage: 20,
        tier: 4,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'punch', base: .35}
        ],
        x: -256,
        y: -14112
    }),
    new Treasure({
        id:'majestic_headpiece', 
        name: "Majestic Headpiece", 
        courage: 20,
        tier: 4,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'thunder', base: .35}
        ],
        x: -448,
        y: -14048
    }),
    new Treasure({
        id:'brilliant_tiara', 
        name: "Brilliant Tiara", 
        courage: 20,
        tier: 4,
        weight: 5,
        permanent: true,
        effects: [
            {effect: 'might', base: 9}
        ],
        x: -384,
        y: -14144
    }),
    new Treasure({
        id:'lavish_coronet', 
        name: "Lavish Coronet", 
        courage: 20,
        tier: 4,
        weight: 5,
        permanent: true,
        effects: [
            {effect: 'lightning', base: 9}
        ],
        x: -256,
        y: -14080
    }),
    new Treasure({
        id:'winged_cloak', 
        name: "Winged Cloak", 
        courage: 20,
        tier: 4,
        weight: .5,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1}
        ],
        x: -192,
        y: -13120
    }),
    new Treasure({
        id:'winged_mantle', 
        name: "Winged Mantle", 
        courage: 20,
        tier: 4,
        weight: 6,
        permanent: true,
        effects: [
            {effect: 'solid', base: 10}
        ],
        x: -320,
        y: -13120
    }),
    new Treasure({
        id:'winged_veil', 
        name: "Winged Veil", 
        courage: 20,
        tier: 4,
        weight: 7,
        permanent: true,
        effects: [
            {effect: 'regen', base: 8}
        ],
        x: -96,
        y: -13088
    }),
    new Treasure({
        id:'winged_shroud', 
        name: "Winged Shroud", 
        courage: 20,
        tier: 4,
        weight: 4,
        permanent: true,
        effects: [
            {effect: 'momentum', base: 4}
        ],
        x: -160,
        y: -13088
    }),
    new Treasure({
        id:'eternal_sword', 
        name: "Eternal Sword", 
        tier: 4,
        weight: 2,
        courage: 20,
        permanent: true,
        effects: [
            {effect: 'might', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -0,
        y: -9856
    }), 
    new Treasure({
        id:'eternal_shield', 
        name: "Eternal Shield", 
        tier: 4,
        weight: 2,
        courage: 20,
        permanent: true,
        effects: [
            {effect: 'solid', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -256,
        y: -14976
    }),
    new Treasure({
        id:'eternal_staff', 
        name: "Eternal Staff", 
        tier: 4,
        weight: 2,
        courage: 20,
        permanent: true,
        effects: [
            {effect: 'lightning', amount: 2, turns: -1, persist: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: false, activated: false},
        x: -480,
        y: -10016
    }),


    /* unaddable */
    new Treasure({
        id:'artisanal_boots', 
        name: "Artisanal Boots", 
        courage: 15,
        tier: 3,
        weight: 4,
        permanent: true,
        owned: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1}
        ],
        x: -32,
        y: -12704
    }),
    new Treasure({
        id:'artisanal_chestplate', 
        name: "Artisanal Chestplate", 
        courage: 15,
        tier: 3,
        weight: 4,
        permanent: true,
        owned: true,
        effects: [
            {effect: 'solid', base: 5}
        ],
        x: -192,
        y: -12672
    }),
    new Treasure({
        id:'artisanal_sword', 
        name: "Artisanal Sword", 
        courage: 15,
        tier: 3,
        weight: 4,
        permanent: true,
        owned: true,
        effects: [
            {effect: 'might', base: 5}
        ],
        x: -416,
        y: -8800
    }),
    new Treasure({
        id:'artisanal_hat', 
        name: "Artisanal Hat", 
        courage: 15,
        tier: 3,
        weight: 4,
        permanent: true,
        owned: true,
        effects: [
            {effect: 'lightning', base: 8}
        ],
        x: -352,
        y: -12640
    }),

    

];

export default function Treasures() {

    let treasures = ALL_TREASURES;
    let shards = ALL_SHARDS;
    let candies = ALL_CANDY;

    return {
        treasures,
        shards,
        candies
    }

}
