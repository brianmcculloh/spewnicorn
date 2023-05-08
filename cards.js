import Util from './utils.js';
const util = new Util();

class Cards {
    constructor({
        id,
        name,
        type,
        target = '',
        drawn = false,
        addable = true,
        playable = true,
        pack = 'basic',     // basic, combine, magic, damage, cycle
        tier = 'common',    // common, uncommon, rare, legendary
        rarity = 5,         // can be any scale, we will use 1 - 9 for our purposes, but it is just relative to the other rarities so this can be changed
        courage = 2,        // how much courage this card costs in the shop
        retain = false,     // card is not discarded when turn is ended
        tempRetain = false,
        use = -1,           // card will vanish after this many uses
        expire = -1,        // card will expire after this many turns
        vanish = false,     // card disappears after usage
        ephemeral = false,  // card disappears if not used
        natural = false,    // functions as innate
        breakable = false,  // card is permanently removed from deck when used
        linger = -1,         // card is not discarded when used this many times
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
        this.pack = pack;
        this.tier = tier;
        this.rarity = rarity;
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
            {action: 'addCard', value: 1, what: 'destroy', to: 'handCards'},
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
    }),


    CARD LIST

    Non-addable Cards
    -----------------

    Starting Cards:

    Jab 
    Shield
    Leather Armor
    Stun
    Rainbow Orb
    Spewnicorn Spray


    Cards Added By Other Cards/Events:

    Aura Stance
    Sparkle Stance
    Shimmer Stance
    Aura
    Sparkle
    Shimmer
    Courage
    Familiar Agony
    Slash
    Safety
    Energize
    Boost
    Auxiliary
    Impresa
    Ouroboros
    Tesseract
    Battle Move
    Battle Combo
    Battle Sequence
    Battle Finisher
    Self-Enhance
    Self-Advance
    Self-Fulfill
    Rainbow Converter
    Chaos Converter
    Dark Converter
    Elemental Converter
    Sparks
    Bottled Speed
    Bottled Energy
    Bottled Armor
    Bottled Block
    Bottled Attack
    Bottled Cards
    Bottled Magic
    Release
    Acquire
    Dismantle

    Clutter Cards:

    Junk
    Debris
    Execrate
    Flay
    Curse
    Timid
    Lethargy
    Briars
    Broken


    Attack Cards
    ------------

    Common:

    Stomp
    Quick Buck
    Hind Kick
    Quick Stab
    Hammer Thrust
    Clever Trick

    Uncommon:

    Stampede
    Spin Kick
    Exposed Strike
    Familiar Strike
    Frenzied Charge
    Rainbow Thrust
    Chaos Thrust
    Elemental Thrust
    Dark Thrust
    Arsenal
    Smash & Grab
    Fury
    Premeditated Slash
    Collateral Damage
    Surprise Attack
    Auto Attack

    Rare:

    Devastator
    Weaponry
    Amass
    Berserk
    Clever Barrage
    Freeze
    Scorch
    Ultra Kill
    Auxiliary Kill
    Mega Kill
    Disintigrate


    Tool Cards
    ----------

    Common:

    Parry
    Divert
    Recoil
    Repel
    Thwart
    Chain Mail Armor
    Cleanse
    Remember
    Glowing Orb
    Fractured Orb

    Uncommon:

    Plate Armor
    Fortress
    Safeguard
    Fleeting Shelter
    Fleeting Shield
    Gallop
    Sprint
    Gift
    Sacrifice
    Purge
    Scavenge
    Gears of War
    Seeing Ring
    Beautiful
    Delightful
    Wonderful
    Bravery
    Clever Maneuver
    Riffle
    Collect
    Entity
    Unstable Field
    Disavow
    Ruin
    Make Ready
    Distracting Ring
    Cutting Ring

    Rare:

    Frost Armor
    Flame Armor
    Bulwark
    Steel Hide
    Reactor
    Power Surge
    Enrich
    Trade Up
    Tactics
    Unearth
    Blockade
    Mezmerize
    Elite Maneuver
    Expunge
    Mysterious Fissure



    Ability Cards
    -------------

    Common:


    Uncommon:

    Forethought
    Midas Touch
    Metalwork
    Healing Salve
    Stamina
    Enigma Form
    Robustness
    Masterwork
    Violent Rage
    Repurpose
    Shield Form
    Flywheel
    Vengeance
    Short Temper
    Explosivity

    Rare:

    Bastion
    Bodiless Form
    Overpowered
    Guzzle
    Prescience
    Acuity



    Magic Cards
    -----------

    Common:

    Rainbow Charge
    Chaos Charge
    Dark Charge
    Elemental Charge
    Risky Charge
    Aligned Charge
    Delayed Charge
    Sacrificial Spell

    Uncommon:

    Rainbow Charm
    Chaos Charm
    Dark Charm
    Elemental Charm
    Risky Charm
    Aligned Charm
    Grow
    Focus
    Mystical Protection
    Metamorphose
    Cryptic Rune
    Magical Maneuver
    Recaster
    Bloom
    Fire Spell
    Ice Spell
    Delayed Spell
    Sacrificial Spell

    Rare:

    Risky Incantation
    Maelstrom
    Master Summoner
    Master Sorcerer
    Master Conjurer
    Secret Arts
    Razzle
    Dazzle
    Master of All
    Mystical Energy
    Mystical Maneuver
    Vortex
    Ancient Runestone
    Fleeting Incantation
    Obelisk



    */

