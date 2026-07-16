const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');

// Traduções completas para as 100 perguntas nos 6 idiomas adicionais:
// it: Italiano, de: Alemão, nl: Holandês, pl: Polonês, ru: Russo, tr: Turco
// Estrutura: translationsMap[index] = { npc: { it, de, nl, pl, ru, tr }, opcoes: { it: [], de: [], nl: [], pl: [], ru: [], tr: [] } }
const translationsMap = [
    // NÍVEL 0: BÁSICO (30 Perguntas)
    {
        npc: {
            it: "Ciao! Come stai?",
            de: "Hallo! Wie geht es dir?",
            nl: "Hallo! Hoe gaat het met je?",
            pl: "Cześć! Jak się masz?",
            ru: "Привет! Как дела?",
            tr: "Merhaba! Nasılsın?"
        },
        opcoes: {
            it: ["Sto bene, grazie!", "Bene tu", "Io sono buono"],
            de: ["Mir geht es gut, danke!", "Gut dir", "Ich bin gut"],
            nl: ["Met mij gaat het goed, dank je!", "Goed met jou", "Ik ben goed"],
            pl: ["Dobrze, dziękuję!", "Dobrze ty", "Jestem dobry"],
            ru: ["Хорошо, спасибо!", "Хорошо ты", "Я хороший"],
            tr: ["İyiyim, teşekkürler!", "İyi sen", "Ben iyiyim"]
        }
    },
    {
        npc: {
            it: "Come ti chiami?",
            de: "Wie heißt du?",
            nl: "Hoe heet je?",
            pl: "Jak się nazywasz?",
            ru: "Как тебя зовут?",
            tr: "Adın ne?"
        },
        opcoes: {
            it: ["Mi chiamo Giovanni", "Nome Giovanni", "Me Giovanni"],
            de: ["Ich heiße Hans", "Name Hans", "Mich Hans"],
            nl: ["Mijn naam is Jan", "Naam Jan", "Mij Jan"],
            pl: ["Nazywam się Jan", "Nazwa Jan", "Mnie Jan"],
            ru: ["Меня зовут Иван", "Имя Иван", "Я Иван"],
            tr: ["Benim adım Can", "Ad Can", "Bana Can"]
        }
    },
    {
        npc: {
            it: "Di dove sei?",
            de: "Woher kommst du?",
            nl: "Waar kom je vandaan?",
            pl: "Skąd pochodzisz?",
            ru: "Откуда ты?",
            tr: "Nerelisin?"
        },
        opcoes: {
            it: ["Vengo dal Brasile", "Brasile io sono", "Da Brasile"],
            de: ["Ich komme aus Brasilien", "Brasilien ich bin", "Aus Brasilien"],
            nl: ["Ik kom uit Brazilië", "Brazilië ik ben", "Uit Brazilië"],
            pl: ["Jestem z Brazylii", "Brazylia jestem", "Z Brazylii"],
            ru: ["Я из Бразилии", "Бразилия я есть", "Из Бразилии"],
            tr: ["Brezilya'lıyım", "Brezilya ben", "Brezilya'dan"]
        }
    },
    {
        npc: {
            it: "Parli inglese?",
            de: "Sprichst du Englisch?",
            nl: "Spreek je Engels?",
            pl: "Czy mówisz po angielsku?",
            ru: "Ты говоришь по-английски?",
            tr: "İngilizce konuşuyor musun?"
        },
        opcoes: {
            it: ["Sì, un po'", "Parlare sì", "Poco sì"],
            de: ["Ja, ein bisschen", "Sprechen ja", "Wenig ja"],
            nl: ["Ja, een beetje", "Spreken ja", "Beetje ja"],
            pl: ["Tak, trochę", "Mówić tak", "Trochę tak"],
            ru: ["Да, немного", "Говорить да", "Мало да"],
            tr: ["Evet, biraz", "Konuşmak evet", "Az evet"]
        }
    },
    {
        npc: {
            it: "Piacere di conoscerti!",
            de: "Schön, dich kennenzulernen!",
            nl: "Leuk je te ontmoeten!",
            pl: "Miło cię poznać!",
            ru: "Приятно познакомиться!",
            tr: "Tanıştığımıza memnun oldum!"
        },
        opcoes: {
            it: ["Piacere mio", "Anche io", "Stesso incontro"],
            de: ["Gleichfalls", "Ich auch", "Gleiches Treffen"],
            nl: ["Insgelijks", "Ik ook", "Hetzelfde ontmoeten"],
            pl: ["Mnie również", "Ja też", "Tak samo poznać"],
            ru: ["Мне тоже приятно", "Я тоже", "Взаимно"],
            tr: ["Ben de memnun oldum", "Ben de", "Aynı şekilde"]
        }
    },
    {
        npc: {
            it: "Dov'è il bagno?",
            de: "Wo ist die Toilette?",
            nl: "Waar is het toilet?",
            pl: "Gdzie jest toaleta?",
            ru: "Где туалет?",
            tr: "Tuvalet nerede?"
        },
        opcoes: {
            it: ["È a sinistra", "Bagno sinistra", "Vai sinistra"],
            de: ["Es ist links", "Toilette links", "Geh links"],
            nl: ["Het is links", "Toilet links", "Ga links"],
            pl: ["Jest po lewej stronie", "Toaleta lewo", "Idź w lewo"],
            ru: ["Он слева", "Туалет слева", "Иди налево"],
            tr: ["Solda", "Tuvalet sol", "Sola git"]
        }
    },
    {
        npc: {
            it: "Quanto costa questo?",
            de: "Wie viel kostet das?",
            nl: "Hoeveel kost dit?",
            pl: "Ile to kosztuje?",
            ru: "Сколько это стоит?",
            tr: "Bu ne kadar?"
        },
        opcoes: {
            it: ["Costa dieci dollari", "Dieci dollari costo", "Costo dieci"],
            de: ["Es kostet zehn Dollar", "Zehn Dollar kosten", "Kosten zehn"],
            nl: ["Het kost tien dollar", "Tien dollar kosten", "Kosten tien"],
            pl: ["To kosztuje dziesięć dolarów", "Dziesięć dolarów koszt", "Koszt dziesięć"],
            ru: ["Это стоит десять долларов", "Десять долларов стоить", "Стоить десять"],
            tr: ["On dolar", "On dolar maliyet", "Maliyet on"]
        }
    },
    {
        npc: {
            it: "Arrivederci!",
            de: "Auf Wiedersehen!",
            nl: "Tot ziens!",
            pl: "Do widzenia!",
            ru: "До свидания!",
            tr: "Hoşça kal!"
        },
        opcoes: {
            it: ["A dopo!", "Arrivederci sì", "Dopo vai"],
            de: ["Bis später!", "Auf Wiedersehen ja", "Später geh"],
            nl: ["Tot later!", "Tot ziens ja", "Later ga"],
            pl: ["Do zobaczenia!", "Do widzenia tak", "Później idź"],
            ru: ["До встречи!", "До свидания да", "Позже иди"],
            tr: ["Görüşmek üzere!", "Hoşça kal evet", "Sonra git"]
        }
    },
    {
        npc: {
            it: "Grazie!",
            de: "Danke!",
            nl: "Dank je!",
            pl: "Dziękuję!",
            ru: "Спасибо!",
            tr: "Teşekkürler!"
        },
        opcoes: {
            it: ["Prego!", "Benvenuto sì", "Grazie vai"],
            de: ["Bitte!", "Willkommen ja", "Danke geh"],
            nl: ["Graag gedaan!", "Welkom ja", "Bedankt ga"],
            pl: ["Nie ma za co!", "Witamy tak", "Dzięki idź"],
            ru: ["Пожалуйста!", "Добро пожаловать да", "Спасибо иди"],
            tr: ["Rica ederim!", "Hoş geldiniz evet", "Teşekkür git"]
        }
    },
    {
        npc: {
            it: "Buongiorno!",
            de: "Guten Morgen!",
            nl: "Goedemorgen!",
            pl: "Dzień dobry!",
            ru: "Доброе утро!",
            tr: "Günaydın!"
        },
        opcoes: {
            it: ["Buongiorno! Come stai?", "Mattina sì", "Buonanotte"],
            de: ["Guten Morgen! Wie geht es dir?", "Morgen ja", "Gute Nacht"],
            nl: ["Goedemorgen! Hoe gaat het?", "Morgen ja", "Goedenacht"],
            pl: ["Dzień dobry! Jak się masz?", "Rano tak", "Dobranoc"],
            ru: ["Доброе утро! Как дела?", "Утро да", "Спокойной ночи"],
            tr: ["Günaydın! Nasılsın?", "Sabah evet", "İyi geceler"]
        }
    },
    {
        npc: {
            it: "Voglio un caffè.",
            de: "Ich möchte Kaffee.",
            nl: "Ik wil koffie.",
            pl: "Chcę kawę.",
            ru: "Я хочу кофе.",
            tr: "Kahve istiyorum."
        },
        opcoes: {
            it: ["Ecco il suo caffè, signore.", "Caffè prendi", "Dai caffè"],
            de: ["Hier ist Ihr Kaffee, mein Herr.", "Kaffee nimm", "Gib Kaffee"],
            nl: ["Hier is uw koffie, meneer.", "Koffie neem", "Geef koffie"],
            pl: ["Oto pana kawa, proszę pana.", "Kawę weź", "Daj kawę"],
            ru: ["Вот ваш кофе, сэр.", "Кофе возьми", "Дай кофе"],
            tr: ["İşte kahveniz, efendim.", "Kahve al", "Kahve ver"]
        }
    },
    {
        npc: {
            it: "Questo è il treno per Londra?",
            de: "Ist das der Zug nach London?",
            nl: "Is dit de trein naar Londen?",
            pl: "Czy to jest pociąg do Londynu?",
            ru: "Это поезд в Лондон?",
            tr: "Bu Londra treni mi?"
        },
        opcoes: {
            it: ["Sì, binario numero tre.", "Treno sì", "Londra vai"],
            de: ["Ja, Gleis Nummer drei.", "Zug ja", "London geht"],
            nl: ["Ja, spoor nummer drie.", "Trein ja", "Londen gaat"],
            pl: ["Tak, peron numer trzy.", "Pociąg tak", "Londyn jedzie"],
            ru: ["Да, платформа номер три.", "Поезд да", "Лондон идет"],
            tr: ["Evet, üç numaralı peron.", "Tren evet", "Londra git"]
        }
    },
    {
        npc: {
            it: "Scusi, dov'è l'uscita?",
            de: "Entschuldigung, wo ist der Ausgang?",
            nl: "Excuseer me, waar is de uitgang?",
            pl: "Przepraszam, gdzie jest wyjście?",
            ru: "Извините, где выход?",
            tr: "Afedersiniz, çıkış nerede?"
        },
        opcoes: {
            it: ["Segua il cartello verde.", "Uscita vai", "Guarda cartello"],
            de: ["Folgen Sie dem grünen Schild.", "Ausgang geh", "Schau Schild"],
            nl: ["Volg het groene bord.", "Uitgang ga", "Kijk bord"],
            pl: ["Proszę iść za zielonym znakiem.", "Wyjście idź", "Patrz znak"],
            ru: ["Идите по зеленому указателю.", "Выход иди", "Смотри знак"],
            tr: ["Yeşil tabelayı takip edin.", "Çıkış git", "Tabelaya bak"]
        }
    },
    {
        npc: {
            it: "Vorrei dell'acqua.",
            de: "Ich hätte gerne etwas Wasser.",
            nl: "Ik zou graag wat water willen.",
            pl: "Chciałbym wodę.",
            ru: "Я бы хотел воды.",
            tr: "Su rica ediyorum."
        },
        opcoes: {
            it: ["Acqua gassata o naturale?", "Acqua prendi", "Dai acqua"],
            de: ["Mit Kohlensäure oder stilles Wasser?", "Wasser nimm", "Gib Wasser"],
            nl: ["Bruisend of plat water?", "Water neem", "Geef water"],
            pl: ["Gazowana czy niegazowana?", "Wodę weź", "Daj wodę"],
            ru: ["Газированную или без газа?", "Воду возьми", "Дай воду"],
            tr: ["Gazlı mı gazsız mı?", "Su al", "Su ver"]
        }
    },
    {
        npc: {
            it: "Ha un tavolo per due?",
            de: "Haben Sie einen Tisch für zwei?",
            nl: "Heeft u een tafel voor twee?",
            pl: "Czy ma pan stolik dla dwojga?",
            ru: "У вас есть столик на двоих?",
            tr: "İki kişilik masanız var mı?"
        },
        opcoes: {
            it: ["Sì, mi segua per favore.", "Tavolo sì", "Due posti"],
            de: ["Ja, folgen Sie mir bitte.", "Tisch ja", "Zwei Sitze"],
            nl: ["Ja, volgt u mij aanzien.", "Tafel ja", "Twee stoelen"],
            pl: ["Tak, proszę za mną.", "Stolik tak", "Dwa miejsca"],
            ru: ["Да, идите за мной, пожалуйста.", "Столик да", "Два места"],
            tr: ["Evet, lütfen beni takip edin.", "Masa evet", "İki kişilik"]
        }
    },
    {
        npc: {
            it: "A che ora apre il negozio?",
            de: "Wann öffnet das Geschäft?",
            nl: "Hoe laat gaat de winkel open?",
            pl: "O której godzinie otwierają sklep?",
            ru: "Во сколько открывается магазин?",
            tr: "Mağaza saat kaçta açılıyor?"
        },
        opcoes: {
            it: ["Apre alle nove del mattino.", "Apre nove", "Negozio apre"],
            de: ["Es öffnet um neun Uhr morgens.", "Öffnet neun", "Geschäft öffnet"],
            nl: ["Het gaat om negen uur 's ochtends open.", "Open negen", "Winkel open"],
            pl: ["Otwierają o dziewiątej rano.", "Otwiera dziewięć", "Sklep otwiera"],
            ru: ["Он открывается в девять утра.", "Открыто девять", "Магазин открывается"],
            tr: ["Sabah dokuzda açılıyor.", "Açık dokuz", "Mağaza açık"]
        }
    },
    {
        npc: {
            it: "Sono molto stanco oggi.",
            de: "Ich bin heute sehr müde.",
            nl: "Ik ben erg moe vandaag.",
            pl: "Jestem dzisiaj bardzo zmęczony.",
            ru: "Я очень устал сегодня.",
            tr: "Bugün çok yorgunum."
        },
        opcoes: {
            it: ["Dovresti andare a dormire.", "Dormire sì", "Stanco vai"],
            de: ["Du solltest schlafen gehen.", "Schlafen ja", "Müde geh"],
            nl: ["Je zou moeten gaan slapen.", "Slapen ja", "Moe ga"],
            pl: ["Powinieneś iść spać.", "Spie tak", "Zmęczony idź"],
            ru: ["Тебе нужно пойти поспать.", "Спать да", "Устал иди"],
            tr: ["Uyumalısın.", "Uyu evet", "Yorgun git"]
        }
    },
    {
        npc: {
            it: "Buon compleanno, Maria!",
            de: "Herzlichen Glückwunsch zum Geburtstag, Maria!",
            nl: "Gefeliciteerd met je verjaardag, Maria!",
            pl: "Wszystkiego najlepszego z okazji urodzin, Mario!",
            ru: "С днем рождения, Мария!",
            tr: "Doğum günün kutlu olsun, Maria!"
        },
        opcoes: {
            it: ["Grazie mille, Giovanni!", "Compleanno grazie", "Felice giorno"],
            de: ["Vielen Dank, Hans!", "Geburtstag danke", "Glücklicher Tag"],
            nl: ["Hartelijk dank, Jan!", "Verjaardag bedankt", "Fijne dag"],
            pl: ["Bardzo dziękuję, Janie!", "Urodziny dziękuję", "Szczęśliwy dzień"],
            ru: ["Большое спасибо, Иван!", "Рождения спасибо", "Счастливый день"],
            tr: ["Çok teşekkürler, Can!", "Doğum günü teşekkür", "Mutlu gün"]
        }
    },
    {
        npc: {
            it: "Dov'è la chiave dell'hotel?",
            de: "Wo ist der Hotelschlüssel?",
            nl: "Waar is de hotelsleutel?",
            pl: "Gdzie jest klucz do hotelu?",
            ru: "Где ключ от отеля?",
            tr: "Otel anahtarı nerede?"
        },
        opcoes: {
            it: ["È dentro la tua tasca.", "Chiave tasca", "Chiave sì"],
            de: ["Er ist in deiner Tasche.", "Schlüssel Tasche", "Schlüssel ja"],
            nl: ["Het zit in je zak.", "Sleutel zak", "Sleutel ja"],
            pl: ["Jest w twojej kieszeni.", "Klucz kieszeń", "Klucz tak"],
            ru: ["Он у тебя в кармане.", "Ключ карман", "Ключ да"],
            tr: ["Cebinin içinde.", "Anahtar cep", "Anahtar evet"]
        }
    },
    {
        npc: {
            it: "Non ti capisco.",
            de: "Ich verstehe dich nicht.",
            nl: "Ik begrijp je niet.",
            pl: "Nie rozumiem cię.",
            ru: "Я тебя не понимаю.",
            tr: "Seni anlamıyorum."
        },
        opcoes: {
            it: ["Parlerò più lentamente.", "Capire no", "Parlare sì"],
            de: ["Ich werde langsamer sprechen.", "Verstehen nein", "Sprechen ja"],
            nl: ["Ik zal langzamer spreken.", "Begrijpen nee", "Spreken ja"],
            pl: ["Będę mówić wolniej.", "Rozumieć nie", "Mówić tak"],
            ru: ["Я буду говорить медленнее.", "Понимать нет", "Говорить да"],
            tr: ["Daha yavaş konuşacağım.", "Anlamak hayır", "Konuşmak evet"]
        }
    },
    {
        npc: {
            it: "Il museo è aperto la domenica?",
            de: "Ist das Museum am Sonntag geöffnet?",
            nl: "Is het museum open op zondag?",
            pl: "Czy muzeum jest otwarte w niedzielę?",
            ru: "Музей открыт в воскресенье?",
            tr: "Müze Pazar günleri açık mı?"
        },
        opcoes: {
            it: ["Sì, dalle dieci alle sei.", "Museo aperto", "Domenica sì"],
            de: ["Ja, von zehn bis sechs.", "Museum geöffnet", "Sonntag ja"],
            nl: ["Ja, van tien tot zes.", "Museum open", "Zondag ja"],
            pl: ["Tak, od dziesiątej do szóstej.", "Muzeum otwarte", "Niedziela tak"],
            ru: ["Да, с десяти до шести.", "Музей открыт", "Воскресенье да"],
            tr: ["Evet, ondan altıya kadar.", "Müze açık", "Pazar evet"]
        }
    },
    {
        npc: {
            it: "Come posso pagare questo biglietto?",
            de: "Wie kann ich dieses Ticket bezahlen?",
            nl: "Hoe kan ik dit ticket betalen?",
            pl: "Jak mogę zapłacić za ten bilet?",
            ru: "Как я могу оплатить этот билет?",
            tr: "Bu bileti nasıl ödeyebilirim?"
        },
        opcoes: {
            it: ["Puoi pagare in contanti.", "Pagare contanti", "Biglietto pagare"],
            de: ["Sie können in bar bezahlen.", "Bezahlen bar", "Ticket bezahlen"],
            nl: ["U kunt contant betalen.", "Betalen contant", "Ticket betalen"],
            pl: ["Możesz zapłacić gotówką.", "Zapłacić gotówką", "Bilet zapłacić"],
            ru: ["Вы можете оплатить наличными.", "Оплатить наличными", "Билет оплатить"],
            tr: ["Nakit ödeyebilirsiniz.", "Ödemek nakit", "Bilet ödemek"]
        }
    },
    {
        npc: {
            it: "Ho bisogno di un medico, per favore.",
            de: "Ich brauche bitte einen Arzt.",
            nl: "Ik heb een dokter nodig, alstublieft.",
            pl: "Potrzebuję lekarza, proszę.",
            ru: "Мне нужен врач, пожалуйста.",
            tr: "Bir doktora ihtiyacım var, lütfen."
        },
        opcoes: {
            it: ["Chiamerò l'ospedale.", "Medico chiamare", "Ospedale medico"],
            de: ["Ich werde das Krankenhaus anrufen.", "Arzt rufen", "Krankenhaus Arzt"],
            nl: ["Ik zal het ziekenhuis bellen.", "Dokter bellen", "Ziekenhuis dokter"],
            pl: ["Zadzwonię do szpitala.", "Lekarz zadzwonić", "Szpital lekarz"],
            ru: ["Я позвоню в больницу.", "Врач позвонить", "Больница врач"],
            tr: ["Hastaneyi arayacağım.", "Doktor aramak", "Hastane doktor"]
        }
    },
    {
        npc: {
            it: "Qual è il tuo colore preferito?",
            de: "Was ist deine Lieblingsfarbe?",
            nl: "Wat is je favoriete kleur?",
            pl: "Jaki jest twój ulubiony kolor?",
            ru: "Какой твой любимый цвет?",
            tr: "En sevdiğin renk ne?"
        },
        opcoes: {
            it: ["Mi piace molto l'azzurro.", "Colore azzurro", "Gusto colore"],
            de: ["Ich mag Blau sehr.", "Farbe Blau", "Mag Farbe"],
            nl: ["Ik hou erg van blauw.", "Kleur blauw", "Hou kleur"],
            pl: ["Bardzo lubię niebieski.", "Kolor niebieski", "Lubię kolor"],
            ru: ["Мне очень нравится синий.", "Цвет синий", "Нравится цвет"],
            tr: ["Maviyi çok severim.", "Renk mavi", "Severim renk"]
        }
    },
    {
        npc: {
            it: "Dov'è la biblioteca?",
            de: "Wo ist die Bibliothek?",
            nl: "Waar is de bibliotheek?",
            pl: "Gdzie jest biblioteka?",
            ru: "Где библиотека?",
            tr: "Kütüphane nerede?"
        },
        opcoes: {
            it: ["È vicino alla scuola.", "Biblioteca scuola", "Vai scuola"],
            de: ["Sie ist neben der Schule.", "Bibliothek Schule", "Geh Schule"],
            nl: ["Het is naast de school.", "Bibliotheek school", "Ga school"],
            pl: ["Jest obok szkoły.", "Biblioteka szkoła", "Idź szkoła"],
            ru: ["Она рядом со школой.", "Библиотека школа", "Иди школа"],
            tr: ["Okulun yanında.", "Kütüphane okul", "Okula git"]
        }
    },
    {
        npc: {
            it: "Mi sono perso in città.",
            de: "Ich habe mich in der Stadt verlaufen.",
            nl: "Ik ben verdwaald in de stad.",
            pl: "Zgubiłem się w mieście.",
            ru: "Я потерялся в городе.",
            tr: "Şehirde kayboldum."
        },
        opcoes: {
            it: ["Mi mostri la sua mappa, per favore.", "Perso città", "Mappa guarda"],
            de: ["Zeigen Sie mir bitte Ihre Karte.", "Verlaufen Stadt", "Karte zeigen"],
            nl: ["Laat me je kaart zien, alstublieft.", "Verdwaald stad", "Kaart kijken"],
            pl: ["Proszę pokazać mi swoją mapę.", "Zgubiłem miasto", "Mapa patrz"],
            ru: ["Покажите мне вашу карту, пожалуйста.", "Потерялся город", "Карта смотри"],
            tr: ["Lütfen bana haritanızı gösterin.", "Kayıp şehir", "Harita bak"]
        }
    },
    {
        npc: {
            it: "Vuoi giocare a tennis?",
            de: "Möchtest du Tennis spielen?",
            nl: "Wil je tennissen?",
            pl: "Czy chcesz grać w tenisa?",
            ru: "Хочешь поиграть в теннис?",
            tr: "Tenis oynamak ister misin?"
        },
        opcoes: {
            it: ["Sì, ho due racchette.", "Tennis giocare", "Racchette sì"],
            de: ["Ja, ich habe zwei Schläger.", "Tennis spielen", "Schläger ja"],
            nl: ["Ja, ik heb twee rackets.", "Tennis spelen", "Rackets ja"],
            pl: ["Tak, mam dwie rakiety.", "Tenis grać", "Rakiety tak"],
            ru: ["Да, у меня есть две ракетки.", "Теннис играть", "Ракетки да"],
            tr: ["Evet, iki raketim var.", "Tenis oynamak", "Raket evet"]
        }
    },
    {
        npc: {
            it: "Questa zuppa è troppo calda.",
            de: "Diese Suppe ist zu heiß.",
            nl: "Deze soep is te heet.",
            pl: "Ta zupa jest za gorąca.",
            ru: "Этот суп слишком горячий.",
            tr: "Bu çorba çok sıcak."
        },
        opcoes: {
            it: ["Aspetta qualche minuto.", "Zuppa calda", "Calda sì"],
            de: ["Warte ein paar Minuten.", "Suppe heiß", "Heiß ja"],
            nl: ["Wacht een paar minuten.", "Soep heet", "Heet ja"],
            pl: ["Poczekaj kilka minut.", "Zupa gorąca", "Gorąca tak"],
            ru: ["Подожди несколько минут.", "Суп горячий", "Горячий да"],
            tr: ["Birkaç dakika bekle.", "Çorba sıcak", "Sıcak evet"]
        }
    },
    {
        npc: {
            it: "Posso sedermi qui?",
            de: "Kann ich mich hierher setzen?",
            nl: "Mag ik hier zitten?",
            pl: "Czy mogę tu usiąść?",
            ru: "Можно мне присесть здесь?",
            tr: "Buraya oturabilir miyim?"
        },
        opcoes: {
            it: ["Sì, questo posto è libero.", "Sedersi sì", "Posto libero"],
            de: ["Ja, dieser Platz ist frei.", "Setzen ja", "Platz frei"],
            nl: ["Ja, deze plek is vrij.", "Zitten ja", "Plek vrij"],
            pl: ["Tak, to miejsce jest wolne.", "Usiąść tak", "Miejsce wolne"],
            ru: ["Да, это место свободно.", "Присесть да", "Место свободно"],
            tr: ["Evet, bu koltuk boş.", "Oturmak evet", "Koltuk boş"]
        }
    },
    {
        npc: {
            it: "Dove hai messo il latte?",
            de: "Wo hast du die Milch hingetan?",
            nl: "Waar heb je de melk gelaten?",
            pl: "Gdzie położyłeś mleko?",
            ru: "Куда ты положил молоко?",
            tr: "Sütü nereye koydun?"
        },
        opcoes: {
            it: ["È dentro il frigorifero.", "Latte frigo", "Frigo latte"],
            de: ["Sie ist im Kühlschrank.", "Milch Kühlschrank", "Kühlschrank Milch"],
            nl: ["Het staat in de koelkast.", "Melk koelkast", "Koelkast melk"],
            pl: ["Jest w lodówce.", "Mleko lodówka", "Lodówka mleko"],
            ru: ["Оно в холодильнике.", "Молоко холодильник", "Холодильник молоко"],
            tr: ["Buzdolabının içinde.", "Süt buzdolabı", "Buzdolabı süt"]
        }
    },

    // NÍVEL 1: INTERMEDIÁRIO (35 Perguntas)
    {
        npc: {
            it: "Desidera ordinare ora?",
            de: "Möchten Sie jetzt bestellen?",
            nl: "Wilt u nu bestellen?",
            pl: "Czy chciałby pan teraz zamówić?",
            ru: "Желаете сделать заказ сейчас?",
            tr: "Şimdi sipariş vermek ister misiniz?"
        },
        opcoes: {
            it: ["Sì, prenderò la bistecca, per favore", "Sì, voglio bistecca", "Dai bistecca"],
            de: ["Ja, ich nehme das Steak, bitte", "Ja, will Steak", "Gib Steak"],
            nl: ["Ja, ik neem de biefstuk, alstublieft", "Ja, wil biefstuk", "Geef biefstuk"],
            pl: ["Tak, poproszę stek", "Tak, chcę stek", "Daj stek"],
            ru: ["Да, мне стейк, пожалуйста", "Да, хочу стейк", "Дай стейк"],
            tr: ["Evet, biftek alayım lütfen", "Evet, biftek istiyorum", "Biftek ver"]
        }
    },
    {
        npc: {
            it: "Qual è il tuo hobby preferito?",
            de: "Was ist dein Lieblingshobby?",
            nl: "Wat is je favoriete hobby?",
            pl: "Jakie jest twoje ulubione hobby?",
            ru: "Какое твое любимое хобби?",
            tr: "En sevdiğin hobin ne?"
        },
        opcoes: {
            it: ["Mi piace leggere libri", "Mi piace leggere", "Leggere è hobby"],
            de: ["Ich lese gerne Bücher", "Ich mag lesen", "Lesen ist Hobby"],
            nl: ["Ik hou van boeken lezen", "Ik vind lezen leuk", "Lezen is hobby"],
            pl: ["Lubię czytać książki", "Lubię czytać", "Czytanie to hobby"],
            ru: ["Мне нравится читать книги", "Я люблю читать", "Чтение — мое хобби"],
            tr: ["Kitap okumaktan hoşlanırım", "Okumayı severim", "Okumak hobim"]
        }
    },
    {
        npc: {
            it: "Come arrivo alla stazione?",
            de: "Wie komme ich zum Bahnhof?",
            nl: "Hoe kom ik bij het station?",
            pl: "Jak dojadę do stacji?",
            ru: "Как мне добраться до станции?",
            tr: "İstasyona nasıl giderim?"
        },
        opcoes: {
            it: ["Vada sempre dritto e giri a destra", "Dritto e destra", "Vai stazione destra"],
            de: ["Gehen Sie geradeaus und biegen Sie rechts ab", "Geradeaus rechts", "Geh Bahnhof rechts"],
            nl: ["Ga rechtdoor en sla rechtsaf", "Rechtdoor rechts", "Ga station rechts"],
            pl: ["Proszę iść prosto i skręcić w prawo", "Prosto i w prawo", "Idź stacja prawo"],
            ru: ["Идите прямо и поверните направо", "Прямо и направо", "Иди станция право"],
            tr: ["Düz gidin ve sağa dönün", "Düz ve sağ", "İstasyon sağa git"]
        }
    },
    {
        npc: {
            it: "Com'è il tempo oggi?",
            de: "Wie ist das Wetter heute?",
            nl: "Hoe is het weer vandaag?",
            pl: "Jaka jest dzisiaj pogoda?",
            ru: "Какая сегодня погода?",
            tr: "Bugün hava nasıl?"
        },
        opcoes: {
            it: ["È soleggiato e caldo", "Sole e caldo", "Soleggiato oggi è"],
            de: ["Es ist sonnig und warm", "Sonne und warm", "Sonnig heute ist"],
            nl: ["Het is zonnig en warm", "Zon en warm", "Zonnig vandaag is"],
            pl: ["Jest słonecznie i ciepło", "Słońce i ciepło", "Słonecznie dzisiaj jest"],
            ru: ["Солнечно и тепло", "Солнце и тепло", "Солнечно сегодня"],
            tr: ["Güneşli ve sıcak", "Güneş ve sıcak", "Güneşli bugün"]
        }
    },
    {
        npc: {
            it: "Hai finito i compiti?",
            de: "Hast du deine Hausaufgaben fertig?",
            nl: "Heb je je huiswerk af?",
            pl: "Czy odrobiłeś lekcje?",
            ru: "Ты сделал домашнее задание?",
            tr: "Ödevini bitirdin mi?"
        },
        opcoes: {
            it: ["Non ancora, ho bisogno di più tempo", "No, serve tempo", "Sì, ho finito"],
            de: ["Noch nicht, ich brauche mehr Zeit", "Nein, brauche Zeit", "Ja, ich bin fertig"],
            nl: ["Nog niet, ik heb meer tijd nodig", "Nee, heb tijd nodig", "Ja, ik ben klaar"],
            pl: ["Jeszcze nie, potrzebuję więcej czasu", "Nie, potrzebuję czasu", "Tak, skończyłem"],
            ru: ["Еще нет, мне нужно больше времени", "Нет, нужно время", "Да, я закончил"],
            tr: ["Henüz değil, daha fazla zamana ihtiyacım var", "Hayır, zaman lazım", "Evet, bitirdim"]
        }
    },
    {
        npc: {
            it: "Cosa hai fatto lo scorso fine settimana?",
            de: "Was hast du letztes Wochenende gemacht?",
            nl: "Wat heb je afgelopen weekend gedaan?",
            pl: "Co robiłeś w zeszły weekend?",
            ru: "Что ты делал в прошлые выходные?",
            tr: "Geçen hafta sonu ne yaptın?"
        },
        opcoes: {
            it: ["Sono andato al cinema con amici", "Io vado al cinema", "Andato cinema"],
            de: ["Ich bin mit Freunden ins Kino gegangen", "Ich gehe ins Kino", "Kino gegangen"],
            nl: ["Ik ben met vrienden naar de bioscoop gegaan", "Ik ga naar bioscoop", "Bioscoop gegaan"],
            pl: ["Poszedłem do kina z przyjaciółmi", "Idę do kina", "Poszedłem kino"],
            ru: ["Я ходил в кино с друзьями", "Я иду в кино", "Ходил кино"],
            tr: ["Arkadaşlarımla sinemaya gittim", "Sinemaya gidiyorum", "Gittim sinema"]
        }
    },
    {
        npc: {
            it: "Hai animali domestici?",
            de: "Hast du Haustiere?",
            nl: "Heb je huisdieren?",
            pl: "Czy masz zwierzęta?",
            ru: "У тебя есть домашние животные?",
            tr: "Evcil hayvanın var mı?"
        },
        opcoes: {
            it: ["Sì, ho un cane e un gatto", "Sì, due animali cane", "Sì, io ho"],
            de: ["Ja, ich habe einen Hund und eine Katze", "Ja, zwei Haustiere Hund", "Ja, ich habe"],
            nl: ["Ja, ik heb een hond en een kat", "Ja, twee huisdieren hond", "Ja, ik heb"],
            pl: ["Tak, mam psa i kota", "Tak, dwa zwierzęta pies", "Tak, mam"],
            ru: ["Да, у меня есть собака и кошка", "Да, два питомца собака", "Да, у меня есть"],
            tr: ["Evet, bir köpeğim ve bir kedim var", "Evet, iki evcil köpek", "Evet, sahibim"]
        }
    },
    {
        npc: {
            it: "Possiamo incontrarci domani alle 10?",
            de: "Können wir uns morgen um 10 Uhr treffen?",
            nl: "Kunnen we morgen om 10 uur afspreken?",
            pl: "Czy możemy się spotkać jutro o 10 rano?",
            ru: "Мы можем встретиться завтра в 10 утра?",
            tr: "Yarın sabah 10'da buluşabilir miyiz?"
        },
        opcoes: {
            it: ["Sì, per me va bene", "Sì, domani 10", "Domani sì"],
            de: ["Ja, das passt mir", "Ja, morgen 10", "Morgen ja"],
            nl: ["Ja, dat komt mij uit", "Ja, morgen 10", "Morgen ja"],
            pl: ["Tak, to mi odpowiada", "Tak, jutro 10", "Jutro tak"],
            ru: ["Да, мне это подходит", "Да, завтра в 10", "Завтра да"],
            tr: ["Evet, bana uyar", "Evet, yarın 10", "Yarın evet"]
        }
    },
    {
        npc: {
            it: "Perché stai imparando una nuova lingua?",
            de: "Warum lernst du eine neue Sprache?",
            nl: "Waarom leer je een nieuwe taal?",
            pl: "Dlaczego uczysz się nowego języka?",
            ru: "Почему ты учишь новый язык?",
            tr: "Neden yeni bir dil öğreniyorsun?"
        },
        opcoes: {
            it: ["Perché voglio viaggiare l'anno prossimo.", "Perché lingua", "Per viaggiare imparo"],
            de: ["Weil ich nächstes Jahr reisen möchte.", "Warum Sprache", "Für Reisen lernen"],
            nl: ["Omdat ik volgend jaar wil reizen.", "Waarom taal", "Voor reizen leren"],
            pl: ["Ponieważ chcę podróżować w przyszłym roku.", "Dlaczego język", "Do podróży uczyć"],
            ru: ["Потому что я хочу путешествовать в следующем году.", "Почему язык", "Для путешествий учить"],
            tr: ["Çünkü gelecek yıl seyahat etmek istiyorum.", "Neden dil", "Seyahat için öğrenmek"]
        }
    },
    {
        npc: {
            it: "Penso che ci siamo persi in questa foresta.",
            de: "Ich glaube, wir haben uns in diesem Wald verlaufen.",
            nl: "Ik denk dat we verdwaald zijn in dit bos.",
            pl: "Myślę, że zgubiliśmy się w tym lesie.",
            ru: "Мне кажется, мы потерялись в этом лесу.",
            tr: "Sanırım bu ormanda kaybolduk."
        },
        opcoes: {
            it: ["Non ti preoccupare, ho una bussola qui.", "Perso foresta", "No preoccuparsi"],
            de: ["Keine Sorge, ich habe hier einen Kompass.", "Verlaufen Wald", "Keine Sorge"],
            nl: ["Maak je geen zorgen, ik heb hier een kompas.", "Verdwaald bos", "Geen zorgen"],
            pl: ["Nie martw się, mam tu kompas.", "Zgubieni las", "Bez obaw"],
            ru: ["Не волнуйся, у меня есть компас.", "Потерялись лес", "Не волнуйся"],
            tr: ["Merak etme, yanımda pusula var.", "Kayıp orman", "Endişelenme"]
        }
    },
    {
        npc: {
            it: "Quali sono i tuoi piani per l'estate?",
            de: "Was sind deine Pläne für den Sommer?",
            nl: "Wat zijn je plannen voor de zomer?",
            pl: "Jakie masz plany na lato?",
            ru: "Какие у тебя планы на лето?",
            tr: "Yaz için planların neler?"
        },
        opcoes: {
            it: ["Visiterò la Germania.", "Piani estate", "Germania andare"],
            de: ["Ich werde Deutschland besuchen.", "Sommerpläne", "Deutschland gehen"],
            nl: ["Ik ga Duitsland bezoeken.", "Zomerplannen", "Duitsland gaan"],
            pl: ["Zamierzam odwiedzić Niemcy.", "Plany lato", "Niemcy jechać"],
            ru: ["Я собираюсь посетить Германию.", "Планы лето", "Германия ехать"],
            tr: ["Almanya'yı ziyaret edeceğim.", "Yaz planları", "Almanya gitmek"]
        }
    },
    {
        npc: {
            it: "Dove hai comprato quella bella camicia?",
            de: "Wo hast du dieses schöne Hemd gekauft?",
            nl: "Waar heb je dat mooie overhemd gekocht?",
            pl: "Gdzie kupiłeś tę ładną koszulę?",
            ru: "Где ты купил эту красивую рубашку?",
            tr: "O güzel gömleği nereden aldın?"
        },
        opcoes: {
            it: ["L'ho comprata nel nuovo centro commerciale locale.", "Camicia centro", "Comprato camicia"],
            de: ["Ich habe es im neuen Einkaufszentrum gekauft.", "Hemd Zentrum", "Gekauft Hemd"],
            nl: ["Ik heb het in het nieuwe winkelcentrum gekocht.", "Overhemd centrum", "Gekocht overhemd"],
            pl: ["Kupiłem ją w nowym centrum handlowym.", "Koszula centrum", "Kupić koszula"],
            ru: ["Я купил ее в новом местном торговом центре.", "Рубашка центр", "Купил рубашку"],
            tr: ["Yeni yerel alışveriş merkezinden aldım.", "Gömlek AVM", "Satın aldım gömlek"]
        }
    },
    {
        npc: {
            it: "A mia sorella piace nuotare nel lago.",
            de: "Meine Schwester schwimmt gerne im See.",
            nl: "Mijn zus zwemt graag in het meer.",
            pl: "Moja siostra lubi pływać w jeziorze.",
            ru: "Моей сестре нравится плавать в озере.",
            tr: "Kız kardeşim gölde yüzmeyi sever."
        },
        opcoes: {
            it: ["L'acqua è abbastanza pulita per farlo?", "Sorella nuotare", "Lago buono"],
            de: ["Ist das Wasser sauber genug dafür?", "Schwester schwimmen", "See gut"],
            nl: ["Is het water daar schoon genoeg voor?", "Zus zwemmen", "Meer goed"],
            pl: ["Czy woda jest wystarczająco czysta do tego?", "Siostra pływać", "Jezioro dobre"],
            ru: ["Вода там достаточно чистая для этого?", "Сестра плавать", "Озеро хорошо"],
            tr: ["Su bunun için yeterince temiz mi?", "Kız kardeş yüzmek", "Göl iyi"]
        }
    },
    {
        npc: {
            it: "Potresti consigliarmi un buon libro da leggere?",
            de: "Könntest du mir ein gutes Buch zum Lesen empfehlen?",
            nl: "Zou je me een goed boek kunnen aanraden?",
            pl: "Czy mógłbyś polecić dobrą książkę do przeczytania?",
            ru: "Не мог бы ты порекомендовать хорошую книгу?",
            tr: "Okumak için iyi bir kitap önerebilir misin?"
        },
        opcoes: {
            it: ["Dovresti leggere il classico romanzo di fantascienza.", "Libro consigliare", "Leggere romanzo"],
            de: ["Du solltest den klassischen Science-Fiction-Roman lesen.", "Buch empfehlen", "Roman lesen"],
            nl: ["Je zou de klassieke sciencefictionroman moeten lezen.", "Boek aanraden", "Roman lezen"],
            pl: ["Powinieneś przeczytać klasyczną powieść sci-fi.", "Książka polecić", "Czytać powieść"],
            ru: ["Тебе стоит прочитать классический научно-фантастический роман.", "Книгу порекомендовать", "Читать роман"],
            tr: ["Klasik bilim kurgu romanını okumalısın.", "Kitap önermek", "Roman okumak"]
        }
    },
    {
        npc: {
            it: "Ha piovuto molto per tutto il pomeriggio.",
            de: "Es hat den ganzen Nachmittag stark geregnet.",
            nl: "Het heeft de hele middag hard geregend.",
            pl: "Padało intensywnie przez całe popołudnie.",
            ru: "Весь день шел сильный дождь.",
            tr: "Bütün öğleden sonra yoğun yağmur yağdı."
        },
        opcoes: {
            it: ["Sì, restiamo dentro a guardare la TV.", "Piove molto", "Pioggia fuori"],
            de: ["Ja, lass uns drinnen bleiben und fernsehen.", "Stark regnen", "Regen draußen"],
            nl: ["Ja, laten we binnen blijven en tv kijken.", "Hard regenen", "Regen buiten"],
            pl: ["Tak, zostańmy w domu i pooglądajmy telewizję.", "Pada mocno", "Deszcz na zewnątrz"],
            ru: ["Да, давай останемся дома и посмотрим телевизор.", "Сильный дождь", "Дождь на улице"],
            tr: ["Evet, içeride kalıp televizyon izleyelim.", "Yoğun yağmur", "Dışarıda yağmur"]
        }
    },
    {
        npc: {
            it: "Hai programmi per stasera?",
            de: "Hast du Pläne für heute Abend?",
            nl: "Heb je plannen voor vanavond?",
            pl: "Czy masz plany na dzisiejszy wieczór?",
            ru: "У тебя есть планы на вечер?",
            tr: "Bu gece için planın var mı?"
        },
        opcoes: {
            it: ["Cucinerò una zuppa speciale.", "Piani stasera", "Stasera cucinare"],
            de: ["Ich werde eine besondere Suppe kochen.", "Pläne Abend", "Abend kochen"],
            nl: ["Ik ga een speciale soep koken.", "Plannen avond", "Vanavond koken"],
            pl: ["Zamierzam ugotować specjalną zupę.", "Plany wieczór", "Wieczór gotować"],
            ru: ["Я собираюсь приготовить особый суп.", "Планы вечер", "Вечер готовить"],
            tr: ["Özel bir çorba pişireceğim.", "Gece planları", "Gece pişirmek"]
        }
    },
    {
        npc: {
            it: "Da quanto tempo lavori in questa panetteria?",
            de: "Wie lange arbeitest du schon in dieser Bäckerei?",
            nl: "Hoe lang werk je al in deze bakkerij?",
            pl: "Jak długo pracujesz w tej piekarni?",
            ru: "Как долго ты работаешь в этой пекарне?",
            tr: "Bu fırında ne kadar süredir çalışıyorsun?"
        },
        opcoes: {
            it: ["Lavoro qui da tre anni.", "Panetteria lavoro", "Lavorato qui"],
            de: ["Ich arbeite hier seit drei Jahren.", "Bäckerei Arbeit", "Hier gearbeitet"],
            nl: ["Ik werk hier al drie jaar.", "Bakkerij werk", "Hier gewerkt"],
            pl: ["Pracuję tu od trzech lat.", "Piekarnia praca", "Pracuję tutaj"],
            ru: ["Я работаю здесь три года.", "Пекарня работа", "Работал здесь"],
            tr: ["Üç yıldır burada çalışıyorum.", "Fırın iş", "Burada çalışmak"]
        }
    },
    {
        npc: {
            it: "Quale strumento ti piacerebbe suonare?",
            de: "Welches Instrument würdest du gerne spielen?",
            nl: "Welk instrument zou je willen spelen?",
            pl: "Na jakim instrumencie chciałbyś grać?",
            ru: "На каком инструменте ты хотел бы играть?",
            tr: "Hangi enstrümanı çalmak istersin?"
        },
        opcoes: {
            it: ["Mi piacerebbe molto imparare il pianoforte.", "Strumento suonare", "Piano suonare"],
            de: ["Ich würde gerne Klavier lernen.", "Instrument spielen", "Klavier spielen"],
            nl: ["Ik zou graag piano willen leren spelen.", "Instrument spelen", "Piano spelen"],
            pl: ["Bardzo chciałbym nauczyć się grać na pianinie.", "Instrument grać", "Pianino grać"],
            ru: ["Я бы очень хотел научиться играть на пианино.", "Инструмент играть", "Пианино играть"],
            tr: ["Piyano öğrenmeyi çok isterim.", "Enstrüman çalmak", "Piyano çalmak"]
        }
    },
    {
        npc: {
            it: "Il treno parte tra dieci minuti.",
            de: "Der Zug fährt in zehn Minuten ab.",
            nl: "De trein vertrekt over tien minuten.",
            pl: "Pociąg odjeżdża za dziesięć minut.",
            ru: "Поезд отправляется через десять минут.",
            tr: "Tren on dakika içinde kalkıyor."
        },
        opcoes: {
            it: ["Dovremmo correre al binario adesso.", "Treno parte", "Correre binario"],
            de: ["Wir sollten jetzt zum Bahnsteig rennen.", "Zug fährt", "Rennen Bahnsteig"],
            nl: ["We moeten nu naar het spoor rennen.", "Trein vertrekt", "Rennen spoor"],
            pl: ["Powinniśmy teraz biec na peron.", "Pociąg odjeżdża", "Biec peron"],
            ru: ["Нам нужно бежать на платформу прямо сейчас.", "Поезд уходит", "Бежать платформа"],
            tr: ["Hemen perona koşmalıyız.", "Tren kalkıyor", "Koşmak peron"]
        }
    },
    {
        npc: {
            it: "Scusi, questo autobus va in centro?",
            de: "Entschuldigung, fährt dieser Bus ins Stadtzentrum?",
            nl: "Excuseer me, gaat deze bus naar het centrum?",
            pl: "Przepraszam, czy ten autobus jedzie do centrum?",
            ru: "Извините, этот автобус идет в центр?",
            tr: "Afedersiniz, bu otobüs merkeze gidiyor mu?"
        },
        opcoes: {
            it: ["Sì, si ferma alla piazza principale.", "Autobus centro", "Centro andare"],
            de: ["Ja, er hält am Hauptplatz.", "Bus Zentrum", "Zentrum gehen"],
            nl: ["Ja, hij stopt op het hoofdplein.", "Bus centrum", "Centrum gaan"],
            pl: ["Tak, zatrzymuje się na głównym placu.", "Autobus centrum", "Centrum jechać"],
            ru: ["Да, он останавливается на главной площади.", "Автобус центр", "Центр идти"],
            tr: ["Evet, ana meydanda duruyor.", "Otobüs merkez", "Merkez gitmek"]
        }
    },
    {
        npc: {
            it: "Ho comprato un nuovo biglietto per lo spettacolo.",
            de: "Ich habe ein neues Ticket für die Show gekauft.",
            nl: "Ik heb een nieuw ticket voor de show gekocht.",
            pl: "Kupiłem nowy bilet na koncert.",
            ru: "Я купил новый билет на шоу.",
            tr: "Gösteri için yeni bir bilet aldım."
        },
        opcoes: {
            it: ["Era molto caro?", "Biglietto spettacolo", "Comprato biglietto"],
            de: ["War es sehr teuer?", "Ticket Show", "Gekauft Ticket"],
            nl: ["Was het erg duur?", "Ticket show", "Gekocht ticket"],
            pl: ["Czy był bardzo drogi?", "Bilet koncert", "Kupić bilet"],
            ru: ["Он был очень дорогим?", "Билет шоу", "Купил билет"],
            tr: ["Çok pahalı mıydı?", "Bilet gösteri", "Satın aldım bilet"]
        }
    },
    {
        npc: {
            it: "I miei genitori vivono in una città tranquilla.",
            de: "Meine Eltern leben in einer ruhigen Stadt.",
            nl: "Mijn ouders wonen in een rustige stad.",
            pl: "Moi rodzice mieszkają w spokojnym mieście.",
            ru: "Мои родители живут в тихом городе.",
            tr: "Ailem sakin bir şehirde yaşıyor."
        },
        opcoes: {
            it: ["Li visiti spesso?", "Genitori città", "Tranquilla città"],
            de: ["Besuchst du sie oft?", "Eltern Stadt", "Ruhig Stadt"],
            nl: ["Bezoek je ze vaak?", "Ouders stad", "Rustig stad"],
            pl: ["Odwiedzasz ich często?", "Rodzice miasto", "Spokojne miasto"],
            ru: ["Ты часто их навещаешь?", "Родители город", "Тихий город"],
            tr: ["Onları sık sık ziyaret eder misin?", "Aile şehir", "Sakin şehir"]
        }
    },
    {
        npc: {
            it: "Penso che questa torta sia deliziosa.",
            de: "Ich finde diesen Kuchen köstlich.",
            nl: "Ik vind deze taart heerlijk.",
            pl: "Myślę, że to ciasto jest pyszne.",
            ru: "Мне кажется, этот пирог восхитителен.",
            tr: "Bence bu kek lezzetli."
        },
        opcoes: {
            it: ["Potresti condividere la ricetta con me?", "Torta deliziosa", "Gusto torta"],
            de: ["Könntest du das Rezept mit mir teilen?", "Kuchen köstlich", "Mag Kuchen"],
            nl: ["Zou je het recept met me kunnen delen?", "Taart heerlijk", "Hou taart"],
            pl: ["Czy mógłbyś podzielić się ze mną przepisem?", "Ciasto pyszne", "Lubię ciasto"],
            ru: ["Не мог бы ты поделиться со мной рецептом?", "Пирог восхитительный", "Нравится пирог"],
            tr: ["Tarifini benimle paylaşabilir misin?", "Kek lezzetli", "Severim kek"]
        }
    },
    {
        npc: {
            it: "Dobbiamo comprare delle verdure per cena.",
            de: "Wir müssen Gemüse für das Abendessen kaufen.",
            nl: "We moeten groenten kopen voor het avondeten.",
            pl: "Musimy kupić warzywa na kolację.",
            ru: "Нам нужно купить овощей на ужин.",
            tr: "Akşam yemeği için sebze almamız gerekiyor."
        },
        opcoes: {
            it: ["Andiamo al mercato locale.", "Comprare verdure", "Cena verdure"],
            de: ["Lass uns zum lokalen Markt gehen.", "Gemüse kaufen", "Abendessen Gemüse"],
            nl: ["Laten we naar de lokale markt gaan.", "Groenten kopen", "Avondeten groenten"],
            pl: ["Chodźmy na lokalny rynek.", "Kupić warzywa", "Kolacja warzywa"],
            ru: ["Давай сходим на местный рынок.", "Купить овощи", "Ужин овощи"],
            tr: ["Yerel pazara gidelim.", "Sebze almak", "Yemek sebze"]
        }
    },
    {
        npc: {
            it: "Hai mai visitato un museo in Italia?",
            de: "Hast du jemals ein Museum in Italien besucht?",
            nl: "Heb je ooit een museum in Italië bezocht?",
            pl: "Czy kiedykolwiek odwiedziłeś muzeum we Włoszech?",
            ru: "Ты когда-нибудь был в музее в Италии?",
            tr: "Hiç İtalya'da müze ziyaret ettin mi?"
        },
        opcoes: {
            it: ["Sì, l'arte lì è incredibile.", "Museo Italia", "Arte Italia"],
            de: ["Ja, die Kunst dort ist unglaublich.", "Museum Italien", "Kunst Italien"],
            nl: ["Ja, de kunst daar is ongelooflijk.", "Museum Italië", "Kunst Italië"],
            pl: ["Tak, tamtejsza sztuka jest niesamowita.", "Muzeum Włochy", "Sztuka Włochy"],
            ru: ["Да, искусство там невероятное.", "Музей Италия", "Искусство Италия"],
            tr: ["Evet, oradaki sanat inanılmaz.", "Müze İtalya", "Sanat İtalya"]
        }
    },
    {
        npc: {
            it: "Ho perso il mio ombrello nella metropolitana.",
            de: "Ich habe meinen Regenschirm in der U-Bahn verloren.",
            nl: "Ik ben mijn paraplu verloren in de metro.",
            pl: "Zgubiłem parasol w metrze.",
            ru: "Я потерял свой зонт в метро.",
            tr: "Şemsiyemi metroda kaybettim."
        },
        opcoes: {
            it: ["Dovresti controllare l'ufficio oggetti smarriti.", "Ombrello perso", "Metro perso"],
            de: ["Du solltest im Fundbüro nachsehen.", "Schirm verloren", "U-Bahn verloren"],
            nl: ["Je zou bij het bureau gevonden voorwerpen moeten kijken.", "Paraplu verloren", "Metro verloren"],
            pl: ["Powinieneś sprawdzić biuro rzeczy znalezionych.", "Parasol zgubiony", "Metro zgubiony"],
            ru: ["Тебе стоит проверить бюро находок.", "Зонт потерял", "Метро потерял"],
            tr: ["Kayıp eşya bürosunu kontrol etmelisin.", "Şemsiye kayıp", "Metro kayıp"]
        }
    },
    {
        npc: {
            it: "Il mio medico mi ha consigliato di camminare di più.",
            de: "Mein Arzt hat mir geraten, mehr zu gehen.",
            nl: "Mijn dokter heeft me geadviseerd om meer te lopen.",
            pl: "Mój lekarz doradził mi, abym więcej spacerował.",
            ru: "Мой врач посоветовал мне больше ходить пешком.",
            tr: "Doktorum daha fazla yürümemi tavsiye etti."
        },
        opcoes: {
            it: ["Migliorerà la tua salute.", "Medico camminare", "Camminare di più"],
            de: ["Es wird deine Gesundheit verbessern.", "Arzt gehen", "Mehr gehen"],
            nl: ["Het zal je gezondheid verbeteren.", "Dokter lopen", "Meer lopen"],
            pl: ["To poprawi twoje zdrowie.", "Lekarz spacerować", "Więcej spaceru"],
            ru: ["Это улучшит твое здоровье.", "Врач ходить", "Больше ходить"],
            tr: ["Sağlığını düzeltecektir.", "Doktor yürümek", "Daha fazla yürümek"]
        }
    },

    // NÍVEL 2: AVANÇADO (35 Perguntas)
    {
        npc: {
            it: "Quali sono i tuoi punti di forza professionali?",
            de: "Was sind Ihre beruflichen Stärken?",
            nl: "Wat zijn uw professionele sterke punten?",
            pl: "Jakie są pana mocne strony zawodowe?",
            ru: "Каковы ваши профессиональные сильные стороны?",
            tr: "Mesleki güçlü yönleriniz nelerdir?"
        },
        opcoes: {
            it: ["Sono proattivo e altamente organizzato", "Lavoro bene", "Buon impiegato"],
            de: ["Ich bin proaktiv und sehr gut organisiert", "Guter Arbeiter", "Guter Angestellter"],
            nl: ["Ik ben proactief en zeer georganiseerd", "Goede werker", "Goede werknemer"],
            pl: ["Jestem proaktywny i bardzo dobrze zorganizowany", "Dobry pracownik", "Dobry pracownik"],
            ru: ["Я проактивен и очень организован", "Хороший работник", "Хороший сотрудник"],
            tr: ["Girişimciyim ve son derece düzenliyim", "İyi çalışan", "İyi eleman"]
        }
    },
    {
        npc: {
            it: "Come dovremmo affrontare il ritardo del progetto?",
            de: "Wie sollten wir mit der Projektverzögerung umgehen?",
            nl: "Hoe moeten we de projectvertraging aanpakken?",
            pl: "Jak powinniśmy zareagować na opóźnienie projektu?",
            ru: "Как нам решить проблему с задержкой проекта?",
            tr: "Proje gecikmesini nasıl ele almalıyız?"
        },
        opcoes: {
            it: ["Dovremmo prima dare la priorità alle attività critiche", "Lavorare più velocemente", "Ritardo male"],
            de: ["Wir sollten zuerst kritische Aufgaben priorisieren", "Schneller arbeiten", "Verzögerung schlecht"],
            nl: ["We moeten eerst kritieke taken prioriteren", "Sneller werken", "Vertraging slecht"],
            pl: ["Powinniśmy najpierw spriorytetyzować kluczowe zadania", "Pracować szybciej", "Opóźnienie źle"],
            ru: ["Нам нужно сначала расставить приоритеты для критических задач", "Работать быстрее", "Задержка плохо"],
            tr: ["Önce kritik görevlere öncelik vermeliyiz", "Daha hızlı çalışmak", "Gecikme kötü"]
        }
    },
    {
        npc: {
            it: "Come gestisci le situazioni stressanti?",
            de: "Wie gehen Sie mit stressigen Situationen um?",
            nl: "Hoe ga je om met stressvolle situaties?",
            pl: "Jak radzisz sobie ze stresującymi sytuacjami?",
            ru: "Как ты справляешься со стрессовыми ситуациями?",
            tr: "Stresli durumlarla nasıl başa çıkarsın?"
        },
        opcoes: {
            it: ["Pratico la meditazione e organizzo le attività", "Mi riposo", "Stress va bene"],
            de: ["Ich praktiziere Achtsamkeit und organisiere Aufgaben", "Ich ruhe mich aus", "Stress ist ok"],
            nl: ["Ik beoefen mindfulness en organiseer taken", "Ik rust uit", "Stress is ok"],
            pl: ["Praktykuję medytację i organizuję zadania", "Odpoczywam", "Stres jest ok"],
            ru: ["Я практикую медитацию и организую задачи", "Я отдыхаю", "Стресс — это нормально"],
            tr: ["Meditasyon yapar ve görevleri düzenlerim", "Dinlenirim", "Stres sorun değil"]
        }
    },
    {
        npc: {
            it: "Sei d'accordo con l'attuale proposta?",
            de: "Stimmen Sie dem aktuellen Vorschlag zu?",
            nl: "Bent u het eens met het huidige voorstel?",
            pl: "Czy zgadzasz się z obecną propozycją?",
            ru: "Ты согласен с текущим предложением?",
            tr: "Mevcut teklife katılıyor musun?"
        },
        opcoes: {
            it: ["Sono d'accordo, a patto di regolare il budget", "Sì, sono d'accordo", "Proposta sì"],
            de: ["Ich stimme zu, vorausgesetzt, wir passen das Budget an", "Ja, ich stimme zu", "Vorschlag ja"],
            nl: ["Ik ga akkoord, mits we het budget aanpassen", "Ja, ik ga akkoord", "Voorstel ja"],
            pl: ["Zgadzam się, pod warunkiem dostosowania budżetu", "Tak, zgadzam się", "Propozycja tak"],
            ru: ["Я согласен, при условии, что мы скорректируем бюджет", "Да, согласен", "Предложение да"],
            tr: ["Bütçeyi ayarlamamız şartıyla katılamıyorum değil", "Evet, katılıyorum", "Teklif evet"]
        }
    },
    {
        npc: {
            it: "Quali sono le previsioni di vendita per il prossimo trimestre?",
            de: "Wie sieht die Umsatzprognose für das nächste Quartal aus?",
            nl: "Wat is de verkoopvoorspelling voor het volgende kwartaal?",
            pl: "Jaka jest prognoza sprzedaży na następny kwartał?",
            ru: "Каков прогноз продаж на следующий квартал?",
            tr: "Gelecek çeyrek için satış tahmini nedir?"
        },
        opcoes: {
            it: ["Prevediamo una crescita del dieci percento", "Vendite buone", "Aumento vendite"],
            de: ["Wir erwarten ein Wachstum von zehn Prozent", "Umsatz gut", "Umsatzsteigerung"],
            nl: ["We verwachten een groei van tien procent", "Verkoop goed", "Stijging verkoop"],
            pl: ["Przewidujemy dziesięcioprocentowy wzrost", "Sprzedaż dobra", "Wzrost sprzedaży"],
            ru: ["Мы ожидаем рост на десять процентов", "Продажи хорошие", "Рост продаж"],
            tr: ["Yüzde onluk bir büyüme öngörüyoruz", "Satışlar iyi", "Satış artışı"]
        }
    },
    {
        npc: {
            it: "C'è stato un problema con il database?",
            de: "Gab es ein Problem mit der Datenbank?",
            nl: "Was er een probleem met de database?",
            pl: "Czy wystąpił problem z bazą danych?",
            ru: "Была ли проблема с базой данных?",
            tr: "Veritabanıyla ilgili bir sorun mu vardı?"
        },
        opcoes: {
            it: ["Sì, è andato offline per un'ora", "Server brutto", "Senza server"],
            de: ["Ja, sie war für eine Stunde offline", "Server schlecht", "Kein Server"],
            nl: ["Ja, het was een uur offline", "Server slecht", "Geen server"],
            pl: ["Tak, była offline przez godzinę", "Serwer zły", "Brak serwera"],
            ru: ["Да, она отключилась на час", "Сервер плохой", "Нет сервера"],
            tr: ["Evet, bir saat boyunca çevrimdışı kaldı", "Sunucu kötü", "Sunucusuz"]
        }
    },
    {
        npc: {
            it: "Potrebbe inviarmi la fattura, per favore?",
            de: "Könnten Sie mir bitte die Rechnung schicken?",
            nl: "Kunt u mij de factuur sturen, alstublieft?",
            pl: "Czy mógłby pan przesłać mi fakturę, proszę?",
            ru: "Не могли бы вы прислать мне счет, пожалуйста?",
            tr: "Faturayı bana gönderir misiniz, lütfen?"
        },
        opcoes: {
            it: ["Certamente, gliela invierò oggi via e-mail", "Fattura e-mail", "Inviare sì"],
            de: ["Klar, ich werde sie Ihnen heute per E-Mail schicken", "Rechnung E-Mail", "Senden ja"],
            nl: ["Natuurlijk, ik mail het u vandaag nog", "Factuur mailen", "Sturen ja"],
            pl: ["Jasne, wyślę ją dzisiaj e-mailem", "Faktura e-mail", "Wysłać tak"],
            ru: ["Конечно, я отправлю ее вам по электронной почте сегодня", "Счет почта", "Отправить да"],
            tr: ["Elbette, bugün size e-posta ile göndereceğim", "Fatura e-posta", "Gönder evet"]
        }
    },
    {
        npc: {
            it: "Qual è l'impatto della nuova politica?",
            de: "Welche Auswirkungen hat die neue Richtlinie?",
            nl: "Wat is de impact van het nieuwe beleid?",
            pl: "Jaki jest wpływ nowej polityki?",
            ru: "Каковы последствия новой политики?",
            tr: "Yeni politikanın etkisi nedir?"
        },
        opcoes: {
            it: ["Ridurrà i costi operativi", "Nuove tasse", "Cambio legge"],
            de: ["Es wird die Betriebskosten senken", "Neue Steuern", "Gesetzesänderung"],
            nl: ["Het zal de operationele kosten verlagen", "Nieuwe belastingen", "Wetswijziging"],
            pl: ["Zredukuje koszty operacyjne", "Nowe podatki", "Zmiana prawa"],
            ru: ["Это снизит операционные расходы", "Новые налоги", "Изменение закона"],
            tr: ["Operasyonel maliyetleri azaltacaktır", "Yeni vergiler", "Yasa değişikliği"]
        }
    },
    {
        npc: {
            it: "Come gestisci i conflitti all'interno del team?",
            de: "Wie gehen Sie mit Teamkonflikten um?",
            nl: "Hoe beheer je teamconflicten?",
            pl: "Jak zarządzasz konfliktami w zespole?",
            ru: "Как вы разрешаете конфликты в команде?",
            tr: "Takım çatışmalarını nasıl yönetirsiniz?"
        },
        opcoes: {
            it: ["Incoraggiando una comunicazione aperta", "Parlare forte", "Squadra litiga"],
            de: ["Durch Förderung offener Kommunikation", "Laut sprechen", "Teamstreit"],
            nl: ["Door open communicatie aan te moedigen", "Hard praten", "Teamgevecht"],
            pl: ["Zachęcając do otwartej komunikacji", "Mówić głośno", "Walka zespołowa"],
            ru: ["Поощряя открытое общение", "Говорить громко", "Ссора в команде"],
            tr: ["Açık iletişimi teşvik ederek", "Yüksek sesle konuşmak", "Takım kavgası"]
        }
    },
    {
        npc: {
            it: "Qual è l'obiettivo principale della campagna?",
            de: "Was ist das Hauptziel der Kampagne?",
            nl: "Wat is het hoofddoel van de campagne?",
            pl: "Jaki jest główny cel kampanii?",
            ru: "Какова основная цель кампании?",
            tr: "Kampanyanın ana hedefi nedir?"
        },
        opcoes: {
            it: ["Aumentare la notorietà del marchio", "Diventare popolare", "Vendere di più"],
            de: ["Steigerung der Markenbekanntheit", "Beliebt werden", "Mehr verkaufen"],
            nl: ["De naamsbekendheid vergroten", "Populair worden", "Meer verkopen"],
            pl: ["Zwiększenie świadomości marki", "Zyskać popularność", "Sprzedać więcej"],
            ru: ["Повышение узнаваемости бренда", "Стать популярным", "Продать больше"],
            tr: ["Marka bilinirliğini artırmak", "Popüler olmak", "Daha çok satmak"]
        }
    },
    {
        npc: {
            it: "Possiamo posticipare la scadenza di una settimana?",
            de: "Können wir die Frist um eine Woche verschieben?",
            nl: "Kunnen we de deadline met een week uitstellen?",
            pl: "Czy możemy przełożyć termin o tydzień?",
            ru: "Можем ли мы перенести дедлайн на неделю?",
            tr: "Son teslim tarihini bir hafta erteleyebilir miyiz?"
        },
        opcoes: {
            it: ["Solo se otteniamo l'approvazione del cliente", "Solo se cliente", "Posticipare sì"],
            de: ["Nur wenn wir die Zustimmung des Kunden erhalten", "Nur wenn Kunde", "Verschieben ja"],
            nl: ["Alleen als we goedkeuring van de klant krijgen", "Alleen als klant", "Uitstellen ja"],
            pl: ["Tylko jeśli uzyskamy zgodę klienta", "Tylko klient", "Przełożyć tak"],
            ru: ["Только если получим одобрение клиента", "Только клиент", "Перенести да"],
            tr: ["Sadece müşteri onayı alırsak", "Sadece müşteri", "Ertelemek evet"]
        }
    },
    {
        npc: {
            it: "Qual è la tua opinione sul lavoro a distanza?",
            de: "Wie ist Ihre Meinung zum Homeoffice?",
            nl: "Wat is uw mening over thuiswerken?",
            pl: "Jaka jest twoja opinia na temat pracy zdalnej?",
            ru: "Каково твое мнение об удаленной работе?",
            tr: "Uzaktan çalışma hakkındaki düşünceniz nedir?"
        },
        opcoes: {
            it: ["Aumenta la produttività e la flessibilità", "Lavoro casa", "Flessibilità buona"],
            de: ["Es erhöht die Produktivität und Flexibilität", "Heimarbeit", "Flexibilität gut"],
            nl: ["Het verhoogt de productiviteit en flexibiliteit", "Thuiswerken", "Flexibiliteit goed"],
            pl: ["Zwiększa produktywność i elastyczność", "Praca dom", "Elastyczność dobra"],
            ru: ["Это повышает производительность и гибкость", "Работа дома", "Гибкость хорошо"],
            tr: ["Verimliliği ve esnekliği artırır", "Evden çalışma", "Esneklik iyi"]
        }
    },
    {
        npc: {
            it: "Come misuri il successo di un progetto?",
            de: "Wie messen Sie den Projekterfolg?",
            nl: "Hoe meet u het succes van een project?",
            pl: "Jak mierzysz sukces projektu?",
            ru: "Как вы измеряете успех проекта?",
            tr: "Projenin başarısını nasıl ölçersiniz?"
        },
        opcoes: {
            it: ["Attraverso indicatori chiave di prestazione", "Controllare risultati", "Metrica mostra"],
            de: ["Durch Key Performance Indicators (KPIs)", "Ergebnisse prüfen", "Metrik zeigen"],
            nl: ["Via key performance indicators (KPI's)", "Resultaten controleren", "Metriek tonen"],
            pl: ["Poprzez kluczowe wskaźniki efektywności", "Sprawdzić wyniki", "Metryka pokazuje"],
            ru: ["С помощью ключевых показателей эффективности", "Проверить результаты", "Показать метрику"],
            tr: ["Temel performans göstergeleri (KPI) aracılığıyla", "Sonuçları kontrol et", "Metrik göster"]
        }
    },
    {
        npc: {
            it: "Quali sono i rischi di questo investimento?",
            de: "Welche Risiken birgt diese Investition?",
            nl: "Wat zijn de risico's van deze investering?",
            pl: "Jakie są ryzyka tej inwestycji?",
            ru: "Каковы риски этого инвестирования?",
            tr: "Bu yatırımın riskleri nelerdir?"
        },
        opcoes: {
            it: ["Volatilità del mercato e alta concorrenza", "Perdita denaro", "Rischio mercato"],
            de: ["Marktvolatilität und starker Wettbewerb", "Geldverlust", "Risiko Markt"],
            nl: ["Marktvolatiliteit en hoge concurrentie", "Geldverlies", "Risico markt"],
            pl: ["Zmienność rynku i wysoka konkurencja", "Strata pieniędzy", "Ryzyko rynkowe"],
            ru: ["Волатильность рынка и высокая конкуренция", "Потеря денег", "Риск рынка"],
            tr: ["Piyasa dalgalanması ve yüksek rekabet", "Para kaybı", "Risk piyasa"]
        }
    },
    {
        npc: {
            it: "Può riassumere la riunione?",
            de: "Können Sie das Treffen zusammenfassen?",
            nl: "Kunt u de vergadering samenvatten?",
            pl: "Czy możesz podsumować spotkanie?",
            ru: "Не могли бы вы кратко изложить итоги встречи?",
            tr: "Toplantıyı özetleyebilir misiniz?"
        },
        opcoes: {
            it: ["Abbiamo deciso di lanciare il prodotto ad agosto", "Lancio agosto", "Prodotto lancio"],
            de: ["Wir haben beschlossen, das Produkt im August auf den Markt zu bringen", "Launch August", "Produktlaunch"],
            nl: ["We hebben besloten om het product in augustus te lanceren", "Lancering augustus", "Productlancering"],
            pl: ["Zdecydowaliśmy o wprowadzeniu produktu w sierpniu", "Start sierpień", "Produkt start"],
            ru: ["Мы решили запустить продукт в августе", "Запуск август", "Продукт запуск"],
            tr: ["Ürünü Ağustos ayında piyasaya sürmeye karar verdik", "Lansman Ağustos", "Ürün lansman"]
        }
    },
    {
        npc: {
            it: "Qual è la visione a lungo termine dell'azienda?",
            de: "Was ist die langfristige Vision des Unternehmens?",
            nl: "Wat is de langetermijnvisie van het bedrijf?",
            pl: "Jaka jest długoterminowa wizja firmy?",
            ru: "Каково долгосрочное видение компании?",
            tr: "Şirketin uzun vadeli vizyonu nedir?"
        },
        opcoes: {
            it: ["Diventare il leader di mercato nella tecnologia", "Diventare grande", "Leader tecnologico"],
            de: ["Marktführer im Bereich Technologie zu werden", "Groß werden", "Technologieführer"],
            nl: ["De marktleider worden in technologie", "Groot worden", "Technologieleider"],
            pl: ["Zostać liderem rynku w branży technologicznej", "Zyskać wielkość", "Lider technologii"],
            ru: ["Стать лидером рынка в сфере технологий", "Стать большим", "Лидер технологий"],
            tr: ["Teknolojide pazar lideri olmak", "Büyümek", "Teknoloji lideri"]
        }
    },
    {
        npc: {
            it: "Come ti mantieni aggiornato nel tuo settore?",
            de: "Wie halten Sie sich in Ihrem Bereich auf dem Laufenden?",
            nl: "Hoe blijf je op de hoogte in jouw vakgebied?",
            pl: "Jak dbasz o aktualność wiedzy w swojej dziedzinie?",
            ru: "Как ты следишь за обновлениями в своей сфере?",
            tr: "Alanınızda kendinizi nasıl güncel tutuyorsunuz?"
        },
        opcoes: {
            it: ["Leggo articoli e partecipo a webinar", "Vedo notizie", "Studio sempre"],
            de: ["Ich lese Artikel und nehme an Webinaren teil", "Sehe Nachrichten", "Lerne immer"],
            nl: ["Ik lees artikelen en woon webinars bij", "Kijk nieuws", "Studeer altijd"],
            pl: ["Czytam artykuły i biorę udział w webinarach", "Oglądam wiadomości", "Studiuję zawsze"],
            ru: ["Я читаю статьи и посещаю вебинары", "Смотрю новости", "Всегда учусь"],
            tr: ["Makaleler okur ve web seminerlerine katılırım", "Haberleri izlerim", "Her zaman çalışırım"]
        }
    },
    {
        npc: {
            it: "Qual è lo stato della negoziazione del contratto?",
            de: "Wie ist der Status der Vertragsverhandlungen?",
            nl: "Wat is de status van de contractonderhandeling?",
            pl: "Jaki jest status negocjacji umowy?",
            ru: "Каков статус переговоров по контракту?",
            tr: "Sözleşme müzakerelerinin durumu nedir?"
        },
        opcoes: {
            it: ["Stiamo esaminando la bozza finale", "Controllare finale", "Esaminare bozza"],
            de: ["Wir prüfen den endgültigen Entwurf", "Prüfen final", "Entwurf prüfen"],
            nl: ["We bekijken de definitieve versie", "Controleren finale", "Concept bekijken"],
            pl: ["Przeglądamy ostateczny projekt", "Sprawdzić ostateczny", "Przegląd projektu"],
            ru: ["Мы рассматриваем окончательный проект", "Проверить проект", "Проверка проекта"],
            tr: ["Son taslağı inceliyoruz", "Son kontrol", "Taslak inceleme"]
        }
    },
    {
        npc: {
            it: "Abbiamo risorse per questo compito?",
            de: "Haben wir Ressourcen für diese Aufgabe?",
            nl: "Hebben we middelen voor deze taak?",
            pl: "Czy mamy zasoby do tego zadania?",
            ru: "У нас есть ресурсы для этой задачи?",
            tr: "Bu görev için kaynaklarımız var mı?"
        },
        opcoes: {
            it: ["Sì, il team è completamente attrezzato", "Sì, c'è team", "Team buono"],
            de: ["Ja, das Team ist bestens gerüstet", "Ja, gibt Team", "Team gut"],
            nl: ["Ja, het team is volledig uitgerust", "Ja, is team", "Team goed"],
            pl: ["Tak, zespół jest w pełni wyposażony", "Tak, jest zespół", "Zespół dobry"],
            ru: ["Да, команда полностью укомплектована", "Да, есть команда", "Команда готова"],
            tr: ["Evet, ekip tam donanımlı", "Evet, ekip var", "Ekip iyi"]
        }
    },
    {
        npc: {
            it: "Qual è il limite di budget del progetto?",
            de: "Wie hoch ist das Budgetlimit des Projekts?",
            nl: "Wat is het budgetlimiet van het project?",
            pl: "Jaki jest limit budżetu projektu?",
            ru: "Каков лимит бюджета проекта?",
            tr: "Proje bütçe sınırı nedir?"
        },
        opcoes: {
            it: ["Sono cinquantamila dollari", "Cinquantamila limite", "Budget cinquantamila"],
            de: ["Es liegt bei fünfzigtausend Dollar", "Fünfzigtausend Limit", "Budget fünfzigtausend"],
            nl: ["Het is vijftigduizend dollar", "Vijftigduizend limiet", "Budget vijftigduizend"],
            pl: ["To pięćdziesiąt tysięcy dolarów", "Pięćdziesiąt tysięcy limit", "Budżet pięćdziesiąt"],
            ru: ["Это пятьдесят тысяч долларов", "Пятьдесят тысяч лимит", "Бюджет пятьдесят"],
            tr: ["Elli bin dolar", "Elli bin limit", "Bütçe elli bin"]
        }
    },
    {
        npc: {
            it: "Come gestisci i reclami dei clienti?",
            de: "Wie gehen Sie mit Kundenreklamationen um?",
            nl: "Hoe ga je om con klachten van klanten?",
            pl: "Jak radzisz sobie ze skargami klientów?",
            ru: "Как вы справляетесь с жалобами клиентов?",
            tr: "Müşteri şikayetlerini nasıl ele alırsınız?"
        },
        opcoes: {
            it: ["Ascoltando attivamente e offrendo soluzioni", "Ignorarli", "Chiedere scusa"],
            de: ["Durch aktives Zuhören und Anbieten von Lösungen", "Ignoriere sie", "Entschuldigen"],
            nl: ["Door actief te luisteren en oplossingen te bieden", "Negeer ze", "Excuses aanbieden"],
            pl: ["Poprzez aktywne słuchanie i oferowanie rozwiązań", "Ignorować je", "Przeprosić"],
            ru: ["Активно выслушивая и предлагая решения", "Игнорировать их", "Извиниться"],
            tr: ["Aktif olarak dinleyip çözümler sunarak", "Onları görmezden gelmek", "Özür dilemek"]
        }
    },
    {
        npc: {
            it: "Quali sono le caratteristiche chiave del prodotto?",
            de: "Was sind die Hauptmerkmale des Produkts?",
            nl: "Wat zijn de belangrijkste kenmerken van het product?",
            pl: "Jakie są kluczowe cechy produktu?",
            ru: "Каковы ключевые особенности продукта?",
            tr: "Ürünün temel özellikleri nelerdir?"
        },
        opcoes: {
            it: ["È veloce, sicuro e facile da usare", "È economico", "Buon prodotto"],
            de: ["Es ist schnell, sicher und einfach zu bedienen", "Es ist billig", "Gutes Produkt"],
            nl: ["Het is snel, veilig en gemakkelijk te gebruiken", "Het is goedkoop", "Goed product"],
            pl: ["Jest szybki, bezpieczny i łatwy w użyciu", "Jest tani", "Dobry produkt"],
            ru: ["Он быстрый, безопасный и простой в использовании", "Он дешевый", "Хороший продукт"],
            tr: ["Hızlı, güvenli ve kullanımı kolaydır", "Ucuzdur", "İyi ürün"]
        }
    },
    {
        npc: {
            it: "Possiamo programmare una chiamata di follow-up?",
            de: "Können wir ein Folgegespräch vereinbaren?",
            nl: "Kunnen we een vervolggesprek plannen?",
            pl: "Czy możemy zaplanować rozmowę kontrolną?",
            ru: "Мы можем запланировать повторный звонок?",
            tr: "Takip araması ayarlayabilir miyiz?"
        },
        opcoes: {
            it: ["Sì, parliamone giovedì prossimo", "Sì, parlare giovedì", "Giovedì sì"],
            de: ["Ja, lassen Sie uns nächsten Donnerstag sprechen", "Ja, Donnerstag sprechen", "Donnerstag ja"],
            nl: ["Ja, laten we aanstaande donderdag praten", "Ja, donderdag praten", "Donderdag ja"],
            pl: ["Tak, porozmawiajmy w przyszły czwartek", "Tak, rozmawiać czwartek", "Czwartek tak"],
            ru: ["Да, давайте созвонимся в следующий четверг", "Да, созвонимся в четверг", "Четверг да"],
            tr: ["Evet, önümüzdeki Perşembe konuşalım", "Evet, Perşembe konuşalım", "Perşembe evet"]
        }
    },
    {
        npc: {
            it: "Qual è la principale fonte di reddito?",
            de: "Was ist die Haupteinnahmequelle?",
            nl: "Wat is de belangrijkste inkomstenbron?",
            pl: "Co jest głównym źródłem dochodu?",
            ru: "Каков основной источник дохода?",
            tr: "Ana gelir kaynağı nedir?"
        },
        opcoes: {
            it: ["Abbonamenti software", "Vendita computer", "Annunci"],
            de: ["Software-Abonnements", "Computer verkaufen", "Anzeigen"],
            nl: ["Software-abonnementen", "Computers verkopen", "Advertenties"],
            pl: ["Subskrypcje oprogramowania", "Sprzedaż komputerów", "Reklamy"],
            ru: ["Подписки на программное обеспечение", "Продажа компьютеров", "Реклама"],
            tr: ["Yazılım abonelikleri", "Bilgisayar satmak", "Reklamlar"]
        }
    },
    {
        npc: {
            it: "Come dai la priorità alle tue attività quotidiane?",
            de: "Wie priorisieren Sie Ihre täglichen Aufgaben?",
            nl: "Hoe prioriteer je je dagelijkse taken?",
            pl: "Jak ustalasz priorytety swoich codziennych zadań?",
            ru: "Как ты расставляешь приоритеты в повседневных задачах?",
            tr: "Günlük görevlerinizi nasıl önceliklendiriyorsunuz?"
        },
        opcoes: {
            it: ["In base all'urgenza e al valore aziendale", "In base alla data", "Le faccio a caso"],
            de: ["Nach Dringlichkeit und Geschäftswert", "Nach Datum", "Ich mache sie zufällig"],
            nl: ["Op basis van urgentie en bedrijfswaarde", "Op basis van datum", "Ik doe ze willekeurig"],
            pl: ["Według pilności i wartości biznesowej", "Według daty", "Robię je losowo"],
            ru: ["По срочности и бизнес-ценности", "По дате", "Делаю их случайно"],
            tr: ["Aciliyet ve iş değerine göre", "Tarihe göre", "Rastgele yapıyorum"]
        }
    },
    {
        npc: {
            it: "Qual è il suo feedback sulla mia presentazione?",
            de: "Wie ist Ihr Feedback zu meiner Präsentation?",
            nl: "Wat is uw feedback op mijn presentatie?",
            pl: "Jaka jest twoja opinia o mojej prezentacji?",
            ru: "Каковы ваши отзывы о моей презентации?",
            tr: "Sunumum hakkındaki geri bildiriminiz nedir?"
        },
        opcoes: {
            it: ["È stata molto chiara e professionale", "È stata brutta", "È stata lunga"],
            de: ["Sie war sehr klar und professionell", "Sie war schlecht", "Sie war lang"],
            nl: ["Het was heel duidelijk en professioneel", "Het was slecht", "Het was lang"],
            pl: ["Była bardzo jasna i profesjonalna", "Była słaba", "Była długa"],
            ru: ["Она была очень понятной и профессиональной", "Она была плохой", "Она была длинной"],
            tr: ["Çok net ve profesyoneldi", "Kötüydü", "Uzundu"]
        }
    },
    {
        npc: {
            it: "Qual è l'obiettivo di questo aggiornamento del software?",
            de: "Was ist das Ziel dieses Software-Updates?",
            nl: "Wat is het doel van deze software-update?",
            pl: "Jaki jest cel tej aktualizacji oprogramowania?",
            ru: "Какова цель этого обновления программного обеспечения?",
            tr: "Bu yazılım güncellemesinin amacı nedir?"
        },
        opcoes: {
            it: ["Correggere bug di sicurezza e migliorare la velocità.", "Aggiornare velocità", "Correggere bug"],
            de: ["Sicherheitsfehler zu beheben und die Geschwindigkeit zu verbessern.", "Geschwindigkeit aktualisieren", "Fehler beheben"],
            nl: ["Beveiligingsfouten oplossen en snelheid verbeteren.", "Snelheid bijwerken", "Bugs oplossen"],
            pl: ["Naprawa błędów bezpieczeństwa i poprawa szybkości.", "Aktualizacja szybkości", "Naprawa błędów"],
            ru: ["Исправление ошибок безопасности и повышение скорости.", "Обновление скорости", "Исправление ошибок"],
            tr: ["Güvenlik açıklarını düzeltmek ve hızı artırmak.", "Hız güncellemesi", "Hata düzeltme"]
        }
    },
    {
        npc: {
            it: "Il nostro cliente ha richiesto un rapporto dettagliato.",
            de: "Unser Kunde hat einen detaillierten Bericht angefordert.",
            nl: "Onze klant heeft om een gedetailleerd rapport gevraagd.",
            pl: "Nasz klient poprosił o szczegółowy raport.",
            ru: "Наш клиент запросил подробный отчет.",
            tr: "Müşterimiz detaylı bir rapor talep etti."
        },
        opcoes: {
            it: ["Inizierò a scriverlo immediatamente.", "Scrivere rapporto", "Rapporto dettagliato"],
            de: ["Ich werde sofort damit beginnen, es zu schreiben.", "Bericht schreiben", "Detaillierter Bericht"],
            nl: ["Ik begin er meteen aan te schrijven.", "Rapport schrijven", "Gedetailleerd rapport"],
            pl: ["Zacznę go pisać natychmiast.", "Pisać raport", "Szczegółowy raport"],
            ru: ["Я начну писать его немедленно.", "Писать отчет", "Подробный отчет"],
            tr: ["Hemen yazmaya başlayacağım.", "Rapor yazmak", "Detaylı rapor"]
        }
    },
    {
        npc: {
            it: "Dovremmo assumere un nuovo sviluppatore?",
            de: "Sollten wir einen neuen Entwickler einstellen?",
            nl: "Moeten we een nieuwe ontwikkelaar aannemen?",
            pl: "Czy powinniśmy zatrudnić nowego programistę?",
            ru: "Стоит ли нам нанять нового разработчика?",
            tr: "Yeni bir yazılımcı işe almalı mıyız?"
        },
        opcoes: {
            it: ["Solo se l'ambito del progetto aumenta.", "Assumere sviluppatore", "Sviluppatore sì"],
            de: ["Nur wenn der Projektumfang zunimmt.", "Entwickler einstellen", "Entwickler ja"],
            nl: ["Alleen als de projectomvang groter wordt.", "Ontwikkelaar aannemen", "Ontwikkelaar ja"],
            pl: ["Tylko jeśli zwiększy się zakres projektu.", "Zatrudnić programistę", "Programista tak"],
            ru: ["Только если объем проекта увеличится.", "Нанять разработчика", "Разработчик да"],
            tr: ["Sadece proje kapsamı artarsa.", "Yazılımcı işe almak", "Yazılımcı evet"]
        }
    },
    {
        npc: {
            it: "Dobbiamo ridurre i costi operativi.",
            de: "Wir müssen die Betriebskosten senken.",
            nl: "We moeten de operationele kosten verlagen.",
            pl: "Musimy zmniejszyć koszty operacyjne.",
            ru: "Нам необходимо снизить операционные расходы.",
            tr: "Operasyonel maliyetleri düşürmemiz gerekiyor."
        },
        opcoes: {
            it: ["Dovremmo prima ridurre l'uso della carta.", "Ridurre costi", "Costi operativi"],
            de: ["Wir sollten zuerst den Papierverbrauch reduzieren.", "Kosten senken", "Betriebskosten"],
            nl: ["We moeten eerst het papierverbruik verminderen.", "Kosten verlagen", "Operationele kosten"],
            pl: ["Powinniśmy najpierw ograniczyć zużycie papieru.", "Zmniejszyć koszty", "Koszty operacyjne"],
            ru: ["Сначала нам следует сократить расход бумаги.", "Снизить расходы", "Операционные расходы"],
            tr: ["Önce kağıt kullanımını azaltmalıyız.", "Maliyetleri düşürmek", "Operasyonel maliyetler"]
        }
    },
    {
        npc: {
            it: "Il carico del server è estremamente alto oggi.",
            de: "Die Serverauslastung ist heute extrem hoch.",
            nl: "De serverbelasting is extreem hoog vandaag.",
            pl: "Obciążenie serwera jest dzisiaj niezwykle wysokie.",
            ru: "Нагрузка на сервер сегодня чрезвычайно высока.",
            tr: "Sunucu yükü bugün son derece yüksek."
        },
        opcoes: {
            it: ["Dobbiamo ridimensionare le nostre istanze di database.", "Carico server", "Database alto"],
            de: ["Wir müssen unsere Datenbankinstanzen skalieren.", "Serverauslastung", "Datenbank hoch"],
            nl: ["We moeten onze database-instanties schalen.", "Serverbelasting", "Database hoog"],
            pl: ["Musimy przeskalować nasze instancje baz danych.", "Obciążenie serwera", "Baza danych wysokie"],
            ru: ["Мы должны масштабировать наши инстансы базы данных.", "Нагрузка сервера", "База данных"],
            tr: ["Veritabanı örneklerimizi ölçeklendirmeliyiz.", "Sunucu yükü", "Veritabanı yüksek"]
        }
    },
    {
        npc: {
            it: "Il mercato sta reagendo positivamente al nostro lancio.",
            de: "Der Markt reagiert positiv auf unseren Launch.",
            nl: "De markt reageert positief op onze lancering.",
            pl: "Rynek reaguje pozytywnie na nasz start.",
            ru: "Рынок позитивно реагирует на наш запуск.",
            tr: "Piyasa lansmanımıza olumlu tepki veriyor."
        },
        opcoes: {
            it: ["Questa è un'opportunità perfetta per espandersi.", "Reazione mercato", "Lancio espandere"],
            de: ["Dies ist eine perfekte Gelegenheit zur Expansion.", "Marktreaktion", "Launch expandieren"],
            nl: ["Dit is een perfecte gelegenheid om uit te breiden.", "Marktreactie", "Lancering uitbreiden"],
            pl: ["To doskonała okazja do ekspansji.", "Reakcja rynku", "Start ekspansja"],
            ru: ["Это прекрасная возможность для расширения.", "Реакция рынка", "Запуск расширить"],
            tr: ["Bu genişlemek için mükemmel bir fırsat.", "Piyasa tepkisi", "Lansman genişletmek"]
        }
    },
    {
        npc: {
            it: "Dovremmo cambiare la strategia di marketing?",
            de: "Sollten wir die Marketingstrategie ändern?",
            nl: "Moeten we de marketingstrategie wijzigen?",
            pl: "Czy powinniśmy zmienić strategię marketingową?",
            ru: "Стоит ли нам изменить маркетинговую стратегию?",
            tr: "Pazarlama stratejisini değiştirmeli miyiz?"
        },
        opcoes: {
            it: ["Sì, dobbiamo concentrarci sui social media.", "Mantenere marketing", "Cambio strategia"],
            de: ["Ja, wir müssen uns auf Social Media konzentrieren.", "Marketing ändern", "Strategiewechsel"],
            nl: ["Ja, we moeten ons op social media richten.", "Marketing wijzigen", "Strategiewijziging"],
            pl: ["Tak, musimy skupić się na mediach społecznościowych.", "Zmienić marketing", "Zmiana strategii"],
            ru: ["Да, нам нужно сосредоточиться на социальных сетях.", "Изменить маркетинг", "Смена стратегии"],
            tr: ["Evet, sosyal medyaya odaklanmamız gerekiyor.", "Pazarlama değiştirmek", "Strateji değişikliği"]
        }
    },
    {
        npc: {
            it: "Qual è il ritorno sull'investimento di questa campagna?",
            de: "Wie hoch ist der Return on Investment dieser Kampagne?",
            nl: "Wat is de return on investment van deze campagne?",
            pl: "Jaki jest zwrot z inwestycji tej kampanii?",
            ru: "Каков возврат инвестиций этой кампании?",
            tr: "Bu kampanyanın yatırım getirisi nedir?"
        },
        opcoes: {
            it: ["Ha raggiunto circa il centocinquanta percento.", "Campagna ROI", "Ritorno campagna"],
            de: ["Er erreichte etwa einhundertfünfzig Prozent.", "Kampagne ROI", "Rückfluss Kampagne"],
            nl: ["Het bereikte ongeveer honderdvijftig procent.", "Campagne ROI", "Rendement campagne"],
            pl: ["Osiągnął około stu pięćdziesięciu procent.", "Kampania ROI", "Zwrot kampania"],
            ru: ["Он достиг около ста пятидесяти процентов.", "Кампания ROI", "Возврат кампания"],
            tr: ["Yaklaşık yüzde yüz elliye ulaştı.", "Kampanya ROI", "Getiri kampanya"]
        }
    },
    {
        npc: {
            it: "Il nostro manager vuole approvare il design del layout.",
            de: "Unser Manager möchte das Layout-Design genehmigen.",
            nl: "Onze manager wil het lay-outontwerp goedkeuren.",
            pl: "Nasz kierownik chce zatwierdzić projekt układu.",
            ru: "Наш менеджер хочет утвердить дизайн макета.",
            tr: "Yöneticimiz düzen tasarımını onaylamak istiyor."
        },
        opcoes: {
            it: ["Invierò il prototipo finale oggi.", "Manager layout", "Design layout"],
            de: ["Ich werde den endgültigen Prototyp heute senden.", "Manager Layout", "Layout-Design"],
            nl: ["Ik stuur het definitieve prototype vandaag nog.", "Manager lay-out", "Lay-outontwerp"],
            pl: ["Wyślę dzisiaj ostateczny prototyp.", "Kierownik układ", "Projekt układu"],
            ru: ["Я отправлю окончательный прототип сегодня.", "Менеджер макет", "Дизайн макета"],
            tr: ["Bugün nihai prototipi göndereceğim.", "Yönetici düzen", "Düzen tasarımı"]
        }
    }
];

