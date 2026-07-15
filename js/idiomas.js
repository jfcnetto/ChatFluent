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
    pt: {
        perfect: "Perfeito!", goodRecovery: "Boa recuperação!", tooManyErrors: "Muitos erros. Avançando...", incorrect: "Incorreto. Dica:",
        excellent: "Excelente!", tryAgainTitle: "Não foi dessa vez!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Tente novamente", performance: "Aproveitamento:", goalToAdvance: "(Meta para avançar: 80%)",
        totalPoints: "Pontuação Total:", nextLevel: "Próximo Nível", restartJourney: "Reiniciar Jornada", tryAgainBtn: "Tentar Novamente",
        share: "📱 Compartilhe"
    },
    en: {
        perfect: "Perfect!", goodRecovery: "Good recovery!", tooManyErrors: "Too many errors. Moving on...", incorrect: "Incorrect. Tip:",
        excellent: "Excellent!", tryAgainTitle: "Better luck next time!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Try again", performance: "Performance:", goalToAdvance: "(Goal to advance: 80%)",
        totalPoints: "Total Points:", nextLevel: "Next Level", restartJourney: "Restart Journey", tryAgainBtn: "Try Again",
        share: "📱 Share"
    },
    es: {
        perfect: "¡Perfecto!", goodRecovery: "¡Buena recuperación!", tooManyErrors: "Demasiados erros. Avanzando...", incorrect: "Incorrecto. Consejo:",
        excellent: "¡Excelente!", tryAgainTitle: "¡No ha sido esta vez!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Inténtalo de nuevo", performance: "Rendimiento:", goalToAdvance: "(Meta para avanzar: 80%)",
        totalPoints: "Puntuación Total:", nextLevel: "Siguiente Nivel", restartJourney: "Reiniciar Jornada", tryAgainBtn: "Intentar de Nuevo",
        share: "📱 Compartir"
    },
    fr: {
        perfect: "Parfait !", goodRecovery: "Bonne récupération !", tooManyErrors: "Trop d'erreurs. On avance...", incorrect: "Incorrect. Astuce:",
        excellent: "Excellent !", tryAgainTitle: "Ce n'est pas pour cette fois !", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Réessayez", performance: "Réussite :", goalToAdvance: "(Objectif pour avancer : 80%)",
        totalPoints: "Score Total :", nextLevel: "Niveau Suivant", restartJourney: "Recommencer", tryAgainBtn: "Réessayer",
        share: "📱 Partager"
    },
    it: {
        perfect: "Perfetto!", goodRecovery: "Buon recupero!", tooManyErrors: "Troppi errori. Andiamo avanti...", incorrect: "Sbagliato. Suggerimento:",
        excellent: "Eccellente!", tryAgainTitle: "Non è andata bene questa volta!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Riprova", performance: "Rendimento:", goalToAdvance: "(Traguardo per avanzare: 80%)",
        totalPoints: "Punteggio Totale:", nextLevel: "Prossimo Livello", restartJourney: "Ricomincia", tryAgainBtn: "Riprova",
        share: "📱 Condividi"
    },
    de: {
        perfect: "Perfekt!", goodRecovery: "Gute Erholung!", tooManyErrors: "Zu viele Fehler. Weiter geht's...", incorrect: "Falsch. Tipp:",
        excellent: "Ausgezeichnet!", tryAgainTitle: "Nicht dieses Mal!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Versuche es noch einmal", performance: "Erfolgsquote:", goalToAdvance: "(Ziel zum Weiterkommen: 80%)",
        totalPoints: "Gesamtpunktzahl:", nextLevel: "Nächstes Level", restartJourney: "Reise neu starten", tryAgainBtn: "Erneut versuchen",
        share: "📱 Teilen"
    },
    nl: {
        perfect: "Perfect!", goodRecovery: "Goed hersteld!", tooManyErrors: "Te veel fouten. We gaan door...", incorrect: "Fout. Tip:",
        excellent: "Uitstekend!", tryAgainTitle: "Volgende keer beter!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Probeer het opnieuw", performance: "Prestatie:", goalToAdvance: "(Doel om door te gaan: 80%)",
        totalPoints: "Totale Score:", nextLevel: "Volgend Niveau", restartJourney: "Reis Herstarten", tryAgainBtn: "Opnieuw Proberen",
        share: "📱 Delen"
    },
    pl: {
        perfect: "Idealnie!", goodRecovery: "Dobra poprawa!", tooManyErrors: "Zbyt wiele błędów. Idziemy dalej...", incorrect: "Niepoprawnie. Wskazówka:",
        excellent: "Doskonale!", tryAgainTitle: "Nie tym razem!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Spróbuj ponownie", performance: "Wynik:", goalToAdvance: "(Cel do awansu: 80%)",
        totalPoints: "Suma Punktów:", nextLevel: "Następny Poziom", restartJourney: "Restart", tryAgainBtn: "Spróbuj Ponownie",
        share: "📱 Udostępnij"
    },
    ru: {
        perfect: "Отлично!", goodRecovery: "Хорошее исправление!", tooManyErrors: "Слишком много ошибок. Идем дальше...", incorrect: "Неверно. Подсказка:",
        excellent: "Великолепно!", tryAgainTitle: "Не в этот раз!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Попробуйте еще раз", performance: "Успешность:", goalToAdvance: "(Цель для перехода: 80%)",
        totalPoints: "Всего баллов:", nextLevel: "Следующий уровень", restartJourney: "Начать заново", tryAgainBtn: "Попробовать снова",
        share: "📱 Поделиться"
    },
    tr: {
        perfect: "Harika!", goodRecovery: "İyi toparladın!", tooManyErrors: "Çok fazla hata. Devam ediliyor...", incorrect: "Yanlış. İpucu:",
        excellent: "Mükemmel!", tryAgainTitle: "Bu sefer olmadı!", levelUp: " LEVEL UP! 🔓", mastered: "MASTERED! 🏆",
        failed: "FAILED 📚", tryAgainSub: "Tekrar dene", performance: "Başarı Oranı:", goalToAdvance: "(Geçmek için hedef: %80)",
        totalPoints: "Toplam Puan:", nextLevel: "Sonraki Seviye", restartJourney: "Yeniden Başlat", tryAgainBtn: "Tekrar Dene",
        share: "📱 Paylaş"
    },
    ja: {
        perfect: "完璧です！", goodRecovery: "よく挽回しました！", tooManyErrors: "エラーが多すぎます。次に進みます...", incorrect: "不正解です。ヒント：",
        excellent: "素晴らしい！", tryAgainTitle: "残念、また次回！", levelUp: " レベルアップ！ 🔓", mastered: "マスター達成！ 🏆",
        failed: "失敗 📚", tryAgainSub: "もう一度挑戦してください", performance: "達成率：", goalToAdvance: "（進級目標：80%）",
        totalPoints: "合計スコア：", nextLevel: "次のレベルへ", restartJourney: "最初からやり直す", tryAgainBtn: "もう一度試す",
        share: "📱 シェアする"
    }
};

if (typeof module !== 'undefined') {
    module.exports = { idiomasSuportados, uiTranslations };
}