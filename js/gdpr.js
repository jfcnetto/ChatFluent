(function() {
    // Verificar se já existe consentimento
    if (localStorage.getItem('chatfluent_gdpr')) {
        return; // Usuário já deu o consentimento
    }

    // Identificar o idioma a partir da URL, default 'en'
    const urlParams = new URLSearchParams(window.location.search);
    let ui = urlParams.get('ui');
    if (!ui) {
        const pathMatch = window.location.pathname.match(/\/([a-z]{2})\//);
        ui = pathMatch ? pathMatch[1] : (document.documentElement.lang || 'en');
    }

    const translations = {
        pt: {
            message: "Utilizamos cookies para melhorar sua experiência, personalizar anúncios e analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa Política de Privacidade.",
            accept: "Aceitar",
            decline: "Recusar",
            link: "Política de Privacidade",
            url: "/privacidade.html"
        },
        en: {
            message: "We use cookies to improve your experience, personalize ads, and analyze our traffic. By continuing to browse, you agree to our Privacy Policy.",
            accept: "Accept",
            decline: "Decline",
            link: "Privacy Policy",
            url: "/privacidade.html"
        },
        es: {
            message: "Utilizamos cookies para mejorar su experiencia, personalizar anuncios y analizar nuestro tráfico. Al continuar navegando, acepta nuestra Política de Privacidad.",
            accept: "Aceptar",
            decline: "Rechazar",
            link: "Política de Privacidad",
            url: "/privacidade.html"
        },
        fr: {
            message: "Nous utilisons des cookies pour améliorer votre expérience, personnaliser les annonces et analyser notre trafic. En poursuivant votre navigation, vous acceptez notre Politique de Confidentialité.",
            accept: "Accepter",
            decline: "Refuser",
            link: "Politique de Confidentialité",
            url: "/privacidade.html"
        },
        it: {
            message: "Utilizziamo i cookie per migliorare la tua esperienza, personalizzare gli annunci e analizzare il nostro traffico. Continuando a navigare, accetti la nostra Informativa sulla privacy.",
            accept: "Accetta",
            decline: "Rifiuta",
            link: "Informativa sulla privacy",
            url: "/privacidade.html"
        },
        de: {
            message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, Anzeigen zu personalisieren und unseren Traffic zu analysieren. Wenn Sie weiter surfen, stimmen Sie unserer Datenschutzrichtlinie zu.",
            accept: "Akzeptieren",
            decline: "Ablehnen",
            link: "Datenschutzrichtlinie",
            url: "/privacidade.html"
        },
        nl: {
            message: "We gebruiken cookies om uw ervaring te verbeteren, advertenties te personaliseren en ons verkeer te analyseren. Door verder te browsen, gaat u akkoord met ons Privacybeleid.",
            accept: "Accepteren",
            decline: "Weigeren",
            link: "Privacybeleid",
            url: "/privacidade.html"
        },
        pl: {
            message: "Używamy plików cookie, aby poprawić Twoje doświadczenie, personalizować reklamy i analizować nasz ruch. Kontynuując przeglądanie, wyrażasz zgodę na naszą Politykę prywatności.",
            accept: "Akceptuj",
            decline: "Odrzuć",
            link: "Polityka prywatności",
            url: "/privacidade.html"
        },
        ru: {
            message: "Мы используем файлы cookie для улучшения вашего опыта, персонализации рекламы и анализа нашего трафика. Продолжая просмотр, вы соглашаетесь с нашей Политикой конфиденциальности.",
            accept: "Принять",
            decline: "Отклонить",
            link: "Политика конфиденциальности",
            url: "/privacidade.html"
        },
        tr: {
            message: "Deneyiminizi geliştirmek, reklamları kişiselleştirmek ve trafiğimizi analiz etmek için çerezler kullanıyoruz. Gezinmeye devam ederek Gizlilik Politikamızı kabul etmiş olursunuz.",
            accept: "Kabul Et",
            decline: "Reddet",
            link: "Gizlilik Politikası",
            url: "/privacidade.html"
        },
        ja: {
            message: "お客様の体験を向上させ、広告をパーソナライズし、トラフィックを分析するためにCookieを使用しています。閲覧を続けることで、当社のプライバシーポリシーに同意したことになります。",
            accept: "同意する",
            decline: "拒否する",
            link: "プライバシーポリシー",
            url: "/privacidade.html"
        }
    };

    const t = translations[ui] || translations['en'];
    
    // Obter profundidade para link
    const isSeo = window.location.pathname.includes('/seo/');
    const depth = isSeo ? '../../' : '../';

    const bannerHtml = `
        <div id="gdpr-banner" class="gdpr-banner">
            <div class="gdpr-content">
                <p>${t.message} <a href="${depth}${ui}${t.url}" style="color: var(--primary); text-decoration: underline;">${t.link}</a>.</p>
            </div>
            <div class="gdpr-buttons">
                <button id="gdpr-accept" class="gdpr-btn gdpr-btn-accept">${t.accept}</button>
                <button id="gdpr-decline" class="gdpr-btn gdpr-btn-decline">${t.decline}</button>
            </div>
        </div>
    `;

    // Adicionar o banner ao DOM
    const bannerContainer = document.createElement('div');
    bannerContainer.innerHTML = bannerHtml;
    document.body.appendChild(bannerContainer.firstElementChild);

    // Adicionar eventos aos botões
    document.getElementById('gdpr-accept').addEventListener('click', function() {
        localStorage.setItem('chatfluent_gdpr', 'accepted');
        document.getElementById('gdpr-banner').style.display = 'none';
        // Aqui poderia recarregar anúncios ou ativar scripts condicionalmente
    });

    document.getElementById('gdpr-decline').addEventListener('click', function() {
        localStorage.setItem('chatfluent_gdpr', 'declined');
        document.getElementById('gdpr-banner').style.display = 'none';
    });
})();
