import {
	getShardAttribute,
	buildTriggerDescription,
	buildAbilitiesDescription,
	buildActionsDescription,
	buildEffectsDescription,
	buildTradesDescription,
} from "../../utils/index.js";
import { getCardAttribute, 	getAllCards,
	getTotalCards, } from "../index.js";
import appendCard from '../../utils/append_card.js';


const addShards = (card, shard) => {
    if (shard == "flame") {
		card.shards.push("flame");
	} else if (shard == "frost") {
		card.shards.push("frost");
	} else if (shard == "flame_2") {
		card.shards.push("flame");
		card.shards.push("flame");
	} else if (shard == "frost_2") {
		card.shards.push("frost");
		card.shards.push("frost");
	} else if (shard == "both") {
		card.shards.push("flame");
		card.shards.push("frost");
	}

    return card;
}


export const buildLibrary = (util) => {
    for(let i = 0; i < getTotalCards(); i++) {
        appendCard(getAllCards()[i], '.library-panel .cards');
    }
}

export const buildSlotsDescription = (card) => {
    let desc = '';
    let frostDesc = buildDescription(card, 'frost');
    let flameDesc = buildDescription(card, 'flame');
    let frost2Desc = buildDescription(card, 'frost_2');
    let flame2Desc = buildDescription(card, 'flame_2');
    let bothDesc = buildDescription(card, 'both');
    if(frostDesc == flameDesc) {
        desc += frostDesc != '' ? '<div><span class="either">Shard</span>: ' + frostDesc : '</div>';
    } else {
        desc += frostDesc != '' ? '<div><span class="frost">Frost Shard</span>: ' + frostDesc : '</div>';
        desc += flameDesc != '' ? '<div><span class="flame">Flame Shard</span>: ' + flameDesc : '</div>';
    }
    if(card.slots > 1) {
        if(bothDesc == flame2Desc || bothDesc == frost2Desc) {
            //desc += bothDesc != '' ? '<div><span class="frost">Frost Shard</span> + <span class="flame">Flame Shard</span>: ' + bothDesc : '</div>';
            desc += bothDesc != '' ? '<div><span class="either">Double Shard</span>: ' + bothDesc : '</div>';
        }
        if(bothDesc != frost2Desc) {
            desc += frost2Desc != '' ? '<div><span class="frost">Double Frost Shard</span>: ' + frost2Desc : '</div>';
        }
        if(bothDesc != flame2Desc) {
            desc += flame2Desc != '' ? '<div><span class="flame">Double Flame Shard</span>: ' + flame2Desc : '</div>';
        }
    }
    return desc;
}

