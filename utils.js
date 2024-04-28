// provide the seed for the random number generator
// seeding functionality source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// random hash
function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}
// random number
function mulberry32(a) {
    return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export default class Util {
    constructor() {
        this.seed = cyrb128('bananas');
        this.rand = mulberry32(this.seed[0]);
        this.game = window.game;
    }
    setGameSeed(gameseed) {
        util.seed = cyrb128(gameseed);
        util.rand = mulberry32(util.seed[0]);
    }
    isTouchDevice() {
        return 'ontouchstart' in window // works on most browsers 
            || window.navigator.msMaxTouchPoints > 0; // works on ie10
    }
    randDecimal() {
        return util.rand();
    }
    randIntFromInterval(threshold) {
        return Math.floor(util.rand() * (10 - threshold + 1) + threshold)
    }
    randFromRange(min, max) {
        return Math.round(util.rand() * (max - min) + min);
    }
    chance(percent) {
        let d = util.rand();
        return d <= (percent / 100);
    }
    monsterNumChance(initial = 0, increase = 10) {
        return (Math.round(game.floor / game.monsterGroup) * increase) + initial;
    }
    randFromArray(arr) {
        let item = arr[Math.floor(util.rand() * arr.length)];
        return item;
    }
    randArrayIndex(arr) {
        return Math.floor(util.rand() * arr.length);
    }
    randString() {
        return (Math.random() + 1).toString(36).substring(2);
    }
    shuffle(arr) {
        let currentIndex = arr.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }
      
        return arr;
    }
    sort(arr) {
        return arr.sort((a, b) => a.name.localeCompare(b.name))
    }
    buildCardSlots(card) {
        let slots = '';
        for(let i = 0; i < card.slots; i++) {
            let shard = '';
            let filled = '';
            let multiple = card.slots > 1 ? ' multiple' : '';
            if(card.shards[i] != undefined) {
                shard = '<span class="shard ' + card.shards[i] + '" data-id="' + card.shards[i] + '"></span>';
                filled = ' filled';
            }
            slots += '<div class="slot' + multiple + filled + '" data-id="' + i + '">' + shard + '</div>';
        }
        return slots;
    }
    /* this has been refactored below
    appendCard(card, to, cssClass = '') {
        if(!card) return;
        let slots = '';
        slots = util.buildCardSlots(card);

        let mana = util.getCardAttribute(card, 'mana');
        let manaDom = '';
        let manaTip = "<span class='highlight'>Mana:</span> energy cost to play this card";
        manaDom = '<div class="card-mana tooltip" data-powertip="' + manaTip + '"><span class="mana amount" data-amount="' + mana + '">' + mana + '</span></div>';

        let age = -1;
        age = util.getCardAttribute(card, 'age');
        let ageDom = '';
        let ageTip = '';
        let plural = '';
        if(age > -1) {
            plural = age == 1 ? '' : 's';
            ageTip = "<span class='highlight'>Age:</span> Card has been retained for " + age + " turn" + plural + " this combat";
            ageDom += '<div class="card-age tooltip" data-powertip="' + ageTip + '"><span class="age amount" data-amount="' + age + '">' + age + '</span></div>';
        }

        let use = -1;
        use = util.getCardAttribute(card, 'use');
        let useDom = '';
        let useTip = '';
        if(use > -1) {
            plural = use == 1 ? '' : 's';
            useTip = "<span class='highlight'>Use:</span> Number of times this card can be used before vanishing";
            useDom += '<span class="amount use tooltip" data-powertip="' + useTip + '" data-amount="' + use + '">' + use + '</span>';
        }

        let expire = -1;
        expire = util.getCardAttribute(card, 'expire');
        let expireDom = '';
        let expireTip = '';
        if(expire > -1) {
            plural = expire == 1 ? '' : 's';
            expireTip = "<span class='highlight'>Expire:</span> Number of turns this card remains in your deck before vanishing"
            expireDom += '<span class="amount expire tooltip" data-powertip="' + expireTip + '" data-amount="' + expire + '">' + expire + '</span>';
        }

        let linger = -1;
        linger = util.getCardAttribute(card, 'linger');
        let lingerDom = '';
        let lingerTip = '';
        if(linger > -1) {
            plural = linger == 1 ? '' : 's';
            lingerTip = "<span class='highlight'>Linger:</span> Number of times this card can be played before it leaves your hand";
            lingerDom += '<span class="amount linger tooltip" data-powertip="' + lingerTip + '" data-amount="' + linger + '">' + linger + '</span>';
        }

        let vanish = false;
        vanish = util.getCardAttribute(card, 'vanish');
        let vanishDom = '';
        let vanishTip = '';
        if(vanish) {
            vanishTip = "<span class='highlight'>Vanish:</span> Becomes a dead card when played";
            vanishDom += '<div class="vanish tooltip" data-powertip="' + vanishTip + '"><span></span></div>';
        }

        let retain = false;
        retain = util.getCardAttribute(card, 'retain');
        let retainDom = '';
        let retainTip = '';
        if(retain) {
            retainTip = "<span class='highlight'>Retain:</span> Does not discard at the end of your turn";
            retainDom += '<div class="retain tooltip" data-powertip="' + retainTip + '"><span></span></div>';
        }

        let ephemeral = false;
        ephemeral = util.getCardAttribute(card, 'ephemeral');
        let ephemeralDom = '';
        let ephemeralTip = '';
        if(ephemeral) {
            ephemeralTip = "<span class='highlight'>Ephemeral:</span> Becomes a dead card if drawn but not played";
            ephemeralDom += '<div class="ephemeral tooltip" data-powertip="' + ephemeralTip + '"><span></span></div>';
        }

        let breakable = false;
        breakable = util.getCardAttribute(card, 'breakable');
        let breakableDom = '';
        let breakableTip = '';
        if(breakable) {
            breakableTip = "<span class='highlight'>Breakable:</span> When used up, card is permanently removed from your deck";
            breakableDom += '<div class="breakable tooltip" data-powertip="' + breakableTip + '"><span></span></div>';
        }

        let combinable = card.combine ? ' combinable' : '';
        let combinableDom = '';
        let combinableTip = '';
        if(combinable != '') {
            combinableTip = "<span class='highlight'>Combinable:</span> When in hand, this card can be combined with another identical card to create a new more powerful card.";
            combinableDom += '<div class="combinable tooltip" data-powertip="' + combinableTip + '"><span></span></div>';
        }

        let unaddable = false;
        unaddable = !util.getCardAttribute(card, 'addable');
        let unaddableDom = '';
        let unaddableTip = '';
        if(unaddable) {
            unaddableTip = "<span class='highlight'>Unaddable:</span> This card is not available in card reward screens or the market";
            unaddableDom += '<div class="unaddable tooltip" data-powertip="' + unaddableTip + '"><span></span></div>';
        }
        // maybe this is too much info and unnecessary for player to know?
        unaddableDom = '';

        let natural = false;
        natural = util.getCardAttribute(card, 'natural');
        let naturalDom = '';
        let naturalTip = '';
        if(natural) {
            naturalTip = "<span class='highlight'>Natural:</span> This card starts on the top of your draw pile each combat";
            naturalDom += '<div class="natural tooltip" data-powertip="' + naturalTip + '"><span></span></div>';
        }

        let aura = false;
        aura = util.getCardAttribute(card, 'aura');
        let auraDom = '';
        let auraTip = '';
        if(aura != '') {
            auraTip = "<span class='highlight'>Stance:</span> Triggers extra effects when in <span class='aura'>Aura</span> stance";
            auraDom += '<div class="card-stance aura-stance tooltip" data-powertip="' + auraTip + '"><span></span></div>';
        }

        let shimmer = false;
        shimmer = util.getCardAttribute(card, 'shimmer');
        let shimmerDom = '';
        let shimmerTip = '';
        if(shimmer != '') {
            shimmerTip = "<span class='highlight'>Stance:</span> Triggers extra effects when in <span class='shimmer'>Shimmer</span> stance";
            shimmerDom += '<div class="card-stance shimmer-stance tooltip" data-powertip="' + shimmerTip + '"><span></span></div>';
        }

        let sparkle = false;
        sparkle = util.getCardAttribute(card, 'sparkle');
        let sparkleDom = '';
        let sparkleTip = '';
        if(sparkle != '') {
            sparkleTip = "<span class='highlight'>Stance:</span> Triggers extra effects when in <span class='sparkle'>Sparkle</span> stance";
            sparkleDom += '<div class="card-stance sparkle-stance tooltip" data-powertip="' + sparkleTip + '"><span></span></div>';
        }

        let trade = false;
        trade = util.getCardAttribute(card, 'trade');
        let tradeDom = '';
        let tradeTip = '';
        if(trade != '') {
            tradeTip = "<span class='highlight'>Tradeable:</span> Can be traded at the market";
            tradeDom += '<div class="tradeable tooltip" data-powertip="' + tradeTip + '"><span></span></div>';
        }

        let weapon = false;
        weapon = util.getCardAttribute(card, 'weapon');
        let weaponDom = '';
        let weaponTip = '';
        if(weapon != '') {
            weaponTip = "<span class='highlight'>Weapon:</span> This is a weapon class card";
            weaponDom += '<div class="weapon tooltip" data-powertip="' + weaponTip + '"><span></span></div>';
        }

        let aoe = false;
        aoe = util.getCardAttribute(card, 'target');
        let aoeDom = '';
        let aoeTip = '';
        if(aoe == 'all') {
            aoeTip = "<span class='highlight'>AOE:</span> Targets all monsters";
            aoeDom += '<div class="aoe tooltip" data-powertip="' + aoeTip + '"><span></span></div>';
        }

        let pack = false;
        pack = util.getCardAttribute(card, 'pack');
        let packDom = '';
        let packTip = '';
        if(pack) {
            if(pack != 'basic') {
                packTip = "From the <span class='highlight'>" + pack + "</span> Pack";
                packDom += '<div class="pack tooltip" data-powertip="' + packTip + '"><span></span></div>';
            }
        }
        
        let unplayable = card.playable ? '' : ' unplayable';
        let tooltipClass = slots != '' ? ' tooltip' : '';
        let tooltip = slots != '' ? card.slotDesc : '';
        pack = card.pack ? ' ' + card.pack + '-pack' : '';
        $("<div class='card-wrapper drawing'><div class='card " + card.tier + unplayable + combinable + pack + " " + card.type + " " + cssClass + "' id='card-" + card.id + "' data-id='" + card.id + "' data-guid='" + card.guid + "' data-powertip='" + tooltip + "'><div class='card-image'></div><div class='card-frame'></div><div class='card-type'>" + card.type + "</div><div class='card-rarity'></div>" + manaDom + ageDom + "<div class='bubbles-left'>" + useDom + expireDom + lingerDom + "</div><div class='bubbles-right'>" + vanishDom + retainDom + ephemeralDom + breakableDom + combinableDom + auraDom + sparkleDom + shimmerDom + tradeDom + weaponDom + aoeDom + unaddableDom + naturalDom + "</div><div class='bubbles-bottom-left'>" + packDom + "</div><div class='name'>" + card.name + "</div><div class='desc'><div class='desc-inner'>" + card.desc + "</div></div><div class='slots" + tooltipClass + "' data-powertip='" + tooltip + "'>" + slots + "</div><div class='card-courage tooltip' data-amount='" + card.courage + "' data-powertip='Courage coins'>" + card.courage + "</div></div></div>")
            .appendTo(to)
            .delay(1)
            .queue(function() {
                $(this).removeClass('drawing').dequeue();
            });
            util.setTooltips(to);
    }
    */

    appendCard(card, to, cssClass = '') {
        if (!card) return;
    
        let cardHtml = `<div class='card-wrapper drawing'><div class='card ${card.tier}${card.playable ? '' : ' unplayable'}${card.combine ? ' combinable' : ''}${card.pack ? ' ' + card.pack + '-pack' : ''} ${card.type} ${cssClass}' id='card-${card.id}' data-id='${card.id}' data-guid='${card.guid}'>`;
    
        // Attributes that appear outside the bubbles
        const mana = util.getCardAttribute(card, 'mana');
        if (mana !== undefined && mana !== -1) { // Ensure '0' is displayed but '-1' is not
            let manaTip = "<span class='highlight'>Mana:</span> energy cost to play this card";
            cardHtml += `<div class="card-mana tooltip" data-powertip="${manaTip}"><span class="mana amount" data-amount="${mana}">${mana}</span></div>`;
        }
    
        const age = util.getCardAttribute(card, 'age');
        if (age !== undefined && age !== -1) {
            let plural = age === 1 ? '' : 's';
            let ageTip = "<span class='highlight'>Age:</span> Card has been retained for " + age + " turn" + plural + " this combat";
            cardHtml += `<div class="card-age tooltip" data-powertip="${ageTip}"><span class="age amount" data-amount="${age}">${age}</span></div>`;
        }
    
        // Bubbles-left
        cardHtml += '<div class="bubbles-left">';
        ['use', 'expire', 'linger'].forEach(attr => {
            let value = util.getCardAttribute(card, attr);
            if (value !== undefined && value !== -1) { // Ensure '0' is displayed but '-1' is not
                let plural = value === 1 ? '' : 's';
                let tip = `<span class='highlight'>${util.getAttributeDisplayName(attr)}:</span> ${util.getAttributeDescription(attr, value, plural)}`;
                cardHtml += `<span class="amount ${attr} tooltip" data-powertip="${tip}" data-amount="${value}">${value}</span>`;
            }
        });
        cardHtml += '</div>';
    
        // Bubbles-right
        cardHtml += '<div class="bubbles-right">';
        ['vanish', 'retain', 'ephemeral', 'breakable', 'combinable', 'aura', 'shimmer', 'sparkle', 'trade', 'weapon'].forEach(attr => {
            let value = util.getCardAttribute(card, attr);
            if (value && value !== -1) {
                let tip = `<span class='highlight'>${util.getAttributeDisplayName(attr)}:</span> ${util.getAttributeDescription(attr)}`;
                cardHtml += `<div class="${attr} tooltip" data-powertip="${tip}"><span></span></div>`;
            }
        });
        cardHtml += '</div>';
    
        // Finishing up the card HTML
        cardHtml += `<div class='card-image'></div><div class='card-frame'></div><div class='card-type'>${card.type}</div><div class='card-rarity'></div><div class='name'>${card.name}</div><div class='desc'><div class='desc-inner'>${card.desc}</div></div><div class='slots tooltip' data-powertip='${card.slotDesc || ''}'>${util.buildCardSlots(card)}</div><div class='card-courage tooltip' data-amount='${card.courage}' data-powertip='Courage coins'>${card.courage}</div></div></div>`;
    
        $(cardHtml).appendTo(to).delay(1).queue(function() {
            $(this).removeClass('drawing').dequeue();
        });
    
        // Initialize tooltips once after all cards are added to reduce DOM manipulation
        util.setTooltips(to);
    }     
    getAttributeDisplayName(attribute) {
        const attributeNames = {
            mana: 'Mana',
            age: 'Age',
            use: 'Use',
            expire: 'Expire',
            linger: 'Linger',
            vanish: 'Vanish',
            retain: 'Retain',
            ephemeral: 'Ephemeral',
            breakable: 'Breakable',
            combinable: 'Combinable',
            natural: 'Natural',
            aura: 'Aura',
            shimmer: 'Shimmer',
            sparkle: 'Sparkle',
            trade: 'Tradeable',
            weapon: 'Weapon',
            aoe: 'AOE'
        };
        return attributeNames[attribute] || attribute;
    };
    getAttributeDescription(attribute, value, plural) {
        const descriptions = {
            mana: `energy cost to play this card`,
            age: `Card has been retained for ${value} turn${plural} this combat`,
            use: `Number of times this card can be used before vanishing`,
            expire: `Number of turns this card remains in your deck before vanishing`,
            linger: `Number of times this card can be played before it leaves your hand`,
            vanish: `Becomes a dead card when played`,
            retain: `Does not discard at the end of your turn`,
            ephemeral: `Becomes a dead card if drawn but not played`,
            breakable: `When used up, card is permanently removed from your deck`,
            combinable: `When in hand, this card can be combined with another identical card to create a new more powerful card.`,
            natural: `This card starts on the top of your draw pile each combat`,
            aura: `Triggers extra effects when in Aura stance`,
            shimmer: `Triggers extra effects when in Shimmer stance`,
            sparkle: `Triggers extra effects when in Sparkle stance`,
            trade: `Can be traded at the market`,
            weapon: `This is a weapon class card`,
            aoe: `Targets all monsters`
        };
        return descriptions[attribute] || `Unknown attribute: ${attribute}`;
    };

    animateShowCards() {
        $('.show-cards').addClass('shown');
        $('.show-cards .card')
            .delay(1000)
            .queue(function() {
                $(this).addClass('disappearing')
                .delay(500)
                .queue(function() {
                    $('.show-cards').removeClass('shown');
                    $(this).parent().remove().dequeue();
                }).dequeue();
            });
    }
    appendMonster(monster, id) {
        $('<div class="monster ' + monster.id + ' ' + monster.breed + '" data-id="' + id + '" data-guid="' + monster.guid + '" data-tier="' + monster.tier + '"><div class="monster-stats">' + monster.statsDom + '</div><div class="sprite"></div><div class="combat-log"><div class="dmg-taken" data-amount="0"></div><div class="armor-lost" data-amount="0"></div><div class="health-gained" data-amount="0"></div><div class="health-lost" data-amount="0"></div><div class="status-text"></div></div><div class="monster-health creature-health"><div class="health-amount"><div class="armor-amount"><div class="armor-number"></div></div><div class="health-number"></div></div><div class="block-amount"><div class="block-number">' + monster.block + '</div></div></div><div class="status-bar"></div></div>')
            .appendTo('.monster-panel')
            .hide()
            .fadeIn(1500);
            util.setTooltips('.monster-panel');
    }
    appendTreasure(treasure, to) {
        let trigger = '';
        if(treasure.trigger.counter > -1) {
            trigger = "<span class='counter'>" + treasure.trigger.counter + "</span>";
        }
        let treasureName = '<span class="highlight">' + treasure.name + ':</span>';
        $("<div class='treasure tooltip " + treasure.id + "' style='background-position:" + (treasure.x * 1.5) + "px " + (treasure.y * 1.5) + "px;' data-id='" + treasure.id + "' data-powertip='" + treasureName + "<br />" + treasure.desc + "'>" + trigger + "<div class='treasure-courage tooltip' data-amount='" + treasure.courage + "' data-powertip='Courage coins'>" + treasure.courage + "</div></div>")
            .appendTo(to);
            util.setTooltips(to);
    }
    appendCandy(candy, to, clickable) {
        let css = 'trashable ';
        if(clickable) css += 'clickable ';
        css += candy.target != '' ? 'targeted ' : '';
        let candyName = '<span class="highlight">' + candy.name + ':</span>';
        $("<div class='candy tooltip " + css + candy.id + "' style='background-position:" + (candy.x * 1.25) + "px " + (candy.y * 1.25) + "px;' data-id='" + candy.id + "' data-guid='" + candy.guid + "' data-powertip='" + candyName + "<br />" + candy.desc + "'><div class='candy-courage tooltip' data-amount='" + candy.courage + "' data-powertip='Courage coins'>" + candy.courage + "</div></div>")
            .appendTo(to);
            util.setTooltips(to);
    }
    appendOption(option, to, quest) {
        let desc = option.desc != undefined ? ' (' + option.desc + ')' : '';
        $('<div class="button" data-option="' + option.id + '" data-quest="' + quest + '">' + option.name + desc + '</div>')
            .appendTo(to);
            util.setTooltips(to);
    }
    appendStartingBonuses() {
        let options = util.shuffle(game.startingOptions);
        for(let i = 0; i < 4; i++) { // TODO: reset this to 4
            let att = options[i].att;
            let amount = options[i].amount;
            let key = options[i].key;
            let name = options[i].name;
            let entity = options[i].entity;
            let action = options[i].action;
            let description = options[i].description;
            let attDom = att != undefined ? ' data-att="' + att + '"' : '';
            let amountDom = amount != undefined ? ' data-amount="' + amount + '"' : '';
            let keyDom = key != undefined ? ' data-key="' + key + '"' : '';
            let entityDom = entity != undefined ? ' data-entity="' + entity + '"' : '';
            let actionDom = action != undefined ? ' data-action="' + action + '"' : '';
            let descriptionDom = description != undefined ? ' data-powertip="' + description + '"' : '';
            $('<div class="button tooltip"' + attDom + amountDom + keyDom + entityDom + actionDom + descriptionDom + '>' + name + '</div>')
                .appendTo('.starting-options');
        }
        util.setTooltips('.starting-options');
    }
    appendBoosterPacks() {
        let packs = game.boosterPacks;
        for(let i = 0; i < packs.length; i++) {
            $('<div class="pack-button tooltip" data-pack="' + packs[i] + '" data-powertip="View cards in this booster pack"><span>' + packs[i] + ' Pack</span></div>')
                .appendTo('.starting-booster-packs');
        }
        util.setTooltips('.starting-booster-packs');
    }
    getFirstEmptyElement(selector) {
        let elem;
        $(selector).each(function() {
            if($(this).children().length == 0) {
                elem = $(this);
                return false
            }
        });
        return elem;
    }
    appendShard(shard, to) {
        let desc = '<span class="' + shard.id + '">' + shard.name + '</span> shard. Permanently attach this to a card with an empty shard slot';
        $("<div class='shard tooltip " + shard.id + "' data-id='" + shard.id + "' data-powertip='" + desc + "'></div>")
            .appendTo(to);
            util.setTooltips(to);
    }
    appendEssence(essence, to) {
        let desc = '<span class="' + essence + '">' + essence + '</span>';
        $("<div class='essence tooltip " + essence + "' data-id='" + essence + "' data-powertip='Increases your " + desc + " essence'></div>")
            .appendTo(to);
            util.setTooltips(to);
    }
    appendConfirm(card, to) {
        $('<div class="button play-card tooltip" data-powertip="Or you can click an identical card to combine them." data-guid="' + card.guid + '">Play This Card</div>')
            .appendTo(to);
            util.setTooltips(to);
    }
    removeCard(index, from) {
        $(from).children().eq(index).parent().remove();
    }
    removeCardByGuid(guid, animation = 'none') {
        switch(animation) {
            case 'none':
                $('.card[data-guid=' + guid + ']').parent().remove();
            break;
            case 'discarded':
                $('.card[data-guid=' + guid + ']').parent()
                .addClass('discarded')
                .delay(300)
                .queue(function() {
                    $(this).remove().dequeue();
                });
            break;
            case 'played':
                $('.card[data-guid=' + guid + ']').parent()
                .addClass('discarding')
                .delay(300)
                .queue(function() {
                    $(this).removeClass('discarding').addClass('discarded')
                    .delay(300)
                    .queue(function() {
                        $(this).remove().dequeue();
                    }).dequeue();
                });
            break;
            case 'destroyed':
                $('.card[data-guid=' + guid + ']').parent()
                .addClass('destroying')
                .delay(2000)
                .queue(function() {
                    $(this).remove().dequeue();
                });
            break;
            case 'replaced':
                $('.card[data-guid=' + guid + ']').parent()
                .addClass('replacing')
                .delay(2000)
                .queue(function() {
                    $(this).remove().dequeue();
                });
            break;
        }
        
    }
    removeMonster(monster) {
        if(monster.breed == 'ghost' || game.mapType == 'singularity') {
            $('.monster[data-guid=' + monster.guid + ']').addClass('hidden dead').removeClass('clickable');
        } else {
            $('.monster[data-guid=' + monster.guid + ']').addClass('dead').removeClass('clickable');
        }
    }
    hasAttribute(card, attribute) {
        if(card[attribute] == undefined || card[attribute] == false) {
            return false;
        } else {
            return true;
        }
    }
    getCardAttribute(card, attribute, type = false) {

        let data = '';

        // draw/discard/destroy/combine/stance values
        if(type) {
            if(card[type] != undefined) {
                if(card[type][attribute] != undefined) {
                    data = card[type][attribute];
                }
            }
            // overwrite with shard values
            if(card.shards.length > 0) {
                // single shard
                if(card.shardUpgrades[type] != undefined) {
                    if(card.shardUpgrades[type][attribute] != undefined) {
                        data = card.shardUpgrades[type][attribute];
                    } 
                }
                // overwrite with specific shard values
                if(util.getShardNum(card, 'frost') > 0) {
                    if(card.iceShardUpgrades[type] != undefined) {
                        if(card.iceShardUpgrades[type][attribute] != undefined) {
                            data = card.iceShardUpgrades[type][attribute];
                        }
                    }
                }
                if(util.getShardNum(card, 'flame') > 0) {
                    if(card.fireShardUpgrades[type] != undefined) {
                        if(card.fireShardUpgrades[type][attribute] != undefined) {
                            data = card.fireShardUpgrades[type][attribute];
                        }
                    }
                }

                // multiple shards
                if(card.shards.length > 1) {
                    // start with both shards values
                    if(card.bothShardUpgrades[type] != undefined) {
                        if(card.bothShardUpgrades[type][attribute] != undefined) {
                            data = card.bothShardUpgrades[type][attribute];
                        }
                    } 
                    // overwrite with specific shard values
                    if(util.getShardNum(card, 'frost') > 1) {
                        if(card.iceShardUpgrades[type] != undefined) {
                            if(card.iceShardUpgrades[type][attribute + '_2'] != undefined) {
                                data = card.iceShardUpgrades[type][attribute + '_2'];
                            }
                        }
                        if(card.iceShardUpgrades[type + '_2'] != undefined) {
                            if(card.iceShardUpgrades[type + '_2'][attribute] != undefined) {
                                data = card.iceShardUpgrades[type + '_2'][attribute];
                            }
                        }
                    } 
                    if(util.getShardNum(card, 'flame') > 1) {
                        if(card.fireShardUpgrades[type] != undefined) {
                            if(card.fireShardUpgrades[type][attribute + '_2'] != undefined) {
                                data = card.fireShardUpgrades[type][attribute + '_2'];
                            }
                        }
                        if(card.fireShardUpgrades[type + '_2'] != undefined) {
                            if(card.fireShardUpgrades[type + '_2'][attribute] != undefined) {
                                data = card.fireShardUpgrades[type + '_2'][attribute];
                            }
                        }
                    }
                }
            }

        // standard defaults
        } else {
            if(card[attribute] != undefined) {
                data = card[attribute];
            }
            // overwrite with shard values
            if(card.shards?.length > 0) {
                // single shard
                // Note: don't remember why we needed the isNaN check on all of these but it was causing any upgrade that wasn't just a single value to fail
                // so only single damage/block/armor values worked when the check was in place
                //if(card.shardUpgrades[attribute] != undefined && !isNaN(card.shardUpgrades[attribute])) {
                if(card.shardUpgrades[attribute] != undefined) {
                    data = card.shardUpgrades[attribute];
                } 
                // overwrite with specific shard values
                if(util.getShardNum(card, 'frost') > 0) {
                    //if(card.iceShardUpgrades[attribute] != undefined && !isNaN(card.iceShardUpgrades[attribute])) {
                    if(card.iceShardUpgrades[attribute] != undefined) {
                        data = card.iceShardUpgrades[attribute];
                    }
                }
                if(util.getShardNum(card, 'flame') > 0) {
                    //if(card.fireShardUpgrades[attribute] != undefined && !isNaN(card.fireShardUpgrades[attribute])) {
                    if(card.fireShardUpgrades[attribute] != undefined) {
                        data = card.fireShardUpgrades[attribute];
                    }
                }

                // multiple shards
                if(card.shards.length > 1) {
                    // start with both shards values
                    if(card.bothShardUpgrades != undefined) {
                        //if(card.bothShardUpgrades[attribute] != undefined && !isNaN(card.bothShardUpgrades[attribute])) {
                        if(card.bothShardUpgrades[attribute] != undefined) {
                            data = card.bothShardUpgrades[attribute];
                        }
                    } 
                    // overwrite with specific shard values
                    if(util.getShardNum(card, 'frost') > 1) {
                        if(card.iceShardUpgrades != undefined) {
                            //if(card.iceShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.iceShardUpgrades[attribute + '_2'])) {
                            if(card.iceShardUpgrades[attribute + '_2'] != undefined) {
                                data = card.iceShardUpgrades[attribute + '_2'];
                            }
                        }
                    } 
                    if(util.getShardNum(card, 'flame') > 1) {
                        if(card.fireShardUpgrades != undefined) {
                            //if(card.fireShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.fireShardUpgrades[attribute + '_2'])) {
                            if(card.fireShardUpgrades[attribute + '_2'] != undefined) {
                                data = card.fireShardUpgrades[attribute + '_2'];
                            }
                        }
                    }
                }
            }
        } 

        return data;

    }
    getShardAttribute(card, shard, attribute, type = false) {

        let data = '';

        // draw/discard/destroy/combine values
        if(type) {

            // single shard
            if(card.shardUpgrades[type] != undefined) {
                if(card.shardUpgrades[type][attribute] != undefined) {
                    data = card.shardUpgrades[type][attribute];
                } 
            }
            // overwrite with specific shard values
            if(shard == 'frost') {
                if(card.iceShardUpgrades[type] != undefined) {
                    if(card.iceShardUpgrades[type][attribute] != undefined) {
                        data = card.iceShardUpgrades[type][attribute];
                    }
                }
            }
            if(shard == 'flame') {
                if(card.fireShardUpgrades[type] != undefined) {
                    if(card.fireShardUpgrades[type][attribute] != undefined) {
                        data = card.fireShardUpgrades[type][attribute];
                    }
                }
            }

            // multiple shards
            if(card.shards.length > 1) {
                // start with both shards values
                if(card.bothShardUpgrades[type] != undefined) {
                    if(card.bothShardUpgrades[type][attribute] != undefined) {
                        data = card.bothShardUpgrades[type][attribute];
                    }
                } 
                // overwrite with specific shard values
                if(shard == 'frost_2') {
                    if(card.iceShardUpgrades[type] != undefined) {
                        if(card.iceShardUpgrades[type][attribute + '_2'] != undefined) {
                            data = card.iceShardUpgrades[type][attribute + '_2'];
                        }
                    }
                    if(card.iceShardUpgrades[type + '_2'] != undefined) {
                        if(card.iceShardUpgrades[type + '_2'][attribute] != undefined) {
                            data = card.iceShardUpgrades[type + '_2'][attribute];
                        }
                    }
                } 
                if(shard == 'flame_2') {
                    if(card.fireShardUpgrades[type] != undefined) {
                        if(card.fireShardUpgrades[type][attribute + '_2'] != undefined) {
                            data = card.fireShardUpgrades[type][attribute + '_2'];
                        }
                    }
                    if(card.fireShardUpgrades[type + '_2'] != undefined) {
                        if(card.fireShardUpgrades[type + '_2'][attribute] != undefined) {
                            data = card.fireShardUpgrades[type + '_2'][attribute];
                        }
                    }
                }
            }

        // standard defaults
        } else {

            // single shard
            if(card.shardUpgrades[attribute] != undefined) {
                data = card.shardUpgrades[attribute];
            } 
            // overwrite with specific shard values
            if(shard == 'frost') {
                if(card.iceShardUpgrades[attribute] != undefined) {
                    data = card.iceShardUpgrades[attribute];
                }
            }
            if(shard == 'flame') {
                if(card.fireShardUpgrades[attribute] != undefined) {
                    data = card.fireShardUpgrades[attribute];
                }
            }

            // multiple shards
            if(card.shards.length > 1) {
                // start with both shards values
                if(card.bothShardUpgrades != undefined) {
                    if(card.bothShardUpgrades[attribute] != undefined) {
                        data = card.bothShardUpgrades[attribute];
                    }
                } 
                // overwrite with specific shard values
                if(shard == 'frost_2') {
                    if(card.iceShardUpgrades != undefined) {
                        if(card.iceShardUpgrades[attribute + '_2'] != undefined) {
                            data = card.iceShardUpgrades[attribute + '_2'];
                        }
                    }
                } 
                if(shard == 'flame_2') {
                    if(card.fireShardUpgrades != undefined) {
                        if(card.fireShardUpgrades[attribute + '_2'] != undefined) {
                            data = card.fireShardUpgrades[attribute + '_2'];
                        }
                    }
                }
            }
        }       

        return data;

    }
    hasPlayAction(card) {
        let action = false;
        if( // we don't care about dmg here because that is taken care of by the dom ability to click targeted monster
            util.getCardAttribute(card, 'blk').length > 0 ||
            util.getCardAttribute(card, 'armor').length > 0 ||
            util.getCardAttribute(card, 'magic').length > 0 ||
            util.getCardAttribute(card, 'effects').length > 0 ||
            util.getCardAttribute(card, 'abilities').length > 0 ||
            util.getCardAttribute(card, 'actions').length > 0
        ) {
            action = true;
        }
        return action;
    }
    getShardNum(card, shard) {
        let num = 0;
        if(shard=='any') {
            num = card.shards.length;
        } else {
            num = card.shards.filter(i => i === shard).length;
        }
        return num;
    }
    getQuestSubOptions(quest, option) {
        //let options = quest.options.filter(i => i.id == option);
        //let subOptions = false;
        //if(options.length > 0) subOptions = options[0].options;
        if (quest.id === option) {
            return quest;
        } else if (quest.options) {
            for (let i = 0; i < quest.options.length; i++) {
                const result = util.getQuestSubOptions(quest.options[i], option);
                if (result) {
                    return result;
                }
            }
        }
        return false;

        //return subOptions;
    }
    getCardById(add, allCards) {
        if(allCards.cards == undefined) {
            return allCards.find(({ id }) => id === add);
        } else {
            return allCards.cards.find(({ id }) => id === add);
        }
    }
    getTreasureById(treasure, allTreasures) {
        return allTreasures.find(({ id }) => id === treasure);
    }
    getCandyById(candy, allCandies) {
        return allCandies.find(({ id }) => id === candy);
    }
    getCardByGuid(add, allCards) {
        let card = allCards.find(({ guid }) => guid === add);
        return card;
    }
    getDomCardByGuid(guid) {
        return $('.card[data-guid=' + guid + ']:first');
    }
    getDomCardById(id) {
        return $('.card[data-id=' + id + ']:first');
    }
    getCardFromPile(card, pile) {
        return pile.find(({ guid }) => guid === card.guid);
    }
    getStatPercentage(x, y) {
        return Math.round(((x / y) + Number.EPSILON) * 100).toFixed(0);
    }
    pickAWinningItem(data) {
        let winner = util.rand();
        let threshold = 0;
        for (let i = 0; i < data.length; i++) {
            threshold += parseFloat(data[i].p);
            if (threshold > winner) {
                return i;
            }
        }
    }
    // accepts any positive numeric value including decimals as the 'weight' value
    weightedRandom(weightedArray) {
        const totalWeight = weightedArray.reduce((sum, element) => sum + element.weight, 0);
        const randomWeight = Math.random() * totalWeight;
        let weightSum = 0;

        for (const element of weightedArray) {
            weightSum += element.weight;
            if (randomWeight < weightSum) {
                return element;
            }
        }

        // Fallback in case of unexpected issues
        return null;
    }
    wait(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, ms)
        });
    }
    async updateEssencePercentage(essence) {
        let threshold = game.essenceThresholds[player[essence].level];
        let previousThreshold = game.essenceThresholds[player[essence].level - 1];
        if(previousThreshold == undefined) previousThreshold = 0;
        let percentage = ((player[essence].current - previousThreshold) / (threshold - previousThreshold)) * 100;
        let css = '';
        if(player[essence].level > game.essences.length) {
            percentage = 100;
            css = 'capped';
        }
        $('.essence-bar.' + essence + ' .essence-bar-inner').css('width', percentage + '%');
        $('.essence-bar.' + essence).addClass(css);
    }
    updateAggroPercentage() {
        let whichThresholds = game.map == 1 ? game.aggroThresholds : game.aggroThresholds2;
        let threshold = whichThresholds[player.aggro.level];
        let previousThreshold = whichThresholds[player.aggro.level - 1];
        if(previousThreshold == undefined) previousThreshold = 0;
        let percentage = ((player.aggro.current - previousThreshold) / (threshold - previousThreshold)) * 100;
        if(player.aggro.level >= (whichThresholds.length)) {
            percentage = 100;
        }
        $('.aggro-bar .aggro-bar-inner').css('width', percentage + '%');
    }
    setInitialTooltips() {
        $('.top-bar .tooltip').powerTip({
            followMouse: true,
            placement: 's',
            offset: 40,
            fadeInTime: 50,
            fadeOutTime: 30,
            closeDelay: 100,
            intentPollInterval: 30,
            intentSensitivity: 5,
            popupClass: 'tooltip-top-bar'
        });
        $('.bottom-bar .tooltip').powerTip({
            followMouse: false,
            smartPlacement: true,
            placement: 'n',
            offset: 10,
            fadeInTime: 0,
            fadeOutTime: 0,
            closeDelay: 0,
            intentPollInterval: 0,
            intentSensitivity: 100,
            popupClass: 'tooltip-bottom-bar'
        });
        $('.bottom-bar .tooltip-right').powerTip({
            followMouse: false,
            smartPlacement: true,
            placement: 'nw',
            offset: 5,
            fadeInTime: 0,
            fadeOutTime: 0,
            closeDelay: 0,
            intentPollInterval: 0,
            intentSensitivity: 100,
            popupClass: 'tooltip-bottom-bar'
        });
        $('.magic-rainbow').powerTip({
            followMouse: true,
            offset: 5,
            fadeInTime: 50,
            fadeOutTime: 30,
            closeDelay: 100,
            intentPollInterval: 30,
            intentSensitivity: 5,
            popupClass: 'standard'
        });
    }
    setSplashTooltips() {
        $('#splash').find('.tooltip').powerTip({
            followMouse: true,
            offset: 40,
            fadeInTime: 50,
            fadeOutTime: 30,
            closeDelay: 100,
            intentPollInterval: 30,
            intentSensitivity: 5,
            popupClass: 'standard'
        });
    }
    setTooltips(elem) {
        $(elem).find('.tooltip').powerTip({
            followMouse: true,
            offset: 40,
            fadeInTime: 50,
            fadeOutTime: 30,
            closeDelay: 100,
            intentPollInterval: 30,
            intentSensitivity: 5,
            popupClass: 'standard'
        });
    }
    setTooltip(elem, cls = false) {
        if(cls) {
            $(elem).powerTip({
                followMouse: false,
                smartPlacement: true,
                placement: 'n',
                offset: 5,
                fadeInTime: 0,
                fadeOutTime: 0,
                closeDelay: 0,
                intentPollInterval: 0,
                intentSensitivity: 100,
                popupClass: cls
            });
        } else {
            $(elem).powerTip({
                followMouse: true,
                offset: 5,
                fadeInTime: 50,
                fadeOutTime: 30,
                closeDelay: 100,
                intentPollInterval: 30,
                intentSensitivity: 5,
                popupClass: 'standard'
            });
        }
        
    }
    clearTooltips() {
        $.powerTip.destroy();
        util.setTooltips('.map-inner');
	    util.setTooltips('.buttons-wrapper');
        util.setTooltips('.treasures');
        util.setTooltips('.candies');
        util.setInitialTooltips();
    }
    getFromDisplay(text) {
        if(text == 'handCards') {
            text = 'hand cards';
        } else if(text == 'drawCards') {
            text = 'draw pile';
        } else if(text == 'discardCards') {
            text = 'discard pile';
        } else if(text == 'deadCards') {
            text = 'dead cards';
        } else if(text == 'allCards') {
            text = 'all cards';
        }
        return text;
    }

    sound(f) {
        var s = false
        s = new Howl({
            src: ['audio/' + f],
            sprite: {
                arenaRewards: [0, 7839],
                rewards: [7839, 4540],
                loot: [12379, 2405],
                gainArmor: [14757, 839],
                attackCard: [15596, 280],
                loseBlock: [15876, 839],
                loseArmor: [16715, 603],
                gainBlk: [17320, 641],
                deselectCard: [17962, 517],
                startingBonus: [18479, 1521],
                viewCards: [20000, 483],
                drawCard: [20483, 136],
                doneCards: [20597, 535],
                takeDmg: [21132, 858],
                toolCard: [21990, 1000],
                magicCard: [26309, 1828],
                heal: [28135, 1991],
                clickButton: [30127, 668],
                choosePack: [31393, 3999],
                clickShard: [35392, 3000],
                selectCard: [38389, 660],
                removeCard: [39049, 2000],
                attachShard: [41049, 2341],
                buyItem: [43390, 984],
                addTreasure: [44374, 1655],
                addCandy: [46029, 1181],
                eatCandy: [47210, 1787],
                shimmerAmount: [48997, 1878],
                auraAmount: [50875, 2125],
                sparkleAmount: [53000, 1717],
                essenceLevel: [54717, 1283],
                trashCandy: [56000, 1000],
                aggroLevel: [57000, 1959],
                frolic: [58959, 2768],
                applyEffect: [61722, 917],
                applyAbility: [61722, 917],
                hex: [62639, 1418],
                vex: [64057, 961],
                death: [65020, 1694],
                activateRainbow: [66719, 1694],
                muddleMagic: [75243, 1476],
                combineCards: [76719, 1000],
                transmuteCard: [77719, 873],
                focus: [84874, 2365],
                grow: [99425, 2138],
                statUp: [101563, 1238],
                statDown: [102801, 920],
                courage: [146724, 2755],
                jester: [22990, 1000],
                trade: [320737, 1408],
                gate: [330767, 10837],

                available: [23990, 964],
                

                // specific cards
                magic1: [78592, 6282],
                magic2: [68413, 1831],
                magic3: [70244, 2523],
                magic4: [72767, 1512],
                magic5: [74279, 964],
                magic6: [87239, 2264],
                magic7: [89503, 3436],
                magic8: [92939, 4064],
                magic9: [97003, 2422],
                magic10: [103721, 2612],
                magic11: [106333, 2775],
                magic12: [109108, 3487],
                magic13: [112595, 3708],
                magic14: [116303, 1079],
                magic15: [118382, 1171],
                magic16: [119553, 2616],
                magic17: [122169, 4513],
                magic18: [276253, 3424],
                magic19: [281880, 7332],
                magic20: [289212, 5873],
                magic21: [295085, 7500],
                magic22: [302585, 6212],
                magic23: [276253, 5627],
                magic24: [308797, 4591],

                attack1: [126682, 876],
                attack2: [146236, 488],
                attack3: [128024, 1979],
                attack4: [130003, 1810],
                attack5: [131813, 2188],
                attack6: [134001, 1006],
                attack7: [135007, 785],
                attack8: [135792, 1339],
                attack9: [137131, 1350],
                attack10: [138481, 1242],
                attack11: [139723, 754],
                attack12: [140477, 1242],
                attack13: [141719, 2003],
                attack14: [143722, 998],
                attack15: [144720, 1520],
                attack16: [149479, 2727],
                attack17: [152206, 581],
                attack18: [241940, 1791],
                attack19: [243731, 5152],
                attack20: [248883, 1595],
                attack21: [250478, 2504],
                attack22: [252982, 3296],
                attack23: [313375, 1104],

                tool1: [152787, 3615],
                tool2: [156402, 1836],
                tool3: [158238, 3179],
                tool4: [161417, 973],
                tool5: [162390, 2610],
                tool6: [165000, 2481],
                tool7: [167481, 1186],
                tool8: [168667, 1408],
                tool9: [170075, 2163],
                tool10: [172238, 871],
                tool11: [174000, 1483],
                tool12: [175483, 951],
                tool13: [176434, 902],
                tool14: [177336, 810],
                tool15: [178146, 622],
                tool16: [178768, 1064],
                tool17: [179832, 1649],
                tool18: [181481, 1570],
                tool19: [183051, 2249],
                tool20: [185300, 1420],
                tool21: [186720, 2114],
                tool22: [188834, 2245],
                tool23: [191079, 2000],
                tool24: [256278, 3202],
                tool25: [259480, 2164],
                tool26: [261644, 2387],
                tool27: [264031, 3998],
                tool29: [268029, 4850],
                tool28: [272829, 3424],


                // specific effects
                effect1: [193079, 1163],
                effect2: [194242, 437], 
                effect3: [194679, 802],
                effect4: [195481, 540],
                effect5: [196021, 885],
                effect6: [196906, 1001],
                effect7: [197907, 745],
                effect8: [198652, 921],
                effect9: [199573, 669],
                effect10: [200242, 670],
                effect11: [200912, 569],
                effect12: [201481, 747],
                effect13: [202228, 597],
                effect14: [202825, 411],
                effect15: [203236, 722],
                effect16: [203958, 2284],
                effect17: [206242, 1997],
                effect18: [208239, 280],
                effect19: [208519, 2699],
                effect20: [211218, 2263],
                effect21: [213481, 1519],
                effect22: [215000, 1000],
                effect23: [216000, 2000],
                effect24: [218000, 2000],
                effect25: [220000, 624],
                effect26: [220624, 427],
                effect27: [221051, 2436],
                effect28: [223487, 1951],
                effect29: [225438, 2385],
                effect30: [227823, 1041],
                effect31: [228863, 1274],
                effect32: [230137, 1863],
                effect33: [232000, 1725],
                effect34: [233725, 1758],
                effect35: [235483, 1999],
                effect36: [237482, 2212],
                effect37: [239694, 2246],
                effect38: [314485, 994],
                effect39: [315480, 3391],
                effect40: [318870, 1882],
                effect41: [322149, 3162],
                effect42: [325311, 2970],
                effect43: [328285, 2469],
                effect44: [341604, 1331],




                /* USED SOUND FILES (not in chronological order)

                04_Fire_explosion_04_medium
                04_Step_sand_01
                08_Step_rock_02
                03_Heal_04
                13_Atk_buff_01
                33_Light_02
                39_Ultima_02s
                40_Ultima_03
                44_Sleep_01
                68_Die_01
                83_Whip_woosh_2
                085_save_game_02
                084_save_game_01
                50_Poison_05
                Encounter_2
                GP_End_Turn_1 
                GB_Begin_Tuen_1
                GP_Select_1
                GP_Heal_1
                Quest_Accepted
                Success_1
                Quest_Clear
                rewards
                Game_Exit
                Minigame_Start
                Failure
                Round_End
                Save_Point
                Drums_1

                fnt_ui_page_flipping_01
                fnt_ui_page_flipping_02
                fnt_ui_page_flipping_06
                fnt_ui_use_wood_03
                fnt_ui_equip_metal_06
                fnt_ui_magic_book_page_flip_02
                fnt_ui_magic_book_page_flip_11
                
                Fantasy_UI (34)
                Fantasy_UI (35)
                Fantasy_UI (42)
                Fantasy_UI (47)
                Fantasy_UI (55)

                SkywardHero_UI (1)
                SkywardHero_UI (4)
                SkywardHero_UI (8)
                SkywardHero_UI (13)
                SkywardHero_UI (18)
                SkywardHero_UI (19)
                SkywardHero_UI (21)
                SkywardHero_UI (23)
                SkywardHero_UI (26)
                SkywardHero_UI (33)
                SkywardHero_UI (35)
                SkywardHero_UI (38)
                SkywardHero_UI (39)

                ESM_Fantasy_Game_...
                Magic_Ice_Instant_Cast_Spell_A
                Magic_Ice_Instant_Cast_Spell_C
                Magic_Ice_Long_Cast_Spell_B
                Magic_Fire_Instant_Cast_Spell_D
                Magic_Fire_Long_Spell_A
                Magic_Airy_Sting_Accent
                Magic_Ancient_Metallic_Sting
                Magic_Arcane_Long_Cast_Spell_B
                Magic_Arcane_Spell_B
                Magic_Molten_Lava_Hit_Fire_Gas_Burn
                Magic_Earth_Instant_Cast_Spell_A
                Magic_Shadow_Instant_Cast_Spell_A
                Magic_Shadow_Instant_Cast_Spell_B
                Magic_Shadow_Instant_Cast_Spell_C
                Magic_Lightning_Spell_A
                Magic_Lightnint_Instant_Cast_Spell_C
                Magic_Key_Pick_Up_1
                Magic_Key_Pick_Up_3
                Magic_Debuff_Spell_A
                Magic_Debuff_Spell_B
                Magic_Debuff_Spell_D
                Magic_Ring_Pickup_B
                Organic_Magic_Poof_Buff_Hit
                Organic_Magic_Poof_Buff_Hit_2
                Organic_Magic_Poof_Buff_Hit_6
                Organic_Magic_Accept_Quest_Drum_Impact_1
                Organic_Coin_Collect_B
                Organic_Item_Slide_2_Drag_Friction
                Organic_Collect_Spell
                Potion_Bottle_Cork_Pop_Magic
                Dark_Transition_2_Lightning
                Dark_Transition_3_Airy
                Dark_Conjure_3

                Item_Collect_Dark_Magic_A
                Item_Collect_Dark_Magic_C
                Item_Collect_Dark_Magic_D
                Item_Collect_Dark_Magic_E
                Item_Collect_Dark_Magic_F
                Item_Collect_Dark_Magic_I
                Item_Collect_Dark_Magic_J
                Item_Collect_Dark_Magic_K
                Item_Collect_Magic_A
                Item_Collect_Magic_D
                Item_Collect_Magic_F
                Item_Collect_Herbs_Organic_Grass
                Item_Pick_Up_Magic_Metal_Armor
                Item_Pickup_Metal_Armor
                Item_Pick_Up_Leather_Armor
                Item_Paper_Scroll_B
                Item_Magic_Pickup_2_Spell
                Item_Magic_Trap_Weapon
                Item_Wooden_Chest_Open_or_Close_Medium_Small
                Item_Crafting_Axe_B
                Item_Crafting_Sword_B
                Item_Crafting_Wooden_Shield_B_Build_Work_Shop_Repair
                Item_Potion_Bottle_A_Jar
                Item_Crafting_Magic_Armor_Build
                Item_Crafting_Bow_A_Build
                Item_Totem_Scroll_C
                Pick_Up_Orb_Touch_1
                Skill_Knife_Throw_B
                Skill_Target_Weakness_Weapon
                Skill_Axe_Throw_B
                Skill_Rain_Of_Arrows
                Large_Gate_Close_2_Medium_Small
                Felflame_1_Fire_Flame
                
                Material_Stone_Touch_7_Magic
                Material_Stone_Pickup_3_Magic
                Material_Stone_Magic_Debris_Hit_4
                Material_Stone_Medium_Slide_Magic
                Material_Stone_Light_Hit_1_Magic
                Material_Wood_Crate_Break_3_Magic
                Material_Wood_Lever_5_Switch
                Material_Liquid_Pick_Up_2_Jug_Magic
                Material_Liquid_Bubble_Pick_Up_1_Magic
                Material_Liquid_Deep_Hit_1_Magic
                Material_Liquid_Pick_Up_1_Magic
                Material_Water_Bubble_Potion_3
                Material_Harvest_2_Wet_Magic
                Potion_Bottle_Cork_Pop_Magic
                Crafting_UI_Tab_Button_6
                Crafting_UI_Tab_Button_7
                Crafting_Select_Ore_Metal_Impact
                Crafting_Select_Gem_Metal_Metallic_Ring
                Craft_Armor_or_Weapon_1
                Smash_Pot_B_Break
                Book_Page_Turn_1_Paper

                Attack_Fire_Arrow
                Attack_Crossbow_E
                Blade_Draw_1

                Arcane_Missile_1_Accent

                UI_Metal_Armory_Tab_1_Dry
                UI_Earth_Select_Spell_Cast
                UI_Arcane_Confirm_Spell_Cast
                UI_Shadow_Confirm_Spell_Cast
                UI_Arcane_Select_Spell_Cast
                UI_Ice_Select_Spell_Cast

                Backpack_Open_Close_Inventory
                Creature_Longer_Low_Growl
                Creature_Growl_Long_High_B
                Creature_Crow_Distant_Monster
                Gear_Inventory_UI_3
                Inventory_Material_Stone_UI_3
                Inventory_Material_Stone_Touch_4
                Weapon_Impact_Weapon
                Weapon_Impact_Blood_Weapon
                Chest_Unlock_Small_2_Switch
                Lock_Gate_Medium_Small
                Open_Gate_Switch_User_Interface
                UI_Magic_Confirm_A_Spell_Cast
                Loading_Gear_Crafting_Table




                */

            },
        });
        return s;
    }
    music(f, v = 1) {
        var m = false;
        m = new Howl({
            src: ['audio/' + f],
            loop: true,
            volume: v
        });
        return m;
    }
    
}

const util = new Util();