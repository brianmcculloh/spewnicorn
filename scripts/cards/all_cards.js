/*

When you add a card to the game, you need to add an import statement in this file and then add it to the ALL_CARDS_BY_ID object below.

A better option would be to auto-generate this file based on the contents of the card_definitions folder. This would be a good candidate for a webpack plugin.
Basically what you would do to add a new card to the game is add the definition to the card_definitions folder and then run the build command, which would generate this file.

So:

1. Add a new card definition to the card_definitions folder.
2. Run `npm run build`.

*/

import Cards from './Cards.js';

/* ABILITY CARDS */
/* common */

/* uncommon */
import forethought from "./card_definitions/ability_cards/forethought.js";
import midas_touch from "./card_definitions/ability_cards/midas_touch.js";
import metalwork from "./card_definitions/ability_cards/metalwork.js";
import healing_salve from "./card_definitions/ability_cards/healing_salve.js";
import stamina from "./card_definitions/ability_cards/stamina.js";
import enigma_form from "./card_definitions/ability_cards/enigma_form.js";
import robustness from "./card_definitions/ability_cards/robustness.js";
import masterwork from "./card_definitions/ability_cards/masterwork.js";
import violent_rage from "./card_definitions/ability_cards/violent_rage.js";
import repurpose from "./card_definitions/ability_cards/repurpose.js";
import shield_form from "./card_definitions/ability_cards/shield_form.js";
import flywheel from "./card_definitions/ability_cards/flywheel.js";
import vengeance from "./card_definitions/ability_cards/vengeance.js";
import short_temper from "./card_definitions/ability_cards/short_temper.js";
import explosivity from "./card_definitions/ability_cards/explosivity.js";
import cardistry from "./card_definitions/ability_cards/cardistry.js";
import haste from "./card_definitions/ability_cards/haste.js";
import patience from "./card_definitions/ability_cards/patience.js";
import uniformity from "./card_definitions/ability_cards/uniformity.js";
import high_voltage from "./card_definitions/ability_cards/high_voltage.js";
import strange_tail from "./card_definitions/ability_cards/strange_tail.js";
import rebuke from "./card_definitions/ability_cards/rebuke.js";
import non_newtonian from "./card_definitions/ability_cards/non_newtonian.js";
import supernatural from "./card_definitions/ability_cards/supernatural.js";
import layers from "./card_definitions/ability_cards/layers.js";
import emergence from "./card_definitions/ability_cards/emergence.js";
import screen from "./card_definitions/ability_cards/screen.js";
import cycle_barrier from "./card_definitions/ability_cards/cycle_barrier.js";
/* rare */
import bastion from "./card_definitions/ability_cards/bastion.js";
import bodiless_form from "./card_definitions/ability_cards/bodiless_form.js";
import overpowered from "./card_definitions/ability_cards/overpowered.js";
import guzzle from "./card_definitions/ability_cards/guzzle.js";
import prescience from "./card_definitions/ability_cards/prescience.js";
import acuity from "./card_definitions/ability_cards/acuity.js";
import magic_bonus from "./card_definitions/ability_cards/magic_bonus.js";
import magic_multiplier from "./card_definitions/ability_cards/magic_multiplier.js";
import prisma from "./card_definitions/ability_cards/prisma.js";
import storm from "./card_definitions/ability_cards/storm.js";
import renewal from "./card_definitions/ability_cards/renewal.js";
import dark_codex from "./card_definitions/ability_cards/dark_codex.js";
import bolster from "./card_definitions/ability_cards/bolster.js";
import radioactive from "./card_definitions/ability_cards/radioactive.js";
import depthsight from "./card_definitions/ability_cards/depthsight.js";
import blacksmith from "./card_definitions/ability_cards/blacksmith.js";
import dark_knowledge from "./card_definitions/ability_cards/dark_knowledge.js";
import sage from "./card_definitions/ability_cards/sage.js";
import reckless_abandon from "./card_definitions/ability_cards/reckless_abandon.js";
import stance_dance from "./card_definitions/ability_cards/stance_dance.js";
/* legendary */
import euphoria from "./card_definitions/ability_cards/euphoria.js";
import strength_beyond_measure from "./card_definitions/ability_cards/strength_beyond_measure.js";
import colossus from "./card_definitions/ability_cards/colossus.js";
import spectrum from "./card_definitions/ability_cards/spectrum.js";


