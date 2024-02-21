export default function buildTriggerDescription (trigger, desc) {
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