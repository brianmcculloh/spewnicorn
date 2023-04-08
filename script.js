/*********************************************
 * 
 * Ideas:
 * Must visit two arenas to unlock gates
 * You can visit as many tiles as you want, but the more you visit, the higher the aggro on the boss gates
 * Treasure bonus events add a chest full of a mixture of treasures, essences, shards, and cards
 * 
 * COURAGE: after every 7 battles you get offered a treasure that might cost more than 7 (functions like a shop)
 * -any purchase resets courage, or you can save it up to afford better treasures down the road
 * -works well with aggro because player has to decide if it's worth it to do 21 battles before a gate, which
 * -will increase aggro to level 3. if player is savvy at mapping, they can get 2 courage events before 
 * -aggro increases to level 2 (which is at 15). 10, 15, 20, 22 vs 7, 14, 21
 * 
 * SHARDS: can attach to cards to "upgrade" them
 * -one, two, or three slots per card
 * -shards are either fire or ice and can lead to fire and ice builds
 * -shards are permanently attached to cards, and must be equipped immediately
 * 
 * AGGRO: thresholds which when hit add strength to gates
 * -after 10 battles +1, after 15 +1, after 20 +1, after 22 +1, and then +1 every battle after that
 * 
 * SPRITES (not implemented): enemies start with 3 sprites per monster, player can cast spell cards to summon sprites
 * -daylight for butterflies, twilight for fireflies, and midnight for fairies
 * -sprites do things like buff player, heal player, block player, attack monsters, attack other sprites, etc.
 * -monster sprites can target you or your sprites
 * -various effects from cards/treasures/etc can cause sprites to do things like always target enemy sprites, etc.
 * 
 * SPEED: unused speed at the end of each turn converts to something based on stance
 * -no stance: unused speed converts to block
 * -aura stance: unused speed converts to mana (energy build)
 * -sparkle stance: unused speed converts to temporary might on the next turn (attack build)
 * -shimmer stance: unused speed converts to crit percentage for the rest of combat (damage build)
 * 
 * MAGIC RAINBOW: an entity that floats above the player that is magic
 * -target it with magic cards
 * -once it's full it does aoe magic damage to all enemies
 * -rainbow magic does standard aoe damage
 * -dark magic bypasses armor
 * -elemental magic bypasses block
 * -chaos magic does double damage
 * -muddled magic does damage only to one monster instead of aoe
 * 
 * PHASE I: GAME ENGINE PHASE
 * PHASE II: CREATE ALL EFFECTS, ABILITIES, AND ACTIONS
 * PHASE III: BALANCE PHASE - CREATE MAP/MONSTERS/TREASURES/CARDS/CANDY
 * PHASE IV: UI PHASE - INTERACTIONS & ANIMATIONS ARE CREATED AND REFINED 
 * PHASE V: LAUNCH PHASE - TESTING, TUTORIAL, LOADING, SAVING, HIGH SCORES
 * 
 * 
 * PHASE I:
 * 
 * Gates (down the road)
 * 
 * 
 * PHASE II:
 * 
 * Future ideas: 
 * Peek: draw the next x cards and retain them for one turn. cards cannot be played this turn
 * Ability: if you end your turn with unused mana, do something cool - like charge rainbow or something
 * Card: Consolodate: do dmg plus block plus armor to enemy and lose block and armor
 * Effect: Frost Mage: when you play a card with an ice shard, do x times number of ice shards attached to card played to all enemies
 * Effect: Flame Mage: same as frost mage but with flame
 * Magic Type Attack - does [magic type] stuff to monster, and adds [magic type] magic if matches current magic type
 * If card doesn't kill, receive that much damage back
 * 
 * 
 * PHASE III:
 * 
 * Create and balance cards - DONE
 * Create and balance monsters and monster sets - DONE
 * Create and balance treasure - DONE
 * Create and balance candy - DONE
 * Create quests - DONE
 * 
 * 
 * PHASE IV:
 * 
 * Graphics
 * TODO: can't repeat monsters in consecutive screens
 * TODO: monster name/intent darker text outline
 * -battle screen backgrounds
 * -map backgrounds
 * 
 * UI Animations
 * 
 * Sound effects & music - howler.js (https://youtu.be/hn7MhPt24L4)
 * 
 * 
 * PHASE V:
 * 
 * Stress test
 * 
 * Play test
 * -debug email report
 * 
 * Tutorial
 * 
 * Save progress
 * 
 * Record results
 * 
 * 
 * 
*********************************************/

import Util from './utils.js';
const util = new Util();

import Game from './game.js';
let game = Game();
window.game = game;

import Map from './map.js';
let map = Map();

import {Monster, Player} from './creatures.js';
let player = Player().player;
window.player = player;
const monsters = Monster();

import {AllCards, Deck, CombatDeck} from './cards.js';
const allCards = AllCards();
let deck = Deck();
let combatDeck = CombatDeck();

import Treasures from './treasures.js';
let treasures = Treasures();
window.treasures = treasures;

import Quests from './quests.js';
let quests = Quests();
window.quests = quests;


jQuery(window).on('load', function() {

	// window.load stuff

});

