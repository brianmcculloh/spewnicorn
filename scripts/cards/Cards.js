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

export default class Cards {
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