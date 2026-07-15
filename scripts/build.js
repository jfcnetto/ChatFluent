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

// Carregar componentes uma única vez para compilação estática
const rawHeader = fs.readFileSync(path.join(baseDir, 'components', 'header.html'), 'utf8');
const rawFooter = fs.readFileSync(path.join(baseDir, 'components', 'footer.html'), 'utf8');

const indexTranslations = {
    pt: { title: "Aprender idiomas grátis | ChatFluent", h1: "A maneira gratuita, divertida e eficaz de aprender idiomas!", p: "Pratique com histórias interativas que simulam situações reais e evolua seu vocabulário em minutos por dia.", label: "Eu quero aprender:", button: "Começar agora" },
    en: { title: "Learn languages for free | ChatFluent", h1: "The free, fun, and effective way to learn languages!", p: "Practice with interactive stories simulating real situations and improve your vocabulary in minutes a day.", label: "I want to learn:", button: "Start now" },
    es: { title: "Aprender idiomas gratis | ChatFluent", h1: "¡La forma gratuita, divertida y eficaz de aprender idiomas!", p: "Practica con historias interactivas que simulan situaciones reales y mejora tu vocabulario en minutos al día.", label: "Quiero aprender:", button: "Empezar ahora" },
    fr: { title: "Apprendre les langues gratuitement | ChatFluent", h1: "La méthode gratuite, amusante et efficace pour apprendre les langues !", p: "Entraînez-vous avec des histoires interactives simulant des situations réelles et améliorez votre vocabulaire en quelques minutes par jour.", label: "Je veux apprendre :", button: "Commencer maintenant" },
    it: { title: "Impara le lingue gratis | ChatFluent", h1: "Il modo gratuito, divertente ed efficace per imparare le lingue!", p: "Pratica con storie interattive che simulano situazioni reali e migliora il tuo vocabolario in pochi minuti al giorno.", label: "Voglio imparare:", button: "Inizia ora" },
    de: { title: "Kostenlos Sprachen lernen | ChatFluent", h1: "Der kostenlose, unterhaltsame und effektive Weg, Sprachen zu lernen!", p: "Üben Sie mit interaktiven Geschichten, die reale Situationen simulieren, und verbessern Sie Ihren Wortschatz in wenigen Minuten am Tag.", label: "Ich möchte lernen:", button: "Jetzt starten" },
    nl: { title: "Gratis talen leren | ChatFluent", h1: "De gratis, leuke en effectieve manier om talen te leren!", p: "Oefen met interactieve verhalen die echte situaties nabootsen en verbeter je woordenschat in een paar minuten per dag.", label: "Ik wil leren:", button: "Nu beginnen" },
    pl: { title: "Darmowa nauka języków | ChatFluent", h1: "Darmowy, zabawny i skuteczny sposób na naukę języków!", p: "Ćwicz z interaktywnymi historiami symulującymi prawdziwe sytuacje i popraw swoje słownictwo w kilka minut dziennie.", label: "Chcę się uczyć:", button: "Rozpocznij teraz" },
    ru: { title: "Изучение языков бесплатно | ChatFluent", h1: "Бесплатный, веселый и эффективный способ изучения языков!", p: "Практикуйтесь в интерактивных историях, имитирующих реальные ситуации, и улучшайте свой словарный запас за несколько минут в день.", label: "Я хочу изучать:", button: "Начать сейчас" },
    tr: { title: "Ücretsiz dil öğrenin | ChatFluent", h1: "Dil öğrenmenin ücretsiz, eğlenceli ve etkili yolu!", p: "Gerçek durumları simüle eden interaktif hikayelerle pratik yapın ve günde birkaç dakika içinde kelime bilginizi geliştirin.", label: "Öğrenmek istiyorum:", button: "Şimdi başla" },
    ja: { title: "無料で語学学習 | ChatFluent", h1: "無料、楽しく、効果的な語学学習方法！", p: "実際の状況をシミュレートしたインタラクティブなストーリーで練習し、1日わずか数分で語彙力を向上させます。", label: "学びたい言語：", button: "今すぐ始める" }
};

/**
 * Compila estaticamente uma página, injetando o cabeçalho e rodapé em tempo de build
 * e ajustando todos os caminhos (/ChatFluent/) para relativos de acordo com a profundidade
 */
