import Treasures from './treasures.js';
import Util from './utils.js';
const util = new Util();

class Cards {
    constructor({
        id,
        name,
        type,
        target = false,
        drawn = false,
        addable = true,
        playable = true,
        playing = false,
        solo = false,       // if true, card can only be played if it's the only card in hand
        pack = 'basic',     // basic, combine, magic, damage, cycle
        tier = 'common',    // common, uncommon, rare, legendary
        weight = 5,         // can be any positive value, but we tend to use .1 - 10 as our values. can go above 10 and can go below .1 if needed.
        courage = 2,        // how much courage this card costs in the shop
        retain = false,     // card is not discarded when turn is ended
        tempRetain = false,
        use = -1,           // card will vanish after this many uses
        expire = -1,        // card will expire after this many turns
        vanish = false,     // card disappears after usage
        ephemeral = false,  // card disappears if not used
        natural = false,    // functions as innate
        breakable = false,  // card is permanently removed from deck when used
        linger = -1,        // card is not discarded when used this many times
        age = 0,            // when card is retained it ages 1
        mana,
        baseMana = mana,
        dmg = [],
        blk = [],
        armor = [],
        magic = [],
        desc = '',
        additionalDesc = '',
        descOverride = '',  // completely overrides the description with a custom one
        slotDesc = '',
        slots = 0,
        shards = [],
        shardUpgrades = {},
        iceShardUpgrades = {},
        fireShardUpgrades = {},
        bothShardUpgrades = {},
        effects = [],
        abilities = [],
        actions = [],
        combine = false,
        draw = false,
        discard = false,
        destroy = false,
        shimmer = false,
        sparkle = false,
        aura = false,
        trade = [],
        weapon = false,
        sound = false
    }) {
        this.guid = '';
        this.id = id;
        this.name = name;
        this.type = type;
        this.target = target;
        this.drawn = drawn;
        this.addable = addable;
        this.playable = playable;
        this.playing = playing;
        this.solo = solo;
        this.pack = pack;
        this.tier = tier;
        this.weight = weight;
        this.courage = courage;
        this.retain = retain;
        this.tempRetain = tempRetain;
        this.use = use;
        this.expire = expire;
        this.vanish = vanish;
        this.ephemeral = ephemeral;
        this.natural = natural;
        this.breakable = breakable;
        this.linger = linger;
        this.age = age;
        this.mana = mana;
        this.baseMana = baseMana;
        this.dmg = dmg;
        this.blk = blk;
        this.armor = armor;
        this.magic = magic;
        this.desc = desc;
        this.additionalDesc = additionalDesc;
        this.descOverride = descOverride;
        this.slotDesc = slotDesc;
        this.slots = slots;
        this.shards = shards;
        this.shardUpgrades = shardUpgrades;
        this.iceShardUpgrades = iceShardUpgrades;
        this.fireShardUpgrades = fireShardUpgrades;
        this.bothShardUpgrades = bothShardUpgrades;
        this.effects = effects;
        this.abilities = abilities;
        this.actions = actions;
        this.combine = combine;
        this.draw = draw;
        this.discard = discard;
        this.destroy = destroy;
        this.shimmer = shimmer;
        this.sparkle = sparkle;
        this.aura = aura;
        this.trade = trade;
        this.weapon = weapon;
        this.sound = sound;
    }
}