jQuery(document).ready(function($) {

	init();

	$(document).on('click', '.status-toggle', function(e) {
		$('.status').toggleClass('shown');
	});

	$(document).on('click', '.debug-toggle', function(e) {
		$('.debug-log').toggleClass('shown');
	});

	// initial clickables
	$('.map-inner .current').next().addClass('clickable');
	$('.map-inner .current').siblings().eq(($(this).index() + 10)).addClass('clickable');

	$(document).on('click', '.view-map', function(e) {

		$(this).closest('.game-panel').removeClass('shown');
		$('.view-map-done-wrapper').addClass('shown');
		$('.view-map-done').attr('data-target', $(this).attr('data-game-panel'));

	});

	$(document).on('click', '.view-map-done', function(e) {

		$(this).closest('.view-map-done-wrapper').removeClass('shown');
		let target = $(this).attr('data-target');
		$('.' + target).addClass('shown');

	});

	$(document).on('click', '.starting-options .button', function(e) {

		$('.starting-options').removeClass('shown');
		$('.starting-room').removeClass('shown');
		$('.choose-booster-pack').addClass('shown');
		startingBonus($(this));

	});

	$(document).on('click', '.starting-booster-packs .pack-button', function(e) {

		let pack = $(this).attr('data-pack');
		viewPackCards(pack);

	});

	$(document).on('click', '.pack-cards-panel .select', function(e) {
	
		$('.pack-cards-panel').removeClass('shown');
		$('.starting-booster-packs').removeClass('shown');
		$('.choose-booster-pack').removeClass('shown');
		startingBoosterPack($(this));

	});

	$(document).on('click', '.pack-cards-panel .back', function(e) {

		$('.pack-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.starting-room .done', function(e) {

		$('.starting-room').removeClass('shown');
		$('.choose-booster-pack').addClass('shown');

	});

	$(document).on('click', '.choose-booster-pack .done', function(e) {

		$('.choose-booster-pack').removeClass('shown');

	});

	$(document).on('click', '.tile.clickable', function(e) {

		if($(this).hasClass('fountain')) {
			let visited = $(this).hasClass('visited') ? true : false;
			visitFountain(visited);
		} else if($(this).hasClass('quest')) {
			visitQuest();
		} else {
			startCombat($(this));
		}

		map.clickTile($(this));

		$('.map-inner div').addClass('clickable'); // TODO: remove this line after dev
		
	});

	$(document).on('click', '.end-turn', function(e) {

		endTurn();

	});

	$(document).on('click', '.end-combat', function(e) {

		endCombat();

	});

	$(document).on('click', '.rewards-cards .card', function(e) {
	
		addCardToDeck($(this).data('id'));

		$('.rewards-cards').empty();

	});

	$(document).on('click', '.rewards-skip', function(e) {

		$('.rewards-cards').empty();

		$('.rewards').removeClass('shown');

	});

	$(document).on('click', '.rewards-loot .treasure, .loot-screen .treasure', function(e) {

		addTreasure($(this).data('id'));
		$(this).remove();

	});

	$(document).on('click', '.rewards-loot .shard, .loot-screen .shard', function(e) {

		game.toPick = 1;
		game.toPile = 'allCards';
		chooseShardCard($(this).data('id'));
		$(this).remove();

	});

	$(document).on('click', '.rewards-loot .candy.clickable, .loot-screen .candy.clickable', function(e) {

		addCandy($(this).data('id'));
		$(this).remove();

	});

	$(document).on('click', '.loot-screen .essence', function(e) {

		updateEssenceLevels($(this).data('id'), 1);
		$(this).remove();

	});

	$(document).on('click', '.candies .candy.clickable:not(.trashable)', function(e) {

		if($(this).hasClass('targeted')) {
			$(this).addClass('selected');
			$('.monster').addClass('candy-target');
		} else {
			eatCandy($(this).data('guid'));
			$(this).remove();
		}

	});

	$(document).on('click', '.trash-candy-confirm .eat-candy', function(e) {

		let guid = $(this).parent().attr('data-candy-guid');
		eatCandy(guid);
		$('.candy[data-guid=' + guid + ']').remove();
		$('.trash-candy-confirm').removeClass('shown');

	});

	$(document).on('click', '.candies .candy.trashable', function(e) {

		$('.candy.trashable').removeClass('selected');
		$(this).addClass('selected');
		$('.trash-candy-confirm').addClass('shown');
		$('.trash-candy-confirm').attr('data-candy-guid', $(this).data('guid'));
		let candy = util.getCandyById($(this).data('id'), treasures.candies);
		if(candy.combatOnly) {
			$('.trash-candy-confirm .eat-candy').addClass('disabled');
		} else {
			$('.trash-candy-confirm .eat-candy').removeClass('disabled');
		}

	});

	$(document).on('click', '.trash-candy-confirm .cancel', function(e) {

		$('.trash-candy-confirm').removeClass('shown');
		$('.candy.trashable').removeClass('selected');

	});

	$(document).on('click', '.trash-candy-confirm .trash-candy', function(e) {

		let guid = $(this).parent().attr('data-candy-guid');
		trashCandy(guid);
		$('.candy[data-guid=' + guid + ']').remove();
		$('.rewards-loot .candy, .loot-items .candy').addClass('clickable');
		$('.trash-candy-confirm').removeClass('shown');

	});

	$(document).on('click', '.shard-cards-panel .card', function(e) {

		let shard = $('.shard-cards-panel').attr('data-shard');
		let thisShard = shard;
		if(shard == 'random') {
			thisShard = util.randFromArray(treasures.shards);
			thisShard = thisShard.id;
		}
		let card = util.getCardByGuid($(this).data('guid'), deck.cards);
		if(game.toPile !== 'allCards' && game.toPile !== 'deck') {
			card = util.getCardByGuid($(this).data('guid'), combatDeck[game.toPile]);
		}
		deck.attachShard(card, thisShard);
		game.toPick -= 1;
		updateCardDescriptions('shardCards', combatDeck.chooseCards);
		updateCardDescriptions(game.toPile);
		if(game.toPick == 0) {
			$('.shard-cards-panel').removeClass('shown');
			combatDeck.chooseCards = [];
		}

	});

	$(document).on('click', '.player-cards .card.playable', function(e) {

		if($(this).hasClass('combinable')) {
			let id = $(this).data('id');
			if($('.card.combinable[data-id="' + id + '"]').hasClass('selected') && !$(this).hasClass('selected')) {
				$(this).addClass('selected');
				combineCards($(this));
			} else {
				selectCard($(this));

			}
		} else {
			selectCard($(this));
		}

	});

	$(document).on('click', '.player-cards .card .play-card', function(e) {

		let elem = $(this).parent();
		playCard(elem);

	});

	$(document).on('click', '.card.retainable', function(e) {

		retainCard($(this));

	});

	$(document).on('click', '.card.discardable', function(e) {

		markDiscard($(this));

	});

	$(document).on('click', '.card.destroyable', function(e) {

		markDestroy($(this));

	});

	$(document).on('click', '.monster.clickable', function(e) {

		playCard($('.card.selected'), $(this));

	});

	$(document).on('click', '.monster.candy-target', function(e) {

		$('.monster').removeClass('candy-target');
		eatCandy($('.candy.selected').data('guid'), $(this));
		$('.candy.selected').remove();

	});

	$(document).on('click', '.draw-card:not(.disabled)', function(e) {

		addCardTo('draw');

	});

	$(document).on('click', '.library', function(e) {

		viewLibrary();

	});

	$(document).on('click', '.all-cards', function(e) {

		viewAllCards();

	});

	$(document).on('click', '.draw-cards', function(e) {

		viewDrawCards();

	});

	$(document).on('click', '.discard-cards', function(e) {

		viewDiscardCards();

	});

	$(document).on('click', '.dead-cards', function(e) {

		viewDeadCards();

	});

	$(document).on('click', '.draw-cards-panel .done', function(e) {

		game.toPick = 0;
		$('.draw-cards-panel').removeClass('shown');
		$('.draw-cards-panel .card').removeClass('pickable');
		$('.draw-cards-panel .message').html('');

	});

	$(document).on('click', '.discard-cards-panel .done', function(e) {

		game.toPick = 0;
		$('.discard-cards-panel').removeClass('shown');
		$('.discard-cards-panel .card').removeClass('pickable');
		$('.discard-cards-panel .message').html('');

	});

	$(document).on('click', '.dead-cards-panel .done', function(e) {

		game.toPick = 0;
		$('.dead-cards-panel').removeClass('shown');
		$('.dead-cards-panel .card').removeClass('pickable');
		$('.dead-cards-panel .message').html('');

	});

	$(document).on('click', '.choose-cards-panel .done', function(e) {

		game.toPick = 0;
		$('.choose-cards-panel').removeClass('shown');
		$('.choose-cards-panel .card').removeClass('pickable');
		$('.choose-cards-panel .message').html('');

	});

	$(document).on('click', '.all-cards-panel .done', function(e) {

		$('.all-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.library-panel .done', function(e) {

		$('.library-panel').removeClass('shown');

	});

	$(document).on('click', '.draw-cards-panel .pickable', function(e) {

		game.toPick -= 1;
		addCardTo('drawCards', $(this));
		if(game.toPick == 0) {
			$('.draw-cards-panel').removeClass('shown');
			$('.draw-cards-panel .card').removeClass('pickable');
			$('.draw-cards-panel .message').html('');
		}

	});

	$(document).on('click', '.discard-cards-panel .pickable', function(e) {

		game.toPick -= 1;
		addCardTo('discardCards', $(this));
		if(game.toPick == 0) {
			$('.discard-cards-panel').removeClass('shown');
			$('.discard-cards-panel .card').removeClass('pickable');
			$('.discard-cards-panel .message').html('');
		}

	});

	$(document).on('click', '.dead-cards-panel .pickable', function(e) {

		game.toPick -= 1;
		addCardTo('deadCards', $(this));
		if(game.toPick == 0) {
			$('.dead-cards-panel').removeClass('shown');
			$('.dead-cards-panel .card').removeClass('pickable');
			$('.dead-cards-panel .message').html('');
		}

	});

	$(document).on('click', '.choose-cards-panel .pickable', function(e) {

		game.toPick -= 1;
		if($(this).hasClass('deck')) {
			let id = $(this).attr('data-id');
			addCardToDeck(id);
		} else {
			addCardTo('chooseCards', $(this), game.toPile);
		}
		if(game.toPick == 0) {
			$('.choose-cards-panel').removeClass('shown');
			$('.choose-cards-panel .card').removeClass('pickable');
			$('.choose-cards-panel .message').html('');
			combatDeck.chooseCards = [];
		}

	});

	$(document).on('click', '.choose-cards-panel .transmutable', function(e) {

		if($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			game.toPick += 1;
		} else {
			$(this).addClass('selected');
			game.toPick -= 1;
			let thisCard = util.getCardByGuid($(this).data('guid'), deck.cards);
			combatDeck.transmutingCards.push(thisCard);
			if(game.toPick == 0) {
				combatDeck.transmuteCards(combatDeck, deck, player);
				$('.choose-cards-panel').removeClass('shown');
				$('.choose-cards-panel .card').removeClass('pickable');
				$('.choose-cards-panel .message').html('');
				combatDeck.transmutingCards = [];
			}
		}

	});

	$(document).on('click', '.choose-cards-panel .removable', function(e) {

		if($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			game.toPick += 1;
		} else {
			$(this).addClass('selected');
			game.toPick -= 1;
			if(game.toPick == 0) {
				removeCardFromDeck($(this).data('guid'));
				$('.choose-cards-panel').removeClass('shown');
				$('.choose-cards-panel .card').removeClass('pickable');
				$('.choose-cards-panel .message').html('');
			}
		}

	});

	$(document).on('click', '.retain-done', function(e) {

		endTurn(false);

	});

	$(document).on('click', '.discard-done', function(e) {

		discardCards();

	});

	$(document).on('click', '.destroy-done', function(e) {

		destroyCards();

	});


	$(document).on('click', '.fountain-drink', function(e) {

		heal(player, $(this).attr('data-amount'));
		applyArmor($(this).attr('data-amount'), player);
		$('.magic-fountain').removeClass('shown');

	});

	$(document).on('click', '.fountain-search', function(e) {

		loot('shard');

	});

	$(document).on('click', '.fountain-frolic', function(e) {

		gainCourage($(this).attr('data-amount'));
		$('.magic-fountain').removeClass('shown');

	});

	$(document).on('click', '.fountain-skip', function(e) {

		$('.magic-fountain').removeClass('shown');

	});

	$(document).on('click', '.quest-options .button', function(e) {

		processQuest($(this));

	});

	$(document).on('click', '.quest-options .button[data-option="leave"]', function(e) {

		$('.quest-screen').removeClass('shown');
		$('.quest-options').empty();

	});

	$(document).on('click', '.courage-items .treasure:not(.too-expensive)', function() {

		let id = $(this).attr('data-id');
		buyTreasure(id);
		$(this).remove();

	});

	$(document).on('click', '.courage-items .candy:not(.too-expensive)', function() {

		let id = $(this).attr('data-id');
		let bought = buyCandy(id);
		if(bought) $(this).remove();

	});

	$(document).on('click', '.courage-cards .card:not(.too-expensive)', function() {

		let id = $(this).attr('data-id');
		buyCard(id);
		$(this).parent().remove();

	});

	$(document).on('click', '.courage-remove:not(.too-expensive)', function() {

		viewAllCards();
		$('.all-cards-panel .card').addClass('clickable');

	});

	$(document).on('click', '.all-cards-panel .card.clickable', function() {

		let guid = $(this).attr('data-guid');
		let cost = 2;
		removeCardFromDeck(guid, cost);
		$(this).parent().remove();
		$('.all-cards-panel').removeClass('shown');
		$('.courage-remove').removeClass('shown');

	});

	$(document).on('click', '.courage-done', function(e) {

		$('.courage-screen').removeClass('shown');
		$('.courage-items, .courage-cards').empty();
		$('.courage-remove').removeClass('too-expensive');

	});

	$(document).on('click', '.loot-done', function(e) {

		$('.loot-screen').removeClass('shown');
		$('.magic-fountain').removeClass('shown');
		$('.loot-items').empty();

	});

});

function init() {

	console.clear();

	util.setInitialTooltips();

	map.buildMap();
	$('.map-inner div').addClass('clickable'); // TODO: remove this line after dev

	util.setTooltips('.tile');
	util.setTooltips('.buttons-wrapper');

	deck.buildDeck();

	allCards.buildLibrary();

	util.appendStartingBonuses();

	util.appendBoosterPacks();

	monsters.setEffects(player);
	monsters.setAbilities(player);
	monsters.updateStatusBar();

	updateAggro();
	updateEssenceLevels();
	setStatus();

	treasureScreen();

}

function setStatus(updateCards = true) {
	// debug only
	$('.status .card-retain span').html(player.cardRetain);
	$('.status .momentumAmount span').html(player.momentumAmount);
	for(let i = 0; i < game.effects.length; i++) {
		$('.status .' + game.effects[i].id + ' span').html(player[game.effects[i].id].temp + ' / ' + player[game.effects[i].id].current + ' / ' + player[game.effects[i].id].base + ' : ' + player[game.effects[i].id].turns);
	}
	for(let i = 0; i < game.abilities.length; i++) {
		$('.status .' + game.abilities[i].id + ' span').html(player[game.abilities[i].id].enabled + ' : ' + player[game.abilities[i].id].turns);
	}

	// player status bar
	monsters.updateStatusBar(player);
	
	// new UI
	$('.draw-cards span').html(combatDeck.drawCards.length);
	$('.discard-cards span').html(combatDeck.discardCards.length);
	$('.dead-cards span').html(combatDeck.deadCards.length);
	$('.game-courage span').html(player.courage);
	$('.booster-pack span').addClass(game.boosterPack + '-pack').data('powertip', game.boosterPack).attr('data-powertip', game.boosterPack);
	util.setTooltips('.booster-pack');
	$('.game-floor span').html(game.floor);
	$('.game-round span').html(game.round);
	$('.all-cards span.counter').html(player.cardsOwned);
	$('.library span.counter').html(allCards.getAllCards().length);

	let healthLeft = util.getStatPercentage(player.health.current, player.health.max);
	let armorLeft = util.getStatPercentage(player.armor, player.health.current);
	$('.player-health .health-amount').css('width', healthLeft + '%');
	$('.player-health .armor-amount').css('width', armorLeft + '%');
	$('.player-health .health-number').html(player.health.current);
	$('.player-health .armor-number').html(player.armor);
	$('.player-health .block-number').html(player.block);
	$('.crit-bar .crit-bar-inner').css('width', game.critChance + '%');
	$('.crit-bar .level').html(game.critChance + '%');

	$('.mana span').html(player.mana.current + '/' + player.mana.base);
	$('.speed span').html(player.speed.current + '/' + player.speed.base);
	$('.stance .icon-stance').attr('data-stance', player.stance);

	$('.highest-damage-roll span').html(game.highestDmgRoll);
	$('.treasure-chance span').html(game.treasureChance);
	$('.candy-chance span').html(game.candyChance);
	$('.shard-chance span').html(game.shardChance);

	if(player.block == 0) {
		$('.player-health .block-amount').removeClass('shown');
		$('.player-health').removeClass('blocked');
	} else {
		$('.player-health .block-amount').addClass('shown');
		$('.player-health').addClass('blocked');
	}

	// update values on cards
	if(updateCards) {
		updateCardDescriptions();
	}
}

function updateCardDescriptions(which = 'handCards', chooseCards = null) {
	// hand cards by default
	let cards = combatDeck.handCards;
	let selector = $('.player-cards .card');
	if(which == 'drawCards') {
		cards = combatDeck.drawCards;
		selector = $('.draw-cards-panel .cards .card');
	} else if(which == 'discardCards') {
		cards = combatDeck.discardCards;
		selector = $('.discard-cards-panel .cards .card');
	} else if(which == 'deadCards') {
		cards = combatDeck.deadCards;
		selector = $('.dead-cards-panel .cards .card');
	} else if(which == 'chooseCards') {
		cards = chooseCards;
		selector = $('.choose-cards-panel .cards .card');
	} else if(which == 'shardCards') {
		cards = chooseCards;
		selector = $('.shard-cards-panel .cards .card');
	} else if(which == 'allCards') {
		cards = deck.cards;
		selector = $('.all-cards-panel .cards .card');
	} else if(which == 'packCards') {
		cards = chooseCards;
		selector = $('.pack-cards-panel .cards .card');
	}
	selector.each(function() {
		updateCardDescription($(this), cards);
	});
}
function updateCardDescription(elem, cards) {
	let guid = elem.data('guid');
	let card = util.getCardByGuid(guid, cards);
	if(card == undefined) return;
	elem.find('.blk').each(function(e) {
		let originalBlk = $(this).data('amount');
		let adjustedBlk = originalBlk + player.solid.current;
		if(adjustedBlk < 0) adjustedBlk = 0;
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				adjustedBlk += Math.round(card.age * player.wisdom.current);
			} else {
				adjustedBlk += card.age;
			}
		}
		$(this).html(adjustedBlk);
		$(this).attr('data-amount', adjustedBlk);
		let css = '';
		if(adjustedBlk > originalBlk) {
			css = 'better';
		} else if(adjustedBlk < originalBlk) {
			css = 'worse';
		}
		$(this).addClass(css);
	});
	elem.find('.armor').each(function(e) {
		let originalArmor = $(this).data('amount');
		let adjustedArmor = originalArmor + player.craft.current;
		if(adjustedArmor < 0) adjustedArmor = 0;
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				adjustedArmor += Math.round(card.age * player.wisdom.current);
			} else {
				adjustedArmor += card.age;
			}
		}
		$(this).html(adjustedArmor);
		$(this).attr('data-amount', adjustedArmor);
		let css = '';
		if(adjustedArmor > originalArmor) {
			css = 'better';
		} else if(adjustedArmor < originalArmor) {
			css = 'worse';
		}
		$(this).addClass(css);
	});
	elem.find('.dmg').each(function(e) {
		let dmg = $(this).data('amount');
		let originalDmg = dmg;
		if(player.might.current != 0) {
			dmg += player.might.current;
		}
		if(player.momentumAmount != 0) {
			dmg += player.momentumAmount;
		}
		if(player.punch.current != 1) {
			dmg = Math.round(dmg * player.punch.current);
		}
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				dmg += Math.round(card.age * player.wisdom.current);
			} else {
				dmg += card.age;
			}
		}
		if(dmg < 0) dmg = 0;
		$(this).html(dmg);
		$(this).attr('data-amount', dmg);
		let css = dmg > originalDmg ? 'better' : 'worse';
		if(dmg==originalDmg) css = '';
		$(this).addClass(css);
	});
	elem.find('.magic').each(function(e) {
		let magic = $(this).data('amount');
		let originalMagic = magic;
		if(player.conjure.current != 0) {
			magic += player.conjure.current;
		}
		if(player.sorcery.current != 1) {
			magic = Math.round(magic * player.sorcery.current);
		}
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				magic += Math.round(card.age * player.wisdom.current);
			} else {
				magic += card.age;
			}
		}
		if(magic < 0) magic = 0;
		$(this).html(magic);
		$(this).attr('data-amount', magic);
		let css = magic > originalMagic ? 'better' : 'worse';
		if(magic==originalMagic) css = '';
		$(this).addClass(css);
	});
	let use = util.getCardAttribute(card, 'use');
	elem.find('.use').html(use);
	let linger = util.getCardAttribute(card, 'linger');
	elem.find('.linger').html(linger);
	let expire = util.getCardAttribute(card, 'expire');
	elem.find('.expire').html(expire);
	let age = util.getCardAttribute(card, 'age');
	elem.find('.age').html(age);
	let mana = util.getCardAttribute(card, 'mana');
	let baseMana = util.getCardAttribute(card, 'baseMana');
	let css = mana < baseMana ? 'better' : 'worse';
	if(mana==baseMana) css = '';
	elem.find('.mana').html(mana).addClass(css);
}