/* ATTACK CARDS */
/* Common: */
import parry from "./card_definitions/attack_cards/parry.js";
import stomp from "./card_definitions/attack_cards/stomp.js";
import quick_buck from "./card_definitions/attack_cards/quick_buck.js";
import hind_kick from "./card_definitions/attack_cards/hind_kick.js";
import quick_stab from "./card_definitions/attack_cards/quick_stab.js";
import hammer_thrust from "./card_definitions/attack_cards/hammer_thrust.js";
import clever_trick from "./card_definitions/attack_cards/clever_trick.js";
import pierce from "./card_definitions/attack_cards/pierce.js";
import tail_whip from "./card_definitions/attack_cards/tail_whip.js";
import burning_strike from "./card_definitions/attack_cards/burning_strike.js";
import wing_beat from "./card_definitions/attack_cards/wing_beat.js";
import unstable_attack from "./card_definitions/attack_cards/unstable_attack.js";
import hinder_strike from "./card_definitions/attack_cards/hinder_strike.js";
import blitz from "./card_definitions/attack_cards/blitz.js";
import concuss from "./card_definitions/attack_cards/concuss.js";
import ambush from "./card_definitions/attack_cards/ambush.js";
import wing_sweep from "./card_definitions/attack_cards/wing_sweep.js";
import timed_attack from "./card_definitions/attack_cards/timed_attack.js";
import cheap_shot from "./card_definitions/attack_cards/cheap_shot.js";
/* Uncommon: */
import stampede from "./card_definitions/attack_cards/stampede.js";
import spin_kick from "./card_definitions/attack_cards/spin_kick.js";
import exposed_strike from "./card_definitions/attack_cards/exposed_strike.js";
import familiar_strike from "./card_definitions/attack_cards/familiar_strike.js";
import frenzied_charge from "./card_definitions/attack_cards/frenzied_charge.js";
import rainbow_thrust from "./card_definitions/attack_cards/rainbow_thrust.js";
import chaos_thrust from "./card_definitions/attack_cards/chaos_thrust.js";
import elemental_thrust from "./card_definitions/attack_cards/elemental_thrust.js";
import dark_thrust from "./card_definitions/attack_cards/dark_thrust.js";
import arsenal from "./card_definitions/attack_cards/arsenal.js";
import smash_and_grab from "./card_definitions/attack_cards/smash_and_grab.js";
import fury from "./card_definitions/attack_cards/fury.js";
import premeditated_slash from "./card_definitions/attack_cards/premeditated_slash.js";
import collateral_damage from "./card_definitions/attack_cards/collateral_damage.js";
import surprise_attack from "./card_definitions/attack_cards/surprise_attack.js";
import auto_attack from "./card_definitions/attack_cards/auto_attack.js";
import sudden_barrage from "./card_definitions/attack_cards/sudden_barrage.js";
import provisioned_attack from "./card_definitions/attack_cards/provisioned_attack.js";
import thwack from "./card_definitions/attack_cards/thwack.js";
/* Rare: */
import devastator from "./card_definitions/attack_cards/devastator.js";
import weaponry from "./card_definitions/attack_cards/weaponry.js";
import amass from "./card_definitions/attack_cards/amass.js";
import berserk from "./card_definitions/attack_cards/berserk.js";
import clever_barrage from "./card_definitions/attack_cards/clever_barrage.js";
import freeze from "./card_definitions/attack_cards/freeze.js";
import scorch from "./card_definitions/attack_cards/scorch.js";
import ultra_kill from "./card_definitions/attack_cards/ultra_kill.js";
import auxiliary_kill from "./card_definitions/attack_cards/auxiliary_kill.js";
import mega_kill from "./card_definitions/attack_cards/mega_kill.js";
import disintegrate from "./card_definitions/attack_cards/disintegrate.js";
import obliterate from "./card_definitions/attack_cards/obliterate.js";
/* Legendary: */
import death_blow from "./card_definitions/attack_cards/death_blow.js";
import overwhelming_barrage from "./card_definitions/attack_cards/overwhelming_barrage.js";
import critical_hit from "./card_definitions/attack_cards/critical_hit.js";
import erupt from "./card_definitions/attack_cards/erupt.js";
import monster_kill from "./card_definitions/attack_cards/monster_kill.js";
import malevolent_blow from "./card_definitions/attack_cards/malevolent_blow.js";

