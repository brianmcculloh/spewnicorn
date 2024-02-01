/*********************************************
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
 * Game Engine - DONE
 * Gates - DONE
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
 * Mechanic: treasures that do dmg/armor/block on certain turns
 * Effect: block, armor, or damage synergies with destroying, discarding, and combining cards
 * --whenever you exhaust a clutter card, do x damage, gain x block, summon x rainbow, gain x armor, heal x amount, or draw x cards
 * Effect: each time you take damage, do something (synergizes with exposed strike)
 * Mechanic: frost guardian should gain health equal to aggro ammount and flame guardian should reduce health equal to aggro level for every card played
 * Effect: overkill: either adds block or charges rainbow x% of extra damage done after killing a monster
 * Effect: rainbow type no longer muddles, but instead turns into the magic type of the played card
 * Ability: mix and match combineable cards which results in a random combined card
 * Mechanic: increase all card use/expire/linger values
 * Effect: retrofit resistance so that it can be hexed and go above 1 so specific monsters can be targeted to take more magic damage
 * Ability: card rewards are now booster pack agnostic (like a prismatic shard)
 * Action: do damage equal to floor + turn
 * Ability: heal the current floor number health at the start of arenas and guardians
 * Ability: languish - take damage each time a card is played equal to number of cards played this combat - have a unique enemy hex this, and also have a really good card have this as its downside
 * Mechanic: Ability to buy packs of cards mid-combat with courage - the packs get added to the current card pool and are otherwise unaddable
 * Effect: heal x amount per magic rainbow cycle
 * Action: play card(s) from draw pile (either random or chosen)
 * Action: play all attack/magic/tool cards in draw pile and hand
 * Action: play all cards that have age
 * Ability: lightning multiplies thunder
 * Ability: might multiplies punch
 * Action: can the add card what value be an array so it chooses from random cards? (add random shashes)
 * Mechanic: do something cool every time you muddle magic so there are more reasons to play risky spells and muddle magic
 * Effect: Provoked - gain x might each time you play a clutter card
 * Ability: Luck - small chance to improve all kinds of things - dmg, blk, armor, courage, crit chance, health gain
 * Ability: (attune? shrewd? studential?) gain random effect/ability at the start of each combat
 * Action: (card Vulgar Display) gain block equal to your highest damage roll
 * Mechanic: improve card stat, either permanently (genetic algorithm) or per combat play (claw)
 * Effect: hex that disallows certain types of cards being played
 * Action: wild card - percentage chance of doing a bunch of different things
 * -low chance to have a negative effect and powerful effect, higher chances of things in between happening
 * Effect: regenerative shield: whenever a card is drawn via a card/candy/treasure gain x block
 * Effect: Antimatter - whenever antimomentum activates, gain x momentum
 * Effect: whenever you gain courage, gain x more (via new treasure)
 * Ability: trade card cost locks in at current rate (via new treasure)
 * Effect: Medic - heal x every time you gain courage or essence
 * Ability: impotent - can only play tool cards
 * Effect: apply x times max rainbow block each time you activate rainbow
 * Mechanic: wild combine: can be combined with any other combined card - and when combined, add the card that the other card adds.
 * --there could be multiple wild combine cards, each one doing a special thing when combined
 * 
 * 
 * 
 * 
 * From Tim: 
 * Mechanic: draw a specifically set x amount every turn instead of draw 1 or draw all (so click draw 3 one time instead of click draw 1 three times)
 * Mechanic: confirm button when playing stance cards
 * 
 * 
 * 
 * More Quests:
 * Add special quest card(s) to deck
 * Gain courage
 * Choose a card from the current booster pack
 * Either heal or do something cool (don't think any quests currently heal)
 * Quests that permanently add clutter to deck (maybe in trade for good things, or just bad quests)
 * Quest that lets you trade all jabs and blocks for x courage/health/maxhealth per card
 * Quest: trade increasingly more health to choose one common weapon, or one uncommon weapon, or one rare weapon, or one legendary weapon
 * Quest: heal to full health, heal to full armor, or gamble for courage
 * Quest: next combat is peaceful, meaning enemies do half damage
 * Quest: Snitch - gain agggro for a reward, lose 1 aggro for nothing, lose 2 (or more?) aggro at a cost of health or courage
 * 
 * 
 * 
 * PHASE III:
 * 
 * Create and balance cards - DONE
 * Create and balance monsters and monster sets - DONE
 * Create and balance treasure - DONE
 * Create and balance candy - DONE
 * Create quests - DONE
 * Current card counts: 99 total non-pack cards and 46 pack cards (non-legendary, addable, including addable weapons)
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
 * TODO: test out the new flame guardian moveset for balancing
 * TODO: test the singularity fight for balancing
 * TODO: implement mechanics first and then add some more cards after that
 * 
 * 
 * Bug/Balance Testing playthroughs
 * Tutorial	- DONE		
 * Save progress
 * Record results - use Google Analytics for this
 * 
 * 
 * 
 * PHASE VI:
 * 
 * Fine Tuning, Quality of Life fixes, and New Features
 * 
 * Monster hexes punch down but player buffs punch up. New damage amount is larger than original but damage amount color is red - should be green.
 * Question: if player has might, should draw damage effects have might applied?
 * Question: should only one hit of a multi-attack card be affected by crit (like how fatality works)?
 * Question: cutting ring and bottled attack (cards that do damage when drawn) increase crit percentage for each monster each draw - is this wanted?
 * When playing a card that draws and discards (upgraded recoil) and the drawn card adds a card to hand (surprise attack), added card cannot be discarded
 * Speech: add speech bubble system to monsters - make it random chance with a set of possible texts
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
 * Card: attack/tool/magic cards that add might/punch/lightning/thunder
 * Card: add a random power to hand
 * Card: add multiple turns of -might/-punch. currently Stun is the only one that does this.
 * Card: 2 cost smaller damage attack that adds a large attack 0 cost retain vanishing card
 * Card: 3 cost large straight-forward damage
 * Card: common retaining attack (synergizes with wisdom)
 * Card: remove block and armor from ALL creatures including player
 * Card: heal player and if at max health, increase max health
 * Card: ability that increases speed but adds briars
 * Card: ability that increases mana but adds curses
 * Card: aoe might/punch down
 * Card: Ram: do damage equal to current armor, reduce armor by 10%
 * Card: Cycle pack - draw 2 cards (vanish) - just a straightforward utility card 
 * Card: Big dmg but reduce summon/solid/etc. (like hyperbeam)
 * Card: Add a random card from the current booster pack to hand
 * Card: ? card that adds x might
 * Card: ? card that applies x armor
 * Card: ? card that heals x amount
 * Card: ? card that applies x turns of punch hex
 * Card: ? card that applies x amount of negative might hex
 * Card: ? super combined card that does several of the above things at once
 * Card: ? card that does x aoe damange
 * Card: ? card that adds free cards to hand or draw pile
 * Card: Ascending Strike - adds the new action that does damage based on floor/turn
 * Card: Simple tool card that just removes
 * Card: 3 cost attack that reduces mana cost per shard, and double frost results in 0 cost (double flame results in 0 cost for flame version) - this is 2 cards
 * Card: magic card that hits multiple times and retains so it synergizes with age
 * Card: low dmg attack card that heals for amount of hp target monster loses
 * Card: cycle pack - discard entire hand and draw max speed num of cards
 * Card: combine pack - destroy entire hand and add 4 battle moves
 * Card: magic pack - destroy entire hand and summon x aligned magic per card destroyed
 * Card: non pack - destroy entire hand and do x dmg to target per card destroyed
 * Card: non pack - destroy entire hand and gain x block per card destroyed
 * Card: rainbow pack tool card - double your lightning (high cost rare)
 * Card: rainbow pack tool card - add 2 lightning 0 cost 1 use 1 expire
 * Card: there are no cards that add clutter other than lemonade type cards - need other cards that are strong but add clutter as a downside
 * Card: magical slash - summons 1 aligned magic
 * Card: like reprogram - increase might and solid but decrease magic stuff like conjure/summon (does not vanish)
 * Card: blank card - becomes a permanent copy of the next card that's played
 * Card: increase rowdy to 100% chance for one turn - upgraded to 2 turns
 * Card: reusable tool card that just adds 1 fatality
 * Card: Dark Synergy - adds antimatter
 * Card: Hide - gain block but lose might
 * Card: rainbow pack - do damage or gain temp might equal to max rainbow
 * Card: rainbow pack - do aoe damage equal to current summoned rainbow amount
 * Card: combine pack - play a card and then remove it from deck - breakable with use 3
 * Card: rainbow pack - does your currently charged rainbow amount of damage to a random enemy each turn
 * Card: gain block but add junk/debris cards to hand
 * Card: rainbow pack - does x damage to target for every magic card in deck
 * Card: do 100 damage to everyone in combat
 * Card: uncommon/rare cards that vanish but permanently hex might/punch a higher amount than whinny/neigh
 * Card: rare 0 cost - when drawn gain 1 turn of impotent. can only be played if only card in hand. when played do something very good like freeze all enemies and gain might
 * Card: percentage changes of doing different things
 * Card: do damage equal to total armor
 * Card: deal x damage to enemy for each enemy in combat. sharded could either add more damage or turn into aoe
 * Treasure: 3 magic cards per turn adds lightning/thunder
 * Treasure: 3 attack cards per turn adds punch
 * Treasure: 3 tool cards per turn adds stout
 * Treasure: 5 attack cards per turn adds momentum
 * Treasure: 10 attack cards per combat adds momentum
 * Treasure: 5 tool cards per turn adds wisdom
 * Treasure: 5 tool cards per turn adds tank (1 turn)
 * Treasure: add one random attack/tool/ability/magic card to hand per turn
 * Treasure: increase momentum every x cards played per turn or combat
 * Treasure: increase mystery every x cards played per turn or combat
 * Treasure: common treasure that adds 1 or 2 wisdom
 * Treasure: +1 mana per turn but add mired and lethargy to draw pile at the beginning of each combat
 * Treasure: +5 irradiate
 * Treasure: +20 irradiate on turn 1
 * Candy: add cards to hand
 * Candy: increase max health
 * 
 * 
 * 
 * 
 * BUGS [can't replicate]:
 * BUG: candy that enshardens all cards sharded the permanent deck cards rather than the temp hand cards
 * BUG: done button ghost showing on subsequent combats - if this happens again, inspect the class of the button because .button-done is hidden on combat end and start
 * BUG: i was in a fight where i was at 0 health and armor but some block and i didn't die.
 * BUG: scenario: gold leaf treasure, rest site shard directly into quest (can't remember - think it was remove a card?) into arena
 * --cards are doubled in the choose enshard card screen at the start of combat, and screen doesn't disappear after enshardening 3 cards
 * BUG: metamorphose with frost shard - if choose only one card to transmute, the overlay doesn't disappear
 * BUG: i had -2 aura and then chose to lose 2 aura again and ended up gaining 2 instead
 * BUG: i chose increase rainbow base from stained glass mirror but the next fight didn't have that base increase (it WAS there on subsequent battles)
 * BUG: attack card damage is getting reduced to 0 in combats where mystical energy and smash and grab are played, and rainbow has cycled
 * --also have black vial and magic dust. smash and grab has flame shard and mystical energy has double frost shards
 * BUG: when purchasing relic at the store, remove card becomes too expensive even if i can still afford it
 * BUG: battle Sequence was added via a card reward but it wasn't in the view deck cards until after the next combat
 * BUG: sometimes highest damage roll doesn't update - crit related?
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
var musicSingularity = util.music('singularity.mp3');
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
	util.music('battle12.mp3'),
	util.music('battle13.mp3'),
	util.music('battle14.wav'),
	util.music('battle15.wav'),
	util.music('battle16.mp3'),
	util.music('battle17.mp3'),
	util.music('battle18.mp3'),
	util.music('battle19.mp3'),
	util.music('battle20.mp3'),
	util.music('battle21.mp3'),
	util.music('battle22.mp3'),
	util.music('battle23.mp3'),
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
	musicSingularity.stop();
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

	$('#splash .difficulty').click(function(e) {

		$('#splash .difficulty').removeClass('toggled-on');
		$(this).addClass('toggled-on');
		game.difficulty = $(this).data('difficulty');

	});

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
			$('#story-panel').addClass('shown');
		}

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
				if(game.scenario=='frost') {
					game.overworld = 'frost';
					game.mapType = 'ice_gate';
					init_map_2();
				} else if(game.scenario=='flame') {
					game.overworld = 'flame';
					game.mapType = 'fire_gate';
					init_map_2();
				} else if(game.scenario=='singularity') {
					game.mapType = 'singularity';
					init_singularity();
				} else {
					init();
				}
			}, 1000);

			setTimeout(function() {
				$('#game-loading').remove();
			}, 3000);
			
		}

		$('body').addClass('game-started');

	});

	$('#story-panel .start-journey').click(function(e) {

		$('#story-panel').removeClass('shown');

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

	$('.settings-panel .button:not(.difficulty)').click(function() {
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
	
	$(document).on('click', '.booster-pack.clickable', function(e) {

		if(game.playsounds) sounds.play('startingBonus');
		$('.choose-booster-pack').addClass('shown');
		$('.pack-cards-panel .select, .choose-booster-pack .view-map').hide();
		$('.choose-booster-pack .message').html('You can view the cards in each booster pack here.');
		$('.choose-booster-pack h2').html('Booster Packs');

	});


	$(document).on('click', '.view-basic', function(e) {

		viewBasicCards();

	});

	$(document).on('click', '.pack-cards-panel .select', function(e) {
	
		if(game.playsounds) sounds.play('choosePack');
		$('.pack-cards-panel').removeClass('shown');
		$('.starting-booster-packs').removeClass('shown');
		$('.choose-booster-pack').removeClass('shown');
		$('.booster-pack').addClass('clickable');
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
		$('.booster-pack').addClass('clickable');

	});

	$(document).on('click', '.tile.clickable', function(e) {

		$('.map-inner').css('pointer-events', 'none');

		setTimeout(function() {
			$('.map-inner').css('pointer-events', 'auto');
		}, 2000);

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
		if(game.arenasComplete < game.arenasRequired) {
			$('.tile.ice-gate').removeClass('clickable').data('powertip', 'Ice Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Ice Gate: <span class="highlight">LOCKED</span>');
			$('.tile.fire-gate').removeClass('clickable').data('powertip', 'Fire Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Fire Gate: <span class="highlight">LOCKED</span>');
		} else {
			$('.tile.ice-gate').addClass('clickable').data('powertip', 'Ice Gate').attr('data-powertip', 'Ice Gate');
			$('.tile.fire-gate').addClass('clickable').data('powertip', 'Fire Gate').attr('data-powertip', 'Fire Gate');
		}

		if(game.debug) $('.map-inner div').addClass('clickable');
		
	});

	$('.tile').mousedown(function(event) {
		switch (event.which) {
			case 3:
				$(this).toggleClass('marked');
				break;
		}
	});

	$('.tile').mouseenter(function(event) {
		switch (event.which) {
			case 3:
				$(this).toggleClass('marked');
				break;
		}
	});

	$('*').on('contextmenu', function() {
		if(!game.debug) return false;
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
			$('.draw-card, .draw-all, .end-turn').removeClass('disabled');
			combatDeck.chooseCards = [];
		}

	});

	$(document).on('click', '.player-cards .card', function(e) {

		let combinable = $(this).hasClass('combinable');
		let playable = $(this).hasClass('playable');
		if(combinable) {
			let id = $(this).data('id');
			let otherCombinableExists = false;
			let otherCombinables = $('.card.combinable[data-id="' + id + '"].selected');
			$(otherCombinables).each(function() {
				if(!$(this).parent().hasClass('destroying')) {
					otherCombinableExists = true;
				}
			});
			if(otherCombinableExists && !$(this).hasClass('selected')) {
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

		if(!$('body').hasClass('destroying')) { // sometimes we could be both destroying and discarding (cleanse) and destroying takes priority
			markDiscard($(this));
		}

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

		game.cardsDrawn += 1;
		addCardTo('draw');

	});

	$(document).on('click', '.draw-all:not(.disabled)', function(e) {

		drawAll();

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
		combatDeck.chooseCards = [];

	});

	$(document).on('click', '.all-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.all-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.library-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.library-panel').removeClass('shown');

	});

	$(document).on('click', '.trade-cards-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.trade-cards-panel').removeClass('shown');

	});

	$(document).on('click', '.armory-panel .done', function(e) {

		if(game.playsounds) sounds.play('doneCards');
		$('.armory-panel').removeClass('shown');

	});

	$(document).on('click', '.trade-cards-panel .view-armory', function(e) {

		viewArmory();

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
		if(game.toPick < 1) {
			$('.draw-cards-panel').removeClass('shown');
			$('.draw-cards-panel .card').removeClass('pickable');
			$('.draw-cards-panel .message').html('');
		}

	});

	$(document).on('click', '.discard-cards-panel .pickable', function(e) {

		game.toPick -= 1;
		addCardTo('discardCards', $(this));
		if(game.toPick < 1) {
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
			if(game.toPick > 0) {
				$(this).addClass('selected');
				game.toPick -= 1;
				let theseCards = deck.cards;
				if(!game.combatEndedFlag) theseCards = combatDeck.allCards(combatDeck);
				let thisCard = util.getCardByGuid($(this).data('guid'), theseCards);
				game.toTransmute.push(thisCard);
			}
		}

	});

	$(document).on('click', '.choose-cards-panel .done.transmute', function(e) {
		
		transmuteCards();

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
		let actions = [{action: 'stat', what: 'health', key: 'max', value: amount}];
		processActions(actions);
		heal(player, $(this).attr('data-amount'));
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

	$(document).on('click', '.courage-gamble', function() {

		$('.courage-gamble').removeClass('shown');
		let actions = [{action: 'addCard', value: 1, type: 'any', to: 'deck', permanent: true}];
		processActions(actions);

	});

	$(document).on('click', '.courage-trade:not(.too-expensive)', function() {

		chooseTradeCard();
		$('.trade-cards-panel .card').addClass('clickable');

	});

	$(document).on('click', '.all-cards-panel .card.clickable', function() {

		let guid = $(this).attr('data-guid');
		let cost = game.removeCardCost;
		game.removeCardCost += 1;
		removeCardFromDeck(guid, cost);
		$('.courage-remove').data('amount', game.removeCardCost).attr('data-amount', game.removeCardCost);
		$('.courage-remove span').html(game.removeCardCost);
		$(this).addClass('disappearing')
			.delay(1000)
			.queue(function() {
				$('.all-cards-panel').removeClass('shown');
				//$('.courage-remove').removeClass('shown'); // changed to always display, but the cost still increases 1 per remove
				$(this).parent().remove().dequeue();
			});

	});

	$(document).on('click', '.trade-cards-panel .card.clickable', function() {

		if($('body').hasClass('trading')) {
			$('.trade-cards-panel').addClass('disabled');
			$('body').removeClass('trading');
			$('.trade-cards-panel .done').addClass('shown');
			let id = $(this).attr('data-id');
			addCardToDeck(id);	
			let cost = game.tradeCardCost;
			if(game.tradeCardCost < 32) {
				game.tradeCardCost *= 2;
			}
			player.courage -= cost;
			$('.courage-trade').data('amount', game.tradeCardCost).attr('data-amount', game.tradeCardCost);
			$('.courage-trade span').html(game.tradeCardCost);
			if(game.playsounds) sounds.play('trade');
			updateItemCost();
			game.toShow = [];
			game.tradeExpired = true;
			$(this).addClass('disappearing')
			.delay(500)
			.queue(function() {
				$('.trade-cards-panel').removeClass('shown');
				if(!player.guild_member.enabled || !deck.getTradeableCards()) {
					$('.courage-trade').removeClass('shown');
				}
				$(this).parent().remove().dequeue();
				$('.trade-cards-panel').removeClass('disabled');
			});
		} else {
			$('.trade-cards-panel .message').html('Choose what you want to receive for your trade.');
			$('body').addClass('trading');
			$('.trade-cards-panel .done').removeClass('shown');
			let guid = $(this).attr('data-guid');
			let card = util.getCardByGuid(guid, deck.cards);
			removeCardFromDeck(guid);
			$('.trade-cards-panel .cards').empty();
			for(let i = 0; i < card.trade.length; i++) {
				let thisCard = util.getCardById(card.trade[i], AllCards().cards);
				let desc = deck.buildDescription(thisCard);
				thisCard.desc = desc;
				let slotDesc = deck.buildSlotsDescription(thisCard);
				thisCard.slotDesc = slotDesc;
				util.appendCard(thisCard, '.trade-cards-panel .cards');
				game.toShow.push(thisCard);
			}
			$('.trade-cards-panel .card').addClass('clickable');
		}	

	});

	$(document).on('click', '.courage-done', function(e) {

		$('.courage-screen').removeClass('shown');
		$('.courage-items, .courage-cards').empty();
		$('.courage-remove').removeClass('too-expensive');
		$('.courage-trade').removeClass('too-expensive');

	});

	$(document).on('click', '.loot-items .treasure', function(e) {

		// whenever a treasure is clicked in loot items, it should be the only one allowed to obtain
		$('.loot-items .treasure').remove();

	});

	$(document).on('click', '.loot-done', function(e) {

		$('.loot-screen').removeClass('shown');
		$('.magic-fountain').removeClass('shown');
		$('.loot-items').empty();

		if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate') {
			if(game.map == 1 || game.map == 2) {
				if(game.map == 2) {
					$('.gate-screen .message').html('You have beaten the second Guardian, but your journey continues...');
				}
				gateScreen();
			} else {
				endGame('victory');
			}
		} else {
			// we don't want to show courage screen after quests or fountains
			if(game.mapType == 'arena' || game.mapType == 'normal') {
				courageScreen();
			}
		}

	});

	$(document).on('click', '.gate-done', function(e) {

		if(game.map == 2) {
			init_singularity();
		} else {
			init_map_2();
		}
		

	});

	$(document).on('click', '.play-again', function(e) {

		location.reload();

	});

});

function init() {

	console.clear();

	//addTreasure('glowing_sludge'); // use this to manually add treasures
	//addCandy('peppermint_candy_stick'); // use this to manually add candies

	if(game.debug) $('body').addClass('debug');
	if(game.tutorial) {
		$('body').addClass('tutorial');
		$('.game-panel').removeClass('shown');
	}

	util.setInitialTooltips();

	setDifficulty();

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

	//courageScreen(); // use this to manually show courage screen

}

function init_singularity() {
	game.map = 3;
	game.floor = 0;
	if(game.debug) $('body').addClass('debug');
	//player.aggro.current = 0;
	//player.aggro.level = 0;
	if(game.difficulty == 'easy' || game.difficulty == 'medium') { 
		heal(player, 999);
	}
	game.mapType = 'singularity';
	$('.gate-screen').removeClass('shown');
	if(game.scenario!='normal') {
		buildScenario(game.scenarioWhich);
	}
	updateAggro();
	setStatus();
	startCombat();
}

function init_map_2() {

	game.map = 2;
	game.floor = 0;
	player.aggro.current = 0;
	player.aggro.level = 0;
	if(game.debug) $('body').addClass('debug');

	if(game.difficulty == 'easy' || game.difficulty == 'medium') { 
		heal(player, 999);
	}

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

	game.arenasComplete = 0;
	$('.tile.ice-gate').removeClass('clickable').data('powertip', 'Ice Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Ice Gate: <span class="highlight">LOCKED</span>');
	$('.tile.fire-gate').removeClass('clickable').data('powertip', 'Fire Gate: <span class="highlight">LOCKED</span>').attr('data-powertip', 'Fire Gate: <span class="highlight">LOCKED</span>');

	if(game.debug) $('.map-inner div').addClass('clickable');

	util.clearTooltips();

	updateAggro();

	if(game.scenario!='normal') {
		buildScenario(game.scenarioWhich);
	}
	setStatus();

}

function setDifficulty() {
	if(game.difficulty=='easy') {
		game.questChance = 2.2;
		game.fountainChance = 2;
		game.arenasRequired = 1;
		if(!game.debug) {
			player.health.base = 100;
			player.health.current =100;
			player.health.max = 100;
		}
	} else if(game.difficulty=='medium') {
		game.questChance = 1.8;
		game.fountainChance = 1.6;
		game.arenasRequired = 2;
		if(!game.debug) {
			player.health.base = 75;
			player.health.current = 75;
			player.health.max = 75;
		}
	} else if(game.difficulty=='hard') {
		game.questChance = 1.8;
		game.fountainChance = 1.6;
		game.arenasRequired = 3;
		if(!game.debug) {
			player.health.base = 65;
			player.health.current = 65;
			player.health.max = 65;
		}
	} else if(game.difficulty=='expert') {
		game.questChance = 1.6;
		game.fountainChance = 1.4;
		game.arenasRequired = 3;
		if(!game.debug) {
			player.health.base = 65;
			player.health.current = 55;
			player.health.max = 65;
		}
	} else if(game.difficulty=='nightmare') {
		game.questChance = 1.4;
		game.fountainChance = 1.2;
		game.arenasRequired = 3;
		if(!game.debug) {
			player.health.base = 60;
			player.health.current = 50;
			player.health.max = 60;
		}
	}
}

function buildScenario(which = 'frozen_forest_combine') {

	switch(which) {
		case 'normal':

			deck.buildDeck();

		break;
		case 'frozen_forest_combine':

			// treasures
			addTreasure('gift_of_power');
			//addTreasure('pewter_mug');
			addTreasure('pridwen');
			addTreasure('amulet');
			addTreasure('frozen_knife');
			//addTreasure('sparkling_fragment');
			addTreasure('signet_ring');
			addTreasure('talisman');
			addTreasure('excalibur');
			addTreasure('sifter');
			addTreasure('hummingbird_feather');
			addTreasure('lemon');
			addTreasure('winged_shroud');

			// candy
			addCandy('orange_gobstopper');
			addCandy('cherry_cordial');

			// cards
			addCardToDeck('rainbow_orb');
			addCardToDeck('leather_armor');
			addCardToDeck('stun');
			addCardToDeck('razzle');
			addCardToDeck('self_enhance');
			addCardToDeck('unstable_attack');
			addCardToDeck('stomp');
			addCardToDeck('chaos_charge');
			addCardToDeck('tail_whip');
			addCardToDeck('repel');
			addCardToDeck('hammer_thrust');
			addCardToDeck('remember');
			addCardToDeck('cutting_ring');
			addCardToDeck('thwart');
			addCardToDeck('strange_mushroom');
			addCardToDeck('safeguard');
			//addCardToDeck('sparkle_stance');
			//addCardToDeck('shimmer_stance');
			addCardToDeck('delayed_charge');
			addCardToDeck('fleeting_shield');
			addCardToDeck('prescience');
			addCardToDeck('glowing_orb');
			addCardToDeck('mysterious_fissure');
			//addCardToDeck('aura_stance');
			addCardToDeck('fire_spell');
			addCardToDeck('dazzle');
			addCardToDeck('mezmerize');
			addCardToDeck('adrenaline_rush');

			// shards
			deck.attachShard(util.getCardById('stun', deck.cards), 'flame');
			deck.attachShard(util.getCardById('razzle', deck.cards), 'flame');
			deck.attachShard(util.getCardById('stomp', deck.cards), 'frost');
			deck.attachShard(util.getCardById('repel', deck.cards), 'frost');
			deck.attachShard(util.getCardById('repel', deck.cards), 'frost');
			deck.attachShard(util.getCardById('hammer_thrust', deck.cards), 'frost');
			deck.attachShard(util.getCardById('remember', deck.cards), 'frost');
			deck.attachShard(util.getCardById('cutting_ring', deck.cards), 'frost');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'flame');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'frost');
			deck.attachShard(util.getCardById('safeguard', deck.cards), 'flame');
			deck.attachShard(util.getCardById('delayed_charge', deck.cards), 'flame');
			deck.attachShard(util.getCardById('fleeting_shield', deck.cards), 'frost');
			deck.attachShard(util.getCardById('prescience', deck.cards), 'flame');
			deck.attachShard(util.getCardById('glowing_orb', deck.cards), 'frost');
			deck.attachShard(util.getCardById('mysterious_fissure', deck.cards), 'flame');
			deck.attachShard(util.getCardById('fire_spell', deck.cards), 'flame');
			deck.attachShard(util.getCardById('dazzle', deck.cards), 'flame');
			deck.attachShard(util.getCardById('mezmerize', deck.cards), 'flame');
			deck.attachShard(util.getCardById('mezmerize', deck.cards), 'flame');

			// essence
			updateEssenceLevels('shimmer', 14);
			updateEssenceLevels('sparkle', 15);
			updateEssenceLevels('aura', 10);

			// misc
			gainCourage(9);
			game.candyChance = 10;
			game.shardChance = 45;
			game.critChance = 16;
			game.highestDmgRoll = 43;
			game.boosterPack = 'combine';
			game.uncommonChance = 30;
			game.rareChance = 5;
			game.legendaryChance = 0;
			player.aggro.current = 16;
			player.aggro.level = 2;
			player.stance = 'sparkle';
			
		break;

		case 'singularity_rainbow':

			// treasures
			addTreasure('gift_of_longevity');
			addTreasure('frozen_knife');
			addTreasure('awl_of_the_master');
			addTreasure('torch');
			addTreasure('magic_dust');
			addTreasure('labrys_of_zeus');
			addTreasure('hawthorn_staff');
			addTreasure('alatyr');
			addTreasure('shimmering_fragment');
			addTreasure('swift_feather');
			addTreasure('talisman');
			addTreasure('winged_mantle');
			addTreasure('gleaming_emerald');
			addTreasure('pridwen');
			addTreasure('vibrating_shiv');
			addTreasure('hummingbird_feather');
			addTreasure('falcon_feather');
			addTreasure('luminous_crown');

			// candy
			addCandy('white_truffle');
			addCandy('vanilla_pudding');

			// cards
			addCardToDeck('rainbow_orb');
			addCardToDeck('shield');
			addCardToDeck('leather_armor');
			addCardToDeck('stun');
			addCardToDeck('sparks');
			addCardToDeck('remember');
			addCardToDeck('rainbow_charge');
			addCardToDeck('robustness');
			addCardToDeck('ambush');
			addCardToDeck('deter');
			addCardToDeck('rainbow_charm');
			//addCardToDeck('aura_stance');
			addCardToDeck('safeguard');
			addCardToDeck('patience');
			addCardToDeck('hardened_feathers');
			addCardToDeck('amass');
			addCardToDeck('sudden_barrage');
			addCardToDeck('strange_tail');
			addCardToDeck('devastator');
			addCardToDeck('plate_armor');
			//addCardToDeck('shimmer_stance');
			addCardToDeck('acuity');
			addCardToDeck('luminous_rainbow_spell');
			addCardToDeck('midas_touch');
			addCardToDeck('stamina');
			addCardToDeck('forbid');
			addCardToDeck('adrenaline_rush');
			addCardToDeck('deter');
			addCardToDeck('grow');
			addCardToDeck('secret_arts');
			addCardToDeck('overpowered');
			addCardToDeck('mystical_energy');
			addCardToDeck('attuned_barrier');
			addCardToDeck('weaponsmith');
			addCardToDeck('blazing_torch');
			addCardToDeck('prisma');
			addCardToDeck('bulwark');
			addCardToDeck('crippling_stare');

			// shards
			deck.attachShard(util.getCardById('shield', deck.cards), 'frost');
			deck.attachShard(util.getCardById('stun', deck.cards), 'flame');
			deck.attachShard(util.getCardById('sparks', deck.cards), 'frost');
			deck.attachShard(util.getCardById('remember', deck.cards), 'frost');
			deck.attachShard(util.getCardById('remember', deck.cards), 'frost');
			deck.attachShard(util.getCardById('rainbow_charge', deck.cards), 'flame');
			deck.attachShard(util.getCardById('robustness', deck.cards), 'flame');
			deck.attachShard(util.getCardById('deter', deck.cards), 'frost');
			deck.attachShard(util.getCardById('deter', deck.cards), 'frost');
			deck.attachShard(util.getCardById('safeguard', deck.cards), 'flame');
			deck.attachShard(util.getCardById('patience', deck.cards), 'frost');
			deck.attachShard(util.getCardById('amass', deck.cards), 'frost');
			deck.attachShard(util.getCardById('amass', deck.cards), 'flame');
			deck.attachShard(util.getCardById('sudden_barrage', deck.cards), 'flame');
			deck.attachShard(util.getCardById('acuity', deck.cards), 'frost');
			deck.attachShard(util.getCardById('acuity', deck.cards), 'frost');
			deck.attachShard(util.getCardById('midas_touch', deck.cards), 'frost');
			deck.attachShard(util.getCardById('stamina', deck.cards), 'frost');
			deck.attachShard(util.getCardById('forbid', deck.cards), 'flame');
			deck.attachShard(util.getCardById('forbid', deck.cards), 'flame');
			deck.attachShard(util.getCardById('adrenaline_rush', deck.cards), 'flame');
			deck.attachShard(util.getCardById('mystical_energy', deck.cards), 'flame');
			deck.attachShard(util.getCardById('mystical_energy', deck.cards), 'flame');
			deck.attachShard(util.getCardById('attuned_barrier', deck.cards), 'flame');
			deck.attachShard(util.getCardById('attuned_barrier', deck.cards), 'flame');
			deck.attachShard(util.getCardById('bulwark', deck.cards), 'frost');

			// essence
			updateEssenceLevels('shimmer', 14);
			updateEssenceLevels('sparkle', 8);
			updateEssenceLevels('aura', 22);

			// misc
			//gainCourage(0);
			game.candyChance = 40;
			game.shardChance = 10;
			game.critChance = 21;
			game.highestDmgRoll = 142;
			game.boosterPack = 'rainbow';
			game.uncommonChance = 50;
			game.rareChance = 12;
			game.legendaryChance = 0;
			game.overworld = 'frost';
			player.stance = 'aura';
			player.health.max = 130;
			player.health.current = 120;
			player.health.base = 75;
			player.rainbow.max = 35;
			player.rainbow.base = 8;
			player.rainbow.current = 8;
			player.armor = 120;
			player.aggro.current = 17;
			player.aggro.level = 3;
		
		break;

		case 'super_flame_combine':
			// treasures
			addTreasure('gift_of_strength');
			addTreasure('hammerblade');
			addTreasure('hickory_staff');
			addTreasure('library_card');
			addTreasure('falcon_feather');
			addTreasure('hawthorn_staff');
			addTreasure('pewter_mug');
			addTreasure('hemlock_staff');
			addTreasure('locket');
			addTreasure('shimmering_fragment');
			addTreasure('signet_ring');
			addTreasure('pridwen');
			addTreasure('winged_cloak');
			addTreasure('hummingbird_feather');
			addTreasure('death_vial');
			addTreasure('black_cauldron');

			// candy
			addCandy('orange_gobstopper');
			addCandy('pixie_sugar');
			addCandy('white_chocolate_chips');

			// cards
			addCardToDeck('stun');
			addCardToDeck('self_enhance');
			addCardToDeck('burning_strike');
			addCardToDeck('hardened_feathers');
			addCardToDeck('clever_trick');
			addCardToDeck('plate_armor');
			addCardToDeck('dark_codex');
			addCardToDeck('divert');
			addCardToDeck('fissile');
			addCardToDeck('wing_sweep');
			addCardToDeck('provisioned_attack');
			addCardToDeck('guzzle');
			addCardToDeck('fissile');
			addCardToDeck('divert');
			addCardToDeck('ambush');
			addCardToDeck('fortress');
			addCardToDeck('fleeting_shelter');
			addCardToDeck('ultra_kill');
			addCardToDeck('masterwork');
			addCardToDeck('elude');
			addCardToDeck('thwart');
			addCardToDeck('divert');
			addCardToDeck('midas_touch');
			addCardToDeck('elude');
			addCardToDeck('overpowered');
			addCardToDeck('supernatural');
			addCardToDeck('colossus');
			addCardToDeck('sidestep');
			addCardToDeck('elude');
			addCardToDeck('sidestep');
			addCardToDeck('sidestep');
			addCardToDeck('trade_up');
			addCardToDeck('mystical_energy');
			addCardToDeck('firmament_mover');

			// shards
			deck.attachShard(util.getCardById('stun', deck.cards), 'frost');
			deck.attachShard(util.getCardById('clever_trick', deck.cards), 'flame');
			deck.attachShard(util.getCardById('dark_codex', deck.cards), 'frost');
			deck.attachShard(util.getCardById('wing_sweep', deck.cards), 'frost');
			deck.attachShard(util.getCardById('wing_sweep', deck.cards), 'flame');
			deck.attachShard(util.getCardById('provisioned_attack', deck.cards), 'frost');
			deck.attachShard(util.getCardById('provisioned_attack', deck.cards), 'frost');
			deck.attachShard(util.getCardById('fortress', deck.cards), 'flame');
			deck.attachShard(util.getCardById('ultra_kill', deck.cards), 'frost');
			deck.attachShard(util.getCardById('ultra_kill', deck.cards), 'frost');
			deck.attachShard(util.getCardById('masterwork', deck.cards), 'flame');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'frost');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'flame');
			deck.attachShard(util.getCardById('midas_touch', deck.cards), 'flame');
			deck.attachShard(util.getCardById('overpowered', deck.cards), 'frost');
			deck.attachShard(util.getCardById('overpowered', deck.cards), 'flame');
			deck.attachShard(util.getCardById('colossus', deck.cards), 'flame');
			deck.attachShard(util.getCardById('trade_up', deck.cards), 'frost');
			deck.attachShard(util.getCardById('trade_up', deck.cards), 'flame');

			// essence
			updateEssenceLevels('shimmer', 10);
			updateEssenceLevels('sparkle', 7);
			updateEssenceLevels('aura', 24);

			// misc
			gainCourage(4);
			game.candyChance = 50;
			game.shardChance = 20;
			game.critChance = 4;
			game.highestDmgRoll = 168;
			game.boosterPack = 'combine';
			game.uncommonChance = 36;
			game.rareChance = 14;
			game.legendaryChance = 0;
			game.overworld = 'flame';
			player.stance = 'aura';
			player.health.max = 151;
			player.health.current = 151;
			player.health.base = 75;
			player.rainbow.max = 20;
			player.rainbow.base = 0;
			player.rainbow.current = 0;
			player.armor = 150;
			player.aggro.current = 11;
			player.aggro.level = 2;

		break;

		case 'frost_combine':
			// treasures
			addTreasure('gift_of_protection');
			addTreasure('snakestone');
			addTreasure('dew_of_yarva');
			addTreasure('hummingbird_feather');
			addTreasure('red_envelope');
			addTreasure('charged_wand');
			addTreasure('signet_ring');
			addTreasure('hickory_staff');

			// candy
			addCandy('vanilla_pudding');

			// cards
			addCardToDeck('rainbow_orb');
			addCardToDeck('shield');
			addCardToDeck('leather_armor');
			addCardToDeck('stun');
			addCardToDeck('self_enhance');
			addCardToDeck('thwack');
			addCardToDeck('concuss');
			addCardToDeck('thwack');
			addCardToDeck('provisioned_attack');
			addCardToDeck('flash_of_magic');
			addCardToDeck('shimmer_stance');
			addCardToDeck('bravery');
			addCardToDeck('neigh');
			addCardToDeck('flash_of_magic');
			addCardToDeck('paralyzing_touch');
			addCardToDeck('rainbow_charm');
			addCardToDeck('delightful');
			addCardToDeck('thwart');
			addCardToDeck('dark_codex');
			addCardToDeck('aura_stance');
			addCardToDeck('sparkle_stance');
			addCardToDeck('blockade');

			// shards
			deck.attachShard(util.getCardById('shield', deck.cards), 'frost');
			deck.attachShard(util.getCardById('stun', deck.cards), 'flame');
			deck.attachShard(util.getCardById('concuss', deck.cards), 'flame');
			deck.attachShard(util.getCardById('provisioned_attack', deck.cards), 'frost');
			deck.attachShard(util.getCardById('provisioned_attack', deck.cards), 'frost');
			deck.attachShard(util.getCardById('bravery', deck.cards), 'flame');
			deck.attachShard(util.getCardById('neigh', deck.cards), 'frost');
			deck.attachShard(util.getCardById('paralyzing_touch', deck.cards), 'flame');
			deck.attachShard(util.getCardById('paralyzing_touch', deck.cards), 'flame');
			deck.attachShard(util.getCardById('delightful', deck.cards), 'frost');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'frost');
			deck.attachShard(util.getCardById('thwart', deck.cards), 'frost');

			// essence
			updateEssenceLevels('shimmer', 24);
			updateEssenceLevels('sparkle', 17);
			updateEssenceLevels('aura', 17);

			// misc
			gainCourage(19);
			game.candyChance = 40;
			game.shardChance = 20;
			game.critChance = 4;
			game.highestDmgRoll = 66;
			game.boosterPack = 'combine';
			game.uncommonChance = 50;
			game.rareChance = 0;
			game.legendaryChance = 0;
			game.overworld = 'forest';
			player.stance = 'shimmer';
			player.health.max = 141;
			player.health.current = 119;
			player.health.base = 75;
			player.rainbow.max = 20;
			player.rainbow.base = 0;
			player.rainbow.current = 0;
			player.armor = 39;
			player.aggro.current = 18;
			player.aggro.level = 2;

		break;

		case 'frost_cycle':
			// treasures
			addTreasure('gift_of_conjuring');
			addTreasure('pridwen');
			addTreasure('glowing_sludge');
			addTreasure('ancient_runestone');
			addTreasure('hickory_staff');
			addTreasure('hemlock_staff');

			// candy
			addCandy('peanut_butter_cup');
			addCandy('nut_clusters');

			// cards
			addCardToDeck('shield');
			addCardToDeck('shield');
			addCardToDeck('leather_armor');
			addCardToDeck('stun');
			addCardToDeck('bottled_speed');
			addCardToDeck('tail_whip');
			addCardToDeck('quick_stab');
			addCardToDeck('elemental_charm');
			addCardToDeck('cleanse');
			addCardToDeck('divert');
			addCardToDeck('amass');
			addCardToDeck('glowing_orb');
			addCardToDeck('make_ready');
			addCardToDeck('delayed_charge');
			addCardToDeck('shimmer_stance');
			addCardToDeck('strange_mushroom');
			addCardToDeck('seeing_ring');
			addCardToDeck('strangefire');
			addCardToDeck('devastator');
			addCardToDeck('paralyzing_touch');

			// shards
			deck.attachShard(util.getCardById('stun', deck.cards), 'frost');
			deck.attachShard(util.getCardById('cleanse', deck.cards), 'flame');
			deck.attachShard(util.getCardById('cleanse', deck.cards), 'frost');
			deck.attachShard(util.getCardById('amass', deck.cards), 'frost');
			deck.attachShard(util.getCardById('amass', deck.cards), 'flame');
			deck.attachShard(util.getCardById('make_ready', deck.cards), 'frost');

			// essence
			updateEssenceLevels('shimmer', 12);
			updateEssenceLevels('sparkle', 3);
			updateEssenceLevels('aura', 2);

			// misc
			gainCourage(35);
			game.candyChance = 60;
			game.shardChance = 40;
			game.critChance = 3;
			game.highestDmgRoll = 60;
			game.boosterPack = 'cycle';
			game.uncommonChance = 50;
			game.rareChance = 0;
			game.legendaryChance = 0;
			game.overworld = 'forest';
			player.stance = 'shimmer';
			player.health.max = 125;
			player.health.current = 123;
			player.health.base = 75;
			player.rainbow.max = 20;
			player.rainbow.base = 0;
			player.rainbow.current = 0;
			player.armor = 63;
			player.aggro.current = 18;
			player.aggro.level = 2;

		break;

		case 'super_frost_cycle':
			// treasures
			addTreasure('hemlock_staff');
			addTreasure('gift_of_protection');
			addTreasure('unending_hourglass');
			addTreasure('red_envelope');
			addTreasure('pewter_mug');
			addTreasure('mark_of_narfallow');
			addTreasure('bronze_helm');
			addTreasure('sifter');
			addTreasure('signet_ring');
			addTreasure('excalibur');
			addTreasure('falcon_feather');
			addTreasure('swift_feather');
			addTreasure('eternal_shield');
			addTreasure('organic_staff');
			addTreasure('hawthorn_staff');
			addTreasure('ornamental_staff');
			addTreasure('hickory_staff');

			// candy
			addCandy('gumball');
			addCandy('candy_lemon_slice');
			addCandy('blueberry_gobstopper');

			// cards
			addCardToDeck('stun');
			addCardToDeck('bottled_speed');
			addCardToDeck('plate_armor');
			addCardToDeck('tail_whip');
			addCardToDeck('tail_whip');
			addCardToDeck('strange_mushroom');
			addCardToDeck('auto_attack');
			addCardToDeck('recoil');
			addCardToDeck('clever_maneuver');
			addCardToDeck('blockade');
			addCardToDeck('target');
			addCardToDeck('repel');
			addCardToDeck('hardened_features');
			addCardToDeck('aura_stance');
			addCardToDeck('devastator');
			addCardToDeck('flywheel');
			addCardToDeck('remember');
			addCardToDeck('critical_hit');
			addCardToDeck('elite_maneuver');
			addCardToDeck('fractured_orb');
			addCardToDeck('robustness');
			addCardToDeck('cutting_ring');
			addCardToDeck('sparkle_stance');
			addCardToDeck('paralyzing_touch');
			addCardToDeck('whinny');
			addCardToDeck('sacrifice');
			addCardToDeck('entity');
			addCardToDeck('overpowered');
			addCardToDeck('reaper');

			// shards
			deck.attachShard(util.getCardById('stun', deck.cards), 'frost');
			deck.attachShard(util.getCardById('tail_whip', deck.cards), 'flame');
			deck.attachShard(util.getCardById('tail_whip', deck.cards), 'flame');
			deck.attachShard(util.getCardById('auto_attack', deck.cards), 'frost');
			deck.attachShard(util.getCardById('recoil', deck.cards), 'flame');
			deck.attachShard(util.getCardById('clever_maneuver', deck.cards), 'flame');
			deck.attachShard(util.getCardById('blockade', deck.cards), 'frost');
			deck.attachShard(util.getCardById('blockade', deck.cards), 'frost');
			deck.attachShard(util.getCardById('target', deck.cards), 'frost');
			deck.attachShard(util.getCardById('repel', deck.cards), 'flame');
			deck.attachShard(util.getCardById('repel', deck.cards), 'flame');
			deck.attachShard(util.getCardById('devastator', deck.cards), 'frost');
			deck.attachShard(util.getCardById('devastator', deck.cards), 'frost');
			deck.attachShard(util.getCardById('remember', deck.cards), 'flame');
			deck.attachShard(util.getCardById('remember', deck.cards), 'flame');
			deck.attachShard(util.getCardById('critical_hit', deck.cards), 'flame');
			deck.attachShard(util.getCardById('elite_maneuver', deck.cards), 'frost');
			deck.attachShard(util.getCardById('cutting_ring', deck.cards), 'flame');

			// essence
			updateEssenceLevels('shimmer', 7);
			updateEssenceLevels('sparkle', 12);
			updateEssenceLevels('aura', 17);

			// misc
			gainCourage(8);
			game.candyChance = 20;
			game.shardChance = 45;
			game.critChance = 6;
			game.highestDmgRoll = 93;
			game.boosterPack = 'cycle';
			game.uncommonChance = 20;
			game.rareChance = 18;
			game.legendaryChance = 0;
			game.overworld = 'frost';
			player.stance = 'aura';
			player.health.max = 135;
			player.health.current = 120;
			player.health.base = 75;
			player.rainbow.max = 20;
			player.rainbow.base = 0;
			player.rainbow.current = 0;
			player.armor = 97;
			player.aggro.current = 16;
			player.aggro.level = 3;

		break;
	} 

}

function setStatus(updateCards = true) {
	// debug only
	$('.status .map-type span').html(game.mapType);
	// $('.status .card-retain span').html(player.cardRetain); // moved to an official effect
	$('.status .momentumAmount span').html(player.momentumAmount);
	for(let i = 0; i < game.effects.length; i++) {
		$('.status .' + game.effects[i].id + ' span').html('[' + player[game.effects[i].id].temp.toString() + '] / ' + player[game.effects[i].id].current + ' / ' + player[game.effects[i].id].base + ' : ' + player[game.effects[i].id].turns + ' : ' + player[game.effects[i].id].persist + ' : ' + player[game.effects[i].id].hexed);
	}
	for(let i = 0; i < game.abilities.length; i++) {
		$('.status .' + game.abilities[i].id + ' span').html(player[game.abilities[i].id].enabled + ' : ' + player[game.abilities[i].id].turns + ' : ' + player[game.effects[i].id].persist);
	}

	// player status bar
	monsters.updateStatusBar(player);
	
	// new UI
	$('.draw-cards span').html(combatDeck.drawCards.length);
	$('.discard-cards span').html(combatDeck.discardCards.length);
	$('.dead-cards span').html(combatDeck.deadCards.length);
	$('.game-courage > span').html(player.courage);
	$('.booster-pack span').addClass(game.boosterPack + '-pack');
	$('.booster-pack').data('powertip', 'Selected Booster Pack: <span class="highlight">' + game.boosterPack.substr(0,1).toUpperCase()+game.boosterPack.substr(1) + '</span>. Click to view all booster pack cards.')
					.attr('data-powertip', 'Selected Booster Pack: <span class="highlight">' + game.boosterPack.substr(0,1).toUpperCase()+game.boosterPack.substr(1) + '</span>. Click to view all booster pack cards.');
	util.setTooltips('.booster-pack');
	$('.game-floor span').html(game.floor);
	$('.game-round span').html(game.round);
	$('.all-cards span.counter').html(player.cardsOwned);
	$('.library span.counter').html(allCards.getTotalCards());

	$('.incoming-damage span').html(game.incomingDamage);
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
	$('.uncommon-chance span').html(game.uncommonChance);
	$('.rare-chance span').html(game.rareChance);

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
	elem.find('.desc-dmg .dmg').each(function(e) {
		let dmg = $(this).data('amount');
		let originalDmg = dmg;
		if(player.might.current != 0) {
			dmg += player.might.current;
		}
		if(player.momentumAmount != 0) {
			dmg += player.momentumAmount;
		}
		// if we're outside of combat, current will be unset (0), so use base instead
		let punch = game.combatEndedFlag ? player.punch.base : player.punch.current;
		if(punch != 1) {
			dmg = Math.round(dmg * punch);
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
	elem.find('.health-amount').each(function(e) {
		let originalHealth = $(this).data('amount');
		let adjustedHealth = originalHealth + player.mend.current;
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				adjustedHealth += Math.round(card.age * player.wisdom.current);
			} else {
				adjustedHealth += card.age;
			}
		}
		$(this).html(adjustedHealth);
		$(this).attr('data-amount', adjustedHealth);
		let css = '';
		if(adjustedHealth > originalHealth) {
			css = 'better';
		} else if(adjustedHealth < originalHealth) {
			css = 'worse';
		}
		$(this).addClass(css);
	});
	/*elem.find('.courage-amount, .shimmer-amount, .sparkle-amount, .aura-amount').each(function(e) {
		let originalValue = $(this).data('amount');
		let adjustedValue = originalValue;
		if(card.age > 0) {
			if(player.wisdom.current != 1) {
				adjustedValue += Math.round(card.age * player.wisdom.current);
			} else {
				adjustedValue += card.age;
			}
		}
		$(this).html(adjustedValue);
		$(this).attr('data-amount', adjustedValue);
		let css = '';
		if(adjustedValue > originalValue) {
			css = 'better';
		} else if(adjustedValue < originalValue) {
			css = 'worse';
		}
		$(this).addClass(css);
	});*/
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
	$('.pack-cards-panel .message').html('These are all the possible card rewards for this booster pack, plus you start with <span></span>');
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
function viewBasicCards() {
	if(game.playsounds) sounds.play('viewCards');
	$('.pack-cards-panel').addClass('shown');
	$('.pack-cards-panel h2').html('All available cards');
	$('.pack-cards-panel .cards').empty();
	$('.pack-cards-panel .message').html('These are all the basic cards plus your selected booster pack cards.')
	let basicCards = AllCards().getAddableCards(false, false, false);
	for(let i = 0; i < basicCards.length; i++) {
		let desc = deck.buildDescription(basicCards[i]);
        basicCards[i].desc = desc;
		let slotDesc = deck.buildSlotsDescription(basicCards[i]);
        basicCards[i].slotDesc = slotDesc;
		util.appendCard(basicCards[i], '.pack-cards-panel .cards');
	}
}
function viewArmory() {
	if(game.playsounds) sounds.play('viewCards');
	$('.armory-panel').addClass('shown');
	if(!game.armoryBuilt) {
		game.armoryBuilt = true;
		let armory = AllCards().getWeapons();
		for(let i = 0; i < armory.length; i++) {
			let desc = deck.buildDescription(armory[i]);
			armory[i].desc = desc;
			let slotDesc = deck.buildSlotsDescription(armory[i]);
			armory[i].slotDesc = slotDesc;
			util.appendCard(armory[i], '.armory-panel .cards');
		}
	}
}
function chooseShardCard(shard, cards = deck.cards) {
	$('.shard-cards-panel').addClass('shown');
	$('.draw-card, .end-turn, .draw-all').addClass('disabled');
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
function chooseTradeCard() {
	$('.trade-cards-panel .message').html('Choose a card to trade away.');
	$('.trade-cards-panel').addClass('shown');
	$('.trade-cards-panel .cards').empty();
	if(game.playsounds) sounds.play('viewCards');
	let cards = deck.getTradeableCards();
	for(let i = 0; i < cards.length; i++) {
		util.appendCard(cards[i], '.trade-cards-panel .cards');
	}
}

async function startCombat(tile = false) {

	//console.clear();

	// there could be residual "to show" cards that need cleared - like if combat ends with collateral damage played
	game.toShow = [];

	game.combatEndedFlag = false;
	game.incomingDamage = 0;

	game.floor += 1;
	game.combat += 1;
	game.round = 0;

	stopMusic();

	let backgroundImage = './images/floor' + game.combat + '.png';

	$('body').removeClass('arena ice_gate fire_gate selecting destroying retaining');
	$('.start-arrow').hide();
	$('.combat-text, .combat-text h2.begin-combat').addClass('shown');

	// sometimes a rare bug causes .courage-amount not to clear
	$('.courage-amount').empty();

	if(tile) {
		if(tile.hasClass('arena')) {
			if(game.playsounds) sounds.play('aggroLevel');
			game.mapType = 'arena';
			backgroundImage = './images/arena' + (game.arenasComplete + 1) + '.png';
			$('body').addClass('arena');
			game.arenasComplete += 1;
			setTimeout(function() {
				if(!musicArena.playing() && game.playmusic) musicArena.play();
			}, 200);
		} else if(tile.hasClass('ice-gate')) {
			if(game.playsounds) sounds.play('aggroLevel');
			game.mapType = 'ice_gate';
			backgroundImage = './images/ice_gate.png';
			$('body').addClass('ige-gate');
			setTimeout(function() {
				if(!musicIceGate.playing() && game.playmusic) musicIceGate.play();
			}, 200);
		} else if(tile.hasClass('fire-gate')) {
			if(game.playsounds) sounds.play('aggroLevel');
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
	} else if(game.mapType == 'singularity') {
		$('body').addClass('singularity');
		game.mapType = 'singularity';
		backgroundImage = './images/singularity.png';
		setTimeout(function() {
			if(!musicSingularity.playing() && game.playmusic) musicSingularity.play();
		}, 200);
	}

	$('.monster-panel-wrapper').css('background-image', 'url(' + backgroundImage + ')');
	$('.message, .button-done').removeClass('shown');
	$('.combat').addClass('shown');
	$('.candy').removeClass('trashable').addClass('clickable');
	$('body').addClass('combating');
	$('.player-cards').removeClass('unavailable').empty();
	$('body').removeClass('discarding');
	$('.discard-done').removeClass('shown');
	$('.card').removeClass('discard discardable');
	$('.discard-message').removeClass('shown');
	
	if(tile) {
		if(!tile.hasClass('visited')) {
			await updateEssenceLevels(tile.attr('data-essence'), tile.attr('data-amount'));
		}
	}

	for(let i = 0; i < player.treasures.length; i++) {
		if(player.treasures[i].trigger.counter < 0 && player.treasures[i].permanent == false) {
			activateTreasure(player.treasures[i]);
		}
	}

	monsters.setEffects(player);
	monsters.setAbilities(player);

	combatDeck.sync(deck.cards, combatDeck);

	setStatus();

	monsters.updateMonsterGroup();
	monsters.loadMonsters();

	// setup rainbow
	if(player.rainbow.current >= player.rainbow.max && player.rainbow.max > 0) {
		await util.wait(1500);
		await activateRainbow(player.rainbow.type, player);
		updateRainbowDom(player);
	}
	let magicPower = util.getStatPercentage(player.rainbow.current, player.rainbow.max);
	$('.magic-rainbow .rainbow-power').css('width', magicPower + '%');
	$('.magic-rainbow .rainbow-power-current').html(player.rainbow.current);
	$('.magic-rainbow .rainbow-power-max').html(player.rainbow.max);
	$('.magic-rainbow').attr('data-type', player.rainbow.type);
	$('.magic-rainbow').removeClass('dark elemental rainbow chaos muddled').addClass(player.rainbow.type);
	$('.magic-rainbow .magic-type span').html(player.rainbow.type);
	$('.magic-rainbow .magic-type span').attr('data-type', player.rainbow.type);
	$('.magic-rainbow .semi-circle--mask').css('transform', 'rotate(' + (magicPower * 1.8) + 'deg) translate3d(0, 0, 0)').removeClass('activated'); 

	await util.wait(1200);
	$('.combat-text .draw-cards-arrow').addClass('shown');
	await util.wait(400);
	$('.combat-text h2.begin-combat').removeClass('shown');

	await beginTurn();

	// manually process actions at start of combat - DEBUGGING ONLY
	//processActions([{action: 'addCard', value: 1, what: 'energize', to: 'handCards', with: ['flame']}]);
	
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
			entity.health.current -= 12;
		} else if(action == 'addCommonTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 1);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
		} else if(action == 'addUncommonTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 2);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
			entity.health.current -= 20;
		} else if(action == 'addRareTreasure') {
			let possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == 3);
			let treasure = util.weightedRandom(possibleTreasures);
			addTreasure(treasure.id); 
			entity.health.current -= 10;
			entity.health.max -= 10;
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

	if(game.difficulty=='hard' || game.difficulty=='expert' || game.difficulty=='nightmare') {
		game.floor += 1;
		updateAggro(1);
	}

	game.mapType = 'fountain';
	if(visited) {
		$('.fountain-visited').addClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').removeClass('shown');
	} else {
		$('.fountain-visited').removeClass('shown');
		$('.magic-fountain').addClass('shown');
		$('.magic-fountain .fountain-options').addClass('shown');
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

	if(game.difficulty=='hard' || game.difficulty=='expert' || game.difficulty=='nightmare') {
		game.floor += 1;
		updateAggro(1);
	}

	let possibleQuests = quests.quests.filter(i => i.seen == false);
	let quest = util.weightedRandom(possibleQuests);

	if(visited) {
		$('.quest-options').empty();
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
		player.might.base += 3;
		player.might.current += 3;
	} else if(player.stance == 'sparkle') { // this mean's the player's previous stance was sparkle because it hasn't changed yet
		player.might.base -= 3;
		player.might.current -= 3;
	}
	// check for shapeshifter
	if(player.shapeshifter.current > 0) {
		applyBlock(player.shapeshifter.current, player);
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

async function beginTurn() {

	util.clearTooltips();

	$('.combat-text, .combat-text h2.player-turn').addClass('shown');

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
		//heal(player, 1);
		applyArmor(1, player);
		applyBlock(10, player);
	}

	// check for spance * speed bonuses. stances only apply to speed, which can only be taken into account after turn 1
	if(game.round > 1) {

		// check for prepared
		if(player.prepared.enabled && game.cardsDrawn <= 4) {
			extraSpeed = 6 - game.cardsDrawn;
		}

		if(player.speed.current > 0) {
			if(player.stance == 'none') {
				applyBlock((player.speed.current * 4), player);
			} else if(player.stance == 'aura') {
				player.mana.current += Math.round(player.speed.current * player.aura.level);
			} else if(player.stance == 'sparkle') {
				let tempMight = Math.round(player.speed.current * player.sparkle.level * 3);
				if(tempMight > 0) {
					//player.might.current += tempMight; // this was updated to use applyEffect instead
					//player.might.temp.push(tempMight);
					let effect = {effect: 'might', amount: tempMight, turns: 1};
					applyEffect(effect, player, 1);
				}
			} else if(player.stance == 'shimmer') {
				//player.speed.current = player.speed.base + Math.round(player.speed.current * player.shimmer.level) + extraSpeed; // old way of doing this was speed
				//player.health.max += Math.floor((player.speed.current / 4) * player.shimmer.level); // we determined this could be infinitely farmable
				//heal(player, Math.floor((player.speed.current * player.shimmer.level) / 2)); // too much healing overall
				applyArmor(Math.floor(player.speed.current * player.shimmer.level), player);
				applyBlock(Math.floor(player.speed.current * player.shimmer.level * 4), player);
			}
		}
			
	}

	// check for lemonade
	if(player.lemonade.current > 0) {
		//let clutterCards = combatDeck.allLiveCards(combatDeck).filter(i => i.type == 'clutter');
		let clutterCards = combatDeck.drawCards.filter(i => i.type == 'clutter');
		heal(player, clutterCards.length * player.lemonade.current);
		if(player.health.current > player.health.max) player.health.current = player.health.max;
		//applyArmor(clutterCards.length * player.lemonade.current, player) // gaining armor seemed a bit too OP
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

	// check for irradiate
	if(player.irradiate.current > 0) {
		for(let i = 0; i < game.currentMonsters.length; i++) {
			await doDamage(player.irradiate.current, player, [game.currentMonsters[i]]);
			monsters.updateMonsterStats(game.currentMonsters[i]);
		}
	}

	// check for fatigued
	if(player.fatigued.current > 0) {
		let effect = {effect: 'might', amount: -player.fatigued.current, turns: -1, hex: true};
		applyEffect(effect, player);
	}

	// check for vulnerable
	if(player.vulnerable.current > 0) {
		let effect = {effect: 'solid', amount: -player.vulnerable.current, turns: -1, hex: true};
		applyEffect(effect, player);
	}

	// check for stifled
	if(player.stifled.current > 0) {
		let effect = {effect: 'conjure', amount: -player.stifled.current, turns: -1, hex: true};
		applyEffect(effect, player);
	}

	// reset speed
	player.speed.current = player.speed.base + extraSpeed;

	// reset cardsDrawn after prepared is checked
	game.cardsDrawn = 0;

	applyArmor(player.muster.current, player);

	combatDeck.updateCardPlayability(player, combatDeck); // necessary for cards that were retained

	$('.card.retained:not(.unplayable').addClass('playable');
	$('.card').removeClass('retain');
	$('.draw-card, .draw-all').removeClass('disabled');
	$('.crit').removeClass('shown');

	updateTreasureTriggers('turns');

	monsterIntent();

	updateCritChance();

	clearTurnEffects(player, false, true);
	clearTurnAbilities(player, false, true);

	monsters.updateStatusBar();

	setStatus();

	await util.wait(1000);
	$('.combat-text, .combat-text h2, .combat-text .draw-cards-arrow').removeClass('shown');
	
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
						let at = trigger.at == -1 ? player.speed.base : trigger.at; // value of -1 says to use max speed - very hacky!
						if(trigger.counter == at) {
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

async function drawAll() {
	for(let i = player.speed.current; i > 0; i--) {
		game.cardsDrawn += 1;
		addCardTo('draw');
		await util.wait(game.animationGap);
	}
}

async function addCardTo(type, domCard = null, to = 'handCards', ignoreSpeed = false, cardPlayed = false) {

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
		card = combatDeck.drawCard(player, combatDeck, ignoreSpeed, cardPlayed);
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

	game.incomingDamage = 0;
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

		if(currentMonsters[i].frozen.enabled) continue; // skip frozen monsters

		let intent = '';
		let intentTooltip = '';
		let thisMonster = currentMonsters[i];

		if(action == 'perform') {

			// check for resurrect
			if(thisMonster.resurrect.enabled) {
				//let actions = [{action: 'summonMonster', what: 'random', value: game.toResurrect, form: 'ghost', tier: [3, 4]}];
				let actions = [{action: 'summonMonster', what: 'random', value: game.toResurrect, tier: [3, 4, 5]}];
				let update = processActions(actions, thisMonster);
			}

			game.toResurrect = 0;

			// visually indicate which monster is taking their turn
			$('.monster[data-guid=' + thisMonster.guid + ']').addClass('taking-turn');

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

				// for flame context increase damage based on aggro level
				if(thisMonster.context == 'flame') {
					attackAmount += ((player.aggro.level / 4) + .5) * attackAmount;
				}

				// apply aggro if this is a gate or arena
				if(game.mapType == 'ice_gate' || game.mapType == 'fire_gate' || game.mapType == 'arena') {
					attackAmount = ((player.aggro.level / 2) + 1) * attackAmount;
				}

				if(action == 'query') {
					let a = Math.round((attackAmount + thisMonster.might.current) * thisMonster.punch.current);
					if(a < 0) a = 0;
					game.incomingDamage += a;
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
				let a = defend[key];

				// for frost context increase block based on aggro level
				if(thisMonster.context == 'frost') {
					a += Math.round(((player.aggro.level / 4) + .5) * a);
				}

				if(action == 'query') {
					a += thisMonster.solid.current;
					intent += '<span class="tooltip" data-powertip="Gain ' + a + ' block"><span class="intent-blk intent-amount">' + a + '</span><span class="intent-blk-icon intent-icon"></span></span>';
				} else {
					applyBlock(a, thisMonster);
					await util.wait(300);
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
					await util.wait(300);
				}
			}
		}

		if(effects != undefined) {
			for(let e = 0; e < effects.length; e++) {
				let to = thisMonster
				let prefix = 'Gain ';
				let turns = effects[e].turns > 0 ? ' (' + effects[e].turns + ' turns)' : '';
				let effect = effects[e].effect;
				let gameEffect = game.effects.find(({ id }) => id === effect);
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
					intentTooltip = prefix + amount + ' ' + gameEffect.name + turns;
					if(effects[e].hex) {
						intent += '<span class="intent-hex effect-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					} else {
						intent += '<span class="intent-buff effect-buff intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					}
				} else {
					let turns = effects[e].turns == undefined ? -1 : effects[e].turns;
					applyEffect(effects[e], to, turns);
					await util.wait(300);
				}
			}
		}

		if(abilities != undefined) {
			for(let e = 0; e < abilities.length; e++) {
				let to = thisMonster
				let prefix = 'Gain ';
				let turns = abilities[e].turns == undefined ? -1 : abilities[e].turns;
				let turnsDom = abilities[e].turns > 0 ? ' (' + abilities[e].turns + ' turns)' : '';
				let ability = abilities[e].ability;
				let gameAbility = game.abilities.find(({ id }) => id === ability);
				if(abilities[e].hex) {
					to = player;
					prefix = 'Hex ';
				}
				if(action == 'query') {
					intentTooltip = prefix + gameAbility.name + turnsDom;
					if(abilities[e].hex) {
						intent += '<span class="intent-hex ability-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					} else {
						intent += '<span class="intent-buff ability-buff intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
					}
				} else {
					applyAbility(abilities[e], to, turns);
					await util.wait(300);
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
						let type = actions[e].type;
						let to = actions[e].to;
						let desc = actions[e].desc;
						let symbol = '+';
						if(id == 'summonMonster') {
							if(what.constructor === Array) {
								let theseMonsters = ' Random (';
								for(let j = 0; j < what.length; j++) {
									let thisMonster = monsters.monsters.filter(k => k.id == what[j]);
									theseMonsters += thisMonster[0].name + ', ';
								}
								what = theseMonsters.slice(0, -2) + ')';
							} else {
								what = monsters.monsters.filter(k => k.id == what);
								what = ' ' + what[0].name;
							}
							symbol = '&times;';
							type = type != undefined ? ' (' + type + ')' : '';
						} else if(id == 'kill') {
							name = 'Die';
							what = '';
							type = '';
							value = '';
							to = '';
						} else {
							what = what != undefined ? ' (' + what + ')' : '';
							type = type != undefined ? ' (' + type + ')' : '';
						}
						value = value != undefined ? ' ' + symbol + value : '';
						if(to == 'drawCards') to = 'Draw Cards';
						if(to == 'handCards') to = 'Hand';
						if(to == 'discardCards') to = 'Discard Cards';
						if(id == 'removeHexes' || id == 'summonMonster' || id == 'kill') {
							to = '';
						} else if(id == 'removeBuffs') {
							to = value != undefined ? ' from ' + to : '';
						} else {
							to = value != undefined ? ' to ' + to : '';
						}
						if(desc != undefined) {
							// custom description
							intentTooltip = desc;
						} else {
							// build out description procedurally
							intentTooltip = prefix + name + what + type + value + to;
						}
						if(id == 'removeHexes') {
							intent += '<span class="intent-buff action-buff intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
						} else if(id == 'summonMonster') {
							intent += '<span class="intent-summon action-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
						} else {
							intent += '<span class="intent-hex action-hex intent-icon tooltip" data-powertip="' + intentTooltip + '"></span>';
						}
					}
				} else {
					let update = processActions(actions, currentMonsters[i]);
					await util.wait(300);
				}
            }
        }
		
		if(action == 'query') {
			thisMonster.chosenMoveSetIndex = moveSetIndex;
			$('.monster[data-guid=' + thisMonster.guid + '] .monster-intent').html(intent);
			util.setTooltips('.monster-intent');
		} else {
			monsters.updateMonsterStats(thisMonster);
			$('.monster[data-guid=' + thisMonster.guid + ']').removeClass('taking-turn');
		}

		await util.wait(100); // add this if we want a bit more time between monsters
		
	}

	setStatus();

}

async function endTurn(checkRetain = true) {

	$('.end-turn').addClass('disabled');
	
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
	if(player.retain.current > 0 && checkRetain && combatDeck.handCards.length > 0) {
		$('.player-panel .standard-message').html('choose cards to retain').addClass('shown');
		$('.retain-done').addClass('shown');
		$('.player-cards .card').addClass('retainable');
		$('.draw-card, .draw-all').addClass('disabled');
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

	await util.wait(1000);
	$('.end-turn').removeClass('disabled');

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

	$('.combat-text, .combat-text h2.enemy-turn').addClass('shown');
	await util.wait(1000);
	$('.combat-text, .combat-text h2').removeClass('shown');
	await util.wait(800);

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
		// clear offset monster effects
		clearTurnEffects(currentMonsters[i], false, true);
		clearTurnAbilities(currentMonsters[i], false, true);
		monsters.updateStatusBar(currentMonsters[i]);
	}

	// check for stockpile
	if(player.stockpile.enabled && player.block > 0) {
		applyArmor(player.block, player);
	}

	// clear delayed player effects
	clearTurnEffects(player, true);
	clearTurnAbilities(player, true);
	monsters.updateStatusBar(player);
	
	if(!Player().dead(player)) {
		beginTurn();
	}

}



function clearTurnEffects(from, delay = false, offset = false) {
	for(let i = 0; i < game.effects.length; i++) {
		if(((!delay && !game.effects[i].delay && !offset && !game.effects[i].offset) || (delay && game.effects[i].delay) || (offset && game.effects[i].offset)) && game.effects[i].id != 'fatality') {
			//let index = from[game.effects[i].id].turns < 1 ? 0 : from[game.effects[i].id].turns - 1;
			let index = 0; // shouldn't this always be the first element in the array, since that's always the current turn?
			let temp = from[game.effects[i].id].temp[index] != undefined ? from[game.effects[i].id].temp[index] : false;

			// for debugging specific effect
			/*if(game.effects[i].id=='might' && from.id=='player') {
				console.log('temp', from[game.effects[i].id].temp); // [2, 2]
				console.log('index', index); // 1
				console.log('temp', temp); // 2
				console.log('turns', from[game.effects[i].id].turns); // 2
			}*/	

			if(temp) {
				//from[game.effects[i].id].temp.splice(index, 1);
				from[game.effects[i].id].temp.splice(0, 1); // we always want to remove the first element in temp array because that's what turn it is
				from[game.effects[i].id].current -= temp;
				//we have removed this turn's effect, but if there are more turns, need to re-add next turn's temp to current (without then removing it)
				temp = from[game.effects[i].id].temp[0] != undefined ? from[game.effects[i].id].temp[0] : false;
				if(temp) {
					from[game.effects[i].id].current += temp;
				}
			}

			if(from[game.effects[i].id].turns > 0) {
				from[game.effects[i].id].turns -= 1;
				// added in alpha v.24 to account for pendant + might hex stacking resulting in permanent might next combat
				// but changing persist to false on triggered treasures that have -1 turns seems to have fixed it instead
				if(from[game.effects[i].id].turns == 0) {
					//from[game.effects[i].id].turns = -1;
				}
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
	from.antimomentumAmount = 0;
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
	}

	// one-off resets
	player.momentumAmount = 0;
	player.antimomentumAmount = 0;
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
			// it's possible a monster hexed an effect and then a player buffed the same effect but not to the extent it was previously hexed
			// e.g. monster hexes might -2 and player buffs might +1 resulting in "hexed" flag getting set to false but might is still at -1
			let isHexed = to[game.effects[i].id].hexed; // this isn't really used because we're figuring out hexed logic below
			let isHex = game.effects[i].hex;
			if(game.effects[i].id == 'sorcery' || game.effects[i].id == 'punch' || game.effects[i].id == 'thunder') {
				if(to[game.effects[i].id].current < 1) {
					isHexed = true;
				} else {
					isHexed = false;
				}
			} else {
				if(to[game.effects[i].id].current < 0 || isHex) {
					isHexed = true;
				} else {
					isHexed = false;
				}
			}
			if(isHexed) {
				let current = game.effects[i].id == 'sorcery' || game.effects[i].id == 'punch' || game.effects[i].id == 'thunder' ? 1 : 0;
				to[game.effects[i].id].temp = [];
				to[game.effects[i].id].turns = 0;
				to[game.effects[i].id].current = current;
				to[game.effects[i].id].hexed = false;
			}
		}
	}
}

function removeBuffs(to) {
	if(!to.eternal.enabled) {
		for(let i = 0; i < game.effects.length; i++) {
			if(game.effects[i].id != 'rainbow' && to[game.effects[i].id]!==undefined) {
				let isHex = game.effects[i].hex;
				if(to[game.effects[i].id].hexed!==true && !isHex) {
					let current = game.effects[i].id == 'sorcery' || game.effects[i].id == 'punch' || game.effects[i].id == 'thunder' ? 1 : 0;
					to[game.effects[i].id].temp = [];
					to[game.effects[i].id].turns = 0;
					to[game.effects[i].id].current = current;
				}
			}
		}
		for(let i = 0; i < game.abilities.length; i++) {
			if(game.abilities[i].id != 'toothache' && to[game.abilities[i].id]!==undefined) {
				to[game.abilities[i].id].enabled = false;
				to[game.abilities[i].id].turns = 0;
			}
		}
	}
}

function applyEffect(effect, to, turns = -1) {
	let gameEffect = game.effects.find(({ id }) => id === effect.effect);
	let isHex = false;
	if(gameEffect!==undefined) {
		if(gameEffect.hex || effect.hex) {
			isHex = true;
		}
	}
	// check for vex
	if(to.vex.current > 0 && isHex) {
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
			//let amt = (effect.effect == 'conjure' && isHex) ? 0 : Math.round(((to[effect.effect].current + effect.amount) + Number.EPSILON) * 100) / 100;
			let amt = Math.round(((to[effect.effect].current + effect.amount) + Number.EPSILON) * 100) / 100;
			let amtShow = effect.amount;
			// punch, speed, and thunder should never go below 0
			if(effect.effect == 'punch' || effect.effect == 'speed' || effect.effect == 'thunder' || effect.effect == 'sorcery' || effect.effect == 'resistance') {
				if(amt < 0) {
					amt = 0;
				}
			}
			to[effect.effect].current = amt;
			// rainbow is a special case and shouldn't technically be an effect, but it is, so treat it differently
			if(effect.effect != 'rainbow') {
				// if turns is set to -1 it means this is not a temporary effect. this way, both permanent and temp effects can be added together
				if(turns > -1) {
					if(effect.effect == 'fatality') {
						// fatality is per card, not per turn, so there should never be multiple temp values - it should always stack
						if(to[effect.effect].temp.length == 0) {
							to[effect.effect].temp.push(effect.amount);
						} else {
							to[effect.effect].temp[0] = Math.round(((to[effect.effect].temp[0] + effect.amount) + Number.EPSILON) * 100) / 100;
						}
					} else {
						// old way of doing it. two 1 turn effects would add effect for 2 turns instead of combining for one turn
						//to[effect.effect].temp.push(effect.amount);  //TODO: test sparkle stance + excalibur against mummy: mummy hexes might which disrupts temp array
						for(let i = 1; i <= turns; i++) {
							let tempAmount = to[effect.effect].temp[i - 1] + effect.amount;
							if(tempAmount===undefined || isNaN(parseFloat(tempAmount))) tempAmount = effect.amount;
							tempAmount = Math.round((tempAmount + Number.EPSILON) * 100) / 100;
							if(to[effect.effect].temp.length == 0) {
								to[effect.effect].temp.push(effect.amount);
							} else {
								to[effect.effect].temp[i - 1] = tempAmount;
							}
						}
					}
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
			if(effect.effect == 'punch' || effect.effect == 'sorcery' || effect.effect == 'resistance' || effect.effect == 'thunder') {
				amtShow = Math.round((amtShow + Number.EPSILON) * 100);
				amtShow += '%';
			}
			if(isHex) {
				to[effect.effect].hexed = true;
				if(game.playsounds) sounds.play('hex');
				game.statusAnimations({data: amtShow + ' ' + effect.effect, to: statusDom, hex: true});
				// deal with angered effect
				if(to.angered.current > 0) {
					let angeredEffect = {effect: 'might', amount: to.angered.current, turns: -1};
					applyEffect(angeredEffect, to);
				}
			} else {
				to[effect.effect].hexed = false;
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
		if(game.abilities[i].context !== 'card') {
			if((!delay && !game.abilities[i].delay && !offset && !game.abilities[i].offset) || (delay && game.abilities[i].delay) || (offset && game.abilities[i].offset)) {
				if(from[game.abilities[i].id].turns > 1) {
					from[game.abilities[i].id].turns -= 1;
					from[game.abilities[i].id].enabled = true;
				// abilities could potentially persist from previous combat for player
				} else if((from[game.abilities[i].id].permanent == false && from[game.abilities[i].id].turns > -1)) {
					from[game.abilities[i].id].turns = 0;
					from[game.abilities[i].id].enabled = false;
				}
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
	let active = to[ability.ability].enabled && to[ability.ability].baseTurns == -1;
	let gameAbility = game.abilities.find(({ id }) => id === ability.ability);

	let isHex = false;
	if(gameAbility.hex) {
		isHex = true;
	}
	// check for vex
	if(to.vex.current > 0 && isHex) {
		to.vex.current -= 1;
		if(game.playsounds) sounds.play('vex');
	} else {
		to[ability.ability].enabled = ability.enabled;
		let statusDom = $('.player .status-text');
		if(to.type=='monster') {
			statusDom = $('.monster[data-guid=' + to.guid + '] .status-text');
		}
		if(!active) {
			if(to[ability.ability].permanent) {
				to[ability.ability].baseTurns += turns;
			} else {
				to[ability.ability].baseTurns = ability.baseTurns;
			}
		}
		if(ability.hex) {
			to[ability.ability].turns = 0;
			to[ability.ability].enabled = false;
			if(game.playsounds) sounds.play('hex');
			game.statusAnimations({data: gameAbility.name, to: statusDom, hex: true});
			// deal with angered effect
			if(to.angered.current > 0) {
				let angeredEffect = {effect: 'might', amount: to.angered.current, turns: -1};
				applyEffect(angeredEffect, to);
			}
		} else {
			if(!active) {
				if(ability.baseTurns == -1) { // if we're applying a temporary ability on top of a permanent one
					to[ability.ability].turns = -1;
				} else {
					to[ability.ability].turns += turns;
				}
			}
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
	}
	if(to.type == 'monster') monsters.updateStatusBar();

	setStatus();

}

function endCombat() {

	if(!game.combatEndedFlag) {

		stopMusic();

		let aggroAmount = 1;

		if(game.mapType == 'arena') {
			if(game.playsounds) sounds.play('arenaRewards');
			aggroAmount = game.arenasComplete;
		} else {
			if(game.playsounds) sounds.play('rewards');
		}
		
		if(game.mapType != 'singularity') {
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
				$('body').removeClass('combating selecting destroying retaining');
				$('.player-cards, .monster-panel').empty();
				removeArrow();
			}, 2000);
		}

		// don't put this in settimeout because it causes rewards screen candies to not be clickable
		$('.candy').removeClass('clickable').addClass('trashable');

		game.combatEndedFlag = true;

		game.message('End combat floor ' + game.combat);

		heal(player, player.heal.current);
		
		gainCourage(1);
		updateAggro(aggroAmount);
		
		game.candyChance += 10;
		game.shardChance += 5;
		player.block = 0;
		clearCombatEffects();
		clearCombatAbilities();
		clearCombatTreasureCounters();

		if(game.mapType == 'singularity') {
			endGame('victory');
		} else {
			rewardsScreen();
		}

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

	let amountText = amount > 0 ? '+' + amount : amount;

	if(amount > 0) {
		if(game.playsounds) sounds.play('frolic');
	}

	game.statusAnimations({data: '<span class="courage-text">' + amountText + '</span>', to: '.courage-amount', hex: false});

	setStatus();

}

async function updateAggro(amount) {

	let whichThresholds = game.map == 1 ? game.aggroThresholds : game.aggroThresholds2;

	if(amount != undefined) {

		amount = parseFloat(amount);

		// are we reducing aggro or increasing it?
		if(amount < 0) {
			for(let i = 0; i > amount; i--) {
				player.aggro.current -= 1;
				if(whichThresholds.includes((player.aggro.current + 1))) {
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
				if(whichThresholds.includes(player.aggro.current) || player.aggro.current > whichThresholds.at(-1)) {
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
	$('.aggro-bar span.threshold').html(whichThresholds[player.aggro.level]);
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
			$('.loot-screen .message').html('You found a shard.');
		break;
		case 'arena':
			// for arena screens, only tier 3
			possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == tier);
			if(possibleTreasures.length > 0) {
				possibleTreasures = util.shuffle(possibleTreasures);
				for(let i = 0; i < 3; i++) {
					let treasure = possibleTreasures[i];
					treasure.desc = deck.buildDescription(treasure);
					util.appendTreasure(treasure, '.loot-items');
				}
			}
			$('.loot-screen .message').html('Choose ONE of these powerful treasures.');
		break;
		case 'gate':
			// for gate screens, only tier 4
			possibleTreasures = treasures.treasures.filter(i => i.owned == false && i.tier == tier);
			if(possibleTreasures.length > 0) {
				possibleTreasures = util.shuffle(possibleTreasures);
				for(let i = 0; i < 3; i++) {
					let treasure = possibleTreasures[i];
					treasure.desc = deck.buildDescription(treasure);
					util.appendTreasure(treasure, '.loot-items');
				}
			}
			$('.loot-screen .message').html('Choose a legendary treasure.');
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
			var numEssences = util.chance(75) ? 1 : 2;
			for(let i = 0; i < numEssences; i++) {
				var index = util.randArrayIndex(game.essences);
				util.appendEssence(game.essences[index], '.loot-items');
			}
			// chance for shard
			if(util.chance(game.shardChance) && deck.numOpenSlots() > 0) {
				game.shardChance -= 5;
				if(game.shardChance < 0) game.shardChance = 0;
				var index = util.randArrayIndex(treasures.shards);
				util.appendShard(treasures.shards[index], '.loot-items');
			}
			// chance for candy
			if(util.chance(game.candyChance)) {
				game.candyChance -= 20;
				if(game.candyChance < 0) game.candyChance = 0;
				let candy = util.weightedRandom(treasures.candies);
				//let copiedCandy = JSON.parse(JSON.stringify(candy)); // necessary to create a deep copy
				let copiedCandy = $.extend(true, {}, candy);
				copiedCandy.desc = deck.buildDescription(copiedCandy);
				let clickable = player.candies.length < game.candySlots ? true : false;
				util.appendCandy(copiedCandy, '.loot-items', clickable);
			}
			$('.loot-screen .message').html('Spoils of war.');
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
			$('.loot-screen .message').html('Spoils of war.');
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
		game.shardChance -= 15;
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
		loot('gate', tier);
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

	stopMusic();
	if(game.playsounds) sounds.play('gate');
	$('.gate-screen').addClass('shown');

}

function courageScreen() {

	if(game.mapType == 'fountain') return false; // courage screen would have displayed prior to the fountain screen

	game.mapType = 'normal'; // if mapType is still arena or gate it would result in all rare cards at the shop

	if(game.floor % game.courageInterval == 0) {

		util.setTooltip('.courage-gamble');
		util.setTooltip('.courage-trade');
		game.tradeExpired = false;

		stopMusic();
		if(!musicCourage.playing() && game.playmusic) musicCourage.play();

		$('.courage-screen').addClass('shown');
		$('.courage-remove').addClass('shown');
		$('.courage-gamble').addClass('shown');
		
		if(deck.getTradeableCards()) {
			$('.courage-trade').addClass('shown');
		} else {
			$('.courage-trade').removeClass('shown');
		}

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

	let costTrade = game.tradeCardCost;

	if(costTrade > player.courage) {
		$('.courage-trade').addClass('too-expensive');
	} else {
		$('.courage-trade').removeClass('too-expensive');
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
					await attackMonster(currentMonster[0], dmg[i], false, false, false, false);
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
	if(treasure == undefined) return false;
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

	// if card was a weapon we need to show trade button
	if(deck.getTradeableCards() && !game.tradeExpired) {
		$('.courage-trade').addClass('shown');
	}
		
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

	if(game.playsounds) sounds.play('tool2');
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
	} else if($('.card.retain').length < player.retain.current) {
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

async function discardCards() {

	$('.card.discard').each(async function(e) {

		await discardCard($(this));

	}).promise().done(function() {

		$('body').removeClass('discarding');
		$('.discard-done').removeClass('shown');
		$('.card').removeClass('discard discardable');
		$('.discard-message').removeClass('shown');
		if(player.speed.current > 0) $('.draw-card, .draw-all').removeClass('disabled');
		game.toDiscard = 0;
		combatDeck.updateCardPlayability(player, combatDeck);
		setStatus();

		if(!$('body').hasClass('destroying') || combatDeck.handCards.length == 0) {
			$('body').removeClass('selecting');
			$('.destroy-message').removeClass('shown');
		}

	});
}

async function discardCard(elem) {
	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);

	if(card==undefined) return;

	combatDeck.discardCard(card, combatDeck);

	if(player.preserve.current > 0) {
		applyBlock(player.preserve.current, player);
	}

	await processCard(card, false, 'discard');

	setStatus();
}

async function destroyCards() {

	$('.card.destroy').each(async function(e) {

		await destroyCard($(this));

	}).promise().done(function() {

		$('body').removeClass('destroying');
		$('.destroy-done').removeClass('shown');
		$('.card').removeClass('destroy destroyable');
		$('.destroy-message').removeClass('shown');
		if(player.speed.current > 0) $('.draw-card, .draw-all').removeClass('disabled');
		game.toDestroy = 0;
		game.destroyOptional = false;
		combatDeck.updateCardPlayability(player, combatDeck);
		setStatus();

		if(!$('body').hasClass('discarding') || combatDeck.handCards.length == 0) {
			$('body').removeClass('selecting');
			$('.discard-message').removeClass('shown');
		}
		
	});

}

async function destroyCard(elem) {
	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	combatDeck.destroyCard(card, combatDeck);

	if(player.ward.current > 0) {
		applyBlock(player.ward.current, player);
	}

	await processCard(card, false, 'destroy');

	if(player.replenish?.current > 0) {
		let actions = [{action: 'draw', value: player.replenish.current}];
		await processActions(actions);
	}

	setStatus();
}

function transmuteCards() {
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
	$('.choose-cards-panel .done').removeClass('transmute');
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

	if(player.fend.current > 0) {
		applyBlock(player.fend.current, player);
	}

	$('.card.combinable.selected').each(function() {

		let card = util.getCardByGuid($(this).data('guid'), combatDeck.handCards);
		let skipDead = true;
		combatDeck.destroyCard(card, combatDeck, skipDead);
		processCard(card, false, 'vanishes');

		if(game.playsounds) sounds.play('combineCards');
		
	}).promise().done(function() {

		setStatus();
		
	});

}

async function playCard(elem, monster = undefined, type = false, useMana = true) {

	$('body').removeClass('discarding selecting destroying');
	$('.monster').removeClass('clickable');
	$('.crit').removeClass('shown');
	elem.removeClass('selected playable').addClass('playing');
	removeArrow();

	let card = util.getCardByGuid(elem.data('guid'), combatDeck.handCards);
	let deckCard = util.getCardByGuid(elem.data('guid'), deck.cards);

	if(card == undefined) return false;

	card.playing = true;

	let sound = card.sound ? card.sound : card.type + 'Card';

	if(game.playsounds) sounds.play(sound);

	let currentMonster = false;
	if(monster != undefined && card.target !== 'all') {
		if(monster == 'random') {
			let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
			currentMonster = [util.randFromArray(currentMonsters)];
		} else {
			currentMonster = game.currentMonsters.filter(i => i.guid == monster.data('guid'));
		}
	}

	let mana = util.getCardAttribute(card, 'mana');
	let multiply = 1;
	let numShards = util.getShardNum(card, 'any');
	if(mana == '?' && useMana) {
		/* not sure if this mechanic makes sense, especially since the shard upgrades add more power already
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
		}*/

		multiply = player.mana.current;

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
	if(player.speed.current <= 0) player.speed.current = 0;

	// process per card effects
	if(player.antimomentumAmount > 0) {
		await doDamage(player.antimomentumAmount, monster, [player]);
	}
	if(player.marked.current > 0) {
		await doDamage(player.marked.current, monster, [player]);
	}
	for(let i = 0; i < game.currentMonsters.length; i++) {
		if(game.currentMonsters[i].marked.current > 0) {
			await doDamage(game.currentMonsters[i].marked.current, player, [game.currentMonsters[i]]);
		}
		monsters.updateMonsterStats(game.currentMonsters[i]);
	}
	if(player.insulate.current > 0) {
		applyBlock(player.insulate.current, player);
	}
	
	// process the card
	await processCard(card, currentMonster, type, multiply, true);

	if(card.type == 'attack') {
		player.momentumAmount += player.momentum.current;
	}
	player.antimomentumAmount += player.antimomentum.current;
	
	let linger = util.getCardAttribute(card, 'linger');
	let breakable = util.getCardAttribute(card, 'breakable');
	let use = util.getCardAttribute(card, 'use');

	// figure out what to do with card
	if(shouldDestroyCard(card)) {
		// check for breakable
		let skipDead = false;
		if(breakable) {
			removeCardFromDeck(elem.data('guid'));
			skipDead = true;
		}
		if(type == 'combine') {
			skipDead = true;
		}
		combatDeck.destroyCard(card, combatDeck, skipDead);
		await processCard(card, false, 'vanishes');
		if(player.replenish?.current > 0) {
			let actions = [{action: 'draw', value: player.replenish.current}];
			await processActions(actions);
		}
	} else if(activateCard(card)) {
		combatDeck.activateCard(card, combatDeck);
	} else if(linger < 1) {
		combatDeck.discardCard(card, combatDeck, 'played');
	}

	if(use > 0) {
		use -= 1;
		reduceCardStat(card, 'use', 1);
		if(breakable) {
			// use needs to be permanently decreased
			// it's possible we're decreasing use on a card added during combat (temp card) which will not be in the deck
			if(deckCard==undefined) {
				card.use -= 1;
				card.shardUpgrades.use -= 1;
			} else {
				deckCard.use -= 1;
				deckCard.shardUpgrades.use -= 1;
			}
			// in the future this might need to be dealt with more holistically, because perhaps breakable
			// could be affected by shards (although it's not now)
		}
	}

	if(linger > 0) {
		linger -= 1;
		reduceCardStat(card, 'linger', 1);
	}

	// check for bless
	if(card.type == 'ability' && player.bless.enabled) {
		let possibleCards = [];
		for(let i = 0; i < combatDeck.handCards.length; i++) {
			let mana = util.getCardAttribute(combatDeck.handCards[i], 'mana');
			if(mana > 0) {
				possibleCards.push(combatDeck.handCards[i]);
			}
		}
		let freeCard = util.randFromArray(possibleCards);
		console.log('tried to bless', freeCard);
		if(freeCard != undefined) {	
			freeCard.mana = 0;
			if(freeCard.shardUpgrades.mana != undefined) freeCard.shardUpgrades.mana = 0;
			if(freeCard.bothShardUpgrades.mana != undefined) freeCard.bothShardUpgrades.mana = 0;
			if(freeCard.iceShardUpgrades.mana != undefined) freeCard.iceShardUpgrades.mana = 0;
			if(freeCard.fireShardUpgrades.mana != undefined) freeCard.fireShardUpgrades.mana = 0;
			updateCardDescriptions('handCards');
		}
	}
	
	combatDeck.updateCardPlayability(player, combatDeck);

	elem.removeClass('playing');
	card.playing = false;

	// it's possible draw-card button has been disabled, but this card added speed
	if(player.speed.current > 0 && combatDeck.handCards.length < 10) $('.draw-card, .draw-all').removeClass('disabled');

	monsters.updateStatusBar();
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

async function processCard(card, currentMonster, type, multiply = 1, cardWasPlayed = false) {

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	let target = currentMonster;
	// only process card draw target if monster has not been passed through
	if(target == false || target == undefined) {
		let cardTarget = util.getCardAttribute(card, 'target', type);
		if(!(cardTarget == false || cardTarget == undefined)) {
			target = cardTarget;
			if(target == 'all') {
				target = currentMonsters;
				currentMonster = currentMonsters;
			} else if(target == 'player') {
				// processDmg wants an undefined object, but processEffects and ProcessAbilities both want the player object
				currentMonster = [player];
				target = undefined;
			} else {
				target = util.shuffle(currentMonsters);
			}
		} else {
			target = util.shuffle(currentMonsters);
			currentMonster = [player];
		}
	}

	let blk = util.getCardAttribute(card, 'blk', type);
	await processBlk(blk, multiply, card, cardWasPlayed);

	let armor = util.getCardAttribute(card, 'armor', type);
	await processArmor(armor, multiply, card, cardWasPlayed);

	let dmg = util.getCardAttribute(card, 'dmg', type);
	await processDmg(dmg, target, multiply, card, type, cardWasPlayed);

	if(monsters.allDead()) return;

	let effects = util.getCardAttribute(card, 'effects', type);
	await processEffects(effects, currentMonster, multiply, card, cardWasPlayed);

	let abilities = util.getCardAttribute(card, 'abilities', type);
	await processAbilities(abilities, currentMonster, card, cardWasPlayed);

	let magic = util.getCardAttribute(card, 'magic', type);
	await processMagic(magic, multiply, card, cardWasPlayed);

	let actions = util.getCardAttribute(card, 'actions', type);
	await processActions(actions, target, multiply, card, cardWasPlayed);


	// stance attributes

	if(cardWasPlayed && util.hasAttribute(card, player.stance)) {

		await util.wait(300);

		if(game.playsounds) sounds.play(player.stance + 'Amount');
		game.statusAnimations({data: '<span class="' + player.stance + '-text">' + player.stance + '</span> Effect', to: '.stance-text', hex: false});

		let dmgStance = util.getCardAttribute(card, 'dmg', player.stance);
		await processDmg(dmgStance, target, multiply, card, type, cardWasPlayed);

		let blkStance = util.getCardAttribute(card, 'blk', player.stance);
		await processBlk(blkStance, multiply, card, cardWasPlayed);

		let armorStance = util.getCardAttribute(card, 'armor', player.stance);
		await processArmor(armorStance, multiply, card, cardWasPlayed);

		let effectsStance = util.getCardAttribute(card, 'effects', player.stance);
		await processEffects(effectsStance, currentMonster, multiply, card, cardWasPlayed);

		let abilitiesStance = util.getCardAttribute(card, 'abilities', player.stance);
		await processAbilities(abilitiesStance, currentMonster, card, cardWasPlayed);

		let magicStance = util.getCardAttribute(card, 'magic', player.stance);
		await processMagic(magicStance, multiply, card, cardWasPlayed);

		let actionsStance = util.getCardAttribute(card, 'actions', player.stance);
		await processActions(actionsStance, false, multiply, card, cardWasPlayed);

	}

	combatDeck.updateCardPlayability(player, combatDeck);

}

async function processDmg(dmg, currentMonster, multiply, card = false, type = false, cardWasPlayed = false) {
	if(dmg.length) {
		for(let i = 0; i < multiply; i++) {
			for(let j = 0; j < dmg.length; j++) {
				let criticalHit = type != 'draw' && type != 'discard' && type != 'destroy' ? util.chance(game.critChance) : false;
				let thisDmg = dmg[j];
				if(currentMonster) {
					// handle effects and abilities that last per card rather than per turn and are not triggered by draw/discard/destroy effects
					let fatalityHit = false;
					if(card.type == 'attack' && type != 'draw' && type != 'discard' && type != 'destroy') {
						// explode
						if(player.explode?.enabled) {
							thisDmg = thisDmg * 2;
							player.explode.turns -= 1;
							if(player.explode.turns < 1) {
								player.explode.enabled = false;
							}
						}
						// fatality
						if(player.fatality.current > 0 && (game.highestDmgRoll * player.fatality.current) > thisDmg) {
							fatalityHit = true;
							thisDmg = game.highestDmgRoll * player.fatality.current;
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
					for(let k = 0; k < currentMonster.length; k++) {
						// check for age
						if(card.age > 0) {
							if(player.wisdom.current != 1 && !fatalityHit) {
								thisDmg += Math.round(card.age * player.wisdom.current);
							} else {
								thisDmg += card.age;
							}
						}
						await attackMonster(currentMonster[k], thisDmg, fatalityHit, false, criticalHit, cardWasPlayed);
						//await util.wait(game.animationGap);
						if(criticalHit) {
							game.attackCardsPlayed = 0;
							//player.rowdy.current = player.rowdy.base; // this was incorrect - rowdy should persist regardless of critical hit
							$('.crit').addClass('shown');
							if(game.playsounds) sounds.play('attack23');
						} else {
							game.attackCardsPlayed += 1;
						}
						if(monsters.allDead()) {
							await util.wait(800);
							endCombat();
							return;
						}
					}
				} else {
					await attackPlayer(false, dmg[j]);
				}
				await util.wait(game.animationDmg);
				updateCritChance();
			}
		}
	}
}
async function processBlk(blk, multiply, card = false, cardWasPlayed = false) {
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
async function processArmor(armor, multiply = 1, card = false, cardWasPlayed = false) {
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
async function processEffects(effects, currentMonster = false, multiply = 1, card = false, cardWasPlayed = false) {
	if(effects != undefined) {
		for(let i = 0; i < multiply; i++) {
			for(let e = 0; e < effects.length; e++) {
				for(let k = 0; k < currentMonster.length; k++) {
					let to = player;
					if(effects[e].hex && currentMonster[k]) {
						to = currentMonster[k];
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
}
async function processAbilities(abilities, currentMonster = false, card = false, cardWasPlayed = false) {
	if(abilities != undefined) {
		for(let e = 0; e < abilities.length; e++) {
			for(let k = 0; k < currentMonster.length; k++) {
				let to = player
				let abilityTarget = abilities[e].target !== undefined ? abilities[e].target : 'monster';
				let turns = abilities[e].turns == undefined ? -1 : abilities[e].turns;
				if(abilities[e].hex && currentMonster[k]) {
					to = currentMonster[k];
					turns = 0; // hexes always completely remove the buff
				} else if(abilities[e].hex) {
					let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
					to = util.shuffle(currentMonsters);
					to = to[0];
					turns = 0;
				} else if(currentMonster[k] && card.target=='monster' && abilityTarget=='monster') {
					to = currentMonster[k];
				}
				applyAbility(abilities[e], to, turns);
				await util.wait(game.animationGap);
			}
		}
	}
}
async function processMagic(magic, multiply, card = false, cardWasPlayed = false) {
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
async function processActions(actions, monster = false, multiply = 1, playedCard = false, cardWasPlayed = false) {
	let update = true;
	if(actions != undefined) {
		for(let m = 0; m < multiply; m++) {
			for(let e = 0; e < actions.length; e++) {
				let gameAction = game.actions.find(({ id }) => id === actions[e].action);
				if(gameAction !== undefined) {
					if(game.playsounds && gameAction.sound !== undefined) sounds.play(gameAction.sound);
				}
				switch(actions[e].action) {
					case 'addCard': {

						let hex = actions[e].hex !== undefined ? actions[e].hex : false;
						if(player.vex.current > 0 && hex) {
							player.vex.current -= 1;
							if(game.playsounds) sounds.play('vex');
							break;
						}
						
						//if(game.combatEndedFlag) return; //disabled this because it was not allowing the library quest to work
						game.toShow = [];
						let addCard = '';
						let addThisCard = {};
						let thisCard = {};
						let possibleCards = [];
						let modifiers = actions[e].modifiers != undefined ? actions[e].modifiers : {};
						let shards = actions[e].with != undefined ? actions[e].with : [];
						$('.player-panel .standard-message').html('').removeClass('shown');

						let gameAction = game.actions.find(({ id }) => id === actions[e].action);
						let sound = gameAction.sound ? gameAction.sound : false;
						if(game.playsounds && sound) sounds.play(sound);

						if(actions[e].what != undefined) {
							addCard = actions[e].what;
						} else {
							if(actions[e].type != undefined) {
								if(actions[e].tier != undefined) {
									if(actions[e].type == 'any') {
										possibleCards = AllCards().cards.filter(i => i.addable == true && i.tier == actions[e].tier);
									} else if(actions[e].type == 'converter' || actions[e].type == 'bottled' ) {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type && i.tier == actions[e].tier);
									} else if(actions[e].type == 'weapon') {
										possibleCards = AllCards().cards.filter(i => i.weapon == true && i.tier == actions[e].tier);
									} else {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type && i.tier == actions[e].tier && i.addable == true);
									}
								} else {
									if(actions[e].type == 'any') {
										possibleCards = AllCards().cards.filter(i => i.addable == true);
									} else if(actions[e].type == 'converter' || actions[e].type == 'bottled' || actions[e].type == 'clutter') {
										possibleCards = AllCards().cards.filter(i => i.type == actions[e].type);
									} else if(actions[e].type == 'weapon') {
										possibleCards = AllCards().cards.filter(i => i.weapon == true);
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

						// no legendaries (except weapons)
						if(actions[e].type != 'weapon') {
							possibleCards = possibleCards.filter(i => i.tier != 'legendary');
						}
						
						for(let i = 0; i < actions[e].value; i++) {
							thisCard = util.randFromArray(possibleCards);
							possibleCards = possibleCards.filter(i => i.id !== thisCard.id);

							addThisCard = addCard;
							if(addCard == '') addThisCard = thisCard.id;

							if(actions[e].select != undefined) {
								thisCard = combatDeck.initCard(thisCard, modifiers);
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
								if(actions[e].to != 'deck') {
									combatDeck.addCard(addThisCard, combatDeck, actions[e].to, player, shards, guid, playedCard, modifiers);
								}
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
					}
					case 'remove': {
						game.toPick = actions[e].select;
						var cards = deck.cards;
						if(cards.length > 0) {
							if(game.toPick > cards.length) game.toPick = cards.length;
							viewChooseCards(cards, 'removable');
						}
						break; //{action: 'ensharden', type: 'frost', select: -1, from: 'handCards', random: true}
					}
					case 'ensharden': {
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
					}
					case 'draw': {
						for(let i = 0; i < actions[e].value; i++) {
							addCardTo('draw', null, 'handCards', true, cardWasPlayed);
						}
						break;
					}
					case 'discard': {
						// currently only cards can invoke this action, so make sure invoking card isn't the only one in hand
						if(combatDeck.handCards.length > 1) {
							if(game.autoplay) {
								for(let i = 0; i < actions[e].value; i++) {
									let handCards = combatDeck.handCards;
									handCards = handCards.filter(i => i.playing == false);
									let randomCard = util.randFromArray(handCards);
									if(randomCard !== undefined) {
										let domCard = util.getDomCardByGuid(randomCard.guid);
										await discardCard(domCard);
									}
								}
							} else {
								$('.discard-message').html('choose cards to <span>discard</span>').addClass('shown');
								//$('.discard-done').addClass('shown');
								$('.player-cards .card').addClass('discardable').removeClass('playable');
								$('.draw-card, .draw-all').addClass('disabled');
								$('body').addClass('discarding selecting');
								game.toDiscard = actions[e].value;
								update = false;
							}
						}
						break;
					}
					case 'destroy': {
						// currently only cards can invoke this action, so make sure invoking card isn't the only one in hand
						if(combatDeck.handCards.length > 1) {
							if(game.autoplay) {
								for(let i = 0; i < actions[e].value; i++) {
									let handCards = combatDeck.handCards;
									handCards = handCards.filter(i => i.playing == false);
									let randomCard = util.randFromArray(handCards);
									if(randomCard !== undefined) {
										let domCard = util.getDomCardByGuid(randomCard.guid);
										await destroyCard(domCard);
									}
								}
							} else {
								$('.destroy-message').html('choose cards to <span>destroy</span>').addClass('shown');
								if(actions[e].optional) {
									game.destroyOptional = true;
									$('.destroy-done').addClass('shown');
								}
								$('.player-cards .card').addClass('destroyable').removeClass('playable');
								$('.draw-card, .draw-all').addClass('disabled');
								$('body').addClass('destroying selecting');
								game.toDestroy = actions[e].value;
								update = false;
							}
						}
						break;
					}
					case 'transmute': {
						game.toPick = actions[e].select;
						game.fromPile = actions[e].from;
						if(game.autoplay) {
							for(let i = 0; i < actions[e].select; i++) {
								let handCards = combatDeck.handCards;
								handCards = handCards.filter(i => i.playing == false);
								let randomCard = util.randFromArray(handCards);
								if(randomCard !== undefined) {
									game.toTransmute.push(randomCard);
								}
							}
							transmuteCards();
						} else {
							$('.choose-cards-panel .message').html('choose cards to transmute').addClass('shown');
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
								$('.choose-cards-panel .done').addClass('transmute');
							}
						}
						break;
					}
					case 'findDrawCard': {
						if(combatDeck.drawCards.length > 0) {
							if(game.autoplay) {
								for(let i = 0; i < actions[e].value; i++) {
									viewDrawCards();
									await util.wait(500);
									let drawCards = $('.draw-cards-panel .card');
									if(drawCards.length > 0) {
										let randomCard = $(util.randFromArray(drawCards));
										addCardTo('drawCards', randomCard);
									}
									$('.draw-cards-panel').removeClass('shown');
									$('.draw-cards-panel .card').removeClass('pickable');
									$('.draw-cards-panel .message').html('');
									await util.wait(250);
								}
							} else {
								game.toPick = actions[e].value;
								viewDrawCards();
								$('.draw-cards-panel .card').addClass('pickable');
								$('.draw-cards-panel .message').html('Add cards to your hand');
							}
						}
						break;
					}
					case 'findDiscardCard': {
						if(combatDeck.discardCards.length > 0) {
							if(game.autoplay) {
								for(let i = 0; i < actions[e].value; i++) {
									viewDiscardCards();
									await util.wait(500);
									let discardCards = $('.discard-cards-panel .card');
									if(discardCards.length > 0) {
										let randomCard = $(util.randFromArray(discardCards));
										addCardTo('discardCards', randomCard);
									}
									$('.discard-cards-panel').removeClass('shown');
									$('.discard-cards-panel .card').removeClass('pickable');
									$('.discard-cards-panel .message').html('');
									await util.wait(250);
								}
							} else {
								game.toPick = actions[e].value;
								viewDiscardCards();
								$('.discard-cards-panel .card').addClass('pickable');
								$('.discard-cards-panel .message').html('Add cards to your hand');
							}
						}
						break;
					}
					case 'findDeadCard': {
						if(combatDeck.deadCards.length > 0) {
							if(game.autoplay) {
								for(let i = 0; i < actions[e].value; i++) {
									viewDeadCards();
									await util.wait(500);
									let deadCards = $('.dead-cards-panel .card');
									if(deadCards.length > 0) {
										let randomCard = $(util.randFromArray(deadCards));
										addCardTo('deadCards', randomCard);
									}
									$('.dead-cards-panel').removeClass('shown');
									$('.dead-cards-panel .card').removeClass('pickable');
									$('.dead-cards-panel .message').html('');
									await util.wait(250);
								}
							} else {
								game.toPick = actions[e].value;
								viewDeadCards();
								$('.dead-cards-panel .card').addClass('pickable');
								$('.dead-cards-panel .message').html('Add cards to your hand');
							}
						}
						break;
					}
					case 'stat': {
						let key = actions[e].key;
						let what = actions[e].what;
						let value = actions[e].value;
						let additive = actions[e].additive !== undefined ? actions[e].additive : true;
						let hex = actions[e].hex !== undefined ? actions[e].hex : false;

						if(player.vex.current > 0 && hex) {
							player.vex.current -= 1;
							if(game.playsounds) sounds.play('vex');
							break;
						}

						if(value==='double') {
							value = player[what][key];
							if((what==='punch' || what==='thunder') && value > 1) {
								value = value - 1;
							}
						}

						// if a card was played, check for age multiply effects only for certain stats
						if(playedCard && what == 'health') {
							if(playedCard.age > 0) {
								if(player.wisdom.current != 1) {
									value += Math.round(playedCard.age * player.wisdom.current);
								} else {
									value += playedCard.age;
								}
							}
						}

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
								if(what == 'health') {
									if(key == 'max') {
										player.health.max += value;
									} else {
										heal(player, value);
									}
								} else if(what == 'courage') {
									gainCourage(value);
								// we will actually increase the essence stats within the updateEssenceLevels function called below
								} else if(what != 'aura' && what != 'sparkle' && what != 'shimmer') {
									if(additive) {
										player[what][key] += value;
									} else {
										player[what][key] = value;
									}
									// it's possible rainbow gets reduced below base value - don't let this happen
									// we actually removed this because it didn't make sense
									//if(player.rainbow.base > player.rainbow.max) player.rainbow.max = player.rainbow.base;
								}
								// if we increased speed we might need to re-enable draw card button
								if(what == 'speed' && value > 0) {
									$('.draw-card, .draw-all').removeClass('disabled');
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
						if(player.health.max < player.health.current) player.health.current = player.health.max;
						// it's possible we had full armor and reduced health, so armor needs to reduce to match health
						if(player.armor > player.health.current) player.armor = player.health.current;
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
					}
					case 'removeHexes': {
						if(actions[e].to=='player') {
							removeHexes(player);
						} else if(actions[e].to=='self') {
							removeHexes(monster);
						}
						break;
					}
					case 'removeBuffs': {
						if(actions[e].to=='player') {
							removeBuffs(player);
						} else if(actions[e].to=='self' || actions[e].to=='target') {
							removeBuffs(monster[0]);
						}
						break;
					}
					case 'playOldest': {
						let card = combatDeck.getOldestPlayableCard(combatDeck.handCards, playedCard);
						if(card) {
							let domCard = util.getDomCardByGuid(card.guid);
							playCard(domCard, 'random', false, false)
						}
						break;
					}
					case 'playHand': {
						let theseCards = combatDeck.handCards;
						game.autoplay = true;
						$('body, .map-inner').addClass('unavailable');
						$('body').removeClass('combating');
						for(let i = 0; i < theseCards.length; i++) {
							if(theseCards[i].guid != playedCard.guid) {
								let domCard = util.getDomCardByGuid(theseCards[i].guid);
								await playCard(domCard, 'random', false, false);
								await util.wait(game.animationGap);
							}
						}
						game.autoplay = false;
						$('body, .map-inner').removeClass('unavailable');
						$('body').addClass('combating');
						break;
					}
					case 'discardHand': {
						let theseCards = combatDeck.handCards;
						game.autoplay = true;
						$('body, .map-inner').addClass('unavailable');
						$('body').removeClass('combating');
						for(let i = 0; i < theseCards.length; i++) {
							if(theseCards[i].guid != playedCard.guid) {
								let domCard = util.getDomCardByGuid(theseCards[i].guid);
								await discardCard(domCard);
								await util.wait(300);
							}
						}
						game.autoplay = false;
						$('body, .map-inner').removeClass('unavailable');
						$('body').addClass('combating');
						break;
					}
					case 'destroyHand': {
						let theseCards = combatDeck.handCards;
						game.autoplay = true;
						$('body, .map-inner').addClass('unavailable');
						$('body').removeClass('combating');
						for(let i = 0; i < theseCards.length; i++) {
							if(theseCards[i].guid != playedCard.guid) {
								let domCard = util.getDomCardByGuid(theseCards[i].guid);
								await destroyCard(domCard);
								await util.wait(300);
							}
						}
						game.autoplay = false;
						$('body, .map-inner').removeClass('unavailable');
						$('body').addClass('combating');
						break;
					}
					case 'summonMonster': {
						let form = actions[e].form !== undefined ? actions[e].form : false;
						if(actions[e].what.constructor === Array) {
							for(let i = 0; i < actions[e].value; i++) {
								let id = game.round + '-' + i;
								let what = util.randFromArray(actions[e].what);
								monsters.summonMonster(what, id, form);
								await util.wait(game.animationGap);
							}
						} else if(actions[e].what == 'random') {
							for(let i = 0; i < actions[e].value; i++) {
								let id = game.round + '-' + i;
								let possibleMonsters = monsters.monsters.filter(i => i.category == 'normal' && i.breed != 'ghost' && i.context == game.overworld);
								if(actions[e].tier !== undefined) {
									if(actions[e].tier.constructor === Array) {
										possibleMonsters = monsters.monsters.filter(i => i.breed != 'ghost' && i.context == game.overworld && actions[e].tier.includes(i.tier));
									}
								}
								let what = util.randFromArray(possibleMonsters);
								monsters.summonMonster(what.id, id, form);
								await util.wait(game.animationGap);
							}
						} else {
							for(let i = 0; i < actions[e].value; i++) {
								let id = game.round + '-' + i;
								monsters.summonMonster(actions[e].what, id, form);
								await util.wait(game.animationGap);
							}
						}
						break;
					}
					case 'kill': {
						if(actions[e].to=='player') {
							kill(player);
						} else if(actions[e].to=='self') {
							kill(monster);
						}
						break;
					}
					case 'rainbowShield': {
						var blk = Math.round(actions[e].value * player.rainbow.max);
						applyBlock(blk, player);
						break;
					}
					case 'chargedShield': {
						var blk = Math.round(actions[e].value * player.rainbow.current);
						applyBlock(blk, player);
						break;
					}

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
				await processArmor([35]);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_healing') {
				heal(player, 25);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'wish_for_long_life') {
				let actions = [{action: 'stat', what: 'health', key: 'max', value: 10}];
				await processActions(actions);
				heal(player, 10);
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
					{action: 'stat', what: 'health', key: 'current', value: -15}
				];
				await processActions(actions);
				gainCourage(5);
			} else if(option == 'meditate') {
				let actions = [
					{action: 'stat', what: 'shimmer', key: 'current', value: 3},
					{action: 'stat', what: 'health', key: 'current', value: -15}
				];
				await processActions(actions);
			} else if(option == 'fast') {
				let actions = [
					{action: 'stat', what: 'sparkle', key: 'current', value: 3},
					{action: 'stat', what: 'health', key: 'current', value: -15}
				];
				await processActions(actions);
			} else if(option == 'hold_vigil') {
				let actions = [
					{action: 'stat', what: 'aura', key: 'current', value: 3},
					{action: 'stat', what: 'health', key: 'current', value: -15}
				];
				await processActions(actions);
			} else if(option == 'worship') {
				let actions = [
					{action: 'stat', what: 'health', key: 'max', value: 10},
					{action: 'stat', what: 'health', key: 'current', value: -15}
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
				} else {
					loot('candy', 1);
				}
			} else if(option == 'buy_3_candies') {
				if(player.courage > 2) {
					gainCourage(-2);
					loot('candy', 3);
				} else if(player.courage > 1) {
					gainCourage(-1);
					loot('candy', 2);
				} else {
					loot('candy', 1);
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
					gainCourage(4);
				}
			}
			if(option == 'large_trunk') {
				if(util.chance(33)) {
					gainCourage(9);
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
					loot('candy', 3);
					gainCourage(9);
				} else {
					let actions = [
						{action: 'stat', what: 'health', key: 'current', value: -15}
					];
					await processActions(actions);
				}
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'right1113' || 
					option == 'straight1211' || 
					option == 'straight1311' || 
					option == 'left2122' || 
					option == 'straight2213' || 
					option == 'right2312' || 
					option == 'straight3211' || 
					option == 'right3221' || 
					option == 'right3322' || 
					option == 'straight3331') {
				// medium prizes
				loot('candy', 3);
				gainCourage(6);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
			} else if(option == 'left1113' || 
					option == 'left1222' || 
					option == 'left1211' || 
					option == 'left1233' || 
					option == 'straight1122' || 
					option == 'straight1132' || 
					option == 'straight1332' || 
					option == 'right1131' || 
					option == 'right1133' || 
					option == 'right1231' || 
					option == 'straight1221' || 
					option == 'straight1233' || 
					option == 'straight1332' || 
					option == 'right1121' || 
					option == 'right1133' || 
					option == 'right1233' || 
					option == 'straight1122' || 
					option == 'straight1231' || 
					option == 'straight1232' || 
					option == 'right1112' || 
					option == 'right1212' || 
					option == 'right1312' || 
					option == 'straight1132' ||
					option == 'straight1232' ||
					option == 'straight1331' ||
					option == 'left2111' || 
					option == 'left2123' || 
					option == 'left2131' || 
					option == 'right2121' || 
					option == 'right2123' || 
					option == 'right2133' || 
					option == 'left2211' || 
					option == 'left2223' || 
					option == 'left2233' || 
					option == 'right2213' || 
					option == 'right2223' || 
					option == 'right2233' || 
					option == 'straight2111' || 
					option == 'straight2131' || 
					option == 'straight2231' || 
					option == 'right2311' || 
					option == 'right2313' || 
					option == 'right2322' || 
					option == 'left2311' || 
					option == 'left2321' || 
					option == 'left2333' || 
					option == 'right2311' || 
					option == 'right2312' || 
					option == 'right2333' || 
					option == 'straight3111' || 
					option == 'straight3113' || 
					option == 'straight3211' || 
					option == 'right3122' || 
					option == 'right3123' || 
					option == 'right3131' || 
					option == 'left3111' || 
					option == 'left3112' || 
					option == 'left3113' || 
					option == 'right3211' || 
					option == 'right3212' || 
					option == 'right3213' || 
					option == 'left3221' || 
					option == 'left3232' || 
					option == 'left3233' || 
					option == 'right3311' || 
					option == 'right3312' || 
					option == 'right3313' || 
					option == 'straight3311' || 
					option == 'straight3321' || 
					option == 'straight3331' || 
					option == 'left3313' || 
					option == 'left3312' || 
					option == 'left3323' || 
					option == 'straight3322' || 
					option == 'straight3332' || 
					option == 'straight3333' || 
					option == 'right3321' || 
					option == 'right3322' || 
					option == 'right3333') {
				// small prizes
				loot('candy', 1);
				gainCourage(3);
				$('.quest-screen').removeClass('shown');
				$('.quest-options').empty();
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
		case 'market_of_arms':
			if(option == 'accept_offer') {
				let actions = [
					{action: 'addCard', value: 1, type: 'weapon', to: 'deck', permanent: true},
					{action: 'addCard', value: 2, type: 'clutter', to: 'deck', permanent: true},
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

function crit(dmg, unreachable = false) {
	let mastery = player.mastery.current;
	let threshold = 5; // crits are always at least 1.5x dmg
	threshold += mastery;
	let multiplier = (util.randIntFromInterval(threshold) / 10) + 1; // multiplier is over and above 1 (100% dmg)
	let critDmg = Math.round(dmg * multiplier);
	let fierce = player.fierce.current;
	critDmg += fierce;
	let critDmgShow = unreachable ? '<strike>' + critDmg + '</strike>' + ' 1' : critDmg;
	$('.crit').addClass('shown').find('span').html(critDmgShow);
	return critDmg;
}

async function attackMonster(monster, dmg, fatalityHit = false, hypnotizeHit = false, criticalHit = false, cardWasPlayed = true) {

	// might and punch effect - does not apply to fatality hits
	if(!fatalityHit && cardWasPlayed) {
		dmg += player.might.current;
		dmg = dmg * player.punch.current;
	}

	// momentum gets added after other damage increasing effects
	if(cardWasPlayed) dmg = dmg + player.momentumAmount;

	dmg = Math.round(dmg);

	// it's possible damage is negative if player has negative might
	dmg = dmg < 0 ? 0 : dmg;

	// we don't want to show the large crit value if monster is unreachable and only actually takes 1
	let unreachable = monster.unreachable?.enabled;
	let d = criticalHit && !fatalityHit ? crit(dmg, unreachable) : dmg;
	
	await doDamage(d, player, [monster], false, false, fatalityHit, hypnotizeHit, criticalHit, cardWasPlayed);
	
	monsters.updateMonsterStats(monster);

	if(monsters.dying(monster)) {
		if(game.playsounds) sounds.play('death');
	}
	if(monsters.dead(monster)) {
		util.removeMonster(monster);
	}
	
}

function applyBlock(blk, to, ignoreEffects = false) {
	if(to != undefined) {
		let blkActual = blk;
		if(!ignoreEffects) {
			blkActual = blk + to.solid.current;
		}
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

	// don't let rainbow max go negative
	if(to.rainbow.max < 0) {
		to.rainbow.max = 0;
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
	if(type != to.rainbow.type || to.rainbow.type == 'muddled') {
		if(game.playsounds) sounds.play('muddleMagic');
		to.rainbow.type = 'muddled';
		// check for arcane
		if(to.arcane.current > 0) {
			to.rainbow.current += to.arcane.current;
		}
	}

	// apply Magick effects
	let dmg = 2;
	let blk = 3;
	let armor = 2;
	let dmgChaos = 10;
	if(to.amplify?.enabled) {
		dmg = dmg * 2;
		blk = blk * 2;
		armor = armor * 2;
		dmgChaos = dmgChaos * 2;
	}
	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);
	if(to.magick?.enabled) {
		if(to.rainbow.type == 'rainbow') {
			await doDamage(dmg, undefined, currentMonsters, false, false);
		} else if(to.rainbow.type == 'elemental') {
			applyBlock(blk, player);
		} else if(to.rainbow.type == 'dark') {
			applyArmor(armor, player);
		} else if(to.rainbow.type == 'chaos') {
			//let effects = [{effect: 'might', amount: might, turns: 1, hex: true}];
			//await processEffects(effects, currentMonsters);
			let whichMonster = [util.randFromArray(currentMonsters)];
			await doDamage(dmgChaos, undefined, whichMonster, false, false);
		}
		for(let i = 0; i < game.currentMonsters.length; i++) {
			monsters.updateMonsterStats(game.currentMonsters[i]);
			if(monsters.dying(game.currentMonsters[i])) {
				if(game.playsounds) sounds.play('death');
			}
			if(monsters.dead(game.currentMonsters[i])) {
				util.removeMonster(game.currentMonsters[i]);
			}
			if(monsters.allDead()) {
				endCombat();
				return;
			}
		}
	}

	// rainbow hits max, do damage and reset
	if(to.rainbow.current >= to.rainbow.max && to.rainbow.max > 0) {

		await activateRainbow(type, to);

	} else {

		// check for enchanter
		if(to.enchanter.current > 0) {
			//to.sorcery.current += (to.enchanter.current / 10); // removed for balance
			//to.conjure.current += to.enchanter.current;
			to.thunder.current += (to.enchanter.current / 10);
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
		//to.sorcery.current += (to.mage.current / 10);
		to.lightning.current += to.mage.current;
		//to.conjure.current += to.mage.current; // removed for balance
	}

	if(player.cover.current > 0) {
		applyBlock(player.cover.current, player);
	}
	
	to.rainbow.current -= to.rainbow.max;
	let ignoreBlock = to.rainbow.type == 'elemental' ? true : false;
	let ignoreArmor = to.rainbow.type == 'dark' ? true : false;
	let chaosDamage = to.rainbow.type == 'chaos' ? true : false;
	let dmg = chaosDamage ? to.rainbow.max * 3 : to.rainbow.max;
	let magicPower = util.getStatPercentage(to.rainbow.current, to.rainbow.max);

	// lightning and thunder
	let lightning = player.lightning.current;
	let thunder = player.thunder.current;
	if(player.amplify?.enabled) {
		if(lightning > 0) lightning = lightning * 2;
		if(thunder > 1) {
			let thunderBuff = (thunder - 1);
			thunder += thunderBuff;
		}
	}
	dmg += lightning;
	dmg = Math.round(dmg * thunder);

	await game.rainbowAnimations(magicPower);
	//await util.wait(game.animationDelay);

	if(game.playsounds) sounds.play('activateRainbow');

	await util.wait(game.animationDelay);

	let currentMonsters = game.currentMonsters.filter(i => i.dead == false);

	let whichMonster = to.rainbow.type == 'muddled' || to.rainbow.type == 'chaos' ? [util.randFromArray(currentMonsters)] : currentMonsters;

	// check for magic resistance
	dmg = Math.round(dmg - (dmg * whichMonster[0].resistance.current));

	await doDamage(dmg, undefined, whichMonster, ignoreBlock, ignoreArmor);

	// update rainbow magic to overflow type
	to.rainbow.type = type;
	if(to.rainbow.current >= to.rainbow.max && to.rainbow.max > 0) {
		activateRainbow(type, to);
	} else {
		$('.magic-rainbow').addClass('unavailable');
		await util.wait(game.animationGap);
		$('.magic-rainbow').addClass('empty');
		await util.wait(game.animationGap);
		$('.magic-rainbow').removeClass('unavailable empty activated');
		$('.player-cards').removeClass('unavailable');
	}

	// check to see if combat ends
	for(let i = 0; i < game.currentMonsters.length; i++) {
		monsters.updateMonsterStats(game.currentMonsters[i]);
		if(monsters.dying(game.currentMonsters[i])) {
			if(game.playsounds) sounds.play('death');
		}
		if(monsters.dead(game.currentMonsters[i])) {
			util.removeMonster(game.currentMonsters[i]);
		}
		if(monsters.allDead()) {
			endCombat();
			return;
		}
	}

	monsterIntent();

	return magicPower;
}

function applyArmor(arm, to) {
	if(to != undefined) {
		arm = parseFloat(arm);
		if(arm <= 0) return;
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
		dmg = dmg * monster.punch.current;
	}

	dmg = Math.round(dmg);

	await doDamage(dmg, monster, [player]);

	setStatus();

	if(Player().dead(player)) {
		endGame('loss');
	}

}

async function kill(to) {
	to.health.current = 0;
	if(monsters.dying(to)) {
		if(game.playsounds) sounds.play('death');
	}
	if(monsters.dead(to)) {
		util.removeMonster(to);
	}
	if(monsters.allDead()) {
		endCombat();
		return;
	}
}

async function doDamage(dmg, from, to, ignoreBlock = false, ignoreArmor = false, fatalityHit = false, hypnotizeHit = false, criticalHit = false, cardWasPlayed = true) {

	if(to.length > 0) {
		for (let i = 0; i < to.length; i++) {

			// don't process this card if the targeted monster is dead
			// this is possible when a card multi-hits
			if(monsters.dead(to[i])) {
				return
			}

			// stop combat if all monsters are dead
			for(let i = 0; i < game.currentMonsters.length; i++) {
				monsters.updateMonsterStats(game.currentMonsters[i]);
				if(monsters.dying(game.currentMonsters[i])) {
					if(game.playsounds) sounds.play('death');
				}
				if(monsters.dead(game.currentMonsters[i])) {
					util.removeMonster(game.currentMonsters[i]);
				}
				if(monsters.allDead()) {
					endCombat();
					return;
				}
			}

			let thisTo = to[i] == false || to[i] == undefined ? player : to[i];

			let thisDmg = dmg;
			let dmgTaken = 0;
			let armorLost = 0;
			let healthLost = 0;
			let unreachable = false;
			unreachable = thisTo.unreachable?.enabled;
			let tank = thisTo.tank.enabled;

			// check for panic
			if(from?.panic?.enabled) {
				thisDmg += from.block;
				from.block = 0;
			}

			// is player unreachable?
			if(unreachable) {
				if(thisDmg > 0) {
					thisDmg = 1;
				}
				tank = true;
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
					armoredDmg = Math.floor(unblockedDmg / 2);
				}
				// if we have enough armor, reduce armor and health by 50% of damage
				if(!ignoreArmor && armoredDmg <= thisTo.armor && thisTo.armor > 0) {
					armorLost += (armoredDmg + odd);
					dmgTaken += armorLost;
					thisTo.armor -= (armoredDmg + odd);
					// also reduce health if tank is not enabled
					if(!tank) {
						healthLost += armoredDmg;
						dmgTaken += armoredDmg;
						thisTo.health.current -= armoredDmg;
						if(armoredDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && !criticalHit && thisTo.type=='monster') {
							game.highestDmgRoll = armoredDmg;
						}
					}
				} else {
					if(ignoreArmor || thisTo.armor == 0) {
						// full hit
						healthLost += unblockedDmg;
						dmgTaken += unblockedDmg;
						thisTo.health.current -= unblockedDmg;
						if(unblockedDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && !criticalHit && thisTo.type=='monster') {
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
							if(partialDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && !criticalHit && thisTo.type=='monster') {
								game.highestDmgRoll = partialDmg;
							}
						}
						healthLost += fullDmg;
						dmgTaken += fullDmg;
						thisTo.health.current -= fullDmg;
						if(fullDmg > game.highestDmgRoll && !fatalityHit && !hypnotizeHit && !criticalHit && thisTo.type=='monster') {
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
			if(thisTo.armor > thisTo.health.current) thisTo.armor = thisTo.health.current; // this can happen when ignoreArmor == true

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
				if(thisTo.spikes.current > 0 && from != undefined && cardWasPlayed) {

					let spikesDmg = Math.round(thisTo.spikes.current);
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
				if(thisTo.retaliate.current > 0 && from != undefined && cardWasPlayed) {

					let retalDmg = Math.round(thisTo.retaliate.current);
					if(retalDmg < 1) retalDmg = 1;
					
					await doDamage(retalDmg, undefined, [from]);

				}
				// check for resurrect
				if(thisTo.resurrect.enabled) {
					game.toResurrect += 1;
					if(game.playsounds) sounds.play('effect44');
				}

				// check for hardened
				if(thisTo.hardened.current > 0) {
					thisTo.block += thisTo.hardened.current;
				}

				setStatus(false);
				game.message(thisTo.name + ' (' + thisTo.guid + ') loses ' + healthLost + ' health');
			}

			// check again because monster could have died from spikes/retaliate this hit
			for(let i = 0; i < game.currentMonsters.length; i++) {
				monsters.updateMonsterStats(game.currentMonsters[i]);
				if(monsters.dying(game.currentMonsters[i])) {
					if(game.playsounds) sounds.play('death');
				}
				if(monsters.dead(game.currentMonsters[i])) {
					util.removeMonster(game.currentMonsters[i]);
				}
				if(monsters.allDead()) {
					endCombat();
					return;
				}
			}

		}

	}
}


/*
MONSTER LIST

Tier 1:
-------
Pixie
Mummy
Stone Walker
Sludge
Imp


Tier 2:
-------
Shatter
Void Fairy
Enchantress
Power Liche
Iron Walker


Tier 3:
-------
Swarm
Sorcerer
Fel Dragon
Cunning Dragon
Cyberskull


Tier 4:
-------
Transfigurer
Writhing Dragon
Darkness Dragon
Obsidian Walker
Seething Entity


Arena:
------
Ultraumaton
Unmaker
Arch Summoner


Gate:
-----
Frost Guardian
Flame Guardian
Super Frozen Frost Guardian
Super Burning Frost Guardian
Super Frozen Flame Guardian
Super Burning Flame Guardian
*/