function viewAllCards() {
	monsters.setEffects(player);
	monsters.setAbilities(player);
	setStatus();
	$('.all-cards-panel').addClass('shown');
	$('.all-cards-panel .cards').empty();
	for(let i = 0; i < deck.cards.length; i++) {
		util.appendCard(deck.cards[i], '.all-cards-panel .cards');
	}
	updateCardDescriptions('allCards');
}
function viewLibrary() {
	$('.library-panel').addClass('shown');
}
function viewDrawCards() {
	$('.draw-cards-panel').addClass('shown');
	$('.draw-cards-panel .cards').empty();
	for(let i = 0; i < combatDeck.drawCards.length; i++) {
		util.appendCard(combatDeck.drawCards[i], '.draw-cards-panel .cards');
	}
	updateCardDescriptions('drawCards');
}
function viewDiscardCards() {
	$('.discard-cards-panel').addClass('shown');
	$('.discard-cards-panel .cards').empty();
	for(let i = 0; i < combatDeck.discardCards.length; i++) {
		util.appendCard(combatDeck.discardCards[i], '.discard-cards-panel .cards');
	}
	updateCardDescriptions('discardCards');
}
function viewDeadCards() {
	$('.dead-cards-panel').addClass('shown');
	$('.dead-cards-panel .cards').empty();
	for(let i = 0; i < combatDeck.deadCards.length; i++) {
		util.appendCard(combatDeck.deadCards[i], '.dead-cards-panel .cards');
	}
	updateCardDescriptions('deadCards');
}
function viewChooseCards(chooseCards, action = 'pickable') {
	$('.choose-cards-panel').addClass('shown');
	$('.choose-cards-panel .cards').empty();
	for(let i = 0; i < chooseCards.length; i++) {
		util.appendCard(chooseCards[i], '.choose-cards-panel .cards');
	}
	$('.choose-cards-panel .card').addClass(action);
	$('.choose-cards-panel .card').addClass(game.toPile);
	if(game.toPile != 'deck') updateCardDescriptions('chooseCards', chooseCards);
}
function viewPackCards(pack) {
	$('.pack-cards-panel').addClass('shown');
	$('.pack-cards-panel h2').html('<span>' + pack + '</span> booster pack cards');
	$('.pack-cards-panel .cards').empty();
	$('.pack-cards-panel .select').attr('data-pack', pack);
	let packCards = AllCards().getAddableCards(false, false, pack);
	for(let i = 0; i < packCards.length; i++) {
		let desc = Deck().buildDescription(packCards[i]);
        packCards[i].desc = desc;
		let slotDesc = Deck().buildSlotsDescription(packCards[i]);
        packCards[i].slotDesc = slotDesc;
		util.appendCard(packCards[i], '.pack-cards-panel .cards');
	}
}
function chooseShardCard(shard, cards = deck.cards) {
	$('.shard-cards-panel').addClass('shown');
	$('.shard-cards-panel .cards').empty();
	$('.shard-cards-panel').attr('data-shard', shard);
	for(let i = 0; i < cards.length; i++) {
		if(deck.hasOpenSlot(cards[i])) {
			util.appendCard(cards[i], '.shard-cards-panel .cards');
		}
	}

}

function startCombat(tile) {

	console.clear();

	game.combatEndedFlag = false;

	if(tile.hasClass('arena')) {
		game.mapType = 'arena';
	} else if(tile.hasClass('ice-gate')) {
		game.mapType = 'ice_gate';
	} else if(tile.hasClass('fire-gate')) {
		game.mapType = 'fire_gate';
	} else {
		game.mapType = 'normal';
	}

	game.floor += 1;
	game.round = 0;

	let backgroundImage = './images/floor' + game.floor + '.png';
	$('.monster-panel').css('background-image', 'url(' + backgroundImage + ')');
	$('.combat').addClass('shown');
	$('.candy').removeClass('trashable').addClass('clickable');
	$('body').addClass('combating');
	
	if(!tile.hasClass('visited')) {
		updateEssenceLevels(tile.attr('data-essence'), tile.attr('data-amount'));
	}

	player.cardRetain = 0;

	monsters.setEffects(player);
	monsters.setAbilities(player);

	combatDeck.sync(deck.cards, combatDeck);

	setStatus();

	// setup rainbow
	let magicPower = util.getStatPercentage(player.rainbow.current, player.rainbow.max);
	$('.magic-rainbow .rainbow-power').css('width', magicPower + '%');
	$('.magic-rainbow .rainbow-power-current').html(player.rainbow.current);
	$('.magic-rainbow .rainbow-power-max').html(player.rainbow.max);
	$('.magic-rainbow').attr('data-type', player.rainbow.type);
	$('.magic-rainbow').removeClass('dark elemental rainbow chaos muddled').addClass(player.rainbow.type);
	$('.magic-rainbow .magic-type span').html(player.rainbow.type);

	monsters.updateMonsterGroup();
	monsters.loadMonsters();
	beginTurn();
	
}

function startingBonus(elem) {

	let att = elem.attr('data-att');
	let key = elem.attr('data-key');
	let amount = elem.attr('data-amount');
	let entity = elem.attr('data-entity');
	let action = elem.attr('data-action');
	if(entity == undefined || entity == 'player') {
		entity = player;
	} else if(entity == 'game') {
		entity = game;
	}
	amount = parseFloat(amount);

	if(key != undefined) {
		if(att == 'shimmer' || att == 'sparkle' || att == 'aura') {
			updateEssenceLevels(att, amount);
		} else if(att == 'aggro') {
			updateAggro(amount);
		} else {
			entity[att][key] += amount;
		}
	} else if(att != undefined) {
		entity[att] += amount;
	} else if(action != undefined) {
		if(action == 'addRare') {
			let possibleCards = AllCards().cards.filter(i => i.addable == true && i.tier == 'rare');
			let card = util.randFromArray(possibleCards);
			deck.addCard(card.id);
			entity.health.current -= 7;
		} else if(action == 'addCommonTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
		} else if(action == 'addUncommonTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 2);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
			entity.health.current -= 10;
		} else if(action == 'addRareTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 3);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
			entity.health.current -= 7;
			entity.health.max -= 7;
		}
	}

	// max health should also increase current health
	if(att == 'health') {
		entity[att].current += amount;
	}

	setStatus();

}

function startingBoosterPack(elem) {

	let pack = elem.attr('data-pack');
	game.boosterPack = pack;
	setStatus();
		
}

function visitFountain(visited) {

	game.mapType = 'fountain';
	if(visited) {
		$('.fountain-visited').addClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').removeClass('shown');
	} else {
		$('.fountain-visited').removeClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').addClass('shown');
		game.floor += 1;
	}
	
}

function visitQuest() {

	game.mapType = 'quest';
	$('.quest-screen').addClass('shown');
	game.floor += 1;

	let possibleQuests = quests.quests.filter(i => i.seen == false);
	let quest = util.weightedRandom(possibleQuests);

	if(quest != undefined) {
		quest.seen = true;

		game.currentQuest = quest;

		$('.quest-screen h2').html(quest.name);
		$('.quest-description').html(quest.desc);
		
		for(let i = 0; i < quest.options.length; i++) {
			util.appendOption(quest.options[i], '.quest-options', quest.id);
		}
	} else {
		// just in case somehow all quests have been seen. only really possible during dev/debug
		$('.quest-screen h2').html('...');
		$('.quest-description').html('There is nothing left.');
		let option = {id: 'leave', name: 'Leave'};
		util.appendOption(option, '.quest-options', false);
	}

}

async function updateEssenceLevels(essence, amount) {

	if(essence == undefined) {
		for(let i = 0; i < game.essences.length; i++) {
			util.updateEssencePercentage(game.essences[i]);
		}
	} else if(essence != undefined) {
		amount = parseFloat(amount);
		for(let i = 0; i < amount; i++) {
			player[essence].current += 1;
			let current = player[essence].current;
			if(game.essenceThresholds.includes(current)) {
				player[essence].level += 1;
				$('.essence-bar.sparkle span.level').html(player.sparkle.level);
				$('.essence-bar.shimmer span.level').html(player.shimmer.level);
				$('.essence-bar.aura span.level').html(player.aura.level);
				$('.essence-bar.' + essence).addClass('level-up');
				await util.wait(1200);
				$('.essence-bar.' + essence).removeClass('level-up');
				// we only need to add the stance card once
				if(game.essenceThresholds[0] == current) {
					deck.addCard(essence + '_stance');
				}
			}
		}
		util.updateEssencePercentage(essence);
		setStatus();
	}
	$('.essence-bar.sparkle span.level').html(player.sparkle.level);
	$('.essence-bar.shimmer span.level').html(player.shimmer.level);
	$('.essence-bar.aura span.level').html(player.aura.level);

}

function beginTurn() {

	// clear effects after x turns
	clearTurnEffects(player);
	clearTurnAbilities(player);

	updateCardDescriptions('allCards');

	game.round += 1;

	game.message('Begin player turn ' + game.round);

	// only reset block if protection not enabled
	if(player.protection.enabled) {
		player.block += player.stout.current;
	} else {
		player.block = player.stout.current;
	}

	// disable candy if toothache
	if(player.toothache.enabled) {
		$('.candies .candy').removeClass('clickable');
	} else {
		$('.candies .candy').addClass('clickable');
	}
	
	player.mana.current = player.mana.base;

	let extraSpeed = 0;

	if(game.round > 1) {

		// check for prepared
		if(player.prepared.enabled && game.cardsDrawn <= 3) {
			extraSpeed = 4 - game.cardsDrawn;
		}

		// stances only apply to speed, which can only be taken into account after turn 1
		if(player.stance == 'none') {
			player.block += player.speed.current;
		} else if(player.stance == 'aura') {
			player.mana.current = player.mana.base + Math.round(player.speed.current * player.aura.level);
		} else if(player.stance == 'sparkle') {
			let tempMight = Math.round(player.speed.current * player.sparkle.level);
			player.might.current += tempMight;
			player.might.temp = tempMight;
		} else if(player.stance == 'shimmer') {
			let tempRowdy = Math.round(player.speed.current * player.shimmer.level);
			player.rowdy.current += tempRowdy;
			player.rowdy.temp = tempRowdy;
		}
	}

	// check for lemonade
	if(player.lemonade.current > 0) {
		let clutterCards = combatDeck.allLiveCards(combatDeck).filter(i => i.type == 'clutter');
		player.health.current += clutterCards.length * player.lemonade.current;
		if(player.health.current > player.health.max) player.health.current = player.health.max;
		applyArmor(clutterCards.length * player.lemonade.current, player)
	}

	// check for regen
	if(player.regen.current > 0) {
		heal(player, player.regen.current);
		player.regen.current -= 1;
	}

	// check for summon
	if(player.summon.current > 0) {
		let magic = {type: player.rainbow.type, amount: player.summon.current}
		applyMagic(magic, player);
	}

	// reset player speed after stance is checked
	player.speed.current = player.speed.base + extraSpeed;

	// reset cardsDrawn after prepared is checked
	game.cardsDrawn = 0;

	applyArmor(player.muster.current, player);

	$('.card.retained:not(.unplayable').addClass('playable');
	$('.card').removeClass('retain');
	$('.draw-card').removeClass('disabled');
	$('.crit').removeClass('shown');

	combatDeck.updateCardPlayability(player, combatDeck); // necessary for cards that were retained

	updateTreasureTriggers('turns');

	monsterIntent();

	updateCritChance();

	setStatus();
	
}

function updateTreasureTriggers(when) {

	switch(when) {
		case 'turns':
			for(let i = 0; i < player.treasures.length; i++) {
				let trigger = player.treasures[i].trigger;
				if(trigger.counter > -1) {
					if(trigger.per == 'turn' && !trigger.once) {
						trigger.counter = 0; // reset per turn counters
					} else if(trigger.when == 'turns') {
						trigger.counter += 1;
						if(trigger.counter == trigger.at && (!trigger.once || (trigger.once && !trigger.activated))) {
							activateTreasure(player.treasures[i]);
							trigger.counter = 0;
						}
					}
					$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
				}
			}
		break;
		case 'cardsPlayed':
			for(let i = 0; i < player.treasures.length; i++) {
				let trigger = player.treasures[i].trigger;
				if(trigger.counter > -1) {
					if(trigger.when == 'cardsPlayed') {
						trigger.counter += 1;
						if(trigger.counter == trigger.at) {
							activateTreasure(player.treasures[i]);
							trigger.counter = 0;
						}
						$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
					}
				}
			}
		break;
		case 'attackCardsPlayed':
			for(let i = 0; i < player.treasures.length; i++) {
				let trigger = player.treasures[i].trigger;
				if(trigger.counter > -1) {
					if(trigger.when == 'attackCardsPlayed') {
						trigger.counter += 1;
						if(trigger.counter == trigger.at) {
							activateTreasure(player.treasures[i]);
							trigger.counter = 0;
						}
						$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
					}
				}
			}
		break;
		case 'toolCardsPlayed':
			for(let i = 0; i < player.treasures.length; i++) {
				let trigger = player.treasures[i].trigger;
				if(trigger.counter > -1) {
					if(trigger.when == 'toolCardsPlayed') {
						trigger.counter += 1;
						if(trigger.counter == trigger.at) {
							activateTreasure(player.treasures[i]);
							trigger.counter = 0;
						}
						$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
					}
				}
			}
		break;
		case 'magicCardsPlayed':
			for(let i = 0; i < player.treasures.length; i++) {
				let trigger = player.treasures[i].trigger;
				if(trigger.counter > -1) {
					if(trigger.when == 'magicCardsPlayed') {
						trigger.counter += 1;
						if(trigger.counter == trigger.at) {
							activateTreasure(player.treasures[i]);
							trigger.counter = 0;
						}
						$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
					}
				}
			}
		break;
	}

}

async function addCardTo(type, domCard = null, to = 'handCards', ignoreSpeed = false) {

	let card = false;
	let guid = false;
	if(domCard) {
		guid = domCard.data('guid');
	}
	if(type=='draw') {
		if(!combatDeck.canDraw(combatDeck)) {

			// deck is cycling, check for cycle effects

			if(player.wield.current > 0) {
				let amount = (player.rainbow.max - player.rainbow.current) + ((player.wield.current - 1) * player.rainbow.max);
				let magic = {type: player.rainbow.type, amount: amount}
				applyMagic(magic, player);
			}

		}
		card = combatDeck.drawCard(player, combatDeck, ignoreSpeed);
		game.cardsDrawn += 1;
	} else if(type=='drawCards') {
		card = combatDeck.addDrawCard(player, combatDeck, guid, to);
	} else if(type=='discardCards') {
		card = combatDeck.addDiscardCard(player, combatDeck, guid, to);
	} else if(type=='deadCards') {
		card = combatDeck.addDeadCard(player, combatDeck, guid, to);
	} else if(type=='chooseCards') {
		card = combatDeck.addChooseCard(player, combatDeck, guid, to);
	}

	if(card) { // sometimes total deck size can be smaller than hand size
		await processCard(card, false, 'draw');
	}

	// if hand was full, card went to discard and will not exist in combatDeck.handCards
	if(card && util.getCardFromPile(card, combatDeck.handCards) != undefined) {
		let elem = util.getDomCardByGuid(card.guid);
		let cards = combatDeck.handCards;
		updateCardDescription(elem, cards);
	}

	setStatus(false);
}