/* MAGIC CARDS */
/* common */
import rainbow_charge from "./card_definitions/magic_cards/rainbow_charge.js";
import chaos_charge from "./card_definitions/magic_cards/chaos_charge.js";
import dark_charge from "./card_definitions/magic_cards/dark_charge.js";
import elemental_charge from "./card_definitions/magic_cards/elemental_charge.js";
import risky_charge from "./card_definitions/magic_cards/risky_charge.js";
import aligned_charge from "./card_definitions/magic_cards/aligned_charge.js";
import delayed_charge from "./card_definitions/magic_cards/delayed_charge.js";
import sacrificial_charge from "./card_definitions/magic_cards/sacrificial_charge.js";
import risky_charm from "./card_definitions/magic_cards/risky_charm.js";
import rainbow_charm from "./card_definitions/magic_cards/rainbow_charm.js";
import chaos_charm from "./card_definitions/magic_cards/chaos_charm.js";
import dark_charm from "./card_definitions/magic_cards/dark_charm.js";
import elemental_charm from "./card_definitions/magic_cards/elemental_charm.js";
import beautiful_spell from "./card_definitions/magic_cards/beautiful_spell.js";
import delightful_spell from "./card_definitions/magic_cards/delightful_spell.js";
import wonderful_spell from "./card_definitions/magic_cards/wonderful_spell.js";
import sparkling_rainbow_spell from "./card_definitions/magic_cards/sparkling_rainbow_spell.js";
import shimmering_rainbow_spell from "./card_definitions/magic_cards/shimmering_rainbow_spell.js";
import luminous_rainbow_spell from "./card_definitions/magic_cards/luminous_rainbow_spell.js";
import flash_of_magic from "./card_definitions/magic_cards/flash_of_magic.js";
/* uncommon */
import aligned_charm from "./card_definitions/magic_cards/aligned_charm.js";
import grow from "./card_definitions/magic_cards/grow.js";
import focus from "./card_definitions/magic_cards/focus.js";
import mystical_protection from "./card_definitions/magic_cards/mystical_protection.js";
import metamorphose from "./card_definitions/magic_cards/metamorphose.js";
import cryptic_rune from "./card_definitions/magic_cards/cryptic_rune.js";
import magical_maneuver from "./card_definitions/magic_cards/magical_maneuver.js";
import recaster from "./card_definitions/magic_cards/recaster.js";
import bloom from "./card_definitions/magic_cards/bloom.js";
import fire_spell from "./card_definitions/magic_cards/fire_spell.js";
import ice_spell from "./card_definitions/magic_cards/ice_spell.js";
import delayed_spell from "./card_definitions/magic_cards/delayed_spell.js";
import sacrificial_spell from "./card_definitions/magic_cards/sacrificial_spell.js";
import magic_flare from "./card_definitions/magic_cards/magic_flare.js";
/* rare */
import risky_incantation from "./card_definitions/magic_cards/risky_incantation.js";
import maelstrom from "./card_definitions/magic_cards/maelstrom.js";
import master_summoner from "./card_definitions/magic_cards/master_summoner.js";
import master_sorcerer from "./card_definitions/magic_cards/master_sorcerer.js";
import master_conjurer from "./card_definitions/magic_cards/master_conjurer.js";
import secret_arts from "./card_definitions/magic_cards/secret_arts.js";
import dazzle from "./card_definitions/magic_cards/dazzle.js";
import razzle from "./card_definitions/magic_cards/razzle.js";
import master_of_all from "./card_definitions/magic_cards/master_of_all.js";
import mystical_energy from "./card_definitions/magic_cards/mystical_energy.js";
import mystical_maneuver from "./card_definitions/magic_cards/mystical_maneuver.js";
import vortex from "./card_definitions/magic_cards/vortex.js";
import ancient_runestone from "./card_definitions/magic_cards/ancient_runestone.js";
import fleeting_incantation from "./card_definitions/magic_cards/fleeting_incantation.js";
import obelisk from "./card_definitions/magic_cards/obelisk.js";
/* legendary */
import annihilation from "./card_definitions/magic_cards/annihilation.js";
import flare_up from "./card_definitions/magic_cards/flare_up.js";
import legion from "./card_definitions/magic_cards/legion.js";
import ignite from "./card_definitions/magic_cards/ignite.js";
import perfect_storm from "./card_definitions/magic_cards/perfect_storm.js";
import eternal_runestone from "./card_definitions/magic_cards/eternal_runestone.js";

