import { ALL_CARDS } from '../index.js';

const cards = ALL_CARDS;

export default function getTotalCards() {
    return cards?.length;
}