const ALL_CARDS = [

    /* CARD EXAMPLE
    new Cards({

        // types: attack, tool, magic, ability

        id: 'strike', name: 'Strike', type: 'attack', mana: 2, target: 'monster', courage: 3,
        dmg: [6, 8],
        blk: [10, 10],
        armor: 10,
        magic: [{type: 'rainbow|chaos|elemental|dark', amount: 40}], 
        slots: 2,

        // turns: -1 will set effect permanent this combat, otherwise it will count down

        effects: [
            {effect: 'cunning', amount: 3, turns: -1},
            {effect: 'cunning', amount: 3, turns: 3, persist: true},
            {effect: 'vigor', amount: -8, hex: true},
            {effect: 'might', amount: -8, hex: true}
        ],

        // use turns for counting turns normally, use baseTurns only for -1 (permanent this combat)

        abilities: [
            {ability: 'panic', enabled: true, turns: 10, persist: true},
            {ability: 'panic', enabled: true, baseTurns: -1},
            {ability: 'unreachable', enabled: true, turns: 2},
            {ability: 'unreachable', enabled: false, hex: true}
        ],


        actions: [
            {action: 'addCard', value: 1, what: 'destroy', to: 'handCards', optional: true},
            {action: 'addCard', value: 2, what: 'strike', to: 'drawCards'},
            {action: 'addCard', value: 1, what: 'strike', to: 'discardCards'},
            {action: 'draw', value: 2},
            {action: 'discard', numbevaluer: 2}
            {action: 'playOldest'}
        ],

        // the default shardUpgrades are used if there are no specific ice or fire shard upgrades

        shardUpgrades: {
            retain: true,
            mana: 0,
            magic: [{type: 'dark', amount: 14}]
        }

        // ice and fire shard upgrades replace the normal shard upgrades. if there are two of the 
        // same shard, the _2 values are used instead of the normal values.
        
        iceShardUpgrades: {
            retain: true,
            blk: [3],
            blk_2: [6],
            vanish: true,
            vanish_2: false,
            mana: 0,
            additionalDesc: 'Ice effects',
            additionalDesc_2: 'Ultimate ice',
        },
        fireShardUpgrades: {
            dmg: [6, 6],
            dmg_2: [8, 8],
            additionalDesc: 'Fire effects',
            additionalDesc_2: 'Ultimate fire',
            effects: [
                {effect: 'might', amount: 5, turns: -1},
                {effect: 'might', amount: -2, hex: true}
            ],
            effects_2: [
                {effect: 'might', amount: 7, turns: -1},
                {effect: 'might', amount: -3, hex: true},
            ]
        },

        // if there is one ice and one fire upgrade, or if there are no doubld-fire or double-ice effects (_2) both will be used instead

        bothShardUpgrades: {
            retain: true,
            blk: [4],
            vanish: true,
            mana: 0,
            additionalDesc: 'Both effects',
            dmg: [7, 8],
            effects: [
                {effect: 'might', amount: 7, turns: -1},
                {effect: 'might', amount: -3, hex: true}
            ]
        },

        // if card is combinable and it is combined with another card, the normal atts are ignored
        // and the combine atts get used instead. note that if you have shards on the card you have
        // to also add shard effects into the combine object for them to be used when the card is
        // combined. if the card is played normally, the norml shard effects and atts are used.

        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'magic_orb', to: 'handCards'},
            ],
            effects: [
                {effect: 'stout', enabled: true, amount: 4, turns: -1}
            ],
            abilities: [
                {ability: 'unreachable', enabled: true, turns: 2},
                {ability: 'unreachable', enabled: false, hex: true}
            ]
        },

        // if card is drawn we need to activate draw actions, effects, and abilities

        draw: {
            dmg: [10],
            target: 'player', // set this to 'player' or 'monster'. 'monster' or no value will target a random monster
            actions: [
                {action: 'addCard', value: 1, what: 'magic_orb', to: 'handCards'},
            ],
        },
        discard: {
            blk: [50],
            abilities: [
                {ability: 'unreachable', enabled: true, turns: 2},
            ],
        },
        destroy: {
            magic: [{type: 'rainbow', amount: 40}], 
            effects: [
                {effect: 'might', amount: 3, turns: -1},
            ]
        }

        // stance mechanics

        shimmer/sparkle/aura: {

            // mechanics that replace default card attributes (these do not override shard upgrades)

            retain: true,
            mana: 1,
            

            // mechanics in addition to default card attributes

            dmg: [6, 8],
            blk: [10, 10],
            armor: 10,
            magic: [{type: 'rainbow|chaos|elemental|dark', amount: 40}], 
            effects: [
                {effect: 'might', amount: 2}
            ],

        }

        // trade

        trade: ['champion_sword', 'champion_axe', 'champion_wand'] // array of possible cards to trade this card in for


    }),

    */

    /* NON-ADDABLE CARDS */
    /* Starting Cards: */
    new Cards({
        id: 'jab', name: 'Jab', type: 'attack', mana: 1, addable: false, target: 'monster', 
        dmg: [7],
        slots: 1,
        shardUpgrades: {
            dmg: [14],
        },
    }),
    new Cards({
        id: 'shield', name: 'Shield', type: 'tool', mana: 1, addable: false,
        blk: [6],
        slots: 1,
        shardUpgrades: {
            blk: [12],
        },
    }),
    new Cards({
        id: 'leather_armor', name: 'Leather Armor', type: 'tool', mana: 0, addable: false, use: 1, 
        armor: [3],
        slots: 1,
        shardUpgrades: {
            use: 2,
            armor: [6],
        },
    }),
    new Cards({
        id: 'stun', name: 'Stun', type: 'tool', mana: 0, addable: false, target: 'monster',
        effects: [
            {effect: 'punch', amount: -.4, turns: 1, hex: true},
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'punch', amount: -.8, turns: 1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'rainbow_orb', name: 'Rainbow Orb', type: 'magic', mana: 0, addable: false,
        magic: [{type: 'rainbow', amount: 5}], 
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 10}], 
        },
    }),

    

    /* Cards Added By Other Cards/Events: */
    new Cards({
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
            vanish: false,
        },
        bothShardUpgrades: {
            ephemeral: false
        }
    }),
    new Cards({
        id: 'sparkle_stance', name: 'Sparkle Stance', type: 'tool', tier: 'uncommon', mana: 0, vanish: true, addable: false, ephemeral: true,
        sound: 'sparkleAmount',
        slots: 2,
        actions: [
            {action: 'stat', what: 'stance', value: 'sparkle'},
        ],
        effects: [
            {effect: 'might', amount: 3, turns: 1},
        ],
        draw: {
            actions: [
                {action: 'draw', value: 1}
            ]
        },
        shardUpgrades: {
            vanish: false,
        },
        bothShardUpgrades: {
            ephemeral: false
        }
    }),
    new Cards({
        id: 'shimmer_stance', name: 'Shimmer Stance', type: 'tool', tier: 'uncommon', mana: 0, vanish: true, addable: false, ephemeral: true,
        sound: 'shimmerAmount',
        blk: [10],
        armor: [1],
        slots: 2,
        actions: [
            {action: 'stat', what: 'stance', value: 'shimmer'},
        ],
        draw: {
            actions: [
                {action: 'draw', value: 1}
            ]
        },
        shardUpgrades: {
            vanish: false,
        },
        bothShardUpgrades: {
            ephemeral: false
        }
    }),
    new Cards({
        id: 'shimmer', name: 'Shimmer', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine', 
        sound: 'shimmerAmount',
        descOverride: '<span class="desc-item-value">+<span class="amount shimmer-amount" data-amount="1">1</span> Shimmer (+<span class="amount speed-amount" data-amount="2">2</span> Speed at max level)</span>',
        slots: 1,
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 1},
        ],
        shardUpgrades: {
            descOverride: '<span class="desc-item-value">+<span class="amount shimmer-amount" data-amount="2">2</span> Shimmer (+<span class="amount speed-amount" data-amount="2">2</span> Speed at max level)</span>',
            actions: [
                {action: 'stat', what: 'shimmer', key: 'current', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'sparkle', name: 'Sparkle', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine', 
        sound: 'sparkleAmount',
        descOverride: '<span class="desc-item-value">+<span class="amount sparkle-amount" data-amount="1">1</span> Sparkle (+<span class="amount health-amount" data-amount="5">5</span> Health at max level)</span>',
        slots: 1,
        actions: [
            {action: 'stat', what: 'sparkle', key: 'current', value: 1},
        ],
        shardUpgrades: {
            descOverride: '<span class="desc-item-value">+<span class="amount sparkle-amount" data-amount="2">2</span> Sparkle (+<span class="amount health-amount" data-amount="5">5</span> Health at max level)</span>',
            actions: [
                {action: 'stat', what: 'sparkle', key: 'current', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'aura', name: 'Aura', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine', 
        sound: 'auraAmount',
        descOverride: '<span class="desc-item-value">+<span class="amount aura-amount" data-amount="1">1</span> Aura (+<span class="amount mana-amount" data-amount="1">1</span> Mana at max level)</span>',
        slots: 1,
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 1},
        ],
        shardUpgrades: {
            descOverride: '<span class="desc-item-value">+<span class="amount aura-amount" data-amount="2">2</span> Aura (+<span class="amount mana-amount" data-amount="1">1</span> Mana at max level)</span>',
            actions: [
                {action: 'stat', what: 'aura', key: 'current', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'courage', name: 'Courage', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true, pack: 'combine', 
        slots: 1,
        actions: [
            {action: 'stat', what: 'courage', value: 1},
        ],
        shardUpgrades: {
            actions: [
                {action: 'stat', what: 'courage', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'familiar_agony', name: 'Familiar Agony', type: 'attack', mana: 0, tier: 'uncommon', addable: false, target: 'monster', retain: true,
        dmg: [10],
        use: 2,
        linger: 1,
        slots: 1,
        shardUpgrades: {
            dmg: [20]
        },
    }),
    new Cards({
        id: 'slash', name: 'Slash', type: 'attack', mana: 0, addable: false, target: 'monster', vanish: true,
        dmg: [2],
        slots: 1,
        shardUpgrades: {
            dmg: [4],
        },
    }),
    new Cards({
        id: 'fleeting_slash', name: 'Fleeting Slash', type: 'attack', mana: 0, addable: false, target: 'monster', vanish: true, expire: 0,
        dmg: [2],
        slots: 1,
        shardUpgrades: {
            dmg: [4],
        },
    }),
    new Cards({
        id: 'lingering_slash', name: 'Lingering Slash', type: 'attack', mana: 0, addable: false, target: 'monster', linger: 1, use: 1,
        dmg: [2],
        slots: 1,
        shardUpgrades: {
            dmg: [4],
        },
    }),
    new Cards({
        id: 'momentous_slash', name: 'Momentous Slash', type: 'attack', mana: 0, addable: false, target: 'monster', vanish: true,
        dmg: [2],
        effects: [
            {effect: 'momentum', amount: 1}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [4],
        },
    }),
    new Cards({
        id: 'safety', name: 'Safety', type: 'tool', mana: 1, addable: false, retain: true,
        blk: [22],
        slots: 1,
        shardUpgrades: {
            blk: [44],
        },
    }),
    new Cards({
        id: 'energize', name: 'Energize', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, addable: false,
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'boost', name: 'Boost', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, addable: false, retain: true,
        actions: [
            {action: 'stat', what: 'speed', key: 'current', value: 2}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 4}
            ],
        },
    }),
    new Cards({
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
    }),
    new Cards({
        id: 'impresa', name: 'Impresa', type: 'magic', mana: 1, tier: 'uncommon', addable: false, retain: true, vanish: true, 
        magic: [{type: 'wild', amount: 5}], 
        slots: 1,
        combine: {
            magic: [{type: 'wild', amount: 10}], 
            actions: [
                {action: 'addCard', value: 1, what: 'ouroboros', to: 'handCards'},
            ]
        },
        draw: {
            magic: [{type: 'wild', amount: 1}], 
        },
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
    }),
    new Cards({
        id: 'ouroboros', name: 'Ouroboros', type: 'magic', mana: 1, tier: 'rare', addable: false, retain: true, vanish: true,
        dmg: [4],
        blk: [6],
        magic: [{type: 'wild', amount: 10}], 
        slots: 1,
        actions: [
            {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
        ],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'tesseract', to: 'handCards'},
                {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
            ]
        },
        shardUpgrades: {
            dmg: [8],
            blk: [12],
            magic: [{type: 'wild', amount: 15}], 
        },
    }),
    new Cards({
        id: 'tesseract', name: 'Tesseract', type: 'magic', target: 'monster', mana: 3, addable: false, retain: true, vanish: true, tier: 'legendary',
        dmg: [10],
        blk: [15],
        magic: [{type: 'wild', amount: 40}], 
        additionalDesc: 'Absolute power',
        sound: 'magic1',
        actions: [
            {action: 'addCard', value: 4, what: 'impresa', to: 'discardCards'},
        ],
        slots: 2,
        iceShardUpgrades: {
            blk: [25],
            blk_2: [35],
            additionalDesc: 'Frozen to the core',
            magic: [{type: 'wild', amount: 50}], 
            magic_2: [{type: 'wild', amount: 60}], 
        },
        fireShardUpgrades: {
            dmg: [20],
            dmg_2: [30],
            magic: [{type: 'wild', amount: 50}], 
            magic_2: [{type: 'wild', amount: 60}], 
            additionalDesc: 'Hot to the touch',
        },
        bothShardUpgrades: {
            dmg: [20],
            blk: [25],
            magic: [{type: 'wild', amount: 60}], 
        },
    }),
    new Cards({
        id: 'battle_move', name: 'Battle Move', type: 'attack', mana: 1, tier: 'uncommon', target: 'monster', addable: false, retain: true, vanish: true, 
        dmg: [9],
        //sound: 'attack17',
        slots: 1,
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'battle_combo', to: 'handCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
        draw: {
            blk: [3]
        },
        shardUpgrades: {
            dmg: [18],
        },
    }),
    new Cards({
        id: 'battle_combo', name: 'Battle Combo', type: 'tool', mana: 0, tier: 'rare', addable: false, retain: true, vanish: true, 
        blk: [9],
        slots: 1,
        effects: [
            {effect: 'fierce', amount: 10, turns: 1},
            {effect: 'mastery', amount: 1.5, turns: 1},
            {effect: 'rowdy', amount: 15, turns: 1}
        ],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'battle_sequence', to: 'handCards'},
            ]
        },
        shardUpgrades: {
            blk: [18],
            effects: [
                {effect: 'fierce', amount: 15, turns: 1},
                {effect: 'mastery', amount: 2, turns: 1},
                {effect: 'rowdy', amount: 20, turns: 1}
            ],
        },
    }),
    new Cards({
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
    }),
    new Cards({
        id: 'battle_finisher', name: 'Battle Finisher', type: 'attack', target: 'monster', mana: 0, tier: 'rare', ephemeral: true, vanish: true, addable: false, 
        dmg: [10, 10, 10, 10],
        sound: 'attack16',
        additionalDesc: 'Finish Him!',
        actions: [
            {action: 'addCard', value: 4, what: 'battle_move', to: 'discardCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            dmg: [60],
            dmg_2: [80]
        },
        iceShardUpgrades: {
            dmg: [15, 15, 15, 15],
            dmg_2: [20, 20, 20, 20],
        },
        bothShardUpgrades: {
            dmg: [15, 15, 15, 15],
        }
    }),
    new Cards({
        id: 'self_enhance', name: 'Self-Enhance', type: 'tool', mana: 1, addable: false, tier: 'uncommon', retain: true, vanish: true, 
        blk: [16],
        slots: 1,
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'self_advance', to: 'handCards'},
            ]
        },
        draw: {
            blk: [6]
        },
        shardUpgrades: {
            blk: [32]
        },
    }),
    new Cards({
        id: 'self_advance', name: 'Self-Advance', type: 'tool', tier: 'rare', mana: 0, addable: false, retain: true, vanish: true, 
        blk: [5],
        armor: [3],
        slots: 1,
        actions: [
            {action: 'stat', what: 'health', key: 'current', value: 2},
        ],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'self_fulfill', to: 'handCards'},
            ]
        },
        shardUpgrades: {
            blk: [10],
            armor: [6],
            actions: [
                {action: 'stat', what: 'health', key: 'current', value: 4},
            ],
        },
    }),
    new Cards({
        id: 'self_fulfill', name: 'Self-Fulfill', type: 'tool', mana: 3, retain: true, addable: false, vanish: true, tier: 'legendary',  
        additionalDesc: 'Achievement unlocked',
        actions: [
            {action: 'addCard', value: 3, what: 'self_enhance', to: 'discardCards'},
            {action: 'stat', what: 'shimmer', key: 'current', value: 1},
            {action: 'stat', what: 'sparkle', key: 'current', value: 1},
            {action: 'stat', what: 'aura', key: 'current', value: 1},
            {action: 'stat', what: 'health', key: 'max', value: 1},
            {action: 'stat', what: 'health', key: 'current', value: 1},
        ],
        slots: 2,
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'discardCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'health', key: 'max', value: 2},
                {action: 'stat', what: 'health', key: 'current', value: 2},
            ],
            actions_2: [
                {action: 'addCard', value: 4, what: 'self_enhance', to: 'discardCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'health', key: 'max', value: 3},
                {action: 'stat', what: 'health', key: 'current', value: 3},
                {action: 'stat', what: 'aggro', key: 'current', value: -1},
            ],
        },
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'discardCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'courage', value: 1},
                {action: 'stat', what: 'health', key: 'current', value: 2},
            ],
            actions_2: [
                {action: 'addCard', value: 4, what: 'self_enhance', to: 'discardCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'courage', value: 2},
                {action: 'stat', what: 'health', key: 'current', value: 2},
                {action: 'stat', what: 'aggro', key: 'current', value: -1},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 4, what: 'self_enhance', to: 'discardCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'health', key: 'max', value: 2},
                {action: 'stat', what: 'health', key: 'current', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'rainbow_converter', name: 'Rainbow Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,  
        sound: 'magic4',
        slots: 1,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'rainbow'},
        ],
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
    }),
    new Cards({
        id: 'chaos_converter', name: 'Chaos Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,  
        sound: 'magic4',
        slots: 1,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'chaos'},
        ],
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
    }),
    new Cards({
        id: 'dark_converter', name: 'Dark Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true, 
        sound: 'magic4',
        slots: 1,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'dark'},
        ],
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
    }),
    new Cards({
        id: 'elemental_converter', name: 'Elemental Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true, 
        sound: 'magic4',
        slots: 1,
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'elemental'},
        ],
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
    }),
    new Cards({
        id: 'sparks', name: 'Sparks', type: 'magic', mana: 0, addable: false, vanish: true, 
        sound: 'magic5',
        magic: [{type: 'wild', amount: 2}], 
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        effects: [
            {effect: 'lightning', amount: 1, turns: -1}
        ],
        shardUpgrades: {
            magic: [{type: 'wild', amount: 4}], 
            effects: [
                {effect: 'lightning', amount: 2, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'bottled_speed', name: 'Bottled Speed', type: 'bottled', playable: false, addable: false, weight: 3, 
        draw: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 1},
            ]
        },
        discard: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 2},
            ]
        },
        destroy: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 4},
            ]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                actions: [
                    {action: 'stat', what: 'speed', key: 'current', value: 2},
                ]
            },
            discard: {
                actions: [
                    {action: 'stat', what: 'speed', key: 'current', value: 4},
                ]
            },
            destroy: {
                actions: [
                    {action: 'stat', what: 'speed', key: 'current', value: 8},
                ]
            },
        },
    }),
    new Cards({
        id: 'bottled_energy', name: 'Bottled Energy', type: 'bottled', playable: false, addable: false, weight: 3, 
        draw: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
            ]
        },
        discard: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2},
            ]
        },
        destroy: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 4},
            ]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 2},
                ]
            },
            discard: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 3},
                ]
            },
            destroy: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 6},
                ]
            },
        },
    }),
    new Cards({
        id: 'bottled_armor', name: 'Bottled Armor', type: 'bottled', playable: false, addable: false, weight: 4, 
        draw: {
            armor: [1]
        },
        discard: {
            armor: [5]
        },
        destroy: {
            armor: [15]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                armor: [2]
            },
            discard: {
                armor: [10]
            },
            destroy: {
                armor: [30]
            },
        },
    }),
    new Cards({
        id: 'bottled_block', name: 'Bottled Block', type: 'bottled', playable: false, addable: false, weight: 9, 
        draw: {
            blk: [4]
        },
        discard: {
            blk: [15]
        },
        destroy: {
            blk: [40]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                blk: [8]
            },
            discard: {
                blk: [30]
            },
            destroy: {
                blk: [80]
            },
        },
    }),
    new Cards({
        id: 'bottled_attack', name: 'Bottled Attack', type: 'bottled', playable: false, addable: false, weight: 9, 
        draw: {
            dmg: [2]
        },
        discard: {
            dmg: [10]
        },
        destroy: {
            dmg: [25]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                dmg: [4]
            },
            discard: {
                dmg: [20]
            },
            destroy: {
                dmg: [50]
            },
        },
    }),
    new Cards({
        id: 'bottled_cards', name: 'Bottled Cards', type: 'bottled', playable: false, addable: false, weight: 4, 
        draw: {
            actions: [
                {action: 'draw', value: 2}
            ]
        },
        discard: {
            actions: [
                {action: 'draw', value: 3}
            ]
        },
        destroy: {
            actions: [
                {action: 'draw', value: 5}
            ]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                actions: [
                    {action: 'draw', value: 4}
                ]
            },
            discard: {
                actions: [
                    {action: 'draw', value: 6}
                ]
            },
            destroy: {
                actions: [
                    {action: 'draw', value: 10}
                ]
            },
        },
    }),
    new Cards({
        id: 'bottled_magic', name: 'Bottled Magic', type: 'bottled', playable: false, addable: false, weight: 8, 
        draw: {
            magic: [{type: 'wild', amount: 1}], 
        },
        discard: {
            magic: [{type: 'wild', amount: 6}], 
        },
        destroy: {
            magic: [{type: 'wild', amount: 20}], 
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                magic: [{type: 'wild', amount: 2}], 
            },
            discard: {
                magic: [{type: 'wild', amount: 12}], 
            },
            destroy: {
                magic: [{type: 'wild', amount: 40}], 
            },
        },
    }),

    new Cards({
        id: 'bottled_might', name: 'Bottled Might', type: 'bottled', playable: false, addable: false, weight: 1, 
        draw: {
            effects: [
                {effect: 'might', amount: 1, turns: -1},
            ],
        },
        discard: {
            effects: [
                {effect: 'might', amount: 2, turns: -1},
            ],
        },
        destroy: {
            effects: [
                {effect: 'might', amount: 6, turns: -1},
            ], 
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                effects: [
                    {effect: 'might', amount: 2, turns: -1},
                ],
            },
            discard: {
                effects: [
                    {effect: 'might', amount: 4, turns: -1},
                ],
            },
            destroy: {
                effects: [
                    {effect: 'might', amount: 12, turns: -1},
                ], 
            },
        },
    }),
    new Cards({
        id: 'bottled_lightning', name: 'Bottled Lightning', type: 'bottled', playable: false, addable: false, weight: 1, 
        draw: {
            effects: [
                {effect: 'lightning', amount: 1, turns: -1},
            ],
        },
        discard: {
            effects: [
                {effect: 'lightning', amount: 2, turns: -1},
            ],
        },
        destroy: {
            effects: [
                {effect: 'lightning', amount: 6, turns: -1},
            ], 
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                effects: [
                    {effect: 'lightning', amount: 2, turns: -1},
                ],
            },
            discard: {
                effects: [
                    {effect: 'lightning', amount: 4, turns: -1},
                ],
            },
            destroy: {
                effects: [
                    {effect: 'lightning', amount: 12, turns: -1},
                ], 
            },
        },
    }),
    new Cards({
        id: 'bottled_solid', name: 'Bottled Solid', type: 'bottled', playable: false, addable: false, weight: .5, 
        draw: {
            effects: [
                {effect: 'solid', amount: 1, turns: -1},
            ],
        },
        discard: {
            effects: [
                {effect: 'solid', amount: 2, turns: -1},
            ],
        },
        destroy: {
            effects: [
                {effect: 'solid', amount: 6, turns: -1},
            ], 
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                effects: [
                    {effect: 'solid', amount: 2, turns: -1},
                ],
            },
            discard: {
                effects: [
                    {effect: 'solid', amount: 4, turns: -1},
                ],
            },
            destroy: {
                effects: [
                    {effect: 'solid', amount: 12, turns: -1},
                ], 
            },
        },
    }),

    new Cards({
        id: 'release', name: 'Release', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'discard', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'discard', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'acquire', name: 'Acquire', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'draw', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'draw', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'dismantle', name: 'Dismantle', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'destroy', value: 2, optional: true},
            ],
        },
    }),
    new Cards({
        id: 'atomic', name: 'Atomic', type: 'ability', mana: 0, addable: false, pack: 'combine', tier: 'uncommon', retain: true,
        slots: 1,
        effects: [
            {effect: 'irradiate', amount: 12, turns: -1}
        ],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'nuclear', to: 'drawCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
        shardUpgrades: {
            effects: [
                {effect: 'irradiate', amount: 24, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'nuclear', name: 'Nuclear', type: 'ability', mana: 0, addable: false, pack: 'combine', tier: 'rare',
        slots: 1,
        effects: [
            {effect: 'irradiate', amount: 50, turns: -1}
        ],
        shardUpgrades: {
            effects: [
                {effect: 'irradiate', amount: 100, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'head_shot', name: 'Head Shot', type: 'attack', target: 'monster', mana: 0, addable: false, natural: true, 
        dmg: [21],
        slots: 1,
        shardUpgrades: {
            dmg: [42]
        },
    }),
    new Cards({
        id: 'thrash', name: 'Thrash', type: 'attack', target: 'monster', mana: 1, retain: true, natural: true, tier: 'uncommon', addable: false, 
        dmg: [45],
        slots: 1,
        shardUpgrades: {
            dmg: [90]
        },
    }),
    new Cards({
        id: 'forestall', name: 'Forestall', type: 'tool', mana: 0, natural: true, addable: false, 
        blk: [24],
        slots: 1,
        shardUpgrades: {
            blk: [48]
        },
    }),
    new Cards({
        id: 'evade', name: 'Evade', type: 'tool', mana: 1, retain: true, natural: true, tier: 'uncommon', addable: false, 
        blk: [45],
        slots: 1,
        shardUpgrades: {
            blk: [90]
        },
    }),
    new Cards({
        id: 'blaze_of_magic', name: 'Blaze of Magic', type: 'magic', mana: 0, natural: true, addable: false, 
        magic: [{type: 'wild', amount: 16}], 
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 32}], 
        },
    }),
    new Cards({
        id: 'magic_burst', name: 'Magic Burst', type: 'magic', mana: 1, retain: true, natural: true, tier: 'uncommon', addable: false, 
        magic: [{type: 'wild', amount: 26}], 
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 52}], 
        },
    }),
    new Cards({
        id: 'spewnicorn_spray', name: 'Spewnicorn Spray', type: 'tool', mana: 0, breakable: true, use: 3, tier: 'legendary', addable: false, 
        descOverride: 'Deus Ex Machina. Gain great power.',
        blk: [100],
        effects: [
            {effect: 'solid', amount: 10, turns: -1},
            {effect: 'stout', amount: 10, turns: -1},
            {effect: 'might', amount: 10, turns: -1},
            {effect: 'punch', amount: 2, turns: -1},
            {effect: 'lightning', amount: 10, turns: -1},
            {effect: 'thunder', amount: 2, turns: -1},
            /*{effect: 'speed', amount: 2, turns: -1},
            {effect: 'mend', amount: 5, turns: -1},
            {effect: 'craft', amount: 2, turns: -1},
            {effect: 'cunning', amount: 5, turns: 2},
            {effect: 'vigor', amount: 5, turns: 2},
            {effect: 'muster', amount: 5, turns: 2},
            {effect: 'rowdy', amount: 50, turns: 2},
            {effect: 'fierce', amount: 50, turns: 2},
            {effect: 'mastery', amount: .5, turns: 2},
            {effect: 'heal', amount: 5, turns: 2},
            {effect: 'conjure', amount: 5, turns: 2},
            {effect: 'sorcery', amount: 5, turns: 2},
            {effect: 'momentum', amount: 5, turns: 2},
            {effect: 'wield', amount: 5, turns: 2},
            {effect: 'resistance', amount: 5, turns: 2},
            {effect: 'lemonade', amount: 5, turns: 2},
            {effect: 'spikes', amount: 5, turns: 2},
            {effect: 'vex', amount: 5, turns: 2},
            {effect: 'mage', amount: 5, turns: 2},
            {effect: 'enchanter', amount: 5, turns: 2},
            {effect: 'reaper', amount: 5, turns: 2},
            {effect: 'buttress', amount: 10, turns: 2},
            {effect: 'channel', amount: 10, turns: 2},
            {effect: 'beast', amount: 5, turns: 2},
            {effect: 'feral', amount: 5, turns: 2},
            {effect: 'summon', amount: 10, turns: 2},
            {effect: 'arcane', amount: 5, turns: 2},
            {effect: 'fatality', amount: 1.5, turns: 1, persist: true},
            {effect: 'retaliate', amount: 5, turns: 2},
            {effect: 'mystery', amount: 2, turns: -1},
            {effect: 'regen', amount: 5, turns: 2},
            {effect: 'wisdom', amount: 2, turns: 2},
            {effect: 'retain', amount: 2, turns: 2},
            {effect: 'insulate', amount: 1, turns: -1},
            {effect: 'irradiate', amount: 5, turns: -1},
            {effect: 'replenish', amount: 1, turns: -1},
            {effect: 'combiner', amount: 1, turns: -1},
            {effect: 'angered', amount: 4, turns: 2},
            {effect: 'hardened', amount: 8, turns: 2},
            {effect: 'shapeshifter', amount: 25, turns: 2},
            {effect: 'fend', amount: 18, turns: 2},
            {effect: 'ward', amount: 18, turns: 2},
            {effect: 'cover', amount: 18, turns: 2},
            {effect: 'preserve', amount: 18, turns: 2},
            {effect: 'intercept', amount: 2, turns: -1},*/
        ],
        abilities: [
            {ability: 'protection', turns: 2, enabled: true},
            {ability: 'unreachable', turns: 2, enabled: true},
            /*{ability: 'tank', turns: 2, enabled: true},
            {ability: 'toothache', turns: 2, enabled: true},
            {ability: 'prepared', turns: 2, enabled: true},
            {ability: 'bless', turns: -1, enabled: true},
            {ability: 'hypnotize', turns: 2, enabled: true},
            {ability: 'stockpile', turns: 2, enabled: true},
            {ability: 'sift', turns: -1, enabled: true},
            {ability: 'panic', turns: 2, enabled: true},
            {ability: 'expirex', turns: -1, enabled: true},
            {ability: 'magick', turns: -1, enabled: true},
            {ability: 'expirex', turns: -1, enabled: true},
            {ability: 'amplify', turns: -1, enabled: true},
            {ability: 'explode', turns: 2, enabled: true},
            {ability: 'supernatural', turns: -1, enabled: true},
            {ability: 'reaper', turns: -1, enabled: true},
            {ability: 'electromancy', turns: -1, enabled: true},*/
        ],
        magic: [{type: 'wild', amount: 25}], 
    }),
    

    /* Clutter: */
    new Cards({
        id: 'junk', name: 'Junk', type: 'clutter', playable: false, addable: false, ephemeral: true,
        additionalDesc: 'It needs cleaned up.',
    }),
    new Cards({
        id: 'debris', name: 'Debris', type: 'clutter', mana: 1, vanish: true, addable: false, natural: true,
        additionalDesc: 'It gets in the way.',
    }),
    new Cards({
        id: 'chaff', name: 'Chaff', type: 'clutter', addable: false, natural: true, ephemeral: true, playable: false, 
        additionalDesc: 'It rises to the top.',
    }),
    new Cards({
        id: 'gunk', name: 'Gunk', type: 'clutter', addable: false, playable: false, 
        additionalDesc: 'It clogs up your deck.',
    }),
    new Cards({
        id: 'execrate', name: 'Execrate', type: 'clutter', mana: 1, addable: false, vanish: true,
        draw: {
            dmg: [2],
            target: 'player'
        },
    }),
    new Cards({
        id: 'flay', name: 'Flay', type: 'clutter', mana: 1, addable: false, vanish: true,
        draw: {
            effects: [
                {effect: 'solid', amount: -1, turns: 1, hex: true}
            ],
            target: 'player'
        },
    }),
    new Cards({
        id: 'curse', name: 'Curse', type: 'clutter', addable: false, playable: false, 
        draw: {
            effects: [
                {effect: 'rainbow', amount: -1, hex: true},
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'timid', name: 'Timid', type: 'clutter', addable: false, playable: false, 
        draw: {
            effects: [
                {effect: 'might', amount: -1, turns: 1, hex: true},
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'lethargy', name: 'Lethargy', type: 'clutter', addable: false, ephemeral: true, playable: false, 
        draw: {
            effects: [
                {effect: 'punch', amount: -.25, turns: 1, hex: true},
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'briars', name: 'Briars', type: 'clutter', addable: false, playable: false, 
        draw: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: -1}
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'broken', name: 'Broken', type: 'clutter', addable: false, mana: 1, vanish: true, 
        draw: {
            effects: [
                {effect: 'solid', amount: -1, turns: 1, hex: true},
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'mired', name: 'Mired', type: 'clutter', addable: false, playable: false,
        draw: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: -1}
            ],
            target: 'player'
        }
    }),

    /* INTERRUPT */
    new Cards({
        id: 'block_interrupt', name: 'Block Interrupt', type: 'interrupt', mana: 1, addable: false, vanish: true,
        draw: {
            actions: [
                {action: 'interrupt', what: 'block'}
            ],
            target: 'player'
        },
    }),
    new Cards({
        id: 'armor_interrupt', name: 'Armor Interrupt', type: 'interrupt', mana: 1, addable: false, vanish: true,
        draw: {
            actions: [
                {action: 'interrupt', what: 'armor'}
            ],
            target: 'player'
        },
    }),
    new Cards({
        id: 'speed_interrupt', name: 'Speed Interrupt', type: 'interrupt', mana: 1, addable: false, vanish: true,
        draw: {
            actions: [
                {action: 'interrupt', what: 'speed'}
            ],
            target: 'player'
        },
    }),
    new Cards({
        id: 'mana_interrupt', name: 'Mana Interrupt', type: 'interrupt', mana: 1, addable: false, vanish: true,
        draw: {
            actions: [
                {action: 'interrupt', what: 'mana'}
            ],
            target: 'player'
        },
    }),







    /* WEAPONS */
    new Cards({
        id: 'rusty_dagger', name: 'Rusty Dagger', type: 'attack', mana: 3, target: 'monster', weight: .8, weapon: true, pack: 'cycle',
        dmg: [6],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['polished_dagger'],
    }),
    new Cards({
        id: 'polished_dagger', name: 'Polished Dagger', type: 'attack', mana: 3, target: 'monster', weight: 10, addable: false, weapon: true,
        dmg: [6, 6],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12, 12]
        },
        trade: ['piercer'],
    }),
    new Cards({
        id: 'piercer', name: 'Piercer', type: 'attack', mana: 3, target: 'monster', tier: 'uncommon', weight: 2, addable: false, weapon: true,
        dmg: [12, 12, 12],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24, 24, 24]
        },
        trade: ['shredder'],
    }),
    new Cards({
        id: 'shredder', name: 'Shredder', type: 'attack', mana: 3, target: 'monster', tier: 'uncommon', weight: 1, addable: false, weapon: true,
        dmg: [12, 12, 12, 12, 12],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24, 24, 24, 24, 24]
        },
        trade: ['stormknife'],
    }),
    new Cards({
        id: 'stormknife', name: 'Stormknife', type: 'attack', mana: 3, target: 'monster', tier: 'rare', weight: .8, addable: false, weapon: true,
        dmg: [20, 20, 20, 20, 20],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [40, 40, 40, 40, 40]
        },
        trade: ['shiv_of_the_abyss'],
    }),
    new Cards({
        id: 'shiv_of_the_abyss', name: 'Shiv of the Abyss', type: 'attack', mana: 2, target: 'monster', weight: .1, tier: 'legendary', addable: false, weapon: true,
        dmg: [26, 26, 26, 26, 26],
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [52, 52, 52, 52, 52]
        },
    }),
    new Cards({
        id: 'wooden_sword', name: 'Wooden Sword', type: 'attack', mana: 3, target: 'monster', weight: .8, weapon: true, pack: 'cycle',
        dmg: [6],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['broadsword'],
    }),
    new Cards({
        id: 'broadsword', name: 'Broadsword', type: 'attack', mana: 3, target: 'monster', weight: 10, addable: false, weapon: true,
        dmg: [12],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24]
        },
        trade: ['hardened_steel'],
    }),
    new Cards({
        id: 'hardened_steel', name: 'Hardened Steel', type: 'attack', mana: 3, target: 'monster', weight: 2, addable: false, tier: 'uncommon', weapon: true,
        dmg: [36],
        effects: [
            {effect: 'punch', amount: .1, turns: -1},
        ],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [72]
        },
        trade: ['champions_cutlass'],
    }),
    new Cards({
        id: 'champions_cutlass', name: "Champion's Cutlass", type: 'attack', mana: 3, target: 'monster', weight: 1, addable: false, tier: 'uncommon', weapon: true,
        dmg: [50],
        effects: [
            {effect: 'punch', amount: .15, turns: -1},
        ],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [100]
        },
        trade: ['glacial_blade'],
    }),
    new Cards({
        id: 'glacial_blade', name: 'Glacial Blade', type: 'attack', mana: 3, target: 'monster', weight: .8, addable: false, tier: 'rare', weapon: true,
        dmg: [80],
        effects: [
            {effect: 'punch', amount: .2, turns: -1},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [160]
        },
        trade: ['nightfury'],
    }),
    new Cards({
        id: 'nightfury', name: 'Nightfury', type: 'attack', mana: 2, target: 'monster', weight: .1, addable: false, tier: 'legendary', weapon: true,
        dmg: [100],
        effects: [
            {effect: 'punch', amount: .25, turns: -1},
        ],
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [200]
        },
    }),
    new Cards({
        id: 'loggers_axe', name: "Logger's Axe", type: 'attack', mana: 3, target: 'monster', weight: .6, weapon: true, pack: 'cycle',
        dmg: [6],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['battle_axe', 'throwing_axe'],
    }),
    new Cards({
        id: 'battle_axe', name: 'Battle Axe', type: 'attack', mana: 3, target: 'monster', weight: 10, addable: false, weapon: true,
        dmg: [12],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24]
        },
        trade: ['swift_battle_axe'],
    }),
    new Cards({
        id: 'throwing_axe', name: 'Throwing Axe', type: 'attack', mana: 3, target: 'monster', weight: 10, addable: false, weapon: true,
        dmg: [4, 4, 4],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [6, 6, 6, 6]
        },
        trade: ['sharpened_axe'],
    }),
    new Cards({
        id: 'swift_battle_axe', name: 'Swift Battle Axe', type: 'attack', mana: 3, target: 'monster', weight: 2, addable: false, tier: 'uncommon',  weapon: true,
        dmg: [30],
        effects: [
            {effect: 'punch', amount: .2, turns: 1},
        ],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [60]
        },
        trade: ['cleave'],
    }),
    new Cards({
        id: 'sharpened_axe', name: 'Sharpened Axe', type: 'attack', mana: 3, target: 'monster', weight: 2, addable: false, tier: 'uncommon',  weapon: true,
        dmg: [10, 10, 10],
        effects: [
            {effect: 'might', amount: 4, turns: 1},
        ],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [15, 15, 15, 15]
        },
        trade: ['redfury'],
    }),
    new Cards({
        id: 'cleave', name: 'Cleave', type: 'attack', mana: 3, target: 'monster', weight: 1, addable: false, tier: 'rare', weapon: true, 
        dmg: [40],
        effects: [
            {effect: 'punch', amount: .3, turns: 1},
        ],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [80]
        },
        trade: ['forge', 'dragons_bane'],
    }),
    new Cards({
        id: 'redfury', name: 'Redfury', type: 'attack', mana: 3, target: 'monster', weight: 1, addable: false, tier: 'rare',  weapon: true,
        dmg: [10, 10, 10, 10],
        effects: [
            {effect: 'might', amount: 6, turns: 1},
        ],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [15, 15, 15, 15, 15]
        },
        trade: ['endless_edge', 'deathmaker'],
    }),
    new Cards({
        id: 'forge', name: 'Forge', type: 'attack', mana: 2, target: 'monster', weight: .2, addable: false, tier: 'legendary',  weapon: true,
        dmg: [60],
        effects: [
            {effect: 'punch', amount: .4, turns: 2},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [80]
        },
    }),
    new Cards({
        id: 'dragons_bane', name: "Dragon's Bane", type: 'attack', mana: 2, target: 'monster', weight: .2, addable: false, tier: 'legendary',  weapon: true,
        dmg: [60],
        effects: [
            {effect: 'might', amount: 8, turns: 2},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [80]
        },
    }),
    new Cards({
        id: 'endless_edge', name: 'Endless Edge', type: 'attack', mana: 2, target: 'monster', weight: .2, addable: false, tier: 'legendary',  weapon: true,
        dmg: [10, 10, 10, 10, 10, 10],
        effects: [
            {effect: 'punch', amount: .4, turns: 2},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [10, 10, 10, 10, 10, 10, 10, 10]
        },
    }),
    new Cards({
        id: 'deathmaker', name: 'Deathmaker', type: 'attack', mana: 2, target: 'monster', weight: .2, addable: false, tier: 'legendary',  weapon: true,
        dmg: [10, 10, 10, 10, 10, 10],
        effects: [
            {effect: 'might', amount: 8, turns: 2},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [10, 10, 10, 10, 10, 10, 10, 10]
        },
    }),
    new Cards({
        id: 'old_hammer', name: "Old Hammer", type: 'attack', mana: 3, target: 'monster', weight: .7, weapon: true, pack: 'combine',
        dmg: [6],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['reinforced_hammer'],
    }),
    new Cards({
        id: 'reinforced_hammer', name: 'Reinforced Hammer', type: 'attack', mana: 3, target: 'monster', weight: 10, addable: false, weapon: true,
        dmg: [12],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24]
        },
        trade: ['tungsten_hammer'],
    }),
    new Cards({
        id: 'tungsten_hammer', name: 'Tungsten Hammer', type: 'attack', mana: 3, target: 'monster', weight: 2, addable: false, tier: 'uncommon', weapon: true,
        dmg: [24],
        effects: [
            {effect: 'punch', amount: -.1, turns: -1, hex: true},
        ],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [48]
        },
        trade: ['molten_hammer'],
    }),
    new Cards({
        id: 'molten_hammer', name: "Molten Hammer", type: 'attack', mana: 3, target: 'monster', weight: 1, addable: false, tier: 'uncommon', weapon: true,
        dmg: [40],
        effects: [
            {effect: 'punch', amount: -.15, turns: -1, hex: true},
        ],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [80]
        },
        trade: ['hammer_of_justice'],
    }),
    new Cards({
        id: 'hammer_of_justice', name: 'Hammer of Justice', type: 'attack', mana: 3, target: 'monster', weight: .8, addable: false, tier: 'rare', weapon: true,
        dmg: [50],
        effects: [
            {effect: 'punch', amount: -.2, turns: -1, hex: true},
        ],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [100]
        },
        trade: ['gravitas'],
    }),
    new Cards({
        id: 'gravitas', name: 'Gravitas', type: 'attack', mana: 3, target: 'monster', weight: .6, addable: false, tier: 'rare', weapon: true,
        dmg: [60],
        effects: [
            {effect: 'punch', amount: -.25, turns: -1, hex: true},
        ],
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [120]
        },
        trade: ['singing_mallet', 'firmament_mover'],
    }),
    new Cards({
        id: 'firmament_mover', name: 'Firmament Mover', type: 'attack', mana: 2, target: 'monster', weight: .05, addable: false, tier: 'legendary', weapon: true,
        dmg: [80],
        effects: [
            {effect: 'punch', amount: -.35, turns: -1, hex: true},
        ],
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            dmg: [100]
        },
    }),
    new Cards({
        id: 'singing_mallet', name: 'Singing Mallet', type: 'attack', mana: 1, target: 'monster', weight: .05, addable: false, tier: 'legendary', weapon: true,
        dmg: [60],
        effects: [
            {effect: 'punch', amount: -.25, turns: -1, hex: true},
        ],
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 0,
            dmg: [80]
        },
    }),
    new Cards({
        id: 'blunt_pike', name: "Blunt Pike", type: 'attack', mana: 3, target: 'monster', weight: .8, weapon: true, pack: 'combine',
        dmg: [6],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['serrated_pike'],
    }),
    new Cards({
        id: 'serrated_pike', name: "Serrated Pike", type: 'attack', mana: 3, target: 'monster', weight: 10, weapon: true, addable: false, 
        dmg: [12],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [24]
        },
        trade: ['ancient_spear', 'runed_bayonet', 'cursed_spike', 'frozen_harpoon', 'ornate_javelin', 'double_headed_lance'],
    }),
    new Cards({
        id: 'ancient_spear', name: "Ancient Spear", type: 'attack', mana: 2, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, vanish: true, addable: false, 
        dmg: [70],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'runed_bayonet', name: "Runed Bayonet", type: 'attack', mana: 1, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, vanish: true, addable: false, 
        dmg: [50],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'cursed_spike', name: "Cursed Spike", type: 'attack', mana: 0, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, vanish: true, addable: false, 
        dmg: [30],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'frozen_harpoon', name: "Frozen Harpoon", type: 'attack', mana: 2, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, ephemeral: true, addable: false, 
        dmg: [55],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [80]
        },
    }),
    new Cards({
        id: 'ornate_javelin', name: "Ornate Javelin", type: 'attack', mana: 1, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, ephemeral: true, addable: false, 
        dmg: [35],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [70]
        },
    }),
    new Cards({
        id: 'double_headed_lance', name: "Double-Headed Lance", type: 'attack', mana: 0, target: 'monster', tier: 'uncommon', weight: .5, weapon: true, ephemeral: true, addable: false, 
        dmg: [15],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [30]
        },
    }),
    new Cards({
        id: 'farmers_scythe', name: "Farmer's Scythe", type: 'attack', mana: 3, target: 'all', weight: .7, weapon: true, pack: 'combine',
        dmg: [3],
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [6]
        },
        trade: ['crescentblade', 'sharpened_scythe'],
    }),
    new Cards({
        id: 'crescentblade', name: "Crescentblade", type: 'attack', mana: 0, target: 'all', weight: .8, weapon: true, addable: false, 
        dmg: [10],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20]
        },
    }),
    new Cards({
        id: 'sharpened_scythe', name: "Sharpened Scythe", type: 'attack', mana: 3, vanish: true, target: 'all', weight: 10, weapon: true, addable: false, 
        dmg: [6],
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [12]
        },
        trade: ['blackblade', 'spiked_scythe'],
    }),
    new Cards({
        id: 'blackblade', name: 'Blackblade', type: 'attack', mana: 0, target: 'all', weight: .5, addable: false, tier: 'uncommon', weapon: true,
        dmg: [20],
        draw: {
            dmg: [1],
        },
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [40]
        },
    }),
    new Cards({
        id: 'spiked_scythe', name: 'Spiked Scythe', type: 'attack', mana: 3, vanish: true, target: 'all', weight: 2, addable: false, tier: 'uncommon', weapon: true,
        dmg: [10],
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20]
        },
        trade: ['greenshears', 'glowscythe'],
    }),
    new Cards({
        id: 'greenshears', name: 'Greenshears', type: 'attack', mana: 0, target: 'all', weight: .3, addable: false, tier: 'uncommon', weapon: true,
        dmg: [30],
        draw: {
            dmg: [2],
        },
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [60]
        },
    }),
    new Cards({
        id: 'glowscythe', name: 'Glowscythe', type: 'attack', mana: 3, vanish: true, target: 'all', weight: 1, addable: false, tier: 'uncommon', weapon: true,
        dmg: [16],
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [32]
        },
        trade: ['bonesaw', 'treecleaver'],
    }),
    new Cards({
        id: 'bonesaw', name: 'Bonesaw', type: 'attack', mana: 0, target: 'all', weight: .2, addable: false, tier: 'rare', weapon: true,
        dmg: [20, 20],
        draw: {
            dmg: [1, 1],
        },
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [40, 40]
        },
    }),
    new Cards({
        id: 'treecleaver', name: 'Treecleaver', type: 'attack', mana: 3, vanish: true, target: 'all', weight: .8, addable: false, tier: 'rare', weapon: true,
        dmg: [10, 10],
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20, 20]
        },
        trade: ['mantleblight', 'armyfeller'],
    }),
    new Cards({
        id: 'mantleblight', name: 'Mantleblight', type: 'attack', mana: 0, target: 'all', weight: .1, addable: false, tier: 'rare', weapon: true,
        dmg: [10, 10, 10, 10],
        draw: {
            dmg: [1, 1, 1, 1],
        },
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20, 20, 20, 20]
        },
    }),
    new Cards({
        id: 'armyfeller', name: 'Armyfeller', type: 'attack', mana: 3, vanish: true, target: 'all', weight: .6, addable: false, tier: 'rare', weapon: true,
        dmg: [10, 10, 10],
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20, 20, 20]
        },
        trade: ['reaper', 'fleeting_deathblade'],
    }),
    new Cards({
        id: 'reaper', name: 'Reaper', type: 'attack', mana: 1, target: 'all', weight: .05, addable: false, tier: 'legendary', weapon: true,
        dmg: [10, 10, 10, 10, 10, 10, 10],
        draw: {
            dmg: [1, 1, 1, 1, 1, 1, 1],
        },
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            dmg: [20, 20, 20, 20, 20, 20, 20]
        },
    }),
    new Cards({
        id: 'fleeting_deathblade', name: 'Fleeting Deathblade', type: 'attack', mana: 0, expire: 4, target: 'all', weight: .05, addable: false, tier: 'legendary', weapon: true,
        dmg: [10, 10, 10, 10, 10],
        draw: {
            dmg: [1, 1, 1, 1, 1],
        },
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            expire: 6,
            dmg: [20, 20, 20, 20, 20]
        },
    }),
    new Cards({
        id: 'hickory_wand', name: "Hickory Wand", type: 'magic', mana: 3, weight: .7, weapon: true, pack: 'rainbow',
        magic: [{type: 'wild', amount: 5}],
        sound: 'magic4',
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}],
        },
        trade: ['walnut_wand'],
    }),
    new Cards({
        id: 'walnut_wand', name: "Walnut Wand", type: 'magic', mana: 3, weight: 10, weapon: true, addable: false,
        magic: [{type: 'wild', amount: 7}],
        sound: 'magic4',
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 14}],
        },
        trade: ['black_oak_wand'],
    }),
    new Cards({
        id: 'black_oak_wand', name: "Black Oak Wand", type: 'magic', mana: 3, weight: 2, weapon: true, addable: false,
        magic: [{type: 'wild', amount: 12}],
        sound: 'magic4',
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 24}],
        },
        trade: ['hooked_wand'],
    }),
    new Cards({
        id: 'hooked_wand', name: "Hooked Wand", type: 'magic', mana: 3, weight: 1, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 20}],
        sound: 'magic4',
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 40}],
        },
        trade: ['glowing_wand'],
    }),
    new Cards({
        id: 'glowing_wand', name: "Glowing Wand", type: 'magic', mana: 3, weight: .8, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 30}],
        sound: 'magic4',
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 60}],
        },
        trade: ['glowing_sceptre'],
    }),
    new Cards({
        id: 'glowing_sceptre', name: "Glowing Sceptre", type: 'magic', mana: 3, weight: .6, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 40}],
        sound: 'magic4',
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 80}],
        },
        trade: ['darkfeather', 'heart_of_chaos', 'evernature', 'arcana_prismatica'],
    }),
    new Cards({
        id: 'darkfeather', name: "Darkfeather", type: 'magic', mana: 2, weight: .05, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'dark', amount: 70}],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            magic: [{type: 'dark', amount: 100}],
        },
    }),
    new Cards({
        id: 'heart_of_chaos', name: "Heart of Chaos", type: 'magic', mana: 2, weight: .05, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'chaos', amount: 70}],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            magic: [{type: 'chaos', amount: 100}],
        },
    }),
    new Cards({
        id: 'evernature', name: "Evernature", type: 'magic', mana: 2, weight: .05, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'elemental', amount: 70}],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            magic: [{type: 'elemental', amount: 100}],
        },
    }),
    new Cards({
        id: 'arcana_prismatica', name: "Arcana Prismatica", type: 'magic', mana: 2, weight: .05, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'rainbow', amount: 80}],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            magic: [{type: 'rainbow', amount: 110}],
        },
    }),
    new Cards({
        id: 'crooked_staff', name: "Crooked Staff", type: 'magic', mana: 3, weight: .8, weapon: true, pack: 'rainbow',
        magic: [{type: 'wild', amount: 5}],
        sound: 'magic4',
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}],
        },
        trade: ['twisted_staff', 'slotted_staff', 'carved_staff'],
    }),
    new Cards({
        id: 'twisted_staff', name: "Twisted Staff", type: 'magic', mana: 2, use: 2, weight: .8, weapon: true, addable: false, 
        magic: [{type: 'wild', amount: 15}],
        effects: [
            {effect: 'summon', amount: 4, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 30}],
        },
    }),
    new Cards({
        id: 'slotted_staff', name: "Slotted Staff", type: 'magic', mana: 1, use: 3, weight: .8, weapon: true, addable: false, 
        magic: [{type: 'wild', amount: 10}],
        effects: [
            {effect: 'summon', amount: 2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 20}],
        },
    }),
    new Cards({
        id: 'carved_staff', name: "Carved Staff", type: 'magic', mana: 3, weight: 10, weapon: true, addable: false, 
        magic: [{type: 'wild', amount: 10}],
        sound: 'magic4',
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 20}],
        },
        trade: ['gold_staff', 'green_staff', 'purple_staff'],
    }),
    new Cards({
        id: 'gold_staff', name: "Gold Staff", type: 'magic', mana: 2, weight: .5, use: 2, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 20}],
        effects: [
            {effect: 'conjure', amount: 4, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            magic: [{type: 'wild', amount: 30}],
        },
    }),
    new Cards({
        id: 'green_staff', name: "Green Staff", type: 'magic', mana: 1, weight: .5, use: 3, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 10}],
        effects: [
            {effect: 'conjure', amount: 2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 0,
            magic: [{type: 'wild', amount: 15}],
        },
    }),
    new Cards({
        id: 'purple_staff', name: "Purple Staff", type: 'magic', mana: 3, weight: 2, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 12}],
        sound: 'magic4',
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 18}],
        },
        trade: ['sapphire_staff', 'emerald_staff', 'ruby_staff'],
    }),
    new Cards({
        id: 'sapphire_staff', name: "Sapphire Staff", type: 'magic', mana: 1, weight: .3, use: 2, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 30}],
        effects: [
            {effect: 'sorcery', amount: .4, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 0,
            magic: [{type: 'wild', amount: 45}],
        },
    }),
    new Cards({
        id: 'emerald_staff', name: "Emerald Staff", type: 'magic', mana: 0, weight: .3, use: 3, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 15}],
        effects: [
            {effect: 'sorcery', amount: .2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            use: 4,
            magic: [{type: 'wild', amount: 25}],
        },
    }),
    new Cards({
        id: 'ruby_staff', name: "Ruby Staff", type: 'magic', mana: 3, weight: 1, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 14}],
        sound: 'magic4',
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 28}],
        },
        trade: ['emanating_staff', 'shuddering_staff', 'quaking_staff'],
    }),
    new Cards({
        id: 'emanating_staff', name: "Emanating Staff", type: 'magic', mana: 1, weight: .8, use: 2, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 40}],
        effects: [
            {effect: 'lightning', amount: 4, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 0,
            magic: [{type: 'wild', amount: 60}],
        },
    }),
    new Cards({
        id: 'shuddering_staff', name: "Shuddering Staff", type: 'magic', mana: 0, weight: .8, use: 3, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 20}],
        effects: [
            {effect: 'lightning', amount: 2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            use: 4,
            magic: [{type: 'wild', amount: 30}],
        },
    }),
    new Cards({
        id: 'quaking_staff', name: "Quaking Staff", type: 'magic', mana: 3, weight: .8, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 16}],
        sound: 'magic4',
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 32}],
        },
        trade: ['runemark', 'darksphere', 'staff_of_wonder'],
    }),
    new Cards({
        id: 'runemark', name: "Runemark", type: 'magic', mana: 1, weight: .6, use: 2, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 50}],
        effects: [
            {effect: 'thunder', amount: .4, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 0,
            magic: [{type: 'wild', amount: 75}],
        },
    }),
    new Cards({
        id: 'darksphere', name: "Darksphere", type: 'magic', mana: 0, weight: .6, use: 3, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 25}],
        effects: [
            {effect: 'thunder', amount: .2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            use: 4,
            magic: [{type: 'wild', amount: 40}],
        },
    }),
    new Cards({
        id: 'staff_of_wonder', name: "Staff of Wonder", type: 'magic', mana: 3, weight: .6, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 18}],
        sound: 'magic4',
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 36}],
        },
        trade: ['skycaller', 'windrift', 'ember', 'deepcore', 'felcrystal'],
    }),
    new Cards({
        id: 'skycaller', name: "Skycaller", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 70}],
        effects: [
            {effect: 'summon', amount: 10, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            use: 3,
            magic: [{type: 'wild', amount: 100}],
            effects: [
                {effect: 'summon', amount: 15, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'windrift', name: "Windrift", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 70}],
        effects: [
            {effect: 'conjure', amount: 6, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            use: 3,
            magic: [{type: 'wild', amount: 100}],
            effects: [
                {effect: 'conjure', amount: 10, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'ember', name: "Ember", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 70}],
        effects: [
            {effect: 'sorcery', amount: .5, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            use: 3,
            magic: [{type: 'wild', amount: 100}],
            effects: [
                {effect: 'sorcery', amount: .7, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'deepcore', name: "Deepcore", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 70}],
        effects: [
            {effect: 'lightning', amount: 10, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            use: 3,
            magic: [{type: 'wild', amount: 100}],
            effects: [
                {effect: 'lightning', amount: 15, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'felcrystal', name: "Felcrystal", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 70}],
        effects: [
            {effect: 'thunder', amount: .5, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            use: 3,
            magic: [{type: 'wild', amount: 100}],
            effects: [
                {effect: 'thunder', amount: .7, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'burning_branch', name: "Burning Branch", type: 'magic', mana: 3, weight: .8, weapon: true, pack: 'rainbow',
        magic: [{type: 'wild', amount: 5}],
        sound: 'magic4',
        additionalDesc: 'Level I Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}],
        },
        trade: ['flaming_torch'],
    }),
    new Cards({
        id: 'flaming_torch', name: "Flaming Torch", type: 'magic', mana: 3, weight: 10, weapon: true, addable: false, 
        magic: [{type: 'wild', amount: 10}],
        sound: 'magic4',
        additionalDesc: 'Level II Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 20}],
        },
        trade: ['blazing_torch'],
    }),
    new Cards({
        id: 'blazing_torch', name: "Blazing Torch", type: 'magic', mana: 3, weight: .5, use: 2, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 12}],
        effects: [
            {effect: 'mage', amount: 1, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level III Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 24}],
        },
        trade: ['strangefire'],
    }),
    new Cards({
        id: 'strangefire', name: "Strangefire", type: 'magic', mana: 3, weight: 1, use: 2, weapon: true, addable: false, tier: 'uncommon',
        magic: [{type: 'wild', amount: 20}],
        effects: [
            {effect: 'mage', amount: 1, turns: -1},
            {effect: 'enchanter', amount: 1, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level IV Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 40}],
        },
        trade: ['lumenfire'],
    }),
    new Cards({
        id: 'lumenfire', name: "Lumenfire", type: 'magic', mana: 3, weight: .8, use: 2, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 30}],
        effects: [
            {effect: 'mage', amount: 2, turns: -1},
            {effect: 'enchanter', amount: 1, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level V Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 60}],
        },
        trade: ['endless_light'],
    }),
    new Cards({
        id: 'endless_light', name: "Endless Light", type: 'magic', mana: 3, weight: .6, use: 2, weapon: true, addable: false, tier: 'rare',
        magic: [{type: 'wild', amount: 40}],
        effects: [
            {effect: 'mage', amount: 2, turns: -1},
            {effect: 'enchanter', amount: 2, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VI Weapon',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 80}],
        },
        trade: ['dreadfurnace'],
    }),
    new Cards({
        id: 'dreadfurnace', name: "Dreadfurnace", type: 'magic', mana: 2, weight: .05, use: 2, weapon: true, addable: false, tier: 'legendary',
        magic: [{type: 'wild', amount: 50}],
        effects: [
            {effect: 'mage', amount: 3, turns: -1},
            {effect: 'enchanter', amount: 3, turns: -1}
        ],
        sound: 'magic4',
        additionalDesc: 'Level VII Weapon',
        slots: 1,
        shardUpgrades: {
            mana: 1,
            effects: [
                {effect: 'mage', amount: 4, turns: -1},
                {effect: 'enchanter', amount: 4, turns: -1}
            ],
            magic: [{type: 'wild', amount: 75}],
        },
    }),


    
    



    /* ATTACK CARDS */
    /* Common: */
    new Cards({
        id: 'parry', name: 'Parry', target: 'monster', type: 'attack', mana: 1, weight: 8, 
        blk: [9],
        dmg: [6],
        slots: 2,
        fireShardUpgrades: {
            blk: [18],
            dmg: [12],
            dmg_2: [24]
        },
        iceShardUpgrades: {
            blk: [18],
            dmg: [18],
            blk_2: [24]
        },
        bothShardUpgrades: {
            blk: [18],
            dmg: [12]
        },
    }),
    new Cards({
        id: 'stomp', name: 'Stomp', type: 'attack', mana: 2, target: 'monster', 
        dmg: [20],
        sound: 'attack2',
        effects: [
            {effect: 'might', amount: -4, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            mana: 1,
            effects: [
                {effect: 'might', amount: -8, turns: 2, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'quick_buck', name: 'Quick Buck', type: 'attack', mana: 0, vanish: true, target: 'monster',
        dmg: [20],
        sound: 'attack2',
        slots: 1,
        shardUpgrades: {
            natural: true,
            dmg: [40]
        },
    }),
    new Cards({
        id: 'hind_kick', name: 'Hind Kick', type: 'attack', target: 'monster', mana: 1, linger: 1,
        dmg: [8, 8],
        sound: 'attack2',
        slots: 1,
        shardUpgrades: {
            dmg: [14, 14],
            mana: 0
        },
    }),
    new Cards({
        id: 'quick_stab', name: 'Quick Stab', type: 'attack', target: 'monster', mana: 0, weight: 6, pack: 'cycle',
        dmg: [6],
        draw: {
            actions: [
                {action: 'draw', value: 1}
            ]
        },
        slots: 1,
        shardUpgrades: {
            dmg: [10],
            draw: {
                actions: [
                    {action: 'draw', value: 2}
                ]
            },
        },
    }),
    new Cards({
        id: 'hammer_thrust', name: 'Hammer Thrust', type: 'attack', target: 'monster', mana: 2, weight: 4,
        dmg: [18],
        sound: 'attack2',
        effects: [
            {effect: 'punch', amount: -.25, turns: 1, hex: true},
            {effect: 'might', amount: -2, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [28],
            effects: [
                {effect: 'punch', amount: -.5, turns: 1, hex: true},
                {effect: 'might', amount: -4, turns: 1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'clever_trick', name: 'Clever Trick', type: 'attack', target: 'monster', mana: 1, weight: 1, courage: 3, pack: 'combine',
        dmg: [10],
        actions: [
            {action: 'ensharden', type: 'random', select: -1, from: 'handCards', random: true}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [20],
            retain: true
        },
    }),
    new Cards({
        id: 'pierce', name: 'Pierce', type: 'attack', mana: 1, target: 'monster', vanish: true,
        dmg: [18],
        slots: 1,
        shardUpgrades: {
            dmg: [36],
            vanish: false
        },
    }),
    new Cards({
        id: 'tail_whip', name: 'Tail Whip', type: 'attack', mana: 2, target: 'monster', ephemeral: true,
        dmg: [4, 5, 6, 7, 8],
        slots: 1,
        shardUpgrades: {
            dmg: [5, 6, 7, 8, 9],
            ephemeral: false
        },
    }),
    new Cards({
        id: 'burning_strike', name: 'Burning Strike', type: 'attack', mana: 2, target: 'monster', expire: 2,
        dmg: [45],
        slots: 2,
        shardUpgrades: {
            dmg: [60],
            natural: true
        },
        bothShardUpgrades: {
            dmg: [90]
        },
    }),
    new Cards({
        id: 'wing_beat', name: 'Wing Beat', type: 'attack', mana: 1, target: 'monster',
        dmg: [20],
        actions: [
            {action: 'stat', what: 'health', key: 'current', value: -2}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [30],
            effects: [
                {effect: 'might', amount: 2, turns: -1},
            ],
        },
    }),
    new Cards({
        id: 'unstable_attack', name: 'Unstable Attack', type: 'attack', mana: 0, target: 'monster', breakable: true, use: 1, retain: true,
        dmg: [30],
        slots: 1,
        shardUpgrades: {
            use: 2,
            dmg: [50],
        },
    }),
    new Cards({
        id: 'hinder_strike', name: 'Hinder Strike', type: 'attack', mana: 1, target: 'monster', weight: 2, pack: 'rainbow',
        dmg: [10],
        effects: [
            {effect: 'vex', amount: 1, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [20],
            effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'blitz', name: 'Blitz', type: 'attack', mana: 1, target: 'monster', weight: 1,
        dmg: [3, 3, 3],
        slots: 1,
        shardUpgrades: {
            dmg: [3, 3, 3, 3, 3, 3],
            sparkle: {
                dmg: [3, 3, 3, 3, 3, 3]
            }
        },
        sparkle: {
            dmg: [3, 3, 3]
        }
    }),
    new Cards({
        id: 'concuss', name: 'Concuss', type: 'attack', mana: 2, target: 'monster', weight: 1,
        dmg: [16],
        slots: 1,
        shardUpgrades: {
            dmg: [32],
            shimmer: {
                dmg: [32],
                blk: [32]
            }
        },
        shimmer: {
            dmg: [16],
            blk: [16]
        }
    }),
    new Cards({
        id: 'ambush', name: 'Ambush', type: 'attack', mana: 2, target: 'monster', weight: 1,
        dmg: [12],
        slots: 1,
        shardUpgrades: {
            dmg: [24],
            aura: {
                dmg: [24],
                actions: [
                    {action: 'addCard', value: 2, what: 'boost', to: 'handCards'},
                ],
            }
        },
        aura: {
            dmg: [12],
            actions: [
                {action: 'addCard', value: 2, what: 'boost', to: 'handCards'},
            ],
        }
    }),
    new Cards({
        id: 'wing_sweep', name: 'Wing Sweep', type: 'attack', mana: 1, target: 'all', weight: 2,
        dmg: [8],
        slots: 2,
        shardUpgrades: {
            dmg: [16]
        },
        bothShardUpgrades: {
            dmg: [24]
        },
    }),
    new Cards({
        id: 'timed_attack', name: 'Timed Attack', type: 'attack', target: 'monster', mana: 1, retain: true, pack: 'combine',
        dmg: [5, 5],
        slots: 1,
        shardUpgrades: {
            dmg: [10, 10]
        },
    }),
    new Cards({
        id: 'cheap_shot', name: 'Cheap Shot', type: 'attack', target: 'monster', mana: 0, pack: 'combine', vanish: true, retain: true,
        dmg: [7],
        slots: 1,
        shardUpgrades: {
            dmg: [14]
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'head_shot', to: 'drawCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'throwing_knives', name: 'Throwing Knives', type: 'attack', target: 'monster', mana: 0, pack: 'combine', linger: 4, weight: 2,
        dmg: [1],
        slots: 1,
        iceShardUpgrades: {
            linger: 6,
            use: 6,
        },
        fireShardUpgrades: {
            dmg: [3],
            use: 4
        }
    }),



    /* Uncommon: */
    new Cards({
        id: 'stampede', name: 'Stampede', type: 'attack', target: 'monster', mana: '?', tier: 'uncommon', weight: 7, 
        dmg: [8],
        sound: 'attack3',
        slots: 2,
        shardUpgrades: {
            dmg: [16],
        },
        bothShardUpgrades: {
            dmg: [24]
        },
    }),
    new Cards({
        id: 'spin_kick', name: 'Spin Kick', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 6, 
        dmg: [2, 2, 2, 2],
        sound: 'attack1',
        actions: [
            {action: 'addCard', value: 1, what: 'hind_kick', to: 'handCards'},
        ],
        draw: {
            blk: [10],
        },
        slots: 1,
        shardUpgrades: {
            dmg: [2, 2, 2, 2, 2, 2],
            linger: 1,
            actions: [
                {action: 'addCard', value: 1, what: 'hind_kick', to: 'handCards', with: ['random']},
            ],
        }
    }),
    new Cards({
        id: 'exposed_strike', name: 'Exposed Strike', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 6, 
        dmg: [18],
        draw: {
            dmg: [2],
            target: 'player'
        },
        slots: 2,
        shardUpgrades: {
            dmg: [28],
            draw: {
                dmg: [1],
                target: 'player'
            },
        },
        bothShardUpgrades: {
            dmg: [36],
            draw: {
                dmg: [2],
                target: 'monster'
            }
        },
    }),
    new Cards({
        id: 'familiar_strike', name: 'Familiar Strike', type: 'attack', target: 'monster', mana: 3, tier: 'uncommon', weight: 3, courage: 3, pack: 'rainbow',
        dmg: [18],
        actions: [
            {action: 'addCard', value: 1, what: 'familiar_agony', to: 'handCards'},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'familiar_agony', to: 'handCards'},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'familiar_agony', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'frenzied_charge', name: 'Frenzied Charge', type: 'attack', target: 'monster', mana: 2, tier: 'uncommon', pack: 'cycle',
        dmg: [20],
        sound: 'attack5',
        actions: [
            {action: 'discard', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [40]
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'might', amount: 2, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'rainbow_thrust', name: 'Rainbow Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', pack: 'rainbow',
        dmg: [7],
        sound: 'attack4',
        magic: [{type: 'rainbow', amount: 10}], 
        slots: 1,
        shardUpgrades: {
            dmg: [14],
            magic: [{type: 'rainbow', amount: 20}], 
        },
    }),
    new Cards({
        id: 'chaos_thrust', name: 'Chaos Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 4, courage: 3, pack: 'rainbow',
        dmg: [7],
        magic: [{type: 'chaos', amount: 7}], 
        slots: 1,
        shardUpgrades: {
            dmg: [14],
            magic: [{type: 'chaos', amount: 14}], 
        },
    }),
    new Cards({
        id: 'elemental_thrust', name: 'Elemental Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 4, courage: 3, pack: 'rainbow',
        dmg: [7],
        magic: [{type: 'elemental', amount: 7}], 
        slots: 1,
        shardUpgrades: {
            dmg: [14],
            magic: [{type: 'elemental', amount: 14}],
        },
    }),
    new Cards({
        id: 'dark_thrust', name: 'Dark Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 4, courage: 3, pack: 'rainbow',
        dmg: [7],
        magic: [{type: 'dark', amount: 7}], 
        slots: 1,
        shardUpgrades: {
            dmg: [14],
            magic: [{type: 'dark', amount: 14}], 
        },
    }),
    new Cards({
        id: 'arsenal', name: 'Arsenal', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon',
        dmg: [14],
        sound: 'attack2',
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards', modifiers: {mana: 0, vanish: true}},
            ],
            actions_2: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards', with: ['flame', 'flame'], modifiers: {mana: 0, vanish: true}},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards', modifiers: {mana: 0, vanish: true}},
            ],
            actions_2: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards', with: ['frost', 'frost'], modifiers: {mana: 0, vanish: true}},
            ],
        },
    }),
    new Cards({
        id: 'smash_and_grab', name: 'Smash & Grab', type: 'attack', vanish: true, target: 'monster', mana: 1, tier: 'uncommon', weight: 4, pack: 'cycle',
        dmg: [14],
        sound: 'attack7',
        actions: [
            {action: 'addCard', value: 2, type: 'attack', to: 'drawCards'},
            {action: 'draw', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [32],
            actions: [
                {action: 'addCard', value: 2, type: 'attack', to: 'drawCards'},
                {action: 'draw', value: 2},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, type: 'attack', to: 'drawCards', modifiers: {mana: 0, vanish: true}},
                {action: 'draw', value: 1},
            ],
        },
    }),
    new Cards({
        id: 'fury', name: 'Fury', type: 'attack', target: 'monster', mana: 2, tier: 'uncommon', weight: 4, pack: 'combine',
        dmg: [20],
        sound: 'attack8',
        abilities: [
            {ability: 'panic', turns: 2, enabled: true, target: 'player'}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [30],
            abilities: [
                {ability: 'panic', turns: 3, enabled: true, target: 'player'}
            ],
        },
        bothShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'premeditated_slash', name: 'Premeditated Slash', type: 'attack', target: 'monster', mana: 0, tier: 'uncommon', use: 1, pack: 'combine', 
        dmg: [8],
        actions: [
            {action: 'addCard', value: 2, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [16],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'battle_move', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'collateral_damage', name: 'Collateral Damage', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 3, courage: 3, 
        dmg: [9],
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [15],
            actions: [
                {action: 'destroy', value: 2},
            ],
        },
        iceShardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'surprise_attack', name: 'Surprise Attack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 7, 
        dmg: [2, 3, 4],
        sound: 'attack9',
        draw: {
            dmg: [5],
            actions: [
                {action: 'addCard', value: 2, what: 'slash', to: 'handCards'},
            ]
        },
        slots: 1,
        shardUpgrades: {
            draw: {
                dmg: [10],
                actions: [
                    {action: 'addCard', value: 4, what: 'slash', to: 'handCards', with: ['flame']},
                ]
            },
        },
    }),
    new Cards({
        id: 'swarmstrike', name: 'Swarmstrike', type: 'attack', target: 'monster', mana: 0, tier: 'uncommon', weight: 1, pack: 'cycle', vanish: true,
        dmg: [1, 1, 1, 1, 1, 1],
        sound: 'attack1',
        draw: {
            actions: [
                {action: 'addCard', value: 1, what: 'swarmstrike', to: 'handCards'},
            ]
        },
        slots: 2,
        shardUpgrades: {
            draw: {
                actions: [
                    {action: 'addCard', value: 1, what: 'swarmstrike', to: 'handCards'},
                    {action: 'addCard', value: 1, what: 'swarmstrike', to: 'discardCards'},
                ]
            },
        },
        bothShardUpgrades: {
            draw: {
                actions: [
                    {action: 'addCard', value: 1, what: 'swarmstrike', to: 'handCards', with: ['random', 'random']},
                    {action: 'addCard', value: 1, what: 'swarmstrike', to: 'discardCards', with: ['random', 'random']},
                ]
            },
        },
    }),
    new Cards({
        id: 'auto_attack', name: 'Auto Attack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', weight: 6, 
        dmg: [12],
        draw: {
            dmg: [6],
        },
        slots: 1,
        fireShardUpgrades: {
            dmg: [24]
        },
        iceShardUpgrades: {
            draw: {
                dmg: [12],
            },
        },
    }),
    new Cards({
        id: 'sudden_barrage', name: 'Sudden Barrage', type: 'attack', target: 'all', mana: 0, tier: 'uncommon', weight: 2, vanish: true,
        dmg: [2, 2, 2, 2],
        effects: [
            {effect: 'might', amount: -1, turns: -1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [3, 3, 3, 3],
            effects: [
                {effect: 'might', amount: -2, turns: -1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'provisioned_attack', name: 'Provisioned Attack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', vanish: true, weight: 8, pack: 'combine', expire: 1,
        dmg: [15],
        actions: [
            {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            dmg: [30],
            natural: true,
            actions: [
                {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards', with: ['flame']},
            ],
            dmg_2: [45],
            actions_2: [
                {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards', with: ['flame', 'flame']},
            ],
        },
        iceShardUpgrades: {
            dmg: [30],
            natural: true,
            actions: [
                {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards', with: ['frost']},
            ],
            dmg_2: [45],
            actions_2: [
                {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards', with: ['frost', 'frost']},
            ],
        },
        bothShardUpgrades: {
            dmg: [30],
            actions: [
                {action: 'addCard', value: 1, what: 'provisioned_attack', to: 'drawCards', with: ['frost', 'flame']},
            ],
        }
    }),
    new Cards({
        id: 'thwack', name: 'Thwack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', pack: 'combine', retain: true, vanish: true,
        dmg: [15],
        slots: 1,
        shardUpgrades: {
            dmg: [30]
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'thrash', to: 'drawCards'},
            ]
        },
    }),



    /* Rare: */
    new Cards({
        id: 'devastator', name: 'Devastator', type: 'attack', target: 'monster', mana: 3, tier: 'rare', courage: 4, 
        dmg: [8, 8, 8],
        effects: [
            {effect: 'momentum', amount: 2}
        ],
        actions: [
            {action: 'addCard', value: 3, what: 'slash', to: 'handCards'},
        ],
        slots: 2,
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'momentous_slash', to: 'handCards'},
            ],
            actions_2: [
                {action: 'addCard', value: 3, what: 'momentous_slash', to: 'handCards', with: ['frost']},
            ]
        },
        fireShardUpgrades: {
            effects: [
                {effect: 'momentum', amount: 3}
            ],
            effects_2: [
                {effect: 'momentum', amount: 4}
            ]
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'momentous_slash', to: 'handCards'},
            ],
            effects: [
                {effect: 'momentum', amount: 3}
            ],
        }
    }),
    new Cards({
        id: 'weaponry', name: 'Weaponry', type: 'attack', target: 'monster', mana: 2, tier: 'rare', weight: 3, courage: 3, 
        dmg: [15],
        sound: 'attack2',
        draw: {
            dmg: [2],
            blk: [4]
        },
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'attack', tier: 'uncommon', to: 'handCards', modifiers: {mana: 0, vanish: true}},
        ],
        slots: 2,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', tier: 'uncommon', to: 'handCards', with: ['flame'], modifiers: {mana: 0, vanish: true}},
            ],
            actions_2: [
                {action: 'addCard', select: 1, value: 4, type: 'attack', tier: 'uncommon', to: 'handCards', with: ['flame'], modifiers: {mana: 0, vanish: true}},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'attack', tier: 'uncommon', to: 'handCards', with: ['frost'], modifiers: {mana: 0, vanish: true}},
            ],
            actions_2: [
                {action: 'addCard', select: 1, value: 4, type: 'attack', tier: 'uncommon', to: 'handCards', with: ['frost'], modifiers: {mana: 0, vanish: true}},
            ],
        },
        bothShardUpgrades: {
            dmg: [30],
            actions: [
                {action: 'addCard', select: 1, value: 4, type: 'attack', tier: 'uncommon', to: 'handCards', modifiers: {mana: 0, vanish: true}},
            ],
        },
    }),
    new Cards({
        id: 'amass', name: 'Amass', type: 'attack', target: 'monster', vanish: true, mana: 1, tier: 'rare', weight: 3, courage: 3, pack: 'rainbow',
        dmg: [20],
        actions: [
            {action: 'addCard', value: 1, type: 'attack', tier: 'uncommon', to: 'drawCards'},
            {action: 'addCard', value: 1, type: 'attack', tier: 'rare', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, type: 'attack', tier: 'common', to: 'drawCards', modifiers: {mana: 0}},
                {action: 'addCard', value: 1, type: 'attack', tier: 'uncommon', to: 'drawCards', modifiers: {mana: 0}},
                {action: 'addCard', value: 1, type: 'attack', tier: 'rare', to: 'drawCards'},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, type: 'attack', tier: 'common', to: 'drawCards', modifiers: {mana: 0}},
                {action: 'addCard', value: 1, type: 'attack', tier: 'uncommon', to: 'drawCards', modifiers: {mana: 0}},
                {action: 'addCard', value: 1, type: 'attack', tier: 'rare', to: 'drawCards', modifiers: {mana: 0}},
            ],
        },
    }),
    new Cards({
        id: 'berserk', name: 'Berserk', type: 'attack', target: 'monster', mana: 2, tier: 'rare', pack: 'cycle', weight: 4, courage: 4,  
        dmg: [4, 4, 4, 4, 4],
        actions: [
            {action: 'destroy', value: 1},
        ],
        draw: {
            dmg: [1, 1, 1],
            target: 'player'
        },
        slots: 2,
        fireShardUpgrades: {
            dmg: [4, 4, 4, 4, 4, 4, 4],
            draw_2: {
                dmg: [1, 1, 1],
                target: 'monster'
            },
        },
        iceShardUpgrades: {
            dmg: [4, 4, 4, 4, 4, 4, 4],
            mana_2: 1
        },
        bothShardUpgrades: {
            dmg: [4, 4, 4, 4, 4, 4, 4],
            draw: {
                dmg: [1],
                target: 'monster'
            },
        },
    }),
    new Cards({
        id: 'clever_barrage', name: 'Clever Barrage', type: 'attack', target: 'monster', weight: .5, mana: 3, tier: 'rare', ephemeral: true, courage: 4, pack: 'combine',
        dmg: [6, 5, 4, 3],
        actions: [
            {action: 'ensharden', type: 'random', select: -1, from: 'handCards', random: true}
        ],
        slots: 2,
        shardUpgrades: {
            dmg: [7, 6, 5, 4, 3, 2],
            actions: [
                {action: 'ensharden', type: 'random', select: -1, from: 'allCards', random: true}
            ],
            ephemeral: false,
        },
        bothShardUpgrades: {
            dmg: [8, 7, 6, 5, 4, 3, 2, 1],
            actions: [
                {action: 'ensharden', type: 'random', select: -1, from: 'allCards', random: true}
            ],
            ephemeral: false,
            mana: 2,
        },
    }),
    new Cards({
        id: 'freeze', name: 'Freeze', type: 'attack', target: 'monster', mana: 3, tier: 'rare', weight: .5, courage: 5, vanish: true,
        dmg: [20],
        sound: 'attack10',
        actions: [
            {action: 'ensharden', type: 'frost', select: -1, from: 'handCards', random: true}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'frost', select: -1, from: 'allCards', random: true}
            ],
        },
        bothShardUpgrades: {
            mana: 2
        },
    }),
    new Cards({
        id: 'scorch', name: 'Scorch', type: 'attack', target: 'monster', mana: 3, tier: 'rare', weight: .5, courage: 5, vanish: true,
        dmg: [20],
        sound: 'attack11',
        actions: [
            {action: 'ensharden', type: 'flame', select: -1, from: 'handCards', random: true}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'flame', select: -1, from: 'allCards', random: true}
            ],
        },
        bothShardUpgrades: {
            mana: 2
        },
    }),
    new Cards({
        id: 'ultra_kill', name: 'Ultra Kill', type: 'attack', target: 'monster', mana: 3, tier: 'rare', weight: 2, courage: 5, 
        dmg: [1],
        sound: 'attack12',
        effects: [
            {effect: 'fatality', amount: 1.2, turns: 1, persist: true},
            {effect: 'punch', amount: .05, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.3, turns: 1, persist: true},
                {effect: 'punch', amount: .1, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.3, turns: 1, persist: true},
                {effect: 'punch', amount: .1, turns: -1}
            ],
            effects_2: [
                {effect: 'fatality', amount: 1.7, turns: 1, persist: true},
                {effect: 'punch', amount: .15, turns: -1}
            ],
            mana_2: 2,
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.5, turns: 1, persist: true},
                {effect: 'punch', amount: .15, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'auxiliary_kill', name: 'Auxiliary Kill', type: 'attack', target: 'monster', mana: 2, tier: 'rare', weight: 6, courage: 3, pack: 'combine',
        dmg: [25],
        sound: 'attack13',
        actions: [
            {action: 'playOldest'},
        ],
        slots: 2,
        shardUpgrades: {
            dmg: [35],
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
        },
        fireShardUpgrades: {
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
            actions_2: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards', with: ['flame']},
            ],
            dmg_2: [45]
        },
        iceShardUpgrades: {
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
            mana_2: 1
        },
    }),
    new Cards({
        id: 'mega_kill', name: 'Mega Kill', type: 'attack', target: 'monster', mana: 2, tier: 'rare', pack: 'combine', weight: 4, courage: 4, 
        dmg: [12, 12],
        sound: 'attack14',
        actions: [
            {action: 'addCard', value: 2, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            dmg: [14, 14],
            actions: [
                {action: 'addCard', value: 3, what: 'battle_move', to: 'drawCards'},
            ],
        },
        bothShardUpgrades: {
            dmg: [16, 16],
            actions: [
                {action: 'addCard', value: 4, what: 'battle_move', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'disintegrate', name: 'Disintegrate', type: 'attack', target: 'monster', mana: 1, tier: 'rare', pack: 'cycle', weight: 6, courage: 3, 
        dmg: [20],
        sound: 'attack15',
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [30],
            actions: [
                {action: 'draw', value: 1},
                {action: 'destroy', value: 1},
            ],
        },
    }),
    new Cards({
        id: 'obliterate', name: 'Obliterate', type: 'attack', target: 'all', mana: 2, tier: 'rare', weight: 2, courage: 5, 
        dmg: [25],
        slots: 2,
        shardUpgrades: {
            dmg: [40],
        },
        bothShardUpgrades: {
            dmg: [65]
        },
    }),


    /* Legendary: */
    new Cards({
        id: 'death_blow', name: 'Death Blow', type: 'attack', target: 'monster', mana: 2, tier: 'legendary', courage: 8, 
        dmg: [70],
        sound: 'attack20',
        slots: 1,
        shardUpgrades: {
            dmg: [140],
        },
    }),
    new Cards({
        id: 'overwhelming_barrage', name: 'Overwhelming Barrage', type: 'attack', target: 'monster', mana: 1, tier: 'legendary', courage: 8, 
        dmg: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        sound: 'attack18',
        effects: [
            {effect: 'might', amount: 3, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'might', amount: 6, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'critical_hit', name: 'Critical Hit', type: 'attack', target: 'monster', mana: 0, tier: 'legendary', courage: 8, vanish: true, retain: true,
        dmg: [45],
        sound: 'attack16',
        slots: 1,
        shardUpgrades: {
            dmg: [90],
        },
    }),
    new Cards({
        id: 'erupt', name: 'Erupt', type: 'attack', target: 'monster', mana: 3, tier: 'legendary', courage: 8,
        dmg: [10],
        sound: 'attack22',
        effects: [
            {effect: 'momentum', amount: 2, turns: 2}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'fleeting_slash', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'slash', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'lingering_slash', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'momentous_slash', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [20],
            actions: [
                {action: 'addCard', value: 2, what: 'fleeting_slash', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'slash', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'lingering_slash', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'momentous_slash', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'monster_kill', name: 'Monster Kill', type: 'attack', target: 'monster', vanish: true, mana: 3, tier: 'legendary', courage: 8, pack: 'combine',
        dmg: [15],
        sound: 'attack19',
        effects: [
            {effect: 'fatality', amount: 1.5, turns: 1, persist: true}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [25],
            effects: [
                {effect: 'fatality', amount: 2, turns: 1, persist: true}
            ],
        },
    }),
    new Cards({
        id: 'malevolent_blow', name: 'Malevolent Blow', type: 'attack', target: 'monster', mana: 2, tier: 'legendary', courage: 8, pack: 'cycle',
        dmg: [3, 3, 3, 3],
        sound: 'attack21',
        effects: [
            {effect: 'might', amount: 1, turns: -1}
        ],
        draw: {
            effects: [
                {effect: 'might', amount: 1, turns: -1}
            ],
        },
        slots: 1,
        shardUpgrades: {
            dmg: [3, 3, 3, 3, 3, 3],
            draw: {
                effects: [
                    {effect: 'might', amount: 2, turns: -1}
                ],
            },
            effects: [
                {effect: 'might', amount: 2, turns: -1}
            ],
        },
    }),
    
    
    




    /* TOOL CARDS */
    /* Common: */
    new Cards({
        id: 'divert', name: 'Divert', type: 'tool', mana: 0, weight: 3, use: 3, 
        blk: [7],
        armor: [2],
        slots: 1,
        shardUpgrades: {
            blk: [14],
            armor: [4],
            use: 4
        },
    }),
    new Cards({
        id: 'recoil', name: 'Recoil', type: 'tool', mana: 0, weight: 4, pack: 'cycle',
        blk: [7],
        actions: [
            {action: 'discard', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            blk: [12],
            actions: [
                {action: 'draw', value: 1},
                {action: 'discard', value: 1},
            ],
        },
    }),
    new Cards({
        id: 'repel', name: 'Repel', type: 'tool', mana: 2, weight: 1, pack: 'cycle', 
        blk: [3, 3, 3, 3, 3],
        actions: [
            {action: 'draw', value: 1},
            {action: 'discard', value: 1},
        ],
        slots: 2,
        shardUpgrades: {
            blk: [3, 3, 3, 3, 3, 3, 3],
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 2},
            ],
        },
        bothShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'thwart', name: 'Thwart', type: 'tool', target: 'monster', mana: 2, retain: true, weight: 4, pack: 'combine',
        blk: [15],
        effects: [
            {effect: 'might', amount: -1, turns: 1, hex: true},
            {effect: 'punch', amount: -.1, turns: 1, hex: true}
        ],
        slots: 2,
        shardUpgrades: {
            blk: [20],
            effects: [
                {effect: 'might', amount: -3, turns: 1, hex: true},
                {effect: 'punch', amount: -.2, turns: 1, hex: true}
            ],
        },
        bothShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'deter', name: 'Deter', type: 'tool', target: 'monster', mana: 2, linger: 1, natural: true, pack: 'rainbow',
        blk: [10],
        effects: [
            {effect: 'punch', amount: -.3, turns: 1, hex: true}
        ],
        slots: 2,
        shardUpgrades: {
            blk: [15],
            effects: [
                {effect: 'punch', amount: -.4, turns: 1, hex: true}
            ],
        },
        bothShardUpgrades: {
            mana: 1,
            blk: [20],
        },
    }),
    new Cards({
        id: 'chain_mail_armor', name: 'Chain Mail Armor', type: 'tool', mana: 1, weight: 2, courage: 3, use: 2, 
        armor: [12],
        slots: 1,
        shardUpgrades: {
            armor: [24],
            use: 3
        },
    }),
    new Cards({
        id: 'cleanse', name: 'Cleanse', type: 'tool', mana: 1, pack: 'cycle', weight: 1, 
        sound: 'tool1',
        actions: [
            {action: 'draw', value: 1},
            {action: 'discard', value: 1},
            {action: 'destroy', value: 1, optional: true},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 1},
                {action: 'destroy', value: 1, optional: true},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'draw', value: 3},
                {action: 'discard', value: 2},
                {action: 'destroy', value: 1, optional: true},
            ],
        },
    }),
    new Cards({
        id: 'remember', name: 'Remember', type: 'tool', mana: 1, weight: .8, use: 3,
        actions: [
            {action: 'findDiscardCard', value: 1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 0,
            use: 4,
        },
        bothShardUpgrades: {
            actions: [
                {action: 'findDiscardCard', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'glowing_orb', name: 'Glowing Orb', type: 'tool', playable: false, pack: 'cycle',
        discard: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
                {action: 'draw', value: 1},
            ]
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 2},
                    {action: 'draw', value: 2},
                ]
            },
        }
    }),
    new Cards({
        id: 'fractured_orb', name: 'Fractured Orb', type: 'tool', playable: false, weight: 3, pack: 'cycle',
        destroy: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 4},
                {action: 'draw', value: 3},
            ],
        },
        slots: 2,
        shardUpgrades: {
            destroy: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 6},
                    {action: 'draw', value: 4},
                    {action: 'addCard', value: 1, what: 'fractured_orb', to: 'discardCards'},
                ],
            },
        },
        bothShardUpgrades: {
            destroy: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 8},
                    {action: 'draw', value: 5},
                    {action: 'addCard', value: 1, what: 'fractured_orb', to: 'discardCards', with: ['random']},
                ],
            },
        },
        iceShardUpgrades: {
            destroy_2: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 8},
                    {action: 'draw', value: 5},
                    {action: 'addCard', value: 1, what: 'fractured_orb', to: 'discardCards', with: ['random', 'random']},
                ],
            },
        }
    }),
    new Cards({
        id: 'plate_armor', name: 'Plate Armor', type: 'tool', mana: 2, weight: 4, courage: 3, 
        armor: [20],
        slots: 2,
        shardUpgrades: {
            armor: [40],
        },
        bothShardUpgrades: {
            armor: [60]
        },
    }),
    new Cards({
        id: 'fleeting_shelter', name: 'Fleeting Shelter', type: 'tool', mana: 1, expire: 2, weight: 2, pack: 'combine', 
        blk: [20],
        slots: 2,
        shardUpgrades: {
            natural: true,
        },
        bothShardUpgrades: {
            blk: [30],
            retain: true
        },
    }),
    new Cards({
        id: 'fleeting_shield', name: 'Fleeting Shield', type: 'tool', mana: 0, expire: 3, linger: 2, use: 2, pack: 'cycle', weight: 2,
        blk: [12],
        slots: 2,
        shardUpgrades: {
            natural: true,
            blk: [16]
        },
        bothShardUpgrades: {
            expire: 6,
            use: 4,
            linger: 4
        },
    }),
    new Cards({
        id: 'fleeting_refuge', name: 'Fleeting Refuge', type: 'tool', mana: 2, expire: 3, use: 2, weight: 2, natural: true,
        blk: [7, 7, 7],
        slots: 2,
        shardUpgrades: {
            blk: [10, 10, 10],
            expire: 4
        },
        bothShardUpgrades: {
            blk: [13, 13, 13],
            mana: 1
        },
    }),
    new Cards({
        id: 'nullify', name: 'Nullify', type: 'tool', mana: 0, vanish: true, pack: 'rainbow',
        effects: [
            {effect: 'vex', amount: 2, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'vex', amount: 4, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'neigh', name: 'Neigh', type: 'tool', mana: 0, linger: 2, use: 2, weight: 4, target: 'monster',
        effects: [
            {effect: 'punch', amount: -.1, turns: -1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            linger: 4,
            use: 4
        },
    }),
    new Cards({
        id: 'whinny', name: 'Whinny', type: 'tool', mana: 0, linger: 2, use: 2, weight: 4, target: 'monster',
        effects: [
            {effect: 'might', amount: -2, turns: -1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            linger: 4,
            use: 4
        },
    }),
    new Cards({
        id: 'death_stare', name: 'Death Stare', type: 'tool', mana: 1, weight: 2, target: 'monster',
        effects: [
            {effect: 'might', amount: -6, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'might', amount: -12, turns: 1, hex: true}
            ],
            sparkle: {
                effects: [
                    {effect: 'might', amount: 12, turns: 1}
                ],
            }
        },
        sparkle: {
            effects: [
                {effect: 'might', amount: 6, turns: 1}
            ],
        }
    }),
    new Cards({
        id: 'fortify', name: 'Fortify', type: 'tool', mana: 1, weight: 2,
        blk: [12],
        slots: 1,
        shardUpgrades: {
            blk: [24],
            shimmer: {
                blk: [24],
                armor: [12],
            }
        },
        shimmer: {
            blk: [12],
            armor: [6],
        }
    }),
    new Cards({
        id: 'hardened_feathers', name: 'Hardened Feathers', type: 'tool', mana: 1, weight: 2, 
        blk: [12],
        slots: 1,
        shardUpgrades: {
            blk: [24],
            aura: {
                actions: [
                    {action: 'stat', what: 'speed', key: 'current', value: 4}
                ],
            }
        },
        aura: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 2}
            ],
        }
    }),
    new Cards({
        id: 'attuned_barrier', name: 'Attuned Barrier', type: 'tool', mana: 2, pack: 'rainbow',
        descOverride: 'Gain block equal to your max rainbow',
        actions: [
            {action: 'rainbowShield', value: 1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 1,
            descOverride: '<div class="desc-item hidden"><span class="highlight">Mana:</span> 1</div><div class="desc-item">Gain block equal to your max rainbow &times; <span class="highlight">1.5</span></div>',
            actions: [
                {action: 'rainbowShield', value: 1.5}
            ],
        },
        bothShardUpgrades: {
            descOverride: '<div class="desc-item hidden"><span class="highlight">Linger:</span> 1</div><div class="desc-item hidden"><span class="highlight">Mana:</span> 1</div><div class="desc-item">Gain block equal to your max rainbow &times; <span class="highlight">2</span></div>',
            actions: [
                {action: 'rainbowShield', value: 2}
            ],
            linger: 1
        },
    }),
    new Cards({
        id: 'charged_barrier', name: 'Charged Barrier', type: 'tool', mana: 0, pack: 'rainbow',
        descOverride: 'Gain block equal to your summoned rainbow amount',
        actions: [
            {action: 'chargedShield', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            descOverride: '<div class="desc-item">Gain block equal to your summoned rainbow amount &times; <span class="highlight">2</span></div>',
            actions: [
                {action: 'chargedShield', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'fissile', name: 'Fissile', type: 'tool', mana: 0, retain: true, pack: 'combine', vanish: true, 
        slots: 1,
        effects: [
            {effect: 'irradiate', amount: 4, turns: 2}
        ],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'atomic', to: 'drawCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
        shardUpgrades: {
            effects: [
                {effect: 'irradiate', amount: 8, turns: 2}
            ],
        },
    }),
    new Cards({
        id: 'sidestep', name: 'Sidestep', type: 'tool', mana: 0, pack: 'combine', vanish: true, retain: true, 
        blk: [8],
        slots: 1,
        shardUpgrades: {
            blk: [16]
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'forestall', to: 'drawCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
    }),




    /* Uncommon: */
    new Cards({
        id: 'fortress', name: 'Fortress', type: 'tool', mana: '?', tier: 'uncommon', weight: 7, 
        blk: [12],
        draw: {
            blk: [4],
        },
        slots: 1,
        fireShardUpgrades: {
            blk: [24],
        },
        iceShardUpgrades: {
            draw: {
                blk: [12],
            },
        },
    }),
    new Cards({
        id: 'safeguard', name: 'Safeguard', type: 'tool', mana: 2, tier: 'uncommon', pack: 'combine',
        blk: [18],
        actions: [
            {action: 'addCard', value: 1, what: 'safety', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'safety', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'safety', to: 'handCards', with: ['flame']},
            ],
        },
        iceShardUpgrades: {
            blk: [36],
        },
    }),
    new Cards({
        id: 'gallop', name: 'Gallop', type: 'tool', mana: 1, tier: 'uncommon', use: 1,
        sound: 'tool4',
        actions: [
            {action: 'addCard', value: 1, what: 'boost', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            use: 2,
            actions: [
                {action: 'addCard', value: 2, what: 'boost', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'sprint', name: 'Sprint', type: 'tool', mana: 1, tier: 'uncommon', use: 1, weight: 2, courage: 3, pack: 'combine',
        draw: {
            dmg: [1],
            target: 'player'
        },
        actions: [
            {action: 'stat', what: 'speed', key: 'current', value: 4},
            {action: 'stat', what: 'health', key: 'current', value: -4}
        ],
        slots: 1,
        fireShardUpgrades: {
            use: 2,
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 6},
                {action: 'stat', what: 'health', key: 'current', value: -4}
            ],
        },
        iceShardUpgrades: {
            draw: {
                dmg: [1],
                target: 'monster'
            },
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 4},
            ],
        },
    }),
    new Cards({
        id: 'gift', name: 'Gift', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, weight: 6, pack: 'rainbow',
        sound: 'tool6',
        actions: [
            {action: 'addCard', value: 1, type: 'any', to: 'handCards'}
        ],
        slots: 1,
        fireShardUpgrades: {
            use: 2,
            vanish: false,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, type: 'any', to: 'handCards'}
            ],
        },
    }),
    new Cards({
        id: 'sacrifice', name: 'Sacrifice', type: 'tool', mana: 0, tier: 'uncommon', use: 1, pack: 'cycle', weight: 4, courage: 3, 
        sound: 'tool7',
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 2,
        shardUpgrades: {
            use: 2,
            linger: 2,
        },
        bothShardUpgrades: {
            use: 3,
            retain: true
        },
    }),
    new Cards({
        id: 'purge', name: 'Purge', type: 'tool', mana: 1, tier: 'uncommon',
        blk: [10], 
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            blk: [20], 
        },
    }),
    new Cards({
        id: 'scavenge', name: 'Scavenge', type: 'tool', mana: 0, tier: 'uncommon', 
        sound: 'tool11',
        actions: [
            {action: 'addCard', select: 1, value: 5, type: 'any', to: 'handCards'}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 10, type: 'any', to: 'handCards'}
            ],
        },
    }),
    new Cards({
        id: 'gears_of_war', name: 'Gears of War', type: 'tool', mana: 2, tier: 'uncommon', weight: 4, courage: 3, pack: 'combine',
        sound: 'tool12',
        actions: [
            {action: 'addCard', value: 1, type: 'tool', to: 'drawCards', modifiers: {mana: 0, vanish: true}},
            {action: 'draw', value: 1}
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, type: 'tool', to: 'drawCards', modifiers: {mana: 0, vanish: true}},
                {action: 'draw', value: 2}
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 4, type: 'tool', to: 'drawCards', modifiers: {mana: 0, vanish: true}},
                {action: 'draw', value: 1}
            ],
        },
    }),
    new Cards({
        id: 'beautiful',  name: 'Beautiful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', weight: 2, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'shimmer', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'shimmer', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'shimmer', to: 'handCards'},
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'delightful',  name: 'Delightful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', weight: 2, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'sparkle', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'sparkle', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'sparkle', to: 'handCards'},
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'wonderful',  name: 'Wonderful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', weight: 2, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'aura', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'aura', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'aura', to: 'handCards'},
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'bravery',  name: 'Bravery', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', weight: 2, courage: 3, expire: 2,
        sound: 'tool13',
        actions: [
            {action: 'addCard', value: 1, what: 'courage', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            expire: 4,
            actions: [
                {action: 'addCard', value: 2, what: 'courage', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            expire: 4,
            actions: [
                {action: 'addCard', value: 1, what: 'courage', to: 'handCards'},
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'clever_maneuver', name: 'Clever Maneuver', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', weight: 2, 
        sound: 'tool10',
        actions: [
            {action: 'draw', value: 2},
            {action: 'discard', value: 1},
        ],
        draw: {
            blk: [6],
        },
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'draw', value: 4},
                {action: 'discard', value: 1},
            ],
        },
        iceShardUpgrades: {
            draw: {
                blk: [12],
            },
        },
    }),
    new Cards({
        id: 'riffle', name: 'Riffle', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', weight: 1, 
        sound: 'tool14',
        actions: [
            {action: 'draw', value: 2},
            {action: 'discard', value: 2},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'draw', value: 4},
                {action: 'discard', value: 1},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'draw', value: 3},
                {action: 'discard', value: 3},
            ],
        },
    }),
    new Cards({
        id: 'collect', name: 'Collect', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', weight: 1,
        actions: [
            {action: 'draw', value: 5},
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'draw', value: 8},
            ],
        },
    }),
    new Cards({
        id: 'entity', name: 'Entity', type: 'tool', tier: 'uncommon', playable: false, weight: 2, pack: 'cycle',
        discard: {
            effects: [
                {effect: 'might', amount: 2, turns: -1}
            ],
        },
        slots: 2,
        shardUpgrades: {
            discard: {
                effects: [
                    {effect: 'might', amount: 4, turns: -1}
                ],
            },
        },
        bothShardUpgrades: {
            discard: {
                effects: [
                    {effect: 'might', amount: 6, turns: -1}
                ],
            },
        },
    }),
    new Cards({
        id: 'unstable_field', name: 'Unstable Field', type: 'tool', tier: 'uncommon', playable: false, weight: 3, courage: 3, pack: 'cycle',
        destroy: {
            effects: [
                {effect: 'might', amount: 8, turns: -1}
            ],
        },
        slots: 2,
        shardUpgrades: {
            destroy: {
                effects: [
                    {effect: 'might', amount: 10, turns: -1}
                ],
                actions: [
                    {action: 'addCard', value: 1, what: 'unstable_field', to: 'discardCards'},
                ],
            },
        },
        bothShardUpgrades: {
            destroy: {
                effects: [
                    {effect: 'might', amount: 12, turns: -1}
                ],
                actions: [
                    {action: 'addCard', value: 1, what: 'unstable_field', to: 'discardCards', with: ['random']},
                ],
            },
        },
        flameShardUpgrades: {
            destroy_2: {
                effects: [
                    {effect: 'might', amount: 14, turns: -1}
                ],
                actions: [
                    {action: 'addCard', value: 1, what: 'unstable_field', to: 'discardCards', with: ['random', 'random']},
                ],
            },
        }
    }),
    new Cards({
        id: 'disavow', name: 'Disavow', type: 'tool', mana: 2, tier: 'uncommon', weight: 3, courage: 3, pack: 'cycle',
        sound: 'tool8',
        actions: [
            {action: 'addCard', value: 1, what: 'release', to: 'handCards'},
            {action: 'addCard', select: 1, value: 4, type: 'bottled', to: 'handCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 1,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'release', to: 'handCards'},
                {action: 'addCard', select: 1, value: 6, type: 'bottled', to: 'handCards'},
            ],
            actions_2: [
                {action: 'addCard', value: 2, what: 'release', to: 'handCards'},
                {action: 'addCard', select: 2, value: 8, type: 'bottled', to: 'handCards', with: ['frost']},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'release', to: 'handCards'},
                {action: 'addCard', select: 2, value: 6, type: 'bottled', to: 'handCards'},
            ],
        }
    }),
    new Cards({
        id: 'ruin', name: 'Ruin', type: 'tool', mana: 3, tier: 'uncommon', weight: 3, courage: 3, pack: 'cycle',
        sound: 'tool9',
        actions: [
            {action: 'addCard', value: 1, what: 'dismantle', to: 'handCards'},
            {action: 'addCard', select: 1, value: 4, type: 'bottled', to: 'handCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 2,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'dismantle', to: 'handCards'},
                {action: 'addCard', select: 1, value: 6, type: 'bottled', to: 'handCards'},
            ],
            actions_2: [
                {action: 'addCard', value: 2, what: 'dismantle', to: 'handCards'},
                {action: 'addCard', select: 2, value: 8, type: 'bottled', to: 'handCards', with: ['frost']},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'dismantle', to: 'handCards'},
                {action: 'addCard', select: 2, value: 6, type: 'bottled', to: 'handCards'},
            ],
        }
    }),
    new Cards({
        id: 'make_ready', name: 'Make Ready', type: 'tool', mana: 2, tier: 'uncommon', pack: 'cycle',
        sound: 'tool9',
        actions: [
            {action: 'addCard', value: 1, what: 'acquire', to: 'handCards'},
            {action: 'addCard', select: 1, value: 4, type: 'bottled', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 1,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'acquire', to: 'handCards'},
                {action: 'addCard', select: 1, value: 6, type: 'bottled', to: 'drawCards'},
            ],
            actions_2: [
                {action: 'addCard', value: 2, what: 'acquire', to: 'handCards', with: ['frost']},
                {action: 'addCard', select: 2, value: 8, type: 'bottled', to: 'drawCards'},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'acquire', to: 'handCards'},
                {action: 'addCard', select: 2, value: 6, type: 'bottled', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'cutting_ring', name: 'Cutting Ring', type: 'tool', playable: false, tier: 'uncommon', pack: 'cycle',
        draw: {
            dmg: [5],
        },
        discard: {
            actions: [
                {action: 'draw', value: 2},
            ]
        },
        slots: 1,
        fireShardUpgrades: {
            draw: {
                dmg: [15],
            },
        },
        iceShardUpgrades: {
            discard: {
                actions: [
                    {action: 'draw', value: 3},
                ]
            },
        },
    }),
    new Cards({
        id: 'distracting_ring', name: 'Distracting Ring', type: 'tool', playable: false, tier: 'uncommon', weight: 4, pack: 'cycle',
        draw: {
            dmg: [5],
        },
        destroy: {
            dmg: [15],
            actions: [
                {action: 'draw', value: 3},
            ]
        },
        slots: 2,
        fireShardUpgrades: {
            destroy: {
                dmg: [30],
                actions: [
                    {action: 'draw', value: 3},
                ]
            },
            destroy_2: {
                dmg: [30],
                actions: [
                    {action: 'draw', value: 3},
                    {action: 'addCard', value: 1, what: 'distracting_ring', to: 'discardCards', with: ['flame']},
                ]
            },
        },
        iceShardUpgrades: {
            destroy: {
                dmg: [15],
                actions: [
                    {action: 'draw', value: 5},
                ]
            },
            destroy_2: {
                dmg: [15],
                actions: [
                    {action: 'draw', value: 5},
                    {action: 'addCard', value: 1, what: 'distracting_ring', to: 'discardCards', with: ['frost']},
                ]
            },
        },
    }),
    new Cards({
        id: 'jester', name: 'Jester', type: 'tool', tier: 'uncommon', mana: 1, vanish: true, pack: 'combine', 
        sound: 'jester',
        effects: [
            {effect: 'lemonade', amount: 1, turns: -1}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'junk', to: 'drawCards'},
            {action: 'addCard', value: 1, what: 'junk', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'junk', to: 'discardCards'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false,
            use: 1,
        },
    }),
    new Cards({
        id: 'strange_mushroom', name: 'Strange Mushroom', type: 'tool', tier: 'uncommon', mana: 0, use: 2, weight: 3, pack: 'rainbow',
        effects: [
            {effect: 'lemonade', amount: 1, turns: -1}
        ],
        actions: [
            {action: 'addCard', value: 1, type: 'clutter', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            use: 3,
            actions: [
                {action: 'addCard', value: 1, type: 'clutter', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'chaff', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'target', name: 'Target', type: 'tool', target: 'all', mana: 2, tier: 'uncommon', weight: 1,
        effects: [
            {effect: 'marked', amount: 2, turns: -1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'marked', amount: 4, turns: -1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'frost_armor', name: 'Frost Armor', type: 'tool', mana: 0, use: 1, linger: 1, retain: true, pack: 'combine', tier: 'uncommon', weight: 4, courage: 4, 
        sound: 'tool16',
        armor: [10],
        slots: 2,
        shardUpgrades: {
            armor: [16],
        },
        iceShardUpgrades: {
            armor: [16],
            armor_2: [24],
            use: 2,
            use_2: 3,
            linger: 2,
            linger_2: 3,
        },
        bothShardUpgrades: {
            armor: [20]
        }
    }),
    new Cards({
        id: 'flame_armor', name: 'Flame Armor', type: 'tool', mana: 0, use: 1, linger: 1, retain: true, pack: 'combine', tier: 'uncommon', weight: 4, courage: 4, 
        sound: 'tool17',
        armor: [10],
        slots: 2,
        shardUpgrades: {
            armor: [16],
        },
        fireShardUpgrades: {
            armor: [16],
            armor_2: [24],
            use: 2,
            use_2: 3,
            linger: 2,
            linger_2: 3,
        },
        bothShardUpgrades: {
            armor: [20]
        }
    }),
    new Cards({
        id: 'garrison', name: 'Garrison', type: 'tool', mana: 1, tier: 'uncommon', natural: true, vanish: true, expire: 2,
        blk: [15],
        actions: [
            {action: 'addCard', value: 1, what: 'garrison', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            blk: [30],
            expire: 3,
            actions_2: [
                {action: 'addCard', value: 1, what: 'garrison', to: 'drawCards', with: ['flame', 'flame']},
            ],
        },
        iceShardUpgrades: {
            mana: 0,
            expire: 3,
            actions_2: [
                {action: 'addCard', value: 1, what: 'garrison', to: 'drawCards', with: ['frost', 'frost']},
            ],
        },
    }),
    new Cards({
        id: 'elude', name: 'Elude', type: 'tool', tier: 'uncommon', mana: 1, retain: true, pack: 'combine', vanish: true,
        blk: [15],
        slots: 1,
        shardUpgrades: {
            blk: [30]
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'evade', to: 'drawCards'},
            ]
        },
    }),



    /* Rare: */
    new Cards({
        id: 'bulwark', name: 'Bulwark', type: 'tool', mana: 2, tier: 'rare', weight: 6, courage: 3,
        blk: [30],
        effects: [
            {effect: 'stout', amount: 5, turns: 3}
        ],
        slots: 2,
        shardUpgrades: {
            blk: [40],
            effects: [
                {effect: 'stout', amount: 10, turns: 3}
            ],
        },
        bothShardUpgrades: {
            blk: [50],
            effects: [
                {effect: 'stout', amount: 15, turns: 3}
            ],
        },
    }),
    new Cards({
        id: 'steel_hide', name: 'Steel Hide', type: 'tool', mana: 2, tier: 'rare', weight: 6, courage: 3, 
        blk: [40],
        slots: 2,
        shardUpgrades: {
            blk: [60],
        },
        iceShardUpgrades: {
            blk_2: [90]
        },
        bothShardUpgrades: {
            blk: [80]
        },
    }),
    new Cards({
        id: 'reactor', name: 'Reactor', type: 'tool', mana: 0, tier: 'rare', use: 1, weight: 3, courage: 4, expire: 3,
        sound: 'tool18',
        actions: [
            {action: 'addCard', value: 2, what: 'energize', to: 'handCards'},
        ],
        slots: 2,
        shardUpgrades: {
            use: 2,
            actions: [
                {action: 'addCard', value: 3, what: 'energize', to: 'handCards'},
            ],
        },
        fireShardUpgrades: {
            actions_2: [
                {action: 'addCard', value: 3, what: 'energize', to: 'handCards', with: ['flame']},
            ],
            linger_2: 1
        },
        bothShardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'power_surge', name: 'Power Surge', type: 'tool', mana: 0, tier: 'rare', use: 1, weight: 4, courage: 4, pack: 'cycle',
        sound: 'tool19',
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 2},
            {action: 'stat', what: 'health', key: 'current', value: -4},
            {action: 'draw', value: 1},
            {action: 'destroy', value: 1, optional: true},
        ],
        draw: {
            dmg: [3],
        },
        slots: 2,
        shardUpgrades: {
            use: 2,
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 3},
                {action: 'stat', what: 'health', key: 'current', value: -4},
                {action: 'draw', value: 2},
                {action: 'destroy', value: 2, optional: true},
            ],
        },
        fireShardUpgrades: {
            use_2: 3
        },
        bothShardUpgrades: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 3},
                {action: 'stat', what: 'health', key: 'current', value: -4},
                {action: 'draw', value: 4},
                {action: 'destroy', value: 2, optional: true},
            ],
        },
    }),
    new Cards({
        id: 'enrich', name: 'Enrich', type: 'tool', mana: 2, tier: 'rare', weight: 8, courage: 3, pack: 'combine',
        sound: 'tool21',
        actions: [
            {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards'}
        ],
        slots: 2,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards', with: ['flame', 'flame']}
            ],
            actions_2: [
                {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards', with: ['flame', 'flame'], modifiers: {mana: 0}}
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards', with: ['frost', 'frost']}
            ],
            actions_2: [
                {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards', with: ['frost', 'frost'], modifiers: {mana: 0}}
            ],
        },
    }),
    new Cards({
        id: 'trade_up', name: 'Trade Up', type: 'tool', mana: 1, tier: 'rare', vanish: true, weight: 7, courage: 3,
        sound: 'tool20', 
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'any', tier: 'rare', to: 'handCards'}
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false,
            use: 2,
            actions: [
                {action: 'addCard', select: 1, value: 5, type: 'any', tier: 'rare', to: 'handCards'}
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 5, type: 'any', tier: 'rare', to: 'handCards', with: ['random', 'random']}
            ],
        },
    }),
    new Cards({
        id: 'tactics', name: 'Tactics', type: 'tool', mana: 3, tier: 'rare', pack: 'combine', weight: 4, courage: 4, ephemeral: true,
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'tool', tier: 'rare', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            {action: 'draw', value: 1}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'tool', tier: 'rare', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'draw', value: 1}
            ],
        },
        bothShardUpgrades: {
            ephemeral: false,
            actions: [
                {action: 'addCard', select: 1, value: 3, type: 'tool', tier: 'rare', to: 'handCards', with: ['random', 'random']},
                {action: 'addCard', value: 3, what: 'self_enhance', to: 'drawCards'},
                {action: 'draw', value: 1}
            ],
        },
    }),
    new Cards({
        id: 'unearth', name: 'Unearth', type: 'tool', mana: 0, tier: 'rare', use: 1, weight: 1, courage: 4, 
        actions: [
            {action: 'findDeadCard', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'findDeadCard', value: 2}
            ],
            use: 2
        },
    }),
    new Cards({
        id: 'blockade', name: 'Blockade', type: 'tool', mana: 2, tier: 'rare', ephemeral: true, weight: 6, courage: 3, 
        blk: [20],
        abilities: [
            {ability: 'tank', turns: 1, enabled: true}
        ],
        slots: 2,
        shardUpgrades: {
            blk: [30],
            ephemeral: false,
        },
        iceShardUpgrades: {
            blk_2: [40],
        },
        bothShardUpgrades: {
            abilities: [
                {ability: 'tank', turns: 3, enabled: true}
            ],
        },
    }),
    new Cards({
        id: 'mezmerize', name: 'Mezmerize', type: 'tool', mana: 1, tier: 'rare', weight: 2, vanish: true, ephemeral: true, courage: 4, pack: 'rainbow',
        abilities: [
            {ability: 'hypnotize', turns: 1, enabled: true}
        ],
        slots: 2,
        shardUpgrades: {
            abilities: [
                {ability: 'hypnotize', turns: 2, enabled: true}
            ],
        },
        bothShardUpgrades: {
            mana: 0
        },
    }),
    new Cards({
        id: 'elite_maneuver', name: 'Elite Maneuver', type: 'tool', mana: 3, tier: 'rare', pack: 'cycle', weight: 1, courage: 5, 
        sound: 'tool23',
        blk: [12],
        actions: [
            {action: 'draw', value: 4},
            {action: 'destroy', value: 1, optional: true},
        ],
        draw: {
            blk: [4],
            armor: [2],
        },
        slots: 2,
        shardUpgrades: {
            blk: [24],
            actions: [
                {action: 'draw', value: 5},
                {action: 'destroy', value: 1, optional: true},
            ],
        },
        bothShardUpgrades: {
            blk: [36],
            actions: [
                {action: 'draw', value: 5},
                {action: 'destroy', value: 2, optional: true},
            ],
            draw: {
                blk: [8],
                armor: [4],
            },
        },
    }),
    new Cards({
        id: 'expunge', name: 'Expunge', type: 'tool', mana: 2, tier: 'rare', pack: 'cycle', weight: 4, courage: 4, vanish: true, ephemeral: true,
        sound: 'tool22',
        actions: [
            {action: 'destroy', value: 10, optional: true},
        ],
        slots: 1,
        shardUpgrades: {
            mana: 1,
            vanish: false,
            use: 1
        },
    }),
    new Cards({
        id: 'mysterious_fissure', name: 'Mysterious Fissure', type: 'tool', tier: 'rare', playable: false, weight: 7, courage: 3, pack: 'cycle', 
        discard: {
            dmg: [10],
            target: 'player',
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2},
            ]
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                dmg: [20],
                target: 'monster',
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 2},
                ]
            },
        },
    }),
    new Cards({
        id: 'thresh', name: 'Thresh', type: 'tool', tier: 'rare', mana: 1, courage: 4, use: 2, weight: 3, pack: 'rainbow',
        effects: [
            {effect: 'lemonade', amount: 2, turns: 2}
        ],
        actions: [
            {action: 'addCard', value: 3, what: 'chaff', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'lemonade', amount: 3, turns: 2}
            ],
            actions: [
                {action: 'addCard', value: 5, what: 'chaff', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'charge', name: 'Charge', type: 'tool', mana: 1, tier: 'rare', weight: 3, courage: 4,
        abilities: [
            {ability: 'explode', turns: 1, enabled: true, persist: true}
        ],
        slots: 2,
        shardUpgrades: {
            abilities: [
                {ability: 'explode', turns: 2, enabled: true, persist: true}
            ],
        },
        bothShardUpgrades: {
            abilities: [
                {ability: 'explode', turns: 3, enabled: true, persist: true}
            ],
        },
    }),
    new Cards({
        id: 'surge', name: 'Surge', type: 'tool', mana: 2, vanish: true, tier: 'rare', weight: 2, courage: 5, 
        sound: 'tool35',
        actions: [
            {action: 'stat', what: 'might', key: 'current', value: 'double'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'roar', name: 'Roar', type: 'tool', mana: 2, vanish: true, tier: 'rare', weight: 2, courage: 5, 
        sound: 'tool34',
        actions: [
            {action: 'stat', what: 'punch', key: 'current', value: 'double'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'superstorm', name: 'Superstorm', type: 'tool', mana: 2, vanish: true, pack: 'rainbow', tier: 'rare', weight: 2, courage: 5, 
        sound: 'tool31',
        actions: [
            {action: 'stat', what: 'lightning', key: 'current', value: 'double'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'cloudburst', name: 'Cloudburst', type: 'tool', mana: 2, vanish: true, pack: 'rainbow', tier: 'rare', weight: 2, courage: 5, 
        sound: 'tool32',
        actions: [
            {action: 'stat', what: 'thunder', key: 'current', value: 'double'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'purify', name: 'Purify', type: 'tool', mana: 1, tier: 'rare', weight: 2, courage: 5, 
        actions: [
            {action: 'removeHexes', to: 'player'},
        ],
        slots: 1,
        shardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'forbid', name: 'Forbid', type: 'tool', target: 'monster', mana: 1, tier: 'rare', weight: 1, courage: 6, pack: 'rainbow', 
        actions: [
            {action: 'removeBuffs', to: 'target'},
        ],
        slots: 2,
        shardUpgrades: {
            linger: 1
        },
        bothShardUpgrades: {
            linger: 2
        },
    }),
    new Cards({
        id: 'veto', name: 'Veto', type: 'tool', mana: 1, tier: 'rare', weight: 1, courage: 5, use: 1,
        effects: [
            {effect: 'intercept', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            use: 2
        },
        bothShardUpgrades: {
            use: 3
        },
    }),
    new Cards({
        id: 'weaponsmith', name: 'Weaponsmith', type: 'tool', mana: 2, tier: 'rare', weight: 2, courage: 6, pack: 'combine',
        actions: [
            {action: 'addCard', value: 2, type: 'weapon', tier: 'common', to: 'handCards', modifiers: {mana: 0, vanish: true}},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, type: 'weapon', tier: 'common', to: 'handCards', modifiers: {mana: 0, vanish: true}},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 4, type: 'weapon', tier: 'common', to: 'handCards', modifiers: {mana: 0, vanish: true}},
            ],
        },
        fireShardUpgrades: {
            actions_2: [
                {action: 'addCard', value: 4, type: 'weapon', tier: 'common', to: 'handCards', with: ['flame'], modifiers: {mana: 0, vanish: true}},
            ],
        },
        iceShardUpgrades: {
            actions_2: [
                {action: 'addCard', value: 4, type: 'weapon', tier: 'common', to: 'handCards', with: ['frost'], modifiers: {mana: 0, vanish: true}},
            ],
        }
    }),
    new Cards({
        id: 'scholar', name: 'Scholar', type: 'tool', mana: 1, vanish: true, pack: 'combine', tier: 'rare', weight: 2, courage: 5, 
        effects: [
            {effect: 'wisdom', amount: 2, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false,
            natural: true
        },
    }),
    new Cards({
        id: 'paralyzing_touch', name: 'Paralyzing Touch', type: 'tool', target: 'monster', mana: 1, vanish: true, tier: 'rare', weight: .5, courage: 6, 
        abilities: [
            {ability: 'frozen', turns: 1, enabled: true}
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false,
            use: 1
        },
        bothShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'blitzkrieg', name: 'Blitzkrieg', type: 'tool', tier: 'rare', mana: 3, courage: 5, vanish: true, weight: 1,
        actions: [
            {action: 'playHand'}
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false
        },
        bothShardUpgrades: {
            mana: 2
        }
    }),
    new Cards({
        id: 'cascade', name: 'Cascade', type: 'tool', tier: 'rare', mana: 1, courage: 5, vanish: true, pack: 'cycle', weight: 2,
        actions: [
            {action: 'discardHand'},
            {action: 'draw', value: 5},
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false
        },
        bothShardUpgrades: {
            actions: [
                {action: 'discardHand'},
                {action: 'draw', value: 10},
            ],
        }
    }),
    new Cards({
        id: 'blank_slate', name: 'Blank Slate', type: 'tool', tier: 'rare', mana: 1, courage: 5, vanish: true, pack: 'cycle',
        actions: [
            {action: 'destroyHand'},
            {action: 'draw', value: 4},
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false
        },
        bothShardUpgrades: {
            actions: [
                {action: 'destroyHand'},
                {action: 'draw', value: 8},
            ],
        }
    }),
    new Cards({
        id: 'seeing_ring', name: 'Seeing Ring', type: 'tool', mana: 1, tier: 'rare', vanish: true, ephemeral: true, weight: .5,
        sound: 'tool3',
        actions: [
            {action: 'findDrawCard', value: 1}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'findDrawCard', value: 2}
            ],
        },
        bothShardUpgrades: {
            natural: true,
            ephemeral: false
        },
    }),
    new Cards({
        id: 'invoke', name: 'Invoke', type: 'tool', mana: 1, tier: 'rare', pack: 'rainbow', vanish: true, weight: 7, courage: 3,
        sound: 'tool20', 
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'magic', tier: 'rare', to: 'handCards'},
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false,
            use: 2,
            actions: [
                {action: 'addCard', select: 1, value: 5, type: 'magic', tier: 'rare', to: 'handCards'}
            ],
        },
        bothShardUpgrades: {
            mana: 0,
            actions: [
                {action: 'addCard', select: 1, value: 5, type: 'magic', tier: 'rare', to: 'handCards', with: ['frost', 'flame']}
            ],
        },
    }),
    new Cards({
        id: 'astral_call', name: 'Astral Call', type: 'tool', vanish: true, mana: 1, tier: 'rare', weight: 3, courage: 3, pack: 'rainbow',
        actions: [
            {action: 'addCard', value: 1, type: 'magic', tier: 'common', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, type: 'magic', tier: 'common', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
                {action: 'addCard', value: 1, type: 'magic', tier: 'uncommon', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, type: 'magic', tier: 'common', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
                {action: 'addCard', value: 1, type: 'magic', tier: 'uncommon', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
                {action: 'addCard', value: 1, type: 'magic', tier: 'rare', to: 'drawCards', modifiers: {mana: 0, vanish: true}, with: ['frost', 'flame']},
            ],
        },
    }),
    new Cards({
        id: 'divine_chalice', name: 'Divine Chalice', type: 'tool', mana: 2, vanish: true, tier: 'rare', weight: .5, courage: 6, 
        abilities: [
            {ability: 'eternal', turns: 2, enabled: true}
        ],
        slots: 2,
        shardUpgrades: {
            abilities: [
                {ability: 'eternal', turns: 3, enabled: true}
            ],
        },
        bothShardUpgrades: {
            abilities: [
                {ability: 'eternal', turns: 4, enabled: true}
            ],
        },
    }),



    /* Legendary */
    new Cards({
        id: 'crippling_stare', name: 'Crippling Stare', type: 'tool', target: 'monster', mana: 1, tier: 'legendary', courage: 8, vanish: true, retain: true,
        sound: 'tool24',
        effects: [
            {effect: 'might', amount: -2, turns: -1, hex: true},
            {effect: 'punch', amount: -.8, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'might', amount: -8, turns: -1, hex: true},
                {effect: 'punch', amount: -.9, turns: 1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'citadel', name: 'Citadel', type: 'tool', mana: 3, tier: 'legendary', courage: 8, retain: true,
        sound: 'tool25',
        blk: [15, 15, 15, 15, 15],
        slots: 1,
        shardUpgrades: {
            blk: [30, 30, 30, 30, 30]
        },
    }),
    new Cards({
        id: 'everarmor', name: 'Everarmor', type: 'tool', mana: 2, tier: 'legendary', courage: 8, vanish: true,
        sound: 'tool26',
        armor: [99],
        slots: 1,
        shardUpgrades: {
            use: 1,
            vanish: false,
        },
    }),
    new Cards({
        id: 'adrenaline_rush', name: 'Adrenaline Rush', type: 'tool', mana: 0, tier: 'legendary', courage: 8, 
        sound: 'tool27',
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 1},
            {action: 'stat', what: 'speed', key: 'current', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2},
                {action: 'stat', what: 'speed', key: 'current', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'untold_contract', name: 'Untold Contract', type: 'tool', mana: 1, use: 1, tier: 'legendary', courage: 8, pack: 'combine',
        sound: 'tool28',
        actions: [
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'impresa', to: 'handCards'},
            {action: 'addCard', value: 2, what: 'battle_move', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            natural: true,
            use: 2
        },
    }),
    new Cards({
        id: 'myriad', name: 'Myriad', type: 'tool', mana: 2, use: 1, tier: 'legendary', courage: 8, pack: 'cycle',
        sound: 'tool29',
        actions: [
            {action: 'addCard', value: 1, what: 'acquire', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'dismantle', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'release', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_speed', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_energy', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_armor', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_block', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_attack', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_cards', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'bottled_magic', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            use: 2
        },
    }),



    /* ABILITY CARDS */
    /* common */



    /* uncommon */
    new Cards({
        id: 'forethought', name: 'Forethought', type: 'ability', mana: 1, tier: 'uncommon', weight: 7, courage: 3, pack: 'cycle',
        abilities: [
            {ability: 'prepared', enabled: true, baseTurns: -1},
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'midas_touch', name: 'Midas Touch', type: 'ability', mana: 2, tier: 'uncommon', weight: .5, courage: 4, 
        abilities: [
            {ability: 'bless', enabled: true, baseTurns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'collector', name: 'Collector', type: 'ability', mana: 2, tier: 'uncommon', weight: 3, courage: 4, pack: 'cycle',
        abilities: [
            {ability: 'scout', enabled: true, baseTurns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'metalwork', name: 'Metalwork', type: 'ability', mana: 3, tier: 'uncommon', weight: 4, courage: 4, 
        abilities: [
            {ability: 'stockpile', enabled: true, baseTurns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 2
        },
        bothShardUpgrades: {
            mana: 1
        }
    }),
    new Cards({
        id: 'healing_salve', name: 'Healing Salve', type: 'ability', mana: 1, tier: 'uncommon', weight: 6, courage: 3, 
        effects: [
            {effect: 'heal', amount: 10}
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'heal', amount: 20}
            ],
        },
        bothShardUpgrades: {
            mana: 0,
            effects: [
                {effect: 'heal', amount: 20}
            ],
        }
    }),
    new Cards({
        id: 'stamina', name: 'Stamina', type: 'ability', mana: 1, tier: 'uncommon', weight: 6, courage: 3, 
        effects: [
            {effect: 'regen', amount: 5}
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'regen', amount: 8}
            ],
        },
        bothShardUpgrades: {
            mana: 0,
            effects: [
                {effect: 'regen', amount: 8}
            ],
        },
    }),
    new Cards({
        id: 'enigma_form', name: 'Enigma Form', type: 'ability', mana: 0, tier: 'uncommon', weight: 4, courage: 4, 
        effects: [
            {effect: 'mystery', amount: 2, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'mystery', amount: 4, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'robustness', name: 'Robustness', type: 'ability', mana: 2, tier: 'uncommon', courage: 3, 
        effects: [
            {effect: 'solid', amount: 6, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 1
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'solid', amount: 12, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 1,
            effects: [
                {effect: 'solid', amount: 12, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'masterwork', name: 'Masterwork', type: 'ability', mana: 2, tier: 'uncommon', weight: 3, courage: 4, 
        effects: [
            {effect: 'craft', amount: 5, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'craft', amount: 10, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'violent_rage', name: 'Violent Rage', type: 'ability', mana: 1, tier: 'uncommon', weight: 4, courage: 4, 
        effects: [
            {effect: 'might', amount: 3, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'might', amount: 6, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'might', amount: 12, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 0,
            effects: [
                {effect: 'might', amount: 6, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'repurpose', name: 'Repurpose', type: 'ability', mana: 2, tier: 'uncommon', courage: 3, pack: 'combine',
        effects: [
            {effect: 'cunning', amount: 1, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            mana: 1
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'cunning', amount: 2, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 1,
            effects: [
                {effect: 'cunning', amount: 2, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'shield_form', name: 'Shield Form', type: 'ability', mana: 3, tier: 'uncommon', weight: 8, pack: 'combine',
        effects: [
            {effect: 'stout', amount: 12, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'stout', amount: 24, turns: -1}
            ],
        },
        iceShardUpgrades: {
            mana_2: 2,
            effects_2: [
                {effect: 'stout', amount: 36, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'stout', amount: 36, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'flywheel', name: 'Flywheel', type: 'ability', mana: 2, tier: 'uncommon', weight: 6, pack: 'cycle',
        effects: [
            {effect: 'momentum', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 1,
        },
        fireShardUpgrades: {
            effects_2: [
                {effect: 'momentum', amount: 6, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'momentum', amount: 4, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'vengeance', name: 'Vengeance', type: 'ability', mana: 1, tier: 'uncommon', weight: 8, 
        effects: [
            {effect: 'retaliate', amount: 10, turns: -1},
            {effect: 'spikes', amount: 12, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'retaliate', amount: 20, turns: -1},
                {effect: 'spikes', amount: 24, turns: -1}
            ],
        },
        iceShardUpgrades: {
            mana: 0
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'retaliate', amount: 20, turns: -1},
                {effect: 'spikes', amount: 24, turns: -1}
            ],
            mana: 0
        }
    }),
    new Cards({
        id: 'short_temper', name: 'Short Temper', type: 'ability', mana: 0, tier: 'uncommon', courage: 3, 
        effects: [
            {effect: 'rowdy', amount: 8, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'rowdy', amount: 16, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'explosivity', name: 'Explosivity', type: 'ability', mana: 0, tier: 'uncommon', courage: 3,
        effects: [
            {effect: 'fierce', amount: 18, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'fierce', amount: 36, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'cardistry', name: 'Cardistry', type: 'ability', mana: 1, tier: 'uncommon', courage: 3, pack: 'rainbow',
        effects: [
            {effect: 'wield', amount: 1, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'wield', amount: 2, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'wield', amount: 2, turns: -1}
            ],
            natural: true
        },
    }),
    new Cards({
        id: 'haste', name: 'Haste', type: 'ability', mana: 2, tier: 'uncommon', courage: 4, weight: 4, pack: 'rainbow',
        effects: [
            {effect: 'mage', amount: 3, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'mage', amount: 6, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'mage', amount: 6, turns: -1}
            ],
            natural: true
        },
    }),
    new Cards({
        id: 'patience', name: 'Patience', type: 'ability', mana: 2, tier: 'uncommon', courage: 4, weight: 4, pack: 'rainbow',
        effects: [
            {effect: 'enchanter', amount: 2, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'enchanter', amount: 4, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'enchanter', amount: 4, turns: -1}
            ],
            natural: true
        },
    }),
    new Cards({
        id: 'uniformity', name: 'Uniformity', type: 'ability', mana: 1, tier: 'uncommon', courage: 3, weight: 6,
        effects: [
            {effect: 'arcane', amount: 15, turns: -1}
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'arcane', amount: 30, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'arcane', amount: 30, turns: -1}
            ],
            natural: true
        },
    }),
    new Cards({
        id: 'high_voltage', name: 'High Voltage', type: 'ability', mana: 2, tier: 'uncommon', weight: 4, courage: 4, 
        effects: [
            {effect: 'lightning', amount: 5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'lightning', amount: 10, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'lightning', amount: 15, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 1
        }
    }),
    new Cards({
        id: 'strange_tail', name: 'Strange Tail', type: 'ability', mana: 1, tier: 'uncommon', weight: 4, courage: 3, pack: 'rainbow',
        abilities: [
            {ability: 'magick', enabled: true, baseTurns: -1},
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        }
    }),
    new Cards({
        id: 'rebuke', name: 'Rebuke', type: 'ability', mana: 2, tier: 'uncommon', courage: 3, pack: 'combine', 
        effects: [
            {effect: 'angered', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'angered', amount: 4, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'angered', amount: 6, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'non_newtonian', name: 'Non-Newtonian', type: 'ability', mana: 0, tier: 'uncommon', courage: 4, 
        effects: [
            {effect: 'hardened', amount: 5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'hardened', amount: 10, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'hardened', amount: 15, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'supernatural', name: 'Supernatural', type: 'ability', mana: 0, tier: 'uncommon', courage: 4, 
        abilities: [
            {ability: 'supernatural', enabled: true, baseTurns: -1},
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        }
    }),
    new Cards({
        id: 'layers', name: 'Layers', type: 'ability', mana: 1, tier: 'uncommon', courage: 4, pack: 'combine', 
        effects: [
            {effect: 'fend', amount: 12, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'fend', amount: 24, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'emergence', name: 'Emergence', type: 'ability', mana: 0, tier: 'uncommon', courage: 4, pack: 'cycle', 
        effects: [
            {effect: 'ward', amount: 12, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'ward', amount: 24, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'screen', name: 'Screen', type: 'ability', mana: 2, tier: 'uncommon', courage: 4, pack: 'rainbow', 
        effects: [
            {effect: 'cover', amount: 12, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'cover', amount: 24, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'cycle_barrier', name: 'Cycle Barrier', type: 'ability', mana: 1, tier: 'uncommon', courage: 4, pack: 'cycle', 
        effects: [
            {effect: 'preserve', amount: 12, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'preserve', amount: 24, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'dragon_kin', name: 'Dragon Kin', type: 'ability', mana: 1, tier: 'uncommon', courage: 3,
        effects: [
            {effect: 'buttress', amount: 8, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'buttress', amount: 16, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'sorcerer_kin', name: 'Sorcerer Kin', type: 'ability', mana: 1, tier: 'uncommon', courage: 3,
        effects: [
            {effect: 'channel', amount: 8, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'channel', amount: 16, turns: -1}
            ],
        }
    }),
    
    



    /* rare */
    new Cards({
        id: 'bastion', name: 'Bastion', type: 'ability', mana: 3, tier: 'rare', ephemeral: true, weight: .5, courage: 6,
        abilities: [
            {ability: 'protection', enabled: true, baseTurns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            natural: true,
            ephemeral: false
        },
        bothShardUpgrades: {
            mana: 2,
        }
    }),
    new Cards({
        id: 'bodiless_form', name: 'Bodiless Form', type: 'ability', mana: 3, tier: 'rare', ephemeral: true, weight: 2, courage: 5, 
        abilities: [
            {ability: 'unreachable', enabled: true, turns: 2},
            {ability: 'toothache', enabled: true, baseTurns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            abilities: [
                {ability: 'unreachable', enabled: true, turns: 3},
                {ability: 'toothache', enabled: true, baseTurns: -1}
            ],
            ephemeral: false
        },
    }),
    new Cards({
        id: 'overpowered', name: 'Overpowered', type: 'ability', mana: 1, tier: 'rare', courage: 4, 
        effects: [
            {effect: 'punch', amount: .25, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'punch', amount: .5, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'punch', amount: .75, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'guzzle', name: 'Guzzle', type: 'ability', mana: 2, tier: 'rare', weight: 4, courage: 5,
        effects: [
            {effect: 'vigor', amount: .5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'vigor', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'vigor', amount: 1.5, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'prescience', name: 'Prescience', type: 'ability', mana: 1, tier: 'rare', weight: 9, courage: 6,
        effects: [
            {effect: 'muster', amount: 6, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'muster', amount: 12, turns: -1}
            ],
        },
        fireShardUpgrades: {
            effects_2: [
                {effect: 'muster', amount: 18, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'muster', amount: 16, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'acuity', name: 'Acuity', type: 'ability', mana: 2, tier: 'rare', weight: 3, courage: 4, pack: 'combine',  
        effects: [
            {effect: 'wisdom', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'wisdom', amount: 4, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural_2: true
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'wisdom', amount: 6, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'anomaly', name: 'Anomaly', type: 'ability', mana: 1, tier: 'rare', weight: 2, courage: 4, pack: 'combine',
        abilities: [
            {ability: 'gravity', baseTurns: -1, enabled: true}
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'magic_bonus', name: 'Magic Bonus', type: 'ability', mana: 2, tier: 'rare', courage: 5, 
        effects: [
            {effect: 'conjure', amount: 6, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 12, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'conjure', amount: 18, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 16, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'magic_multiplier', name: 'Magic Multiplier', type: 'ability', mana: 2, tier: 'rare', courage: 5, 
        effects: [
            {effect: 'sorcery', amount: .4, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'sorcery', amount: .8, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'sorcery', amount: 1.2, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'sorcery', amount: 1, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'prisma', name: 'Prisma', type: 'ability', mana: 1, tier: 'rare', courage: 4,
        effects: [
            {effect: 'summon', amount: 8, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'summon', amount: 16, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'storm', name: 'Storm', type: 'ability', mana: 2, tier: 'rare', courage: 4, pack: 'rainbow', 
        effects: [
            {effect: 'thunder', amount: .5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'thunder', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'thunder', amount: 1.5, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'renewal', name: 'Renewal', type: 'ability', mana: 1, tier: 'rare', courage: 4, 
        abilities: [
            {ability: 'expirex', baseTurns: -1, enabled: true}
        ],
        slots: 1,
        shardUpgrades: {
            natural: true
        }
    }),
    new Cards({
        id: 'dark_codex', name: 'Dark Codex', type: 'ability', mana: 1, tier: 'rare', courage: 6, pack: 'rainbow',
        effects: [
            {effect: 'retain', amount: 1, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'retain', amount: 2, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'bolster', name: 'Bolster', type: 'ability', mana: 2, tier: 'rare', courage: 6, weight: 2, pack: 'cycle', 
        effects: [
            {effect: 'insulate', amount: 5, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'insulate', amount: 10, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'radioactive', name: 'Radioactive', type: 'ability', mana: 1, tier: 'rare', courage: 5, weight: 3, 
        effects: [
            {effect: 'irradiate', amount: 15, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'irradiate', amount: 30, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'irradiate', amount: 45, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'depthsight', name: 'Depthsight', type: 'ability', mana: 2, tier: 'rare', courage: 5, weight: 2, pack: 'cycle',
        effects: [
            {effect: 'replenish', amount: 1, turns: -1}
        ],
        slots: 2,
        iceShardUpgrades: {
            effects: [
                {effect: 'replenish', amount: 2, turns: -1}
            ],
        },
        fireShardUpgrades: {
            mana: 1
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'replenish', amount: 2, turns: -1}
            ],
            mana: 1
        },
    }),
    new Cards({
        id: 'blacksmith', name: 'Blacksmith', type: 'ability', mana: 1, tier: 'rare', courage: 5, weight: 2, pack: 'combine',
        effects: [
            {effect: 'combiner', amount: 1, turns: -1}
        ],
        slots: 2,
        iceShardUpgrades: {
            effects: [
                {effect: 'combiner', amount: 2, turns: -1}
            ],
        },
        fireShardUpgrades: {
            mana: 0
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'combiner', amount: 2, turns: -1}
            ],
            mana: 0
        },
    }),
    new Cards({
        id: 'dark_knowledge', name: 'Dark Knowledge', type: 'ability', mana: 3, tier: 'rare', courage: 6, weight: 2, pack: 'rainbow',
        effects: [
            {effect: 'mage', amount: 3, turns: -1},
            {effect: 'enchanter', amount: 1, turns: -1},
            {effect: 'fatigued', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'mage', amount: 4, turns: -1},
                {effect: 'enchanter', amount: 2, turns: -1},
                {effect: 'fatigued', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'mage', amount: 4, turns: -1},
                {effect: 'enchanter', amount: 2, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'sage', name: 'Sage', type: 'ability', mana: 2, tier: 'rare', courage: 6, weight: 1, pack: 'combine',
        effects: [
            {effect: 'wisdom', amount: 4, turns: -1},
            {effect: 'stifled', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'wisdom', amount: 6, turns: -1},
                {effect: 'stifled', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'wisdom', amount: 8, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'reckless_abandon', name: 'Reckless Abandon', type: 'ability', mana: 3, tier: 'rare', courage: 6, weight: 2, pack: 'cycle',
        effects: [
            {effect: 'might', amount: 10, turns: -1},
            {effect: 'vulnerable', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'might', amount: 15, turns: -1},
                {effect: 'vulnerable', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'might', amount: 20, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'stance_dance', name: 'Stance Dance', type: 'ability', mana: 1, tier: 'rare', courage: 5, 
        effects: [
            {effect: 'shapeshifter', amount: 15, turns: -1},
        ],
        slots: 2,
        fireShardUpgrades: {
            effects: [
                {effect: 'shapeshifter', amount: 30, turns: -1},
            ],
        },
        iceShardUpgrades: {
            mana: 0
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'shapeshifter', amount: 30, turns: -1},
            ],
            mana: 0
        },
    }),
    new Cards({
        id: 'crazed', name: 'Crazed', type: 'ability', mana: 2, tier: 'rare', courage: 6, weight: 2, pack: 'rainbow',
        effects: [
            {effect: 'feral', amount: 2, turns: -1},
            {effect: 'beast', amount: 2, turns: -1},
            {effect: 'stifled', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'feral', amount: 3, turns: -1},
                {effect: 'beast', amount: 3, turns: -1},
                {effect: 'stifled', amount: 1, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'feral', amount: 4, turns: -1},
                {effect: 'beast', amount: 4, turns: -1}
            ],
        }
    }),


    

    /* legendary */
    new Cards({
        id: 'euphoria', name: 'Euphoria', type: 'ability', mana: 1, tier: 'legendary', courage: 8, 
        effects: [
            {effect: 'regen', amount: 5},
            {effect: 'heal', amount: 8},
            {effect: 'mend', amount: 1, turns: -1},
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'regen', amount: 8},
                {effect: 'heal', amount: 16},
                {effect: 'mend', amount: 2, turns: -1},
            ],
        },
    }),
    new Cards({
        id: 'strength_beyond_measure', name: 'Strength Beyond Measure', type: 'ability', mana: 2, tier: 'legendary', courage: 8, 
        effects: [
            {effect: 'punch', amount: .4, turns: -1},
            {effect: 'might', amount: 5, turns: -1},
            {effect: 'fierce', amount: 20, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'punch', amount: .8, turns: -1},
                {effect: 'might', amount: 10, turns: -1},
                {effect: 'fierce', amount: 40, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'colossus', name: 'Colossus', type: 'ability', mana: 2, tier: 'legendary', courage: 8, 
        effects: [
            {effect: 'muster', amount: 4, turns: -1},
            {effect: 'stout', amount: 20, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'muster', amount: 8, turns: -1},
                {effect: 'stout', amount: 40, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'spectrum', name: 'Spectrum', type: 'ability', mana: 2, tier: 'legendary', courage: 8, 
        effects: [
            {effect: 'conjure', amount: 6, turns: -1},
            {effect: 'summon', amount: 6, turns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 12, turns: -1},
                {effect: 'summon', amount: 12, turns: -1}
            ],
        },
    }),


    
    
    



    /* MAGIC CARDS */
    /* common */

    new Cards({
        id: 'rainbow_charge', name: 'Rainbow Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'rainbow', amount: 15}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 30}], 
        },
    }),
    new Cards({
        id: 'chaos_charge', name: 'Chaos Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'chaos', amount: 15}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'chaos', amount: 30}], 
        },
    }),
    new Cards({
        id: 'dark_charge', name: 'Dark Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'dark', amount: 15}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'dark', amount: 30}], 
        },
    }),
    new Cards({
        id: 'elemental_charge', name: 'Elemental Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'elemental', amount: 15}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'elemental', amount: 30}], 
        },
    }),
    new Cards({
        id: 'risky_charge', name: 'Risky Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'random', amount: 20}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'random', amount: 40}], 
        },
    }),
    new Cards({
        id: 'delayed_charge', name: 'Delayed Charge', type: 'magic', tier: 'common', playable: false, pack: 'cycle',
        sound: 'magic3',
        discard: {
            magic: [{type: 'wild', amount: 15}], 
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                magic: [{type: 'wild', amount: 30}], 
            },
        },
    }),
    new Cards({
        id: 'sacrificial_charge', name: 'Sacrificial Charge', type: 'magic', tier: 'common', playable: false, pack: 'cycle',
        sound: 'magic3',
        destroy: {
            magic: [{type: 'wild', amount: 45}], 
        },
        slots: 2,
        shardUpgrades: {
            destroy: {
                magic: [{type: 'wild', amount: 60}], 
            },
        },
        bothShardUpgrades: {
            destroy: {
                magic: [{type: 'wild', amount: 90}], 
                actions: [
                    {action: 'addCard', value: 1, what: 'sacrificial_charge', to: 'discardCards', with: ['random']},
                ]
            },
        },
        iceShardUpgrades: {
            destroy: {
                magic: [{type: 'wild', amount: 90}], 
                actions: [
                    {action: 'addCard', value: 1, what: 'sacrificial_charge', to: 'discardCards', with: ['random', 'random']},
                ]
            },
        },
    }),
    new Cards({
        id: 'risky_charm', name: 'Risky Charm', type: 'magic', mana: 0, use: 2, tier: 'common', weight: 7,
        magic: [{type: 'random', amount: 12}], 
        sound: 'magic2',
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'random', amount: 24}], 
            use: 4
        },
        iceShardUpgrades: {
            linger: 1,
            use: 4
        },
    }),
    new Cards({
        id: 'rainbow_charm', name: 'Rainbow Charm', type: 'magic', mana: 0, use: 2, tier: 'common',
        magic: [{type: 'rainbow', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'rainbow', amount: 10}], 
            use: 4
        },
        iceShardUpgrades: {
            linger: 1,
            use: 4
        },
    }),
    new Cards({
        id: 'chaos_charm', name: 'Chaos Charm', type: 'magic', mana: 0, use: 2, tier: 'common',
        magic: [{type: 'chaos', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'chaos', amount: 10}], 
            use: 4
        },
        iceShardUpgrades: {
            linger: 1,
            use: 4
        },
    }),
    new Cards({
        id: 'dark_charm', name: 'Dark Charm', type: 'magic', mana: 0, use: 2, tier: 'common',
        magic: [{type: 'dark', amount: 5}],
        sound: 'magic2', 
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'dark', amount: 10}], 
            use: 4
        },
        iceShardUpgrades: {
            linger: 1,
            use: 4
        },
    }),
    new Cards({
        id: 'elemental_charm', name: 'Elemental Charm', type: 'magic', mana: 0, use: 2, tier: 'common',
        magic: [{type: 'elemental', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'elemental', amount: 10}],
            use: 4 
        },
        iceShardUpgrades: {
            linger: 1,
            use: 4
        },
    }),
    new Cards({
        id: 'beautiful_spell', name: 'Beautiful Spell', type: 'magic', mana: 1, weight: 2, tier: 'common', 
        magic: [{type: 'elemental', amount: 10}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'elemental', amount: 20}], 
            sparkle: {
                magic: [{type: 'elemental', amount: 20}], 
            }
        },
        sparkle: {
            magic: [{type: 'elemental', amount: 10}], 
        }
    }),
    new Cards({
        id: 'delightful_spell', name: 'Delightful Spell', type: 'magic', mana: 1, weight: 2, tier: 'common', 
        magic: [{type: 'dark', amount: 10}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'dark', amount: 20}], 
            shimmer: {
                magic: [{type: 'dark', amount: 20}], 
            }
        },
        shimmer: {
            magic: [{type: 'dark', amount: 10}], 
        }
    }),
    new Cards({
        id: 'wonderful_spell', name: 'Wonderful Spell', type: 'magic', mana: 1, weight: 2, tier: 'common', 
        magic: [{type: 'chaos', amount: 10}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'chaos', amount: 20}], 
            aura: {
                magic: [{type: 'chaos', amount: 20}], 
            }
        },
        aura: {
            magic: [{type: 'chaos', amount: 10}], 
        }
    }),
    new Cards({
        id: 'flash_of_magic', name: 'Flash of Magic', type: 'magic', mana: 0, pack: 'combine', vanish: true, retain: true, 
        magic: [{type: 'wild', amount: 4}], 
        sound: 'magic2',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 8}], 
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'blaze_of_magic', to: 'handCards'},
            ],
            effects: [
                {effect: 'fend', amount: 3, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'flashbang', name: 'Flashbang', type: 'magic', mana: 0, pack: 'rainbow', linger: 4, weight: 2,
        magic: [{type: 'wild', amount: 1}],
        slots: 1,
        iceShardUpgrades: {
            linger: 6,
            use: 6,
        },
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 3}],
            use: 4
        }
    }),



    /* uncommon */
    new Cards({
        id: 'wild_charge', name: 'wild Charge', type: 'magic', mana: 1, tier: 'uncommon', pack: 'rainbow', weight: 2, courage: 3, 
        magic: [{type: 'wild', amount: 15}], 
        sound: 'magic3',
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 30}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 45}], 
            natural: true,
        },
    }),
    new Cards({
        id: 'wild_charm', name: 'Wild Charm', type: 'magic', mana: 0, tier: 'uncommon', pack: 'rainbow', weight: 2, courage: 3, 
        magic: [{type: 'wild', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        actions: [
            {action: 'draw', value: 1}
        ],
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
        },
        iceShardUpgrades: {
            linger: 1
        },
    }),
    new Cards({
        id: 'grow', name: 'Grow', type: 'magic', mana: 0, use: 2, linger: 2, tier: 'uncommon', pack: 'rainbow', weight: 9, courage: 3, 
        sound: 'grow',
        magic: [{type: 'wild', amount: 1}],
        actions: [
            {action: 'stat', what: 'rainbow', key: 'max', value: 5},
        ],
        effects: [
            {effect: 'sorcery', amount: .1, turns: 2}
        ],
        slots: 1,
        shardUpgrades: {
            use: 4,
            linger: 4,
            /*magic: [{type: 'wild', amount: 2}],
            effects: [
                {effect: 'sorcery', amount: .2, turns: 2}
            ],*/
        },
    }),
    new Cards({
        id: 'focus', name: 'Focus', type: 'magic', mana: 0, use: 2, linger: 2, tier: 'uncommon', pack: 'rainbow', weight: 9, courage: 3, 
        sound: 'focus',
        magic: [{type: 'wild', amount: 1}],
        actions: [
            {action: 'stat', what: 'rainbow', key: 'max', value: -5},
        ],
        effects: [
            {effect: 'conjure', amount: 1, turns: 2}
        ],
        slots: 1,
        shardUpgrades: {
            use: 4,
            linger: 4,
            /*magic: [{type: 'wild', amount: 2}],
            effects: [
                {effect: 'conjure', amount: 2, turns: 2}
            ],*/
        },
    }),
    new Cards({
        id: 'mystical_protection', name: 'Mystical Protection', type: 'magic', mana: 1, tier: 'uncommon', weight: 4, courage: 4, 
        magic: [{type: 'wild', amount: 10}],
        effects: [
            {effect: 'vex', amount: 1, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 20}],
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'sparkling_rainbow_spell', name: 'Sparkling Rainbow Spell', type: 'magic', mana: 1, weight: 1, tier: 'uncommon', pack: 'rainbow',
        magic: [{type: 'rainbow', amount: 12}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 24}], 
            sparkle: {
                magic: [{type: 'rainbow', amount: 24}], 
            }
        },
        sparkle: {
            magic: [{type: 'rainbow', amount: 12}], 
        }
    }),
    new Cards({
        id: 'shimmering_rainbow_spell', name: 'Shimmering Rainbow Spell', type: 'magic', mana: 1, weight: 1, tier: 'uncommon', pack: 'rainbow', 
        magic: [{type: 'rainbow', amount: 12}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 24}], 
            shimmer: {
                magic: [{type: 'rainbow', amount: 24}], 
            }
        },
        shimmer: {
            magic: [{type: 'rainbow', amount: 12}], 
        }
    }),
    new Cards({
        id: 'luminous_rainbow_spell', name: 'Luminous Rainbow Spell', type: 'magic', mana: 1, weight: 1, tier: 'uncommon', pack: 'rainbow',
        magic: [{type: 'rainbow', amount: 12}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 24}], 
            aura: {
                magic: [{type: 'rainbow', amount: 24}], 
            }
        },
        aura: {
            magic: [{type: 'rainbow', amount: 12}], 
        }
    }),
    new Cards({
        id: 'metamorphose', name: 'Metamorphose', type: 'magic', mana: 0, tier: 'uncommon', weight: 7, courage: 3, pack: 'rainbow',
        magic: [{type: 'wild', amount: 5}],
        sound: 'magic10',
        actions: [
            {action: 'transmute', select: 1, from: 'handCards'}
        ],
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 10}],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'transmute', select: 2, from: 'handCards'}
            ],
        },
    }),
    new Cards({
        id: 'cryptic_rune', name: 'Cryptic Rune', type: 'magic', mana: 1, tier: 'uncommon', use: 1, pack: 'combine', weight: 3, courage: 3, 
        magic: [{type: 'wild', amount: 3}],
        sound: 'magic11',
        actions: [
            {action: 'addCard', value: 2, what: 'impresa', to: 'drawCards'},
        ],
        draw: {
            magic: [{type: 'wild', amount: 3}],
        },
        slots: 2,
        shardUpgrades: {
            use: 2
        },
        fireShardUpgrades: {
            draw: {
                magic: [{type: 'wild', amount: 6}],
            },
            draw_2: {
                magic: [{type: 'wild', amount: 10}],
            },
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 6}],
        },
    }),
    new Cards({
        id: 'magical_maneuver', name: 'Magical Maneuver', type: 'magic', mana: 1, tier: 'uncommon', pack: 'cycle', courage: 3, 
        sound: 'magic12',
        magic: [{type: 'wild', amount: 4}], 
        actions: [
            {action: 'draw', value: 1},
            {action: 'discard', value: 1}
        ],
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 8}], 
        },
        iceShardUpgrades: {
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'recaster', name: 'Recaster', type: 'magic', mana: 1, tier: 'uncommon', pack: 'rainbow', weight: 3, courage: 5, 
        sound: 'magic13',
        actions: [
            {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'wild_charm', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards', with: ['random']},
                {action: 'addCard', value: 1, what: 'wild_charm', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'bloom', name: 'Bloom', type: 'magic', mana: 2, tier: 'uncommon', pack: 'rainbow', vanish: true, expire: 2, weight: 1, courage: 4, 
        actions: [
            {action: 'stat', what: 'rainbow', key: 'base', value: 1},
        ],
        draw: {
            blk: [8]
        },
        slots: 2,
        fireShardUpgrades: {
            actions: [
                {action: 'stat', what: 'rainbow', key: 'base', value: 2},
            ],
        },
        iceShardUpgrades: {
            expire: 3
        },
        bothShardUpgrades: {
            actions: [
                {action: 'stat', what: 'rainbow', key: 'base', value: 2},
            ],
            expire: 3
        },
    }),
    new Cards({
        id: 'fire_spell', name: 'Fire Spell', type: 'magic', mana: 0, tier: 'uncommon', vanish: true, courage: 3, pack: 'cycle',
        sound: 'magic14',
        magic: [{type: 'wild', amount: 2}],
        actions: [
            {action: 'destroy', value: 1, optional: true}
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 4}],
            actions: [
                {action: 'draw', value: 1},
                {action: 'destroy', value: 1, optional: true},
            ],
        },
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 6}],
            actions: [
                {action: 'draw', value: 2},
                {action: 'destroy', value: 2, optional: true},
            ],
        },
    }),
    new Cards({
        id: 'ice_spell', name: 'Ice Spell', type: 'magic', mana: 0, tier: 'uncommon', vanish: true, courage: 3, pack: 'cycle',
        sound: 'magic15',
        magic: [{type: 'wild', amount: 2}],
        actions: [
            {action: 'discard', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 4}],
            actions: [
                {action: 'draw', value: 1},
                {action: 'discard', value: 1},
            ],
        },
        iceShardUpgrades: {
            magic: [{type: 'wild', amount: 6}],
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'delayed_spell', name: 'Delayed Spell', type: 'magic', tier: 'uncommon', playable: false, pack: 'cycle',
        discard: {
            dmg: [5],
            magic: [{type: 'wild', amount: 10}], 
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                dmg: [10],
                magic: [{type: 'wild', amount: 20}], 
            },
        },
    }),
    new Cards({
        id: 'sacrificial_spell', name: 'Sacrificial Spell', type: 'magic', tier: 'uncommon', playable: false, pack: 'cycle',
        destroy: {
            dmg: [15],
            magic: [{type: 'wild', amount: 30}], 
        },
        slots: 2,
        shardUpgrades: {
            destroy: {
                dmg: [30],
                magic: [{type: 'wild', amount: 45}], 
                actions: [
                    {action: 'addCard', value: 1, what: 'sacrificial_charge', to: 'discardCards'},
                ]
            },
        },
        bothShardUpgrades: {
            destroy: {
                dmg: [30],
                magic: [{type: 'wild', amount: 60}], 
                actions: [
                    {action: 'addCard', value: 1, what: 'sacrificial_charge', to: 'discardCards', with: ['random']},
                ]
            },
        },
        fireShardUpgrades: {
            destroy: {
                dmg: [30],
                magic: [{type: 'wild', amount: 60}], 
                actions: [
                    {action: 'addCard', value: 1, what: 'sacrificial_charge', to: 'discardCards', with: ['random', 'random']},
                ]
            },
        }
    }),
    new Cards({
        id: 'magic_flare', name: 'Magic Flare', type: 'magic', tier: 'uncommon', mana: 1, pack: 'combine', vanish: true, retain: true,
        magic: [{type: 'wild', amount: 8}], 
        sound: 'magic2',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 16}], 
        },
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'magic_burst', to: 'handCards'},
            ]
        },
    }),
    new Cards({
        id: 'wild_strength', name: 'Wild Strength', type: 'magic', tier: 'uncommon', mana: 0, vanish: true, pack: 'combine', retain: true,
        sound: 'magic11',
        magic: [{type: 'wild', amount: 1}], 
        slots: 2,
        weight: 1,
        effects: [
            {effect: 'feral', amount: 2, turns: -1}
        ],
        shardUpgrades: {
            vanish: false,
            use: 1,
            linger: 1
        },
        bothShardUpgrades: {
            vanish: false,
            use: 2,
            linger: 2,
        },
    }),
    new Cards({
        id: 'wild_protection', name: 'Wild Protection', type: 'magic', tier: 'uncommon', mana: 0, vanish: true, pack: 'combine', retain: true,
        sound: 'magic13',
        magic: [{type: 'wild', amount: 1}], 
        slots: 2,
        weight: 1,
        effects: [
            {effect: 'beast', amount: 2, turns: -1}
        ],
        shardUpgrades: {
            vanish: false,
            use: 1,
            linger: 1
        },
        bothShardUpgrades: {
            vanish: false,
            use: 2,
            linger: 2,
        },
    }),




    /* rare */

    new Cards({
        id: 'risky_incantation', name: 'Risky Incantation', type: 'magic', mana: 2, tier: 'rare', weight: 6, courage: 3, 
        magic: [{type: 'random', amount: 20}], 
        effects: [
            {effect: 'arcane', amount: 10, turns: 2}
        ],
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'random', amount: 25}], 
            effects: [
                {effect: 'arcane', amount: 15, turns: 3}
            ],
        },
        iceShardUpgrades: {
            mana_2: 1
        },
        bothShardUpgrades: {
            magic: [{type: 'random', amount: 30}], 
            effects: [
                {effect: 'arcane', amount: 20, turns: 4}
            ],
        },
    }),
    new Cards({
        id: 'maelstrom', name: 'Maelstrom', type: 'magic', mana: 2, tier: 'rare', weight: 6, courage: 3, 
        magic: [
            {type: 'muddled', amount: 4},
            {type: 'muddled', amount: 4},
            {type: 'muddled', amount: 4},
            {type: 'muddled', amount: 4},
            {type: 'muddled', amount: 4},
        ], 
        sound: 'magic8',
        effects: [
            {effect: 'arcane', amount: 5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            magic: [
                {type: 'muddled', amount: 5},
                {type: 'muddled', amount: 5},
                {type: 'muddled', amount: 5},
                {type: 'muddled', amount: 5},
                {type: 'muddled', amount: 5},
            ], 
            effects: [
                {effect: 'arcane', amount: 10, turns: -1}
            ],
        },
        bothShardUpgrades: {
            magic: [
                {type: 'muddled', amount: 6},
                {type: 'muddled', amount: 6},
                {type: 'muddled', amount: 6},
                {type: 'muddled', amount: 6},
                {type: 'muddled', amount: 6},
            ], 
            effects: [
                {effect: 'arcane', amount: 20, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'master_summoner', name: 'Master Summoner', type: 'magic', mana: 1, tier: 'rare', weight: 4, courage: 5, pack: 'combine', 
        magic: [{type: 'wild', amount: 12}], 
        sound: 'magic16',
        effects: [
            {effect: 'summon', amount: 8, turns: 2}
        ],
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 16}], 
            effects: [
                {effect: 'summon', amount: 8, turns: 4}
            ],
        },
        fireShardUpgrades: {
            magic_2: [{type: 'wild', amount: 30}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 20}], 
        },
    }),
    new Cards({
        id: 'master_sorcerer', name: 'Master Sorcerer', type: 'magic', mana: 1, tier: 'rare', weight: 4, courage: 5, pack: 'rainbow', 
        magic: [{type: 'wild', amount: 12}], 
        sound: 'magic16',
        effects: [
            {effect: 'sorcery', amount: .5, turns: 2}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'sorcery', amount: .5, turns: 4}
            ],
        },
        iceShardUpgrades: {
            magic_2: [{type: 'wild', amount: 24}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 18}], 
        },
    }),
    new Cards({
        id: 'master_conjurer', name: 'Master Conjurer', type: 'magic', mana: 2, tier: 'rare', weight: 4, courage: 5, pack: 'cycle', 
        magic: [{type: 'wild', amount: 12}], 
        sound: 'magic16',
        effects: [
            {effect: 'conjure', amount: 3, turns: 3}
        ],
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 16}], 
            effects: [
                {effect: 'conjure', amount: 6, turns: 3}
            ],
        },
        fireShardUpgrades: {
            effects_2: [
                {effect: 'conjure', amount: 9, turns: 3}
            ],
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 20}], 
        },
    }),
    new Cards({
        id: 'secret_arts', name: 'Secret Arts', type: 'magic', mana: 3, tier: 'rare', ephemeral: true, pack: 'rainbow', weight: 3, courage: 4, 
        magic: [{type: 'wild', amount: 8}], 
        effects: [
            {effect: 'conjure', amount: 2, turns: 2},
            {effect: 'sorcery', amount: .2, turns: 2},
            {effect: 'summon', amount: 4, turns: 2},
            {effect: 'arcane', amount: 3, turns: 2}
        ],
        draw: {
            magic: [{type: 'wild', amount: 4}],
        },
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 4, turns: 4},
                {effect: 'sorcery', amount: .4, turns: 4},
                {effect: 'summon', amount: 8, turns: 4},
                {effect: 'arcane', amount: 6, turns: 4}
            ],
            ephemeral: false
        },
    }),
    new Cards({
        id: 'dazzle', name: 'Dazzle', type: 'magic', mana: 1, tier: 'rare', vanish: true, pack: 'combine', courage: 3,
        effects: [
            {effect: 'enchanter', amount: 1, turns: 2}
        ],
        actions: [
            {action: 'addCard', value: 2, what: 'impresa', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false,
            use: 1,
            effects: [
                {effect: 'enchanter', amount: 1, turns: 3}
            ],
        },
    }),
    new Cards({
        id: 'razzle', name: 'Razzle', type: 'magic', mana: 1, tier: 'rare', vanish: true, pack: 'combine', courage: 3, 
        effects: [
            {effect: 'mage', amount: 2, turns: 2}
        ],
        actions: [
            {action: 'addCard', value: 2, what: 'impresa', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false,
            use: 1,
            effects: [
                {effect: 'mage', amount: 2, turns: 3}
            ],
        },
    }),
    new Cards({
        id: 'master_of_all', name: 'Master of All', type: 'magic', mana: 3, target: 'monster', tier: 'rare', vanish: true, ephemeral: true, pack: 'combine', courage: 4, 
        dmg: [10],
        blk: [20],
        armor: [8], 
        magic: [{type: 'wild', amount: 12}],
        sound: 'magic16',
        actions: [
            {action: 'addCard', value: 2, what: 'impresa', to: 'drawCards'},
        ],
        draw: {
            magic: [{type: 'wild', amount: 4}],
            blk: [5],
            dmg: [1]
        },
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 24}],
        },
        iceShardUpgrades: {
            blk: [30],
            blk_2: [40]
        },
        fireShardUpgrades: {
            dmg: [15],
            dmg_2: [20]
        },
        bothShardUpgrades: {
            ephemeral: false
        },
    }),
    new Cards({
        id: 'mystical_energy', name: 'Mystical Energy', type: 'magic', mana: 0, tier: 'rare', vanish: true, weight: .5, courage: 5, pack: 'rainbow', expire: 1,
        magic: [{type: 'wild', amount: 7}],
        actions: [
            {action: 'removeHexes', to: 'player'},
            {action: 'stat', what: 'mana', key: 'current', value: 1}
        ],
        draw: {
            magic: [{type: 'wild', amount: 2}],
            blk: [6]
        },
        slots: 2,
        shardUpgrades: {
            vanish: false,
            use: 1,
            expire: 2
        },
        bothShardUpgrades: {
            vanish: false,
            use: 2,
            expire: 3,
            magic: [{type: 'wild', amount: 10}],
        },
    }),
    new Cards({
        id: 'mystical_maneuver', name: 'Mystical Maneuver', type: 'magic', mana: 1, tier: 'rare', use: 2, linger: 1, pack: 'cycle', courage: 3, 
        magic: [{type: 'wild', amount: 4}], 
        sound: 'magic17',
        actions: [
            {action: 'draw', value: 2},
            {action: 'discard', value: 1}
        ],
        draw: {
            magic: [{type: 'wild', amount: 4}],
            dmg: [2]
        },
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'draw', value: 4},
                {action: 'discard', value: 2}
            ],
        },
        iceShardUpgrades: {
            linger: 2
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 8}], 
            draw: {
                magic: [{type: 'wild', amount: 8}],
                dmg: [4]
            },
        },
    }),
    new Cards({
        id: 'vortex', name: 'Vortex', type: 'magic', mana: '?', tier: 'rare', pack: 'rainbow', courage: 5,
        magic: [{type: 'wild', amount: 10}], 
        sound: 'magic7',
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 16}],  
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 22}],  
        },
    }),
    new Cards({
        id: 'ancient_runestone', name: 'Ancient Runestone', type: 'magic', mana: 3, tier: 'rare', pack: 'rainbow', weight: 3, courage: 5, 
        magic: [{type: 'wild', amount: 3}], 
        effects: [
            {effect: 'mage', amount: 3, turns: 2},
            {effect: 'enchanter', amount: 1, turns: 2}
        ],
        draw: {
            magic: [{type: 'wild', amount: 1}],
        },
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 6}], 
            effects: [
                {effect: 'mage', amount: 6, turns: 2},
                {effect: 'enchanter', amount: 2, turns: 2}
            ],
        },
        fireShardUpgrades: {
            draw_2: {
                magic: [{type: 'wild', amount: 4}],
            },
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'mage', amount: 6, turns: 2},
                {effect: 'enchanter', amount: 2, turns: 2}
            ],
        },
    }),
    new Cards({
        id: 'fleeting_incantation', name: 'Fleeting Incantation', type: 'magic', mana: 0, tier: 'rare', linger: 2, use: 2, expire: 2, pack: 'rainbow', weight: 7, courage: 4, 
        magic: [{type: 'wild', amount: 7}],
        sound: 'magic6',
        slots: 2,
        shardUpgrades: {
            natural: true,
            expire: 4
        },
        bothShardUpgrades: {
            use: 3,
            linger: 3,
            expire: 6
        },
    }),
    new Cards({
        id: 'obelisk', name: 'Obelisk', type: 'magic', mana: 1, tier: 'rare', pack: 'rainbow', weight: 6, courage: 4, 
        magic: [{type: 'wild', amount: 3}], 
        sound: 'magic9',
        actions: [
            {action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 6}], 
            actions: [
                {action: 'addCard', value: 3, what: 'sparks', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            magic_2: [{type: 'wild', amount: 9}], 
            actions_2: [
                {action: 'addCard', value: 5, what: 'sparks', to: 'drawCards', with: ['frost']},
            ],
        },
        bothShardUpgrades: {
            magic: [{type: 'wild', amount: 9}], 
            actions: [
                {action: 'addCard', value: 5, what: 'sparks', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'evermagic', name: 'Evermagic', type: 'magic', tier: 'rare', mana: 0, pack: 'cycle', use: 4, linger: 4, weight: 2, ephemeral: true,
        magic: [{type: 'wild', amount: 1}],
        slots: 2,
        draw: {
            actions: [
                {action: 'addCard', value: 1, what: 'evermagic', to: 'discardCards'},
            ],
        },
        iceShardUpgrades: {
            linger: 7,
            use: 7,
        },
        fireShardUpgrades: {
            magic: [{type: 'wild', amount: 4}],
        },
        bothShardUpgrades: {
            draw: {
                actions: [
                    {action: 'addCard', value: 1, what: 'evermagic', to: 'discardCards', with: ['frost', 'flame']},
                ],
            }
        }
    }),






    /* legendary */
    new Cards({
        id: 'annihilation', name: 'Annihilation', type: 'magic', mana: 3, tier: 'legendary', courage: 8, 
        magic: [{type: 'wild', amount: 60}], 
        sound: 'magic19',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 80}],
            natural: true,
            retain: true 
        },
    }),
    new Cards({
        id: 'flare_up', name: 'Flare Up', type: 'magic', mana: 0, tier: 'legendary', courage: 8, use: 1, retain: true, linger: 1,
        magic: [{type: 'wild', amount: 25}], 
        slots: 1,
        sound: 'magic20',
        shardUpgrades: {
            magic: [{type: 'wild', amount: 30}], 
            use: 2,
            linger: 2
        },
    }),
    new Cards({
        id: 'legion', name: 'Legion', type: 'magic', mana: 2, tier: 'legendary', courage: 8,
        sound: 'magic21', 
        magic: [
            {type: 'chaos', amount: 10},
            {type: 'dark', amount: 10},
            {type: 'elemental', amount: 10},
        ], 
        slots: 1,
        shardUpgrades: {
            magic: [
                {type: 'chaos', amount: 20},
                {type: 'dark', amount: 20},
                {type: 'elemental', amount: 20},
            ], 
        },
    }),
    new Cards({
        id: 'ignite', name: 'Ignite', type: 'magic', mana: 1, tier: 'legendary', courage: 8, vanish: true,
        sound: 'magic22',
        actions: [
            {action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},
            {action: 'addCard', value: 1, what: 'sparks', to: 'drawCards', with: ['frost']},
            {action: 'addCard', value: 2, what: 'sparks', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'sparks', to: 'handCards', with: ['frost']},
            {action: 'addCard', value: 2, what: 'sparks', to: 'discardCards'},
            {action: 'addCard', value: 1, what: 'sparks', to: 'discardCards', with: ['frost']},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false,
        },
    }),
    new Cards({
        id: 'perfect_storm', name: 'Perfect Storm', type: 'magic', mana: 2, tier: 'legendary', courage: 8, pack: 'rainbow',
        sound: 'magic23',
        magic: [{type: 'wild', amount: 10}], 
        effects: [
            {effect: 'lightning', amount: 5, turns: 2},
            {effect: 'thunder', amount: .5, turns: 2},
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 15}], 
            effects: [
                {effect: 'lightning', amount: 10, turns: 3},
                {effect: 'thunder', amount: 1, turns: 3},
            ],
        },
    }),
    new Cards({
        id: 'eternal_runestone', name: 'Eternal Runestone', type: 'magic', mana: 2, vanish: true, tier: 'legendary', retain: true, pack: 'rainbow', courage: 8, 
        magic: [{type: 'wild', amount: 5}], 
        sound: 'magic24',
        effects: [
            {effect: 'mage', amount: 4, turns: 2},
            {effect: 'enchanter', amount: 3, turns: 2}
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'wild', amount: 10}], 
            effects: [
                {effect: 'mage', amount: 4, turns: 3},
                {effect: 'enchanter', amount: 3, turns: 3}
            ],
            vanish: false,
            use: 1, 
            linger: 1
        },
    }),



];


