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
// create cyrb128 state based on specified seed
//const gameseed = "bananas"; // manually set seed here
const gameseed = (Math.random() + 1).toString(36).substring(2);
$('.game-seed span').html(gameseed);
const seed = cyrb128(gameseed);
const rand = mulberry32(seed[0]);

export default class Util {
    constructor() {
        this.rand = rand;
        this.game = window.game;
    }
    isTouchDevice() {
        return 'ontouchstart' in window // works on most browsers 
            || window.navigator.msMaxTouchPoints > 0; // works on ie10
    }
    randDecimal() {
        return this.rand();
    }
    randIntFromInterval(threshold) {
        return Math.floor(this.rand() * (10 - threshold + 1) + threshold)
    }
    randFromRange(min, max) {
        return Math.round(this.rand() * (max - min) + min);
    }
    chance(percent) {
        let d = this.rand();
        return d <= (percent / 100);
    }
    monsterNumChance(initial = 0, increase = 10) {
        return (Math.round(game.floor / game.monsterGroup) * increase) + initial;
    }
    randFromArray(arr) {
        let item = arr[Math.floor(this.rand() * arr.length)];
        return item;
    }
    randArrayIndex(arr) {
        return Math.floor(this.rand() * arr.length);
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
    appendCard(card, to, cssClass = '') {
        if(!card) return;
        let slots = util.buildCardSlots(card);

        let mana = util.getCardAttribute(card, 'mana');
        let manaDom = '';
        manaDom = '<div class="card-mana"><span class="mana amount" data-amount="' + mana + '">' + mana + '</span></div>';

        let age = util.getCardAttribute(card, 'age');
        let ageDom = '';
        let ageTip = '';
        let plural = '';
        if(age > -1) {
            plural = age == 1 ? '' : 's';
            ageTip = "<span class='highlight'>Age:</span> Card has been retained for " + age + " turn" + plural + " this combat";
            ageDom += '<div class="card-age tooltip" data-powertip="' + ageTip + '"><span class="age amount" data-amount="' + age + '">' + age + '</span></div>';
        }

        let use = util.getCardAttribute(card, 'use');
        let useDom = '';
        let useTip = '';
        if(use > 0) {
            plural = use == 1 ? '' : 's';
            useTip = "<span class='highlight'>Use:</span> Can be used " + use + " time" + plural + " before vanishing";
            useDom += '<span class="amount use tooltip" data-powertip="' + useTip + '" data-amount="' + use + '">' + use + '</span>';
        }

        let expire = util.getCardAttribute(card, 'expire');
        let expireDom = '';
        let expireTip = '';
        if(expire > 0) {
            plural = expire == 1 ? '' : 's';
            expireTip = "<span class='highlight'>Expire:</span> Vanishes after " + expire + " turn" + plural;
            expireDom += '<span class="amount expire tooltip" data-powertip="' + expireTip + '" data-amount="' + expire + '">' + expire + '</span>';
        }

        let linger = util.getCardAttribute(card, 'linger');
        let lingerDom = '';
        let lingerTip = '';
        if(linger > 0) {
            plural = linger == 1 ? '' : 's';
            lingerTip = "<span class='highlight'>Linger:</span> Remains in hand for " + linger + " use" + plural;
            lingerDom += '<span class="amount linger tooltip" data-powertip="' + lingerTip + '" data-amount="' + linger + '">' + linger + '</span>';
        }

        let vanish = util.getCardAttribute(card, 'vanish');
        let vanishDom = '';
        let vanishTip = '';
        if(vanish) {
            vanishTip = "<span class='highlight'>Vanish:</span> Becomes a dead card when played";
            vanishDom += '<div class="vanish tooltip" data-powertip="' + vanishTip + '"><span></span></div>';
        }

        let retain = util.getCardAttribute(card, 'retain');
        let retainDom = '';
        let retainTip = '';
        if(retain) {
            retainTip = "<span class='highlight'>Retain:</span> Does not discard at the end of your turn";
            retainDom += '<div class="retain tooltip" data-powertip="' + retainTip + '"><span></span></div>';
        }

        let ephemeral = util.getCardAttribute(card, 'ephemeral');
        let ephemeralDom = '';
        let ephemeralTip = '';
        if(ephemeral) {
            ephemeralTip = "<span class='highlight'>Ephemeral:</span> Becomes a dead card if drawn but not played";
            ephemeralDom += '<div class="ephemeral tooltip" data-powertip="' + ephemeralTip + '"><span></span></div>';
        }

        let breakable = util.getCardAttribute(card, 'breakable');
        let breakableDom = '';
        let breakableTip = '';
        if(breakable) {
            breakableTip = "<span class='highlight'>Breakable:</span> When used up, card is permanently removed from your deck";
            breakableDom += '<div class="breakable tooltip" data-powertip="' + breakableTip + '"><span></span></div>';
        }

        let pack = util.getCardAttribute(card, 'pack');
        let packDom = '';
        let packTip = '';
        if(pack) {
            if(pack != 'basic') {
                packTip = "From the <span class='highlight'>" + pack + "</span> Pack";
                packDom += '<div class="pack tooltip" data-powertip="' + packTip + '"><span></span></div>';
            }
        }
        
        let unplayable = card.playable ? '' : ' unplayable';
        let combinable = card.combine ? ' combinable' : '';
        let addable = card.addable ? ' addable' : ' unaddable';
        let tooltipClass = slots != '' ? ' tooltip' : '';
        let tooltip = slots != '' ? card.slotDesc : '';
        pack = card.pack ? ' ' + card.pack + '-pack' : '';
        $("<div class='card-wrapper drawing'><div class='card " + card.tier + unplayable + combinable + pack + " " + card.type + " " + cssClass + "' id='card-" + card.id + "' data-id='" + card.id + "' data-guid='" + card.guid + "' data-powertip='" + tooltip + "'><div class='card-image'></div><div class='card-frame'></div><div class='card-type'>" + card.type + "</div><div class='card-rarity'></div>" + manaDom + ageDom + "<div class='bubbles-left'>" + useDom + expireDom + lingerDom + "</div><div class='bubbles-right'>" + vanishDom + retainDom + ephemeralDom + breakableDom + "</div><div class='bubbles-bottom-left'>" + packDom + "</div><div class='name'>" + card.name + "</div><div class='desc'><div class='desc-inner'>" + card.desc + "</div></div><div class='slots" + tooltipClass + "' data-powertip='" + tooltip + "'>" + slots + "</div><div class='card-courage' data-amount='" + card.courage + "'>" + card.courage + "</div></div></div>")
            .appendTo(to)
            .delay(1)
            .queue(function() {
                $(this).removeClass('drawing').dequeue();
            });
            this.setTooltips(to);
    }
    animateShowCards(elem) {
        $('.show-cards').addClass('shown');
        elem.appendTo('.show-cards')
            .delay(1000)
            .queue(function() {
                $(this).addClass('disappearing')
                .delay(500)
                .queue(function() {
                    $('.show-cards').removeClass('shown');
                    $(this).remove().dequeue();
                }).dequeue();
            });
    }
    appendMonster(monster, id) {
        $('<div class="monster ' + monster.id + '" data-id="' + id + '" data-guid="' + monster.guid + '"><div class="monster-stats">' + monster.statsDom + '</div><div class="sprite"></div><div class="combat-log"><div class="dmg-taken" data-amount="0"></div><div class="armor-lost" data-amount="0"></div><div class="health-gained" data-amount="0"></div><div class="health-lost" data-amount="0"></div></div><div class="monster-health creature-health"><div class="health-amount"><div class="armor-amount"><div class="armor-number"></div></div><div class="health-number"></div></div><div class="block-amount"><div class="block-number">' + monster.block + '</div></div></div><div class="status-bar"></div></div>')
            .appendTo('.monster-panel')
            .hide()
            .fadeIn(1500);
            this.setTooltips('.monster-panel');
    }
    appendTreasure(treasure, to) {
        let trigger = '';
        if(treasure.trigger.counter > -1) {
            trigger = "<span class='counter'>" + treasure.trigger.counter + "</span>";
        }
        let treasureName = '<span class="highlight">' + treasure.name + ':</span>';
        $("<div class='treasure tooltip " + treasure.id + "' style='background-position:" + (treasure.x * 1.5) + "px " + (treasure.y * 1.5) + "px;' data-id='" + treasure.id + "' data-powertip='" + treasureName + "<br />" + treasure.desc + "'>" + trigger + "<div class='treasure-courage' data-amount='" + treasure.courage + "'>" + treasure.courage + "</div></div>")
            .appendTo(to);
            this.setTooltips(to);
    }
    appendCandy(candy, to, clickable) {
        let css = 'trashable ';
        if(clickable) css += 'clickable ';
        css += candy.target != '' ? 'targeted ' : '';
        let candyName = '<span class="highlight">' + candy.name + ':</span>';
        $("<div class='candy tooltip " + css + candy.id + "' style='background-position:" + (candy.x * 1.25) + "px " + (candy.y * 1.25) + "px;' data-id='" + candy.id + "' data-guid='" + candy.guid + "' data-powertip='" + candyName + "<br />" + candy.desc + "'><div class='candy-courage' data-amount='" + candy.courage + "'>" + candy.courage + "</div></div>")
            .appendTo(to);
            this.setTooltips(to);
    }
    appendOption(option, to, quest) {
        let desc = option.desc != undefined ? ' (' + option.desc + ')' : '';
        $('<div class="button" data-option="' + option.id + '" data-quest="' + quest + '">' + option.name + desc + '</div>')
            .appendTo(to);
            this.setTooltips(to);
    }
    appendStartingBonuses() {
        let options = this.shuffle(game.startingOptions);
        for(let i = 0; i < 4; i++) {
            let att = options[i].att;
            let amount = options[i].amount;
            let key = options[i].key;
            let name = options[i].name;
            let entity = options[i].entity;
            let action = options[i].action;
            let attDom = att != undefined ? ' data-att="' + att + '"' : '';
            let amountDom = amount != undefined ? ' data-amount="' + amount + '"' : '';
            let keyDom = key != undefined ? ' data-key="' + key + '"' : '';
            let entityDom = entity != undefined ? ' data-entity="' + entity + '"' : '';
            let actionDom = action != undefined ? ' data-action="' + action + '"' : '';
            $('<div class="button"' + attDom + amountDom + keyDom + entityDom + actionDom + '>' + name + '</div>')
                .appendTo('.starting-options');
        }
        this.setTooltips('.starting-options');
    }
    appendBoosterPacks() {
        let packs = game.boosterPacks;
        for(let i = 0; i < packs.length; i++) {
            $('<div class="pack-button tooltip" data-pack="' + packs[i] + '" data-powertip="View cards in this booster pack"><span>' + packs[i] + ' Pack</span></div>')
                .appendTo('.starting-booster-packs');
        }
        this.setTooltips('.starting-booster-packs');
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
            this.setTooltips(to);
    }
    appendEssence(essence, to) {
        let desc = '<span class="' + essence + '">' + essence + '</span>';
        $("<div class='essence tooltip " + essence + "' data-id='" + essence + "' data-powertip='Increases your " + desc + " essence'></div>")
            .appendTo(to);
            this.setTooltips(to);
    }
    appendConfirm(card, to) {
        $('<div class="button play-card" data-guid="' + card.guid + '">Play This Card</div>')
            .appendTo(to);
            this.setTooltips(to);
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
                .delay(1000)
                .queue(function() {
                    $(this).remove().dequeue();
                });
            break;
        }
        
    }
    removeMonster(guid) {
        $('.monster[data-guid=' + guid + ']').addClass('dead').removeClass('clickable');
    }
    getCardAttribute(card, attribute, type = false) {

        let data = '';

        // draw/discard/destroy/combine values
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
                if(this.getShardNum(card, 'frost') > 0) {
                    if(card.iceShardUpgrades[type] != undefined) {
                        if(card.iceShardUpgrades[type][attribute] != undefined) {
                            data = card.iceShardUpgrades[type][attribute];
                        }
                    }
                }
                if(this.getShardNum(card, 'flame') > 0) {
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
                    if(this.getShardNum(card, 'frost') > 1) {
                        if(card.iceShardUpgrades[type] != undefined) {
                            if(card.iceShardUpgrades[type][attribute + '_2'] != undefined) {
                                data = card.iceShardUpgrades[type][attribute + '_2'];
                            }
                        }
                    } 
                    if(this.getShardNum(card, 'flame') > 1) {
                        if(card.fireShardUpgrades[type] != undefined) {
                            if(card.fireShardUpgrades[type][attribute + '_2'] != undefined) {
                                data = card.fireShardUpgrades[type][attribute + '_2'];
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
                if(card.shardUpgrades[attribute] != undefined && !isNaN(card.shardUpgrades[attribute])) {
                    data = card.shardUpgrades[attribute];
                } 
                // overwrite with specific shard values
                if(this.getShardNum(card, 'frost') > 0) {
                    if(card.iceShardUpgrades[attribute] != undefined && !isNaN(card.iceShardUpgrades[attribute])) {
                        data = card.iceShardUpgrades[attribute];
                    }
                }
                if(this.getShardNum(card, 'flame') > 0) {
                    if(card.fireShardUpgrades[attribute] != undefined && !isNaN(card.fireShardUpgrades[attribute])) {
                        data = card.fireShardUpgrades[attribute];
                    }
                }

                // multiple shards
                if(card.shards.length > 1) {
                    // start with both shards values
                    if(card.bothShardUpgrades != undefined) {
                        if(card.bothShardUpgrades[attribute] != undefined && !isNaN(card.bothShardUpgrades[attribute])) {
                            data = card.bothShardUpgrades[attribute];
                        }
                    } 
                    // overwrite with specific shard values
                    if(this.getShardNum(card, 'frost') > 1) {
                        if(card.iceShardUpgrades != undefined) {
                            if(card.iceShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.iceShardUpgrades[attribute + '_2'])) {
                                data = card.iceShardUpgrades[attribute + '_2'];
                            }
                        }
                    } 
                    if(this.getShardNum(card, 'flame') > 1) {
                        if(card.fireShardUpgrades != undefined) {
                            if(card.fireShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.fireShardUpgrades[attribute + '_2'])) {
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
                } 
                if(shard == 'flame_2') {
                    if(card.fireShardUpgrades[type] != undefined) {
                        if(card.fireShardUpgrades[type][attribute + '_2'] != undefined) {
                            data = card.fireShardUpgrades[type][attribute + '_2'];
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
            this.getCardAttribute(card, 'blk').length > 0 ||
            this.getCardAttribute(card, 'armor').length > 0 ||
            this.getCardAttribute(card, 'magic').length > 0 ||
            this.getCardAttribute(card, 'effects').length > 0 ||
            this.getCardAttribute(card, 'abilities').length > 0 ||
            this.getCardAttribute(card, 'actions').length > 0
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
                const result = this.getQuestSubOptions(quest.options[i], option);
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
        return allCards.find(({ guid }) => guid === add);
    }
    getDomCardByGuid(guid) {
        return $('.card[data-guid=' + guid + ']');
    }
    getDomCardById(id) {
        return $('.card[data-id=' + id + ']');
    }
    getCardFromPile(card, pile) {
        return pile.find(({ guid }) => guid === card.guid);
    }
    getStatPercentage(x, y) {
        return Math.round(((x / y) + Number.EPSILON) * 100).toFixed(0);
    }
    pickAWinningItem(data) {
        let winner = this.rand();
        let threshold = 0;
        for (let i = 0; i < data.length; i++) {
            threshold += parseFloat(data[i].p);
            if (threshold > winner) {
                return i;
            }
        }
    }
    weightedRandom(options) {
        var i;
    
        var weights = [];
    
        for (i = 0; i < options.length; i++)
            weights[i] = options[i].rarity + (weights[i - 1] || 0);
        
        var random = this.rand() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;
        
        return options[i];
    }
    wait(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, ms)
        });
    }
    updateEssencePercentage(essence) {
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
        let threshold = game.aggroThresholds[player.aggro.level];
        let previousThreshold = game.aggroThresholds[player.aggro.level - 1];
        if(previousThreshold == undefined) previousThreshold = 0;
        let percentage = ((player.aggro.current - previousThreshold) / (threshold - previousThreshold)) * 100;
        if(player.aggro.level >= (game.aggroThresholds.length)) {
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
    }
    setTooltips(elem) {
        $(elem).find('.tooltip').powerTip({
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
                abilityCard: [22991, 1959],
                magicCard: [24950, 1359],
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

                // specific effects
                effectSolid: [66714, 1000],

                // specific cards
                rainbowOrb: [26309, 1828],

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