    /* NON-ADDABLE CARDS */
    /* Starting Cards: */
    new Cards({
        id: 'jab', name: 'Jab', type: 'attack', mana: 1, addable: false, target: 'monster',
        dmg: [5],
        slots: 1,
        shardUpgrades: {
            dmg: [10],
        },
    }),
    new Cards({
        id: 'shield', name: 'Shield', type: 'tool', mana: 1, addable: false,
        blk: [5],
        slots: 1,
        shardUpgrades: {
            blk: [10],
        },
    }),
    new Cards({
        id: 'leather_armor', name: 'Leather Armor', type: 'tool', mana: 0, addable: false,
        armor: [3],
        slots: 1,
        shardUpgrades: {
            armor: [6],
        },
    }),
    new Cards({
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
    }),
    new Cards({
        id: 'rainbow_orb', name: 'Rainbow Orb', type: 'magic', mana: 0, addable: false,
        magic: [{type: 'rainbow', amount: 2}], 
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 4}], 
        },
    }),
    new Cards({
        id: 'spewnicorn_spray', name: 'Spewnicorn Spray', type: 'tool', mana: 0, addable: false, breakable: true, use: 2, tier: 'legendary',
        descOverride: 'Deus Ex Machina.',
        effects: [
            {effect: 'solid', amount: -1, turns: 1, hex: true},
            {effect: 'might', amount: -1, turns: 1, hex: true},
            {effect: 'punch', amount: -.1, turns: 1, hex: true},
            {effect: 'stout', amount: -1, turns: 1, hex: true},
            {effect: 'muster', amount: -1, turns: 1, hex: true},

            {effect: 'speed', amount: 1, turns: 1},
            {effect: 'solid', amount: 1, turns: 1},
            {effect: 'might', amount: 1, turns: 1},
            {effect: 'punch', amount: 1, turns: 1},
            {effect: 'mend', amount: 1, turns: 1},
            {effect: 'craft', amount: 1, turns: 1},
            {effect: 'cunning', amount: 1, turns: 1},
            {effect: 'vigor', amount: 1, turns: 1},
            {effect: 'stout', amount: 1, turns: 1},
            {effect: 'muster', amount: 1, turns: 1},
            {effect: 'rowdy', amount: 1, turns: 1},
            {effect: 'fierce', amount: 1, turns: 1},
            {effect: 'mastery', amount: 1, turns: 1},
            {effect: 'heal', amount: 1, turns: 1},
            {effect: 'conjure', amount: 1, turns: 1},
            {effect: 'sorcery', amount: 1, turns: 1},
            {effect: 'momentum', amount: 1, turns: 1},
            {effect: 'wield', amount: 1, turns: 1},
            {effect: 'resistance', amount: 1, turns: 1},
            {effect: 'lemonade', amount: 1, turns: 1},
            {effect: 'spikes', amount: 1, turns: 1},
            {effect: 'vex', amount: 1, turns: 1},
            {effect: 'mage', amount: 1, turns: 1},
            {effect: 'enchanter', amount: 1, turns: 1},
            {effect: 'summon', amount: 1, turns: 1},
            {effect: 'arcane', amount: 1, turns: 1},
            {effect: 'fatality', amount: 1, turns: 1},
            {effect: 'retaliate', amount: 1, turns: 1},
            {effect: 'mystery', amount: 1, turns: 1},
            {effect: 'regen', amount: 1, turns: 1},
            {effect: 'wisdom', amount: 1, turns: 1},

        ],
        abilities: [
            {ability: 'protection', turns: 1, enabled: true},
            {ability: 'unreachable', turns: 1, enabled: true},
            {ability: 'tank', turns: 1, enabled: true},
            {ability: 'toothache', turns: 1, enabled: true},
            {ability: 'prepared', turns: 1, enabled: true},
            {ability: 'bless', turns: 1, enabled: true},
            {ability: 'hypnotize', turns: 1, enabled: true},
            {ability: 'stockpile', turns: 1, enabled: true},
            {ability: 'sift', turns: 1, enabled: true},
            {ability: 'panic', turns: 1, enabled: true},
        ],
        magic: [{type: 'aligned', amount: 1}], 
    }),

    /* Cards Added By Other Cards/Events: */
    new Cards({
        id: 'aura_stance', name: 'Aura Stance', type: 'tool', tier: 'uncommon', mana: 0, addable: false, retain: true,
        sound: 'auraAmount',
        actions: [
            {action: 'stat', what: 'stance', value: 'aura'}
        ],
    }),
    new Cards({
        id: 'sparkle_stance', name: 'Sparkle Stance', type: 'tool', tier: 'uncommon', mana: 0, addable: false, retain: true,
        sound: 'sparkleAmount',
        actions: [
            {action: 'stat', what: 'stance', value: 'sparkle'}
        ],
    }),
    new Cards({
        id: 'shimmer_stance', name: 'Shimmer Stance', type: 'tool', tier: 'uncommon', mana: 0, addable: false, retain: true,
        sound: 'shimmerAmount',
        actions: [
            {action: 'stat', what: 'stance', value: 'shimmer'}
        ],
    }),
    new Cards({
        id: 'shimmer', name: 'Shimmer', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'shimmerAmount',
        additionalDesc: 'Increase Shimmer essence by +1',
        actions: [
            {action: 'stat', what: 'shimmer', key: 'current', value: 1},
        ]
    }),
    new Cards({
        id: 'sparkle', name: 'Sparkle', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'sparkleAmount',
        additionalDesc: 'Increase Sparkle essence by +1',
        actions: [
            {action: 'stat', what: 'sparkle', key: 'current', value: 1},
        ]
    }),
    new Cards({
        id: 'aura', name: 'Aura', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'auraAmount',
        additionalDesc: 'Increase Aura essence by +1',
        actions: [
            {action: 'stat', what: 'aura', key: 'current', value: 1},
        ]
    }),
    new Cards({
        id: 'courage', name: 'Courage', type: 'tool', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        additionalDesc: 'Increase Courage by +1',
        actions: [
            {action: 'stat', what: 'courage', value: 1},
        ]
    }),
    new Cards({
        id: 'familiar_agony', name: 'Familiar Agony', type: 'attack', mana: 0, tier: 'uncommon', addable: false, target: 'monster', retain: true, use: 2,
        dmg: [10],
        linger: 1,
        slots: 1,
        shardUpgrades: {
            dmg: [14]
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
        id: 'safety', name: 'Safety', type: 'tool', mana: 1, addable: false, retain: true,
        blk: [11],
        slots: 1,
        shardUpgrades: {
            blk: [15],
        },
    }),
    new Cards({
        id: 'energize', name: 'Energize', type: 'tool', mana: 0, tier: 'uncommon', retain: true, vanish: true, addable: false,
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'boost', name: 'Boost', type: 'tool', mana: 0, tier: 'uncommon', retain: true, vanish: true, addable: false,
        actions: [
            {action: 'stat', what: 'speed', key: 'current', value: 2}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'stat', what: 'speed', key: 'current', value: 3}
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
        magic: [{type: 'aligned', amount: 5}], 
        combine: {
            magic: [{type: 'aligned', amount: 10}], 
            actions: [
                {action: 'addCard', value: 1, what: 'ouroboros', to: 'handCards'},
            ]
        },
        draw: {
            magic: [{type: 'aligned', amount: 1}], 
        },
    }),
    new Cards({
        id: 'ouroboros', name: 'Ouroboros', type: 'magic', addable: false, retain: true, vanish: true,
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'tesseract', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'impresa', to: 'drawCards'},
            ]
        },
    }),
    new Cards({
        id: 'tesseract', name: 'Tesseract', type: 'magic', target: 'monster', mana: 3, retain: true, vanish: true, tier: 'legendary',
        dmg: [10],
        blk: [10],
        magic: [{type: 'aligned', amount: 40}], 
        additionalDesc: 'Absolute power',
        sound: 'magic1',
        actions: [
            {action: 'addCard', value: 2, what: 'impresa', to: 'drawCards'},
        ],
        slots: 2,
        iceShardUpgrades: {
            blk: [20],
            blk_2: [30],
            additionalDesc: 'Frozen to the core',
            magic: [{type: 'aligned', amount: 50}], 
            magic_2: [{type: 'aligned', amount: 60}], 
        },
        fireShardUpgrades: {
            dmg: [20],
            dmg_2: [30],
            magic: [{type: 'aligned', amount: 50}], 
            magic_2: [{type: 'aligned', amount: 60}], 
            additionalDesc: 'Hot to the touch',
        },
        bothShardUpgrades: {
            dmg: [20],
            blk: [20],
            magic: [{type: 'aligned', amount: 60}], 
        },
    }),
    new Cards({
        id: 'battle_move', name: 'Battle Move', type: 'attack', mana: 1, tier: 'uncommon', target: 'monster', addable: false, retain: true, vanish: true,
        dmg: [9],
        sound: 'attack17',
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'battle_combo', to: 'handCards'},
            ]
        },
        draw: {
            blk: [2]
        },
    }),
    new Cards({
        id: 'battle_combo', name: 'Battle Combo', type: 'tool', addable: false, retain: true, vanish: true,
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'battle_sequence', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
            ]
        },
    }),
    new Cards({
        id: 'battle_sequence', name: 'Battle Sequence', type: 'tool', mana: 3, retain: true, vanish: true, tier: 'legendary',
        effects: [
            {effect: 'fierce', amount: 5, turns: 1},
            {effect: 'mastery', amount: .5, turns: 1},
            {effect: 'rowdy', amount: 30, turns: 1}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'battle_finisher', to: 'handCards'},
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'fierce', amount: 6, turns: 1},
                {effect: 'mastery', amount: .6, turns: 1},
                {effect: 'rowdy', amount: 40, turns: 1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'fierce', amount: 7, turns: 1},
                {effect: 'mastery', amount: .7, turns: 1},
                {effect: 'rowdy', amount: 50, turns: 1}
            ],
        }
    }),
    new Cards({
        id: 'battle_finisher', name: 'Battle Finisher', type: 'attack', target: 'monster', mana: 0, tier: 'rare', ephemeral: true, vanish: true, addable: false, pack: 'combine', 
        dmg: [10, 10, 10, 10],
        sound: 'attack16',
        additionalDesc: 'Finish Him',
        actions: [
            {action: 'addCard', value: 2, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            dmg: [48],
            dmg_2: [60]
        },
        iceShardUpgrades: {
            dmg: [12, 12, 12, 12],
            dmg_2: [15, 15, 15, 15],
        },
        bothShardUpgrades: {
            dmg: [14, 14, 14, 14],
        }
    }),
    new Cards({
        id: 'self_enhance', name: 'Self-Enhance', type: 'tool', mana: 1, addable: false, tier: 'uncommon', retain: true, vanish: true,
        blk: [9],
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'self_advance', to: 'handCards'},
            ]
        },
        draw: {
            blk: [2]
        },
    }),
    new Cards({
        id: 'self_advance', name: 'Self-Advance', type: 'tool', addable: false, retain: true, vanish: true,
        combine: {
            actions: [
                {action: 'addCard', value: 1, what: 'self_fulfill', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            ]
        },
    }),
    new Cards({
        id: 'self_fulfill', name: 'Self-Fulfill', type: 'tool', mana: 3, retain: true, vanish: true, tier: 'legendary',
        additionalDesc: 'Achievement unlocked',
        actions: [
            {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            {action: 'stat', what: 'shimmer', key: 'current', value: 1},
            {action: 'stat', what: 'sparkle', key: 'current', value: 1},
            {action: 'stat', what: 'aura', key: 'current', value: 1},
        ],
        slots: 2,
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'aggro', key: 'current', value: -1},
            ],
            actions_2: [
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'stat', what: 'shimmer', key: 'current', value: 1},
                {action: 'stat', what: 'sparkle', key: 'current', value: 1},
                {action: 'stat', what: 'aura', key: 'current', value: 1},
                {action: 'stat', what: 'aggro', key: 'current', value: -3},
            ],
        },
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'stat', what: 'courage', value: 3},
                {action: 'stat', what: 'aggro', key: 'current', value: -1},
            ],
            actions_2: [
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'stat', what: 'courage', value: 3},
                {action: 'stat', what: 'aggro', key: 'current', value: -3},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
                {action: 'stat', what: 'aggro', key: 'current', value: -6},
            ],
        },
    }),
    new Cards({
        id: 'rainbow_converter', name: 'Rainbow Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'magic4',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'rainbow'},
        ]
    }),
    new Cards({
        id: 'chaos_converter', name: 'Chaos Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'magic4',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'chaos'},
        ]
    }),
    new Cards({
        id: 'dark_converter', name: 'Dark Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'magic4',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'dark'},
        ]
    }),
    new Cards({
        id: 'elemental_converter', name: 'Elemental Converter', type: 'converter', mana: 0, tier: 'uncommon', addable: false, vanish: true,
        sound: 'magic4',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'type', value: 'elemental'},
        ]
    }),
    new Cards({
        id: 'sparks', name: 'Sparks', type: 'magic', mana: 0, addable: false, retain: true, vanish: true,
        sound: 'magic5',
        magic: [{type: 'aligned', amount: 2}], 
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'aligned', amount: 3}], 
        },
    }),
    new Cards({
        id: 'bottled_speed', name: 'Bottled Speed', type: 'bottled', playable: false, addable: false, retain: true, 
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
                {action: 'stat', what: 'speed', key: 'current', value: 3},
            ]
        },
    }),
    new Cards({
        id: 'bottled_energy', name: 'Bottled Energy', type: 'bottled', playable: false, addable: false, retain: true, 
        draw: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
            ]
        },
        discard: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
            ]
        },
        destroy: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2},
            ]
        },
    }),
    new Cards({
        id: 'bottled_armor', name: 'Bottled Armor', type: 'bottled', playable: false, addable: false, retain: true, 
        draw: {
            armor: [1]
        },
        discard: {
            armor: [5]
        },
        destroy: {
            armor: [7]
        },
    }),
    new Cards({
        id: 'bottled_block', name: 'Bottled Block', type: 'bottled', playable: false, addable: false, retain: true, 
        draw: {
            blk: [2]
        },
        discard: {
            blk: [10]
        },
        destroy: {
            blk: [15]
        },
    }),
    new Cards({
        id: 'bottled_attack', name: 'Bottled Attack', type: 'bottled', playable: false, addable: false, retain: true, 
        draw: {
            dmg: [2]
        },
        discard: {
            dmg: [10]
        },
        destroy: {
            dmg: [15]
        },
    }),
    new Cards({
        id: 'bottled_cards', name: 'Bottled Cards', type: 'bottled', playable: false, addable: false, retain: true, 
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
                {action: 'draw', value: 4}
            ]
        },
    }),
    new Cards({
        id: 'bottled_magic', name: 'Bottled Magic', type: 'bottled', playable: false, addable: false, retain: true, 
        draw: {
            magic: [{type: 'aligned', amount: 1}], 
        },
        discard: {
            magic: [{type: 'aligned', amount: 6}], 
        },
        destroy: {
            magic: [{type: 'aligned', amount: 11}], 
        },
    }),
    new Cards({
        id: 'release', name: 'Release', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'discard', value: 1},
        ]
    }),
    new Cards({
        id: 'acquire', name: 'Acquire', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'draw', value: 1},
        ]
    }),
    new Cards({
        id: 'dismantle', name: 'Dismantle', type: 'tool', mana: 0, addable: false, vanish: true,
        actions: [
            {action: 'destroy', value: 1},
        ]
    }),
    

    /* Clutter: */
    new Cards({
        id: 'junk', name: 'Junk', type: 'clutter', playable: false, addable: false, ephemeral: true,
        additionalDesc: 'Unplayable',
    }),
    new Cards({
        id: 'debris', name: 'Debris', type: 'clutter', mana: 1, vanish: true, addable: false, natural: true,
    }),
    new Cards({
        id: 'chaff', name: 'Chaff', type: 'clutter', addable: false, natural: true, ephemeral: true, playable: false, 
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
                {effect: 'punch', amount: -1, turns: 1, hex: true},
            ],
            target: 'player'
        }
    }),
    new Cards({
        id: 'briars', name: 'Briars', type: 'clutter', addable: false, playable: false, 
        draw: {
            effects: [
                {effect: 'speed', amount: -1, turns: 1, hex: true},
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
    



    /* ATTACK CARDS */
    /* Common: */
    new Cards({
        id: 'stomp', name: 'Stomp', type: 'attack', mana: 2, target: 'monster', 
        dmg: [12],
        sound: 'attack2',
        effects: [
            {effect: 'might', amount: -3, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [20],
            effects: [
                {effect: 'might', amount: -6, turns: 1, hex: true}
            ],
        },
    }),
    new Cards({
        id: 'quick_buck', name: 'Quick Buck', type: 'attack', mana: 0, vanish: true, target: 'monster',
        dmg: [10],
        sound: 'attack2',
        slots: 1,
        shardUpgrades: {
            natural: true,
            dmg: [15]
        },
    }),
    new Cards({
        id: 'hind_kick', name: 'Hind Kick', type: 'attack', target: 'monster', mana: 1, linger: 1,
        dmg: [6, 6],
        sound: 'attack2',
        slots: 1,
        shardUpgrades: {
            linger: 2,
            dmg: [8, 8]
        },
    }),
    new Cards({
        id: 'quick_stab', name: 'Quick Stab', type: 'attack', target: 'monster', mana: 0, rarity: 4,
        dmg: [6],
        slots: 1,
        shardUpgrades: {
            dmg: [9]
        },
    }),
    new Cards({
        id: 'hammer_thrust', name: 'Hammer Thrust', type: 'attack', target: 'monster', mana: 2, rarity: 6,
        dmg: [12],
        sound: 'attack2',
        effects: [
            {effect: 'punch', amount: -.25, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'clever_trick', name: 'Clever Trick', type: 'attack', target: 'monster', mana: 1, rarity: 7, courage: 3,
        dmg: [5],
        actions: [
            {action: 'ensharden', type: 'random', select: 1, from: 'handCards', random: false}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'random', select: -1, from: 'handCards', random: true}
            ],
        },
    }),



    /* Uncommon: */
    new Cards({
        id: 'stampede', name: 'Stampede', type: 'attack', target: 'monster', mana: '?', tier: 'uncommon', rarity: 3, 
        dmg: [7],
        sound: 'attack3',
        slots: 2,
        shardUpgrades: {
            dmg: [10],
        },
        bothShardUpgrades: {
            dmg: [13]
        },
    }),
    new Cards({
        id: 'spin_kick', name: 'Spin Kick', type: 'attack', target: 'monster', mana: 0, tier: 'uncommon', rarity: 4, 
        dmg: [2, 2, 2],
        sound: 'attack1',
        actions: [
            {action: 'addCard', value: 1, what: 'hind_kick', to: 'handCards'},
        ],
        draw: {
            blk: [1],
        },
        slots: 1,
        fireShardUpgrades: {
            dmg: [2, 2, 2, 2, 2]
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'hind_kick', to: 'handCards'},
            ]
        }
    }),
    new Cards({
        id: 'exposed_strike', name: 'Exposed Strike', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 4, 
        dmg: [16],
        draw: {
            dmg: [2],
            target: 'player'
        },
        slots: 2,
        shardUpgrades: {
            mana: 0,
            draw: {
                dmg: [1],
                target: 'player'
            },
        },
        bothShardUpgrades: {
            mana: 0,
            dmg: [20],
            draw: {
                dmg: [1],
                target: 'monster'
            }
        },
    }),
    new Cards({
        id: 'familiar_strike', name: 'Familiar Strike', type: 'attack', target: 'monster', mana: 2, tier: 'uncommon', rarity: 7, courage: 3,
        dmg: [10],
        actions: [
            {action: 'addCard', value: 1, what: 'familiar_agony', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'familiar_agony', to: 'handCards'},
            ],
        },
        iceShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'frenzied_charge', name: 'Frenzied Charge', type: 'attack', target: 'monster', mana: 2, tier: 'uncommon', 
        dmg: [20],
        sound: 'attack5',
        actions: [
            {action: 'discard', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [30]
        },
        iceShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'rainbow_thrust', name: 'Rainbow Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', 
        dmg: [7],
        sound: 'attack4',
        magic: [{type: 'rainbow', amount: 3}], 
        slots: 1,
        fireShardUpgrades: {
            dmg: [12],
        },
        iceShardUpgrades: {
            magic: [{type: 'rainbow', amount: 6}], 
        },
    }),
    new Cards({
        id: 'chaos_thrust', name: 'Chaos Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 6, courage: 3, 
        dmg: [7],
        magic: [{type: 'chaos', amount: 3}], 
        slots: 1,
        fireShardUpgrades: {
            dmg: [12],
        },
        iceShardUpgrades: {
            magic: [{type: 'chaos', amount: 6}], 
        },
    }),
    new Cards({
        id: 'elemental_thrust', name: 'Elemental Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 6, courage: 3, 
        dmg: [7],
        magic: [{type: 'elemental', amount: 3}], 
        slots: 1,
        fireShardUpgrades: {
            dmg: [12],
        },
        iceShardUpgrades: {
            magic: [{type: 'elemental', amount: 6}], 
        },
    }),
    new Cards({
        id: 'dark_thrust', name: 'Dark Thrust', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 6, courage: 3,  
        dmg: [7],
        magic: [{type: 'dark', amount: 3}], 
        slots: 1,
        fireShardUpgrades: {
            dmg: [12],
        },
        iceShardUpgrades: {
            magic: [{type: 'dark', amount: 6}], 
        },
    }),
    new Cards({
        id: 'arsenal', name: 'Arsenal', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon',
        dmg: [9],
        sound: 'attack2',
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'attack', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [14],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'attack', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'smash_and_grab', name: 'Smash & Grab', type: 'attack', target: 'monster', mana: 0, tier: 'uncommon', rarity: 6, 
        dmg: [7],
        sound: 'attack7',
        actions: [
            {action: 'addCard', value: 3, type: 'attack', to: 'drawCards'},
            {action: 'draw', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [12],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, type: 'attack', to: 'drawCards'},
                {action: 'draw', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'fury', name: 'Fury', type: 'attack', target: 'monster', mana: 2, tier: 'uncommon', retain: true, rarity: 6,  
        dmg: [20],
        sound: 'attack8',
        abilities: [
            {ability: 'panic', turns: 1, enabled: true}
        ],
        slots: 1,
        fireShardUpgrades: {
            abilities: [
                {ability: 'panic', turns: 2, enabled: true}
            ],
        },
        iceShardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'premeditated_slash', name: 'Premeditated Slash', type: 'attack', mana: 0, tier: 'uncommon', use: 1, pack: 'combine', 
        dmg: [5],
        actions: [
            {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 1,
        fireSshardUpgrades: {
            dmg: [11],
        },
        iceSshardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'collateral_damage', name: 'Collateral Damage', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 7, courage: 3, 
        dmg: [9],
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            dmg: [11],
            actions: [
                {action: 'destroy', value: 2},
            ],
        },
        iceShardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'surprise_attack', name: 'Surprise Attack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 3, 
        dmg: [2, 3, 4],
        sound: 'attack9',
        draw: {
            dmg: [1],
            actions: [
                {action: 'addCard', value: 1, what: 'slash', to: 'handCards'},
            ]
        },
        slots: 1,
        fireShardUpgrades: {
            dmg: [4, 5, 6]
        },
        iceShardUpgrades: {
            draw: {
                dmg: [2],
                actions: [
                    {action: 'addCard', value: 2, what: 'slash', to: 'handCards', with: ['flame']},
                ]
            },
        },
    }),
    new Cards({
        id: 'auto_attack', name: 'Auto Attack', type: 'attack', target: 'monster', mana: 1, tier: 'uncommon', rarity: 4, 
        dmg: [10],
        draw: {
            dmg: [5],
        },
        slots: 1,
        fireShardUpgrades: {
            dmg: [15]
        },
        iceShardUpgrades: {
            draw: {
                dmg: [10],
            },
        },
    }),


    /* Rare: */
    new Cards({
        id: 'devastator', name: 'Devastator', type: 'attack', target: 'monster', mana: 3, tier: 'rare', courage: 4, 
        dmg: [7, 8, 9],
        effects: [
            {effect: 'momentum', amount: 1}
        ],
        actions: [
            {action: 'addCard', value: 2, what: 'slash', to: 'handCards'},
        ],
        slots: 2,
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'slash', to: 'handCards'},
            ],
            actions_2: [
                {action: 'addCard', value: 3, what: 'slash', to: 'handCards', with: ['frost']},
            ]
        },
        fireShardUpgrades: {
            effects: [
                {effect: 'momentum', amount: 2}
            ],
            effects_2: [
                {effect: 'momentum', amount: 3}
            ]
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'slash', to: 'handCards'},
            ],
            effects: [
                {effect: 'momentum', amount: 2}
            ],
        }
    }),
    new Cards({
        id: 'weaponry', name: 'Weaponry', type: 'attack', target: 'monster', mana: 1, tier: 'rare', rarity: 4, courage: 3, 
        dmg: [11],
        sound: 'attack2',
        draw: {
            dmg: [2],
            blk: [2]
        },
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'attack', tier: 'rare', to: 'handCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            dmg: [15],
            dmg_2: [20]
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'attack', tier: 'rare', to: 'handCards'},
            ],
            actions_2: [
                {action: 'addCard', select: 2, value: 4, type: 'attack', tier: 'rare', to: 'handCards', with: ['frost']},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 4, type: 'attack', tier: 'rare', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'amass', name: 'Amass', type: 'attack', target: 'monster', mana: 2, tier: 'rare', rarity: 3, courage: 3, 
        dmg: [14],
        actions: [
            {action: 'addCard', value: 3, type: 'attack', tier: 'rare', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            dmg: [19],
            mana: 1,
            mana_2: 0
        },
        shardUpgrades: {
            mana: 1
        },
        bothShardUpgrades: {
            mana: 0
        },
    }),
    new Cards({
        id: 'berserk', name: 'Berserk', type: 'attack', target: 'monster', mana: 2, tier: 'rare', pack: 'cycle', rarity: 6, courage: 4,  
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
            dmg: [4, 4, 4, 4, 4, 4],
            draw_2: {
                dmg: [1, 1, 1],
                target: 'monster'
            },
        },
        iceShardUpgrades: {
            dmg: [4, 4, 4, 4, 4, 4],
            mana_2: 1
        },
        bothShardUpgrades: {
            dmg: [4, 4, 4, 4, 4, 4],
            draw: {
                dmg: [1],
                target: 'monster'
            },
        },
    }),
    new Cards({
        id: 'clever_barrage', name: 'Clever Barrage', type: 'attack', target: 'monster', mana: 3, tier: 'rare', ephemeral: true, rarity: 7, courage: 4, 
        dmg: [5, 4, 3, 2, 1],

        actions: [
            {action: 'ensharden', type: 'random', select: -1, from: 'handCards', random: true}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'random', select: -1, from: 'allCards', random: true}
            ],
            ephemeral: false,
        },
        bothShardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'random', select: -1, from: 'allCards', random: true}
            ],
            ephemeral: false,
            mana: 1,
        },
    }),
    new Cards({
        id: 'freeze', name: 'Freeze', type: 'attack', target: 'monster', mana: 1, tier: 'rare', rarity: 7, courage: 4, 
        dmg: [7],
        sound: 'attack10',
        actions: [
            {action: 'ensharden', type: 'frost', select: -1, from: 'handCards', random: true}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'frost', select: -1, from: 'allCards', random: true}
            ],
        },
    }),
    new Cards({
        id: 'scorch', name: 'Scorch', type: 'attack', target: 'monster', mana: 1, tier: 'rare', rarity: 7, courage: 4, 
        dmg: [7],
        sound: 'attack11',
        actions: [
            {action: 'ensharden', type: 'flame', select: -1, from: 'handCards', random: true}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'ensharden', type: 'flame', select: -1, from: 'allCards', random: true}
            ],
        },
    }),
    new Cards({
        id: 'ultra_kill', name: 'Ultra Kill', type: 'attack', target: 'monster', mana: 2, tier: 'rare', rarity: 8, courage: 5, 
        dmg: [0],
        sound: 'attack12',
        effects: [
            {effect: 'fatality', amount: 1.1, turns: -1}
        ],
        actions: [
            {action: 'draw', value: 1},
            {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.3, turns: -1}
            ],
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.3, turns: -1}
            ],
            actions: [
                {action: 'draw', value: 2},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
            ],
            effects_2: [
                {effect: 'fatality', amount: 1.7, turns: -1}
            ],
            actions_2: [
                {action: 'draw', value: 3},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'fatality', amount: 1.5, turns: -1}
            ],
            actions: [
                {action: 'draw', value: 3},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'auxiliary_kill', name: 'Auxiliary Kill', type: 'attack', target: 'monster', mana: 2, tier: 'rare', rarity: 4, courage: 3, 
        dmg: [12],
        sound: 'attack13',
        actions: [
            {action: 'playOldest'},
            {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 2,
        fireShardUpgrades: {
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
            actions_2: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards', with: ['flame']},
            ],
            dmg_2: [18]
        },
        iceShardUpgrades: {
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
            mana_2: 1
        },
        bothShardUpgrades: {
            actions: [
                {action: 'playOldest'},
                {action: 'addCard', value: 2, what: 'battle_move', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'auxiliary', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'mega_kill', name: 'Mega Kill', type: 'attack', target: 'monster', mana: 2, tier: 'rare', pack: 'combine', rarity: 6, courage: 4, 
        dmg: [10, 10],
        sound: 'attack14',
        actions: [
            {action: 'addCard', value: 1, what: 'battle_move', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'battle_move', to: 'drawCards'},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'battle_move', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'disintegrate', name: 'Disintegrate', type: 'attack', target: 'monster', mana: 1, tier: 'rare', pack: 'cycle', rarity: 4, courage: 3, 
        dmg: [18],
        sound: 'attack15',
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            dmg: [23],
            actions: [
                {action: 'destroy', value: 2},
            ],
        },
    }),
    
    
    




    /* TOOL CARDS */
    /* Common: */
    new Cards({
        id: 'parry', name: 'Parry', target: 'monster', type: 'tool', mana: 1, rarity: 2, 
        blk: [5],
        dmg: [5],
        slots: 2,
        fireShardUpgrades: {
            blk: [7],
            dmg: [7],
            dmg_2: [13]
        },
        iceShardUpgrades: {
            blk: [7],
            dmg: [7],
            blk_2: [13]
        },
        bothShardUpgrades: {
            blk: [10],
            dmg: [10]
        },
    }),
    new Cards({
        id: 'divert', name: 'Divert', type: 'tool', mana: 0, rarity: 7, 
        blk: [5],
        armor: [2],
        slots: 1,
        shardUpgrades: {
            retain: true
        },
    }),
    new Cards({
        id: 'recoil', name: 'Recoil', type: 'tool', mana: 0, rarity: 3, 
        blk: [5],
        actions: [
            {action: 'discard', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            blk: [6],
            actions: [
                {action: 'discard', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'repel', name: 'Repel', type: 'tool', mana: 1, rarity: 4, 
        blk: [2, 2, 2, 2],
        actions: [
            {action: 'draw', value: 1},
            {action: 'discard', value: 1},
        ],
        slots: 1,
        shardUpgrades: {
            blk: [2, 2, 2, 2, 2],
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'thwart', name: 'Thwart', type: 'tool', mana: 2, retain: true, rarity: 6, 
        blk: [10],
        effects: [
            {effect: 'might', amount: -1, turns: 1, hex: true},
            {effect: 'punch', amount: -.1, turns: 1, hex: true}
        ],
        slots: 1,
        shardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'chain_mail_armor', name: 'Chain Mail Armor', type: 'tool', mana: 1, rarity: 8, courage: 3, 
        armor: [7],
        slots: 1,
        shardUpgrades: {
            armor: [10],
        },
    }),
    new Cards({
        id: 'cleanse', name: 'Cleanse', type: 'tool', mana: 1, pack: 'cycle', rarity: 6, 
        sound: 'tool1',
        actions: [
            {action: 'destroy', value: 1},
            {action: 'draw', value: 1},
            {action: 'discard', value: 1},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'destroy', value: 1},
                {action: 'draw', value: 2},
                {action: 'discard', value: 1},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'destroy', value: 1},
                {action: 'draw', value: 3},
                {action: 'discard', value: 2},
            ],
        },
    }),
    new Cards({
        id: 'remember', name: 'Remember', type: 'tool', mana: 1, rarity: 3, 
        actions: [
            {action: 'findDiscardCard', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            actions: [
                {action: 'findDiscardCard', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'glowing_orb', name: 'Glowing Orb', type: 'tool', playable: false, 
        discard: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 2},
            ]
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 3},
                ]
            },
        },
    }),
    new Cards({
        id: 'fractured_orb', name: 'Fractured Orb', type: 'tool', playable: false, rarity: 7, 
        destroy: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 3},
            ]
        },
        slots: 1,
        shardUpgrades: {
            destroy: {
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 4},
                ]
            },
        },
    }),



    /* Uncommon: */
    new Cards({
        id: 'plate_armor', name: 'Plate Armor', type: 'tool', mana: 2, tier: 'uncommon', rarity: 6, courage: 3, 
        armor: [10],
        slots: 2,
        shardUpgrades: {
            armor: [18],
        },
        bothShardUpgrades: {
            armor: [27]
        },
    }),
    new Cards({
        id: 'fortress', name: 'Fortress', type: 'tool', mana: '?', tier: 'uncommon', rarity: 3, 
        blk: [9],
        draw: {
            blk: [2],
        },
        slots: 1,
        fireShardUpgrades: {
            blk: [13],
        },
        iceShardUpgrades: {
            draw: {
                blk: [4],
            },
        },
    }),
    new Cards({
        id: 'safeguard', name: 'Safeguard', type: 'tool', mana: 1, tier: 'uncommon', 
        blk: [5],
        actions: [
            {action: 'addCard', value: 1, what: 'safety', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'safety', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'safety', to: 'drawCards'},
                {action: 'addCard', value: 1, what: 'safety', to: 'discardCards'},
            ],
        },
        iceShardUpgrades: {
            blk: [9],
        },
    }),
    new Cards({
        id: 'fleeting_shelter', name: 'Fleeting Shelter', type: 'tool', mana: 1, expire: 2, tier: 'uncommon', rarity: 4, 
        blk: [12],
        slots: 2,
        shardUpgrades: {
            natural: true,
        },
        bothShardUpgrades: {
            blk: [20]
        },
    }),
    new Cards({
        id: 'fleeting_shield', name: 'Fleeting Shield', type: 'tool', mana: 0, expire: 3, linger: 2, use: 2, tier: 'uncommon', 
        blk: [9],
        slots: 1,
        shardUpgrades: {
            natural: true,
        },
    }),
    new Cards({
        id: 'gallop', name: 'Gallop', type: 'tool', mana: 0, tier: 'uncommon', use: 1,
        sound: 'tool4',
        actions: [
            {action: 'addCard', value: 1, what: 'boost', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            use: 2,
            actions: [
                {action: 'addCard', value: 2, what: 'boost', to: 'handCards'},
            ],
        },
        iceShardUpgrades: {
            use: 3,
        },
    }),
    new Cards({
        id: 'sprint', name: 'Sprint', type: 'tool', mana: 1, tier: 'uncommon', use: 1, rarity: 8, courage: 3, 
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
        id: 'gift', name: 'Gift', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, rarity: 4, 
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
        id: 'sacrifice', name: 'Sacrifice', type: 'tool', mana: 0, tier: 'uncommon', use: 1, pack: 'cycle', rarity: 6, courage: 3, 
        sound: 'tool7',
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 2,
        shardUpgrades: {
            use: 2,
            linger: 1,
        },
        bothShardUpgrades: {
            use: 3,
            retain: true
        },
    }),
    new Cards({
        id: 'purge', name: 'Purge', type: 'tool', mana: 1, tier: 'uncommon',
        blk: [7], 
        actions: [
            {action: 'destroy', value: 1},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            blk: [11], 
        },
    }),
    new Cards({
        id: 'scavenge', name: 'Scavenge', type: 'tool', mana: 1, tier: 'uncommon', rarity: 2, 
        sound: 'tool11',
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'any', to: 'handCards'}
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', select: 1, value: 5, type: 'any', to: 'handCards'}
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'any', to: 'handCards'}
            ],
        },
    }),
    new Cards({
        id: 'gears_of_war', name: 'Gears of War', type: 'tool', mana: 1, tier: 'uncommon', rarity: 6, courage: 3, 
        sound: 'tool12',
        actions: [
            {action: 'addCard', value: 3, type: 'tool', to: 'drawCards'},
            {action: 'draw', value: 1}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 5, type: 'tool', to: 'drawCards'},
                {action: 'draw', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'seeing_ring', name: 'Seeing Ring', type: 'tool', mana: 1, tier: 'uncommon', vanish: true, rarity: 3, 
        sound: 'tool3',
        actions: [
            {action: 'findDrawCard', value: 1}
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'findDrawCard', value: 2}
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'findDiscardCard', value: 1},
                {action: 'findDrawCard', value: 1}
            ],
        },
    }),
    new Cards({
        id: 'beautiful',  name: 'Beautiful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', rarity: 8, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'shimmer', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'shimmer', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'shimmer', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'delightful',  name: 'Delightful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', rarity: 8, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'sparkle', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'sparkle', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'sparkle', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'wonderful',  name: 'Wonderful', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', rarity: 8, courage: 3, 
        sound: 'tool5',
        actions: [
            {action: 'addCard', value: 1, what: 'aura', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'aura', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'aura', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'bravery',  name: 'Bravery', type: 'tool', mana: 0, tier: 'uncommon', vanish: true, pack: 'combine', rarity: 8, courage: 3, 
        sound: 'tool13',
        actions: [
            {action: 'addCard', value: 1, what: 'courage', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'courage', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 1, what: 'courage', to: 'handCards'},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'clever_maneuver', name: 'Clever Maneuver', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', rarity: 6, 
        sound: 'tool10',
        actions: [
            {action: 'draw', value: 3},
            {action: 'discard', value: 1},
        ],
        draw: {
            blk: [3],
        },
        slots: 1,
        fireShardUpgrades: {
            actions: [
                {action: 'draw', value: 5},
                {action: 'discard', value: 2},
            ],
        },
        iceShardUpgrades: {
            draw: {
                blk: [6],
            },
        },
    }),
    new Cards({
        id: 'riffle', name: 'Riffle', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', rarity: 4, 
        sound: 'tool14',
        actions: [
            {action: 'draw', value: 2},
            {action: 'discard', value: 2},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'draw', value: 3},
                {action: 'discard', value: 3},
            ],
        },
    }),
    new Cards({
        id: 'collect', name: 'Collect', type: 'tool', mana: 1, tier: 'uncommon', pack: 'cycle', 
        actions: [
            {action: 'draw', value: 5},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'draw', value: 8},
            ],
        },
    }),
    new Cards({
        id: 'entity', name: 'Entity', type: 'tool', tier: 'uncommon', playable: false, retain: true, rarity: 7, 
        discard: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
                {action: 'draw', value: 1}
            ]
        },
        slots: 2,
        shardUpgrades: {
            discard: {
                blk: [10]
            },
        },
        bothShardUpgrades: {
            discard: {
                blk: [10],
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 2},
                    {action: 'draw', value: 2}
                ]
            }
        },
    }),
    new Cards({
        id: 'unstable_field', name: 'Unstable Field', type: 'tool', tier: 'uncommon', playable: false, retain: true, rarity: 9, courage: 3, 
        destroy: {
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 1},
                {action: 'draw', value: 2}
            ]
        },
        slots: 2,
        shardUpgrades: {
            destroy: {
                blk: [15]
            },
        },
        bothShardUpgrades: {
            destroy: {
                blk: [15],
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 2},
                    {action: 'draw', value: 3}
                ]
            }
        },
    }),
    new Cards({
        id: 'disavow', name: 'Disavow', type: 'tool', mana: 2, tier: 'uncommon', rarity: 7, courage: 3, 
        sound: 'tool8',
        actions: [
            {action: 'addCard', value: 1, what: 'release', to: 'handCards'},
            {action: 'addCard', select: 1, value: 7, type: 'bottled', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 1,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'release', to: 'handCards'},
                {action: 'addCard', select: 2, value: 7, type: 'bottled', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'ruin', name: 'Ruin', type: 'tool', mana: 2, tier: 'uncommon', rarity: 7, courage: 3, 
        sound: 'tool9',
        actions: [
            {action: 'addCard', value: 1, what: 'dismantle', to: 'handCards'},
            {action: 'addCard', select: 1, value: 7, type: 'bottled', to: 'handCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 1,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'dismantle', to: 'handCards'},
                {action: 'addCard', select: 2, value: 7, type: 'bottled', to: 'handCards'},
            ],
        },
    }),
    new Cards({
        id: 'make_ready', name: 'Make Ready', type: 'tool', mana: 2, tier: 'uncommon',
        sound: 'tool9',
        actions: [
            {action: 'addCard', value: 1, what: 'acquire', to: 'handCards'},
            {action: 'addCard', select: 1, value: 7, type: 'bottled', to: 'drawCards'},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 1,
        },
        iceShardUpgrades: {
            actions: [
                {action: 'addCard', value: 2, what: 'acquire', to: 'handCards'},
                {action: 'addCard', select: 2, value: 7, type: 'bottled', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'cutting_ring', name: 'Cutting Ring', type: 'tool', playable: false, tier: 'uncommon', 
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
                dmg: [10],
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
        id: 'distracting_ring', name: 'Distracting Ring', type: 'tool', playable: false, tier: 'uncommon', rarity: 6, 
        draw: {
            dmg: [3],
        },
        destroy: {
            actions: [
                {action: 'draw', value: 3},
            ]
        },
        slots: 1,
        fireShardUpgrades: {
            destroy: {
                dmg: [3],
                actions: [
                    {action: 'draw', value: 4},
                ]
            },
        },
        iceShardUpgrades: {
            draw: {
                dmg: [10],
            },
        },
    }),
    



    /* Rare: */
    new Cards({
        id: 'frost_armor', name: 'Frost Armor', type: 'tool', mana: 0, use: 3, linger: 1, retain: true, tier: 'rare', rarity: 6, courage: 4, 
        sound: 'tool16',
        armor: [7],
        slots: 2,
        shardUpgrades: {
            armor: [8],
        },
        iceShardUpgrades: {
            armor: [8],
            armor_2: [10],
            use: 4,
            use_2: 5,
            linger: 2,
            linger_2: 3,
        },
        bothShardUpgrades: {
            armor: [10]
        }
    }),
    new Cards({
        id: 'flame_armor', name: 'Flame Armor', type: 'tool', mana: 0, use: 3, linger: 1, retain: true, tier: 'rare', rarity: 6, courage: 4, 
        sound: 'tool17',
        armor: [7],
        slots: 2,
        shardUpgrades: {
            armor: [8],
        },
        fireShardUpgrades: {
            armor: [8],
            armor_2: [10],
            use: 4,
            use_2: 5,
            linger: 2,
            linger_2: 3,
        },
        bothShardUpgrades: {
            armor: [10]
        }
    }),
    new Cards({
        id: 'bulwark', name: 'Bulwark', type: 'tool', mana: 2, tier: 'rare', rarity: 4, courage: 3,
        blk: [20],
        effects: [
            {effect: 'stout', amount: 3, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'stout', amount: 5, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'stout', amount: 8, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'steel_hide', name: 'Steel Hide', type: 'tool', mana: 2, tier: 'rare', rarity: 4, courage: 3, 
        blk: [30],
        slots: 2,
        shardUpgrades: {
            blk: [40],
        },
        iceShardUpgrades: {
            blk_2: [55]
        },
        bothShardUpgrades: {
            blk: [50]
        },
    }),
    new Cards({
        id: 'reactor', name: 'Reactor', type: 'tool', mana: 0, tier: 'rare', use: 1, rarity: 7, courage: 4, 
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
        id: 'power_surge', name: 'Power Surge', type: 'tool', mana: 0, tier: 'rare', use: 1, rarity: 6, courage: 4, 
        sound: 'tool19',
        actions: [
            {action: 'stat', what: 'mana', key: 'current', value: 2},
            {action: 'stat', what: 'health', key: 'current', value: -4},
            {action: 'draw', value: 1},
            {action: 'destroy', value: 1},
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
                {action: 'destroy', value: 1},
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
                {action: 'destroy', value: 1},
            ],
        },
    }),
    new Cards({
        id: 'enrich', name: 'Enrich', type: 'tool', mana: 1, tier: 'rare', rarity: 2, courage: 3, 
        sound: 'tool21',
        actions: [
            {action: 'addCard', value: 2, type: 'any', tier: 'rare', to: 'drawCards'}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, type: 'any', tier: 'rare', to: 'drawCards'}
            ],
        },
        iceShardUpgrades: {
            actions_2: [
                {action: 'addCard', value: 3, type: 'any', tier: 'rare', to: 'drawCards', with: ['frost']}
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 4, type: 'any', tier: 'rare', to: 'drawCards'}
            ],
        },
    }),
    new Cards({
        id: 'trade_up', name: 'Trade Up', type: 'tool', mana: 1, tier: 'rare', retain: true, vanish: true, rarity: 3, courage: 3,
        sound: 'tool20', 
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'any', tier: 'rare', to: 'handCards'}
        ],
        slots: 2,
        shardUpgrades: {
            vanish: false,
            use: 2,
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'any', tier: 'rare', to: 'handCards'}
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'any', tier: 'rare', to: 'handCards', with: ['frost', 'flame']}
            ],
        },
    }),
    new Cards({
        id: 'tactics', name: 'Tactics', type: 'tool', mana: 1, tier: 'rare', pack: 'combine', rarity: 6, courage: 4, 
        sound: 'tool2',
        actions: [
            {action: 'addCard', select: 1, value: 3, type: 'tool', tier: 'rare', to: 'handCards'},
            {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
            {action: 'discard', value: 1}
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'tool', tier: 'rare', to: 'handCards'},
                {action: 'addCard', value: 1, what: 'self_enhance', to: 'drawCards'},
                {action: 'discard', value: 2}
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', select: 2, value: 3, type: 'tool', tier: 'rare', to: 'handCards', with: ['flame', 'frost']},
                {action: 'addCard', value: 2, what: 'self_enhance', to: 'drawCards'},
            ],
        },
    }),
    new Cards({
        id: 'unearth', name: 'Unearth', type: 'tool', mana: 0, tier: 'rare', use: 1, rarity: 9, courage: 4, 
        actions: [
            {action: 'findDeadCard', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'blockade', name: 'Blockade', type: 'tool', mana: 2, tier: 'rare', ephemeral: true, rarity: 4, courage: 3, 
        blk: [10],
        abilities: [
            {ability: 'tank', turns: 1, enabled: true}
        ],
        slots: 2,
        shardUpgrades: {
            blk: [14],
            ephemeral: false,
        },
        iceShardUpgrades: {
            blk_2: [18],
        },
        bothShardUpgrades: {
            abilities: [
                {ability: 'tank', turns: 3, enabled: true}
            ],
        },
    }),
    new Cards({
        id: 'mezmerize', name: 'Mezmerize', type: 'tool', mana: 2, tier: 'rare', ephemeral: true, courage: 4,
        abilities: [
            {ability: 'hypnotize', turns: 1, enabled: true}
        ],
        draw: {
            armor: [2]
        },
        slots: 2,
        shardUpgrades: {
            ephemeral: false,
        },
        fireShardUpgrades: {
            mana_2: 1
        },
        bothShardUpgrades: {
            draw: {
                armor: [4]
            },
        },
    }),
    new Cards({
        id: 'elite_maneuver', name: 'Elite Maneuver', type: 'tool', mana: 3, tier: 'rare', pack: 'cycle', rarity: 7, courage: 5, 
        sound: 'tool23',
        blk: [8],
        actions: [
            {action: 'destroy', value: 4},
            {action: 'draw', value: 4},
        ],
        draw: {
            blk: [1],
            armor: [1],
        },
        slots: 2,
        shardUpgrades: {
            blk: [12],
            actions: [
                {action: 'destroy', value: 6},
                {action: 'draw', value: 6},
            ],
        },
        bothShardUpgrades: {
            mana: 2,
            blk: [15]
        },
    }),
    new Cards({
        id: 'expunge', name: 'Expunge', type: 'tool', mana: 2, tier: 'rare', pack: 'cycle', rarity: 6, courage: 4, 
        sound: 'tool22',
        actions: [
            {action: 'destroy', value: 10},
        ],
        slots: 1,
        shardUpgrades: {
            mana: 1
        },
    }),
    new Cards({
        id: 'mysterious_fissure', name: 'Mysterious Fissure', type: 'tool', tier: 'rare', playable: false, retain: true, rarity: 3, courage: 3, 
        discard: {
            dmg: [5],
            target: 'player',
            actions: [
                {action: 'stat', what: 'mana', key: 'current', value: 3},
            ]
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                dmg: [5],
                target: 'monster',
                actions: [
                    {action: 'stat', what: 'mana', key: 'current', value: 4},
                ]
            },
        },
    }),




    /* ABILITY CARDS */
    /* common */



    /* uncommon */
    new Cards({
        id: 'forethought', name: 'Forethought', type: 'ability', mana: 1, tier: 'uncommon', rarity: 3, courage: 3, 
        abilities: [
            {ability: 'prepared', enabled: true, baseTurns: -1},
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'midas_touch', name: 'Midas Touch', type: 'ability', mana: 2, tier: 'uncommon', rarity: 7, courage: 4, 
        abilities: [
            {ability: 'bless', enabled: true, baseTurns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 1
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'metalwork', name: 'Metalwork', type: 'ability', mana: 3, tier: 'uncommon', rarity: 6, courage: 4, 
        abilities: [
            {ability: 'stockpile', enabled: true, baseTurns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            natural: true,
        },
        fireShardUpgrades: {
            mana_2: 1
        },
        bothShardUpgrades: {
            mana: 2,
            natural: true
        }
    }),
    new Cards({
        id: 'healing_salve', name: 'Healing Salve', type: 'ability', mana: 1, tier: 'uncommon', rarity: 4, courage: 3, 
        effects: [
            {effect: 'heal', amount: 10}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'heal', amount: 15}
            ],
        },
    }),
    new Cards({
        id: 'stamina', name: 'Stamina', type: 'ability', mana: 1, tier: 'uncommon', rarity: 4, courage: 3, 
        effects: [
            {effect: 'regen', amount: 6}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'regen', amount: 10}
            ],
        },
    }),
    new Cards({
        id: 'enigma_form', name: 'Enigma Form', type: 'ability', mana: 0, tier: 'uncommon', rarity: 6, courage: 4, 
        effects: [
            {effect: 'mystery', amount: 1, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            effects: [
                {effect: 'mystery', amount: 2, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'robustness', name: 'Robustness', type: 'ability', mana: 1, tier: 'uncommon', courage: 3, 
        effects: [
            {effect: 'solid', amount: 2, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'solid', amount: 3, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'masterwork', name: 'Masterwork', type: 'ability', mana: 1, tier: 'uncommon', rarity: 7, courage: 4, 
        effects: [
            {effect: 'craft', amount: 2, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'craft', amount: 3, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'violent_rage', name: 'Violent Rage', type: 'ability', mana: 1, tier: 'uncommon', rarity: 6, courage: 4, 
        effects: [
            {effect: 'might', amount: 2, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'might', amount: 4, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 0,
            effects: [
                {effect: 'might', amount: 3, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'repurpose', name: 'Repurpose', type: 'ability', mana: 1, tier: 'uncommon', courage: 3, 
        effects: [
            {effect: 'cunning', amount: 1, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'cunning', amount: 1.5, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'shield_form', name: 'Shield Form', type: 'ability', mana: 2, tier: 'uncommon', rarity: 2,
        effects: [
            {effect: 'stout', amount: 3, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 1
        },
        iceShardUpgrades: {
            effects_2: [
                {effect: 'stout', amount: 7, turns: -1}
            ],
        },
        bothShardUpgrades: {
            mana: 1,
            effects: [
                {effect: 'stout', amount: 5, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'flywheel', name: 'Flywheel', type: 'ability', mana: 1, tier: 'uncommon', rarity: 4, 
        effects: [
            {effect: 'momentum', amount: 1, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            natural: true
        },
        fireShardUpgrades: {
            mana_2: 0
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'momentum', amount: 2, turns: -1}
            ],
        }
    }),
    new Cards({
        id: 'vengeance', name: 'Vengeance', type: 'ability', mana: 1, tier: 'uncommon', rarity: 2, 
        effects: [
            {effect: 'retaliate', amount: 1, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            effects: [
                {effect: 'retaliate', amount: 1.2, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'short_temper', name: 'Short Temper', type: 'ability', mana: 1, tier: 'uncommon', courage: 3, 
        effects: [
            {effect: 'rowdy', amount: 10, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            effects: [
                {effect: 'rowdy', amount: 20, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'explosivity', name: 'Explosivity', type: 'ability', mana: 1, tier: 'uncommon', courage: 3,
        effects: [
            {effect: 'fierce', amount: 7, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            effects: [
                {effect: 'fierce', amount: 12, turns: -1}
            ],
        },
        iceShardUpgrades: {
            natural: true
        },
    }),
    



    /* rare */
    new Cards({
        id: 'bastion', name: 'Bastion', type: 'ability', mana: 3, tier: 'rare', ephemeral: true, rarity: 8, courage: 6,
        abilities: [
            {ability: 'protection', enabled: true, baseTurns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 2,
            ephemeral: false
        },
        bothShardUpgrades: {
            mana: 1,
        }
    }),
    new Cards({
        id: 'bodiless_form', name: 'Bodiless Form', type: 'ability', mana: 3, tier: 'rare', ephemeral: true, rarity: 7, courage: 5, 
        abilities: [
            {ability: 'unreachable', enabled: true, turns: 2, persist: true},
            {ability: 'toothache', enabled: true, baseTurns: -1}
        ],
        slots: 1,
        shardUpgrades: {
            abilities: [
                {ability: 'unreachable', enabled: true, turns: 3, persist: true},
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
        id: 'guzzle', name: 'Guzzle', type: 'ability', mana: 1, tier: 'rare', rarity: 6, courage: 5,
        effects: [
            {effect: 'vigor', amount: 1, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'vigor', amount: 1.5, turns: -1}
            ],
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'vigor', amount: 1.75, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'prescience', name: 'Prescience', type: 'ability', mana: 2, tier: 'rare', muster: 9, courage: 6,
        effects: [
            {effect: 'muster', amount: 4, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'muster', amount: 7, turns: -1}
            ],
        },
        fireShardUpgrades: {
            mana_2: 1
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'muster', amount: 10, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'acuity', name: 'Acuity', type: 'ability', mana: 3, tier: 'rare', rarity: 4, courage: 4, 
        effects: [
            {effect: 'wisdom', amount: .5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 2
        },
        iceShardUpgrades: {
            mana_2: 1
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'wisdom', amount: 1, turns: -1}
            ],
        },
    }),

    
    
    



    /* MAGIC CARDS */
    /* common */

    new Cards({
        id: 'rainbow_charge', name: 'Rainbow Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'rainbow', amount: 7}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'rainbow', amount: 10}], 
        },
    }),
    new Cards({
        id: 'chaos_charge', name: 'Chaos Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'chaos', amount: 7}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'chaos', amount: 10}], 
        },
    }),
    new Cards({
        id: 'dark_charge', name: 'Dark Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'dark', amount: 7}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'dark', amount: 10}], 
        },
    }),
    new Cards({
        id: 'elemental_charge', name: 'Elemental Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'elemental', amount: 7}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'elemental', amount: 10}], 
        },
    }),
    new Cards({
        id: 'risky_charge', name: 'Risky Charge', type: 'magic', mana: 1, tier: 'common', 
        magic: [{type: 'random', amount: 9}], 
        sound: 'magic3',
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'random', amount: 12}], 
        },
    }),
    new Cards({
        id: 'aligned_charge', name: 'Aligned Charge', type: 'magic', mana: 2, tier: 'common', pack: 'magic', rarity: 8, courage: 3, 
        magic: [{type: 'aligned', amount: 9}], 
        sound: 'magic3',
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'aligned', amount: 12}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 15}], 
        },
    }),
    new Cards({
        id: 'delayed_charge', name: 'Delayed Charge', type: 'magic', tier: 'common', playable: false,
        sound: 'magic3',
        discard: {
            magic: [{type: 'aligned', amount: 9}], 
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                magic: [{type: 'aligned', amount: 13}], 
            },
        },
    }),
    new Cards({
        id: 'sacrificial_charge', name: 'Sacrificial Charge', type: 'magic', tier: 'common', playable: false,
        sound: 'magic3',
        destroy: {
            magic: [{type: 'aligned', amount: 11}], 
        },
        slots: 1,
        shardUpgrades: {
            destroy: {
                magic: [{type: 'aligned', amount: 15}], 
            },
        },
    }),


    /* uncommon */
    new Cards({
        id: 'rainbow_charm', name: 'Rainbow Charm', type: 'magic', mana: 0, tier: 'uncommon', retain: true, use: 1,
        magic: [{type: 'rainbow', amount: 3}], 
        sound: 'magic2',
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'rainbow', amount: 6}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'chaos_charm', name: 'Chaos Charm', type: 'magic', mana: 0, tier: 'uncommon', retain: true, use: 1,
        magic: [{type: 'chaos', amount: 3}], 
        sound: 'magic2',
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'chaos', amount: 6}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'dark_charm', name: 'Dark Charm', type: 'magic', mana: 0, tier: 'uncommon', retain: true, use: 1,
        magic: [{type: 'dark', amount: 3}],
        sound: 'magic2', 
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'dark', amount: 6}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'elemental_charm', name: 'Elemental Charm', type: 'magic', mana: 0, tier: 'uncommon', retain: true, use: 1,
        magic: [{type: 'elemental', amount: 3}], 
        sound: 'magic2',
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'elemental', amount: 6}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'aligned_charm', name: 'Aligned Charm', type: 'magic', mana: 1, tier: 'uncommon', retain: true, use: 1, pack: 'magic', rarity: 8, courage: 3, 
        magic: [{type: 'aligned', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'aligned', amount: 8}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'risky_charm', name: 'Risky Charm', type: 'magic', mana: 0, tier: 'uncommon', retain: true, use: 1, rarity: 3, 
        magic: [{type: 'random', amount: 5}], 
        sound: 'magic2',
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'random', amount: 8}], 
        },
        iceShardUpgrades: {
            use: 2
        },
    }),
    new Cards({
        id: 'grow', name: 'Grow', type: 'magic', mana: 0, retain: true, linger: 2, tier: 'uncommon', pack: 'magic', rarity: 2, courage: 3, 
        sound: 'grow',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'max', value: 5},
            {action: 'draw', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            linger: 3
        },
    }),
    new Cards({
        id: 'focus', name: 'Focus', type: 'magic', mana: 0, retain: true, linger: 2, tier: 'uncommon', pack: 'magic', rarity: 2, courage: 3, 
        sound: 'focus',
        actions: [
            {action: 'stat', what: 'rainbow', key: 'max', value: -5},
            {action: 'discard', value: 1}
        ],
        draw: {
            magic: [{type: 'aligned', amount: 1}],
        },
        slots: 1,
        fireShardUpgrades: {
            draw: {
                magic: [{type: 'aligned', amount: 3}],
            },
        },
        iceShardUpgrades: {
            linger: 3
        },
    }),
    new Cards({
        id: 'mystical_protection', name: 'Mystical Protection', type: 'magic', mana: 2, tier: 'uncommon', rarity: 6, courage: 4, 
        magic: [{type: 'aligned', amount: 5}],
        effects: [
            {effect: 'vex', amount: 1, turns: -1}
        ],
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'aligned', amount: 8}],
        },
        iceShardUpgrades: {
            effects: [
                {effect: 'vex', amount: 2, turns: -1}
            ],
        },
    }),
    new Cards({
        id: 'metamorphose', name: 'Metamorphose', type: 'magic', mana: 1, tier: 'uncommon', rarity: 3, courage: 3, 
        magic: [{type: 'random', amount: 5}],
        sound: 'magic10',
        actions: [
            {action: 'transmute', select: 2, from: 'handCards'}
        ],
        slots: 1,
        fireShardUpgrades: {
            mana: 0,
            retain: true
        },
        iceShardUpgrades: {
            actions: [
                {action: 'transmute', select: 3, from: 'handCards'}
            ],
        },
    }),
    new Cards({
        id: 'cryptic_rune', name: 'Cryptic Rune', type: 'magic', mana: 0, tier: 'uncommon', use: 1, pack: 'combine', rarity: 7, courage: 3, 
        magic: [{type: 'aligned', amount: 2}],
        sound: 'magic11',
        actions: [
            {action: 'addCard', value: 1, what: 'impresa', to: 'drawCards'},
        ],
        draw: {
            magic: [{type: 'aligned', amount: 1}],
        },
        slots: 2,
        shardUpgrades: {
            use: 2
        },
        fireShardUpgrades: {
            draw_2: {
                magic: [{type: 'aligned', amount: 4}],
            },
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 4}],
        },
    }),
    new Cards({
        id: 'magical_maneuver', name: 'Magical Maneuver', type: 'magic', mana: 0, tier: 'uncommon', pack: 'cycle', courage: 3, 
        sound: 'magic12',
        magic: [{type: 'aligned', amount: 2}], 
        actions: [
            {action: 'draw', value: 1},
            {action: 'discard', value: 1}
        ],
        slots: 1,
        fireShardUpgrades: {
            magic: [{type: 'aligned', amount: 5}], 
        },
        iceShardUpgrades: {
            actions: [
                {action: 'draw', value: 2},
                {action: 'discard', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'recaster', name: 'Recaster', type: 'magic', mana: 1, tier: 'uncommon', pack: 'magic', rarity: 9, courage: 5, 
        sound: 'magic13',
        actions: [
            {action: 'addCard', select: 1, value: 4, type: 'converter', to: 'handCards'},
        ],
        slots: 1,
        shardUpgrades: {
            mana: 0
        },
    }),
    new Cards({
        id: 'bloom', name: 'Bloom', type: 'magic', mana: 0, tier: 'uncommon', pack: 'magic', vanish: true, expire: 1, rarity: 7, courage: 4, 
        actions: [
            {action: 'stat', what: 'rainbow', key: 'base', value: 1},
        ],
        draw: {
            blk: [2]
        },
        slots: 2,
        fireShardUpgrades: {
            actions: [
                {action: 'stat', what: 'rainbow', key: 'base', value: 2},
            ],
        },
        iceShardUpgrades: {
            expire: 2
        },
        bothShardUpgrades: {
            actions: [
                {action: 'stat', what: 'rainbow', key: 'base', value: 2},
            ],
            expire: 2
        },
    }),
    new Cards({
        id: 'fire_spell', name: 'Fire Spell', type: 'magic', mana: 0, tier: 'uncommon', vanish: true, courage: 3, 
        sound: 'magic14',
        magic: [{type: 'aligned', amount: 2}],
        actions: [
            {action: 'destroy', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'aligned', amount: 3}],
            actions: [
                {action: 'destroy', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'ice_spell', name: 'Ice Spell', type: 'magic', mana: 0, tier: 'uncommon', courage: 3,
        sound: 'magic15',
        magic: [{type: 'aligned', amount: 2}],
        actions: [
            {action: 'draw', value: 1}
        ],
        slots: 1,
        shardUpgrades: {
            magic: [{type: 'aligned', amount: 3}],
            actions: [
                {action: 'draw', value: 2}
            ],
        },
    }),
    new Cards({
        id: 'delayed_spell', name: 'Delayed Spell', type: 'magic', tier: 'uncommon', playable: false,
        discard: {
            dmg: [5],
            magic: [{type: 'aligned', amount: 5}], 
        },
        slots: 1,
        shardUpgrades: {
            discard: {
                dmg: [7],
                magic: [{type: 'aligned', amount: 7}], 
            },
        },
    }),
    new Cards({
        id: 'sacrificial_spell', name: 'Sacrificial Spell', type: 'magic', tier: 'uncommon', playable: false,
        destroy: {
            dmg: [6],
            magic: [{type: 'aligned', amount: 6}], 
        },
        slots: 1,
        shardUpgrades: {
            destroy: {
                dmg: [9],
                magic: [{type: 'aligned', amount: 9}], 
            },
        },
    }),




    /* rare */

    new Cards({
        id: 'risky_incantation', name: 'Risky Incantation', type: 'magic', mana: 2, tier: 'rare', rarity: 4, courage: 3, 
        magic: [{type: 'random', amount: 10}], 
        effects: [
            {effect: 'arcane', amount: 7, turns: 2}
        ],
        slots: 2,
        shardUpgrades: {
            mana: 1
        },
        iceShardUpgrades: {
            mana_2: 0
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'arcane', amount: 7, turns: 4}
            ],
        },
    }),
    new Cards({
        id: 'maelstrom', name: 'Maelstrom', type: 'magic', mana: 2, tier: 'rare', rarity: 4, courage: 3, 
        magic: [{type: 'muddled', amount: 25}], 
        sound: 'magic8',
        effects: [
            {effect: 'arcane', amount: 5, turns: -1}
        ],
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'muddled', amount: 35}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'muddled', amount: 45}], 
        },
    }),
    new Cards({
        id: 'master_summoner', name: 'Master Summoner', type: 'magic', mana: 1, tier: 'rare', rarity: 6, courage: 5, 
        magic: [{type: 'aligned', amount: 10}], 
        sound: 'magic16',
        effects: [
            {effect: 'summon', amount: 5, turns: 2}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'summon', amount: 5, turns: 4}
            ],
        },
        fireShardUpgrades: {
            magic_2: [{type: 'aligned', amount: 15}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 13}], 
        },
    }),
    new Cards({
        id: 'master_sorcerer', name: 'Master Sorcerer', type: 'magic', mana: 1, tier: 'rare', rarity: 6, courage: 5, 
        magic: [{type: 'aligned', amount: 10}], 
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
            magic_2: [{type: 'aligned', amount: 15}], 
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 13}], 
        },
    }),
    new Cards({
        id: 'master_conjurer', name: 'Master Conjurer', type: 'magic', mana: 1, tier: 'rare', rarity: 6, courage: 5, 
        magic: [{type: 'aligned', amount: 10}], 
        sound: 'magic16',
        effects: [
            {effect: 'conjure', amount: 3, turns: 3}
        ],
        slots: 2,
        shardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 3, turns: 4}
            ],
        },
        fireShardUpgrades: {
            effects_2: [
                {effect: 'conjure', amount: 4, turns: 4}
            ],
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 15}], 
        },
    }),
    new Cards({
        id: 'secret_arts', name: 'Secret Arts', type: 'magic', mana: 3, tier: 'rare', ephemeral: true, pack: 'magic', rarity: 7, courage: 4, 
        magic: [{type: 'aligned', amount: 5}], 
        effects: [
            {effect: 'conjure', amount: 2, turns: 2},
            {effect: 'sorcery', amount: .2, turns: 2},
            {effect: 'summon', amount: 3, turns: 2},
            {effect: 'arcane', amount: 3, turns: 2}
        ],
        draw: {
            magic: [{type: 'aligned', amount: 1}],
        },
        slots: 1,
        shardUpgrades: {
            effects: [
                {effect: 'conjure', amount: 2, turns: 3},
                {effect: 'sorcery', amount: .2, turns: 3},
                {effect: 'summon', amount: 3, turns: 3},
                {effect: 'arcane', amount: 3, turns: 3}
            ],
            ephemeral: false
        },
    }),
    new Cards({
        id: 'dazzle', name: 'Dazzle', type: 'magic', mana: 0, tier: 'rare', vanish: true, pack: 'combine', courage: 3,
        effects: [
            {effect: 'enchanter', amount: 3, turns: 3}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'impresa', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'razzle', name: 'Razzle', type: 'magic', mana: 0, tier: 'rare', vanish: true, pack: 'combine', courage: 3, 
        effects: [
            {effect: 'mage', amount: 3, turns: 3}
        ],
        actions: [
            {action: 'addCard', value: 1, what: 'impresa', to: 'drawCards'},
        ],
        slots: 1,
        shardUpgrades: {
            vanish: false
        },
    }),
    new Cards({
        id: 'master_of_all', name: 'Master of All', type: 'magic', mana: 3, target: 'monster', tier: 'rare', vanish: true, ephemeral: true, pack: 'combine', courage: 4, 
        dmg: [10],
        blk: [10],
        armor: [10], 
        magic: [{type: 'aligned', amount: 10}],
        sound: 'magic16',
        actions: [
            {action: 'addCard', value: 1, what: 'impresa', to: 'drawCards'},
        ],
        draw: {
            magic: [{type: 'aligned', amount: 1}],
            blk: [1],
            dmg: [1]
        },
        slots: 2,
        shardUpgrades: {
            mana: 2
        },
        iceShardUpgrades: {
            blk: [12],
            blk_2: [15]
        },
        fireShardUpgrades: {
            dmg: [12],
            dmg_2: [15]
        },
        bothShardUpgrades: {
            mana: 1,
            ephemeral: false
        },
    }),
    new Cards({
        id: 'mystical_energy', name: 'Mystical Energy', type: 'magic', mana: 0, tier: 'rare', linger: 1, use: 2, rarity: 7, courage: 5, 
        magic: [{type: 'aligned', amount: 5}],
        actions: [
            {action: 'removeHexes', to: 'player'},
            {action: 'stat', what: 'mana', key: 'current', value: 1}
        ],
        draw: {
            magic: [{type: 'aligned', amount: 2}],
            blk: [2]
        },
        slots: 2,
        shardUpgrades: {
            linger: 2,
            use: 3
        },
        bothShardUpgrades: {
            linger: 3,
            magic: [{type: 'aligned', amount: 7}],
        },
    }),
    new Cards({
        id: 'mystical_maneuver', name: 'Mystical Maneuver', type: 'magic', mana: 1, tier: 'rare', use: 2, linger: 1, pack: 'cycle', courage: 3, 
        magic: [{type: 'aligned', amount: 1}], 
        sound: 'magic17',
        actions: [
            {action: 'draw', value: 2},
            {action: 'discard', value: 1}
        ],
        draw: {
            magic: [{type: 'aligned', amount: 2}],
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
            mana: 0,
            magic: [{type: 'aligned', amount: 2}], 
        },
    }),
    new Cards({
        id: 'vortex', name: 'Vortex', type: 'magic', mana: '?', tier: 'rare', pack: 'magic', courage: 5,
        magic: [{type: 'aligned', amount: 6}], 
        sound: 'magic7',
        slots: 2,
        shardUpgrades: {
            magic: [{type: 'aligned', amount: 9}],  
        },
        bothShardUpgrades: {
            magic: [{type: 'aligned', amount: 12}],  
        },
    }),
    new Cards({
        id: 'ancient_runestone', name: 'Ancient Runestone', type: 'magic', mana: 3, tier: 'rare', pack: 'magic', pack: 'magic', retain: true, rarity: 7, courage: 5, 
        magic: [{type: 'aligned', amount: 2}], 
        effects: [
            {effect: 'mage', amount: 2, turns: 2},
            {effect: 'enchanter', amount: 2, turns: 2}
        ],
        draw: {
            magic: [{type: 'aligned', amount: 1}],
        },
        slots: 2,
        shardUpgrades: {
            mana: 2
        },
        fireShardUpgrades: {
            magic_2: [{type: 'aligned', amount: 3}], 
            draw_2: {
                magic: [{type: 'aligned', amount: 2}],
            },
        },
        bothShardUpgrades: {
            effects: [
                {effect: 'mage', amount: 3, turns: 3},
                {effect: 'enchanter', amount: 3, turns: 3}
            ],
        },
    }),
    new Cards({
        id: 'fleeting_incantation', name: 'Fleeting Incantation', type: 'magic', mana: 0, tier: 'rare', linger: 2, use: 2, expire: 2, pack: 'magic', rarity: 3, courage: 4, 
        magic: [{type: 'aligned', amount: 5}],
        sound: 'magic6',
        slots: 1,
        shardUpgrades: {
            natural: true
        },
    }),
    new Cards({
        id: 'obelisk', name: 'Obelisk', type: 'magic', mana: 1, tier: 'rare', pack: 'magic', rarity: 4, courage: 4, 
        magic: [{type: 'aligned', amount: 2}], 
        sound: 'magic9',
        actions: [
            {action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},
        ],
        slots: 2,
        shardUpgrades: {
            actions: [
                {action: 'addCard', value: 3, what: 'sparks', to: 'drawCards'},
            ],
        },
        iceShardUpgrades: {
            actions_2: [
                {action: 'addCard', value: 5, what: 'sparks', to: 'drawCards', with: ['frost']},
            ],
        },
        bothShardUpgrades: {
            actions: [
                {action: 'addCard', value: 5, what: 'sparks', to: 'drawCards'},
            ],
        },
    }),



];


