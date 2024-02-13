import { getCardById } from '../cards/index.js';

export default function buildTradesDescription(trades) {
    let tradesDesc = '';
    if(trades != undefined) {
        if(trades.length > 0) {
            tradesDesc += '<div class="desc-item desc-trade">Trades for ';
            for(let e = 0; e < trades.length; e++) {
                let thisCard = getCardById(trades[e], ALL_CARDS);
                //if(thisCard == undefined) console.log(trades[e]);
                tradesDesc += thisCard.name + ', ';
            }
            tradesDesc = tradesDesc.slice(0, -2);
            tradesDesc += '</div>';
        }
    }
    return tradesDesc;
}