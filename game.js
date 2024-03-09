import Util from './utils.js';
const util = new Util();

const ALL_STARTING_OPTIONS = [
    {att: 'courage', name: '+8 Courage Coins', amount: 8},
    {att: 'armor', name: '+40 Armor', amount: 40},
    {att: 'health', key: 'max', name: '+20 Max Health', amount: 20},
    {att: 'aura', key: 'current', name: '+5 Aura', amount: 5},
    {att: 'sparkle', key: 'current', name: '+5 Sparkle', amount: 5},
    {att: 'shimmer', key: 'current', name: '+5 Shimmer', amount: 5},
    {att: 'rainbow', key: 'base', name: '+12 Rainbow Base', amount: 12},
    {att: 'aggro', key: 'current', name: '-5 Aggro', entity: 'game', amount: -5},
    {action: 'addRare', name: 'Add a random rare card, lose 12 health'},
    {action: 'addCommonTreasure', name: 'Add a random common treasure'},
    {action: 'addUncommonTreasure', name: 'Add a random uncommon treasure, lose 20 health'},
    {action: 'addRareTreasure', name: 'Add a random rare treasure, lose 10 max health'},
];

const ALL_BOOSTER_PACKS = [
    'combine',
    'rainbow',
    'cycle'
];

const ALL_ESSENCES = [
    'sparkle',  // unused speed converts to temporary might next turn
    'shimmer',  // unused speed converts to speed next turn
    'aura',     // unused speed converts to mana next turn
];
/*********************************************
 * 
 * EFFECTS
 * Numerical buffs/debuffs to player stats. Stored here to easily modify name and description in one place
 * and referred to by id everywhere else. Rainbow doesn't really belong here TBH.
 * How persist works:
 * Each turn, effects with less than 1 turns left are cleared unless they have persist: true
 * Each combat, effects with turns value greater than -1 are cleared unless they have persist: true
 * This way, if an effect that should carry over to the next combat has 5 turns left, it will
 * not be cleared at the end of combat, but will be cleared at the end of the turn in which it hits 0.
 * Use turns: -1 if you want the effect to be permanent
 * 
 * NORMAL: effect should clear at the end of your turn
 * DELAY: effect should clear after opponent finishes their turn
 * OFFSET: effect should clear at the beginning of your next turn AFTER some pre-turn things happen (such as gaining block)
 * 
*********************************************/
const ALL_EFFECTS = [

    // this doesn't really belong here but it doesn't hurt anything
    // creature {base: 5, current: 0, temp: 0, turns: 0, max: 20, type: 'rainbow'},
    {id: 'rainbow', name: 'Rainbow', desc: 'Base rainbow magic at the start of each combat', x: -384, y: -4992, hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: 0}
    {id: 'speed', name: 'Speed', desc: 'Number of cards you can draw each turn', x: -32, y: -5922},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: 0, persist: false}
    // buff     {effect: 'solid', amount: 2, turns: -1}
    // hex      {effect: 'solid', amount: -1, hex: true, turns: 2}
    {id: 'solid', name: 'Solid', desc: 'Gain x extra block each time you gain block from cards', x: -256, y: -4672, sound: 'effect5', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'might', amount: 5, turns: -1}
    // hex      {effect: 'might', amount: -8, hex: true}
    {id: 'might', name: 'Might', desc: 'Attack damage modifier', x: -288, y: -4960, sound: 'effect30', hex: false},

    // Usage:
    // creature {base: 1.1, current: 0, temp: 0, turns: -1, persist: false}, // value should range from 0 (0%) to 2 (200%) - haven't tested higher
    // buff     {effect: 'punch', amount: .1, turns: 3} // value should increment by .1 and will be added to base
    // hex     {effect: 'punch', amount: -.1, turns: -1, hex: true}
    {id: 'punch', name: 'Punch', desc: 'Attack damage multiplier', x: -482, y: -7072, sound: 'effect26', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'mend', amount: 2, turns: -1}
    // hex      {effect: 'mend', amount: -2, hex: true}
    {id: 'mend', name: 'Mend', desc: 'Gain x extra health each time you heal', x: -224, y: -6720, sound: 'effect25', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'craft', amount: 2, turns: -1}
    // hex      {effect: 'craft', amount: -2, hex: true}
    {id: 'craft', name: 'Craft', desc: 'Gain x extra armor each time you gain armor', x: -288, y: -6048, sound: 'effect9', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 1, turns: 2, persist: false}
    // buff     {effect: 'cunning', amount: 1, turns: 1}
    // hex      {effect: 'cunning', amount: -2, hex: true, persist: true}
    {id: 'cunning', name: 'Cunning', desc: 'Extra armor converts to x times block', x: -480, y: -6498, sound: 'effect2', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: true}
    // buff     {effect: 'vigor', amount: 1, turns: -1}
    // hex      {effect: 'vigor', amount: -2, hex: true, persist: true}
    {id: 'vigor', name: 'Vigor', desc: 'Extra armor converts to x times health', x: -288, y: -6368, sound: 'effect3', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'stout', amount: 2, turns: -1}
    // hex      {effect: 'stout', amount: -1, hex: true, turns: 2}
    {id: 'stout', name: 'Stout', desc: 'Block gained at the start of each turn', x: -192, y: -15104, sound: 'effect4', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'muster', amount: 2, turns: -1}
    // hex      {effect: 'muster', amount: -2, hex: true}
    {id: 'muster', name: 'Muster', desc: 'Armor gained at the start of each turn', x: -192, y: -15168, sound: 'effect5', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'rowdy', amount: 2, turns: -1}
    // hex      {effect: 'rowdy', amount: -2, hex: true}
    {id: 'rowdy', name: 'Rowdy', desc: 'Add x to current crit chance', x: -320, y: -7136, sound: 'effect1', hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'fierce', amount: 5, turns: -1}
    // hex      {effect: 'fierce', amount: -5, hex: true}
    {id: 'fierce', name: 'Fierce', desc: 'Additional crit damage. Gets added to total extra damage of crit.', x: -96, y: -7264, sound: 'effect24', hex: false},

    // Usage:
    // creature {base: .5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'mastery', amount: 5, turns: -1}
    // hex      {effect: 'mastery', amount: -5, hex: true}
    // Gets added to the base crit multiplier of 5 (150%). range is -15 (0%) to +5 (200%);
    {id: 'mastery', name: 'Mastery', desc: 'Crit damage multiplier. 1 Mastery = +10% multiplier (base is 150%)', x: -320, y: -7200, sound: 'effect22', hex: false},

    // Usage:
    // creature {base: 3, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'heal', amount: 3, turns: -1}
    // hex      {effect: 'heal', amount: -3, hex: true}
    {id: 'heal', name: 'Heal', desc: 'Health gained at the end of combat', x: -32, y: -6592, sound: 'effect7', hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'conjure', amount: 2, turns: -1}
    // hex      {effect: 'conjure', amount: -2, hex: true}
    {id: 'conjure', name: 'Conjure', desc: 'Magic rainbow charge modifier', x: -288, y: -4672, sound: 'effect27', hex: false},

    // Usage: 
    // creature {base: 1.5, current: 0, temp: 0, turns: -1, persist: false} // base is default 1 (100%), so 1.5 would be 150%
    // buff     {effect: 'sorcery', amount: .5, turns: -1}
    // hex      {effect: 'sorcery', amount: -.5, hex: true}
    {id: 'sorcery', name: 'Sorcery', desc: 'Magic rainbow charge multiplier', x: -64, y: -6816, sound: 'effect8', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'momentum', amount: 1, turns: -1}
    {id: 'momentum', name: 'Momentum', desc: 'Increase attack damage x amount per attack this turn', x: -286, y: -6562, sound: 'effect32', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'wield', amount: 1, turns: -1}
    // hex      {effect: 'wield', amount: -1, hex: true}
    {id: 'wield', name: 'Wield', desc: 'Every deck cycle charges magic rainbow to maximum x times', x: -96, y: -5120, hex: false},

    // Usage:
    // creature {base: .9, current: 0, temp: 0, turns: -1, persist: false}, // value should range from .1 (10%) to .9 (90%) - does NOT work exactly the same as punch!
    // buff     {effect: 'resistance', amount: .9, turns: 2}
    // hex     {effect: 'resistance', amount: -.1, hex: true} // untested
    {id: 'resistance', name: 'Resistance', desc: 'Resists magic damage', x: -32, y: -5152, sound: 'effect35', delay: true, hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'lemonade', amount: 5, turns: -1}
    // hex      {effect: 'lemonade', amount: -5, hex: true}
    {id: 'lemonade', name: 'Lemonade', desc: 'Gain x health at the start of each turn for each clutter card in draw pile', x: -224, y: -3904, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'spikes', amount: 1, turns: -1}
    // hex      {effect: 'spikes', amount: -1, hex: true}
    {id: 'spikes', name: 'Spikes', desc: 'Any armor lost as a result of attack damage does x dmg back to attacker', x: -384, y: -5184, sound: 'effect15', delay: true, hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'vex', amount: 2, turns: -1}
    // hex      {effect: 'vex', amount: -1, hex: true}
    {id: 'vex', name: 'Vex', desc: 'Block the next x hexes this combat', x: -482, y: -5856, sound: 'effect23', delay: true, hex: false},

    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'mage', amount: 2, turns: -1}
    // hex     {effect: 'mage', amount: -2, hex: true}
    {id: 'mage', name: 'Mage', desc: 'Each time you cycle rainbow, gain x lightning', x: -448, y: -6498, sound: 'effect33', hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'enchanter', amount: 5, turns: -1}
    // hex      {effect: 'enchanter', amount: -5, hex: true}
    {id: 'enchanter', name: 'Enchanter', desc: 'Each time you charge your rainbow without activating it, gain x% thunder', x: -448, y: -6466, sound: 'effect34', hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'summon', amount: 5, turns: -1}
    // hex      {effect: 'summon', amount: -5, hex: true}
    {id: 'summon', name: 'Summon', desc: 'Charge your magic rainbow x amount per turn', x: -448, y: -6434, sound: 'effect29', hex: false},

    // Usage:
    // creature {base: 5, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'arcane', amount: 5, turns: -1}
    // hex      {effect: 'arcane', amount: -5, hex: true}
    {id: 'arcane', name: 'Arcane', desc: 'Whenever you muddle your magic or summom muddled magic, charge rainbow x amount more', x: 0, y: -5408, sound: 'effect31', hex: false},

    // Usage:
    // creature {base: 0, current: 2, temp: 2, turns: 2, persist: false}
    // buff     {effect: 'fatality', amount: 2, turns: 2}
    {id: 'fatality', name: 'Fatality', desc: 'Your next attack card does x times your highest unblocked non-fatality hit', x: -288, y: -7232, sound: 'effect17', hex: false},

    // Usage:
    // creature {base: 0, current: 0, temp: 1, turns: 2, persist: false}
    // buff     {effect: 'retaliate', amount: 1, turns: -1}
    // hex      {effect: 'retaliate', amount: -1, hex: true}
    {id: 'retaliate', name: 'Retaliate', desc: 'Any attack damage taken does x dmg back to attacker', x: -256, y: -6784, delay: true, hex: false},

    // Usage:
    // creature {base: 0, current: 0, temp: 1, turns: 2, persist: false}
    // buff     {effect: 'mystery', amount: 1, turns: -1}
    // hex      {effect: 'mystery', amount: -1, hex: true}
    {id: 'mystery', name: 'Mystery', desc: '? cards trigger x extra times', x: -384, y: -32, sound: 'effect20', hex: false},

    // Usage:
    // creature {base: 0, current: 0, temp: 1, turns: 2, persist: false}
    // buff     {effect: 'regen', amount: 1, turns: -1}
    // hex      {effect: 'regen', amount: -1, hex: true}
    {id: 'regen', name: 'Regen', desc: 'Heal x each turn and decrease x by 1', x: -128, y: -5760, sound: 'effect6', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 2, turns: 2, persist: false} // base is default 1 (100%), so 1 would be 200% and -1 would be 0%
    // buff     {effect: 'wisdom', amount: 1, turns: -1}
    // hex      {effect: 'wisdom', amount: -1, hex: true}
    {id: 'wisdom', name: 'Wisdom', desc: 'Card age boosts damage, block, armor, magic, and health amounts', x: -416, y: -6304, sound: 'effect28', hex: false},
    
    // Usage:
    // creature {base: 2, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'lightning', amount: 5, turns: -1}
    // hex      {effect: 'lightning', amount: -8, hex: true}
    {id: 'lightning', name: 'Lightning', desc: 'Magic rainbow damage modifier', x: -160, y: -6496, sound: 'effect37', hex: false},

    // Usage:
    // creature {base: 1.1, current: 0, temp: 0, turns: -1, persist: false}, // value should range from 0 (0%) to 2 (200%) - haven't tested higher
    // buff     {effect: 'thunder', amount: .1, turns: 3} // value should increment by .1 and will be added to base
    // hex     {effect: 'thunder', amount: -.1, turns: -1, hex: true}
    {id: 'thunder', name: 'Thunder', desc: 'Magic rainbow damage multiplier', x: -160, y: -6528, sound: 'effect36', hex: false},

    // Usage:
    // creature {base: 1, current: 1, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'retain', amount: 1, turns: -1}
    {id: 'retain', name: 'Retain', desc: 'Select x cards to keep in your hand when you end your turn', x: -352, y: -418, sound: 'effect38', hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // hex      {effect: 'antimomentum', amount: 2, hex: true}
    {id: 'antimomentum', name: 'Anti-Momentum', desc: 'Receive x damage and increase it by x for every card played this turn', x: -480, y: -5440, hex: true},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // hex      {effect: 'marked', amount: 2, hex: true}
    {id: 'marked', name: 'Marked', desc: 'Receive x damage for every card played', x: -384, y: -6528, hex: true},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'insulate', amount: 5, turns: -1}
    // hex      {effect: 'insulate', amount: -8, hex: true}
    {id: 'insulate', name: 'Insulate', desc: 'Gain x block each time you play a card', x: -256, y: -6880, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'irradiate', amount: 5, turns: -1}
    // hex      {effect: 'irradiate', amount: -8, hex: true}
    {id: 'irradiate', name: 'Irradiate', desc: 'Deal x damage to all enemies at the start of your turn', x: -160, y: -7584, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'replenish', amount: 5, turns: -1}
    // hex      {effect: 'replenish', amount: -8, hex: true}
    {id: 'replenish', name: 'Replenish', desc: 'Draw x cards every time you destroy a card', x: -416, y: -385, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'cmobiner', amount: 5, turns: -1}
    // hex      {effect: 'combiner', amount: -8, hex: true}
    {id: 'combiner', name: 'Combiner', desc: 'Draw x cards every time you combine a card', x: -162, y: -4672, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // hex      {effect: 'fatigue', amount: 1, hex: true}
    {id: 'fatigued', name: 'Fatigued', desc: 'Lose x might each turn', x: -192, y: -6688, hex: true},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // hex      {effect: 'vulnerable', amount: 1, hex: true}
    {id: 'vulnerable', name: 'Vulnerable', desc: 'Lose x solid each turn', x: -128, y: -6688, hex: true},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // hex      {effect: 'stifled', amount: 1, hex: true}
    {id: 'stifled', name: 'Stifled', desc: 'Lose x conjure each turn', x: -96, y: -6688, hex: true},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'angered', amount: 2, turns: -1}
    // hex      {effect: 'angered', amount: 1, hex: true}
    {id: 'angered', name: 'Angered', desc: 'Gain x might each time you are hexed', x: 0, y: -5024, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'hardened', amount: 2, turns: -1}
    // hex      {effect: 'hardened', amount: 1, hex: true}
    {id: 'hardened', name: 'Hardened', desc: 'Gain x block each time you take damage', x: -448, y: -6560, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'shapeshifter', amount: 2, turns: -1}
    // hex      {effect: 'shapeshifter', amount: 1, hex: true}
    {id: 'shapeshifter', name: 'Shapeshifter', desc: 'Gain x block each time you change stances', x: -32, y: -5984, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'fend', amount: 2, turns: -1}
    // hex      {effect: 'fend', amount: 1, hex: true}
    {id: 'fend', name: 'Fend', desc: 'Gain x block each time you combine cards', x: -320, y: -5856, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'ward', amount: 2, turns: -1}
    // hex      {effect: 'ward', amount: 1, hex: true}
    {id: 'ward', name: 'Ward', desc: 'Gain x block each time you destroy a card', x: -162, y: -5856, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'cover', amount: 2, turns: -1}
    // hex      {effect: 'cover', amount: 1, hex: true}
    {id: 'cover', name: 'Cover', desc: 'Gain x block each time you activate your magic rainbow', x: -64, y: -5856, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'preserve', amount: 2, turns: -1}
    // hex      {effect: 'preserve', amount: 1, hex: true}
    {id: 'preserve', name: 'Preserve', desc: 'Gain x block each time you discard a card', x: -96, y: -7712, hex: false},

    // Usage:
    // creature {base: 1, current: 0, temp: 0, turns: -1, persist: false}
    // buff     {effect: 'veil', amount: .5, turns: -1}
    // hex      {effect: 'veil', amount: -.5, hex: true}
    {id: 'veil', name: 'Veil', desc: 'Gain x resistance each time you receive magic damage', x: -384, y: -6240, hex: false},

];
/*********************************************
 * 
 * ABILITIES
 * Pretty much function the same as effects, except they are binary instead of numerical. They're either turned on or off.
 * For creature use, baseTurns is required (will get converted to turns automatically)
 * For buff use, turns is required, as it will get added to any existing baseTurns
 * Persist must be true for both creature and buff for ability to actually persist between combats
 * You currently cannot go from baseTurns: 3 (temporary) to baseTurns: -1 (permanent) // TODO: fix this
 * -Ideally the fix would be to buff with baseTurns: -1, which would immediately set baseTurns to -1 instead of just decrementing it by one (which is what it does now)
 * 
 * DELAY/OFFSET - see description in effects above
*********************************************/
const ALL_ABILITIES = [

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    //  buff     {ability: 'protection', turns: 2, enabled: true}
    {id: 'protection', name: 'Protection', desc: 'Retain block each turn', context: 'turn', x: -160, y: -1182, sound: 'effect10', offset: true},

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    // buff     {ability: 'unreachable', turns: 1, enabled: true}
    // hex      {ability: 'unreachable', enabled: false, hex: true}
    {id: 'unreachable', name: 'Unreachable', desc: 'All damage reduced to 1 per attack', context: 'turn', x: -288, y: -7646, delay: true},

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    // buff     {ability: 'tank', turns: 2, enabled: true}
    // hex      {ability: 'tank', enabled: false, hex: true}
    {id: 'tank', name: 'Tank', desc: 'Damage only applies to armor', context: 'turn', x: -224, y: -5856, sound: 'effect11', delay: true},

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    // buff     {ability: 'toothache', turns: 2, enabled: true}
    // hex      {ability: 'toothache', enabled: false, hex: true}
    {id: 'toothache', name: 'Toothache', desc: 'Cannot eat candy', context: 'turn', x: -288, y: -1856},

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    // buff     {ability: 'prepared', turns: 2, enabled: true}
    // hex      {ability: 'prepared', enabled: false, hex: true}
    {id: 'prepared', name: 'Prepared', desc: 'If you draw 4 or less cards gain [6 - cards drawn] speed next turn', context: 'turn', x: 0, y: -32, sound: 'effect12'},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'bless', enabled: true, baseTurns: -1}
    // hex     {ability: 'bless', enabled: false, hex: true}
    {id: 'bless', name: 'Bless', desc: 'Whenever you play an ability a random card becomes free for the rest of combat', context: 'turn', x: -256, y: -5696, sound: 'effect16'},

    // Usage:
    // creature {enabled: true, baseTurns: 2, turns: 0, persist: false}
    // buff     {ability: 'hypnotize', turns: 2, enabled: true}
    {id: 'hypnotize', name: 'Hypnotize', desc: 'A random enemy targets itself', context: 'turn', x: -448, y: -5248, sound: 'effect19', delay: true},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'stockpile', turns: -1, enabled: true}
    {id: 'stockpile', name: 'Stockpile', desc: 'Any block at the end of turn converts to armor', context: 'turn', x: -160, y: -1118, sound: 'effect14', delay: true},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'sift', turns: -1, enabled: true}
    {id: 'sift', name: 'Sift', desc: 'Clutter cards become ephemeral', context: 'turn', x: -96, y: -1632, sound: 'effect18'},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'panic', baseTurns: -1, enabled: true}
    {id: 'panic', name: 'Panic', desc: 'Deal damage + block but lose block', context: 'turn', x: -416, y: -7136, sound: 'effect21'},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'expirex', baseTurns: -1, enabled: true}
    {id: 'expirex', name: 'Expire-X&trade;', desc: 'Cards no longer expire', context: 'turn', x: -480, y: -4544},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'magick', baseTurns: -1, enabled: true}
    {id: 'magick', name: 'Magick', desc: 'Non-muddled magic rainbow charging has extra benefits based on magic type', context: 'turn', x: -384, y: -5568, sound: 'effect39'},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'amplify', baseTurns: -1, enabled: true}
    {id: 'amplify', name: 'Amplify', desc: 'Magick, Lightning, and Thunder effects are doubled', context: 'turn', x: -224, y: -5728, sound: 'effect40'},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'explode', baseTurns: -1, enabled: true}
    {id: 'explode', name: 'Explode', desc: 'Your next attack does double damage', context: 'card', x: -384, y: -7200},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'guild_member', baseTurns: -1, enabled: true}
    {id: 'guild_member', name: 'Guild Member', desc: 'Unlimited weapon trading', context: 'card', x: -352, y: 0},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'resurrect', baseTurns: -1, enabled: true}
    {id: 'resurrect', name: 'Resurrect', desc: 'Each time this creature receives damage, add one random tier 4 or 5 monster to combat next turn', context: 'turn', x: -416, y: -6592, offset: true},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'supernatural', baseTurns: -1, enabled: true}
    {id: 'supernatural', name: 'Supernatural', desc: 'Natural cards are always drawn first', context: 'turn', x: -96, y: -5760},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'eternal', baseTurns: -1, enabled: true}
    {id: 'eternal', name: 'Eternal', desc: 'Cannot be debuffed', context: 'turn', x: -448, y: -5760, offset: true},

    // Usage:
    // creature {enabled: true, baseTurns: -1, turns: 0, persist: false}
    // buff     {ability: 'frozen', baseTurns: -1, enabled: true}
    {id: 'frozen', name: 'Frozen', desc: 'Lose this turn', context: 'turn', x: -384, y: -6560, offset: true, hex: true},

];
/*********************************************
 * 
 * ACTIONS
 * Events that are triggered by cards and monster movesets but can also be applied directly to creatures. Actions can 
 * trigger effects and abilities, or do something totally unique, like add a card to your hand. Mostly actions
 * apply to player but can also apply to monsters, in the case of stat and removeHexes for example.
 * 
 * 
*********************************************/
const ALL_ACTIONS = [

    // Usage:
    // {action: 'draw', value: 2}
    {id: 'draw', name: 'Draw', desc: 'Draw x cards'},

    // Usage:
    // {action: 'discard', value: 2}
    {id: 'discard', name: 'Discard', desc: 'Discard x cards'},

    // Usage:
    // {action: 'destroy', value: 2}
    {id: 'destroy', name: 'Destroy', desc: 'Destroy x cards'},

    // Usage:
    // {action: 'addCard', value: 2, what: 'pain', to: 'drawCards'}
    // {action: 'addCard', value: 1, what: 'destroy', to: 'handCards'}
    // {action: 'addCard', value: 1, what: 'strike', to: 'discardCards'}
    // {action: 'addCard', value: 5, type: 'any', tier: 'rare', to: 'drawCards'} // adds 5 random rare cards into draw pile
    // {action: 'addCard', select: 1, value: 3, type: 'any', tier: 'rare', to: 'handCards'} // choose one of 3 random cards to add to hand
    // {action: 'addCard', value: 1, what: 'magic_blast', to: 'handCards', with: ['flame', 'flame']} // adds card with shards
    {id: 'addCard', name: 'Add Card', desc: 'Add x copies of a specific card or types/tiers of cards to your draw/hand/discard/dead piles.', sound: 'tool2'},

    // Usage:
    // {action: 'findDrawCard', value: 2}
    {id: 'findDrawCard', name: 'Find Draw Card', desc: 'Draw x cards from your draw pile'},

    // Usage:
    // {action: 'findDiscardCard', value: 2}
    {id: 'findDiscardCard', name: 'Find Discard Card', desc: 'Draw x cards from your discard pile'},

    // Usage:
    // {action: 'findDeadCard', value: 2}
    {id: 'findDeadCard', name: 'Find Dead Card', desc: 'Draw x cards from your dead pile'},

    // Usage:
    // {action: 'stat', what: 'might', key: 'current', value: 2}
    // {action: 'stat', what: 'shimmer', key: 'current', value: 1}
    {id: 'stat', name: 'Stat', desc: 'Increase/decrease specific stat by x amount'},

    // Usage:
    // {action: 'removeHexes', to: 'player'}
    {id: 'removeHexes', name: 'Remove Hexes', desc: 'Remove all hexes', sound: 'effect41'},

    // Usage:
    // {action: 'removeBuffs', to: 'player'}
    {id: 'removeBuffs', name: 'Remove Buffs', desc: 'Remove all buffs', sound: 'effect43'},

    // Usage:
    // {action: 'transmute', select: 2, from: 'handCards'}
    {id: 'transmute', name: 'Transmute', desc: 'Transform x cards into random other cards'},

    // Usage:
    // {action: 'ensharden', type: 'flame', select: -1, from: 'handCards', random: true} // random: true and select: -1 will upgrade all "from" cards
    // {action: 'ensharden', type: 'random', select: 2, from: 'drawCards', random: false}
    // {action: 'ensharden', type: 'frost', select: 1, from: 'allCards', random: false}
    {id: 'ensharden', name: 'Ensharden', desc: 'Apply fire, ice, or random shards to x number of selected cards in x pile'},

    // Usage:
    // {action: 'playOldest'}
    {id: 'playOldest', name: 'Play Oldest', desc: 'Play your oldest card in hand for free'},

    // Usage:
    // {action: 'playHand'}
    {id: 'playHand', name: 'Play Your Entire Hand', desc: 'Play all cards in your hand for free'},

    // Usage:
    // {action: 'discardHand'}
    {id: 'discardHand', name: 'Discard Your Entire Hand', desc: 'Discard all cards in your hand'},

    // Usage:
    // {action: 'destroyHand'}
    {id: 'destroyHand', name: 'Destroy Your Entire Hand', desc: 'Destroy all cards in your hand'},

    // Usage:
    // {action: 'summonMonster'}
    {id: 'summonMonster', name: 'Summon', desc: 'Summons a new monster', sound: 'effect42'},

    // Usage:
    // {action: 'kill'}
    {id: 'kill', name: 'Kill', desc: 'Creature dies this turn'},

    // Usage:
    // {action: 'rainbowShield', value: 1}
    {id: 'rainbowShield', name: 'Rainbow Shield', desc: 'Gain block equal to x times your max rainbow'},
    

]

