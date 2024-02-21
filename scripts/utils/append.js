import { shuffle, setTooltips } from "./index.js";

const appendMonster = (monster, id) => {
	$(`<div class="monster ${monster.id} ${monster.breed}" data-id="${id}" data-guid="${monster.guid}" data-tier="${monster.tier}">
        <div class="monster-stats">${monster.statsDom}</div>
        <div class="sprite"></div>
        <div class="combat-log">
            <div class="dmg-taken" data-amount="0"></div>
            <div class="armor-lost" data-amount="0"></div>
            <div class="health-gained" data-amount="0"></div>
            <div class="health-lost" data-amount="0"></div>
            <div class="status-text"></div>
        </div>
        <div class="monster-health creature-health">
            <div class="health-amount">
                <div class="armor-amount">
                    <div class="armor-number"></div>
                </div>
                <div class="health-number"></div>
            </div>
            <div class="block-amount">
                <div class="block-number">${monster.block}</div>
            </div>
        </div>
        <div class="status-bar"></div>
    </div>`)
		.appendTo(".monster-panel")
		.hide()
		.fadeIn(1500);

	setTooltips(".monster-panel");
};

const appendTreasure = (treasure, to) => {
	let trigger = "";
	if (treasure.trigger.counter > -1) {
		trigger = `<span class="counter">${treasure.trigger.counter}</span>`;
	}

	$(`<div class="treasure tooltip ${treasure.id}"
            style="background-position: ${treasure.x * 1.5}px ${treasure.y * 1.5}px;"
            data-id="${treasure.id}"
            data-powertip='<span class="highlight">${treasure.name}:</span><br />${treasure.desc}'>
            ${trigger}
            <div class="treasure-courage tooltip" data-amount="${treasure.courage}" data-powertip="Courage coins">
                ${treasure.courage}
            </div>
        </div>`).appendTo(to);

	setTooltips(to);
};

const appendCandy = (candy, to, clickable) => {
	let css = "trashable ";
	if (clickable) css += "clickable ";
	css += candy.target != "" ? "targeted " : "";

	$(`<div class="candy tooltip ${css} ${candy.id}"
            style="background-position: ${candy.x * 1.25}px ${candy.y * 1.25}px;"
            data-id="${candy.id}"
            data-guid="${candy.guid}"
            data-powertip='<span class="highlight">${candy.name}:</span><br />${candy.desc}'>
        <div class="candy-courage tooltip" data-amount="${candy.courage}" data-powertip="Courage coins">
            ${candy.courage}
        </div>
    </div>`).appendTo(to);

	setTooltips(to);
};

const appendOption = (option, to, quest) => {
	let desc = option.desc != undefined ? ` (${option.desc})` : "";
	$(
		`<div class="button" data-option="${option.id}" data-quest="${quest}">${option.name}${desc}</div>`
	).appendTo(to);

	setTooltips(to);
};

const appendStartingBonuses = () => {
	let options = shuffle(game.startingOptions);
	for (let i = 0; i < 4; i++) {
		// TODO: reset this to 4
		let att = options[i].att;
		let amount = options[i].amount;
		let key = options[i].key;
		let name = options[i].name;
		let entity = options[i].entity;
		let action = options[i].action;
		let attDom = att != undefined ? ` data-att="${att}"` : "";
		let amountDom = amount != undefined ? ` data-amount="${amount}"` : "";
		let keyDom = key != undefined ? ` data-key="${key}"` : "";
		let entityDom = entity != undefined ? ` data-entity="${entity}"` : "";
		let actionDom = action != undefined ? ` data-action="${action}"` : "";
		$(
			`<div class="button" ${attDom} ${amountDom} ${keyDom} ${entityDom} ${actionDom}>${name}</div>`
		).appendTo(".starting-options");
	}
	setTooltips(".starting-options");
};

const appendBoosterPacks = () => {
	let packs = game.boosterPacks;
	for (let i = 0; i < packs.length; i++) {
		$(`
        <div class="pack-button tooltip" data-pack="${packs[i]}" data-powertip="View cards in this booster pack">
            <span>${packs[i]} Pack</span>
        </div>`).appendTo(".starting-booster-packs");
	}
	setTooltips(".starting-booster-packs");
};

const appendShard = (shard, to) => {
    let desc = `<span class="${shard.id}">${shard.name}</span> shard. Permanently attach this to a card with an empty shard slot`;
    $(`<div class='shard tooltip ${shard.id}' data-id='${shard.id}' data-powertip='${desc}'></div>`).appendTo(to);
    setTooltips(to);
}


const appendEssence = (essence, to) => {
    let desc = `<span class="${essence}">${essence}</span>`;
    $(`<div class='essence tooltip ${essence}' data-id='${essence}' data-powertip='Increases your ${desc} essence'></div>`).appendTo(to);
    setTooltips(to);
}


const appendConfirm = (card, to) => {
	$(`<div class="button play-card tooltip" data-powertip="Or you can click an identical card to combine them." data-guid="${card.guid}">Play This Card</div>`)
		.appendTo(to);

	setTooltips(to);
}

export {
	appendMonster,
	appendTreasure,
	appendCandy,
	appendOption,
	appendStartingBonuses,
	appendBoosterPacks,
	appendShard,
	appendEssence,
	appendConfirm,
};