function compilePage(htmlContent, depth) {
    let compiled = htmlContent;

    // 1. Injetar o header.html e footer.html diretamente no HTML
    compiled = compiled.replace('<div id="header"></div>', rawHeader);
    compiled = compiled.replace('<div id="footer"></div>', rawFooter);

    // 2. Remover a função loadComponent antiga e suas chamadas para evitar JS inútil e fetches de CORS
    compiled = compiled.replace(/<script>\s*async function loadComponent[\s\S]*?<\/script>/gi, '');
    compiled = compiled.replace(/<script src="\/ChatFluent\/js\/adsense\.js"><\/script>\s*<script>\s*loadComponent[\s\S]*?<\/script>/gi, '<script src="/ChatFluent/js/adsense.js"></script>');

    // 3. Ajustar todos os caminhos absolutos /ChatFluent/ para a profundidade relativa atual (ex: ../ ou ../../)
    compiled = compiled.replace(/\/ChatFluent\//g, depth);

    return compiled;
}

// 1. Compilar e gerar as pastas de idiomas
langs.forEach(uiLang => {
    const langDir = path.join(baseDir, uiLang);
    ensureDir(langDir);

    const depth = '../'; // Para as pastas como /pt/, /en/, a profundidade é sempre um nível acima

    const t = indexTranslations[uiLang] || indexTranslations['en'];
    // --- TEMPLATE DA TELA INICIAL (index.html) ---
    const indexTemplate = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>${t.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
</head>
<body>
<div id="header"></div>

<div id="main-banner" style="text-align: center; margin: 20px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<main class="container">
    <section class="hero-grid">
        <div class="hero-text">
            <h1>${t.h1}</h1>
            <p>${t.p}</p>
            
            <div style="margin: 25px 0; background: #f9f9f9; padding: 15px; border-radius: 12px; border: 2px solid var(--border);">
                <label style="font-weight: bold; display: block; margin-bottom: 8px;">${t.label}</label>
                
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
            
            <button onclick="comecar()" style="width: 100%; max-width: 280px;">${t.button}</button>
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
            <img src="/ChatFluent/img/hero.png" alt="Mascote ChatFluent">
        </div>
    </section>
</main>

<div id="footer-banner" style="text-align: center; margin: 25px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<div id="footer"></div>
<script src="/ChatFluent/js/adsense.js"></script>
</body>
</html>`;

    // --- TEMPLATE DA HISTORIA (historia.html) ---
    const historiaTemplate = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>Simulador | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
</head>
<body>
<div id="header"></div>

<div id="main-banner" style="text-align: center; margin: 20px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

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

<div id="footer-banner" style="text-align: center; margin: 25px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<div id="footer"></div>
<script src="/ChatFluent/js/idiomas.js"></script>
<script src="/ChatFluent/js/data.js"></script>
<script src="/ChatFluent/js/app.js"></script>
</body>
</html>`;

    // Gravar index.html e historia.html copilados estaticamente
    fs.writeFileSync(path.join(langDir, 'index.html'), compilePage(indexTemplate, depth));
    fs.writeFileSync(path.join(langDir, 'historia.html'), compilePage(historiaTemplate, depth));

    // --- COPIAR E COMPILAR PÁGINAS AUXILIARES ---
    const auxPages = ['regras.html', 'privacidade.html', 'termos.html', 'contato.html'];
    auxPages.forEach(page => {
        const srcPath = path.join(baseDir, 'pt', page);
        if (fs.existsSync(srcPath)) {
            let content = fs.readFileSync(srcPath, 'utf8');

            // Traduzir textos simples de cabeçalho se a UI não for Português
            if (uiLang !== 'pt') {
                content = content.replace(/lang="pt"/g, `lang="${uiLang}"`);
                content = content.replace(/Regras do Jogo/g, 'Game Rules');
                content = content.replace(/Termos de Uso/g, 'Terms of Use');
                content = content.replace(/Políticas de Privacidade/g, 'Privacy Policy');
                content = content.replace(/Política de Privacidade/g, 'Privacy Policy');
                content = content.replace(/Contato/g, 'Contact');
                content = content.replace(/Fale com a nossa equipe/g, 'Talk to our team');
                content = content.replace(/Enviar Mensagem/g, 'Send Message');
                content = content.replace(/Nome/g, 'Name');
            }

            // Injetar o cabeçalho e rodapé e corrigir todos os paths de imagem e CSS
            fs.writeFileSync(path.join(langDir, page), compilePage(content, depth));
        }
    });

    // 2. Criar as páginas SEO com compilação estática
    const seoDir = path.join(langDir, 'seo');
    ensureDir(seoDir);

    const seoDepth = '../../'; // Duas pastas para trás para páginas SEO (ex: /pt/seo/aprender-ingles.html)

    targetLangs.forEach(targetLang => {
        if (targetLang === uiLang) return; // Ignora se o idioma alvo for igual à interface

        const seoHtmlTemplate = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>${uiLang === 'pt' ? `Aprender ${targetLang.toUpperCase()} Grátis` : `Learn ${targetLang.toUpperCase()} Free`} | ChatFluent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
    <meta name="description" content="Aprenda ${targetLang.toUpperCase()} rápido com histórias interativas e divertidas.">
</head>
<body>
<div id="header"></div>

<div id="main-banner" style="text-align: center; margin: 20px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<main class="container">
    <div style="text-align: center; padding: 50px;">
        <h1>${uiLang === 'pt' ? `Quer Aprender ${targetLang.toUpperCase()} Grátis?` : `Want to Learn ${targetLang.toUpperCase()} for Free?`}</h1>
        <p>${uiLang === 'pt' ? 'Participe do nosso simulador interativo de diálogos e evolua rápido.' : 'Join our interactive dialogue simulator and level up fast.'}</p>
        
        <a href="/ChatFluent/${uiLang}/historia.html?ui=${uiLang}&target=${targetLang}">
            <button style="margin-top: 20px; padding: 12px 30px;">${uiLang === 'pt' ? 'Começar Agora' : 'Start Now'}</button>
        </a>
    </div>
</main>

<div id="footer-banner" style="text-align: center; margin: 25px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<div id="footer"></div>
</body>
</html>`;

        // Salvar página de SEO totalmente compilada estaticamente
        fs.writeFileSync(path.join(seoDir, `aprender-${targetLang}.html`), compilePage(seoHtmlTemplate, seoDepth));
    });
});

console.log("Arquitetura compilada estaticamente com sucesso!");
