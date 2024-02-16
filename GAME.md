
PHASE I: GAME ENGINE PHASE
PHASE II: CREATE ALL EFFECTS, ABILITIES, AND ACTIONS
PHASE III: BALANCE PHASE - CREATE MAP/MONSTERS/TREASURES/CARDS/CANDY
PHASE IV: UI PHASE - INTERACTIONS & ANIMATIONS ARE CREATED AND REFINED
PHASE V: LAUNCH PHASE - TESTING, TUTORIAL, LOADING, SAVING, HIGH SCORES
PHASE VI: QOL IMPROVEMENTS AND SMALL BUG FIXES


PHASE I:

Game Engine - DONE
Gates - DONE


PHASE II:

Future ideas:
Peek: draw the next x cards and retain them for one turn. cards cannot be played this turn
Ability: if you end your turn with unused mana, do something cool - like charge rainbow or something
Card: Consolodate: do dmg plus block plus armor to enemy and lose block and armor
Effect: Frost Mage: when you play a card with an ice shard, do x times number of ice shards attached to card played to all enemies
Effect: Flame Mage: same as frost mage but with flame
Magic Type Attack - does [magic type] stuff to monster, and adds [magic type] magic if matches current magic type
If card doesn't kill, receive that much damage back
Mechanic: treasures that do dmg/armor/block on certain turns
Effect: block, armor, or damage synergies with destroying, discarding, and combining cards
--whenever you exhaust a clutter card, do x damage, gain x block, summon x rainbow, gain x armor, heal x amount, or draw x cards
Effect: each time you take damage, do something (synergizes with exposed strike)
Mechanic: frost guardian should gain health equal to aggro ammount and flame guardian should reduce health equal to aggro level for every card played
Effect: overkill: either adds block or charges rainbow x% of extra damage done after killing a monster
Effect: rainbow type no longer muddles, but instead turns into the magic type of the played card
Ability: mix and match combineable cards which results in a random combined card
Mechanic: increase all card use/expire/linger values
Effect: retrofit resistance so that it can be hexed and go above 1 so specific monsters can be targeted to take more magic damage
Ability: card rewards are now booster pack agnostic (like a prismatic shard)
Action: do damage equal to floor + turn
Ability: heal the current floor number health at the start of arenas and guardians
Ability: languish - take damage each time a card is played equal to number of cards played this combat - have a unique enemy hex this, and also have a really good card have this as its downside
Mechanic: Ability to buy packs of cards mid-combat with courage - the packs get added to the current card pool and are otherwise unaddable
Effect: heal x amount per magic rainbow cycle
Action: play card(s) from draw pile (either random or chosen)
Action: play all attack/magic/tool cards in draw pile and hand
Action: play all cards that have age
Ability: lightning multiplies thunder
Ability: might multiplies punch
Action: can the add card what value be an array so it chooses from random cards? (add random shashes)
Mechanic: do something cool every time you muddle magic so there are more reasons to play risky spells and muddle magic
Effect: Provoked - gain x might each time you play a clutter card
Ability: Luck - small chance to improve all kinds of things - dmg, blk, armor, courage, crit chance, health gain
Ability: (attune? shrewd? studential?) gain random effect/ability at the start of each combat
Action: (card Vulgar Display) gain block equal to your highest damage roll
Mechanic: improve card stat, either permanently (genetic algorithm) or per combat play (claw)
Effect: hex that disallows certain types of cards being played
Action: wild card - percentage chance of doing a bunch of different things
-low chance to have a negative effect and powerful effect, higher chances of things in between happening
Effect: regenerative shield: whenever a card is drawn via a card/candy/treasure gain x block
Effect: Antimatter - whenever antimomentum activates, gain x momentum
Effect: whenever you gain courage, gain x more (via new treasure)
Ability: trade card cost locks in at current rate (via new treasure)
Effect: Medic - heal x every time you gain courage or essence
Ability: impotent - can only play tool cards
Effect: apply x times max rainbow block each time you activate rainbow
Mechanic: wild combine: can be combined with any other combined card - and when combined, add the card that the other card adds.
--there could be multiple wild combine cards, each one doing a special thing when combined




From Tim:
Mechanic: draw a specifically set x amount every turn instead of draw 1 or draw all (so click draw 3 one time instead of click draw 1 three times)
Mechanic: confirm button when playing stance cards



