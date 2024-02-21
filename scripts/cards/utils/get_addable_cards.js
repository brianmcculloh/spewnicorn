import { ALL_CARDS } from '../index.js';

const cards = ALL_CARDS;

export default function getAddableCards(tier = false, type = false, pack = false, exclude = []) {
    const game = window.game;
    let items = cards;
    if(tier && type) {
        items = items.filter(i => i.tier == tier && i.type == type);
    } else if(tier) {
        items = items.filter(i => i.tier == tier);
    } else if(type) {
        items = items.filter(i => i.type == type);
    }
    if(pack) {
        items = items.filter(i => i.pack == pack);
    } else {
        items = items.filter(i => i.pack == 'basic' || i.pack == game.boosterPack);
    }
    items = items.filter(i => i.addable == true);
    items = items.filter(i => !exclude.includes(i.id));
    return items;
}