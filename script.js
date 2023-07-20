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
 * -no stance: unused speed converts to 2x block next turn
 * -aura stance: unused speed converts to mana next turn
 * -sparkle stance: unused speed converts to temporary might next turn
 * -shimmer stance: unused speed converts to block, armor, and health next turn
 * 
 * MAGIC RAINBOW: an entity that floats above the player that is magic
 * -target it with magic cards
 * -once it's full it does aoe magic damage to all enemies
 * -rainbow magic does standard aoe damage
 * -dark magic bypasses armor
 * -elemental magic bypasses block
 * -chaos magic does double damage only to one monster instead of aoe
 * -muddled magic does damage only to one monster instead of aoe
 * 
 * PHASE I: GAME ENGINE PHASE
 * PHASE II: CREATE ALL EFFECTS, ABILITIES, AND ACTIONS
 * PHASE III: BALANCE PHASE - CREATE MAP/MONSTERS/TREASURES/CARDS/CANDY
 * PHASE IV: UI PHASE - INTERACTIONS & ANIMATIONS ARE CREATED AND REFINED 
 * PHASE V: LAUNCH PHASE - TESTING, TUTORIAL, LOADING, SAVING, HIGH SCORES
 * PHASE VI: QOL IMPROVEMENTS AND SMALL BUG FIXES
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
 * Effect: Each magic card played, gain x block
 * Effect: limit number of cards played per turn, or combat, or add some sort of "beat of death" penalty for playing cards
 * --cycle can get out of control with repel upgraded, bottled speed, and mana orb card
 * Mechanic: treasures that do dmg/armor/block on certain turns
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
 * Graphics - DONE
 * UI Animations - DONE
 * Music - DONE
 * SFX - DONE
 * Card Prices - DONE
 * 
 * 
 * PHASE V:
 * 
 * TODO: cunning and stockpile are multiplicative, so take a look at how they combine and make sure that's ok
 * TODO: verify how player death check works. i was in a fight where i was at 0 health and armor but some block and i didn't die.
 * 
 * 
 * BUGS [can't replicate]:
 * BUG: metamorphose with frost shard - if choose only one card to transmute, the overlay doesn't disappear
 * BUG: i had -2 aura and then chose to lose 2 aura again and ended up gaining 2 instead
 * BUG: i chose increase rainbow base from stained glass mirror but the next fight didn't have that base increase (it WAS there on subsequent battles)
 * BUG: courage screen straight into multiple quests, and in between the quests i got the courage screen again
 * BUG: sometimes courage screen only shows 1 ability instead of 2
 * BUG: added a shard to a card, and then the next quest was the trasform 3 quest, and the sharded card was still in the show cards
 * BUG: quest Library not working
 * BUG: attack card damage is getting reduced to 0 in combats where mystical energy and smash and grab are played, and rainbow has cycled
 * --also have black vial and magic dust. smash and grab has flame shard and mystical energy has double frost shards
 * BUG: when purchasing relic at the store, remove card becomes too expensive even if i can still afford it
 * BUG: battle Sequence was added via a card reward but it wasn't in the view deck cards until after the next combat
 * BUG: sometimes highest damage roll doesn't update - crit related?
 * 
 * 
 * Play testing
 * -debug email report or text file logging
 * 
 * Stress and Balance testing
 * 
 * Tutorial	- DONE		
 * 
 * Save progress
 * 
 * Record results
 * 
 * 
 * 
 * PHASE VI:
 * 
 * Fine Tuning and Quality of Life fixes
 * 
 * Monster hexes punch down but player buffs punch up. New damage amount is larger than original but damage amount color is red - should be green.
 * Question: if player has might, should draw damage effects have might applied?
 * Question: should only one hit of a multi-attack card be affected by crit (like how fatality works)?
 * When playing a card that draws and discards (upgraded recoil) and the drawn card adds a card to hand (surprise attack), added card cannot be discarded
 * 
 * 
 * NEW CARDS & TREASURES:
 * Card: Fancy Prance: 1 block, 1 dmg, 1 armor, draw card(s) for 0 cost
 * Card: 4, 5, or even 6 cost card that retains (synergizes with aura stance)
 * Card: Another card that adds slashes - maybe a tool card (like a blade dance)
 * Card: Card that adds temp lightning/thunder
 * Card: ? card that adds x number of slashes, sparks, points of might, points of solid, points of lightning
 * Card: 0 cost vanishing card that adds 1 mana and loses 10 armor - shard upgrade adds 2 mana (rare)
 * Card: 0 cost vanishing card that adds 1 speed and loses 10 armor - shard upgrade adds 2 mana (rare)
 * Treasure: 3 magic cards per turn adds lightning/thunder
 * Treasure: 3 attack cards per turn adds punch
 * Treasure: 3 tool cards per turn adds stout
 * Treasure: 5 attack cards per turn adds momentum
 * Treasure: 10 attack cards per combat adds momentum
 * Treasure: 5 tool cards per turn adds wisdom
 * Treasure: 5 tool cards per turn adds tank (1 turn)
 * 
 * 
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

// audio
//var musicOverworld = new Howl({src:['audio/overworld.mp3'],loop:true});
var musicOverworld = util.music('overworld.mp3');
var musicOverworldFrost = util.music('overworld-frost.mp3');
var musicOverworldFlame = util.music('overworld-flame.mp3');
var musicFountain = util.music('fountain.mp3');
var musicVictory = util.music('victory.wav');
var musicLoss = util.music('loss.wav');
var musicCourage = util.music('courage.wav');
var musicArena = util.music('arena.wav');
var musicIceGate = util.music('ice-gate.wav');
var musicFireGate = util.music('fire-gate.wav');
var musicBattles = [
	util.music('battle1.mp3'),
	util.music('battle2.mp3'),
	util.music('battle3.wav'),
	util.music('battle4.wav'),
	util.music('battle5.wav'),
	util.music('battle6.wav'),
	util.music('battle7.wav'),
	util.music('battle8.wav'),
	util.music('battle9.wav'),
	util.music('battle10.wav'),
	util.music('battle11.mp3'),
];
var musicQuests = [
	util.music('quest1.wav'),
	util.music('quest2.wav'),
	util.music('quest3.wav'),
	util.music('quest4.mp3'),
	util.music('quest5.mp3'),
	util.music('quest6.mp3'),
	util.music('quest7.mp3'),
];
var sounds = util.sound('soundsprite.mp3');

function stopMusic() {
	musicOverworld.pause();
	musicOverworldFrost.pause();
	musicOverworldFlame.pause();
	musicFountain.stop();
	musicVictory.stop();
	musicLoss.stop();
	musicCourage.stop();
	musicArena.stop();
	musicIceGate.stop();
	musicFireGate.stop();
	for(let i = 0; i < musicBattles.length; i++) {
		musicBattles[i].stop();
	}
	for(let i = 0; i < musicQuests.length; i++) {
		musicQuests[i].stop();
	}
}

jQuery(window).on('load', function() {

	

});

jQuery(document).ready(function($) {

	if(game.dev) {
		$('.starting-room, .choose-booster-pack').css('display', 'none');
	}
	if(game.debug) {
		$('.end-combat').addClass('shown');
	}

	$('.game-loading-progress').addClass('loaded');
	stopMusic();

	setTimeout(function() {
		$('#game-loading').addClass('hidden');
		util.setSplashTooltips();
	}, 1000);

	setTimeout(function() {
		$('.game-loading-progress').removeClass('loaded');
	}, 2000);

	$('#splash .begin').click(function(e) {
		
		if(game.overworld == 'frost') {
			if(!musicOverworldFrost.playing() && game.playmusic) musicOverworldFrost.play();
		} else if(game.overworld == 'flame') {
			if(!musicOverworldFlame.playing() && game.playmusic) musicOverworldFlame.play();
		} else {
			if(!musicOverworld.playing() && game.playmusic) musicOverworld.play();
		}

		$('#splash').removeClass('shown');

		if(!$('body').hasClass('game-started')) {

			$('#game-loading').removeClass('hidden');
			$('.game-loading-progress').addClass('loaded');

			let gameseed = $('input#custom-seed').val();
			if(gameseed == '') {
				gameseed = (Math.random() + 1).toString(36).substring(2);
			}
			game.seed = gameseed;
			util.setGameSeed(gameseed);
			$('.game-seed span').html(gameseed);
			$('.game-version span').html(game.version);

			setTimeout(function() {
				$('#game-loading').addClass('hidden');
			}, 1100);

			setTimeout(function() {
				init();
			}, 1000);

			setTimeout(function() {
				$('#game-loading').remove();
			}, 3000);
			
		}

		$('body').addClass('game-started');

	});

	$('#close-tutorial').click(function() {
		game.tutorial = false;
		$('body').removeClass('tutorial');
		$('.starting-room.game-panel').addClass('shown');
	});
	$('#step1 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step2').addClass('shown');
	});
	$('#step2 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step3').addClass('shown');
	});
	$('#step3 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step4').addClass('shown');
	});
	$('#step4 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step5').addClass('shown');
	});
	$('#step5 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step6').addClass('shown');
	});
	$('#step6 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step7').addClass('shown');
	});
	$('#step7 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		game.tutorial = false;
		$('body').removeClass('tutorial');	
		$('.starting-room.game-panel').addClass('shown');
	});

	$('.button, .icon-button').click(function() {
		//if(game.playsounds) sounds.play('clickButton');
	});

	$('.settings-panel .button').click(function() {
		$(this).toggleClass('toggled-on');
		if($(this).hasClass('toggled-on')) {
			$(this).find('span').html('on');
		} else {
			$(this).find('span').html('off');
		}
	});
	$('.music').click(function() {
		if($(this).hasClass('toggled-on')) {
			// play which music?
			game.playmusic = true;
		} else {
			stopMusic();
			game.playmusic = false;
		}
	});
	$('.sound').click(function() {
		if($(this).hasClass('toggled-on')) {
			game.playsounds = true;
		} else {
			game.playsounds = false;
		}
	});
	$('.tutorial').click(function() {
		if($(this).hasClass('toggled-on')) {
			game.tutorial = true;
		} else {
			game.tutorial = false;
		}
	});
	$('.difficulty').click(function() {
		if($(this).hasClass('toggled-on')) {
			game.difficulty = 'easy';
		} else {
			game.difficulty = 'hard';
		}
	});

	$('.settings').click(function(e) {
		$('#splash').toggleClass('shown');
		$('#splash .begin').html('Resume Game');
	});


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

		if(game.playsounds) sounds.play('startingBonus');
		$('.starting-options').removeClass('shown');
		$('.starting-room').removeClass('shown');
		$('.starting-treasure').addClass('shown');
		startingBonus($(this));

	});

	$(document).on('click', '.starting-treasure .treasure, .starting-treasure .done', function(e) {

		if(game.playsounds) sounds.play('startingBonus');
		$('.starting-treasure').removeClass('shown');
		$('.choose-booster-pack').addClass('shown');
		startingTreasure($(this));

	});

	$(document).on('click', '.starting-booster-packs .pack-button', function(e) {

		let pack = $(this).attr('data-pack');
		viewPackCards(pack);

	});

	$(document).on('click', '.pack-cards-panel .select', function(e) {
	
		if(game.playsounds) sounds.play('choosePack');
		$('.pack-cards-panel').removeClass('shown');
		$('.starting-booster-packs').removeClass('shown');
		$('.choose-booster-pack').removeClass('shown');
		startingBoosterPack($(this));

	});

	$(document).on('click', '.pack-cards-panel .back', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.pack-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.starting-room .done', function(e) {

		$('.starting-room').removeClass('shown');
		$('.starting-treasure').addClass('shown');

	});

	$(document).on('click', '.choose-booster-pack .done', function(e) {

		$('.choose-booster-pack').removeClass('shown');

	});

	$(document).on('click', '.tile.clickable', function(e) {

		if($(this).hasClass('fountain')) {
			let visited = $(this).hasClass('visited') ? true : false;
			visitFountain(visited);
		} else if($(this).hasClass('quest')) {
			let visited = $(this).hasClass('visited') ? true : false;
			visitQuest(visited);
		} else {
			startCombat($(this));
		}

		map.clickTile($(this));

		$('.tile.arena.visited').removeClass('clickable');
		if(game.arenasComplete < 2) {
			$('.tile.ice-gate').removeClass('clickable').data('powertip', 'Ice Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Ice Gate: <span class="highlight">LOCKED</span>');
			$('.tile.fire-gate').removeClass('clickable').data('powertip', 'Fire Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Fire Gate: <span class="highlight">LOCKED</span>');
		}

		if(game.debug) $('.map-inner div').addClass('clickable');
		
	});

	$(document).on('click', '.end-turn:not(.disabled)', function(e) {

		endTurn();

	});

	$(document).on('click', '.end-combat', function(e) {

		endCombat();

	});

	$(document).on('click', '.rewards-cards .card', function(e) {
	
		if(game.playsounds) sounds.play('drawCard');
		addCardToDeck($(this).data('id'));
		$('.rewards-cards').addClass('unavailable');
		
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$('.rewards-cards').removeClass('unavailable').empty().dequeue();
			});

	});

	$(document).on('click', '.rewards-skip', function(e) {

		$('.rewards-cards').removeClass('unavailable').empty();

		$('.rewards').removeClass('shown');

		treasureScreen();

	});

	$(document).on('click', '.rewards-loot .treasure, .loot-screen .treasure', function(e) {

		addTreasure($(this).data('id'));
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).remove().dequeue();
			});

	});

	$(document).on('click', '.rewards-loot .shard, .loot-screen .shard', function(e) {

		game.toPick = 1;
		game.toPile = 'allCards';
		let totalOpenSlots = deck.numOpenSlots(deck.cards);
		if(totalOpenSlots > 0) {
			chooseShardCard($(this).data('id'));
			$(this).addClass('disappearing')
				.delay(1000)
				.queue(function() {
					$(this).remove().dequeue();
				});
		}

	});

	$(document).on('click', '.rewards-loot .candy.clickable, .loot-screen .candy.clickable', function(e) {

		addCandy($(this).data('id'));
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).remove().dequeue();
			});

	});

	$(document).on('click', '.loot-screen .essence', function(e) {

		updateEssenceLevels($(this).data('id'), 1);
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).remove().dequeue();
			});

	});

	$(document).on('click', '.candies .candy.clickable:not(.trashable)', function(e) {

		if(!player.toothache.enabled) {
			if($(this).hasClass('targeted')) {
				if($(this).hasClass('selected')) {
					$(this).removeClass('selected');
					$('.monster').removeClass('candy-target');
				} else {
					$(this).addClass('selected');
					$('.monster').addClass('candy-target');
				}
			} else {
				eatCandy($(this).data('guid'));
				$(this).remove();
			}
		}

	});

	$(document).on('click', '.trash-candy-confirm .eat-candy', function(e) {

		let guid = $(this).parent().attr('data-candy-guid');
		eatCandy(guid);
		$('.candy[data-guid=' + guid + ']').remove();
		$('.rewards-loot .candy, .loot-items .candy').addClass('clickable');
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
		if(game.playsounds) sounds.play('attachShard');
		deck.attachShard(card, thisShard);
		game.toShow.push(card);
		deck.showModifiedCards(combatDeck, player, true);
		game.toPick -= 1;
		updateCardDescriptions('showCards', deck.cards);
		updateCardDescriptions(game.toPile);
		// we might be sharding multiple cards, so need to remove fully sharded cards
		if(!deck.hasOpenSlot(card)) {
			$(this).parent().remove();
		}
		if(game.toPick == 0) {
			$('.shard-cards-panel').removeClass('shown');
			$('.draw-card, .end-turn').removeClass('disabled');
			combatDeck.chooseCards = [];
		}

	});

	$(document).on('click', '.player-cards .card', function(e) {

		let combinable = $(this).hasClass('combinable');
		let playable = $(this).hasClass('playable');
		if(combinable) {
			let id = $(this).data('id');
			if($('.card.combinable[data-id="' + id + '"]').hasClass('selected') && !$(this).hasClass('selected')) {
				$(this).addClass('selected');
				combineCards($(this));
			} else {
				selectCard($(this));
			}
		} else if(playable) {
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

		if(game.playsounds) sounds.play('viewCards');
		$('.library-panel, .library-loader').addClass('shown');
		loadLibrary().done(function() {
			$('.library-loader').removeClass('shown');
		}).fail(function() {
			console.log('Failed to load card library.');
		});

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

		if(game.playsounds) sounds.play('doneCards');
		game.toPick = 0;
		$('.draw-cards-panel').removeClass('shown');
		$('.draw-cards-panel .card').removeClass('pickable');
		$('.draw-cards-panel .message').html('');

	});

	$(document).on('click', '.discard-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		game.toPick = 0;
		$('.discard-cards-panel').removeClass('shown');
		$('.discard-cards-panel .card').removeClass('pickable');
		$('.discard-cards-panel .message').html('');

	});

	$(document).on('click', '.dead-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		game.toPick = 0;
		$('.dead-cards-panel').removeClass('shown');
		$('.dead-cards-panel .card').removeClass('pickable');
		$('.dead-cards-panel .message').html('');

	});

	$(document).on('click', '.choose-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		game.toPick = 0;
		$('.choose-cards-panel').removeClass('shown');
		$('.choose-cards-panel .card').removeClass('pickable');
		$('.choose-cards-panel .message').html('');

	});

	$(document).on('click', '.all-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.all-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.library-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.library-panel').removeClass('shown');

	});

	$(document).on('click', '.library-panel .card', function(e) {

		if(game.debug) {
			if(game.playsounds) sounds.play('drawCard');
			addCardToDeck($(this).data('id'));
		}

	});

	$(document).on('click', '.library-panel .library-treasures .treasure', function(e) {

		if(game.debug) {
			if(game.playsounds) sounds.play('drawCard');
			addTreasure($(this).data('id'));
		}

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
			// TODO: remove card from toShow array
			let thisGuid = $(this).data('guid');
			game.toTransmute = game.toTransmute.filter(j => j.guid !== thisGuid);
		} else {
			$(this).addClass('selected');
			game.toPick -= 1;
			let theseCards = deck.cards;
			if(!game.combatEndedFlag) theseCards = combatDeck.allCards(combatDeck);
			let thisCard = util.getCardByGuid($(this).data('guid'), theseCards);
			game.toTransmute.push(thisCard);
			if(game.toPick == 0) {
				let permanent = combatDeck.transmuteCards(combatDeck, deck, player);
				if(permanent) {
					for(let i = 0; i < game.toTransmute.length; i++) {
						removeCardFromDeck(game.toTransmute[i].guid);
					}
				}
				game.toTransmute = [];
				$('.choose-cards-panel').removeClass('shown');
				$('.choose-cards-panel .card').removeClass('pickable');
				$('.choose-cards-panel .message').html('');
				$('.choose-cards-panel .cards').empty();
				$('.choose-cards-panel .done').show();
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
				if(game.playsounds) sounds.play('buyItem');
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
		applyArmor($(this).attr('data-armor'), player);
		$('.magic-fountain').removeClass('shown');

	});

	$(document).on('click', '.fountain-bathe', function(e) {

		let amount = parseFloat($(this).attr('data-amount'));
		player.health.max += amount;
		heal(player, $(this).attr('data-amount'));
		$('.magic-fountain').removeClass('shown');

	});

	$(document).on('click', '.fountain-search', function(e) {

		loot('shard');

	});

	$(document).on('click', '.fountain-frolic', function(e) {

		if(game.playsounds) sounds.play('frolic');
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
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).remove().dequeue();
			});

	});

	$(document).on('click', '.courage-items .candy:not(.too-expensive)', function() {

		let id = $(this).attr('data-id');
		let bought = buyCandy(id);
		if(bought) {
			$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).remove().dequeue();
			});
		}

	});

	$(document).on('click', '.courage-cards .card:not(.too-expensive)', function() {

		if(game.playsounds) sounds.play('drawCard');
		let id = $(this).attr('data-id');
		buyCard(id);
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$(this).parent().remove().dequeue();
			});

	});

	$(document).on('click', '.courage-remove:not(.too-expensive)', function() {

		viewAllCards();
		$('.all-cards-panel .card').addClass('clickable');

	});

	$(document).on('click', '.all-cards-panel .card.clickable', function() {

		let guid = $(this).attr('data-guid');
		let cost = 2;
		removeCardFromDeck(guid, cost);
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$('.all-cards-panel').removeClass('shown');
				$('.courage-remove').removeClass('shown');
				$(this).parent().remove().dequeue();
			});

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

		if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate') {
			if(game.map == 1) {
				gateScreen();
			} else {
				endGame('victory');
			}
		} else {
			courageScreen();
		}

	});

	$(document).on('click', '.gate-done', function(e) {

		init_map_2();

	});

	$(document).on('click', '.play-again', function(e) {

		location.reload();

	});

});

