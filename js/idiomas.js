/**
 * ChatFluent - Base de Dados de Idiomas
 * Centraliza as informações de tradução e caminhos para a UI
 */

const idiomasSuportados = [
    { id: 'pt', nome: 'Português', nativo: 'Português', flag: 'br' },
    { id: 'en', nome: 'Inglês', nativo: 'English', flag: 'us' },
    { id: 'es', nome: 'Espanhol', nativo: 'Español', flag: 'es' },
    { id: 'fr', nome: 'Francês', nativo: 'Français', flag: 'fr' },
    { id: 'it', nome: 'Italiano', nativo: 'Italiano', flag: 'it' },
    { id: 'de', nome: 'Alemão', nativo: 'Deutsch', flag: 'de' },
    { id: 'nl', nome: 'Holandês', nativo: 'Nederlands', flag: 'nl' },
    { id: 'pl', nome: 'Polonês', nativo: 'Polski', flag: 'pl' },
    { id: 'ru', nome: 'Russo', nativo: 'Русский', flag: 'ru' },
    { id: 'tr', nome: 'Turco', nativo: 'Türkçe', flag: 'tr' },
    { id: 'ja', nome: 'Japonês', nativo: '日本語', flag: 'jp' }
];

const uiTranslations = {
    pt: { perfect: "Perfeito!", goodRecovery: "Boa recuperação!", tooManyErrors: "Muitos erros. Avançando...", incorrect: "Incorreto. Dica:" },
    en: { perfect: "Perfect!", goodRecovery: "Good recovery!", tooManyErrors: "Too many errors. Moving on...", incorrect: "Incorrect. Tip:" },
    es: { perfect: "¡Perfecto!", goodRecovery: "¡Buena recuperación!", tooManyErrors: "Demasiados errores. Avanzando...", incorrect: "Incorrecto. Consejo:" },
    fr: { perfect: "Parfait !", goodRecovery: "Bonne récupération !", tooManyErrors: "Trop d'erreurs. On avance...", incorrect: "Incorrect. Astuce:" },
    it: { perfect: "Perfetto!", goodRecovery: "Buon recupero!", tooManyErrors: "Troppi errori. Andiamo avanti...", incorrect: "Sbagliato. Suggerimento:" },
    de: { perfect: "Perfekt!", goodRecovery: "Gute Erholung!", tooManyErrors: "Zu viele Fehler. Weiter geht's...", incorrect: "Falsch. Tipp:" },
    nl: { perfect: "Perfect!", goodRecovery: "Goed hersteld!", tooManyErrors: "Te veel fouten. We gaan door...", incorrect: "Fout. Tip:" },
    pl: { perfect: "Idealnie!", goodRecovery: "Dobra poprawa!", tooManyErrors: "Zbyt wiele błędów. Idziemy dalej...", incorrect: "Niepoprawnie. Wskazówka:" },
    ru: { perfect: "Отлично!", goodRecovery: "Хорошее исправление!", tooManyErrors: "Слишком много ошибок. Идем дальше...", incorrect: "Неверно. Подсказка:" },
    tr: { perfect: "Harika!", goodRecovery: "İyi toparladın!", tooManyErrors: "Çok fazla hata. Devam ediliyor...", incorrect: "Yanlış. İpucu:" },
    ja: { perfect: "完璧です！", goodRecovery: "よく挽回しました！", tooManyErrors: "エラーが多すぎます。次に進みます...", incorrect: "不正解です。ヒント：" }
};

if (typeof module !== 'undefined') {
    module.exports = { idiomasSuportados, uiTranslations };
}