const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');

// Recursively find all HTML files excluding the root index.html
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
            // Skip root index.html
            if (path.resolve(filePath) !== path.resolve(path.join(baseDir, 'index.html'))) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

const htmlFiles = getHtmlFiles(baseDir);
console.log(`Encontrados ${htmlFiles.length} arquivos HTML para analisar.`);

const targetSloganMenu = `<!-- MENU (CENTRALIZADO) -->
    <nav id="headerMenu" style="flex: 1; display: flex; justify-content: center; gap: 20px;">
      <a href="#" id="headerMenuHome" style="text-decoration: none; color: #333; font-weight: 600; font-size: 15px;">Home</a>
      <a href="#" id="headerMenuRegras" style="text-decoration: none; color: #333; font-weight: 600; font-size: 15px;">Regras</a>
      <a href="#" id="headerMenuContato" style="text-decoration: none; color: #333; font-weight: 600; font-size: 15px;">Contato</a>
    </nav>`;

const targetScriptMenu = `const menuTranslations = {
            'pt': { home: 'Home', rules: 'Regras', contact: 'Contato' },
            'en': { home: 'Home', rules: 'Rules', contact: 'Contact' },
            'es': { home: 'Inicio', rules: 'Reglas', contact: 'Contacto' },
            'fr': { home: 'Accueil', rules: 'Règles', contact: 'Contact' },
            'it': { home: 'Home', rules: 'Regole', contact: 'Contatti' },
            'de': { home: 'Startseite', rules: 'Regeln', contact: 'Kontakt' },
            'nl': { home: 'Home', rules: 'Regels', contact: 'Contact' },
            'pl': { home: 'Główna', rules: 'Zasady', contact: 'Kontakt' },
            'ru': { home: 'Главная', rules: 'Правила', contact: 'Контакты' },
            'tr': { home: 'Ana Sayfa', rules: 'Kurallar', contact: 'İletişim' },
            'ja': { home: 'ホーム', rules: 'ルール', contact: 'お問い合わせ' }
        };

        setTimeout(() => {
           const urlParams = new URLSearchParams(window.location.search);
           let ui = urlParams.get('ui');
           if (!ui) {
               const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/index\\.html|\\/([a-z]{2})\\/historia\\.html|\\/([a-z]{2})\\/[a-z]+\\.html/);
               ui = pathMatch ? (pathMatch[1] || pathMatch[2] || pathMatch[3]) : 'pt';
           }
           const isSeo = window.location.pathname.includes('/seo/');
           const depth = isSeo ? '../../' : '../';

           if(flagsMap[ui]) {
               document.getElementById('headerUiFlag').src = \`https://flagcdn.com/w20/\${flagsMap[ui].flag}.png\`;
               document.getElementById('headerUiText').innerText = flagsMap[ui].name;
           }

           const tMenu = menuTranslations[ui] || menuTranslations['en'];
           const homeLink = document.getElementById('headerMenuHome');
           const rulesLink = document.getElementById('headerMenuRegras');
           const contactLink = document.getElementById('headerMenuContato');
           if (homeLink) {
               homeLink.innerText = tMenu.home;
               homeLink.href = \`\${depth}\${ui}/index.html\`;
           }
           if (rulesLink) {
               rulesLink.innerText = tMenu.rules;
               rulesLink.href = \`\${depth}\${ui}/regras.html\`;
           }
           if (contactLink) {
               contactLink.innerText = tMenu.contact;
               contactLink.href = \`\${depth}\${ui}/contato.html\`;
           }

           // Torna a logo dinâmica`;

const targetFooterLang = `const urlParams = new URLSearchParams(window.location.search);
    let ui = urlParams.get('ui');
    if (!ui) {
        const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/index\\.html|\\/([a-z]{2})\\/historia\\.html/);
        ui = pathMatch ? (pathMatch[1] || pathMatch[2]) : 'pt';
    }
    `;

// Slogan selectors
const sloganDivRegex = /<!-- SLOGAN \(CENTRALIZADO\) -->\s*<div id="headerSlogan"[\s\S]*?<\/div>/;
const sloganScriptRegex = /const sloganMap = \{[\s\S]*?setTimeout\(\(\) => \{[\s\S]*?\}\s*if\(sloganMap\[ui\]\) \{[\s\S]*?\}\s*([^\n]*\/\/ Torna a logo dinâmica)/;

// Expressão regular flexível e testada para casar com a lógica de idioma do rodapé
const footerLangRegex = /const pathMatch = window\.location\.pathname\.match\(\/\\\/([a-z]\{2\})\\\/index\\\.html\|\\\/([a-z]\{2\})\\\/historia\\\.html\/\);\s*const ui = pathMatch \? \(pathMatch\[1\] \|\| pathMatch\[2\]\) : 'pt';/;

let updatedCount = 0;

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // 1. Substituir div do slogan
    if (sloganDivRegex.test(content)) {
        content = content.replace(sloganDivRegex, targetSloganMenu);
        modified = true;
    }

    // 2. Substituir script do slogan
    if (sloganScriptRegex.test(content)) {
        content = content.replace(sloganScriptRegex, targetScriptMenu);
        modified = true;
    }

    // 3. Substituir lógica do rodapé usando regex robusta
    if (footerLangRegex.test(content)) {
        content = content.replace(footerLangRegex, targetFooterLang);
        modified = true;
    }

    // 4. Substituir cabeçalho antigo se houver padrão antigo de UI
    const headerPathMatchStr = `const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/index\\.html|\\/([a-z]{2})\\/historia\\.html|\\/([a-z]{2})\\/[a-z]+\\.html/);
           const ui = pathMatch ? (pathMatch[1] || pathMatch[2] || pathMatch[3]) : 'pt';`;

    const targetHeaderUiResolve = `const urlParams = new URLSearchParams(window.location.search);
           let ui = urlParams.get('ui');
           if (!ui) {
               const pathMatch = window.location.pathname.match(/\\/([a-z]{2})\\/index\\.html|\\/([a-z]{2})\\/historia\\.html|\\/([a-z]{2})\\/[a-z]+\\.html/);
               ui = pathMatch ? (pathMatch[1] || pathMatch[2] || pathMatch[3]) : 'pt';
           }`;

    if (content.includes(headerPathMatchStr)) {
        content = content.replace(headerPathMatchStr, targetHeaderUiResolve);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
}

console.log(`Sucesso: ${updatedCount} arquivos HTML foram atualizados.`);
