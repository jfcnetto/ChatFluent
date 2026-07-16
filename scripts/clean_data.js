const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');
let content = fs.readFileSync(dataPath, 'utf8');

console.log("Original file length:", content.length);

// 1. Find all occurrences of "const translationsMap = ["
const marker = 'const translationsMap = [';
const firstIdx = content.indexOf(marker);

if (firstIdx !== -1) {
    const secondIdx = content.indexOf(marker, firstIdx + marker.length);
    if (secondIdx !== -1) {
        console.log("Found duplicate translationsMap! Cleaning up...");
        
        // Find where the second translationsMap array ends.
        // It ends with ]; followed by const rawQuestions = [
        const rawQuestionsMarker = 'const rawQuestions = [';
        const rawQuestionsIdx = content.indexOf(rawQuestionsMarker, secondIdx);
        
        if (rawQuestionsIdx !== -1) {
            // Keep everything before the duplicate, and everything from rawQuestions onwards
            content = content.substring(0, secondIdx) + content.substring(rawQuestionsIdx);
            console.log("Duplicate translationsMap successfully removed.");
        }
    }
}

// 2. Ensure q() helper is clean and doesn't use rawQuestionsIndexMap
// Replace the rawQuestionsIndexMap[en] implementation with the simpler sequential index counter if present
const buggyQ = `function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
    // Encontra as traduções adicionais no mapa de traduções usando a correspondência do texto em inglês
    const index = rawQuestionsIndexMap[en];
    const trans = index !== undefined ? translationsMap[index] : null;`;

const cleanQ = `let questionCounter = 0;
function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
    const index = questionCounter++;
    const trans = translationsMap[index];`;

if (content.includes(buggyQ)) {
    content = content.replace(buggyQ, cleanQ);
    console.log("Cleaned up buggy q() helper implementation.");
}

// Write the cleaned file back
fs.writeFileSync(dataPath, content, 'utf8');
console.log("Cleaned file length:", content.length);
console.log("Cleanup finished successfully!");
