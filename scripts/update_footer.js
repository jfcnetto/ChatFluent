const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');

// Encontra recursivamente todos os arquivos HTML (exceto na pasta scripts, node_modules e .git)
function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== '.git' && file !== 'node_modules' && file !== 'scripts' && file !== '.agents') {
                getHtmlFiles(filePath, fileList);
            }
        } else if (file.endsWith('.html')) {
            // Ignora o index.html da raiz
            if (path.resolve(filePath) !== path.resolve(path.join(baseDir, 'index.html'))) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

const htmlFiles = getHtmlFiles(baseDir);
console.log(`Analisando rodapé de ${htmlFiles.length} arquivos HTML...`);

// Trecho de código do rodapé a ser substituído
const oldFooterLangCode = `const urlParams = new URLSearchParams(window.location.search);
    let ui = urlParams.get('ui');
    if (!ui) {
        const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/index\\.html|\\/([a-z]{2})\\/historia\\.html/);
        ui = pathMatch ? (pathMatch[1] || pathMatch[2]) : 'pt';
    }`;

// Trecho de código novo corrigido
const newFooterLangCode = `const urlParams = new URLSearchParams(window.location.search);
    let ui = urlParams.get('ui');
    if (!ui) {
        const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/[a-z0-9-_]+\\.html/);
        ui = pathMatch ? pathMatch[1] : 'pt';
    }`;

let updatedCount = 0;

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Normaliza quebras de linha para comparação independente de SO
    const normalizedContent = content.replace(/\r\n/g, '\n');
    const normalizedOld = oldFooterLangCode.replace(/\r\n/g, '\n');
    const normalizedNew = newFooterLangCode.replace(/\r\n/g, '\n');

    if (normalizedContent.includes(normalizedOld)) {
        const updatedContent = normalizedContent.replace(normalizedOld, normalizedNew);
        // Restaura quebras de linha CRLF se o arquivo original as usava
        const finalContent = content.includes('\r\n') ? updatedContent.replace(/\n/g, '\r\n') : updatedContent;
        
        fs.writeFileSync(file, finalContent, 'utf8');
        console.log(`Rodapé atualizado com sucesso em: ${path.relative(baseDir, file)}`);
        updatedCount++;
    }
}

console.log(`\nSucesso: ${updatedCount} rodapés de páginas HTML foram atualizados.`);
