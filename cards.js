import {Util, getAddableCards, ALL_CARDS } from './scripts/index.js';



const util = new Util();



export function AllCards() {


    function getWeapons() {

        let weapons = cards.filter(i => i.weapon == true);

        if(weapons.length == 0) {
            weapons = false;
        }

        return weapons;

    }


    return {
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
        //attachShard(util.getCardById('blitzkrieg', this.cards), 'flame');
        //attachShard(util.getCardById('blitzkrieg', this.cards), 'flame');


    }

    function removeCard(guid) {
        cards = cards.filter(i => i.guid !== guid);
        this.cards = cards;
        player.cardsOwned -= 1;
    }

    function addCard(add, guid = false) {
        let addCard = ALL_CARDS.find(({ id }) => id === add);
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
        if(!shard) {
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
                    let effects = util.getCardAttribute(card, 'effects', stance);
                    let effectsDesc = buildEffectsDescription(effects, attDesc, thisCard);
                    attDesc += effectsDesc;

                    // abilities
                    let abilities = util.getCardAttribute(card, 'abilities', stance);
                    let abilitiesDesc = buildAbilitiesDescription(abilities, attDesc, thisCard);
                    attDesc += abilitiesDesc;

                    // actions
                    let actions = util.getCardAttribute(card, 'actions', stance);
                    let actionsDesc = buildActionsDescription(actions, attDesc);
                    attDesc += actionsDesc;

                    // add to overall string
                    stancesDesc += attPrefix + attDesc + '</div>';
                }
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
                    if(effects[e].effect == 'punch' || effects[e].effect == 'sorcery' || effects[e].effect == 'resistance' || effects[e].effect == 'thunder') {
                        effectText = Math.round((effectText + Number.EPSILON) * 100);
                        effectText += '%';
                    }
                    effectsDesc += ' <span class="amount ' + effects[e].effect + '" data-amount="' + effectAmount + '">' + effectText + '</span> ' + '<span class="effect-text">' + effects[e].effect + '</span>' + turns + desc + '</div>';
                }
            }
        }
        return effectsDesc;
    }

    //{ability: 'explode', turns: 1, enabled: true}
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
                    let what = actions[e].what;
                    let key = actions[e].key;
                    let whatCard = util.getCardById(what, ALL_CARDS);
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
                    if(id == 'stat') {
                        name = whatName.toUpperCase();
                        name = key != undefined ? key.toUpperCase() + ' ' + name : name;
                        let symbol = (typeof value === 'number' && value > 0) ? '+' : '';
                        name = value == 'double' ? 'Double ' + name : name;
                        key = key != undefined ? key : 'stat';
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
                            if (modifiers.hasOwnProperty(att)) {
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
                            what = from;
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
        return actionsDesc;
    }

    function buildTradesDescription(trades) {
        let tradesDesc = '';
        if(trades != undefined) {
            if(trades.length > 0) {
                tradesDesc += '<div class="desc-item desc-trade">Trades for ';
                for(let e = 0; e < trades.length; e++) {
                    let thisCard = util.getCardById(trades[e], ALL_CARDS);
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
        let addableCards = getAddableCards(tier, type, false, game.toExclude);
        if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate' || legendary) {
            addableCards = getAddableCards('legendary', type, false, game.toExclude); // there are currently no legendary addable cards
            if(addableCards.length == 0) addableCards = getAddableCards('rare', type, false, game.toExclude);
            game.legendaryChance = 0;
        } else if(game.mapType == 'arena' || rare) {
            addableCards = getAddableCards('rare', type, false, game.toExclude);
            let rareDecrease = game.floor;
            game.rareChance -= rareDecrease;
            if(game.rareChance < 0) game.rareChance = 0;
        } else if(uncommon) {
            addableCards = getAddableCards('uncommon', type, false, game.toExclude);
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

    function shouldDraw(combatDeck, cardPlayed) {
        let spaceAvailable = true;
        let numCards = cardPlayed ? 10 : 9;
        if(combatDeck.handCards.length > numCards) spaceAvailable = false;
        return spaceAvailable;
    }

    function shuffleDeck(combatDeck) {
        combatDeck.drawCards = util.shuffle(combatDeck.discardCards);
        combatDeck.discardCards = [];
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

        if(!shouldDraw(combatDeck, cardPlayed)) {
            return false;
        }

        if(!canDraw(combatDeck)) {
            shuffleDeck(combatDeck);
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
                // we use > 10 because the played card hasn't been discarded yet
                if(combatDeck.handCards.length > 10) {
                    combatDeck.discardCards.push(thisCard);
                } else {
                    combatDeck.handCards.push(thisCard);
                    util.appendCard(thisCard, '.player-cards', playable + retain + destroyable + discardable);
                    if(!ignoreSpeed) player.speed.current -= 1;
                }

                combatDeck.drawCards = combatDeck.drawCards.filter(i => i.guid !== thisCard.guid);

            }

            if(player.speed.current == 0 || combatDeck.handCards.length == 10) $('.draw-card, .draw-all').addClass('disabled');

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
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
            }
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
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
            }
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
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
            }
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
            Deck().addCard(guid); // TODO: after changing how transmuteCards function works, this probably doesn't work anymore. needs testing.
        } else {
            if(thisCard == undefined || thisCard == '' || thisCard == null || thisCard == false) {
                alert('Failed to add card to combatDeck.' + to);
            } else {
                combatDeck[to].push(thisCard);
            }
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
                    //if(util.chance(50)) { // used to be 50% chance to vanish but changed to always vanish
                        ephemeral = true;
                    //}
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
        if(card == undefined) return;
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
        if(card == undefined) return;
        if(!skipDead) {
            if(game.playsounds) sounds.play('removeCard');
            combatDeck.deadCards.push(card);
        }
        combatDeck.handCards = combatDeck.handCards.filter(i => i.guid !== card.guid);
        util.removeCardByGuid(card.guid, 'destroyed');
    }

    function transmuteCards(combatDeck, deck, player) {
        let permanent = false;
        for(let i = 0; i < game.toTransmute.length; i++) {
            let possibleCards = getAddableCards().filter(j => j.addable == true && j.id !== game.toTransmute[i].id && j.tier !== 'legendary');
            let transmutedCard = util.randFromArray(possibleCards);
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

    function addCard(add, combatDeck, part, player, shards = [], guid = false, playedCard = true, modifiers = {}) {
        let addCard = ALL_CARDS.find(({ id }) => id === add);
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
                copiedCard[key] = modifiers[key];
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
                Deck().attachShard(copiedCard, shards[i]);
                //game.toShow.push(copiedCard); // this is redundant because the card being added is already being shown - this would show it double
            }
        }

        let fullHand = playedCard == false ? 9 : 10;

        // cards added to draw pile should always be put in a random position
        if(part == 'drawCards') {
            combatDeck[part].splice((combatDeck[part].length+1) * Math.random() | 0, 0, copiedCard);
        } else {
            if(part == 'handCards' && combatDeck.handCards.length > fullHand) {
                combatDeck.discardCards.push(copiedCard);
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
        updateCardPlayability(player, combatDeck);

        Deck().showModifiedCards(combatDeck, player, true);

    }

    function initCard(card, modifiers = {}) {
        //let copiedCard = JSON.parse(JSON.stringify(card)); // necessary to create a deep copy
        let copiedCard = $.extend(true, {}, card);
        copiedCard.guid = util.randString();

        // process modifiers
        for (var key in modifiers) {
            if (modifiers.hasOwnProperty(key)) {
                copiedCard[key] = modifiers[key];
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
        incrementExpiredCards,
        addCard,
        initCard,
        updateCardPlayability
    };

}



