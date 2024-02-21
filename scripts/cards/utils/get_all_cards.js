import { ALL_CARDS, buildDescription, buildSlotsDescription } from '../index.js';
import { randString } from '../../utils/index.js';

const cards = ALL_CARDS;

export default function getAllCards() {
    let items = cards;
    for(let i = 0; i < items.length; i++) {
        items[i].guid = randString();

        // standard description
        let desc = buildDescription(items[i]);
        items[i].desc = desc;

        // slots description
        let slotDesc = buildSlotsDescription(items[i]);
        items[i].slotDesc = slotDesc;
    }
    return items;
}