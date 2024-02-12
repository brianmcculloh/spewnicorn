const fs = require('fs');
const path = require('path');

const cardsFilePath = './cards.js';
const baseDir = './scripts/cards/';
let currentDir = 'non-addable';
let importExports = {};

function processLine(line, fileLines) {
    // Check for directory switch comment
    const dirMatch = line.match(/\/\*\s*(\w+)\s*\*\//);
    if (dirMatch) {
        currentDir = dirMatch[1].toLowerCase();

        // Create directory if it doesn't exist
        ensureDirectoryExists(path.join(baseDir, currentDir));
        return;
    }

    // Check for a card object
    const cardMatch = line.match(/new Cards\(\{/);
    if (cardMatch) {
        const { cardContent, cardName } = extractCardContent(fileLines);

        // Write to individual file
        fs.writeFileSync(path.join(baseDir, currentDir, `${cardName}.js`), `export default {${cardContent}};\n`);

        // Update import/exports
        if (!importExports[currentDir]) {
            importExports[currentDir] = [];
        }
        importExports[currentDir].push(cardName);
    }
}

function extractCardContent(fileLines) {
    let isCapturing = false;
    let cardContent = '';
    let cardName = '';
    let braceCount = 1;

    for (const line of fileLines) {
        if (line.includes(`id:`)) {
            isCapturing = true;
            cardName = line.match(/id: '(\w+)'/)[1];
        }

        if (isCapturing) {
            if (line.includes('new Cards({')) {
                break;
            }

            // Count the braces to find the end of the card object
            braceCount += (line.match(/{/g) || []).length;
            braceCount -= (line.match(/}/g) || []).length;

            if (braceCount === 0 && line.includes('}),')) {
                break;
            }

            // Add the current line to card content
            cardContent += line + '\n';
        }
    }

    return { cardName, cardContent: cardContent.trim()};
}

function ensureDirectoryExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });

        // Create an empty index file for the new directory
        fs.writeFileSync(path.join(directory, 'index.js'), '');
    }
}

function updateIndexFiles() {
    Object.keys(importExports).forEach(dir => {
        const imports = importExports[dir].map(name => `import ${name} from './${name}.js';`).join('\n');
        const exports = `export {\n    ${importExports[dir].join(',\n    ')}\n};`;

        fs.writeFileSync(path.join(baseDir, dir, 'index.js'), `${imports}\n\n${exports}\n`);
    });
}

function main() {
    const fileContent = fs.readFileSync(cardsFilePath, 'utf8');
    const fileLines = fileContent.split('\n');
    fileLines.forEach((line, i) => processLine(line, fileLines.slice(i)));
}

main();
