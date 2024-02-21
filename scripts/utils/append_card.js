import getCardAttribute from "../cards/utils/get_card_attribute.js";
import buildCardSlots from "./build_card_slots.js";
import { setTooltips } from "./tooltips.js";

export const createBooleanAttributeDom = (card, attribute, label, description) => {
    const value = getCardAttribute(card, attribute);
    if (value) {
        const tip = `<span class="highlight">${label}:</span> ${description}`;
        return `<div class="${attribute} tooltip" data-powertip='${tip}'><span></span></div>`;
    }
    return "";
};

export const createAttributeDom = (card, attribute, label, singularText, pluralText) => {
    const value = getCardAttribute(card, attribute);
    if (value > -1) {
        const plural = value === 1 ? singularText : pluralText;
        const tip = `<span class="highlight">${label}:</span> ${plural}`;
        return `<div class="card-${attribute} tooltip" data-powertip='${tip}'>
                    <span class="${attribute} amount" data-amount="${value}">${value}</span>
                </div>`;
    }
    return "";
};

const appendCard = (card, to, cssClass = "") => {
    if (!card) return;
    const slots = buildCardSlots(card);

    const mana = getCardAttribute(card, "mana");
    const manaDom = `<div class="card-mana tooltip" data-powertip='<span class="highlight">Mana:</span> energy cost to play this card'>
                        <span class="mana amount" data-amount="${mana}">${mana}</span>
                    </div>`;

    const age = getCardAttribute(card, "age");
    const ageDom = createAttributeDom(card, "age", "Age", "Card has been retained for 1 turn this combat", "Card has been retained for " + age + " turns this combat");
    const useDom = createAttributeDom(card, "use", "Use", "Number of times this card can be used before vanishing", "");
    const expireDom = createAttributeDom(card, "expire", "Expire", "Number of turns this card remains in your deck before vanishing", "");
    const lingerDom = createAttributeDom(card, "linger", "Linger", "Number of times this card can be played before it leaves your hand", "");

    const vanishDom = createBooleanAttributeDom(card, "vanish", "Vanish", "Becomes a dead card when played");
    const retainDom = createBooleanAttributeDom(card, "retain", "Retain", "Does not discard at the end of your turn");
    const ephemeralDom = createBooleanAttributeDom(card, "ephemeral", "Ephemeral", "Becomes a dead card if drawn but not played");
    const breakableDom = createBooleanAttributeDom(card, "breakable", "Breakable", "When used up, card is permanently removed from your deck");

    const combinable = card.combine ? " combinable" : "";
    const combinableDom = combinable !== "" ?
        `<div class="combinable tooltip" data-powertip='<span class="highlight">Combinable:</span> When in hand, this card can be combined with another identical card to create a new more powerful card.'>
            <span></span>
        </div>` : "";

    const unaddable = !getCardAttribute(card, "addable");
    const unaddableTip = unaddable
        ? `<span class="highlight">Unaddable:</span> This card is not available in card reward screens or the market`
        : "";

    let unaddableDom = unaddable
        ? `<div class="unaddable tooltip" data-powertip='${unaddableTip}'><span></span></div>`
        : "";
    // maybe this is too much info and unnecessary for player to know?
	unaddableDom = "";

    const naturalDom = createBooleanAttributeDom(card, "natural", "Natural", "This card starts on the top of your draw pile each combat");
    const auraDom = createBooleanAttributeDom(card, "aura", "Aura", "This card starts in your hand each combat");
    const sparkleDom = createBooleanAttributeDom(card, "sparkle", "Sparkle", "This card starts in your hand each combat");
    const shimmerDom = createBooleanAttributeDom(card, "shimmer", "Shimmer", "This card starts in your hand each combat");
    const tradeDom = createBooleanAttributeDom(card, "trade", "Trade", "This card can be traded away at the end of each combat");
    const weaponDom = createBooleanAttributeDom(card, "weapon", "Weapon", "This card can be used to attack enemies in combat");
    const aoeDom = createBooleanAttributeDom(card, "aoe", "AoE", "This card can be used to attack all enemies in combat");


    // Add more createBooleanAttributeDom calls for aura, shimmer, sparkle, trade, weapon, and aoe if needed

    const unplayable = card.playable ? "" : " unplayable";
    const tooltipClass = slots !== "" ? " tooltip" : "";
    const tooltip = slots !== "" ? card.slotDesc : "";
    const pack = card.pack ? ` ${card.pack}-pack` : "";

    $(`<div class='card-wrapper drawing'>
        <div class='card ${card.tier}${unplayable}${combinable}${pack} ${card.type} ${cssClass}' id='card-${card.id}' data-id='${card.id}' data-guid='${card.guid}' data-powertip='${tooltip}'>
            <div class='card-image'></div>
            <div class='card-frame'></div>
            <div class='card-type'>${card.type}</div>
            <div class='card-rarity'></div>${manaDom}${ageDom}
            <div class='bubbles-left'>${useDom}${expireDom}${lingerDom}</div>
            <div class='bubbles-right'>${vanishDom}${retainDom}${ephemeralDom}${breakableDom}${combinableDom}${auraDom}${sparkleDom}${shimmerDom}${tradeDom}${weaponDom}${aoeDom}${unaddableDom}${naturalDom}</div>
            <div class='name'>${card.name}</div>
            <div class='desc'><div class='desc-inner'>${card.desc}</div></div>
            <div class='slots${tooltipClass}' data-powertip='${tooltip}'>${slots}</div>
            <div class='card-courage tooltip' data-amount='${card.courage}' data-powertip='Courage coins'>${card.courage}</div>
        </div>
    </div>`).appendTo(to)
        .delay(1)
        .queue(function () {
            $(this).removeClass("drawing").dequeue();
        });

    setTooltips(to);
};

export default appendCard;