function monsterIntent() {

	monsterAction('query');

}

async function monsterAction(action = 'perform') {

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);

	// check for hypnotize
	if(player.hypnotize.enabled) {
		let targetedMonster = util.randFromArray(currentMonsters);
		game.targetedMonster = targetedMonster;
	} else {
		game.targetedMonster = {};
	}

	for(let i = 0; i < currentMonsters.length; i++) {

		if(currentMonsters[i].dead) continue; // ignore dead monsters

		let intent = '';
		let thisMonster = currentMonsters[i];

		if(action == 'perform') {
			thisMonster.block = thisMonster.stout.current;
			applyArmor(thisMonster.muster.current, thisMonster);
			// check for regen
			if(thisMonster.regen.current > 0) {
				heal(thisMonster, thisMonster.regen.current);
				thisMonster.regen.current -= 1;
			}
			heal(thisMonster, thisMonster.heal.current);
		}

		let moveSet = thisMonster.moveSet;
		let pattern = thisMonster.pattern;

		let moveSetIndex = whichMoveSet(moveSet, pattern);
		if(thisMonster.chosenMoveSetIndex > -1) {
			moveSetIndex = thisMonster.chosenMoveSetIndex;
		} 

		let thisMoveSet = moveSet[moveSetIndex];
		
		let attack = thisMoveSet.dmg;
		let defend = thisMoveSet.blk;
		let armor = thisMoveSet.armor;
		let effects = thisMoveSet.effects;
		let abilities = thisMoveSet.abilities;
		let actions = thisMoveSet.actions;

		for (var key in attack) {
			if (attack.hasOwnProperty(key)) {
				if(action == 'query') {
					intent += Math.round((attack[key] + thisMonster.might.current) * thisMonster.punch.current) + ' attack, ';
				} else {

					// check for hypnotize
					if(game.targetedMonster.guid == thisMonster.guid) {
						await attackMonster(thisMonster, attack[key]);
					} else {
						await attackPlayer(thisMonster, attack[key]);
					}
					if(monsters.allDead()) {
						await util.wait(800);
						endCombat();
						return;
					}
					await util.wait(game.animationGap);
					
				}
			}
		}
		
		for (var key in defend) {
			if (defend.hasOwnProperty(key)) {
				if(action == 'query') {
					intent += (defend[key] + thisMonster.solid.current) + ' defend, ';
				} else {
					applyBlock(defend[key], thisMonster);
				}
			}
		}

		for (var key in armor) {
			if (armor.hasOwnProperty(key)) {
				if(action == 'query') {
					intent += (armor[key] + thisMonster.craft.current) + ' armor, ';
				} else {
					applyArmor(armor[key], thisMonster);
				}
			}
		}

		if(effects != undefined) {
			for(let e = 0; e < effects.length; e++) {
				let to = thisMonster
				let prefix = 'Gain ';
				let turns = effects[e].turns > 0 ? ' (' + effects[e].turns + ' turns)' : '';
				let effect = effects[e].effect;
				let amount = effects[e].amount;
				if(effects[e].hex) {
					to = player;
					prefix = 'Hex ';
				}
				if(effect == 'punch' || effect == 'sorcery' || effect == 'resistance') {
					amount = Math.round((amount + Number.EPSILON) * 100);
                    amount += '%';
				}
				if(action == 'query') {
					intent += prefix + amount + ' ' + effect + turns + ', ';
				} else {
					let turns = effects[e].turns == undefined ? -1 : effects[e].turns;
					applyEffect(effects[e], to, turns);
				}
			}
		}

		if(abilities != undefined) {
			for(let e = 0; e < abilities.length; e++) {
				let to = thisMonster
				let prefix = 'Gain ';
				let turns = abilities[e].turns == undefined ? -1 : abilities[e].turns;
				let turnsDom = abilities[e].turns > 0 ? ' (' + abilities[e].turns + ' turns)' : '';
				if(abilities[e].hex) {
					to = player;
					prefix = 'Hex ';
				}
				if(action == 'query') {
					intent += prefix + abilities[e].ability + turnsDom + ', ';
				} else {
					applyAbility(abilities[e], to, turns);
				}
			}
		}

        if(actions != undefined) {
            if(actions.length > 0) {
				if(action == 'query') {
					for(let e = 0; e < actions.length; e++) {
						let prefix = 'Action: ';
						let id = actions[e].action;
						let action = game.actions.find(o => o.id === id);
						let name = action.name;
						let description = action.desc; // future use
						let what = actions[e].what;
						let value = actions[e].value;
						let to = actions[e].to;
						what = what != undefined ? ' (' + what + ')' : '';
						value = value != undefined ? ' +' + value : '';
						to = value != undefined ? ' to ' + to : '';
						intent += prefix + name + what + value + to + ', ';
					}
				} else {
					let update = processActions(actions, currentMonsters[i]);
				}
            }
        }
		
		if(action == 'query') {
			thisMonster.chosenMoveSetIndex = moveSetIndex;
			intent = intent.slice(0,-2);
			$('.monster[data-guid=' + thisMonster.guid + '] .monster-intent').html('intent: ' + intent);
		} else {
			monsters.updateMonsterStats(thisMonster);
		}
		
	}

	setStatus();

}

function endTurn(checkRetain = true) {

	$('body').addClass('selecting retaining');

	game.message('End player turn ' + game.round);

	// destroy expired cards
	combatDeck.destroyExpiredCards(combatDeck);
	// increment expiries after destroying
	combatDeck.incrementExpiredCards(combatDeck);

	// check for stockpile
	if(player.stockpile.enabled && player.block > 0) {
		applyArmor(player.block, player);
	}

	combatDeck.chooseCards = [];
	game.toPile = 'handCards';

	updateCardDescriptions('allCards');

	// retain cards
	$('.player-cards .card').removeClass('playable selected');
	if(player.cardRetain > 0 && checkRetain) {
		$('.message').html('choose cards to retain').addClass('shown');
		$('.retain-done').addClass('shown');
		$('.player-cards .card').addClass('retainable');
		$('.draw-card').addClass('disabled');
	} else {
		$('.message').removeClass('shown');
		$('.retain-done').removeClass('shown');
		$('.player-cards .card').removeClass('retain retainable');
		combatDeck.discardHand(combatDeck, player);
		monsterTurn();
		$('body').removeClass('selecting retaining');
	}

	// if rainbow is activated and kills all monsters it will still be activated at start of next combat
	$('.magic-rainbow .semi-circle').removeClass('activated');

}

function whichMoveSet(moveSet, pattern) {
	if(pattern == 'fixed') {
		let which = game.round;
		while (which > moveSet.length) {
			which -= moveSet.length;
		}
		return which - 1;
	} else {
		return util.pickAWinningItem(moveSet);
	}
}

async function monsterTurn() {

	await monsterAction();

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	for(let i = 0; i < currentMonsters.length; i++) {
		// clear effects after x turns
		clearTurnEffects(currentMonsters[i]);
		clearTurnAbilities(currentMonsters[i]);
		game.message('Begin ' + currentMonsters[i].guid + ' turn ' + game.round);
	}

	monsters.updateStatusBar();

	endMonsterTurn();

}

function endMonsterTurn() {

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	for(let i = 0; i < currentMonsters.length; i++) {
		// check for stockpile
		if(currentMonsters[i].stockpile.enabled && currentMonsters[i].block > 0) {
			applyArmor(currentMonsters[i].block, currentMonsters[i]);
		}
		game.message('End ' + currentMonsters[i].guid + ' turn ' + game.round);
		currentMonsters[i].chosenMoveSetIndex = -1;
	}
	
	beginTurn();

}



function clearTurnEffects(from) {
	for(let i = 0; i < game.effects.length; i++) {
		if(from[game.effects[i].id].turns > 1) {
			from[game.effects[i].id].turns -= 1;
		} else if(from[game.effects[i].id].turns == 1) {
			from[game.effects[i].id].turns -= 1;
			from[game.effects[i].id].current -= from[game.effects[i].id].temp;
			from[game.effects[i].id].temp = 0;
		} else {
			if(from.type == 'player') {
				if(from[game.effects[i].id].persist == false && from[game.effects[i].id].turns > -1) {
					// effects could potentially persist from previous combat, but only matters to player
					from[game.effects[i].id].turns = 0;
					from[game.effects[i].id].current -= from[game.effects[i].id].temp;
					from[game.effects[i].id].temp = 0;
				} else if(from[game.effects[i].id].turns == -1) {
					from[game.effects[i].id].current -= from[game.effects[i].id].temp;
					from[game.effects[i].id].temp = 0;
				}
			} else if(from[game.effects[i].id].turns == 0) {
				from[game.effects[i].id].current -= from[game.effects[i].id].temp;
				from[game.effects[i].id].temp = 0;
			}
		}
	}

	// one-off resets
	from.momentumAmount = 0;
}

function clearCombatEffects() {
	for(let i = 0; i < game.effects.length; i++) {
		if(player[game.effects[i].id].turns > -1 && player[game.effects[i].id].persist != true) {
			player[game.effects[i].id].temp = 0;
			player[game.effects[i].id].turns = 0;
			player[game.effects[i].id].current = 0;
		} else if(player[game.effects[i].id].turns == -1) {
			player[game.effects[i].id].temp = 0;
			player[game.effects[i].id].turns = 0;
			player[game.effects[i].id].current = 0;
		}
	}
}

function clearCombatTreasureCounters() {
	for(let i = 0; i < player.treasures.length; i++) {
		let trigger = player.treasures[i].trigger;
		if(trigger.counter > -1) {
			if(trigger.per == 'turn' || (trigger.once && trigger.activated)) {
				trigger.counter = 0;
				$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
			}
		}
		trigger.activated = false;
	}
}

function removeHexes(to) {
	for(let i = 0; i < game.effects.length; i++) {
		if(to[game.effects[i].id].hexed) {
			to[game.effects[i].id].temp = 0;
			to[game.effects[i].id].turns = 0;
			to[game.effects[i].id].current = 0;
		}
	}
}

function applyEffect(effect, to, turns = -1) {
	// check for vex
	if(player.vex.current > 0 && effect.hex) {
		player.vex.current -= 1;
	} else {
		if(effect.amount != undefined) {
			to[effect.effect].current = Math.round(((to[effect.effect].current + effect.amount) + Number.EPSILON) * 100) / 100;
			// rainbow is a special case and shouldn't technically be an effect, but it is, so treat it differently
			if(effect.effect != 'rainbow') {
				// if turns is set to -1 it means this is not a temporary effect. this way, both permanent and temp effects can be added together
				if(turns > -1) {
					to[effect.effect].temp = Math.round(((to[effect.effect].temp + effect.amount) + Number.EPSILON) * 100) / 100;
				}
			}
			if(turns > -1) {
				to[effect.effect].turns += turns;
			} else {
				to[effect.effect].turns = turns;
			}
			if(effect.persist) to[effect.effect].persist = effect.persist;
			if(effect.hex) to[effect.effect].hexed = true;
		} else if(effect.base != undefined) {
			to[effect.effect].base += effect.base;
		}
		if(to.type == 'monster') {
			monsters.updateStatusBar();
		}
		if(effect.effect == 'rainbow') {
			updateRainbowDom(to);
		}
	}
}

function clearTurnAbilities(from) {
	for(let i = 0; i < game.abilities.length; i++) {
		if(from[game.abilities[i].id].turns > 1) {
			from[game.abilities[i].id].turns -= 1;
			from[game.abilities[i].id].enabled = true;
		// effects could potentially persist from previous combat for player
		} else if(from[game.abilities[i].id].persist == false && from[game.abilities[i].id].turns > -1) {
			from[game.abilities[i].id].turns = 0;
			from[game.abilities[i].id].enabled = false;
		}
	}
}

function clearCombatAbilities() {
	for(let i = 0; i < game.abilities.length; i++) {
		if(player[game.abilities[i].id].persist == false && player[game.abilities[i].id].turns > -1) {
			player[game.abilities[i].id].enabled = false;
			player[game.abilities[i].id].turns = 0;
		}
	}
}

function applyAbility(ability, to, turns = -1) {
	to[ability.ability].enabled = ability.enabled;
	//to[ability.ability].baseTurns += turns;
	if(ability.hex) {
		to[ability.ability].turns = turns;
	} else {
		to[ability.ability].turns += turns;
	}
	if(to[ability.ability].baseTurns < -1) to[ability.ability].baseTurns = -1;
	if(to[ability.ability].turns < -1) to[ability.ability].turns = -1;
	if(ability.persist) {
		to[ability.ability].persist = ability.persist;
	}
	if(to.type == 'monster') monsters.updateStatusBar();
}

function endCombat() {

	if(!game.combatEndedFlag) {

		game.combatEndedFlag = true;

		game.message('End combat floor ' + game.floor);

		$('.combat').removeClass('shown');
		$('.candy').removeClass('clickable').addClass('trashable');
		$('.player-cards').empty();
		$('.monster-panel').empty();
		$('body').removeClass('combating');

		heal(player, player.heal.current);
		
		let courageAmount = 1;
		gainCourage(courageAmount);

		let aggroAmount = 1;
		updateAggro(aggroAmount);
		
		game.candyChance += 10;
		game.shardChance += 5;
		clearCombatEffects();
		clearCombatAbilities();
		clearCombatTreasureCounters();

		rewardsScreen();

		courageScreen();

		treasureScreen();

	}

}

