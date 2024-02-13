export default function buildEffectsDescription(effects, behaviorDesc, thisCard) {
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