/* NON-ADDABLE CARDS */
/* Starting Cards: */
import jab from "./card_definitions/non-addable_cards/jab.js";
import shield from "./card_definitions/non-addable_cards/shield.js";
import leather_armor from "./card_definitions/non-addable_cards/leather_armor.js";
import stun from "./card_definitions/non-addable_cards/stun.js";
import rainbow_orb from "./card_definitions/non-addable_cards/rainbow_orb.js";
/* Cards Added By Other Cards/Events: */
import aura_stance from "./card_definitions/non-addable_cards/aura_stance.js";
import sparkle_stance from "./card_definitions/non-addable_cards/sparkle_stance.js";
import shimmer_stance from "./card_definitions/non-addable_cards/shimmer_stance.js";
import shimmer from "./card_definitions/non-addable_cards/shimmer.js";
import sparkle from "./card_definitions/non-addable_cards/sparkle.js";
import aura from "./card_definitions/non-addable_cards/aura.js";
import courage from "./card_definitions/non-addable_cards/courage.js";
import familiar_agony from "./card_definitions/non-addable_cards/familiar_agony.js";
import slash from "./card_definitions/non-addable_cards/slash.js";
import fleeting_slash from "./card_definitions/non-addable_cards/fleeting_slash.js";
import lingering_slash from "./card_definitions/non-addable_cards/lingering_slash.js";
import momentous_slash from "./card_definitions/non-addable_cards/momentous_slash.js";
import safety from "./card_definitions/non-addable_cards/safety.js";
import energize from "./card_definitions/non-addable_cards/energize.js";
import boost from "./card_definitions/non-addable_cards/boost.js";
import auxiliary from "./card_definitions/non-addable_cards/auxiliary.js";
import impresa from "./card_definitions/non-addable_cards/impresa.js";
import ouroboros from "./card_definitions/non-addable_cards/ouroboros.js";
import tesseract from "./card_definitions/non-addable_cards/tesseract.js";
import battle_move from "./card_definitions/non-addable_cards/battle_move.js";
import battle_combo from "./card_definitions/non-addable_cards/battle_combo.js";
import battle_sequence from "./card_definitions/non-addable_cards/battle_sequence.js";
import battle_finisher from "./card_definitions/non-addable_cards/battle_finisher.js";
import self_enhance from "./card_definitions/non-addable_cards/self_enhance.js";
import self_advance from "./card_definitions/non-addable_cards/self_advance.js";
import self_fulfill from "./card_definitions/non-addable_cards/self_fulfill.js";
import rainbow_converter from "./card_definitions/non-addable_cards/rainbow_converter.js";
import chaos_converter from "./card_definitions/non-addable_cards/chaos_converter.js";
import dark_converter from "./card_definitions/non-addable_cards/dark_converter.js";
import elemental_converter from "./card_definitions/non-addable_cards/elemental_converter.js";
import sparks from "./card_definitions/non-addable_cards/sparks.js";
import bottled_speed from "./card_definitions/non-addable_cards/bottled_speed.js";
import bottled_energy from "./card_definitions/non-addable_cards/bottled_energy.js";
import bottled_armor from "./card_definitions/non-addable_cards/bottled_armor.js";
import bottled_block from "./card_definitions/non-addable_cards/bottled_block.js";
import bottled_attack from "./card_definitions/non-addable_cards/bottled_attack.js";
import bottled_cards from "./card_definitions/non-addable_cards/bottled_cards.js";
import bottled_magic from "./card_definitions/non-addable_cards/bottled_magic.js";
import release from "./card_definitions/non-addable_cards/release.js";
import acquire from "./card_definitions/non-addable_cards/acquire.js";
import dismantle from "./card_definitions/non-addable_cards/dismantle.js";
import atomic from "./card_definitions/non-addable_cards/atomic.js";
import nuclear from "./card_definitions/non-addable_cards/nuclear.js";
import head_shot from "./card_definitions/non-addable_cards/head_shot.js";
import thrash from "./card_definitions/non-addable_cards/thrash.js";
import forestall from "./card_definitions/non-addable_cards/forestall.js";
import evade from "./card_definitions/non-addable_cards/evade.js";
import blaze_of_magic from "./card_definitions/non-addable_cards/blaze_of_magic.js";
import magic_burst from "./card_definitions/non-addable_cards/magic_burst.js";
import spewnicorn_spray from "./card_definitions/non-addable_cards/spewnicorn_spray.js";
/* Clutter: */
import junk from "./card_definitions/non-addable_cards/junk.js";
import debris from "./card_definitions/non-addable_cards/debris.js";
import chaff from "./card_definitions/non-addable_cards/chaff.js";
import gunk from "./card_definitions/non-addable_cards/gunk.js";
import execrate from "./card_definitions/non-addable_cards/execrate.js";
import flay from "./card_definitions/non-addable_cards/flay.js";
import curse from "./card_definitions/non-addable_cards/curse.js";
import timid from "./card_definitions/non-addable_cards/timid.js";
import lethargy from "./card_definitions/non-addable_cards/lethargy.js";
import briars from "./card_definitions/non-addable_cards/briars.js";
import broken from "./card_definitions/non-addable_cards/broken.js";
import mired from "./card_definitions/non-addable_cards/mired.js";