export const buildDescription = (thisCard, shard = false) => {
	let desc = "";
	// let's just use a copy of the passed card since we're modifying it with shards for description purposes only
	//let card = JSON.parse(JSON.stringify(thisCard)); // necessary to create a deep copy
	let card = $.extend(true, {}, thisCard);

	card = addShards(card, shard);

	// description override
	let override = shard
		? getShardAttribute(card, shard, "descOverride")
		: getCardAttribute(card, "descOverride");
	if (override != "" && override != false) {
		desc = override;
		return desc;
	}

	// custom description preface
	let additionalDesc = shard
		? getShardAttribute(card, shard, "additionalDesc")
		: getCardAttribute(card, "additionalDesc");
	desc += additionalDesc;

	// trigger
	let trigger = shard
		? getShardAttribute(card, shard, "trigger")
		: getCardAttribute(card, "trigger");
	let triggerDesc = buildTriggerDescription(trigger, desc);
	desc += triggerDesc;

	/*let natural = shard ? getShardAttribute(card, shard, 'natural') : getCardAttribute(card, 'natural');
    if(natural) {
        desc += '<div class="desc-item"><span class="highlight">Natural</span></div>';
    }*/ // we're using a bubble indicator for this now

	let blk = shard ? getShardAttribute(card, shard, "blk") : getCardAttribute(card, "blk");
	if (blk.length > 0) {
		desc += '<div class="desc-item">Gain ';
		for (let i = 0; i < blk.length; i++) {
			desc += '<span class="amount blk" data-amount="' + blk[i] + '">' + blk[i] + "</span>, ";
		}
		desc = desc.slice(0, -2);
		if (card.mana == "?") {
			desc += " block ? times</div>";
		} else {
			desc += " block</div>";
		}
	}

	let armor = shard ? getShardAttribute(card, shard, "armor") : getCardAttribute(card, "armor");
	if (armor.length > 0) {
		desc += '<div class="desc-item">Gain ';
		for (let i = 0; i < armor.length; i++) {
			desc +=
				'<span class="amount armor" data-amount="' +
				armor[i] +
				'">' +
				armor[i] +
				"</span>, ";
		}
		desc = desc.slice(0, -2);
		if (card.mana == "?") {
			desc += " armor ? times</div>";
		} else {
			desc += " armor</div>";
		}
	}

	let dmg = shard ? getShardAttribute(card, shard, "dmg") : getCardAttribute(card, "dmg");
	if (dmg.length > 0) {
		desc += '<div class="desc-item desc-dmg">Deal ';
		for (let i = 0; i < dmg.length; i++) {
			desc += '<span class="amount dmg" data-amount="' + dmg[i] + '">' + dmg[i] + "</span>, ";
		}
		desc = desc.slice(0, -2);
		if (card.mana == "?") {
			desc += " damage ? times</div>";
		} else {
			desc += " damage</div>";
		}
	}

	let magicDesc = "";
	let magic = shard ? getShardAttribute(card, shard, "magic") : getCardAttribute(card, "magic");
	if (magic.length > 0) {
		magicDesc += '<div class="desc-item">Summon ';
		for (let i = 0; i < magic.length; i++) {
			magicDesc +=
				'<span class="amount magic" data-amount="' +
				magic[i].amount +
				'">' +
				magic[i].amount +
				"</span> " +
				magic[i].type +
				", ";
		}
		magicDesc = magicDesc.slice(0, -2);
		if (card.mana == "?") {
			magicDesc += " magic ? times</div>";
		} else {
			magicDesc += " magic</div>";
		}
	}
	desc += magicDesc;

	// effects
	let effects = shard
		? getShardAttribute(card, shard, "effects")
		: getCardAttribute(card, "effects");
	let effectsDesc = buildEffectsDescription(effects, desc, thisCard);
	desc += effectsDesc;

	// abilities
	let abilities = shard
		? getShardAttribute(card, shard, "abilities")
		: getCardAttribute(card, "abilities");
	let abilitiesDesc = buildAbilitiesDescription(abilities, desc, thisCard);
	desc += abilitiesDesc;

	// actions
	let actions = shard
		? getShardAttribute(card, shard, "actions")
		: getCardAttribute(card, "actions");
	let actionsDesc = buildActionsDescription(actions, desc);
	desc += actionsDesc;

	// shard-only descriptions
	if (shard) {
		let mana = getShardAttribute(card, shard, "mana");
		if (mana !== undefined && mana !== "") {
			desc += '<div class="desc-item">Mana: ' + mana + "</div>";
		}
		let age = getShardAttribute(card, shard, "age");
		if (age > 0) {
			desc +=
				'<div class="desc-item"><span class="highlight">Age:</span> ' +
				age +
				"</span></div>";
		}
		let use = getShardAttribute(card, shard, "use");
		if (use > 0) {
			desc += '<div class="desc-item"><span class="highlight">Use:</span> ' + use + "</div>";
		}
		let expire = getShardAttribute(card, shard, "expire");
		if (expire > 0) {
			desc +=
				'<div class="desc-item"><span class="highlight">Expire:</span> ' +
				expire +
				"</div>";
		}
		let linger = getShardAttribute(card, shard, "linger");
		if (linger > 0) {
			desc +=
				'<div class="desc-item"><span class="highlight">Linger:</span> ' +
				linger +
				"</div>";
		}
		let vanish = getShardAttribute(card, shard, "vanish");
		if (vanish !== "") {
			let prefix = vanish ? "" : "Lose ";
			desc +=
				'<div class="desc-item">' + prefix + '<span class="highlight">Vanish</span></div>';
		}
		let retain = getShardAttribute(card, shard, "retain");
		if (retain !== "") {
			let prefix = retain ? "" : "Lose ";
			desc +=
				'<div class="desc-item">' + prefix + '<span class="highlight">Retain</span></div>';
		}
		let ephemeral = getShardAttribute(card, shard, "ephemeral");
		if (ephemeral !== "") {
			let prefix = ephemeral ? "" : "Lose ";
			desc +=
				'<div class="desc-item">' +
				prefix +
				'<span class="highlight">Ephemeral</span></div>';
		}
		let breakable = getShardAttribute(card, shard, "breakable");
		if (breakable !== "") {
			let prefix = breakable ? "" : "Lose ";
			desc +=
				'<div class="desc-item">' +
				prefix +
				'<span class="highlight">Breakable</span></div>';
		}
		let natural = getShardAttribute(card, shard, "natural");
		if (natural !== "") {
			let prefix = natural ? "" : "Lose ";
			desc +=
				'<div class="desc-item">' + prefix + '<span class="highlight">Natural</span></div>';
		}
	} else {
		// does not apply to shard
		// trades
		let trades = getCardAttribute(card, "trade");
		let tradesDesc = buildTradesDescription(trades, desc);
		desc += tradesDesc;
	}

	// behaviors
	let behaviors = [
		["combine", "Combined"],
		["draw", "Drawn"],
		["discard", "Discarded"],
		["destroy", "Destroyed"],
	];
	let behaviorsDesc = "";
	for (let i = 0; i < behaviors.length; i++) {
		let noun = behaviors[i][0];
		let verb = behaviors[i][1];
		let behavior = shard ? getShardAttribute(card, shard, noun) : getCardAttribute(card, noun);
		let behaviorsPrefix = '<div class="desc-item desc-behavior">When ' + verb + ": ";
		let behaviorDesc = "";
		if (behavior) {
			let dmgDesc = "";
			let dmg = shard
				? getShardAttribute(card, shard, "dmg", noun)
				: getCardAttribute(card, "dmg", noun);
			let target = shard
				? getShardAttribute(card, shard, "target", noun)
				: getCardAttribute(card, "target", noun);
			if (dmg.length > 0) {
				if (target == "player") {
					dmgDesc += '<div class="desc-item desc-sub-item">Take ';
				} else {
					dmgDesc += '<div class="desc-item desc-sub-item">Deal ';
				}
				for (let i = 0; i < dmg.length; i++) {
					dmgDesc +=
						'<span class="amount dmg" data-amount="' +
						dmg[i] +
						'">' +
						dmg[i] +
						"</span>, ";
				}
				dmgDesc = dmgDesc.slice(0, -2);
				dmgDesc += " damage</div>";
			}
			behaviorDesc += dmgDesc;
			let blkDesc = "";
			let blk = shard
				? getShardAttribute(card, shard, "blk", noun)
				: getCardAttribute(card, "blk", noun);
			if (blk.length > 0) {
				blkDesc += '<div class="desc-item desc-sub-item">Gain ';
				for (let i = 0; i < blk.length; i++) {
					blkDesc +=
						'<span class="amount blk" data-amount="' +
						blk[i] +
						'">' +
						blk[i] +
						"</span>, ";
				}
				blkDesc = blkDesc.slice(0, -2);
				blkDesc += " block</div>";
			}
			behaviorDesc += blkDesc;
			let armorDesc = "";
			let armor = shard
				? getShardAttribute(card, shard, "armor", noun)
				: getCardAttribute(card, "armor", noun);
			if (armor.length > 0) {
				armorDesc += '<div class="desc-item desc-sub-item">Gain ';
				for (let i = 0; i < armor.length; i++) {
					armorDesc +=
						'<span class="amount armor" data-amount="' +
						armor[i] +
						'">' +
						armor[i] +
						"</span>, ";
				}
				armorDesc = armorDesc.slice(0, -2);
				armorDesc += " armor</div>";
			}
			behaviorDesc += armorDesc;
			let magicDesc = "";
			let magic = shard
				? getShardAttribute(card, shard, "magic", noun)
				: getCardAttribute(card, "magic", noun);
			if (magic.length > 0) {
				magicDesc += '<div class="desc-item desc-sub-item">Summon ';
				for (let i = 0; i < magic.length; i++) {
					magicDesc +=
						'<span class="amount magic" data-amount="' +
						magic[i].amount +
						'">' +
						magic[i].amount +
						"</span> " +
						magic[i].type +
						", ";
				}
				magicDesc = magicDesc.slice(0, -2);
				magicDesc += " magic</div>";
			}
			behaviorDesc += magicDesc;

			// effects
			let effects = shard
				? getShardAttribute(card, shard, "effects", noun)
				: getCardAttribute(card, "effects", noun);
			let effectsDesc = buildEffectsDescription(effects, behaviorDesc, thisCard);
			behaviorDesc += effectsDesc;

			// abilities
			let abilities = shard
				? getShardAttribute(card, shard, "abilities", noun)
				: getCardAttribute(card, "abilities", noun);
			let abilitiesDesc = buildAbilitiesDescription(abilities, behaviorDesc, thisCard);
			behaviorDesc += abilitiesDesc;

			// actions
			let actions = shard
				? getShardAttribute(card, shard, "actions", noun)
				: getCardAttribute(card, "actions", noun);
			let actionsDesc = buildActionsDescription(actions, behaviorDesc);
			behaviorDesc += actionsDesc;

			// add to overall string
			behaviorsDesc += behaviorsPrefix + behaviorDesc + "</div>";
		}
	}

	desc += behaviorsDesc;

	// stances
	let stances = ["aura", "sparkle", "shimmer"];
	let stancesDesc = "";
	if (!shard) {
		for (let i = 0; i < stances.length; i++) {
			let stance = stances[i];
			let att = getCardAttribute(card, stance);
			let attPrefix =
				'<div class="desc-item desc-stance"><span class="' +
				stance +
				'">' +
				stance +
				" Stance</span>: ";
			let attDesc = "";
			if (att) {
				let dmgDesc = "";
				let dmg = getCardAttribute(card, "dmg", stance);
				let target = getCardAttribute(card, "target", stance);
				if (dmg.length > 0) {
					if (target == "player") {
						dmgDesc += '<div class="desc-item desc-sub-item">Take ';
					} else {
						dmgDesc += '<div class="desc-item desc-sub-item">Deal ';
					}
					for (let i = 0; i < dmg.length; i++) {
						dmgDesc +=
							'<span class="amount dmg" data-amount="' +
							dmg[i] +
							'">' +
							dmg[i] +
							"</span>, ";
					}
					dmgDesc = dmgDesc.slice(0, -2);
					dmgDesc += " damage</div>";
				}
				attDesc += dmgDesc;
				let blkDesc = "";
				let blk = getCardAttribute(card, "blk", stance);
				if (blk.length > 0) {
					blkDesc += '<div class="desc-item desc-sub-item">Gain ';
					for (let i = 0; i < blk.length; i++) {
						blkDesc +=
							'<span class="amount blk" data-amount="' +
							blk[i] +
							'">' +
							blk[i] +
							"</span>, ";
					}
					blkDesc = blkDesc.slice(0, -2);
					blkDesc += " block</div>";
				}
				attDesc += blkDesc;
				let armorDesc = "";
				let armor = getCardAttribute(card, "armor", stance);
				if (armor.length > 0) {
					armorDesc += '<div class="desc-item desc-sub-item">Gain ';
					for (let i = 0; i < armor.length; i++) {
						armorDesc +=
							'<span class="amount armor" data-amount="' +
							armor[i] +
							'">' +
							armor[i] +
							"</span>, ";
					}
					armorDesc = armorDesc.slice(0, -2);
					armorDesc += " armor</div>";
				}
				attDesc += armorDesc;
				let magicDesc = "";
				let magic = getCardAttribute(card, "magic", stance);
				if (magic.length > 0) {
					magicDesc += '<div class="desc-item desc-sub-item">Summon ';
					for (let i = 0; i < magic.length; i++) {
						magicDesc +=
							'<span class="amount magic" data-amount="' +
							magic[i].amount +
							'">' +
							magic[i].amount +
							"</span> " +
							magic[i].type +
							", ";
					}
					magicDesc = magicDesc.slice(0, -2);
					magicDesc += " magic</div>";
				}
				attDesc += magicDesc;

				// effects
				let effects = getCardAttribute(card, "effects", stance);
				let effectsDesc = buildEffectsDescription(effects, attDesc, thisCard);
				attDesc += effectsDesc;

				// abilities
				let abilities = getCardAttribute(card, "abilities", stance);
				let abilitiesDesc = buildAbilitiesDescription(abilities, attDesc, thisCard);
				attDesc += abilitiesDesc;

				// actions
				let actions = getCardAttribute(card, "actions", stance);
				let actionsDesc = buildActionsDescription(actions, attDesc);
				attDesc += actionsDesc;

				// add to overall string
				stancesDesc += attPrefix + attDesc + "</div>";
			}
		}
	}

	desc += stancesDesc;

	return desc;
}