function heal(creature, amount) {

	amount = parseFloat(amount);

	creature.health.current += (amount + creature.mend.current);
	if(creature.health.current > creature.health.max) creature.health.current = creature.health.max;

	setStatus();

}

function gainCourage(amount) {
	
	amount = parseFloat(amount);

	player.courage += amount;

	setStatus();

}

async function updateAggro(amount) {

	if(amount != undefined) {

		amount = parseFloat(amount);

		// are we reducing aggro or increasing it?
		if(amount < 0) {
			for(let i = 0; i > amount; i--) {
				player.aggro.current -= 1;
				if(game.aggroThresholds.includes(player.aggro.current)) {
					player.aggro.level -= 1;
					$('.aggro-bar span.level').html(player.aggro.level);
					$('.aggro-bar').addClass('level-up');
					await util.wait(1100);
					$('.aggro-bar').removeClass('level-up');
				}
			}
		} else {
			for(let i = 0; i < amount; i++) {
				player.aggro.current += 1;
				if(game.aggroThresholds.includes(player.aggro.current) || player.aggro.current > game.aggroThresholds.at(-1)) {
					player.aggro.level += 1;
					$('.aggro-bar span.level').html(player.aggro.level);
					$('.aggro-bar').addClass('level-up');
					await util.wait(1100);
					$('.aggro-bar').removeClass('level-up');
				}
			}
		}

	}

	$('.aggro-bar span.level').html(player.aggro.level);
	util.updateAggroPercentage();
	setStatus();

}

function loot(type, tier = 3) {

	$('.loot-screen').addClass('shown');
	// for normal treasure screens, any tier 1 - 3
	let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier <= tier);

	switch(type) {
		case 'shard':
			var index = util.randArrayIndex(treasures.shards);
			util.appendShard(treasures.shards[index], '.loot-items');
		break;
		case 'arena':
			// for arena screens, only tier 3
			possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == tier);
			if(possibleTreasures.length > 0) {
				let treasure = util.weightedRandom(possibleTreasures);
				treasure.desc = Deck().buildDescription(treasure);
				util.appendTreasure(treasure, '.loot-items');
			}
		break;
		case 'treasure':
			if(possibleTreasures.length > 0) {
				for(let i = 0; i < 69; i++) { //TODO: get rid of this loop, should just be one treasure
					//let treasure = util.weightedRandom(possibleTreasures);
					let treasure = treasures.treasures[i];
					treasure.desc = Deck().buildDescription(treasure);
					util.appendTreasure(treasure, '.loot-items');
				}
			}
			var numEssences = util.randFromRange(1, 3);
			for(let i = 0; i < numEssences; i++) {
				var index = util.randArrayIndex(game.essences);
				util.appendEssence(game.essences[index], '.loot-items');
			}
			var numShards = util.randFromRange(1, 3);
			for(let i = 0; i < numShards; i++) {
				var index = util.randArrayIndex(treasures.shards);
				util.appendShard(treasures.shards[index], '.loot-items');
			}
			var numCandies = util.randFromRange(1, 3);
			for(let i = 0; i < 39; i++) {
				//let candy = util.weightedRandom(treasures.candies);
				let candy = treasures.candies[i];
				let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
				copiedCandy.desc = Deck().buildDescription(copiedCandy);
				let clickable = player.candies.length < game.candySlots ? true : false;
				util.appendCandy(copiedCandy, '.loot-items', clickable);
			}
		break;
		case 'candy':
			for(let i = 0; i < tier; i++) {
				let candy = util.weightedRandom(treasures.candies);
				let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
				copiedCandy.desc = Deck().buildDescription(copiedCandy);
				let clickable = player.candies.length < game.candySlots ? true : false;
				util.appendCandy(copiedCandy, '.loot-items', clickable);
			}
		break;
	}
	
}

function endGame(result) {

	$('.combat').removeClass('shown');
	if(result == 'victory') {
		$('.victory').addClass('shown');
	} else {
		$('.loss').addClass('shown');
	}

}

function rewardsScreen() {

	$('.rewards').addClass('shown');
	$('.rewards-loot').empty();
	$('.rewards-loot-wrapper').removeClass('shown');

	game.toExclude = [];

	for(let i = 0; i < game.cardRewardNumber; i++) {
		let card = Deck().decideCard();
		util.appendCard(card, '.rewards-cards');
	}
	if(util.chance(game.candyChance)) {
		game.candyChance -= 10;
		if(game.candyChance < 0) game.candyChance = 0;
		let candy = util.weightedRandom(treasures.candies);
		let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
		let clickable = player.candies.length < game.candySlots ? true : false;
		util.appendCandy(copiedCandy, '.rewards-loot', clickable);
		$('.rewards-loot-wrapper').addClass('shown');
	}
	if(util.chance(game.shardChance) && deck.numOpenSlots() > 0) {
		game.shardChance -= 5;
		if(game.shardChance < 0) game.shardChance = 0;
		const index = util.randArrayIndex(treasures.shards);
		util.appendShard(treasures.shards[index], '.rewards-loot');
		$('.rewards-loot-wrapper').addClass('shown');
	}

}

function treasureScreen() {

	game.treasureChance += game.floor;
	if(game.mapType == 'arena') {

		let tier = 3;
		loot('arena', tier);
		game.treasureChance = 0;
		
	} else if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate') {

		let tier = 4;
		loot('arena', tier);
		game.treasureChance = 0;
		
	} else if(util.chance(game.treasureChance)) {

		loot('treasure');
		game.treasureChance = 0;
		
	}

}

function courageScreen() {

	if(game.floor % game.courageInterval == 0) {

		$('.courage-screen').addClass('shown');
		$('.courage-remove').addClass('shown');

		let theseTreasures = [];
		let possibleTreasures = treasures.treasures.filter(i => i.owned == false);

		for(let i = 0; i < game.courageTreasureAmount; i++) {
			let thisTreasure = util.weightedRandom(possibleTreasures);
			theseTreasures.push(thisTreasure);
			possibleTreasures = possibleTreasures.filter(i => i.id !== thisTreasure.id);
			if(thisTreasure == undefined) break;
			thisTreasure.desc = Deck().buildDescription(thisTreasure);
			util.appendTreasure(thisTreasure, '.courage-items');
		}

		for(let i = 0; i < game.courageCandyAmount; i++) {
			let thisCandy = util.weightedRandom(treasures.candies);
			thisCandy.desc = Deck().buildDescription(thisCandy);
			let clickable = player.candies.length < game.candySlots ? true : false;
			util.appendCandy(thisCandy, '.courage-items', clickable);
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = Deck().decideCard('attack');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = Deck().decideCard('tool');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = Deck().decideCard('magic');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = Deck().decideCard('ability', 'uncommon');
			util.appendCard(card, '.courage-cards');
		}

		updateItemCost();

	}

}

function updateItemCost() {
	$('.courage-items .treasure-courage').each(function(e) {
		let cost = $(this).attr('data-amount');
		if(cost > player.courage) {
			$(this).parent().addClass('too-expensive');
		}
	});
	$('.courage-items .candy-courage').each(function(e) {
		let cost = $(this).attr('data-amount');
		if(cost > player.courage) {
			$(this).parent().addClass('too-expensive');
		}
	});
	$('.courage-cards .card-courage').each(function(e) {
		let cost = $(this).attr('data-amount');
		if(cost > player.courage) {
			$(this).parent().addClass('too-expensive');
		}
	});
	let cost = game.removeCardCost;
	if(cost > player.courage) {
		$('.courage-remove').addClass('too-expensive');
	}
	
	setStatus();
}

function addCandy(add) {

	if(player.candies.length < game.candySlots) {
		let candy = treasures.candies.find(({ id }) => id === add);
		let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
		copiedCandy.desc = Deck().buildDescription(copiedCandy);
		Player().addCandy(copiedCandy, player);
		if(player.candies.length == game.candySlots) {
			$('.loot-items .candy').removeClass('clickable');
		}
	}

}

async function eatCandy(add, monster = false) {

	let candy = player.candies.find(({ guid }) => guid === add);
	player.candies = player.candies.filter(i => i.guid !== candy.guid);

	let dmg = candy.dmg;
	if(monster) {
		let currentMonster = game.currentMonsters.filter(i => i.guid == monster.data('guid'));
		if(dmg != undefined) {
			if(dmg.length > 0) {
				for(let i = 0; i < dmg.length; i++) {
					await attackMonster(currentMonster[0], dmg[i]);
					if(monsters.allDead()) {
						endCombat();
						break;
					}
				}
			}
		}
	}
	let blk = candy.blk;
	if(blk != undefined) {
		if(blk.length > 0) {
			for(let i = 0; i < blk.length; i++) {
				applyBlock(blk[i], player);
			}
		}
	}
	let armor = candy.armor;
	if(armor != undefined) {
		if(armor.length > 0) {
			for(let i = 0; i < armor.length; i++) {
				applyArmor(armor[i], player);
			}
		}
	}
	let effects = candy.effects;
	if(effects != undefined) {
		for(let e = 0; e < effects.length; e++) {
			let turns = effects[e].turns == undefined ? -1 : effects[e].turns;
			applyEffect(effects[e], player, turns);
		}
	}
	let abilities = candy.abilities;
	if(abilities != undefined) {
		for(let e = 0; e < abilities.length; e++) {
			let turns = abilities[e].baseTurns == undefined ? -1 : abilities[e].baseTurns;
			applyAbility(abilities[e], player, turns);
		}
	}
	let actions = candy.actions;
	if(actions != undefined) {
		let update = await processActions(actions);
		if(update) combatDeck.updateCardPlayability(player, combatDeck);
	}
	let magic = candy.magic;
	if(magic != undefined) {
		for(let i = 0; i < magic.length; i++) {
			applyMagic(magic[i], player);
			if(monsters.allDead()) {
				endCombat();
				break;
			}
		}
	}

	// we now have at least one candy slot open, so re-enable clickability
	$('.loot-items .candy').addClass('clickable');
	
	setStatus();

}

function trashCandy(add) {

	let candy = player.candies.find(({ guid }) => guid === add);
	player.candies = player.candies.filter(i => i.guid !== candy.guid);

}

function addTreasure(add) {

	let treasure = treasures.treasures.find(({ id }) => id === add);
	treasure.desc = Deck().buildDescription(treasure);
	Player().addTreasure(treasure, player);

	// treasures that have counters don't get applied immediately
	if(treasure.trigger.counter < 0) {
		activateTreasure(treasure);
	}

}

function buyTreasure(id) {

	addTreasure(id);
	let treasure = util.getTreasureById(id, treasures.treasures);
	player.courage -= treasure.courage;
	updateItemCost();
		
}

function buyCandy(id) {

	let bought = false;

	if(player.candies.length < 3) {
		addCandy(id);
		let candy = util.getCandyById(id, treasures.candies);
		player.courage -= candy.courage;
		updateItemCost();
		bought = true;
	}

	return bought;
		
}

function buyCard(id) {

	addCardToDeck(id);
	let card = util.getCardById(id, allCards);
	player.courage -= card.courage;
	updateItemCost();
		
}

async function activateTreasure(treasure) {

	if(treasure.effects != undefined) {
		for(let e = 0; e < treasure.effects.length; e++) {
			let turns = treasure.effects[e].turns == undefined ? -1 : treasure.effects[e].turns;
			applyEffect(treasure.effects[e], player, turns);
		}
	}
	if(treasure.abilities != undefined) {
		for(let e = 0; e < treasure.abilities.length; e++) {
			let turns = treasure.abilities[e].baseTurns == undefined ? treasure.abilities[e].turns : treasure.abilities[e].baseTurns;
			if(turns == undefined) turns = -1;
			applyAbility(treasure.abilities[e], player, turns);
		}
	}
	if(treasure.actions != undefined) {
		await processActions(treasure.actions);
	}
	treasure.trigger.activated = true;
	setStatus();

}

function addCardToDeck(id) {

	deck.addCard(id);
	setStatus();

}

function removeCardFromDeck(guid, cost = 0) {

	player.courage -= cost;
	deck.removeCard(guid);

	setStatus();

}

function selectCard(elem) {

	if(elem.hasClass('selected')) {
		deselectCard(elem);
		combatDeck.updateCardPlayability(player, combatDeck);
		elem.find('.button.play-card').remove();
	} else {
		//let card = util.getCardById(elem.data('id'), allCards); // was this wrong?
		let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
		$('.card.playable').removeClass('selected'); // deselect any other previously selected cards
		$('.button.play-card').remove();
		if(!$('body').hasClass('selecting')) {
			if(elem.hasClass('combinable')) {
				$('.card.playable:not(.combinable').removeClass('playable');
				elem.addClass('selected');
				// some cards can be combined or played. does player want to play this card instead of combine it?
				if(util.hasPlayAction(card)) {
					util.appendConfirm(card, elem);
				}
			} 
			if(card.target == 'monster') {
				elem.addClass('selected');
				$('.monster:not(.dead)').addClass('clickable');
				drawArrow(elem);
			} else {
				if(!elem.hasClass('combinable')) {
					playCard(elem);
				}
			}
		}
	}
}

