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
    const indexHtml = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Aprender idiomas grátis | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
</head>
<body>
<div id="header"></div>
<main class="container">
    <section class="hero-grid">
        <div class="hero-text">
            <h1>A maneira gratuita, divertida e eficaz de aprender idiomas!</h1>
            <p>UI Language: ${uiLang}</p>
            <div style="margin: 20px 0;">
                <label>Quero aprender:</label>
                <select id="targetSelect" style="padding: 10px; font-size: 16px; border-radius: 8px;">
                    ${targetLangs.map(t => `<option value="${t}">${t.toUpperCase()}</option>`).join('\n                    ')}
                </select>
            </div>
            <button onclick="comecar()" style="width: 280px;">Começar agora</button>
            <script>
                function comecar() {
                    const target = document.getElementById('targetSelect').value;
                    window.location.href = '/ChatFluent/${uiLang}/historia.html?ui=${uiLang}&target=' + target;
                }
            </script>
        </div>
    </section>
</main>
<div id="footer"></div>
<script src="/ChatFluent/js/adsense.js"></script>
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
    
    fs.writeFileSync(path.join(langDir, 'index.html'), indexHtml);
    
    // Gerar historia.html
    const historiaHtml = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Simulador | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
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