/* TOOL CARDS */
/* Common: */
import divert from "./card_definitions/tool_cards/divert.js";
import recoil from "./card_definitions/tool_cards/recoil.js";
import repel from "./card_definitions/tool_cards/repel.js";
import thwart from "./card_definitions/tool_cards/thwart.js";
import deter from "./card_definitions/tool_cards/deter.js";
import chain_mail_armor from "./card_definitions/tool_cards/chain_mail_armor.js";
import cleanse from "./card_definitions/tool_cards/cleanse.js";
import remember from "./card_definitions/tool_cards/remember.js";
import glowing_orb from "./card_definitions/tool_cards/glowing_orb.js";
import fractured_orb from "./card_definitions/tool_cards/fractured_orb.js";
import plate_armor from "./card_definitions/tool_cards/plate_armor.js";
import fleeting_shelter from "./card_definitions/tool_cards/fleeting_shelter.js";
import fleeting_shield from "./card_definitions/tool_cards/fleeting_shield.js";
import nullify from "./card_definitions/tool_cards/nullify.js";
import neigh from "./card_definitions/tool_cards/neigh.js";
import whinny from "./card_definitions/tool_cards/whinny.js";
import death_stare from "./card_definitions/tool_cards/death_stare.js";
import fortify from "./card_definitions/tool_cards/fortify.js";
import hardened_feathers from "./card_definitions/tool_cards/hardened_feathers.js";
import attuned_barrier from "./card_definitions/tool_cards/attuned_barrier.js";
import charged_barrier from "./card_definitions/tool_cards/charged_barrier.js";
import fissile from "./card_definitions/tool_cards/fissile.js";
import sidestep from "./card_definitions/tool_cards/sidestep.js";
/* Uncommon: */
import fortress from "./card_definitions/tool_cards/fortress.js";
import safeguard from "./card_definitions/tool_cards/safeguard.js";
import gallop from "./card_definitions/tool_cards/gallop.js";
import sprint from "./card_definitions/tool_cards/sprint.js";
import gift from "./card_definitions/tool_cards/gift.js";
import sacrifice from "./card_definitions/tool_cards/sacrifice.js";
import purge from "./card_definitions/tool_cards/purge.js";
import scavenge from "./card_definitions/tool_cards/scavenge.js";
import gears_of_war from "./card_definitions/tool_cards/gears_of_war.js";
import beautiful from "./card_definitions/tool_cards/beautiful.js";
import delightful from "./card_definitions/tool_cards/delightful.js";
import wonderful from "./card_definitions/tool_cards/wonderful.js";
import bravery from "./card_definitions/tool_cards/bravery.js";
import clever_maneuver from "./card_definitions/tool_cards/clever_maneuver.js";
import riffle from "./card_definitions/tool_cards/riffle.js";
import collect from "./card_definitions/tool_cards/collect.js";
import entity from "./card_definitions/tool_cards/entity.js";
import unstable_field from "./card_definitions/tool_cards/unstable_field.js";
import disavow from "./card_definitions/tool_cards/disavow.js";
import ruin from "./card_definitions/tool_cards/ruin.js";
import make_ready from "./card_definitions/tool_cards/make_ready.js";
import cutting_ring from "./card_definitions/tool_cards/cutting_ring.js";
import distracting_ring from "./card_definitions/tool_cards/distracting_ring.js";
import jester from "./card_definitions/tool_cards/jester.js";
import strange_mushroom from "./card_definitions/tool_cards/strange_mushroom.js";
import target from "./card_definitions/tool_cards/target.js";
import frost_armor from "./card_definitions/tool_cards/frost_armor.js";
import flame_armor from "./card_definitions/tool_cards/flame_armor.js";
import garrison from "./card_definitions/tool_cards/garrison.js";
import elude from "./card_definitions/tool_cards/elude.js";
/* Rare: */
import bulwark from "./card_definitions/tool_cards/bulwark.js";
import steel_hide from "./card_definitions/tool_cards/steel_hide.js";
import reactor from "./card_definitions/tool_cards/reactor.js";
import power_surge from "./card_definitions/tool_cards/power_surge.js";
import enrich from "./card_definitions/tool_cards/enrich.js";
import trade_up from "./card_definitions/tool_cards/trade_up.js";
import tactics from "./card_definitions/tool_cards/tactics.js";
import unearth from "./card_definitions/tool_cards/unearth.js";
import blockade from "./card_definitions/tool_cards/blockade.js";
import mezmerize from "./card_definitions/tool_cards/mezmerize.js";
import elite_maneuver from "./card_definitions/tool_cards/elite_maneuver.js";
import expunge from "./card_definitions/tool_cards/expunge.js";
import mysterious_fissure from "./card_definitions/tool_cards/mysterious_fissure.js";
import thresh from "./card_definitions/tool_cards/thresh.js";
import charge from "./card_definitions/tool_cards/charge.js";
import surge from "./card_definitions/tool_cards/surge.js";
import roar from "./card_definitions/tool_cards/roar.js";
import superstorm from "./card_definitions/tool_cards/superstorm.js";
import cloudburst from "./card_definitions/tool_cards/cloudburst.js";
import purify from "./card_definitions/tool_cards/purify.js";
import forbid from "./card_definitions/tool_cards/forbid.js";
import weaponsmith from "./card_definitions/tool_cards/weaponsmith.js";
import scholar from "./card_definitions/tool_cards/scholar.js";
import paralyzing_touch from "./card_definitions/tool_cards/paralyzing_touch.js";
import blitzkrieg from "./card_definitions/tool_cards/blitzkrieg.js";
import cascade from "./card_definitions/tool_cards/cascade.js";
import blank_slate from "./card_definitions/tool_cards/blank_slate.js";
import seeing_ring from "./card_definitions/tool_cards/seeing_ring.js";
/* Legendary */
import crippling_stare from "./card_definitions/tool_cards/crippling_stare.js";
import citadel from "./card_definitions/tool_cards/citadel.js";
import everarmor from "./card_definitions/tool_cards/everarmor.js";
import adrenaline_rush from "./card_definitions/tool_cards/adrenaline_rush.js";
import untold_contract from "./card_definitions/tool_cards/untold_contract.js";
import myriad from "./card_definitions/tool_cards/myriad.js";

