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
        desc,
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
        this.desc = desc;
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
        dmg: [25],
        weight: 7,
        target: 'monster',
        x: -384,
        y: -3456
    }),
    new Candy({
        id:'circus_peanuts', 
        name: 'Circus Peanuts', 
        weight: 7,
        blk: [20],
        x: -480,
        y: -3456
    }),
    new Candy({
        id:'rock_candy', 
        name: 'Rock Candy', 
        courage: 3,
        weight: 3,
        armor: [15],
        combatOnly: false,
        x: -448,
        y: -2464
    }),

    // magic
    new Candy({
        id:'blueberry_hard_candy', 
        name: 'Blueberry Hard Candy', 
        weight: 6,
        magic: [{type: 'rainbow', amount: 14}],
        x: -64,
        y: -14816
    }),
    new Candy({
        id:'grape_hard_candy', 
        name: 'Grape Hard Candy', 
        magic: [{type: 'dark', amount: 14}],
        x: -128,
        y: -14816
    }),
    new Candy({
        id:'cherry_hard_candy', 
        name: 'Cherry Hard Candy', 
        magic: [{type: 'chaos', amount: 14}],
        x: -32,
        y: -14816
    }),
    new Candy({
        id:'lime_hard_candy', 
        name: 'Lime Hard Candy', 
        magic: [{type: 'elemental', amount: 14}],
        x: -96,
        y: -14816
    }),
    new Candy({
        id:'orange_hard_candy', 
        name: 'Orange Hard Candy', 
        courage: 3,
        weight: 4,
        magic: [{type: 'aligned', amount: 14}],
        x: -0,
        y: -14816
    }),
    new Candy({
        id:'mystery_hard_candy', 
        name: 'Mystery Hard Candy', 
        weight: 6,
        magic: [{type: 'random', amount: 18}],
        x: -160,
        y: -14816
    }),

    // actions
    new Candy({
        id:'caramel_creme', 
        name: 'Caramel Creme', 
        courage: 1,
        actions: [
            {action: 'playOldest'},
        ],
        x: -160,
        y: -3870
    }),
    new Candy({
        id:'marshmallows', 
        name: 'Marshmallows', 
        actions: [
            {action: 'transmute', select: 3, from: 'handCards'},
        ],
        x: -256,
        y: -3872
    }),
    new Candy({
        id:'cherry_cordial', 
        name: 'Cherry Cordial', 
        weight: 4,
        actions: [
            {action: 'draw', value: 3},
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
            {action: 'ensharden', type: 'flame', select: 2, from: 'handCards', random: false}
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
            {action: 'ensharden', type: 'frost', select: 2, from: 'handCards', random: false}
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
            {action: 'ensharden', type: 'random', select: 2, from: 'handCards', random: false}
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
            {action: 'addCard', value: 2, what: 'energize', to: 'handCards'}
        ],
        x: -256,
        y: -3584
    }),
    new Candy({
        id:'peanut_butter_cup', 
        name: 'Peanut Butter Cup', 
        weight: 4,
        actions: [
            {action: 'addCard', value: 2, what: 'boost', to: 'handCards'}
        ],
        x: -482,
        y: -3744
    }),
    new Candy({
        id:'blueberry_lollipop', 
        name: 'Blueberry Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 6}],
        actions: [
            {action: 'addCard', value: 1, what: 'rainbow_converter', to: 'handCards'}
        ],
        x: -192,
        y: -1152
    }),
    new Candy({
        id:'cherry_lollipop', 
        name: 'Cherry Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 6}],
        actions: [
            {action: 'addCard', value: 1, what: 'chaos_converter', to: 'handCards'}
        ],
        x: -192,
        y: -1088
    }),
    new Candy({
        id:'grape_lollipop', 
        name: 'Grape Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 6}],
        actions: [
            {action: 'addCard', value: 1, what: 'dark_converter', to: 'handCards'}
        ],
        x: -192,
        y: -1216
    }),
    new Candy({
        id:'lime_lollipop', 
        name: 'Lime Lollipop', 
        courage: 3,
        weight: 2,
        magic: [{type: 'aligned', amount: 6}],
        actions: [
            {action: 'addCard', value: 1, what: 'elemental_converter', to: 'handCards'}
        ],
        x: -192,
        y: -1280
    }),
    new Candy({
        id:'cotton_candy', 
        name: 'Cotton Candy', 
        weight: 7,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'health', key: 'current', value: 20}
        ],
        x: -256,
        y: -2080
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
        weight: 4,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 2}
        ],
        x: -32,
        y: -1026
    }),
    new Candy({
        id:'blueberry_gumdrop', 
        name: 'Blueberry Gumdrop', 
        courage: 3,
        weight: 4,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'sparkle', key: 'current', value: 2}
        ],
        x: -32,
        y: -898
    }),
    new Candy({
        id:'cherry_gumdrop', 
        name: 'Cherry Gumdrop', 
        courage: 3,
        weight: 4,
        combatOnly: false,
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 2}
        ],
        x: -32,
        y: -994
    }),

    // effects
    new Candy({
        id:'chocolate_fudge', 
        name: 'Chocolate Fudge', 
        effects: [
            {effect: 'solid', amount: 2, turns: -1}
        ],
        x: -384,
        y: -3776
    }),
    new Candy({
        id:'white_fudge', 
        name: 'White Fudge', 
        effects: [
            {effect: 'solid', amount: 10, turns: 1}
        ],
        x: -352,
        y: -3776
    }),
    new Candy({
        id:'chocolate_bar', 
        name: 'Chocolate Bar', 
        effects: [
            {effect: 'might', amount: 1, turns: -1}
        ],
        x: -320,
        y: -834
    }),
    new Candy({
        id:'white_chocolate_bar', 
        name: 'White Chocolate Bar', 
        effects: [
            {effect: 'might', amount: 5, turns: 1}
        ],
        x: -320,
        y: -962
    }),
    new Candy({
        id:'dark_truffle', 
        name: 'Dark Truffle', 
        effects: [
            {effect: 'conjure', amount: 1, turns: -1}
        ],
        x: -418,
        y: -4386
    }),
    new Candy({
        id:'white_truffle', 
        name: 'White Truffle', 
        effects: [
            {effect: 'conjure', amount: 8, turns: 1}
        ],
        x: -418,
        y: -4514
    }),
    new Candy({
        id:'salted_caramel', 
        name: 'Salted Caramel', 
        courage: 3,
        weight: 4,
        effects: [
            {effect: 'rowdy', amount: 50, turns: 1}
        ],
        x: -96,
        y: -3808
    }),
    new Candy({
        id:'sour_bears', 
        name: 'Sour Bears', 
        weight: 4,
        effects: [
            {effect: 'vex', amount: 1, turns: -1}
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
        id:'salt_water_taffy', 
        name: 'Salt Water Taffy', 
        weight: 7,
        effects: [
            {effect: 'regen', amount: 5, turns: -1}
        ],
        x: -320,
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
        weight: 2,
        abilities: [
            {ability: 'hypnotize', turns: 1, enabled: true}
        ],
        x: -256,
        y: -736
    }),
    
];

