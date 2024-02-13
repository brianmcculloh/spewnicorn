import { ALL_CARDS } from '../index.js';

const cards = ALL_CARDS;

export default function getWeapons() {
    let weapons = cards.filter(i => i.weapon == true);

    if(weapons.length == 0) {
        weapons = false;
    }

    return weapons;
}