/* WEAPONS */
import rusty_dagger from "./card_definitions/weapons/rusty_dagger.js";
import polished_dagger from "./card_definitions/weapons/polished_dagger.js";
import piercer from "./card_definitions/weapons/piercer.js";
import shredder from "./card_definitions/weapons/shredder.js";
import stormknife from "./card_definitions/weapons/stormknife.js";
import shiv_of_the_abyss from "./card_definitions/weapons/shiv_of_the_abyss.js";
import wooden_sword from "./card_definitions/weapons/wooden_sword.js";
import broadsword from "./card_definitions/weapons/broadsword.js";
import hardened_steel from "./card_definitions/weapons/hardened_steel.js";
import champions_cutlass from "./card_definitions/weapons/champions_cutlass.js";
import glacial_blade from "./card_definitions/weapons/glacial_blade.js";
import nightfury from "./card_definitions/weapons/nightfury.js";
import loggers_axe from "./card_definitions/weapons/loggers_axe.js";
import battle_axe from "./card_definitions/weapons/battle_axe.js";
import throwing_axe from "./card_definitions/weapons/throwing_axe.js";
import swift_battle_axe from "./card_definitions/weapons/swift_battle_axe.js";
import sharpened_axe from "./card_definitions/weapons/sharpened_axe.js";
import cleave from "./card_definitions/weapons/cleave.js";
import redfury from "./card_definitions/weapons/redfury.js";
import forge from "./card_definitions/weapons/forge.js";
import dragons_bane from "./card_definitions/weapons/dragons_bane.js";
import endless_edge from "./card_definitions/weapons/endless_edge.js";
import deathmaker from "./card_definitions/weapons/deathmaker.js";
import old_hammer from "./card_definitions/weapons/old_hammer.js";
import reinforced_hammer from "./card_definitions/weapons/reinforced_hammer.js";
import tungsten_hammer from "./card_definitions/weapons/tungsten_hammer.js";
import molten_hammer from "./card_definitions/weapons/molten_hammer.js";
import hammer_of_justice from "./card_definitions/weapons/hammer_of_justice.js";
import gravitas from "./card_definitions/weapons/gravitas.js";
import firmament_mover from "./card_definitions/weapons/firmament_mover.js";
import singing_mallet from "./card_definitions/weapons/singing_mallet.js";
import blunt_pike from "./card_definitions/weapons/blunt_pike.js";
import serrated_pike from "./card_definitions/weapons/serrated_pike.js";
import ancient_spear from "./card_definitions/weapons/ancient_spear.js";
import runed_bayonet from "./card_definitions/weapons/runed_bayonet.js";
import cursed_spike from "./card_definitions/weapons/cursed_spike.js";
import frozen_harpoon from "./card_definitions/weapons/frozen_harpoon.js";
import ornate_javelin from "./card_definitions/weapons/ornate_javelin.js";
import double_headed_lance from "./card_definitions/weapons/double_headed_lance.js";
import farmers_scythe from "./card_definitions/weapons/farmers_scythe.js";
import crescentblade from "./card_definitions/weapons/crescentblade.js";
import sharpened_scythe from "./card_definitions/weapons/sharpened_scythe.js";
import blackblade from "./card_definitions/weapons/blackblade.js";
import spiked_scythe from "./card_definitions/weapons/spiked_scythe.js";
import greenshears from "./card_definitions/weapons/greenshears.js";
import glowscythe from "./card_definitions/weapons/glowscythe.js";
import bonesaw from "./card_definitions/weapons/bonesaw.js";
import treecleaver from "./card_definitions/weapons/treecleaver.js";
import mantleblight from "./card_definitions/weapons/mantleblight.js";
import armyfeller from "./card_definitions/weapons/armyfeller.js";
import reaper from "./card_definitions/weapons/reaper.js";
import fleeting_deathblade from "./card_definitions/weapons/fleeting_deathblade.js";
import hickory_wand from "./card_definitions/weapons/hickory_wand.js";
import walnut_wand from "./card_definitions/weapons/walnut_wand.js";
import black_oak_wand from "./card_definitions/weapons/black_oak_wand.js";
import hooked_wand from "./card_definitions/weapons/hooked_wand.js";
import glowing_wand from "./card_definitions/weapons/glowing_wand.js";
import glowing_sceptre from "./card_definitions/weapons/glowing_sceptre.js";
import darkfeather from "./card_definitions/weapons/darkfeather.js";
import heart_of_chaos from "./card_definitions/weapons/heart_of_chaos.js";
import evernature from "./card_definitions/weapons/evernature.js";
import arcana_prismatica from "./card_definitions/weapons/arcana_prismatica.js";
import crooked_staff from "./card_definitions/weapons/crooked_staff.js";
import twisted_staff from "./card_definitions/weapons/twisted_staff.js";
import slotted_staff from "./card_definitions/weapons/slotted_staff.js";
import carved_staff from "./card_definitions/weapons/carved_staff.js";
import gold_staff from "./card_definitions/weapons/gold_staff.js";
import green_staff from "./card_definitions/weapons/green_staff.js";
import purple_staff from "./card_definitions/weapons/purple_staff.js";
import sapphire_staff from "./card_definitions/weapons/sapphire_staff.js";
import emerald_staff from "./card_definitions/weapons/emerald_staff.js";
import ruby_staff from "./card_definitions/weapons/ruby_staff.js";
import emanating_staff from "./card_definitions/weapons/emanating_staff.js";
import shuddering_staff from "./card_definitions/weapons/shuddering_staff.js";
import quaking_staff from "./card_definitions/weapons/quaking_staff.js";
import runemark from "./card_definitions/weapons/runemark.js";
import darksphere from "./card_definitions/weapons/darksphere.js";
import staff_of_wonder from "./card_definitions/weapons/staff_of_wonder.js";
import skycaller from "./card_definitions/weapons/skycaller.js";
import windrift from "./card_definitions/weapons/windrift.js";
import ember from "./card_definitions/weapons/ember.js";
import deepcore from "./card_definitions/weapons/deepcore.js";
import felcrystal from "./card_definitions/weapons/felcrystal.js";
import burning_branch from "./card_definitions/weapons/burning_branch.js";
import flaming_torch from "./card_definitions/weapons/flaming_torch.js";
import blazing_torch from "./card_definitions/weapons/blazing_torch.js";
import strangefire from "./card_definitions/weapons/strangefire.js";
import lumenfire from "./card_definitions/weapons/lumenfire.js";
import endless_light from "./card_definitions/weapons/endless_light.js";
import dreadfurnace from "./card_definitions/weapons/dreadfurnace.js";