class Treasure {
    constructor({
       id,
       type = 'treasure',
       name,
       desc,
       weight = 5,
       tier = 1,
       courage = 9,
       trigger = {counter: -1, when: 'turns', at: 3, per: 'combat', once: false},
       effects = [],
       abilities = [],
       actions = [],
       x = 0,
       y = 0,
       permanent = false
    }) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.desc = desc;
        this.owned = false;
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

        // optional: when the treasure should fire
        trigger: {counter: 0, when: 'cardsPlayed', at: 3, per: 'turn', once: false, activated: false},
        trigger: {counter: 0, when: 'attackCardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        trigger: {counter: 0, when: 'turns', at: 2, per: 'combat', once: true, activated: false},

        // treasure effects and abilities work just like card effects and abilities

        effects: [
            {effect: 'cunning', amount: 3, turns: -1},
        ],

        // use turns for counting turns normally, use baseTurns only for -1 (permanent this combat)

        abilities: [
            {ability: 'panic', enabled: true, turns: 10, persist: true}, // this will persist between combats
            {ability: 'panic', enabled: true, baseTurns: -1, permanent: true}, // this will apply the effect permanently
        ]
    }),
    */

    // TIER 1
    new Treasure({
        id:'burning_ruby', 
        name: 'Burning Ruby',
        permanent: true,
        effects: [
            {effect: 'mastery', base: 1}
        ],
        x: -64,
        y: -674
    }),
    new Treasure({
        id:'gleaming_emerald', 
        name: 'Gleaming Emerald', 
        permanent: true,
        effects: [
            {effect: 'fierce', base: 10}
        ],
        x: -32,
        y: -674
    }),
    new Treasure({
        id:'twinkling_sapphire', 
        name: 'Twinkling Sapphire',
        permanent: true, 
        effects: [
            {effect: 'rowdy', base: 1}
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
            {effect: 'conjure', base: 1}
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
            {effect: 'summon', base: 1}
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
            {effect: 'arcane', base: 2}
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
            {effect: 'solid', base: 1}
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
            {effect: 'stout', base: 3}
        ],
        x: -160,
        y: -15008
    }),
    new Treasure({
        id:'dew_of_yarva', 
        name: "Dew of Yarva", 
        permanent: true,
        effects: [
            {effect: 'heal', base: 8}
        ],
        x: -480,
        y: -2752
    }),
    new Treasure({
        id:'dew_of_lunya', 
        name: "Dew of Lunya", 
        permanent: true,
        effects: [
            {effect: 'regen', base: 4}
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
            {effect: 'retaliate', base: .2}
        ],
        x: -0,
        y: -5344
    }),
    new Treasure({
        id:'lemon', 
        name: 'Lemon', 
        courage: 8,
        weight: 7,
        permanent: true,
        effects: [
            {effect: 'lemonade', base: 2}
        ],
        x: -0,
        y: -4096
    }),
    new Treasure({
        id:'pricket', 
        name: 'Pricket', 
        courage: 8,
        weight: 7,
        permanent: true,
        effects: [
            {effect: 'spikes', base: .2}
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
        id:'amulet', 
        name: "Amulet", 
        weight: 8,
        abilities: [
            {ability: 'protection', turns: 1, enabled: true}
        ],
        trigger: {counter: 0, when: 'cardsPlayed', at: 5, per: 'turn', once: false, activated: false},
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
            {action: 'stat', what: 'sparkle', key: 'current', value: 5}
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
            {action: 'stat', what: 'shimmer', key: 'current', value: 5}
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
            {action: 'stat', what: 'aura', key: 'current', value: 5}
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
            {action: 'stat', what: 'mana', key: 'current', value: 1},
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
            {action: 'stat', what: 'speed', key: 'current', value: 1},
        ],
        trigger: {counter: 0, when: 'cardsPlayed', at: 10, per: 'combat', once: false, activated: false},
        x: -64,
        y: -320
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
            {effect: 'craft', base: 2}
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
            {effect: 'might', base: 2}
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
            {effect: 'vigor', base: 1}
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
            {effect: 'momentum', base: 1}
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
            {effect: 'vex', amount: 1, turns: -1}
        ],
        x: -320,
        y: -766
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
            {effect: 'mystery', base: 1}
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
            {action: 'stat', what: 'rainbow', key: 'base', value: 8},
        ],
        x: -64,
        y: -10048
    }),
    new Treasure({
        id:'dark_rift', 
        name: "Dark Rift", 
        courage: 13,
        tier: 2,
        weight: 3,
        abilities: [
            {ability: 'unreachable', turns: 1, enabled: true}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: true, activated: false},
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
            {effect: 'might', amount: 1, turns: -1, persist: true}
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
            {effect: 'solid', amount: 1, turns: -1, persist: true}
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
            {effect: 'conjure', amount: 2, turns: -1, persist: true}
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
            {action: 'stat', what: 'mana', key: 'current', value: 1},
            {action: 'draw', value: 1}
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
            {effect: 'punch', amount: .5, turns: 2, persist: true}
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
            {effect: 'sorcery', amount: .5, turns: 2, persist: true}
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
            {effect: 'craft', amount: 2, turns: -1, persist: true}
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
        weight: 3,
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


    // TIER 3

    new Treasure({
        id:'hawthorn_staff', 
        name: "Hawthorn Staff", 
        courage: 15,
        tier: 3,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 1}
        ],
        x: -352,
        y: -10112
    }),
    new Treasure({
        id:'hemlock_staff', 
        name: "Hemlock Staff", 
        courage: 15,
        tier: 3,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 1}
        ],
        x: -192,
        y: -9792
    }),
    new Treasure({
        id:'hickory_staff', 
        name: "Hickory Staff", 
        courage: 15,
        tier: 3,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 1}
        ],
        x: -256,
        y: -9568
    }),
    new Treasure({
        id:'falcon_feather', 
        name: "Falcon Feather", 
        courage: 14,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1}
        ],
        x: -288,
        y: -2208
    }),
    new Treasure({
        id:'hummingbird_feather', 
        name: "Hummingbird Feather", 
        courage: 14,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1}
        ],
        x: -288,
        y: -2144
    }),
    new Treasure({
        id:'swift_feather', 
        name: "Swift Feather", 
        courage: 14,
        tier: 3,
        weight: 2,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 1}
        ],
        x: -288,
        y: -1888
    }),
    new Treasure({
        id:'labrys_of_zeus', 
        name: "Labrys of Zeus", 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        effects: [
            {effect: 'punch', base: .2}
        ],
        x: -96,
        y: -10240
    }),
    new Treasure({
        id:'philosopher_stone', 
        name: "Philosopher Stone", 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        effects: [
            {effect: 'muster', base: 2}
        ],
        x: -480,
        y: -672
    }),
    new Treasure({
        id:'crystalized_wand', 
        name: 'Crystalized Wand', 
        courage: 15,
        tier: 3,
        weight: 2,
        permanent: true,
        effects: [
            {effect: 'sorcery', base: .3}
        ],
        x: -448,
        y: -10272
    }),
    new Treasure({
        id:'signet_ring', 
        name: 'Signet Ring', 
        courage: 13,
        tier: 3,
        weight: 2,
        permanent: true,
        effects: [
            {effect: 'wisdom', base: 3}
        ],
        x: -416,
        y: -13088
    }),
    new Treasure({
        id:'death_vial', 
        name: "Death Vial", 
        courage: 15,
        tier: 3,
        weight: 1,
        effects: [
            {effect: 'fatality', amount: 1.3, turns: 1, persist: true}
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
        weight: 2,
        actions: [
            {action: 'ensharden', type: 'random', select: 3, from: 'drawCards', random: false}
        ],
        trigger: {counter: 0, when: 'turns', at: 1, per: 'combat', once: true, activated: false},
        x: -96,
        y: -2752
    }),


    // TIER 4
    new Treasure({
        id:'luminous_crown', 
        name: "Luminous Crown", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 2},
            {action: 'stat', what: 'health', key: 'base', value: -7}
        ],
        x: -160,
        y: -14080
    }),
    new Treasure({
        id:'resplendent_helm', 
        name: "Resplendent Helm", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 2},
            {action: 'stat', what: 'sparkle', key: 'current', value: -5}
        ],
        x: -256,
        y: -14112
    }),
    new Treasure({
        id:'majestic_headpiece', 
        name: "Majestic Headpiece", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 2},
            {action: 'stat', what: 'shimmer', key: 'current', value: -5}
        ],
        x: -448,
        y: -14048
    }),
    new Treasure({
        id:'brilliant_tiara', 
        name: "Brilliant Tiara", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 2},
            {action: 'stat', what: 'aura', key: 'current', value: -5}
        ],
        x: -384,
        y: -14144
    }),
    new Treasure({
        id:'lavish_coronet', 
        name: "Lavish Coronet", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'mana', key: 'base', value: 2},
            {action: 'stat', what: 'courage', value: -7}
        ],
        x: -256,
        y: -14080
    }),
    new Treasure({
        id:'winged_cloak', 
        name: "Winged Cloak", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 2},
            {action: 'stat', what: 'sparkle', key: 'current', value: -5}
        ],
        x: -192,
        y: -13120
    }),
    new Treasure({
        id:'winged_mantle', 
        name: "Wingled Mantle", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 2},
            {action: 'stat', what: 'shimmer', key: 'current', value: -5}
        ],
        x: -320,
        y: -13120
    }),
    new Treasure({
        id:'winged_veil', 
        name: "Winged Veil", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 2},
            {action: 'stat', what: 'aura', key: 'current', value: -5}
        ],
        x: -96,
        y: -13088
    }),
    new Treasure({
        id:'winged_shroud', 
        name: "Winged Shroud", 
        courage: 20,
        tier: 4,
        weight: 1,
        permanent: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'base', value: 2},
            {action: 'stat', what: 'courage', value: -7}
        ],
        x: -160,
        y: -13088
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