function init() {

	console.clear();

	//addTreasure('slashy'); // use this to manually add treasures
	//addCandy('strawberry_gobstopper'); // use this to manually add candies
	//courageScreen(); // use this to manually show courage screen

	if(game.debug) $('body').addClass('debug');
	if(game.tutorial) {
		$('body').addClass('tutorial');
		$('.game-panel').removeClass('shown');
	}

	util.setInitialTooltips();

	map.buildMap();
	if(game.debug) $('.map-inner div').addClass('clickable');

	util.setTooltips('.map-inner');
	util.setTooltips('.buttons-wrapper');

	deck.buildDeck();

	util.appendStartingBonuses();

	appendStartingTreasures();

	util.appendBoosterPacks();

	monsters.setEffects(player);
	monsters.setAbilities(player);
	monsters.updateStatusBar();

	updateAggro();
	updateEssenceLevels();
	setStatus();

}

function init_map_2() {

	game.map = 2;
	game.floor = 0;
	player.aggro.current = 0;
	player.aggro.level = 0;
	heal(player, 999);
	game.overworld = game.mapType == 'ice_gate' ? 'frost' : 'flame';
	musicOverworld.stop();
	if(game.overworld == 'frost') {
		if(!musicOverworldFrost.playing() && game.playmusic) musicOverworldFrost.play();
	} else if(game.overworld == 'flame') {
		if(!musicOverworldFlame.playing() && game.playmusic) musicOverworldFlame.play();
	}
	$('.map > h2').html('The ' + game.overworld.toUpperCase() + ' World');
	$('.gate-screen').removeClass('shown');
	$('body').css('background-image', 'url(./images/map_' + game.mapType + '.png');

	map.buildMap();
	if(game.debug) $('.map-inner div').addClass('clickable');

	util.setTooltips('.map-inner');
	util.setTooltips('.buttons-wrapper');

	updateAggro();
	setStatus();

}