export default function Game() {

    let version = '0.56 Alpha';
    let seed = false;
    let difficulty = 'medium';
    let floor = 0; // TODO: set to 0
    let combat = 0;
    let round = 0;
    let map = 1;
    let mapType = 'normal';
    let overworld = 'forest'; // forest, frost, flame
    let boosterPack = 'basic';
    let arenasComplete = 0;
    let arenasRequired = 2;
    let questsVisited = 0;
    let fountainChance = 1.4;
    let questChance = 1.6;
    let treasureChance = 0; // TODO: set to 0
    let candyChance = 50; // TODO: set to 50
    let shardChance = 0; // TODO: set to 0
    let uncommonChance = 10;
    let rareChance = 0;
    let legendaryChance = 0;
    let critChance = 0;
    let attackCardsPlayed = 0;
    let cardsDrawn = 0;
    let highestDmgRoll = 0; // TODO: set to 0
    let incomingDamage = 0;
    let toDiscard = 0;
    let toDestroy = 0;
    let destroyOptional = false;
    let toPick = 0;
    let toResurrect = 0;
    let combinedAge = 0;
    let toExclude = [];
    let toShow = [];
    let toTransmute = [];
    let toPile = '';
    let fromPile = '';
    let autoplay = false;
    let currentQuest;
    let combatEndedFlag = true;
    let courageTreasureAmount = 5;
    let courageCandyAmount = 5;
    let courageCardAmount = 2;
    let courageInterval = 5; // TODO: set this to 5
    let lastCourageScreenFloor = 0;
    let removeCardCost = 2;
    let tradeCardCost = 1;
    let tradeExpired = false;
    let candySlots = 3;
    let cardRewardNumber = 3;
    let essenceThresholds = [10, 19, 29, 40]; // TODO: set this to 10, 19, 29, 40
    let aggroThresholds = [10, 15, 19, 22, 25, 28, 31, 33, 36, 39]; // TODO: set this to 10, 15, 19, 22, 25, 28, 31, 33, 36, 39
    let aggroThresholds2 = [6, 11, 15, 18, 21, 24, 27, 30, 33, 36, 39]; // TODO: set this to 6, 11, 15, 18, 21, 24, 27, 30, 33, 36, 39
    let currentMonsters = [];
    let targetedMonster = {};
    let previousMonsters = [];
    let previousArena = [];
    let monsterGroup = 1;
    let animationGap = 100;
    let animationDelay = 500;
    let animationDmg = 100;
    let playsounds = true;
    let playmusic = true;
    let tutorial = false; // TODO: set to false
    let debug = false;
    let dev = false;
    let scenario = 'normal'; // normal, frost, flame, or singularity - set to normal for regular gameplay
    let scenarioWhich = 'normal'; // set to normal to not load a scenario
    let libraryBuilt = false;
    let armoryBuilt = false;
    let essences = ALL_ESSENCES;
    let effects = ALL_EFFECTS;
    let abilities = ALL_ABILITIES;
    let actions = ALL_ACTIONS;
    let startingOptions = ALL_STARTING_OPTIONS;
    let boosterPacks = ALL_BOOSTER_PACKS;

    // TODO PHASE IV: Use async/await for animations? (https://youtu.be/e144CXGy2mc)
    // adding a delay: https://youtu.be/AG6vXqPV2aE?t=1224
    // character animations: https://youtu.be/AG6vXqPV2aE?t=1432
    // don't need to wait for full animations to complete before starting the next one: https://youtu.be/AG6vXqPV2aE?t=1634

    async function dmgAnimations(animation) {
        let left = util.randDecimal() * 30;
        let top = util.randDecimal() * 20;
        let rotate = util.randDecimal() * 10;
        rotate = util.chance(50) ? rotate *= -1 : rotate;
        let elem = $('<span style="top:' + top + ';left:' + left + 'px;transform:rotate(' + rotate + 'deg)">' + animation.data + '</span>');
        
        await dmgAnimation(elem, animation);
        await util.wait(animationGap);
        
        elem.css('scale', '.1');
        elem.css('opacity', '0').promise(),
        elem.css('transform', 'translateY(-100px)').delay(3000).promise()  
        .done(function() {
            elem.remove();
        });
    }
    async function blkAnimations(animation) {
        let elem = $('<span style="top:0;left:90px;">' + animation.data + '</span>');
        
        await blkAnimation(elem, animation);
        await util.wait(animationGap);

        elem.css('opacity', '0').delay(300).promise() 
        .done(function() {
            $('.monster, .player-panel').removeClass('damaged');
            elem.css('opacity', '0').delay(2800).promise() 
            .done(function() {
                elem.remove();
            });
        });
    }
    async function statusAnimations(animation) {
        let elem = $('<span>' + animation.data + '</span>');
        if(animation.hex) elem.addClass('hex');
        
        await statusAnimation(elem, animation);
        await util.wait(animationGap);

        elem.css('scale', '.8');
        elem.css('opacity', '0').promise(),
        elem.css('transform', 'translateY(-30px)').delay(3500).promise() 
        .done(function() {
            elem.css('opacity', '0').delay(500).promise() 
            .done(function() {
                elem.remove();
            });
        });
    }

    function dmgAnimation(elem, animation) {
        if(animation.data < 0) {
            elem.css('color', 'red');
        }
        return new Promise(resolve => {
            elem.appendTo(animation.to).promise(),
            elem.css('scale', '2').promise(),
            elem.animate({top: '-100px'}).promise()
            .done(function() {
                resolve();
            });
        });
    }
    function blkAnimation(elem, animation) {
        return new Promise(resolve => {
            elem.appendTo(animation.to).promise(),
            $(animation.to).closest('.monster').addClass('damaged'),
            $(animation.to).closest('.player-panel').addClass('damaged'),
            elem.css('scale', '2').promise()
            .done(function() {
                resolve();
            });
        });
    }
    function statusAnimation(elem, animation) {
        return new Promise(resolve => {
            elem.appendTo(animation.to).promise(),
            elem.css('scale', '2').promise()
            .done(function() {
                resolve();
            });
        });
    }

    async function rainbowAnimations(magicPower) {

        let percentage = magicPower > 100 ? 100 : magicPower;
        let amount = player.rainbow.max * (percentage / 100);
        amount = Math.round(amount);
	    let degrees = percentage * 1.8;

        $('.magic-rainbow').addClass('activated');
        $('.magic-rainbow .semi-circle--mask').css('transform', 'rotate(' + degrees + 'deg) translate3d(0, 0, 0)');

        $('.magic-rainbow .rainbow-power-current').html(amount);
        $('.magic-rainbow .rainbow-power-max').html(player.rainbow.max);
        $('.magic-rainbow').attr('data-type', player.rainbow.type);
        $('.magic-rainbow').removeClass('dark elemental rainbow chaos').addClass(player.rainbow.type);
        $('.magic-rainbow .magic-type span').html(player.rainbow.type);
        $('.magic-rainbow .magic-type span').attr('data-type', player.rainbow.type);

    }



    function message(msg, elem = '.debug-inner') {
        msg = '<span>' + msg + '</span>';
        if(this.debug) {
			$(elem).append(msg);
		}
    }
    
    return {
        version,
        seed,
        difficulty,
        floor,
        combat,
        round,
        map,
        mapType,
        overworld,
        boosterPack,
        arenasComplete,
        arenasRequired,
        questsVisited,
        fountainChance,
        questChance,
        treasureChance,
        candyChance,
        shardChance,
        uncommonChance,
        rareChance,
        legendaryChance,
        critChance,
        attackCardsPlayed,
        cardsDrawn,
        highestDmgRoll,
        incomingDamage,
        toDiscard,
        toDestroy,
        destroyOptional,
        toPick,
        toResurrect,
        combinedAge,
        toPile,
        toExclude,
        toShow,
        toTransmute,
        fromPile,
        autoplay,
        currentQuest,
        combatEndedFlag,
        courageTreasureAmount,
        courageCandyAmount,
        courageCardAmount,
        courageInterval,
        lastCourageScreenFloor,
        removeCardCost,
        tradeCardCost,
        tradeExpired,
        candySlots,
        cardRewardNumber,
        essenceThresholds,
        aggroThresholds,
        aggroThresholds2,
        currentMonsters,
        targetedMonster,
        previousMonsters,
        previousArena,
        monsterGroup,
        animationGap,
        animationDelay,
        animationDmg,
        debug,
        dev,
        scenario,
        scenarioWhich,
        libraryBuilt,
        armoryBuilt,
        playsounds,
        playmusic,
        tutorial,
        essences, 
        effects,
        abilities,
        actions,
        startingOptions,
        boosterPacks,
        dmgAnimations,
        blkAnimations,
        statusAnimations,
        rainbowAnimations,
        message
    };

}