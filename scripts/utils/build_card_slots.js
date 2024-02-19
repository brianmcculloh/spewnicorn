const buildCardSlots = (card) => {
	let slots = "";
	for (let i = 0; i < card.slots; i++) {
		let shard = "";
		let filled = "";
		let multiple = card.slots > 1 ? " multiple" : "";
		if (card.shards[i] != undefined) {
			shard = `<span class="shard ${card.shards[i]}" data-id="${card.shards[i]}"></span>`;
			filled = " filled";
		}
		slots = `${slots}<div class="slot ${multiple} ${filled}" data-id="${i}">${shard}</div>`;
	}
	return slots;
};

export default buildCardSlots;
