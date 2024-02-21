import getAllCards from './get_all_cards.js';
import getTotalCards from './get_total_cards.js';
import appendCard from '../../utils/append_card.js';

export default function buildLibrary(util) {
    for(let i = 0; i < getTotalCards(); i++) {
        appendCard(getAllCards()[i], '.library-panel .cards');
    }
}