const ALL_CARDS_BY_ID = {
  forethought,
  midas_touch,
  metalwork,
  healing_salve,
  stamina,
  enigma_form,
  robustness,
  masterwork,
  violent_rage,
  repurpose,
  shield_form,
  flywheel,
  vengeance,
  short_temper,
  explosivity,
  cardistry,
  haste,
  patience,
  uniformity,
  high_voltage,
  strange_tail,
  rebuke,
  non_newtonian,
  supernatural,
  layers,
  emergence,
  screen,
  cycle_barrier,
  bastion,
  bodiless_form,
  overpowered,
  guzzle,
  prescience,
  acuity,
  magic_bonus,
  magic_multiplier,
  prisma,
  storm,
  renewal,
  dark_codex,
  bolster,
  radioactive,
  depthsight,
  blacksmith,
  dark_knowledge,
  sage,
  reckless_abandon,
  stance_dance,
  euphoria,
  strength_beyond_measure,
  colossus,
  spectrum,

  parry,
  stomp,
  quick_buck,
  hind_kick,
  quick_stab,
  hammer_thrust,
  clever_trick,
  pierce,
  tail_whip,
  burning_strike,
  wing_beat,
  unstable_attack,
  hinder_strike,
  blitz,
  concuss,
  ambush,
  wing_sweep,
  timed_attack,
  cheap_shot,
  stampede,
  spin_kick,
  exposed_strike,
  familiar_strike,
  frenzied_charge,
  rainbow_thrust,
  chaos_thrust,
  elemental_thrust,
  dark_thrust,
  arsenal,
  smash_and_grab,
  fury,
  premeditated_slash,
  collateral_damage,
  surprise_attack,
  auto_attack,
  sudden_barrage,
  provisioned_attack,
  thwack,
  devastator,
  weaponry,
  amass,
  berserk,
  clever_barrage,
  freeze,
  scorch,
  ultra_kill,
  auxiliary_kill,
  mega_kill,
  disintegrate,
  obliterate,
  death_blow,
  overwhelming_barrage,
  critical_hit,
  erupt,
  monster_kill,
  malevolent_blow,

  rainbow_charge,
  chaos_charge,
  dark_charge,
  elemental_charge,
  risky_charge,
  aligned_charge,
  delayed_charge,
  sacrificial_charge,
  risky_charm,
  rainbow_charm,
  chaos_charm,
  dark_charm,
  elemental_charm,
  beautiful_spell,
  delightful_spell,
  wonderful_spell,
  sparkling_rainbow_spell,
  shimmering_rainbow_spell,
  luminous_rainbow_spell,
  flash_of_magic,
  aligned_charm,
  grow,
  focus,
  mystical_protection,
  metamorphose,
  cryptic_rune,
  magical_maneuver,
  recaster,
  bloom,
  fire_spell,
  ice_spell,
  delayed_spell,
  sacrificial_spell,
  magic_flare,
  risky_incantation,
  maelstrom,
  master_summoner,
  master_sorcerer,
  master_conjurer,
  secret_arts,
  dazzle,
  razzle,
  master_of_all,
  mystical_energy,
  mystical_maneuver,
  vortex,
  ancient_runestone,
  fleeting_incantation,
  obelisk,
  annihilation,
  flare_up,
  legion,
  ignite,
  perfect_storm,
  eternal_runestone,


  divert,
  recoil,
  repel,
  thwart,
  deter,
  chain_mail_armor,
  cleanse,
  remember,
  glowing_orb,
  fractured_orb,
  plate_armor,
  fleeting_shelter,
  fleeting_shield,
  nullify,
  neigh,
  whinny,
  death_stare,
  fortify,
  hardened_feathers,
  attuned_barrier,
  charged_barrier,
  fissile,
  sidestep,
  fortress,
  safeguard,
  gallop,
  sprint,
  gift,
  sacrifice,
  purge,
  scavenge,
  gears_of_war,
  beautiful,
  delightful,
  wonderful,
  bravery,
  clever_maneuver,
  riffle,
  collect,
  entity,
  unstable_field,
  disavow,
  ruin,
  make_ready,
  cutting_ring,
  distracting_ring,
  jester,
  strange_mushroom,
  target,
  frost_armor,
  flame_armor,
  garrison,
  elude,
  bulwark,
  steel_hide,
  reactor,
  power_surge,
  enrich,
  trade_up,
  tactics,
  unearth,
  blockade,
  mezmerize,
  elite_maneuver,
  expunge,
  mysterious_fissure,
  thresh,
  charge,
  surge,
  roar,
  superstorm,
  cloudburst,
  purify,
  forbid,
  weaponsmith,
  scholar,
  paralyzing_touch,
  blitzkrieg,
  cascade,
  blank_slate,
  seeing_ring,
  crippling_stare,
  citadel,
  everarmor,
  adrenaline_rush,
  untold_contract,
  myriad,

  rusty_dagger,
  polished_dagger,
  piercer,
  shredder,
  stormknife,
  shiv_of_the_abyss,
  wooden_sword,
  broadsword,
  hardened_steel,
  champions_cutlass,
  glacial_blade,
  nightfury,
  loggers_axe,
  battle_axe,
  throwing_axe,
  swift_battle_axe,
  sharpened_axe,
  cleave,
  redfury,
  forge,
  dragons_bane,
  endless_edge,
  deathmaker,
  old_hammer,
  reinforced_hammer,
  tungsten_hammer,
  molten_hammer,
  hammer_of_justice,
  gravitas,
  firmament_mover,
  singing_mallet,
  blunt_pike,
  serrated_pike,
  ancient_spear,
  runed_bayonet,
  cursed_spike,
  frozen_harpoon,
  ornate_javelin,
  double_headed_lance,
  farmers_scythe,
  crescentblade,
  sharpened_scythe,
  blackblade,
  spiked_scythe,
  greenshears,
  glowscythe,
  bonesaw,
  treecleaver,
  mantleblight,
  armyfeller,
  reaper,
  fleeting_deathblade,
  hickory_wand,
  walnut_wand,
  black_oak_wand,
  hooked_wand,
  glowing_wand,
  glowing_sceptre,
  darkfeather,
  heart_of_chaos,
  evernature,
  arcana_prismatica,
  crooked_staff,
  twisted_staff,
  slotted_staff,
  carved_staff,
  gold_staff,
  green_staff,
  purple_staff,
  sapphire_staff,
  emerald_staff,
  ruby_staff,
  emanating_staff,
  shuddering_staff,
  quaking_staff,
  runemark,
  darksphere,
  staff_of_wonder,
  skycaller,
  windrift,
  ember,
  deepcore,
  felcrystal,
  burning_branch,
  flaming_torch,
  blazing_torch,
  strangefire,
  lumenfire,
  endless_light,
  dreadfurnace,

  jab,
  shield,
  leather_armor,
  stun,
  rainbow_orb,
  aura_stance,
  sparkle_stance,
  shimmer_stance,
  shimmer,
  sparkle,
  aura,
  courage,
  familiar_agony,
  slash,
  fleeting_slash,
  lingering_slash,
  momentous_slash,
  safety,
  energize,
  boost,
  auxiliary,
  impresa,
  ouroboros,
  tesseract,
  battle_move,
  battle_combo,
  battle_sequence,
  battle_finisher,
  self_enhance,
  self_advance,
  self_fulfill,
  rainbow_converter,
  chaos_converter,
  dark_converter,
  elemental_converter,
  sparks,
  bottled_speed,
  bottled_energy,
  bottled_armor,
  bottled_block,
  bottled_attack,
  bottled_cards,
  bottled_magic,
  release,
  acquire,
  dismantle,
  atomic,
  nuclear,
  head_shot,
  thrash,
  forestall,
  evade,
  blaze_of_magic,
  magic_burst,
  spewnicorn_spray,
  junk,
  debris,
  chaff,
  gunk,
  execrate,
  flay,
  curse,
  timid,
  lethargy,
  briars,
  broken,
  mired,
};

const ALL_CARDS = Object.values(ALL_CARDS_BY_ID).map(card => new Cards(card));

export { ALL_CARDS, ALL_CARDS_BY_ID };