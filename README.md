The Spewnicorn is a deck building roguelike card game inspired by Slay the Spire

How It Was Made

Coded completely in vanilla JavaScript, HTML, and CSS, it works in any browser. I used Electron.js to convert it into a Steam compatible game. It does make some use of jQuery unfortunately, but I definitely moved completely away from jQuery to vanilla JavaScript for my next game currently under development, Lightfighter. I used itch.io to source game assets such as card art, items, backgrounds, creatures, sound effects, and music.

Why It Was Made

This was a passion project I worked on for the better part of two years in order to gain a deeper understanding of JavaScript and game design—specifically game balance—which is arguably the most important part of any game.

It's also somewhat of a proof of concept, and it's something that I believe is truly unique. There are countless deck building card games out there, but this has to be the most robust and complex instance of one built entirely on JavaScript and available to play right in the browser.

Features

Procedurally generated level design, seed system allows replaying of the exact same scenario, 8-bit pixel artwork, full suite of music and sound effects, five difficulty settings, three deck archetype starter packs, hundreds of unique cards and items.

The Hardest Part

Undoubtedly the hardest part of development was getting the turn effects right. There are tons of different effects that can be applied to the player and the enemies—both buffs and debuffs—and they each consist of various amounts for any number of turns. Careful consideration had to be applied to when and how to clear these turn effects. The effects system ended up being much more complex than originally thought. The end of the player's turn is not the same in the game loop as the beginning of the enemies' turn, for instance.

From a higher level, the hardest thing to get right in a game like this is balance. That's why Slay the Spire is a perfect game: balance. There are definitely some "broken" cards and interactions in The Spewnicorn, not in terms of producing errors, but rather infinite combos, absurd scaling, and over-powered items and cards in certain situations. One could argue, though, that this is actually a fun element of the game. I am of that mindeset, personally :)

Future Updates

There are a few features I'd love to add down the road. First, I want the ability to save your game. Currently, when you exit the browser, or close the game on Steam, you have to start completely over. Second, I want to implement a scoring mechanic so different runs can be compared in strength and success. Finally, I want to implement Steam achievements. These features may be added at some point, and I'm definitely planning on integrating all of these components in all future card games I create.
