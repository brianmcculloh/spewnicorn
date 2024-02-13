import {Util, getAddableCards, ALL_CARDS } from './scripts/index.js';

import { randArrayIndex, randFromArray, randString } from './scripts/utils/index.js';
import { buildDescription, buildSlotsDescription, getCardAttribute, getCardById } from './scripts/cards/index.js';


const util = new Util();

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
        //attachShard(getCardById('blitzkrieg', this.cards), 'flame');
        //attachShard(getCardById('blitzkrieg', this.cards), 'flame');


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
            copiedCard.guid = randString();
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
                        let cost = getCardAttribute(thisCard, 'mana');
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
            let natural = getCardAttribute(combatDeck.drawCards[i], 'natural');
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
                let index = randArrayIndex(combatDeck.drawCards);
                let naturalCard = getNaturalCard(combatDeck, player);
                thisCard = naturalCard ? naturalCard : combatDeck.drawCards[index];
                thisCard.drawn = true;
                let thisRetain = getCardAttribute(thisCard, 'retain');
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
        let thisRetain = getCardAttribute(thisCard, 'retain');
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
        let thisRetain = getCardAttribute(thisCard, 'retain');
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
        let thisRetain = getCardAttribute(thisCard, 'retain');
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
        let thisRetain = getCardAttribute(thisCard, 'retain');
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
            let thisRetain = getCardAttribute(thisCard, 'retain');
            let ephemeral = getCardAttribute(thisCard, 'ephemeral');;
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
            let transmutedCard = randFromArray(possibleCards);
            //transmutedCard = JSON.parse(JSON.stringify(transmutedCard)); // necessary to create a deep copy
            transmutedCard = $.extend(true, {}, transmutedCard);
            transmutedCard.guid = randString();

            // standard description
            let desc = buildDescription(transmutedCard);
            transmutedCard.desc = desc;

            // slots description
            let slotDesc = buildSlotsDescription(transmutedCard);
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
            let expire = getCardAttribute(thisCard, 'expire');
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
            let expire = getCardAttribute(thisCard, 'expire');
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
            let expire = getCardAttribute(thisCard, 'expire');
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
            let expire = getCardAttribute(thisCard, 'expire');
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
            copiedCard.guid = randString();
        }

        // process modifiers
        for (var key in modifiers) {
            if (modifiers.hasOwnProperty(key)) {
                copiedCard[key] = modifiers[key];
            }
        }

        // standard description
        let desc = buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = buildSlotsDescription(copiedCard);
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
                        let thisRetain = getCardAttribute(copiedCard, 'retain');
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
        copiedCard.guid = randString();

        // process modifiers
        for (var key in modifiers) {
            if (modifiers.hasOwnProperty(key)) {
                copiedCard[key] = modifiers[key];
            }
        }

        // standard description
        let desc = buildDescription(copiedCard);
        copiedCard.desc = desc;

        // slots description
        let slotDesc = buildSlotsDescription(copiedCard);
        copiedCard.slotDesc = slotDesc;

        return copiedCard;
    }

    function updateCardPlayability(player, combatDeck) {

        for(let i = 0; i < combatDeck.handCards.length; i++) {
            let cost = getCardAttribute(combatDeck.handCards[i], 'mana');
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



