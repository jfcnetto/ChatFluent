/**
 * ChatFluent - Base de Dados de Idiomas
 * Este arquivo centraliza as informações de tradução, metadados e 
 * caminhos de imagem para renderização dinâmica do layout.
 */

const idiomasSuportados = [
    { id: 'pt', nome: 'Português', flag: 'br', link: '/ChatFluent/pt/index.html' },
    { id: 'en', nome: 'Inglês', flag: 'us', link: '/ChatFluent/pt/seo/aprender-ingles.html' },
    { id: 'de', nome: 'Alemão', flag: 'de', link: '#' },
    { id: 'pl', nome: 'Polonês', flag: 'pl', link: '#' },
    { id: 'es', nome: 'Espanhol', flag: 'es', link: '#' },
    { id: 'fr', nome: 'Francês', flag: 'fr', link: '#' },
    { id: 'it', nome: 'Italiano', flag: 'it', link: '#' },
    { id: 'nl', nome: 'Holandês', flag: 'nl', link: '#' },
    { id: 'ru', nome: 'Russo', flag: 'ru', link: '#' },
    { id: 'tr', nome: 'Turco', flag: 'tr', link: '#' },
    { id: 'ja', nome: 'Japonês', flag: 'jp', link: '#' }
];

const explicacoes = {
    pt: "Forma correta.",
    en: "Correct form.",
    de: "Richtig.",
    es: "Correcto.",
    fr: "Correct.",
    it: "Corretto.",
    nl: "Correct.",
    ru: "Правильно.",
    tr: "Doğru.",
    pl: "Poprawne.",
    ja: "正しいです。"
};

// Exportação para uso em outros scripts (app.js)
if (typeof module !== 'undefined') {
    module.exports = { idiomasSuportados, explicacoes };
}