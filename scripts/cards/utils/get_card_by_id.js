export default function getCardById (add, allCards) {
    if (allCards.cards == undefined) {
        return allCards.find(({ id }) => id === add);
    } else {
        return allCards.cards.find(({ id }) => id === add);
    }
}