// Lógica de processamento e gravação no js/data.js:
const originalData = fs.readFileSync(dataPath, 'utf8');

// 1. Reescrever a função q() para mapear dinamicamente todos os 11 idiomas passados
const newQDefinition = `function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
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
}`;

const oldQDefinition = `function q(nivel, correta, en, pt, es, fr, ja, opEn, opPt, opEs, opFr, opJa) {
    return {
        nivel, correta,
        npc: { en, pt, es, fr, ja, it: es, de: en, nl: en, pl: en, ru: en, tr: es }, // Fallback inteligente para evitar quebras nos outros idiomas
        opcoes: { en: opEn, pt: opPt, es: opEs, fr: opFr, ja: opJa, it: opEs, de: opEn, nl: opEn, pl: opEn, ru: opEn, tr: opEs },
        explicacao: { pt: "Resposta adequada para a situação descrita.", en: "Appropriate response for this situation." }
    };
}`;

// Remove qualquer declaração anterior do translationsMap ou rawQuestionsIndexMap para evitar duplicatas
let cleanedData = originalData;

// Remove bloco de mapeamento e translationsMap antigo se já existir no arquivo
const mapStartMarker = '// Mapa de traduções para idiomas adicionais mescladas sequencialmente por índice';
const mapStartIdx = cleanedData.indexOf(mapStartMarker);
if (mapStartIdx !== -1) {
    const rawQuestionsIdx = cleanedData.indexOf('const rawQuestions = [');
    if (rawQuestionsIdx !== -1 && rawQuestionsIdx > mapStartIdx) {
        cleanedData = cleanedData.substring(0, mapStartIdx) + cleanedData.substring(rawQuestionsIdx);
    }
}

