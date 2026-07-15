const fs = require('fs');
const path = require('path');

const langs = ['pt', 'en', 'es', 'fr', 'it', 'de', 'nl', 'pl', 'ru', 'tr', 'ja'];
const targetLangs = ['pt', 'en', 'es', 'fr', 'it', 'de', 'nl', 'pl', 'ru', 'tr', 'ja'];

const baseDir = path.join(__dirname, '..');

// Helper para criar diretórios
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// 1. Criar as pastas base e os arquivos index.html e historia.html
langs.forEach(uiLang => {
    const langDir = path.join(baseDir, uiLang);
    ensureDir(langDir);
    
    // Gerar index.html (Mockup basico, focado na estrutura)
    const indexHtmlTemplate = (uiLang) => `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Aprender idiomas grátis | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div id="header"></div>
<main class="container">
    <section class="hero-grid">
        <div class="hero-text">
            <h1>${uiLang === 'pt' ? 'A maneira gratuita, divertida e eficaz de aprender idiomas!' : 'The free, fun, and effective way to learn languages!'}</h1>
            <p>${uiLang === 'pt' ? 'Pratique com histórias interativas que simulam situações reais e evolua seu vocabulário em minutos por dia.' : 'Practice with interactive stories simulating real situations and improve your vocabulary in minutes a day.'}</p>
            <div style="margin: 25px 0; background: #f9f9f9; padding: 15px; border-radius: 12px; border: 2px solid var(--border);">
                <label style="font-weight: bold; display: block; margin-bottom: 8px;">\${uiLang === 'pt' ? 'Eu quero aprender:' : 'I want to learn:'}</label>
                
                <div class="custom-select-wrapper" id="homeTargetSelectWrapper" style="width:100%;">
                    <div class="custom-select-trigger" onclick="toggleHomeDropdown(event)" style="border-color: var(--primary);">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <img src="https://flagcdn.com/w20/us.png" id="homeTargetFlag" alt="Flag">
                            <span id="homeTargetText">English</span>
                        </div>
                        <span class="arrow-icon">▼</span>
                    </div>
                    <div class="custom-options" id="homeTargetOptions">
                        <div class="custom-option" onclick="selectHomeLang('en', 'us', 'English')"><img src="https://flagcdn.com/w20/us.png"> English</div>
                        <div class="custom-option" onclick="selectHomeLang('es', 'es', 'Español')"><img src="https://flagcdn.com/w20/es.png"> Español</div>
                        <div class="custom-option" onclick="selectHomeLang('fr', 'fr', 'Français')"><img src="https://flagcdn.com/w20/fr.png"> Français</div>
                        <div class="custom-option" onclick="selectHomeLang('it', 'it', 'Italiano')"><img src="https://flagcdn.com/w20/it.png"> Italiano</div>
                        <div class="custom-option" onclick="selectHomeLang('de', 'de', 'Deutsch')"><img src="https://flagcdn.com/w20/de.png"> Deutsch</div>
                        <div class="custom-option" onclick="selectHomeLang('nl', 'nl', 'Nederlands')"><img src="https://flagcdn.com/w20/nl.png"> Nederlands</div>
                        <div class="custom-option" onclick="selectHomeLang('pl', 'pl', 'Polski')"><img src="https://flagcdn.com/w20/pl.png"> Polski</div>
                        <div class="custom-option" onclick="selectHomeLang('ru', 'ru', 'Русский')"><img src="https://flagcdn.com/w20/ru.png"> Русский</div>
                        <div class="custom-option" onclick="selectHomeLang('tr', 'tr', 'Türkçe')"><img src="https://flagcdn.com/w20/tr.png"> Türkçe</div>
                        <div class="custom-option" onclick="selectHomeLang('ja', 'jp', '日本語')"><img src="https://flagcdn.com/w20/jp.png"> 日本語</div>
                        <div class="custom-option" onclick="selectHomeLang('pt', 'br', 'Português')"><img src="https://flagcdn.com/w20/br.png"> Português</div>
                    </div>
                </div>
            </div>
            
            <button onclick="comecar()" style="width: 100%; max-width: 280px;">\${uiLang === 'pt' ? 'Começar agora' : 'Start now'}</button>
            <script>
                let selectedTarget = 'en';
                
                function toggleHomeDropdown(e) {
                    e.stopPropagation();
                    const wrapper = document.getElementById('homeTargetSelectWrapper');
                    const options = document.getElementById('homeTargetOptions');
                    wrapper.classList.toggle('open');
                    options.classList.toggle('open');
                }

                document.addEventListener('click', () => {
                    const wrapper = document.getElementById('homeTargetSelectWrapper');
                    const options = document.getElementById('homeTargetOptions');
                    if(wrapper && wrapper.classList.contains('open')) {
                        wrapper.classList.remove('open');
                        options.classList.remove('open');
                    }
                });

                function selectHomeLang(code, flag, name) {
                    selectedTarget = code;
                    document.getElementById('homeTargetFlag').src = 'https://flagcdn.com/w20/' + flag + '.png';
                    document.getElementById('homeTargetText').innerText = name;
                }

                function comecar() {
                    window.location.href = '../' + selectedTarget + '/historia.html?ui=${uiLang}&target=' + selectedTarget;
                }
            </script>
        </div>
        <div class="hero-image">
            <img src="../img/hero.png" alt="Mascote ChatFluent">
            <img src="../img/banner-provisorio.png" alt="Banner" style="max-width: 100%; margin-top: 20px; border-radius: 8px;">
        </div>
    </section>
</main>
<div id="footer"></div>
<script src="../js/adsense.js"></script>
<script>
    async function loadComponent(id, file) {
        try {
            const res = await fetch(file);
            let html = await res.text();
            // Adapta caminhos relativos de componentes injetados dependendo da profundidade da página atual
            const isSeo = window.location.pathname.includes('/seo/');
            const depth = isSeo ? '../../' : '../';
            html = html.replace(/src="\/ChatFluent\//g, 'src="' + depth);
            html = html.replace(/href="\/ChatFluent\//g, 'href="' + depth);
            document.getElementById(id).innerHTML = html;
        } catch (err) { }
    }
    loadComponent("header", "../components/header.html");
    loadComponent("footer", "../components/footer.html");
</script>
</body>
</html>`;
    
    fs.writeFileSync(path.join(langDir, 'index.html'), indexHtmlTemplate(uiLang));
    
    // Gerar historia.html
    const historiaHtml = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Simulador | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div id="header"></div>
<main class="container">
    <div class="training-container">
        <!-- O APP.JS VAI RENDERIZAR O CHAT AQUI -->
        <div id="pergunta" style="min-height: 85px;"></div>
        <div id="opcoes" class="options"></div>
        <div id="feedback" style="transition: 0.3s; margin-top: 20px; min-height: 30px; text-align: center;"></div>
        <div class="score-badge" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 25px; padding-top: 15px; border-top: 1px solid var(--border);">
            <span>🏆 <span id="pontos">0</span> pontos</span>
            <span style="color: var(--border);">|</span>
            <span id="progresso"></span>
        </div>
    </div>
</main>
<div id="footer"></div>
<script src="/ChatFluent/js/idiomas.js"></script>
<script src="/ChatFluent/js/data.js"></script>
<script src="/ChatFluent/js/app.js"></script>
<script>
    async function loadComponent(id, file) {
        try {
            const res = await fetch(file);
            const html = await res.text();
            document.getElementById(id).innerHTML = html;
        } catch (err) { }
    }
    loadComponent("header", "/ChatFluent/components/header.html");
    loadComponent("footer", "/ChatFluent/components/footer.html");
</script>
</body>
</html>`;
    fs.writeFileSync(path.join(langDir, 'historia.html'), historiaHtml);

    // 2. Criar as paginas SEO
    const seoDir = path.join(langDir, 'seo');
    ensureDir(seoDir);
    
    targetLangs.forEach(targetLang => {
        if (targetLang === uiLang) return; // Não faz sentido SEO de aprender ingles pra quem busca em ingles
        const seoHtml = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Aprender ${targetLang.toUpperCase()} | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
    <meta name="description" content="Aprenda ${targetLang.toUpperCase()} de graça com o ChatFluent!">
</head>
<body>
<div id="header"></div>
<main class="container">
    <div style="text-align: center; padding: 50px;">
        <h1>SEO Landing Page: Aprender ${targetLang.toUpperCase()}</h1>
        <p>Aprenda rápido e fácil! Interface em ${uiLang}.</p>
        <a href="/ChatFluent/${uiLang}/historia.html?ui=${uiLang}&target=${targetLang}">
            <button>Começar Curso de ${targetLang.toUpperCase()}</button>
        </a>
    </div>
</main>
<script>
    async function loadComponent(id, file) {
        try {
            const res = await fetch(file);
            const html = await res.text();
            document.getElementById(id).innerHTML = html;
        } catch (err) { }
    }
    loadComponent("header", "/ChatFluent/components/header.html");
</script>
</body>
</html>`;
        fs.writeFileSync(path.join(seoDir, `aprender-${targetLang}.html`), seoHtml);
    });
});

console.log("Arquitetura gerada com sucesso!");
