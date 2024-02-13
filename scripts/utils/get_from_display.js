export default function getFromDisplay (text) {
    const displayMap = {
        handCards: "hand cards",
        drawCards: "draw pile",
        discardCards: "discard pile",
        deadCards: "dead cards",
        allCards: "all cards"
    };

    return displayMap[text] || text;
}
