/* 
    DATA.JS - Base de Dados de Histórias Interativas 
    Estrutura otimizada e traduzida para os 11 idiomas (Níveis 0, 1 e 2).
*/

const baseDeDados = {};

// 1. Banco de Dados Base Estático em Inglês (Para aprender Inglês)
baseDeDados["en"] = [
    // --- NÍVEL 0: BÁSICO (8 Perguntas) ---
    {
        "npc": "Hi! How are you?",
        "opcoes": ["I'm fine, thanks!", "Fine you", "I is good"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "Resposta padrão e educada para 'Como você está?'." }
    },
    {
        "npc": "What is your name?",
        "opcoes": ["My name is John", "Name John", "Me John"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "Estrutura básica para se apresentar." }
    },
    {
        "npc": "What would you like to eat?",
        "opcoes": ["I want pizza", "I would like pizza", "Give pizza"],
        "correta": 1,
        "nivel": 0,
        "explicacao": { "pt": "'I would like' é a forma educada de fazer pedidos." }
    },
    {
        "npc": "Excuse me, do you have the time?",
        "opcoes": ["It's half past two", "Time is 2:30", "Two thirty"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "Forma comum de dizer horários terminados em :30." }
    },
    {
        "npc": "Where are you from?",
        "opcoes": ["I'm from Brazil", "Brazil I am", "From Brazil"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "Usamos 'from' para indicar origem/país." }
    },
    {
        "npc": "I'm hungry.",
        "opcoes": ["Me too, let's eat", "Hungry me", "Eat go"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "'Let's' é usado para sugerir uma ação em grupo." }
    },
    {
        "npc": "Can I borrow your pen?",
        "opcoes": ["Sure, here it is", "Pen take", "Borrow yes"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "'Borrow' significa pegar emprestado." }
    },
    {
        "npc": "Happy Birthday!",
        "opcoes": ["Thank you so much!", "Birthday thanks", "Happy thanks"],
        "correta": 0,
        "nivel": 0,
        "explicacao": { "pt": "Forma mais comum de agradecer parabéns." }
    },
    // --- NÍVEL 1: INTERMEDIÁRIO (8 Perguntas) ---
    {
        "npc": "Would you like to order now?",
        "opcoes": ["Yes, I'll have the steak", "Yes, I want buy steak", "Give me steak"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'I'll have...' é usado ao pedir comida." }
    },
    {
        "npc": "What is your favorite hobby?",
        "opcoes": ["I enjoy reading books", "I like read", "Read is my hobby"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'I enjoy + verbo com ING' é muito natural em inglês." }
    },
    {
        "npc": "How can I get to the airport?",
        "opcoes": ["You can take the subway", "Go subway", "Subway is good"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Indicação padrão para transporte público." }
    },
    {
        "npc": "It is raining heavily outside.",
        "opcoes": ["I'll take an umbrella", "Umbrella take", "I take umbrella"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Uso de 'will' para decisões imediatas." }
    },
    {
        "npc": "Have you finished the task?",
        "opcoes": ["Not yet, I need more time", "No, need time", "Yes, I finish"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'Not yet' significa 'ainda não'." }
    },
    {
        "npc": "What did you do on the weekend?",
        "opcoes": ["I went to the beach", "I go to beach", "I went beach"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Passado simples do verbo 'go' é 'went'." }
    },
    {
        "npc": "Do you have any siblings?",
        "opcoes": ["Yes, one brother and a sister", "Yes, two siblings brothers", "Yes, I have"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'Siblings' engloba irmãos e irmãs." }
    },
    {
        "npc": "Can we schedule the meeting tomorrow?",
        "opcoes": ["Yes, ten AM works for me", "Yes, tomorrow ok", "Tomorrow yes"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'Works for me' significa 'funciona/está bom para mim'." }
    },
    // --- NÍVEL 2: AVANÇADO (8 Perguntas) ---
    {
        "npc": "What are your strengths?",
        "opcoes": ["I'm proactive and organized", "I am good worker", "Proactive me"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Vocabulário profissional comum para entrevistas." }
    },
    {
        "npc": "What should we do about the delay?",
        "opcoes": ["We should prioritize critical tasks", "Work faster", "Delay bad"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Sugestão de ação profissional e focada." }
    },
    {
        "npc": "How do you handle stress?",
        "opcoes": ["I practice sports and meditation", "I rest", "Stress is ok"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Resposta bem estruturada para entrevistas de emprego." }
    },
    {
        "npc": "Do you agree with this proposal?",
        "opcoes": ["I agree, provided we review the budget", "Yes, I agree", "Proposal yes"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Provided' estabelece uma condição formal." }
    },
    {
        "npc": "What is your sales forecast?",
        "opcoes": ["We expect a ten percent increase", "Sales good", "Increase sales"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Terminologia de negócios para estimativas." }
    },
    {
        "npc": "Was there any issue with the server?",
        "opcoes": ["Yes, the server went offline", "Server bad", "No server"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Went offline' significa que caiu ou desconectou." }
    },
    {
        "npc": "Can you send the invoice, please?",
        "opcoes": ["Sure, I'll email it today", "Invoice email", "Send yes"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Resposta educada para faturamento." }
    },
    {
        "npc": "What is the impact of this new law?",
        "opcoes": ["It will change business taxes", "New taxes", "Law change"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Explicação técnica sobre leis corporativas." }
    }
];

// 2. Templates Multilíngues Reutilizáveis para Popular Todos os Outros Idiomas (0, 1 e 2)
const templatesMultilingues = [
    // --- NÍVEL 0: BÁSICO ---
    {
        nivel: 0,
        npc: {
            pt: "Olá! Como você está?",
            es: "¡Hola! ¿Cómo estás?",
            fr: "Salut! Comment ça va?",
            it: "Ciao! Come stai?",
            de: "Hallo! Wie geht es dir?",
            nl: "Hallo! Hoe gaat het met je?",
            pl: "Cześć! Jak się masz?",
            ru: "Привет! Как дела?",
            tr: "Merhaba! Nasılsın?",
            ja: "こんにちは！お元気ですか？"
        },
        opcoes: {
            pt: ["Estou muito bem, obrigado!", "Bem você", "Eu sou bom"],
            es: ["¡Muy bien, gracias!", "Bien tú", "Yo es bueno"],
            fr: ["Ça va bien, merci!", "Bien toi", "Je suis bien"],
            it: ["Sto bene, grazie!", "Bene tu", "Io sono buono"],
            de: ["Mir geht's gut, danke!", "Gut dir", "Ich bin gut"],
            nl: ["Met mij gaat het goed, dank je!", "Goed jou", "Ik ben goed"],
            pl: ["Dobrze, dziękuję!", "Dobrze ty", "Ja jestem dobry"],
            ru: ["Хорошо, спасибо!", "Хорошо ты", "Я есть хорошо"],
            tr: ["İyiyim, teşekkürler!", "İyi sen", "Ben iyiyim"],
            ja: ["元気です、ありがとう！", "元気あなた", "私は良い"]
        },
        correta: 0,
        explicacao: { pt: "Resposta padrão e educada.", en: "Standard and polite response." }
    },
    {
        nivel: 0,
        npc: {
            pt: "Qual é o seu nome?",
            es: "¿Cómo te llamas?",
            fr: "Comment t'appelles-tu?",
            it: "Come ti chiami?",
            de: "Wie heißt du?",
            nl: "Hoe heet je?",
            pl: "Jak masz na imię?",
            ru: "Как тебя зовут?",
            tr: "Adın ne?",
            ja: "お名前は何ですか？"
        },
        opcoes: {
            pt: ["Meu nome é João", "Nome João", "Eu João"],
            es: ["Me llamo Juan", "Llamo Juan", "Yo Juan"],
            fr: ["Je m'appelle Jean", "Nom Jean", "Moi Jean"],
            it: ["Mi chiamo Giovanni", "Nome Giovanni", "Me Giovanni"],
            de: ["Ich heiße Hans", "Name Hans", "Ich Hans"],
            nl: ["Ik heet Jan", "Naam Jan", "Ik Jan"],
            pl: ["Nazywam się Jan", "Imię Jan", "Ja Jan"],
            ru: ["Меня зовут Иван", "Имя Иван", "Я Иван"],
            tr: ["Benim adım Ahmet", "Ad Ahmet", "Ben Ahmet"],
            ja: ["私の名前はケンです", "名前ケン", "私ケン"]
        },
        correta: 0,
        explicacao: { pt: "Como se apresentar.", en: "How to introduce yourself." }
    },
    {
        nivel: 0,
        npc: {
            pt: "De onde você é?",
            es: "¿De dónde eres?",
            fr: "D'où viens-tu?",
            it: "Di dove sei?",
            de: "Woher kommst du?",
            nl: "Waar kom je vandaan?",
            pl: "Skąd pochodzisz?",
            ru: "Откуда ты?",
            tr: "Nerelisin?",
            ja: "どこの出身ですか？"
        },
        opcoes: {
            pt: ["Eu sou do Brasil", "Brasil eu", "De Brasil"],
            es: ["Soy de Brasil", "Brasil yo", "De Brasil"],
            fr: ["Je viens du Brésil", "Brésil moi", "De Brésil"],
            it: ["Vengo dal Brasile", "Brasile io", "Di Brasile"],
            de: ["Ich komme aus Brasilien", "Brasilien ich", "Aus Brasilien"],
            nl: ["Ik kom uit Brazilië", "Brazilië ik", "Van Brazilië"],
            pl: ["Jestem z Brazylii", "Brazylia ja", "Z Brazylii"],
            ru: ["Я из Бразилии", "Бразилия я", "Из Бразилии"],
            tr: ["Brezilya'lıyım", "Brezilya ben", "Brezilya'dan"],
            ja: ["ブラジル出身です", "ブラジル私", "ブラジルから"]
        },
        correta: 0,
        explicacao: { pt: "Como falar o seu país de origem.", en: "How to state your country of origin." }
    },
    {
        nivel: 0,
        npc: {
            pt: "Que horas são?",
            es: "¿Qué hora es?",
            fr: "Quelle heure est-il?",
            it: "Che ore sono?",
            de: "Wie spät ist es?",
            nl: "Hoe laat is het?",
            pl: "Która jest godzina?",
            ru: "Который час?",
            tr: "Saat kaç?",
            ja: "何時ですか？"
        },
        opcoes: {
            pt: ["São duas horas", "Hora duas", "Duas são"],
            es: ["Son las dos", "Hora dos", "Dos son"],
            fr: ["Il est deux heures", "Heure deux", "Deux il est"],
            it: ["Sono le due", "Ore due", "Due sono"],
            de: ["Es ist zwei Uhr", "Uhr zwei", "Zwei Uhr"],
            nl: ["Het is twee uur", "Uur twee", "Twee uur"],
            pl: ["Jest druga godzina", "Druga godzina", "Godzina dwa"],
            ru: ["Сейчас два часа", "Два часа", "Время два"],
            tr: ["Saat iki", "İki saat", "İki"],
            ja: ["二時です", "時間二", "二です"]
        },
        correta: 0,
        explicacao: { pt: "Forma de informar as horas.", en: "Standard way to tell the time." }
    },

    // --- NÍVEL 1: INTERMEDIÁRIO ---
    {
        nivel: 1,
        npc: {
            pt: "O que você gostaria de pedir?",
            es: "¿Qué le gustaría pedir?",
            fr: "Que souhaitez-vous commander?",
            it: "Cosa desidera ordinare?",
            de: "Was möchten Sie bestellen?",
            nl: "Wat wilt u bestellen?",
            pl: "Co chciałbyś zamówić?",
            ru: "Что бы вы хотели заказать?",
            tr: "Ne sipariş etmek istersiniz?",
            ja: "何をご注文なさいますか？"
        },
        opcoes: {
            pt: ["Eu gostaria do peixe, por favor", "Quero peixe", "Dá peixe"],
            es: ["Me gustaría el pescado, por favor", "Quiero pescado", "Pescado dame"],
            fr: ["Je voudrais le poisson, s'il vous plaît", "Veux poisson", "Donne poisson"],
            it: ["Vorrei il pesce, per favore", "Voglio pesce", "Dammi pesce"],
            de: ["Ich hätte gerne den Fisch, bitte", "Will Fisch", "Fisch geben"],
            nl: ["Ik wil graag de vis, alstublieft", "Wil vis", "Geef vis"],
            pl: ["Poproszę rybę", "Chcę rybę", "Daj rybę"],
            ru: ["Я бы хотел рыбу, пожалуйста", "Хочу рыбу", "Дай рыбу"],
            tr: ["Balık almak istiyorum, lütfen", "Balık istiyorum", "Balık ver"],
            ja: ["お魚をお願いします", "魚欲しい", "魚くれ"]
        },
        correta: 0,
        explicacao: { pt: "Formulação educada para fazer pedidos.", en: "Polite phrasing to make requests." }
    },
    {
        nivel: 1,
        npc: {
            pt: "Qual é o seu passatempo favorito?",
            es: "¿Cuál es tu pasatiempo favorito?",
            fr: "Quel est ton passe-temps favori?",
            it: "Qual è il tuo passatempo preferito?",
            de: "Was ist dein Lieblingshobby?",
            nl: "Wat is je favoriete hobby?",
            pl: "Jakie jest twoje ulubione hobby?",
            ru: "Какое ваше любимое хобби?",
            tr: "En sevdiğin hobi nedir?",
            ja: "あなたの好きな趣味は何ですか？"
        },
        opcoes: {
            pt: ["Eu gosto de ler livros", "Gosto ler", "Ler é hobby"],
            es: ["Me gusta leer libros", "Gusta leer", "Leer es hobby"],
            fr: ["J'aime lire des livres", "Aime lire", "Lire est passe-temps"],
            it: ["Mi piace leggere libri", "Piace leggere", "Leggere è hobby"],
            de: ["Ich lese gerne Bücher", "Lese gern", "Bücher lesen"],
            nl: ["Ik lees graag boeken", "Lees graag", "Lezen is hobby"],
            pl: ["Lubię czytać książki", "Lubię czytać", "Czytanie to hobby"],
            ru: ["Мне нравится читать книги", "Нравится читать", "Чтение хобби"],
            tr: ["Kitap okumayı severim", "Okumak severim", "Kitap okumak hobi"],
            ja: ["本を読むのが好きです", "読むの好き", "読書趣味"]
        },
        correta: 0,
        explicacao: { pt: "Forma de expressar hobbies e preferências.", en: "Way to express hobbies and preferences." }
    },

    // --- NÍVEL 2: AVANÇADO ---
    {
        nivel: 2,
        npc: {
            pt: "Quais são seus pontos fortes profissionais?",
            es: "¿Cuáles son sus puntos fuertes profesionales?",
            fr: "Quels sont vos points forts professionnels?",
            it: "Quali sono i tuoi punti di forza professionali?",
            de: "Was sind Ihre beruflichen Stärken?",
            nl: "Wat zijn uw professionele sterke punten?",
            pl: "Jakie są twoje mocne strony zawodowe?",
            ru: "Каковы ваши сильные профессиональные стороны?",
            tr: "Mesleki güçlü yönleriniz nelerdir?",
            ja: "あなたの仕事上の強みは何ですか？"
        },
        opcoes: {
            pt: ["Sou proativo e muito organizado", "Trabalho bem", "Bom funcionário"],
            es: ["Soy proactivo y muy organizado", "Trabajo bien", "Buen empleado"],
            fr: ["Je suis proactif et très organisé", "Travaille bien", "Bon employé"],
            it: ["Sono proattivo e molto organizzato", "Lavoro bene", "Buon impiegato"],
            de: ["Ich bin proaktiv und sehr organisiert", "Arbeite gut", "Guter Arbeiter"],
            nl: ["Ik ben proactief en erg georganiseerd", "Werk goed", "Goede werker"],
            pl: ["Jestem proaktywny i dobrze zorganizowany", "Pracuję dobrze", "Dobry pracownik"],
            ru: ["Я проактивен и очень организован", "Работаю хорошо", "Хороший работник"],
            tr: ["Proaktif ve oldukça düzenliyimdir", "İyi çalışırım", "İyi çalışan"],
            ja: ["私は積極的で、とても計画的です", "よく働く", "良い社員"]
        },
        correta: 0,
        explicacao: { pt: "Terminologia comum para entrevistas.", en: "Common vocabulary for job interviews." }
    },
    {
        nivel: 2,
        npc: {
            pt: "O que devemos fazer sobre esse atraso?",
            es: "¿Qué deberíamos hacer con este retraso?",
            fr: "Que devrions-nous faire face à ce retard?",
            it: "Cosa dovremmo fare per questo ritardo?",
            de: "Was sollten wir wegen dieser Verzögerung tun?",
            nl: "Wat moeten we doen aan deze vertraging?",
            pl: "Co powinniśmy zrobić w związku z tym opóźnieniem?",
            ru: "Что нам делать с этой задержкой?",
            tr: "Bu gecikme hakkında ne yapmalıyız?",
            ja: "この遅延についてどうすべきですか？"
        },
        opcoes: {
            pt: ["Devemos priorizar as tarefas críticas", "Trabalhar rápido", "Atraso é ruim"],
            es: ["Deberíamos priorizar las tareas críticas", "Trabajar rápido", "Retraso malo"],
            fr: ["Nous devrions prioriser les tâches critiques", "Travailler vite", "Retard mauvais"],
            it: ["Dovremmo dare la priorità ai compiti critici", "Lavorare veloce", "Ritardo brutto"],
            de: ["Wir sollten kritische Aufgaben priorisieren", "Schnell arbeiten", "Verzögerung schlecht"],
            nl: ["We moeten prioriteit geven aan kritieke taken", "Snel werken", "Vertraging is slecht"],
            pl: ["Powinniśmy priorytetyzować zadania krytyczne", "Pracować szybko", "Opóźnienie złe"],
            ru: ["Нам следует расставить приоритеты для критических задач", "Работать быстро", "Задержка плохо"],
            tr: ["Kritik görevlere öncelik vermeliyiz", "Hızlı çalış", "Gecikme kötü"],
            ja: ["優先度の高い業務を最優先すべきです", "早く働く", "遅延は悪い"]
        },
        correta: 0,
        explicacao: { pt: "Linguagem corporativa e foco em soluções.", en: "Corporate vocabulary focused on solutions." }
    }
];

// 3. Loop Dinâmico para Gerar as Lições Traduzidas para os outros 10 Idiomas
const idiomasDisponiveis = ["pt", "es", "fr", "it", "de", "nl", "pl", "ru", "tr", "ja"];

idiomasDisponiveis.forEach(lang => {
    baseDeDados[lang] = [];
    
    // Filtra e reconstrói as questões com base no template multilíngue
    templatesMultilingues.forEach(template => {
        if (template.npc[lang] && template.opcoes[lang]) {
            baseDeDados[lang].push({
                npc: template.npc[lang],
                opcoes: template.opcoes[lang],
                correta: template.correta,
                nivel: template.nivel,
                explicacao: template.explicacao
            });
        }
    });
});

if (typeof module !== 'undefined') {
    module.exports = { baseDeDados };
}