More Quests:
Add special quest card(s) to deck
Gain courage
Choose a card from the current booster pack
Either heal or do something cool (don't think any quests currently heal)
Quests that permanently add clutter to deck (maybe in trade for good things, or just bad quests)
Quest that lets you trade all jabs and blocks for x courage/health/maxhealth per card
Quest: trade increasingly more health to choose one common weapon, or one uncommon weapon, or one rare weapon, or one legendary weapon
Quest: heal to full health, heal to full armor, or gamble for courage
Quest: next combat is peaceful, meaning enemies do half damage
Quest: Snitch - gain agggro for a reward, lose 1 aggro for nothing, lose 2 (or more?) aggro at a cost of health or courage
Quest: trade health any number of times for courage and other things
Quest: decrease aggro


PHASE III:

Create and balance cards - DONE
Create and balance monsters and monster sets - DONE
Create and balance treasure - DONE
Create and balance candy - DONE
Create quests - DONE
Current card counts: 99 total non-pack cards and 46 pack cards (non-legendary, addable, including addable weapons)


PHASE IV:

Graphics - DONE
UI Animations - DONE
Music - DONE
SFX - DONE
Card Prices - DONE


PHASE V:




TODO: why does attuned barrier say "mana: 1" at the top of the description?


Bug/Balance Testing playthroughs
Tutorial	- DONE
Save progress
Record results - use Google Analytics for this?



PHASE VI:

Fine Tuning, Quality of Life fixes, and New Features

Monster hexes punch down but player buffs punch up. New damage amount is larger than original but damage amount color is red - should be green.
Question: if player has might, should draw damage effects have might applied?
Question: should only one hit of a multi-attack card be affected by crit (like how fatality works)?
Question: cutting ring and bottled attack (cards that do damage when drawn) increase crit percentage for each monster each draw - is this wanted?
When playing a card that draws and discards (upgraded recoil) and the drawn card adds a card to hand (surprise attack), added card cannot be discarded
Speech: add speech bubble system to monsters - make it random chance with a set of possible texts
When retaining cards, retain cards shouldn't be selectable
When my machine was super laggy i was able to draw a bunch of cards before ensharden opened the card panel and it didn't decrease my speed


NEW CARDS & TREASURES:
Card: Fancy Prance: 1 block, 1 dmg, 1 armor, draw card(s) for 0 cost
Card: 4, 5, or even 6 cost card that retains (synergizes with aura stance)
Card: Another card that adds slashes - maybe a tool card (like a blade dance)
Card: Card that adds temp lightning/thunder
Card: ? card that adds x number of slashes, sparks, points of might, points of solid, points of lightning
Card: 0 cost vanishing card that adds 1 mana and loses 10 armor - shard upgrade adds 2 mana (rare)
Card: 0 cost vanishing card that adds 1 speed and loses 10 armor - shard upgrade adds 2 mana (rare)
Card: attack/tool/magic cards that add might/punch/lightning/thunder
Card: add a random power to hand
Card: add multiple turns of -might/-punch. currently Stun is the only one that does this.
Card: 2 cost smaller damage attack that adds a large attack 0 cost retain vanishing card
Card: 3 cost large straight-forward damage
Card: common retaining attack (synergizes with wisdom)
Card: remove block and armor from ALL creatures including player
Card: heal player and if at max health, increase max health
Card: ability that increases speed but adds briars
Card: ability that increases mana but adds curses
Card: aoe might/punch down
Card: Ram: do damage equal to current armor, reduce armor by 10%
Card: Cycle pack - draw 2 cards (vanish) - just a straightforward utility card
Card: Big dmg but reduce summon/solid/etc. (like hyperbeam)
Card: Add a random card from the current booster pack to hand
Card: ? card that adds x might
Card: ? card that applies x armor
Card: ? card that heals x amount
Card: ? card that applies x turns of punch hex
Card: ? card that applies x amount of negative might hex
Card: ? super combined card that does several of the above things at once
Card: ? card that does x aoe damange
Card: ? card that adds free cards to hand or draw pile
Card: Ascending Strike - adds the new action that does damage based on floor/turn
Card: Simple tool card that just removes
Card: 3 cost attack that reduces mana cost per shard, and double frost results in 0 cost (double flame results in 0 cost for flame version) - this is 2 cards
Card: magic card that hits multiple times and retains so it synergizes with age
Card: low dmg attack card that heals for amount of hp target monster loses
Card: cycle pack - discard entire hand and draw max speed num of cards
Card: combine pack - destroy entire hand and add 4 battle moves
Card: magic pack - destroy entire hand and summon x aligned magic per card destroyed
Card: non pack - destroy entire hand and do x dmg to target per card destroyed
Card: non pack - destroy entire hand and gain x block per card destroyed
Card: rainbow pack tool card - double your lightning (high cost rare)
Card: rainbow pack tool card - add 2 lightning 0 cost 1 use 1 expire
Card: there are no cards that add clutter other than lemonade type cards - need other cards that are strong but add clutter as a downside
Card: magical slash - summons 1 aligned magic
Card: like reprogram - increase might and solid but decrease magic stuff like conjure/summon (does not vanish)
Card: blank card - becomes a permanent copy of the next card that's played
Card: increase rowdy to 100% chance for one turn - upgraded to 2 turns
Card: reusable tool card that just adds 1 fatality
Card: Dark Synergy - adds antimatter
Card: Hide - gain block but lose might
Card: rainbow pack - do damage or gain temp might equal to max rainbow
Card: rainbow pack - do aoe damage equal to current summoned rainbow amount
Card: combine pack - play a card and then remove it from deck - breakable with use 3
Card: rainbow pack - does your currently charged rainbow amount of damage to a random enemy each turn
Card: gain block but add junk/debris cards to hand
Card: rainbow pack - does x damage to target for every magic card in deck
Card: do 100 damage to everyone in combat
Card: uncommon/rare cards that vanish but permanently hex might/punch a higher amount than whinny/neigh
Card: rare 0 cost - when drawn gain 1 turn of impotent. can only be played if only card in hand. when played do something very good like freeze all enemies and gain might
Card: percentage changes of doing different things
Card: do damage equal to total armor
Card: deal x damage to enemy for each enemy in combat. sharded could either add more damage or turn into aoe
Card: "fodder": when destroyed, do something like dmg/blk and add a copy to your draw pile
Treasure: 3 magic cards per turn adds lightning/thunder
Treasure: 3 attack cards per turn adds punch
Treasure: 3 tool cards per turn adds stout
Treasure: 5 attack cards per turn adds momentum
Treasure: 10 attack cards per combat adds momentum
Treasure: 5 tool cards per turn adds wisdom
Treasure: 5 tool cards per turn adds tank (1 turn)
Treasure: add one random attack/tool/ability/magic card to hand per turn
Treasure: increase momentum every x cards played per turn or combat
Treasure: increase mystery every x cards played per turn or combat
Treasure: common treasure that adds 1 or 2 wisdom
Treasure: +1 mana per turn but add mired and lethargy to draw pile at the beginning of each combat
Treasure: +5 irradiate
Treasure: +20 irradiate on turn 1
Treasure: add Spewnicorn Spray on turn 20 with modifier vanish
Candy: add cards to hand
Candy: increase max health




BUGS [can't replicate]:
BUG: candy that enshardens all cards sharded the permanent deck cards rather than the temp hand cards
BUG: done button ghost showing on subsequent combats - if this happens again, inspect the class of the button because .button-done is hidden on combat end and start
BUG: i was in a fight where i was at 0 health and armor but some block and i didn't die.
BUG: scenario: gold leaf treasure, rest site shard directly into quest (can't remember - think it was remove a card?) into arena
--cards are doubled in the choose enshard card screen at the start of combat, and screen doesn't disappear after enshardening 3 cards
BUG: metamorphose with frost shard - if choose only one card to transmute, the overlay doesn't disappear
BUG: i had -2 aura and then chose to lose 2 aura again and ended up gaining 2 instead
BUG: i chose increase rainbow base from stained glass mirror but the next fight didn't have that base increase (it WAS there on subsequent battles)
BUG: attack card damage is getting reduced to 0 in combats where mystical energy and smash and grab are played, and rainbow has cycled
--also have black vial and magic dust. smash and grab has flame shard and mystical energy has double frost shards
BUG: when purchasing relic at the store, remove card becomes too expensive even if i can still afford it
BUG: battle Sequence was added via a card reward but it wasn't in the view deck cards until after the next combat
BUG: sometimes highest damage roll doesn't update - crit related?