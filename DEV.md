# Local Dev

## node
You will need to install node. I recommend using nvm to do so.

https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

Once you install nvm, install node and use it:

nvm install 20.10.0
nvm use 20.10.0

## Running Game
1. Install MAMP
2. Point it at root directory
3. Start Server
4. Load in browser
5. Profit


## Building

You can build the JS bundle by running:

npm run build

When building for production, you will want to change the mode in webpack.config.js to "production" rather than "development"

If you want to bypass the build entirely (for local dev perhaps) you can change index.php to rely on script.js instead of bundle.js