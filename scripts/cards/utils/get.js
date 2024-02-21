import { getShardNum } from "../../utils/index.js";

import { ALL_CARDS, buildDescription, buildSlotsDescription } from "../index.js";
import { randString } from "../../utils/index.js";

const cards = ALL_CARDS;

export const getTotalCards = () => {
	return cards?.length;
};

export const getCardById = (add, allCards) => {
	if (allCards.cards == undefined) {
		return allCards.find(({ id }) => id === add);
	} else {
		return allCards.cards.find(({ id }) => id === add);
	}
};

export const getWeapons = () => {
	let weapons = cards.filter((i) => i.weapon == true);

	if (weapons.length == 0) {
		weapons = false;
	}

	return weapons;
};

export const getAllCards = () => {
	let items = cards;
	for (let i = 0; i < items.length; i++) {
		items[i].guid = randString();

		// standard description
		let desc = buildDescription(items[i]);
		items[i].desc = desc;

		// slots description
		let slotDesc = buildSlotsDescription(items[i]);
		items[i].slotDesc = slotDesc;
	}
	return items;
};

export const getAddableCards = (tier = false, type = false, pack = false, exclude = []) => {
	const game = window.game;
	let items = cards;
	if (tier && type) {
		items = items.filter((i) => i.tier == tier && i.type == type);
	} else if (tier) {
		items = items.filter((i) => i.tier == tier);
	} else if (type) {
		items = items.filter((i) => i.type == type);
	}
	if (pack) {
		items = items.filter((i) => i.pack == pack);
	} else {
		items = items.filter((i) => i.pack == "basic" || i.pack == game.boosterPack);
	}
	items = items.filter((i) => i.addable == true);
	items = items.filter((i) => !exclude.includes(i.id));
	return items;
};

export const getCardAttribute = (card, attribute, type = false) => {
	let data = "";

	// draw/discard/destroy/combine/stance values
	if (type) {
		if (card[type] != undefined) {
			if (card[type][attribute] != undefined) {
				data = card[type][attribute];
			}
		}
		// overwrite with shard values
		if (card.shards.length > 0) {
			// single shard
			if (card.shardUpgrades[type] != undefined) {
				if (card.shardUpgrades[type][attribute] != undefined) {
					data = card.shardUpgrades[type][attribute];
				}
			}
			// overwrite with specific shard values
			if (getShardNum(card, "frost") > 0) {
				if (card.iceShardUpgrades[type] != undefined) {
					if (card.iceShardUpgrades[type][attribute] != undefined) {
						data = card.iceShardUpgrades[type][attribute];
					}
				}
			}
			if (getShardNum(card, "flame") > 0) {
				if (card.fireShardUpgrades[type] != undefined) {
					if (card.fireShardUpgrades[type][attribute] != undefined) {
						data = card.fireShardUpgrades[type][attribute];
					}
				}
			}

			// multiple shards
			if (card.shards.length > 1) {
				// start with both shards values
				if (card.bothShardUpgrades[type] != undefined) {
					if (card.bothShardUpgrades[type][attribute] != undefined) {
						data = card.bothShardUpgrades[type][attribute];
					}
				}
				// overwrite with specific shard values
				if (getShardNum(card, "frost") > 1) {
					if (card.iceShardUpgrades[type] != undefined) {
						if (card.iceShardUpgrades[type][attribute + "_2"] != undefined) {
							data = card.iceShardUpgrades[type][attribute + "_2"];
						}
					}
					if (card.iceShardUpgrades[type + "_2"] != undefined) {
						if (card.iceShardUpgrades[type + "_2"][attribute] != undefined) {
							data = card.iceShardUpgrades[type + "_2"][attribute];
						}
					}
				}
				if (getShardNum(card, "flame") > 1) {
					if (card.fireShardUpgrades[type] != undefined) {
						if (card.fireShardUpgrades[type][attribute + "_2"] != undefined) {
							data = card.fireShardUpgrades[type][attribute + "_2"];
						}
					}
					if (card.fireShardUpgrades[type + "_2"] != undefined) {
						if (card.fireShardUpgrades[type + "_2"][attribute] != undefined) {
							data = card.fireShardUpgrades[type + "_2"][attribute];
						}
					}
				}
			}
		}

		// standard defaults
	} else {
		if (card[attribute] != undefined) {
			data = card[attribute];
		}
		// overwrite with shard values
		if (card.shards?.length > 0) {
			// single shard
			// Note: don't remember why we needed the isNaN check on all of these but it was causing any upgrade that wasn't just a single value to fail
			// so only single damage/block/armor values worked when the check was in place
			//if(card.shardUpgrades[attribute] != undefined && !isNaN(card.shardUpgrades[attribute])) {
			if (card.shardUpgrades[attribute] != undefined) {
				data = card.shardUpgrades[attribute];
			}
			// overwrite with specific shard values
			if (getShardNum(card, "frost") > 0) {
				//if(card.iceShardUpgrades[attribute] != undefined && !isNaN(card.iceShardUpgrades[attribute])) {
				if (card.iceShardUpgrades[attribute] != undefined) {
					data = card.iceShardUpgrades[attribute];
				}
			}
			if (getShardNum(card, "flame") > 0) {
				//if(card.fireShardUpgrades[attribute] != undefined && !isNaN(card.fireShardUpgrades[attribute])) {
				if (card.fireShardUpgrades[attribute] != undefined) {
					data = card.fireShardUpgrades[attribute];
				}
			}

			// multiple shards
			if (card.shards.length > 1) {
				// start with both shards values
				if (card.bothShardUpgrades != undefined) {
					//if(card.bothShardUpgrades[attribute] != undefined && !isNaN(card.bothShardUpgrades[attribute])) {
					if (card.bothShardUpgrades[attribute] != undefined) {
						data = card.bothShardUpgrades[attribute];
					}
				}
				// overwrite with specific shard values
				if (getShardNum(card, "frost") > 1) {
					if (card.iceShardUpgrades != undefined) {
						//if(card.iceShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.iceShardUpgrades[attribute + '_2'])) {
						if (card.iceShardUpgrades[attribute + "_2"] != undefined) {
							data = card.iceShardUpgrades[attribute + "_2"];
						}
					}
				}
				if (getShardNum(card, "flame") > 1) {
					if (card.fireShardUpgrades != undefined) {
						//if(card.fireShardUpgrades[attribute + '_2'] != undefined && !isNaN(card.fireShardUpgrades[attribute + '_2'])) {
						if (card.fireShardUpgrades[attribute + "_2"] != undefined) {
							data = card.fireShardUpgrades[attribute + "_2"];
						}
					}
				}
			}
		}
	}

	return data;
};