export function AllCards() {

    const cards = ALL_CARDS;
    let game = window.game;

    function getAddableCards(tier = false, type = false, pack = false, exclude = []) {
        let items = cards;
        if(tier && type) {
            items = items.filter(i => i.tier == tier && i.type == type);
        } else if(tier) {
            items = items.filter(i => i.tier == tier);
        } else if(type) {
            items = items.filter(i => i.type == type);
        }
        // deal with booster packs
        if(pack) {
            // filter to only cards in the passed-in booster pack
            items = items.filter(i => i.pack == pack);
        } else {
            if(game.allPacks == false) {
                if(game.excludeBasics) {
                    // filter to only cards in the current booster pack
                    items = items.filter(i => i.pack == game.boosterPack);
                } else {
                    // filter to all basic cards plus the current booster pack
                    items = items.filter(i => i.pack == 'basic' || i.pack == game.boosterPack);
                }
            } else {
                if(game.excludeBasics) {
                    // filter to only cards in all booster packs
                    items = items.filter(i => i.pack != 'basic');
                } else {
                    // do nothing - do not filter out any booster packs
                }
            }
        }
        items = items.filter(i => i.addable == true);
        items = items.filter(i => !exclude.includes(i.id));
        return items;
    }

    function getAllCards() {
        let items = cards;
        for(let i = 0; i < items.length; i++) {
            items[i].guid = util.randString();

            // standard description
            let desc = Deck().buildDescription(items[i]);
            items[i].desc = desc;

            // slots description
            let slotDesc = Deck().buildSlotsDescription(items[i]);
            items[i].slotDesc = slotDesc;
        }
        return items;
    }

    function getTotalCards() {
        return cards?.length;
    }

    function buildLibrary() {
        let index = 0;
        const typeOrder = ['attack', 'magic', 'tool', 'ability', 'clutter', 'interrupt'];
        const tierOrder = ['common', 'uncommon', 'rare', 'legendary'];
        const cards = this.getAllCards().sort((a, b) => {
            // Normalize types for special groups
            let typeA = a.type === 'bottled' ? 'tool' : a.type === 'converter' ? 'magic' : a.type;
            let typeB = b.type === 'bottled' ? 'tool' : b.type === 'converter' ? 'magic' : b.type;
            
            // Get indices for normalized types
            let typeIndexA = typeOrder.indexOf(typeA);
            let typeIndexB = typeOrder.indexOf(typeB);
    
            if (typeIndexA === typeIndexB) {
                // If types are the same, sort by tier
                let tierA = a.tier || 'common'; // Default to 'common' if not specified
                let tierB = b.tier || 'common'; // Default to 'common' if not specified
                let tierIndexA = tierOrder.indexOf(tierA);
                let tierIndexB = tierOrder.indexOf(tierB);
                return tierIndexA - tierIndexB;
            }
    
            // Sort by type if different
            return typeIndexA - typeIndexB;
        });
        const totalCards = cards.length;
    
        function loadCard() {
            if (index < totalCards) {
                util.appendCard(cards[index], '.library-panel .cards');
                index++;
                requestAnimationFrame(loadCard);
            }
        }
    
        requestAnimationFrame(loadCard);
    }
    

    function getWeapons() {

        let weapons = cards.filter(i => i.weapon == true);

        if(weapons.length == 0) {
            weapons = false;
        }

        return weapons;

    }


    return {
        cards,
        getAddableCards,
        getAllCards,
        getTotalCards,
        buildLibrary,
        getWeapons
    }
}

