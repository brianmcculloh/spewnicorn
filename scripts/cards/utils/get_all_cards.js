import { ALL_CARDS } from '../index.js';

const cards = ALL_CARDS;

export default function getAllCards() {
    let items = cards;
    for(let i = 0; i < items.length; i++) {
        items[i].guid = util.randString();

        // standard description
        let desc = Deck().buildDescription(items[i]);
        items[i].desc = desc;

        // slots description
        let slotDesc = Deck().buildSlotsDescription(items[i]);
        items[i].slotDesc = slotDesc;
    }
    return items;
}