// cursor arrow
const line = $('#curve')[0];
let startCoords = {x: 0, y: 0};
let endCoords = {x: 0, y: 0};
let startElement = null;
function drawArrow(elem) {
	$('#curve, #arrow').addClass('shown');
	startElement = elem[0];
    const rect = startElement.getBoundingClientRect();
    setStartCoords({
        x: rect.x + (rect.width / 2),
        y: rect.y + (rect.height / 2),
    });
    setEndCoords({
		x: rect.x + (rect.width / 2), 
		y: rect.y + (rect.height / 2),
	});
}
function removeArrow() {
	startCoords = {x: 0, y: 0};
	endCoords = {x: 0, y: 0};
	$('#curve, #arrow').removeClass('shown');	
}
function draw() {

	var p1x = parseFloat(startCoords.x);
	var p1y = parseFloat(startCoords.y);
	var p2x = parseFloat(endCoords.x);
	var p2y = parseFloat(endCoords.y);

	// mid-point of line:
	var mpx = (p2x + p1x) * 0.5;
	var mpy = (p2y + p1y) * 0.5;

	// angle of perpendicular to line:
	var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

	// distance of control point from mid-point of line:
	var offset = 90;

	// location of control point:
	var c1x = mpx + offset * Math.cos(theta);
	var c1y = mpy + offset * Math.sin(theta);

	// show where the control point is:
	var c1 = document.getElementById("cp");
	c1.setAttribute("cx", c1x);
	c1.setAttribute("cy", c1y);

	// construct the command to draw a quadratic curve
	var curve = "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;
	var curveElement = document.getElementById("curve");
	curveElement.setAttribute("d", curve);

	var arrowElement = document.getElementById("arrow");
	arrowElement.setAttribute("x", p2x - 40);
	arrowElement.setAttribute("y", p2y - 40);

}
function setStartCoords(coords) {
  startCoords = coords;
  draw();
}
function setEndCoords(coords) {
  endCoords = coords;
  draw();
}
document.addEventListener('mousemove', event => {
  if (!startElement) {
    return;
  }
  setEndCoords({x: event.clientX, y: event.clientY});
});





function retainCard(elem) {

	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	if(elem.hasClass('retain')) {
		elem.removeClass('retain');
		card.tempRetain = false;
	} else if($('.card.retain').length < player.cardRetain) {
		elem.addClass('retain');
		card.tempRetain = true;
	}

}

function markDiscard(elem) {

	if(elem.hasClass('discard')) {
		elem.removeClass('discard');
	} else if($('.card.discard').length < game.toDiscard) {
		elem.addClass('discard');
	}

}

function markDestroy(elem) {

	if(elem.hasClass('destroy')) {
		elem.removeClass('destroy');
	} else if($('.card.destroy').length < game.toDestroy) {
		elem.addClass('destroy');
	}

}

function discardCards() {

	$('.card.discard').each(function(e) {

		discardCard($(this));

	}).promise().done(function() {

		$('.message').removeClass('shown');
		$('.discard-done').removeClass('shown');
		$('.card').removeClass('discard discardable');
		if(player.speed.current > 0) $('.draw-card').removeClass('disabled');
		game.toDiscard = 0;
		combatDeck.updateCardPlayability(player, combatDeck);
		setStatus();
		$('body').removeClass('selecting discarding');

	});
}

async function discardCard(elem) {
	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	combatDeck.discardCard(card, combatDeck);

	await processCard(card, false, 'discard');

	setStatus();
}

function destroyCards() {

	$('.card.destroy').each(function(e) {

		destroyCard($(this));

	}).promise().done(function() {

		$('.message').removeClass('shown');
		$('.destroy-done').removeClass('shown');
		$('.card').removeClass('destroy destroyable');
		if(player.speed.current > 0) $('.draw-card').removeClass('disabled');
		game.toDestroy = 0;
		combatDeck.updateCardPlayability(player, combatDeck);
		$('body').removeClass('selecting destroying');
		
	});

}

async function destroyCard(elem) {
	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	combatDeck.destroyCard(card, combatDeck);

	await processCard(card, false, 'destroy');

	setStatus();
}


function shouldDestroyCard(card) {

	let vanish = util.getCardAttribute(card, 'vanish');
	let use = util.getCardAttribute(card, 'use');
	let breakable = util.getCardAttribute(card, 'breakable');

	return (vanish || use == 0 || (breakable && use == 0));

}

function activateCard(card) {

	let type = util.getCardAttribute(card, 'type');

	return (type == 'ability');

}


function deselectCard(elem) {

	elem.removeClass('selected');

	removeArrow();

	$('.monster').removeClass('clickable');

}

function updateCritChance() {

	let crit = game.attackCardsPlayed + player.rowdy.current;
	if(crit > 100) crit = 100;
	game.critChance = crit;

}

function combineCards(elem) {
	
	playCard(elem, undefined, 'combine');

	$('.card.playable.combinable.selected').each(function() {

		let card = util.getCardByGuid($(this).data('guid'), combatDeck.handCards);
		combatDeck.destroyCard(card, combatDeck);
		processCard(card, false, 'vanishes');
		
	}).promise().done(function() {

		setStatus();
		
	});

}

async function playCard(elem, monster = undefined, type = false) {

	$('.monster').removeClass('clickable');
	elem.removeClass('selected playable');
	removeArrow();

	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);

	if(card == undefined) return false;

	let currentMonster = false;
	if(monster != undefined) {
		currentMonster = game.currentMonsters.filter(i => i.guid == monster.data('guid'));
	}

	let mana = util.getCardAttribute(card, 'mana');
	let multiply = 1;
	let numShards = util.getShardNum(card, 'any');
	if(mana == '?') {
		if(numShards==1) {
			if(player.speed.current > player.mana.current) {
				multiply = player.speed.current;
			} else {
				multiply = player.mana.current;
			}
		} else if(numShards==2) {
			multiply = player.speed.current + player.mana.current;
		} else {
			multiply = player.mana.current;
		}

		// check for mystery
		if(player.mystery.current > 0) {
			multiply += player.mystery.current;
		}
	}

	await processCard(card, currentMonster, type, multiply);

	player.momentumAmount += player.momentum.current;

	if(mana == '?') {
		player.mana.current = 0;
	} else {
		player.mana.current -= mana;
	}
	if(player.mana.current <= 0) player.mana.current = 0;

	let use = util.getCardAttribute(card, 'use');
	if(use > 0) {
		use -= 1;
		card.use -= 1;
	}

	let linger = util.getCardAttribute(card, 'linger');

	// figure out what to do with card
	if(shouldDestroyCard(card)) {
		// check for breakable
		let skipDead = false;
		if(card.breakable) {
			removeCardFromDeck(elem.data('guid'));
			skipDead = true;
		}
		combatDeck.destroyCard(card, combatDeck, skipDead);
		await processCard(card, false, 'vanishes');
	} else if(activateCard(card)) {
		combatDeck.activateCard(card, combatDeck);
	} else if(linger == 0) {
		combatDeck.discardCard(card, combatDeck);
	}

	if(linger > 0) {
		linger -= 1;
		card.linger -= 1;
	}

	// check for bless
	if(card.type == 'ability' && player.bless.enabled) {
		let possibleCards = combatDeck.handCards.filter(i => i.mana > 0);
		let freeCard = util.randFromArray(possibleCards);
		if(freeCard != undefined) {
			freeCard.mana = 0;
			updateCardDescriptions('hand');
		}
	}

	combatDeck.updateCardPlayability(player, combatDeck);

	if(card.type == 'attack') updateTreasureTriggers('attackCardsPlayed');
	if(card.type == 'tool') updateTreasureTriggers('toolCardsPlayed');
	if(card.type == 'magic') updateTreasureTriggers('magicCardsPlayed');
	updateTreasureTriggers('cardsPlayed');
	setStatus();
	updateCritChance();
	monsterIntent();

}

async function processCard(card, currentMonster, type, multiply = 1) {

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	let target = currentMonster;
	// only process card draw target if monster has not been passed through
	if(target == false || target == undefined) {
		let cardTarget = util.getCardAttribute(card, 'target', type);
		if(cardTarget != undefined) {
			target = cardTarget;
			if(target == 'player') {
				target = undefined;
			} else {
				target = util.shuffle(currentMonsters);
			}
		} else {
			target = util.shuffle(currentMonsters);
		}
	}

	let dmg = util.getCardAttribute(card, 'dmg', type);
	await processDmg(dmg, target, multiply, card);

	let blk = util.getCardAttribute(card, 'blk', type);
	await processBlk(blk, multiply, card);

	let armor = util.getCardAttribute(card, 'armor', type);
	await processArmor(armor, multiply, card);

	let effects = util.getCardAttribute(card, 'effects', type);
	await processEffects(effects, currentMonster, multiply, card);

	let abilities = util.getCardAttribute(card, 'abilities', type);
	await processAbilities(abilities, currentMonster, card);

	let magic = util.getCardAttribute(card, 'magic', type);
	await processMagic(magic, multiply, card);

	let actions = util.getCardAttribute(card, 'actions', type);
	await processActions(actions, false, multiply, card);

}

