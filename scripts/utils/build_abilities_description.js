//{ability: 'explode', turns: 1, enabled: true}
export default function buildAbilitiesDescription(abilities, behaviorDesc, thisCard) {
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