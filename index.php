<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php date_default_timezone_set('America/New_York'); ?>
<html xmlns="http://www.w3.org/1999/xhtml">

<head profile="http://gmpg.org/xfn/11">

<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>The Spewnicorn | Spewnicorn Games</title>

<!-- begin style -->

<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="vendor/jquery.powertip.min.js"></script>
<script type="text/javascript" src="vendor/howler.core.min.js"></script>
<!-- <script type="module" src="bundle.js"></script> -->
<script type="module" src="script.js"></script>


</head>

<body>

  <div id="game-loading">

    <div class="game-loading-bar">

      <div class="game-loading-progress"><div class="glow"></div></div>

    </div>

  </div>

  <div id="splash" class="game-panel shown">

    <div class="splash-column">

      <div class="logo"><img src="./images/logo.png" /></div>

      <?php /* <h2>The Spewnicorn</h2> */ ?>

      <div class="panel settings-panel">

        <div class="button music toggled-on">Music<span>On</span></div>
        <div class="button sound toggled-on">Sounds<span>On</span></div>
        <div class="button tutorial">Tutorial<span>Off</span></div>

        <div class="difficulties">
          <div class="button difficulty tooltip easy" data-difficulty="easy" data-powertip="1 arena required per map, start with a <span class='highlight'>Spewnicorn Spray</span> card, reduced aggro, heal to full after gates, extra magic fountains and quests, and start with 100 max health.">Easy</span></div>
          <div class="button difficulty tooltip medium toggled-on" data-difficulty="medium" data-powertip="2 arenas required per map, do not start with a <span class='highlight'>Spewnicorn Spray</span> card, standard amount of magic fountains and quests, and start with 75 max health.">Medium</span></div>
          <div class="button difficulty tooltip hard" data-difficulty="hard" data-powertip="No healing after gates, reduced number of magic fountains and quests, and start with 65 max health.">Hard</span></div>
          <div class="button difficulty tooltip expert" data-difficulty="expert" data-powertip="+2 damage to all enemy attacks, +5 to all enemy block, and start with 55 max health.">Expert</span></div>
          <div class="button difficulty tooltip nightmare" data-difficulty="nightmare" data-powertip="3 arenas required per map, visiting magic fountains and quests increases aggro, shards and candies are rarer, +10% damage to all enemy attacks, and aggro affects The Singularity fight.">Nightmare</span></div>
        </div>

        <input id="custom-seed" class="tooltip" data-powertip="You can enter a custom seed or keep this blank to generate a random game." type="text" placeholder="Custom Seed..." />

        <div class="button begin">New Game</div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

    </div>

    <div class="splash-column">

      <div class="message">Build the ultimate deck of cards and wield it to defeat the Gatekeepers!</div>

      <div class="panel settings-panel">

        <div class="instructions">

          <h2>How to play</h2>

          <p>Your goal is to traverse the overworld and defeat a <span class="highlight">Guardian</span> at either the <span class="highlight">Ice Gate</span> or the <span class="highlight">Fire Gate</span> to get to either the FROST Forest or the FLAME Forest, respectively.</p>

          <p>Along the way you will fight enemies that will increase your <span class="sparkle">Sparkle</span>, <span class="shimmer">Shimmer</span>, or <span class="aura">Aura</span> essence. Once you reach level 1, a <span class="highlight">Stance</span> card of that essence will be automatically added to your deck, and the higher your essence level, the stronger the <span class="highlight">Stance</span> effects will be.</p>

          <p>If you are not in a stance, unused speed will be converted to 4x block next turn. If you are in <span class="sparkle">Sparkle</span> <span class="highlight">Stance</span>, gain +3 might per turn, and unused speed will convert to 3x might next turn. If you are in <span class="shimmer">Shimmer</span> <span class="highlight">Stance</span>, gain +10 block and +1 armor per turn, and unused speed will convert to 4x block and 1x armor next turn. If you are in <span class="aura">Aura</span> <span class="highlight">Stance</span>, gain +1 mana per turn, and unused speed will convert to mana next turn.</p>

          <p>You will also come across <span class="highlight">Magic Fountains</span> and <span class="highlight">Quests</span> that will aid you in your journey. You must prove your worth and unlock the Gates by fighting at least two <span class="highlight">Arenas</span> with powerful enemies.</p>

          <p><span class="highlight">Courage Coins</span> are gained by winning combats and are used as currency for buying items at the market. You can always hover over things to get more information about them, such as the meters at the top that show your <span class="aggro">Aggro</span> and <span class="crit">Crit</span> levels.</p>

          <p>During combat, your <span class="highlight">Speed</span> determines how many cards you can draw per turn. <span class="highlight">Mana</span> is used to play your cards. Some cards can be combined, which does not cost mana.</p>

          <p><span class="aggro">Aggro</span> amount increases by 1 after each combat. Each aggro level increases monster blocks in the FROST forest and monster attacks in the FLAME Forest, and also highly increases Arena and Guardian attacks. The more aggro you create, the faster your aggro level will increase. Level 1: 75% increase to FROST Forest blocks and FLAME Forest attacks (increasing by 25% for each level), 150% increase to Arena and Guardian attacks (increasing by 50% for each level).</p>

          <p><span class="crit">Crit</span> percentage, which increases by 1 for each attack card played, is the chance an attack is a critical hit (damage * 1.5). Crit percentage resets to 0 after a critical hit.</p>

          <p><span class="highlight">Armor</span> absorbs 50% of incoming attack damage.</p>

          <p>After each battle you have a chance of being rewarded with a <span class="highlight">Treasure</span>, some <span class="highlight">Essences</span>, some <span class="highlight">Shards</span>, and a <span class="highlight">Candy</span>. These chances increase with each battle, and your current reward chances can be seen at the bottom of the screen.</p>

          <p>You can play cards to charge up your <span class="highlight">Magic Rainbow</span>. Each time your rainbow charges to full, it activates and does damage to your foes. The type of magic summoned dictates how you apply damage. Your magic type becomes <span class="muddled">Muddled</span> when you mix magic types. <span class="highlight">Rainbow</span> magic does damage to all monsters, <span class="elemental">Elemental</span> magic does damage to all monsters ignoring block, <span class="dark">Dark</span> magic does damage to all monsters ignorning armor, <span class="chaos">Chaos</span> magic does triple damage to a random monster, and <span class="muddled">Muddled</span> magic does damage to a single random monster.</p>

          <p>That's it, on with the adventure!</p>

          <p>&nbsp;</p><p>&nbsp;</p>




          <h2>Helpful Tips</h2>

          <p><span class="highlight">DESTROYING CARDS:</span> adds card to dead cards for this combat.</p>

          <p><span class="highlight">DEAD CARDS:</span> cards that have been destroyed this combat.</p>

          <p><span class="highlight">REMOVING CARDS:</span> permanently removes a card from your deck.</p>

          <p><span class="highlight">COMBINING CARDS:</span> click a combinable card and then click another identical card to combine them. This will destroy both cards and create a new, more powerful card.</p>

          <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>




          <h2>RELEASE NOTES</h2>

          <p>0.55 Alpha (2/16/2024)</p>

          <ul>
            <li>Tweaked difficulty settings and cards for balance</li>
            <li>Singularity now summons only upgraded monsters</li>
            <li>Fixed bug affecting shop tooltips and functionality</li>
          </ul>

          <p>0.54 Alpha (2/14/2024)</p>

          <ul>
            <li>Nerfed the Stun card</li>
            <li>Increased rarity of several powerful cards</li>
            <li>Aggro now calculates after damage buffs (like might and punch) instead of only on base damage</li>
            <li>The Singularity can summon guardians on Nightmare difficulty</li>
          </ul>

          <p>0.53 Alpha (2/13/2024)</p>

          <ul>
            <li>Fixed a Resistance bug that applied to all damage instead of just magic damage</li>
            <li>Cycle Barrier card moved to Cycle pack</li>
            <li>Fixed bug where playing Roar or Cloudburst would double non-existing or debuffed punch/thunder</li>
            <li>The Singularity now only summons tier 4 and 5 monsters</li>
            <li>Buffs to various magic summon cards</li>
            <li>Incoming damage now updates correctly after eating candies that damage and kill enemies</li>
            <li>Fixed candies that both caused damage and buffed player (Chocolate Bar, Chocolate Clusters, etc.)</li>
            <li>Hard, Expert, and Nightmare difficulty settings are harder</li>
          </ul>

          <p>0.52 Alpha (2/11/2024)</p>

          <ul>
            <li>Fixed an armor calculation bug</li>
            <li>Fixed a bug that caused arenas in map 2 to break</li>
            <li>The Singularity has a new effect called "Veil" which mitigates elemental magic exploits</li>
            <li>Fixed a bug where the first enemy's resistance applied to all enemies</li>
          </ul>

          <p>0.51 Alpha (2/10/2024)</p>

          <ul>
            <li>Fixed bug where max armor conflicts with gaining block</li>
            <li>Unstable attack card is now 0 mana and retain</li>
            <li>Tweaks to difficulty settings</li>
            <li>Buffed the Quick Stab card</li>
            <li>Fixed a Marked bug</li>
            <li>Tweaked the Garrison card</li>
          </ul>

          <p>0.50 Alpha (2/9/2024)</p>

          <ul>
            <li>Nightmare difficulty increased</li>
            <li>Red Envelope is rarer</li>
            <li>Buffed upgrades to some stance cards</li>
            <li>Gift of Summoning nerfed</li>
            <li>Gift of Magic buffed</li>
            <li>Fixed shard tooltips on cards</li>
            <li>Tweaked starting bonuses (-6 aggro -> -5 aggro, +8 rainbow -> +12 rainbow)</li>
            <li>Fixed some broken candies</li>
            <li>Sage card upgrade was broken</li>
            <li>Fixed a glitch with combined age of cards</li>
            <li>Retaliate/Spikes is no longer triggered by Marked</li>
          </ul>

          <p>0.49 Alpha (2/8/2024)</p>

          <ul>
            <li>Nerfed the Everarmor card</li>
            <li>Nerfed the Erupt card</li>
            <li>Retooled the Scavenge card</li>
            <li>Buffed the Seeing Ring card</li>
            <li>Max health amount is now shown next to the health bar</li>
            <li>Courage is now referred to as Courage Coins</li>
            <li>Improved various tooltips to give more context</li>
            <li>Improved various card descriptions to be less esoteric</li>
            <li>Wisdom no longer affects max health</li>
            <li>You can't gain more than 999 block</li>
            <li>Seeing Ring doesn't break when trying to view draw cards</li>
            <li>Fixed bug where game didn't end if player died to spikes or retaliate</li>
            <li>Overhauled candies to make them more simple and useful</li>
            <li>Various adjustments to difficulty settings</li>
          </ul>

          <p>0.48 Alpha (2/1/2024)</p>

          <ul>
            <li>Mana can no longer go below 0 from cards such as Mired</li>
            <li>Slightly nerfed the Ultraumatron fight</li>
          </ul>

        </div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

    </div>

    <div class="copyright">Copyright &copy; <?php echo date("Y"); ?> spewnicorn.com | Created &amp; developed by Brian McCulloh | All rights reserved</div>

  </div>

  <div id="story-panel" class="game-panel">

    <h2>You come across a magical creature...</h2>

    <p>...a terribly wonderful creature.</p>

    <p>It looks like... could it be... a unicorn?</p>

    <p>You look closer&mdash;does it have wings?<br />
    Or is that just its fur?</p>

    <p>It summons you with it's piercing gaze and<br />
    gestures for you to climb on its back.<br />
    You do so, and instantly something amazing happens.</p>

    <p>You can hear its thoughts!<br />
    And somehow you can tell that it can hear yours.<br />
    It has been tasked with defeating the mighty Guardians,<br />
    it tells you, but it can't do so alone.<br />
    It is bound by an ancient magic requiring two, rather than one.</p>

    <p>You are the other. Together, you must embark on this perilous adventure.<br />
    Will you and this mysterious creature survive the quest?</p>

    <div class="buttons-wrapper">

      <div class="start-journey button">Start Your Journey</div>

    </div>

  </div>

  <div class="tut" id="tutorial-overlay">

    <div class="step shown general" id="step1">
      <span class="text">Your goal is to traverse the overworld and defeat a <span class="highlight">Guardian</span> at either the <span class="highlight">Ice Gate</span> or the <span class="highlight">Fire Gate</span>.</span>
      <span class="icon-wrapper">
        <span class="icon ice-gate"></span>
        <span class="icon fire-gate"></span>
      </span>
      <div class="button next-button">Next</div>
    </div>

    <div class="step general" id="step2">
      <span class="text">Along the way you will fight enemies that will increase your <span class="sparkle">Sparkle</span>, <span class="shimmer">Shimmer</span>, or <span class="aura">Aura</span> Essence.</span>
      <span class="icon-wrapper">
        <span class="icon sparkle"></span>
        <span class="icon shimmer"></span>
        <span class="icon aura"></span>
      </span>
      <div class="button next-button">Next</div>
    </div>

    <div class="step general" id="step3">
      <span class="text">You will come across <span class="highlight">Magic Fountains</span> and <span class="highlight">Quests</span> that will aid you in your journey.</span>
      <span class="icon-wrapper">
        <span class="icon fountain"></span>
        <span class="icon quest"></span>
      </span>
      <span class="text">You must prove your worth and unlock the Gates by fighting at least two <span class="highlight">Arenas</span> with powerful enemies.</span>
      <span class="icon-wrapper">
        <span class="icon arena"></span>
      </span>
      <div class="button next-button">Next</div>
    </div>

    <div class="step" id="step4">
      <span class="text"><span class="highlight">Courage Coins</span> are gained by winning combats and are used as currency for buying items at the market.</span>
      <div class="button next-button">Next</div>
      <svg class="arrow" height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Arrow-01-01-01-01-01</title><g><path d="M60.6212,58.098c2.7035,0.57418,5.1191-.43075,7.56517-1.22292a4.03413,4.03413,0,0,0,.55032-0.27677c0.97595-.49375,2.10176-0.72051,2.87275.06659,0.79855,0.81523.09669,1.82471-.37061,2.62319-3.8002,6.49327-7.65184,12.95645-11.44917,19.45137-1.4484,2.47727-2.88351,4.97-4.159,7.53794-0.87725,1.76611-1.378,3.71675-2.21771,5.50474-0.67868,1.44521-1.04872,3.12985-2.52417,4.12894a4.31881,4.31881,0,0,1-2.55039-2.47745c-1.3659-2.49518-2.0638-5.26387-3.49364-7.7377-1.67392-2.89614-2.97436-6.006-4.59591-8.93517-1.71856-3.10433-3.62448-6.10492-5.44769-9.15138-1.43842-2.40352-2.8609-4.81676-4.32012-7.20757-0.60408-.98971-1.33106-1.90577-1.91243-2.90739a8.05418,8.05418,0,0,1-.54075-1.66088,4.71494,4.71494,0,0,1,1.83393-.53123c2.35635,0.38564,4.68732.92709,7.02611,1.41855,0.39131,0.08222.77522,0.19978,1.46284,0.37951,0.0842-1.46048.257-2.78117,0.21859-4.09568-0.13188-4.51583-.20229-9.04-0.554-13.54093C37.6744,35.10213,37.0014,30.767,36.50034,26.41722c-0.423-3.67221-.75356-7.35585-1.22913-11.021-0.343-2.64341-.81513-5.27256-1.30926-7.89306-0.3368-1.78628.03582-2.56479,1.87947-2.78235,2.03165-.23977,4.0906-0.26195,6.13913-0.34158,3.00559-.11686,6.01193-0.22924,9.019-0.28541,1.36307-.02547,2.73141.05117,4.09264,0.148,2.11105,0.15011,4.215.42425,6.32768,0.52234,2.37428,0.11017,4.7559.05323,7.13224,0.13185A1.40112,1.40112,0,0,1,69.97622,6.3667a9.92225,9.92225,0,0,1-.336,3.22594,56.55734,56.55734,0,0,0-2.80757,11.306c-0.59644,4.46476-1.65046,8.86768-2.48064,13.30217-1.01933,5.44485-2.078,10.8837-2.9878,16.34712C60.95466,53.00716,60.86466,55.5196,60.6212,58.098ZM41.45825,13.51669c-0.39712.6142-.75075,1.26271-1.2021,1.834-0.59328.75108-1.30584,1.409-1.88683,2.16833-0.44612.583-.82659,1.26073-0.11063,1.94561L50.91179,7.68593a2.66016,2.66016,0,0,0-2.95171.55984q-1.38412,1.22439-2.82159,2.388c-1.21868.98424-2.4632,1.93645-3.6966,2.90242,0.92073-2.10445,2.8408-3.23721,4.4984-4.62485,0.43628-.36521.87808-0.72382,1.31735-1.08547L47.116,7.39138C45.23772,7.28263,43.3602,7.147,41.4803,7.08879a1.62817,1.62817,0,0,0-1.07733.45235c-1.05764,1.06593-2.0732,2.17563-3.0662,3.30273a1.23263,1.23263,0,0,0,.04846,1.72363c2.17167-1.62963,3.83428-3.74943,6.36529-4.72354a6.72665,6.72665,0,0,1-1.217,1.50055c-1.52818,1.55671-3.0665,3.10375-4.5775,4.677-0.681.709-.75238,1.499,0.00206,2.69152a26.44768,26.44768,0,0,1,1.85536-2.14675A10.08264,10.08264,0,0,1,41.45825,13.51669Zm22.62607,47.7497q-0.65886.43576-1.31772,0.87155c-1.46131,1.1131-2.98,2.15918-4.373,3.35209-3.89053,3.33184-7.72833,6.72522-11.589,10.092a6.3211,6.3211,0,0,1-1.271,1.02079,2.42172,2.42172,0,0,1-1.10514-.08139l-0.07154-.41812q8.60342-7.23328,17.20678-14.46654c-0.72847-.05069-1.51788.40616-1.844,0.18375-1.30527-.89031-2.31613-0.01909-3.42724.31369l-0.05333-.06044a4.0845,4.0845,0,0,1,.48807-0.87818c1.36734-1.46123,1.376-1.45309.32432-3.27223C51.06039,61.92257,45.99347,66.99432,40.451,71.71623c1.50509,2.7153,2.91536,5.25952,4.43653,8.00386,6.26662-5.26052,11.39458-11.27627,17.32216-16.41569l0.34273,0.35841C57.01,69.25478,51.46763,74.84676,45.78,80.58526c0.25326,0.47966.54645,1.035,0.99614,1.88676,2.64228-2.72332,5.03025-5.24653,7.4877-7.70017a61.60727,61.60727,0,0,1,8.24067-6.63753,7.07551,7.07551,0,0,1-1.49439,1.79213c-1.81894,1.6637-3.72074,3.24324-5.46181,4.984-2.42085,2.42038-4.74658,4.93751-7.07012,7.45289-1.13782,1.23182-1.101,1.33229-.22289,2.99858,0.95161-.93211,1.85835-1.82318,2.76841-2.71081,0.88326-.86145,1.73009-1.766,2.66635-2.56569a17.60763,17.60763,0,0,1,3.16819-2.35012,3.66961,3.66961,0,0,1-.31211.69476q-3.40494,3.56764-6.82284,7.12294c-0.4829.50254-1.05452,1.02347-.65911,1.77824,0.57911,1.10534.95223,2.37451,1.99648,3.14078,5.77-10.23647,11.4761-20.3596,17.18222-30.48275l-0.3312-.37951ZM54.75624,13.6799l-0.28385-.31106c1.86141-1.78641,3.72283-3.57284,5.66015-5.43214a5.51246,5.51246,0,0,0-4.87873,1.34706c-3.87457,3.57713-7.824,7.07338-11.68688,10.66292-1.64667,1.53019-3.15153,3.21295-4.76821,4.87506,0.227,2.54836.37755,5.21775,0.72475,7.86128,0.34982,2.66341.14311,5.394,0.77331,8.46122,0.943-.93,1.555-1.5492,2.1837-2.15089,3.11584-2.98187,6.16958-6.03305,9.37444-8.91613A99.757,99.757,0,0,1,60.855,22.60108a10.95573,10.95573,0,0,0,4.64994-8.03252c0.17569-1.29431.36582-2.58664,0.54939-3.87988a7.49832,7.49832,0,0,0-2.65409,1.521q-8.3776,7.27559-16.72356,14.58759c-1.59507,1.39826-3.13631,2.85788-4.70445,4.287-0.63924.58257-1.2861,1.03543-2.12045-.05855,1.54769-1.22493,3.05394-2.38167,4.52-3.58721,1.53458-1.26188,3.03156-2.56956,4.54321-3.85928,1.46-1.24556,2.9295-2.48031,4.37317-3.74456,1.49474-1.309,2.95356-2.65884,4.44645-3.97,1.44089-1.26543,2.99087-2.41945,4.335-3.77862,1.34023-1.3552,3.22224-2.1525,4.38782-3.89093-2.78368-.94914-4.79905.04858-6.6931,1.55232C58.102,11.06718,56.42612,12.36973,54.75624,13.6799Zm-12.605,36.65964a7.75438,7.75438,0,0,1,.83211-1.10185c1.21-1.10828,2.54645-2.09236,3.66691-3.28178A105.97383,105.97383,0,0,1,60.23433,34.40174a3.06344,3.06344,0,0,0,1.31755-1.96016c0.6135-3.07891,1.32483-6.13823,1.9783-9.20938,0.1052-.4943.10528-1.011,0.19528-1.94692C55.40958,28.06738,47.44126,34.60006,40.411,42.64761l0.37652,3.85624c1.37912-1.487,2.31784-2.65183,3.40971-3.6489,3.792-3.46276,7.633-6.872,11.46414-10.29166,1.42961-1.27613,2.86788-2.54376,4.33693-3.77377,0.37129-.31091.83618-0.826,1.48326-0.0579a10.46131,10.46131,0,0,1-.7831.81646c-2.5034,2.1212-5.08466,4.15609-7.50966,6.3629-3.99605,3.63652-8.31989,6.94678-11.59127,11.32545a2.39126,2.39126,0,0,0-.64917,1.18251c0.04142,2.09583.19083,4.18955,0.32482,6.69325,0.83076-.63337,1.35935-1.01167,1.86106-1.42283q5.87377-4.8137,11.74528-9.63018a1.37926,1.37926,0,0,1,1.724-.43422c-1.19861,1.03741-2.24873,2.00075-3.35535,2.89411a130.89428,130.89428,0,0,0-10.64647,9.01259,2.83027,2.83027,0,0,0-1.06251,2.49174c0.16232,1.5856-.65839,2.36227-2.24441,2.42017-1.16794.04265-3.357,1.76016-3.59547,2.88114a1.48744,1.48744,0,0,0,.13874.97685c1.2074,2.0572,2.45409,4.09141,3.772,6.27056,0.56612-.3946,1.01855-0.67215,1.42911-1.00187,5.01418-4.02688,9.97176-8.1268,15.06328-12.05317a5.94853,5.94853,0,0,0,2.49938-4.20462c0.49531-3.65664,1.1334-7.29381,1.67714-10.94426a5.40673,5.40673,0,0,0-.19355-1.39263L57.64713,42.602c0.72581-1.23832,1.986-2.00341,2.57165-3.12174,0.60649-1.15819.55866-2.659,0.85834-4.3573-0.94314.6246-1.5759,1.01383-2.17729,1.44664a85.63439,85.63439,0,0,0-14.505,13.29116A1.50024,1.50024,0,0,1,42.15125,50.33954ZM55.274,8.02364c-2.33813-.32872-2.46526-0.32045-3.60441.53565a91.842,91.842,0,0,0-12.46983,11.881c-0.65258.71616-1.30755,1.62825-.50644,2.72116C44.2359,18.10117,49.71391,13.09986,55.274,8.02364ZM32.00948,58.05387c0.07616,1.71379,1.27178,1.59557,2.18546,1.814,0.07124,0.89177-1.03639,1.9993.717,2.42359,0.658-.6822,1.37558-1.42622,2.19189-2.2726C35.2855,59.31751,33.737,58.72019,32.00948,58.05387ZM36.523,6.81787c0.1638,0.83013.29355,1.48751,0.4401,2.23007,0.87406-.78315,1.53667-1.37686,2.489-2.23007H36.523Z"></path><path d="M64.08431,61.26639a2.63366,2.63366,0,0,1,.36881.504c-0.36243.41452-.76894,0.79049-1.26786,1.278-0.20912-.45482-0.31387-0.6826-0.41864-0.91039Q63.42544,61.70214,64.08431,61.26639Z"></path><path d="M37.4733,65.23419a2.95214,2.95214,0,0,1,.34851-1.09019c0.58707-.66258,1.28027-1.23028,1.921-1.84629A198.53935,198.53935,0,0,1,55.40237,48.78616a35.96642,35.96642,0,0,1,3.211-2.01489l0.32256,0.45266c-2.39189,1.88-4.82189,3.71388-7.16517,5.65262q-3.62487,2.999-7.1081,6.1683c-2.30648,2.0893-4.53334,4.26657-6.79511,6.40525Z"></path><path d="M39.09841,67.58727C40.14936,65.754,53.669,53.985,55.616,53.14286c-1.1078,1.78412-2.741,2.67677-4.018,3.91675-1.27329,1.23644-2.59958,2.419-3.91793,3.60818-1.368,1.2339-2.71026,2.50254-4.14559,3.65392C42.2049,65.38824,41.34508,67.10168,39.09841,67.58727Z"></path><path d="M40.85244,36.4252a25.11357,25.11357,0,0,1,1.70936-2.15674A137.20539,137.20539,0,0,1,53.93709,23.57378c2.97406-2.41322,5.773-5.043,8.635-7.59311,0.60945-.543,1.14427-1.181,2.27574-0.9a3.20592,3.20592,0,0,1-.4768.83013c-5.47942,4.756-11.02548,9.43711-16.43174,14.27452-1.8751,1.67781-3.39567,3.74923-5.10825,5.6132a12.94493,12.94493,0,0,1-1.41765,1.17178Z"></path><path d="M54.75624,13.6799c-1.5022,1.49062-3.00928,2.97635-4.50558,4.47287q-4.49779,4.49858-8.98506,9.00769c-0.80722.81064-.80132,0.81651-1.78713,0.77147,0.55487-1.607,11.18735-11.93373,14.994-14.563Z"></path><path d="M56.29248,62.13425c-2.03378,1.91595-4.0266,3.87792-6.11273,5.73508-2.14371,1.90846-4.375,3.71878-6.57837,5.55967a10.37644,10.37644,0,0,1-1.19027.69227,4.48326,4.48326,0,0,1,.43952-1.33295,18.4114,18.4114,0,0,1,1.795-1.67651c2.88049-2.41028,5.75156-4.83276,8.67584-7.189a29.177,29.177,0,0,1,2.91789-1.8488Z"></path></g></svg>
    </div>

    <div class="step" id="step5">
      <span class="text">You can always hover over things to get more information about them, such as these meters that show your <span class="aggro">Aggro</span> and <span class="crit">Crit</span> levels.</span>
      <div class="button next-button">Next</div>
      <svg class="arrow" height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Arrow-01-01-01-01-01</title><g><path d="M60.6212,58.098c2.7035,0.57418,5.1191-.43075,7.56517-1.22292a4.03413,4.03413,0,0,0,.55032-0.27677c0.97595-.49375,2.10176-0.72051,2.87275.06659,0.79855,0.81523.09669,1.82471-.37061,2.62319-3.8002,6.49327-7.65184,12.95645-11.44917,19.45137-1.4484,2.47727-2.88351,4.97-4.159,7.53794-0.87725,1.76611-1.378,3.71675-2.21771,5.50474-0.67868,1.44521-1.04872,3.12985-2.52417,4.12894a4.31881,4.31881,0,0,1-2.55039-2.47745c-1.3659-2.49518-2.0638-5.26387-3.49364-7.7377-1.67392-2.89614-2.97436-6.006-4.59591-8.93517-1.71856-3.10433-3.62448-6.10492-5.44769-9.15138-1.43842-2.40352-2.8609-4.81676-4.32012-7.20757-0.60408-.98971-1.33106-1.90577-1.91243-2.90739a8.05418,8.05418,0,0,1-.54075-1.66088,4.71494,4.71494,0,0,1,1.83393-.53123c2.35635,0.38564,4.68732.92709,7.02611,1.41855,0.39131,0.08222.77522,0.19978,1.46284,0.37951,0.0842-1.46048.257-2.78117,0.21859-4.09568-0.13188-4.51583-.20229-9.04-0.554-13.54093C37.6744,35.10213,37.0014,30.767,36.50034,26.41722c-0.423-3.67221-.75356-7.35585-1.22913-11.021-0.343-2.64341-.81513-5.27256-1.30926-7.89306-0.3368-1.78628.03582-2.56479,1.87947-2.78235,2.03165-.23977,4.0906-0.26195,6.13913-0.34158,3.00559-.11686,6.01193-0.22924,9.019-0.28541,1.36307-.02547,2.73141.05117,4.09264,0.148,2.11105,0.15011,4.215.42425,6.32768,0.52234,2.37428,0.11017,4.7559.05323,7.13224,0.13185A1.40112,1.40112,0,0,1,69.97622,6.3667a9.92225,9.92225,0,0,1-.336,3.22594,56.55734,56.55734,0,0,0-2.80757,11.306c-0.59644,4.46476-1.65046,8.86768-2.48064,13.30217-1.01933,5.44485-2.078,10.8837-2.9878,16.34712C60.95466,53.00716,60.86466,55.5196,60.6212,58.098ZM41.45825,13.51669c-0.39712.6142-.75075,1.26271-1.2021,1.834-0.59328.75108-1.30584,1.409-1.88683,2.16833-0.44612.583-.82659,1.26073-0.11063,1.94561L50.91179,7.68593a2.66016,2.66016,0,0,0-2.95171.55984q-1.38412,1.22439-2.82159,2.388c-1.21868.98424-2.4632,1.93645-3.6966,2.90242,0.92073-2.10445,2.8408-3.23721,4.4984-4.62485,0.43628-.36521.87808-0.72382,1.31735-1.08547L47.116,7.39138C45.23772,7.28263,43.3602,7.147,41.4803,7.08879a1.62817,1.62817,0,0,0-1.07733.45235c-1.05764,1.06593-2.0732,2.17563-3.0662,3.30273a1.23263,1.23263,0,0,0,.04846,1.72363c2.17167-1.62963,3.83428-3.74943,6.36529-4.72354a6.72665,6.72665,0,0,1-1.217,1.50055c-1.52818,1.55671-3.0665,3.10375-4.5775,4.677-0.681.709-.75238,1.499,0.00206,2.69152a26.44768,26.44768,0,0,1,1.85536-2.14675A10.08264,10.08264,0,0,1,41.45825,13.51669Zm22.62607,47.7497q-0.65886.43576-1.31772,0.87155c-1.46131,1.1131-2.98,2.15918-4.373,3.35209-3.89053,3.33184-7.72833,6.72522-11.589,10.092a6.3211,6.3211,0,0,1-1.271,1.02079,2.42172,2.42172,0,0,1-1.10514-.08139l-0.07154-.41812q8.60342-7.23328,17.20678-14.46654c-0.72847-.05069-1.51788.40616-1.844,0.18375-1.30527-.89031-2.31613-0.01909-3.42724.31369l-0.05333-.06044a4.0845,4.0845,0,0,1,.48807-0.87818c1.36734-1.46123,1.376-1.45309.32432-3.27223C51.06039,61.92257,45.99347,66.99432,40.451,71.71623c1.50509,2.7153,2.91536,5.25952,4.43653,8.00386,6.26662-5.26052,11.39458-11.27627,17.32216-16.41569l0.34273,0.35841C57.01,69.25478,51.46763,74.84676,45.78,80.58526c0.25326,0.47966.54645,1.035,0.99614,1.88676,2.64228-2.72332,5.03025-5.24653,7.4877-7.70017a61.60727,61.60727,0,0,1,8.24067-6.63753,7.07551,7.07551,0,0,1-1.49439,1.79213c-1.81894,1.6637-3.72074,3.24324-5.46181,4.984-2.42085,2.42038-4.74658,4.93751-7.07012,7.45289-1.13782,1.23182-1.101,1.33229-.22289,2.99858,0.95161-.93211,1.85835-1.82318,2.76841-2.71081,0.88326-.86145,1.73009-1.766,2.66635-2.56569a17.60763,17.60763,0,0,1,3.16819-2.35012,3.66961,3.66961,0,0,1-.31211.69476q-3.40494,3.56764-6.82284,7.12294c-0.4829.50254-1.05452,1.02347-.65911,1.77824,0.57911,1.10534.95223,2.37451,1.99648,3.14078,5.77-10.23647,11.4761-20.3596,17.18222-30.48275l-0.3312-.37951ZM54.75624,13.6799l-0.28385-.31106c1.86141-1.78641,3.72283-3.57284,5.66015-5.43214a5.51246,5.51246,0,0,0-4.87873,1.34706c-3.87457,3.57713-7.824,7.07338-11.68688,10.66292-1.64667,1.53019-3.15153,3.21295-4.76821,4.87506,0.227,2.54836.37755,5.21775,0.72475,7.86128,0.34982,2.66341.14311,5.394,0.77331,8.46122,0.943-.93,1.555-1.5492,2.1837-2.15089,3.11584-2.98187,6.16958-6.03305,9.37444-8.91613A99.757,99.757,0,0,1,60.855,22.60108a10.95573,10.95573,0,0,0,4.64994-8.03252c0.17569-1.29431.36582-2.58664,0.54939-3.87988a7.49832,7.49832,0,0,0-2.65409,1.521q-8.3776,7.27559-16.72356,14.58759c-1.59507,1.39826-3.13631,2.85788-4.70445,4.287-0.63924.58257-1.2861,1.03543-2.12045-.05855,1.54769-1.22493,3.05394-2.38167,4.52-3.58721,1.53458-1.26188,3.03156-2.56956,4.54321-3.85928,1.46-1.24556,2.9295-2.48031,4.37317-3.74456,1.49474-1.309,2.95356-2.65884,4.44645-3.97,1.44089-1.26543,2.99087-2.41945,4.335-3.77862,1.34023-1.3552,3.22224-2.1525,4.38782-3.89093-2.78368-.94914-4.79905.04858-6.6931,1.55232C58.102,11.06718,56.42612,12.36973,54.75624,13.6799Zm-12.605,36.65964a7.75438,7.75438,0,0,1,.83211-1.10185c1.21-1.10828,2.54645-2.09236,3.66691-3.28178A105.97383,105.97383,0,0,1,60.23433,34.40174a3.06344,3.06344,0,0,0,1.31755-1.96016c0.6135-3.07891,1.32483-6.13823,1.9783-9.20938,0.1052-.4943.10528-1.011,0.19528-1.94692C55.40958,28.06738,47.44126,34.60006,40.411,42.64761l0.37652,3.85624c1.37912-1.487,2.31784-2.65183,3.40971-3.6489,3.792-3.46276,7.633-6.872,11.46414-10.29166,1.42961-1.27613,2.86788-2.54376,4.33693-3.77377,0.37129-.31091.83618-0.826,1.48326-0.0579a10.46131,10.46131,0,0,1-.7831.81646c-2.5034,2.1212-5.08466,4.15609-7.50966,6.3629-3.99605,3.63652-8.31989,6.94678-11.59127,11.32545a2.39126,2.39126,0,0,0-.64917,1.18251c0.04142,2.09583.19083,4.18955,0.32482,6.69325,0.83076-.63337,1.35935-1.01167,1.86106-1.42283q5.87377-4.8137,11.74528-9.63018a1.37926,1.37926,0,0,1,1.724-.43422c-1.19861,1.03741-2.24873,2.00075-3.35535,2.89411a130.89428,130.89428,0,0,0-10.64647,9.01259,2.83027,2.83027,0,0,0-1.06251,2.49174c0.16232,1.5856-.65839,2.36227-2.24441,2.42017-1.16794.04265-3.357,1.76016-3.59547,2.88114a1.48744,1.48744,0,0,0,.13874.97685c1.2074,2.0572,2.45409,4.09141,3.772,6.27056,0.56612-.3946,1.01855-0.67215,1.42911-1.00187,5.01418-4.02688,9.97176-8.1268,15.06328-12.05317a5.94853,5.94853,0,0,0,2.49938-4.20462c0.49531-3.65664,1.1334-7.29381,1.67714-10.94426a5.40673,5.40673,0,0,0-.19355-1.39263L57.64713,42.602c0.72581-1.23832,1.986-2.00341,2.57165-3.12174,0.60649-1.15819.55866-2.659,0.85834-4.3573-0.94314.6246-1.5759,1.01383-2.17729,1.44664a85.63439,85.63439,0,0,0-14.505,13.29116A1.50024,1.50024,0,0,1,42.15125,50.33954ZM55.274,8.02364c-2.33813-.32872-2.46526-0.32045-3.60441.53565a91.842,91.842,0,0,0-12.46983,11.881c-0.65258.71616-1.30755,1.62825-.50644,2.72116C44.2359,18.10117,49.71391,13.09986,55.274,8.02364ZM32.00948,58.05387c0.07616,1.71379,1.27178,1.59557,2.18546,1.814,0.07124,0.89177-1.03639,1.9993.717,2.42359,0.658-.6822,1.37558-1.42622,2.19189-2.2726C35.2855,59.31751,33.737,58.72019,32.00948,58.05387ZM36.523,6.81787c0.1638,0.83013.29355,1.48751,0.4401,2.23007,0.87406-.78315,1.53667-1.37686,2.489-2.23007H36.523Z"></path><path d="M64.08431,61.26639a2.63366,2.63366,0,0,1,.36881.504c-0.36243.41452-.76894,0.79049-1.26786,1.278-0.20912-.45482-0.31387-0.6826-0.41864-0.91039Q63.42544,61.70214,64.08431,61.26639Z"></path><path d="M37.4733,65.23419a2.95214,2.95214,0,0,1,.34851-1.09019c0.58707-.66258,1.28027-1.23028,1.921-1.84629A198.53935,198.53935,0,0,1,55.40237,48.78616a35.96642,35.96642,0,0,1,3.211-2.01489l0.32256,0.45266c-2.39189,1.88-4.82189,3.71388-7.16517,5.65262q-3.62487,2.999-7.1081,6.1683c-2.30648,2.0893-4.53334,4.26657-6.79511,6.40525Z"></path><path d="M39.09841,67.58727C40.14936,65.754,53.669,53.985,55.616,53.14286c-1.1078,1.78412-2.741,2.67677-4.018,3.91675-1.27329,1.23644-2.59958,2.419-3.91793,3.60818-1.368,1.2339-2.71026,2.50254-4.14559,3.65392C42.2049,65.38824,41.34508,67.10168,39.09841,67.58727Z"></path><path d="M40.85244,36.4252a25.11357,25.11357,0,0,1,1.70936-2.15674A137.20539,137.20539,0,0,1,53.93709,23.57378c2.97406-2.41322,5.773-5.043,8.635-7.59311,0.60945-.543,1.14427-1.181,2.27574-0.9a3.20592,3.20592,0,0,1-.4768.83013c-5.47942,4.756-11.02548,9.43711-16.43174,14.27452-1.8751,1.67781-3.39567,3.74923-5.10825,5.6132a12.94493,12.94493,0,0,1-1.41765,1.17178Z"></path><path d="M54.75624,13.6799c-1.5022,1.49062-3.00928,2.97635-4.50558,4.47287q-4.49779,4.49858-8.98506,9.00769c-0.80722.81064-.80132,0.81651-1.78713,0.77147,0.55487-1.607,11.18735-11.93373,14.994-14.563Z"></path><path d="M56.29248,62.13425c-2.03378,1.91595-4.0266,3.87792-6.11273,5.73508-2.14371,1.90846-4.375,3.71878-6.57837,5.55967a10.37644,10.37644,0,0,1-1.19027.69227,4.48326,4.48326,0,0,1,.43952-1.33295,18.4114,18.4114,0,0,1,1.795-1.67651c2.88049-2.41028,5.75156-4.83276,8.67584-7.189a29.177,29.177,0,0,1,2.91789-1.8488Z"></path></g></svg>
    </div>

    <div class="step" id="step6">
      <span class="text">During combat, your <span class="highlight">Speed</span> determines how many cards you can draw per turn. Unused speed each turn converts to a bonus on your next turn, depending on your <span class="highlight">Stance</span>.</span>
      <div class="button next-button">Next</div>
      <svg class="arrow" height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Arrow-01-01-01-01-01</title><g><path d="M60.6212,58.098c2.7035,0.57418,5.1191-.43075,7.56517-1.22292a4.03413,4.03413,0,0,0,.55032-0.27677c0.97595-.49375,2.10176-0.72051,2.87275.06659,0.79855,0.81523.09669,1.82471-.37061,2.62319-3.8002,6.49327-7.65184,12.95645-11.44917,19.45137-1.4484,2.47727-2.88351,4.97-4.159,7.53794-0.87725,1.76611-1.378,3.71675-2.21771,5.50474-0.67868,1.44521-1.04872,3.12985-2.52417,4.12894a4.31881,4.31881,0,0,1-2.55039-2.47745c-1.3659-2.49518-2.0638-5.26387-3.49364-7.7377-1.67392-2.89614-2.97436-6.006-4.59591-8.93517-1.71856-3.10433-3.62448-6.10492-5.44769-9.15138-1.43842-2.40352-2.8609-4.81676-4.32012-7.20757-0.60408-.98971-1.33106-1.90577-1.91243-2.90739a8.05418,8.05418,0,0,1-.54075-1.66088,4.71494,4.71494,0,0,1,1.83393-.53123c2.35635,0.38564,4.68732.92709,7.02611,1.41855,0.39131,0.08222.77522,0.19978,1.46284,0.37951,0.0842-1.46048.257-2.78117,0.21859-4.09568-0.13188-4.51583-.20229-9.04-0.554-13.54093C37.6744,35.10213,37.0014,30.767,36.50034,26.41722c-0.423-3.67221-.75356-7.35585-1.22913-11.021-0.343-2.64341-.81513-5.27256-1.30926-7.89306-0.3368-1.78628.03582-2.56479,1.87947-2.78235,2.03165-.23977,4.0906-0.26195,6.13913-0.34158,3.00559-.11686,6.01193-0.22924,9.019-0.28541,1.36307-.02547,2.73141.05117,4.09264,0.148,2.11105,0.15011,4.215.42425,6.32768,0.52234,2.37428,0.11017,4.7559.05323,7.13224,0.13185A1.40112,1.40112,0,0,1,69.97622,6.3667a9.92225,9.92225,0,0,1-.336,3.22594,56.55734,56.55734,0,0,0-2.80757,11.306c-0.59644,4.46476-1.65046,8.86768-2.48064,13.30217-1.01933,5.44485-2.078,10.8837-2.9878,16.34712C60.95466,53.00716,60.86466,55.5196,60.6212,58.098ZM41.45825,13.51669c-0.39712.6142-.75075,1.26271-1.2021,1.834-0.59328.75108-1.30584,1.409-1.88683,2.16833-0.44612.583-.82659,1.26073-0.11063,1.94561L50.91179,7.68593a2.66016,2.66016,0,0,0-2.95171.55984q-1.38412,1.22439-2.82159,2.388c-1.21868.98424-2.4632,1.93645-3.6966,2.90242,0.92073-2.10445,2.8408-3.23721,4.4984-4.62485,0.43628-.36521.87808-0.72382,1.31735-1.08547L47.116,7.39138C45.23772,7.28263,43.3602,7.147,41.4803,7.08879a1.62817,1.62817,0,0,0-1.07733.45235c-1.05764,1.06593-2.0732,2.17563-3.0662,3.30273a1.23263,1.23263,0,0,0,.04846,1.72363c2.17167-1.62963,3.83428-3.74943,6.36529-4.72354a6.72665,6.72665,0,0,1-1.217,1.50055c-1.52818,1.55671-3.0665,3.10375-4.5775,4.677-0.681.709-.75238,1.499,0.00206,2.69152a26.44768,26.44768,0,0,1,1.85536-2.14675A10.08264,10.08264,0,0,1,41.45825,13.51669Zm22.62607,47.7497q-0.65886.43576-1.31772,0.87155c-1.46131,1.1131-2.98,2.15918-4.373,3.35209-3.89053,3.33184-7.72833,6.72522-11.589,10.092a6.3211,6.3211,0,0,1-1.271,1.02079,2.42172,2.42172,0,0,1-1.10514-.08139l-0.07154-.41812q8.60342-7.23328,17.20678-14.46654c-0.72847-.05069-1.51788.40616-1.844,0.18375-1.30527-.89031-2.31613-0.01909-3.42724.31369l-0.05333-.06044a4.0845,4.0845,0,0,1,.48807-0.87818c1.36734-1.46123,1.376-1.45309.32432-3.27223C51.06039,61.92257,45.99347,66.99432,40.451,71.71623c1.50509,2.7153,2.91536,5.25952,4.43653,8.00386,6.26662-5.26052,11.39458-11.27627,17.32216-16.41569l0.34273,0.35841C57.01,69.25478,51.46763,74.84676,45.78,80.58526c0.25326,0.47966.54645,1.035,0.99614,1.88676,2.64228-2.72332,5.03025-5.24653,7.4877-7.70017a61.60727,61.60727,0,0,1,8.24067-6.63753,7.07551,7.07551,0,0,1-1.49439,1.79213c-1.81894,1.6637-3.72074,3.24324-5.46181,4.984-2.42085,2.42038-4.74658,4.93751-7.07012,7.45289-1.13782,1.23182-1.101,1.33229-.22289,2.99858,0.95161-.93211,1.85835-1.82318,2.76841-2.71081,0.88326-.86145,1.73009-1.766,2.66635-2.56569a17.60763,17.60763,0,0,1,3.16819-2.35012,3.66961,3.66961,0,0,1-.31211.69476q-3.40494,3.56764-6.82284,7.12294c-0.4829.50254-1.05452,1.02347-.65911,1.77824,0.57911,1.10534.95223,2.37451,1.99648,3.14078,5.77-10.23647,11.4761-20.3596,17.18222-30.48275l-0.3312-.37951ZM54.75624,13.6799l-0.28385-.31106c1.86141-1.78641,3.72283-3.57284,5.66015-5.43214a5.51246,5.51246,0,0,0-4.87873,1.34706c-3.87457,3.57713-7.824,7.07338-11.68688,10.66292-1.64667,1.53019-3.15153,3.21295-4.76821,4.87506,0.227,2.54836.37755,5.21775,0.72475,7.86128,0.34982,2.66341.14311,5.394,0.77331,8.46122,0.943-.93,1.555-1.5492,2.1837-2.15089,3.11584-2.98187,6.16958-6.03305,9.37444-8.91613A99.757,99.757,0,0,1,60.855,22.60108a10.95573,10.95573,0,0,0,4.64994-8.03252c0.17569-1.29431.36582-2.58664,0.54939-3.87988a7.49832,7.49832,0,0,0-2.65409,1.521q-8.3776,7.27559-16.72356,14.58759c-1.59507,1.39826-3.13631,2.85788-4.70445,4.287-0.63924.58257-1.2861,1.03543-2.12045-.05855,1.54769-1.22493,3.05394-2.38167,4.52-3.58721,1.53458-1.26188,3.03156-2.56956,4.54321-3.85928,1.46-1.24556,2.9295-2.48031,4.37317-3.74456,1.49474-1.309,2.95356-2.65884,4.44645-3.97,1.44089-1.26543,2.99087-2.41945,4.335-3.77862,1.34023-1.3552,3.22224-2.1525,4.38782-3.89093-2.78368-.94914-4.79905.04858-6.6931,1.55232C58.102,11.06718,56.42612,12.36973,54.75624,13.6799Zm-12.605,36.65964a7.75438,7.75438,0,0,1,.83211-1.10185c1.21-1.10828,2.54645-2.09236,3.66691-3.28178A105.97383,105.97383,0,0,1,60.23433,34.40174a3.06344,3.06344,0,0,0,1.31755-1.96016c0.6135-3.07891,1.32483-6.13823,1.9783-9.20938,0.1052-.4943.10528-1.011,0.19528-1.94692C55.40958,28.06738,47.44126,34.60006,40.411,42.64761l0.37652,3.85624c1.37912-1.487,2.31784-2.65183,3.40971-3.6489,3.792-3.46276,7.633-6.872,11.46414-10.29166,1.42961-1.27613,2.86788-2.54376,4.33693-3.77377,0.37129-.31091.83618-0.826,1.48326-0.0579a10.46131,10.46131,0,0,1-.7831.81646c-2.5034,2.1212-5.08466,4.15609-7.50966,6.3629-3.99605,3.63652-8.31989,6.94678-11.59127,11.32545a2.39126,2.39126,0,0,0-.64917,1.18251c0.04142,2.09583.19083,4.18955,0.32482,6.69325,0.83076-.63337,1.35935-1.01167,1.86106-1.42283q5.87377-4.8137,11.74528-9.63018a1.37926,1.37926,0,0,1,1.724-.43422c-1.19861,1.03741-2.24873,2.00075-3.35535,2.89411a130.89428,130.89428,0,0,0-10.64647,9.01259,2.83027,2.83027,0,0,0-1.06251,2.49174c0.16232,1.5856-.65839,2.36227-2.24441,2.42017-1.16794.04265-3.357,1.76016-3.59547,2.88114a1.48744,1.48744,0,0,0,.13874.97685c1.2074,2.0572,2.45409,4.09141,3.772,6.27056,0.56612-.3946,1.01855-0.67215,1.42911-1.00187,5.01418-4.02688,9.97176-8.1268,15.06328-12.05317a5.94853,5.94853,0,0,0,2.49938-4.20462c0.49531-3.65664,1.1334-7.29381,1.67714-10.94426a5.40673,5.40673,0,0,0-.19355-1.39263L57.64713,42.602c0.72581-1.23832,1.986-2.00341,2.57165-3.12174,0.60649-1.15819.55866-2.659,0.85834-4.3573-0.94314.6246-1.5759,1.01383-2.17729,1.44664a85.63439,85.63439,0,0,0-14.505,13.29116A1.50024,1.50024,0,0,1,42.15125,50.33954ZM55.274,8.02364c-2.33813-.32872-2.46526-0.32045-3.60441.53565a91.842,91.842,0,0,0-12.46983,11.881c-0.65258.71616-1.30755,1.62825-.50644,2.72116C44.2359,18.10117,49.71391,13.09986,55.274,8.02364ZM32.00948,58.05387c0.07616,1.71379,1.27178,1.59557,2.18546,1.814,0.07124,0.89177-1.03639,1.9993.717,2.42359,0.658-.6822,1.37558-1.42622,2.19189-2.2726C35.2855,59.31751,33.737,58.72019,32.00948,58.05387ZM36.523,6.81787c0.1638,0.83013.29355,1.48751,0.4401,2.23007,0.87406-.78315,1.53667-1.37686,2.489-2.23007H36.523Z"></path><path d="M64.08431,61.26639a2.63366,2.63366,0,0,1,.36881.504c-0.36243.41452-.76894,0.79049-1.26786,1.278-0.20912-.45482-0.31387-0.6826-0.41864-0.91039Q63.42544,61.70214,64.08431,61.26639Z"></path><path d="M37.4733,65.23419a2.95214,2.95214,0,0,1,.34851-1.09019c0.58707-.66258,1.28027-1.23028,1.921-1.84629A198.53935,198.53935,0,0,1,55.40237,48.78616a35.96642,35.96642,0,0,1,3.211-2.01489l0.32256,0.45266c-2.39189,1.88-4.82189,3.71388-7.16517,5.65262q-3.62487,2.999-7.1081,6.1683c-2.30648,2.0893-4.53334,4.26657-6.79511,6.40525Z"></path><path d="M39.09841,67.58727C40.14936,65.754,53.669,53.985,55.616,53.14286c-1.1078,1.78412-2.741,2.67677-4.018,3.91675-1.27329,1.23644-2.59958,2.419-3.91793,3.60818-1.368,1.2339-2.71026,2.50254-4.14559,3.65392C42.2049,65.38824,41.34508,67.10168,39.09841,67.58727Z"></path><path d="M40.85244,36.4252a25.11357,25.11357,0,0,1,1.70936-2.15674A137.20539,137.20539,0,0,1,53.93709,23.57378c2.97406-2.41322,5.773-5.043,8.635-7.59311,0.60945-.543,1.14427-1.181,2.27574-0.9a3.20592,3.20592,0,0,1-.4768.83013c-5.47942,4.756-11.02548,9.43711-16.43174,14.27452-1.8751,1.67781-3.39567,3.74923-5.10825,5.6132a12.94493,12.94493,0,0,1-1.41765,1.17178Z"></path><path d="M54.75624,13.6799c-1.5022,1.49062-3.00928,2.97635-4.50558,4.47287q-4.49779,4.49858-8.98506,9.00769c-0.80722.81064-.80132,0.81651-1.78713,0.77147,0.55487-1.607,11.18735-11.93373,14.994-14.563Z"></path><path d="M56.29248,62.13425c-2.03378,1.91595-4.0266,3.87792-6.11273,5.73508-2.14371,1.90846-4.375,3.71878-6.57837,5.55967a10.37644,10.37644,0,0,1-1.19027.69227,4.48326,4.48326,0,0,1,.43952-1.33295,18.4114,18.4114,0,0,1,1.795-1.67651c2.88049-2.41028,5.75156-4.83276,8.67584-7.189a29.177,29.177,0,0,1,2.91789-1.8488Z"></path></g></svg>
    </div>

    <div class="step" id="step7">
      <span class="text"><span class="highlight">Mana</span> is used to play your cards. Some cards can be combined, which does not cost mana. That's it!</span>
      <div class="button next-button">Ready For Battle</div>
      <svg class="arrow" height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Слой 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Arrow-01-01-01-01-01</title><g><path d="M60.6212,58.098c2.7035,0.57418,5.1191-.43075,7.56517-1.22292a4.03413,4.03413,0,0,0,.55032-0.27677c0.97595-.49375,2.10176-0.72051,2.87275.06659,0.79855,0.81523.09669,1.82471-.37061,2.62319-3.8002,6.49327-7.65184,12.95645-11.44917,19.45137-1.4484,2.47727-2.88351,4.97-4.159,7.53794-0.87725,1.76611-1.378,3.71675-2.21771,5.50474-0.67868,1.44521-1.04872,3.12985-2.52417,4.12894a4.31881,4.31881,0,0,1-2.55039-2.47745c-1.3659-2.49518-2.0638-5.26387-3.49364-7.7377-1.67392-2.89614-2.97436-6.006-4.59591-8.93517-1.71856-3.10433-3.62448-6.10492-5.44769-9.15138-1.43842-2.40352-2.8609-4.81676-4.32012-7.20757-0.60408-.98971-1.33106-1.90577-1.91243-2.90739a8.05418,8.05418,0,0,1-.54075-1.66088,4.71494,4.71494,0,0,1,1.83393-.53123c2.35635,0.38564,4.68732.92709,7.02611,1.41855,0.39131,0.08222.77522,0.19978,1.46284,0.37951,0.0842-1.46048.257-2.78117,0.21859-4.09568-0.13188-4.51583-.20229-9.04-0.554-13.54093C37.6744,35.10213,37.0014,30.767,36.50034,26.41722c-0.423-3.67221-.75356-7.35585-1.22913-11.021-0.343-2.64341-.81513-5.27256-1.30926-7.89306-0.3368-1.78628.03582-2.56479,1.87947-2.78235,2.03165-.23977,4.0906-0.26195,6.13913-0.34158,3.00559-.11686,6.01193-0.22924,9.019-0.28541,1.36307-.02547,2.73141.05117,4.09264,0.148,2.11105,0.15011,4.215.42425,6.32768,0.52234,2.37428,0.11017,4.7559.05323,7.13224,0.13185A1.40112,1.40112,0,0,1,69.97622,6.3667a9.92225,9.92225,0,0,1-.336,3.22594,56.55734,56.55734,0,0,0-2.80757,11.306c-0.59644,4.46476-1.65046,8.86768-2.48064,13.30217-1.01933,5.44485-2.078,10.8837-2.9878,16.34712C60.95466,53.00716,60.86466,55.5196,60.6212,58.098ZM41.45825,13.51669c-0.39712.6142-.75075,1.26271-1.2021,1.834-0.59328.75108-1.30584,1.409-1.88683,2.16833-0.44612.583-.82659,1.26073-0.11063,1.94561L50.91179,7.68593a2.66016,2.66016,0,0,0-2.95171.55984q-1.38412,1.22439-2.82159,2.388c-1.21868.98424-2.4632,1.93645-3.6966,2.90242,0.92073-2.10445,2.8408-3.23721,4.4984-4.62485,0.43628-.36521.87808-0.72382,1.31735-1.08547L47.116,7.39138C45.23772,7.28263,43.3602,7.147,41.4803,7.08879a1.62817,1.62817,0,0,0-1.07733.45235c-1.05764,1.06593-2.0732,2.17563-3.0662,3.30273a1.23263,1.23263,0,0,0,.04846,1.72363c2.17167-1.62963,3.83428-3.74943,6.36529-4.72354a6.72665,6.72665,0,0,1-1.217,1.50055c-1.52818,1.55671-3.0665,3.10375-4.5775,4.677-0.681.709-.75238,1.499,0.00206,2.69152a26.44768,26.44768,0,0,1,1.85536-2.14675A10.08264,10.08264,0,0,1,41.45825,13.51669Zm22.62607,47.7497q-0.65886.43576-1.31772,0.87155c-1.46131,1.1131-2.98,2.15918-4.373,3.35209-3.89053,3.33184-7.72833,6.72522-11.589,10.092a6.3211,6.3211,0,0,1-1.271,1.02079,2.42172,2.42172,0,0,1-1.10514-.08139l-0.07154-.41812q8.60342-7.23328,17.20678-14.46654c-0.72847-.05069-1.51788.40616-1.844,0.18375-1.30527-.89031-2.31613-0.01909-3.42724.31369l-0.05333-.06044a4.0845,4.0845,0,0,1,.48807-0.87818c1.36734-1.46123,1.376-1.45309.32432-3.27223C51.06039,61.92257,45.99347,66.99432,40.451,71.71623c1.50509,2.7153,2.91536,5.25952,4.43653,8.00386,6.26662-5.26052,11.39458-11.27627,17.32216-16.41569l0.34273,0.35841C57.01,69.25478,51.46763,74.84676,45.78,80.58526c0.25326,0.47966.54645,1.035,0.99614,1.88676,2.64228-2.72332,5.03025-5.24653,7.4877-7.70017a61.60727,61.60727,0,0,1,8.24067-6.63753,7.07551,7.07551,0,0,1-1.49439,1.79213c-1.81894,1.6637-3.72074,3.24324-5.46181,4.984-2.42085,2.42038-4.74658,4.93751-7.07012,7.45289-1.13782,1.23182-1.101,1.33229-.22289,2.99858,0.95161-.93211,1.85835-1.82318,2.76841-2.71081,0.88326-.86145,1.73009-1.766,2.66635-2.56569a17.60763,17.60763,0,0,1,3.16819-2.35012,3.66961,3.66961,0,0,1-.31211.69476q-3.40494,3.56764-6.82284,7.12294c-0.4829.50254-1.05452,1.02347-.65911,1.77824,0.57911,1.10534.95223,2.37451,1.99648,3.14078,5.77-10.23647,11.4761-20.3596,17.18222-30.48275l-0.3312-.37951ZM54.75624,13.6799l-0.28385-.31106c1.86141-1.78641,3.72283-3.57284,5.66015-5.43214a5.51246,5.51246,0,0,0-4.87873,1.34706c-3.87457,3.57713-7.824,7.07338-11.68688,10.66292-1.64667,1.53019-3.15153,3.21295-4.76821,4.87506,0.227,2.54836.37755,5.21775,0.72475,7.86128,0.34982,2.66341.14311,5.394,0.77331,8.46122,0.943-.93,1.555-1.5492,2.1837-2.15089,3.11584-2.98187,6.16958-6.03305,9.37444-8.91613A99.757,99.757,0,0,1,60.855,22.60108a10.95573,10.95573,0,0,0,4.64994-8.03252c0.17569-1.29431.36582-2.58664,0.54939-3.87988a7.49832,7.49832,0,0,0-2.65409,1.521q-8.3776,7.27559-16.72356,14.58759c-1.59507,1.39826-3.13631,2.85788-4.70445,4.287-0.63924.58257-1.2861,1.03543-2.12045-.05855,1.54769-1.22493,3.05394-2.38167,4.52-3.58721,1.53458-1.26188,3.03156-2.56956,4.54321-3.85928,1.46-1.24556,2.9295-2.48031,4.37317-3.74456,1.49474-1.309,2.95356-2.65884,4.44645-3.97,1.44089-1.26543,2.99087-2.41945,4.335-3.77862,1.34023-1.3552,3.22224-2.1525,4.38782-3.89093-2.78368-.94914-4.79905.04858-6.6931,1.55232C58.102,11.06718,56.42612,12.36973,54.75624,13.6799Zm-12.605,36.65964a7.75438,7.75438,0,0,1,.83211-1.10185c1.21-1.10828,2.54645-2.09236,3.66691-3.28178A105.97383,105.97383,0,0,1,60.23433,34.40174a3.06344,3.06344,0,0,0,1.31755-1.96016c0.6135-3.07891,1.32483-6.13823,1.9783-9.20938,0.1052-.4943.10528-1.011,0.19528-1.94692C55.40958,28.06738,47.44126,34.60006,40.411,42.64761l0.37652,3.85624c1.37912-1.487,2.31784-2.65183,3.40971-3.6489,3.792-3.46276,7.633-6.872,11.46414-10.29166,1.42961-1.27613,2.86788-2.54376,4.33693-3.77377,0.37129-.31091.83618-0.826,1.48326-0.0579a10.46131,10.46131,0,0,1-.7831.81646c-2.5034,2.1212-5.08466,4.15609-7.50966,6.3629-3.99605,3.63652-8.31989,6.94678-11.59127,11.32545a2.39126,2.39126,0,0,0-.64917,1.18251c0.04142,2.09583.19083,4.18955,0.32482,6.69325,0.83076-.63337,1.35935-1.01167,1.86106-1.42283q5.87377-4.8137,11.74528-9.63018a1.37926,1.37926,0,0,1,1.724-.43422c-1.19861,1.03741-2.24873,2.00075-3.35535,2.89411a130.89428,130.89428,0,0,0-10.64647,9.01259,2.83027,2.83027,0,0,0-1.06251,2.49174c0.16232,1.5856-.65839,2.36227-2.24441,2.42017-1.16794.04265-3.357,1.76016-3.59547,2.88114a1.48744,1.48744,0,0,0,.13874.97685c1.2074,2.0572,2.45409,4.09141,3.772,6.27056,0.56612-.3946,1.01855-0.67215,1.42911-1.00187,5.01418-4.02688,9.97176-8.1268,15.06328-12.05317a5.94853,5.94853,0,0,0,2.49938-4.20462c0.49531-3.65664,1.1334-7.29381,1.67714-10.94426a5.40673,5.40673,0,0,0-.19355-1.39263L57.64713,42.602c0.72581-1.23832,1.986-2.00341,2.57165-3.12174,0.60649-1.15819.55866-2.659,0.85834-4.3573-0.94314.6246-1.5759,1.01383-2.17729,1.44664a85.63439,85.63439,0,0,0-14.505,13.29116A1.50024,1.50024,0,0,1,42.15125,50.33954ZM55.274,8.02364c-2.33813-.32872-2.46526-0.32045-3.60441.53565a91.842,91.842,0,0,0-12.46983,11.881c-0.65258.71616-1.30755,1.62825-.50644,2.72116C44.2359,18.10117,49.71391,13.09986,55.274,8.02364ZM32.00948,58.05387c0.07616,1.71379,1.27178,1.59557,2.18546,1.814,0.07124,0.89177-1.03639,1.9993.717,2.42359,0.658-.6822,1.37558-1.42622,2.19189-2.2726C35.2855,59.31751,33.737,58.72019,32.00948,58.05387ZM36.523,6.81787c0.1638,0.83013.29355,1.48751,0.4401,2.23007,0.87406-.78315,1.53667-1.37686,2.489-2.23007H36.523Z"></path><path d="M64.08431,61.26639a2.63366,2.63366,0,0,1,.36881.504c-0.36243.41452-.76894,0.79049-1.26786,1.278-0.20912-.45482-0.31387-0.6826-0.41864-0.91039Q63.42544,61.70214,64.08431,61.26639Z"></path><path d="M37.4733,65.23419a2.95214,2.95214,0,0,1,.34851-1.09019c0.58707-.66258,1.28027-1.23028,1.921-1.84629A198.53935,198.53935,0,0,1,55.40237,48.78616a35.96642,35.96642,0,0,1,3.211-2.01489l0.32256,0.45266c-2.39189,1.88-4.82189,3.71388-7.16517,5.65262q-3.62487,2.999-7.1081,6.1683c-2.30648,2.0893-4.53334,4.26657-6.79511,6.40525Z"></path><path d="M39.09841,67.58727C40.14936,65.754,53.669,53.985,55.616,53.14286c-1.1078,1.78412-2.741,2.67677-4.018,3.91675-1.27329,1.23644-2.59958,2.419-3.91793,3.60818-1.368,1.2339-2.71026,2.50254-4.14559,3.65392C42.2049,65.38824,41.34508,67.10168,39.09841,67.58727Z"></path><path d="M40.85244,36.4252a25.11357,25.11357,0,0,1,1.70936-2.15674A137.20539,137.20539,0,0,1,53.93709,23.57378c2.97406-2.41322,5.773-5.043,8.635-7.59311,0.60945-.543,1.14427-1.181,2.27574-0.9a3.20592,3.20592,0,0,1-.4768.83013c-5.47942,4.756-11.02548,9.43711-16.43174,14.27452-1.8751,1.67781-3.39567,3.74923-5.10825,5.6132a12.94493,12.94493,0,0,1-1.41765,1.17178Z"></path><path d="M54.75624,13.6799c-1.5022,1.49062-3.00928,2.97635-4.50558,4.47287q-4.49779,4.49858-8.98506,9.00769c-0.80722.81064-.80132,0.81651-1.78713,0.77147,0.55487-1.607,11.18735-11.93373,14.994-14.563Z"></path><path d="M56.29248,62.13425c-2.03378,1.91595-4.0266,3.87792-6.11273,5.73508-2.14371,1.90846-4.375,3.71878-6.57837,5.55967a10.37644,10.37644,0,0,1-1.19027.69227,4.48326,4.48326,0,0,1,.43952-1.33295,18.4114,18.4114,0,0,1,1.795-1.67651c2.88049-2.41028,5.75156-4.83276,8.67584-7.189a29.177,29.177,0,0,1,2.91789-1.8488Z"></path></g></svg>
    </div>

    <div class="button" id="close-tutorial">Close Tutorial</div>

  </div>

  <div class="overlay"></div>

  <svg id="canvas">
    <circle id="cp" class="spot2" cx="0" cy="0" r="0"></circle>
    <path id="curve" d="M0 0" stroke-linecap="round" fill="transparent"></path>
    <svg id="arrow">
      <path d="M0.358990332,78.3439616 L16.7853941,55.6928092 C17.1246455,55.2395773 17.2689264,54.669708 17.1865809,54.1096745 C17.1045744,53.5496758 16.8024068,53.0454019 16.3474641,52.7084592 L3.89329352,43.2086061 C3.44719257,42.8648566 3.15455397,42.3592597 3.07901185,41.8012978 C3.0034706,41.2436841 3.15114969,40.6782714 3.4900683,40.2284341 C3.8286402,39.7789363 4.33157196,39.4807537 4.88897384,39.3988116 L18.9755929,37.0609286 C19.6765614,36.9511067 20.2764992,36.4995721 20.5762461,35.8569523 C20.875688,35.2143326 20.8355388,34.4649636 20.468717,33.858014 L4.93780791,7.93405176 C4.6165884,7.37881434 4.56146495,6.70935932 4.78774287,6.10954727 C5.01368976,5.50943057 5.49721333,5.04257642 6.10493888,4.83724241 C6.71267313,4.63187359 7.3803219,4.70939392 7.92441332,5.04906981 L35.7997339,23.1243813 C36.3138855,23.4569109 36.9454096,23.5538157 37.5354953,23.3902709 C38.1255287,23.2267262 38.6172319,22.8183735 38.8860546,22.2688983 L46.8505563,5.93444323 C47.1210776,5.41490207 47.5930329,5.02902385 48.1561666,4.86677604 C48.7193178,4.70458916 49.3243168,4.78007356 49.830341,5.075879 C50.3359906,5.37168531 50.6983785,5.86164062 50.8328072,6.43183201 L54.7354392,25.0041579 L54.7350989,25.0041579 C54.8695102,25.6399796 55.2860024,26.1802805 55.8671854,26.4726573 C56.4480374,26.7647295 57.1306343,26.7773072 57.7220266,26.5063185 L78.7278229,16.7479483 L78.7274827,16.7476083 C79.2977856,16.4779757 79.9586136,16.4745811 80.5316257,16.7384279 C81.1046465,17.0026202 81.531043,17.5068506 81.6956817,18.1154452 C81.8607123,18.724066 81.7470628,19.3745196 81.3856907,19.8912928 L68.3940491,38.9014441 C67.9836808,39.4964601 67.9033737,40.259138 68.1810381,40.9265823 C68.4587024,41.5940266 69.056236,42.0751123 69.768102,42.2040227 L91.4411638,46.1831851 C92.0995963,46.262408 92.6842289,46.6421967 93.0237851,47.211683 C93.3633762,47.7808647 93.4195275,48.4755447 93.1758885,49.0919819 C92.9325892,49.7084192 92.416739,50.1773188 91.7794221,50.3612403 L69.7378834,57.672837 C69.1760912,57.8618852 68.7180822,58.2753386 68.4727794,58.8145776 C68.2274418,59.353834 68.2168927,59.9705932 68.4438562,60.5180055 L79.0565134,86.2426398 C79.2987848,86.8165827 79.2773556,87.4676804 78.9976459,88.0246674 C78.7179432,88.5816021 78.2082081,88.9878832 77.6028346,89.1371616 C76.9974871,89.2860832 76.3570691,89.1626625 75.8507836,88.7991917 L51.509531,71.709205 C50.9780183,71.3402914 50.308366,71.2304695 49.6866592,71.4099953 C49.0646389,71.5895211 48.5569247,72.0390189 48.303782,72.6343396 L39.8517234,92.8778876 C39.6135288,93.449785 39.138847,93.8904567 38.5508171,94.0859549 C37.9624823,94.2811223 37.3183795,94.2120973 36.7848284,93.8965671 C36.2516171,93.5806974 35.8814067,93.049597 35.7701667,92.4403408 L32.1561314,72.8139263 C32.0401004,72.1859298 31.6491229,71.6429393 31.0904231,71.3331539 C30.5320281,71.0230639 29.8637347,70.9788635 29.2692935,71.2121122 L2.87746265,81.5380016 C2.30886709,81.7464256 1.67830121,81.7042708 1.14239817,81.4220606 C0.606468996,81.1398503 0.215456648,80.6441154 0.0661494617,80.0575774 C-0.0832274126,79.4710567 0.0229348748,78.8484656 0.358788062,78.3449229 L0.358990332,78.3439616 Z M67.807684,0.383191813 L58.3701458,10.1920469 C57.8798102,10.7095426 57.6753012,11.434409 57.8226397,12.1317961 L58.8183113,16.7675224 C58.9285582,17.272101 59.2610062,17.6998381 59.7227783,17.9317201 C60.1848727,18.1632714 60.7268996,18.1741518 61.197557,17.9613008 L65.8967263,15.8423304 C66.501734,15.5631841 66.9430961,15.0191665 67.0914451,14.3700882 L69.9783701,1.55738549 C70.0583348,1.19221476 69.9749674,0.810723501 69.7503848,0.512175341 C69.5254658,0.213305124 69.1817892,0.0273207361 68.8088087,0.00283559158 C68.4355234,-0.0219855382 68.0704089,0.117079289 67.8080847,0.38330845 L67.807684,0.383191813 Z M94.5679918,68.0276469 L82.7113984,59.4427008 C82.1363305,59.0231283 81.3908051,58.9150038 80.7204907,59.1543715 L76.7382399,60.5769993 L76.7382399,60.5766593 C76.2877137,60.7354428 75.9242979,61.0747793 75.7350768,61.513066 C75.5462215,61.9513439 75.548948,62.4484281 75.7425628,62.8846867 L77.8430553,67.4707986 C78.0006031,67.8179515 78.2479792,68.1168217 78.5593378,68.3371445 C78.8706964,68.5574673 79.2351227,68.6910954 79.6152027,68.7240759 L93.822034,69.9375398 C94.3018206,69.9837813 94.7536795,69.7049701 94.9275518,69.255481 C95.1014328,68.8063227 94.9547738,68.2962692 94.5685612,68.0076352 L94.5679918,68.0276469 Z M16.1686526,97.7014137 L28.3937229,87.4355838 C28.9691305,86.945968 29.2447477,86.1904363 29.1205545,85.4458721 L28.0054545,79.7160175 C27.9074554,79.2110995 27.587255,78.7772607 27.1336539,78.5341501 C26.6800702,78.2910395 26.1410311,78.2648571 25.6660183,78.462748 L20.1906955,80.7605043 L20.1903553,80.7605043 C19.6292425,81.0012299 19.1953805,81.4670483 18.9956365,82.0436895 L14.1276473,96.3091369 C14.0082102,96.6647851 14.0507454,97.0547805 14.2436783,97.3764559 C14.4366103,97.6984447 14.7608961,97.9194551 15.1311588,97.9820128 C15.5014215,98.0445705 15.8801077,97.9422316 16.168295,97.7018394 L16.1686526,97.7014137 Z" id="Shape"></path>
    </svg>
  </svg>

  <div class="game">

    <div class="top-bar">

      <div class="frame frame-top-left"></div>

      <div class="frame frame-top-right"></div>

      <div class="frame frame-top-middle"></div>

      <div class="game-logo">

        <img src="./images/logo-small.png" />

      </div>

      <div class="game-version">Version: <span></span></div>

      <div class="game-seed">Seed: <span></span></div>

      <div class="game-info">

        <div class="game-floor">Floor<span></span></div>

        <div class="booster-pack tooltip" data-powertip="Basic">Pack<span></span></div>

        <div class="game-round">Round<span></span></div>

      </div>

      <div class="game-courage tooltip" data-powertip="<span class='highlight'>Courage Coins:</span> spend these on items at the market">

        <div class="icon"></div> <span></span>

        <div class="courage-amount"></div>

      </div>

      <div class="game-difficulty">

        <span>Difficulty</span>
        <span class="difficulty-level" data-difficulty=""></span>

      </div>

      <div class="essence-bars tooltip" data-powertip="<span class='highlight'>Essence</span> levels amplify essence effects when in that stance">

        <div class="essence-bar shimmer"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="essence-bar sparkle"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="essence-bar aura"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="essence-amount"></div>

      </div>

      <div class="game-aggro tooltip" data-powertip="<span class='aggro'>Aggro</span> level increases monster blocks in the FROST forest and monster attacks in the FLAME Forest, and also highly increases Arena and Guardian attacks.<br /><br /><span class='crit'>Crit</span> percentage is the chance each attack is a critical hit (increases by 1 for each attack played, resets after a critical hit)">

        <div class="aggro-bar"><div class="aggro-bar-inner"><span class="current"></span></div><span class="icon"></span><span class="threshold"></span><span class="level"></span></div>

        <div class="crit-bar"><div class="crit-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="aggro-amount"></div>

      </div>

      <div class="candies">

        <div class="candy-slot slot-1" data-slot="1"></div>

        <div class="candy-slot slot-2" data-slot="2"></div>

        <div class="candy-slot slot-3" data-slot="3"></div>

      </div>

      <div class="all-cards icon-button tooltip" data-powertip="Cards in your deck"><span class="icon"></span><span class="counter"></span></div>

      <div class="library icon-button tooltip" data-powertip="<span class='highlight'>Library: </span>All possible cards, treasures, and candies in the game"><span class="icon"></span><span class="counter"></span></div>

      <div class="settings icon-button tooltip" data-powertip="Settings"><span class="icon"></span></div>

    </div>

    <div class="trash-candy-confirm">

      <div class="button eat-candy">Eat</div>

      <div class="button trash-candy">Trash</div>

      <div class="button cancel">Cancel</div>

    </div>

    <div class="bottom-bar">

      <div class="frame frame-bottom-left"></div>

      <div class="frame frame-bottom-middle"></div>

      <div class="frame frame-bottom-right"></div>

      <div class="bottom-bar-left">

        <div class="player-health creature-health">
          <div class="health-amount">
            <div class="armor-amount tooltip" data-powertip="<span class='highlight'>Armor:</span> when taking damage, reduce by 50% and lose that much armor." >
              <div class="icon-armor"></div>
              <div class="armor-number"></div>
            </div>
            <div class="health-number"></div>
          </div>
          <div class="block-amount">
            <div class="block-number"></div>
          </div>
          <div class="max-health-number"></div>
          <div class="icon-health"></div>
          <div class="combat-log"><div class="health-gained" data-amount="0"></div></div>
        </div>

      </div>

      <div class="mana-speed mana tooltip" data-powertip="<span class='highlight'>Mana:</span> energy that allows you to play cards">
        <div class="icon"></div>
        <span></span>
      </div>

      <div class="draw-card icon-button">Draw Card</div>

      <div class="end-turn icon-button">End Turn</div>

      <div class="mana-speed speed tooltip draw-all" data-powertip="<span class='highlight'>Speed:</span> how many cards you can draw per turn. Unused speed converts to block next turn by default.">
        <div class="icon"></div>
        <span></span>
        <div class="draw-all-text">Draw All</div>
      </div>

      <div class="draw-cards icon-button tooltip" data-powertip="Draw pile"><div class="icon"></div><span class="counter"></span></div>

      <div class="discard-cards icon-button tooltip" data-powertip="Discard pile"><div class="icon"></div><span class="counter"></span></div>

      <div class="dead-cards icon-button tooltip" data-powertip="Dead cards"><div class="icon"></div><span class="counter"></span></div>

      <div class="stance">
        <div class="icon-label tooltip" data-powertip="<span class='highlight'>Stance:</span> <span class='shimmer'>Shimmer</span>, <span class='sparkle'>Sparkle</span>, <span class='aura'>Aura</span>, None.<br /><br /><span class='shimmer'>Shimmer:</span> gain +10 block and +1 armor, and unused speed converts to 4x block and 1x armor next turn.<br /><br /><span class='sparkle'>Sparkle:</span> gain +3 might, and unused speed converts to 3x might next turn.<br /><br /><span class='aura'>Aura:</span> gain +1 mana, and unused speed converts to mana next turn.<br /><br />None: unused speed converts to 4x block next turn."></div>
        <div class="icon-stance tooltip" data-stance="none" data-powertip="<span class='highlight'>Stance:</span> None"></div>
      </div>

      <div class="chances tooltip" data-powertip="Chances of seeing treasure rooms, candies, and shards after combats, as well as uncommon and rare cards in card rewards and markets.">

        <div class="treasure-chance">treasure: <span></span>%</div>

        <div class="candy-chance">candy: <span></span>%</div>

        <div class="shard-chance">shard: <span></span>%</div>

        <div class="uncommon-chance">uncommon: <span></span>%</div>

        <div class="rare-chance">rare: <span></span>%</div>

      </div>

      <div class="highest-damage-roll tooltip" data-powertip="Your highest unblocked damage hit of the run.">
        <div class="icon"></div>
        <span></span>
      </div>

    </div>

    <div class="treasures">

    </div>

    <div class="map">

      <h2>The Dark Forest</h2>

      <div class="start-arrow">
        <svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
          <path d="m1131.5 673.39c-99.613-64.078-169.92-160.05-201.66-274.11-2.3516-8.4492-9.7188-13.055-18.023-13.727-43.453-3.4805-86.914-6.8047-130.38-10.188-14.09-1.0938-23.16 16.609-16.055 27.984 23.555 37.703 44.398 76.547 62.688 116.79-241.81-128.45-554.66-100.38-763.64 80.676-8.4727 7.3438-3.4922 17.316 4.5703 20.566 27.133 69.527 66.516 129.45 120.64 181.04 9.0469 8.6289 24.828 7.4023 31.176-4.0195 125.03-225.01 408.36-294.41 623.04-161.59-42.996 22.117-87.254 41.102-133.14 56.891-12.434 4.2734-17.711 17.027-11.723 28.812 15.707 30.875 31.414 61.754 47.125 92.629 6.3594 12.492 21.828 11.387 31.141 4.0078 98.207-77.797 219.98-116.52 344.99-111.59 19.016 0.78516 23.852-24.785 9.2617-34.172zm-361.39 101.82c-8.9023-17.328-17.809-34.668-26.723-51.996 50.891-19.078 99.973-41.531 147.73-67.883 13.668-7.5352 11.09-25.105 0-33.168-227.14-165.34-544.7-100.49-691.48 134.06-40.512-42.84-71.723-91.621-93.238-147.32-0.74219-1.9336-1.7383-3.5508-2.8438-5.0391 218.36-158.65 525.97-172.04 753.66-24.023 12.719 8.2695 32.809-5.6875 26.988-20.746-19.246-49.824-41.953-97.656-68.426-143.79 27.301 2.1953 54.59 4.3789 81.887 6.5156 30.492 98.902 88.559 184.43 168.02 248.88-107.12 4.9336-208.15 40.887-295.58 104.51z"/>
        </svg>
      </div>

      <div class="map-inner">

        <?php // Create the map
        $j = 0; for ($i = 1; $i <= 100; $i++) { $j++;
          $class='tile tooltip';
          if($i == 1) $class .= ' clickable';
          if($j % 10 == 0) {
            $class .= ' last-col';
          } else if(($j - 1) % 10 == 0) {
            $class .= ' first-col';
          }
          if($j <= 10) {
            $class .= ' odd-row';
          } else {
            $class .= ' even-row';
          }
          if($i <= 10) {
            $class .= ' first-row';
          } else if($i > 90) {
            $class .= ' last-row';
          }
          if($j == 20) $j = 0;

          ?>

          <div id="tile-<?php echo $i; ?>" class="<?php echo $class; ?>" data-powertip="Map Tile" data-shimmer="0" data-sparkle="0" data-aura="0">
            <div><?php echo $html; ?></div>
          </div>

        <?php } ?>

      </div>

      <h3>Tip: you can right-click map tiles to mark your intended path.</h3>

    </div>

    <div class="debug-log">

      <div class="debug-inner">

        <div class="debug-toggle">Debug</div>

      </div>

    </div>

    <div class="status">

      <div class="status-inner">

        <span class="status-toggle">Status</span>

        <div class="map-type">map type: <span></span></div>

        <div class="card-retain">card retain: <span></span></div>

        <div class="momentumAmount">momentumAmount: <span></span></div>




        <div class="solid">solid: <span></span></div>

        <div class="might">might: <span></span></div>

        <div class="punch">punch: <span></span></div>

        <div class="mend">mend: <span></span></div>

        <div class="craft">craft: <span></span></div>

        <div class="cunning">cunning: <span></span></div>

        <div class="vigor">vigor: <span></span></div>

        <div class="stout">stout: <span></span></div>

        <div class="muster">muster: <span></span></div>

        <div class="rowdy">rowdy: <span></span></div>

        <div class="fierce">fierce: <span></span></div>

        <div class="mastery">mastery: <span></span></div>

        <div class="heal">heal: <span></span></div>

        <div class="conjure">conjure: <span></span></div>

        <div class="sorcery">sorcery: <span></span></div>

        <div class="momentum">momentum: <span></span></div>

        <div class="wield">wield: <span></span></div>

        <div class="resistance">resistance: <span></span></div>

        <div class="lemonade">lemonade: <span></span></div>

        <div class="spikes">spikes: <span></span></div>

        <div class="vex">vex: <span></span></div>

        <div class="mage">mage: <span></span></div>

        <div class="enchanter">enchanter: <span></span></div>

        <div class="summon">summon: <span></span></div>

        <div class="arcane">arcane: <span></span></div>

        <div class="fatality">fatality: <span></span></div>

        <div class="retaliate">retaliate: <span></span></div>

        <div class="mystery">mystery: <span></span></div>

        <div class="regen">regen: <span></span></div>

        <div class="wisdom">wisdom: <span></span></div>

        <div class="lightning">lightning: <span></span></div>

        <div class="thunder">thunder: <span></span></div>



        <div class="unreachable">unreachable: <span></span></div>

        <div class="protection">protection: <span></span></div>

        <div class="tank">tank: <span></span></div>

        <div class="prepared">prepared: <span></span></div>

        <div class="bless">bless: <span></span></div>

        <div class="hypnotize">hypnotize: <span></span></div>

        <div class="stockpile">stockpile: <span></span></div>

        <div class="sift">sift: <span></span></div>

        <div class="panic">panic: <span></span></div>

        <div class="expirex">expirex: <span></span></div>



      </div>

    </div>

    <div class="starting-room game-panel shown">

      <h2>Choose your starting bonus</h2>

      <div class="message">A boon for your adventure...</div>

      <div class="panel">

        <div class="starting-options shown buttons-wrapper"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="buttons-wrapper">

        <div class="button done">Done</div>
        <div class="button view-map" data-game-panel="starting-room">View Map</div>

      </div>

    </div>

    <div class="starting-treasure game-panel">

      <h2>Choose a starting treasure</h2>

      <div class="message">A gift for you! Surely this will aid you in your journey.</div>

      <div class="panel">

        <div class="starting-treasures shown buttons-wrapper"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="buttons-wrapper">

        <div class="button done">Done</div>
        <div class="button view-map" data-game-panel="starting-treasure">View Map</div>

      </div>

    </div>

    <div class="choose-booster-pack game-panel">

      <h2>Choose a booster pack</h2>

      <div class="message">What do you want to specialize in?</div>

      <div class="panel">

        <div class="starting-booster-packs shown"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="buttons-wrapper">

        <div class="button done tooltip" data-powertip="Skip booster pack and play with only basic cards">Done</div>
        <div class="button view-map" data-game-panel="choose-booster-pack">View Map</div>
        <div class="button view-basic tooltip" data-powertip="All basic cards plus selected booster pack cards">Available Cards</div>

      </div>

    </div>

    <div class="view-map-done-wrapper">

      <div class="buttons-wrapper">

        <div class="button view-map-done">Done</div>

      </div>

    </div>

    <div class="magic-fountain game-panel">

      <h2>Magic Fountain!</h2>

      <div class="message">A brief respite and then the journey continues...</div>

      <div class="panel">

        <div class="fountain-options shown buttons-wrapper">

          <div class="button fountain-drink" data-amount="30" data-armor="10">Drink (+30 Health &amp; +10 Armor)</div>

          <div class="button fountain-bathe" data-amount="12">Bathe (+12 Max Health)</div>

          <div class="button fountain-search">Search (Find A Shard)</div>

          <div class="button fountain-frolic" data-amount="7">Frolic (+7 Courage)</div>

          <div class="fountain-visited">This fountain has dried up.</div>

        </div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="buttons-wrapper">

        <div class="button fountain-skip">Skip</div>

      </div>

    </div>

    <div class="quest-screen game-panel">

      <h2></h2>

      <div class="quest-description message"></div>

      <div class="panel">

        <div class="quest-options buttons-wrapper"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

    </div>

    <div class="courage-screen game-panel">

      <h2>The Market</h2>

      <div class="courage-item-wrapper">

        <div class="message">Spend your courage coins wisely.</div>

        <div class="panel">

          <div class="courage-items"></div>

          <div class="button courage-remove shown tooltip" data-amount="2" data-powertip="Permanently remove a card from your deck">Remove Card<span class="remove-courage tooltip" data-powertip="Courage coins">2</span></div>

          <div class="button courage-trade tooltip" data-powertip="Trade in a weapon for a better one" data-amount="1">Trade<span class="trade-courage tooltip" data-powertip="Courage coins">1</span></div>

          <div class="button courage-gamble shown tooltip" data-powertip="Add a random card to your deck">Gamble</div>

          <div class="panel-part panel-top-left"></div>
          <div class="panel-part panel-top-middle"></div>
          <div class="panel-part panel-top-right"></div>
          <div class="panel-part panel-middle-left"></div>
          <div class="panel-part panel-middle-right"></div>
          <div class="panel-part panel-bottom-left"></div>
          <div class="panel-part panel-bottom-middle"></div>
          <div class="panel-part panel-bottom-right"></div>

        </div>

        <div class="panel">

          <div class="courage-cards"></div>

          <div class="panel-part panel-top-left"></div>
          <div class="panel-part panel-top-middle"></div>
          <div class="panel-part panel-top-right"></div>
          <div class="panel-part panel-middle-left"></div>
          <div class="panel-part panel-middle-right"></div>
          <div class="panel-part panel-bottom-left"></div>
          <div class="panel-part panel-bottom-middle"></div>
          <div class="panel-part panel-bottom-right"></div>

        </div>

      </div>

      <div class="buttons-wrapper">

        <div class="button courage-done">Done</div>

      </div>

    </div>

    <div class="loot-screen game-panel">

      <h2>Loot!</h2>

      <div class="message">Spoils of war.</div>

      <div class="panel">

        <div class="loot-items"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="button loot-done">Done</div>

    </div>

    <div class="combat">

      <div class="monster-panel-wrapper">

        <div class="monster-panel"></div>

      </div>

      <div class="overlay"></div>

      <div class="combat-text">
        <h2 class="begin-combat">Begin Combat!</h2>
        <h2 class="enemy-turn">Enemy Turn</h2>
        <h2 class="player-turn">Player Turn</h2>
        <div class="draw-cards-arrow">
          <span>Draw Cards</span>
          <svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
            <path d="m1161.4 228.88c-85.941 162.88-154.94 288.18-206.65 376.06-51.707 87.883-86.117 138-103.59 150.88-3.5273 2.6484-7.0586 4.5898-10.586 6-2.8242 1.7656-5.8242 3.3516-8.6484 4.4102-6 2.293-11.473 3.3516-16.41 3.3516-13.766 0-24.531-8.1172-32.473-24.531-0.70703-1.4102-1.4102-3.1758-2.1172-4.7656-1.0586-2.6484-1.5898-5.2969-1.7656-8.1172-0.35156-4.5898-0.53125-10.414-0.53125-17.293 0-27.707 2.8242-73.766 8.6484-138.35-6.5312 5.1172-12.883 9.8828-19.234 14.293l-353.82 250.59-213.88 167.65c-1.2344 1.0586-2.4688 1.9414-3.8828 2.6445-3.1758 1.7656-6.3516 3.1758-9.707 4.0586-4.7656 1.4102-9.3516 2.293-13.941 2.293-12.352 0-23.293-5.8242-32.824-17.293-6.5312-7.7656-11.824-18.527-16.059-32.293l-72.707-242.65c-3.707-1.7656-7.2344-4.5898-9.8828-8.1172-9.707-12.531-7.4141-30.527 5.1172-40.059 43.586-33.527 95.824-67.766 157.06-102.53 61.234-34.766 131.12-70.41 210.18-106.41 94.766-44.293 199.59-82.941 314.47-115.94-15.707-12-39.352-28.41-70.59-49.766-1.5898-1.0586-3-2.293-4.2344-3.5312-3.3516-3.3516-6-6.5312-8.293-9.5273-3-4.2344-5.1172-8.4688-6.3516-12.883-6.1758-20.824 1.4102-34.234 22.234-40.414 1.5859-0.35156 3.1758-0.70703 4.7656-0.88281l454.06-53.473c0.70703-0.17578 1.5859-0.17578 2.293-0.17578 0.70703 0 1.4102-0.17578 2.1172-0.17578 0.88281 0 1.9414 0.17578 2.8242 0.17578 15.707 0.70703 27.176 7.2344 34.059 19.234 4.7656 8.6484 4.9414 18.883 0.35156 27.531z"/>
          </svg>
        </div>
      </div>

      <div class="player-panel">

        <div class="frame frame-left"></div>

        <div class="frame frame-right"></div>

        <div class="frame frame-top-left"></div>

        <div class="frame frame-top-right"></div>

        <div class="frame frame-top-middle"></div>

        <div class="message standard-message"></div>
        <div class="message discard-message"></div>
        <div class="message destroy-message"></div>

        <div class="crit">crit! <span></span></div>

        <img class="sprite" src="./images/spewnicorn808.png" />

        <div class="incoming-damage">Incoming Damage: <span></span></div>

        <div class="magic-rainbow tooltip" data-type="rainbow" data-powertip="<div class='tooltip-magic'><span class='rainbow'>Rainbow Magic: </span>Does damage to all monsters (Magick: does 2 damage to all enemies).</div><div class='tooltip-magic'><span class='elemental'>Elemental Magic: </span>Does damage to all monsters ignoring block (Magick: gain 3 block).</div><div class='tooltip-magic'><span class='dark'>Dark Magic: </span>Does damage to all monsters ignorning armor (Magick: gain 2 armor).</div><div class='tooltip-magic'><span class='chaos'>Chaos Magic: </span>Does triple damage to a random monster (Magick: does 10 damage to a random monster).</div><div class='tooltip-magic'><span class='muddled'>Muddled Magic: </span>Does damage to a random monster.</div>">

          <div class="rainbow-power-amount"><span class="rainbow-power-current"></span>/<span class="rainbow-power-max"></span></div>

          <div class="magic-type"><span data-type="rainbow"></span> Magic</div>

          <div class="rainbow-power">
            <div class="mask">
              <div class="semi-circle"></div>
              <div class="semi-circle--mask"></div>
            </div>
          </div>

        </div>

        <div class="status-bar"></div>

        <div class="stance-text"></div>

        <div class="player">

          <div class="combat-log">
            <div class="dmg-taken" data-amount="0"></div>
            <div class="armor-lost" data-amount="0"></div>
            <div class="health-lost" data-amount="0"></div>
            <div class="status-text"></div>
          </div>

          <div class="player-cards"></div>

        </div>

        <div class="retain-done button-done button">Done</div>

        <div class="discard-done button-done button">Done</div>

        <div class="destroy-done button-done button">Done</div>

      </div>

      <div class="end-combat button">&rarr;</div>

    </div>

    <div class="show-cards cards-panel game-panel"></div>

    <div class="rewards cards-panel game-panel">

      <h2>Combat Rewards</h2>

      <div class="message">Add a card to your deck.</div>

      <div class="panel">

        <div class="rewards-cards"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="panel rewards-loot-wrapper">

        <div class="rewards-loot"></div>

        <div class="panel-part panel-top-left"></div>
        <div class="panel-part panel-top-middle"></div>
        <div class="panel-part panel-top-right"></div>
        <div class="panel-part panel-middle-left"></div>
        <div class="panel-part panel-middle-right"></div>
        <div class="panel-part panel-bottom-left"></div>
        <div class="panel-part panel-bottom-middle"></div>
        <div class="panel-part panel-bottom-right"></div>

      </div>

      <div class="buttons-wrapper">

        <div class="rewards-skip button">Done</div>

      </div>

    </div>

    <div class="shard-cards-panel cards-panel" data-shard="">

      <h2>Attach <span></span> Shard To Card</h2>

      <div class="message"></div>

      <div class="cards"></div>

    </div>

    <div class="trade-cards-panel cards-panel">

      <h2>Tradeable Cards</h2>

      <div class="message">Choose a card to trade away.</div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="view-armory button shown">View Armory</div>

        <div class="done button shown">Done</div>

      </div>

    </div>

    <div class="draw-cards-panel cards-panel">

      <h2>Draw Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="discard-cards-panel cards-panel">

      <h2>Discard Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="dead-cards-panel cards-panel">

      <h2>Dead Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="choose-cards-panel cards-panel">

      <h2>Choose Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="armory-panel cards-panel">

      <h2>The Armory</h2>

      <div class="message">These are all the possible weapon cards</div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="pack-cards-panel cards-panel">

      <h2></h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="select button tooltip" data-powertip="Add these cards to the available card pool.">Select</div>

        <div class="back button">Back</div>

      </div>

    </div>

    <div class="all-cards-panel cards-panel">

      <h2>All Of Your Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="library-panel cards-panel">

      <div class="message"></div>

      <h2>All Candies</h2>

      <div class="library-loader">Loading candies...</div>

      <div class="library-candies"></div>

      <h2>All Treasures</h2>

      <div class="library-loader">Loading treasures...</div>

      <div class="library-treasures"></div>

      <h2>All Cards</h2>

      <div class="message">Every single card in the game, including non-reward, non-addable cards.</div>

      <div class="library-loader">Loading card library...</div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

    </div>

    <div class="gate-screen game-panel">

      <h2>Victory!</h2>

      <div class="message">You have beaten the first Guardian, but your journey continues...</div>

      <div class="button gate-done">Go Through The Gate</div>

    </div>

    <div class="end-game victory game-panel">

      <h2>Victory!</h2>

      <div class="message">You have beaten the game. Rest easy, friend.</div>

      <div class="button play-again">Play Again</div>

    </div>

    <div class="end-game loss game-panel">

      <h2>Defeat</h2>

      <div class="message">A valiant effort.</div>

      <div class="button play-again">Try Again?</div>

    </div>

  </div>

</body>
</html>