export function AllCards() {

    const cards = ALL_CARDS;

    function getAddableCards(tier = false, type = false, pack = false, exclude = []) {
        let items = cards;
        if(tier && type) {
            items = items.filter(i => i.tier == tier && i.type == type);
        } else if(tier) {
            items = items.filter(i => i.tier == tier);
        } else if(type) {
            items = items.filter(i => i.type == type);
        }
        if(pack) {
            items = items.filter(i => i.pack == pack);
        } else {
            items = items.filter(i => i.pack == 'basic' || i.pack == game.boosterPack);
        }
        items = items.filter(i => i.addable == true);
        items = items.filter(i => !exclude.includes(i.id));
        return items;
    }

    function getAllCards() {
        let items = cards;
        for(let i = 0; i < items.length; i++) {
            items[i].guid = util.randString();

            // TODO: re-enable this code after dev is complete
            // standard description
            //let desc = Deck().buildDescription(items[i]);
            //items[i].desc = desc;

            // slots description
            //let slotDesc = Deck().buildSlotsDescription(items[i]);
            //items[i].slotDesc = slotDesc;
        }
        return items;
    }

    function buildLibrary() {
        for(let i = 0; i < this.getAllCards().length; i++) {
            util.appendCard(this.getAllCards()[i], '.library-panel .cards');
        }
    }

    return {
        cards,
        getAddableCards,
        getAllCards,
        buildLibrary
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

    }

    function removeCard(guid) {
        cards = cards.filter(i => i.guid !== guid);
        this.cards = cards;
        player.cardsOwned -= 1;
    }

    function addCard(add) {
        let addCard = AllCards().cards.find(({ id }) => id === add);
        let copiedCard = JSON.parse(JSON.stringify(addCard)); // necessary to create a deep copy
        copiedCard.guid = util.randString();
        
        // standard card description
        let desc = buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc;

        cards.push(copiedCard);
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
        let card = JSON.parse(JSON.stringify(thisCard)); // necessary to create a deep copy

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

        let natural = shard ? util.getShardAttribute(card, shard, 'natural') : util.getCardAttribute(card, 'natural');
        if(natural) {
            desc += '<div class="desc-item"><span class="highlight">Natural</span></div>';
        }

        let dmg = shard ? util.getShardAttribute(card, shard, 'dmg') : util.getCardAttribute(card, 'dmg');
        if(dmg.length > 0) {
            desc += '<div class="desc-item">Deal ';
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
        let effectsDesc = buildEffectsDescription(effects, desc);
        desc += effectsDesc;

        // abilities
        let abilities = shard ? util.getShardAttribute(card, shard, 'abilities') : util.getCardAttribute(card, 'abilities');
        let abilitiesDesc = buildAbilitiesDescription(abilities, desc);
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
                desc += '<div class="desc-item"><span class="highlight">Use:</span> ' + use + '</div>';
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
                let effectsDesc = buildEffectsDescription(effects, behaviorDesc);
                behaviorDesc += effectsDesc;

                // abilities       
                let abilities = shard ? util.getShardAttribute(card, shard, 'abilities', noun) : util.getCardAttribute(card, 'abilities', noun);
                let abilitiesDesc = buildAbilitiesDescription(abilities, behaviorDesc);
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

        return desc;

    }

    function buildTriggerDescription(trigger, desc) {
        let triggerDesc = '';
        if(trigger != undefined) {
            if(trigger.counter > -1) {
                let when = trigger.when;
                let at = trigger.at;
                let per = trigger.per;
                triggerDesc += '<div class="desc-item">';
                switch(when) {
                    case 'turns':
                        triggerDesc += 'On turn ' + at;
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

    function buildEffectsDescription(effects, behaviorDesc) {
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
                    if(effectText == undefined) {
                        effectText = effects[e].base;
                        effectAmount = effects[e].base;
                    }
                    if(effects[e].effect == 'punch' || effects[e].effect == 'sorcery' || effects[e].effect == 'resistance') {
                        effectText = Math.round((effectText + Number.EPSILON) * 100);
                        effectText += '%';
                    }
                    effectsDesc += ' <span class="amount ' + effects[e].effect + '" data-amount="' + effectAmount + '">' + effectText + '</span> ' + effects[e].effect + turns + '</div>';
                }
            }
        }
        return effectsDesc;
    }

    function buildAbilitiesDescription(abilities, behaviorDesc) {
        let abilitiesDesc = '';
        if(abilities != undefined) {
            if(abilities.length > 0) {
                for(let e = 0; e < abilities.length; e++) {
                    if(abilities[e].hex) {
                        abilitiesDesc += '<div class="desc-item">Hex ';
                    } else {
                        abilitiesDesc += '<div class="desc-item">Gain ';
                    }
                    let plural = abilities[e].turns > 1 ? 's' : '';
                    let turns = abilities[e].turns > 0 ? ' for ' + abilities[e].turns + ' turn' + plural : '';
                    abilitiesDesc += abilities[e].ability + turns + '</div>';
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
                    let what = actions[e].what;
                    let whatCard = util.getCardById(what, AllCards().cards);
                    let whatName = what;
                    if(whatCard != undefined) whatName = whatCard.name;
                    let select = actions[e].select;
                    let type = actions[e].type;
                    let value = actions[e].value;
                    let to = actions[e].to;
                    let from = actions[e].from;
                    let cardWith = actions[e].with;
                    if(id == 'stat') {
                        name = whatName.toUpperCase();
                        what = '';
                        if(typeof value === 'number' && value > 0) {
                            value = value != undefined ? ' +' + value : '';
                        } else {
                            value = value != undefined ? ' ' + value : '';
                        }
                    } else {
                        what = what != undefined ? ' <span class="whatname">' + whatName + '</span>' : '';
                        value = value != undefined ? ' &times;' + value : '';
                    }
                    if(id == 'removeHexes') {
                        to = to != undefined ? ' from ' + util.getFromDisplay(to) : '';
                    } else {
                        to = to != undefined ? ' to ' + util.getFromDisplay(to) : '';
                    }    
                    select = select != undefined ? ' ' + select : '';
                    select = select == -1 ? ' all' : select;
                    type = type != undefined ? ' ' + type : '';
                    from = from != undefined ? ' ' + util.getFromDisplay(from) : '';
                    if(cardWith != undefined) {
                        if(cardWith.length > 1) {
                            cardWith = ' with ' + cardWith[0] + ' and ' + cardWith[1] + ' shards';
                        } else {
                            cardWith = ' with ' + cardWith + ' shard';
                        }
                    } else {
                        cardWith = '';
                    }
                    if(select != '' && type != '' && value != '') {
                        to = to != '' ? ' and add ' + to : '';
                        actionsDesc += 'Choose ' + select + ' of ' + value + type + ' cards ' + to + cardWith + '. ';
                    } else {
                        if(type == ' any' || type == ' attack' || type == ' tool' || type == ' ability' || type == ' magic') {
                            type = type != '' ? ' of type ' + type : '';
                        } else {
                            type = type != '' ? ' with ' + type : '';
                        }
                        actionsDesc += '<div class="desc-item">' + name + select + what + value + to + from + type + cardWith + '</div>';
                    }
                }
            }
        }
        return actionsDesc;
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

    function showShardedCards(combatDeck) {
        if(game.toShow.length > 0) {
			game.toShow = [... new Set(game.toShow)];
            let cards = game.toShow;
            for(let i = 0; i < cards.length; i++) {
                let domCard = util.getDomCardByGuid(cards[i].guid);
                let cloneCard = domCard.parent().clone();
                cloneCard.appendTo('.show-cards');
                // swap out the hand card so the dom card gets rebuilt
                if(!game.combatEndedFlag) {
                    let thisCard = util.getCardByGuid(cards[i].guid, combatDeck.handCards);
                    if(thisCard != undefined) {
                        util.removeCardByGuid(thisCard.guid, 'replaced');
                        let css = thisCard.playable ? 'playable' : '';
                        util.appendCard(thisCard, '.player-cards', css);
                    }
                }
            }
            util.animateShowCards();
            game.toShow = [];
        }
    }

    function decideCard(type = false, rarity = 'common') {

        let addableCards = AllCards().getAddableCards(rarity, type, false, game.toExclude);
        let legendary = util.chance(game.legendaryChance);
        let rare = util.chance(game.rareChance);
        let uncommon = util.chance(game.uncommonChance);
        if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate' || legendary) {
            addableCards = AllCards().getAddableCards('legendary', type, false, game.toExclude);
            game.legendaryChance = 0;
        } else if(game.mapType == 'arena' || rare) {
            addableCards = AllCards().getAddableCards('rare', type, false, game.toExclude);
            game.rareChance = 0
        } else if(uncommon) {
            addableCards = AllCards().getAddableCards('uncommon', type, false, game.toExclude);
            let uncommonDecrease = game.floor;
            game.uncommonChance -= uncommonDecrease;
        }
        let legendaryIncrease = Math.round((game.floor - 10) / 2);
        if(legendaryIncrease < 0) legendaryIncrease = 0;
        game.legendaryChance += legendaryIncrease;
        if(game.legendaryChance > 5) game.legendaryChance = 5; // legendary chance caps at 5
        let rareIncrease = Math.round((game.floor - 2) * .3);
        if(rareIncrease < 0) rareIncrease = 0;
        game.rareChance += rareIncrease;
        if(game.rareChance > 20) game.rareChance = 20; // rare chance caps at 20
        let uncommonIncrease = Math.round((game.floor - 2) * .4);
        if(uncommonIncrease < 0) uncommonIncrease = 0;
        game.uncommonChance += uncommonIncrease;
        if(game.uncommonChance > 50) game.uncommonChance = 50; // uncommon chance caps at 50
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

    return {
        buildDeck,
        addCard,
        removeCard,
        attachShard,
        showShardedCards,
        hasOpenSlot,
        numOpenSlots,
        buildDescription,
        buildSlotsDescription,
        decideCard,
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
            let copiedCard = JSON.parse(JSON.stringify(deckCards[i]));
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

    function shuffleDeck(combatDeck) {
        combatDeck.drawCards = util.shuffle(combatDeck.discardCards);
        combatDeck.discardCards = [];
        
    }

    function getNaturalCard(combatDeck) {
        for(let i = 0; i < combatDeck.drawCards.length; i++) {
            let natural = util.getCardAttribute(combatDeck.drawCards[i], 'natural');
            if(natural && !combatDeck.drawCards[i].drawn) {
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

    function drawCard(player, combatDeck, ignoreSpeed = false) {

        if(!canDraw(combatDeck)) {
            shuffleDeck(combatDeck);
        }

        if(canDraw(combatDeck)) {

            let thisCard = false;

            if(player.speed.current > 0 || ignoreSpeed == true) {
                let index = util.randArrayIndex(combatDeck.drawCards);
                let naturalCard = getNaturalCard(combatDeck);
                thisCard = naturalCard ? naturalCard : combatDeck.drawCards[index];
                thisCard.drawn = true;
                let thisRetain = util.getCardAttribute(thisCard, 'retain');
                let retain = thisRetain ? ' retained' : '';
                let css = thisCard.playable ? 'playable' : '';
                // some actions can add multiple cards to hand at once so we need to account for that
                // we use 11 because the played card hasn't been discarded yet
                if(combatDeck.handCards.length == 11) {
                    combatDeck.discardCards.push(thisCard);
                } else {
                    combatDeck.handCards.push(thisCard);
                    util.appendCard(thisCard, '.player-cards', css + retain);
                    if(!ignoreSpeed) player.speed.current -= 1;
                }
                
                combatDeck.drawCards = combatDeck.drawCards.filter(i => i.guid !== thisCard.guid);
                
            }

            if(player.speed.current == 0 || combatDeck.handCards.length == 10) $('.draw-card').addClass('disabled');

            updateCardPlayability(player, combatDeck);

            return thisCard;

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
            if(combatDeck.handCards.length == 10) {
                combatDeck.discardCards.push(thisCard);
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            combatDeck[to].push(thisCard);
        }
        
        updateCardPlayability(player, combatDeck);

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
            if(combatDeck.handCards.length == 10) {
                combatDeck.discardCards.push(thisCard);
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            combatDeck[to].push(thisCard);
        }
        
        updateCardPlayability(player, combatDeck);

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
            if(combatDeck.handCards.length == 10) {
                combatDeck.discardCards.push(thisCard);
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain);
            }
        } else {
            combatDeck[to].push(thisCard);
        }

        updateCardPlayability(player, combatDeck);

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
            if(combatDeck.handCards.length == 10) {
                combatDeck.discardCards.push(thisCard);
            } else {
                combatDeck.handCards.push(thisCard);
                let css = thisCard.playable ? 'playable' : '';
                util.appendCard(thisCard, '.player-cards', css + retain + discardable);
            }
        } else if(to=='deck') {
            Deck().addCard(guid);
        } else {
            combatDeck[to].push(thisCard);
        }

        updateCardPlayability(player, combatDeck);

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
                    if(util.chance(50)) {
                        ephemeral = true;
                    }
                }
                if(ephemeral) {
                    if(game.playsounds) sounds.play('removeCard');
                    combatDeck.deadCards.push(thisCard);
                } else {
                    combatDeck.discardCards.push(thisCard);
                }
                combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid, 'discarded');
                i--;
            } else {
                thisCard.age += 1;
            }
            thisCard.tempRetain = false;
        }
        if(game.playsounds) sounds.play('selectCard');

    }

    function discardCard(card, combatDeck, played = false) {
        if(game.playsounds) sounds.play('selectCard');
        let animation = played ? 'played' : 'discarded';
        combatDeck.discardCards.push(card);
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, animation);
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

    }

    function destroyCard(card, combatDeck, skipDead = false) {
        if(!skipDead) {
            if(game.playsounds) sounds.play('removeCard');
            combatDeck.deadCards.push(card);
        }
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, 'destroyed');
    }

    function transmuteCards(combatDeck, deck, player) {
        console.clearconsol
        for(let i = 0; i < combatDeck.transmutingCards.length; i++) {
            let possibleCards = AllCards().getAddableCards().filter(j => j.addable == true && j.type !== 'clutter' && j.id !== combatDeck.transmutingCards[i].id);
            let transmutedCard = util.randFromArray(possibleCards);
            transmutedCard = JSON.parse(JSON.stringify(transmutedCard)); // necessary to create a deep copy
            transmutedCard.guid = util.randString();

            // standard description
            let desc = Deck().buildDescription(transmutedCard);
            transmutedCard.desc = desc;

            // slots description
            let slotDesc = Deck().buildSlotsDescription(transmutedCard);
            transmutedCard.slotDesc = slotDesc;

            combatDeck.chooseCards.push(transmutedCard);
            if(game.fromPile == 'allCards') {
                deck.cards.push(transmutedCard);
                deck.cards = deck.cards.filter(j => j.guid !== combatDeck.transmutingCards[i].guid);
            } else {
                let card = addChooseCard(player, combatDeck, transmutedCard.guid, game.fromPile);
                if(game.fromPile == 'handCards') {
                    combatDeck.handCards = combatDeck.handCards.filter(j => j.guid !== combatDeck.transmutingCards[i].guid);
                } else if(game.fromPile == 'drawCards') {
                    combatDeck.drawCards = combatDeck.drawCards.filter(j => j.guid !== combatDeck.transmutingCards[i].guid);
                } else if(game.fromPile == 'discardCards') {
                    combatDeck.discardCards = combatDeck.discardCards.filter(j => j.guid !== combatDeck.transmutingCards[i].guid);
                }
            }
            util.removeCardByGuid(combatDeck.transmutingCards[i].guid, 'destroyed');
        }
        if(game.playsounds) sounds.play('transmuteCard');
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
                combatDeck.discardCards = combatDeck.discardCards.filter(i => i.guid !== thisCard.guid);
                util.removeCardByGuid(thisCard.guid);
                i--;
            }
        }
    }

    function incrementExpiredCards(combatDeck) {
        for(let i = 0; i < combatDeck.allLiveCards(combatDeck).length; i++) {
            let thisCard = combatDeck.allLiveCards(combatDeck)[i];
            let expire = util.getCardAttribute(thisCard, 'expire');
            if(expire > 0) {
                thisCard.expire -= 1;
            }
        }
    }

    function addCard(add, combatDeck, part, player, shards = []) {
        let addCard = AllCards().cards.find(({ id }) => id === add);
        let copiedCard = JSON.parse(JSON.stringify(addCard)); // necessary to create a deep copy
        copiedCard.guid = util.randString();
       
        // standard description
        let desc = Deck().buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = Deck().buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc;

        if(shards.length > 0) {
            for(let i = 0; i < shards.length; i++) {
                Deck().attachShard(copiedCard, shards[i]);
                game.toShow.push(card);
            }
        }
        Deck().showShardedCards(combatDeck);

        combatDeck[part].push(copiedCard);
        updateCardPlayability(player, combatDeck);

        if(part == 'handCards') {
            let thisRetain = util.getCardAttribute(copiedCard, 'retain');
            let retain = thisRetain ? ' retained' : '';
            let css = copiedCard.playable ? 'playable' : '';
            util.appendCard(copiedCard, '.player-cards', css + retain);
        }

    }

    function initCard(card) {
        let copiedCard = JSON.parse(JSON.stringify(card)); // necessary to create a deep copy
        copiedCard.guid = util.randString();

        // standard description
        let desc = Deck().buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = Deck().buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc; 

        return copiedCard;
    }

    function updateCardPlayability(player, combatDeck) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let cost = util.getCardAttribute(combatDeck.handCards[i], 'mana');
            let domCard = util.getDomCardByGuid(combatDeck.handCards[i].guid);
            if(cost > player.mana.current) {  
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
        getNaturalCard,
        getOldestCard,
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
        incrementExpiredCards,
        addCard,
        initCard,
        updateCardPlayability,
    };

}



