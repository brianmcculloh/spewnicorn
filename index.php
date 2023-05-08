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
<script type="module" src="script.js"></script>


</head>

<body>

  <div id="game-loading">
    
    <div class="game-loading-bar">

      <div class="game-loading-progress"><div class="glow"></div></div>

    </div>

  </div>

  <div id="splash" class="game-panel shown">

    <div class="logo"><img src="./images/logo.png" /></div>

    <?php /* <h2>The Spewnicorn</h2> */ ?>

    <div class="message">Build the ultimate deck of cards and wield it to defeat the Gatekeepers!</div>

    <div class="panel settings-panel">

      <div class="button music toggled-on">Music <span>On</span></div>
      <div class="button sound toggled-on">Sounds <span>On</span></div>
      <div class="button tutorial">Tutorial <span>Off</span></div>
      <div class="button difficulty toggled-on">Easy Mode <span>On</span></div>

      <div class="panel-part panel-top-left"></div>
      <div class="panel-part panel-top-middle"></div>
      <div class="panel-part panel-top-right"></div>
      <div class="panel-part panel-middle-left"></div>
      <div class="panel-part panel-middle-right"></div>
      <div class="panel-part panel-bottom-left"></div>
      <div class="panel-part panel-bottom-middle"></div>
      <div class="panel-part panel-bottom-right"></div>

    </div>

    <div class="button begin">New Game</div> 

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

      <div class="game-seed">Seed: <span></span></div>

      <div class="game-info">

        <div class="game-floor">Floor<span></span></div>

        <div class="booster-pack">Pack<span class="tooltip" data-powertip="Basic"></span></div>

        <div class="game-round">Round<span></span></div>

      </div>

      <div class="game-courage tooltip" data-powertip="<span class='highlight'>Courage:</span> spend courage points on items at the market">

        <div class="icon"></div> <span></span>

      </div>

      <div class="essence-bars tooltip" data-powertip="<span class='highlight'>Essence</span> levels amplify essence effects when in that stance">

        <div class="essence-bar shimmer"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="essence-bar sparkle"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="essence-bar aura"><div class="essence-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

      </div>

      <div class="game-aggro tooltip" data-powertip="<span class='aggro'>Aggro</span> level multiplies guardian attack damage during guardian fights.<br /><br /><span class='crit'>Crit</span> percentage is the chance each attack is a critical hit (increases by 1 for each attack played, resets after a critical hit)">

        <div class="aggro-bar"><div class="aggro-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

        <div class="crit-bar"><div class="crit-bar-inner"></div><span class="icon"></span><span class="level"></span></div>

      </div>

      <div class="candies">

        <div class="candy-slot slot-1" data-slot="1"></div>

        <div class="candy-slot slot-2" data-slot="2"></div>

        <div class="candy-slot slot-3" data-slot="3"></div>

      </div>

      <div class="all-cards icon-button tooltip" data-powertip="Cards in your deck"><span class="icon"></span><span class="counter"></span></div>

      <div class="library icon-button tooltip" data-powertip="All possible cards"><span class="icon"></span><span class="counter"></span></div>

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

      <div class="mana-speed speed tooltip" data-powertip="<span class='highlight'>Speed:</span> how many cards you can draw per turn. Unused speed converts to block next turn by default.">
        <div class="icon"></div>
        <span></span>
      </div>

      <div class="draw-cards icon-button tooltip" data-powertip="Draw pile"><div class="icon"></div><span class="counter"></span></div>

      <div class="discard-cards icon-button tooltip" data-powertip="Discard pile"><div class="icon"></div><span class="counter"></span></div>

      <div class="dead-cards icon-button tooltip" data-powertip="Dead cards"><div class="icon"></div><span class="counter"></span></div>

      <div class="stance">
        <div class="icon-label tooltip" data-powertip="<span class='highlight'>Stance:</span> <span class='shimmer'>Shimmer</span>, <span class='sparkle'>Sparkle</span>, <span class='aura'>Aura</span>, None.<br /><br /><span class='shimmer'>Shimmer:</span> unused speed converts to crit percentage for the rest of combat.<br /><br /><span class='sparkle'>Sparkle:</span> unused speed converts to temporary might on the next turn.<br /><br /><span class='aura'>Aura:</span> unused speed converts to mana.<br /><br />None: unused speed converts to block."></div>
        <div class="icon-stance tooltip" data-stance="none" data-powertip="<span class='highlight'>Stance:</span> None"></div>
      </div>

      <div class="chances tooltip" data-powertip="Chances of seeing treasure rooms, candies, and shards after combats.">

        <div class="treasure-chance">treasure: <span></span>%</div>

        <div class="candy-chance">candy: <span></span>%</div>

        <div class="shard-chance">shard: <span></span>%</div>

      </div>

      <div class="highest-damage-roll tooltip" data-powertip="The largest amount of damage you've dealt this run.">
        <div class="icon"></div>
        <span></span>
      </div>

    </div>

    <div class="treasures">

    </div>

    <div class="map">

      <div class="start-arrow">
        <svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
          <path d="m1131.5 673.39c-99.613-64.078-169.92-160.05-201.66-274.11-2.3516-8.4492-9.7188-13.055-18.023-13.727-43.453-3.4805-86.914-6.8047-130.38-10.188-14.09-1.0938-23.16 16.609-16.055 27.984 23.555 37.703 44.398 76.547 62.688 116.79-241.81-128.45-554.66-100.38-763.64 80.676-8.4727 7.3438-3.4922 17.316 4.5703 20.566 27.133 69.527 66.516 129.45 120.64 181.04 9.0469 8.6289 24.828 7.4023 31.176-4.0195 125.03-225.01 408.36-294.41 623.04-161.59-42.996 22.117-87.254 41.102-133.14 56.891-12.434 4.2734-17.711 17.027-11.723 28.812 15.707 30.875 31.414 61.754 47.125 92.629 6.3594 12.492 21.828 11.387 31.141 4.0078 98.207-77.797 219.98-116.52 344.99-111.59 19.016 0.78516 23.852-24.785 9.2617-34.172zm-361.39 101.82c-8.9023-17.328-17.809-34.668-26.723-51.996 50.891-19.078 99.973-41.531 147.73-67.883 13.668-7.5352 11.09-25.105 0-33.168-227.14-165.34-544.7-100.49-691.48 134.06-40.512-42.84-71.723-91.621-93.238-147.32-0.74219-1.9336-1.7383-3.5508-2.8438-5.0391 218.36-158.65 525.97-172.04 753.66-24.023 12.719 8.2695 32.809-5.6875 26.988-20.746-19.246-49.824-41.953-97.656-68.426-143.79 27.301 2.1953 54.59 4.3789 81.887 6.5156 30.492 98.902 88.559 184.43 168.02 248.88-107.12 4.9336-208.15 40.887-295.58 104.51z"/>
        </svg>
      </div>

      <div class="map-inner">

        <?php // Create the map
        $j = 0; for ($i = 1; $i <= 100; $i++) { $j++;
          $class='tile';
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

          <div id="tile-<?php echo $i; ?>" class="<?php echo $class; ?>" data-shimmer="0" data-sparkle="0" data-aura="0">
            <div><?php echo $html; ?></div>
          </div>

        <?php } ?>

      </div>

    </div>

    <div class="debug-log">

      <div class="debug-inner">

        <div class="debug-toggle">Debug</div>

      </div>

    </div>

    <div class="status">

      <div class="status-inner">

        <span class="status-toggle">Status</span>

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



        <div class="unreachable">unreachable: <span></span></div>

        <div class="protection">protection: <span></span></div>

        <div class="tank">tank: <span></span></div>

        <div class="prepared">prepared: <span></span></div>

        <div class="bless">bless: <span></span></div>

        <div class="hypnotize">hypnotize: <span></span></div>

        <div class="stockpile">stockpile: <span></span></div>

        <div class="sift">sift: <span></span></div>

        <div class="panic">panic: <span></span></div>

        

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

        <div class="button done">Done</div>
        <div class="button view-map" data-game-panel="choose-booster-pack">View Map</div>

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

          <div class="button fountain-drink" data-amount="15">Drink (+15 Health &amp; Armor)</div>

          <div class="button fountain-search">Search (Find A Shard)</div>

          <div class="button fountain-frolic" data-amount="3">Frolic (+3 Courage)</div>

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

      <h2>Courage!</h2>

      <div class="courage-item-wrapper">

        <div class="message">Spend your courage points wisely.</div>

        <div class="panel">

          <div class="courage-items"></div>

          <div class="button courage-remove shown" data-amount="2">Remove Card<span class="remove-courage">2</span></div>

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

    <div class="gate-screen game-panel">

      <h2>Victory!</h2>

      <div class="message">You have beaten the all powerful Guardian. Rest easy, friend.</div>

      <div class="button gate-done">Play Again</div>

    </div>

    <div class="combat">

      <div class="monster-panel"></div>

      <div class="overlay"></div>

      <div class="player-panel">

        <div class="frame frame-left"></div>

        <div class="frame frame-right"></div>

        <div class="frame frame-top-left"></div>

        <div class="frame frame-top-right"></div>

        <div class="frame frame-top-middle"></div>

        <div class="message"></div>
        <div class="message discard-message"></div>
        <div class="message destroy-message"></div>

        <div class="crit">crit! <span></span></div>

        <img class="sprite" src="./images/spewnicorn808.png" />

        <div class="magic-rainbow" data-type="rainbow">

          <div class="rainbow-power-amount"><span class="rainbow-power-current"></span>/<span class="rainbow-power-max"></span></div>

          <div class="magic-type"><span></span> Magic</div>

          <div class="rainbow-power">
            <div class="mask">
              <div class="semi-circle"></div>
              <div class="semi-circle--mask"></div>
            </div>
          </div>

        </div>

        <div class="status-bar"></div>

        <div class="player">

          <div class="combat-log">
            <div class="dmg-taken" data-amount="0"></div>
            <div class="armor-lost" data-amount="0"></div>
            <div class="health-lost" data-amount="0"></div>
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

      <h2>Attach To Card</h2>

      <div class="message"></div>

      <div class="cards"></div>

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

      <h2>All Cards</h2>

      <div class="message"></div>

      <div class="cards"></div>

      <div class="buttons-wrapper">

        <div class="done button">Done</div>

      </div>

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