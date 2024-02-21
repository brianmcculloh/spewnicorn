const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const cardsFilePath = './scripts/cards/all_cards.js';
const baseDir = './scripts/cards/card_definitions/';
let currentDir = 'non-addable';
let importExports = {};

const processLine = async function processLine (line, fileLines, index) {
    // Check for directory switch comment
    const dirMatch = line.match(/\/\*\s*([A-Z_\-\ ]+)\s*\*\//);

    if (dirMatch) {
        currentDir = dirMatch[1].toLowerCase().trim().replace(/ /g, '_');
        ensureDirectoryExists(path.join(baseDir, currentDir));
        return;
    }

    // Check for a card object
    const cardMatch = line.match(/new Cards\(\{/);
    if (cardMatch) {
        const { cardContent, cardName } = extractCardContent(fileLines, index);

        // Prettify and write to individual file
        const prettifiedContents = await prettier.format(`export default {${cardContent}};\n`, { parser: 'babel' });
        fs.writeFileSync(path.join(baseDir, currentDir, `${cardName}.js`), prettifiedContents);

        // Update import/exports
        if (!importExports[currentDir]) {
            importExports[currentDir] = [];
        }
        importExports[currentDir].push(cardName);
    }
}

const extractCardContent = function extractCardContent (fileLines, startIndex) {
    let isCapturing = false;
    let cardContent = '';
    let cardName = '';
    let braceCount = 0;

    for (let i = startIndex; i < fileLines.length; i++) {
        const line = fileLines[i];

        if (line.includes('new Cards({')) {
            isCapturing = true;
            braceCount++;
            // Start capturing from the next line to exclude 'new Cards({'
            continue;
        }

        if (!cardName && line.includes(`id:`)) {
            cardName = line.match(/id: '(\w+)'/)[1];
        }

        if (isCapturing) {
            if (line.includes('}),')) {
                // End capturing when we reach '}),'
                break;
            }

            braceCount += (line.match(/{/g) || []).length;
            braceCount -= (line.match(/}/g) || []).length;

            if (braceCount === 0) {
                // Capture the line that closes the card object
                cardContent += line;
                break;
            }

            // Add the current line to card content
            cardContent += line + '\n';
        }
    }

    return { cardName, cardContent: cardContent.trim() };
}


const ensureDirectoryExists = function ensureDirectoryExists (directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        fs.writeFileSync(path.join(directory, 'index.js'), '');
    }
}

const updateIndexFiles = async function updateIndexFiles () {
    for (const dir of Object.keys(importExports)) {
        const imports = importExports[dir].map(name => `import ${name} from './${name}.js';`).join('\n');
        const exports = `export {\n    ${importExports[dir].join(',\n    ')}\n};`;

        try {
            const prettifiedIndex = await prettier.format(`${imports}\n\n${exports}\n`, { parser: 'babel' });
            fs.writeFileSync(path.join(baseDir, dir, 'index.js'), prettifiedIndex);
        } catch (error) {
            console.error('Error formatting index file:', error);
        }
    }
}


const replaceCardDefinitions = function replaceCardDefinitions () {
    let fileContent = fs.readFileSync(cardsFilePath, 'utf8');

    // Regex to match the 'new Cards({...})' pattern and capture the 'id'
    const regex = /new Cards\(\{\s*id:\s*'([^']+)',[^]+?\}\),/g;

    // Replace each match with 'new Cards('id')'
    fileContent = fileContent.replace(regex, (match, cardId) => `new Cards(${cardId}),`);

    // Write the modified content back to the file
    fs.writeFileSync(cardsFilePath, fileContent);
}



const main = async function main () {
    const fileContent = fs.readFileSync(cardsFilePath, 'utf8');
    const fileLines = fileContent.split('\n');

    for (let index = 0; index < fileLines.length; index++) {
        await processLine(fileLines[index], fileLines, index);
    }

    updateIndexFiles();
    replaceCardDefinitions();
}

main().catch(e => console.error(e));

module.exports = {
    extractCardContent
};