var sounds = util.sound('soundsprite.mp3');

export function Deck() {

    let cards = [];
    let game = window.game;
    let player = window.player;

    function buildDeck() {
        addCard('jab');
        addCard('jab');
        addCard('jab');
        addCard('rainbow_orb');
        addCard('shield');
        addCard('shield');
        addCard('shield');
        addCard('leather_armor');
        addCard('stun');
        if(game.difficulty == 'easy') {
            addCard('spewnicorn_spray');
        }

        // this is how to add a shard on init - DEV MODE ONLY
        //attachShard(util.getCardById('mantleblight', this.cards), 'flame');
        //attachShard(util.getCardById('clever_trick', this.cards), 'flame');
        
    }

    function removeCard(guid) {
        cards = cards.filter(i => i.guid !== guid);
        this.cards = cards;
        player.cardsOwned -= 1;
    }

    function addCard(add, guid = false) {
        let addCard = AllCards().cards.find(({ id }) => id === add);
        //let copiedCard = JSON.parse(JSON.stringify(addCard)); // necessary to create a deep copy
        let copiedCard = $.extend(true, {}, addCard);
        if(guid) {
            copiedCard.guid = guid
        } else {
            copiedCard.guid = util.randString();
        }
        
        // standard card description
        let desc = buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc;

        cards.push(copiedCard);
        if(copiedCard == undefined || copiedCard == false || copiedCard == '' || copiedCard == null) {
            console.log('Tried to add ' + add + ' to deck but failed.');
            console.log('addCard:');
            console.log(addCard);
            console.log('game:');
            console.log(game);
            console.log('this.cards:');
            console.log(this.cards);
            console.log('cards:');
            console.log(cards);
        }
        player.cardsOwned += 1;
    }

    function buildSlotsDescription(card) {
        let desc = '';
        let frostDesc = buildDescription(card, 'frost');
        let flameDesc = buildDescription(card, 'flame');
        let frost2Desc = buildDescription(card, 'frost_2');
        let flame2Desc = buildDescription(card, 'flame_2');
        let bothDesc = buildDescription(card, 'both');
        if(frostDesc == flameDesc) {
            desc += frostDesc != '' ? '<div><span class="either">Shard</span>: ' + frostDesc : '</div>';
        } else {
            desc += frostDesc != '' ? '<div><span class="frost">Frost Shard</span>: ' + frostDesc : '</div>';
            desc += flameDesc != '' ? '<div><span class="flame">Flame Shard</span>: ' + flameDesc : '</div>';
        }
        if(card.slots > 1) {
            if(bothDesc == flame2Desc || bothDesc == frost2Desc) {
                //desc += bothDesc != '' ? '<div><span class="frost">Frost Shard</span> + <span class="flame">Flame Shard</span>: ' + bothDesc : '</div>';
                desc += bothDesc != '' ? '<div><span class="either">Double Shard</span>: ' + bothDesc : '</div>';
            }
            if(bothDesc != frost2Desc) {
                desc += frost2Desc != '' ? '<div><span class="frost">Double Frost Shard</span>: ' + frost2Desc : '</div>';
            }
            if(bothDesc != flame2Desc) {
                desc += flame2Desc != '' ? '<div><span class="flame">Double Flame Shard</span>: ' + flame2Desc : '</div>';
            }
        }
        return desc;
    }

    function buildDescription(thisCard, shard = false) {

        let desc = '';
        // let's just use a copy of the passed card since we're modifying it with shards for description purposes only
        //let card = JSON.parse(JSON.stringify(thisCard)); // necessary to create a deep copy
        let card = $.extend(true, {}, thisCard);

        if(shard=='flame') {
            card.shards.push('flame');
        } else if(shard=='frost') {
            card.shards.push('frost');
        } else if(shard=='flame_2') {
            card.shards.push('flame');
            card.shards.push('flame');
        } else if(shard=='frost_2') {
            card.shards.push('frost');
            card.shards.push('frost');
        } else if(shard=='both') {
            card.shards.push('flame');
            card.shards.push('frost');
        }

        // description override
        let override = shard ? util.getShardAttribute(card, shard, 'descOverride') : util.getCardAttribute(card, 'descOverride');
        if(override != '' && override != false) {
            desc = override;
            return desc;
        }

        // custom description preface
        let additionalDesc = shard ? util.getShardAttribute(card, shard, 'additionalDesc') : util.getCardAttribute(card, 'additionalDesc');
        desc += additionalDesc;

        // trigger
        let trigger = shard ? util.getShardAttribute(card, shard, 'trigger') : util.getCardAttribute(card, 'trigger');
        let triggerDesc = buildTriggerDescription(trigger, desc);
        desc += triggerDesc;

        /*let natural = shard ? util.getShardAttribute(card, shard, 'natural') : util.getCardAttribute(card, 'natural');
        if(natural) {
            desc += '<div class="desc-item"><span class="highlight">Natural</span></div>';
        }*/ // we're using a bubble indicator for this now

        let blk = shard ? util.getShardAttribute(card, shard, 'blk') : util.getCardAttribute(card, 'blk');
        if(blk.length > 0) {
            desc += '<div class="desc-item">Gain ';
            for(let i = 0; i < blk.length; i++) {
                desc += '<span class="amount blk" data-amount="' + blk[i] + '">' + blk[i] + '</span>, ';
            }
            desc = desc.slice(0, -2);
            if(card.mana == '?') {
                desc += ' block ? times</div>';
            } else {
                desc += ' block</div>';
            }
        }

        let armor = shard ? util.getShardAttribute(card, shard, 'armor') : util.getCardAttribute(card, 'armor');
        if(armor.length > 0) {
            desc += '<div class="desc-item">Gain ';
            for(let i = 0; i < armor.length; i++) {
                desc += '<span class="amount armor" data-amount="' + armor[i] + '">' + armor[i] + '</span>, ';
            }
            desc = desc.slice(0, -2);
            if(card.mana == '?') {
                desc += ' armor ? times</div>';
            } else {
                desc += ' armor</div>';
            }
        }

        let dmg = shard ? util.getShardAttribute(card, shard, 'dmg') : util.getCardAttribute(card, 'dmg');
        if(dmg.length > 0) {
            desc += '<div class="desc-item desc-dmg">Deal ';
            for(let i = 0; i < dmg.length; i++) {
                desc += '<span class="amount dmg" data-amount="' + dmg[i] + '">' + dmg[i] + '</span>, ';
            }
            desc = desc.slice(0, -2);
            if(card.mana == '?') {
                desc += ' damage ? times</div>';
            } else {
                desc += ' damage</div>';
            }
        }

        let magicDesc = '';
        let magic = shard ? util.getShardAttribute(card, shard, 'magic') : util.getCardAttribute(card, 'magic');
        if(magic.length > 0) {
            magicDesc += '<div class="desc-item">Summon ';
            for(let i = 0; i < magic.length; i++) {
                magicDesc += '<span class="amount magic" data-amount="' + magic[i].amount + '">' + magic[i].amount + '</span> ' + magic[i].type + ', ';
            }
            magicDesc = magicDesc.slice(0, -2);
            if(card.mana == '?') {
                magicDesc += ' magic ? times</div>';
            } else {
                magicDesc += ' magic</div>';
            }
        }
        desc += magicDesc;

        // effects
        let effects = shard ? util.getShardAttribute(card, shard, 'effects') : util.getCardAttribute(card, 'effects');
        let effectsDesc = buildEffectsDescription(effects, desc, thisCard);
        desc += effectsDesc;

        // abilities
        let abilities = shard ? util.getShardAttribute(card, shard, 'abilities') : util.getCardAttribute(card, 'abilities');
        let abilitiesDesc = buildAbilitiesDescription(abilities, desc, thisCard);
        desc += abilitiesDesc;

        // actions
        let actions = shard ? util.getShardAttribute(card, shard, 'actions') : util.getCardAttribute(card, 'actions');
        let actionsDesc = buildActionsDescription(actions, desc);
        desc += actionsDesc;


        // shard-only descriptions
        if(shard) {
            let mana = util.getShardAttribute(card, shard, 'mana');
            if(mana !== undefined && mana !== '') {
                desc += '<div class="desc-item">Mana: ' + mana + '</div>';
            }
            let age = util.getShardAttribute(card, shard, 'age');
            if(age > 0) {
                desc += '<div class="desc-item"><span class="highlight">Age:</span> ' + age + '</span></div>';
            }
            let use = util.getShardAttribute(card, shard, 'use');
            if(use > 0) {
                desc += '<div class="desc-item"><span class="highlight">Use:</span> ' + (use + 1) + '</div>';
            }
            let expire = util.getShardAttribute(card, shard, 'expire');
            if(expire > 0) {
                desc += '<div class="desc-item"><span class="highlight">Expire:</span> ' + expire + '</div>';
            }
            let linger = util.getShardAttribute(card, shard, 'linger');
            if(linger > 0) {
                desc += '<div class="desc-item"><span class="highlight">Linger:</span> ' + linger + '</div>';
            }
            let vanish = util.getShardAttribute(card, shard, 'vanish');
            if(vanish !== '') {
                let prefix = vanish ? '' : 'Lose ';
                desc += '<div class="desc-item">' + prefix + '<span class="highlight">Vanish</span></div>';
            }
            let retain = util.getShardAttribute(card, shard, 'retain');
            if(retain !== '') {
                let prefix = retain ? '' : 'Lose ';
                desc += '<div class="desc-item">' + prefix + '<span class="highlight">Retain</span></div>';
            }
            let ephemeral = util.getShardAttribute(card, shard, 'ephemeral');
            if(ephemeral !== '') {
                let prefix = ephemeral ? '' : 'Lose ';
                desc += '<div class="desc-item">' + prefix + '<span class="highlight">Ephemeral</span></div>';
            }
            let breakable = util.getShardAttribute(card, shard, 'breakable');
            if(breakable !== '') {
                let prefix = breakable ? '' : 'Lose ';
                desc += '<div class="desc-item">' + prefix + '<span class="highlight">Breakable</span></div>';
            }
            let natural = util.getShardAttribute(card, shard, 'natural');
            if(natural !== '') {
                let prefix = natural ? '' : 'Lose ';
                desc += '<div class="desc-item">' + prefix + '<span class="highlight">Natural</span></div>';
            }
        } else {
            // does not apply to shard
            // trades
            let trades = util.getCardAttribute(card, 'trade');
            let tradesDesc = buildTradesDescription(trades, desc);
            desc += tradesDesc;
        }

        // behaviors
        let behaviors = [['combine', 'Combined'], ['draw', 'Drawn'], ['discard', 'Discarded'], ['destroy', 'Destroyed']];
        let behaviorsDesc = '';
        for(let i = 0; i < behaviors.length; i++) {
            let noun = behaviors[i][0];
            let verb = behaviors[i][1];
            let behavior = shard ? util.getShardAttribute(card, shard, noun) : util.getCardAttribute(card, noun);
            let behaviorsPrefix = '<div class="desc-item desc-behavior">When ' + verb + ': ';
            let behaviorDesc = '';
            if(behavior) {
                let dmgDesc = '';
                let dmg = shard ? util.getShardAttribute(card, shard, 'dmg', noun) : util.getCardAttribute(card, 'dmg', noun);
                let target = shard ? util.getShardAttribute(card, shard, 'target', noun) : util.getCardAttribute(card, 'target', noun);
                if(dmg.length > 0) {
                    if(target == 'player') {
                        dmgDesc += '<div class="desc-item desc-sub-item">Take ';
                    } else {
                        dmgDesc += '<div class="desc-item desc-sub-item">Deal ';
                    }
                    for(let i = 0; i < dmg.length; i++) {
                        dmgDesc += '<span class="amount dmg" data-amount="' + dmg[i] + '">' + dmg[i] + '</span>, ';
                    }
                    dmgDesc = dmgDesc.slice(0, -2);
                    dmgDesc += ' damage</div>';
                }
                behaviorDesc += dmgDesc;
                let blkDesc = '';
                let blk = shard ? util.getShardAttribute(card, shard, 'blk', noun) : util.getCardAttribute(card, 'blk', noun);
                if(blk.length > 0) {
                    blkDesc += '<div class="desc-item desc-sub-item">Gain ';
                    for(let i = 0; i < blk.length; i++) {
                        blkDesc += '<span class="amount blk" data-amount="' + blk[i] + '">' + blk[i] + '</span>, ';
                    }
                    blkDesc = blkDesc.slice(0, -2);
                    blkDesc += ' block</div>';
                }
                behaviorDesc += blkDesc;
                let armorDesc = '';
                let armor = shard ? util.getShardAttribute(card, shard, 'armor', noun) : util.getCardAttribute(card, 'armor', noun);
                if(armor.length > 0) {
                    armorDesc += '<div class="desc-item desc-sub-item">Gain ';
                    for(let i = 0; i < armor.length; i++) {
                        armorDesc += '<span class="amount armor" data-amount="' + armor[i] + '">' + armor[i] + '</span>, ';
                    }
                    armorDesc = armorDesc.slice(0, -2);
                    armorDesc += ' armor</div>';
                }
                behaviorDesc += armorDesc;
                let magicDesc = '';
                let magic = shard ? util.getShardAttribute(card, shard, 'magic', noun) : util.getCardAttribute(card, 'magic', noun);
                if(magic.length > 0) {
                    magicDesc += '<div class="desc-item desc-sub-item">Summon ';
                    for(let i = 0; i < magic.length; i++) {
                        magicDesc += '<span class="amount magic" data-amount="' + magic[i].amount + '">' + magic[i].amount + '</span> ' + magic[i].type + ', ';
                    }
                    magicDesc = magicDesc.slice(0, -2);
                    magicDesc += ' magic</div>';
                }
                behaviorDesc += magicDesc;

                // effects
                let effects = shard ? util.getShardAttribute(card, shard, 'effects', noun) : util.getCardAttribute(card, 'effects', noun);
                let effectsDesc = buildEffectsDescription(effects, behaviorDesc, thisCard);
                behaviorDesc += effectsDesc;

                // abilities       
                let abilities = shard ? util.getShardAttribute(card, shard, 'abilities', noun) : util.getCardAttribute(card, 'abilities', noun);
                let abilitiesDesc = buildAbilitiesDescription(abilities, behaviorDesc, thisCard);
                behaviorDesc += abilitiesDesc;

                // actions
                let actions = shard ? util.getShardAttribute(card, shard, 'actions', noun) : util.getCardAttribute(card, 'actions', noun);
                let actionsDesc = buildActionsDescription(actions, behaviorDesc);
                behaviorDesc += actionsDesc;

                // add to overall string
                behaviorsDesc += behaviorsPrefix + behaviorDesc + '</div>';
            }
        }

        desc += behaviorsDesc;

        // stances
        let stances = ['aura', 'sparkle', 'shimmer'];
        let stancesDesc = '';
        for(let i = 0; i < stances.length; i++) {
            let stance = stances[i];
            let att = util.getCardAttribute(card, stance);
            let attPrefix = '<div class="desc-item desc-stance"><span class="' + stance + '">' + stance + ' Stance</span>: ';
            let attDesc = '';
            if(att) {
                let dmgDesc = '';
                let dmg = util.getCardAttribute(card, 'dmg', stance);
                let target = util.getCardAttribute(card, 'target', stance);
                if(dmg.length > 0) {
                    if(target == 'player') {
                        dmgDesc += '<div class="desc-item desc-sub-item desc-dmg">Take ';
                    } else {
                        dmgDesc += '<div class="desc-item desc-sub-item desc-dmg">Deal ';
                    }
                    for(let i = 0; i < dmg.length; i++) {
                        dmgDesc += '<span class="amount dmg" data-amount="' + dmg[i] + '">' + dmg[i] + '</span>, ';
                    }
                    dmgDesc = dmgDesc.slice(0, -2);
                    dmgDesc += ' damage</div>';
                }
                attDesc += dmgDesc;
                let blkDesc = '';
                let blk = util.getCardAttribute(card, 'blk', stance);
                if(blk.length > 0) {
                    blkDesc += '<div class="desc-item desc-sub-item">Gain ';
                    for(let i = 0; i < blk.length; i++) {
                        blkDesc += '<span class="amount blk" data-amount="' + blk[i] + '">' + blk[i] + '</span>, ';
                    }
                    blkDesc = blkDesc.slice(0, -2);
                    blkDesc += ' block</div>';
                }
                attDesc += blkDesc;
                let armorDesc = '';
                let armor = util.getCardAttribute(card, 'armor', stance);
                if(armor.length > 0) {
                    armorDesc += '<div class="desc-item desc-sub-item">Gain ';
                    for(let i = 0; i < armor.length; i++) {
                        armorDesc += '<span class="amount armor" data-amount="' + armor[i] + '">' + armor[i] + '</span>, ';
                    }
                    armorDesc = armorDesc.slice(0, -2);
                    armorDesc += ' armor</div>';
                }
                attDesc += armorDesc;
                let magicDesc = '';
                let magic = util.getCardAttribute(card, 'magic', stance);
                if(magic.length > 0) {
                    magicDesc += '<div class="desc-item desc-sub-item">Summon ';
                    for(let i = 0; i < magic.length; i++) {
                        magicDesc += '<span class="amount magic" data-amount="' + magic[i].amount + '">' + magic[i].amount + '</span> ' + magic[i].type + ', ';
                    }
                    magicDesc = magicDesc.slice(0, -2);
                    magicDesc += ' magic</div>';
                }
                attDesc += magicDesc;

                // effects
                let effects = shard ? util.getShardAttribute(card, shard, 'effects', stance) : util.getCardAttribute(card, 'effects', stance);
                let effectsDesc = buildEffectsDescription(effects, attDesc, thisCard);
                attDesc += effectsDesc;

                // abilities       
                let abilities = shard ? util.getShardAttribute(card, shard, 'abilities', stance) : util.getCardAttribute(card, 'abilities', stance);
                let abilitiesDesc = buildAbilitiesDescription(abilities, attDesc, thisCard);
                attDesc += abilitiesDesc;

                // actions
                let actions = shard ? util.getShardAttribute(card, shard, 'actions', stance) : util.getCardAttribute(card, 'actions', stance);
                let actionsDesc = buildActionsDescription(actions, attDesc);
                attDesc += actionsDesc;

                // add to overall string
                stancesDesc += attPrefix + attDesc + '</div>';
            }
        }

        desc += stancesDesc;

        return desc;

    }

    function buildTriggerDescription(trigger, desc) {
        let triggerDesc = '';
        if(trigger != undefined) {
            if(trigger.counter > -1) {
                let when = trigger.when;
                let at = trigger.at;
                let per = trigger.per;
                let once = trigger.once;
                let plural = at == 1 ? '' : 's';
                let atText = at == 1 ? '' : at;
                triggerDesc += '<div class="desc-item">';
                switch(when) {
                    case 'turns':
                        if(once) {
                            triggerDesc += 'On turn ' + at;
                        } else {
                            triggerDesc += 'Every ' + atText + ' turn' + plural;
                        }
                        break;
                    case 'cardsPlayed':
                        triggerDesc += 'Every ' + at + ' cards played';
                        break;
                    case 'attackCardsPlayed':
                        triggerDesc += 'Every ' + at + ' attack cards played';
                        break;
                    case 'toolCardsPlayed':
                        triggerDesc += 'Every ' + at + ' tool cards played';
                        break;
                    case 'magicCardsPlayed':
                        triggerDesc += 'Every ' + at + ' magic cards played';
                        break;
                }
                if(per == 'turn') {
                    triggerDesc += ' per ' + per; 
                }
                triggerDesc += '</div>';
                
            }
        }
        return triggerDesc;
    }

    function buildEffectsDescription(effects, behaviorDesc, thisCard) {
        let effectsDesc = '';
        if(effects != undefined) {
            if(effects.length > 0) {
                for(let e = 0; e < effects.length; e++) {
                    if(effects[e].hex) {
                        effectsDesc += '<div class="desc-item">Hex ';
                    } else {
                        effectsDesc += '<div class="desc-item">Gain ';
                    }
                    let plural = effects[e].turns > 1 ? 's' : '';
                    let turns = effects[e].turns > 0 ? ' <span class="desc-turns">for ' + effects[e].turns + ' turn' + plural + '</span> ' : '';
                    let effectText = effects[e].amount;
                    let effectAmount = effects[e].amount;
                    let desc = '';
                    // don't we want to show description on cards too, not just treasures and candies?
                    //if((thisCard.type == 'ability') || ((thisCard.type == 'treasure' || thisCard.type == 'candy') && thisCard.effects.length > 0)) {
                    if(thisCard.effects.length > 0) {
                        let gameEffect = game.effects.find(({ id }) => id === effects[e].effect);
                        desc = ' <span class="effect-description">(' + gameEffect.desc + ')</span>';
                    }
                    if(effectText == undefined) {
                        effectText = effects[e].base;
                        effectAmount = effects[e].base;
                    }
                    if(effects[e].effect == 'punch' || effects[e].effect == 'sorcery' || effects[e].effect == 'resistance' || effects[e].effect == 'thunder' || effects[e].effect == 'vigor' || effects[e].effect == 'fatality' || effects[e].effect == 'veil') {
                        effectText = Math.round((effectText + Number.EPSILON) * 100);
                        effectText += '%';
                    }
                    if(effects[e].effect == 'mastery') {
                        effectText = Math.round((effectText + Number.EPSILON) * 10);
                        effectText += '%';
                    }
                    effectsDesc += ' <span class="amount ' + effects[e].effect + '" data-amount="' + effectAmount + '">' + effectText + '</span> ' + '<span class="effect-text">' + effects[e].effect + '</span>' + turns + desc + '</div>';
                }
            }
        }
        return effectsDesc;
    }

    function buildAbilitiesDescription(abilities, behaviorDesc, thisCard) {
        let abilitiesDesc = '';
        if(abilities != undefined) {
            if(abilities.length > 0) {
                for(let e = 0; e < abilities.length; e++) {
                    let gameAbility = game.abilities.find(({ id }) => id === abilities[e].ability);
                    if(abilities[e].hex) {
                        abilitiesDesc += '<div class="desc-item">Hex ';
                    } else {
                        abilitiesDesc += '<div class="desc-item">Gain ';
                    }
                    let plural = abilities[e].turns > 1 ? 's' : '';
                    let turns = abilities[e].turns > 0 && gameAbility.context !== 'card' ? ' for ' + abilities[e].turns + ' turn' + plural : '';
                    let amount = abilities[e].turns > 0 && gameAbility.context == 'card' ? abilities[e].turns + ' ' : '';
                    let desc = '';
                    // don't we want to show description on cards too, not just treasures and candies?
                    //if(((thisCard.type == 'treasure' || thisCard.type == 'candy') && thisCard.abilities.length > 0)) {
                    if(thisCard.abilities.length > 0) {
                        desc = ' <span class="ability-description">(' + gameAbility.desc + ')</span>';
                    }
                    abilitiesDesc += amount + '<span class="ability-text">' + gameAbility.name + '</span>' + turns + desc + '</div>';
                }
            }
        }
        return abilitiesDesc;
    }

    function buildActionsDescription(actions, behaviorDesc) {
        let actionsDesc = '';
        if(actions != undefined) {
            if(actions.length > 0) {
                for(let e = 0; e < actions.length; e++) {
                    let id = actions[e].action;
                    let action = game.actions.find(o => o.id === id);
                    let name = action.name;
                    let description = action.desc; // future use
                    let descriptionOverride = actions[e].desc;
                    let what = actions[e].what;
                    let key = actions[e].key;
                    let whatCard = util.getCardById(what, AllCards().cards);
                    let whatName = what;
                    if(whatCard != undefined) whatName = whatCard.name;
                    let select = actions[e].select;
                    let type = actions[e].type;
                    let tier = actions[e].tier;
                    let value = actions[e].value;
                    let to = actions[e].to;
                    let from = actions[e].from;
                    let cardWith = actions[e].with;
                    let optional = actions[e].optional;
                    let modifiers = actions[e].modifiers != undefined ? actions[e].modifiers : {};
                    let modified = '';
                    let plural = value == 1 ? '' : 's';
                    if(descriptionOverride !== undefined && descriptionOverride !== false) {
                        actionsDesc += descriptionOverride + '. ';
                    } else {
                        if(id == 'stat' || id == 'mechanic') {
                            name = whatName.toUpperCase();
                            name = key != undefined ? key.toUpperCase() + ' ' + name : name;
                            let symbol = (typeof value === 'number' && value > 0) ? '+' : '';
                            name = value == 'double' ? 'Double ' + name : name;
                            key = key != undefined ? key : id;
                            value = value != undefined && value != 'double' ? ' ' + symbol + '<span class="amount ' + key + '-' + what + '-amount" data-amount="' + value + '">' + value + '</span>': '';
                            // this would be redundant to display
                            what = '';
                        } else {
                            what = what != undefined ? ' <span class="whatname">' + whatName + '</span>' : '';
                            optional = optional == true ? ' up to ' : '';
                            if(name == 'Find Draw Card' || name == 'Find Discard Card' || name == 'Find Dead Card') {
                                value = value != undefined ? optional + ' (&times;' + value + ')' : '';
                            } else {
                                value = value != undefined ? optional + ' ' + value : '';
                            }
                        }
                        if(id == 'removeHexes' || id == 'removeBuffs') {
                            to = to != undefined ? ' from ' + util.getFromDisplay(to) : '';
                        } else {
                            to = to != undefined ? ' to ' + util.getFromDisplay(to) : '';
                        }    
                        select = select != undefined ? ' ' + select : '';
                        select = select == -1 ? ' all' : select;
                        type = type != undefined ? ' ' + type : '';
                        tier = tier != undefined ? ' ' + tier : '';
                        from = from != undefined ? ' ' + util.getFromDisplay(from) : '';
                        select = from == ' all cards' ? '' : select;
                        if(id == 'transmute') {
                            select = ' up to ' + select;
                        }
                        name = name == 'Add Card' ? 'Add' : name;
                        if(cardWith != undefined) {
                            if(cardWith.length > 1) {
                                cardWith = ' with ' + cardWith[0] + ' and ' + cardWith[1] + ' shards';
                            } else {
                                cardWith = ' with ' + cardWith + ' shard';
                            }
                        } else {
                            cardWith = '';
                        }
                        // process modifiers
                        if(!$.isEmptyObject(modifiers)) {
                            modified += ' with modifiers: '
                            for (var att in modifiers) {
                                if (modifiers.hasOwnProperty(att) && (att !== 'use' && modifiers[att] != -1)) {
                                    modified += att + '&mdash;' + modifiers[att] + ', ';
                                }
                            }
                            modified = modified.slice(0, -2);
                        }
                        if(select != '' && type != '' && value != '') {
                            to = to != '' ? ' and add ' + to : '';
                            if(type == ' any') {
                                actionsDesc += 'Choose ' + select + ' of ' + value + tier + ' card' + plural + ' ' + to + cardWith + modified + '. ';
                            } else {
                                actionsDesc += 'Choose ' + select + ' of ' + value + tier + type + ' card' + plural + ' ' + to + cardWith + modified + '. ';
                            }
                        } else {
                            if(type == ' any') {
                                type = type != '' ? tier + ' card' + plural + ' ' : '';
                            } else if(type == ' attack' || type == ' tool' || type == ' ability' || type == ' magic' || type == ' weapon') {
                                type = type != '' ? tier + type + ' card' + plural + ' ' : '';
                            } else if(type == ' clutter') {
                                type = type != '' ? type : '';
                            } else {
                                type = type != '' ? ' with' + type : '';
                            }
                            
                            // one-offs
                            if(name == 'Ensharden') {
                                what = from == ' draw pile' ? ' cards in your draw pile' : from;
                                from = '';
                                type = type == ' with random' ? ' with random shards' : type;
                            } else if(name == 'Destroy' || name == 'Discard' || name == 'Draw') {
                                what = value == 1 || value == ' up to 1' ? ' card' : ' cards';
                            } else if(name == 'TYPE RAINBOW') {
                                name = 'Change magic type to';
                            } else if(name == 'COURAGE') {
                                name = 'Courage Coin';
                            }

                            actionsDesc += 
                            '<div class="desc-item">' 
                                + '<span class="desc-item-name">' + name + '</span>'
                                + '<span class="desc-item-select">' + select + '</span>' 
                                + '<span class="desc-item-value">' + value + '</span>' 
                                + '<span class="desc-item-what">' + what + '</span>' 
                                + '<span class="desc-item-type">' + type + '</span>' 
                                + '<span class="desc-item-to">' + to + '</span>' 
                                + '<span class="desc-item-from">' + from + '</span>' 
                                + '<span class="desc-item-cardWith">' + cardWith + '</span>' 
                                + '<span class="desc-item-modifiers">' + modified + '</span>'
                            + '</div>';
                        }
                    }
                }
            }
        }
        return actionsDesc;
    }

    function buildTradesDescription(trades) {
        let tradesDesc = '';
        if(trades != undefined) {
            if(trades.length > 0) {
                tradesDesc += '<div class="desc-item desc-trade">Trades for ';
                for(let e = 0; e < trades.length; e++) {
                    let thisCard = util.getCardById(trades[e], AllCards().cards);
                    //if(thisCard == undefined) console.log(trades[e]);
                    tradesDesc += thisCard.name + ', ';
                }
                tradesDesc = tradesDesc.slice(0, -2);
                tradesDesc += '</div>';
            }
        }
        return tradesDesc;
    }

    function hasOpenSlot(card) {

        if(card.shards != undefined) {
            return card.shards.length < card.slots;
        }
        return false;

    }

    function numOpenSlots(theseCards = cards) {

        let num = 0;
        for(let i = 0; i < theseCards.length; i++) {
            let filled = 0;
            if(theseCards[i].shards != undefined) {
                filled = theseCards[i].shards.length;
            }
            num += theseCards[i].slots - filled;
        }
        return num;

    }

    function attachShard(card, shard) {

        card.shards.push(shard);
        let desc = buildDescription(card);
        card.desc = desc;
        let slots = util.buildCardSlots(card);
        let domCard = util.getDomCardByGuid(card.guid);
        domCard.find('.desc-inner').html(desc);
        domCard.find('.slots').html(slots);

    }

    function showModifiedCards(combatDeck, player, refresh = false) {
        if(game.toShow.length > 0) {
			game.toShow = [... new Set(game.toShow)];
            let cards = game.toShow;
            for(let i = 0; i < cards.length; i++) {
                let domCard = [];
                if(cards[i].guid !== '') {
                    domCard = util.getDomCardByGuid(cards[i].guid);
                }
                if(domCard.length == 0 || domCard == undefined) {
                    util.appendCard(cards[i], '.library-panel .cards');
                    domCard = util.getDomCardById(cards[i].id);
                }

                let cloneCard = domCard.parent().clone();
                cloneCard.appendTo('.show-cards');
                // swap out the hand card so the dom card gets rebuilt
                if(!game.combatEndedFlag && refresh) {
                    let thisCard = util.getCardByGuid(cards[i].guid, combatDeck.handCards);
                    if(thisCard != undefined) {
                        util.removeCardByGuid(thisCard.guid, 'replaced');
                        let css = thisCard.playable ? 'playable' : '';
                        let cost = util.getCardAttribute(thisCard, 'mana');
                        if(cost > player.mana.current) {
                            css = '';
                        }
                        util.appendCard(thisCard, '.player-cards', css);
                    }
                }
            }
            util.animateShowCards();
            game.toShow = [];
        }
    }

    function decideCard(type = false, tier = 'common') {

        // determine & update chances
        let legendary = util.chance(game.legendaryChance);
        let rare = util.chance(game.rareChance);
        let uncommon = util.chance(game.uncommonChance);
        let legendaryIncrease = Math.round((game.floor - 10) / 2);
        if(legendaryIncrease < 0) legendaryIncrease = 0;
        //game.legendaryChance += legendaryIncrease; // enable this if we want to show legendary cards outside of gate rewards
        if(game.legendaryChance > 5) game.legendaryChance = 5; // legendary chance caps at 5
        let rareIncrease = Math.round((game.floor - 5) * .2);
        if(rareIncrease < 0) rareIncrease = 0;
        game.rareChance += rareIncrease;
        if(game.rareChance > 25) game.rareChance = 25; // rare chance caps at 25
        let uncommonIncrease = Math.round((game.floor - 3) * .4);
        if(uncommonIncrease < 0) uncommonIncrease = 0;
        game.uncommonChance += uncommonIncrease;
        if(game.uncommonChance > 50) game.uncommonChance = 50; // uncommon chance caps at 50

        // get array of cards to choose from
        let addableCards = AllCards().getAddableCards(tier, type, false, game.toExclude);
        if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate' || legendary) {
            addableCards = AllCards().getAddableCards('legendary', type, false, game.toExclude); // there are currently no legendary addable cards
            if(addableCards.length == 0) addableCards = AllCards().getAddableCards('rare', type, false, game.toExclude);
            game.legendaryChance = 0;
        } else if(game.mapType == 'arena' || rare) {
            addableCards = AllCards().getAddableCards('rare', type, false, game.toExclude);
            let rareDecrease = game.floor;
            game.rareChance -= rareDecrease;
            if(game.rareChance < 0) game.rareChance = 0;
        } else if(uncommon) {
            addableCards = AllCards().getAddableCards('uncommon', type, false, game.toExclude);
            let uncommonDecrease = game.floor;
            game.uncommonChance -= uncommonDecrease;
            if(game.uncommonChance < 0) game.uncommonChance = 0;
        }
        
        // get the actual card
        let card = false;
        if(addableCards.length > 0) {
            card = util.weightedRandom(addableCards);
            let desc = buildDescription(card);
            card.desc = desc;
            let slotDesc = buildSlotsDescription(card);
        	card.slotDesc = slotDesc;
        }
        game.toExclude.push(card.id);
        return card;
    
    }

    function getWeapons() {

        let weapons = cards.filter(i => i.weapon == true);

        if(weapons.length == 0) {
            weapons = false;
        }

        return weapons;

    }

    function getTradeableCards() {

        let tradeCards = cards.filter(i => i.trade.length > 0);

        if(tradeCards.length == 0) {
            tradeCards = false;
        }

        return tradeCards;

    }

    return {
        buildDeck,
        addCard,
        removeCard,
        attachShard,
        showModifiedCards,
        hasOpenSlot,
        numOpenSlots,
        buildDescription,
        buildSlotsDescription,
        decideCard,
        getWeapons,
        getTradeableCards,
        cards
    };
}

