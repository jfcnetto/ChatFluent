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
<script src="/ChatFluent/js/gdpr.js"></script>
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
<script src="/ChatFluent/js/gdpr.js"></script>
</body>
</html>`;

    // Gravar index.html e historia.html copilados estaticamente
    fs.writeFileSync(path.join(langDir, 'index.html'), compilePage(indexTemplate, depth));
    fs.writeFileSync(path.join(langDir, 'historia.html'), compilePage(historiaTemplate, depth));

    // --- DICIONÁRIO DE TRADUÇÃO DAS PÁGINAS AUXILIARES ---
    const auxTranslations = {
        es: {
            "Regras do Jogo": "Reglas del Juego",
            "Saiba como pontuar, subir de nível e dominar o inglês no ChatFluent.": "Descubre cómo sumar puntos, subir de nivel y dominar idiomas en ChatFluent.",
            "O ChatFluent utiliza um sistema de gamificação para tornar seu aprendizado mais eficiente. Abaixo, detalhamos as regras fundamentais da nossa plataforma.": "ChatFluent utiliza un sistema de gamificación para que tu aprendizaje sea más eficiente. A continuación, detallamos las reglas fundamentales de nuestra plataforma.",
            "1. Sistema de Níveis": "1. Sistema de Niveles",
            "O aprendizado é dividido em três níveis de proficiência, cada um com uma carga de perguntas específica para testar sua resistência e vocabulário:": "El aprendizaje se divide en tres niveles de competencia, cada uno con una carga de preguntas específica para poner a prueba tu resistencia y vocabulario:",
            "Nível Básico 🌱:": "Nivel Básico 🌱:",
            "Lições compostas por 8 perguntas.": "Lecciones compuestas por 8 preguntas.",
            "Nível Intermediário 💪:": "Nivel Intermedio 💪:",
            "Lições compostas por 15 perguntas.": "Lecciones compuestas por 15 preguntas.",
            "Nível Avançado 🏆:": "Nivel Avanzado 🏆:",
            "Lições compostas por 25 perguntas.": "Lecciones compuestas por 25 preguntas.",
            "2. Pontuação e Competição": "2. Puntuación y Competencia",
            "Sua pontuação reflete a precisão e a rapidez do seu aprendizado. Note que o sistema permite": "Tu puntuación refleja la precisión y velocidad de tu aprendizaje. Ten en cuenta que el sistema permite",
            "pontuação negativa": "puntuación negativa",
            "em caso de muitos erros consecutivos:": "en caso de muchos errores consecutivos:",
            "Acerto de Primeira (Perfect):": "Acierto al Primer Intento (Perfect):",
            "Você ganha 10 pontos fixos + bônus de Streak (sequência).": "Ganas 10 puntos fijos + bonificación de Streak (racha).",
            "Acerto na Segunda Tentativa:": "Acierto al Segundo Intento:",
            "Você ganha apenas 1 ponto e sua sequência (streak) é zerada.": "Ganas solo 1 punto y tu racha (streak) se restablece a cero.",
            "Penalidade de Erro:": "Penalización por Error:",
            "Cada clique em uma opção incorreta subtrai 2 pontos do seu total imediatamente.": "Cada clic en una opción incorrecta resta inmediatamente 2 puntos de tu total.",
            "3. Bônus de Streak (Sequência)": "3. Bonificación de Streak (Racha)",
            "Para incentivar a precisão, acertos consecutivos sem erros aumentam sua pontuação exponencialmente. Cada acerto direto soma": "Para incentivar la precisión, los aciertos consecutivos sin errores aumentan tu puntuación exponencialmente. Cada acierto directo suma",
            "aos 10 pontos base.": "a los 10 puntos base.",
            "4. Progressão e Desbloqueio": "4. Progresión y Desbloqueo",
            "A pontuação é para o ranking, mas para": "La puntuación es para la clasificación, pero para",
            "desbloquear o próximo nível": "desbloquear el siguiente nivel",
            ", o critério é a precisão:": ", el criterio es la precisión:",
            "Você deve acertar pelo menos": "Debes acertar al menos",
            "80% das questões": "el 80% de las preguntas",
            "de uma lição para ser considerado apto ao próximo nível. Se não atingir a meta, deverá refazer a lição atual.": "de una lección para ser considerado apto para el siguiente nivel. Si no alcanzas la meta, deberás repetir la lección actual.",
            "5. O Mentor (NPC)": "5. El Mentor (NPC)",
            "Em caso de erro, o mentor fornecerá uma dica gramatical imediata. Você terá uma segunda chance para responder. Caso erre novamente, a questão é considerada perdida e o sistema avançará para a próxima pergunta.": "En caso de error, el mentor proporcionará un consejo gramatical inmediato. Tendrás una segunda oportunidad para responder. Si vuelves a fallar, la pregunta se considerará perdida y el sistema avanzará a la siguiente pregunta.",
            "6. Relatório de Desempenho": "6. Informe de Rendimiento",
            "Ao final de cada sessão, você receberá um detalhamento de seus acertos, falhas e sua pontuação final, informando se o próximo nível foi desbloqueado com sucesso.": "Al final de cada sesión, recibirás un desglose de tus aciertos, fallos y tu puntuación final, informándote si el siguiente nivel se ha desbloqueado correctamente.",
            
            "Contato": "Contacto",
            "Fale com a nossa equipe. Responderemos o mais rápido possível.": "Hable con nuestro equipo. Responderemos lo antes posible.",
            "Nome": "Nombre",
            "Seu nome completo": "Tu nombre completo",
            "Email": "Correo electrónico",
            "Seu melhor email": "Tu mejor correo",
            "Mensagem": "Mensaje",
            "Como podemos ajudar?": "¿Cómo podemos ayudar?",
            "Enviar Mensagem": "Enviar Mensaje",

            "Política de Privacidade": "Política de Privacidad",
            "Transparência sobre como cuidamos dos seus dados no ChatFluent.": "Transparencia sobre cómo cuidamos tus datos en ChatFluent.",
            "Esta política de privacidade descreve como coletamos, utilizamos e protegemos suas informações ao acessar o ChatFluent.": "Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información al acceder a ChatFluent.",
            "Informações coletadas": "Información recopilada",
            "Podemos coletar informações como endereço IP, tipo de navegador, páginas acessadas e tempo de permanência no site.": "Podemos recopilar información como la dirección IP, el tipo de navegador, las páginas visitadas y el tiempo de permanencia en el sitio.",
            "Uso das informações": "Uso de la información",
            "Os dados coletados são utilizados para melhorar a experiência do usuário, otimizar o conteúdo e aprimorar nossos services.": "Los datos recopilados se utilizan para mejorar la experiencia del usuario, optimizar el contenido y mejorar nuestros servicios.",
            "Cookies": "Cookies",
            "Utilizamos cookies para armazenar informações sobre preferências dos usuários e personalizar a experiência de navegação.": "Utilizamos cookies para almacenar información sobre las preferencias del usuario y personalizar la experiencia de navegación.",
            "Publicidade": "Publicidad",
            "Este site pode exibir anúncios por meio de parceiros como o Google AdSense, que utiliza cookies para exibir anúncios relevantes com base nas visitas anteriores do usuário.": "Este sitio puede mostrar anuncios a través de socios como Google AdSense, que utiliza cookies para mostrar anuncios relevantes basados en las visitas anteriores del usuario.",

            "Termos de Uso": "Términos de Uso",
            "Regras e condições para utilização do ChatFluent.": "Reglas y condiciones para el uso de ChatFluent.",
            "Ao acessar e utilizar o ChatFluent, você concorda com os termos e condições descritos abaixo.": "Al acceder y utilizar ChatFluent, usted acepta los términos y condiciones descritos a continuación.",
            "1. Aceite dos Termos": "1. Aceptación de los Términos",
            "O acesso a este site representa a aceitação integral destes termos de uso. Se você não concorda com qualquer parte, não deve utilizar o serviço.": "El acceso a este sitio representa la aceptación total de estos términos de uso. Si no está de acuerdo con alguna parte, no debe utilizar el servicio.",
            "2. Uso do Serviço": "2. Uso del Servicio",
            "O ChatFluent é uma plataforma de aprendizado de idiomas. O uso do serviço deve ser estritamente pessoal e não comercial.": "ChatFluent es una plataforma de aprendizaje de idiomas. El uso del servicio debe ser estrictamente personal y no comercial.",
            "3. Alterações nos Termos": "3. Cambios en los Términos",
            "Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a leitura periódica desta página.": "Nos reservamos el derecho de cambiar estos términos en cualquier momento sin previo aviso. Recomendamos la lectura periódica de esta página.",
            "4. Propriedade Intelectual": "4. Propiedad Intelectual",
            "Todo o conteúdo do site, incluindo textos, imagens e código-fonte, é de propriedade exclusiva do ChatFluent ou de seus licenciadores.": "Todo el contenido del sitio, incluidos los textos, las imágenes y el código fuente, es propiedad exclusiva de ChatFluent o de sus licenciantes."
        },
        fr: {
            "Regras do Jogo": "Règles du Jeu",
            "Saiba como pontuar, subir de nível e dominar o inglês no ChatFluent.": "Apprenez à marquer des points, à monter de niveau et à maîtriser les langues sur ChatFluent.",
            "O ChatFluent utiliza um sistema de gamificação para tornar seu aprendizado mais eficiente. Abaixo, detalhamos as regras fundamentais da nossa plataforma.": "ChatFluent utilise un système de gamification pour rendre votre apprentissage plus efficace. Ci-dessous, nous détaillons les règles fondamentales de notre plateforme.",
            "1. Sistema de Níveis": "1. Système de Niveaux",
            "O aprendizado é dividido em três níveis de proficiência, cada um com uma carga de perguntas específica para testar sua resistência e vocabulário:": "L'apprentissage est divisé en trois niveaux de compétence, chacun avec un nombre de questions spécifique pour tester votre endurance et votre vocabulaire :",
            "Nível Básico 🌱:": "Niveau Basique 🌱:",
            "Lições compostas por 8 perguntas.": "Leçons composées de 8 questions.",
            "Nível Intermediário 💪:": "Niveau Intermédiaire 💪:",
            "Lições compostas por 15 perguntas.": "Leçons composées de 15 questions.",
            "Nível Avançado 🏆:": "Niveau Avancé 🏆:",
            "Lições compostas por 25 perguntas.": "Leçons composées de 25 questions.",
            "2. Pontuação e Competição": "2. Score et Compétition",
            "Sua pontuação reflete a precisão e a rapidez do seu aprendizado. Note que o sistema permite": "Votre score reflète la précision et la rapidité de votre apprentissage. Notez que le système permet des",
            "pontuação negativa": "scores négatifs",
            "em caso de muitos erros consecutivos:": "en cas de nombreuses erreurs consécutives :",
            "Acerto de Primeira (Perfect):": "Réussite au Premier Essai (Perfect) :",
            "Você ganha 10 pontos fixos + bônus de Streak (sequência).": "Vous gagnez 10 points fixes + bonus de Streak (série).",
            "Acerto na Segunda Tentativa:": "Réussite au Deuxième Essai :",
            "Você ganha apenas 1 ponto e sua sequência (streak) é zerada.": "Vous gagnez seulement 1 point et votre série (streak) est réinitialisée à zéro.",
            "Penalidade de Erro:": "Pénalité d'Erreur :",
            "Cada clique em uma opção incorreta subtrai 2 pontos do seu total imediatamente.": "Chaque clic sur une option incorrecte soustrait immédiatement 2 points de votre total.",
            "3. Bônus de Streak (Sequência)": "3. Bonus de Streak (Série)",
            "Para incentivar a precisão, acertos consecutivos sem erros aumentam sua pontuação exponencialmente. Cada acerto direto soma": "Pour encourager la précision, les réponses correctes consécutives sans erreur augmentent votre score de manière exponentielle. Chaque réponse directe ajoute",
            "aos 10 pontos base.": "aux 10 points de base.",
            "4. Progressão e Desbloqueio": "4. Progression et Déverrouillage",
            "A pontuação é para o ranking, mas para": "Le score est pour le classement, mais pour",
            "desbloquear o próximo nível": "déverrouiller le niveau suivant",
            ", o critério é a precisão:": ", le critère est la précision :",
            "Você deve acertar pelo menos": "Vous devez répondre correctement à au moins",
            "80% das questões": "80% des questions",
            "de uma lição para ser considerado apto ao próximo nível. Se não atingir a meta, deverá refazer a lição atual.": "d'une leçon pour être considéré comme apte au niveau suivant. Si vous n'atteignez pas l'objectif, vous devez refaire la leçon en cours.",
            "5. O Mentor (NPC)": "5. Le Mentor (NPC)",
            "Em caso de erro, o mentor fornecerá uma dica gramatical imediata. Você terá uma segunda chance para responder. Caso erre novamente, a questão é considerada perdida e o sistema avançará para a próxima pergunta.": "En cas d'erreur, le mentor fournira un conseil de grammaire immédiat. Vous aurez une seconde chance de répondre. Si vous échouez à nouveau, la question est considérée comme perdue et le système passera à la question suivante.",
            "6. Relatório de Desempenho": "6. Rapport de Performance",
            "Ao final de cada sessão, você receberá um detalhamento de seus acertos, falhas e sua pontuação final, informando se o próximo nível foi desbloqueado com sucesso.": "À la fin de chaque session, vous recevrez un détail de vos réussites, de vos échecs et de votre score final, vous indiquant si le niveau suivant a été déverrouillé avec succès.",
            
            "Contato": "Contact",
            "Fale com a nossa equipe. Responderemos o mais rápido possível.": "Contactez notre équipe. Nous vous répondrons dès que possible.",
            "Nome": "Nom",
            "Seu nome completo": "Votre nom complet",
            "Email": "E-mail",
            "Seu melhor email": "Votre meilleur e-mail",
            "Mensagem": "Message",
            "Como podemos ajudar?": "Comment pouvons-nous vous aider ?",
            "Enviar Mensagem": "Envoyer le message",

            "Política de Privacidade": "Politique de Confidentialité",
            "Transparência sobre como cuidamos dos seus dados no ChatFluent.": "Transparence sur la façon dont nous prenons soin de vos données sur ChatFluent.",
            "Esta política de privacidade descreve como coletamos, utilizamos e protegemos suas informações ao acessar o ChatFluent.": "Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations lors de l'accès à ChatFluent.",
            "Informações coletadas": "Informations collectées",
            "Podemos coletar informações como endereço IP, tipo de navegador, páginas acessadas e tempo de permanência no site.": "Nous pouvons collecter des informations telles que l'adresse IP, le type de navigateur, les pages consultées et le temps passé sur le site.",
            "Uso das informações": "Utilisation des informations",
            "Os dados coletados são utilizados para melhorar a experiência do usuário, otimizar o conteúdo e aprimorar nossos serviços.": "Les données collectées sont utilisées pour améliorer l'expérience utilisateur, optimiser le contenu et améliorer nos services.",
            "Cookies": "Cookies",
            "Utilizamos cookies para armazenar informações sobre preferências dos usuários e personalizar a experiência de navegação.": "We utilise des cookies pour stocker des informations sur les préférences des utilisateurs et personnaliser l'expérience de navigation.",
            "Publicidade": "Publicité",
            "Este site pode exibir anúncios por meio de parceiros como o Google AdSense, que utiliza cookies para exibir anúncios relevantes com base nas visitas anteriores do usuário.": "Ce site peut afficher des publicités via des partenaires tels que Google AdSense, qui utilise des cookies pour afficher des publicités pertinentes basées sur les visites précédentes de l'utilisateur.",

            "Termos de Uso": "Conditions d'Utilisation",
            "Regras e condições para utilização do ChatFluent.": "Règles et conditions d'utilisation de ChatFluent.",
            "Ao acessar e utilizar o ChatFluent, você concorda com os termos e condições descritos abaixo.": "En accédant à ChatFluent et en l'utilisant, vous acceptez les termes et conditions décrits ci-dessous.",
            "1. Aceite dos Termos": "1. Acceptation des Conditions",
            "O acesso a este site representa a aceitação integral destes termos de uso. Se você não concorda com qualquer parte, não deve utilizar o serviço.": "L'accès à ce site représente l'acceptation intégrale de ces conditions d'utilisation. Si vous n'êtes pas d'accord avec une partie, vous ne devez pas utiliser le service.",
            "2. Uso do Serviço": "2. Utilisation du Service",
            "O ChatFluent é uma plataforma de aprendizado de idiomas. O uso do serviço deve ser estritamente pessoal e não comercial.": "ChatFluent est une plateforme d'apprentissage des langues. L'utilisation du service doit être strictement personnelle et non commerciale.",
            "3. Alterações nos Termos": "3. Modifications des Conditions",
            "Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a leitura periódica desta página.": "Nous nous réservons le droit de modifier ces conditions à tout moment et sans préavis. Nous vous recommandons de lire périodiquement cette page.",
            "4. Propriedade Intelectual": "4. Propriété Intellectuelle",
            "Todo o conteúdo do site, incluindo textos, imagens e código-fonte, é de propriedade exclusiva do ChatFluent ou de seus licenciadores.": "Tout le contenu du site, y compris les textes, les images et le code source, est la propriété exclusive de ChatFluent ou de ses concédants de licence."
        },
        ja: {
            "Regras do Jogo": "ゲームのルール",
            "Saiba como pontuar, subir de nível e dominar o inglês no ChatFluent.": "ChatFluentでの得点方法、レベルアップ方法、語学の習得方法をご紹介します。",
            "O ChatFluent utiliza um sistema de gamificação para tornar seu aprendizado mais eficiente. Abaixo, detalhamos as regras fundamentais da nossa plataforma.": "ChatFluentは、学習をより効率的にするためにゲーミフィケーションシステムを採用しています。以下に、当プラットフォームの基本ルールを説明します。",
            "1. Sistema de Níveis": "1. レベルシステム",
            "O aprendizado é dividido em três níveis de proficiência, cada um com uma carga de perguntas específica para testar sua resistência e vocabulário:": "学習は3つの習熟度レベルに分かれており、それぞれ耐久力と語彙力をテストするための特定の質問数が用意されています：",
            "Nível Básico 🌱:": "初級レベル 🌱:",
            "Lições compostas por 8 perguntas.": "レッスンは8つの質問で構成されています。",
            "Nível Intermediário 💪:": "中級レベル 💪:",
            "Lições compostas por 15 perguntas.": "レッスンは15の質問で構成されています。",
            "Nível Avançado 🏆:": "上級レベル 🏆:",
            "Lições compostas por 25 perguntas.": "レッスンは25の質問で構成されています。",
            "2. Pontuação e Competição": "2. 得点と競争",
            "Sua pontuação reflete a precisão e a rapidez do seu aprendizado. Note que o sistema permite": "あなたのスコアは学習の正確さとスピードを反映します。システム上、連続して間違えると",
            "pontuação negativa": "マイナス評価",
            "em caso de muitos erros consecutivos:": "となる場合があります：",
            "Acerto de Primeira (Perfect):": "一発正解（Perfect）：",
            "Você ganha 10 pontos fixos + bônus de Streak (sequência).": "固定10点＋連続正解（Streak）ボーナスを獲得できます。",
            "Acerto na Segunda Tentativa:": "2回目の挑戦での正解：",
            "Você ganha apenas 1 ponto e sua sequência (streak) é zerada.": "獲得できるのは1点のみで、連続正解（Streak）はリセットされます。",
            "Penalidade de Erro:": "誤回答ペナルティ：",
            "Cada clique em uma opção incorreta subtrai 2 pontos do seu total imediatamente.": "誤った選択肢をクリックするたびに、即座に2点が減点されます。",
            "3. Bônus de Streak (Sequência)": "3. 連続正解（Streak）ボーナス",
            "Para incentivar a precisão, acertos consecutivos sem erros aumentam sua pontuação exponencialmente. Cada acerto direto soma": "正確性を高めるため、間違えずに連続して正解するとスコアが指数関数的に増加します。直接の正解ごとに、基本の10点に",
            "aos 10 pontos base.": "が加算されます。",
            "4. Progressão e Desbloqueio": "4. 進捗とアンロック",
            "A pontuação é para o ranking, mas para": "スコアはランキング用ですが、",
            "desbloquear o próximo nível": "次のレベルをアンロックする",
            ", o critério é a precisão:": "基準は正確さです：",
            "Você deve acertar pelo menos": "次のレベルに進むには、レッスンの質問の少なくとも",
            "80% das questões": "80%に正解する",
            "de uma lição para ser considerado apto ao próximo nível. Se não atingir a meta, deverá refazer a lição atual.": "必要があります。目標に達しなかった場合は、現在のレッスンをやり直す必要があります。",
            "5. O Mentor (NPC)": "5. メンター（NPC）",
            "Em caso de erro, o mentor fornecerá uma dica gramatical imediata. Você terá uma segunda chance para responder. Caso erre novamente, a questão é considerada perdida e o sistema avançará para a próxima pergunta.": "間違えた場合、メンターがすぐに文法のアドバイスを提示します。もう一度回答するチャンスがあります。再度間違えた場合、その質問は不正解とみなされ、次の質問に進みます。",
            "6. Relatório de Desempenho": "6. 成績レポート",
            "Ao final of cada sessão, você receberá um detalhamento de seus acertos, falhas e sua pontuação final, informando se o próximo nível foi desbloqueado com sucesso.": "各セッションの終了時に、正解、不正解、最終スコアの詳細が表示され、次のレベルがアンロックされたかどうかが通知されます。",
            
            "Contato": "お問い合わせ",
            "Fale com a nossa equipe. Responderemos o mais rápido possível.": "スタッフにお問い合わせください。できるだけ早くお返事いたします。",
            "Nome": "お名前",
            "Seu nome completo": "お名前（フルネーム）",
            "Email": "メールアドレス",
            "Seu melhor email": "メールアドレス",
            "Mensagem": "メッセージ",
            "Como podemos ajudar?": "どのようなご用件でしょうか？",
            "Enviar Mensagem": "メッセージを送信",

            "Política de Privacidade": "プライバシーポリシー",
            "Transparência sobre como cuidamos dos seus dados no ChatFluent.": "ChatFluentにおける個人情報の取り扱いについての透明性。",
            "Esta política de privacidade descreve como coletamos, utilizamos e protegemos suas informações ao acessar o ChatFluent.": "このプライバシーポリシーは、ChatFluentにアクセスする際にお客様の情報をどのように収集、使用、および保護するかを説明するものです。",
            "Informações coletadas": "収集される情報",
            "Podemos coletar informações como endereço IP, tipo de navegador, páginas acessadas e tempo de permanência no site.": "IPアドレス、ブラウザの種類、アクセスしたページ、サイトでの滞在時間などの情報を収集する場合があります。",
            "Uso das informações": "情報の利用目的",
            "Os dados coletados são utilizados para melhorar a experiência do usuário, otimizar o conteúdo e aprimorar nossos serviços.": "収集されたデータは、ユーザーエクスペリエリエンスの向上、コンテンツの最適化、およびサービスの改善に使用されます。",
            "Cookies": "クッキーについて",
            "Utilizamos cookies para armazenar informações sobre preferências dos usuários e personalizar a experiência de navegação.": "ユーザーの好みの情報を保存し、ブラウジング体験をパーソナライズするためにクッキーを使用します。",
            "Publicidade": "広告について",
            "Este site pode exibir anúncios por meio de parceiros como o Google AdSense, que utiliza cookies para exibir anúncios relevantes com base nas visitas anteriores do usuário.": "当サイトでは、Google AdSenseなどのパートナーを通じて広告を表示する場合があります。これらのパートナーは、ユーザーの過去のアクセスに基づいて関連性の高い広告を表示するためにクッキーを使用します。",

            "Termos de Uso": "利用規約",
            "Regras e condições para utilização do ChatFluent.": "ChatFluentの利用に関する規則と条件。",
            "Ao acessar e utilizar o ChatFluent, você concorda com os termos e condições descritos abaixo.": "ChatFluentにアクセスし、これを利用することにより、以下に説明する利用規約に同意したものとみなされます。",
            "1. Aceite dos Termos": "1. 規約の承諾",
            "O acesso a este site representa a aceitação integral destes termos de uso. Se você não concorda com qualquer parte, não deve utilizar o serviço.": "当サイトへのアクセスは、これらの利用規約を完全に承諾したものとみなされます。同意されない部分がある場合は、サービスを利用しないでください。",
            "2. Uso do Serviço": "2. サービスの利用",
            "O ChatFluent é uma plataforma de aprendizado de idiomas. O uso do serviço deve ser estritamente pessoal e não comercial.": "ChatFluentは語学学習プラットフォームです。サービスの利用は個人的かつ非営利目的に限られます。",
            "3. Alterações nos Termos": "3. 規約の変更",
            "Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a leitura periódica desta página.": "当社は予告なしにいつでも本規約を変更する権利を留保します。定期的にこのページを確認することをお勧めします。",
            "4. Propriedade Intelectual": "4. 知的財産権",
            "Todo o conteúdo do site, incluindo textos, imagens e código-fonte, é de propriedade exclusiva do ChatFluent ou de seus licenciadores.": "テキスト、画像、ソースコードを含むサイトのすべてのコンテンツは、ChatFluentまたはそのライセンサーの独占的財産です。"
        },
        en: {
            "Regras do Jogo": "Game Rules",
            "Saiba como pontuar, subir de nível e dominar o inglês no ChatFluent.": "Learn how to score points, level up, and master languages on ChatFluent.",
            "O ChatFluent utiliza um sistema de gamificação para tornar seu aprendizado mais eficiente. Abaixo, detalhamos as regras fundamentais da nossa plataforma.": "ChatFluent uses a gamification system to make your learning more efficient. Below, we detail the fundamental rules of our platform.",
            "1. Sistema de Níveis": "1. Level System",
            "O aprendizado é dividido em três níveis de proficiência, cada um com uma carga de perguntas específica para testar sua resistência e vocabulário:": "Learning is divided into three proficiency levels, each with a specific load of questions to test your endurance and vocabulary:",
            "Nível Básico 🌱:": "Basic Level 🌱:",
            "Lições compostas por 8 perguntas.": "Lessons composed of 8 questions.",
            "Nível Intermediário 💪:": "Intermediate Level 💪:",
            "Lições compostas por 15 perguntas.": "Lessons composed of 15 questions.",
            "Nível Avançado 🏆:": "Advanced Level 🏆:",
            "Lições compostas por 25 perguntas.": "Lessons composed of 25 questions.",
            "2. Pontuação e Competição": "2. Scoring and Competition",
            "Sua pontuação reflete a precisão e a rapidez do seu aprendizado. Note que o sistema permite": "Your score reflects the accuracy and speed of your learning. Note that the system allows",
            "pontuação negativa": "negative scores",
            "em caso de muitos erros consecutivos:": "in case of many consecutive errors:",
            "Acerto de Primeira (Perfect):": "Correct on First Try (Perfect):",
            "Você ganha 10 pontos fixos + bônus de Streak (sequência).": "You earn 10 base points + Streak bonus.",
            "Acerto na Segunda Tentativa:": "Correct on Second Try:",
            "Você ganha apenas 1 ponto e sua sequência (streak) é zerada.": "You earn only 1 point and your streak is reset.",
            "Penalidade de Erro:": "Error Penalty:",
            "Cada clique em uma opção incorreta subtrai 2 pontos do seu total imediatamente.": "Each click on an incorrect option immediately subtracts 2 points from your total.",
            "3. Bônus de Streak (Sequência)": "3. Streak Bonus",
            "Para incentivar a precisão, acertos consecutivos sem erros aumentam sua pontuação exponencialmente. Cada acerto direto soma": "To encourage accuracy, consecutive correct answers without errors increase your score exponentially. Each direct hit adds",
            "aos 10 pontos base.": "to the 10 base points.",
            "4. Progressão e Desbloqueio": "4. Progression and Unlocking",
            "A pontuação é para o ranking, mas para": "Scores are for the ranking, but to",
            "desbloquear o próximo nível": "unlock the next level",
            ", o critério é a precisão:": ", the criterion is accuracy:",
            "Você deve acertar pelo menos": "You must answer at least",
            "80% das questões": "80% of the questions",
            "de uma lição para ser considerado apto ao próximo nível. Se não atingir a meta, deverá refazer a lição atual.": "in a lesson correctly to be considered eligible for the next level. If you do not meet the goal, you must redo the current lesson.",
            "5. O Mentor (NPC)": "5. The Mentor (NPC)",
            "Em caso de erro, o mentor fornecerá uma dica gramatical imediata. Você terá uma segunda chance para responder. Caso erre novamente, a questão é considerada perdida e o sistema avançará para a próxima pergunta.": "In case of error, the mentor will provide an immediate grammar tip. You will have a second chance to answer. If you fail again, the question is considered lost and the system will advance to the next question.",
            "6. Relatório de Desempenho": "6. Performance Report",
            "Ao final de cada sessão, você receberá um detalhamento de seus acertos, falhas e sua pontuação final, informando se o próximo nível foi desbloqueado com sucesso.": "At the end of each session, you will receive a breakdown of your hits, fails, and your final score, letting you know if the next level has been successfully unlocked.",
            
            "Contato": "Contact",
            "Fale com a nossa equipe. Responderemos o mais rápido possível.": "Talk to our team. We will respond as soon as possible.",
            "Nome": "Name",
            "Seu nome completo": "Your full name",
            "Email": "Email",
            "Seu melhor email": "Your best email",
            "Mensagem": "Message",
            "Como podemos ajudar?": "How can we help?",
            "Enviar Mensagem": "Send Message",

            "Política de Privacidade": "Privacy Policy",
            "Transparência sobre como cuidamos dos seus dados no ChatFluent.": "Transparency on how we take care of your data on ChatFluent.",
            "Esta política de privacidade descreve como coletamos, utilizamos e protegemos suas informações ao acessar o ChatFluent.": "This privacy policy describes how we collect, use, and protect your information when accessing ChatFluent.",
            "Informações coletadas": "Collected Information",
            "Podemos coletar informações como endereço IP, tipo de navegador, páginas acessadas e tempo de permanência no site.": "We may collect information such as IP address, browser type, pages accessed, and time spent on the site.",
            "Uso das informações": "Use of Information",
            "Os dados coletados são utilizados para melhorar a experiência do usuário, otimizar o conteúdo e aprimorar nossos serviços.": "The data collected is used to improve the user experience, optimize content, and enhance our services.",
            "Cookies": "Cookies",
            "Utilizamos cookies para armazenar informações sobre preferências dos usuários e personalizar a experiência de navegação.": "We use cookies to store information about user preferences and personalize the browsing experience.",
            "Publicidade": "Advertising",
            "Este site pode exibir anúncios por meio de parceiros como o Google AdSense, que utiliza cookies para exibir anúncios relevantes com base nas visitas anteriores do usuário.": "This site may display advertisements through partners like Google AdSense, which uses cookies to serve relevant ads based on the user's prior visits.",

            "Termos de Uso": "Terms of Use",
            "Regras e condições para utilização do ChatFluent.": "Rules and conditions for using ChatFluent.",
            "Ao acessar e utilizar o ChatFluent, você concorda com os termos e condições descritos abaixo.": "By accessing and using ChatFluent, you agree to the terms and conditions described below.",
            "1. Aceite dos Termos": "1. Acceptance of Terms",
            "O acesso a este site representa a aceitação integral destes termos de uso. Se você não concorda com qualquer parte, não deve utilizar o serviço.": "Access to this site represents full acceptance of these terms of use. If you do not agree with any part, you must not use the service.",
            "2. Uso do Serviço": "2. Use of Service",
            "O ChatFluent é uma plataforma de aprendizado de idiomas. O uso do serviço deve ser estritamente pessoal e não comercial.": "ChatFluent is a language learning platform. Use of the service must be strictly personal and non-commercial.",
            "3. Alterações nos Termos": "3. Changes to Terms",
            "Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a leitura periódica desta página.": "We reserve the right to change these terms at any time without prior notice. We recommend periodic reading of this page.",
            "4. Propriedade Intelectual": "4. Intellectual Property",
            "Todo o conteúdo do site, incluindo textos, imagens e código-fonte, é de propriedade exclusiva do ChatFluent ou de seus licenciadores.": "All content on the site, including text, images, and source code, is the exclusive property of ChatFluent or its licensors."
        }
    };

    const auxPages = ['regras.html', 'privacidade.html', 'termos.html', 'contato.html'];
    auxPages.forEach(page => {
        const srcPath = path.join(baseDir, 'pt', page);
        if (fs.existsSync(srcPath)) {
            let content = fs.readFileSync(srcPath, 'utf8');

            // 1. Limpar cabeçalho estático antigo inline
            content = content.replace(/<!-- HEADER \(DINÂMICO\) -->[\s\S]*?<!-- ADSENSE TOPO \(BANNER PROVISÓRIO OU ADS\) -->/gi, '<div id="header"></div>');
            content = content.replace(/<!-- HEADER \(DINÂMICO\) -->[\s\S]*?<!-- ADSENSE TOPO -->/gi, '<div id="header"></div>');
            content = content.replace(/<!-- HEADER \(DINÂMICO\) -->[\s\S]*?<main/gi, '<div id="header"></div><main');

            // 2. Limpar rodapé estático antigo inline
            content = content.replace(/<!-- FOOTER \(DINÂMICO\) -->[\s\S]*?<\/html>/gi, '<div id="footer"></div><script src="../js/adsense.js"></script><script src="../js/gdpr.js"></script></body></html>');

            // 3. Traduzir o conteúdo inteiro se a UI não for Português
            if (uiLang !== 'pt') {
                content = content.replace(/lang="pt"/g, `lang="${uiLang}"`);
                
                // Puxa as traduções do dicionário (ou cai em inglês como padrão)
                const dict = auxTranslations[uiLang] || auxTranslations['en'];
                Object.keys(dict).forEach(ptText => {
                    const translatedText = dict[ptText];
                    // Escapar caracteres especiais de Regex para substituição segura
                    const escapedPtText = ptText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    const regex = new RegExp(escapedPtText, 'g');
                    content = content.replace(regex, translatedText);
                });
            }

            // Injetar o cabeçalho e rodapé limpo e compilar para caminhos corretos
            fs.writeFileSync(path.join(langDir, page), compilePage(content, depth));
        }
    });

    // 2. Criar as páginas SEO com compilação estática
    const seoDir = path.join(langDir, 'seo');
    ensureDir(seoDir);

    const seoDepth = '../../'; // Duas pastas para trás para páginas SEO (ex: /pt/seo/aprender-ingles.html)

    // Dicionário de nomes de idiomas traduzidos para cada UI
    const langNames = {
        pt: { pt: "Português", en: "Inglês", es: "Espanhol", fr: "Francês", it: "Italiano", de: "Alemão", nl: "Holandês", pl: "Polonês", ru: "Russo", tr: "Turco", ja: "Japonês" },
        en: { pt: "Portuguese", en: "English", es: "Spanish", fr: "French", it: "Italian", de: "German", nl: "Dutch", pl: "Polish", ru: "Russian", tr: "Turkish", ja: "Japanese" },
        es: { pt: "Portugués", en: "Inglés", es: "Español", fr: "Francés", it: "Italiano", de: "Alemán", nl: "Holandés", pl: "Polaco", ru: "Ruso", tr: "Turco", ja: "Japonés" },
        fr: { pt: "Portugais", en: "Anglais", es: "Espagnol", fr: "Français", it: "Italien", de: "Allemand", nl: "Néerlandais", pl: "Polonais", ru: "Russe", tr: "Turc", ja: "Japonais" },
        it: { pt: "Portoghese", en: "Inglese", es: "Spagnolo", fr: "Francese", it: "Italiano", de: "Tedesco", nl: "Olandese", pl: "Polacco", ru: "Russo", tr: "Turco", ja: "Giapponese" },
        de: { pt: "Portugiesisch", en: "Englisch", es: "Spanisch", fr: "Französisch", it: "Italienisch", de: "Deutsch", nl: "Niederländisch", pl: "Polnisch", ru: "Russisch", tr: "Türkisch", ja: "Japanisch" },
        nl: { pt: "Portugees", en: "Engels", es: "Spaans", fr: "Frans", it: "Italiaans", de: "Duits", nl: "Nederlands", pl: "Pools", ru: "Russisch", tr: "Turks", ja: "Japans" },
        pl: { pt: "Portugalski", en: "Angielski", es: "Hiszpański", fr: "Francuski", it: "Włoski", de: "Niemiecki", nl: "Holenderski", pl: "Polski", ru: "Rosyjski", tr: "Turecki", ja: "Japoński" },
        ru: { pt: "Португальский", en: "Английский", es: "Испанский", fr: "Французский", it: "Итальянский", de: "Немецкий", nl: "Голландский", pl: "Польский", ru: "Русский", tr: "Турецкий", ja: "Японский" },
        tr: { pt: "Portekizce", en: "İngilizce", es: "İspanyolca", fr: "Fransızca", it: "İtalyanca", de: "Almanca", nl: "Felemekçe", pl: "Polonyaca", ru: "Rusça", tr: "Türkçe", ja: "Japonca" },
        ja: { pt: "ポルトガル語", en: "英語", es: "スペイン語", fr: "フランス語", it: "イタリア語", de: "ドイツ語", nl: "オランダ語", pl: "ポーランド語", ru: "ロシア語", tr: "トルコ語", ja: "日本語" }
    };

    // Traduções das páginas SEO para cada idioma da UI
    const seoTranslations = {
        pt: {
            title: (target) => `Aprender ${target} Grátis | ChatFluent`,
            desc: (target) => `Aprenda ${target} rápido com histórias interativas e divertidas.`,
            h1: (target) => `Quer Aprender ${target} Grátis?`,
            p: `Participe do nosso simulador interativo de diálogos e evolua rápido.`,
            btn: `Começar Agora`
        },
        en: {
            title: (target) => `Learn ${target} Free | ChatFluent`,
            desc: (target) => `Learn ${target} fast with interactive and fun stories.`,
            h1: (target) => `Want to Learn ${target} for Free?`,
            p: `Join our interactive dialogue simulator and level up fast.`,
            btn: `Start Now`
        },
        es: {
            title: (target) => `Aprender ${target} Gratis | ChatFluent`,
            desc: (target) => `Aprende ${target} rápido con historias interactivas y divertidas.`,
            h1: (target) => `¿Quieres Aprender ${target} Gratis?`,
            p: `Únete a nuestro simulador de diálogo interactivo y avanza rápido.`,
            btn: `Empezar Ahora`
        },
        fr: {
            title: (target) => `Apprendre le ${target} Gratuitement | ChatFluent`,
            desc: (target) => `Apprenez le ${target} rapidement grâce à des histoires interactives et amusantes.`,
            h1: (target) => `Vous voulez apprendre le ${target} gratuitement ?`,
            p: `Rejoignez notre simulateur de dialogue interactif et progressez rapidement.`,
            btn: `Commencer Maintenant`
        },
        ja: {
            title: (target) => `無料で${target}を学ぶ | ChatFluent`,
            desc: (target) => `インタラクティブで楽しいストーリーで${target}を素早く学びます。`,
            h1: (target) => `無料で${target}を学びたいですか？`,
            p: `インタラクティブな対話シミュレーターに参加して、素早くレベルアップしましょう。`,
            btn: `今すぐ始める`
        },
        de: {
            title: (target) => `Kostenlos ${target} lernen | ChatFluent`,
            desc: (target) => `Lernen Sie ${target} schnell mit interaktiven und unterhaltsamen Geschichten.`,
            h1: (target) => `Möchten Sie kostenlos ${target} lernen?`,
            p: `Nehmen Sie an unserem interaktiven Dialogsimulator teil und machen Sie schnelle Fortschritte.`,
            btn: `Jetzt Starten`
        },
        it: {
            title: (target) => `Impara il ${target} Gratis | ChatFluent`,
            desc: (target) => `Impara il ${target} velocemente con storie interattive e divertenti.`,
            h1: (target) => `Vuoi Imparare il ${target} Gratis?`,
            p: `Partecipa al nostro simulatore di dialogo interattivo e progredisci rapidamente.`,
            btn: `Inizia Ora`
        },
        nl: {
            title: (target) => `Gratis ${target} leren | ChatFluent`,
            desc: (target) => `Leer snel ${target} met interactieve en leuke verhalen.`,
            h1: (target) => `Wilt u gratis ${target} leren?`,
            p: `Doe mee met onze interactieve dialoogsimulator en ga snel vooruit.`,
            btn: `Nu Beginnen`
        },
        pl: {
            title: (target) => `Nauka ${target} za Darmo | ChatFluent`,
            desc: (target) => `Ucz się języka ${target} szybko dzięki interaktywnym i zabawnym historiom.`,
            h1: (target) => `Chcesz uczyć się języka ${target} za darmo?`,
            p: `Dołącz do naszego interaktywnego symulatora dialogów i rozwijaj się szybko.`,
            btn: `Rozpocznij Teraz`
        },
        ru: {
            title: (target) => `Учить ${target} Бесплатно | ChatFluent`,
            desc: (target) => `Учите ${target} быстро с помощью интерактивных и увлекательных историй.`,
            h1: (target) => `Хотите учить ${target} бесплатно?`,
            p: `Присоединяйтесь к нашему интерактивному симулятору диалогов и развивайтесь быстро.`,
            btn: `Начать Сейчас`
        },
        tr: {
            title: (target) => `Ücretsiz ${target} Öğrenin | ChatFluent`,
            desc: (target) => `İnteraktif ve eğlenceli hikayelerle hızlıca ${target} öğrenin.`,
            h1: (target) => `Ücretsiz ${target} Öğrenmek İster misiniz?`,
            p: `İnteraktif diyalog simülatörümüze katılın ve hızlıca ilerleyin.`,
            btn: `Şimdi Başla`
        }
    };

    targetLangs.forEach(targetLang => {
        if (targetLang === uiLang) return; // Ignora se o idioma alvo for igual à interface

        const tName = (langNames[uiLang] && langNames[uiLang][targetLang]) || targetLang.toUpperCase();
        const t = seoTranslations[uiLang] || seoTranslations['en'];

        const seoHtmlTemplate = `<!DOCTYPE html>
