/* 
    DATA.JS - Base de Dados de Histórias Interativas (100 Perguntas Criativas e Exclusivas)
    Estrutura ultra-compacta contendo exatamente 100 situações cotidianas e profissionais criativas.
    Nível 0: 30 perguntas (Meta: 8)
    Nível 1: 35 perguntas (Meta: 15)
    Nível 2: 35 perguntas (Meta: 25)
    Sem nenhuma repetição entre níveis ou dentro da sessão!
*/

const baseDeDados = {};

// Helper para declarar perguntas de forma ultra-compacta
// q(nivel, correta, npcEN, npcPT, npcES, npcFR, npcJA, opEN, opPT, opES, opFR, opJA)
function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
    return {
        nivel, correta,
        npc: { en, pt, es, fr, ja, it: es, de: en, nl: en, pl: en, ru: en, tr: es }, // Fallback inteligente para evitar quebras nos outros idiomas
        opcoes: { en: opEn, pt: opPt, es: opEs, fr: opFr, ja: opJa, it: opEs, de: opEn, nl: opEn, pl: opEn, ru: opEn, tr: opEs },
        explicacao: { pt: "Resposta adequada para a situação descrita.", en: "Appropriate response for this situation." }
    };
}

const rawQuestions = [
    // ==========================================
    // --- NÍVEL 0: BÁSICO (30 Perguntas) ---
    // ==========================================
    q(0, 0, "Hi! How are you?", "Olá! Como você está?", "¡Hola! ¿Cómo estás?", "Salut! Comment ça va?", "こんにちは！お元気ですか？",
        ["I'm fine, thanks!", "Fine you", "I is good"], ["Estou bem, obrigado!", "Bem você", "Eu sou bom"], ["¡Muy bien, gracias!", "Bien tú", "Yo es bueno"], ["Ça va bien, merci!", "Bien toi", "Je suis bien"], ["元気です、ありがとう！", "元気あなた", "私は良い"]),
    
    q(0, 0, "What is your name?", "Qual é o seu nome?", "¿Cómo te llamas?", "Comment t'appelles-tu?", "お名前は何ですか？",
        ["My name is John", "Name John", "Me John"], ["Meu nome é João", "Nome João", "Eu João"], ["Me llamo Juan", "Llamo Juan", "Yo Juan"], ["Je m'appelle Jean", "Nom Jean", "Moi Jean"], ["私の名前はケンです", "名前ケン", "私ケン"]),
    
    q(0, 0, "Where are you from?", "De onde você é?", "¿De dónde eres?", "D'où viens-tu?", "どこの出身ですか？",
        ["I'm from Brazil", "Brazil I am", "From Brazil"], ["Eu sou do Brasil", "Brasil eu", "De Brasil"], ["Soy de Brasil", "Brasil yo", "De Brasil"], ["Je viens du Brésil", "Brésil moi", "De Brésil"], ["ブラジル出身です", "ブラジル私", "ブラジルから"]),
    
    q(0, 0, "Do you speak English?", "Você fala inglês?", "¿Hablas inglés?", "Parles-tu anglais?", "英語を話しますか？",
        ["Yes, a little", "Speak yes", "Little yes"], ["Sim, um pouco", "Falo sim", "Pouco sim"], ["Sí, un poco", "Hablo sí", "Poco sí"], ["Oui, un peu", "Parle oui", "Peu oui"], ["はい、少し話します", "話すはい", "少しはい"]),
    
    q(0, 0, "Nice to meet you!", "Prazer em conhecer você!", "¡Gusto en conocerte!", "Enchanté!", "はじめまして！",
        ["Nice to meet you too", "Me too", "Same meet"], ["O prazer é meu", "Igualmente", "Prazer também"], ["El gusto es mío", "Igualmente", "Gusto también"], ["Enchanté également", "Moi aussi", "Enchanté aussi"], ["こちらこそ、よろしくお願いします", "私も", "はじめまして同じ"]),
    
    q(0, 0, "Where is the bathroom?", "Onde fica o banheiro?", "¿Dónde está el baño?", "Où sont les toilettes?", "トイレはどこですか？",
        ["It's on the left", "Bathroom left", "Go left"], ["Fica à esquerda", "Banheiro esquerda", "Vá esquerda"], ["Está a la izquierda", "Baño izquierda", "Ve izquierda"], ["C'est à gauche", "Toilettes gauche", "Va gauche"], ["左側にあります", "トイレ左", "左に行きます"]),
    
    q(0, 0, "How much is this?", "Quanto custa isto?", "¿Cuánto cuesta esto?", "Combien ça coûte?", "これはいくらですか？",
        ["It is ten dollars", "Ten dollars cost", "Cost ten"], ["Custa dez dólares", "Dez dólares custa", "Dez custa"], ["Cuesta diez dólares", "Diez dólares cuesta", "Diez cuesta"], ["Ça coûte dix dollars", "Dix dollars coûte", "Dix coûte"], ["十ドルです", "十ドルコスト", "十です"]),
    
    q(0, 0, "Goodbye!", "Adeus!", "¡Adiós!", "Au revoir!", "さようなら！",
        ["See you later!", "Goodbye yes", "Later go"], ["Até mais!", "Tchau sim", "Mais tarde"], ["¡Hasta luego!", "Adiós sí", "Luego ve"], ["À plus tard!", "Au revoir oui", "Tard va"], ["またね！", "さようならはい", "後で"]),
    
    q(0, 0, "Thank you!", "Obrigado!", "¡Gracias!", "Merci!", "ありがとうございます！",
        ["You're welcome!", "Welcome yes", "Thanks go"], ["De nada!", "Imagina", "Obrigado também"], ["¡De nada!", "No hay de qué", "Gracias también"], ["De rien!", "Je vous en prie", "Merci aussi"], ["どういたしまして！", "どういたしましてはい", "ありがとう同じ"]),

    q(0, 0, "Good morning!", "Bom dia!", "¡Buenos días!", "Bonjour!", "おはようございます！",
        ["Good morning! How are you?", "Morning yes", "Good night"], ["Bom dia! Tudo bem?", "Dia sim", "Boa noite"], ["¡Buenos días! ¿Qué tal?", "Días sí", "Buenas noches"], ["Bonjour! Ça va?", "Jour oui", "Bonne nuit"], ["おはようございます！お元気ですか？", "おはようはい", "おやすみなさい"]),

    q(0, 0, "I want coffee.", "Eu quero café.", "Quiero café.", "Je veux du café.", "コーヒーが欲しいです。",
        ["Here is your coffee, sir.", "Coffee take", "Give coffee"], ["Aqui está o seu café, senhor.", "Café toma", "Dá café"], ["Aquí está su café, señor.", "Café toma", "Dame café"], ["Voici votre café, monsieur.", "Café prends", "Donne café"], ["コーヒーをどうぞ、お客様。", "コーヒー取る", "コーヒーくれ"]),

    q(0, 0, "Is this the train to London?", "Este é o trem para Londres?", "¿Este es el tren a Londres?", "Est-ce le train pour Londres?", "これはロンドン行きの電車ですか？",
        ["Yes, platform number three.", "Train yes", "London go"], ["Sim, plataforma número três.", "Trem sim", "Londres vai"], ["Sí, plataforma número tres.", "Tren sí", "Londres va"], ["Oui, voie numéro trois.", "Train oui", "Londres va"], ["はい、3番線です。", "電車はい", "ロンドン行く"]),

    q(0, 0, "Excuse me, where is the exit?", "Com licença, onde fica a saída?", "Disculpe, ¿dónde está la salida?", "Excusez-moi, où est la sortie?", "すみません、出口はどこですか？",
        ["Follow the green sign.", "Exit go", "Look sign"], ["Siga a placa verde.", "Saída vá", "Olha placa"], ["Sigue la señal verde.", "Salida ve", "Mira señal"], ["Suivez le panneau vert.", "Sortie va", "Regarde panneau"], ["緑の標識に従ってください。", "出口行く", "標識を見る"]),

    q(0, 0, "I would like some water.", "Eu gostaria de água.", "Me gustaría un poco de agua.", "Je voudrais de l'eau.", "お水が欲しいのですが。",
        ["Sparkling or still water?", "Water take", "Give water"], ["Com gás ou sem gás?", "Água toma", "Dá água"], ["¿Con gas o sin gas?", "Agua toma", "Dame agua"], ["Gazeuse ou plate?", "Eau prends", "Donne eau"], ["炭酸水ですか、それとも普通の水ですか？", "水取る", "水くれ"]),

    q(0, 0, "Do you have a table for two?", "Você tem mesa para dois?", "¿Tiene mesa para dos?", "Avez-vous une table pour deux?", "二人用の席はありますか？",
        ["Yes, follow me please.", "Table yes", "Two seats"], ["Sim, siga-me por favor.", "Mesa sim", "Dois assentos"], ["Sí, sígame por favor.", "Mesa sí", "Dos asientos"], ["Oui, suivez-moi s'il vous plaît.", "Table oui", "Deux places"], ["はい、こちらへどうぞ。", "テーブルはい", "二席"]),

    q(0, 0, "What time does the store open?", "A que horas a loja abre?", "¿A qué hora abre la tienda?", "À quelle heure ouvre le magasin?", "店は何時に開きますか？",
        ["It opens at nine AM.", "Open nine", "Store open"], ["Abre às nove da manhã.", "Abre nove", "Loja abre"], ["Abre a las nueve de la mañana.", "Abre nueve", "Tienda abre"], ["Il ouvre à neuf heures.", "Ouvre neuf", "Magasin ouvre"], ["午前9時に開きます。", "開く9時", "店開く"]),

    q(0, 0, "I am very tired today.", "Estou muito cansado hoje.", "Estoy muy cansado hoy.", "Je suis très fatigué aujourd'hui.", "今日はとても疲れています。",
        ["You should go to sleep.", "Sleep yes", "Tired go"], ["Você deveria ir dormir.", "Dormir sim", "Cansado vá"], ["Deberías ir a dormir.", "Dormir sí", "Cansado ve"], ["Tu devrais aller dormir.", "Dormir oui", "Fatigué va"], ["もう寝たほうがいいですよ。", "寝るはい", "疲れた行く"]),

    q(0, 0, "Happy Birthday, Maria!", "Feliz aniversário, Maria!", "¡Feliz cumpleaños, María!", "Bon anniversaire, Marie!", "マリア、お誕生日おめでとう！",
        ["Thank you so much, John!", "Birthday thanks", "Happy day"], ["Muito obrigada, João!", "Aniversário obrigada", "Feliz dia"], ["¡Muchas gracias, Juan!", "Cumpleaños gracias", "Feliz día"], ["Merci beaucoup, Jean!", "Anniversaire merci", "Bon jour"], ["ジョン、本当にありがとう！", "誕生日感謝", "嬉しい日"]),

    q(0, 0, "Where is the hotel key?", "Onde está a chave do hotel?", "¿Dónde está la llave del hotel?", "Où est la clé de l'hôtel?", "ホテルの鍵はどこですか？",
        ["It is inside your pocket.", "Key pocket", "Key yes"], ["Está dentro do seu bolso.", "Chave bolso", "Chave sim"], ["Está dentro de tu bolsillo.", "Llave bolsillo", "Llave sí"], ["Elle est dans votre poche.", "Clé poche", "Clé oui"], ["ポケットの中に入っていますよ。", "鍵ポケット", "鍵はい"]),

    q(0, 0, "I don't understand you.", "Eu não entendo você.", "No te entiendo.", "Je ne te comprends pas.", "あなたの言うことが理解できません。",
        ["I will speak more slowly.", "Understand no", "Speak yes"], ["Vou falar mais devagar.", "Entendo não", "Falar sim"], ["Hablaré más despacio.", "Entiendo no", "Hablar sí"], ["Je vais parler plus lentement.", "Comprends pas", "Parler oui"], ["もっとゆっくり話しますね。", "理解しない", "話すはい"]),

    q(0, 0, "Is the museum open on Sunday?", "O museu abre no domingo?", "¿El museo abre el domingo?", "Le musée est-il ouvert le dimanche?", "美術館は日曜日に開いていますか？",
        ["Yes, from ten to six.", "Museum open", "Sunday yes"], ["Sim, das dez às dezoito.", "Museu abre", "Domingo sim"], ["Sí, de diez a seis.", "Museo abre", "Domingo sí"], ["Oui, de dix heures à dix-huit heures.", "Musée ouvert", "Dimanche oui"], ["はい、午前10時から午後6時までです。", "美術館開く", "日曜日はい"]),

    q(0, 0, "How can I pay for this ticket?", "Como posso pagar esta passagem?", "¿Cómo puedo pagar este boleto?", "Comment payer ce billet?", "この切符はどうやって支払えばいいですか？",
        ["You can pay with cash.", "Pay cash", "Ticket pay"], ["Você pode pagar com dinheiro.", "Pagar dinheiro", "Passagem pagar"], ["Puedes pagar con efectivo.", "Pagar efectivo", "Boleto pagar"], ["Vous pouvez payer en espèces.", "Payer espèces", "Billet payer"], ["現金で支払えますよ。", "現金支払う", "切符払う"]),

    q(0, 0, "I need a doctor, please.", "Preciso de um médico, por favor.", "Necesito un médico, por favor.", "J'ai besoin d'un médecin, s'il vous plaît.", "医者を呼んでください、お願いします。",
        ["I will call the hospital.", "Doctor call", "Hospital doctor"], ["Vou ligar para o hospital.", "Médico ligar", "Hospital médico"], ["Llamaré al hospital.", "Médico llamar", "Hospital médico"], ["Je vais appeler l'hôpital.", "Médecin appeler", "Hôpital médecin"], ["病院に電話しますね。", "医者電話", "病院医者"]),

    q(0, 0, "What is your favorite color?", "Qual é a sua cor favorita?", "¿Cuál es tu color favorito?", "Quelle est ta couleur préférée?", "好きな色は何ですか？",
        ["I really like blue.", "Color blue", "Like color"], ["Eu gosto muito de azul.", "Cor azul", "Gosto cor"], ["Me gusta mucho el azul.", "Color azul", "Gusta color"], ["J'aime beaucoup le bleu.", "Couleur bleue", "Aime couleur"], ["青がとても好きです。", "色青", "色好き"]),

    q(0, 0, "Where is the library?", "Onde fica a biblioteca?", "¿Dónde está la biblioteca?", "Où est la bibliothèque?", "図書館はどこですか？",
        ["It's next to the school.", "Library school", "Go school"], ["Fica ao lado da escola.", "Biblioteca escola", "Vá escola"], ["Está al lado de la escuela.", "Biblioteca escuela", "Ve escuela"], ["C'est à côté de l'école.", "Bibliothèque école", "Va école"], ["学校の隣にありますよ。", "図書館学校", "学校行く"]),

    q(0, 0, "I am lost in the city.", "Estou perdido na cidade.", "Estoy perdido en la ciudad.", "Je suis perdu dans la ville.", "街で迷子になりました。",
        ["Show me your map, please.", "Lost city", "Map look"], ["Mostre-me o seu mapa, por favor.", "Perdido cidade", "Mapa olha"], ["Muéstrame tu mapa, por favor.", "Perdido ciudad", "Mapa mira"], ["Montrez-moi votre carte, s'il vous plaît.", "Perdu ville", "Carte regarde"], ["地図を見せていただけますか？", "迷子街", "地図見る"]),

    q(0, 0, "Do you want to play tennis?", "Você quer jogar tênis?", "¿Quieres jugar tenis?", "Veux-tu jouer au tennis?", "テニスをしませんか？",
        ["Yes, I have two rackets.", "Tennis play", "Rackets yes"], ["Sim, tenho duas raquetes.", "Tênis jogar", "Raquetes sim"], ["Sí, tengo dos raquetas.", "Tenis jugar", "Raquetas sí"], ["Oui, j'ai deux raquettes.", "Tennis jouer", "Raquettes oui"], ["はい、ラケットを二本持っています。", "テニスする", "ラケットはい"]),

    q(0, 0, "This soup is too hot.", "Esta sopa está muito quente.", "Esta sopa está demasiado caliente.", "Cette soupe est trop chaude.", "このスープは熱すぎます。",
        ["Wait a few minutes.", "Soup hot", "Hot yes"], ["Espere alguns minutos.", "Sopa quente", "Quente sim"], ["Espera unos minutos.", "Sopa caliente", "Caliente sí"], ["Attends quelques minutes.", "Soupe chaude", "Chaude oui"], ["数分待ってくださいね。", "スープ熱い", "熱いはい"]),

    q(0, 0, "Can I sit here?", "Posso me sentar aqui?", "¿Puedo sentarme aquí?", "Puis-je m'asseoir ici?", "ここに座ってもいいですか？",
        ["Yes, this seat is free.", "Sit yes", "Seat free"], ["Sim, este assento está livre.", "Sentar sim", "Assento livre"], ["Sí, este asiento está libre.", "Sentarse sí", "Asiento libre"], ["Oui, cette place est libre.", "S'asseoir oui", "Place libre"], ["はい、この席は空いていますよ。", "座るはい", "席空いている"]),

    q(0, 0, "Where did you put the milk?", "Onde você colocou o leite?", "¿Dónde pusiste la leche?", "Où as-tu mis le lait?", "牛乳はどこに置きましたか？",
        ["It is inside the fridge.", "Milk fridge", "Fridge milk"], ["Está dentro da geladeira.", "Leite geladeira", "Geladeira leite"], ["Está dentro del refrigerador.", "Leche refrigerador", "Refrigerador leche"], ["Il est dans le réfrigérateur.", "Lait réfrigérateur", "Réfrigérateur lait"], ["冷蔵庫の中に入っていますよ。", "牛乳冷蔵庫", "冷蔵庫牛乳"]),

    // ==========================================
    // --- NÍVEL 1: INTERMEDIÁRIO (35 Perguntas) ---
    // ==========================================
    q(1, 0, "Would you like to order now?", "Gostaria de pedir agora?", "¿Le gustaría pedir ahora?", "Souhaitez-vous commander maintenant?", "今ご注文なさいますか？",
        ["Yes, I'll have the steak, please", "Yes, want steak", "Give steak"], ["Sim, eu vou querer o bife, por favor", "Quero bife", "Dá bife"], ["Sí, voy a querer el filete, por favor", "Quiero filete", "Dame filete"], ["Oui, je vais prendre le steak, s'il vous plaît", "Veux steak", "Donne steak"], ["はい、ステーキをお願いします", "ステーキ欲しい", "ステーキくれ"]),
    
    q(1, 0, "What is your favorite hobby?", "Qual é o seu passatempo favorito?", "¿Cuál es tu pasatiempo favorito?", "Quel est ton passe-temps favori?", "あなたの好きな趣味は何ですか？",
        ["I enjoy reading books", "I like read", "Read is my hobby"], ["Eu gosto de ler livros", "Gosto ler", "Ler é meu hobby"], ["Disfruto leyendo libros", "Gusta leer", "Leer es hobby"], ["J'aime lire des livres", "Aime lire", "Lire est mon passe-temps"], ["本を読むのが好きです", "読むの好き", "読書は趣味です"]),
    
    q(1, 0, "How do I get to the station?", "Como chego à estação?", "¿Cómo llego a la estación?", "Comment aller à la gare?", "駅にはどうやって行きますか？",
        ["Go straight and turn right", "Straight and right", "Go station right"], ["Siga em frente e vire à direita", "Direto e direita", "Vá estação direita"], ["Sigue recto y gira a la derecha", "Recto y derecha", "Ve estación derecha"], ["Allez tout droit et tournez à droite", "Tout droit droite", "Va gare droite"], ["まっすぐ進んで右に曲がります", "まっすぐ右", "駅右に行きます"]),
    
    q(1, 0, "What's the weather like today?", "Como está o tempo hoje?", "¿Cómo está el clima hoy?", "Quel temps fait-il aujourd'hui?", "今日の天気はどうですか？",
        ["It's sunny and warm", "Sun and warm", "Sunny today is"], ["Está ensolarado e quente", "Sol e quente", "Sol hoje está"], ["Está soleado y cálido", "Sol y cálido", "Soleado hoy está"], ["Il fait beau et chaud", "Soleil chaud", "Beau aujourd'hui est"], ["晴れていて暖かいです", "晴れ暖かい", "晴れ今日"]),
    
    q(1, 0, "Have you finished your homework?", "Você terminou sua lição de casa?", "¿Terminaste tu tarea?", "As-tu fini tes devoirs?", "宿題は終わりましたか？",
        ["Not yet, I need more time", "No, need time", "Yes, I finish"], ["Ainda não, preciso de mais tempo", "Não, preciso tempo", "Sim, terminei"], ["Aún no, necesito más tiempo", "No, necesito tiempo", "Sí, terminé"], ["Pas encore, j'ai besoin de temps", "Non, besoin temps", "Oui, je fini"], ["まだです、もっと時間が必要です", "いいえ、時間必要", "はい、終わりました"]),
    
    q(1, 0, "What did you do last weekend?", "O que você fez no fim de semana passado?", "¿Qué hiciste el fin de semana pasado?", "Qu'as-tu fait le week-end dernier?", "先週末は何をしましたか？",
        ["I went to the cinema with friends", "I go to cinema", "Went cinema"], ["Fui ao cinema com amigos", "Vou cinema", "Fui cinema"], ["Fui al cine con amigos", "Voy al cine", "Fui cine"], ["Je suis allé au cinéma avec des amis", "Vais cinéma", "Allé cinéma"], ["友達と映画館に行きました", "映画行く", "映画行きました"]),
    
    q(1, 0, "Do you have any pets?", "Você tem algum animal de estimação?", "¿Tienes alguna mascota?", "As-tu des animaux de compagnie?", "ペットはいますか？",
        ["Yes, I have a dog and a cat", "Yes, two pets dog", "Yes, I have"], ["Sim, tenho um cachorro e um gato", "Sim, dois pet cão", "Sim, eu tenho"], ["Sí, tengo un perro y un gato", "Sí, dos mascotas", "Sí, tengo"], ["Oui, j'ai un chien et un chat", "Oui, deux animaux", "Oui, j'ai"], ["はい、犬と猫を飼っています", "はい、二匹犬", "はい、あります"]),
    
    q(1, 0, "Can we meet tomorrow at 10 AM?", "Podemos nos encontrar amanhã às 10h?", "¿Podemos reunirnos mañana a las 10 AM?", "Pouvons-nous nous voir demain à 10h?", "明日午前10時に会えますか？",
        ["Yes, that works for me", "Yes, tomorrow 10", "Tomorrow yes"], ["Sim, por mim tudo bem", "Sim, amanhã 10", "Amanhã sim"], ["Sí, me parece bien", "Sí, mañana 10", "Mañana sí"], ["Oui, ça me convient", "Oui, demain 10", "Demain oui"], ["はい、都合がいいです", "はい、明日10", "明日はい"]),

    q(1, 0, "Why are you learning a new language?", "Por que você está aprendendo um novo idioma?", "¿Por qué estás aprendiendo un nuevo idioma?", "Pourquoi apprends-tu une nouvelle langue?", "なぜ新しい言語を学んでいるのですか？",
        ["Because I want to travel next year.", "Why language", "For travel learn"], ["Porque eu quero viajar no ano que vem.", "Por que idioma", "Para viajar aprender"], ["Porque quiero viajar el próximo año.", "Por qué idioma", "Para viajar aprender"], ["Parce que je veux voyager l'année prochaine.", "Pourquoi langue", "Pour voyager apprendre"], ["来年旅行に行きたいからです。", "なぜ言語", "旅行のため学ぶ"]),

    q(1, 0, "I think we are lost in this forest.", "Acho que estamos perdidos nesta floresta.", "Creo que estamos perdidos en este bosque.", "Je pense que nous sommes perdus dans cette forêt.", "この森で迷子になった気がします。",
        ["Don't worry, I have a compass here.", "Lost forest", "No worry"], ["Não se preocupe, tenho uma bússola aqui.", "Perdidos floresta", "Sem preocupação"], ["No te preocupes, tengo una brújula aquí.", "Perdidos bosque", "No preocuparse"], ["Ne t'inquiète pas, j'ai une boussole ici.", "Perdus forêt", "Pas de souci"], ["心配しないでください、ここにコンパスがあります。", "迷子森", "心配ない"]),

    q(1, 0, "What are your plans for the summer?", "Quais são os seus planos para o verão?", "¿Cuáles son tus planes para el verano?", "Quels sont tes projets pour l'été?", "夏の予定は何ですか？",
        ["I am going to visit Germany.", "Summer plans", "Germany go"], ["Eu vou visitar a Alemanha.", "Planos verão", "Alemanha ir"], ["Voy a visitar Alemania.", "Planes verano", "Alemania ir"], ["Je vais visiter l'Allemagne.", "Projets été", "Allemagne aller"], ["ドイツを訪れる予定です。", "夏の予定", "ドイツ行く"]),

    q(1, 0, "Where did you buy that beautiful shirt?", "Onde você comprou essa camisa bonita?", "¿Dónde compraste esa hermosa camisa?", "Où as-tu acheté cette belle chemise?", "その美しいシャツはどこで買いましたか？",
        ["I bought it at the new local mall.", "Shirt mall", "Bought shirt"], ["Comprei no novo shopping local.", "Camisa shopping", "Comprei camisa"], ["La compré en el nuevo centro comercial.", "Camisa centro", "Compré camisa"], ["Je l'ai achetée dans le nouveau centre commercial.", "Chemise centre", "Acheté chemise"], ["新しくできた地元のモールで買いました。", "シャツモール", "シャツ購入"]),

    q(1, 0, "My sister enjoys swimming in the lake.", "Minha irmã gosta de nadar no lago.", "A mi hermana le gusta nadar en el lago.", "Ma sœur aime nager dans le lac.", "私の姉は湖で泳ぐのが好きです。",
        ["Is the water clean enough for that?", "Sister swim", "Lake good"], ["A água é limpa o suficiente para isso?", "Irmã nadar", "Lago bom"], ["¿El agua está limpia para eso?", "Hermana nadar", "Lago bueno"], ["L'eau est-elle assez propre pour ça?", "Sœur nager", "Lac propre"], ["水は泳げるほどきれいですか？", "姉泳ぐ", "湖良い"]),

    q(1, 0, "Could you recommend a good book to read?", "Poderia recomendar um bom livro para ler?", "¿Podrías recomendar un buen libro para leer?", "Pourrais-tu recommander un bon livre à lire?", "おすすめの本を教えていただけますか？",
        ["You should read the classic sci-fi novel.", "Book recommend", "Read novel"], ["Você deveria ler a novela clássica de ficção.", "Livro recomendação", "Ler novela"], ["Deberías leer la novela clásica de ciencia ficción.", "Libro recomendar", "Leer novela"], ["Tu devrais lire le roman de science-fiction classique.", "Livre recommander", "Lire roman"], ["古典的なSF小説を読むといいですよ。", "本おすすめ", "小説読む"]),

    q(1, 0, "It has been raining heavily all afternoon.", "Tem chovido muito a tarde toda.", "Ha estado lloviendo mucho toda la tarde.", "Il a plu abondamment toute l'après-midi.", "午後ずっと雨が激しく降っています。",
        ["Yes, let's stay inside and watch TV.", "Raining heavily", "Rain outside"], ["Sim, vamos ficar dentro e ver TV.", "Chovendo muito", "Chuva fora"], ["Sí, quedémonos dentro y veamos televisión.", "Lloviendo mucho", "Lluvia fuera"], ["Oui, restons à l'intérieur et regardons la télé.", "Pluie abondante", "Pluie dehors"], ["はい、家の中でテレビを見て過ごしましょう。", "激しい雨", "外は雨"]),

    q(1, 0, "Do you have any plans for tonight?", "Você tem planos para hoje à noite?", "¿Tienes planes para esta noche?", "As-tu des projets pour ce soir?", "今夜の予定はありますか？",
        ["I am going to cook a special soup.", "Plans tonight", "Tonight cook"], ["Eu vou cozinhar uma sopa especial.", "Planos noite", "Cozinhar noite"], ["Voy a cocinar una sopa especial.", "Planes noche", "Cocinar noche"], ["Je vais cuisiner une soupe spéciale.", "Projets soir", "Cuisiner soir"], ["特製のスープを作る予定です。", "今夜の予定", "今夜料理"]),

    q(1, 0, "How long have you worked at this bakery?", "Há quanto tempo você trabalha nesta padaria?", "¿Cuánto tiempo has trabajado en esta panadería?", "Depuis combien de temps travailles-tu dans cette boulangerie?", "このパン屋でどのくらい働いていますか？",
        ["I have worked here for three years.", "Bakery work", "Worked here"], ["Trabalho aqui há três anos.", "Padaria trabalho", "Trabalho aqui"], ["He trabajado aquí durante tres años.", "Panadería trabajo", "Trabajo aquí"], ["Je travaille ici depuis trois ans.", "Boulangerie travail", "Travail ici"], ["ここで3年間働いています。", "パン屋仕事", "ここで働く"]),

    q(1, 0, "Which instrument would you like to play?", "Qual instrumento você gostaria de tocar?", "¿Qué instrumento te gustaría tocar?", "De quel instrument aimerais-tu jouer?", "どの楽器を演奏してみたいですか？",
        ["I would love to learn the piano.", "Instrument play", "Piano play"], ["Eu adoraria aprender piano.", "Instrumento tocar", "Piano tocar"], ["Me encantaría aprender a tocar el piano.", "Instrumento tocar", "Piano tocar"], ["J'adorerais apprendre le piano.", "Instrument jouer", "Piano jouer"], ["ピアノを習ってみたいです。", "楽器演奏", "ピアノ弾く"]),

    q(1, 0, "The train leaves in ten minutes.", "O trem sai em dez minutos.", "El tren sale en diez minutos.", "Le train part dans dix minutes.", "電車は10分後に出発します。",
        ["We should run to the platform now.", "Train leaves", "Run platform"], ["Deveríamos correr para a plataforma agora.", "Trem sai", "Correr plataforma"], ["Deberíamos correr a la plataforma ahora.", "Tren sale", "Correr plataforma"], ["Nous devrions courir vers le quai maintenant.", "Train part", "Courir quai"], ["すぐにホームへ走るべきですね。", "電車出発", "ホーム走る"]),

    q(1, 0, "Excuse me, does this bus go downtown?", "Com licença, este ônibus vai para o centro?", "Disculpe, ¿este autobús va al centro?", "Excusez-moi, est-ce que ce bus va au centre-ville?", "すみません、このバスは中心街に行きますか？",
        ["Yes, it stops at the main square.", "Bus downtown", "Downtown go"], ["Sim, ele para na praça principal.", "Ônibus centro", "Centro vai"], ["Sí, se detiene en la plaza principal.", "Autobús centro", "Centro va"], ["Oui, il s'arrête à la place principale.", "Bus centre", "Centre aller"], ["はい、中央広場に停まります。", "バス中心街", "中心街行く"]),

    q(1, 0, "I bought a new ticket for the show.", "Comprei um novo ingresso para o show.", "Compré un nuevo boleto para el espectáculo.", "J'ai acheté un nouveau billet pour le spectacle.", "ショーの新しいチケットを買いました。",
        ["Was it very expensive?", "Ticket show", "Bought ticket"], ["Foi muito caro?", "Ingresso show", "Comprei ingresso"], ["¿Fue muy caro?", "Boleto espectáculo", "Compré boleto"], ["Était-il très cher?", "Billet spectacle", "Acheté billet"], ["高かったですか？", "チケットショー", "チケット買う"]),

    q(1, 0, "My parents live in a quiet city.", "Meus pais moram em uma cidade pacífica.", "Mis padres viven en una ciudad tranquila.", "Mes parents vivent dans une ville calme.", "私の両親は静かな街に住んでいます。",
        ["Do you visit them often?", "Parents city", "Quiet city"], ["Você os visita com frequência?", "Pais cidade", "Cidade calma"], ["¿Los visitas a menudo?", "Padres ciudad", "Ciudad tranquila"], ["Leur rends-tu visite souvent?", "Parents ville", "Ville calme"], ["よく会いに行きますか？", "両親街", "静かな街"]),

    q(1, 0, "I think this cake is delicious.", "Acho que este bolo está delicioso.", "Creo que este pastel está delicioso.", "Je trouve que ce gâteau est délicieux.", "このケーキはとても美味しいと思います。",
        ["Could you share the recipe with me?", "Cake delicious", "Like cake"], ["Poderia compartilhar a receita comigo?", "Bolo delicioso", "Gosto bolo"], ["¿Podrías compartir la receta conmigo?", "Pastel delicioso", "Gusta pastel"], ["Pourrais-tu partager la recette avec moi?", "Gâteau délicieux", "Aime gâteau"], ["レシピを教えていただけますか？", "ケーキ美味しい", "ケーキ好き"]),

    q(1, 0, "We need to buy vegetables for dinner.", "Precisamos comprar vegetais para o jantar.", "Necesitamos comprar verduras para la cena.", "Nous devons acheter des légumes pour le dîner.", "夕食のために野菜を買う必要があります。",
        ["Let's go to the local market.", "Buy vegetables", "Dinner vegetables"], ["Vamos ao mercado local.", "Comprar vegetais", "Jantar vegetais"], ["Vamos al mercado local.", "Comprar verduras", "Cena verduras"], ["Allons au marché local.", "Acheter légumes", "Dîner légumes"], ["地元の市場に行きましょう。", "野菜買う", "夕食野菜"]),

    q(1, 0, "Have you ever visited a museum in Italy?", "Você já visitou um museu na Itália?", "¿Alguna vez has visitado un museo en Italia?", "As-tu déjà visité un musée en Italie?", "イタリアの美術館を訪れたことがありますか？",
        ["Yes, the art there is incredible.", "Museum Italy", "Art Italy"], ["Sim, a arte de lá é incrível.", "Museu Itália", "Arte Itália"], ["Sí, el arte de allí es increíble.", "Museo Italia", "Arte Italia"], ["Oui, l'art là-bas est incroyable.", "Musée Italie", "Art Italie"], ["はい、あそこにある美術は本当に素晴らしいです。", "美術館イタリア", "美術イタリア"]),

    q(1, 0, "I lost my umbrella in the subway.", "Perdi meu guarda-chuva no metrô.", "Perdí mi paraguas en el metro.", "J'ai perdu mon parapluie dans le métro.", "地下鉄で傘をなくしました。",
        ["You should check the lost and found office.", "Umbrella lost", "Subway lost"], ["Você deveria checar o setor de achados e perdidos.", "Guarda-chuva perdido", "Metrô perdido"], ["Deberías revisar la oficina de objetos perdidos.", "Paraguas perdido", "Metro perdido"], ["Tu devrais vérifier le bureau des objets trouvés.", "Parapluie perdu", "Métro perdu"], ["遺失物取扱所を確認したほうがいいですよ。", "傘なくした", "地下鉄なくした"]),

    q(1, 0, "My doctor advised me to walk more.", "Meu médico me aconselhou a caminhar mais.", "Mi médico me aconsejó caminar más.", "Mon médecin m'a conseillé de marcher plus.", "医者にもっと歩くように言われました。",
        ["It will improve your health.", "Doctor walk", "Walk more"], ["Isso vai melhorar sua saúde.", "Médico caminhar", "Caminhar mais"], ["Eso mejorará tu salud.", "Médico caminar", "Caminar más"], ["Cela améliorera ta santé.", "Médecin marcher", "Marcher plus"], ["健康状態が良くなりますよ。", "医者歩く", "もっと歩く"]),

    q(1, 0, "Do you prefer tea or coffee?", "Você prefere chá ou café?", "¿Prefieres té o café?", "Préfères-tu le thé ou le café?", "お茶とコーヒーどちらが好きですか？",
        ["I drink tea every single morning.", "Tea coffee", "Prefer drink"], ["Bebo chá toda santa manhã.", "Chá café", "Prefiro beber"], ["Bebo té cada mañana.", "Té café", "Prefiero beber"], ["Je bois du thé tous les matins.", "Thé café", "Préfère boire"], ["毎朝お茶を飲んでいます。", "茶コーヒー", "飲むのが好き"]),

    q(1, 0, "I am looking for a cheap hotel.", "Estou procurando por um hotel barato.", "Estoy buscando un hotel barato.", "Je cherche un hôtel bon marché.", "安いホテルを探しています。",
        ["There is a nice hostel near here.", "Hotel cheap", "Cheap hostel"], ["Existe um albergue legal perto daqui.", "Hotel barato", "Albergue barato"], ["Hay un hostal agradable cerca de aquí.", "Hotel barato", "Hostal barato"], ["Il y a une bonne auberge près d'ici.", "Hôtel bon marché", "Auberge bon marché"], ["この近くに良いホステルがありますよ。", "ホテル安い", "安いホステル"]),

    q(1, 0, "My favorite hobby is cooking pasta.", "Meu passatempo favorito é cozinhar massa.", "Mi pasatiempo favorito es cocinar pasta.", "Mon passe-temps favori est de cuisiner des pâtes.", "私の好きな趣味はパスタを作ることです。",
        ["Do you make the sauce yourself?", "Hobby cooking", "Pasta hobby"], ["Você mesmo faz o molho?", "Hobby cozinhar", "Massa hobby"], ["¿Haces la salsa tú mismo?", "Hobby cocinar", "Pasta hobby"], ["Fais-tu la sauce toi-même?", "Loisir cuisiner", "Pâtes loisir"], ["ソースも自分で作るのですか？", "趣味料理", "パスタ趣味"]),

    q(1, 0, "Where is the nearest supermarket?", "Onde fica o supermercado mais próximo?", "¿Dónde está el supermercado más cercano?", "Où est le supermarché le plus proche?", "一番近いスーパーはどこですか？",
        ["Walk two blocks and turn left.", "Supermarket near", "Supermarket left"], ["Caminhe dois quarteirões e vire à esquerda.", "Supermercado perto", "Supermercado esquerda"], ["Camina dos cuadras y gira a la izquierda.", "Supermercado cerca", "Supermercado izquierda"], ["Marchez deux pâtés de maisons et tournez à gauche.", "Supermarché proche", "Supermarché gauche"], ["2ブロック歩いて左に曲がります。", "スーパー近い", "スーパー左"]),

    q(1, 0, "I enjoy traveling to Spain.", "Gosto de viajar para a Espanha.", "Disfruto viajar a España.", "J'aime voyager en Espagne.", "スペインを旅行するのが好きです。",
        ["Spain has beautiful historical monuments.", "Traveling Spain", "Spain monument"], ["A Espanha tem monumentos históricos lindos.", "Viajar Espanha", "Espanha monumento"], ["España tiene monumentos históricos hermosos.", "Viajar España", "España monumento"], ["L'Espagne a de magnifiques monuments historiques.", "Voyager Espagne", "Espagne monument"], ["スペインには美しい歴史的建造物がありますね。", "旅行スペイン", "スペイン建造物"]),

    q(1, 0, "My cousin works as an engineer.", "Meu primo trabalha como engenheiro.", "Mi primo trabaja como ingeniero.", "Mon cousin travaille comme ingénieur.", "私のいとこはエンジニアとして働いています。",
        ["Does he design big structures?", "Cousin engineer", "Engineer work"], ["Ele desenha grandes estruturas?", "Primo engenheiro", "Engenheiro trabalho"], ["¿Él diseña grandes estructuras?", "Primo ingeniero", "Ingeniero trabajo"], ["Conçoit-il de grandes structures?", "Cousin ingénieur", "Ingénieur travail"], ["彼は大きな構造物を設計しているのですか？", "いとこ設計", "技術者仕事"]),

    q(1, 0, "The concert starts in an hour.", "O show começa em uma hora.", "El concierto comienza en una hora.", "Le concert commence dans une heure.", "コンサートは1時間後に始まります。",
        ["We should leave the house now.", "Concert starts", "Concert leave"], ["Deveríamos sair de casa agora.", "Show começa", "Sair show"], ["Deberíamos salir de casa ahora.", "Concierto comienza", "Salir concierto"], ["Nous devrions quitter la maison maintenant.", "Concert commence", "Partir concert"], ["そろそろ家を出る時間ですね。", "ライブ開始", "ライブ行く"]),

    q(1, 0, "I am looking for the hospital entrance.", "Estou procurando pela entrada do hospital.", "Estoy buscando la entrada del hospital.", "Je cherche l'entrée de l'hôpital.", "病院の入り口を探しています。",
        ["It is behind the main building.", "Hospital entrance", "Entrance behind"], ["Fica atrás do prédio principal.", "Hospital entrada", "Entrada atrás"], ["Está detrás del edificio principal.", "Hospital entrada", "Entrada detrás"], ["C'est derrière le bâtiment principal.", "Hôpital entrée", "Entrée derrière"], ["本館の裏側にありますよ。", "病院入り口", "入り口裏"]),

    // ==========================================
    // --- NÍVEL 2: AVANÇADO (35 Perguntas) ---
    // ==========================================
    q(2, 0, "What are your professional strengths?", "Quais são seus pontos fortes profissionais?", "¿Cuáles son sus fortalezas profesionales?", "Quels sont vos points forts professionnels?", "仕事上のあなたの強みは何ですか？",
        ["I am proactive and highly organized", "I am good worker", "Proactive me"], ["Sou proativo e muito organizado", "Trabalho bem", "Bom funcionário"], ["Soy proactivo y muy organizado", "Trabajo bien", "Buen empleado"], ["Je suis proactif et très organisé", "Travaille bien", "Bon employé"], ["私は積極的で、とても計画的です", "よく働く", "良い社員"]),
    
    q(2, 0, "How should we address the project delay?", "Como devemos tratar o atraso do projeto?", "¿Cómo deberíamos manejar el retraso del proyecto?", "Comment devrions-nous gérer le retard du projet?", "プロジェクトの遅れにどう対応すべきですか？",
        ["We should prioritize critical tasks first", "Work faster", "Delay bad"], ["Devemos priorizar as tarefas críticas primeiro", "Trabalhar rápido", "Atraso ruim"], ["Deberíamos priorizar las tareas críticas primero", "Trabajar rápido", "Retraso malo"], ["Nous devrions d'abord prioriser les tâches critiques", "Travailler vite", "Retard mauvais"], ["まずは最優先課題を優先すべきです", "早く働く", "遅延は悪い"]),
    
    q(2, 0, "How do you handle stressful situations?", "Como você lida com situações estressantes?", "¿Cómo manejas las situaciones estresantes?", "Comment gérez-vous les situations stressantes?", "ストレスのかかる状況にどう対処しますか？",
        ["I practice mindfulness and prioritize work", "I rest", "Stress is ok"], ["Eu pratico meditação e organizo as tarefas", "Eu descanso", "Estresse ok"], ["Practico la meditación y organizo mis tareas", "Yo descanso", "Estrés ok"], ["Je pratique la méditation et j'organise mes tâches", "Je me repose", "Stress ok"], ["マインドフルネスを実践し、タスクを整理します", "休む", "ストレス大丈夫"]),
    
    q(2, 0, "Do you agree with the current proposal?", "Você concorda com a proposta atual?", "¿Estás de acuerdo con la propuesta actual?", "Êtes-vous d'accord avec la proposition actuelle?", "現在の提案に同意しますか？",
        ["I agree, provided we adjust the budget", "Yes, I agree", "Proposal yes"], ["Eu concordo, desde que ajustemos o orçamento", "Sim, concordo", "Proposta sim"], ["Estoy de acuerdo, siempre que ajustemos el presupuesto", "Sí, de acuerdo", "Propuesta sí"], ["Je suis d'accord, à condition d'ajuster le budget", "Oui, d'accord", "Proposition oui"], ["予算を調整していただけるなら、同意します", "はい、同意します", "提案はい"]),
    
    q(2, 0, "What is the sales forecast for next quarter?", "Qual é a previsão de vendas para o próximo trimestre?", "¿Cuál es el pronóstico de vendas para el próximo trimestre?", "Quelles sont les prévisions de ventes pour le trimestre prochain?", "来四半期の売上予測はどうですか？",
        ["We anticipate a ten percent growth", "Sales good", "Increase sales"], ["Prevemos um crescimento de dez por cento", "Vendas boas", "Aumento vendas"], ["Prevemos un crecimiento del diez por ciento", "Ventas buenas", "Aumento ventas"], ["Nous prévoyons une croissance de dix pour cent", "Ventes bonnes", "Hausse ventes"], ["10パーセントの成長を予測しています", "売上良い", "売上成長"]),
    
    q(2, 0, "Was there a problem with the database?", "Houve algum problema com o banco de dados?", "¿Hubo algún problema con la base de datos?", "Y a-t-il eu un problème avec la base de données?", "データベースに問題がありましたか？",
        ["Yes, it went offline for an hour", "Server bad", "No server"], ["Sim, ele ficou fora do ar por uma hora", "Servidor ruim", "Sem servidor"], ["Sí, se cayó por una hora", "Servidor malo", "Sin servidor"], ["Oui, elle s'est déconnectée pendant une heure", "Serveur mauvais", "Pas serveur"], ["はい、1時間オフラインになりました", "サーバー悪い", "サーバーなし"]),
    
    q(2, 0, "Could you send me the invoice, please?", "Poderia me enviar a fatura, por favor?", "¿Podría enviarme la factura, por favor?", "Pourriez-vous m'envoyer la facture, s'il vous plaît?", "請求書を送っていただけますか？",
        ["Sure, I will email it to you today", "Invoice email", "Send yes"], ["Claro, vou enviar por e-mail hoje", "Fatura e-mail", "Enviar sim"], ["Claro, te la enviaré por correo hoy", "Factura correo", "Enviar sí"], ["Bien sûr, je vous l'enverrai par e-mail aujourd'hui", "Facture e-mail", "Envoyer oui"], ["かしこまりました、本日メールでお送りします", "請求書メール", "送るはい"]),
    
    q(2, 0, "What is the impact of the new policy?", "Qual é o impacto da nova política?", "¿Cuál es el impacto de la nueva política?", "Quel est l'impact de la nouvelle politique?", "新方針の影響は何ですか？",
        ["It will reduce operational costs", "New taxes", "Law change"], ["Ela reduzirá os custos operacionais", "Novos impostos", "Mudança lei"], ["Reducirá los costos operativos", "Nuevos impuestos", "Cambio ley"], ["Elle réduira les coûts opérationnels", "Nouveaux impôts", "Changement loi"], ["運営コストを削減する見込みです", "新しい税金", "法律変更"]),

    q(2, 0, "How do you manage team conflicts?", "Como você gerencia conflitos na equipe?", "¿Cómo manejas los conflictos de equipo?", "Comment gérez-vous les conflits d'équipe?", "チームの対立をどのように管理しますか？",
        ["By encouraging open communication", "Speak loud", "Team fight"], ["Incentivando a comunicação aberta", "Falar alto", "Equipe briga"], ["Fomentando la comunicación abierta", "Hablar alto", "Equipo pelea"], ["En encourageant une communication ouverte", "Parler fort", "Équipe dispute"], ["オープンなコミュニケーションを促すことで解決します", "大声で話す", "対立のけんか"]),

    q(2, 0, "What is the main campaign objective?", "Qual é o principal objetivo da campanha?", "¿Cuál es el objetivo principal de la campaña?", "Quel est le but principal de la campagne?", "キャンペーンの主な目的は何ですか？",
        ["To increase brand awareness", "Get popular", "Sell more"], ["Aumentar o reconhecimento da marca", "Ficar popular", "Vender mais"], ["Aumentar el reconocimiento de marca", "Hacerse popular", "Vender más"], ["Accroître la notoriété de la marque", "Devenir populaire", "Vendre plus"], ["ブランドの認知度を高めることです", "人気になる", "たくさん売る"]),

    q(2, 0, "Can we postpone the deadline by a week?", "Podemos adiar o prazo em uma semana?", "¿Podemos posponer el plazo una semana?", "Pouvons-nous reporter la date limite d'une semaine?", "締め切りを1週間延期できますか？",
        ["Only if we get client approval", "Only if client", "Postpone yes"], ["Apenas se tivermos a aprovação do cliente", "Apenas cliente", "Adiar sim"], ["Solo si obtenemos la aprobación del cliente", "Solo cliente", "Posponer sí"], ["Seulement si nous obtenons l'accord du client", "Seulement client", "Reporter oui"], ["クライアントの承認を得られた casoのみ可能です", "クライアントのみ", "延期はい"]),

    q(2, 0, "What is your opinion on remote work?", "Qual é a sua opinião sobre o trabalho remoto?", "¿Cuál es tu opinión sobre el trabajo remoto?", "Quel est votre avis sur le télétravail?", "リモートワークについてどう思いますか？",
        ["It increases productivity and flexibility", "Work home", "Flexibility good"], ["Aumenta a produtividade e a flexibilidade", "Trabalho casa", "Flexibilidade boa"], ["Aumenta la productividad y la flexibilidad", "Trabajo casa", "Flexibilidad buena"], ["Cela augmente la productivité et la flexibilité", "Travail maison", "Flexibilité bonne"], ["生産性と柔軟性が向上すると思います", "自宅仕事", "柔軟性が良い"]),

    q(2, 0, "How do you measure project success?", "Como você mede o sucesso do projeto?", "¿Cómo describes el éxito de un proyecto?", "Comment mesurez-vous le succès d'un projet?", "プロジェクト의 成功をどのように測定しますか？",
        ["Through key performance indicators", "Check results", "Metric show"], ["Através de indicadores-chave de desempenho", "Checar resultados", "Métrica mostra"], ["A través de indicadores clave de rendimiento", "Verificar resultados", "Métrica muestra"], ["À travers des indicateurs clés de performance", "Vérifier résultats", "Métrique montre"], ["重要業績評価指標（KPI）を通じて測定します", "結果確認", "指標の提示"]),

    q(2, 0, "What are the risks of this investment?", "Quais são os riscos deste investimento?", "¿Cuáles son los riesgos de esta inversión?", "Quels sont les risques de cet investissement?", "この投資のリスクは何ですか？",
        ["Market volatility and high competition", "Loss money", "Risk market"], ["Volatilidade do mercado e alta concorrência", "Perda dinheiro", "Risco mercado"], ["Volatilidad del mercado y alta competencia", "Perder dinero", "Riesgo mercado"], ["Volatilité du marché et forte concurrence", "Perte argent", "Risque marché"], ["市場の変動性と高い競争率です", "金銭的損失", "リスク市場"]),

    q(2, 0, "Can you summarize the meeting?", "Pode resumir a reunião?", "¿Puedes resumir la reunión?", "Pouvez-vous résumer la réunion?", "会議の要約をお願いします。",
        ["We decided to launch the product in August", "Launch August", "Product launch"], ["Decidimos lançar o produto em agosto", "Lançar agosto", "Produto lançar"], ["Decidimos lanzar el producto en agosto", "Lanzar agosto", "Producto lanzar"], ["Nous avons décidé de lancer le produit en août", "Lancement août", "Produit lancement"], ["8月に製品をローンチすることを決定しました", "ローンチ8月", "製品ローンチ"]),

    q(2, 0, "What is the company's long-term vision?", "Qual é a visão de longo prazo da empresa?", "¿Cuál es la visión a largo plazo de la empresa?", "Quelle est la vision à long terme de l'entreprise?", "会社の長期的なビジョンは何ですか？",
        ["To become the market leader in technology", "Get big", "Technology leader"], ["Tornar-se a líder de mercado em tecnologia", "Ficar grande", "Líder tecnologia"], ["Convertirse en el líder del mercado tecnológico", "Hacerse grande", "Líder tecnología"], ["Devenir le leader du marché de la technologie", "Devenir grand", "Leader technologie"], ["テクノロジー部門で市場のリーダーになることです", "大きくなる", "技術リーダー"]),

    q(2, 0, "How do you stay updated in your field?", "Como se mantém atualizado na sua área?", "¿Cómo te mantienes actualizado en tu campo?", "Comment restez-vous à jour dans votre domaine?", "業界の最新情報をどのように入手していますか？",
        ["I read articles and attend webinars", "I watch news", "Study always"], ["Leio artigos e participo de webinars", "Vejo notícias", "Estudo sempre"], ["Leo artículos y asisto a seminarios web", "Veo noticias", "Estudio siempre"], ["Je lis des articles et j'assiste à des webinaires", "Regarde nouvelles", "Étudie toujours"], ["記事を読んだり、ウェビナーに参加したりします", "ニュース見る", "常に勉強"]),

    q(2, 0, "What is the negotiation status?", "Qual é o status da negociação do contrato?", "¿Cuál es el estado de la negociación del contrato?", "Quel est le statut de la négociation du contrat?", "契約交渉の進捗状況はどうですか？",
        ["We are reviewing the final draft", "Check final", "Draft review"], ["Estamos revisando a versão final", "Checar final", "Revisar rascunho"], ["Estamos revisando el borrador final", "Checar final", "Revisar borrador"], ["Nous révisons le projet final", "Vérifier final", "Réviser projet"], ["最終ドラフトを確認しているところです", "最終確認", "ドラフト確認"]),

    q(2, 0, "Do we have resources for this task?", "Temos recursos para esta tarefa?", "¿Tenemos recursos para esta tarea?", "Avons-nous les ressources pour cette tâche?", "このタスクのためのリソースはありますか？",
        ["Yes, the team is fully equipped", "Yes, have team", "Team good"], ["Sim, a equipe está totalmente equipada", "Sim, tem equipe", "Equipe boa"], ["Sí, el equipo está totalmente equipado", "Sí, hay equipo", "Equipo bueno"], ["Oui, l'équipe est entièrement équipée", "Oui, équipe présente", "Équipe bonne"], ["はい、チームの準備は完全に整っています", "はい、チームあり", "チーム良い"]),

    q(2, 0, "What is the project budget limit?", "Qual é o limite de orçamento do projeto?", "¿Cuál es el límite de presupuesto del projeto?", "Quelle est la limite budgétaire du projet?", "プロジェクトの予算上限はいくらですか？",
        ["It is fifty thousand dollars", "Fifty thousand limit", "Budget fifty"], ["São cinquenta mil dólares", "Cinquenta mil limite", "Orçamento cinquenta"], ["Son cincuenta mil dólares", "Cincuenta mil límite", "Presupuesto cincuenta"], ["C'est cinquante mille dollars", "Cinquante mille limite", "Budget cinquante"], ["5万ドルです", "5万上限", "予算5万"]),

    q(2, 0, "How do you handle customer complaints?", "Como você lida com reclamações de clientes?", "¿Cómo manejas las quejas de los clientes?", "Comment gérez-vous les plaintes des clients?", "顧客からの苦情にどのように対応しますか？",
        ["By listening actively and offering solutions", "Ignore them", "Say sorry"], ["Ouvindo ativamente e oferecendo soluções", "Ignorar reclamação", "Pedir desculpas"], ["Escuchando activamente y ofreciendo soluciones", "Ignorar queja", "Pedir disculpas"], ["En écoutant activement et en offrant des solutions", "Ignorer plaintes", "S'excuser"], ["積極的に耳を傾け、解決策を提示することです", "無視する", "謝る"]),

    q(2, 0, "What are the key features of the product?", "Quais são as principais características do produto?", "¿Cuáles son las características clave del producto?", "Quelles sont les caractéristiques clés du produit?", "製品の主な特徴は何ですか？",
        ["It is fast, secure, and easy to use", "It is cheap", "Good product"], ["É rápido, seguro e fácil de usar", "É barato", "Bom produto"], ["Es rápido, seguro y fácil de usar", "Es barato", "Buen producto"], ["Il est rapide, sécurisé et facile à utiliser", "Il est bon marché", "Bon produit"], ["高速で安全、そして使いやすいことです", "安いです", "良い製品"]),

    q(2, 0, "Can we schedule a follow-up call?", "Podemos agendar uma chamada de acompanhamento?", "¿Podemos programar una llamada de seguimiento?", "Pouvons-nous planifier un appel de suivi?", "フォローアップの電話をスケジュールできますか？",
        ["Yes, let's talk next Thursday", "Yes, talk Thursday", "Thursday yes"], ["Sim, vamos conversar na próxima quinta-feira", "Sim, falar quinta", "Quinta sim"], ["Sí, hablemos el próximo jueves", "Sí, hablar jueves", "Jueves sí"], ["Oui, parlons-en jeudi prochain", "Oui, parler jeudi", "Jeudi oui"], ["はい、来週の木曜日にお話ししましょう", "はい、木曜日話す", "木曜日はい"]),

    q(2, 0, "What is the main source of revenue?", "Qual é a principal fonte de receita?", "¿Cuál es la principal fuente de ingresos?", "Quelle est la principale source de revenus?", "主な収益源は何ですか？",
        ["Software subscriptions", "Selling computers", "Ads"], ["Assinaturas de software", "Venda de computadores", "Anúncios"], ["Suscripciones de software", "Venta de computadoras", "Anuncios"], ["Abonnements logiciels", "Vente d'ordinateurs", "Publicités"], ["ソフトウェアのサブスクリプションです", "PC販売", "広告"]),

    q(2, 0, "How do you prioritize your daily tasks?", "Como você prioriza suas tarefas diárias?", "¿Cómo priorizas tus tareas diarias?", "Comment priorisez-vous vos tâches quotidiennes?", "日々のタスクの優先順位をどのように決めていますか？",
        ["By urgency and business value", "By date", "I do them randomly"], ["Por urgência e valor de negócio", "Por data", "Faço aleatório"], ["Por urgencia y valor de negocio", "Por fecha", "Hago aleatorio"], ["Par urgence et valeur commerciale", "Par date", "Aléatoire"], ["緊急度とビジネス価値に基づいて判断します", "日付順", "ランダムに行う"]),

    q(2, 0, "What is your feedback on my presentation?", "Qual é o seu feedback sobre a minha apresentação?", "¿Cuál es tu opinión sobre mi presentación?", "Quel est votre retour sur ma présentation?", "私のプレゼンテーションへのフィードバックはいかがですか？",
        ["It was very clear and professional", "It was bad", "It was long"], ["Foi muito clara e profissional", "Foi ruim", "Foi longa"], ["Fue muy clara y profesional", "Fue mala", "Fue larga"], ["C'était très clair et professionnel", "C'était mauvais", "C'était long"], ["とても明確でプロフェッショナルな内容でした", "悪かった", "長かった"]),

    q(2, 0, "What is the goal of this software update?", "Qual é o objetivo desta atualização de software?", "¿Cuál es el objetivo de esta actualización de software?", "Quel est le but de cette mise à jour de logiciel?", "このソフトウェアアップデートの目的は何ですか？",
        ["To patch security bugs and improve speed.", "Update speed", "Bug patch"], ["Corrigir bugs de segurança e melhorar velocidade.", "Atualizar velocidade", "Corrigir bugs"], ["Corregir errores de seguridad y mejorar velocidad.", "Actualizar velocidad", "Corregir errores"], ["Corriger les bugs de sécurité et améliorer la vitesse.", "Mettre à jour", "Corriger bugs"], ["セキュリティの修正と速度向上です。", "アップデート速度", "バグ修正"]),

    q(2, 0, "Our client requested a detailed report.", "Nosso cliente solicitou um relatório detalhado.", "Nuestro cliente solicitó un informe detallado.", "Notre client a demandé un rapport détaillé.", "クライアントから詳細なレポートを求められました。",
        ["I will start writing it immediately.", "Write report", "Detailed report"], ["Vou começar a escrevê-lo imediatamente.", "Escrever relatório", "Relatório detalhado"], ["Comenzaré a escribirlo de inmediato.", "Escribir informe", "Informe detallado"], ["Je vais commencer à l'écrire immédiatement.", "Écrire rapport", "Rapport détaillé"], ["すぐに作成に取り掛かります。", "レポート書く", "詳細レポート"]),

    q(2, 0, "Should we hire a new developer?", "Devemos contratar um novo desenvolvedor?", "¿Deberíamos contratar a un nuevo desarrollador?", "Devrions-nous embaucher un nouveau développeur?", "新しい開発者を雇用すべきですか？",
        ["Only if the project scope increases.", "Hire developer", "Developer yes"], ["Apenas se o escopo do projeto aumentar.", "Contratar desenvolvedor", "Desenvolvedor sim"], ["Solo si aumenta el alcance del proyecto.", "Contratar desarrollador", "Desarrollador sí"], ["Seulement si la portée du projet augmente.", "Embaucher dév", "Développeur oui"], ["プロジェクトの規模が拡大する場合のみ必要です。", "エンジニア雇用", "エンジニアはい"]),

    q(2, 0, "We need to decrease operational costs.", "Precisamos diminuir os custos operacionais.", "Necesitamos disminuir los costos operativos.", "Nous devons réduire les coûts opérationnels.", "運営コストを削減する必要があります。",
        ["We should reduce paper usage first.", "Decrease costs", "Operational costs"], ["Deveríamos reduzir o uso de papel primeiro.", "Diminuir custos", "Custos operacionais"], ["Deberíamos reducir el uso de papel primero.", "Disminuir costos", "Costos operativos"], ["Nous devrions d'abord réduire l'utilisation du papier.", "Réduire coûts", "Coûts opérationnels"], ["まずはペーパーレス化を進めるべきです。", "コスト削減", "運営コスト"]),

    q(2, 0, "The server load is extremely high today.", "A carga do servidor está extremamente alta hoje.", "La carga del servidor es extremadamente alta hoy.", "La charge du serveur est extrêmement élevée aujourd'hui.", "今日のサーバー負荷は非常に高いです。",
        ["We must scale our database instances.", "Server load", "High database"], ["Devemos escalar as instâncias do banco.", "Carga servidor", "Banco de dados"], ["Debemos escalar las instancias de la base.", "Carga servidor", "Base de datos"], ["Nous devons mettre à l'échelle nos instances de base.", "Charge serveur", "Base de données"], ["データベースのインスタンスを拡張する必要がありますね。", "サーバー負荷", "データベース拡張"]),

    q(2, 0, "The market is reacting positively to our launch.", "O mercado está reagindo bem ao nosso lançamento.", "El mercado está reaccionando bien a nuestro lanzamiento.", "Le marché réagit positivement à notre lancement.", "市場は当社の製品発表に好反応を示しています。",
        ["This is a perfect opportunity to expand.", "Market react", "Launch expand"], ["Esta é uma oportunidade perfeita para expandir.", "Mercado reagindo", "Expandir lançamento"], ["Esta es una oportunidad perfecta para expandir.", "Mercado reaccionando", "Expandir lanzamiento"], ["C'est une opportunité parfaite pour se développer.", "Marché réagit", "Développer lancement"], ["事業拡大の絶好の機会ですね。", "市場反応", "発表拡大"]),

    q(2, 0, "Should we change the marketing strategy?", "Devemos mudar a estratégia de marketing?", "¿Deberíamos cambiar la estrategia de marketing?", "Devrions-nous changer de stratégie marketing?", "マーケティング戦略を変更すべきですか？",
        ["Yes, we need to focus on social media.", "Change marketing", "Strategy change"], ["Sim, precisamos focar nas mídias sociais.", "Mudar marketing", "Mudança estratégia"], ["Sí, debemos enfocarnos en las redes sociales.", "Cambiar marketing", "Cambio estrategia"], ["Oui, nous devons nous concentrer sur les réseaux sociaux.", "Changer marketing", "Changement stratégie"], ["はい、SNSに注力する必要があります。", "戦略変更", "マーケティング変更"]),

    q(2, 0, "What is the return on investment of this campaign?", "Qual é o retorno sobre o investimento desta campanha?", "¿Cuál es el retorno de la inversión de esta campaña?", "Quel est le retour sur investissement de cette campagne?", "このキャンペーンの投資対効果（ROI）は何ですか？",
        ["It reached about one hundred and fifty percent.", "Campaign ROI", "Return campaign"], ["Alcançou cerca de cento e cinquenta por cento.", "ROI campanha", "Retorno campanha"], ["Alcanzó alrededor del ciento cincuenta por ciento.", "ROI campaña", "Retorno campaña"], ["Il a atteint environ cent cinquante pour cent.", "ROI campagne", "Retour campagne"], ["約150パーセントに達しました。", "キャンペーンROI", "投資効果"]),

    q(2, 0, "Our manager wants to approve the layout design.", "Nosso gerente quer aprovar o design do layout.", "Nuestro gerente quiere aprobar el diseño del diseño.", "Notre manager souhaite approuver la conception de la mise en page.", "マネージャーがレイアウトデザインの承認を求めています。",
        ["I will send the final prototype today.", "Manager layout", "Layout design"], ["Vou enviar o protótipo final hoje.", "Gerente layout", "Design layout"], ["Enviaré el prototipo final hoy.", "Gerente diseño", "Diseño diseño"], ["J'enverrai le prototype final aujourd'hui.", "Manager design", "Design page"], ["本日、最終プロトタイプを送付します。", "マネージャー承認", "デザイン送付"])
];

// Loop Dinâmico para Organizar e Gerar a Base de Dados Final para os 11 Idiomas
const idiomasDisponiveis = ["en", "pt", "es", "fr", "ja", "it", "de", "nl", "pl", "ru", "tr"];

idiomasDisponiveis.forEach(lang => {
    baseDeDados[lang] = [];
    
    rawQuestions.forEach(qItem => {
        // Pega os textos do idioma ou usa o fallback
        const npcText = qItem.npc[lang] || qItem.npc['en'];
        const optionsText = qItem.opcoes[lang] || qItem.opcoes['en'];
        
        baseDeDados[lang].push({
            npc: npcText,
            opcoes: optionsText,
            correta: qItem.correta,
            nivel: qItem.nivel,
            explicacao: { pt: "Tradução contextualizada nativa e exclusiva.", en: "Contextualized native exclusive translation." }
        });
    });
});

if (typeof module !== 'undefined') {
    module.exports = { baseDeDados };
}