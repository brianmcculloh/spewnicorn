import { Util, randArrayIndex, randFromArray, randString, randDecimal, chance } from './scripts/utils/index.js';

const util = new Util();

export default function Map() {
	let game = window.game;

	function clickTile(elem) {
		const $mapInnerDivs = $(".map-inner div");

		$mapInnerDivs.removeClass("clickable current");

		const $currentDiv = elem.addClass("current visited");

		const currentIndex = $currentDiv.index();
		const isOddRow = $currentDiv.hasClass("odd-row");
		const isEvenRow = $currentDiv.hasClass("even-row");
		const isFirstRow = $currentDiv.hasClass("first-row");
		const isLastRow = $currentDiv.hasClass("last-row");
		const isFirstCol = $currentDiv.hasClass("first-col");
		const isLastCol = $currentDiv.hasClass("last-col");

		const prevIndex = isOddRow ? 11 : 10;
		const nextIndex = isOddRow ? 8 : 9;

		if (!isFirstRow) {
			if (isOddRow || !isLastCol) {
				if (isOddRow && isFirstCol) {
					$currentDiv
						.siblings()
						.eq(currentIndex - prevIndex + 1)
						.addClass("clickable");
				} else {
					$currentDiv
						.siblings()
						.eq(currentIndex - prevIndex + 1)
						.addClass("clickable");
					$currentDiv
						.siblings()
						.eq(currentIndex - prevIndex)
						.addClass("clickable");
				}
			} else if (isEvenRow) {
				$currentDiv
					.siblings()
					.eq(currentIndex - prevIndex)
					.addClass("clickable");
			}
		}

		if (!isLastRow) {
			if (isOddRow || !isLastCol) {
				if (isOddRow && isFirstCol) {
					$currentDiv
						.siblings()
						.eq(currentIndex + nextIndex + 1)
						.addClass("clickable");
				} else {
					$currentDiv
						.siblings()
						.eq(currentIndex + nextIndex + 1)
						.addClass("clickable");
					$currentDiv
						.siblings()
						.eq(currentIndex + nextIndex)
						.addClass("clickable");
				}
			} else if (isEvenRow) {
				$currentDiv
					.siblings()
					.eq(currentIndex + nextIndex)
					.addClass("clickable");
			}
		}

		if (!isFirstCol) {
			$currentDiv.prev().addClass("clickable");
		}

		if (!isLastCol) {
			$currentDiv.next().addClass("clickable");
		}
	}

	function buildMap() {
		// clear previous map if needed
		$(".tile")
			.removeClass(
				"gate ice-gate fire-gate arena fountain quest shimmer sparkle aura current visited clickable marked"
			)
			.attr("data-powertip", "")
			.attr("data-essence", "")
			.attr("data-amount", "")
			.data("amount", "")
			.data("essence", "")
			.data("powertip", "");
		$(".tile:first-child").addClass("clickable");
		$(".start-arrow").show();

		let i = 0;
		let j = Math.round(randDecimal() * 100);
		let k = Math.round(randDecimal() * 100);
		let l = Math.round(randDecimal() * 100);
		let m = Math.round(randDecimal() * 100);
		let n = Math.round(randDecimal() * 100);
		let excludedTilesFountain = [1, 2, 3, 11, 12, 21, 22];
		let excludedTilesQuest = [1, 2, 3, 4, 11, 12, 13, 21, 22, 23, 31, 32];
		//excludedTilesQuest = []; // TODO: comment this out - debug purposes only
		let excludedTilesArena = [
			1, 2, 3, 4, 5, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 41, 42, 43,
		];
		let fountainChance = 0;
		let questChance = 0; // TODO: reset this to 0
		let iceGateTiles = [20, 40, 60, 80];
		let fireGateTiles = [92, 94, 96, 98];
		let iceGateTile = randArrayIndex(iceGateTiles);
		let fireGateTile = randArrayIndex(fireGateTiles);
		while (excludedTilesArena.indexOf(j) >= 0) {
			j = Math.round(randDecimal() * 100);
		}
		while (excludedTilesArena.indexOf(k) >= 0) {
			k = Math.round(randDecimal() * 100);
		}
		while (excludedTilesArena.indexOf(l) >= 0) {
			l = Math.round(randDecimal() * 100);
		}
		while (excludedTilesArena.indexOf(m) >= 0) {
			m = Math.round(randDecimal() * 100);
		}
		while (excludedTilesArena.indexOf(n) >= 0) {
			n = Math.round(randDecimal() * 100);
		}
		$(".tile div").each(function (e) {
			i++;
			// gates
			let arenasRequired = game.arenasRequired - game.arenasComplete;
			let plural = arenasRequired === 1 ? "" : "s";
			if (i == iceGateTiles[iceGateTile]) {
				$(this).html('<span class="icon"></span>');
				$(this).parent().addClass("gate ice-gate");
				$(this)
					.parent()
					.attr(
						"data-powertip",
						'Ice Gate: LOCKED (<span class="highlight">' +
							arenasRequired +
							"</span> arena" +
							plural +
							" required)"
					)
					.data(
						"powertip",
						'Ice Gate: LOCKED (<span class="highlight">' +
							arenasRequired +
							"</span> arena" +
							plural +
							" required)"
					);
			} else if (i == fireGateTiles[fireGateTile]) {
				$(this).html('<span class="icon"></span>');
				$(this).parent().addClass("gate fire-gate");
				$(this)
					.parent()
					.attr(
						"data-powertip",
						'Fire Gate: LOCKED (<span class="highlight">' +
							arenasRequired +
							"</span> arena" +
							plural +
							" required)"
					)
					.data(
						"powertip",
						'Fire Gate: LOCKED (<span class="highlight">' +
							arenasRequired +
							"</span> arena" +
							plural +
							" required)"
					);
			} else {
				// arenas
				if ((i == j) | (i == k) || i == l || i == m || i == n) {
					$(this).html('<span class="icon"></span>');
					$(this).parent().addClass("arena");
					$(this)
						.parent()
						.attr("data-powertip", "Arena Battle")
						.data("powertip", "Arena Battle");
				} else {
					fountainChance += game.fountainChance;
					// fountains
					if (chance(fountainChance) && excludedTilesFountain.indexOf(i) < 0) {
						$(this).html('<span class="icon"></span>');
						$(this).parent().addClass("fountain");
						$(this)
							.parent()
							.attr("data-powertip", "Magic Fountain")
							.data("powertip", "Magic Fountain");
						fountainChance = 0;
					} else {
						questChance += game.questChance;
						// quests
						if (chance(questChance) && excludedTilesQuest.indexOf(i) < 0) {
							$(this).html('<span class="icon"></span>');
							$(this).parent().addClass("quest");
							$(this)
								.parent()
								.attr("data-powertip", "Quest")
								.data("powertip", "Quest");
							questChance = 0;
						} else {
							// normal fights
							let essence = randFromArray(game.essences);
							let desc =
								"<span class='" +
								essence +
								"' style='text-transform:capitalize'>" +
								essence +
								"</span> Essence Combat";
							//$(this).html('<span class="icon tooltip" data-powertip="' + desc + '"></span>');
							$(this).html('<span class="icon"></span>');
							$(this).parent().attr("data-essence", essence).data("essence", essence);
							$(this).parent().attr("data-amount", 1).data("amount", 1);
							$(this).parent().attr("data-powertip", desc).data("powertip", desc);
							$(this).parent().addClass(essence);
						}
					}
				}
			}
		});
	}

	return {
		clickTile,
		buildMap,
	};
}