<html lang="${uiLang}">
<head>
    <meta charset="UTF-8">
    <title>${t.title(tName)}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ChatFluent/css/style.css">
    <meta name="description" content="${t.desc(tName)}">
</head>
<body>
<div id="header"></div>

<div id="main-banner" style="text-align: center; margin: 20px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<main class="container">
    <div style="text-align: center; padding: 50px;">
        <h1>${t.h1(tName)}</h1>
        <p>${t.p}</p>
        
        <a href="/ChatFluent/${uiLang}/historia.html?ui=${uiLang}&target=${targetLang}">
            <button style="margin-top: 20px; padding: 12px 30px;">${t.btn}</button>
        </a>
    </div>
</main>

<div id="footer-banner" style="text-align: center; margin: 25px auto; max-width: 1000px; padding: 0 15px;">
    <img src="/ChatFluent/img/banner-provisorio.png" alt="Propaganda" style="width: 100%; max-width: 970px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
</div>

<div id="footer"></div>
<script src="/ChatFluent/js/gdpr.js"></script>
</body>
</html>`;

        // Salvar página de SEO totalmente compilada estaticamente
        fs.writeFileSync(path.join(seoDir, `aprender-${targetLang}.html`), compilePage(seoHtmlTemplate, seoDepth));
    });
});

console.log("Arquitetura compilada estaticamente com sucesso!");