async function processDmg(dmg, currentMonster, multiply, card = false) {
	if(dmg.length) {
		for(let i = 0; i < multiply; i++) {
			let criticalHit = util.chance(game.critChance);
			for(let i = 0; i < dmg.length; i++) {
				let thisDmg = dmg[i] + player.momentumAmount;
				if(currentMonster) {
					// check for fatality
					if(player.fatality.current > 0 && (game.highestDmgRoll * player.fatality.current) > thisDmg) {
						thisDmg = game.highestDmgRoll * player.fatality.current;
					}
					// check for age
					if(card.age > 0) {
						if(player.wisdom.current != 1) {
							thisDmg += Math.round(card.age * player.wisdom.current);
						} else {
							thisDmg += card.age;
						}
					}
					let d = criticalHit ? crit(thisDmg) : thisDmg;
					await attackMonster(currentMonster[0], d);
					if(criticalHit) {
						game.attackCardsPlayed = 0;
						player.rowdy.current = player.rowdy.base;
						$('.crit').addClass('shown');
					} else {
						game.attackCardsPlayed += 1;
						$('.crit').removeClass('shown');
					}
					if(monsters.allDead()) {
						await util.wait(800);
						endCombat();
						return;
					}
				} else {
					await attackPlayer(false, dmg[i]);
				}
				await util.wait(game.animationGap);
			}
		}
		updateCritChance();
	}
}
async function processBlk(blk, multiply, card = false) {
	if(blk.length) {
		for(let i = 0; i < multiply; i++) {
			for(let i = 0; i < blk.length; i++) {
				// check for age
				if(card.age > 0) {
					if(player.wisdom.current != 1) {
						blk[i] += Math.round(card.age * player.wisdom.current);
					} else {
						blk[i] += card.age;
					}
				}
				applyBlock(blk[i], player);
				await util.wait(game.animationGap);
			}
		}
	}
}
async function processArmor(armor, multiply = 1, card = false) {
	if(armor.length) {
		for(let i = 0; i < multiply; i++) {
			for(let i = 0; i < armor.length; i++) {
				// check for age
				if(card.age > 0) {
					if(player.wisdom.current != 1) {
						armor[i] += Math.round(card.age * player.wisdom.current);
					} else {
						armor[i] += card.age;
					}
				}
				applyArmor(armor[i], player);
				await util.wait(game.animationGap);
			}
		}
	}
}
async function processEffects(effects, currentMonster = false, multiply = 1, card = false) {
	if(effects != undefined) {
		for(let i = 0; i < multiply; i++) {
			for(let e = 0; e < effects.length; e++) {
				let to = player
				if(effects[e].hex && currentMonster) {
					to = currentMonster[0];
				} else if(effects[e].hex) {
					let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
					to = util.shuffle(currentMonsters);
					to = to[0];
				}
				let turns = effects[e].turns == undefined ? -1 : effects[e].turns;
				applyEffect(effects[e], to, turns);
				await util.wait(game.animationGap);
				setStatus();
			}
		}
	}
}
async function processAbilities(abilities, currentMonster, card = false) {
	if(abilities != undefined) {
		for(let e = 0; e < abilities.length; e++) {
			let to = player
			let turns = abilities[e].turns == undefined ? -1 : abilities[e].turns;
			if(abilities[e].hex && currentMonster) {
				to = currentMonster[0];
				turns = 0; // hexes always completely remove the buff
			} else if(abilities[e].hex) {
				let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
				to = util.shuffle(currentMonsters);
				to = to[0];
				turns = 0;
			}
			applyAbility(abilities[e], to, turns);
			await util.wait(game.animationGap);
			setStatus();
		}
	}
}
async function processMagic(magic, multiply, card = false) {
	if(magic.length) {
		for(let i = 0; i < multiply; i++) {
			for(let i = 0; i < magic.length; i++) {
				// check for age
				if(card.age > 0) {
					if(player.wisdom.current != 1) {
						magic[i].amount += Math.round(card.age * player.wisdom.current);
					} else {
						magic[i].amount += card.age;
					}
				}
				applyMagic(magic[i], player);
				await util.wait(game.animationGap);
				setStatus();
			}
		}
	}
}
async function processActions(actions, monster = false, multiply = 1, playedCard = false) {
	let update = true;
	if(actions != undefined) {
		for(let m = 0; m < multiply; m++) {
			for(let e = 0; e < actions.length; e++) {
				switch(actions[e].action) {
					case 'addCard':

						let addCard = '';
						let thisCard = {};
						let possibleCards = [];

						if(actions[e].what != undefined) {
							addCard = actions[e].what;
						} else {
							if(actions[e].type != undefined) {
								if(actions[e].tier != undefined) {
									if(actions[e].type == 'any') {
										possibleCards = AllCards().cards.filter(i => i.addable == true && i.tier == actions[e].tier);
									} else if(actions[e].type == 'converter' || actions[e].type == 'bottled' ) {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type && i.tier == actions[e].tier);
									} else {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type && i.tier == actions[e].tier && i.addable == true);
									}
								} else {
									if(actions[e].type == 'any') {
										possibleCards = AllCards().cards.filter(i => i.addable == true);
									} else if(actions[e].type == 'converter' || actions[e].type == 'bottled' ) {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type);
									} else {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type && i.addable == true);
									}
								}
							} else {
								if(actions[e].tier != undefined) {
									possibleCards = AllCards().cards.filter(i => i.addable == true && i.tier == actions[e].tier);
								}
							}
					
						}

						for(let i = 0; i < actions[e].value; i++) {

							thisCard = util.randFromArray(possibleCards);
							possibleCards = possibleCards.filter(i => i.id !== thisCard.id);

							if(addCard == '') addCard = thisCard.id;

							if(actions[e].select != undefined) {
								thisCard = combatDeck.initCard(thisCard);
								combatDeck.chooseCards.push(thisCard);
								game.toPile = actions[e].to;
							} else {
								let shards = actions[e].with != undefined ? actions[e].with : [];
								combatDeck.addCard(addCard, combatDeck, actions[e].to, player, shards);
							}
						}

						if(combatDeck.chooseCards.length > 0) {
							game.toPick = actions[e].select;
							viewChooseCards(util.sort(combatDeck.chooseCards));
						}

					break;
					case 'transmute':
						game.toPick = actions[e].select;
						game.fromPile = actions[e].from;
						var cards = [];
						if(actions[e].from == 'handCards') {
							if(playedCard) {
								// don't include the card that was just played because it hasn't been discarded yet
								cards = combatDeck.handCards.filter(i => i.guid !== playedCard.guid);
							} else {
								cards = combatDeck.handCards;
							}
						} else if(actions[e].from == 'drawCards') {
							cards = combatDeck.drawCards;
						} else if(actions[e].from == 'discardCards') {
							cards = combatDeck.discardCards;
						} else {
							cards = deck.cards;
						}
						if(cards.length > 0) {
							if(game.toPick > cards.length) game.toPick = cards.length;
							viewChooseCards(cards, 'transmutable');
						}
					break;
					case 'remove':
						game.toPick = actions[e].select;
						var cards = deck.cards;
						if(cards.length > 0) {
							if(game.toPick > cards.length) game.toPick = cards.length;
							viewChooseCards(cards, 'removable');
						}
					break;
					case 'ensharden':
						game.toPick = actions[e].select;
						game.toPile = actions[e].from;
						var cards = [];
						let shard = actions[e].type;
						let thisShard = shard;
						if(actions[e].from == 'handCards') {
							if(playedCard) {
								// don't include the card that was just played because it hasn't been discarded yet
								cards = combatDeck.handCards.filter(i => i.guid !== playedCard.guid);
							} else {
								cards = combatDeck.handCards;
							}
						} else if(actions[e].from == 'drawCards') {
							cards = combatDeck.drawCards;
						} else if(actions[e].from == 'discardCards') {
							cards = combatDeck.discardCards;
						} else if(actions[e].from == 'deck') {
							cards = deck.cards;
						} else {
							cards = combatDeck.allLiveCards(combatDeck);
						}
						// make sure there are enough open slots
						let totalOpenSlots = deck.numOpenSlots(cards);
						for(let i = 0; i < cards.length; i++) {
							if(deck.hasOpenSlot(cards[i])) {
								if(!actions[e].random) {
									util.appendCard(cards[i], '.shard-cards-panel .cards');
								}
								combatDeck.chooseCards.push(cards[i]);
							}
						}
						if(combatDeck.chooseCards.length > 0) {
							if(actions[e].random) {
								let num = game.toPick;
								if(num < 0) num = deck.numOpenSlots(combatDeck.chooseCards);
								for(let i = 0; i < num; i++) {
									if(shard == 'random') {
										thisShard = util.randFromArray(treasures.shards);
										thisShard = thisShard.id;
									}
									let card = util.randFromArray(combatDeck.chooseCards);
									if(card != undefined) {
										deck.attachShard(card, thisShard);
										if(!deck.hasOpenSlot(card)) {
											combatDeck.chooseCards = combatDeck.chooseCards.filter(i => i.guid !== card.guid);
										}					
									}
								}						
								updateCardDescriptions(game.toPile);
							} else {
								if(game.toPick > totalOpenSlots) game.toPick = totalOpenSlots;
								if(totalOpenSlots > 0) {
									chooseShardCard(shard, combatDeck.chooseCards);
								}
							}
						}
					break;
					case 'draw':
						for(let i = 0; i < actions[e].value; i++) {
							addCardTo('draw', null, 'handCards', true);
						}
					break;
					case 'discard':
						if(combatDeck.handCards.length > 0) {
							$('.message').html('choose cards to discard').addClass('shown');
							$('.discard-done').addClass('shown');
							$('.player-cards .card').addClass('discardable').removeClass('playable');
							$('.draw-card').addClass('disabled');
							$('body').addClass('discarding selecting');
							game.toDiscard = actions[e].value;
							update = false;
						}
					break;
					case 'destroy':
						if(combatDeck.handCards.length > 0) {
							$('.message').html('choose cards to destroy').addClass('shown');
							$('.destroy-done').addClass('shown');
							$('.player-cards .card').addClass('destroyable').removeClass('playable');
							$('.draw-card').addClass('disabled');
							$('body').addClass('destroying selecting');
							game.toDestroy = actions[e].value;
							update = false;
						}
					break;
					case 'findDrawCard':
						if(combatDeck.drawCards.length > 0) {
							game.toPick = actions[e].value;
							viewDrawCards();
							$('.draw-cards-panel .card').addClass('pickable');
							$('.draw-cards-panel .message').html('Add cards to your hand');
						}
					break;
					case 'findDiscardCard':
						if(combatDeck.discardCards.length > 0) {
							game.toPick = actions[e].value;
							viewDiscardCards();
							$('.discard-cards-panel .card').addClass('pickable');
							$('.discard-cards-panel .message').html('Add cards to your hand');
						}
					break;
					case 'findDeadCard':
						if(combatDeck.deadCards.length > 0) {
							game.toPick = actions[e].value;
							viewDeadCards();
							$('.dead-cards-panel .card').addClass('pickable');
							$('.dead-cards-panel .message').html('Add cards to your hand');
						}
					break;
					case 'stat':
						if(actions[e].key == undefined) {
							// hacky provision for courage :( - it's the only simple/single value stat that needs to change numerically
							if(actions[e].what == 'courage') {
								player[actions[e].what] += actions[e].value;
							} else {
								player[actions[e].what] = actions[e].value;
							}
						} else {
							if(actions[e].key == 'type') {
								player[actions[e].what][actions[e].key] = actions[e].value;
							} else {
								player[actions[e].what][actions[e].key] += actions[e].value;
								// if we increased speed we might need to re-enable draw card button
								if(actions[e].what == 'speed' && actions[e].value > 0) {
									$('.draw-card').removeClass('disabled');
								}
							}
						}
						// if we're changing the rainbow max stat, need to process possible rainbow activation & dom
						if(actions[e].what == 'rainbow') {
							//updateRainbowDom(player);
							if(player.rainbow.current >= player.rainbow.max) {

							}
							let magic = {type: player.rainbow.type, amount: 0}
							applyMagic(magic, player);
						}
						// if max health was reduced and current health was at full, need to reduce current health
						if(player.health.max < player.health.current) {
							player.health.current = player.health.max;
						}
						// if we're updating stats with UI, need to process
						if(actions[e].what == 'aura' || actions[e].what == 'sparkle' || actions[e].what == 'shimmer') {
							updateEssenceLevels(actions[e].what, actions[e].value);
						}
					break;
					case 'removeHexes':
						if(actions[e].to=='player') {
							removeHexes(player);
						} else if(actions[e].to=='self') {
							removeHexes(monster);
						} else {

						}
					break;
					case 'playOldest':
						let card = combatDeck.getOldestCard(combatDeck.handCards);
						let domCard = util.getDomCardByGuid(card.guid);
						playCard(domCard);
					break;

				}
				await util.wait(game.animationGap);
				setStatus();
			}
		}
	}

	return update;

}