function setStatus(updateCards = true) {
	// debug only
	$('.status .card-retain span').html(player.cardRetain);
	$('.status .momentumAmount span').html(player.momentumAmount);
	for(let i = 0; i < game.effects.length; i++) {
		$('.status .' + game.effects[i].id + ' span').html('[' + player[game.effects[i].id].temp.toString() + '] / ' + player[game.effects[i].id].current + ' / ' + player[game.effects[i].id].base + ' : ' + player[game.effects[i].id].turns);
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
	$('.booster-pack span').addClass(game.boosterPack + '-pack').data('powertip', 'Booster Pack: <span class="highlight">' + game.boosterPack.substr(0,1).toUpperCase()+game.boosterPack.substr(1) + '</span>').attr('data-powertip', 'Booster Pack: <span class="highlight">' + game.boosterPack.substr(0,1).toUpperCase()+game.boosterPack.substr(1) + '</span>');
	util.setTooltips('.booster-pack');
	$('.game-floor span').html(game.floor);
	$('.game-round span').html(game.round);
	$('.all-cards span.counter').html(player.cardsOwned);
	$('.library span.counter').html(allCards.getTotalCards());

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
	$('.stance .icon-stance').data('powertip', "<span class='highlight'>Stance:</span> <span class='" + player.stance + "'>" + player.stance + "</span>");

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
	} else if(which == 'showCards') {
		cards = chooseCards;
		selector = $('.show-cards .card');
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
		if(player.might.current != 0 && card.draw.target != 'player' && card.discard.target != 'player') {
			dmg += player.might.current;
		}
		if(player.momentumAmount != 0 && card.draw.target != 'player' && card.discard.target != 'player') {
			dmg += player.momentumAmount;
		}
		// if we're outside of combat, current will be unset (0), so use base instead
		let punch = game.combatEndedFlag ? player.punch.base : player.punch.current;
		if(punch != 1 && card.draw.target != 'player' && card.discard.target != 'player') {
			dmg = Math.round(dmg * punch);
		}
		if(card.age > 0 && card.draw.target != 'player' && card.discard.target != 'player') {
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
		// if we're outside of combat, current will be unset (0), so use base instead
		let sorcery = game.combatEndedFlag ? player.sorcery.base : player.sorcery.current;
		if(sorcery != 1) {
			magic = Math.round(magic * sorcery);
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
	if(game.playsounds) sounds.play('viewCards');
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
	if(!game.libraryBuilt) {
		game.libraryBuilt = true;
		$('.library-panel .cards, .library-treasures, .library-candies').empty();
		// load candies
		for(let i = 0; i < treasures.candies.length; i++) {
			let candy = treasures.candies[i];
			candy.desc = deck.buildDescription(candy);
			util.appendCandy(candy, '.library-candies', false);
		}
		// load treasures
		for(let i = 0; i < treasures.treasures.length; i++) {
			let treasure = treasures.treasures[i];
			treasure.desc = deck.buildDescription(treasure);
			util.appendTreasure(treasure, '.library-treasures');
		}
		// load cards
		allCards.buildLibrary();
	}
}
function loadLibrary() {
	// mock AJAX request, just for this demo
	var deferred = jQuery.Deferred();
	setTimeout(function() {
		deferred.resolve();
		viewLibrary();
	}, 100);
	return deferred;
}
function viewDrawCards() {
	if(game.playsounds) sounds.play('viewCards');
	$('.draw-cards-panel').addClass('shown');
	$('.draw-cards-panel .cards').empty();
	for(let i = 0; i < combatDeck.drawCards.length; i++) {
		util.appendCard(combatDeck.drawCards[i], '.draw-cards-panel .cards');
	}
	updateCardDescriptions('drawCards');
}
function viewDiscardCards() {
	if(game.playsounds) sounds.play('viewCards');
	$('.discard-cards-panel').addClass('shown');
	$('.discard-cards-panel .cards').empty();
	for(let i = 0; i < combatDeck.discardCards.length; i++) {
		util.appendCard(combatDeck.discardCards[i], '.discard-cards-panel .cards');
	}
	updateCardDescriptions('discardCards');
}
function viewDeadCards() {
	if(game.playsounds) sounds.play('viewCards');
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
	if(game.playsounds) sounds.play('viewCards');
	$('.pack-cards-panel').addClass('shown');
	$('.pack-cards-panel h2').html('<span>' + pack + '</span> booster pack cards');
	let card = 'Self Enhance';
	if(pack == 'rainbow') {
		card = 'Sparks';
	} else if(pack == 'cycle') {
		card = 'Bottled Speed';
	}
	$('.pack-cards-panel .message span').html(card);
	$('.pack-cards-panel .cards').empty();
	$('.pack-cards-panel .select').attr('data-pack', pack);
	let packCards = AllCards().getAddableCards(false, false, pack);
	for(let i = 0; i < packCards.length; i++) {
		let desc = deck.buildDescription(packCards[i]);
        packCards[i].desc = desc;
		let slotDesc = deck.buildSlotsDescription(packCards[i]);
        packCards[i].slotDesc = slotDesc;
		util.appendCard(packCards[i], '.pack-cards-panel .cards');
	}
}
function chooseShardCard(shard, cards = deck.cards) {
	$('.shard-cards-panel').addClass('shown');
	$('.draw-card, .end-turn').addClass('disabled');
	$('.shard-cards-panel .cards').empty();
	$('.shard-cards-panel').attr('data-shard', shard);
	$('.shard-cards-panel h2 span').html(shard);
	if(game.playsounds) sounds.play('clickShard');
	for(let i = 0; i < cards.length; i++) {
		if(deck.hasOpenSlot(cards[i])) {
			util.appendCard(cards[i], '.shard-cards-panel .cards');
		}
	}

}

async function startCombat(tile) {

	//console.clear();

	// there could be residual "to show" cards that need cleared - like if combat ends with collateral damage played
	game.toShow = [];

	game.combatEndedFlag = false;

	game.floor += 1;
	game.combat += 1;
	game.round = 0;

	stopMusic();

	let backgroundImage = './images/floor' + game.combat + '.png';

	$('body').removeClass('arena ice_gate fire_gate selecting destroying');
	$('.start-arrow').hide();

	if(tile.hasClass('arena')) {
		game.mapType = 'arena';
		backgroundImage = './images/arena' + (game.arenasComplete + 1) + '.png';
		$('body').addClass('arena');
		game.arenasComplete += 1;
		setTimeout(function() {
			if(!musicArena.playing() && game.playmusic) musicArena.play();
		}, 200);
	} else if(tile.hasClass('ice-gate')) {
		game.mapType = 'ice_gate';
		backgroundImage = './images/ice_gate.png';
		$('body').addClass('ige-gate');
		setTimeout(function() {
			if(!musicIceGate.playing() && game.playmusic) musicIceGate.play();
		}, 200);
	} else if(tile.hasClass('fire-gate')) {
		game.mapType = 'fire_gate';
		backgroundImage = './images/fire_gate.png';
		$('body').addClass('fire-gate');
		setTimeout(function() {
			if(!musicFireGate.playing() && game.playmusic) musicFireGate.play();
		}, 200);
	} else {
		game.mapType = 'normal';
		setTimeout(function() {
			if(!musicBattles[game.floor % musicBattles.length].playing() && game.playmusic) musicBattles[game.floor % musicBattles.length].play();
		}, 200);
	}

	$('.monster-panel').css('background-image', 'url(' + backgroundImage + ')');
	$('.message, .button-done').removeClass('shown');
	$('.combat').addClass('shown');
	$('.candy').removeClass('trashable').addClass('clickable');
	$('body').addClass('combating');
	$('.player-cards').removeClass('unavailable').empty();

	
	if(!tile.hasClass('visited')) {
		await updateEssenceLevels(tile.attr('data-essence'), tile.attr('data-amount'));
	}

	player.cardRetain = 0;

	for(let i = 0; i < player.treasures.length; i++) {
		if(player.treasures[i].trigger.counter < 0 && player.treasures[i].permanent == false) {
			activateTreasure(player.treasures[i]);
		}
	}

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
	$('.magic-rainbow .magic-type span').attr('data-type', player.rainbow.type);
	$('.magic-rainbow .semi-circle--mask').css('transform', 'rotate(' + (magicPower * 1.8) + 'deg) translate3d(0, 0, 0)').removeClass('activated'); 

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
			let addedCard = util.getCardById(card.id, deck.cards);
			game.toShow.push(addedCard);
			deck.showModifiedCards(combatDeck, player, true);
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
		// since treasures can add effects and abilities, need to update player statuses
		monsters.setEffects(player);
		monsters.setAbilities(player);
		monsters.updateStatusBar();
	}

	// max health should also increase current health
	if(att == 'health') {
		heal(entity, amount);
	}

	setStatus();

}

function appendStartingTreasures() {
	let possibleTreasures = treasures.treasures.filter(i => i.starting == true);
	possibleTreasures = util.shuffle(possibleTreasures);
	if(possibleTreasures.length > 0) {
		for(let i = 0; i < 3; i++) {
			let treasure = possibleTreasures[i];
			treasure.desc = deck.buildDescription(treasure);
			util.appendTreasure(treasure, '.starting-treasures');
		}
	}
}

function startingTreasure(elem) {

	let treasure = elem.attr('data-id');
	addTreasure(treasure);
	setStatus();
		
}

function startingBoosterPack(elem) {

	let pack = elem.attr('data-pack');
	let id = '';
	let card = [];
	if(pack == 'combine') {
		id = 'self_enhance';
	} else if(pack == 'rainbow') {
		id = 'sparks';
	} else {
		id = 'bottled_speed';
	}
	deck.addCard(id);
	card = util.getCardById(id, deck.cards);
	game.toShow.push(card);
	deck.showModifiedCards(combatDeck, player, true);
	game.boosterPack = pack;
	setStatus();
		
}

function visitFountain(visited) {

	stopMusic();
	if(!musicFountain.playing() && game.playmusic) musicFountain.play();

	game.mapType = 'fountain';
	if(visited) {
		$('.fountain-visited').addClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').removeClass('shown');
	} else {
		$('.fountain-visited').removeClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').addClass('shown');
		//game.floor += 1;
		setStatus();
	}
	
}

function visitQuest(visited = false) {

	stopMusic();
	setTimeout(function() {
		if(!musicQuests[game.floor % musicQuests.length].playing() && game.playmusic) musicQuests[game.floor % musicQuests.length].play();
	}, 200);

	game.mapType = 'quest';
	$('.quest-screen').addClass('shown');
	//game.floor += 1;

	let possibleQuests = quests.quests.filter(i => i.seen == false);
	let quest = util.weightedRandom(possibleQuests);

	if(visited) {
		$('.quest-screen h2').html('Deja Vu');
		$('.quest-description').html('You swear you have seen this place before...');
		let option = {id: 'leave', name: 'Leave'};
		util.appendOption(option, '.quest-options', false);
	} else if(quest != undefined) {
		quest.seen = true;

		game.currentQuest = quest;

		$('.quest-screen h2').html(quest.name);
		$('.quest-description').html(quest.desc);
		let backgroundImage = './images/quest-' + quest.id + '.png';
		$('.quest-screen').css('background-image', 'url(' + backgroundImage + ')');
		$('.quest-options').empty();

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

function changeStance(stance) {
	// check for stance
	if(stance == 'sparkle') {
		player.might.base += 2;
		player.might.current += 2;
	} else if(player.stance == 'sparkle') { // this mean's the player's previous stance was sparkle because it hasn't changed yet
		player.might.base -= 2;
		player.might.current -= 2;
	}
}

async function updateEssenceLevels(essence, amount) {

	if(essence == undefined) {
		for(let i = 0; i < game.essences.length; i++) {
			util.updateEssencePercentage(game.essences[i]);
		}
	} else if(essence != undefined) {
		amount = parseFloat(amount);
		if(amount < 0) {
			player[essence].current += amount;
			await util.updateEssencePercentage(essence);
		} else {
			for(let i = 0; i < amount; i++) {
				if(game.playsounds) sounds.play(essence + 'Amount');
				player[essence].current += 1;
				let current = player[essence].current;
				if(game.essenceThresholds.includes(current) && player[essence].level == game.essenceThresholds.indexOf(current)) {
					player[essence].level += 1;
					$('.essence-bar.sparkle span.level').html(player.sparkle.level);
					$('.essence-bar.shimmer span.level').html(player.shimmer.level);
					$('.essence-bar.aura span.level').html(player.aura.level);
					$('.essence-bar.' + essence).addClass('level-up');
					await util.wait(1200);
					if(game.playsounds) sounds.play('essenceLevel');
					$('.essence-bar.' + essence).removeClass('level-up');
					// we only need to add the stance card the first time we level up
					if(game.essenceThresholds[0] == current) {
						deck.addCard(essence + '_stance');
						combatDeck.addCard(essence + '_stance', combatDeck, 'drawCards', player);
						let card = util.getCardById(essence + '_stance', deck.cards);
						game.toShow.push(card);
						deck.showModifiedCards(combatDeck, player, true);
					}
				}
				await util.updateEssencePercentage(essence);
			}
		}
		setStatus();
	}
	$('.essence-bar.sparkle span.level').html(player.sparkle.level);
	$('.essence-bar.shimmer span.level').html(player.shimmer.level);
	$('.essence-bar.aura span.level').html(player.aura.level);

}

function beginTurn() {

	util.clearTooltips();

	updateCardDescriptions('allCards');

	game.round += 1;

	game.message('Begin player turn ' + game.round);

	// never negative block/armor
	if(player.blk < 0) player.blk = 0;
	if(player.armor < 0) player.armor = 0;

	// only reset block if protection not enabled
	if(player.protection.enabled) {
		player.block += player.stout.current;
	} else {
		player.block = player.stout.current;
	}
	
	player.mana.current = player.mana.base;

	let extraSpeed = 0;

	// check for stance
	if(player.stance == 'aura') {
		player.mana.current += 1;
	} else if(player.stance == 'sparkle') {
		// do nothing, because base might is handled in changeStance()
	} else if(player.stance == 'shimmer') {
		heal(player, 1);
		applyArmor(1, player);
		applyBlock(2, player);
	}

	// check for spance * speed bonuses. stances only apply to speed, which can only be taken into account after turn 1
	if(game.round > 1) {

		// check for prepared
		if(player.prepared.enabled && game.cardsDrawn <= 3) {
			extraSpeed = 5 - game.cardsDrawn;
		}

		if(player.speed.current > 0) {
			if(player.stance == 'none') {
				applyBlock((player.speed.current * 2), player);
			} else if(player.stance == 'aura') {
				player.mana.current += Math.round(player.speed.current * player.aura.level);
			} else if(player.stance == 'sparkle') {
				let tempMight = Math.round(player.speed.current * player.sparkle.level * 2);
				if(tempMight > 0) {
					player.might.current += tempMight;
					player.might.temp.push(tempMight);
				}
			} else if(player.stance == 'shimmer') {
				//player.speed.current = player.speed.base + Math.round(player.speed.current * player.shimmer.level) + extraSpeed; // old way of doing this was speed
				//player.health.max += Math.floor((player.speed.current / 4) * player.shimmer.level); // we determined this could be infinitely farmable
				heal(player, Math.floor(player.speed.current * player.shimmer.level));
				applyArmor(Math.floor(player.speed.current * player.shimmer.level), player);
				applyBlock(Math.floor(player.speed.current * player.shimmer.level * 2), player);
			}
		}
			
	}

	// check for lemonade
	if(player.lemonade.current > 0) {
		let clutterCards = combatDeck.allLiveCards(combatDeck).filter(i => i.type == 'clutter');
		heal(player, clutterCards.length * player.lemonade.current);
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

	// reset speed
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

	clearTurnEffects(player, false, true);
	clearTurnAbilities(player, false, true);

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
						if(trigger.counter == trigger.at) {
							if(trigger.once && !trigger.activated) {
								activateTreasure(player.treasures[i]);
							} else if(!trigger.once) {
								activateTreasure(player.treasures[i]);
								trigger.counter = 0;
							}
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
		if(game.playsounds) sounds.play('drawCard');
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
		let intentTooltip = '';
		let thisMonster = currentMonsters[i];

		if(action == 'perform') {
			// account for protection enabled
			if(thisMonster.protection.enabled) {
				thisMonster.block += thisMonster.stout.current;
			} else {
				thisMonster.block = thisMonster.stout.current;
			}
			applyArmor(thisMonster.muster.current, thisMonster);
			// check for regen
			if(thisMonster.regen.current > 0) {
				heal(thisMonster, thisMonster.regen.current);
				thisMonster.regen.current -= 1;
			}
			heal(thisMonster, thisMonster.heal.current);

			// clear offset monster effects
			clearTurnEffects(thisMonster, false, true);
			clearTurnAbilities(thisMonster, false, true);
			monsters.updateMonsterStats(thisMonster);
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

		// never negative block/armor
		if(thisMonster.blk < 0) thisMonster.blk = 0;
		if(thisMonster.armor < 0) thisMonster.armor = 0;

		for (var key in attack) {
			if (attack.hasOwnProperty(key)) {

				let attackAmount = attack[key];

				// apply aggro if this is a gate
				if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate' || game.mapType == 'arena') {
					attackAmount = ((player.aggro.level / 2) + 1) * attack[key];
				}

				if(action == 'query') {
					let a = Math.round((attackAmount + thisMonster.might.current) * thisMonster.punch.current);
					if(a < 0) a = 0;
					intent += '<span class="tooltip" data-powertip="Attack for ' + a + ' damage"><span class="intent-dmg intent-amount">' + a + '</span><span class="intent-dmg-icon intent-icon"></span></span>';
				} else {

					// check for hypnotize
					if(game.targetedMonster.guid == thisMonster.guid) {
						await attackMonster(thisMonster, attackAmount, false, true);
					} else {
						await attackPlayer(thisMonster, attackAmount);
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
					let a = (defend[key] + thisMonster.solid.current);
					intent += '<span class="tooltip" data-powertip="Gain ' + a + ' block"><span class="intent-blk intent-amount">' + a + '</span><span class="intent-blk-icon intent-icon"></span></span>';
				} else {
					applyBlock(defend[key], thisMonster);
				}
			}
		}

		for (var key in armor) {
			if (armor.hasOwnProperty(key)) {
				if(action == 'query') {
					let a = (armor[key] + thisMonster.craft.current);
					intent += '<span class="tooltip" data-powertip="Gain ' + a + ' armor"><span class="intent-armor intent-amount">' + a + '</span><span class="intent-armor-icon intent-icon"></span></span>';
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
				if(effect == 'punch' || effect == 'sorcery' || effect == 'resistance' || effect == 'thunder') {
					amount = Math.round((amount + Number.EPSILON) * 100);
                    amount += '%';
				}
				if(action == 'query') {
					intentTooltip = prefix + amount + ' ' + effect + turns;
					if(effects[e].hex) {
						intent += '<span class="intent-hex effect-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					} else {
						intent += '<span class="intent-buff effect-buff intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					}
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
					intentTooltip = prefix + abilities[e].ability + turnsDom;
					if(abilities[e].hex) {
						intent += '<span class="intent-hex ability-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					} else {
						intent += '<span class="intent-buff ability-buff intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					}
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
						intentTooltip = prefix + name + what + value + to;
						intent += '<span class="intent-hex action-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					}
				} else {
					let update = processActions(actions, currentMonsters[i]);
				}
            }
        }
		
		if(action == 'query') {
			thisMonster.chosenMoveSetIndex = moveSetIndex;
			$('.monster[data-guid=' + thisMonster.guid + '] .monster-intent').html(intent);
			util.setTooltips('.monster-intent');
		} else {
			monsters.updateMonsterStats(thisMonster);
		}
		
	}

	setStatus();

}

function endTurn(checkRetain = true) {

	// clear standard player effects
	clearTurnEffects(player);
	clearTurnAbilities(player);
	monsters.updateStatusBar(player);

	// clear delayed monster effects
	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	for(let i = 0; i < currentMonsters.length; i++) {
		// check for stockpile
		if(currentMonsters[i].stockpile.enabled && currentMonsters[i].block > 0) {
			applyArmor(currentMonsters[i].block, currentMonsters[i]);
		}
		clearTurnEffects(currentMonsters[i], true);
		clearTurnAbilities(currentMonsters[i], true);
		monsters.updateMonsterStats(game.currentMonsters[i]);
	}
	monsters.updateStatusBar();

	$('body').addClass('selecting retaining');

	game.message('End player turn ' + game.round);

	// destroy expired cards
	if(!player.expirex.enabled) {
		combatDeck.destroyExpiredCards(combatDeck);
	}
	// increment expiries after destroying
	combatDeck.incrementExpiredCards(combatDeck);

	combatDeck.chooseCards = [];
	game.toPile = 'handCards';

	updateCardDescriptions('allCards');

	// retain cards
	$('.player-cards .card').removeClass('playable selected');
	if(player.cardRetain > 0 && checkRetain) {
		$('.player-panel .standard-message').html('choose cards to retain').addClass('shown');
		$('.retain-done').addClass('shown');
		$('.player-cards .card').addClass('retainable');
		$('.draw-card').addClass('disabled');
	} else {
		$('.player-panel .standard-message').removeClass('shown');
		$('.retain-done').removeClass('shown');
		$('.player-cards .card').removeClass('retain retainable');
		combatDeck.discardHand(combatDeck, player);
		monsterTurn();
		$('body').removeClass('selecting retaining');
	}

	// if rainbow is activated and kills all monsters it will still be activated at start of next combat
	$('.magic-rainbow').removeClass('activated');

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
	// clear standard monster effects
	for(let i = 0; i < currentMonsters.length; i++) {
		clearTurnEffects(currentMonsters[i]);
		clearTurnAbilities(currentMonsters[i]);
		monsters.updateMonsterStats(game.currentMonsters[i]);
		game.message('Begin ' + currentMonsters[i].guid + ' turn ' + game.round);
	}

	monsters.updateStatusBar();

	endMonsterTurn();

}

function endMonsterTurn() {

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	for(let i = 0; i < currentMonsters.length; i++) {
		game.message('End ' + currentMonsters[i].guid + ' turn ' + game.round);
		currentMonsters[i].chosenMoveSetIndex = -1;
	}

	// check for stockpile
	if(player.stockpile.enabled && player.block > 0) {
		applyArmor(player.block, player);
	}

	// clear delayed player effects
	clearTurnEffects(player, true);
	clearTurnAbilities(player, true);
	monsters.updateStatusBar(player);
	
	beginTurn();

}



function clearTurnEffects(from, delay = false, offset = false) {
	for(let i = 0; i < game.effects.length; i++) {
		if(((!delay && !game.effects[i].delay && !offset && !game.effects[i].offset) || (delay && game.effects[i].delay) || (offset && game.effects[i].offset)) && game.effects[i].id != 'fatality') {
			let index = from[game.effects[i].id].turns < 1 ? 0 : from[game.effects[i].id].turns - 1;
			let temp = from[game.effects[i].id].temp[index] != undefined ? from[game.effects[i].id].temp[index] : false;

			/* for debugging sparkle stance temp might + permanent sources like excalibur + mummy might debuff
			if(game.effects[i].id=='might') {
				console.log(from[game.effects[i].id].temp);
				console.log(index);
				console.log(from[game.effects[i].id].temp[index]);
				console.log(from[game.effects[i].id].turns);
			} */

			if(temp) {
				from[game.effects[i].id].temp.splice(index, 1);
				from[game.effects[i].id].current -= temp;
			}

			if(from[game.effects[i].id].turns > 0) {
				from[game.effects[i].id].turns -= 1;
			}


			/* OLD WAY
			if(from[game.effects[i].id].turns > 1) {
				from[game.effects[i].id].turns -= 1;
				if(temp > 0) {
					from[game.effects[i].id].current -= temp;
					from[game.effects[i].id].temp.splice(index, 1);
				}
			} else if(from[game.effects[i].id].turns == 1) {
				from[game.effects[i].id].turns -= 1;
				if(temp > 0) {
					from[game.effects[i].id].current -= temp;
					from[game.effects[i].id].temp = [];
				}
			} else {
				if(from.type == 'player') {
					if(from[game.effects[i].id].persist == false && from[game.effects[i].id].turns > -1) {
						// effects could potentially persist from previous combat, but only matters to player
						from[game.effects[i].id].turns = 0;
						if(temp > 0) {
							from[game.effects[i].id].current -= temp;
							from[game.effects[i].id].temp = [];
						}
					} else if(from[game.effects[i].id].turns == -1) {
						if(temp > 0) {
							from[game.effects[i].id].current -= temp;
							from[game.effects[i].id].temp = [];
						}
					}
				} else if(from[game.effects[i].id].turns == 0) {
					if(temp > 0) {
						from[game.effects[i].id].current -= temp;
						from[game.effects[i].id].temp = [];
					}
				}
			}*/

			// make sure .199999999 goes to .2
			from[game.effects[i].id].current = Math.round((from[game.effects[i].id].current + Number.EPSILON) * 100) / 100;
		}
	}

	// one-off resets
	from.momentumAmount = 0;
}

function clearCombatEffects() {
	for(let i = 0; i < game.effects.length; i++) {
		if(player[game.effects[i].id].turns > -1 && player[game.effects[i].id].persist != true) {
			player[game.effects[i].id].temp = [];
			player[game.effects[i].id].turns = 0;
			if(game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'thunder') {
				player[game.effects[i].id].current = 1;
			} else {
				player[game.effects[i].id].current = 0;
			}
		} else if(player[game.effects[i].id].turns == -1) {
			player[game.effects[i].id].temp = [];
			player[game.effects[i].id].turns = 0;
			if(game.effects[i].id == 'punch' || game.effects[i].id == 'sorcery' || game.effects[i].id == 'thunder') {
				player[game.effects[i].id].current = 1;
			} else {
				player[game.effects[i].id].current = 0;
			}
		}
		// if combat ended then player must have attacked which means we need to clear a fatality charge which may not have gotten cleared
		// TODO: how does this apply when rainbow is what ends combat?
		if(player.fatality.turns > 0) {
			player.fatality.turns -= 1;
			let index = player.fatality.turns;
			let temp = player.fatality.temp[index] != undefined ? player.fatality.temp[index] : 0;
			if(temp > 0) {
				player.fatality.current -= temp;
				player.fatality.temp.splice(index, 1);
			}
			/*if(player.fatality.turns == 0) {
				player.fatality.current -= player.fatality.temp[0];
				player.fatality.temp = [];
			}*/
		}
	}

	// one-off resets
	player.momentumAmount = 0;
}

function clearCombatTreasureCounters() {
	for(let i = 0; i < player.treasures.length; i++) {
		let trigger = player.treasures[i].trigger;
		if(trigger.counter > -1) {
			//if(trigger.per == 'turn' || (trigger.once && trigger.activated)) {
			if(trigger.per == 'turn' || (trigger.once && trigger.per == 'combat')) {
				trigger.counter = 0;
				$('.treasure[data-id="' + player.treasures[i].id + '"] span.counter').html(trigger.counter);
			}
		}
		trigger.activated = false;
	}
}

function removeHexes(to) {
	for(let i = 0; i < game.effects.length; i++) {
		// we don't want to reset rainbow back to 0
		if(game.effects[i].id == 'rainbow') {
			if(to[game.effects[i].id].hexed) {
				to[game.effects[i].id].hexed = false;
			}
		} else {
			if(to[game.effects[i].id].hexed) {
				let current = game.effects[i].id == 'sorcery' || game.effects[i].id == 'punch' || game.effects[i].id == 'thunder' ? 1 : 0;
				to[game.effects[i].id].temp = [];
				to[game.effects[i].id].turns = 0;
				to[game.effects[i].id].current = current;
				to[game.effects[i].id].hexed = false;
			}
		}
	}
}

function applyEffect(effect, to, turns = -1) {
	// check for vex
	if(to.vex.current > 0 && effect.hex) {
		to.vex.current -= 1;
		if(game.playsounds) sounds.play('vex');
	} else {
		let statusDom = $('.player .status-text');
		if(to.type=='monster') {
			statusDom = $('.monster[data-guid=' + to.guid + '] .status-text');
		}
		if(effect.amount != undefined) {
			// conjure should never go below 0 because if it does then when player applies any magic it will decrease rather than increase rainbow
			// basically when monster hexes conjure we want to reduce any positive conjuring, not go negative
			//let amt = (effect.effect == 'conjure' && effect.hex) ? 0 : Math.round(((to[effect.effect].current + effect.amount) + Number.EPSILON) * 100) / 100;
			let amt = Math.round(((to[effect.effect].current + effect.amount) + Number.EPSILON) * 100) / 100;
			// punch, speed, and thunder should never go below 0
			if(effect.effect == 'punch' || effect.effect == 'speed' || effect.effect == 'thunder') {
				if(amt < 0) {
					amt = 0;
				}
			}
			to[effect.effect].current = amt;
			// rainbow is a special case and shouldn't technically be an effect, but it is, so treat it differently
			if(effect.effect != 'rainbow') {
				// if turns is set to -1 it means this is not a temporary effect. this way, both permanent and temp effects can be added together
				if(turns > -1) {
					//to[effect.effect].temp = Math.round(((to[effect.effect].temp + effect.amount) + Number.EPSILON) * 100) / 100;
					to[effect.effect].temp.push(effect.amount);  //TODO: test sparkle stance + excalibur against mummy: mummy hexes might which disrupts temp array
				}
			}
			if(turns > -1) {
				// punch and thunder work differently
				/*if(effect.effect == 'punch' || effect.effect == 'solid' || effect.effect == 'thunder') { // we added solid here because of the medallion treasure - any others?
					if(turns > to[effect.effect].turns) {
						to[effect.effect].turns = turns;
					}
				} else {
					if(to[effect.effect].turns < 0) {
						turns += 1;
					}
					to[effect.effect].turns += turns;
				}*/
				if(turns > to[effect.effect].turns) {
					to[effect.effect].turns = turns;
				}
			} else {
				to[effect.effect].turns = turns;
			}
			if(effect.persist) to[effect.effect].persist = effect.persist;
			let amtShow = amt;
			if(effect.effect == 'punch' || effect.effect == 'sorcery' || effect.effect == 'resistance' || effect.effect == 'thunder') {
				amtShow = Math.round((amtShow + Number.EPSILON) * 100);
				amtShow += '%';
			}
			if(effect.hex) {
				to[effect.effect].hexed = true;
				if(game.playsounds) sounds.play('hex');
				game.statusAnimations({data: amtShow + ' ' + effect.effect, to: statusDom, hex: true});
			} else {
				let gameEffect = game.effects.find(({ id }) => id === effect.effect);
				let sound = gameEffect.sound ? gameEffect.sound : 'applyEffect';
				if(game.playsounds) sounds.play(sound);
				game.statusAnimations({data: amtShow + ' ' + effect.effect, to: statusDom, hex: false});
			}
		} else if(effect.base != undefined) {
			to[effect.effect].base += effect.base;

			// the following line accounts for workshop might event + excalibur (for example). without this line, the additive nature
			// of the effects won't combine until the second attempted combat after both sources have been activated.
			// it's possible this breaks other things, in which case delete it and account for this elsewhere
			to[effect.effect].current = to[effect.effect].base;

			to[effect.effect].turns = turns;
			let gameEffect = game.effects.find(({ id }) => id === effect.effect);
			let sound = gameEffect.sound ? gameEffect.sound : 'applyEffect';
			if(game.playsounds) sounds.play(sound);
			let amtShow = effect.base;
			if(effect.effect == 'punch' || effect.effect == 'sorcery' || effect.effect == 'resistance' || effect.effect == 'thunder') {
				amtShow = Math.round((amtShow + Number.EPSILON) * 100);
				amtShow += '%';
			}
			game.statusAnimations({data: amtShow + ' ' + effect.effect, to: statusDom, hex: false});
		}
		if(effect.effect == 'rainbow') {
			updateRainbowDom(to);
		}
	}
	if(to.type == 'monster') {
		monsters.updateStatusBar();
	}
	setStatus();
}

function clearTurnAbilities(from, delay = false, offset = false) {
	for(let i = 0; i < game.abilities.length; i++) {
		if((!delay && !game.abilities[i].delay && !offset && !game.abilities[i].offset) || (delay && game.abilities[i].delay) || (offset && game.abilities[i].offset)) {
			if(from[game.abilities[i].id].turns > 1) {
				from[game.abilities[i].id].turns -= 1;
				from[game.abilities[i].id].enabled = true;
			// abilities could potentially persist from previous combat for player
			} else if((player[game.abilities[i].id].permanent == false && player[game.abilities[i].id].turns > -1)) {
				from[game.abilities[i].id].turns = 0;
				from[game.abilities[i].id].enabled = false;
			}
		}
	}
}

function clearCombatAbilities() {
	for(let i = 0; i < game.abilities.length; i++) {
		if((player[game.abilities[i].id].persist == false && player[game.abilities[i].id].turns > -1) || 
			(player[game.abilities[i].id].permanent == false && player[game.abilities[i].id].turns < 1)) {
			player[game.abilities[i].id].enabled = false;
			player[game.abilities[i].id].turns = 0;
		}
	}
}

function applyAbility(ability, to, turns = -1) {
	if(ability.hex || to[ability.ability].enabled == false) {
		to[ability.ability].enabled = ability.enabled;
		let statusDom = $('.player .status-text');
		if(to.type=='monster') {
			statusDom = $('.monster[data-guid=' + to.guid + '] .status-text');
		}
		if(to[ability.ability].permanent) {
			to[ability.ability].baseTurns += turns;
		} else {
			to[ability.ability].baseTurns = ability.baseTurns;
		}
		let gameAbility = game.abilities.find(({ id }) => id === ability.ability);
		if(ability.hex) {
			to[ability.ability].turns = 0;
			to[ability.ability].enabled = false;
			if(game.playsounds) sounds.play('hex');
			game.statusAnimations({data: gameAbility.name, to: statusDom, hex: true});
		} else {
			to[ability.ability].turns += turns;
			let gameAbility = game.abilities.find(({ id }) => id === ability.ability);
			let sound = gameAbility.sound ? gameAbility.sound : 'applyAbility';
			if(game.playsounds) sounds.play(sound);
			game.statusAnimations({data: gameAbility.name, to: statusDom, hex: false});
		}
		if(to[ability.ability].baseTurns < -1) to[ability.ability].baseTurns = -1;
		if(to[ability.ability].turns < -1) to[ability.ability].turns = -1;
		if(ability.persist) {
			to[ability.ability].persist = ability.persist;
		}
		if(ability.permanent) {
			to[ability.ability].permanent = ability.permanent;
		}
		if(to.type == 'monster') monsters.updateStatusBar();

		setStatus();
	}
}

function endCombat() {

	if(!game.combatEndedFlag) {

		stopMusic();

		if(game.mapType == 'arena') {
			if(game.playsounds) sounds.play('arenaRewards');
		} else {
			if(game.playsounds) sounds.play('rewards');
		}
		
		setTimeout(function() {
			if(game.overworld == 'frost') {
				if(!musicOverworldFrost.playing() && game.playmusic) musicOverworldFrost.play();
			} else if(game.overworld == 'flame') {
				if(!musicOverworldFlame.playing() && game.playmusic) musicOverworldFlame.play();
			} else {
				if(!musicOverworld.playing() && game.playmusic) musicOverworld.play();
			}
		}, 3000);

		setTimeout(function() {
			// these should delay to happen after lingering combat effects
			$('.combat, .show-cards, .message, .button-done').removeClass('shown'); 
			$('body').removeClass('combating selecting destroying');
			$('.player-cards, .monster-panel').empty();
			removeArrow();
		}, 2000);

		// don't put this in settimeout because it causes rewards screen candies to not be clickable
		$('.candy').removeClass('clickable').addClass('trashable');

		game.combatEndedFlag = true;

		game.message('End combat floor ' + game.floor);

		heal(player, player.heal.current);
		
		gainCourage(1);
		updateAggro(1);
		
		game.candyChance += 10;
		game.shardChance += 5;
		player.block = 0;
		clearCombatEffects();
		clearCombatAbilities();
		clearCombatTreasureCounters();

		rewardsScreen();

		// if rainbow is activated and kills all monsters it will still be activated at start of next combat
		$('.magic-rainbow').removeClass('activated');

	}

}

function heal(creature, amount) {

	if(amount==0) return;

	if(game.playsounds) sounds.play('heal');

	amount = parseFloat(amount);

	let healActual = amount + creature.mend.current;

	creature.health.current += healActual;
	if(creature.health.current > creature.health.max) creature.health.current = creature.health.max;

	let healDom = $('.player-health .health-gained');
	if(creature.type=='monster') {
		healDom = $('.monster[data-guid=' + creature.guid + '] .health-gained');
	}

	game.dmgAnimations({data: healActual, to: healDom});

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
					$('.aggro-bar span.current').html(player.aggro.current);
					$('.aggro-bar').addClass('level-up');
					await util.wait(1100);
					$('.aggro-bar').removeClass('level-up');
				}
			}
		} else {
			for(let i = 0; i < amount; i++) {
				let amt = 1;
				if(game.difficulty == 'easy') amt = util.chance(50) ? 1 : 0;
				player.aggro.current += amt;
				if(game.aggroThresholds.includes(player.aggro.current) || player.aggro.current > game.aggroThresholds.at(-1)) {
					if(game.playsounds) sounds.play('aggroLevel');
					player.aggro.level += 1;
					$('.aggro-bar span.level').html(player.aggro.level);
					$('.aggro-bar span.current').html(player.aggro.current);
					$('.aggro-bar').addClass('level-up');
					await util.wait(1100);
					$('.aggro-bar').removeClass('level-up');
				}
			}
		}

	}

	$('.aggro-bar span.level').html(player.aggro.level);
	$('.aggro-bar span.current').html(player.aggro.current);
	util.updateAggroPercentage();
	setStatus();

}

function loot(type, tier = 3) {

	stopMusic();

	if(game.playsounds) sounds.play('loot');

	setTimeout(function() {
		if(game.overworld == 'frost') {
			if(!musicOverworldFrost.playing() && game.playmusic) musicOverworldFrost.play();
		} else if(game.overworld == 'flame') {
			if(!musicOverworldFlame.playing() && game.playmusic) musicOverworldFlame.play();
		} else {
			if(!musicOverworld.playing() && game.playmusic) musicOverworld.play();
		}
	}, 1000);

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
				treasure.desc = deck.buildDescription(treasure);
				util.appendTreasure(treasure, '.loot-items');
			}
		break;
		case 'treasure':
			if(possibleTreasures.length > 0) {
				//for(let i = 0; i < possibleTreasures.length; i++) { // use this to show all possible treasures on the loot screen
					//let treasure = possibleTreasures[i];
					let treasure = util.weightedRandom(possibleTreasures);
					treasure.desc = deck.buildDescription(treasure);
					util.appendTreasure(treasure, '.loot-items');
				//}
			}
			// one or two essences
			var numEssences = util.randFromRange(1, 2);
			for(let i = 0; i < numEssences; i++) {
				var index = util.randArrayIndex(game.essences);
				util.appendEssence(game.essences[index], '.loot-items');
			}
			// one shard
			var index = util.randArrayIndex(treasures.shards);
			util.appendShard(treasures.shards[index], '.loot-items');
			// one candy
			let candy = util.weightedRandom(treasures.candies);
			//let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
			let copiedCandy = $.extend(true, {}, candy);
			copiedCandy.desc = deck.buildDescription(copiedCandy);
			let clickable = player.candies.length < game.candySlots ? true : false;
			util.appendCandy(copiedCandy, '.loot-items', clickable);
			
		break;
		case 'candy':
			for(let i = 0; i < tier; i++) {
				let candy = util.weightedRandom(treasures.candies);
				//let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
				let copiedCandy = $.extend(true, {}, candy);
				copiedCandy.desc = deck.buildDescription(copiedCandy);
				let clickable = player.candies.length < game.candySlots ? true : false;
				util.appendCandy(copiedCandy, '.loot-items', clickable);
			}
		break;
	}
	
}

function endGame(result) {

	stopMusic();

	$('.combat').removeClass('shown');
	$('body').removeClass('combating');
	if(result == 'victory') {
		$('.victory').addClass('shown');
		if(!musicVictory.playing() && game.playmusic) musicVictory.play();
	} else {
		$('.loss').addClass('shown');
		if(!musicLoss.playing() && game.playmusic) musicLoss.play();
	}

}

function rewardsScreen() {

	$('.rewards').addClass('shown');
	$('.rewards-loot').empty();
	$('.rewards-loot-wrapper').removeClass('shown');

	game.toExclude = [];

	for(let i = 0; i < game.cardRewardNumber; i++) {
		let card = deck.decideCard();
		util.appendCard(card, '.rewards-cards');
	}
	if(util.chance(game.candyChance)) {
		game.candyChance -= 20;
		if(game.candyChance < 0) game.candyChance = 0;
		let candy = util.weightedRandom(treasures.candies);
		//let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
		let copiedCandy = $.extend(true, {}, candy);
		copiedCandy.desc = deck.buildDescription(copiedCandy);
		let clickable = player.candies.length < game.candySlots ? true : false;
		util.appendCandy(copiedCandy, '.rewards-loot', clickable);
		$('.rewards-loot-wrapper').addClass('shown');
	}
	if(util.chance(game.shardChance) && deck.numOpenSlots() > 0) {
		game.shardChance -= 10;
		if(game.shardChance < 0) game.shardChance = 0;
		var index = util.randArrayIndex(treasures.shards);
		util.appendShard(treasures.shards[index], '.rewards-loot');
		$('.rewards-loot-wrapper').addClass('shown');
	}

}

function treasureScreen() {

	game.treasureChance += Math.round(game.floor * .75);

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
		
	} else {

		// go right to the courage screen if there are no treasures to be had
		courageScreen();

	}

}

function gateScreen() {

	$('.gate-screen').addClass('shown');

}

function courageScreen() {

	if(game.mapType == 'fountain') return false; // courage screen would have displayed prior to the fountain screen

	if(game.floor % game.courageInterval == 0) {

		stopMusic();
		if(!musicCourage.playing() && game.playmusic) musicCourage.play();

		$('.courage-screen').addClass('shown');
		$('.courage-remove').addClass('shown');

		let theseTreasures = [];
		let possibleTreasures = treasures.treasures.filter(i => i.owned == false);

		for(let i = 0; i < game.courageTreasureAmount; i++) {
			let thisTreasure = util.weightedRandom(possibleTreasures);
			theseTreasures.push(thisTreasure);
			possibleTreasures = possibleTreasures.filter(i => i.id !== thisTreasure.id);
			if(thisTreasure == undefined) break;
			thisTreasure.desc = deck.buildDescription(thisTreasure);
			util.appendTreasure(thisTreasure, '.courage-items');
		}

		for(let i = 0; i < game.courageCandyAmount; i++) {
			let thisCandy = util.weightedRandom(treasures.candies);
			thisCandy.desc = deck.buildDescription(thisCandy);
			let clickable = player.candies.length < game.candySlots ? true : false;
			util.appendCandy(thisCandy, '.courage-items', clickable);
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = deck.decideCard('attack');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = deck.decideCard('tool');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = deck.decideCard('magic');
			util.appendCard(card, '.courage-cards');
		}

		for(let i = 0; i < game.courageCardAmount; i++) {
			let card = deck.decideCard('ability', 'uncommon');
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
		} else {
			$(this).parent().removeClass('too-expensive');
		}
	});
	$('.courage-items .candy-courage').each(function(e) {
		let cost = $(this).attr('data-amount');
		if(cost > player.courage) {
			$(this).parent().addClass('too-expensive');
		} else {
			$(this).parent().removeClass('too-expensive');
		}
	});
	$('.courage-cards .card-courage').each(function(e) {
		let cost = $(this).attr('data-amount');
		if(cost > player.courage) {
			$(this).parent().addClass('too-expensive');
		} else {
			$(this).parent().removeClass('too-expensive');
		}
	});
	let cost = game.removeCardCost;
	if(cost > player.courage) {
		$('.courage-remove').addClass('too-expensive');
	} else {
		$('.courage-remove').removeClass('too-expensive');
	}
	
	setStatus();
}

function addCandy(add) {

	if(player.candies.length < game.candySlots) {
		if(game.playsounds) sounds.play('addCandy');
		let candy = treasures.candies.find(({ id }) => id === add);
		//let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
		let copiedCandy = $.extend(true, {}, candy);
		copiedCandy.desc = deck.buildDescription(copiedCandy);
		Player().addCandy(copiedCandy, player);
		if(player.candies.length == game.candySlots) {
			$('.loot-items .candy').removeClass('clickable');
		}
	}

}

async function eatCandy(add, monster = false) {

	if(game.playsounds) sounds.play('addCandy');
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
			let turns = abilities[e].turns == undefined ? -1 : abilities[e].turns;
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

	if(game.playsounds) sounds.play('trashCandy');
	let candy = player.candies.find(({ guid }) => guid === add);
	player.candies = player.candies.filter(i => i.guid !== candy.guid);

}

function addTreasure(add) {

	if(game.playsounds) sounds.play('addTreasure');
	let treasure = treasures.treasures.find(({ id }) => id === add);
	treasure.desc = deck.buildDescription(treasure);
	Player().addTreasure(treasure, player);

	// treasures that have counters don't get applied immediately
	if(treasure.permanent) {
		activateTreasure(treasure);
	}

}

function buyTreasure(id) {

	if(game.playsounds) sounds.play('buyItem');
	addTreasure(id);
	let treasure = util.getTreasureById(id, treasures.treasures);
	player.courage -= treasure.courage;
	updateItemCost();
		
}

function buyCandy(id) {

	let bought = false;

	if(player.candies.length < 3) {
		if(game.playsounds) sounds.play('buyItem');
		addCandy(id);
		let candy = util.getCandyById(id, treasures.candies);
		player.courage -= candy.courage;
		updateItemCost();
		bought = true;
	}

	return bought;
		
}

function buyCard(id) {

	if(game.playsounds) sounds.play('buyItem');
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

	if(game.playsounds) sounds.play('removeCard');

	player.courage -= cost;
	deck.removeCard(guid);

	updateItemCost();

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
		if(card != undefined) {
			$('.card.playable').removeClass('selected'); // deselect any other previously selected cards
			$('.button.play-card').remove();
			if(!$('body').hasClass('selecting')) {
				if(elem.hasClass('combinable')) {
					$('.card.playable:not(.combinable').removeClass('playable');
					elem.addClass('selected');
					// some cards can be combined or played. does player want to play this card instead of combine it?
					if(util.hasPlayAction(card) && elem.hasClass('playable')) {
						util.appendConfirm(card, elem);
					}
				} 
				if(card.target == 'monster') {
					if(game.playsounds) sounds.play('selectCard');
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
		$('.discard-done').removeClass('shown');
	} else if($('.card.discard').length < game.toDiscard) {
		elem.addClass('discard');
		$('.discard-done').removeClass('shown');
		// if there are not enough hand cards to satisfy requirements, or if requirements are met, show done button
		if($('.player-cards .card:not(.discard)').length == 0 || $('.card.discard').length == game.toDiscard) {
			$('.discard-done').addClass('shown');
		}
	}

}

function markDestroy(elem) {

	if(elem.hasClass('destroy')) {
		elem.removeClass('destroy');
		if(!game.destroyOptional) {
			$('.destroy-done').removeClass('shown');
		}
	} else if($('.card.destroy').length < game.toDestroy) {
		elem.addClass('destroy');
		if(!game.destroyOptional) {
			$('.destroy-done').removeClass('shown');
		}
		// if there are not enough hand cards to satisfy requirements, or if requirements are met, show done button
		if($('.player-cards .card:not(.destroy)').length == 0 || $('.card.destroy').length == game.toDestroy) {
			$('.destroy-done').addClass('shown');
		}
	}

}

function discardCards() {

	$('.card.discard').each(function(e) {

		discardCard($(this));

	}).promise().done(function() {

		$('body').removeClass('discarding');
		$('.discard-done').removeClass('shown');
		$('.card').removeClass('discard discardable');
		$('.discard-message').removeClass('shown');
		if(player.speed.current > 0) $('.draw-card').removeClass('disabled');
		game.toDiscard = 0;
		combatDeck.updateCardPlayability(player, combatDeck);
		setStatus();

		if(!$('body').hasClass('destroying')) {
			$('body').removeClass('selecting');
		}

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

		$('body').removeClass('destroying');
		$('.destroy-done').removeClass('shown');
		$('.card').removeClass('destroy destroyable');
		$('.destroy-message').removeClass('shown');
		if(player.speed.current > 0) $('.draw-card').removeClass('disabled');
		game.toDestroy = 0;
		game.destroyOptional = false;
		combatDeck.updateCardPlayability(player, combatDeck);
		setStatus();

		if(!$('body').hasClass('discarding')) {
			$('body').removeClass('selecting');
		}
		
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

	if(game.playsounds) sounds.play('deselectCard');

	elem.removeClass('selected');

	removeArrow();

	$('.monster').removeClass('clickable');

}

function updateCritChance() {

	let crit = game.attackCardsPlayed + player.rowdy.current;
	if(crit > 100) crit = 100;
	game.critChance = crit;

	//game.critChance = 100; // dev purposes only

}

function combineCards(elem) {
	
	playCard(elem, undefined, 'combine', false);

	$('.card.combinable.selected').each(function() {

		let card = util.getCardByGuid($(this).data('guid'), combatDeck.handCards);
		combatDeck.destroyCard(card, combatDeck);
		processCard(card, false, 'vanishes');

		if(game.playsounds) sounds.play('combineCards');
		
	}).promise().done(function() {

		setStatus();
		
	});

}

async function playCard(elem, monster = undefined, type = false, useMana = true) {

	$('.monster').removeClass('clickable');
	elem.removeClass('selected playable').addClass('playing');
	removeArrow();

	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	let deckCard = util.getCardByGuid(elem.data('guid'), deck.cards);

	if(card == undefined) return false;

	let sound = card.sound ? card.sound : card.type + 'Card';

	if(game.playsounds) sounds.play(sound);

	let currentMonster = false;
	if(monster != undefined) {
		currentMonster = game.currentMonsters.filter(i => i.guid == monster.data('guid'));
	}

	let mana = util.getCardAttribute(card, 'mana');
	let multiply = 1;
	let numShards = util.getShardNum(card, 'any');
	if(mana == '?' && useMana) {
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

	// reduce mana prior to processing card
	if(mana == '?' && useMana) {
		player.mana.current = 0;
	} else if(useMana) {
		player.mana.current -= mana;
	}
	if(player.mana.current <= 0) player.mana.current = 0;

	await processCard(card, currentMonster, type, multiply);

	if(card.type == 'attack') {
		player.momentumAmount += player.momentum.current;
	}

	let use = util.getCardAttribute(card, 'use');
	let breakable = util.getCardAttribute(card, 'breakable');
	if(use > 0) {
		use -= 1;
		reduceCardStat(card, 'use', 1);
		if(breakable) {
			// use needs to be permanently decreased
			deckCard.use -= 1;
			// in the future this might need to be dealt with more holistically, because perhaps breakable
			// could be affected by shards (although it's not now)
		}
	}

	let linger = util.getCardAttribute(card, 'linger');

	// figure out what to do with card
	if(shouldDestroyCard(card)) {
		// check for breakable
		let skipDead = false;
		if(breakable) {
			removeCardFromDeck(elem.data('guid'));
			skipDead = true;
		}
		combatDeck.destroyCard(card, combatDeck, skipDead);
		await processCard(card, false, 'vanishes');
	} else if(activateCard(card)) {
		combatDeck.activateCard(card, combatDeck);
	} else if(linger < 1) {
		combatDeck.discardCard(card, combatDeck, 'played');
	}

	if(linger > 0) {
		linger -= 1;
		reduceCardStat(card, 'linger', 1);
	}

	// check for bless
	if(card.type == 'ability' && player.bless.enabled) {
		let possibleCards = combatDeck.handCards.filter(i => i.mana > 0);
		let freeCard = util.randFromArray(possibleCards);
		if(freeCard != undefined) {
			freeCard.mana = 0;
			updateCardDescriptions('handCards');
		}f
	}

	combatDeck.updateCardPlayability(player, combatDeck);

	elem.removeClass('playing');

	// it's possible draw-card button has been disabled, but this card added speed
	if(player.speed.current > 0) $('.draw-card').removeClass('disabled');

	if(card.type == 'attack') updateTreasureTriggers('attackCardsPlayed');
	if(card.type == 'tool') updateTreasureTriggers('toolCardsPlayed');
	if(card.type == 'magic') updateTreasureTriggers('magicCardsPlayed');
	updateTreasureTriggers('cardsPlayed');
	setStatus();
	updateCritChance();
	monsterIntent();

}

function reduceCardStat(card, stat, amount) {

	let stat2 = stat + '_2';
	if(card[stat] != undefined) card[stat] -= amount;
	if(card.shardUpgrades[stat] != undefined) card.shardUpgrades[stat] -= amount;
	if(card.iceShardUpgrades[stat] != undefined) card.iceShardUpgrades[stat] -= amount;
	if(card.iceShardUpgrades[stat2] != undefined) card.iceShardUpgrades[stat2] -= amount;
	if(card.fireShardUpgrades[stat] != undefined) card.fireShardUpgrades[stat] -= amount;
	if(card.fireShardUpgrades[stat2] != undefined) card.fireShardUpgrades[stat2] -= amount;
	if(card.bothShardUpgrades[stat] != undefined) card.bothShardUpgrades[stat] -= amount;

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
				// processDmg wants an undefined object, but processEffects and ProcessAbilities both want the player object
				currentMonster = [player];
				target = undefined;
			} else {
				target = util.shuffle(currentMonsters);
			}
		} else {
			target = util.shuffle(currentMonsters);
		}
	}

	let dmg = util.getCardAttribute(card, 'dmg', type);
	await processDmg(dmg, target, multiply, card, type);

	if(monsters.allDead()) return;

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

	combatDeck.updateCardPlayability(player, combatDeck);

}

async function processDmg(dmg, currentMonster, multiply, card = false, type = false) {
	if(dmg.length) {
		for(let i = 0; i < multiply; i++) {
			let criticalHit = type != 'draw' ? util.chance(game.critChance) : false;
			for(let i = 0; i < dmg.length; i++) {
				let thisDmg = dmg[i] + player.momentumAmount;
				if(currentMonster) {
					let fatalityHit = false;
					// check for fatality
					if(player.fatality.current > 0 && (game.highestDmgRoll * player.fatality.current) > thisDmg && type != 'draw') {
						thisDmg = game.highestDmgRoll * player.fatality.current;
						fatalityHit = true;
						// fatality is the only effect that lasts per card rather than per turn
						// we also don't want to trigger fatality if the damage is coming from card draw
						if(card.type == 'attack' && type != 'draw') {
							if(player.fatality.turns > 0) {
								player.fatality.turns -= 1;
								let index = player.fatality.turns;
								let temp = player.fatality.temp[index] != undefined ? player.fatality.temp[index] : 0;
								if(temp > 0) {
									player.fatality.current -= temp;
									player.fatality.temp.splice(index, 1);
								}
							}
						}
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
					await attackMonster(currentMonster[0], d, fatalityHit);
					//await util.wait(game.animationGap);
					if(criticalHit) {
						game.attackCardsPlayed = 0;
						//player.rowdy.current = player.rowdy.base; // this was incorrect - rowdy should persist regardless of critical hit
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
				await util.wait(game.animationDmg);
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

						//if(game.combatEndedFlag) return; //disabled this because it was not allowing the library quest to work
						game.toShow = [];
						let addCard = '';
						let addThisCard = {};
						let thisCard = {};
						let possibleCards = [];
						let shards = actions[e].with != undefined ? actions[e].with : [];
						$('.player-panel .standard-message').html('').removeClass('shown');

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
									} else if(actions[e].type == 'converter' || actions[e].type == 'bottled' || actions[e].type == 'clutter') {
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

						// make sure we're in the correct pack
						possibleCards = possibleCards.filter(i => i.pack == 'basic' || i.pack == game.boosterPack);
						
						for(let i = 0; i < actions[e].value; i++) {
							thisCard = util.randFromArray(possibleCards);
							possibleCards = possibleCards.filter(i => i.id !== thisCard.id);

							addThisCard = addCard;
							if(addCard == '') addThisCard = thisCard.id;

							if(actions[e].select != undefined) {
								thisCard = combatDeck.initCard(thisCard);
								combatDeck.chooseCards.push(thisCard);
								game.toPile = actions[e].to;
								if(shards.length > 0) {
									for(let i = 0; i < shards.length; i++) {
										deck.attachShard(thisCard, shards[i]);
									}
								}
							} else {
								// we need to pass the guid in case the card is added during combat before the decks
								// have a chance to sync. this is the only time currently that we're actually passing a guid in
								let guid = util.randString();
								combatDeck.addCard(addThisCard, combatDeck, actions[e].to, player, shards, guid);
								if(actions[e].permanent) {
									deck.addCard(addThisCard, guid);
								}
								thisCard = util.getCardById(addThisCard, AllCards().cards);
								if(thisCard != undefined) {
									let desc = deck.buildDescription(thisCard);
									thisCard.desc = desc;
									game.toShow.push(thisCard);
								}
							}
						}

						if(combatDeck.chooseCards.length > 0 && actions[e].select != undefined) {
							game.toPick = actions[e].select;
							viewChooseCards(util.sort(combatDeck.chooseCards));
						} else {
							deck.showModifiedCards(combatDeck, player, true);
						}

					break;
					case 'transmute':
						$('.choose-cards-panel .message').html('choose cards to transmute').addClass('shown');
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
							$('.choose-cards-panel .done').hide();
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
						game.toShow = [];
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
								//if(!actions[e].random) {
									util.appendCard(cards[i], '.shard-cards-panel .cards');
								//}
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
										if(game.playsounds) sounds.play('attachShard');
										deck.attachShard(card, thisShard);
										game.toShow.push(card);
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
						
						deck.showModifiedCards(combatDeck, player, true);
						
					break;
					case 'draw':
						for(let i = 0; i < actions[e].value; i++) {
							addCardTo('draw', null, 'handCards', true);
						}
					break;
					case 'discard':
						// currently only cards can invoke this action, so make sure invoking card isn't the only one in hand
						if(combatDeck.handCards.length > 1) {
							$('.discard-message').html('choose cards to discard').addClass('shown');
							//$('.discard-done').addClass('shown');
							$('.player-cards .card').addClass('discardable').removeClass('playable');
							$('.draw-card').addClass('disabled');
							$('body').addClass('discarding selecting');
							game.toDiscard = actions[e].value;
							update = false;
						}
					break;
					case 'destroy':
						// currently only cards can invoke this action, so make sure invoking card isn't the only one in hand
						if(combatDeck.handCards.length > 1) {
							$('.destroy-message').html('choose cards to destroy').addClass('shown');
							if(actions[e].optional) {
								game.destroyOptional = true;
								$('.destroy-done').addClass('shown');
							}
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
						let key = actions[e].key;
						let what = actions[e].what;
						let value = actions[e].value;
						// check for changing stances
						if(what == 'stance') {
							if(value != player.stance) {
								changeStance(value);
							}
						}
						// if essence levels are maxed out, increase alternative stats
						if((what == 'aura' && player.aura.level > game.essences.length)) {
							what = 'mana'; // key is already 'current' and value is already 1
						} else if ((what == 'sparkle' && player.sparkle.level > game.essences.length)) {
							what = 'health'; // key is already 'current'
							value = 5;
						} else if ((what == 'shimmer' && player.shimmer.level > game.essences.length)) {
							what = 'speed'; // key is already 'current' and value is already 1
							value = 2;
							// some other options would be increase raindow, increase courage, or decrease aggro
							// armor and block won't work in the current state unless we account for them as we have courage below
						}
						if(key == undefined) {
							// hacky provision for courage :( - it's the only simple/single value stat that needs to change numerically
							if(what == 'courage') {
								player[what] += value;
								updateItemCost();
							} else {
								player[what] = value;
							}
						} else {
							if(key == 'type') {
								player[what][key] = value;
							} else {
								// we will actually increase the essence stats within the updateEssenceLevels function called below
								if(what != 'aura' && what != 'sparkle' && what != 'shimmer') {
									player[what][key] += value;
									// it's possible we had full armor and reduced health, so armor needs to reduce to match health
									if(player.armor > player.health.current) player.armor = player.health.current;
								}
								// if we increased speed we might need to re-enable draw card button
								if(what == 'speed' && value > 0) {
									$('.draw-card').removeClass('disabled');
								}
							}
						}
						// if we're changing the rainbow max stat, need to process possible rainbow activation & dom
						if(what == 'rainbow') {
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
						if(what == 'aura' || what == 'sparkle' || what == 'shimmer') {
							updateEssenceLevels(what, value);
						} else if(what != 'rainbow') {
							if(game.playsounds) {
								if(value > 0) {
									if(what == 'courage') {
										sounds.play('courage');
									} else {
										sounds.play('statUp');
									}
								} else {
									sounds.play('statDown');
								}
							}
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
						let card = combatDeck.getOldestPlayableCard(combatDeck.handCards, playedCard);
						if(card) {
							let domCard = util.getDomCardByGuid(card.guid);
							playCard(domCard, undefined, false, false)
						}
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
				//let effects = [{effect: 'speed', base: 1}];
				//await processEffects(effects);
				addTreasure('artisanal_boots'); 
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'thickness') {
				//let effects = [{effect: 'solid', base: 2}];
				//await processEffects(effects);
				addTreasure('artisanal_chestplate'); 
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'strength') {
				//let effects = [{effect: 'might', base: 2}];
				//await processEffects(effects);
				addTreasure('artisanal_sword'); 
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wizardry') {
				//let effects = [{effect: 'lightning', base: 5}];
				//await processEffects(effects);
				addTreasure('artisanal_hat'); 
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
				await processArmor([25]);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_healing') {
				let actions = [{action: 'stat', what: 'health', key: 'current', value: 20}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_long_life') {
				let actions = [{action: 'stat', what: 'health', key: 'max', value: 7}];
				await processActions(actions);
				heal(player, 7);
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
			} else if(option == 'worship') {
				let actions = [
					{action: 'stat', what: 'health', key: 'max', value: 4},
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
				loot('candy', 1);
			} else if(option == 'buy_2_candies') {
				if(player.courage > 1) {
					gainCourage(-1);
					loot('candy', 2);
				}
			} else if(option == 'buy_3_candies') {
				if(player.courage > 2) {
					gainCourage(-2);
					loot('candy', 3);
				}
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
				let actions = [{action: 'stat', what: 'rainbow', key: 'base', value: 2}, {action: 'stat', what: 'rainbow', key: 'max', value: 5}];
				await processActions(actions);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'see_clarity') {
				let actions = [{action: 'stat', what: 'rainbow', key: 'base', value: 2}, {action: 'stat', what: 'rainbow', key: 'max', value: -5}];
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
	let critDmg = Math.round(dmg * multiplier);
	let fierce = player.fierce.current;
	critDmg += fierce;
	$('.crit').addClass('shown').find('span').html(critDmg);
	return critDmg;
}

async function attackMonster(monster, dmg, fatalityHit = false, hypnotizeHit = false) {

	// might effect
	dmg += player.might.current;
	dmg = Math.round(dmg * player.punch.current);
	
	doDamage(dmg, player, [monster], false, false, fatalityHit, hypnotizeHit);
	
	monsters.updateMonsterStats(monster);

	if(monsters.dying(monster)) {
		if(game.playsounds) sounds.play('death');
	}
	if(monsters.dead(monster)) {
		util.removeMonster(monster.guid);
	}
	
}

function applyBlock(blk, to) {
	if(to != undefined) {
		let blkActual = blk + to.solid.current;
		if(blkActual > 0) {
			setTimeout(function() {
				if(game.playsounds) sounds.play('gainBlk');
			}, 300);
			to.block += blkActual;
			if(to.block > 999) to.block = 999;
		}
		game.message(to.name + ' (' + to.guid + ') gains ' + blkActual + ' block');
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

	// don't let rainbow max get to 0
	if(to.rainbow.max < 1) {
		to.rainbow.max = 1;
	}

	// set initial magic type
	if(to.rainbow.current == 0) {
		to.rainbow.type = type;
	}

	let totalAmount = Math.round(player.sorcery.current * (magic.amount + player.conjure.current));
	if(totalAmount < 0) totalAmount = 0;

	// increase magic amount
	to.rainbow.current += totalAmount;

	// mix magic types?
	if(type != to.rainbow.type) {
		if(game.playsounds) sounds.play('muddleMagic');
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
			//to.sorcery.current += (to.enchanter.current / 10); // removed for balance
			to.conjure.current += to.enchanter.current;
		}

	}

	// update rainbow dom
	updateRainbowDom(player);

	game.message(to.name + '(' + to.guid + ') applies ' + totalAmount + ' ' + type + ' magic');

}

function updateRainbowDom(to) {
	let magicPower = util.getStatPercentage(to.rainbow.current, to.rainbow.max);
	if(magicPower > 100) magicPower = 100;
	if(magicPower < 0) magicPower = 0;
	magicPower = magicPower * 1.8;
	let amount = to.rainbow.current <= to.rainbow.max ? to.rainbow.current : to.rainbow.max;
	amount = Math.round(amount);
	$('.magic-rainbow .semi-circle--mask').css('transform', 'rotate(' + magicPower + 'deg) translate3d(0, 0, 0)').removeClass('activated'); 
	$('.magic-rainbow .rainbow-power-current').html(amount);
	$('.magic-rainbow .rainbow-power-max').html(to.rainbow.max);
	$('.magic-rainbow').attr('data-type', to.rainbow.type);
	$('.magic-rainbow').removeClass('dark elemental rainbow chaos muddled').addClass(to.rainbow.type);
	$('.magic-rainbow .magic-type span').html(to.rainbow.type);
	$('.magic-rainbow .magic-type span').attr('data-type', player.rainbow.type);
}

async function activateRainbow(type, to) {

	$('.player-cards').addClass('unavailable');

	if(monsters.allDead()) return; // if rainbow tries to activate multiple times after it has already killed all monsters

	// check for mage
	if(to.mage.current > 0) {
		to.sorcery.current += (to.mage.current / 10);
		//to.conjure.current += to.mage.current; // removed for balance
	}
	
	to.rainbow.current -= to.rainbow.max;
	let ignoreBlock = to.rainbow.type == 'elemental' ? true : false;
	let ignoreArmor = to.rainbow.type == 'dark' ? true : false;
	let doubleDamage = to.rainbow.type == 'chaos' ? true : false;
	let dmg = doubleDamage ? to.rainbow.max * 2 : to.rainbow.max;
	let magicPower = util.getStatPercentage(to.rainbow.current, to.rainbow.max);

	// lightning and thunder
	dmg += player.lightning.current;
	dmg = Math.round(dmg * player.thunder.current);

	await game.rainbowAnimations(magicPower);
	//await util.wait(game.animationDelay);

	if(game.playsounds) sounds.play('activateRainbow');

	await util.wait(game.animationDelay);

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);

	let whichMonster = to.rainbow.type == 'muddled' || to.rainbow.type == 'chaos' ? [util.randFromArray(currentMonsters)] : currentMonsters;

	// check for magic resistance
	dmg = Math.round(dmg - (dmg * whichMonster[0].resistance.current));

	await doDamage(dmg, undefined, whichMonster, ignoreBlock, ignoreArmor);
	for(let i = 0; i < game.currentMonsters.length; i++) {
		monsters.updateMonsterStats(game.currentMonsters[i]);
		if(monsters.dying(game.currentMonsters[i])) {
			if(game.playsounds) sounds.play('death');
		}
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
		$('.player-cards').removeClass('unavailable');
	}

	return magicPower;
}

function applyArmor(arm, to) {
	if(to != undefined) {
		arm = parseFloat(arm);
		let armor = arm + to.craft.current;
		let extraArmor = (to.armor + armor) - to.health.current;
		if(armor < 0) armor = 0;
		if(game.playsounds && armor > 0) sounds.play('gainArmor');
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

async function doDamage(dmg, from, to, ignoreBlock = false, ignoreArmor = false, fatalityHit = false, hypnotizeHit = false) {

	if(to.length > 0) {
		for (let i = 0; i < to.length; i++) {

			let thisTo = to[i] == false || to[i] == undefined ? player : to[i];

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
			if(thisTo.unreachable?.enabled) {
				thisDmg = 1;
			}

			let unblockedDmg = thisDmg;
			if(!ignoreBlock) {
				unblockedDmg = thisDmg - thisTo.block;
			}

			// full block
			if(unblockedDmg <= 0) {
				thisTo.block -= thisDmg;
				dmgTaken += thisDmg;
				if(game.playsounds) sounds.play('loseBlock');
			} else {
				if(!ignoreBlock) {
					if(thisTo.block > 0 && game.playsounds) sounds.play('loseBlock');
					dmgTaken += thisTo.block;
					thisTo.block = 0;
				}
				// armor reduces damage by 50%
				let armoredDmg = unblockedDmg;
				// odd damage amounts should affect armor +1 more than health (unless no armor)
				let odd = (armoredDmg % 2 == 0) || (thisTo.armor == 0) ? 0 : 1;
				if(!ignoreArmor) {
					armoredDmg = Math.round(unblockedDmg / 2);
				}
				// if we have enough armor, reduce armor and health by 50% of damage
				if(!ignoreArmor && armoredDmg <= thisTo.armor) {
					armorLost += (armoredDmg + odd);
					dmgTaken += armorLost;
					thisTo.armor -= (armoredDmg + odd);
					// only hit armor if tank enabled
					if(!thisTo.tank.enabled) {
						healthLost += armoredDmg;
						dmgTaken += armoredDmg;
						thisTo.health.current -= armoredDmg;
						if(armoredDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && thisTo.type=='monster') {
							game.highestDmgRoll = armoredDmg;
						}
					}
				} else {
					if(ignoreArmor || thisTo.armor == 0) {
						// full hit
						healthLost += unblockedDmg;
						dmgTaken += unblockedDmg;
						thisTo.health.current -= unblockedDmg;
						if(unblockedDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && thisTo.type=='monster') {
							game.highestDmgRoll = unblockedDmg;
						}
					} else {
						// first reduce armored health, then full tank the rest	
						let partialDmg = thisTo.armor;
						let fullDmg = unblockedDmg - (thisTo.armor * 2);
						// only hit remaining armor if tank enabled
						if(!thisTo.tank.enabled) {
							healthLost += partialDmg;
							dmgTaken += partialDmg;
							thisTo.health.current -= partialDmg;
							if(partialDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && thisTo.type=='monster') {
								game.highestDmgRoll = partialDmg;
							}
						}
						healthLost += fullDmg;
						dmgTaken += fullDmg;
						thisTo.health.current -= fullDmg;
						if(fullDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && thisTo.type=='monster') {
							game.highestDmgRoll = fullDmg;
						}
						armorLost += thisTo.armor;
						dmgTaken += thisTo.armor;
						thisTo.armor = 0;
					}
				}
			}

			if(thisTo.health.current <= 0) thisTo.health.current = 0;
			if(thisTo.armor <= 0) thisTo.armor = 0;
			if(thisTo.block <= 0) thisTo.block = 0;

			let dmgTakenDom = $('.player .dmg-taken');
			let armorLostDom = $('.player .armor-lost');
			let healthLostDom = $('.player .health-lost');
			if(thisTo.type=='monster') {
				dmgTakenDom = $('.monster[data-guid=' + thisTo.guid + '] .dmg-taken');
				armorLostDom = $('.monster[data-guid=' + thisTo.guid + '] .armor-lost');
				healthLostDom = $('.monster[data-guid=' + thisTo.guid + '] .health-lost');
			}
			dmgTakenDom.attr('data-amount', dmgTaken);
			armorLostDom.attr('data-amount', armorLost);
			healthLostDom.attr('data-amount', healthLost);

			if(dmgTaken > 0) {
				game.blkAnimations({data: dmgTaken, to: dmgTakenDom});
				game.message(thisTo.name + ' (' + thisTo.guid + ') takes ' + dmgTaken + ' total damage');
				await util.wait(game.animationDmg);
			}
			if(armorLost > 0) {
				game.dmgAnimations({data: armorLost, to: armorLostDom});
				await util.wait(game.animationDmg);
				// check for spikes
				if(thisTo.spikes.current > 0 && from != undefined) {

					let spikesDmg = thisTo.spikes.current;
					if(spikesDmg < 1) spikesDmg = 1;

					await doDamage(spikesDmg, undefined, [from]);
					setStatus(false);

				}
				game.message(thisTo.name + ' (' + thisTo.guid + ') loses ' + armorLost + ' armor');
				if(game.playsounds) sounds.play('loseArmor');
			}
			if(healthLost > 0) {
				if(game.playsounds) sounds.play('takeDmg');
				game.dmgAnimations({data: healthLost, to: healthLostDom});
				await util.wait(game.animationDmg);
				// check for retaliate
				if(thisTo.retaliate.current > 0 && from != undefined) {

					let retalDmg = thisTo.retaliate.current;
					if(retalDmg < 1) retalDmg = 1;
					
					await doDamage(retalDmg, undefined, [from]);
					setStatus(false);

				}
				game.message(thisTo.name + ' (' + thisTo.guid + ') loses ' + healthLost + ' health');
			}

		}

	}
}