export function CombatDeck() {

    let drawCards = [];
    let handCards = [];
    let discardCards = [];
    let deadCards = [];
    let chooseCards = [];
    let transmutingCards = [];
    let game = window.game;

    function sync(deckCards, combatDeck) {
        combatDeck.drawCards = [];
        for(let i = 0; i < deckCards.length; i++) {
            deckCards[i].mana = deckCards[i].baseMana;
            //let copiedCard = JSON.parse(JSON.stringify(deckCards[i])); // necessary to create a deep copy
            let copiedCard = $.extend(true, {}, deckCards[i]);
            combatDeck.drawCards.push(copiedCard);
        }
        combatDeck.handCards = [];
        combatDeck.discardCards = [];
        combatDeck.deadCards = [];
           
    }

    function allLiveCards(combatDeck) {
        return [...combatDeck.drawCards, ...combatDeck.handCards, ...combatDeck.discardCards];
    }

    function allCards(combatDeck) {
        return [...combatDeck.drawCards, ...combatDeck.handCards, ...combatDeck.discardCards, ...combatDeck.deadCards];
    }

    function canDraw(combatDeck) {
        let enoughCards = false;
        if(combatDeck.drawCards.length > 0) enoughCards = true;
        return enoughCards; 
    }

    function canCycle(combatDeck) {
        let cycle = false;
        if(combatDeck.discardCards.length > 0) cycle = true;
        return cycle; 
    }

    function shouldDraw(combatDeck, cardPlayed) {
        let spaceAvailable = true;
        let numCards = cardPlayed ? game.maxHandSize : game.maxHandSize - 1;
        if(combatDeck.handCards.length > numCards) spaceAvailable = false;
        return spaceAvailable; 
    }

    function shuffleDeck(combatDeck) {
        combatDeck.drawCards = util.shuffle(combatDeck.discardCards);
        combatDeck.discardCards = [];
        $('.draw-cards.icon-button').addClass('pulse')
            .one('animationend', function() {
                $(this).removeClass('pulse');
            });
    }

    function getNaturalCard(combatDeck, player) {
        for(let i = 0; i < combatDeck.drawCards.length; i++) {
            let natural = util.getCardAttribute(combatDeck.drawCards[i], 'natural');
            let supernatural = player.supernatural.enabled; 
            let drawn = supernatural ? false : combatDeck.drawCards[i].drawn;
            if(natural && !drawn) {
                return combatDeck.drawCards[i];
            }
        }
        
        return false;
    }

    function getOldestCard(cards, excluded = '') {
        let card = false;
        let oldest = -1;
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].age > oldest && cards[i].id != excluded.id) {
                oldest = cards[i].age;
                card = cards[i];
            }
        }
        return card;
    }

    function getOldestPlayableCard(cards, excluded = '') {
        let card = false;
        let oldest = -1;
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].age > oldest && cards[i].id != excluded.id && cards[i].playable) {
                oldest = cards[i].age;
                card = cards[i];
            }
        }
        return card;
    }

    function drawCard(player, combatDeck, ignoreSpeed = false, cardPlayed = false) {

        let deckWasCycled = false;

        if(!shouldDraw(combatDeck, cardPlayed)) {
            return false;
        }

        if(!canDraw(combatDeck) && canCycle(combatDeck)) {
            shuffleDeck(combatDeck);
            deckWasCycled = true;
        }

        if(canDraw(combatDeck)) {

            let thisCard = false;

            if(player.speed.current > 0 || ignoreSpeed == true) {
                let index = util.randArrayIndex(combatDeck.drawCards);
                let naturalCard = getNaturalCard(combatDeck, player);
                thisCard = naturalCard ? naturalCard : combatDeck.drawCards[index];
                thisCard.drawn = true;
                let thisRetain = util.getCardAttribute(thisCard, 'retain');
                let retain = thisRetain ? ' retained' : '';
                let playable = thisCard.playable ? 'playable' : '';
                let destroyable = $('body').hasClass('destroying') ? ' destroyable' : '';
                let discardable = $('body').hasClass('discarding') ? ' discardable' : '';
                // some actions can add multiple cards to hand at once so we need to account for that
                // we use > game.maxHandSize because the played card hasn't been discarded yet
                if(combatDeck.handCards.length > game.maxHandSize) {
                    combatDeck.discardCards.push(thisCard);
                } else {
                    combatDeck.handCards.push(thisCard);
                    util.appendCard(thisCard, '.player-cards', playable + retain + destroyable + discardable);
                    if(!ignoreSpeed) player.speed.current -= 1;
                }
                
                combatDeck.drawCards = combatDeck.drawCards.filter(i => i.guid !== thisCard.guid);
                
            }

            if(player.speed.current == 0 || combatDeck.handCards.length == game.maxHandSize) $('.draw-card, .draw-all').addClass('disabled');

            updateCardPlayability(player, combatDeck, util.isThrottled());

            return [thisCard, deckWasCycled];

        }

    }

    function addDrawCard(player, combatDeck, guid, to) {

        let thisCard = false;

        thisCard = util.getCardByGuid(guid, combatDeck.drawCards);
        let thisRetain = util.getCardAttribute(thisCard, 'retain');
        let retain = thisRetain ? ' retained' : '';

        util.removeCardByGuid(thisCard.guid);
        combatDeck.drawCards = combatDeck.drawCards.filter(i => i.guid !== thisCard.guid);

        if(to=='handCards') {
            if(combatDeck.handCards.length == game.maxHandSize) {
                combatDeck.discardCards.push(thisCard);
                $('.discard-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
                if(to=='discardCards') {
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='drawCards') {
                    $('.draw-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='deadCards') {
                    $('.dead-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                }
            }
        }
        
        updateCardPlayability(player, combatDeck, util.isThrottled());

        if(game.playsounds) sounds.play('selectCard');

        return thisCard;

    }

    function addDiscardCard(player, combatDeck, guid, to) {

        let thisCard = false;

        thisCard = util.getCardByGuid(guid, combatDeck.discardCards);
        let thisRetain = util.getCardAttribute(thisCard, 'retain');
        let retain = thisRetain ? ' retained' : '';
        
        util.removeCardByGuid(thisCard.guid);
        combatDeck.discardCards = combatDeck.discardCards.filter(i => i.guid !== thisCard.guid);

        if(to=='handCards') {
            if(combatDeck.handCards.length == game.maxHandSize) {
                combatDeck.discardCards.push(thisCard);
                $('.discard-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
                if(to=='discardCards') {
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='drawCards') {
                    $('.draw-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='deadCards') {
                    $('.dead-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                }
            }
        }
        
        updateCardPlayability(player, combatDeck, util.isThrottled());

        if(game.playsounds) sounds.play('selectCard');

        return thisCard;

    }

    function addDeadCard(player, combatDeck, guid, to) {

        let thisCard = false;

        thisCard = util.getCardByGuid(guid, combatDeck.deadCards);
        let thisRetain = util.getCardAttribute(thisCard, 'retain');
        let retain = thisRetain ? ' retained' : '';
        
        util.removeCardByGuid(thisCard.guid);
        combatDeck.deadCards = combatDeck.deadCards.filter(i => i.guid !== thisCard.guid);

        if(to=='handCards') {
            if(combatDeck.handCards.length == game.maxHandSize) {
                combatDeck.discardCards.push(thisCard);
                $('.discard-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
                if(to=='discardCards') {
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='drawCards') {
                    $('.draw-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='deadCards') {
                    $('.dead-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                }
            }
        }

        updateCardPlayability(player, combatDeck, util.isThrottled());

        return thisCard;

    }

    function addChooseCard(player, combatDeck, guid, to) {

        let thisCard = false;
        thisCard = util.getCardByGuid(guid, combatDeck.chooseCards);
        let thisRetain = util.getCardAttribute(thisCard, 'retain');
        let retain = thisRetain ? ' retained' : '';
        let discardable = $('body').hasClass('discarding') ? ' discardable' : '';
        
        util.removeCardByGuid(thisCard.guid);
        combatDeck.chooseCards = combatDeck.chooseCards.filter(i => i.guid !== thisCard.guid);

        if(to=='handCards') {
            if(combatDeck.handCards.length == game.maxHandSize) {
                combatDeck.discardCards.push(thisCard);
                $('.discard-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain + discardable);
            }
        } else if(to=='deck') {
            Deck().addCard(guid); // TODO: after changing how transmuteCards function works, this probably doesn't work anymore. needs testing.
        } else {
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
                if(to=='discardCards') {
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='drawCards') {
                    $('.draw-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else if(to=='deadCards') {
                    $('.dead-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                }
            }
        }

        updateCardPlayability(player, combatDeck, util.isThrottled());

        if(game.playsounds) sounds.play('selectCard');

        return thisCard;

    }


    function discardHand(combatDeck, player) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let thisCard = combatDeck.handCards[i];
            let thisRetain = util.getCardAttribute(thisCard, 'retain');
            let ephemeral = util.getCardAttribute(thisCard, 'ephemeral');;
            if(thisRetain == false && thisCard.tempRetain == false) {
                // check for sift
                if(player.sift.enabled && thisCard.type=='clutter') {
                    //if(util.chance(50)) { // used to be 50% chance to vanish but changed to always vanish
                        ephemeral = true;
                    //}
                }
                if(ephemeral) {
                    if(game.playsounds) sounds.play('removeCard');
                    combatDeck.deadCards.push(thisCard);
                    $('.dead-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                } else {
                    combatDeck.discardCards.push(thisCard);
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                }
                combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid, 'discarded');
                i--;
            } else {
                if(player.gravity?.enabled) {
                    thisCard.age += 2;
                } else {
                    thisCard.age += 1;
                }
            }
            thisCard.tempRetain = false;
        }
        if(game.playsounds) sounds.play('selectCard');

    }

    function discardCard(card, combatDeck, played = false) {
        if(card == undefined) return;
        if(game.playsounds) sounds.play('selectCard');
        let animation = played ? 'played' : 'discarded';
        combatDeck.discardCards.push(card);
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, animation);
        $('.discard-cards.icon-button').addClass('pulse')
            .one('animationend', function() {
                $(this).removeClass('pulse');
            });
    }

    function destroyHand(combatDeck) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let thisCard = combatDeck.handCards[i];
            combatDeck.deadCards.push(thisCard);
            combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== thisCard.guid);
            util.removeCardByGuid(thisCard.guid, 'destroyed');
            i--;
        }
        if(game.playsounds) sounds.play('removeCard');
        $('.dead-cards.icon-button').addClass('pulse')
            .one('animationend', function() {
                $(this).removeClass('pulse');
            });
    }

    function destroyCard(card, combatDeck, skipDead = false) {
        if(card == undefined) return;
        if(!skipDead) {
            if(game.playsounds) sounds.play('removeCard');
            combatDeck.deadCards.push(card);
            $('.dead-cards.icon-button').addClass('pulse')
                .one('animationend', function() {
                    $(this).removeClass('pulse');
                });
        }
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, 'destroyed');
    }

    function transmuteCards(combatDeck, deck, player) {
        let permanent = false;
        for(let i = 0; i < game.toTransmute.length; i++) {
            let possibleCards = AllCards().getAddableCards().filter(j => j.addable == true && j.id !== game.toTransmute[i].id && j.tier !== 'legendary');
            //let transmutedCard = util.randFromArray(possibleCards); // we want to use the card weights
            let transmutedCard = util.weightedRandom(possibleCards);
            //transmutedCard = JSON.parse(JSON.stringify(transmutedCard)); // necessary to create a deep copy
            transmutedCard = $.extend(true, {}, transmutedCard);
            transmutedCard.guid = util.randString();

            // standard description
            let desc = Deck().buildDescription(transmutedCard);
            transmutedCard.desc = desc;

            // slots description
            let slotDesc = Deck().buildSlotsDescription(transmutedCard);
            transmutedCard.slotDesc = slotDesc;

            // show transmuted cards
            game.toShow.push(transmutedCard);

            combatDeck.chooseCards.push(transmutedCard);
            if(game.fromPile == 'allCards') {
                deck.cards.push(transmutedCard);
                player.cardsOwned += 1;
                permanent = true;
            } else {
                let card = addChooseCard(player, combatDeck, transmutedCard.guid, game.fromPile);
                if(game.fromPile == 'handCards') {
                    combatDeck.handCards = combatDeck.handCards.filter(j => j.guid !== game.toTransmute[i].guid);
                } else if(game.fromPile == 'drawCards') {
                    combatDeck.drawCards = combatDeck.drawCards.filter(j => j.guid !== game.toTransmute[i].guid);
                } else if(game.fromPile == 'discardCards') {
                    combatDeck.discardCards = combatDeck.discardCards.filter(j => j.guid !== game.toTransmute[i].guid);
                }
            }
            util.removeCardByGuid(game.toTransmute[i].guid, 'destroyed');
        }
        combatDeck.chooseCards = [];
        Deck().showModifiedCards(combatDeck, player);
        if(game.playsounds) sounds.play('transmuteCard');
        return permanent;
    }

    function activateCard(card, combatDeck) {
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, 'played');
    }

    function destroyExpiredCards(combatDeck) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let thisCard = combatDeck.handCards[i];
            let expire = util.getCardAttribute(thisCard, 'expire');
            if(expire == 0) {
                if(game.playsounds) sounds.play('removeCard');
                combatDeck.deadCards.push(thisCard);
                $('.dead-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
                combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid);
                i--;
            }
        }
        for(let i = 0; i < combatDeck.drawCards.length; i++) {
            let thisCard = combatDeck.drawCards[i];
            let expire = util.getCardAttribute(thisCard, 'expire');
            if(expire == 0) {
                if(game.playsounds) sounds.play('removeCard');
                combatDeck.deadCards.push(thisCard);
                $('.dead-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
                combatDeck.drawCards = combatDeck.drawCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid, 'destroyed');
                i--;
            }
        }
        for(let i = 0; i < combatDeck.discardCards.length; i++) {
            let thisCard = combatDeck.discardCards[i];
            let expire = util.getCardAttribute(thisCard, 'expire');
            if(expire == 0) {
                if(game.playsounds) sounds.play('removeCard');
                combatDeck.deadCards.push(thisCard);
                $('.dead-cards.icon-button').addClass('pulse')
                    .one('animationend', function() {
                        $(this).removeClass('pulse');
                    });
                combatDeck.discardCards = combatDeck.discardCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid);
                i--;
            }
        }
    }

    function addCard(add, combatDeck, part, player, shards = [], guid = false, playedCard = true, modifiers = {}) {
        try {
            let addCard = AllCards().cards.find(({ id }) => id === add);
            //let copiedCard = JSON.parse(JSON.stringify(addCard)); // necessary to create a deep copy
            let copiedCard = $.extend(true, {}, addCard);
            if(guid) {
                copiedCard.guid = guid
            } else {
                copiedCard.guid = util.randString();
            }

            // process modifiers
            for (var key in modifiers) {
                if (modifiers.hasOwnProperty(key)) {
                    if(!(key == 'mana' && copiedCard[key] == '?')) {
                        let key2 = key + '_2';
                        if(copiedCard[key] != undefined) copiedCard[key] = modifiers[key];
                        if(copiedCard.shardUpgrades[key] != undefined) copiedCard.shardUpgrades[key] = modifiers[key];
                        if(copiedCard.iceShardUpgrades[key] != undefined) copiedCard.iceShardUpgrades[key] = modifiers[key];
                        if(copiedCard.iceShardUpgrades[key2] != undefined) copiedCard.iceShardUpgrades[key2] = modifiers[key];
                        if(copiedCard.fireShardUpgrades[key] != undefined) copiedCard.fireShardUpgrades[key] = modifiers[key];
                        if(copiedCard.fireShardUpgrades[key2] != undefined) copiedCard.fireShardUpgrades[key2] = modifiers[key];
                        if(copiedCard.bothShardUpgrades[key] != undefined) copiedCard.bothShardUpgrades[key] = modifiers[key];
                    }
                }
            }
        
            // standard description
            let desc = Deck().buildDescription(copiedCard);
            copiedCard.desc = desc;

            // slots description
            let slotDesc = Deck().buildSlotsDescription(copiedCard);
            copiedCard.slotDesc = slotDesc;

            if(shards.length > 0) {
                for(let i = 0; i < shards.length; i++) {
                    let thisShard = shards[i];
                    if(thisShard=='random') thisShard = util.chance(50) ? 'frost' : 'flame';
                    Deck().attachShard(copiedCard, thisShard);
                    //game.toShow.push(copiedCard); // this is redundant because the card being added is already being shown - this would show it double
                }
            }

            let fullHand = playedCard == false ? game.maxHandSize - 1 : game.maxHandSize;

            // cards added to draw pile should always be put in a random position
            if(part == 'drawCards') {
                combatDeck[part].splice((combatDeck[part].length+1) * util.rand() | 0, 0, copiedCard);
            } else {
                if(part == 'handCards' && combatDeck.handCards.length > fullHand) {
                    combatDeck.discardCards.push(copiedCard);
                    $('.discard-cards.icon-button').addClass('pulse')
                        .one('animationend', function() {
                            $(this).removeClass('pulse');
                        });
                    $('.draw-card, .draw-all').addClass('disabled');
                } else {
                    if(copiedCard == undefined || copiedCard == '' || copiedCard == null || copiedCard == false) {
                        alert('Failed to add card to combatDeck.' + part);
                    } else {
                        combatDeck[part].push(copiedCard);
                        if(part == 'handCards') {
                            let thisRetain = util.getCardAttribute(copiedCard, 'retain');
                            let retain = thisRetain ? ' retained' : '';
                            let css = copiedCard.playable ? 'playable' : '';
                            // card might be added automatically by another card while we are discarding - clever maneuver draws surprise attack for instance
                            css += $('body').hasClass('discarding') ? ' discardable' : '';
                            util.appendCard(copiedCard, '.player-cards', css + retain);
                        }
                    }
                }
                // check to see if hand is full after adding the last card and disable drawing cards if so
                if(part == 'handCards' && combatDeck.handCards.length > fullHand) {
                    $('.draw-card, .draw-all').addClass('disabled');
                }
            }
            updateCardPlayability(player, combatDeck, util.isThrottled());

            Deck().showModifiedCards(combatDeck, player, true);
        } catch (error) {
            console.error("Failed to combatDeck.addCard:", error);
            handleError(error);
        }
    }

    function initCard(card, modifiers = {}) {
        //let copiedCard = JSON.parse(JSON.stringify(card)); // necessary to create a deep copy
        let copiedCard = $.extend(true, {}, card);
        copiedCard.guid = util.randString();

        // process modifiers
        for (var key in modifiers) {
            if (modifiers.hasOwnProperty(key)) {
                if(!(key == 'mana' && copiedCard[key] == '?')) {
                    copiedCard[key] = modifiers[key];
                }
            }
        }

        // standard description
        let desc = Deck().buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = Deck().buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc; 

        return copiedCard;
    }

    function updateCardPlayability(player, combatDeck, throttled = false, type = false) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let cost = util.getCardAttribute(combatDeck.handCards[i], 'mana');
            let domCard = util.getDomCardByGuid(combatDeck.handCards[i].guid);
            if((cost > player.mana.current) || (throttled && !type)) {  
                domCard.removeClass('playable');
            } else {
                if(combatDeck.handCards[i].playable) {
                    domCard.addClass('playable');
                }
            }
        }
    
    }


    return {
        drawCards,
        handCards,
        discardCards,
        deadCards,
        chooseCards,
        transmutingCards,
        allLiveCards,
        allCards,
        sync,
        canDraw,
        canCycle,
        shouldDraw,
        getNaturalCard,
        getOldestCard,
        getOldestPlayableCard,
        drawCard,
        addDrawCard,
        addDiscardCard,
        addDeadCard,
        addChooseCard,
        discardHand,
        discardCard,
        destroyHand,
        destroyCard,
        transmuteCards,
        activateCard,
        destroyExpiredCards,
        addCard,
        initCard,
        updateCardPlayability
    };

}