// Remove declaração antiga (código legado com rawQuestionsIndexMap) se existir
const legacyStartMarker = '// Mapeamento de índices para mesclar traduções adicionais sem mexer na lógica existente';
const legacyStartIdx = cleanedData.indexOf(legacyStartMarker);
if (legacyStartIdx !== -1) {
    const rawQuestionsIdx = cleanedData.indexOf('const rawQuestions = [');
    if (rawQuestionsIdx !== -1 && rawQuestionsIdx > legacyStartIdx) {
        cleanedData = cleanedData.substring(0, legacyStartIdx) + cleanedData.substring(rawQuestionsIdx);
    }
}

// Substitui a definição antiga de q() pela nova se ainda estiver no formato antigo
let updatedData = cleanedData.replace(oldQDefinition, newQDefinition);

// Injeta o translationsMap logo acima da declaração de rawQuestions no arquivo
const translationsMapDef = `${mapStartMarker}\nconst translationsMap = ${JSON.stringify(translationsMap, null, 4)};\n\n`;

// Insere a definição do mapa de traduções antes do array rawQuestions
updatedData = updatedData.replace('const rawQuestions = [', translationsMapDef + 'const rawQuestions = [');

// Grava as alterações de volta no arquivo
fs.writeFileSync(dataPath, updatedData, 'utf8');
console.log("Sucesso: A base de dados do js/data.js foi atualizada com todas as traduções padronizadas!");