async function processQuest(elem) {

	let quest = game.currentQuest;
	let id = quest.id;
	let option = elem.attr('data-option');
	let subOptions = util.getQuestSubOptions(quest, option);

	switch(id) {
		case 'workshop':
			if(option == 'quickness') {
				let effects = [{effect: 'speed', base: 1}];
				await processEffects(effects);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'thickness') {
				let effects = [{effect: 'solid', base: 1}];
				await processEffects(effects);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'strength') {
				let effects = [{effect: 'might', base: 1}];
				await processEffects(effects);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wizardry') {
				let effects = [{effect: 'conjure', base: 1}];
				await processEffects(effects);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'oracle':
			if(option == 'simplicity') {
				let actions = [{action: 'remove', select: 1, from: 'allCards'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'metamorphosis') {
				let actions = [{action: 'transmute', select: 1, from: 'allCards'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'improvement') {
				let actions = [{action: 'ensharden', type: 'random', select: 1, from: 'deck', random: false}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'alchemy_lab':
			if(option == 'transform') {
				let actions = [{action: 'transmute', select: 3, from: 'allCards'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'midnight_glade':
			if(option == 'sleep') {
				let actions = [{action: 'remove', select: 1, from: 'allCards'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'midnight_meadow':
			if(option == 'sleep') {
				let actions = [{action: 'remove', select: 1, from: 'allCards'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'challenge':
			if(option == 'meet_challenge') {
				if(util.chance(75)) {
					gainCourage(3);
				} else {
					let actions = [{action: 'stat', what: 'health', key: 'current', value: -3}];
					await processActions(actions);
				}
			}
			if(option == 'rematch') {
				if(util.chance(50)) {
					gainCourage(5);
				} else {
					let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
					await processActions(actions);
				}
			}
			if(option == 'final_battle') {
				if(util.chance(25)) {
					gainCourage(10);
				} else {
					let actions = [{action: 'stat', what: 'health', key: 'current', value: -10}];
					await processActions(actions);
				}
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'deep_well':
			if(option == 'wish_for_protection') {
				await processArmor([20]);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_healing') {
				let actions = [{action: 'stat', what: 'health', key: 'current', value: 15}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_long_life') {
				let actions = [{action: 'stat', what: 'health', key: 'max', value: 7}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'library':
			if(option == 'find_a_card') {
				let actions = [{action: 'addCard', select: 1, value: 20, type: 'any', to: 'deck'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'altar':
			if(option == 'minor_sacrifice') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -4}];
				await processActions(actions);
			} else if(option == 'major_sacrifice') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 2);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -12}];
				await processActions(actions);
			} else if(option == 'ultimate_sacrifice') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 3);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -21}];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'reliquary':
			if(option == 'old_relic') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'max', value: -2}];
				await processActions(actions);
			} else if(option == 'ancient_relic') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 2);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'max', value: -5}];
				await processActions(actions);
			} else if(option == 'primeval_relic') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 3);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'max', value: -9}];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'oratory':
			if(option == 'pray') {
				let actions = [
					{action: 'stat', what: 'health', key: 'current', value: -8}
				];
				await processActions(actions);
				gainCourage(5);
			} else if(option == 'meditate') {
				let actions = [
					{action: 'stat', what: 'shimmer', key: 'current', value: 2},
					{action: 'stat', what: 'health', key: 'current', value: -8}
				];
				await processActions(actions);
			} else if(option == 'fast') {
				let actions = [
					{action: 'stat', what: 'sparkle', key: 'current', value: 2},
					{action: 'stat', what: 'health', key: 'current', value: -8}
				];
				await processActions(actions);
			} else if(option == 'hold_vigil') {
				let actions = [
					{action: 'stat', what: 'aura', key: 'current', value: 2},
					{action: 'stat', what: 'health', key: 'current', value: -8}
				];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'dark_sanctuary':
			if(option == 'physical_blow') {
				let actions = [
					{action: 'stat', what: 'health', key: 'current', value: -12}
				];
				await processActions(actions);
				updateAggro(-4);
			} else if(option == 'mental_blow') {
				let actions = [
					{action: 'stat', what: 'health', key: 'max', value: -5}
				];
				await processActions(actions);
				updateAggro(-4);
			} else if(option == 'spiritual_blow') {
				gainCourage(-4);
				updateAggro(-4);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'bakery':
			if(option == 'buy_1_candy') {
				gainCourage(-2);
				loot('candy', 1);
			} else if(option == 'buy_2_candies') {
				candyAmount = 2;
				gainCourage(-3);
				loot('candy', 2);
			} else if(option == 'buy_3_candies') {
				candyAmount = 3;
				gainCourage(-4);
				loot('candy', 3);
			}		
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'mossy_pedestal':
			if(option == 'attack') {
				let actions = [{action: 'addCard', select: 1, value: 3, type: 'attack', tier: 'rare', to: 'deck'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'tool') {
				let actions = [{action: 'addCard', select: 1, value: 3, type: 'tool', tier: 'rare', to: 'deck'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'ability') {
				let actions = [{action: 'addCard', select: 1, value: 3, type: 'ability', tier: 'rare', to: 'deck'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'magic') {
				let actions = [{action: 'addCard', select: 1, value: 3, type: 'magic', tier: 'rare', to: 'deck'}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'three_trunks':
			if(option == 'small_trunk') {
				gainCourage(1);
			}
			if(option == 'medium_trunk') {
				if(util.chance(66)) {
					gainCourage(3);
				}
			}
			if(option == 'large_trunk') {
				if(util.chance(33)) {
					gainCourage(6);
				}
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'leap_of_faith':
			if(option == 'leap1') {
				if(util.chance(25)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap2') {
				if(util.chance(35)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap3') {
				if(util.chance(45)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap4') {
				if(util.chance(55)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap5') {
				if(util.chance(65)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap6') {
				if(util.chance(75)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap7') {
				if(util.chance(85)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap8') {
				if(util.chance(95)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					$('.quest-screen').removeClass('shown');
					$('.quest-options').empty();
				}
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
			}
			if(option == 'leap9') {
				let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
				let treasure = util.weightedRandom(possibleTreasures);
				addTreasure(treasure.id); 
				let actions = [{action: 'stat', what: 'health', key: 'current', value: -5}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'stained_glass_mirror':
			if(option == 'see_color') {
				let actions = [{action: 'stat', what: 'rainbow', key: 'base', value: 5}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'see_depth') {
				let actions = [{action: 'stat', what: 'rainbow', key: 'max', value: 5}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'see_clarity') {
				let actions = [{action: 'stat', what: 'rainbow', key: 'max', value: -5}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'singing_cavern':
			if(option == 'look_around') {
				let actions = [{action: 'ensharden', type: 'random', select: 1, from: 'deck', random: false}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'go_deeper') {
				let actions = [
					{action: 'ensharden', type: 'random', select: 2, from: 'deck', random: false},
					{action: 'stat', what: 'health', key: 'current', value: -5}
				];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'fully_explore') {
				let actions = [
					{action: 'ensharden', type: 'random', select: 3, from: 'deck', random: false},
					{action: 'stat', what: 'health', key: 'current', value: -15}
				];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			}
		break;
		case 'lucky_spring':
			if(option == 'drink_a_draught') {
				let actions = [
					{action: 'ensharden', type: 'random', select: 2, from: 'deck', random: true},
				];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'labyrinth':
			// large prize
			if(option == 'right3221') {
				if(util.chance(75)) {
					let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 2);
					let treasure = util.weightedRandom(possibleTreasures);
					addTreasure(treasure.id); 
					loot('candy', 2);
					gainCourage(3);
				} else {
					let actions = [
						{action: 'stat', what: 'health', key: 'current', value: -10}
					];
					await processActions(actions);
				}
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'right1113' || option == 'straight1211' ||  option == 'straight1311' || option == 'left2122' ||  option == 'straight2213' || option == 'right2312' || option == 'straight3211' || option == 'right3221' || option == 'right3322' || option == 'straight3331') {
				// medium prizes
				loot('candy', 3);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'left1113' || option == 'straight1122' || option == 'straight1132' || option == 'right1133' || option == 'straight1221' || option == 'right1222' || option == 'straight1231' || option == 'right1312' || option == 'straight1332' || option == 'left2111' || option == 'left2123' || option == 'right2133' || option == 'left2213' || option == 'right2223' || option == 'straight2231' || option == 'right2311' || option == 'right2313' || option == 'left2331' || option == 'right2333' || option == 'straight3111' || option == 'straight3113' || option == 'right3122' || option == 'right3131' || option == 'left3133' || option == 'right3211' || option == 'left3222' || option == 'left3231' || option == 'right3311' || option == 'straight3321' || option == 'left3323' || option == 'straight3332' || option == 'right3333') {
				// small prizes
				gainCourage(2);
			}
		break;
		case 'sudden_trap':
			if(option == 'buy_your_way_out') {
				gainCourage(-1);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'the_liar':
			if(option == 'lose_1_shimmer') {
				let actions = [
					{action: 'stat', what: 'shimmer', key: 'current', value: -1},
				];
				await processActions(actions);
			}
			if(option == 'lose_1_sparkle') {
				let actions = [
					{action: 'stat', what: 'sparkle', key: 'current', value: -1},
				];
				await processActions(actions);
			}
			if(option == 'lose_1_aura') {
				let actions = [
					{action: 'stat', what: 'aura', key: 'current', value: -1},
				];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
		case 'briar_patch':
			if(option == 'run_through') {
				let actions = [
					{action: 'stat', what: 'health', key: 'max', value: -3},
				];
				await processActions(actions);
			}
			if(option == 'take_your_time') {
				let actions = [
					{action: 'stat', what: 'health', key: 'current', value: -9},
				];
				await processActions(actions);
			}
			$('.quest-screen').removeClass('shown');
			$('.quest-options').empty();
		break;
	}
	
	// show suboptions
	if(subOptions.options) {
		$('.quest-options').empty();
		for(let i = 0; i < subOptions.options.length; i++) {
			util.appendOption(subOptions.options[i], '.quest-options', id);
		}
	}

	setStatus();
	await util.wait(game.animationGap);

}

function crit(dmg) {
	let mastery = player.mastery.current;
	let threshold = 5; // crits are always at least 1.5x dmg
	threshold += mastery;
	let multiplier = (util.randIntFromInterval(threshold) / 10) + 1; // multiplier is over and above 1 (100% dmg)
	let extraDmg = dmg * multiplier;
	let fierce = player.fierce.current;
	dmg = Math.round(dmg + extraDmg + fierce);
	$('.crit').addClass('shown').find('span').html(dmg);
	return dmg;
}

async function attackMonster(monster, dmg) {

	// might effect
	dmg += player.might.current;
	dmg = Math.round(dmg * player.punch.current);
	
	doDamage(dmg, player, [monster]);
	
	monsters.updateMonsterStats(monster);

	if(monsters.dead(monster)) {
		util.removeMonster(monster.guid);
	}
	
}

function applyBlock(blk, to) {
	if(to != undefined) {
		to.block += (blk + to.solid.current);
		game.message(to.name + ' (' + to.guid + ') gains ' + blk + ' block');
	}
}

async function applyMagic(magic, to) {

	let type = magic.type;
	let types = ['rainbow', 'chaos', 'dark', 'elemental'];

	if(magic.type == 'aligned') {
		type = to.rainbow.type;
	} else if(magic.type == 'random') {
		type = util.randFromArray(types);
	}

	// don't let rainbow get to 0
	if(to.rainbow.max < 1) {
		to.rainbow.max = 1;
	}

	// set initial magic type
	if(to.rainbow.current == 0) {
		to.rainbow.type = type;
	}

	let totalAmount = Math.round(player.sorcery.current * (magic.amount + player.conjure.current));

	// increase magic amount
	to.rainbow.current += totalAmount;

	// mix magic types?
	if(type != to.rainbow.type) {
		to.rainbow.type = 'muddled';
		// check for arcane
		if(to.arcane.current > 0) {
			to.rainbow.current += to.arcane.current;
		}
	}

	// rainbow hits max, do damage and reset
	if(to.rainbow.current >= to.rainbow.max) {

		await activateRainbow(type, to);

	} else {

		// check for enchanter
		if(to.enchanter.current > 0) {
			to.sorcery.current += (to.enchanter.current / 10);
			to.conjure.current += to.enchanter.current;
		}

	}

	// update rainbow dom
	updateRainbowDom(to);

	game.message(to.name + '(' + to.guid + ') applies ' + totalAmount + ' ' + type + ' magic');

}

function updateRainbowDom(to) {
	let magicPower = util.getStatPercentage(to.rainbow.current, to.rainbow.max);
	if(magicPower > 100) magicPower = 100;
	magicPower = magicPower * 1.8;
	let amount = to.rainbow.current <= to.rainbow.max ? to.rainbow.current : to.rainbow.max;
	$('.magic-rainbow .semi-circle--mask').css('transform', 'rotate(' + magicPower + 'deg) translate3d(0, 0, 0)').removeClass('activated'); 
	$('.magic-rainbow .rainbow-power-current').html(amount);
	$('.magic-rainbow .rainbow-power-max').html(to.rainbow.max);
	$('.magic-rainbow').attr('data-type', to.rainbow.type);
	$('.magic-rainbow').removeClass('dark elemental rainbow chaos').addClass(to.rainbow.type);
	$('.magic-rainbow .magic-type span').html(to.rainbow.type);
}

async function activateRainbow(type, to) {

	// check for mage
	if(to.mage.current > 0) {
		to.sorcery.current += (to.mage.current / 10);
		to.conjure.current += to.mage.current;
	}
	
	to.rainbow.current -= to.rainbow.max;
	let ignoreBlock = to.rainbow.type == 'elemental' ? true : false;
	let ignoreArmor = to.rainbow.type == 'dark' ? true : false;
	let doubleDamage = to.rainbow.type == 'chaos' ? true : false;
	let dmg = doubleDamage ? to.rainbow.max * 2 : to.rainbow.max;
	let magicPower = util.getStatPercentage(to.rainbow.current, to.rainbow.max);

	await game.rainbowAnimations(magicPower);
	await util.wait(game.animationDelay);

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);

	let whichMonster = to.rainbow.type == 'muddled' ? [util.randFromArray(currentMonsters)] : currentMonsters;

	// check for magic resistance
	dmg = dmg - (dmg * whichMonster[0].resistance.current);

	await doDamage(dmg, undefined, whichMonster, ignoreBlock, ignoreArmor);
	for(let i = 0; i < game.currentMonsters.length; i++) {
		monsters.updateMonsterStats(game.currentMonsters[i]);
		if(monsters.dead(game.currentMonsters[i])) {
			util.removeMonster(game.currentMonsters[i].guid);
		}
		if(monsters.allDead()) {
			endCombat();
			return;
		}
	}

	// update rainbow magic to overflow type
	to.rainbow.type = type;

	if(to.rainbow.current >= to.rainbow.max) {
		activateRainbow(type, to);
	} else {
		$('.magic-rainbow').addClass('unavailable');
		await util.wait(game.animationGap);
		$('.magic-rainbow').addClass('empty');
		await util.wait(game.animationGap);
		$('.magic-rainbow').removeClass('unavailable empty activated');
		$('.magic-rainbow').removeClass('activated');
	}

	return magicPower;
}

function applyArmor(arm, to) {
	if(to != undefined) {
		arm = parseFloat(arm);
		let armor = arm + to.craft.current;
		let extraArmor = (to.armor + armor) - to.health.current;
		if(extraArmor > 0) {
			to.armor = to.health.current;
			to.block += Math.round(extraArmor * to.cunning.current);
			to.health.current += Math.round(extraArmor * to.vigor.current);
			if(to.health.current > to.health.max) to.health.current = to.health.max;
		} else {
			to.armor += armor;
		}
		setStatus();
		game.message(to.name + ' (' + to.guid + ') gains ' + armor + ' armor');
	}
}

async function attackPlayer(monster, dmg) {

	// might effect
	if(monster) {
		dmg += monster.might.current;
		dmg = Math.round(dmg * monster.punch.current);
	}

	doDamage(dmg, monster, [player]);

	setStatus();

	if(Player().dead(player)) {
		endGame('loss');
	}

}

async function doDamage(dmg, from, to, ignoreBlock = false, ignoreArmor = false) {
	
	if(to.length > 0) {
		for (let i = 0; i < to.length; i++) {

			let thisDmg = dmg;
			let dmgTaken = 0;
			let armorLost = 0;
			let healthLost = 0;

			// check for panic
			if(from?.panic?.enabled) {
				thisDmg += from.block;
				from.block = 0;
			}

			// is player unreachable?
			if(to[i].unreachable.enabled) {
				thisDmg = 1;
			}

			let unblockedDmg = thisDmg;
			if(!ignoreBlock) {
				unblockedDmg = thisDmg - to[i].block;
			}

			// full block
			if(unblockedDmg <= 0) {
				to[i].block -= thisDmg;
				dmgTaken += thisDmg;
			} else {
				if(!ignoreBlock) {
					dmgTaken += to[i].block;
					to[i].block = 0;
				}
				// armor reduces damage by 50%
				let armoredDmg = unblockedDmg;
				// odd damage amounts should affect armor +1 more than health
				let odd = armoredDmg % 2 == 0 ? 0 : 1;
				if(!ignoreArmor) {
					armoredDmg = Math.floor(unblockedDmg / 2);
				}
				// if we have enough armor, reduce armor and health by 50% of damage
				if(!ignoreArmor && armoredDmg <= to[i].armor) {
					armorLost += (armoredDmg + odd);
					dmgTaken += armorLost;
					to[i].armor -= (armoredDmg + odd);
					// only hit armor if tank enabled
					if(!to[i].tank.enabled) {
						healthLost += armoredDmg;
						dmgTaken += armoredDmg;
						to[i].health.current -= armoredDmg;
						if(armoredDmg > game.highestDmgRoll) game.highestDmgRoll = armoredDmg;
					}
				} else {
					if(ignoreArmor || to[i].armor == 0) {
						// full hit
						healthLost += unblockedDmg;
						dmgTaken += unblockedDmg;
						to[i].health.current -= unblockedDmg;
						if(unblockedDmg > game.highestDmgRoll) game.highestDmgRoll = unblockedDmg;
					} else {
						// first reduce armored health, then full tank the rest	
						let partialDmg = to[i].armor;
						let fullDmg = unblockedDmg - (to[i].armor * 2);
						// only hit remaining armor if tank enabled
						if(!to[i].tank.enabled) {
							healthLost += partialDmg;
							dmgTaken += partialDmg;
							to[i].health.current -= partialDmg;
							if(partialDmg > game.highestDmgRoll) game.highestDmgRoll = partialDmg;
						}
						healthLost += fullDmg;
						dmgTaken += fullDmg;
						to[i].health.current -= fullDmg;
						if(fullDmg > game.highestDmgRoll) game.highestDmgRoll = fullDmg;
						armorLost += to[i].armor;
						dmgTaken += to[i].armor;
						to[i].armor = 0;
					}
				}

			}

			if(to[i].health.current <= 0) to[i].health.current = 0;

			let dmgTakenDom = $('.player .dmg-taken');
			let armorLostDom = $('.player .armor-lost');
			let healthLostDom = $('.player .health-lost');
			if(to[i].type=='monster') {
				dmgTakenDom = $('.monster[data-guid=' + to[i].guid + '] .dmg-taken');
				armorLostDom = $('.monster[data-guid=' + to[i].guid + '] .armor-lost');
				healthLostDom = $('.monster[data-guid=' + to[i].guid + '] .health-lost');
			}
			dmgTakenDom.attr('data-amount', dmgTaken);
			armorLostDom.attr('data-amount', armorLost);
			healthLostDom.attr('data-amount', healthLost);

			if(dmgTaken != 0) {
				game.blkAnimations({data: dmgTaken, to: dmgTakenDom});
				game.message(to[i].name + ' (' + to[i].guid + ') takes ' + dmgTaken + ' total damage');
				await util.wait(game.animationDmg);
			}
			if(armorLost != 0) {
				game.dmgAnimations({data: armorLost, to: armorLostDom});
				await util.wait(game.animationDmg);
				// check for spikes
				if(to[i].spikes.current > 0 && from != undefined) {
					await doDamage(Math.round(to[i].spikes.current * armorLost), undefined, [from]);
					setStatus(false);
				}
				game.message(to[i].name + ' (' + to[i].guid + ') loses ' + armorLost + ' armor');
			}
			if(healthLost != 0) {
				game.dmgAnimations({data: healthLost, to: healthLostDom});
				await util.wait(game.animationDmg);
				// check for retaliate
				if(to[i].retaliate.current > 0 && from != undefined) {
					await doDamage(Math.round(to[i].retaliate.current * healthLost), undefined, [from]);
					setStatus(false);
				}
				game.message(to[i].name + ' (' + to[i].guid + ') loses ' + healthLost + ' health');
			}

		}

	}
}