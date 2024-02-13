import { getCardById, ALL_CARDS } from '../cards/index.js';

import getFromDisplay from './get_from_display.js';

export default function buildActionsDescription(actions, behaviorDesc) {
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
                let whatCard = getCardById(what, ALL_CARDS);
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
                    to = to != undefined ? ' from ' + getFromDisplay(to) : '';
                } else {
                    to = to != undefined ? ' to ' + getFromDisplay(to) : '';
                }
                select = select != undefined ? ' ' + select : '';
                select = select == -1 ? ' all' : select;
                type = type != undefined ? ' ' + type : '';
                tier = tier != undefined ? ' ' + tier : '';
                from = from != undefined ? ' ' + getFromDisplay(from) : '';
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