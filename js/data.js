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
let questionCounter = 0;
function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
    const index = questionCounter++;
    const trans = translationsMap[index];

    return {
        nivel, correta,
        npc: {
            en, pt, es, fr, ja,
            it: trans ? trans.npc.it : es,
            de: trans ? trans.npc.de : en,
            nl: trans ? trans.npc.nl : en,
            pl: trans ? trans.npc.pl : en,
            ru: trans ? trans.npc.ru : en,
            tr: trans ? trans.npc.tr : es
        },
        opcoes: {
            en: opEn, pt: opPt, es: opEs, fr: opFr, ja: opJa,
            it: trans ? trans.opcoes.it : opEs,
            de: trans ? trans.opcoes.de : opEn,
            nl: trans ? trans.opcoes.nl : opEn,
            pl: trans ? trans.opcoes.pl : opEn,
            ru: trans ? trans.opcoes.ru : opEn,
            tr: trans ? trans.opcoes.tr : opEs
        },
        explicacao: { pt: "Resposta adequada para a situação descrita.", en: "Appropriate response for this situation." }
    };
}
const translationsMap = [
    {
        "npc": {
            "it": "Ciao! Come stai?",
            "de": "Hallo! Wie geht es dir?",
            "nl": "Hallo! Hoe gaat het met je?",
            "pl": "Cześć! Jak się masz?",
            "ru": "Привет! Как дела?",
            "tr": "Merhaba! Nasılsın?"
        },
        "opcoes": {
            "it": [
                "Sto bene, grazie!",
                "Bene tu",
                "Io sono buono"
            ],
            "de": [
                "Mir geht es gut, danke!",
                "Gut dir",
                "Ich bin gut"
            ],
            "nl": [
                "Met mij gaat het goed, dank je!",
                "Goed met jou",
                "Ik ben goed"
            ],
            "pl": [
                "Dobrze, dziękuję!",
                "Dobrze ty",
                "Jestem dobry"
            ],
            "ru": [
                "Хорошо, спасибо!",
                "Хорошо ты",
                "Я хороший"
            ],
            "tr": [
                "İyiyim, teşekkürler!",
                "İyi sen",
                "Ben iyiyim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti chiami?",
            "de": "Wie heißt du?",
            "nl": "Hoe heet je?",
            "pl": "Jak się nazywasz?",
            "ru": "Как тебя зовут?",
            "tr": "Adın ne?"
        },
        "opcoes": {
            "it": [
                "Mi chiamo Giovanni",
                "Nome Giovanni",
                "Me Giovanni"
            ],
            "de": [
                "Ich heiße Hans",
                "Name Hans",
                "Mich Hans"
            ],
            "nl": [
                "Mijn naam is Jan",
                "Naam Jan",
                "Mij Jan"
            ],
            "pl": [
                "Nazywam się Jan",
                "Nazwa Jan",
                "Mnie Jan"
            ],
            "ru": [
                "Меня зовут Иван",
                "Имя Иван",
                "Я Иван"
            ],
            "tr": [
                "Benim adım Can",
                "Ad Can",
                "Bana Can"
            ]
        }
    },
    {
        "npc": {
            "it": "Di dove sei?",
            "de": "Woher kommst du?",
            "nl": "Waar kom je vandaan?",
            "pl": "Skąd pochodzisz?",
            "ru": "Откуда ты?",
            "tr": "Nerelisin?"
        },
        "opcoes": {
            "it": [
                "Vengo dal Brasile",
                "Brasile io sono",
                "Da Brasile"
            ],
            "de": [
                "Ich komme aus Brasilien",
                "Brasilien ich bin",
                "Aus Brasilien"
            ],
            "nl": [
                "Ik kom uit Brazilië",
                "Brazilië ik ben",
                "Uit Brazilië"
            ],
            "pl": [
                "Jestem z Brazylii",
                "Brazylia jestem",
                "Z Brazylii"
            ],
            "ru": [
                "Я из Бразилии",
                "Бразилия я есть",
                "Из Бразилии"
            ],
            "tr": [
                "Brezilya'lıyım",
                "Brezilya ben",
                "Brezilya'dan"
            ]
        }
    },
    {
        "npc": {
            "it": "Parli inglese?",
            "de": "Sprichst du Englisch?",
            "nl": "Spreek je Engels?",
            "pl": "Czy mówisz po angielsku?",
            "ru": "Ты говоришь по-английски?",
            "tr": "İngilizce konuşuyor musun?"
        },
        "opcoes": {
            "it": [
                "Sì, un po'",
                "Parlare sì",
                "Poco sì"
            ],
            "de": [
                "Ja, ein bisschen",
                "Sprechen ja",
                "Wenig ja"
            ],
            "nl": [
                "Ja, een beetje",
                "Spreken ja",
                "Beetje ja"
            ],
            "pl": [
                "Tak, trochę",
                "Mówić tak",
                "Trochę tak"
            ],
            "ru": [
                "Да, немного",
                "Говорить да",
                "Мало да"
            ],
            "tr": [
                "Evet, biraz",
                "Konuşmak evet",
                "Az evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Piacere di conoscerti!",
            "de": "Schön, dich kennenzulernen!",
            "nl": "Leuk je te ontmoeten!",
            "pl": "Miło cię poznać!",
            "ru": "Приятно познакомиться!",
            "tr": "Tanıştığımıza memnun oldum!"
        },
        "opcoes": {
            "it": [
                "Piacere mio",
                "Anche io",
                "Stesso incontro"
            ],
            "de": [
                "Gleichfalls",
                "Ich auch",
                "Gleiches Treffen"
            ],
            "nl": [
                "Insgelijks",
                "Ik ook",
                "Hetzelfde ontmoeten"
            ],
            "pl": [
                "Mnie również",
                "Ja też",
                "Tak samo poznać"
            ],
            "ru": [
                "Мне тоже приятно",
                "Я тоже",
                "Взаимно"
            ],
            "tr": [
                "Ben de memnun oldum",
                "Ben de",
                "Aynı şekilde"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è il bagno?",
            "de": "Wo ist die Toilette?",
            "nl": "Waar is het toilet?",
            "pl": "Gdzie jest toaleta?",
            "ru": "Где туалет?",
            "tr": "Tuvalet nerede?"
        },
        "opcoes": {
            "it": [
                "È a sinistra",
                "Bagno sinistra",
                "Vai sinistra"
            ],
            "de": [
                "Es ist links",
                "Toilette links",
                "Geh links"
            ],
            "nl": [
                "Het is links",
                "Toilet links",
                "Ga links"
            ],
            "pl": [
                "Jest po lewej stronie",
                "Toaleta lewo",
                "Idź w lewo"
            ],
            "ru": [
                "Он слева",
                "Туалет слева",
                "Иди налево"
            ],
            "tr": [
                "Solda",
                "Tuvalet sol",
                "Sola git"
            ]
        }
    },
    {
        "npc": {
            "it": "Quanto costa questo?",
            "de": "Wie viel kostet das?",
            "nl": "Hoeveel kost dit?",
            "pl": "Ile to kosztuje?",
            "ru": "Сколько это стоит?",
            "tr": "Bu ne kadar?"
        },
        "opcoes": {
            "it": [
                "Costa dieci dollari",
                "Dieci dollari costo",
                "Costo dieci"
            ],
            "de": [
                "Es kostet zehn Dollar",
                "Zehn Dollar kosten",
                "Kosten zehn"
            ],
            "nl": [
                "Het kost tien dollar",
                "Tien dollar kosten",
                "Kosten tien"
            ],
            "pl": [
                "To kosztuje dziesięć dolarów",
                "Dziesięć dolarów koszt",
                "Koszt dziesięć"
            ],
            "ru": [
                "Это стоит десять долларов",
                "Десять долларов стоить",
                "Стоить десять"
            ],
            "tr": [
                "On dolar",
                "On dolar maliyet",
                "Maliyet on"
            ]
        }
    },
    {
        "npc": {
            "it": "Arrivederci!",
            "de": "Auf Wiedersehen!",
            "nl": "Tot ziens!",
            "pl": "Do widzenia!",
            "ru": "До свидания!",
            "tr": "Hoşça kal!"
        },
        "opcoes": {
            "it": [
                "A dopo!",
                "Arrivederci sì",
                "Dopo vai"
            ],
            "de": [
                "Bis später!",
                "Auf Wiedersehen ja",
                "Später geh"
            ],
            "nl": [
                "Tot later!",
                "Tot ziens ja",
                "Later ga"
            ],
            "pl": [
                "Do zobaczenia!",
                "Do widzenia tak",
                "Później idź"
            ],
            "ru": [
                "До встречи!",
                "До свидания да",
                "Позже иди"
            ],
            "tr": [
                "Görüşmek üzere!",
                "Hoşça kal evet",
                "Sonra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Grazie!",
            "de": "Danke!",
            "nl": "Dank je!",
            "pl": "Dziękuję!",
            "ru": "Спасибо!",
            "tr": "Teşekkürler!"
        },
        "opcoes": {
            "it": [
                "Prego!",
                "Benvenuto sì",
                "Grazie vai"
            ],
            "de": [
                "Bitte!",
                "Willkommen ja",
                "Danke geh"
            ],
            "nl": [
                "Graag gedaan!",
                "Welkom ja",
                "Bedankt ga"
            ],
            "pl": [
                "Nie ma za co!",
                "Witamy tak",
                "Dzięki idź"
            ],
            "ru": [
                "Пожалуйста!",
                "Добро пожаловать да",
                "Спасибо иди"
            ],
            "tr": [
                "Rica ederim!",
                "Hoş geldiniz evet",
                "Teşekkür git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buongiorno!",
            "de": "Guten Morgen!",
            "nl": "Goedemorgen!",
            "pl": "Dzień dobry!",
            "ru": "Доброе утро!",
            "tr": "Günaydın!"
        },
        "opcoes": {
            "it": [
                "Buongiorno! Come stai?",
                "Mattina sì",
                "Buonanotte"
            ],
            "de": [
                "Guten Morgen! Wie geht es dir?",
                "Morgen ja",
                "Gute Nacht"
            ],
            "nl": [
                "Goedemorgen! Hoe gaat het?",
                "Morgen ja",
                "Goedenacht"
            ],
            "pl": [
                "Dzień dobry! Jak się masz?",
                "Rano tak",
                "Dobranoc"
            ],
            "ru": [
                "Доброе утро! Как дела?",
                "Утро да",
                "Спокойной ночи"
            ],
            "tr": [
                "Günaydın! Nasılsın?",
                "Sabah evet",
                "İyi geceler"
            ]
        }
    },
    {
        "npc": {
            "it": "Voglio un caffè.",
            "de": "Ich möchte Kaffee.",
            "nl": "Ik wil koffie.",
            "pl": "Chcę kawę.",
            "ru": "Я хочу кофе.",
            "tr": "Kahve istiyorum."
        },
        "opcoes": {
            "it": [
                "Ecco il suo caffè, signore.",
                "Caffè prendi",
                "Dai caffè"
            ],
            "de": [
                "Hier ist Ihr Kaffee, mein Herr.",
                "Kaffee nimm",
                "Gib Kaffee"
            ],
            "nl": [
                "Hier is uw koffie, meneer.",
                "Koffie neem",
                "Geef koffie"
            ],
            "pl": [
                "Oto pana kawa, proszę pana.",
                "Kawę weź",
                "Daj kawę"
            ],
            "ru": [
                "Вот ваш кофе, сэр.",
                "Кофе возьми",
                "Дай кофе"
            ],
            "tr": [
                "İşte kahveniz, efendim.",
                "Kahve al",
                "Kahve ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Questo è il treno per Londra?",
            "de": "Ist das der Zug nach London?",
            "nl": "Is dit de trein naar Londen?",
            "pl": "Czy to jest pociąg do Londynu?",
            "ru": "Это поезд в Лондон?",
            "tr": "Bu Londra treni mi?"
        },
        "opcoes": {
            "it": [
                "Sì, binario numero tre.",
                "Treno sì",
                "Londra vai"
            ],
            "de": [
                "Ja, Gleis Nummer drei.",
                "Zug ja",
                "London geht"
            ],
            "nl": [
                "Ja, spoor nummer drie.",
                "Trein ja",
                "Londen gaat"
            ],
            "pl": [
                "Tak, peron numer trzy.",
                "Pociąg tak",
                "Londyn jedzie"
            ],
            "ru": [
                "Да, платформа номер три.",
                "Поезд да",
                "Лондон идет"
            ],
            "tr": [
                "Evet, üç numaralı peron.",
                "Tren evet",
                "Londra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, dov'è l'uscita?",
            "de": "Entschuldigung, wo ist der Ausgang?",
            "nl": "Excuseer me, waar is de uitgang?",
            "pl": "Przepraszam, gdzie jest wyjście?",
            "ru": "Извините, где выход?",
            "tr": "Afedersiniz, çıkış nerede?"
        },
        "opcoes": {
            "it": [
                "Segua il cartello verde.",
                "Uscita vai",
                "Guarda cartello"
            ],
            "de": [
                "Folgen Sie dem grünen Schild.",
                "Ausgang geh",
                "Schau Schild"
            ],
            "nl": [
                "Volg het groene bord.",
                "Uitgang ga",
                "Kijk bord"
            ],
            "pl": [
                "Proszę iść za zielonym znakiem.",
                "Wyjście idź",
                "Patrz znak"
            ],
            "ru": [
                "Идите по зеленому указателю.",
                "Выход иди",
                "Смотри знак"
            ],
            "tr": [
                "Yeşil tabelayı takip edin.",
                "Çıkış git",
                "Tabelaya bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vorrei dell'acqua.",
            "de": "Ich hätte gerne etwas Wasser.",
            "nl": "Ik zou graag wat water willen.",
            "pl": "Chciałbym wodę.",
            "ru": "Я бы хотел воды.",
            "tr": "Su rica ediyorum."
        },
        "opcoes": {
            "it": [
                "Acqua gassata o naturale?",
                "Acqua prendi",
                "Dai acqua"
            ],
            "de": [
                "Mit Kohlensäure oder stilles Wasser?",
                "Wasser nimm",
                "Gib Wasser"
            ],
            "nl": [
                "Bruisend of plat water?",
                "Water neem",
                "Geef water"
            ],
            "pl": [
                "Gazowana czy niegazowana?",
                "Wodę weź",
                "Daj wodę"
            ],
            "ru": [
                "Газированную или без газа?",
                "Воду возьми",
                "Дай воду"
            ],
            "tr": [
                "Gazlı mı gazsız mı?",
                "Su al",
                "Su ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha un tavolo per due?",
            "de": "Haben Sie einen Tisch für zwei?",
            "nl": "Heeft u een tafel voor twee?",
            "pl": "Czy ma pan stolik dla dwojga?",
            "ru": "У вас есть столик на двоих?",
            "tr": "İki kişilik masanız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, mi segua per favore.",
                "Tavolo sì",
                "Due posti"
            ],
            "de": [
                "Ja, folgen Sie mir bitte.",
                "Tisch ja",
                "Zwei Sitze"
            ],
            "nl": [
                "Ja, volgt u mij aanzien.",
                "Tafel ja",
                "Twee stoelen"
            ],
            "pl": [
                "Tak, proszę za mną.",
                "Stolik tak",
                "Dwa miejsca"
            ],
            "ru": [
                "Да, идите за мной, пожалуйста.",
                "Столик да",
                "Два места"
            ],
            "tr": [
                "Evet, lütfen beni takip edin.",
                "Masa evet",
                "İki kişilik"
            ]
        }
    },
    {
        "npc": {
            "it": "A che ora apre il negozio?",
            "de": "Wann öffnet das Geschäft?",
            "nl": "Hoe laat gaat de winkel open?",
            "pl": "O której godzinie otwierają sklep?",
            "ru": "Во сколько открывается магазин?",
            "tr": "Mağaza saat kaçta açılıyor?"
        },
        "opcoes": {
            "it": [
                "Apre alle nove del mattino.",
                "Apre nove",
                "Negozio apre"
            ],
            "de": [
                "Es öffnet um neun Uhr morgens.",
                "Öffnet neun",
                "Geschäft öffnet"
            ],
            "nl": [
                "Het gaat om negen uur 's ochtends open.",
                "Open negen",
                "Winkel open"
            ],
            "pl": [
                "Otwierają o dziewiątej rano.",
                "Otwiera dziewięć",
                "Sklep otwiera"
            ],
            "ru": [
                "Он открывается в девять утра.",
                "Открыто девять",
                "Магазин открывается"
            ],
            "tr": [
                "Sabah dokuzda açılıyor.",
                "Açık dokuz",
                "Mağaza açık"
            ]
        }
    },
    {
        "npc": {
            "it": "Sono molto stanco oggi.",
            "de": "Ich bin heute sehr müde.",
            "nl": "Ik ben erg moe vandaag.",
            "pl": "Jestem dzisiaj bardzo zmęczony.",
            "ru": "Я очень устал сегодня.",
            "tr": "Bugün çok yorgunum."
        },
        "opcoes": {
            "it": [
                "Dovresti andare a dormire.",
                "Dormire sì",
                "Stanco vai"
            ],
            "de": [
                "Du solltest schlafen gehen.",
                "Schlafen ja",
                "Müde geh"
            ],
            "nl": [
                "Je zou moeten gaan slapen.",
                "Slapen ja",
                "Moe ga"
            ],
            "pl": [
                "Powinieneś iść spać.",
                "Spie tak",
                "Zmęczony idź"
            ],
            "ru": [
                "Тебе нужно пойти поспать.",
                "Спать да",
                "Устал иди"
            ],
            "tr": [
                "Uyumalısın.",
                "Uyu evet",
                "Yorgun git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buon compleanno, Maria!",
            "de": "Herzlichen Glückwunsch zum Geburtstag, Maria!",
            "nl": "Gefeliciteerd met je verjaardag, Maria!",
            "pl": "Wszystkiego najlepszego z okazji urodzin, Mario!",
            "ru": "С днем рождения, Мария!",
            "tr": "Doğum günün kutlu olsun, Maria!"
        },
        "opcoes": {
            "it": [
                "Grazie mille, Giovanni!",
                "Compleanno grazie",
                "Felice giorno"
            ],
            "de": [
                "Vielen Dank, Hans!",
                "Geburtstag danke",
                "Glücklicher Tag"
            ],
            "nl": [
                "Hartelijk dank, Jan!",
                "Verjaardag bedankt",
                "Fijne dag"
            ],
            "pl": [
                "Bardzo dziękuję, Janie!",
                "Urodziny dziękuję",
                "Szczęśliwy dzień"
            ],
            "ru": [
                "Большое спасибо, Иван!",
                "Рождения спасибо",
                "Счастливый день"
            ],
            "tr": [
                "Çok teşekkürler, Can!",
                "Doğum günü teşekkür",
                "Mutlu gün"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la chiave dell'hotel?",
            "de": "Wo ist der Hotelschlüssel?",
            "nl": "Waar is de hotelsleutel?",
            "pl": "Gdzie jest klucz do hotelu?",
            "ru": "Где ключ от отеля?",
            "tr": "Otel anahtarı nerede?"
        },
        "opcoes": {
            "it": [
                "È dentro la tua tasca.",
                "Chiave tasca",
                "Chiave sì"
            ],
            "de": [
                "Er ist in deiner Tasche.",
                "Schlüssel Tasche",
                "Schlüssel ja"
            ],
            "nl": [
                "Het zit in je zak.",
                "Sleutel zak",
                "Sleutel ja"
            ],
            "pl": [
                "Jest w twojej kieszeni.",
                "Klucz kieszeń",
                "Klucz tak"
            ],
            "ru": [
                "Он у тебя в кармане.",
                "Ключ карман",
                "Ключ да"
            ],
            "tr": [
                "Cebinin içinde.",
                "Anahtar cep",
                "Anahtar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Non ti capisco.",
            "de": "Ich verstehe dich nicht.",
            "nl": "Ik begrijp je niet.",
            "pl": "Nie rozumiem cię.",
            "ru": "Я тебя не понимаю.",
            "tr": "Seni anlamıyorum."
        },
        "opcoes": {
            "it": [
                "Parlerò più lentamente.",
                "Capire no",
                "Parlare sì"
            ],
            "de": [
                "Ich werde langsamer sprechen.",
                "Verstehen nein",
                "Sprechen ja"
            ],
            "nl": [
                "Ik zal langzamer spreken.",
                "Begrijpen nee",
                "Spreken ja"
            ],
            "pl": [
                "Będę mówić wolniej.",
                "Rozumieć nie",
                "Mówić tak"
            ],
            "ru": [
                "Я буду говорить медленнее.",
                "Понимать нет",
                "Говорить да"
            ],
            "tr": [
                "Daha yavaş konuşacağım.",
                "Anlamak hayır",
                "Konuşmak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Il museo è aperto la domenica?",
            "de": "Ist das Museum am Sonntag geöffnet?",
            "nl": "Is het museum open op zondag?",
            "pl": "Czy muzeum jest otwarte w niedzielę?",
            "ru": "Музей открыт в воскресенье?",
            "tr": "Müze Pazar günleri açık mı?"
        },
        "opcoes": {
            "it": [
                "Sì, dalle dieci alle sei.",
                "Museo aperto",
                "Domenica sì"
            ],
            "de": [
                "Ja, von zehn bis sechs.",
                "Museum geöffnet",
                "Sonntag ja"
            ],
            "nl": [
                "Ja, van tien tot zes.",
                "Museum open",
                "Zondag ja"
            ],
            "pl": [
                "Tak, od dziesiątej do szóstej.",
                "Muzeum otwarte",
                "Niedziela tak"
            ],
            "ru": [
                "Да, с десяти до шести.",
                "Музей открыт",
                "Воскресенье да"
            ],
            "tr": [
                "Evet, ondan altıya kadar.",
                "Müze açık",
                "Pazar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Come posso pagare questo biglietto?",
            "de": "Wie kann ich dieses Ticket bezahlen?",
            "nl": "Hoe kan ik dit ticket betalen?",
            "pl": "Jak mogę zapłacić za ten bilet?",
            "ru": "Как я могу оплатить этот билет?",
            "tr": "Bu bileti nasıl ödeyebilirim?"
        },
        "opcoes": {
            "it": [
                "Puoi pagare in contanti.",
                "Pagare contanti",
                "Biglietto pagare"
            ],
            "de": [
                "Sie können in bar bezahlen.",
                "Bezahlen bar",
                "Ticket bezahlen"
            ],
            "nl": [
                "U kunt contant betalen.",
                "Betalen contant",
                "Ticket betalen"
            ],
            "pl": [
                "Możesz zapłacić gotówką.",
                "Zapłacić gotówką",
                "Bilet zapłacić"
            ],
            "ru": [
                "Вы можете оплатить наличными.",
                "Оплатить наличными",
                "Билет оплатить"
            ],
            "tr": [
                "Nakit ödeyebilirsiniz.",
                "Ödemek nakit",
                "Bilet ödemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho bisogno di un medico, per favore.",
            "de": "Ich brauche bitte einen Arzt.",
            "nl": "Ik heb een dokter nodig, alstublieft.",
            "pl": "Potrzebuję lekarza, proszę.",
            "ru": "Мне нужен врач, пожалуйста.",
            "tr": "Bir doktora ihtiyacım var, lütfen."
        },
        "opcoes": {
            "it": [
                "Chiamerò l'ospedale.",
                "Medico chiamare",
                "Ospedale medico"
            ],
            "de": [
                "Ich werde das Krankenhaus anrufen.",
                "Arzt rufen",
                "Krankenhaus Arzt"
            ],
            "nl": [
                "Ik zal het ziekenhuis bellen.",
                "Dokter bellen",
                "Ziekenhuis dokter"
            ],
            "pl": [
                "Zadzwonię do szpitala.",
                "Lekarz zadzwonić",
                "Szpital lekarz"
            ],
            "ru": [
                "Я позвоню в больницу.",
                "Врач позвонить",
                "Больница врач"
            ],
            "tr": [
                "Hastaneyi arayacağım.",
                "Doktor aramak",
                "Hastane doktor"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo colore preferito?",
            "de": "Was ist deine Lieblingsfarbe?",
            "nl": "Wat is je favoriete kleur?",
            "pl": "Jaki jest twój ulubiony kolor?",
            "ru": "Какой твой любимый цвет?",
            "tr": "En sevdiğin renk ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace molto l'azzurro.",
                "Colore azzurro",
                "Gusto colore"
            ],
            "de": [
                "Ich mag Blau sehr.",
                "Farbe Blau",
                "Mag Farbe"
            ],
            "nl": [
                "Ik hou erg van blauw.",
                "Kleur blauw",
                "Hou kleur"
            ],
            "pl": [
                "Bardzo lubię niebieski.",
                "Kolor niebieski",
                "Lubię kolor"
            ],
            "ru": [
                "Мне очень нравится синий.",
                "Цвет синий",
                "Нравится цвет"
            ],
            "tr": [
                "Maviyi çok severim.",
                "Renk mavi",
                "Severim renk"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la biblioteca?",
            "de": "Wo ist die Bibliothek?",
            "nl": "Waar is de bibliotheek?",
            "pl": "Gdzie jest biblioteka?",
            "ru": "Где библиотека?",
            "tr": "Kütüphane nerede?"
        },
        "opcoes": {
            "it": [
                "È vicino alla scuola.",
                "Biblioteca scuola",
                "Vai scuola"
            ],
            "de": [
                "Sie ist neben der Schule.",
                "Bibliothek Schule",
                "Geh Schule"
            ],
            "nl": [
                "Het is naast de school.",
                "Bibliotheek school",
                "Ga school"
            ],
            "pl": [
                "Jest obok szkoły.",
                "Biblioteka szkoła",
                "Idź szkoła"
            ],
            "ru": [
                "Она рядом со школой.",
                "Библиотека школа",
                "Иди школа"
            ],
            "tr": [
                "Okulun yanında.",
                "Kütüphane okul",
                "Okula git"
            ]
        }
    },
    {
        "npc": {
            "it": "Mi sono perso in città.",
            "de": "Ich habe mich in der Stadt verlaufen.",
            "nl": "Ik ben verdwaald in de stad.",
            "pl": "Zgubiłem się w mieście.",
            "ru": "Я потерялся в городе.",
            "tr": "Şehirde kayboldum."
        },
        "opcoes": {
            "it": [
                "Mi mostri la sua mappa, per favore.",
                "Perso città",
                "Mappa guarda"
            ],
            "de": [
                "Zeigen Sie mir bitte Ihre Karte.",
                "Verlaufen Stadt",
                "Karte zeigen"
            ],
            "nl": [
                "Laat me je kaart zien, alstublieft.",
                "Verdwaald stad",
                "Kaart kijken"
            ],
            "pl": [
                "Proszę pokazać mi swoją mapę.",
                "Zgubiłem miasto",
                "Mapa patrz"
            ],
            "ru": [
                "Покажите мне вашу карту, пожалуйста.",
                "Потерялся город",
                "Карта смотри"
            ],
            "tr": [
                "Lütfen bana haritanızı gösterin.",
                "Kayıp şehir",
                "Harita bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vuoi giocare a tennis?",
            "de": "Möchtest du Tennis spielen?",
            "nl": "Wil je tennissen?",
            "pl": "Czy chcesz grać w tenisa?",
            "ru": "Хочешь поиграть в теннис?",
            "tr": "Tenis oynamak ister misin?"
        },
        "opcoes": {
            "it": [
                "Sì, ho due racchette.",
                "Tennis giocare",
                "Racchette sì"
            ],
            "de": [
                "Ja, ich habe zwei Schläger.",
                "Tennis spielen",
                "Schläger ja"
            ],
            "nl": [
                "Ja, ik heb twee rackets.",
                "Tennis spelen",
                "Rackets ja"
            ],
            "pl": [
                "Tak, mam dwie rakiety.",
                "Tenis grać",
                "Rakiety tak"
            ],
            "ru": [
                "Да, у меня есть две ракетки.",
                "Теннис играть",
                "Ракетки да"
            ],
            "tr": [
                "Evet, iki raketim var.",
                "Tenis oynamak",
                "Raket evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Questa zuppa è troppo calda.",
            "de": "Diese Suppe ist zu heiß.",
            "nl": "Deze soep is te heet.",
            "pl": "Ta zupa jest za gorąca.",
            "ru": "Этот суп слишком горячий.",
            "tr": "Bu çorba çok sıcak."
        },
        "opcoes": {
            "it": [
                "Aspetta qualche minuto.",
                "Zuppa calda",
                "Calda sì"
            ],
            "de": [
                "Warte ein paar Minuten.",
                "Suppe heiß",
                "Heiß ja"
            ],
            "nl": [
                "Wacht een paar minuten.",
                "Soep heet",
                "Heet ja"
            ],
            "pl": [
                "Poczekaj kilka minut.",
                "Zupa gorąca",
                "Gorąca tak"
            ],
            "ru": [
                "Подожди несколько минут.",
                "Суп горячий",
                "Горячий да"
            ],
            "tr": [
                "Birkaç dakika bekle.",
                "Çorba sıcak",
                "Sıcak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Posso sedermi qui?",
            "de": "Kann ich mich hierher setzen?",
            "nl": "Mag ik hier zitten?",
            "pl": "Czy mogę tu usiąść?",
            "ru": "Можно мне присесть здесь?",
            "tr": "Buraya oturabilir miyim?"
        },
        "opcoes": {
            "it": [
                "Sì, questo posto è libero.",
                "Sedersi sì",
                "Posto libero"
            ],
            "de": [
                "Ja, dieser Platz ist frei.",
                "Setzen ja",
                "Platz frei"
            ],
            "nl": [
                "Ja, deze plek is vrij.",
                "Zitten ja",
                "Plek vrij"
            ],
            "pl": [
                "Tak, to miejsce jest wolne.",
                "Usiąść tak",
                "Miejsce wolne"
            ],
            "ru": [
                "Да, это место свободно.",
                "Присесть да",
                "Место свободно"
            ],
            "tr": [
                "Evet, bu koltuk boş.",
                "Oturmak evet",
                "Koltuk boş"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai messo il latte?",
            "de": "Wo hast du die Milch hingetan?",
            "nl": "Waar heb je de melk gelaten?",
            "pl": "Gdzie położyłeś mleko?",
            "ru": "Куда ты положил молоко?",
            "tr": "Sütü nereye koydun?"
        },
        "opcoes": {
            "it": [
                "È dentro il frigorifero.",
                "Latte frigo",
                "Frigo latte"
            ],
            "de": [
                "Sie ist im Kühlschrank.",
                "Milch Kühlschrank",
                "Kühlschrank Milch"
            ],
            "nl": [
                "Het staat in de koelkast.",
                "Melk koelkast",
                "Koelkast melk"
            ],
            "pl": [
                "Jest w lodówce.",
                "Mleko lodówka",
                "Lodówka mleko"
            ],
            "ru": [
                "Оно в холодильнике.",
                "Молоко холодильник",
                "Холодильник молоко"
            ],
            "tr": [
                "Buzdolabının içinde.",
                "Süt buzdolabı",
                "Buzdolabı süt"
            ]
        }
    },
    {
        "npc": {
            "it": "Desidera ordinare ora?",
            "de": "Möchten Sie jetzt bestellen?",
            "nl": "Wilt u nu bestellen?",
            "pl": "Czy chciałby pan teraz zamówić?",
            "ru": "Желаете сделать заказ сейчас?",
            "tr": "Şimdi sipariş vermek ister misiniz?"
        },
        "opcoes": {
            "it": [
                "Sì, prenderò la bistecca, per favore",
                "Sì, voglio bistecca",
                "Dai bistecca"
            ],
            "de": [
                "Ja, ich nehme das Steak, bitte",
                "Ja, will Steak",
                "Gib Steak"
            ],
            "nl": [
                "Ja, ik neem de biefstuk, alstublieft",
                "Ja, wil biefstuk",
                "Geef biefstuk"
            ],
            "pl": [
                "Tak, poproszę stek",
                "Tak, chcę stek",
                "Daj stek"
            ],
            "ru": [
                "Да, мне стейк, пожалуйста",
                "Да, хочу стейк",
                "Дай стейк"
            ],
            "tr": [
                "Evet, biftek alayım lütfen",
                "Evet, biftek istiyorum",
                "Biftek ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo hobby preferito?",
            "de": "Was ist dein Lieblingshobby?",
            "nl": "Wat is je favoriete hobby?",
            "pl": "Jakie jest twoje ulubione hobby?",
            "ru": "Какое твое любимое хобби?",
            "tr": "En sevdiğin hobin ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace leggere libri",
                "Mi piace leggere",
                "Leggere è hobby"
            ],
            "de": [
                "Ich lese gerne Bücher",
                "Ich mag lesen",
                "Lesen ist Hobby"
            ],
            "nl": [
                "Ik hou van boeken lezen",
                "Ik vind lezen leuk",
                "Lezen is hobby"
            ],
            "pl": [
                "Lubię czytać książki",
                "Lubię czytać",
                "Czytanie to hobby"
            ],
            "ru": [
                "Мне нравится читать книги",
                "Я люблю читать",
                "Чтение — мое хобби"
            ],
            "tr": [
                "Kitap okumaktan hoşlanırım",
                "Okumayı severim",
                "Okumak hobim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come arrivo alla stazione?",
            "de": "Wie komme ich zum Bahnhof?",
            "nl": "Hoe kom ik bij het station?",
            "pl": "Jak dojadę do stacji?",
            "ru": "Как мне добраться до станции?",
            "tr": "İstasyona nasıl giderim?"
        },
        "opcoes": {
            "it": [
                "Vada sempre dritto e giri a destra",
                "Dritto e destra",
                "Vai stazione destra"
            ],
            "de": [
                "Gehen Sie geradeaus und biegen Sie rechts ab",
                "Geradeaus rechts",
                "Geh Bahnhof rechts"
            ],
            "nl": [
                "Ga rechtdoor en sla rechtsaf",
                "Rechtdoor rechts",
                "Ga station rechts"
            ],
            "pl": [
                "Proszę iść prosto i skręcić w prawo",
                "Prosto i w prawo",
                "Idź stacja prawo"
            ],
            "ru": [
                "Идите прямо и поверните направо",
                "Прямо и направо",
                "Иди станция право"
            ],
            "tr": [
                "Düz gidin ve sağa dönün",
                "Düz ve sağ",
                "İstasyon sağa git"
            ]
        }
    },
    {
        "npc": {
            "it": "Com'è il tempo oggi?",
            "de": "Wie ist das Wetter heute?",
            "nl": "Hoe is het weer vandaag?",
            "pl": "Jaka jest dzisiaj pogoda?",
            "ru": "Какая сегодня погода?",
            "tr": "Bugün hava nasıl?"
        },
        "opcoes": {
            "it": [
                "È soleggiato e caldo",
                "Sole e caldo",
                "Soleggiato oggi è"
            ],
            "de": [
                "Es ist sonnig und warm",
                "Sonne und warm",
                "Sonnig heute ist"
            ],
            "nl": [
                "Het is zonnig en warm",
                "Zon en warm",
                "Zonnig vandaag is"
            ],
            "pl": [
                "Jest słonecznie i ciepło",
                "Słońce i ciepło",
                "Słonecznie dzisiaj jest"
            ],
            "ru": [
                "Солнечно и тепло",
                "Солнце и тепло",
                "Солнечно сегодня"
            ],
            "tr": [
                "Güneşli ve sıcak",
                "Güneş ve sıcak",
                "Güneşli bugün"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai finito i compiti?",
            "de": "Hast du deine Hausaufgaben fertig?",
            "nl": "Heb je je huiswerk af?",
            "pl": "Czy odrobiłeś lekcje?",
            "ru": "Ты сделал домашнее задание?",
            "tr": "Ödevini bitirdin mi?"
        },
        "opcoes": {
            "it": [
                "Non ancora, ho bisogno di più tempo",
                "No, serve tempo",
                "Sì, ho finito"
            ],
            "de": [
                "Noch nicht, ich brauche mehr Zeit",
                "Nein, brauche Zeit",
                "Ja, ich bin fertig"
            ],
            "nl": [
                "Nog niet, ik heb meer tijd nodig",
                "Nee, heb tijd nodig",
                "Ja, ik ben klaar"
            ],
            "pl": [
                "Jeszcze nie, potrzebuję więcej czasu",
                "Nie, potrzebuję czasu",
                "Tak, skończyłem"
            ],
            "ru": [
                "Еще нет, мне нужно больше времени",
                "Нет, нужно время",
                "Да, я закончил"
            ],
            "tr": [
                "Henüz değil, daha fazla zamana ihtiyacım var",
                "Hayır, zaman lazım",
                "Evet, bitirdim"
            ]
        }
    },
    {
        "npc": {
            "it": "Cosa hai fatto lo scorso fine settimana?",
            "de": "Was hast du letztes Wochenende gemacht?",
            "nl": "Wat heb je afgelopen weekend gedaan?",
            "pl": "Co robiłeś w zeszły weekend?",
            "ru": "Что ты делал в прошлые выходные?",
            "tr": "Geçen hafta sonu ne yaptın?"
        },
        "opcoes": {
            "it": [
                "Sono andato al cinema con amici",
                "Io vado al cinema",
                "Andato cinema"
            ],
            "de": [
                "Ich bin mit Freunden ins Kino gegangen",
                "Ich gehe ins Kino",
                "Kino gegangen"
            ],
            "nl": [
                "Ik ben met vrienden naar de bioscoop gegaan",
                "Ik ga naar bioscoop",
                "Bioscoop gegaan"
            ],
            "pl": [
                "Poszedłem do kina z przyjaciółmi",
                "Idę do kina",
                "Poszedłem kino"
            ],
            "ru": [
                "Я ходил в кино с друзьями",
                "Я иду в кино",
                "Ходил кино"
            ],
            "tr": [
                "Arkadaşlarımla sinemaya gittim",
                "Sinemaya gidiyorum",
                "Gittim sinema"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai animali domestici?",
            "de": "Hast du Haustiere?",
            "nl": "Heb je huisdieren?",
            "pl": "Czy masz zwierzęta?",
            "ru": "У тебя есть домашние животные?",
            "tr": "Evcil hayvanın var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, ho un cane e un gatto",
                "Sì, due animali cane",
                "Sì, io ho"
            ],
            "de": [
                "Ja, ich habe einen Hund und eine Katze",
                "Ja, zwei Haustiere Hund",
                "Ja, ich habe"
            ],
            "nl": [
                "Ja, ik heb een hond en een kat",
                "Ja, twee huisdieren hond",
                "Ja, ik heb"
            ],
            "pl": [
                "Tak, mam psa i kota",
                "Tak, dwa zwierzęta pies",
                "Tak, mam"
            ],
            "ru": [
                "Да, у меня есть собака и кошка",
                "Да, два питомца собака",
                "Да, у меня есть"
            ],
            "tr": [
                "Evet, bir köpeğim ve bir kedim var",
                "Evet, iki evcil köpek",
                "Evet, sahibim"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo incontrarci domani alle 10?",
            "de": "Können wir uns morgen um 10 Uhr treffen?",
            "nl": "Kunnen we morgen om 10 uur afspreken?",
            "pl": "Czy możemy się spotkać jutro o 10 rano?",
            "ru": "Мы можем встретиться завтра в 10 утра?",
            "tr": "Yarın sabah 10'da buluşabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, per me va bene",
                "Sì, domani 10",
                "Domani sì"
            ],
            "de": [
                "Ja, das passt mir",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "nl": [
                "Ja, dat komt mij uit",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "pl": [
                "Tak, to mi odpowiada",
                "Tak, jutro 10",
                "Jutro tak"
            ],
            "ru": [
                "Да, мне это подходит",
                "Да, завтра в 10",
                "Завтра да"
            ],
            "tr": [
                "Evet, bana uyar",
                "Evet, yarın 10",
                "Yarın evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Perché stai imparando una nuova lingua?",
            "de": "Warum lernst du eine neue Sprache?",
            "nl": "Waarom leer je een nieuwe taal?",
            "pl": "Dlaczego uczysz się nowego języka?",
            "ru": "Почему ты учишь новый язык?",
            "tr": "Neden yeni bir dil öğreniyorsun?"
        },
        "opcoes": {
            "it": [
                "Perché voglio viaggiare l'anno prossimo.",
                "Perché lingua",
                "Per viaggiare imparo"
            ],
            "de": [
                "Weil ich nächstes Jahr reisen möchte.",
                "Warum Sprache",
                "Für Reisen lernen"
            ],
            "nl": [
                "Omdat ik volgend jaar wil reizen.",
                "Waarom taal",
                "Voor reizen leren"
            ],
            "pl": [
                "Ponieważ chcę podróżować w przyszłym roku.",
                "Dlaczego język",
                "Do podróży uczyć"
            ],
            "ru": [
                "Потому что я хочу путешествовать в следующем году.",
                "Почему язык",
                "Для путешествий учить"
            ],
            "tr": [
                "Çünkü gelecek yıl seyahat etmek istiyorum.",
                "Neden dil",
                "Seyahat için öğrenmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che ci siamo persi in questa foresta.",
            "de": "Ich glaube, wir haben uns in diesem Wald verlaufen.",
            "nl": "Ik denk dat we verdwaald zijn in dit bos.",
            "pl": "Myślę, że zgubiliśmy się w tym lesie.",
            "ru": "Мне кажется, мы потерялись в этом лесу.",
            "tr": "Sanırım bu ormanda kaybolduk."
        },
        "opcoes": {
            "it": [
                "Non ti preoccupare, ho una bussola qui.",
                "Perso foresta",
                "No preoccuparsi"
            ],
            "de": [
                "Keine Sorge, ich habe hier einen Kompass.",
                "Verlaufen Wald",
                "Keine Sorge"
            ],
            "nl": [
                "Maak je geen zorgen, ik heb hier een kompas.",
                "Verdwaald bos",
                "Geen zorgen"
            ],
            "pl": [
                "Nie martw się, mam tu kompas.",
                "Zgubieni las",
                "Bez obaw"
            ],
            "ru": [
                "Не волнуйся, у меня есть компас.",
                "Потерялись лес",
                "Не волнуйся"
            ],
            "tr": [
                "Merak etme, yanımda pusula var.",
                "Kayıp orman",
                "Endişelenme"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi piani per l'estate?",
            "de": "Was sind deine Pläne für den Sommer?",
            "nl": "Wat zijn je plannen voor de zomer?",
            "pl": "Jakie masz plany na lato?",
            "ru": "Какие у тебя планы на лето?",
            "tr": "Yaz için planların neler?"
        },
        "opcoes": {
            "it": [
                "Visiterò la Germania.",
                "Piani estate",
                "Germania andare"
            ],
            "de": [
                "Ich werde Deutschland besuchen.",
                "Sommerpläne",
                "Deutschland gehen"
            ],
            "nl": [
                "Ik ga Duitsland bezoeken.",
                "Zomerplannen",
                "Duitsland gaan"
            ],
            "pl": [
                "Zamierzam odwiedzić Niemcy.",
                "Plany lato",
                "Niemcy jechać"
            ],
            "ru": [
                "Я собираюсь посетить Германию.",
                "Планы лето",
                "Германия ехать"
            ],
            "tr": [
                "Almanya'yı ziyaret edeceğim.",
                "Yaz planları",
                "Almanya gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai comprato quella bella camicia?",
            "de": "Wo hast du dieses schöne Hemd gekauft?",
            "nl": "Waar heb je dat mooie overhemd gekocht?",
            "pl": "Gdzie kupiłeś tę ładną koszulę?",
            "ru": "Где ты купил эту красивую рубашку?",
            "tr": "O güzel gömleği nereden aldın?"
        },
        "opcoes": {
            "it": [
                "L'ho comprata nel nuovo centro commerciale locale.",
                "Camicia centro",
                "Comprato camicia"
            ],
            "de": [
                "Ich habe es im neuen Einkaufszentrum gekauft.",
                "Hemd Zentrum",
                "Gekauft Hemd"
            ],
            "nl": [
                "Ik heb het in het nieuwe winkelcentrum gekocht.",
                "Overhemd centrum",
                "Gekocht overhemd"
            ],
            "pl": [
                "Kupiłem ją w nowym centrum handlowym.",
                "Koszula centrum",
                "Kupić koszula"
            ],
            "ru": [
                "Я купил ее в новом местном торговом центре.",
                "Рубашка центр",
                "Купил рубашку"
            ],
            "tr": [
                "Yeni yerel alışveriş merkezinden aldım.",
                "Gömlek AVM",
                "Satın aldım gömlek"
            ]
        }
    },
    {
        "npc": {
            "it": "A mia sorella piace nuotare nel lago.",
            "de": "Meine Schwester schwimmt gerne im See.",
            "nl": "Mijn zus zwemt graag in het meer.",
            "pl": "Moja siostra lubi pływać w jeziorze.",
            "ru": "Моей сестре нравится плавать в озере.",
            "tr": "Kız kardeşim gölde yüzmeyi sever."
        },
        "opcoes": {
            "it": [
                "L'acqua è abbastanza pulita per farlo?",
                "Sorella nuotare",
                "Lago buono"
            ],
            "de": [
                "Ist das Wasser sauber genug dafür?",
                "Schwester schwimmen",
                "See gut"
            ],
            "nl": [
                "Is het water daar schoon genoeg voor?",
                "Zus zwemmen",
                "Meer goed"
            ],
            "pl": [
                "Czy woda jest wystarczająco czysta do tego?",
                "Siostra pływać",
                "Jezioro dobre"
            ],
            "ru": [
                "Вода там достаточно чистая для этого?",
                "Сестра плавать",
                "Озеро хорошо"
            ],
            "tr": [
                "Su bunun için yeterince temiz mi?",
                "Kız kardeş yüzmek",
                "Göl iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Potresti consigliarmi un buon libro da leggere?",
            "de": "Könntest du mir ein gutes Buch zum Lesen empfehlen?",
            "nl": "Zou je me een goed boek kunnen aanraden?",
            "pl": "Czy mógłbyś polecić dobrą książkę do przeczytania?",
            "ru": "Не мог бы ты порекомендовать хорошую книгу?",
            "tr": "Okumak için iyi bir kitap önerebilir misin?"
        },
        "opcoes": {
            "it": [
                "Dovresti leggere il classico romanzo di fantascienza.",
                "Libro consigliare",
                "Leggere romanzo"
            ],
            "de": [
                "Du solltest den klassischen Science-Fiction-Roman lesen.",
                "Buch empfehlen",
                "Roman lesen"
            ],
            "nl": [
                "Je zou de klassieke sciencefictionroman moeten lezen.",
                "Boek aanraden",
                "Roman lezen"
            ],
            "pl": [
                "Powinieneś przeczytać klasyczną powieść sci-fi.",
                "Książka polecić",
                "Czytać powieść"
            ],
            "ru": [
                "Тебе стоит прочитать классический научно-фантастический роман.",
                "Книгу порекомендовать",
                "Читать роман"
            ],
            "tr": [
                "Klasik bilim kurgu romanını okumalısın.",
                "Kitap önermek",
                "Roman okumak"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha piovuto molto per tutto il pomeriggio.",
            "de": "Es hat den ganzen Nachmittag stark geregnet.",
            "nl": "Het heeft de hele middag hard geregend.",
            "pl": "Padało intensywnie przez całe popołudnie.",
            "ru": "Весь день шел сильный дождь.",
            "tr": "Bütün öğleden sonra yoğun yağmur yağdı."
        },
        "opcoes": {
            "it": [
                "Sì, restiamo dentro a guardare la TV.",
                "Piove molto",
                "Pioggia fuori"
            ],
            "de": [
                "Ja, lass uns drinnen bleiben und fernsehen.",
                "Stark regnen",
                "Regen draußen"
            ],
            "nl": [
                "Ja, laten we binnen blijven en tv kijken.",
                "Hard regenen",
                "Regen buiten"
            ],
            "pl": [
                "Tak, zostańmy w domu i pooglądajmy telewizję.",
                "Pada mocno",
                "Deszcz na zewnątrz"
            ],
            "ru": [
                "Да, давай останемся дома и посмотрим телевизор.",
                "Сильный дождь",
                "Дождь на улице"
            ],
            "tr": [
                "Evet, içeride kalıp televizyon izleyelim.",
                "Yoğun yağmur",
                "Dışarıda yağmur"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai programmi per stasera?",
            "de": "Hast du Pläne für heute Abend?",
            "nl": "Heb je plannen voor vanavond?",
            "pl": "Czy masz plany na dzisiejszy wieczór?",
            "ru": "У тебя есть планы на вечер?",
            "tr": "Bu gece için planın var mı?"
        },
        "opcoes": {
            "it": [
                "Cucinerò una zuppa speciale.",
                "Piani stasera",
                "Stasera cucinare"
            ],
            "de": [
                "Ich werde eine besondere Suppe kochen.",
                "Pläne Abend",
                "Abend kochen"
            ],
            "nl": [
                "Ik ga een speciale soep koken.",
                "Plannen avond",
                "Vanavond koken"
            ],
            "pl": [
                "Zamierzam ugotować specjalną zupę.",
                "Plany wieczór",
                "Wieczór gotować"
            ],
            "ru": [
                "Я собираюсь приготовить особый суп.",
                "Планы вечер",
                "Вечер готовить"
            ],
            "tr": [
                "Özel bir çorba pişireceğim.",
                "Gece planları",
                "Gece pişirmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Da quanto tempo lavori in questa panetteria?",
            "de": "Wie lange arbeitest du schon in dieser Bäckerei?",
            "nl": "Hoe lang werk je al in deze bakkerij?",
            "pl": "Jak długo pracujesz w tej piekarni?",
            "ru": "Как долго ты работаешь в этой пекарне?",
            "tr": "Bu fırında ne kadar süredir çalışıyorsun?"
        },
        "opcoes": {
            "it": [
                "Lavoro qui da tre anni.",
                "Panetteria lavoro",
                "Lavorato qui"
            ],
            "de": [
                "Ich arbeite hier seit drei Jahren.",
                "Bäckerei Arbeit",
                "Hier gearbeitet"
            ],
            "nl": [
                "Ik werk hier al drie jaar.",
                "Bakkerij werk",
                "Hier gewerkt"
            ],
            "pl": [
                "Pracuję tu od trzech lat.",
                "Piekarnia praca",
                "Pracuję tutaj"
            ],
            "ru": [
                "Я работаю здесь три года.",
                "Пекарня работа",
                "Работал здесь"
            ],
            "tr": [
                "Üç yıldır burada çalışıyorum.",
                "Fırın iş",
                "Burada çalışmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Quale strumento ti piacerebbe suonare?",
            "de": "Welches Instrument würdest du gerne spielen?",
            "nl": "Welk instrument zou je willen spelen?",
            "pl": "Na jakim instrumencie chciałbyś grać?",
            "ru": "На каком инструменте ты хотел бы играть?",
            "tr": "Hangi enstrümanı çalmak istersin?"
        },
        "opcoes": {
            "it": [
                "Mi piacerebbe molto imparare il pianoforte.",
                "Strumento suonare",
                "Piano suonare"
            ],
            "de": [
                "Ich würde gerne Klavier lernen.",
                "Instrument spielen",
                "Klavier spielen"
            ],
            "nl": [
                "Ik zou graag piano willen leren spelen.",
                "Instrument spelen",
                "Piano spelen"
            ],
            "pl": [
                "Bardzo chciałbym nauczyć się grać na pianinie.",
                "Instrument grać",
                "Pianino grać"
            ],
            "ru": [
                "Я бы очень хотел научиться играть на пианино.",
                "Инструмент играть",
                "Пианино играть"
            ],
            "tr": [
                "Piyano öğrenmeyi çok isterim.",
                "Enstrüman çalmak",
                "Piyano çalmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Il treno parte tra dieci minuti.",
            "de": "Der Zug fährt in zehn Minuten ab.",
            "nl": "De trein vertrekt over tien minuten.",
            "pl": "Pociąg odjeżdża za dziesięć minut.",
            "ru": "Поезд отправляется через десять минут.",
            "tr": "Tren on dakika içinde kalkıyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo correre al binario adesso.",
                "Treno parte",
                "Correre binario"
            ],
            "de": [
                "Wir sollten jetzt zum Bahnsteig rennen.",
                "Zug fährt",
                "Rennen Bahnsteig"
            ],
            "nl": [
                "We moeten nu naar het spoor rennen.",
                "Trein vertrekt",
                "Rennen spoor"
            ],
            "pl": [
                "Powinniśmy teraz biec na peron.",
                "Pociąg odjeżdża",
                "Biec peron"
            ],
            "ru": [
                "Нам нужно бежать на платформу прямо сейчас.",
                "Поезд уходит",
                "Бежать платформа"
            ],
            "tr": [
                "Hemen perona koşmalıyız.",
                "Tren kalkıyor",
                "Koşmak peron"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, questo autobus va in centro?",
            "de": "Entschuldigung, fährt dieser Bus ins Stadtzentrum?",
            "nl": "Excuseer me, gaat deze bus naar het centrum?",
            "pl": "Przepraszam, czy ten autobus jedzie do centrum?",
            "ru": "Извините, этот автобус идет в центр?",
            "tr": "Afedersiniz, bu otobüs merkeze gidiyor mu?"
        },
        "opcoes": {
            "it": [
                "Sì, si ferma alla piazza principale.",
                "Autobus centro",
                "Centro andare"
            ],
            "de": [
                "Ja, er hält am Hauptplatz.",
                "Bus Zentrum",
                "Zentrum gehen"
            ],
            "nl": [
                "Ja, hij stopt op het hoofdplein.",
                "Bus centrum",
                "Centrum gaan"
            ],
            "pl": [
                "Tak, zatrzymuje się na głównym placu.",
                "Autobus centrum",
                "Centrum jechać"
            ],
            "ru": [
                "Да, он останавливается на главной площади.",
                "Автобус центр",
                "Центр идти"
            ],
            "tr": [
                "Evet, ana meydanda duruyor.",
                "Otobüs merkez",
                "Merkez gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho comprato un nuovo biglietto per lo spettacolo.",
            "de": "Ich habe ein neues Ticket für die Show gekauft.",
            "nl": "Ik heb een nieuw ticket voor de show gekocht.",
            "pl": "Kupiłem nowy bilet na koncert.",
            "ru": "Я купил новый билет на шоу.",
            "tr": "Gösteri için yeni bir bilet aldım."
        },
        "opcoes": {
            "it": [
                "Era molto caro?",
                "Biglietto spettacolo",
                "Comprato biglietto"
            ],
            "de": [
                "War es sehr teuer?",
                "Ticket Show",
                "Gekauft Ticket"
            ],
            "nl": [
                "Was het erg duur?",
                "Ticket show",
                "Gekocht ticket"
            ],
            "pl": [
                "Czy był bardzo drogi?",
                "Bilet koncert",
                "Kupić bilet"
            ],
            "ru": [
                "Он был очень дорогим?",
                "Билет шоу",
                "Купил билет"
            ],
            "tr": [
                "Çok pahalı mıydı?",
                "Bilet gösteri",
                "Satın aldım bilet"
            ]
        }
    },
    {
        "npc": {
            "it": "I miei genitori vivono in una città tranquilla.",
            "de": "Meine Eltern leben in einer ruhigen Stadt.",
            "nl": "Mijn ouders wonen in een rustige stad.",
            "pl": "Moi rodzice mieszkają w spokojnym mieście.",
            "ru": "Мои родители живут в тихом городе.",
            "tr": "Ailem sakin bir şehirde yaşıyor."
        },
        "opcoes": {
            "it": [
                "Li visiti spesso?",
                "Genitori città",
                "Tranquilla città"
            ],
            "de": [
                "Besuchst du sie oft?",
                "Eltern Stadt",
                "Ruhig Stadt"
            ],
            "nl": [
                "Bezoek je ze vaak?",
                "Ouders stad",
                "Rustig stad"
            ],
            "pl": [
                "Odwiedzasz ich często?",
                "Rodzice miasto",
                "Spokojne miasto"
            ],
            "ru": [
                "Ты часто их навещаешь?",
                "Родители город",
                "Тихий город"
            ],
            "tr": [
                "Onları sık sık ziyaret eder misin?",
                "Aile şehir",
                "Sakin şehir"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che questa torta sia deliziosa.",
            "de": "Ich finde diesen Kuchen köstlich.",
            "nl": "Ik vind deze taart heerlijk.",
            "pl": "Myślę, że to ciasto jest pyszne.",
            "ru": "Мне кажется, этот пирог восхитителен.",
            "tr": "Bence bu kek lezzetli."
        },
        "opcoes": {
            "it": [
                "Potresti condividere la ricetta con me?",
                "Torta deliziosa",
                "Gusto torta"
            ],
            "de": [
                "Könntest du das Rezept mit mir teilen?",
                "Kuchen köstlich",
                "Mag Kuchen"
            ],
            "nl": [
                "Zou je het recept met me kunnen delen?",
                "Taart heerlijk",
                "Hou taart"
            ],
            "pl": [
                "Czy mógłbyś podzielić się ze mną przepisem?",
                "Ciasto pyszne",
                "Lubię ciasto"
            ],
            "ru": [
                "Не мог бы ты поделиться со мной рецептом?",
                "Пирог восхитительный",
                "Нравится пирог"
            ],
            "tr": [
                "Tarifini benimle paylaşabilir misin?",
                "Kek lezzetli",
                "Severim kek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo comprare delle verdure per cena.",
            "de": "Wir müssen Gemüse für das Abendessen kaufen.",
            "nl": "We moeten groenten kopen voor het avondeten.",
            "pl": "Musimy kupić warzywa na kolację.",
            "ru": "Нам нужно купить овощей на ужин.",
            "tr": "Akşam yemeği için sebze almamız gerekiyor."
        },
        "opcoes": {
            "it": [
                "Andiamo al mercato locale.",
                "Comprare verdure",
                "Cena verdure"
            ],
            "de": [
                "Lass uns zum lokalen Markt gehen.",
                "Gemüse kaufen",
                "Abendessen Gemüse"
            ],
            "nl": [
                "Laten we naar de lokale markt gaan.",
                "Groenten kopen",
                "Avondeten groenten"
            ],
            "pl": [
                "Chodźmy na lokalny rynek.",
                "Kupić warzywa",
                "Kolacja warzywa"
            ],
            "ru": [
                "Давай сходим на местный рынок.",
                "Купить овощи",
                "Ужин овощи"
            ],
            "tr": [
                "Yerel pazara gidelim.",
                "Sebze almak",
                "Yemek sebze"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai mai visitato un museo in Italia?",
            "de": "Hast du jemals ein Museum in Italien besucht?",
            "nl": "Heb je ooit een museum in Italië bezocht?",
            "pl": "Czy kiedykolwiek odwiedziłeś muzeum we Włoszech?",
            "ru": "Ты когда-нибудь был в музее в Италии?",
            "tr": "Hiç İtalya'da müze ziyaret ettin mi?"
        },
        "opcoes": {
            "it": [
                "Sì, l'arte lì è incredibile.",
                "Museo Italia",
                "Arte Italia"
            ],
            "de": [
                "Ja, die Kunst dort ist unglaublich.",
                "Museum Italien",
                "Kunst Italien"
            ],
            "nl": [
                "Ja, de kunst daar is ongelooflijk.",
                "Museum Italië",
                "Kunst Italië"
            ],
            "pl": [
                "Tak, tamtejsza sztuka jest niesamowita.",
                "Muzeum Włochy",
                "Sztuka Włochy"
            ],
            "ru": [
                "Да, искусство там невероятное.",
                "Музей Италия",
                "Искусство Италия"
            ],
            "tr": [
                "Evet, oradaki sanat inanılmaz.",
                "Müze İtalya",
                "Sanat İtalya"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho perso il mio ombrello nella metropolitana.",
            "de": "Ich habe meinen Regenschirm in der U-Bahn verloren.",
            "nl": "Ik ben mijn paraplu verloren in de metro.",
            "pl": "Zgubiłem parasol w metrze.",
            "ru": "Я потерял свой зонт в метро.",
            "tr": "Şemsiyemi metroda kaybettim."
        },
        "opcoes": {
            "it": [
                "Dovresti controllare l'ufficio oggetti smarriti.",
                "Ombrello perso",
                "Metro perso"
            ],
            "de": [
                "Du solltest im Fundbüro nachsehen.",
                "Schirm verloren",
                "U-Bahn verloren"
            ],
            "nl": [
                "Je zou bij het bureau gevonden voorwerpen moeten kijken.",
                "Paraplu verloren",
                "Metro verloren"
            ],
            "pl": [
                "Powinieneś sprawdzić biuro rzeczy znalezionych.",
                "Parasol zgubiony",
                "Metro zgubiony"
            ],
            "ru": [
                "Тебе стоит проверить бюро находок.",
                "Зонт потерял",
                "Метро потерял"
            ],
            "tr": [
                "Kayıp eşya bürosunu kontrol etmelisin.",
                "Şemsiye kayıp",
                "Metro kayıp"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mio medico mi ha consigliato di camminare di più.",
            "de": "Mein Arzt hat mir geraten, mehr zu gehen.",
            "nl": "Mijn dokter heeft me geadviseerd om meer te lopen.",
            "pl": "Mój lekarz doradził mi, abym więcej spacerował.",
            "ru": "Мой врач посоветовал мне больше ходить пешком.",
            "tr": "Doktorum daha fazla yürümemi tavsiye etti."
        },
        "opcoes": {
            "it": [
                "Migliorerà la tua salute.",
                "Medico camminare",
                "Camminare di più"
            ],
            "de": [
                "Es wird deine Gesundheit verbessern.",
                "Arzt gehen",
                "Mehr gehen"
            ],
            "nl": [
                "Het zal je gezondheid verbeteren.",
                "Dokter lopen",
                "Meer lopen"
            ],
            "pl": [
                "To poprawi twoje zdrowie.",
                "Lekarz spacerować",
                "Więcej spaceru"
            ],
            "ru": [
                "Это улучшит твое здоровье.",
                "Врач ходить",
                "Больше ходить"
            ],
            "tr": [
                "Sağlığını düzeltecektir.",
                "Doktor yürümek",
                "Daha fazla yürümek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi punti di forza professionali?",
            "de": "Was sind Ihre beruflichen Stärken?",
            "nl": "Wat zijn uw professionele sterke punten?",
            "pl": "Jakie są pana mocne strony zawodowe?",
            "ru": "Каковы ваши профессиональные сильные стороны?",
            "tr": "Mesleki güçlü yönleriniz nelerdir?"
        },
        "opcoes": {
            "it": [
                "Sono proattivo e altamente organizzato",
                "Lavoro bene",
                "Buon impiegato"
            ],
            "de": [
                "Ich bin proaktiv und sehr gut organisiert",
                "Guter Arbeiter",
                "Guter Angestellter"
            ],
            "nl": [
                "Ik ben proactief en zeer georganiseerd",
                "Goede werker",
                "Goede werknemer"
            ],
            "pl": [
                "Jestem proaktywny i bardzo dobrze zorganizowany",
                "Dobry pracownik",
                "Dobry pracownik"
            ],
            "ru": [
                "Я проактивен и очень организован",
                "Хороший работник",
                "Хороший сотрудник"
            ],
            "tr": [
                "Girişimciyim ve son derece düzenliyim",
                "İyi çalışan",
                "İyi eleman"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dovremmo affrontare il ritardo del progetto?",
            "de": "Wie sollten wir mit der Projektverzögerung umgehen?",
            "nl": "Hoe moeten we de projectvertraging aanpakken?",
            "pl": "Jak powinniśmy zareagować na opóźnienie projektu?",
            "ru": "Как нам решить проблему с задержкой проекта?",
            "tr": "Proje gecikmesini nasıl ele almalıyız?"
        },
        "opcoes": {
            "it": [
                "Dovremmo prima dare la priorità alle attività critiche",
                "Lavorare più velocemente",
                "Ritardo male"
            ],
            "de": [
                "Wir sollten zuerst kritische Aufgaben priorisieren",
                "Schneller arbeiten",
                "Verzögerung schlecht"
            ],
            "nl": [
                "We moeten eerst kritieke taken prioriteren",
                "Sneller werken",
                "Vertraging slecht"
            ],
            "pl": [
                "Powinniśmy najpierw spriorytetyzować kluczowe zadania",
                "Pracować szybciej",
                "Opóźnienie źle"
            ],
            "ru": [
                "Нам нужно сначала расставить приоритеты для критических задач",
                "Работать быстрее",
                "Задержка плохо"
            ],
            "tr": [
                "Önce kritik görevlere öncelik vermeliyiz",
                "Daha hızlı çalışmak",
                "Gecikme kötü"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci le situazioni stressanti?",
            "de": "Wie gehen Sie mit stressigen Situationen um?",
            "nl": "Hoe ga je om met stressvolle situaties?",
            "pl": "Jak radzisz sobie ze stresującymi sytuacjami?",
            "ru": "Как ты справляешься со стрессовыми ситуациями?",
            "tr": "Stresli durumlarla nasıl başa çıkarsın?"
        },
        "opcoes": {
            "it": [
                "Pratico la meditazione e organizzo le attività",
                "Mi riposo",
                "Stress va bene"
            ],
            "de": [
                "Ich praktiziere Achtsamkeit und organisiere Aufgaben",
                "Ich ruhe mich aus",
                "Stress ist ok"
            ],
            "nl": [
                "Ik beoefen mindfulness en organiseer taken",
                "Ik rust uit",
                "Stress is ok"
            ],
            "pl": [
                "Praktykuję medytację i organizuję zadania",
                "Odpoczywam",
                "Stres jest ok"
            ],
            "ru": [
                "Я практикую медитацию и организую задачи",
                "Я отдыхаю",
                "Стресс — это нормально"
            ],
            "tr": [
                "Meditasyon yapar ve görevleri düzenlerim",
                "Dinlenirim",
                "Stres sorun değil"
            ]
        }
    },
    {
        "npc": {
            "it": "Sei d'accordo con l'attuale proposta?",
            "de": "Stimmen Sie dem aktuellen Vorschlag zu?",
            "nl": "Bent u het eens met het huidige voorstel?",
            "pl": "Czy zgadzasz się z obecną propozycją?",
            "ru": "Ты согласен с текущим предложением?",
            "tr": "Mevcut teklife katılıyor musun?"
        },
        "opcoes": {
            "it": [
                "Sono d'accordo, a patto di regolare il budget",
                "Sì, sono d'accordo",
                "Proposta sì"
            ],
            "de": [
                "Ich stimme zu, vorausgesetzt, wir passen das Budget an",
                "Ja, ich stimme zu",
                "Vorschlag ja"
            ],
            "nl": [
                "Ik ga akkoord, mits we het budget aanpassen",
                "Ja, ik ga akkoord",
                "Voorstel ja"
            ],
            "pl": [
                "Zgadzam się, pod warunkiem dostosowania budżetu",
                "Tak, zgadzam się",
                "Propozycja tak"
            ],
            "ru": [
                "Я согласен, при условии, что мы скорректируем бюджет",
                "Да, согласен",
                "Предложение да"
            ],
            "tr": [
                "Bütçeyi ayarlamamız şartıyla katılamıyorum değil",
                "Evet, katılıyorum",
                "Teklif evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le previsioni di vendita per il prossimo trimestre?",
            "de": "Wie sieht die Umsatzprognose für das nächste Quartal aus?",
            "nl": "Wat is de verkoopvoorspelling voor het volgende kwartaal?",
            "pl": "Jaka jest prognoza sprzedaży na następny kwartał?",
            "ru": "Каков прогноз продаж на следующий квартал?",
            "tr": "Gelecek çeyrek için satış tahmini nedir?"
        },
        "opcoes": {
            "it": [
                "Prevediamo una crescita del dieci percento",
                "Vendite buone",
                "Aumento vendite"
            ],
            "de": [
                "Wir erwarten ein Wachstum von zehn Prozent",
                "Umsatz gut",
                "Umsatzsteigerung"
            ],
            "nl": [
                "We verwachten een groei van tien procent",
                "Verkoop goed",
                "Stijging verkoop"
            ],
            "pl": [
                "Przewidujemy dziesięcioprocentowy wzrost",
                "Sprzedaż dobra",
                "Wzrost sprzedaży"
            ],
            "ru": [
                "Мы ожидаем рост на десять процентов",
                "Продажи хорошие",
                "Рост продаж"
            ],
            "tr": [
                "Yüzde onluk bir büyüme öngörüyoruz",
                "Satışlar iyi",
                "Satış artışı"
            ]
        }
    },
    {
        "npc": {
            "it": "C'è stato un problema con il database?",
            "de": "Gab es ein Problem mit der Datenbank?",
            "nl": "Was er een probleem met de database?",
            "pl": "Czy wystąpił problem z bazą danych?",
            "ru": "Была ли проблема с базой данных?",
            "tr": "Veritabanıyla ilgili bir sorun mu vardı?"
        },
        "opcoes": {
            "it": [
                "Sì, è andato offline per un'ora",
                "Server brutto",
                "Senza server"
            ],
            "de": [
                "Ja, sie war für eine Stunde offline",
                "Server schlecht",
                "Kein Server"
            ],
            "nl": [
                "Ja, het was een uur offline",
                "Server slecht",
                "Geen server"
            ],
            "pl": [
                "Tak, była offline przez godzinę",
                "Serwer zły",
                "Brak serwera"
            ],
            "ru": [
                "Да, она отключилась на час",
                "Сервер плохой",
                "Нет сервера"
            ],
            "tr": [
                "Evet, bir saat boyunca çevrimdışı kaldı",
                "Sunucu kötü",
                "Sunucusuz"
            ]
        }
    },
    {
        "npc": {
            "it": "Potrebbe inviarmi la fattura, per favore?",
            "de": "Könnten Sie mir bitte die Rechnung schicken?",
            "nl": "Kunt u mij de factuur sturen, alstublieft?",
            "pl": "Czy mógłby pan przesłać mi fakturę, proszę?",
            "ru": "Не могли бы вы прислать мне счет, пожалуйста?",
            "tr": "Faturayı bana gönderir misiniz, lütfen?"
        },
        "opcoes": {
            "it": [
                "Certamente, gliela invierò oggi via e-mail",
                "Fattura e-mail",
                "Inviare sì"
            ],
            "de": [
                "Klar, ich werde sie Ihnen heute per E-Mail schicken",
                "Rechnung E-Mail",
                "Senden ja"
            ],
            "nl": [
                "Natuurlijk, ik mail het u vandaag nog",
                "Factuur mailen",
                "Sturen ja"
            ],
            "pl": [
                "Jasne, wyślę ją dzisiaj e-mailem",
                "Faktura e-mail",
                "Wysłać tak"
            ],
            "ru": [
                "Конечно, я отправлю ее вам по электронной почте сегодня",
                "Счет почта",
                "Отправить да"
            ],
            "tr": [
                "Elbette, bugün size e-posta ile göndereceğim",
                "Fatura e-posta",
                "Gönder evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'impatto della nuova politica?",
            "de": "Welche Auswirkungen hat die neue Richtlinie?",
            "nl": "Wat is de impact van het nieuwe beleid?",
            "pl": "Jaki jest wpływ nowej polityki?",
            "ru": "Каковы последствия новой политики?",
            "tr": "Yeni politikanın etkisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ridurrà i costi operativi",
                "Nuove tasse",
                "Cambio legge"
            ],
            "de": [
                "Es wird die Betriebskosten senken",
                "Neue Steuern",
                "Gesetzesänderung"
            ],
            "nl": [
                "Het zal de operationele kosten verlagen",
                "Nieuwe belastingen",
                "Wetswijziging"
            ],
            "pl": [
                "Zredukuje koszty operacyjne",
                "Nowe podatki",
                "Zmiana prawa"
            ],
            "ru": [
                "Это снизит операционные расходы",
                "Новые налоги",
                "Изменение закона"
            ],
            "tr": [
                "Operasyonel maliyetleri azaltacaktır",
                "Yeni vergiler",
                "Yasa değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i conflitti all'interno del team?",
            "de": "Wie gehen Sie mit Teamkonflikten um?",
            "nl": "Hoe beheer je teamconflicten?",
            "pl": "Jak zarządzasz konfliktami w zespole?",
            "ru": "Как вы разрешаете конфликты в команде?",
            "tr": "Takım çatışmalarını nasıl yönetirsiniz?"
        },
        "opcoes": {
            "it": [
                "Incoraggiando una comunicazione aperta",
                "Parlare forte",
                "Squadra litiga"
            ],
            "de": [
                "Durch Förderung offener Kommunikation",
                "Laut sprechen",
                "Teamstreit"
            ],
            "nl": [
                "Door open communicatie aan te moedigen",
                "Hard praten",
                "Teamgevecht"
            ],
            "pl": [
                "Zachęcając do otwartej komunikacji",
                "Mówić głośno",
                "Walka zespołowa"
            ],
            "ru": [
                "Поощряя открытое общение",
                "Говорить громко",
                "Ссора в команде"
            ],
            "tr": [
                "Açık iletişimi teşvik ederek",
                "Yüksek sesle konuşmak",
                "Takım kavgası"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo principale della campagna?",
            "de": "Was ist das Hauptziel der Kampagne?",
            "nl": "Wat is het hoofddoel van de campagne?",
            "pl": "Jaki jest główny cel kampanii?",
            "ru": "Какова основная цель кампании?",
            "tr": "Kampanyanın ana hedefi nedir?"
        },
        "opcoes": {
            "it": [
                "Aumentare la notorietà del marchio",
                "Diventare popolare",
                "Vendere di più"
            ],
            "de": [
                "Steigerung der Markenbekanntheit",
                "Beliebt werden",
                "Mehr verkaufen"
            ],
            "nl": [
                "De naamsbekendheid vergroten",
                "Populair worden",
                "Meer verkopen"
            ],
            "pl": [
                "Zwiększenie świadomości marki",
                "Zyskać popularność",
                "Sprzedać więcej"
            ],
            "ru": [
                "Повышение узнаваемости бренда",
                "Стать популярным",
                "Продать больше"
            ],
            "tr": [
                "Marka bilinirliğini artırmak",
                "Popüler olmak",
                "Daha çok satmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo posticipare la scadenza di una settimana?",
            "de": "Können wir die Frist um eine Woche verschieben?",
            "nl": "Kunnen we de deadline met een week uitstellen?",
            "pl": "Czy możemy przełożyć termin o tydzień?",
            "ru": "Можем ли мы перенести дедлайн на неделю?",
            "tr": "Son teslim tarihini bir hafta erteleyebilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Solo se otteniamo l'approvazione del cliente",
                "Solo se cliente",
                "Posticipare sì"
            ],
            "de": [
                "Nur wenn wir die Zustimmung des Kunden erhalten",
                "Nur wenn Kunde",
                "Verschieben ja"
            ],
            "nl": [
                "Alleen als we goedkeuring van de klant krijgen",
                "Alleen als klant",
                "Uitstellen ja"
            ],
            "pl": [
                "Tylko jeśli uzyskamy zgodę klienta",
                "Tylko klient",
                "Przełożyć tak"
            ],
            "ru": [
                "Только если получим одобрение клиента",
                "Только клиент",
                "Перенести да"
            ],
            "tr": [
                "Sadece müşteri onayı alırsak",
                "Sadece müşteri",
                "Ertelemek evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la tua opinione sul lavoro a distanza?",
            "de": "Wie ist Ihre Meinung zum Homeoffice?",
            "nl": "Wat is uw mening over thuiswerken?",
            "pl": "Jaka jest twoja opinia na temat pracy zdalnej?",
            "ru": "Каково твое мнение об удаленной работе?",
            "tr": "Uzaktan çalışma hakkındaki düşünceniz nedir?"
        },
        "opcoes": {
            "it": [
                "Aumenta la produttività e la flessibilità",
                "Lavoro casa",
                "Flessibilità buona"
            ],
            "de": [
                "Es erhöht die Produktivität und Flexibilität",
                "Heimarbeit",
                "Flexibilität gut"
            ],
            "nl": [
                "Het verhoogt de productiviteit en flexibiliteit",
                "Thuiswerken",
                "Flexibiliteit goed"
            ],
            "pl": [
                "Zwiększa produktywność i elastyczność",
                "Praca dom",
                "Elastyczność dobra"
            ],
            "ru": [
                "Это повышает производительность и гибкость",
                "Работа дома",
                "Гибкость хорошо"
            ],
            "tr": [
                "Verimliliği ve esnekliği artırır",
                "Evden çalışma",
                "Esneklik iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Come misuri il successo di un progetto?",
            "de": "Wie messen Sie den Projekterfolg?",
            "nl": "Hoe meet u het succes van een project?",
            "pl": "Jak mierzysz sukces projektu?",
            "ru": "Как вы измеряете успех проекта?",
            "tr": "Projenin başarısını nasıl ölçersiniz?"
        },
        "opcoes": {
            "it": [
                "Attraverso indicatori chiave di prestazione",
                "Controllare risultati",
                "Metrica mostra"
            ],
            "de": [
                "Durch Key Performance Indicators (KPIs)",
                "Ergebnisse prüfen",
                "Metrik zeigen"
            ],
            "nl": [
                "Via key performance indicators (KPI's)",
                "Resultaten controleren",
                "Metriek tonen"
            ],
            "pl": [
                "Poprzez kluczowe wskaźniki efektywności",
                "Sprawdzić wyniki",
                "Metryka pokazuje"
            ],
            "ru": [
                "С помощью ключевых показателей эффективности",
                "Проверить результаты",
                "Показать метрику"
            ],
            "tr": [
                "Temel performans göstergeleri (KPI) aracılığıyla",
                "Sonuçları kontrol et",
                "Metrik göster"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i rischi di questo investimento?",
            "de": "Welche Risiken birgt diese Investition?",
            "nl": "Wat zijn de risico's van deze investering?",
            "pl": "Jakie są ryzyka tej inwestycji?",
            "ru": "Каковы риски этого инвестирования?",
            "tr": "Bu yatırımın riskleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "Volatilità del mercato e alta concorrenza",
                "Perdita denaro",
                "Rischio mercato"
            ],
            "de": [
                "Marktvolatilität und starker Wettbewerb",
                "Geldverlust",
                "Risiko Markt"
            ],
            "nl": [
                "Marktvolatiliteit en hoge concurrentie",
                "Geldverlies",
                "Risico markt"
            ],
            "pl": [
                "Zmienność rynku i wysoka konkurencja",
                "Strata pieniędzy",
                "Ryzyko rynkowe"
            ],
            "ru": [
                "Волатильность рынка и высокая конкуренция",
                "Потеря денег",
                "Риск рынка"
            ],
            "tr": [
                "Piyasa dalgalanması ve yüksek rekabet",
                "Para kaybı",
                "Risk piyasa"
            ]
        }
    },
    {
        "npc": {
            "it": "Può riassumere la riunione?",
            "de": "Können Sie das Treffen zusammenfassen?",
            "nl": "Kunt u de vergadering samenvatten?",
            "pl": "Czy możesz podsumować spotkanie?",
            "ru": "Не могли бы вы кратко изложить итоги встречи?",
            "tr": "Toplantıyı özetleyebilir misiniz?"
        },
        "opcoes": {
            "it": [
                "Abbiamo deciso di lanciare il prodotto ad agosto",
                "Lancio agosto",
                "Prodotto lancio"
            ],
            "de": [
                "Wir haben beschlossen, das Produkt im August auf den Markt zu bringen",
                "Launch August",
                "Produktlaunch"
            ],
            "nl": [
                "We hebben besloten om het product in augustus te lanceren",
                "Lancering augustus",
                "Productlancering"
            ],
            "pl": [
                "Zdecydowaliśmy o wprowadzeniu produktu w sierpniu",
                "Start sierpień",
                "Produkt start"
            ],
            "ru": [
                "Мы решили запустить продукт в августе",
                "Запуск август",
                "Продукт запуск"
            ],
            "tr": [
                "Ürünü Ağustos ayında piyasaya sürmeye karar verdik",
                "Lansman Ağustos",
                "Ürün lansman"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la visione a lungo termine dell'azienda?",
            "de": "Was ist die langfristige Vision des Unternehmens?",
            "nl": "Wat is de langetermijnvisie van het bedrijf?",
            "pl": "Jaka jest długoterminowa wizja firmy?",
            "ru": "Каково долгосрочное видение компании?",
            "tr": "Şirketin uzun vadeli vizyonu nedir?"
        },
        "opcoes": {
            "it": [
                "Diventare il leader di mercato nella tecnologia",
                "Diventare grande",
                "Leader tecnologico"
            ],
            "de": [
                "Marktführer im Bereich Technologie zu werden",
                "Groß werden",
                "Technologieführer"
            ],
            "nl": [
                "De marktleider worden in technologie",
                "Groot worden",
                "Technologieleider"
            ],
            "pl": [
                "Zostać liderem rynku w branży technologicznej",
                "Zyskać wielkość",
                "Lider technologii"
            ],
            "ru": [
                "Стать лидером рынка в сфере технологий",
                "Стать большим",
                "Лидер технологий"
            ],
            "tr": [
                "Teknolojide pazar lideri olmak",
                "Büyümek",
                "Teknoloji lideri"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti mantieni aggiornato nel tuo settore?",
            "de": "Wie halten Sie sich in Ihrem Bereich auf dem Laufenden?",
            "nl": "Hoe blijf je op de hoogte in jouw vakgebied?",
            "pl": "Jak dbasz o aktualność wiedzy w swojej dziedzinie?",
            "ru": "Как ты следишь за обновлениями в своей сфере?",
            "tr": "Alanınızda kendinizi nasıl güncel tutuyorsunuz?"
        },
        "opcoes": {
            "it": [
                "Leggo articoli e partecipo a webinar",
                "Vedo notizie",
                "Studio sempre"
            ],
            "de": [
                "Ich lese Artikel und nehme an Webinaren teil",
                "Sehe Nachrichten",
                "Lerne immer"
            ],
            "nl": [
                "Ik lees artikelen en woon webinars bij",
                "Kijk nieuws",
                "Studeer altijd"
            ],
            "pl": [
                "Czytam artykuły i biorę udział w webinarach",
                "Oglądam wiadomości",
                "Studiuję zawsze"
            ],
            "ru": [
                "Я читаю статьи и посещаю вебинары",
                "Смотрю новости",
                "Всегда учусь"
            ],
            "tr": [
                "Makaleler okur ve web seminerlerine katılırım",
                "Haberleri izlerim",
                "Her zaman çalışırım"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è lo stato della negoziazione del contratto?",
            "de": "Wie ist der Status der Vertragsverhandlungen?",
            "nl": "Wat is de status van de contractonderhandeling?",
            "pl": "Jaki jest status negocjacji umowy?",
            "ru": "Каков статус переговоров по контракту?",
            "tr": "Sözleşme müzakerelerinin durumu nedir?"
        },
        "opcoes": {
            "it": [
                "Stiamo esaminando la bozza finale",
                "Controllare finale",
                "Esaminare bozza"
            ],
            "de": [
                "Wir prüfen den endgültigen Entwurf",
                "Prüfen final",
                "Entwurf prüfen"
            ],
            "nl": [
                "We bekijken de definitieve versie",
                "Controleren finale",
                "Concept bekijken"
            ],
            "pl": [
                "Przeglądamy ostateczny projekt",
                "Sprawdzić ostateczny",
                "Przegląd projektu"
            ],
            "ru": [
                "Мы рассматриваем окончательный проект",
                "Проверить проект",
                "Проверка проекта"
            ],
            "tr": [
                "Son taslağı inceliyoruz",
                "Son kontrol",
                "Taslak inceleme"
            ]
        }
    },
    {
        "npc": {
            "it": "Abbiamo risorse per questo compito?",
            "de": "Haben wir Ressourcen für diese Aufgabe?",
            "nl": "Hebben we middelen voor deze taak?",
            "pl": "Czy mamy zasoby do tego zadania?",
            "ru": "У нас есть ресурсы для этой задачи?",
            "tr": "Bu görev için kaynaklarımız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, il team è completamente attrezzato",
                "Sì, c'è team",
                "Team buono"
            ],
            "de": [
                "Ja, das Team ist bestens gerüstet",
                "Ja, gibt Team",
                "Team gut"
            ],
            "nl": [
                "Ja, het team is volledig uitgerust",
                "Ja, is team",
                "Team goed"
            ],
            "pl": [
                "Tak, zespół jest w pełni wyposażony",
                "Tak, jest zespół",
                "Zespół dobry"
            ],
            "ru": [
                "Да, команда полностью укомплектована",
                "Да, есть команда",
                "Команда готова"
            ],
            "tr": [
                "Evet, ekip tam donanımlı",
                "Evet, ekip var",
                "Ekip iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il limite di budget del progetto?",
            "de": "Wie hoch ist das Budgetlimit des Projekts?",
            "nl": "Wat is het budgetlimiet van het project?",
            "pl": "Jaki jest limit budżetu projektu?",
            "ru": "Каков лимит бюджета проекта?",
            "tr": "Proje bütçe sınırı nedir?"
        },
        "opcoes": {
            "it": [
                "Sono cinquantamila dollari",
                "Cinquantamila limite",
                "Budget cinquantamila"
            ],
            "de": [
                "Es liegt bei fünfzigtausend Dollar",
                "Fünfzigtausend Limit",
                "Budget fünfzigtausend"
            ],
            "nl": [
                "Het is vijftigduizend dollar",
                "Vijftigduizend limiet",
                "Budget vijftigduizend"
            ],
            "pl": [
                "To pięćdziesiąt tysięcy dolarów",
                "Pięćdziesiąt tysięcy limit",
                "Budżet pięćdziesiąt"
            ],
            "ru": [
                "Это пятьдесят тысяч долларов",
                "Пятьдесят тысяч лимит",
                "Бюджет пятьдесят"
            ],
            "tr": [
                "Elli bin dolar",
                "Elli bin limit",
                "Bütçe elli bin"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i reclami dei clienti?",
            "de": "Wie gehen Sie mit Kundenreklamationen um?",
            "nl": "Hoe ga je om con klachten van klanten?",
            "pl": "Jak radzisz sobie ze skargami klientów?",
            "ru": "Как вы справляетесь с жалобами клиентов?",
            "tr": "Müşteri şikayetlerini nasıl ele alırsınız?"
        },
        "opcoes": {
            "it": [
                "Ascoltando attivamente e offrendo soluzioni",
                "Ignorarli",
                "Chiedere scusa"
            ],
            "de": [
                "Durch aktives Zuhören und Anbieten von Lösungen",
                "Ignoriere sie",
                "Entschuldigen"
            ],
            "nl": [
                "Door actief te luisteren en oplossingen te bieden",
                "Negeer ze",
                "Excuses aanbieden"
            ],
            "pl": [
                "Poprzez aktywne słuchanie i oferowanie rozwiązań",
                "Ignorować je",
                "Przeprosić"
            ],
            "ru": [
                "Активно выслушивая и предлагая решения",
                "Игнорировать их",
                "Извиниться"
            ],
            "tr": [
                "Aktif olarak dinleyip çözümler sunarak",
                "Onları görmezden gelmek",
                "Özür dilemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le caratteristiche chiave del prodotto?",
            "de": "Was sind die Hauptmerkmale des Produkts?",
            "nl": "Wat zijn de belangrijkste kenmerken van het product?",
            "pl": "Jakie są kluczowe cechy produktu?",
            "ru": "Каковы ключевые особенности продукта?",
            "tr": "Ürünün temel özellikleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "È veloce, sicuro e facile da usare",
                "È economico",
                "Buon prodotto"
            ],
            "de": [
                "Es ist schnell, sicher und einfach zu bedienen",
                "Es ist billig",
                "Gutes Produkt"
            ],
            "nl": [
                "Het is snel, veilig en gemakkelijk te gebruiken",
                "Het is goedkoop",
                "Goed product"
            ],
            "pl": [
                "Jest szybki, bezpieczny i łatwy w użyciu",
                "Jest tani",
                "Dobry produkt"
            ],
            "ru": [
                "Он быстрый, безопасный и простой в использовании",
                "Он дешевый",
                "Хороший продукт"
            ],
            "tr": [
                "Hızlı, güvenli ve kullanımı kolaydır",
                "Ucuzdur",
                "İyi ürün"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo programmare una chiamata di follow-up?",
            "de": "Können wir ein Folgegespräch vereinbaren?",
            "nl": "Kunnen we een vervolggesprek plannen?",
            "pl": "Czy możemy zaplanować rozmowę kontrolną?",
            "ru": "Мы можем запланировать повторный звонок?",
            "tr": "Takip araması ayarlayabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, parliamone giovedì prossimo",
                "Sì, parlare giovedì",
                "Giovedì sì"
            ],
            "de": [
                "Ja, lassen Sie uns nächsten Donnerstag sprechen",
                "Ja, Donnerstag sprechen",
                "Donnerstag ja"
            ],
            "nl": [
                "Ja, laten we aanstaande donderdag praten",
                "Ja, donderdag praten",
                "Donderdag ja"
            ],
            "pl": [
                "Tak, porozmawiajmy w przyszły czwartek",
                "Tak, rozmawiać czwartek",
                "Czwartek tak"
            ],
            "ru": [
                "Да, давайте созвонимся в следующий четверг",
                "Да, созвонимся в четверг",
                "Четверг да"
            ],
            "tr": [
                "Evet, önümüzdeki Perşembe konuşalım",
                "Evet, Perşembe konuşalım",
                "Perşembe evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la principale fonte di reddito?",
            "de": "Was ist die Haupteinnahmequelle?",
            "nl": "Wat is de belangrijkste inkomstenbron?",
            "pl": "Co jest głównym źródłem dochodu?",
            "ru": "Каков основной источник дохода?",
            "tr": "Ana gelir kaynağı nedir?"
        },
        "opcoes": {
            "it": [
                "Abbonamenti software",
                "Vendita computer",
                "Annunci"
            ],
            "de": [
                "Software-Abonnements",
                "Computer verkaufen",
                "Anzeigen"
            ],
            "nl": [
                "Software-abonnementen",
                "Computers verkopen",
                "Advertenties"
            ],
            "pl": [
                "Subskrypcje oprogramowania",
                "Sprzedaż komputerów",
                "Reklamy"
            ],
            "ru": [
                "Подписки на программное обеспечение",
                "Продажа компьютеров",
                "Реклама"
            ],
            "tr": [
                "Yazılım abonelikleri",
                "Bilgisayar satmak",
                "Reklamlar"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dai la priorità alle tue attività quotidiane?",
            "de": "Wie priorisieren Sie Ihre täglichen Aufgaben?",
            "nl": "Hoe prioriteer je je dagelijkse taken?",
            "pl": "Jak ustalasz priorytety swoich codziennych zadań?",
            "ru": "Как ты расставляешь приоритеты в повседневных задачах?",
            "tr": "Günlük görevlerinizi nasıl önceliklendiriyorsunuz?"
        },
        "opcoes": {
            "it": [
                "In base all'urgenza e al valore aziendale",
                "In base alla data",
                "Le faccio a caso"
            ],
            "de": [
                "Nach Dringlichkeit und Geschäftswert",
                "Nach Datum",
                "Ich mache sie zufällig"
            ],
            "nl": [
                "Op basis van urgentie en bedrijfswaarde",
                "Op basis van datum",
                "Ik doe ze willekeurig"
            ],
            "pl": [
                "Według pilności i wartości biznesowej",
                "Według daty",
                "Robię je losowo"
            ],
            "ru": [
                "По срочности и бизнес-ценности",
                "По дате",
                "Делаю их случайно"
            ],
            "tr": [
                "Aciliyet ve iş değerine göre",
                "Tarihe göre",
                "Rastgele yapıyorum"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il suo feedback sulla mia presentazione?",
            "de": "Wie ist Ihr Feedback zu meiner Präsentation?",
            "nl": "Wat is uw feedback op mijn presentatie?",
            "pl": "Jaka jest twoja opinia o mojej prezentacji?",
            "ru": "Каковы ваши отзывы о моей презентации?",
            "tr": "Sunumum hakkındaki geri bildiriminiz nedir?"
        },
        "opcoes": {
            "it": [
                "È stata molto chiara e professionale",
                "È stata brutta",
                "È stata lunga"
            ],
            "de": [
                "Sie war sehr klar und professionell",
                "Sie war schlecht",
                "Sie war lang"
            ],
            "nl": [
                "Het was heel duidelijk en professioneel",
                "Het was slecht",
                "Het was lang"
            ],
            "pl": [
                "Była bardzo jasna i profesjonalna",
                "Była słaba",
                "Była długa"
            ],
            "ru": [
                "Она была очень понятной и профессиональной",
                "Она была плохой",
                "Она была длинной"
            ],
            "tr": [
                "Çok net ve profesyoneldi",
                "Kötüydü",
                "Uzundu"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo di questo aggiornamento del software?",
            "de": "Was ist das Ziel dieses Software-Updates?",
            "nl": "Wat is het doel van deze software-update?",
            "pl": "Jaki jest cel tej aktualizacji oprogramowania?",
            "ru": "Какова цель этого обновления программного обеспечения?",
            "tr": "Bu yazılım güncellemesinin amacı nedir?"
        },
        "opcoes": {
            "it": [
                "Correggere bug di sicurezza e migliorare la velocità.",
                "Aggiornare velocità",
                "Correggere bug"
            ],
            "de": [
                "Sicherheitsfehler zu beheben und die Geschwindigkeit zu verbessern.",
                "Geschwindigkeit aktualisieren",
                "Fehler beheben"
            ],
            "nl": [
                "Beveiligingsfouten oplossen en snelheid verbeteren.",
                "Snelheid bijwerken",
                "Bugs oplossen"
            ],
            "pl": [
                "Naprawa błędów bezpieczeństwa i poprawa szybkości.",
                "Aktualizacja szybkości",
                "Naprawa błędów"
            ],
            "ru": [
                "Исправление ошибок безопасности и повышение скорости.",
                "Обновление скорости",
                "Исправление ошибок"
            ],
            "tr": [
                "Güvenlik açıklarını düzeltmek ve hızı artırmak.",
                "Hız güncellemesi",
                "Hata düzeltme"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro cliente ha richiesto un rapporto dettagliato.",
            "de": "Unser Kunde hat einen detaillierten Bericht angefordert.",
            "nl": "Onze klant heeft om een gedetailleerd rapport gevraagd.",
            "pl": "Nasz klient poprosił o szczegółowy raport.",
            "ru": "Наш клиент запросил подробный отчет.",
            "tr": "Müşterimiz detaylı bir rapor talep etti."
        },
        "opcoes": {
            "it": [
                "Inizierò a scriverlo immediatamente.",
                "Scrivere rapporto",
                "Rapporto dettagliato"
            ],
            "de": [
                "Ich werde sofort damit beginnen, es zu schreiben.",
                "Bericht schreiben",
                "Detaillierter Bericht"
            ],
            "nl": [
                "Ik begin er meteen aan te schrijven.",
                "Rapport schrijven",
                "Gedetailleerd rapport"
            ],
            "pl": [
                "Zacznę go pisać natychmiast.",
                "Pisać raport",
                "Szczegółowy raport"
            ],
            "ru": [
                "Я начну писать его немедленно.",
                "Писать отчет",
                "Подробный отчет"
            ],
            "tr": [
                "Hemen yazmaya başlayacağım.",
                "Rapor yazmak",
                "Detaylı rapor"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo assumere un nuovo sviluppatore?",
            "de": "Sollten wir einen neuen Entwickler einstellen?",
            "nl": "Moeten we een nieuwe ontwikkelaar aannemen?",
            "pl": "Czy powinniśmy zatrudnić nowego programistę?",
            "ru": "Стоит ли нам нанять нового разработчика?",
            "tr": "Yeni bir yazılımcı işe almalı mıyız?"
        },
        "opcoes": {
            "it": [
                "Solo se l'ambito del progetto aumenta.",
                "Assumere sviluppatore",
                "Sviluppatore sì"
            ],
            "de": [
                "Nur wenn der Projektumfang zunimmt.",
                "Entwickler einstellen",
                "Entwickler ja"
            ],
            "nl": [
                "Alleen als de projectomvang groter wordt.",
                "Ontwikkelaar aannemen",
                "Ontwikkelaar ja"
            ],
            "pl": [
                "Tylko jeśli zwiększy się zakres projektu.",
                "Zatrudnić programistę",
                "Programista tak"
            ],
            "ru": [
                "Только если объем проекта увеличится.",
                "Нанять разработчика",
                "Разработчик да"
            ],
            "tr": [
                "Sadece proje kapsamı artarsa.",
                "Yazılımcı işe almak",
                "Yazılımcı evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo ridurre i costi operativi.",
            "de": "Wir müssen die Betriebskosten senken.",
            "nl": "We moeten de operationele kosten verlagen.",
            "pl": "Musimy zmniejszyć koszty operacyjne.",
            "ru": "Нам необходимо снизить операционные расходы.",
            "tr": "Operasyonel maliyetleri düşürmemiz gerekiyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo prima ridurre l'uso della carta.",
                "Ridurre costi",
                "Costi operativi"
            ],
            "de": [
                "Wir sollten zuerst den Papierverbrauch reduzieren.",
                "Kosten senken",
                "Betriebskosten"
            ],
            "nl": [
                "We moeten eerst het papierverbruik verminderen.",
                "Kosten verlagen",
                "Operationele kosten"
            ],
            "pl": [
                "Powinniśmy najpierw ograniczyć zużycie papieru.",
                "Zmniejszyć koszty",
                "Koszty operacyjne"
            ],
            "ru": [
                "Сначала нам следует сократить расход бумаги.",
                "Снизить расходы",
                "Операционные расходы"
            ],
            "tr": [
                "Önce kağıt kullanımını azaltmalıyız.",
                "Maliyetleri düşürmek",
                "Operasyonel maliyetler"
            ]
        }
    },
    {
        "npc": {
            "it": "Il carico del server è estremamente alto oggi.",
            "de": "Die Serverauslastung ist heute extrem hoch.",
            "nl": "De serverbelasting is extreem hoog vandaag.",
            "pl": "Obciążenie serwera jest dzisiaj niezwykle wysokie.",
            "ru": "Нагрузка на сервер сегодня чрезвычайно высока.",
            "tr": "Sunucu yükü bugün son derece yüksek."
        },
        "opcoes": {
            "it": [
                "Dobbiamo ridimensionare le nostre istanze di database.",
                "Carico server",
                "Database alto"
            ],
            "de": [
                "Wir müssen unsere Datenbankinstanzen skalieren.",
                "Serverauslastung",
                "Datenbank hoch"
            ],
            "nl": [
                "We moeten onze database-instanties schalen.",
                "Serverbelasting",
                "Database hoog"
            ],
            "pl": [
                "Musimy przeskalować nasze instancje baz danych.",
                "Obciążenie serwera",
                "Baza danych wysokie"
            ],
            "ru": [
                "Мы должны масштабировать наши инстансы базы данных.",
                "Нагрузка сервера",
                "База данных"
            ],
            "tr": [
                "Veritabanı örneklerimizi ölçeklendirmeliyiz.",
                "Sunucu yükü",
                "Veritabanı yüksek"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mercato sta reagendo positivamente al nostro lancio.",
            "de": "Der Markt reagiert positiv auf unseren Launch.",
            "nl": "De markt reageert positief op onze lancering.",
            "pl": "Rynek reaguje pozytywnie na nasz start.",
            "ru": "Рынок позитивно реагирует на наш запуск.",
            "tr": "Piyasa lansmanımıza olumlu tepki veriyor."
        },
        "opcoes": {
            "it": [
                "Questa è un'opportunità perfetta per espandersi.",
                "Reazione mercato",
                "Lancio espandere"
            ],
            "de": [
                "Dies ist eine perfekte Gelegenheit zur Expansion.",
                "Marktreaktion",
                "Launch expandieren"
            ],
            "nl": [
                "Dit is een perfecte gelegenheid om uit te breiden.",
                "Marktreactie",
                "Lancering uitbreiden"
            ],
            "pl": [
                "To doskonała okazja do ekspansji.",
                "Reakcja rynku",
                "Start ekspansja"
            ],
            "ru": [
                "Это прекрасная возможность для расширения.",
                "Реакция рынка",
                "Запуск расширить"
            ],
            "tr": [
                "Bu genişlemek için mükemmel bir fırsat.",
                "Piyasa tepkisi",
                "Lansman genişletmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo cambiare la strategia di marketing?",
            "de": "Sollten wir die Marketingstrategie ändern?",
            "nl": "Moeten we de marketingstrategie wijzigen?",
            "pl": "Czy powinniśmy zmienić strategię marketingową?",
            "ru": "Стоит ли нам изменить маркетинговую стратегию?",
            "tr": "Pazarlama stratejisini değiştirmeli miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, dobbiamo concentrarci sui social media.",
                "Mantenere marketing",
                "Cambio strategia"
            ],
            "de": [
                "Ja, wir müssen uns auf Social Media konzentrieren.",
                "Marketing ändern",
                "Strategiewechsel"
            ],
            "nl": [
                "Ja, we moeten ons op social media richten.",
                "Marketing wijzigen",
                "Strategiewijziging"
            ],
            "pl": [
                "Tak, musimy skupić się na mediach społecznościowych.",
                "Zmienić marketing",
                "Zmiana strategii"
            ],
            "ru": [
                "Да, нам нужно сосредоточиться на социальных сетях.",
                "Изменить маркетинг",
                "Смена стратегии"
            ],
            "tr": [
                "Evet, sosyal medyaya odaklanmamız gerekiyor.",
                "Pazarlama değiştirmek",
                "Strateji değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il ritorno sull'investimento di questa campagna?",
            "de": "Wie hoch ist der Return on Investment dieser Kampagne?",
            "nl": "Wat is de return on investment van deze campagne?",
            "pl": "Jaki jest zwrot z inwestycji tej kampanii?",
            "ru": "Каков возврат инвестиций этой кампании?",
            "tr": "Bu kampanyanın yatırım getirisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ha raggiunto circa il centocinquanta percento.",
                "Campagna ROI",
                "Ritorno campagna"
            ],
            "de": [
                "Er erreichte etwa einhundertfünfzig Prozent.",
                "Kampagne ROI",
                "Rückfluss Kampagne"
            ],
            "nl": [
                "Het bereikte ongeveer honderdvijftig procent.",
                "Campagne ROI",
                "Rendement campagne"
            ],
            "pl": [
                "Osiągnął około stu pięćdziesięciu procent.",
                "Kampania ROI",
                "Zwrot kampania"
            ],
            "ru": [
                "Он достиг около ста пятидесяти процентов.",
                "Кампания ROI",
                "Возврат кампания"
            ],
            "tr": [
                "Yaklaşık yüzde yüz elliye ulaştı.",
                "Kampanya ROI",
                "Getiri kampanya"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro manager vuole approvare il design del layout.",
            "de": "Unser Manager möchte das Layout-Design genehmigen.",
            "nl": "Onze manager wil het lay-outontwerp goedkeuren.",
            "pl": "Nasz kierownik chce zatwierdzić projekt układu.",
            "ru": "Наш менеджер хочет утвердить дизайн макета.",
            "tr": "Yöneticimiz düzen tasarımını onaylamak istiyor."
        },
        "opcoes": {
            "it": [
                "Invierò il prototipo finale oggi.",
                "Manager layout",
                "Design layout"
            ],
            "de": [
                "Ich werde den endgültigen Prototyp heute senden.",
                "Manager Layout",
                "Layout-Design"
            ],
            "nl": [
                "Ik stuur het definitieve prototype vandaag nog.",
                "Manager lay-out",
                "Lay-outontwerp"
            ],
            "pl": [
                "Wyślę dzisiaj ostateczny prototyp.",
                "Kierownik układ",
                "Projekt układu"
            ],
            "ru": [
                "Я отправлю окончательный прототип сегодня.",
                "Менеджер макет",
                "Дизайн макета"
            ],
            "tr": [
                "Bugün nihai prototipi göndereceğim.",
                "Yönetici düzen",
                "Düzen tasarımı"
            ]
        }
    }
];
translationsMap.forEach((item, idx) => {
    rawQuestionsIndexMap[item.npc.en] = idx;
});


// Mapeamento de índices para mesclar traduções adicionais sem mexer na lógica existente
const rawQuestionsIndexMap = {};
const translationsMap = [
    {
        "npc": {
            "it": "Ciao! Come stai?",
            "de": "Hallo! Wie geht es dir?",
            "nl": "Hallo! Hoe gaat het met je?",
            "pl": "Cześć! Jak się masz?",
            "ru": "Привет! Как дела?",
            "tr": "Merhaba! Nasılsın?"
        },
        "opcoes": {
            "it": [
                "Sto bene, grazie!",
                "Bene tu",
                "Io sono buono"
            ],
            "de": [
                "Mir geht es gut, danke!",
                "Gut dir",
                "Ich bin gut"
            ],
            "nl": [
                "Met mij gaat het goed, dank je!",
                "Goed met jou",
                "Ik ben goed"
            ],
            "pl": [
                "Dobrze, dziękuję!",
                "Dobrze ty",
                "Jestem dobry"
            ],
            "ru": [
                "Хорошо, спасибо!",
                "Хорошо ты",
                "Я хороший"
            ],
            "tr": [
                "İyiyim, teşekkürler!",
                "İyi sen",
                "Ben iyiyim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti chiami?",
            "de": "Wie heißt du?",
            "nl": "Hoe heet je?",
            "pl": "Jak się nazywasz?",
            "ru": "Как тебя зовут?",
            "tr": "Adın ne?"
        },
        "opcoes": {
            "it": [
                "Mi chiamo Giovanni",
                "Nome Giovanni",
                "Me Giovanni"
            ],
            "de": [
                "Ich heiße Hans",
                "Name Hans",
                "Mich Hans"
            ],
            "nl": [
                "Mijn naam is Jan",
                "Naam Jan",
                "Mij Jan"
            ],
            "pl": [
                "Nazywam się Jan",
                "Nazwa Jan",
                "Mnie Jan"
            ],
            "ru": [
                "Меня зовут Иван",
                "Имя Иван",
                "Я Иван"
            ],
            "tr": [
                "Benim adım Can",
                "Ad Can",
                "Bana Can"
            ]
        }
    },
    {
        "npc": {
            "it": "Di dove sei?",
            "de": "Woher kommst du?",
            "nl": "Waar kom je vandaan?",
            "pl": "Skąd pochodzisz?",
            "ru": "Откуда ты?",
            "tr": "Nerelisin?"
        },
        "opcoes": {
            "it": [
                "Vengo dal Brasile",
                "Brasile io sono",
                "Da Brasile"
            ],
            "de": [
                "Ich komme aus Brasilien",
                "Brasilien ich bin",
                "Aus Brasilien"
            ],
            "nl": [
                "Ik kom uit Brazilië",
                "Brazilië ik ben",
                "Uit Brazilië"
            ],
            "pl": [
                "Jestem z Brazylii",
                "Brazylia jestem",
                "Z Brazylii"
            ],
            "ru": [
                "Я из Бразилии",
                "Бразилия я есть",
                "Из Бразилии"
            ],
            "tr": [
                "Brezilya'lıyım",
                "Brezilya ben",
                "Brezilya'dan"
            ]
        }
    },
    {
        "npc": {
            "it": "Parli inglese?",
            "de": "Sprichst du Englisch?",
            "nl": "Spreek je Engels?",
            "pl": "Czy mówisz po angielsku?",
            "ru": "Ты говоришь по-английски?",
            "tr": "İngilizce konuşuyor musun?"
        },
        "opcoes": {
            "it": [
                "Sì, un po'",
                "Parlare sì",
                "Poco sì"
            ],
            "de": [
                "Ja, ein bisschen",
                "Sprechen ja",
                "Wenig ja"
            ],
            "nl": [
                "Ja, een beetje",
                "Spreken ja",
                "Beetje ja"
            ],
            "pl": [
                "Tak, trochę",
                "Mówić tak",
                "Trochę tak"
            ],
            "ru": [
                "Да, немного",
                "Говорить да",
                "Мало да"
            ],
            "tr": [
                "Evet, biraz",
                "Konuşmak evet",
                "Az evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Piacere di conoscerti!",
            "de": "Schön, dich kennenzulernen!",
            "nl": "Leuk je te ontmoeten!",
            "pl": "Miło cię poznać!",
            "ru": "Приятно познакомиться!",
            "tr": "Tanıştığımıza memnun oldum!"
        },
        "opcoes": {
            "it": [
                "Piacere mio",
                "Anche io",
                "Stesso incontro"
            ],
            "de": [
                "Gleichfalls",
                "Ich auch",
                "Gleiches Treffen"
            ],
            "nl": [
                "Insgelijks",
                "Ik ook",
                "Hetzelfde ontmoeten"
            ],
            "pl": [
                "Mnie również",
                "Ja też",
                "Tak samo poznać"
            ],
            "ru": [
                "Мне тоже приятно",
                "Я тоже",
                "Взаимно"
            ],
            "tr": [
                "Ben de memnun oldum",
                "Ben de",
                "Aynı şekilde"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è il bagno?",
            "de": "Wo ist die Toilette?",
            "nl": "Waar is het toilet?",
            "pl": "Gdzie jest toaleta?",
            "ru": "Где туалет?",
            "tr": "Tuvalet nerede?"
        },
        "opcoes": {
            "it": [
                "È a sinistra",
                "Bagno sinistra",
                "Vai sinistra"
            ],
            "de": [
                "Es ist links",
                "Toilette links",
                "Geh links"
            ],
            "nl": [
                "Het is links",
                "Toilet links",
                "Ga links"
            ],
            "pl": [
                "Jest po lewej stronie",
                "Toaleta lewo",
                "Idź w lewo"
            ],
            "ru": [
                "Он слева",
                "Туалет слева",
                "Иди налево"
            ],
            "tr": [
                "Solda",
                "Tuvalet sol",
                "Sola git"
            ]
        }
    },
    {
        "npc": {
            "it": "Quanto costa questo?",
            "de": "Wie viel kostet das?",
            "nl": "Hoeveel kost dit?",
            "pl": "Ile to kosztuje?",
            "ru": "Сколько это стоит?",
            "tr": "Bu ne kadar?"
        },
        "opcoes": {
            "it": [
                "Costa dieci dollari",
                "Dieci dollari costo",
                "Costo dieci"
            ],
            "de": [
                "Es kostet zehn Dollar",
                "Zehn Dollar kosten",
                "Kosten zehn"
            ],
            "nl": [
                "Het kost tien dollar",
                "Tien dollar kosten",
                "Kosten tien"
            ],
            "pl": [
                "To kosztuje dziesięć dolarów",
                "Dziesięć dolarów koszt",
                "Koszt dziesięć"
            ],
            "ru": [
                "Это стоит десять долларов",
                "Десять долларов стоить",
                "Стоить десять"
            ],
            "tr": [
                "On dolar",
                "On dolar maliyet",
                "Maliyet on"
            ]
        }
    },
    {
        "npc": {
            "it": "Arrivederci!",
            "de": "Auf Wiedersehen!",
            "nl": "Tot ziens!",
            "pl": "Do widzenia!",
            "ru": "До свидания!",
            "tr": "Hoşça kal!"
        },
        "opcoes": {
            "it": [
                "A dopo!",
                "Arrivederci sì",
                "Dopo vai"
            ],
            "de": [
                "Bis später!",
                "Auf Wiedersehen ja",
                "Später geh"
            ],
            "nl": [
                "Tot later!",
                "Tot ziens ja",
                "Later ga"
            ],
            "pl": [
                "Do zobaczenia!",
                "Do widzenia tak",
                "Później idź"
            ],
            "ru": [
                "До встречи!",
                "До свидания да",
                "Позже иди"
            ],
            "tr": [
                "Görüşmek üzere!",
                "Hoşça kal evet",
                "Sonra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Grazie!",
            "de": "Danke!",
            "nl": "Dank je!",
            "pl": "Dziękuję!",
            "ru": "Спасибо!",
            "tr": "Teşekkürler!"
        },
        "opcoes": {
            "it": [
                "Prego!",
                "Benvenuto sì",
                "Grazie vai"
            ],
            "de": [
                "Bitte!",
                "Willkommen ja",
                "Danke geh"
            ],
            "nl": [
                "Graag gedaan!",
                "Welkom ja",
                "Bedankt ga"
            ],
            "pl": [
                "Nie ma za co!",
                "Witamy tak",
                "Dzięki idź"
            ],
            "ru": [
                "Пожалуйста!",
                "Добро пожаловать да",
                "Спасибо иди"
            ],
            "tr": [
                "Rica ederim!",
                "Hoş geldiniz evet",
                "Teşekkür git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buongiorno!",
            "de": "Guten Morgen!",
            "nl": "Goedemorgen!",
            "pl": "Dzień dobry!",
            "ru": "Доброе утро!",
            "tr": "Günaydın!"
        },
        "opcoes": {
            "it": [
                "Buongiorno! Come stai?",
                "Mattina sì",
                "Buonanotte"
            ],
            "de": [
                "Guten Morgen! Wie geht es dir?",
                "Morgen ja",
                "Gute Nacht"
            ],
            "nl": [
                "Goedemorgen! Hoe gaat het?",
                "Morgen ja",
                "Goedenacht"
            ],
            "pl": [
                "Dzień dobry! Jak się masz?",
                "Rano tak",
                "Dobranoc"
            ],
            "ru": [
                "Доброе утро! Как дела?",
                "Утро да",
                "Спокойной ночи"
            ],
            "tr": [
                "Günaydın! Nasılsın?",
                "Sabah evet",
                "İyi geceler"
            ]
        }
    },
    {
        "npc": {
            "it": "Voglio un caffè.",
            "de": "Ich möchte Kaffee.",
            "nl": "Ik wil koffie.",
            "pl": "Chcę kawę.",
            "ru": "Я хочу кофе.",
            "tr": "Kahve istiyorum."
        },
        "opcoes": {
            "it": [
                "Ecco il suo caffè, signore.",
                "Caffè prendi",
                "Dai caffè"
            ],
            "de": [
                "Hier ist Ihr Kaffee, mein Herr.",
                "Kaffee nimm",
                "Gib Kaffee"
            ],
            "nl": [
                "Hier is uw koffie, meneer.",
                "Koffie neem",
                "Geef koffie"
            ],
            "pl": [
                "Oto pana kawa, proszę pana.",
                "Kawę weź",
                "Daj kawę"
            ],
            "ru": [
                "Вот ваш кофе, сэр.",
                "Кофе возьми",
                "Дай кофе"
            ],
            "tr": [
                "İşte kahveniz, efendim.",
                "Kahve al",
                "Kahve ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Questo è il treno per Londra?",
            "de": "Ist das der Zug nach London?",
            "nl": "Is dit de trein naar Londen?",
            "pl": "Czy to jest pociąg do Londynu?",
            "ru": "Это поезд в Лондон?",
            "tr": "Bu Londra treni mi?"
        },
        "opcoes": {
            "it": [
                "Sì, binario numero tre.",
                "Treno sì",
                "Londra vai"
            ],
            "de": [
                "Ja, Gleis Nummer drei.",
                "Zug ja",
                "London geht"
            ],
            "nl": [
                "Ja, spoor nummer drie.",
                "Trein ja",
                "Londen gaat"
            ],
            "pl": [
                "Tak, peron numer trzy.",
                "Pociąg tak",
                "Londyn jedzie"
            ],
            "ru": [
                "Да, платформа номер три.",
                "Поезд да",
                "Лондон идет"
            ],
            "tr": [
                "Evet, üç numaralı peron.",
                "Tren evet",
                "Londra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, dov'è l'uscita?",
            "de": "Entschuldigung, wo ist der Ausgang?",
            "nl": "Excuseer me, waar is de uitgang?",
            "pl": "Przepraszam, gdzie jest wyjście?",
            "ru": "Извините, где выход?",
            "tr": "Afedersiniz, çıkış nerede?"
        },
        "opcoes": {
            "it": [
                "Segua il cartello verde.",
                "Uscita vai",
                "Guarda cartello"
            ],
            "de": [
                "Folgen Sie dem grünen Schild.",
                "Ausgang geh",
                "Schau Schild"
            ],
            "nl": [
                "Volg het groene bord.",
                "Uitgang ga",
                "Kijk bord"
            ],
            "pl": [
                "Proszę iść za zielonym znakiem.",
                "Wyjście idź",
                "Patrz znak"
            ],
            "ru": [
                "Идите по зеленому указателю.",
                "Выход иди",
                "Смотри знак"
            ],
            "tr": [
                "Yeşil tabelayı takip edin.",
                "Çıkış git",
                "Tabelaya bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vorrei dell'acqua.",
            "de": "Ich hätte gerne etwas Wasser.",
            "nl": "Ik zou graag wat water willen.",
            "pl": "Chciałbym wodę.",
            "ru": "Я бы хотел воды.",
            "tr": "Su rica ediyorum."
        },
        "opcoes": {
            "it": [
                "Acqua gassata o naturale?",
                "Acqua prendi",
                "Dai acqua"
            ],
            "de": [
                "Mit Kohlensäure oder stilles Wasser?",
                "Wasser nimm",
                "Gib Wasser"
            ],
            "nl": [
                "Bruisend of plat water?",
                "Water neem",
                "Geef water"
            ],
            "pl": [
                "Gazowana czy niegazowana?",
                "Wodę weź",
                "Daj wodę"
            ],
            "ru": [
                "Газированную или без газа?",
                "Воду возьми",
                "Дай воду"
            ],
            "tr": [
                "Gazlı mı gazsız mı?",
                "Su al",
                "Su ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha un tavolo per due?",
            "de": "Haben Sie einen Tisch für zwei?",
            "nl": "Heeft u een tafel voor twee?",
            "pl": "Czy ma pan stolik dla dwojga?",
            "ru": "У вас есть столик на двоих?",
            "tr": "İki kişilik masanız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, mi segua per favore.",
                "Tavolo sì",
                "Due posti"
            ],
            "de": [
                "Ja, folgen Sie mir bitte.",
                "Tisch ja",
                "Zwei Sitze"
            ],
            "nl": [
                "Ja, volgt u mij aanzien.",
                "Tafel ja",
                "Twee stoelen"
            ],
            "pl": [
                "Tak, proszę za mną.",
                "Stolik tak",
                "Dwa miejsca"
            ],
            "ru": [
                "Да, идите за мной, пожалуйста.",
                "Столик да",
                "Два места"
            ],
            "tr": [
                "Evet, lütfen beni takip edin.",
                "Masa evet",
                "İki kişilik"
            ]
        }
    },
    {
        "npc": {
            "it": "A che ora apre il negozio?",
            "de": "Wann öffnet das Geschäft?",
            "nl": "Hoe laat gaat de winkel open?",
            "pl": "O której godzinie otwierają sklep?",
            "ru": "Во сколько открывается магазин?",
            "tr": "Mağaza saat kaçta açılıyor?"
        },
        "opcoes": {
            "it": [
                "Apre alle nove del mattino.",
                "Apre nove",
                "Negozio apre"
            ],
            "de": [
                "Es öffnet um neun Uhr morgens.",
                "Öffnet neun",
                "Geschäft öffnet"
            ],
            "nl": [
                "Het gaat om negen uur 's ochtends open.",
                "Open negen",
                "Winkel open"
            ],
            "pl": [
                "Otwierają o dziewiątej rano.",
                "Otwiera dziewięć",
                "Sklep otwiera"
            ],
            "ru": [
                "Он открывается в девять утра.",
                "Открыто девять",
                "Магазин открывается"
            ],
            "tr": [
                "Sabah dokuzda açılıyor.",
                "Açık dokuz",
                "Mağaza açık"
            ]
        }
    },
    {
        "npc": {
            "it": "Sono molto stanco oggi.",
            "de": "Ich bin heute sehr müde.",
            "nl": "Ik ben erg moe vandaag.",
            "pl": "Jestem dzisiaj bardzo zmęczony.",
            "ru": "Я очень устал сегодня.",
            "tr": "Bugün çok yorgunum."
        },
        "opcoes": {
            "it": [
                "Dovresti andare a dormire.",
                "Dormire sì",
                "Stanco vai"
            ],
            "de": [
                "Du solltest schlafen gehen.",
                "Schlafen ja",
                "Müde geh"
            ],
            "nl": [
                "Je zou moeten gaan slapen.",
                "Slapen ja",
                "Moe ga"
            ],
            "pl": [
                "Powinieneś iść spać.",
                "Spie tak",
                "Zmęczony idź"
            ],
            "ru": [
                "Тебе нужно пойти поспать.",
                "Спать да",
                "Устал иди"
            ],
            "tr": [
                "Uyumalısın.",
                "Uyu evet",
                "Yorgun git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buon compleanno, Maria!",
            "de": "Herzlichen Glückwunsch zum Geburtstag, Maria!",
            "nl": "Gefeliciteerd met je verjaardag, Maria!",
            "pl": "Wszystkiego najlepszego z okazji urodzin, Mario!",
            "ru": "С днем рождения, Мария!",
            "tr": "Doğum günün kutlu olsun, Maria!"
        },
        "opcoes": {
            "it": [
                "Grazie mille, Giovanni!",
                "Compleanno grazie",
                "Felice giorno"
            ],
            "de": [
                "Vielen Dank, Hans!",
                "Geburtstag danke",
                "Glücklicher Tag"
            ],
            "nl": [
                "Hartelijk dank, Jan!",
                "Verjaardag bedankt",
                "Fijne dag"
            ],
            "pl": [
                "Bardzo dziękuję, Janie!",
                "Urodziny dziękuję",
                "Szczęśliwy dzień"
            ],
            "ru": [
                "Большое спасибо, Иван!",
                "Рождения спасибо",
                "Счастливый день"
            ],
            "tr": [
                "Çok teşekkürler, Can!",
                "Doğum günü teşekkür",
                "Mutlu gün"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la chiave dell'hotel?",
            "de": "Wo ist der Hotelschlüssel?",
            "nl": "Waar is de hotelsleutel?",
            "pl": "Gdzie jest klucz do hotelu?",
            "ru": "Где ключ от отеля?",
            "tr": "Otel anahtarı nerede?"
        },
        "opcoes": {
            "it": [
                "È dentro la tua tasca.",
                "Chiave tasca",
                "Chiave sì"
            ],
            "de": [
                "Er ist in deiner Tasche.",
                "Schlüssel Tasche",
                "Schlüssel ja"
            ],
            "nl": [
                "Het zit in je zak.",
                "Sleutel zak",
                "Sleutel ja"
            ],
            "pl": [
                "Jest w twojej kieszeni.",
                "Klucz kieszeń",
                "Klucz tak"
            ],
            "ru": [
                "Он у тебя в кармане.",
                "Ключ карман",
                "Ключ да"
            ],
            "tr": [
                "Cebinin içinde.",
                "Anahtar cep",
                "Anahtar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Non ti capisco.",
            "de": "Ich verstehe dich nicht.",
            "nl": "Ik begrijp je niet.",
            "pl": "Nie rozumiem cię.",
            "ru": "Я тебя не понимаю.",
            "tr": "Seni anlamıyorum."
        },
        "opcoes": {
            "it": [
                "Parlerò più lentamente.",
                "Capire no",
                "Parlare sì"
            ],
            "de": [
                "Ich werde langsamer sprechen.",
                "Verstehen nein",
                "Sprechen ja"
            ],
            "nl": [
                "Ik zal langzamer spreken.",
                "Begrijpen nee",
                "Spreken ja"
            ],
            "pl": [
                "Będę mówić wolniej.",
                "Rozumieć nie",
                "Mówić tak"
            ],
            "ru": [
                "Я буду говорить медленнее.",
                "Понимать нет",
                "Говорить да"
            ],
            "tr": [
                "Daha yavaş konuşacağım.",
                "Anlamak hayır",
                "Konuşmak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Il museo è aperto la domenica?",
            "de": "Ist das Museum am Sonntag geöffnet?",
            "nl": "Is het museum open op zondag?",
            "pl": "Czy muzeum jest otwarte w niedzielę?",
            "ru": "Музей открыт в воскресенье?",
            "tr": "Müze Pazar günleri açık mı?"
        },
        "opcoes": {
            "it": [
                "Sì, dalle dieci alle sei.",
                "Museo aperto",
                "Domenica sì"
            ],
            "de": [
                "Ja, von zehn bis sechs.",
                "Museum geöffnet",
                "Sonntag ja"
            ],
            "nl": [
                "Ja, van tien tot zes.",
                "Museum open",
                "Zondag ja"
            ],
            "pl": [
                "Tak, od dziesiątej do szóstej.",
                "Muzeum otwarte",
                "Niedziela tak"
            ],
            "ru": [
                "Да, с десяти до шести.",
                "Музей открыт",
                "Воскресенье да"
            ],
            "tr": [
                "Evet, ondan altıya kadar.",
                "Müze açık",
                "Pazar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Come posso pagare questo biglietto?",
            "de": "Wie kann ich dieses Ticket bezahlen?",
            "nl": "Hoe kan ik dit ticket betalen?",
            "pl": "Jak mogę zapłacić za ten bilet?",
            "ru": "Как я могу оплатить этот билет?",
            "tr": "Bu bileti nasıl ödeyebilirim?"
        },
        "opcoes": {
            "it": [
                "Puoi pagare in contanti.",
                "Pagare contanti",
                "Biglietto pagare"
            ],
            "de": [
                "Sie können in bar bezahlen.",
                "Bezahlen bar",
                "Ticket bezahlen"
            ],
            "nl": [
                "U kunt contant betalen.",
                "Betalen contant",
                "Ticket betalen"
            ],
            "pl": [
                "Możesz zapłacić gotówką.",
                "Zapłacić gotówką",
                "Bilet zapłacić"
            ],
            "ru": [
                "Вы можете оплатить наличными.",
                "Оплатить наличными",
                "Билет оплатить"
            ],
            "tr": [
                "Nakit ödeyebilirsiniz.",
                "Ödemek nakit",
                "Bilet ödemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho bisogno di un medico, per favore.",
            "de": "Ich brauche bitte einen Arzt.",
            "nl": "Ik heb een dokter nodig, alstublieft.",
            "pl": "Potrzebuję lekarza, proszę.",
            "ru": "Мне нужен врач, пожалуйста.",
            "tr": "Bir doktora ihtiyacım var, lütfen."
        },
        "opcoes": {
            "it": [
                "Chiamerò l'ospedale.",
                "Medico chiamare",
                "Ospedale medico"
            ],
            "de": [
                "Ich werde das Krankenhaus anrufen.",
                "Arzt rufen",
                "Krankenhaus Arzt"
            ],
            "nl": [
                "Ik zal het ziekenhuis bellen.",
                "Dokter bellen",
                "Ziekenhuis dokter"
            ],
            "pl": [
                "Zadzwonię do szpitala.",
                "Lekarz zadzwonić",
                "Szpital lekarz"
            ],
            "ru": [
                "Я позвоню в больницу.",
                "Врач позвонить",
                "Больница врач"
            ],
            "tr": [
                "Hastaneyi arayacağım.",
                "Doktor aramak",
                "Hastane doktor"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo colore preferito?",
            "de": "Was ist deine Lieblingsfarbe?",
            "nl": "Wat is je favoriete kleur?",
            "pl": "Jaki jest twój ulubiony kolor?",
            "ru": "Какой твой любимый цвет?",
            "tr": "En sevdiğin renk ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace molto l'azzurro.",
                "Colore azzurro",
                "Gusto colore"
            ],
            "de": [
                "Ich mag Blau sehr.",
                "Farbe Blau",
                "Mag Farbe"
            ],
            "nl": [
                "Ik hou erg van blauw.",
                "Kleur blauw",
                "Hou kleur"
            ],
            "pl": [
                "Bardzo lubię niebieski.",
                "Kolor niebieski",
                "Lubię kolor"
            ],
            "ru": [
                "Мне очень нравится синий.",
                "Цвет синий",
                "Нравится цвет"
            ],
            "tr": [
                "Maviyi çok severim.",
                "Renk mavi",
                "Severim renk"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la biblioteca?",
            "de": "Wo ist die Bibliothek?",
            "nl": "Waar is de bibliotheek?",
            "pl": "Gdzie jest biblioteka?",
            "ru": "Где библиотека?",
            "tr": "Kütüphane nerede?"
        },
        "opcoes": {
            "it": [
                "È vicino alla scuola.",
                "Biblioteca scuola",
                "Vai scuola"
            ],
            "de": [
                "Sie ist neben der Schule.",
                "Bibliothek Schule",
                "Geh Schule"
            ],
            "nl": [
                "Het is naast de school.",
                "Bibliotheek school",
                "Ga school"
            ],
            "pl": [
                "Jest obok szkoły.",
                "Biblioteka szkoła",
                "Idź szkoła"
            ],
            "ru": [
                "Она рядом со школой.",
                "Библиотека школа",
                "Иди школа"
            ],
            "tr": [
                "Okulun yanında.",
                "Kütüphane okul",
                "Okula git"
            ]
        }
    },
    {
        "npc": {
            "it": "Mi sono perso in città.",
            "de": "Ich habe mich in der Stadt verlaufen.",
            "nl": "Ik ben verdwaald in de stad.",
            "pl": "Zgubiłem się w mieście.",
            "ru": "Я потерялся в городе.",
            "tr": "Şehirde kayboldum."
        },
        "opcoes": {
            "it": [
                "Mi mostri la sua mappa, per favore.",
                "Perso città",
                "Mappa guarda"
            ],
            "de": [
                "Zeigen Sie mir bitte Ihre Karte.",
                "Verlaufen Stadt",
                "Karte zeigen"
            ],
            "nl": [
                "Laat me je kaart zien, alstublieft.",
                "Verdwaald stad",
                "Kaart kijken"
            ],
            "pl": [
                "Proszę pokazać mi swoją mapę.",
                "Zgubiłem miasto",
                "Mapa patrz"
            ],
            "ru": [
                "Покажите мне вашу карту, пожалуйста.",
                "Потерялся город",
                "Карта смотри"
            ],
            "tr": [
                "Lütfen bana haritanızı gösterin.",
                "Kayıp şehir",
                "Harita bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vuoi giocare a tennis?",
            "de": "Möchtest du Tennis spielen?",
            "nl": "Wil je tennissen?",
            "pl": "Czy chcesz grać w tenisa?",
            "ru": "Хочешь поиграть в теннис?",
            "tr": "Tenis oynamak ister misin?"
        },
        "opcoes": {
            "it": [
                "Sì, ho due racchette.",
                "Tennis giocare",
                "Racchette sì"
            ],
            "de": [
                "Ja, ich habe zwei Schläger.",
                "Tennis spielen",
                "Schläger ja"
            ],
            "nl": [
                "Ja, ik heb twee rackets.",
                "Tennis spelen",
                "Rackets ja"
            ],
            "pl": [
                "Tak, mam dwie rakiety.",
                "Tenis grać",
                "Rakiety tak"
            ],
            "ru": [
                "Да, у меня есть две ракетки.",
                "Теннис играть",
                "Ракетки да"
            ],
            "tr": [
                "Evet, iki raketim var.",
                "Tenis oynamak",
                "Raket evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Questa zuppa è troppo calda.",
            "de": "Diese Suppe ist zu heiß.",
            "nl": "Deze soep is te heet.",
            "pl": "Ta zupa jest za gorąca.",
            "ru": "Этот суп слишком горячий.",
            "tr": "Bu çorba çok sıcak."
        },
        "opcoes": {
            "it": [
                "Aspetta qualche minuto.",
                "Zuppa calda",
                "Calda sì"
            ],
            "de": [
                "Warte ein paar Minuten.",
                "Suppe heiß",
                "Heiß ja"
            ],
            "nl": [
                "Wacht een paar minuten.",
                "Soep heet",
                "Heet ja"
            ],
            "pl": [
                "Poczekaj kilka minut.",
                "Zupa gorąca",
                "Gorąca tak"
            ],
            "ru": [
                "Подожди несколько минут.",
                "Суп горячий",
                "Горячий да"
            ],
            "tr": [
                "Birkaç dakika bekle.",
                "Çorba sıcak",
                "Sıcak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Posso sedermi qui?",
            "de": "Kann ich mich hierher setzen?",
            "nl": "Mag ik hier zitten?",
            "pl": "Czy mogę tu usiąść?",
            "ru": "Можно мне присесть здесь?",
            "tr": "Buraya oturabilir miyim?"
        },
        "opcoes": {
            "it": [
                "Sì, questo posto è libero.",
                "Sedersi sì",
                "Posto libero"
            ],
            "de": [
                "Ja, dieser Platz ist frei.",
                "Setzen ja",
                "Platz frei"
            ],
            "nl": [
                "Ja, deze plek is vrij.",
                "Zitten ja",
                "Plek vrij"
            ],
            "pl": [
                "Tak, to miejsce jest wolne.",
                "Usiąść tak",
                "Miejsce wolne"
            ],
            "ru": [
                "Да, это место свободно.",
                "Присесть да",
                "Место свободно"
            ],
            "tr": [
                "Evet, bu koltuk boş.",
                "Oturmak evet",
                "Koltuk boş"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai messo il latte?",
            "de": "Wo hast du die Milch hingetan?",
            "nl": "Waar heb je de melk gelaten?",
            "pl": "Gdzie położyłeś mleko?",
            "ru": "Куда ты положил молоко?",
            "tr": "Sütü nereye koydun?"
        },
        "opcoes": {
            "it": [
                "È dentro il frigorifero.",
                "Latte frigo",
                "Frigo latte"
            ],
            "de": [
                "Sie ist im Kühlschrank.",
                "Milch Kühlschrank",
                "Kühlschrank Milch"
            ],
            "nl": [
                "Het staat in de koelkast.",
                "Melk koelkast",
                "Koelkast melk"
            ],
            "pl": [
                "Jest w lodówce.",
                "Mleko lodówka",
                "Lodówka mleko"
            ],
            "ru": [
                "Оно в холодильнике.",
                "Молоко холодильник",
                "Холодильник молоко"
            ],
            "tr": [
                "Buzdolabının içinde.",
                "Süt buzdolabı",
                "Buzdolabı süt"
            ]
        }
    },
    {
        "npc": {
            "it": "Desidera ordinare ora?",
            "de": "Möchten Sie jetzt bestellen?",
            "nl": "Wilt u nu bestellen?",
            "pl": "Czy chciałby pan teraz zamówić?",
            "ru": "Желаете сделать заказ сейчас?",
            "tr": "Şimdi sipariş vermek ister misiniz?"
        },
        "opcoes": {
            "it": [
                "Sì, prenderò la bistecca, per favore",
                "Sì, voglio bistecca",
                "Dai bistecca"
            ],
            "de": [
                "Ja, ich nehme das Steak, bitte",
                "Ja, will Steak",
                "Gib Steak"
            ],
            "nl": [
                "Ja, ik neem de biefstuk, alstublieft",
                "Ja, wil biefstuk",
                "Geef biefstuk"
            ],
            "pl": [
                "Tak, poproszę stek",
                "Tak, chcę stek",
                "Daj stek"
            ],
            "ru": [
                "Да, мне стейк, пожалуйста",
                "Да, хочу стейк",
                "Дай стейк"
            ],
            "tr": [
                "Evet, biftek alayım lütfen",
                "Evet, biftek istiyorum",
                "Biftek ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo hobby preferito?",
            "de": "Was ist dein Lieblingshobby?",
            "nl": "Wat is je favoriete hobby?",
            "pl": "Jakie jest twoje ulubione hobby?",
            "ru": "Какое твое любимое хобби?",
            "tr": "En sevdiğin hobin ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace leggere libri",
                "Mi piace leggere",
                "Leggere è hobby"
            ],
            "de": [
                "Ich lese gerne Bücher",
                "Ich mag lesen",
                "Lesen ist Hobby"
            ],
            "nl": [
                "Ik hou van boeken lezen",
                "Ik vind lezen leuk",
                "Lezen is hobby"
            ],
            "pl": [
                "Lubię czytać książki",
                "Lubię czytać",
                "Czytanie to hobby"
            ],
            "ru": [
                "Мне нравится читать книги",
                "Я люблю читать",
                "Чтение — мое хобби"
            ],
            "tr": [
                "Kitap okumaktan hoşlanırım",
                "Okumayı severim",
                "Okumak hobim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come arrivo alla stazione?",
            "de": "Wie komme ich zum Bahnhof?",
            "nl": "Hoe kom ik bij het station?",
            "pl": "Jak dojadę do stacji?",
            "ru": "Как мне добраться до станции?",
            "tr": "İstasyona nasıl giderim?"
        },
        "opcoes": {
            "it": [
                "Vada sempre dritto e giri a destra",
                "Dritto e destra",
                "Vai stazione destra"
            ],
            "de": [
                "Gehen Sie geradeaus und biegen Sie rechts ab",
                "Geradeaus rechts",
                "Geh Bahnhof rechts"
            ],
            "nl": [
                "Ga rechtdoor en sla rechtsaf",
                "Rechtdoor rechts",
                "Ga station rechts"
            ],
            "pl": [
                "Proszę iść prosto i skręcić w prawo",
                "Prosto i w prawo",
                "Idź stacja prawo"
            ],
            "ru": [
                "Идите прямо и поверните направо",
                "Прямо и направо",
                "Иди станция право"
            ],
            "tr": [
                "Düz gidin ve sağa dönün",
                "Düz ve sağ",
                "İstasyon sağa git"
            ]
        }
    },
    {
        "npc": {
            "it": "Com'è il tempo oggi?",
            "de": "Wie ist das Wetter heute?",
            "nl": "Hoe is het weer vandaag?",
            "pl": "Jaka jest dzisiaj pogoda?",
            "ru": "Какая сегодня погода?",
            "tr": "Bugün hava nasıl?"
        },
        "opcoes": {
            "it": [
                "È soleggiato e caldo",
                "Sole e caldo",
                "Soleggiato oggi è"
            ],
            "de": [
                "Es ist sonnig und warm",
                "Sonne und warm",
                "Sonnig heute ist"
            ],
            "nl": [
                "Het is zonnig en warm",
                "Zon en warm",
                "Zonnig vandaag is"
            ],
            "pl": [
                "Jest słonecznie i ciepło",
                "Słońce i ciepło",
                "Słonecznie dzisiaj jest"
            ],
            "ru": [
                "Солнечно и тепло",
                "Солнце и тепло",
                "Солнечно сегодня"
            ],
            "tr": [
                "Güneşli ve sıcak",
                "Güneş ve sıcak",
                "Güneşli bugün"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai finito i compiti?",
            "de": "Hast du deine Hausaufgaben fertig?",
            "nl": "Heb je je huiswerk af?",
            "pl": "Czy odrobiłeś lekcje?",
            "ru": "Ты сделал домашнее задание?",
            "tr": "Ödevini bitirdin mi?"
        },
        "opcoes": {
            "it": [
                "Non ancora, ho bisogno di più tempo",
                "No, serve tempo",
                "Sì, ho finito"
            ],
            "de": [
                "Noch nicht, ich brauche mehr Zeit",
                "Nein, brauche Zeit",
                "Ja, ich bin fertig"
            ],
            "nl": [
                "Nog niet, ik heb meer tijd nodig",
                "Nee, heb tijd nodig",
                "Ja, ik ben klaar"
            ],
            "pl": [
                "Jeszcze nie, potrzebuję więcej czasu",
                "Nie, potrzebuję czasu",
                "Tak, skończyłem"
            ],
            "ru": [
                "Еще нет, мне нужно больше времени",
                "Нет, нужно время",
                "Да, я закончил"
            ],
            "tr": [
                "Henüz değil, daha fazla zamana ihtiyacım var",
                "Hayır, zaman lazım",
                "Evet, bitirdim"
            ]
        }
    },
    {
        "npc": {
            "it": "Cosa hai fatto lo scorso fine settimana?",
            "de": "Was hast du letztes Wochenende gemacht?",
            "nl": "Wat heb je afgelopen weekend gedaan?",
            "pl": "Co robiłeś w zeszły weekend?",
            "ru": "Что ты делал в прошлые выходные?",
            "tr": "Geçen hafta sonu ne yaptın?"
        },
        "opcoes": {
            "it": [
                "Sono andato al cinema con amici",
                "Io vado al cinema",
                "Andato cinema"
            ],
            "de": [
                "Ich bin mit Freunden ins Kino gegangen",
                "Ich gehe ins Kino",
                "Kino gegangen"
            ],
            "nl": [
                "Ik ben met vrienden naar de bioscoop gegaan",
                "Ik ga naar bioscoop",
                "Bioscoop gegaan"
            ],
            "pl": [
                "Poszedłem do kina z przyjaciółmi",
                "Idę do kina",
                "Poszedłem kino"
            ],
            "ru": [
                "Я ходил в кино с друзьями",
                "Я иду в кино",
                "Ходил кино"
            ],
            "tr": [
                "Arkadaşlarımla sinemaya gittim",
                "Sinemaya gidiyorum",
                "Gittim sinema"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai animali domestici?",
            "de": "Hast du Haustiere?",
            "nl": "Heb je huisdieren?",
            "pl": "Czy masz zwierzęta?",
            "ru": "У тебя есть домашние животные?",
            "tr": "Evcil hayvanın var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, ho un cane e un gatto",
                "Sì, due animali cane",
                "Sì, io ho"
            ],
            "de": [
                "Ja, ich habe einen Hund und eine Katze",
                "Ja, zwei Haustiere Hund",
                "Ja, ich habe"
            ],
            "nl": [
                "Ja, ik heb een hond en een kat",
                "Ja, twee huisdieren hond",
                "Ja, ik heb"
            ],
            "pl": [
                "Tak, mam psa i kota",
                "Tak, dwa zwierzęta pies",
                "Tak, mam"
            ],
            "ru": [
                "Да, у меня есть собака и кошка",
                "Да, два питомца собака",
                "Да, у меня есть"
            ],
            "tr": [
                "Evet, bir köpeğim ve bir kedim var",
                "Evet, iki evcil köpek",
                "Evet, sahibim"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo incontrarci domani alle 10?",
            "de": "Können wir uns morgen um 10 Uhr treffen?",
            "nl": "Kunnen we morgen om 10 uur afspreken?",
            "pl": "Czy możemy się spotkać jutro o 10 rano?",
            "ru": "Мы можем встретиться завтра в 10 утра?",
            "tr": "Yarın sabah 10'da buluşabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, per me va bene",
                "Sì, domani 10",
                "Domani sì"
            ],
            "de": [
                "Ja, das passt mir",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "nl": [
                "Ja, dat komt mij uit",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "pl": [
                "Tak, to mi odpowiada",
                "Tak, jutro 10",
                "Jutro tak"
            ],
            "ru": [
                "Да, мне это подходит",
                "Да, завтра в 10",
                "Завтра да"
            ],
            "tr": [
                "Evet, bana uyar",
                "Evet, yarın 10",
                "Yarın evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Perché stai imparando una nuova lingua?",
            "de": "Warum lernst du eine neue Sprache?",
            "nl": "Waarom leer je een nieuwe taal?",
            "pl": "Dlaczego uczysz się nowego języka?",
            "ru": "Почему ты учишь новый язык?",
            "tr": "Neden yeni bir dil öğreniyorsun?"
        },
        "opcoes": {
            "it": [
                "Perché voglio viaggiare l'anno prossimo.",
                "Perché lingua",
                "Per viaggiare imparo"
            ],
            "de": [
                "Weil ich nächstes Jahr reisen möchte.",
                "Warum Sprache",
                "Für Reisen lernen"
            ],
            "nl": [
                "Omdat ik volgend jaar wil reizen.",
                "Waarom taal",
                "Voor reizen leren"
            ],
            "pl": [
                "Ponieważ chcę podróżować w przyszłym roku.",
                "Dlaczego język",
                "Do podróży uczyć"
            ],
            "ru": [
                "Потому что я хочу путешествовать в следующем году.",
                "Почему язык",
                "Для путешествий учить"
            ],
            "tr": [
                "Çünkü gelecek yıl seyahat etmek istiyorum.",
                "Neden dil",
                "Seyahat için öğrenmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che ci siamo persi in questa foresta.",
            "de": "Ich glaube, wir haben uns in diesem Wald verlaufen.",
            "nl": "Ik denk dat we verdwaald zijn in dit bos.",
            "pl": "Myślę, że zgubiliśmy się w tym lesie.",
            "ru": "Мне кажется, мы потерялись в этом лесу.",
            "tr": "Sanırım bu ormanda kaybolduk."
        },
        "opcoes": {
            "it": [
                "Non ti preoccupare, ho una bussola qui.",
                "Perso foresta",
                "No preoccuparsi"
            ],
            "de": [
                "Keine Sorge, ich habe hier einen Kompass.",
                "Verlaufen Wald",
                "Keine Sorge"
            ],
            "nl": [
                "Maak je geen zorgen, ik heb hier een kompas.",
                "Verdwaald bos",
                "Geen zorgen"
            ],
            "pl": [
                "Nie martw się, mam tu kompas.",
                "Zgubieni las",
                "Bez obaw"
            ],
            "ru": [
                "Не волнуйся, у меня есть компас.",
                "Потерялись лес",
                "Не волнуйся"
            ],
            "tr": [
                "Merak etme, yanımda pusula var.",
                "Kayıp orman",
                "Endişelenme"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi piani per l'estate?",
            "de": "Was sind deine Pläne für den Sommer?",
            "nl": "Wat zijn je plannen voor de zomer?",
            "pl": "Jakie masz plany na lato?",
            "ru": "Какие у тебя планы на лето?",
            "tr": "Yaz için planların neler?"
        },
        "opcoes": {
            "it": [
                "Visiterò la Germania.",
                "Piani estate",
                "Germania andare"
            ],
            "de": [
                "Ich werde Deutschland besuchen.",
                "Sommerpläne",
                "Deutschland gehen"
            ],
            "nl": [
                "Ik ga Duitsland bezoeken.",
                "Zomerplannen",
                "Duitsland gaan"
            ],
            "pl": [
                "Zamierzam odwiedzić Niemcy.",
                "Plany lato",
                "Niemcy jechać"
            ],
            "ru": [
                "Я собираюсь посетить Германию.",
                "Планы лето",
                "Германия ехать"
            ],
            "tr": [
                "Almanya'yı ziyaret edeceğim.",
                "Yaz planları",
                "Almanya gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai comprato quella bella camicia?",
            "de": "Wo hast du dieses schöne Hemd gekauft?",
            "nl": "Waar heb je dat mooie overhemd gekocht?",
            "pl": "Gdzie kupiłeś tę ładną koszulę?",
            "ru": "Где ты купил эту красивую рубашку?",
            "tr": "O güzel gömleği nereden aldın?"
        },
        "opcoes": {
            "it": [
                "L'ho comprata nel nuovo centro commerciale locale.",
                "Camicia centro",
                "Comprato camicia"
            ],
            "de": [
                "Ich habe es im neuen Einkaufszentrum gekauft.",
                "Hemd Zentrum",
                "Gekauft Hemd"
            ],
            "nl": [
                "Ik heb het in het nieuwe winkelcentrum gekocht.",
                "Overhemd centrum",
                "Gekocht overhemd"
            ],
            "pl": [
                "Kupiłem ją w nowym centrum handlowym.",
                "Koszula centrum",
                "Kupić koszula"
            ],
            "ru": [
                "Я купил ее в новом местном торговом центре.",
                "Рубашка центр",
                "Купил рубашку"
            ],
            "tr": [
                "Yeni yerel alışveriş merkezinden aldım.",
                "Gömlek AVM",
                "Satın aldım gömlek"
            ]
        }
    },
    {
        "npc": {
            "it": "A mia sorella piace nuotare nel lago.",
            "de": "Meine Schwester schwimmt gerne im See.",
            "nl": "Mijn zus zwemt graag in het meer.",
            "pl": "Moja siostra lubi pływać w jeziorze.",
            "ru": "Моей сестре нравится плавать в озере.",
            "tr": "Kız kardeşim gölde yüzmeyi sever."
        },
        "opcoes": {
            "it": [
                "L'acqua è abbastanza pulita per farlo?",
                "Sorella nuotare",
                "Lago buono"
            ],
            "de": [
                "Ist das Wasser sauber genug dafür?",
                "Schwester schwimmen",
                "See gut"
            ],
            "nl": [
                "Is het water daar schoon genoeg voor?",
                "Zus zwemmen",
                "Meer goed"
            ],
            "pl": [
                "Czy woda jest wystarczająco czysta do tego?",
                "Siostra pływać",
                "Jezioro dobre"
            ],
            "ru": [
                "Вода там достаточно чистая для этого?",
                "Сестра плавать",
                "Озеро хорошо"
            ],
            "tr": [
                "Su bunun için yeterince temiz mi?",
                "Kız kardeş yüzmek",
                "Göl iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Potresti consigliarmi un buon libro da leggere?",
            "de": "Könntest du mir ein gutes Buch zum Lesen empfehlen?",
            "nl": "Zou je me een goed boek kunnen aanraden?",
            "pl": "Czy mógłbyś polecić dobrą książkę do przeczytania?",
            "ru": "Не мог бы ты порекомендовать хорошую книгу?",
            "tr": "Okumak için iyi bir kitap önerebilir misin?"
        },
        "opcoes": {
            "it": [
                "Dovresti leggere il classico romanzo di fantascienza.",
                "Libro consigliare",
                "Leggere romanzo"
            ],
            "de": [
                "Du solltest den klassischen Science-Fiction-Roman lesen.",
                "Buch empfehlen",
                "Roman lesen"
            ],
            "nl": [
                "Je zou de klassieke sciencefictionroman moeten lezen.",
                "Boek aanraden",
                "Roman lezen"
            ],
            "pl": [
                "Powinieneś przeczytać klasyczną powieść sci-fi.",
                "Książka polecić",
                "Czytać powieść"
            ],
            "ru": [
                "Тебе стоит прочитать классический научно-фантастический роман.",
                "Книгу порекомендовать",
                "Читать роман"
            ],
            "tr": [
                "Klasik bilim kurgu romanını okumalısın.",
                "Kitap önermek",
                "Roman okumak"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha piovuto molto per tutto il pomeriggio.",
            "de": "Es hat den ganzen Nachmittag stark geregnet.",
            "nl": "Het heeft de hele middag hard geregend.",
            "pl": "Padało intensywnie przez całe popołudnie.",
            "ru": "Весь день шел сильный дождь.",
            "tr": "Bütün öğleden sonra yoğun yağmur yağdı."
        },
        "opcoes": {
            "it": [
                "Sì, restiamo dentro a guardare la TV.",
                "Piove molto",
                "Pioggia fuori"
            ],
            "de": [
                "Ja, lass uns drinnen bleiben und fernsehen.",
                "Stark regnen",
                "Regen draußen"
            ],
            "nl": [
                "Ja, laten we binnen blijven en tv kijken.",
                "Hard regenen",
                "Regen buiten"
            ],
            "pl": [
                "Tak, zostańmy w domu i pooglądajmy telewizję.",
                "Pada mocno",
                "Deszcz na zewnątrz"
            ],
            "ru": [
                "Да, давай останемся дома и посмотрим телевизор.",
                "Сильный дождь",
                "Дождь на улице"
            ],
            "tr": [
                "Evet, içeride kalıp televizyon izleyelim.",
                "Yoğun yağmur",
                "Dışarıda yağmur"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai programmi per stasera?",
            "de": "Hast du Pläne für heute Abend?",
            "nl": "Heb je plannen voor vanavond?",
            "pl": "Czy masz plany na dzisiejszy wieczór?",
            "ru": "У тебя есть планы на вечер?",
            "tr": "Bu gece için planın var mı?"
        },
        "opcoes": {
            "it": [
                "Cucinerò una zuppa speciale.",
                "Piani stasera",
                "Stasera cucinare"
            ],
            "de": [
                "Ich werde eine besondere Suppe kochen.",
                "Pläne Abend",
                "Abend kochen"
            ],
            "nl": [
                "Ik ga een speciale soep koken.",
                "Plannen avond",
                "Vanavond koken"
            ],
            "pl": [
                "Zamierzam ugotować specjalną zupę.",
                "Plany wieczór",
                "Wieczór gotować"
            ],
            "ru": [
                "Я собираюсь приготовить особый суп.",
                "Планы вечер",
                "Вечер готовить"
            ],
            "tr": [
                "Özel bir çorba pişireceğim.",
                "Gece planları",
                "Gece pişirmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Da quanto tempo lavori in questa panetteria?",
            "de": "Wie lange arbeitest du schon in dieser Bäckerei?",
            "nl": "Hoe lang werk je al in deze bakkerij?",
            "pl": "Jak długo pracujesz w tej piekarni?",
            "ru": "Как долго ты работаешь в этой пекарне?",
            "tr": "Bu fırında ne kadar süredir çalışıyorsun?"
        },
        "opcoes": {
            "it": [
                "Lavoro qui da tre anni.",
                "Panetteria lavoro",
                "Lavorato qui"
            ],
            "de": [
                "Ich arbeite hier seit drei Jahren.",
                "Bäckerei Arbeit",
                "Hier gearbeitet"
            ],
            "nl": [
                "Ik werk hier al drie jaar.",
                "Bakkerij werk",
                "Hier gewerkt"
            ],
            "pl": [
                "Pracuję tu od trzech lat.",
                "Piekarnia praca",
                "Pracuję tutaj"
            ],
            "ru": [
                "Я работаю здесь три года.",
                "Пекарня работа",
                "Работал здесь"
            ],
            "tr": [
                "Üç yıldır burada çalışıyorum.",
                "Fırın iş",
                "Burada çalışmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Quale strumento ti piacerebbe suonare?",
            "de": "Welches Instrument würdest du gerne spielen?",
            "nl": "Welk instrument zou je willen spelen?",
            "pl": "Na jakim instrumencie chciałbyś grać?",
            "ru": "На каком инструменте ты хотел бы играть?",
            "tr": "Hangi enstrümanı çalmak istersin?"
        },
        "opcoes": {
            "it": [
                "Mi piacerebbe molto imparare il pianoforte.",
                "Strumento suonare",
                "Piano suonare"
            ],
            "de": [
                "Ich würde gerne Klavier lernen.",
                "Instrument spielen",
                "Klavier spielen"
            ],
            "nl": [
                "Ik zou graag piano willen leren spelen.",
                "Instrument spelen",
                "Piano spelen"
            ],
            "pl": [
                "Bardzo chciałbym nauczyć się grać na pianinie.",
                "Instrument grać",
                "Pianino grać"
            ],
            "ru": [
                "Я бы очень хотел научиться играть на пианино.",
                "Инструмент играть",
                "Пианино играть"
            ],
            "tr": [
                "Piyano öğrenmeyi çok isterim.",
                "Enstrüman çalmak",
                "Piyano çalmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Il treno parte tra dieci minuti.",
            "de": "Der Zug fährt in zehn Minuten ab.",
            "nl": "De trein vertrekt over tien minuten.",
            "pl": "Pociąg odjeżdża za dziesięć minut.",
            "ru": "Поезд отправляется через десять минут.",
            "tr": "Tren on dakika içinde kalkıyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo correre al binario adesso.",
                "Treno parte",
                "Correre binario"
            ],
            "de": [
                "Wir sollten jetzt zum Bahnsteig rennen.",
                "Zug fährt",
                "Rennen Bahnsteig"
            ],
            "nl": [
                "We moeten nu naar het spoor rennen.",
                "Trein vertrekt",
                "Rennen spoor"
            ],
            "pl": [
                "Powinniśmy teraz biec na peron.",
                "Pociąg odjeżdża",
                "Biec peron"
            ],
            "ru": [
                "Нам нужно бежать на платформу прямо сейчас.",
                "Поезд уходит",
                "Бежать платформа"
            ],
            "tr": [
                "Hemen perona koşmalıyız.",
                "Tren kalkıyor",
                "Koşmak peron"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, questo autobus va in centro?",
            "de": "Entschuldigung, fährt dieser Bus ins Stadtzentrum?",
            "nl": "Excuseer me, gaat deze bus naar het centrum?",
            "pl": "Przepraszam, czy ten autobus jedzie do centrum?",
            "ru": "Извините, этот автобус идет в центр?",
            "tr": "Afedersiniz, bu otobüs merkeze gidiyor mu?"
        },
        "opcoes": {
            "it": [
                "Sì, si ferma alla piazza principale.",
                "Autobus centro",
                "Centro andare"
            ],
            "de": [
                "Ja, er hält am Hauptplatz.",
                "Bus Zentrum",
                "Zentrum gehen"
            ],
            "nl": [
                "Ja, hij stopt op het hoofdplein.",
                "Bus centrum",
                "Centrum gaan"
            ],
            "pl": [
                "Tak, zatrzymuje się na głównym placu.",
                "Autobus centrum",
                "Centrum jechać"
            ],
            "ru": [
                "Да, он останавливается на главной площади.",
                "Автобус центр",
                "Центр идти"
            ],
            "tr": [
                "Evet, ana meydanda duruyor.",
                "Otobüs merkez",
                "Merkez gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho comprato un nuovo biglietto per lo spettacolo.",
            "de": "Ich habe ein neues Ticket für die Show gekauft.",
            "nl": "Ik heb een nieuw ticket voor de show gekocht.",
            "pl": "Kupiłem nowy bilet na koncert.",
            "ru": "Я купил новый билет на шоу.",
            "tr": "Gösteri için yeni bir bilet aldım."
        },
        "opcoes": {
            "it": [
                "Era molto caro?",
                "Biglietto spettacolo",
                "Comprato biglietto"
            ],
            "de": [
                "War es sehr teuer?",
                "Ticket Show",
                "Gekauft Ticket"
            ],
            "nl": [
                "Was het erg duur?",
                "Ticket show",
                "Gekocht ticket"
            ],
            "pl": [
                "Czy był bardzo drogi?",
                "Bilet koncert",
                "Kupić bilet"
            ],
            "ru": [
                "Он был очень дорогим?",
                "Билет шоу",
                "Купил билет"
            ],
            "tr": [
                "Çok pahalı mıydı?",
                "Bilet gösteri",
                "Satın aldım bilet"
            ]
        }
    },
    {
        "npc": {
            "it": "I miei genitori vivono in una città tranquilla.",
            "de": "Meine Eltern leben in einer ruhigen Stadt.",
            "nl": "Mijn ouders wonen in een rustige stad.",
            "pl": "Moi rodzice mieszkają w spokojnym mieście.",
            "ru": "Мои родители живут в тихом городе.",
            "tr": "Ailem sakin bir şehirde yaşıyor."
        },
        "opcoes": {
            "it": [
                "Li visiti spesso?",
                "Genitori città",
                "Tranquilla città"
            ],
            "de": [
                "Besuchst du sie oft?",
                "Eltern Stadt",
                "Ruhig Stadt"
            ],
            "nl": [
                "Bezoek je ze vaak?",
                "Ouders stad",
                "Rustig stad"
            ],
            "pl": [
                "Odwiedzasz ich często?",
                "Rodzice miasto",
                "Spokojne miasto"
            ],
            "ru": [
                "Ты часто их навещаешь?",
                "Родители город",
                "Тихий город"
            ],
            "tr": [
                "Onları sık sık ziyaret eder misin?",
                "Aile şehir",
                "Sakin şehir"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che questa torta sia deliziosa.",
            "de": "Ich finde diesen Kuchen köstlich.",
            "nl": "Ik vind deze taart heerlijk.",
            "pl": "Myślę, że to ciasto jest pyszne.",
            "ru": "Мне кажется, этот пирог восхитителен.",
            "tr": "Bence bu kek lezzetli."
        },
        "opcoes": {
            "it": [
                "Potresti condividere la ricetta con me?",
                "Torta deliziosa",
                "Gusto torta"
            ],
            "de": [
                "Könntest du das Rezept mit mir teilen?",
                "Kuchen köstlich",
                "Mag Kuchen"
            ],
            "nl": [
                "Zou je het recept met me kunnen delen?",
                "Taart heerlijk",
                "Hou taart"
            ],
            "pl": [
                "Czy mógłbyś podzielić się ze mną przepisem?",
                "Ciasto pyszne",
                "Lubię ciasto"
            ],
            "ru": [
                "Не мог бы ты поделиться со мной рецептом?",
                "Пирог восхитительный",
                "Нравится пирог"
            ],
            "tr": [
                "Tarifini benimle paylaşabilir misin?",
                "Kek lezzetli",
                "Severim kek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo comprare delle verdure per cena.",
            "de": "Wir müssen Gemüse für das Abendessen kaufen.",
            "nl": "We moeten groenten kopen voor het avondeten.",
            "pl": "Musimy kupić warzywa na kolację.",
            "ru": "Нам нужно купить овощей на ужин.",
            "tr": "Akşam yemeği için sebze almamız gerekiyor."
        },
        "opcoes": {
            "it": [
                "Andiamo al mercato locale.",
                "Comprare verdure",
                "Cena verdure"
            ],
            "de": [
                "Lass uns zum lokalen Markt gehen.",
                "Gemüse kaufen",
                "Abendessen Gemüse"
            ],
            "nl": [
                "Laten we naar de lokale markt gaan.",
                "Groenten kopen",
                "Avondeten groenten"
            ],
            "pl": [
                "Chodźmy na lokalny rynek.",
                "Kupić warzywa",
                "Kolacja warzywa"
            ],
            "ru": [
                "Давай сходим на местный рынок.",
                "Купить овощи",
                "Ужин овощи"
            ],
            "tr": [
                "Yerel pazara gidelim.",
                "Sebze almak",
                "Yemek sebze"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai mai visitato un museo in Italia?",
            "de": "Hast du jemals ein Museum in Italien besucht?",
            "nl": "Heb je ooit een museum in Italië bezocht?",
            "pl": "Czy kiedykolwiek odwiedziłeś muzeum we Włoszech?",
            "ru": "Ты когда-нибудь был в музее в Италии?",
            "tr": "Hiç İtalya'da müze ziyaret ettin mi?"
        },
        "opcoes": {
            "it": [
                "Sì, l'arte lì è incredibile.",
                "Museo Italia",
                "Arte Italia"
            ],
            "de": [
                "Ja, die Kunst dort ist unglaublich.",
                "Museum Italien",
                "Kunst Italien"
            ],
            "nl": [
                "Ja, de kunst daar is ongelooflijk.",
                "Museum Italië",
                "Kunst Italië"
            ],
            "pl": [
                "Tak, tamtejsza sztuka jest niesamowita.",
                "Muzeum Włochy",
                "Sztuka Włochy"
            ],
            "ru": [
                "Да, искусство там невероятное.",
                "Музей Италия",
                "Искусство Италия"
            ],
            "tr": [
                "Evet, oradaki sanat inanılmaz.",
                "Müze İtalya",
                "Sanat İtalya"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho perso il mio ombrello nella metropolitana.",
            "de": "Ich habe meinen Regenschirm in der U-Bahn verloren.",
            "nl": "Ik ben mijn paraplu verloren in de metro.",
            "pl": "Zgubiłem parasol w metrze.",
            "ru": "Я потерял свой зонт в метро.",
            "tr": "Şemsiyemi metroda kaybettim."
        },
        "opcoes": {
            "it": [
                "Dovresti controllare l'ufficio oggetti smarriti.",
                "Ombrello perso",
                "Metro perso"
            ],
            "de": [
                "Du solltest im Fundbüro nachsehen.",
                "Schirm verloren",
                "U-Bahn verloren"
            ],
            "nl": [
                "Je zou bij het bureau gevonden voorwerpen moeten kijken.",
                "Paraplu verloren",
                "Metro verloren"
            ],
            "pl": [
                "Powinieneś sprawdzić biuro rzeczy znalezionych.",
                "Parasol zgubiony",
                "Metro zgubiony"
            ],
            "ru": [
                "Тебе стоит проверить бюро находок.",
                "Зонт потерял",
                "Метро потерял"
            ],
            "tr": [
                "Kayıp eşya bürosunu kontrol etmelisin.",
                "Şemsiye kayıp",
                "Metro kayıp"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mio medico mi ha consigliato di camminare di più.",
            "de": "Mein Arzt hat mir geraten, mehr zu gehen.",
            "nl": "Mijn dokter heeft me geadviseerd om meer te lopen.",
            "pl": "Mój lekarz doradził mi, abym więcej spacerował.",
            "ru": "Мой врач посоветовал мне больше ходить пешком.",
            "tr": "Doktorum daha fazla yürümemi tavsiye etti."
        },
        "opcoes": {
            "it": [
                "Migliorerà la tua salute.",
                "Medico camminare",
                "Camminare di più"
            ],
            "de": [
                "Es wird deine Gesundheit verbessern.",
                "Arzt gehen",
                "Mehr gehen"
            ],
            "nl": [
                "Het zal je gezondheid verbeteren.",
                "Dokter lopen",
                "Meer lopen"
            ],
            "pl": [
                "To poprawi twoje zdrowie.",
                "Lekarz spacerować",
                "Więcej spaceru"
            ],
            "ru": [
                "Это улучшит твое здоровье.",
                "Врач ходить",
                "Больше ходить"
            ],
            "tr": [
                "Sağlığını düzeltecektir.",
                "Doktor yürümek",
                "Daha fazla yürümek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi punti di forza professionali?",
            "de": "Was sind Ihre beruflichen Stärken?",
            "nl": "Wat zijn uw professionele sterke punten?",
            "pl": "Jakie są pana mocne strony zawodowe?",
            "ru": "Каковы ваши профессиональные сильные стороны?",
            "tr": "Mesleki güçlü yönleriniz nelerdir?"
        },
        "opcoes": {
            "it": [
                "Sono proattivo e altamente organizzato",
                "Lavoro bene",
                "Buon impiegato"
            ],
            "de": [
                "Ich bin proaktiv und sehr gut organisiert",
                "Guter Arbeiter",
                "Guter Angestellter"
            ],
            "nl": [
                "Ik ben proactief en zeer georganiseerd",
                "Goede werker",
                "Goede werknemer"
            ],
            "pl": [
                "Jestem proaktywny i bardzo dobrze zorganizowany",
                "Dobry pracownik",
                "Dobry pracownik"
            ],
            "ru": [
                "Я проактивен и очень организован",
                "Хороший работник",
                "Хороший сотрудник"
            ],
            "tr": [
                "Girişimciyim ve son derece düzenliyim",
                "İyi çalışan",
                "İyi eleman"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dovremmo affrontare il ritardo del progetto?",
            "de": "Wie sollten wir mit der Projektverzögerung umgehen?",
            "nl": "Hoe moeten we de projectvertraging aanpakken?",
            "pl": "Jak powinniśmy zareagować na opóźnienie projektu?",
            "ru": "Как нам решить проблему с задержкой проекта?",
            "tr": "Proje gecikmesini nasıl ele almalıyız?"
        },
        "opcoes": {
            "it": [
                "Dovremmo prima dare la priorità alle attività critiche",
                "Lavorare più velocemente",
                "Ritardo male"
            ],
            "de": [
                "Wir sollten zuerst kritische Aufgaben priorisieren",
                "Schneller arbeiten",
                "Verzögerung schlecht"
            ],
            "nl": [
                "We moeten eerst kritieke taken prioriteren",
                "Sneller werken",
                "Vertraging slecht"
            ],
            "pl": [
                "Powinniśmy najpierw spriorytetyzować kluczowe zadania",
                "Pracować szybciej",
                "Opóźnienie źle"
            ],
            "ru": [
                "Нам нужно сначала расставить приоритеты для критических задач",
                "Работать быстрее",
                "Задержка плохо"
            ],
            "tr": [
                "Önce kritik görevlere öncelik vermeliyiz",
                "Daha hızlı çalışmak",
                "Gecikme kötü"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci le situazioni stressanti?",
            "de": "Wie gehen Sie mit stressigen Situationen um?",
            "nl": "Hoe ga je om met stressvolle situaties?",
            "pl": "Jak radzisz sobie ze stresującymi sytuacjami?",
            "ru": "Как ты справляешься со стрессовыми ситуациями?",
            "tr": "Stresli durumlarla nasıl başa çıkarsın?"
        },
        "opcoes": {
            "it": [
                "Pratico la meditazione e organizzo le attività",
                "Mi riposo",
                "Stress va bene"
            ],
            "de": [
                "Ich praktiziere Achtsamkeit und organisiere Aufgaben",
                "Ich ruhe mich aus",
                "Stress ist ok"
            ],
            "nl": [
                "Ik beoefen mindfulness en organiseer taken",
                "Ik rust uit",
                "Stress is ok"
            ],
            "pl": [
                "Praktykuję medytację i organizuję zadania",
                "Odpoczywam",
                "Stres jest ok"
            ],
            "ru": [
                "Я практикую медитацию и организую задачи",
                "Я отдыхаю",
                "Стресс — это нормально"
            ],
            "tr": [
                "Meditasyon yapar ve görevleri düzenlerim",
                "Dinlenirim",
                "Stres sorun değil"
            ]
        }
    },
    {
        "npc": {
            "it": "Sei d'accordo con l'attuale proposta?",
            "de": "Stimmen Sie dem aktuellen Vorschlag zu?",
            "nl": "Bent u het eens met het huidige voorstel?",
            "pl": "Czy zgadzasz się z obecną propozycją?",
            "ru": "Ты согласен с текущим предложением?",
            "tr": "Mevcut teklife katılıyor musun?"
        },
        "opcoes": {
            "it": [
                "Sono d'accordo, a patto di regolare il budget",
                "Sì, sono d'accordo",
                "Proposta sì"
            ],
            "de": [
                "Ich stimme zu, vorausgesetzt, wir passen das Budget an",
                "Ja, ich stimme zu",
                "Vorschlag ja"
            ],
            "nl": [
                "Ik ga akkoord, mits we het budget aanpassen",
                "Ja, ik ga akkoord",
                "Voorstel ja"
            ],
            "pl": [
                "Zgadzam się, pod warunkiem dostosowania budżetu",
                "Tak, zgadzam się",
                "Propozycja tak"
            ],
            "ru": [
                "Я согласен, при условии, что мы скорректируем бюджет",
                "Да, согласен",
                "Предложение да"
            ],
            "tr": [
                "Bütçeyi ayarlamamız şartıyla katılamıyorum değil",
                "Evet, katılıyorum",
                "Teklif evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le previsioni di vendita per il prossimo trimestre?",
            "de": "Wie sieht die Umsatzprognose für das nächste Quartal aus?",
            "nl": "Wat is de verkoopvoorspelling voor het volgende kwartaal?",
            "pl": "Jaka jest prognoza sprzedaży na następny kwartał?",
            "ru": "Каков прогноз продаж на следующий квартал?",
            "tr": "Gelecek çeyrek için satış tahmini nedir?"
        },
        "opcoes": {
            "it": [
                "Prevediamo una crescita del dieci percento",
                "Vendite buone",
                "Aumento vendite"
            ],
            "de": [
                "Wir erwarten ein Wachstum von zehn Prozent",
                "Umsatz gut",
                "Umsatzsteigerung"
            ],
            "nl": [
                "We verwachten een groei van tien procent",
                "Verkoop goed",
                "Stijging verkoop"
            ],
            "pl": [
                "Przewidujemy dziesięcioprocentowy wzrost",
                "Sprzedaż dobra",
                "Wzrost sprzedaży"
            ],
            "ru": [
                "Мы ожидаем рост на десять процентов",
                "Продажи хорошие",
                "Рост продаж"
            ],
            "tr": [
                "Yüzde onluk bir büyüme öngörüyoruz",
                "Satışlar iyi",
                "Satış artışı"
            ]
        }
    },
    {
        "npc": {
            "it": "C'è stato un problema con il database?",
            "de": "Gab es ein Problem mit der Datenbank?",
            "nl": "Was er een probleem met de database?",
            "pl": "Czy wystąpił problem z bazą danych?",
            "ru": "Была ли проблема с базой данных?",
            "tr": "Veritabanıyla ilgili bir sorun mu vardı?"
        },
        "opcoes": {
            "it": [
                "Sì, è andato offline per un'ora",
                "Server brutto",
                "Senza server"
            ],
            "de": [
                "Ja, sie war für eine Stunde offline",
                "Server schlecht",
                "Kein Server"
            ],
            "nl": [
                "Ja, het was een uur offline",
                "Server slecht",
                "Geen server"
            ],
            "pl": [
                "Tak, była offline przez godzinę",
                "Serwer zły",
                "Brak serwera"
            ],
            "ru": [
                "Да, она отключилась на час",
                "Сервер плохой",
                "Нет сервера"
            ],
            "tr": [
                "Evet, bir saat boyunca çevrimdışı kaldı",
                "Sunucu kötü",
                "Sunucusuz"
            ]
        }
    },
    {
        "npc": {
            "it": "Potrebbe inviarmi la fattura, per favore?",
            "de": "Könnten Sie mir bitte die Rechnung schicken?",
            "nl": "Kunt u mij de factuur sturen, alstublieft?",
            "pl": "Czy mógłby pan przesłać mi fakturę, proszę?",
            "ru": "Не могли бы вы прислать мне счет, пожалуйста?",
            "tr": "Faturayı bana gönderir misiniz, lütfen?"
        },
        "opcoes": {
            "it": [
                "Certamente, gliela invierò oggi via e-mail",
                "Fattura e-mail",
                "Inviare sì"
            ],
            "de": [
                "Klar, ich werde sie Ihnen heute per E-Mail schicken",
                "Rechnung E-Mail",
                "Senden ja"
            ],
            "nl": [
                "Natuurlijk, ik mail het u vandaag nog",
                "Factuur mailen",
                "Sturen ja"
            ],
            "pl": [
                "Jasne, wyślę ją dzisiaj e-mailem",
                "Faktura e-mail",
                "Wysłać tak"
            ],
            "ru": [
                "Конечно, я отправлю ее вам по электронной почте сегодня",
                "Счет почта",
                "Отправить да"
            ],
            "tr": [
                "Elbette, bugün size e-posta ile göndereceğim",
                "Fatura e-posta",
                "Gönder evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'impatto della nuova politica?",
            "de": "Welche Auswirkungen hat die neue Richtlinie?",
            "nl": "Wat is de impact van het nieuwe beleid?",
            "pl": "Jaki jest wpływ nowej polityki?",
            "ru": "Каковы последствия новой политики?",
            "tr": "Yeni politikanın etkisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ridurrà i costi operativi",
                "Nuove tasse",
                "Cambio legge"
            ],
            "de": [
                "Es wird die Betriebskosten senken",
                "Neue Steuern",
                "Gesetzesänderung"
            ],
            "nl": [
                "Het zal de operationele kosten verlagen",
                "Nieuwe belastingen",
                "Wetswijziging"
            ],
            "pl": [
                "Zredukuje koszty operacyjne",
                "Nowe podatki",
                "Zmiana prawa"
            ],
            "ru": [
                "Это снизит операционные расходы",
                "Новые налоги",
                "Изменение закона"
            ],
            "tr": [
                "Operasyonel maliyetleri azaltacaktır",
                "Yeni vergiler",
                "Yasa değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i conflitti all'interno del team?",
            "de": "Wie gehen Sie mit Teamkonflikten um?",
            "nl": "Hoe beheer je teamconflicten?",
            "pl": "Jak zarządzasz konfliktami w zespole?",
            "ru": "Как вы разрешаете конфликты в команде?",
            "tr": "Takım çatışmalarını nasıl yönetirsiniz?"
        },
        "opcoes": {
            "it": [
                "Incoraggiando una comunicazione aperta",
                "Parlare forte",
                "Squadra litiga"
            ],
            "de": [
                "Durch Förderung offener Kommunikation",
                "Laut sprechen",
                "Teamstreit"
            ],
            "nl": [
                "Door open communicatie aan te moedigen",
                "Hard praten",
                "Teamgevecht"
            ],
            "pl": [
                "Zachęcając do otwartej komunikacji",
                "Mówić głośno",
                "Walka zespołowa"
            ],
            "ru": [
                "Поощряя открытое общение",
                "Говорить громко",
                "Ссора в команде"
            ],
            "tr": [
                "Açık iletişimi teşvik ederek",
                "Yüksek sesle konuşmak",
                "Takım kavgası"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo principale della campagna?",
            "de": "Was ist das Hauptziel der Kampagne?",
            "nl": "Wat is het hoofddoel van de campagne?",
            "pl": "Jaki jest główny cel kampanii?",
            "ru": "Какова основная цель кампании?",
            "tr": "Kampanyanın ana hedefi nedir?"
        },
        "opcoes": {
            "it": [
                "Aumentare la notorietà del marchio",
                "Diventare popolare",
                "Vendere di più"
            ],
            "de": [
                "Steigerung der Markenbekanntheit",
                "Beliebt werden",
                "Mehr verkaufen"
            ],
            "nl": [
                "De naamsbekendheid vergroten",
                "Populair worden",
                "Meer verkopen"
            ],
            "pl": [
                "Zwiększenie świadomości marki",
                "Zyskać popularność",
                "Sprzedać więcej"
            ],
            "ru": [
                "Повышение узнаваемости бренда",
                "Стать популярным",
                "Продать больше"
            ],
            "tr": [
                "Marka bilinirliğini artırmak",
                "Popüler olmak",
                "Daha çok satmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo posticipare la scadenza di una settimana?",
            "de": "Können wir die Frist um eine Woche verschieben?",
            "nl": "Kunnen we de deadline met een week uitstellen?",
            "pl": "Czy możemy przełożyć termin o tydzień?",
            "ru": "Можем ли мы перенести дедлайн на неделю?",
            "tr": "Son teslim tarihini bir hafta erteleyebilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Solo se otteniamo l'approvazione del cliente",
                "Solo se cliente",
                "Posticipare sì"
            ],
            "de": [
                "Nur wenn wir die Zustimmung des Kunden erhalten",
                "Nur wenn Kunde",
                "Verschieben ja"
            ],
            "nl": [
                "Alleen als we goedkeuring van de klant krijgen",
                "Alleen als klant",
                "Uitstellen ja"
            ],
            "pl": [
                "Tylko jeśli uzyskamy zgodę klienta",
                "Tylko klient",
                "Przełożyć tak"
            ],
            "ru": [
                "Только если получим одобрение клиента",
                "Только клиент",
                "Перенести да"
            ],
            "tr": [
                "Sadece müşteri onayı alırsak",
                "Sadece müşteri",
                "Ertelemek evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la tua opinione sul lavoro a distanza?",
            "de": "Wie ist Ihre Meinung zum Homeoffice?",
            "nl": "Wat is uw mening over thuiswerken?",
            "pl": "Jaka jest twoja opinia na temat pracy zdalnej?",
            "ru": "Каково твое мнение об удаленной работе?",
            "tr": "Uzaktan çalışma hakkındaki düşünceniz nedir?"
        },
        "opcoes": {
            "it": [
                "Aumenta la produttività e la flessibilità",
                "Lavoro casa",
                "Flessibilità buona"
            ],
            "de": [
                "Es erhöht die Produktivität und Flexibilität",
                "Heimarbeit",
                "Flexibilität gut"
            ],
            "nl": [
                "Het verhoogt de productiviteit en flexibiliteit",
                "Thuiswerken",
                "Flexibiliteit goed"
            ],
            "pl": [
                "Zwiększa produktywność i elastyczność",
                "Praca dom",
                "Elastyczność dobra"
            ],
            "ru": [
                "Это повышает производительность и гибкость",
                "Работа дома",
                "Гибкость хорошо"
            ],
            "tr": [
                "Verimliliği ve esnekliği artırır",
                "Evden çalışma",
                "Esneklik iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Come misuri il successo di un progetto?",
            "de": "Wie messen Sie den Projekterfolg?",
            "nl": "Hoe meet u het succes van een project?",
            "pl": "Jak mierzysz sukces projektu?",
            "ru": "Как вы измеряете успех проекта?",
            "tr": "Projenin başarısını nasıl ölçersiniz?"
        },
        "opcoes": {
            "it": [
                "Attraverso indicatori chiave di prestazione",
                "Controllare risultati",
                "Metrica mostra"
            ],
            "de": [
                "Durch Key Performance Indicators (KPIs)",
                "Ergebnisse prüfen",
                "Metrik zeigen"
            ],
            "nl": [
                "Via key performance indicators (KPI's)",
                "Resultaten controleren",
                "Metriek tonen"
            ],
            "pl": [
                "Poprzez kluczowe wskaźniki efektywności",
                "Sprawdzić wyniki",
                "Metryka pokazuje"
            ],
            "ru": [
                "С помощью ключевых показателей эффективности",
                "Проверить результаты",
                "Показать метрику"
            ],
            "tr": [
                "Temel performans göstergeleri (KPI) aracılığıyla",
                "Sonuçları kontrol et",
                "Metrik göster"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i rischi di questo investimento?",
            "de": "Welche Risiken birgt diese Investition?",
            "nl": "Wat zijn de risico's van deze investering?",
            "pl": "Jakie są ryzyka tej inwestycji?",
            "ru": "Каковы риски этого инвестирования?",
            "tr": "Bu yatırımın riskleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "Volatilità del mercato e alta concorrenza",
                "Perdita denaro",
                "Rischio mercato"
            ],
            "de": [
                "Marktvolatilität und starker Wettbewerb",
                "Geldverlust",
                "Risiko Markt"
            ],
            "nl": [
                "Marktvolatiliteit en hoge concurrentie",
                "Geldverlies",
                "Risico markt"
            ],
            "pl": [
                "Zmienność rynku i wysoka konkurencja",
                "Strata pieniędzy",
                "Ryzyko rynkowe"
            ],
            "ru": [
                "Волатильность рынка и высокая конкуренция",
                "Потеря денег",
                "Риск рынка"
            ],
            "tr": [
                "Piyasa dalgalanması ve yüksek rekabet",
                "Para kaybı",
                "Risk piyasa"
            ]
        }
    },
    {
        "npc": {
            "it": "Può riassumere la riunione?",
            "de": "Können Sie das Treffen zusammenfassen?",
            "nl": "Kunt u de vergadering samenvatten?",
            "pl": "Czy możesz podsumować spotkanie?",
            "ru": "Не могли бы вы кратко изложить итоги встречи?",
            "tr": "Toplantıyı özetleyebilir misiniz?"
        },
        "opcoes": {
            "it": [
                "Abbiamo deciso di lanciare il prodotto ad agosto",
                "Lancio agosto",
                "Prodotto lancio"
            ],
            "de": [
                "Wir haben beschlossen, das Produkt im August auf den Markt zu bringen",
                "Launch August",
                "Produktlaunch"
            ],
            "nl": [
                "We hebben besloten om het product in augustus te lanceren",
                "Lancering augustus",
                "Productlancering"
            ],
            "pl": [
                "Zdecydowaliśmy o wprowadzeniu produktu w sierpniu",
                "Start sierpień",
                "Produkt start"
            ],
            "ru": [
                "Мы решили запустить продукт в августе",
                "Запуск август",
                "Продукт запуск"
            ],
            "tr": [
                "Ürünü Ağustos ayında piyasaya sürmeye karar verdik",
                "Lansman Ağustos",
                "Ürün lansman"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la visione a lungo termine dell'azienda?",
            "de": "Was ist die langfristige Vision des Unternehmens?",
            "nl": "Wat is de langetermijnvisie van het bedrijf?",
            "pl": "Jaka jest długoterminowa wizja firmy?",
            "ru": "Каково долгосрочное видение компании?",
            "tr": "Şirketin uzun vadeli vizyonu nedir?"
        },
        "opcoes": {
            "it": [
                "Diventare il leader di mercato nella tecnologia",
                "Diventare grande",
                "Leader tecnologico"
            ],
            "de": [
                "Marktführer im Bereich Technologie zu werden",
                "Groß werden",
                "Technologieführer"
            ],
            "nl": [
                "De marktleider worden in technologie",
                "Groot worden",
                "Technologieleider"
            ],
            "pl": [
                "Zostać liderem rynku w branży technologicznej",
                "Zyskać wielkość",
                "Lider technologii"
            ],
            "ru": [
                "Стать лидером рынка в сфере технологий",
                "Стать большим",
                "Лидер технологий"
            ],
            "tr": [
                "Teknolojide pazar lideri olmak",
                "Büyümek",
                "Teknoloji lideri"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti mantieni aggiornato nel tuo settore?",
            "de": "Wie halten Sie sich in Ihrem Bereich auf dem Laufenden?",
            "nl": "Hoe blijf je op de hoogte in jouw vakgebied?",
            "pl": "Jak dbasz o aktualność wiedzy w swojej dziedzinie?",
            "ru": "Как ты следишь за обновлениями в своей сфере?",
            "tr": "Alanınızda kendinizi nasıl güncel tutuyorsunuz?"
        },
        "opcoes": {
            "it": [
                "Leggo articoli e partecipo a webinar",
                "Vedo notizie",
                "Studio sempre"
            ],
            "de": [
                "Ich lese Artikel und nehme an Webinaren teil",
                "Sehe Nachrichten",
                "Lerne immer"
            ],
            "nl": [
                "Ik lees artikelen en woon webinars bij",
                "Kijk nieuws",
                "Studeer altijd"
            ],
            "pl": [
                "Czytam artykuły i biorę udział w webinarach",
                "Oglądam wiadomości",
                "Studiuję zawsze"
            ],
            "ru": [
                "Я читаю статьи и посещаю вебинары",
                "Смотрю новости",
                "Всегда учусь"
            ],
            "tr": [
                "Makaleler okur ve web seminerlerine katılırım",
                "Haberleri izlerim",
                "Her zaman çalışırım"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è lo stato della negoziazione del contratto?",
            "de": "Wie ist der Status der Vertragsverhandlungen?",
            "nl": "Wat is de status van de contractonderhandeling?",
            "pl": "Jaki jest status negocjacji umowy?",
            "ru": "Каков статус переговоров по контракту?",
            "tr": "Sözleşme müzakerelerinin durumu nedir?"
        },
        "opcoes": {
            "it": [
                "Stiamo esaminando la bozza finale",
                "Controllare finale",
                "Esaminare bozza"
            ],
            "de": [
                "Wir prüfen den endgültigen Entwurf",
                "Prüfen final",
                "Entwurf prüfen"
            ],
            "nl": [
                "We bekijken de definitieve versie",
                "Controleren finale",
                "Concept bekijken"
            ],
            "pl": [
                "Przeglądamy ostateczny projekt",
                "Sprawdzić ostateczny",
                "Przegląd projektu"
            ],
            "ru": [
                "Мы рассматриваем окончательный проект",
                "Проверить проект",
                "Проверка проекта"
            ],
            "tr": [
                "Son taslağı inceliyoruz",
                "Son kontrol",
                "Taslak inceleme"
            ]
        }
    },
    {
        "npc": {
            "it": "Abbiamo risorse per questo compito?",
            "de": "Haben wir Ressourcen für diese Aufgabe?",
            "nl": "Hebben we middelen voor deze taak?",
            "pl": "Czy mamy zasoby do tego zadania?",
            "ru": "У нас есть ресурсы для этой задачи?",
            "tr": "Bu görev için kaynaklarımız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, il team è completamente attrezzato",
                "Sì, c'è team",
                "Team buono"
            ],
            "de": [
                "Ja, das Team ist bestens gerüstet",
                "Ja, gibt Team",
                "Team gut"
            ],
            "nl": [
                "Ja, het team is volledig uitgerust",
                "Ja, is team",
                "Team goed"
            ],
            "pl": [
                "Tak, zespół jest w pełni wyposażony",
                "Tak, jest zespół",
                "Zespół dobry"
            ],
            "ru": [
                "Да, команда полностью укомплектована",
                "Да, есть команда",
                "Команда готова"
            ],
            "tr": [
                "Evet, ekip tam donanımlı",
                "Evet, ekip var",
                "Ekip iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il limite di budget del progetto?",
            "de": "Wie hoch ist das Budgetlimit des Projekts?",
            "nl": "Wat is het budgetlimiet van het project?",
            "pl": "Jaki jest limit budżetu projektu?",
            "ru": "Каков лимит бюджета проекта?",
            "tr": "Proje bütçe sınırı nedir?"
        },
        "opcoes": {
            "it": [
                "Sono cinquantamila dollari",
                "Cinquantamila limite",
                "Budget cinquantamila"
            ],
            "de": [
                "Es liegt bei fünfzigtausend Dollar",
                "Fünfzigtausend Limit",
                "Budget fünfzigtausend"
            ],
            "nl": [
                "Het is vijftigduizend dollar",
                "Vijftigduizend limiet",
                "Budget vijftigduizend"
            ],
            "pl": [
                "To pięćdziesiąt tysięcy dolarów",
                "Pięćdziesiąt tysięcy limit",
                "Budżet pięćdziesiąt"
            ],
            "ru": [
                "Это пятьдесят тысяч долларов",
                "Пятьдесят тысяч лимит",
                "Бюджет пятьдесят"
            ],
            "tr": [
                "Elli bin dolar",
                "Elli bin limit",
                "Bütçe elli bin"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i reclami dei clienti?",
            "de": "Wie gehen Sie mit Kundenreklamationen um?",
            "nl": "Hoe ga je om con klachten van klanten?",
            "pl": "Jak radzisz sobie ze skargami klientów?",
            "ru": "Как вы справляетесь с жалобами клиентов?",
            "tr": "Müşteri şikayetlerini nasıl ele alırsınız?"
        },
        "opcoes": {
            "it": [
                "Ascoltando attivamente e offrendo soluzioni",
                "Ignorarli",
                "Chiedere scusa"
            ],
            "de": [
                "Durch aktives Zuhören und Anbieten von Lösungen",
                "Ignoriere sie",
                "Entschuldigen"
            ],
            "nl": [
                "Door actief te luisteren en oplossingen te bieden",
                "Negeer ze",
                "Excuses aanbieden"
            ],
            "pl": [
                "Poprzez aktywne słuchanie i oferowanie rozwiązań",
                "Ignorować je",
                "Przeprosić"
            ],
            "ru": [
                "Активно выслушивая и предлагая решения",
                "Игнорировать их",
                "Извиниться"
            ],
            "tr": [
                "Aktif olarak dinleyip çözümler sunarak",
                "Onları görmezden gelmek",
                "Özür dilemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le caratteristiche chiave del prodotto?",
            "de": "Was sind die Hauptmerkmale des Produkts?",
            "nl": "Wat zijn de belangrijkste kenmerken van het product?",
            "pl": "Jakie są kluczowe cechy produktu?",
            "ru": "Каковы ключевые особенности продукта?",
            "tr": "Ürünün temel özellikleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "È veloce, sicuro e facile da usare",
                "È economico",
                "Buon prodotto"
            ],
            "de": [
                "Es ist schnell, sicher und einfach zu bedienen",
                "Es ist billig",
                "Gutes Produkt"
            ],
            "nl": [
                "Het is snel, veilig en gemakkelijk te gebruiken",
                "Het is goedkoop",
                "Goed product"
            ],
            "pl": [
                "Jest szybki, bezpieczny i łatwy w użyciu",
                "Jest tani",
                "Dobry produkt"
            ],
            "ru": [
                "Он быстрый, безопасный и простой в использовании",
                "Он дешевый",
                "Хороший продукт"
            ],
            "tr": [
                "Hızlı, güvenli ve kullanımı kolaydır",
                "Ucuzdur",
                "İyi ürün"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo programmare una chiamata di follow-up?",
            "de": "Können wir ein Folgegespräch vereinbaren?",
            "nl": "Kunnen we een vervolggesprek plannen?",
            "pl": "Czy możemy zaplanować rozmowę kontrolną?",
            "ru": "Мы можем запланировать повторный звонок?",
            "tr": "Takip araması ayarlayabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, parliamone giovedì prossimo",
                "Sì, parlare giovedì",
                "Giovedì sì"
            ],
            "de": [
                "Ja, lassen Sie uns nächsten Donnerstag sprechen",
                "Ja, Donnerstag sprechen",
                "Donnerstag ja"
            ],
            "nl": [
                "Ja, laten we aanstaande donderdag praten",
                "Ja, donderdag praten",
                "Donderdag ja"
            ],
            "pl": [
                "Tak, porozmawiajmy w przyszły czwartek",
                "Tak, rozmawiać czwartek",
                "Czwartek tak"
            ],
            "ru": [
                "Да, давайте созвонимся в следующий четверг",
                "Да, созвонимся в четверг",
                "Четверг да"
            ],
            "tr": [
                "Evet, önümüzdeki Perşembe konuşalım",
                "Evet, Perşembe konuşalım",
                "Perşembe evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la principale fonte di reddito?",
            "de": "Was ist die Haupteinnahmequelle?",
            "nl": "Wat is de belangrijkste inkomstenbron?",
            "pl": "Co jest głównym źródłem dochodu?",
            "ru": "Каков основной источник дохода?",
            "tr": "Ana gelir kaynağı nedir?"
        },
        "opcoes": {
            "it": [
                "Abbonamenti software",
                "Vendita computer",
                "Annunci"
            ],
            "de": [
                "Software-Abonnements",
                "Computer verkaufen",
                "Anzeigen"
            ],
            "nl": [
                "Software-abonnementen",
                "Computers verkopen",
                "Advertenties"
            ],
            "pl": [
                "Subskrypcje oprogramowania",
                "Sprzedaż komputerów",
                "Reklamy"
            ],
            "ru": [
                "Подписки на программное обеспечение",
                "Продажа компьютеров",
                "Реклама"
            ],
            "tr": [
                "Yazılım abonelikleri",
                "Bilgisayar satmak",
                "Reklamlar"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dai la priorità alle tue attività quotidiane?",
            "de": "Wie priorisieren Sie Ihre täglichen Aufgaben?",
            "nl": "Hoe prioriteer je je dagelijkse taken?",
            "pl": "Jak ustalasz priorytety swoich codziennych zadań?",
            "ru": "Как ты расставляешь приоритеты в повседневных задачах?",
            "tr": "Günlük görevlerinizi nasıl önceliklendiriyorsunuz?"
        },
        "opcoes": {
            "it": [
                "In base all'urgenza e al valore aziendale",
                "In base alla data",
                "Le faccio a caso"
            ],
            "de": [
                "Nach Dringlichkeit und Geschäftswert",
                "Nach Datum",
                "Ich mache sie zufällig"
            ],
            "nl": [
                "Op basis van urgentie en bedrijfswaarde",
                "Op basis van datum",
                "Ik doe ze willekeurig"
            ],
            "pl": [
                "Według pilności i wartości biznesowej",
                "Według daty",
                "Robię je losowo"
            ],
            "ru": [
                "По срочности и бизнес-ценности",
                "По дате",
                "Делаю их случайно"
            ],
            "tr": [
                "Aciliyet ve iş değerine göre",
                "Tarihe göre",
                "Rastgele yapıyorum"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il suo feedback sulla mia presentazione?",
            "de": "Wie ist Ihr Feedback zu meiner Präsentation?",
            "nl": "Wat is uw feedback op mijn presentatie?",
            "pl": "Jaka jest twoja opinia o mojej prezentacji?",
            "ru": "Каковы ваши отзывы о моей презентации?",
            "tr": "Sunumum hakkındaki geri bildiriminiz nedir?"
        },
        "opcoes": {
            "it": [
                "È stata molto chiara e professionale",
                "È stata brutta",
                "È stata lunga"
            ],
            "de": [
                "Sie war sehr klar und professionell",
                "Sie war schlecht",
                "Sie war lang"
            ],
            "nl": [
                "Het was heel duidelijk en professioneel",
                "Het was slecht",
                "Het was lang"
            ],
            "pl": [
                "Była bardzo jasna i profesjonalna",
                "Była słaba",
                "Była długa"
            ],
            "ru": [
                "Она была очень понятной и профессиональной",
                "Она была плохой",
                "Она была длинной"
            ],
            "tr": [
                "Çok net ve profesyoneldi",
                "Kötüydü",
                "Uzundu"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo di questo aggiornamento del software?",
            "de": "Was ist das Ziel dieses Software-Updates?",
            "nl": "Wat is het doel van deze software-update?",
            "pl": "Jaki jest cel tej aktualizacji oprogramowania?",
            "ru": "Какова цель этого обновления программного обеспечения?",
            "tr": "Bu yazılım güncellemesinin amacı nedir?"
        },
        "opcoes": {
            "it": [
                "Correggere bug di sicurezza e migliorare la velocità.",
                "Aggiornare velocità",
                "Correggere bug"
            ],
            "de": [
                "Sicherheitsfehler zu beheben und die Geschwindigkeit zu verbessern.",
                "Geschwindigkeit aktualisieren",
                "Fehler beheben"
            ],
            "nl": [
                "Beveiligingsfouten oplossen en snelheid verbeteren.",
                "Snelheid bijwerken",
                "Bugs oplossen"
            ],
            "pl": [
                "Naprawa błędów bezpieczeństwa i poprawa szybkości.",
                "Aktualizacja szybkości",
                "Naprawa błędów"
            ],
            "ru": [
                "Исправление ошибок безопасности и повышение скорости.",
                "Обновление скорости",
                "Исправление ошибок"
            ],
            "tr": [
                "Güvenlik açıklarını düzeltmek ve hızı artırmak.",
                "Hız güncellemesi",
                "Hata düzeltme"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro cliente ha richiesto un rapporto dettagliato.",
            "de": "Unser Kunde hat einen detaillierten Bericht angefordert.",
            "nl": "Onze klant heeft om een gedetailleerd rapport gevraagd.",
            "pl": "Nasz klient poprosił o szczegółowy raport.",
            "ru": "Наш клиент запросил подробный отчет.",
            "tr": "Müşterimiz detaylı bir rapor talep etti."
        },
        "opcoes": {
            "it": [
                "Inizierò a scriverlo immediatamente.",
                "Scrivere rapporto",
                "Rapporto dettagliato"
            ],
            "de": [
                "Ich werde sofort damit beginnen, es zu schreiben.",
                "Bericht schreiben",
                "Detaillierter Bericht"
            ],
            "nl": [
                "Ik begin er meteen aan te schrijven.",
                "Rapport schrijven",
                "Gedetailleerd rapport"
            ],
            "pl": [
                "Zacznę go pisać natychmiast.",
                "Pisać raport",
                "Szczegółowy raport"
            ],
            "ru": [
                "Я начну писать его немедленно.",
                "Писать отчет",
                "Подробный отчет"
            ],
            "tr": [
                "Hemen yazmaya başlayacağım.",
                "Rapor yazmak",
                "Detaylı rapor"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo assumere un nuovo sviluppatore?",
            "de": "Sollten wir einen neuen Entwickler einstellen?",
            "nl": "Moeten we een nieuwe ontwikkelaar aannemen?",
            "pl": "Czy powinniśmy zatrudnić nowego programistę?",
            "ru": "Стоит ли нам нанять нового разработчика?",
            "tr": "Yeni bir yazılımcı işe almalı mıyız?"
        },
        "opcoes": {
            "it": [
                "Solo se l'ambito del progetto aumenta.",
                "Assumere sviluppatore",
                "Sviluppatore sì"
            ],
            "de": [
                "Nur wenn der Projektumfang zunimmt.",
                "Entwickler einstellen",
                "Entwickler ja"
            ],
            "nl": [
                "Alleen als de projectomvang groter wordt.",
                "Ontwikkelaar aannemen",
                "Ontwikkelaar ja"
            ],
            "pl": [
                "Tylko jeśli zwiększy się zakres projektu.",
                "Zatrudnić programistę",
                "Programista tak"
            ],
            "ru": [
                "Только если объем проекта увеличится.",
                "Нанять разработчика",
                "Разработчик да"
            ],
            "tr": [
                "Sadece proje kapsamı artarsa.",
                "Yazılımcı işe almak",
                "Yazılımcı evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo ridurre i costi operativi.",
            "de": "Wir müssen die Betriebskosten senken.",
            "nl": "We moeten de operationele kosten verlagen.",
            "pl": "Musimy zmniejszyć koszty operacyjne.",
            "ru": "Нам необходимо снизить операционные расходы.",
            "tr": "Operasyonel maliyetleri düşürmemiz gerekiyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo prima ridurre l'uso della carta.",
                "Ridurre costi",
                "Costi operativi"
            ],
            "de": [
                "Wir sollten zuerst den Papierverbrauch reduzieren.",
                "Kosten senken",
                "Betriebskosten"
            ],
            "nl": [
                "We moeten eerst het papierverbruik verminderen.",
                "Kosten verlagen",
                "Operationele kosten"
            ],
            "pl": [
                "Powinniśmy najpierw ograniczyć zużycie papieru.",
                "Zmniejszyć koszty",
                "Koszty operacyjne"
            ],
            "ru": [
                "Сначала нам следует сократить расход бумаги.",
                "Снизить расходы",
                "Операционные расходы"
            ],
            "tr": [
                "Önce kağıt kullanımını azaltmalıyız.",
                "Maliyetleri düşürmek",
                "Operasyonel maliyetler"
            ]
        }
    },
    {
        "npc": {
            "it": "Il carico del server è estremamente alto oggi.",
            "de": "Die Serverauslastung ist heute extrem hoch.",
            "nl": "De serverbelasting is extreem hoog vandaag.",
            "pl": "Obciążenie serwera jest dzisiaj niezwykle wysokie.",
            "ru": "Нагрузка на сервер сегодня чрезвычайно высока.",
            "tr": "Sunucu yükü bugün son derece yüksek."
        },
        "opcoes": {
            "it": [
                "Dobbiamo ridimensionare le nostre istanze di database.",
                "Carico server",
                "Database alto"
            ],
            "de": [
                "Wir müssen unsere Datenbankinstanzen skalieren.",
                "Serverauslastung",
                "Datenbank hoch"
            ],
            "nl": [
                "We moeten onze database-instanties schalen.",
                "Serverbelasting",
                "Database hoog"
            ],
            "pl": [
                "Musimy przeskalować nasze instancje baz danych.",
                "Obciążenie serwera",
                "Baza danych wysokie"
            ],
            "ru": [
                "Мы должны масштабировать наши инстансы базы данных.",
                "Нагрузка сервера",
                "База данных"
            ],
            "tr": [
                "Veritabanı örneklerimizi ölçeklendirmeliyiz.",
                "Sunucu yükü",
                "Veritabanı yüksek"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mercato sta reagendo positivamente al nostro lancio.",
            "de": "Der Markt reagiert positiv auf unseren Launch.",
            "nl": "De markt reageert positief op onze lancering.",
            "pl": "Rynek reaguje pozytywnie na nasz start.",
            "ru": "Рынок позитивно реагирует на наш запуск.",
            "tr": "Piyasa lansmanımıza olumlu tepki veriyor."
        },
        "opcoes": {
            "it": [
                "Questa è un'opportunità perfetta per espandersi.",
                "Reazione mercato",
                "Lancio espandere"
            ],
            "de": [
                "Dies ist eine perfekte Gelegenheit zur Expansion.",
                "Marktreaktion",
                "Launch expandieren"
            ],
            "nl": [
                "Dit is een perfecte gelegenheid om uit te breiden.",
                "Marktreactie",
                "Lancering uitbreiden"
            ],
            "pl": [
                "To doskonała okazja do ekspansji.",
                "Reakcja rynku",
                "Start ekspansja"
            ],
            "ru": [
                "Это прекрасная возможность для расширения.",
                "Реакция рынка",
                "Запуск расширить"
            ],
            "tr": [
                "Bu genişlemek için mükemmel bir fırsat.",
                "Piyasa tepkisi",
                "Lansman genişletmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo cambiare la strategia di marketing?",
            "de": "Sollten wir die Marketingstrategie ändern?",
            "nl": "Moeten we de marketingstrategie wijzigen?",
            "pl": "Czy powinniśmy zmienić strategię marketingową?",
            "ru": "Стоит ли нам изменить маркетинговую стратегию?",
            "tr": "Pazarlama stratejisini değiştirmeli miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, dobbiamo concentrarci sui social media.",
                "Mantenere marketing",
                "Cambio strategia"
            ],
            "de": [
                "Ja, wir müssen uns auf Social Media konzentrieren.",
                "Marketing ändern",
                "Strategiewechsel"
            ],
            "nl": [
                "Ja, we moeten ons op social media richten.",
                "Marketing wijzigen",
                "Strategiewijziging"
            ],
            "pl": [
                "Tak, musimy skupić się na mediach społecznościowych.",
                "Zmienić marketing",
                "Zmiana strategii"
            ],
            "ru": [
                "Да, нам нужно сосредоточиться на социальных сетях.",
                "Изменить маркетинг",
                "Смена стратегии"
            ],
            "tr": [
                "Evet, sosyal medyaya odaklanmamız gerekiyor.",
                "Pazarlama değiştirmek",
                "Strateji değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il ritorno sull'investimento di questa campagna?",
            "de": "Wie hoch ist der Return on Investment dieser Kampagne?",
            "nl": "Wat is de return on investment van deze campagne?",
            "pl": "Jaki jest zwrot z inwestycji tej kampanii?",
            "ru": "Каков возврат инвестиций этой кампании?",
            "tr": "Bu kampanyanın yatırım getirisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ha raggiunto circa il centocinquanta percento.",
                "Campagna ROI",
                "Ritorno campagna"
            ],
            "de": [
                "Er erreichte etwa einhundertfünfzig Prozent.",
                "Kampagne ROI",
                "Rückfluss Kampagne"
            ],
            "nl": [
                "Het bereikte ongeveer honderdvijftig procent.",
                "Campagne ROI",
                "Rendement campagne"
            ],
            "pl": [
                "Osiągnął około stu pięćdziesięciu procent.",
                "Kampania ROI",
                "Zwrot kampania"
            ],
            "ru": [
                "Он достиг около ста пятидесяти процентов.",
                "Кампания ROI",
                "Возврат кампания"
            ],
            "tr": [
                "Yaklaşık yüzde yüz elliye ulaştı.",
                "Kampanya ROI",
                "Getiri kampanya"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro manager vuole approvare il design del layout.",
            "de": "Unser Manager möchte das Layout-Design genehmigen.",
            "nl": "Onze manager wil het lay-outontwerp goedkeuren.",
            "pl": "Nasz kierownik chce zatwierdzić projekt układu.",
            "ru": "Наш менеджер хочет утвердить дизайн макета.",
            "tr": "Yöneticimiz düzen tasarımını onaylamak istiyor."
        },
        "opcoes": {
            "it": [
                "Invierò il prototipo finale oggi.",
                "Manager layout",
                "Design layout"
            ],
            "de": [
                "Ich werde den endgültigen Prototyp heute senden.",
                "Manager Layout",
                "Layout-Design"
            ],
            "nl": [
                "Ik stuur het definitieve prototype vandaag nog.",
                "Manager lay-out",
                "Lay-outontwerp"
            ],
            "pl": [
                "Wyślę dzisiaj ostateczny prototyp.",
                "Kierownik układ",
                "Projekt układu"
            ],
            "ru": [
                "Я отправлю окончательный прототип сегодня.",
                "Менеджер макет",
                "Дизайн макета"
            ],
            "tr": [
                "Bugün nihai prototipi göndereceğim.",
                "Yönetici düzen",
                "Düzen tasarımı"
            ]
        }
    }
];
translationsMap.forEach((item, idx) => {
    rawQuestionsIndexMap[item.npc.en] = idx;
});


// Mapeamento de índices para mesclar traduções adicionais sem mexer na lógica existente
const rawQuestionsIndexMap = {};
const translationsMap = [
    {
        "npc": {
            "it": "Ciao! Come stai?",
            "de": "Hallo! Wie geht es dir?",
            "nl": "Hallo! Hoe gaat het met je?",
            "pl": "Cześć! Jak się masz?",
            "ru": "Привет! Как дела?",
            "tr": "Merhaba! Nasılsın?"
        },
        "opcoes": {
            "it": [
                "Sto bene, grazie!",
                "Bene tu",
                "Io sono buono"
            ],
            "de": [
                "Mir geht es gut, danke!",
                "Gut dir",
                "Ich bin gut"
            ],
            "nl": [
                "Met mij gaat het goed, dank je!",
                "Goed met jou",
                "Ik ben goed"
            ],
            "pl": [
                "Dobrze, dziękuję!",
                "Dobrze ty",
                "Jestem dobry"
            ],
            "ru": [
                "Хорошо, спасибо!",
                "Хорошо ты",
                "Я хороший"
            ],
            "tr": [
                "İyiyim, teşekkürler!",
                "İyi sen",
                "Ben iyiyim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti chiami?",
            "de": "Wie heißt du?",
            "nl": "Hoe heet je?",
            "pl": "Jak się nazywasz?",
            "ru": "Как тебя зовут?",
            "tr": "Adın ne?"
        },
        "opcoes": {
            "it": [
                "Mi chiamo Giovanni",
                "Nome Giovanni",
                "Me Giovanni"
            ],
            "de": [
                "Ich heiße Hans",
                "Name Hans",
                "Mich Hans"
            ],
            "nl": [
                "Mijn naam is Jan",
                "Naam Jan",
                "Mij Jan"
            ],
            "pl": [
                "Nazywam się Jan",
                "Nazwa Jan",
                "Mnie Jan"
            ],
            "ru": [
                "Меня зовут Иван",
                "Имя Иван",
                "Я Иван"
            ],
            "tr": [
                "Benim adım Can",
                "Ad Can",
                "Bana Can"
            ]
        }
    },
    {
        "npc": {
            "it": "Di dove sei?",
            "de": "Woher kommst du?",
            "nl": "Waar kom je vandaan?",
            "pl": "Skąd pochodzisz?",
            "ru": "Откуда ты?",
            "tr": "Nerelisin?"
        },
        "opcoes": {
            "it": [
                "Vengo dal Brasile",
                "Brasile io sono",
                "Da Brasile"
            ],
            "de": [
                "Ich komme aus Brasilien",
                "Brasilien ich bin",
                "Aus Brasilien"
            ],
            "nl": [
                "Ik kom uit Brazilië",
                "Brazilië ik ben",
                "Uit Brazilië"
            ],
            "pl": [
                "Jestem z Brazylii",
                "Brazylia jestem",
                "Z Brazylii"
            ],
            "ru": [
                "Я из Бразилии",
                "Бразилия я есть",
                "Из Бразилии"
            ],
            "tr": [
                "Brezilya'lıyım",
                "Brezilya ben",
                "Brezilya'dan"
            ]
        }
    },
    {
        "npc": {
            "it": "Parli inglese?",
            "de": "Sprichst du Englisch?",
            "nl": "Spreek je Engels?",
            "pl": "Czy mówisz po angielsku?",
            "ru": "Ты говоришь по-английски?",
            "tr": "İngilizce konuşuyor musun?"
        },
        "opcoes": {
            "it": [
                "Sì, un po'",
                "Parlare sì",
                "Poco sì"
            ],
            "de": [
                "Ja, ein bisschen",
                "Sprechen ja",
                "Wenig ja"
            ],
            "nl": [
                "Ja, een beetje",
                "Spreken ja",
                "Beetje ja"
            ],
            "pl": [
                "Tak, trochę",
                "Mówić tak",
                "Trochę tak"
            ],
            "ru": [
                "Да, немного",
                "Говорить да",
                "Мало да"
            ],
            "tr": [
                "Evet, biraz",
                "Konuşmak evet",
                "Az evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Piacere di conoscerti!",
            "de": "Schön, dich kennenzulernen!",
            "nl": "Leuk je te ontmoeten!",
            "pl": "Miło cię poznać!",
            "ru": "Приятно познакомиться!",
            "tr": "Tanıştığımıza memnun oldum!"
        },
        "opcoes": {
            "it": [
                "Piacere mio",
                "Anche io",
                "Stesso incontro"
            ],
            "de": [
                "Gleichfalls",
                "Ich auch",
                "Gleiches Treffen"
            ],
            "nl": [
                "Insgelijks",
                "Ik ook",
                "Hetzelfde ontmoeten"
            ],
            "pl": [
                "Mnie również",
                "Ja też",
                "Tak samo poznać"
            ],
            "ru": [
                "Мне тоже приятно",
                "Я тоже",
                "Взаимно"
            ],
            "tr": [
                "Ben de memnun oldum",
                "Ben de",
                "Aynı şekilde"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è il bagno?",
            "de": "Wo ist die Toilette?",
            "nl": "Waar is het toilet?",
            "pl": "Gdzie jest toaleta?",
            "ru": "Где туалет?",
            "tr": "Tuvalet nerede?"
        },
        "opcoes": {
            "it": [
                "È a sinistra",
                "Bagno sinistra",
                "Vai sinistra"
            ],
            "de": [
                "Es ist links",
                "Toilette links",
                "Geh links"
            ],
            "nl": [
                "Het is links",
                "Toilet links",
                "Ga links"
            ],
            "pl": [
                "Jest po lewej stronie",
                "Toaleta lewo",
                "Idź w lewo"
            ],
            "ru": [
                "Он слева",
                "Туалет слева",
                "Иди налево"
            ],
            "tr": [
                "Solda",
                "Tuvalet sol",
                "Sola git"
            ]
        }
    },
    {
        "npc": {
            "it": "Quanto costa questo?",
            "de": "Wie viel kostet das?",
            "nl": "Hoeveel kost dit?",
            "pl": "Ile to kosztuje?",
            "ru": "Сколько это стоит?",
            "tr": "Bu ne kadar?"
        },
        "opcoes": {
            "it": [
                "Costa dieci dollari",
                "Dieci dollari costo",
                "Costo dieci"
            ],
            "de": [
                "Es kostet zehn Dollar",
                "Zehn Dollar kosten",
                "Kosten zehn"
            ],
            "nl": [
                "Het kost tien dollar",
                "Tien dollar kosten",
                "Kosten tien"
            ],
            "pl": [
                "To kosztuje dziesięć dolarów",
                "Dziesięć dolarów koszt",
                "Koszt dziesięć"
            ],
            "ru": [
                "Это стоит десять долларов",
                "Десять долларов стоить",
                "Стоить десять"
            ],
            "tr": [
                "On dolar",
                "On dolar maliyet",
                "Maliyet on"
            ]
        }
    },
    {
        "npc": {
            "it": "Arrivederci!",
            "de": "Auf Wiedersehen!",
            "nl": "Tot ziens!",
            "pl": "Do widzenia!",
            "ru": "До свидания!",
            "tr": "Hoşça kal!"
        },
        "opcoes": {
            "it": [
                "A dopo!",
                "Arrivederci sì",
                "Dopo vai"
            ],
            "de": [
                "Bis später!",
                "Auf Wiedersehen ja",
                "Später geh"
            ],
            "nl": [
                "Tot later!",
                "Tot ziens ja",
                "Later ga"
            ],
            "pl": [
                "Do zobaczenia!",
                "Do widzenia tak",
                "Później idź"
            ],
            "ru": [
                "До встречи!",
                "До свидания да",
                "Позже иди"
            ],
            "tr": [
                "Görüşmek üzere!",
                "Hoşça kal evet",
                "Sonra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Grazie!",
            "de": "Danke!",
            "nl": "Dank je!",
            "pl": "Dziękuję!",
            "ru": "Спасибо!",
            "tr": "Teşekkürler!"
        },
        "opcoes": {
            "it": [
                "Prego!",
                "Benvenuto sì",
                "Grazie vai"
            ],
            "de": [
                "Bitte!",
                "Willkommen ja",
                "Danke geh"
            ],
            "nl": [
                "Graag gedaan!",
                "Welkom ja",
                "Bedankt ga"
            ],
            "pl": [
                "Nie ma za co!",
                "Witamy tak",
                "Dzięki idź"
            ],
            "ru": [
                "Пожалуйста!",
                "Добро пожаловать да",
                "Спасибо иди"
            ],
            "tr": [
                "Rica ederim!",
                "Hoş geldiniz evet",
                "Teşekkür git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buongiorno!",
            "de": "Guten Morgen!",
            "nl": "Goedemorgen!",
            "pl": "Dzień dobry!",
            "ru": "Доброе утро!",
            "tr": "Günaydın!"
        },
        "opcoes": {
            "it": [
                "Buongiorno! Come stai?",
                "Mattina sì",
                "Buonanotte"
            ],
            "de": [
                "Guten Morgen! Wie geht es dir?",
                "Morgen ja",
                "Gute Nacht"
            ],
            "nl": [
                "Goedemorgen! Hoe gaat het?",
                "Morgen ja",
                "Goedenacht"
            ],
            "pl": [
                "Dzień dobry! Jak się masz?",
                "Rano tak",
                "Dobranoc"
            ],
            "ru": [
                "Доброе утро! Как дела?",
                "Утро да",
                "Спокойной ночи"
            ],
            "tr": [
                "Günaydın! Nasılsın?",
                "Sabah evet",
                "İyi geceler"
            ]
        }
    },
    {
        "npc": {
            "it": "Voglio un caffè.",
            "de": "Ich möchte Kaffee.",
            "nl": "Ik wil koffie.",
            "pl": "Chcę kawę.",
            "ru": "Я хочу кофе.",
            "tr": "Kahve istiyorum."
        },
        "opcoes": {
            "it": [
                "Ecco il suo caffè, signore.",
                "Caffè prendi",
                "Dai caffè"
            ],
            "de": [
                "Hier ist Ihr Kaffee, mein Herr.",
                "Kaffee nimm",
                "Gib Kaffee"
            ],
            "nl": [
                "Hier is uw koffie, meneer.",
                "Koffie neem",
                "Geef koffie"
            ],
            "pl": [
                "Oto pana kawa, proszę pana.",
                "Kawę weź",
                "Daj kawę"
            ],
            "ru": [
                "Вот ваш кофе, сэр.",
                "Кофе возьми",
                "Дай кофе"
            ],
            "tr": [
                "İşte kahveniz, efendim.",
                "Kahve al",
                "Kahve ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Questo è il treno per Londra?",
            "de": "Ist das der Zug nach London?",
            "nl": "Is dit de trein naar Londen?",
            "pl": "Czy to jest pociąg do Londynu?",
            "ru": "Это поезд в Лондон?",
            "tr": "Bu Londra treni mi?"
        },
        "opcoes": {
            "it": [
                "Sì, binario numero tre.",
                "Treno sì",
                "Londra vai"
            ],
            "de": [
                "Ja, Gleis Nummer drei.",
                "Zug ja",
                "London geht"
            ],
            "nl": [
                "Ja, spoor nummer drie.",
                "Trein ja",
                "Londen gaat"
            ],
            "pl": [
                "Tak, peron numer trzy.",
                "Pociąg tak",
                "Londyn jedzie"
            ],
            "ru": [
                "Да, платформа номер три.",
                "Поезд да",
                "Лондон идет"
            ],
            "tr": [
                "Evet, üç numaralı peron.",
                "Tren evet",
                "Londra git"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, dov'è l'uscita?",
            "de": "Entschuldigung, wo ist der Ausgang?",
            "nl": "Excuseer me, waar is de uitgang?",
            "pl": "Przepraszam, gdzie jest wyjście?",
            "ru": "Извините, где выход?",
            "tr": "Afedersiniz, çıkış nerede?"
        },
        "opcoes": {
            "it": [
                "Segua il cartello verde.",
                "Uscita vai",
                "Guarda cartello"
            ],
            "de": [
                "Folgen Sie dem grünen Schild.",
                "Ausgang geh",
                "Schau Schild"
            ],
            "nl": [
                "Volg het groene bord.",
                "Uitgang ga",
                "Kijk bord"
            ],
            "pl": [
                "Proszę iść za zielonym znakiem.",
                "Wyjście idź",
                "Patrz znak"
            ],
            "ru": [
                "Идите по зеленому указателю.",
                "Выход иди",
                "Смотри знак"
            ],
            "tr": [
                "Yeşil tabelayı takip edin.",
                "Çıkış git",
                "Tabelaya bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vorrei dell'acqua.",
            "de": "Ich hätte gerne etwas Wasser.",
            "nl": "Ik zou graag wat water willen.",
            "pl": "Chciałbym wodę.",
            "ru": "Я бы хотел воды.",
            "tr": "Su rica ediyorum."
        },
        "opcoes": {
            "it": [
                "Acqua gassata o naturale?",
                "Acqua prendi",
                "Dai acqua"
            ],
            "de": [
                "Mit Kohlensäure oder stilles Wasser?",
                "Wasser nimm",
                "Gib Wasser"
            ],
            "nl": [
                "Bruisend of plat water?",
                "Water neem",
                "Geef water"
            ],
            "pl": [
                "Gazowana czy niegazowana?",
                "Wodę weź",
                "Daj wodę"
            ],
            "ru": [
                "Газированную или без газа?",
                "Воду возьми",
                "Дай воду"
            ],
            "tr": [
                "Gazlı mı gazsız mı?",
                "Su al",
                "Su ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha un tavolo per due?",
            "de": "Haben Sie einen Tisch für zwei?",
            "nl": "Heeft u een tafel voor twee?",
            "pl": "Czy ma pan stolik dla dwojga?",
            "ru": "У вас есть столик на двоих?",
            "tr": "İki kişilik masanız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, mi segua per favore.",
                "Tavolo sì",
                "Due posti"
            ],
            "de": [
                "Ja, folgen Sie mir bitte.",
                "Tisch ja",
                "Zwei Sitze"
            ],
            "nl": [
                "Ja, volgt u mij aanzien.",
                "Tafel ja",
                "Twee stoelen"
            ],
            "pl": [
                "Tak, proszę za mną.",
                "Stolik tak",
                "Dwa miejsca"
            ],
            "ru": [
                "Да, идите за мной, пожалуйста.",
                "Столик да",
                "Два места"
            ],
            "tr": [
                "Evet, lütfen beni takip edin.",
                "Masa evet",
                "İki kişilik"
            ]
        }
    },
    {
        "npc": {
            "it": "A che ora apre il negozio?",
            "de": "Wann öffnet das Geschäft?",
            "nl": "Hoe laat gaat de winkel open?",
            "pl": "O której godzinie otwierają sklep?",
            "ru": "Во сколько открывается магазин?",
            "tr": "Mağaza saat kaçta açılıyor?"
        },
        "opcoes": {
            "it": [
                "Apre alle nove del mattino.",
                "Apre nove",
                "Negozio apre"
            ],
            "de": [
                "Es öffnet um neun Uhr morgens.",
                "Öffnet neun",
                "Geschäft öffnet"
            ],
            "nl": [
                "Het gaat om negen uur 's ochtends open.",
                "Open negen",
                "Winkel open"
            ],
            "pl": [
                "Otwierają o dziewiątej rano.",
                "Otwiera dziewięć",
                "Sklep otwiera"
            ],
            "ru": [
                "Он открывается в девять утра.",
                "Открыто девять",
                "Магазин открывается"
            ],
            "tr": [
                "Sabah dokuzda açılıyor.",
                "Açık dokuz",
                "Mağaza açık"
            ]
        }
    },
    {
        "npc": {
            "it": "Sono molto stanco oggi.",
            "de": "Ich bin heute sehr müde.",
            "nl": "Ik ben erg moe vandaag.",
            "pl": "Jestem dzisiaj bardzo zmęczony.",
            "ru": "Я очень устал сегодня.",
            "tr": "Bugün çok yorgunum."
        },
        "opcoes": {
            "it": [
                "Dovresti andare a dormire.",
                "Dormire sì",
                "Stanco vai"
            ],
            "de": [
                "Du solltest schlafen gehen.",
                "Schlafen ja",
                "Müde geh"
            ],
            "nl": [
                "Je zou moeten gaan slapen.",
                "Slapen ja",
                "Moe ga"
            ],
            "pl": [
                "Powinieneś iść spać.",
                "Spie tak",
                "Zmęczony idź"
            ],
            "ru": [
                "Тебе нужно пойти поспать.",
                "Спать да",
                "Устал иди"
            ],
            "tr": [
                "Uyumalısın.",
                "Uyu evet",
                "Yorgun git"
            ]
        }
    },
    {
        "npc": {
            "it": "Buon compleanno, Maria!",
            "de": "Herzlichen Glückwunsch zum Geburtstag, Maria!",
            "nl": "Gefeliciteerd met je verjaardag, Maria!",
            "pl": "Wszystkiego najlepszego z okazji urodzin, Mario!",
            "ru": "С днем рождения, Мария!",
            "tr": "Doğum günün kutlu olsun, Maria!"
        },
        "opcoes": {
            "it": [
                "Grazie mille, Giovanni!",
                "Compleanno grazie",
                "Felice giorno"
            ],
            "de": [
                "Vielen Dank, Hans!",
                "Geburtstag danke",
                "Glücklicher Tag"
            ],
            "nl": [
                "Hartelijk dank, Jan!",
                "Verjaardag bedankt",
                "Fijne dag"
            ],
            "pl": [
                "Bardzo dziękuję, Janie!",
                "Urodziny dziękuję",
                "Szczęśliwy dzień"
            ],
            "ru": [
                "Большое спасибо, Иван!",
                "Рождения спасибо",
                "Счастливый день"
            ],
            "tr": [
                "Çok teşekkürler, Can!",
                "Doğum günü teşekkür",
                "Mutlu gün"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la chiave dell'hotel?",
            "de": "Wo ist der Hotelschlüssel?",
            "nl": "Waar is de hotelsleutel?",
            "pl": "Gdzie jest klucz do hotelu?",
            "ru": "Где ключ от отеля?",
            "tr": "Otel anahtarı nerede?"
        },
        "opcoes": {
            "it": [
                "È dentro la tua tasca.",
                "Chiave tasca",
                "Chiave sì"
            ],
            "de": [
                "Er ist in deiner Tasche.",
                "Schlüssel Tasche",
                "Schlüssel ja"
            ],
            "nl": [
                "Het zit in je zak.",
                "Sleutel zak",
                "Sleutel ja"
            ],
            "pl": [
                "Jest w twojej kieszeni.",
                "Klucz kieszeń",
                "Klucz tak"
            ],
            "ru": [
                "Он у тебя в кармане.",
                "Ключ карман",
                "Ключ да"
            ],
            "tr": [
                "Cebinin içinde.",
                "Anahtar cep",
                "Anahtar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Non ti capisco.",
            "de": "Ich verstehe dich nicht.",
            "nl": "Ik begrijp je niet.",
            "pl": "Nie rozumiem cię.",
            "ru": "Я тебя не понимаю.",
            "tr": "Seni anlamıyorum."
        },
        "opcoes": {
            "it": [
                "Parlerò più lentamente.",
                "Capire no",
                "Parlare sì"
            ],
            "de": [
                "Ich werde langsamer sprechen.",
                "Verstehen nein",
                "Sprechen ja"
            ],
            "nl": [
                "Ik zal langzamer spreken.",
                "Begrijpen nee",
                "Spreken ja"
            ],
            "pl": [
                "Będę mówić wolniej.",
                "Rozumieć nie",
                "Mówić tak"
            ],
            "ru": [
                "Я буду говорить медленнее.",
                "Понимать нет",
                "Говорить да"
            ],
            "tr": [
                "Daha yavaş konuşacağım.",
                "Anlamak hayır",
                "Konuşmak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Il museo è aperto la domenica?",
            "de": "Ist das Museum am Sonntag geöffnet?",
            "nl": "Is het museum open op zondag?",
            "pl": "Czy muzeum jest otwarte w niedzielę?",
            "ru": "Музей открыт в воскресенье?",
            "tr": "Müze Pazar günleri açık mı?"
        },
        "opcoes": {
            "it": [
                "Sì, dalle dieci alle sei.",
                "Museo aperto",
                "Domenica sì"
            ],
            "de": [
                "Ja, von zehn bis sechs.",
                "Museum geöffnet",
                "Sonntag ja"
            ],
            "nl": [
                "Ja, van tien tot zes.",
                "Museum open",
                "Zondag ja"
            ],
            "pl": [
                "Tak, od dziesiątej do szóstej.",
                "Muzeum otwarte",
                "Niedziela tak"
            ],
            "ru": [
                "Да, с десяти до шести.",
                "Музей открыт",
                "Воскресенье да"
            ],
            "tr": [
                "Evet, ondan altıya kadar.",
                "Müze açık",
                "Pazar evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Come posso pagare questo biglietto?",
            "de": "Wie kann ich dieses Ticket bezahlen?",
            "nl": "Hoe kan ik dit ticket betalen?",
            "pl": "Jak mogę zapłacić za ten bilet?",
            "ru": "Как я могу оплатить этот билет?",
            "tr": "Bu bileti nasıl ödeyebilirim?"
        },
        "opcoes": {
            "it": [
                "Puoi pagare in contanti.",
                "Pagare contanti",
                "Biglietto pagare"
            ],
            "de": [
                "Sie können in bar bezahlen.",
                "Bezahlen bar",
                "Ticket bezahlen"
            ],
            "nl": [
                "U kunt contant betalen.",
                "Betalen contant",
                "Ticket betalen"
            ],
            "pl": [
                "Możesz zapłacić gotówką.",
                "Zapłacić gotówką",
                "Bilet zapłacić"
            ],
            "ru": [
                "Вы можете оплатить наличными.",
                "Оплатить наличными",
                "Билет оплатить"
            ],
            "tr": [
                "Nakit ödeyebilirsiniz.",
                "Ödemek nakit",
                "Bilet ödemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho bisogno di un medico, per favore.",
            "de": "Ich brauche bitte einen Arzt.",
            "nl": "Ik heb een dokter nodig, alstublieft.",
            "pl": "Potrzebuję lekarza, proszę.",
            "ru": "Мне нужен врач, пожалуйста.",
            "tr": "Bir doktora ihtiyacım var, lütfen."
        },
        "opcoes": {
            "it": [
                "Chiamerò l'ospedale.",
                "Medico chiamare",
                "Ospedale medico"
            ],
            "de": [
                "Ich werde das Krankenhaus anrufen.",
                "Arzt rufen",
                "Krankenhaus Arzt"
            ],
            "nl": [
                "Ik zal het ziekenhuis bellen.",
                "Dokter bellen",
                "Ziekenhuis dokter"
            ],
            "pl": [
                "Zadzwonię do szpitala.",
                "Lekarz zadzwonić",
                "Szpital lekarz"
            ],
            "ru": [
                "Я позвоню в больницу.",
                "Врач позвонить",
                "Больница врач"
            ],
            "tr": [
                "Hastaneyi arayacağım.",
                "Doktor aramak",
                "Hastane doktor"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo colore preferito?",
            "de": "Was ist deine Lieblingsfarbe?",
            "nl": "Wat is je favoriete kleur?",
            "pl": "Jaki jest twój ulubiony kolor?",
            "ru": "Какой твой любимый цвет?",
            "tr": "En sevdiğin renk ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace molto l'azzurro.",
                "Colore azzurro",
                "Gusto colore"
            ],
            "de": [
                "Ich mag Blau sehr.",
                "Farbe Blau",
                "Mag Farbe"
            ],
            "nl": [
                "Ik hou erg van blauw.",
                "Kleur blauw",
                "Hou kleur"
            ],
            "pl": [
                "Bardzo lubię niebieski.",
                "Kolor niebieski",
                "Lubię kolor"
            ],
            "ru": [
                "Мне очень нравится синий.",
                "Цвет синий",
                "Нравится цвет"
            ],
            "tr": [
                "Maviyi çok severim.",
                "Renk mavi",
                "Severim renk"
            ]
        }
    },
    {
        "npc": {
            "it": "Dov'è la biblioteca?",
            "de": "Wo ist die Bibliothek?",
            "nl": "Waar is de bibliotheek?",
            "pl": "Gdzie jest biblioteka?",
            "ru": "Где библиотека?",
            "tr": "Kütüphane nerede?"
        },
        "opcoes": {
            "it": [
                "È vicino alla scuola.",
                "Biblioteca scuola",
                "Vai scuola"
            ],
            "de": [
                "Sie ist neben der Schule.",
                "Bibliothek Schule",
                "Geh Schule"
            ],
            "nl": [
                "Het is naast de school.",
                "Bibliotheek school",
                "Ga school"
            ],
            "pl": [
                "Jest obok szkoły.",
                "Biblioteka szkoła",
                "Idź szkoła"
            ],
            "ru": [
                "Она рядом со школой.",
                "Библиотека школа",
                "Иди школа"
            ],
            "tr": [
                "Okulun yanında.",
                "Kütüphane okul",
                "Okula git"
            ]
        }
    },
    {
        "npc": {
            "it": "Mi sono perso in città.",
            "de": "Ich habe mich in der Stadt verlaufen.",
            "nl": "Ik ben verdwaald in de stad.",
            "pl": "Zgubiłem się w mieście.",
            "ru": "Я потерялся в городе.",
            "tr": "Şehirde kayboldum."
        },
        "opcoes": {
            "it": [
                "Mi mostri la sua mappa, per favore.",
                "Perso città",
                "Mappa guarda"
            ],
            "de": [
                "Zeigen Sie mir bitte Ihre Karte.",
                "Verlaufen Stadt",
                "Karte zeigen"
            ],
            "nl": [
                "Laat me je kaart zien, alstublieft.",
                "Verdwaald stad",
                "Kaart kijken"
            ],
            "pl": [
                "Proszę pokazać mi swoją mapę.",
                "Zgubiłem miasto",
                "Mapa patrz"
            ],
            "ru": [
                "Покажите мне вашу карту, пожалуйста.",
                "Потерялся город",
                "Карта смотри"
            ],
            "tr": [
                "Lütfen bana haritanızı gösterin.",
                "Kayıp şehir",
                "Harita bak"
            ]
        }
    },
    {
        "npc": {
            "it": "Vuoi giocare a tennis?",
            "de": "Möchtest du Tennis spielen?",
            "nl": "Wil je tennissen?",
            "pl": "Czy chcesz grać w tenisa?",
            "ru": "Хочешь поиграть в теннис?",
            "tr": "Tenis oynamak ister misin?"
        },
        "opcoes": {
            "it": [
                "Sì, ho due racchette.",
                "Tennis giocare",
                "Racchette sì"
            ],
            "de": [
                "Ja, ich habe zwei Schläger.",
                "Tennis spielen",
                "Schläger ja"
            ],
            "nl": [
                "Ja, ik heb twee rackets.",
                "Tennis spelen",
                "Rackets ja"
            ],
            "pl": [
                "Tak, mam dwie rakiety.",
                "Tenis grać",
                "Rakiety tak"
            ],
            "ru": [
                "Да, у меня есть две ракетки.",
                "Теннис играть",
                "Ракетки да"
            ],
            "tr": [
                "Evet, iki raketim var.",
                "Tenis oynamak",
                "Raket evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Questa zuppa è troppo calda.",
            "de": "Diese Suppe ist zu heiß.",
            "nl": "Deze soep is te heet.",
            "pl": "Ta zupa jest za gorąca.",
            "ru": "Этот суп слишком горячий.",
            "tr": "Bu çorba çok sıcak."
        },
        "opcoes": {
            "it": [
                "Aspetta qualche minuto.",
                "Zuppa calda",
                "Calda sì"
            ],
            "de": [
                "Warte ein paar Minuten.",
                "Suppe heiß",
                "Heiß ja"
            ],
            "nl": [
                "Wacht een paar minuten.",
                "Soep heet",
                "Heet ja"
            ],
            "pl": [
                "Poczekaj kilka minut.",
                "Zupa gorąca",
                "Gorąca tak"
            ],
            "ru": [
                "Подожди несколько минут.",
                "Суп горячий",
                "Горячий да"
            ],
            "tr": [
                "Birkaç dakika bekle.",
                "Çorba sıcak",
                "Sıcak evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Posso sedermi qui?",
            "de": "Kann ich mich hierher setzen?",
            "nl": "Mag ik hier zitten?",
            "pl": "Czy mogę tu usiąść?",
            "ru": "Можно мне присесть здесь?",
            "tr": "Buraya oturabilir miyim?"
        },
        "opcoes": {
            "it": [
                "Sì, questo posto è libero.",
                "Sedersi sì",
                "Posto libero"
            ],
            "de": [
                "Ja, dieser Platz ist frei.",
                "Setzen ja",
                "Platz frei"
            ],
            "nl": [
                "Ja, deze plek is vrij.",
                "Zitten ja",
                "Plek vrij"
            ],
            "pl": [
                "Tak, to miejsce jest wolne.",
                "Usiąść tak",
                "Miejsce wolne"
            ],
            "ru": [
                "Да, это место свободно.",
                "Присесть да",
                "Место свободно"
            ],
            "tr": [
                "Evet, bu koltuk boş.",
                "Oturmak evet",
                "Koltuk boş"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai messo il latte?",
            "de": "Wo hast du die Milch hingetan?",
            "nl": "Waar heb je de melk gelaten?",
            "pl": "Gdzie położyłeś mleko?",
            "ru": "Куда ты положил молоко?",
            "tr": "Sütü nereye koydun?"
        },
        "opcoes": {
            "it": [
                "È dentro il frigorifero.",
                "Latte frigo",
                "Frigo latte"
            ],
            "de": [
                "Sie ist im Kühlschrank.",
                "Milch Kühlschrank",
                "Kühlschrank Milch"
            ],
            "nl": [
                "Het staat in de koelkast.",
                "Melk koelkast",
                "Koelkast melk"
            ],
            "pl": [
                "Jest w lodówce.",
                "Mleko lodówka",
                "Lodówka mleko"
            ],
            "ru": [
                "Оно в холодильнике.",
                "Молоко холодильник",
                "Холодильник молоко"
            ],
            "tr": [
                "Buzdolabının içinde.",
                "Süt buzdolabı",
                "Buzdolabı süt"
            ]
        }
    },
    {
        "npc": {
            "it": "Desidera ordinare ora?",
            "de": "Möchten Sie jetzt bestellen?",
            "nl": "Wilt u nu bestellen?",
            "pl": "Czy chciałby pan teraz zamówić?",
            "ru": "Желаете сделать заказ сейчас?",
            "tr": "Şimdi sipariş vermek ister misiniz?"
        },
        "opcoes": {
            "it": [
                "Sì, prenderò la bistecca, per favore",
                "Sì, voglio bistecca",
                "Dai bistecca"
            ],
            "de": [
                "Ja, ich nehme das Steak, bitte",
                "Ja, will Steak",
                "Gib Steak"
            ],
            "nl": [
                "Ja, ik neem de biefstuk, alstublieft",
                "Ja, wil biefstuk",
                "Geef biefstuk"
            ],
            "pl": [
                "Tak, poproszę stek",
                "Tak, chcę stek",
                "Daj stek"
            ],
            "ru": [
                "Да, мне стейк, пожалуйста",
                "Да, хочу стейк",
                "Дай стейк"
            ],
            "tr": [
                "Evet, biftek alayım lütfen",
                "Evet, biftek istiyorum",
                "Biftek ver"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il tuo hobby preferito?",
            "de": "Was ist dein Lieblingshobby?",
            "nl": "Wat is je favoriete hobby?",
            "pl": "Jakie jest twoje ulubione hobby?",
            "ru": "Какое твое любимое хобби?",
            "tr": "En sevdiğin hobin ne?"
        },
        "opcoes": {
            "it": [
                "Mi piace leggere libri",
                "Mi piace leggere",
                "Leggere è hobby"
            ],
            "de": [
                "Ich lese gerne Bücher",
                "Ich mag lesen",
                "Lesen ist Hobby"
            ],
            "nl": [
                "Ik hou van boeken lezen",
                "Ik vind lezen leuk",
                "Lezen is hobby"
            ],
            "pl": [
                "Lubię czytać książki",
                "Lubię czytać",
                "Czytanie to hobby"
            ],
            "ru": [
                "Мне нравится читать книги",
                "Я люблю читать",
                "Чтение — мое хобби"
            ],
            "tr": [
                "Kitap okumaktan hoşlanırım",
                "Okumayı severim",
                "Okumak hobim"
            ]
        }
    },
    {
        "npc": {
            "it": "Come arrivo alla stazione?",
            "de": "Wie komme ich zum Bahnhof?",
            "nl": "Hoe kom ik bij het station?",
            "pl": "Jak dojadę do stacji?",
            "ru": "Как мне добраться до станции?",
            "tr": "İstasyona nasıl giderim?"
        },
        "opcoes": {
            "it": [
                "Vada sempre dritto e giri a destra",
                "Dritto e destra",
                "Vai stazione destra"
            ],
            "de": [
                "Gehen Sie geradeaus und biegen Sie rechts ab",
                "Geradeaus rechts",
                "Geh Bahnhof rechts"
            ],
            "nl": [
                "Ga rechtdoor en sla rechtsaf",
                "Rechtdoor rechts",
                "Ga station rechts"
            ],
            "pl": [
                "Proszę iść prosto i skręcić w prawo",
                "Prosto i w prawo",
                "Idź stacja prawo"
            ],
            "ru": [
                "Идите прямо и поверните направо",
                "Прямо и направо",
                "Иди станция право"
            ],
            "tr": [
                "Düz gidin ve sağa dönün",
                "Düz ve sağ",
                "İstasyon sağa git"
            ]
        }
    },
    {
        "npc": {
            "it": "Com'è il tempo oggi?",
            "de": "Wie ist das Wetter heute?",
            "nl": "Hoe is het weer vandaag?",
            "pl": "Jaka jest dzisiaj pogoda?",
            "ru": "Какая сегодня погода?",
            "tr": "Bugün hava nasıl?"
        },
        "opcoes": {
            "it": [
                "È soleggiato e caldo",
                "Sole e caldo",
                "Soleggiato oggi è"
            ],
            "de": [
                "Es ist sonnig und warm",
                "Sonne und warm",
                "Sonnig heute ist"
            ],
            "nl": [
                "Het is zonnig en warm",
                "Zon en warm",
                "Zonnig vandaag is"
            ],
            "pl": [
                "Jest słonecznie i ciepło",
                "Słońce i ciepło",
                "Słonecznie dzisiaj jest"
            ],
            "ru": [
                "Солнечно и тепло",
                "Солнце и тепло",
                "Солнечно сегодня"
            ],
            "tr": [
                "Güneşli ve sıcak",
                "Güneş ve sıcak",
                "Güneşli bugün"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai finito i compiti?",
            "de": "Hast du deine Hausaufgaben fertig?",
            "nl": "Heb je je huiswerk af?",
            "pl": "Czy odrobiłeś lekcje?",
            "ru": "Ты сделал домашнее задание?",
            "tr": "Ödevini bitirdin mi?"
        },
        "opcoes": {
            "it": [
                "Non ancora, ho bisogno di più tempo",
                "No, serve tempo",
                "Sì, ho finito"
            ],
            "de": [
                "Noch nicht, ich brauche mehr Zeit",
                "Nein, brauche Zeit",
                "Ja, ich bin fertig"
            ],
            "nl": [
                "Nog niet, ik heb meer tijd nodig",
                "Nee, heb tijd nodig",
                "Ja, ik ben klaar"
            ],
            "pl": [
                "Jeszcze nie, potrzebuję więcej czasu",
                "Nie, potrzebuję czasu",
                "Tak, skończyłem"
            ],
            "ru": [
                "Еще нет, мне нужно больше времени",
                "Нет, нужно время",
                "Да, я закончил"
            ],
            "tr": [
                "Henüz değil, daha fazla zamana ihtiyacım var",
                "Hayır, zaman lazım",
                "Evet, bitirdim"
            ]
        }
    },
    {
        "npc": {
            "it": "Cosa hai fatto lo scorso fine settimana?",
            "de": "Was hast du letztes Wochenende gemacht?",
            "nl": "Wat heb je afgelopen weekend gedaan?",
            "pl": "Co robiłeś w zeszły weekend?",
            "ru": "Что ты делал в прошлые выходные?",
            "tr": "Geçen hafta sonu ne yaptın?"
        },
        "opcoes": {
            "it": [
                "Sono andato al cinema con amici",
                "Io vado al cinema",
                "Andato cinema"
            ],
            "de": [
                "Ich bin mit Freunden ins Kino gegangen",
                "Ich gehe ins Kino",
                "Kino gegangen"
            ],
            "nl": [
                "Ik ben met vrienden naar de bioscoop gegaan",
                "Ik ga naar bioscoop",
                "Bioscoop gegaan"
            ],
            "pl": [
                "Poszedłem do kina z przyjaciółmi",
                "Idę do kina",
                "Poszedłem kino"
            ],
            "ru": [
                "Я ходил в кино с друзьями",
                "Я иду в кино",
                "Ходил кино"
            ],
            "tr": [
                "Arkadaşlarımla sinemaya gittim",
                "Sinemaya gidiyorum",
                "Gittim sinema"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai animali domestici?",
            "de": "Hast du Haustiere?",
            "nl": "Heb je huisdieren?",
            "pl": "Czy masz zwierzęta?",
            "ru": "У тебя есть домашние животные?",
            "tr": "Evcil hayvanın var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, ho un cane e un gatto",
                "Sì, due animali cane",
                "Sì, io ho"
            ],
            "de": [
                "Ja, ich habe einen Hund und eine Katze",
                "Ja, zwei Haustiere Hund",
                "Ja, ich habe"
            ],
            "nl": [
                "Ja, ik heb een hond en een kat",
                "Ja, twee huisdieren hond",
                "Ja, ik heb"
            ],
            "pl": [
                "Tak, mam psa i kota",
                "Tak, dwa zwierzęta pies",
                "Tak, mam"
            ],
            "ru": [
                "Да, у меня есть собака и кошка",
                "Да, два питомца собака",
                "Да, у меня есть"
            ],
            "tr": [
                "Evet, bir köpeğim ve bir kedim var",
                "Evet, iki evcil köpek",
                "Evet, sahibim"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo incontrarci domani alle 10?",
            "de": "Können wir uns morgen um 10 Uhr treffen?",
            "nl": "Kunnen we morgen om 10 uur afspreken?",
            "pl": "Czy możemy się spotkać jutro o 10 rano?",
            "ru": "Мы можем встретиться завтра в 10 утра?",
            "tr": "Yarın sabah 10'da buluşabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, per me va bene",
                "Sì, domani 10",
                "Domani sì"
            ],
            "de": [
                "Ja, das passt mir",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "nl": [
                "Ja, dat komt mij uit",
                "Ja, morgen 10",
                "Morgen ja"
            ],
            "pl": [
                "Tak, to mi odpowiada",
                "Tak, jutro 10",
                "Jutro tak"
            ],
            "ru": [
                "Да, мне это подходит",
                "Да, завтра в 10",
                "Завтра да"
            ],
            "tr": [
                "Evet, bana uyar",
                "Evet, yarın 10",
                "Yarın evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Perché stai imparando una nuova lingua?",
            "de": "Warum lernst du eine neue Sprache?",
            "nl": "Waarom leer je een nieuwe taal?",
            "pl": "Dlaczego uczysz się nowego języka?",
            "ru": "Почему ты учишь новый язык?",
            "tr": "Neden yeni bir dil öğreniyorsun?"
        },
        "opcoes": {
            "it": [
                "Perché voglio viaggiare l'anno prossimo.",
                "Perché lingua",
                "Per viaggiare imparo"
            ],
            "de": [
                "Weil ich nächstes Jahr reisen möchte.",
                "Warum Sprache",
                "Für Reisen lernen"
            ],
            "nl": [
                "Omdat ik volgend jaar wil reizen.",
                "Waarom taal",
                "Voor reizen leren"
            ],
            "pl": [
                "Ponieważ chcę podróżować w przyszłym roku.",
                "Dlaczego język",
                "Do podróży uczyć"
            ],
            "ru": [
                "Потому что я хочу путешествовать в следующем году.",
                "Почему язык",
                "Для путешествий учить"
            ],
            "tr": [
                "Çünkü gelecek yıl seyahat etmek istiyorum.",
                "Neden dil",
                "Seyahat için öğrenmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che ci siamo persi in questa foresta.",
            "de": "Ich glaube, wir haben uns in diesem Wald verlaufen.",
            "nl": "Ik denk dat we verdwaald zijn in dit bos.",
            "pl": "Myślę, że zgubiliśmy się w tym lesie.",
            "ru": "Мне кажется, мы потерялись в этом лесу.",
            "tr": "Sanırım bu ormanda kaybolduk."
        },
        "opcoes": {
            "it": [
                "Non ti preoccupare, ho una bussola qui.",
                "Perso foresta",
                "No preoccuparsi"
            ],
            "de": [
                "Keine Sorge, ich habe hier einen Kompass.",
                "Verlaufen Wald",
                "Keine Sorge"
            ],
            "nl": [
                "Maak je geen zorgen, ik heb hier een kompas.",
                "Verdwaald bos",
                "Geen zorgen"
            ],
            "pl": [
                "Nie martw się, mam tu kompas.",
                "Zgubieni las",
                "Bez obaw"
            ],
            "ru": [
                "Не волнуйся, у меня есть компас.",
                "Потерялись лес",
                "Не волнуйся"
            ],
            "tr": [
                "Merak etme, yanımda pusula var.",
                "Kayıp orman",
                "Endişelenme"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi piani per l'estate?",
            "de": "Was sind deine Pläne für den Sommer?",
            "nl": "Wat zijn je plannen voor de zomer?",
            "pl": "Jakie masz plany na lato?",
            "ru": "Какие у тебя планы на лето?",
            "tr": "Yaz için planların neler?"
        },
        "opcoes": {
            "it": [
                "Visiterò la Germania.",
                "Piani estate",
                "Germania andare"
            ],
            "de": [
                "Ich werde Deutschland besuchen.",
                "Sommerpläne",
                "Deutschland gehen"
            ],
            "nl": [
                "Ik ga Duitsland bezoeken.",
                "Zomerplannen",
                "Duitsland gaan"
            ],
            "pl": [
                "Zamierzam odwiedzić Niemcy.",
                "Plany lato",
                "Niemcy jechać"
            ],
            "ru": [
                "Я собираюсь посетить Германию.",
                "Планы лето",
                "Германия ехать"
            ],
            "tr": [
                "Almanya'yı ziyaret edeceğim.",
                "Yaz planları",
                "Almanya gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dove hai comprato quella bella camicia?",
            "de": "Wo hast du dieses schöne Hemd gekauft?",
            "nl": "Waar heb je dat mooie overhemd gekocht?",
            "pl": "Gdzie kupiłeś tę ładną koszulę?",
            "ru": "Где ты купил эту красивую рубашку?",
            "tr": "O güzel gömleği nereden aldın?"
        },
        "opcoes": {
            "it": [
                "L'ho comprata nel nuovo centro commerciale locale.",
                "Camicia centro",
                "Comprato camicia"
            ],
            "de": [
                "Ich habe es im neuen Einkaufszentrum gekauft.",
                "Hemd Zentrum",
                "Gekauft Hemd"
            ],
            "nl": [
                "Ik heb het in het nieuwe winkelcentrum gekocht.",
                "Overhemd centrum",
                "Gekocht overhemd"
            ],
            "pl": [
                "Kupiłem ją w nowym centrum handlowym.",
                "Koszula centrum",
                "Kupić koszula"
            ],
            "ru": [
                "Я купил ее в новом местном торговом центре.",
                "Рубашка центр",
                "Купил рубашку"
            ],
            "tr": [
                "Yeni yerel alışveriş merkezinden aldım.",
                "Gömlek AVM",
                "Satın aldım gömlek"
            ]
        }
    },
    {
        "npc": {
            "it": "A mia sorella piace nuotare nel lago.",
            "de": "Meine Schwester schwimmt gerne im See.",
            "nl": "Mijn zus zwemt graag in het meer.",
            "pl": "Moja siostra lubi pływać w jeziorze.",
            "ru": "Моей сестре нравится плавать в озере.",
            "tr": "Kız kardeşim gölde yüzmeyi sever."
        },
        "opcoes": {
            "it": [
                "L'acqua è abbastanza pulita per farlo?",
                "Sorella nuotare",
                "Lago buono"
            ],
            "de": [
                "Ist das Wasser sauber genug dafür?",
                "Schwester schwimmen",
                "See gut"
            ],
            "nl": [
                "Is het water daar schoon genoeg voor?",
                "Zus zwemmen",
                "Meer goed"
            ],
            "pl": [
                "Czy woda jest wystarczająco czysta do tego?",
                "Siostra pływać",
                "Jezioro dobre"
            ],
            "ru": [
                "Вода там достаточно чистая для этого?",
                "Сестра плавать",
                "Озеро хорошо"
            ],
            "tr": [
                "Su bunun için yeterince temiz mi?",
                "Kız kardeş yüzmek",
                "Göl iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Potresti consigliarmi un buon libro da leggere?",
            "de": "Könntest du mir ein gutes Buch zum Lesen empfehlen?",
            "nl": "Zou je me een goed boek kunnen aanraden?",
            "pl": "Czy mógłbyś polecić dobrą książkę do przeczytania?",
            "ru": "Не мог бы ты порекомендовать хорошую книгу?",
            "tr": "Okumak için iyi bir kitap önerebilir misin?"
        },
        "opcoes": {
            "it": [
                "Dovresti leggere il classico romanzo di fantascienza.",
                "Libro consigliare",
                "Leggere romanzo"
            ],
            "de": [
                "Du solltest den klassischen Science-Fiction-Roman lesen.",
                "Buch empfehlen",
                "Roman lesen"
            ],
            "nl": [
                "Je zou de klassieke sciencefictionroman moeten lezen.",
                "Boek aanraden",
                "Roman lezen"
            ],
            "pl": [
                "Powinieneś przeczytać klasyczną powieść sci-fi.",
                "Książka polecić",
                "Czytać powieść"
            ],
            "ru": [
                "Тебе стоит прочитать классический научно-фантастический роман.",
                "Книгу порекомендовать",
                "Читать роман"
            ],
            "tr": [
                "Klasik bilim kurgu romanını okumalısın.",
                "Kitap önermek",
                "Roman okumak"
            ]
        }
    },
    {
        "npc": {
            "it": "Ha piovuto molto per tutto il pomeriggio.",
            "de": "Es hat den ganzen Nachmittag stark geregnet.",
            "nl": "Het heeft de hele middag hard geregend.",
            "pl": "Padało intensywnie przez całe popołudnie.",
            "ru": "Весь день шел сильный дождь.",
            "tr": "Bütün öğleden sonra yoğun yağmur yağdı."
        },
        "opcoes": {
            "it": [
                "Sì, restiamo dentro a guardare la TV.",
                "Piove molto",
                "Pioggia fuori"
            ],
            "de": [
                "Ja, lass uns drinnen bleiben und fernsehen.",
                "Stark regnen",
                "Regen draußen"
            ],
            "nl": [
                "Ja, laten we binnen blijven en tv kijken.",
                "Hard regenen",
                "Regen buiten"
            ],
            "pl": [
                "Tak, zostańmy w domu i pooglądajmy telewizję.",
                "Pada mocno",
                "Deszcz na zewnątrz"
            ],
            "ru": [
                "Да, давай останемся дома и посмотрим телевизор.",
                "Сильный дождь",
                "Дождь на улице"
            ],
            "tr": [
                "Evet, içeride kalıp televizyon izleyelim.",
                "Yoğun yağmur",
                "Dışarıda yağmur"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai programmi per stasera?",
            "de": "Hast du Pläne für heute Abend?",
            "nl": "Heb je plannen voor vanavond?",
            "pl": "Czy masz plany na dzisiejszy wieczór?",
            "ru": "У тебя есть планы на вечер?",
            "tr": "Bu gece için planın var mı?"
        },
        "opcoes": {
            "it": [
                "Cucinerò una zuppa speciale.",
                "Piani stasera",
                "Stasera cucinare"
            ],
            "de": [
                "Ich werde eine besondere Suppe kochen.",
                "Pläne Abend",
                "Abend kochen"
            ],
            "nl": [
                "Ik ga een speciale soep koken.",
                "Plannen avond",
                "Vanavond koken"
            ],
            "pl": [
                "Zamierzam ugotować specjalną zupę.",
                "Plany wieczór",
                "Wieczór gotować"
            ],
            "ru": [
                "Я собираюсь приготовить особый суп.",
                "Планы вечер",
                "Вечер готовить"
            ],
            "tr": [
                "Özel bir çorba pişireceğim.",
                "Gece planları",
                "Gece pişirmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Da quanto tempo lavori in questa panetteria?",
            "de": "Wie lange arbeitest du schon in dieser Bäckerei?",
            "nl": "Hoe lang werk je al in deze bakkerij?",
            "pl": "Jak długo pracujesz w tej piekarni?",
            "ru": "Как долго ты работаешь в этой пекарне?",
            "tr": "Bu fırında ne kadar süredir çalışıyorsun?"
        },
        "opcoes": {
            "it": [
                "Lavoro qui da tre anni.",
                "Panetteria lavoro",
                "Lavorato qui"
            ],
            "de": [
                "Ich arbeite hier seit drei Jahren.",
                "Bäckerei Arbeit",
                "Hier gearbeitet"
            ],
            "nl": [
                "Ik werk hier al drie jaar.",
                "Bakkerij werk",
                "Hier gewerkt"
            ],
            "pl": [
                "Pracuję tu od trzech lat.",
                "Piekarnia praca",
                "Pracuję tutaj"
            ],
            "ru": [
                "Я работаю здесь три года.",
                "Пекарня работа",
                "Работал здесь"
            ],
            "tr": [
                "Üç yıldır burada çalışıyorum.",
                "Fırın iş",
                "Burada çalışmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Quale strumento ti piacerebbe suonare?",
            "de": "Welches Instrument würdest du gerne spielen?",
            "nl": "Welk instrument zou je willen spelen?",
            "pl": "Na jakim instrumencie chciałbyś grać?",
            "ru": "На каком инструменте ты хотел бы играть?",
            "tr": "Hangi enstrümanı çalmak istersin?"
        },
        "opcoes": {
            "it": [
                "Mi piacerebbe molto imparare il pianoforte.",
                "Strumento suonare",
                "Piano suonare"
            ],
            "de": [
                "Ich würde gerne Klavier lernen.",
                "Instrument spielen",
                "Klavier spielen"
            ],
            "nl": [
                "Ik zou graag piano willen leren spelen.",
                "Instrument spelen",
                "Piano spelen"
            ],
            "pl": [
                "Bardzo chciałbym nauczyć się grać na pianinie.",
                "Instrument grać",
                "Pianino grać"
            ],
            "ru": [
                "Я бы очень хотел научиться играть на пианино.",
                "Инструмент играть",
                "Пианино играть"
            ],
            "tr": [
                "Piyano öğrenmeyi çok isterim.",
                "Enstrüman çalmak",
                "Piyano çalmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Il treno parte tra dieci minuti.",
            "de": "Der Zug fährt in zehn Minuten ab.",
            "nl": "De trein vertrekt over tien minuten.",
            "pl": "Pociąg odjeżdża za dziesięć minut.",
            "ru": "Поезд отправляется через десять минут.",
            "tr": "Tren on dakika içinde kalkıyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo correre al binario adesso.",
                "Treno parte",
                "Correre binario"
            ],
            "de": [
                "Wir sollten jetzt zum Bahnsteig rennen.",
                "Zug fährt",
                "Rennen Bahnsteig"
            ],
            "nl": [
                "We moeten nu naar het spoor rennen.",
                "Trein vertrekt",
                "Rennen spoor"
            ],
            "pl": [
                "Powinniśmy teraz biec na peron.",
                "Pociąg odjeżdża",
                "Biec peron"
            ],
            "ru": [
                "Нам нужно бежать на платформу прямо сейчас.",
                "Поезд уходит",
                "Бежать платформа"
            ],
            "tr": [
                "Hemen perona koşmalıyız.",
                "Tren kalkıyor",
                "Koşmak peron"
            ]
        }
    },
    {
        "npc": {
            "it": "Scusi, questo autobus va in centro?",
            "de": "Entschuldigung, fährt dieser Bus ins Stadtzentrum?",
            "nl": "Excuseer me, gaat deze bus naar het centrum?",
            "pl": "Przepraszam, czy ten autobus jedzie do centrum?",
            "ru": "Извините, этот автобус идет в центр?",
            "tr": "Afedersiniz, bu otobüs merkeze gidiyor mu?"
        },
        "opcoes": {
            "it": [
                "Sì, si ferma alla piazza principale.",
                "Autobus centro",
                "Centro andare"
            ],
            "de": [
                "Ja, er hält am Hauptplatz.",
                "Bus Zentrum",
                "Zentrum gehen"
            ],
            "nl": [
                "Ja, hij stopt op het hoofdplein.",
                "Bus centrum",
                "Centrum gaan"
            ],
            "pl": [
                "Tak, zatrzymuje się na głównym placu.",
                "Autobus centrum",
                "Centrum jechać"
            ],
            "ru": [
                "Да, он останавливается на главной площади.",
                "Автобус центр",
                "Центр идти"
            ],
            "tr": [
                "Evet, ana meydanda duruyor.",
                "Otobüs merkez",
                "Merkez gitmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho comprato un nuovo biglietto per lo spettacolo.",
            "de": "Ich habe ein neues Ticket für die Show gekauft.",
            "nl": "Ik heb een nieuw ticket voor de show gekocht.",
            "pl": "Kupiłem nowy bilet na koncert.",
            "ru": "Я купил новый билет на шоу.",
            "tr": "Gösteri için yeni bir bilet aldım."
        },
        "opcoes": {
            "it": [
                "Era molto caro?",
                "Biglietto spettacolo",
                "Comprato biglietto"
            ],
            "de": [
                "War es sehr teuer?",
                "Ticket Show",
                "Gekauft Ticket"
            ],
            "nl": [
                "Was het erg duur?",
                "Ticket show",
                "Gekocht ticket"
            ],
            "pl": [
                "Czy był bardzo drogi?",
                "Bilet koncert",
                "Kupić bilet"
            ],
            "ru": [
                "Он был очень дорогим?",
                "Билет шоу",
                "Купил билет"
            ],
            "tr": [
                "Çok pahalı mıydı?",
                "Bilet gösteri",
                "Satın aldım bilet"
            ]
        }
    },
    {
        "npc": {
            "it": "I miei genitori vivono in una città tranquilla.",
            "de": "Meine Eltern leben in einer ruhigen Stadt.",
            "nl": "Mijn ouders wonen in een rustige stad.",
            "pl": "Moi rodzice mieszkają w spokojnym mieście.",
            "ru": "Мои родители живут в тихом городе.",
            "tr": "Ailem sakin bir şehirde yaşıyor."
        },
        "opcoes": {
            "it": [
                "Li visiti spesso?",
                "Genitori città",
                "Tranquilla città"
            ],
            "de": [
                "Besuchst du sie oft?",
                "Eltern Stadt",
                "Ruhig Stadt"
            ],
            "nl": [
                "Bezoek je ze vaak?",
                "Ouders stad",
                "Rustig stad"
            ],
            "pl": [
                "Odwiedzasz ich często?",
                "Rodzice miasto",
                "Spokojne miasto"
            ],
            "ru": [
                "Ты часто их навещаешь?",
                "Родители город",
                "Тихий город"
            ],
            "tr": [
                "Onları sık sık ziyaret eder misin?",
                "Aile şehir",
                "Sakin şehir"
            ]
        }
    },
    {
        "npc": {
            "it": "Penso che questa torta sia deliziosa.",
            "de": "Ich finde diesen Kuchen köstlich.",
            "nl": "Ik vind deze taart heerlijk.",
            "pl": "Myślę, że to ciasto jest pyszne.",
            "ru": "Мне кажется, этот пирог восхитителен.",
            "tr": "Bence bu kek lezzetli."
        },
        "opcoes": {
            "it": [
                "Potresti condividere la ricetta con me?",
                "Torta deliziosa",
                "Gusto torta"
            ],
            "de": [
                "Könntest du das Rezept mit mir teilen?",
                "Kuchen köstlich",
                "Mag Kuchen"
            ],
            "nl": [
                "Zou je het recept met me kunnen delen?",
                "Taart heerlijk",
                "Hou taart"
            ],
            "pl": [
                "Czy mógłbyś podzielić się ze mną przepisem?",
                "Ciasto pyszne",
                "Lubię ciasto"
            ],
            "ru": [
                "Не мог бы ты поделиться со мной рецептом?",
                "Пирог восхитительный",
                "Нравится пирог"
            ],
            "tr": [
                "Tarifini benimle paylaşabilir misin?",
                "Kek lezzetli",
                "Severim kek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo comprare delle verdure per cena.",
            "de": "Wir müssen Gemüse für das Abendessen kaufen.",
            "nl": "We moeten groenten kopen voor het avondeten.",
            "pl": "Musimy kupić warzywa na kolację.",
            "ru": "Нам нужно купить овощей на ужин.",
            "tr": "Akşam yemeği için sebze almamız gerekiyor."
        },
        "opcoes": {
            "it": [
                "Andiamo al mercato locale.",
                "Comprare verdure",
                "Cena verdure"
            ],
            "de": [
                "Lass uns zum lokalen Markt gehen.",
                "Gemüse kaufen",
                "Abendessen Gemüse"
            ],
            "nl": [
                "Laten we naar de lokale markt gaan.",
                "Groenten kopen",
                "Avondeten groenten"
            ],
            "pl": [
                "Chodźmy na lokalny rynek.",
                "Kupić warzywa",
                "Kolacja warzywa"
            ],
            "ru": [
                "Давай сходим на местный рынок.",
                "Купить овощи",
                "Ужин овощи"
            ],
            "tr": [
                "Yerel pazara gidelim.",
                "Sebze almak",
                "Yemek sebze"
            ]
        }
    },
    {
        "npc": {
            "it": "Hai mai visitato un museo in Italia?",
            "de": "Hast du jemals ein Museum in Italien besucht?",
            "nl": "Heb je ooit een museum in Italië bezocht?",
            "pl": "Czy kiedykolwiek odwiedziłeś muzeum we Włoszech?",
            "ru": "Ты когда-нибудь был в музее в Италии?",
            "tr": "Hiç İtalya'da müze ziyaret ettin mi?"
        },
        "opcoes": {
            "it": [
                "Sì, l'arte lì è incredibile.",
                "Museo Italia",
                "Arte Italia"
            ],
            "de": [
                "Ja, die Kunst dort ist unglaublich.",
                "Museum Italien",
                "Kunst Italien"
            ],
            "nl": [
                "Ja, de kunst daar is ongelooflijk.",
                "Museum Italië",
                "Kunst Italië"
            ],
            "pl": [
                "Tak, tamtejsza sztuka jest niesamowita.",
                "Muzeum Włochy",
                "Sztuka Włochy"
            ],
            "ru": [
                "Да, искусство там невероятное.",
                "Музей Италия",
                "Искусство Италия"
            ],
            "tr": [
                "Evet, oradaki sanat inanılmaz.",
                "Müze İtalya",
                "Sanat İtalya"
            ]
        }
    },
    {
        "npc": {
            "it": "Ho perso il mio ombrello nella metropolitana.",
            "de": "Ich habe meinen Regenschirm in der U-Bahn verloren.",
            "nl": "Ik ben mijn paraplu verloren in de metro.",
            "pl": "Zgubiłem parasol w metrze.",
            "ru": "Я потерял свой зонт в метро.",
            "tr": "Şemsiyemi metroda kaybettim."
        },
        "opcoes": {
            "it": [
                "Dovresti controllare l'ufficio oggetti smarriti.",
                "Ombrello perso",
                "Metro perso"
            ],
            "de": [
                "Du solltest im Fundbüro nachsehen.",
                "Schirm verloren",
                "U-Bahn verloren"
            ],
            "nl": [
                "Je zou bij het bureau gevonden voorwerpen moeten kijken.",
                "Paraplu verloren",
                "Metro verloren"
            ],
            "pl": [
                "Powinieneś sprawdzić biuro rzeczy znalezionych.",
                "Parasol zgubiony",
                "Metro zgubiony"
            ],
            "ru": [
                "Тебе стоит проверить бюро находок.",
                "Зонт потерял",
                "Метро потерял"
            ],
            "tr": [
                "Kayıp eşya bürosunu kontrol etmelisin.",
                "Şemsiye kayıp",
                "Metro kayıp"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mio medico mi ha consigliato di camminare di più.",
            "de": "Mein Arzt hat mir geraten, mehr zu gehen.",
            "nl": "Mijn dokter heeft me geadviseerd om meer te lopen.",
            "pl": "Mój lekarz doradził mi, abym więcej spacerował.",
            "ru": "Мой врач посоветовал мне больше ходить пешком.",
            "tr": "Doktorum daha fazla yürümemi tavsiye etti."
        },
        "opcoes": {
            "it": [
                "Migliorerà la tua salute.",
                "Medico camminare",
                "Camminare di più"
            ],
            "de": [
                "Es wird deine Gesundheit verbessern.",
                "Arzt gehen",
                "Mehr gehen"
            ],
            "nl": [
                "Het zal je gezondheid verbeteren.",
                "Dokter lopen",
                "Meer lopen"
            ],
            "pl": [
                "To poprawi twoje zdrowie.",
                "Lekarz spacerować",
                "Więcej spaceru"
            ],
            "ru": [
                "Это улучшит твое здоровье.",
                "Врач ходить",
                "Больше ходить"
            ],
            "tr": [
                "Sağlığını düzeltecektir.",
                "Doktor yürümek",
                "Daha fazla yürümek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i tuoi punti di forza professionali?",
            "de": "Was sind Ihre beruflichen Stärken?",
            "nl": "Wat zijn uw professionele sterke punten?",
            "pl": "Jakie są pana mocne strony zawodowe?",
            "ru": "Каковы ваши профессиональные сильные стороны?",
            "tr": "Mesleki güçlü yönleriniz nelerdir?"
        },
        "opcoes": {
            "it": [
                "Sono proattivo e altamente organizzato",
                "Lavoro bene",
                "Buon impiegato"
            ],
            "de": [
                "Ich bin proaktiv und sehr gut organisiert",
                "Guter Arbeiter",
                "Guter Angestellter"
            ],
            "nl": [
                "Ik ben proactief en zeer georganiseerd",
                "Goede werker",
                "Goede werknemer"
            ],
            "pl": [
                "Jestem proaktywny i bardzo dobrze zorganizowany",
                "Dobry pracownik",
                "Dobry pracownik"
            ],
            "ru": [
                "Я проактивен и очень организован",
                "Хороший работник",
                "Хороший сотрудник"
            ],
            "tr": [
                "Girişimciyim ve son derece düzenliyim",
                "İyi çalışan",
                "İyi eleman"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dovremmo affrontare il ritardo del progetto?",
            "de": "Wie sollten wir mit der Projektverzögerung umgehen?",
            "nl": "Hoe moeten we de projectvertraging aanpakken?",
            "pl": "Jak powinniśmy zareagować na opóźnienie projektu?",
            "ru": "Как нам решить проблему с задержкой проекта?",
            "tr": "Proje gecikmesini nasıl ele almalıyız?"
        },
        "opcoes": {
            "it": [
                "Dovremmo prima dare la priorità alle attività critiche",
                "Lavorare più velocemente",
                "Ritardo male"
            ],
            "de": [
                "Wir sollten zuerst kritische Aufgaben priorisieren",
                "Schneller arbeiten",
                "Verzögerung schlecht"
            ],
            "nl": [
                "We moeten eerst kritieke taken prioriteren",
                "Sneller werken",
                "Vertraging slecht"
            ],
            "pl": [
                "Powinniśmy najpierw spriorytetyzować kluczowe zadania",
                "Pracować szybciej",
                "Opóźnienie źle"
            ],
            "ru": [
                "Нам нужно сначала расставить приоритеты для критических задач",
                "Работать быстрее",
                "Задержка плохо"
            ],
            "tr": [
                "Önce kritik görevlere öncelik vermeliyiz",
                "Daha hızlı çalışmak",
                "Gecikme kötü"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci le situazioni stressanti?",
            "de": "Wie gehen Sie mit stressigen Situationen um?",
            "nl": "Hoe ga je om met stressvolle situaties?",
            "pl": "Jak radzisz sobie ze stresującymi sytuacjami?",
            "ru": "Как ты справляешься со стрессовыми ситуациями?",
            "tr": "Stresli durumlarla nasıl başa çıkarsın?"
        },
        "opcoes": {
            "it": [
                "Pratico la meditazione e organizzo le attività",
                "Mi riposo",
                "Stress va bene"
            ],
            "de": [
                "Ich praktiziere Achtsamkeit und organisiere Aufgaben",
                "Ich ruhe mich aus",
                "Stress ist ok"
            ],
            "nl": [
                "Ik beoefen mindfulness en organiseer taken",
                "Ik rust uit",
                "Stress is ok"
            ],
            "pl": [
                "Praktykuję medytację i organizuję zadania",
                "Odpoczywam",
                "Stres jest ok"
            ],
            "ru": [
                "Я практикую медитацию и организую задачи",
                "Я отдыхаю",
                "Стресс — это нормально"
            ],
            "tr": [
                "Meditasyon yapar ve görevleri düzenlerim",
                "Dinlenirim",
                "Stres sorun değil"
            ]
        }
    },
    {
        "npc": {
            "it": "Sei d'accordo con l'attuale proposta?",
            "de": "Stimmen Sie dem aktuellen Vorschlag zu?",
            "nl": "Bent u het eens met het huidige voorstel?",
            "pl": "Czy zgadzasz się z obecną propozycją?",
            "ru": "Ты согласен с текущим предложением?",
            "tr": "Mevcut teklife katılıyor musun?"
        },
        "opcoes": {
            "it": [
                "Sono d'accordo, a patto di regolare il budget",
                "Sì, sono d'accordo",
                "Proposta sì"
            ],
            "de": [
                "Ich stimme zu, vorausgesetzt, wir passen das Budget an",
                "Ja, ich stimme zu",
                "Vorschlag ja"
            ],
            "nl": [
                "Ik ga akkoord, mits we het budget aanpassen",
                "Ja, ik ga akkoord",
                "Voorstel ja"
            ],
            "pl": [
                "Zgadzam się, pod warunkiem dostosowania budżetu",
                "Tak, zgadzam się",
                "Propozycja tak"
            ],
            "ru": [
                "Я согласен, при условии, что мы скорректируем бюджет",
                "Да, согласен",
                "Предложение да"
            ],
            "tr": [
                "Bütçeyi ayarlamamız şartıyla katılamıyorum değil",
                "Evet, katılıyorum",
                "Teklif evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le previsioni di vendita per il prossimo trimestre?",
            "de": "Wie sieht die Umsatzprognose für das nächste Quartal aus?",
            "nl": "Wat is de verkoopvoorspelling voor het volgende kwartaal?",
            "pl": "Jaka jest prognoza sprzedaży na następny kwartał?",
            "ru": "Каков прогноз продаж на следующий квартал?",
            "tr": "Gelecek çeyrek için satış tahmini nedir?"
        },
        "opcoes": {
            "it": [
                "Prevediamo una crescita del dieci percento",
                "Vendite buone",
                "Aumento vendite"
            ],
            "de": [
                "Wir erwarten ein Wachstum von zehn Prozent",
                "Umsatz gut",
                "Umsatzsteigerung"
            ],
            "nl": [
                "We verwachten een groei van tien procent",
                "Verkoop goed",
                "Stijging verkoop"
            ],
            "pl": [
                "Przewidujemy dziesięcioprocentowy wzrost",
                "Sprzedaż dobra",
                "Wzrost sprzedaży"
            ],
            "ru": [
                "Мы ожидаем рост на десять процентов",
                "Продажи хорошие",
                "Рост продаж"
            ],
            "tr": [
                "Yüzde onluk bir büyüme öngörüyoruz",
                "Satışlar iyi",
                "Satış artışı"
            ]
        }
    },
    {
        "npc": {
            "it": "C'è stato un problema con il database?",
            "de": "Gab es ein Problem mit der Datenbank?",
            "nl": "Was er een probleem met de database?",
            "pl": "Czy wystąpił problem z bazą danych?",
            "ru": "Была ли проблема с базой данных?",
            "tr": "Veritabanıyla ilgili bir sorun mu vardı?"
        },
        "opcoes": {
            "it": [
                "Sì, è andato offline per un'ora",
                "Server brutto",
                "Senza server"
            ],
            "de": [
                "Ja, sie war für eine Stunde offline",
                "Server schlecht",
                "Kein Server"
            ],
            "nl": [
                "Ja, het was een uur offline",
                "Server slecht",
                "Geen server"
            ],
            "pl": [
                "Tak, była offline przez godzinę",
                "Serwer zły",
                "Brak serwera"
            ],
            "ru": [
                "Да, она отключилась на час",
                "Сервер плохой",
                "Нет сервера"
            ],
            "tr": [
                "Evet, bir saat boyunca çevrimdışı kaldı",
                "Sunucu kötü",
                "Sunucusuz"
            ]
        }
    },
    {
        "npc": {
            "it": "Potrebbe inviarmi la fattura, per favore?",
            "de": "Könnten Sie mir bitte die Rechnung schicken?",
            "nl": "Kunt u mij de factuur sturen, alstublieft?",
            "pl": "Czy mógłby pan przesłać mi fakturę, proszę?",
            "ru": "Не могли бы вы прислать мне счет, пожалуйста?",
            "tr": "Faturayı bana gönderir misiniz, lütfen?"
        },
        "opcoes": {
            "it": [
                "Certamente, gliela invierò oggi via e-mail",
                "Fattura e-mail",
                "Inviare sì"
            ],
            "de": [
                "Klar, ich werde sie Ihnen heute per E-Mail schicken",
                "Rechnung E-Mail",
                "Senden ja"
            ],
            "nl": [
                "Natuurlijk, ik mail het u vandaag nog",
                "Factuur mailen",
                "Sturen ja"
            ],
            "pl": [
                "Jasne, wyślę ją dzisiaj e-mailem",
                "Faktura e-mail",
                "Wysłać tak"
            ],
            "ru": [
                "Конечно, я отправлю ее вам по электронной почте сегодня",
                "Счет почта",
                "Отправить да"
            ],
            "tr": [
                "Elbette, bugün size e-posta ile göndereceğim",
                "Fatura e-posta",
                "Gönder evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'impatto della nuova politica?",
            "de": "Welche Auswirkungen hat die neue Richtlinie?",
            "nl": "Wat is de impact van het nieuwe beleid?",
            "pl": "Jaki jest wpływ nowej polityki?",
            "ru": "Каковы последствия новой политики?",
            "tr": "Yeni politikanın etkisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ridurrà i costi operativi",
                "Nuove tasse",
                "Cambio legge"
            ],
            "de": [
                "Es wird die Betriebskosten senken",
                "Neue Steuern",
                "Gesetzesänderung"
            ],
            "nl": [
                "Het zal de operationele kosten verlagen",
                "Nieuwe belastingen",
                "Wetswijziging"
            ],
            "pl": [
                "Zredukuje koszty operacyjne",
                "Nowe podatki",
                "Zmiana prawa"
            ],
            "ru": [
                "Это снизит операционные расходы",
                "Новые налоги",
                "Изменение закона"
            ],
            "tr": [
                "Operasyonel maliyetleri azaltacaktır",
                "Yeni vergiler",
                "Yasa değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i conflitti all'interno del team?",
            "de": "Wie gehen Sie mit Teamkonflikten um?",
            "nl": "Hoe beheer je teamconflicten?",
            "pl": "Jak zarządzasz konfliktami w zespole?",
            "ru": "Как вы разрешаете конфликты в команде?",
            "tr": "Takım çatışmalarını nasıl yönetirsiniz?"
        },
        "opcoes": {
            "it": [
                "Incoraggiando una comunicazione aperta",
                "Parlare forte",
                "Squadra litiga"
            ],
            "de": [
                "Durch Förderung offener Kommunikation",
                "Laut sprechen",
                "Teamstreit"
            ],
            "nl": [
                "Door open communicatie aan te moedigen",
                "Hard praten",
                "Teamgevecht"
            ],
            "pl": [
                "Zachęcając do otwartej komunikacji",
                "Mówić głośno",
                "Walka zespołowa"
            ],
            "ru": [
                "Поощряя открытое общение",
                "Говорить громко",
                "Ссора в команде"
            ],
            "tr": [
                "Açık iletişimi teşvik ederek",
                "Yüksek sesle konuşmak",
                "Takım kavgası"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo principale della campagna?",
            "de": "Was ist das Hauptziel der Kampagne?",
            "nl": "Wat is het hoofddoel van de campagne?",
            "pl": "Jaki jest główny cel kampanii?",
            "ru": "Какова основная цель кампании?",
            "tr": "Kampanyanın ana hedefi nedir?"
        },
        "opcoes": {
            "it": [
                "Aumentare la notorietà del marchio",
                "Diventare popolare",
                "Vendere di più"
            ],
            "de": [
                "Steigerung der Markenbekanntheit",
                "Beliebt werden",
                "Mehr verkaufen"
            ],
            "nl": [
                "De naamsbekendheid vergroten",
                "Populair worden",
                "Meer verkopen"
            ],
            "pl": [
                "Zwiększenie świadomości marki",
                "Zyskać popularność",
                "Sprzedać więcej"
            ],
            "ru": [
                "Повышение узнаваемости бренда",
                "Стать популярным",
                "Продать больше"
            ],
            "tr": [
                "Marka bilinirliğini artırmak",
                "Popüler olmak",
                "Daha çok satmak"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo posticipare la scadenza di una settimana?",
            "de": "Können wir die Frist um eine Woche verschieben?",
            "nl": "Kunnen we de deadline met een week uitstellen?",
            "pl": "Czy możemy przełożyć termin o tydzień?",
            "ru": "Можем ли мы перенести дедлайн на неделю?",
            "tr": "Son teslim tarihini bir hafta erteleyebilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Solo se otteniamo l'approvazione del cliente",
                "Solo se cliente",
                "Posticipare sì"
            ],
            "de": [
                "Nur wenn wir die Zustimmung des Kunden erhalten",
                "Nur wenn Kunde",
                "Verschieben ja"
            ],
            "nl": [
                "Alleen als we goedkeuring van de klant krijgen",
                "Alleen als klant",
                "Uitstellen ja"
            ],
            "pl": [
                "Tylko jeśli uzyskamy zgodę klienta",
                "Tylko klient",
                "Przełożyć tak"
            ],
            "ru": [
                "Только если получим одобрение клиента",
                "Только клиент",
                "Перенести да"
            ],
            "tr": [
                "Sadece müşteri onayı alırsak",
                "Sadece müşteri",
                "Ertelemek evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la tua opinione sul lavoro a distanza?",
            "de": "Wie ist Ihre Meinung zum Homeoffice?",
            "nl": "Wat is uw mening over thuiswerken?",
            "pl": "Jaka jest twoja opinia na temat pracy zdalnej?",
            "ru": "Каково твое мнение об удаленной работе?",
            "tr": "Uzaktan çalışma hakkındaki düşünceniz nedir?"
        },
        "opcoes": {
            "it": [
                "Aumenta la produttività e la flessibilità",
                "Lavoro casa",
                "Flessibilità buona"
            ],
            "de": [
                "Es erhöht die Produktivität und Flexibilität",
                "Heimarbeit",
                "Flexibilität gut"
            ],
            "nl": [
                "Het verhoogt de productiviteit en flexibiliteit",
                "Thuiswerken",
                "Flexibiliteit goed"
            ],
            "pl": [
                "Zwiększa produktywność i elastyczność",
                "Praca dom",
                "Elastyczność dobra"
            ],
            "ru": [
                "Это повышает производительность и гибкость",
                "Работа дома",
                "Гибкость хорошо"
            ],
            "tr": [
                "Verimliliği ve esnekliği artırır",
                "Evden çalışma",
                "Esneklik iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Come misuri il successo di un progetto?",
            "de": "Wie messen Sie den Projekterfolg?",
            "nl": "Hoe meet u het succes van een project?",
            "pl": "Jak mierzysz sukces projektu?",
            "ru": "Как вы измеряете успех проекта?",
            "tr": "Projenin başarısını nasıl ölçersiniz?"
        },
        "opcoes": {
            "it": [
                "Attraverso indicatori chiave di prestazione",
                "Controllare risultati",
                "Metrica mostra"
            ],
            "de": [
                "Durch Key Performance Indicators (KPIs)",
                "Ergebnisse prüfen",
                "Metrik zeigen"
            ],
            "nl": [
                "Via key performance indicators (KPI's)",
                "Resultaten controleren",
                "Metriek tonen"
            ],
            "pl": [
                "Poprzez kluczowe wskaźniki efektywności",
                "Sprawdzić wyniki",
                "Metryka pokazuje"
            ],
            "ru": [
                "С помощью ключевых показателей эффективности",
                "Проверить результаты",
                "Показать метрику"
            ],
            "tr": [
                "Temel performans göstergeleri (KPI) aracılığıyla",
                "Sonuçları kontrol et",
                "Metrik göster"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono i rischi di questo investimento?",
            "de": "Welche Risiken birgt diese Investition?",
            "nl": "Wat zijn de risico's van deze investering?",
            "pl": "Jakie są ryzyka tej inwestycji?",
            "ru": "Каковы риски этого инвестирования?",
            "tr": "Bu yatırımın riskleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "Volatilità del mercato e alta concorrenza",
                "Perdita denaro",
                "Rischio mercato"
            ],
            "de": [
                "Marktvolatilität und starker Wettbewerb",
                "Geldverlust",
                "Risiko Markt"
            ],
            "nl": [
                "Marktvolatiliteit en hoge concurrentie",
                "Geldverlies",
                "Risico markt"
            ],
            "pl": [
                "Zmienność rynku i wysoka konkurencja",
                "Strata pieniędzy",
                "Ryzyko rynkowe"
            ],
            "ru": [
                "Волатильность рынка и высокая конкуренция",
                "Потеря денег",
                "Риск рынка"
            ],
            "tr": [
                "Piyasa dalgalanması ve yüksek rekabet",
                "Para kaybı",
                "Risk piyasa"
            ]
        }
    },
    {
        "npc": {
            "it": "Può riassumere la riunione?",
            "de": "Können Sie das Treffen zusammenfassen?",
            "nl": "Kunt u de vergadering samenvatten?",
            "pl": "Czy możesz podsumować spotkanie?",
            "ru": "Не могли бы вы кратко изложить итоги встречи?",
            "tr": "Toplantıyı özetleyebilir misiniz?"
        },
        "opcoes": {
            "it": [
                "Abbiamo deciso di lanciare il prodotto ad agosto",
                "Lancio agosto",
                "Prodotto lancio"
            ],
            "de": [
                "Wir haben beschlossen, das Produkt im August auf den Markt zu bringen",
                "Launch August",
                "Produktlaunch"
            ],
            "nl": [
                "We hebben besloten om het product in augustus te lanceren",
                "Lancering augustus",
                "Productlancering"
            ],
            "pl": [
                "Zdecydowaliśmy o wprowadzeniu produktu w sierpniu",
                "Start sierpień",
                "Produkt start"
            ],
            "ru": [
                "Мы решили запустить продукт в августе",
                "Запуск август",
                "Продукт запуск"
            ],
            "tr": [
                "Ürünü Ağustos ayında piyasaya sürmeye karar verdik",
                "Lansman Ağustos",
                "Ürün lansman"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la visione a lungo termine dell'azienda?",
            "de": "Was ist die langfristige Vision des Unternehmens?",
            "nl": "Wat is de langetermijnvisie van het bedrijf?",
            "pl": "Jaka jest długoterminowa wizja firmy?",
            "ru": "Каково долгосрочное видение компании?",
            "tr": "Şirketin uzun vadeli vizyonu nedir?"
        },
        "opcoes": {
            "it": [
                "Diventare il leader di mercato nella tecnologia",
                "Diventare grande",
                "Leader tecnologico"
            ],
            "de": [
                "Marktführer im Bereich Technologie zu werden",
                "Groß werden",
                "Technologieführer"
            ],
            "nl": [
                "De marktleider worden in technologie",
                "Groot worden",
                "Technologieleider"
            ],
            "pl": [
                "Zostać liderem rynku w branży technologicznej",
                "Zyskać wielkość",
                "Lider technologii"
            ],
            "ru": [
                "Стать лидером рынка в сфере технологий",
                "Стать большим",
                "Лидер технологий"
            ],
            "tr": [
                "Teknolojide pazar lideri olmak",
                "Büyümek",
                "Teknoloji lideri"
            ]
        }
    },
    {
        "npc": {
            "it": "Come ti mantieni aggiornato nel tuo settore?",
            "de": "Wie halten Sie sich in Ihrem Bereich auf dem Laufenden?",
            "nl": "Hoe blijf je op de hoogte in jouw vakgebied?",
            "pl": "Jak dbasz o aktualność wiedzy w swojej dziedzinie?",
            "ru": "Как ты следишь за обновлениями в своей сфере?",
            "tr": "Alanınızda kendinizi nasıl güncel tutuyorsunuz?"
        },
        "opcoes": {
            "it": [
                "Leggo articoli e partecipo a webinar",
                "Vedo notizie",
                "Studio sempre"
            ],
            "de": [
                "Ich lese Artikel und nehme an Webinaren teil",
                "Sehe Nachrichten",
                "Lerne immer"
            ],
            "nl": [
                "Ik lees artikelen en woon webinars bij",
                "Kijk nieuws",
                "Studeer altijd"
            ],
            "pl": [
                "Czytam artykuły i biorę udział w webinarach",
                "Oglądam wiadomości",
                "Studiuję zawsze"
            ],
            "ru": [
                "Я читаю статьи и посещаю вебинары",
                "Смотрю новости",
                "Всегда учусь"
            ],
            "tr": [
                "Makaleler okur ve web seminerlerine katılırım",
                "Haberleri izlerim",
                "Her zaman çalışırım"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è lo stato della negoziazione del contratto?",
            "de": "Wie ist der Status der Vertragsverhandlungen?",
            "nl": "Wat is de status van de contractonderhandeling?",
            "pl": "Jaki jest status negocjacji umowy?",
            "ru": "Каков статус переговоров по контракту?",
            "tr": "Sözleşme müzakerelerinin durumu nedir?"
        },
        "opcoes": {
            "it": [
                "Stiamo esaminando la bozza finale",
                "Controllare finale",
                "Esaminare bozza"
            ],
            "de": [
                "Wir prüfen den endgültigen Entwurf",
                "Prüfen final",
                "Entwurf prüfen"
            ],
            "nl": [
                "We bekijken de definitieve versie",
                "Controleren finale",
                "Concept bekijken"
            ],
            "pl": [
                "Przeglądamy ostateczny projekt",
                "Sprawdzić ostateczny",
                "Przegląd projektu"
            ],
            "ru": [
                "Мы рассматриваем окончательный проект",
                "Проверить проект",
                "Проверка проекта"
            ],
            "tr": [
                "Son taslağı inceliyoruz",
                "Son kontrol",
                "Taslak inceleme"
            ]
        }
    },
    {
        "npc": {
            "it": "Abbiamo risorse per questo compito?",
            "de": "Haben wir Ressourcen für diese Aufgabe?",
            "nl": "Hebben we middelen voor deze taak?",
            "pl": "Czy mamy zasoby do tego zadania?",
            "ru": "У нас есть ресурсы для этой задачи?",
            "tr": "Bu görev için kaynaklarımız var mı?"
        },
        "opcoes": {
            "it": [
                "Sì, il team è completamente attrezzato",
                "Sì, c'è team",
                "Team buono"
            ],
            "de": [
                "Ja, das Team ist bestens gerüstet",
                "Ja, gibt Team",
                "Team gut"
            ],
            "nl": [
                "Ja, het team is volledig uitgerust",
                "Ja, is team",
                "Team goed"
            ],
            "pl": [
                "Tak, zespół jest w pełni wyposażony",
                "Tak, jest zespół",
                "Zespół dobry"
            ],
            "ru": [
                "Да, команда полностью укомплектована",
                "Да, есть команда",
                "Команда готова"
            ],
            "tr": [
                "Evet, ekip tam donanımlı",
                "Evet, ekip var",
                "Ekip iyi"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il limite di budget del progetto?",
            "de": "Wie hoch ist das Budgetlimit des Projekts?",
            "nl": "Wat is het budgetlimiet van het project?",
            "pl": "Jaki jest limit budżetu projektu?",
            "ru": "Каков лимит бюджета проекта?",
            "tr": "Proje bütçe sınırı nedir?"
        },
        "opcoes": {
            "it": [
                "Sono cinquantamila dollari",
                "Cinquantamila limite",
                "Budget cinquantamila"
            ],
            "de": [
                "Es liegt bei fünfzigtausend Dollar",
                "Fünfzigtausend Limit",
                "Budget fünfzigtausend"
            ],
            "nl": [
                "Het is vijftigduizend dollar",
                "Vijftigduizend limiet",
                "Budget vijftigduizend"
            ],
            "pl": [
                "To pięćdziesiąt tysięcy dolarów",
                "Pięćdziesiąt tysięcy limit",
                "Budżet pięćdziesiąt"
            ],
            "ru": [
                "Это пятьдесят тысяч долларов",
                "Пятьдесят тысяч лимит",
                "Бюджет пятьдесят"
            ],
            "tr": [
                "Elli bin dolar",
                "Elli bin limit",
                "Bütçe elli bin"
            ]
        }
    },
    {
        "npc": {
            "it": "Come gestisci i reclami dei clienti?",
            "de": "Wie gehen Sie mit Kundenreklamationen um?",
            "nl": "Hoe ga je om con klachten van klanten?",
            "pl": "Jak radzisz sobie ze skargami klientów?",
            "ru": "Как вы справляетесь с жалобами клиентов?",
            "tr": "Müşteri şikayetlerini nasıl ele alırsınız?"
        },
        "opcoes": {
            "it": [
                "Ascoltando attivamente e offrendo soluzioni",
                "Ignorarli",
                "Chiedere scusa"
            ],
            "de": [
                "Durch aktives Zuhören und Anbieten von Lösungen",
                "Ignoriere sie",
                "Entschuldigen"
            ],
            "nl": [
                "Door actief te luisteren en oplossingen te bieden",
                "Negeer ze",
                "Excuses aanbieden"
            ],
            "pl": [
                "Poprzez aktywne słuchanie i oferowanie rozwiązań",
                "Ignorować je",
                "Przeprosić"
            ],
            "ru": [
                "Активно выслушивая и предлагая решения",
                "Игнорировать их",
                "Извиниться"
            ],
            "tr": [
                "Aktif olarak dinleyip çözümler sunarak",
                "Onları görmezden gelmek",
                "Özür dilemek"
            ]
        }
    },
    {
        "npc": {
            "it": "Quali sono le caratteristiche chiave del prodotto?",
            "de": "Was sind die Hauptmerkmale des Produkts?",
            "nl": "Wat zijn de belangrijkste kenmerken van het product?",
            "pl": "Jakie są kluczowe cechy produktu?",
            "ru": "Каковы ключевые особенности продукта?",
            "tr": "Ürünün temel özellikleri nelerdir?"
        },
        "opcoes": {
            "it": [
                "È veloce, sicuro e facile da usare",
                "È economico",
                "Buon prodotto"
            ],
            "de": [
                "Es ist schnell, sicher und einfach zu bedienen",
                "Es ist billig",
                "Gutes Produkt"
            ],
            "nl": [
                "Het is snel, veilig en gemakkelijk te gebruiken",
                "Het is goedkoop",
                "Goed product"
            ],
            "pl": [
                "Jest szybki, bezpieczny i łatwy w użyciu",
                "Jest tani",
                "Dobry produkt"
            ],
            "ru": [
                "Он быстрый, безопасный и простой в использовании",
                "Он дешевый",
                "Хороший продукт"
            ],
            "tr": [
                "Hızlı, güvenli ve kullanımı kolaydır",
                "Ucuzdur",
                "İyi ürün"
            ]
        }
    },
    {
        "npc": {
            "it": "Possiamo programmare una chiamata di follow-up?",
            "de": "Können wir ein Folgegespräch vereinbaren?",
            "nl": "Kunnen we een vervolggesprek plannen?",
            "pl": "Czy możemy zaplanować rozmowę kontrolną?",
            "ru": "Мы можем запланировать повторный звонок?",
            "tr": "Takip araması ayarlayabilir miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, parliamone giovedì prossimo",
                "Sì, parlare giovedì",
                "Giovedì sì"
            ],
            "de": [
                "Ja, lassen Sie uns nächsten Donnerstag sprechen",
                "Ja, Donnerstag sprechen",
                "Donnerstag ja"
            ],
            "nl": [
                "Ja, laten we aanstaande donderdag praten",
                "Ja, donderdag praten",
                "Donderdag ja"
            ],
            "pl": [
                "Tak, porozmawiajmy w przyszły czwartek",
                "Tak, rozmawiać czwartek",
                "Czwartek tak"
            ],
            "ru": [
                "Да, давайте созвонимся в следующий четверг",
                "Да, созвонимся в четверг",
                "Четверг да"
            ],
            "tr": [
                "Evet, önümüzdeki Perşembe konuşalım",
                "Evet, Perşembe konuşalım",
                "Perşembe evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è la principale fonte di reddito?",
            "de": "Was ist die Haupteinnahmequelle?",
            "nl": "Wat is de belangrijkste inkomstenbron?",
            "pl": "Co jest głównym źródłem dochodu?",
            "ru": "Каков основной источник дохода?",
            "tr": "Ana gelir kaynağı nedir?"
        },
        "opcoes": {
            "it": [
                "Abbonamenti software",
                "Vendita computer",
                "Annunci"
            ],
            "de": [
                "Software-Abonnements",
                "Computer verkaufen",
                "Anzeigen"
            ],
            "nl": [
                "Software-abonnementen",
                "Computers verkopen",
                "Advertenties"
            ],
            "pl": [
                "Subskrypcje oprogramowania",
                "Sprzedaż komputerów",
                "Reklamy"
            ],
            "ru": [
                "Подписки на программное обеспечение",
                "Продажа компьютеров",
                "Реклама"
            ],
            "tr": [
                "Yazılım abonelikleri",
                "Bilgisayar satmak",
                "Reklamlar"
            ]
        }
    },
    {
        "npc": {
            "it": "Come dai la priorità alle tue attività quotidiane?",
            "de": "Wie priorisieren Sie Ihre täglichen Aufgaben?",
            "nl": "Hoe prioriteer je je dagelijkse taken?",
            "pl": "Jak ustalasz priorytety swoich codziennych zadań?",
            "ru": "Как ты расставляешь приоритеты в повседневных задачах?",
            "tr": "Günlük görevlerinizi nasıl önceliklendiriyorsunuz?"
        },
        "opcoes": {
            "it": [
                "In base all'urgenza e al valore aziendale",
                "In base alla data",
                "Le faccio a caso"
            ],
            "de": [
                "Nach Dringlichkeit und Geschäftswert",
                "Nach Datum",
                "Ich mache sie zufällig"
            ],
            "nl": [
                "Op basis van urgentie en bedrijfswaarde",
                "Op basis van datum",
                "Ik doe ze willekeurig"
            ],
            "pl": [
                "Według pilności i wartości biznesowej",
                "Według daty",
                "Robię je losowo"
            ],
            "ru": [
                "По срочности и бизнес-ценности",
                "По дате",
                "Делаю их случайно"
            ],
            "tr": [
                "Aciliyet ve iş değerine göre",
                "Tarihe göre",
                "Rastgele yapıyorum"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il suo feedback sulla mia presentazione?",
            "de": "Wie ist Ihr Feedback zu meiner Präsentation?",
            "nl": "Wat is uw feedback op mijn presentatie?",
            "pl": "Jaka jest twoja opinia o mojej prezentacji?",
            "ru": "Каковы ваши отзывы о моей презентации?",
            "tr": "Sunumum hakkındaki geri bildiriminiz nedir?"
        },
        "opcoes": {
            "it": [
                "È stata molto chiara e professionale",
                "È stata brutta",
                "È stata lunga"
            ],
            "de": [
                "Sie war sehr klar und professionell",
                "Sie war schlecht",
                "Sie war lang"
            ],
            "nl": [
                "Het was heel duidelijk en professioneel",
                "Het was slecht",
                "Het was lang"
            ],
            "pl": [
                "Była bardzo jasna i profesjonalna",
                "Była słaba",
                "Była długa"
            ],
            "ru": [
                "Она была очень понятной и профессиональной",
                "Она была плохой",
                "Она была длинной"
            ],
            "tr": [
                "Çok net ve profesyoneldi",
                "Kötüydü",
                "Uzundu"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è l'obiettivo di questo aggiornamento del software?",
            "de": "Was ist das Ziel dieses Software-Updates?",
            "nl": "Wat is het doel van deze software-update?",
            "pl": "Jaki jest cel tej aktualizacji oprogramowania?",
            "ru": "Какова цель этого обновления программного обеспечения?",
            "tr": "Bu yazılım güncellemesinin amacı nedir?"
        },
        "opcoes": {
            "it": [
                "Correggere bug di sicurezza e migliorare la velocità.",
                "Aggiornare velocità",
                "Correggere bug"
            ],
            "de": [
                "Sicherheitsfehler zu beheben und die Geschwindigkeit zu verbessern.",
                "Geschwindigkeit aktualisieren",
                "Fehler beheben"
            ],
            "nl": [
                "Beveiligingsfouten oplossen en snelheid verbeteren.",
                "Snelheid bijwerken",
                "Bugs oplossen"
            ],
            "pl": [
                "Naprawa błędów bezpieczeństwa i poprawa szybkości.",
                "Aktualizacja szybkości",
                "Naprawa błędów"
            ],
            "ru": [
                "Исправление ошибок безопасности и повышение скорости.",
                "Обновление скорости",
                "Исправление ошибок"
            ],
            "tr": [
                "Güvenlik açıklarını düzeltmek ve hızı artırmak.",
                "Hız güncellemesi",
                "Hata düzeltme"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro cliente ha richiesto un rapporto dettagliato.",
            "de": "Unser Kunde hat einen detaillierten Bericht angefordert.",
            "nl": "Onze klant heeft om een gedetailleerd rapport gevraagd.",
            "pl": "Nasz klient poprosił o szczegółowy raport.",
            "ru": "Наш клиент запросил подробный отчет.",
            "tr": "Müşterimiz detaylı bir rapor talep etti."
        },
        "opcoes": {
            "it": [
                "Inizierò a scriverlo immediatamente.",
                "Scrivere rapporto",
                "Rapporto dettagliato"
            ],
            "de": [
                "Ich werde sofort damit beginnen, es zu schreiben.",
                "Bericht schreiben",
                "Detaillierter Bericht"
            ],
            "nl": [
                "Ik begin er meteen aan te schrijven.",
                "Rapport schrijven",
                "Gedetailleerd rapport"
            ],
            "pl": [
                "Zacznę go pisać natychmiast.",
                "Pisać raport",
                "Szczegółowy raport"
            ],
            "ru": [
                "Я начну писать его немедленно.",
                "Писать отчет",
                "Подробный отчет"
            ],
            "tr": [
                "Hemen yazmaya başlayacağım.",
                "Rapor yazmak",
                "Detaylı rapor"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo assumere un nuovo sviluppatore?",
            "de": "Sollten wir einen neuen Entwickler einstellen?",
            "nl": "Moeten we een nieuwe ontwikkelaar aannemen?",
            "pl": "Czy powinniśmy zatrudnić nowego programistę?",
            "ru": "Стоит ли нам нанять нового разработчика?",
            "tr": "Yeni bir yazılımcı işe almalı mıyız?"
        },
        "opcoes": {
            "it": [
                "Solo se l'ambito del progetto aumenta.",
                "Assumere sviluppatore",
                "Sviluppatore sì"
            ],
            "de": [
                "Nur wenn der Projektumfang zunimmt.",
                "Entwickler einstellen",
                "Entwickler ja"
            ],
            "nl": [
                "Alleen als de projectomvang groter wordt.",
                "Ontwikkelaar aannemen",
                "Ontwikkelaar ja"
            ],
            "pl": [
                "Tylko jeśli zwiększy się zakres projektu.",
                "Zatrudnić programistę",
                "Programista tak"
            ],
            "ru": [
                "Только если объем проекта увеличится.",
                "Нанять разработчика",
                "Разработчик да"
            ],
            "tr": [
                "Sadece proje kapsamı artarsa.",
                "Yazılımcı işe almak",
                "Yazılımcı evet"
            ]
        }
    },
    {
        "npc": {
            "it": "Dobbiamo ridurre i costi operativi.",
            "de": "Wir müssen die Betriebskosten senken.",
            "nl": "We moeten de operationele kosten verlagen.",
            "pl": "Musimy zmniejszyć koszty operacyjne.",
            "ru": "Нам необходимо снизить операционные расходы.",
            "tr": "Operasyonel maliyetleri düşürmemiz gerekiyor."
        },
        "opcoes": {
            "it": [
                "Dovremmo prima ridurre l'uso della carta.",
                "Ridurre costi",
                "Costi operativi"
            ],
            "de": [
                "Wir sollten zuerst den Papierverbrauch reduzieren.",
                "Kosten senken",
                "Betriebskosten"
            ],
            "nl": [
                "We moeten eerst het papierverbruik verminderen.",
                "Kosten verlagen",
                "Operationele kosten"
            ],
            "pl": [
                "Powinniśmy najpierw ograniczyć zużycie papieru.",
                "Zmniejszyć koszty",
                "Koszty operacyjne"
            ],
            "ru": [
                "Сначала нам следует сократить расход бумаги.",
                "Снизить расходы",
                "Операционные расходы"
            ],
            "tr": [
                "Önce kağıt kullanımını azaltmalıyız.",
                "Maliyetleri düşürmek",
                "Operasyonel maliyetler"
            ]
        }
    },
    {
        "npc": {
            "it": "Il carico del server è estremamente alto oggi.",
            "de": "Die Serverauslastung ist heute extrem hoch.",
            "nl": "De serverbelasting is extreem hoog vandaag.",
            "pl": "Obciążenie serwera jest dzisiaj niezwykle wysokie.",
            "ru": "Нагрузка на сервер сегодня чрезвычайно высока.",
            "tr": "Sunucu yükü bugün son derece yüksek."
        },
        "opcoes": {
            "it": [
                "Dobbiamo ridimensionare le nostre istanze di database.",
                "Carico server",
                "Database alto"
            ],
            "de": [
                "Wir müssen unsere Datenbankinstanzen skalieren.",
                "Serverauslastung",
                "Datenbank hoch"
            ],
            "nl": [
                "We moeten onze database-instanties schalen.",
                "Serverbelasting",
                "Database hoog"
            ],
            "pl": [
                "Musimy przeskalować nasze instancje baz danych.",
                "Obciążenie serwera",
                "Baza danych wysokie"
            ],
            "ru": [
                "Мы должны масштабировать наши инстансы базы данных.",
                "Нагрузка сервера",
                "База данных"
            ],
            "tr": [
                "Veritabanı örneklerimizi ölçeklendirmeliyiz.",
                "Sunucu yükü",
                "Veritabanı yüksek"
            ]
        }
    },
    {
        "npc": {
            "it": "Il mercato sta reagendo positivamente al nostro lancio.",
            "de": "Der Markt reagiert positiv auf unseren Launch.",
            "nl": "De markt reageert positief op onze lancering.",
            "pl": "Rynek reaguje pozytywnie na nasz start.",
            "ru": "Рынок позитивно реагирует на наш запуск.",
            "tr": "Piyasa lansmanımıza olumlu tepki veriyor."
        },
        "opcoes": {
            "it": [
                "Questa è un'opportunità perfetta per espandersi.",
                "Reazione mercato",
                "Lancio espandere"
            ],
            "de": [
                "Dies ist eine perfekte Gelegenheit zur Expansion.",
                "Marktreaktion",
                "Launch expandieren"
            ],
            "nl": [
                "Dit is een perfecte gelegenheid om uit te breiden.",
                "Marktreactie",
                "Lancering uitbreiden"
            ],
            "pl": [
                "To doskonała okazja do ekspansji.",
                "Reakcja rynku",
                "Start ekspansja"
            ],
            "ru": [
                "Это прекрасная возможность для расширения.",
                "Реакция рынка",
                "Запуск расширить"
            ],
            "tr": [
                "Bu genişlemek için mükemmel bir fırsat.",
                "Piyasa tepkisi",
                "Lansman genişletmek"
            ]
        }
    },
    {
        "npc": {
            "it": "Dovremmo cambiare la strategia di marketing?",
            "de": "Sollten wir die Marketingstrategie ändern?",
            "nl": "Moeten we de marketingstrategie wijzigen?",
            "pl": "Czy powinniśmy zmienić strategię marketingową?",
            "ru": "Стоит ли нам изменить маркетинговую стратегию?",
            "tr": "Pazarlama stratejisini değiştirmeli miyiz?"
        },
        "opcoes": {
            "it": [
                "Sì, dobbiamo concentrarci sui social media.",
                "Mantenere marketing",
                "Cambio strategia"
            ],
            "de": [
                "Ja, wir müssen uns auf Social Media konzentrieren.",
                "Marketing ändern",
                "Strategiewechsel"
            ],
            "nl": [
                "Ja, we moeten ons op social media richten.",
                "Marketing wijzigen",
                "Strategiewijziging"
            ],
            "pl": [
                "Tak, musimy skupić się na mediach społecznościowych.",
                "Zmienić marketing",
                "Zmiana strategii"
            ],
            "ru": [
                "Да, нам нужно сосредоточиться на социальных сетях.",
                "Изменить маркетинг",
                "Смена стратегии"
            ],
            "tr": [
                "Evet, sosyal medyaya odaklanmamız gerekiyor.",
                "Pazarlama değiştirmek",
                "Strateji değişikliği"
            ]
        }
    },
    {
        "npc": {
            "it": "Qual è il ritorno sull'investimento di questa campagna?",
            "de": "Wie hoch ist der Return on Investment dieser Kampagne?",
            "nl": "Wat is de return on investment van deze campagne?",
            "pl": "Jaki jest zwrot z inwestycji tej kampanii?",
            "ru": "Каков возврат инвестиций этой кампании?",
            "tr": "Bu kampanyanın yatırım getirisi nedir?"
        },
        "opcoes": {
            "it": [
                "Ha raggiunto circa il centocinquanta percento.",
                "Campagna ROI",
                "Ritorno campagna"
            ],
            "de": [
                "Er erreichte etwa einhundertfünfzig Prozent.",
                "Kampagne ROI",
                "Rückfluss Kampagne"
            ],
            "nl": [
                "Het bereikte ongeveer honderdvijftig procent.",
                "Campagne ROI",
                "Rendement campagne"
            ],
            "pl": [
                "Osiągnął około stu pięćdziesięciu procent.",
                "Kampania ROI",
                "Zwrot kampania"
            ],
            "ru": [
                "Он достиг около ста пятидесяти процентов.",
                "Кампания ROI",
                "Возврат кампания"
            ],
            "tr": [
                "Yaklaşık yüzde yüz elliye ulaştı.",
                "Kampanya ROI",
                "Getiri kampanya"
            ]
        }
    },
    {
        "npc": {
            "it": "Il nostro manager vuole approvare il design del layout.",
            "de": "Unser Manager möchte das Layout-Design genehmigen.",
            "nl": "Onze manager wil het lay-outontwerp goedkeuren.",
            "pl": "Nasz kierownik chce zatwierdzić projekt układu.",
            "ru": "Наш менеджер хочет утвердить дизайн макета.",
            "tr": "Yöneticimiz düzen tasarımını onaylamak istiyor."
        },
        "opcoes": {
            "it": [
                "Invierò il prototipo finale oggi.",
                "Manager layout",
                "Design layout"
            ],
            "de": [
                "Ich werde den endgültigen Prototyp heute senden.",
                "Manager Layout",
                "Layout-Design"
            ],
            "nl": [
                "Ik stuur het definitieve prototype vandaag nog.",
                "Manager lay-out",
                "Lay-outontwerp"
            ],
            "pl": [
                "Wyślę dzisiaj ostateczny prototyp.",
                "Kierownik układ",
                "Projekt układu"
            ],
            "ru": [
                "Я отправлю окончательный прототип сегодня.",
                "Менеджер макет",
                "Дизайн макета"
            ],
            "tr": [
                "Bugün nihai prototipi göndereceğim.",
                "Yönetici düzen",
                "Düzen tasarımı"
            ]
        }
    }
];
translationsMap.forEach((item, idx) => {
    rawQuestionsIndexMap[item.npc.en] = idx;
});

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