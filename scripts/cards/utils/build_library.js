import getAllCards from './get_all_cards.js';
import getTotalCards from './get_total_cards.js';

export default function buildLibrary(util) {
    for(let i = 0; i < getTotalCards(); i++) {
        util.appendCard(getAllCards()[i], '.library-panel .cards');
    }
}