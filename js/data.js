/* 
    DATA.JS - Base de Dados de Histórias Interativas 
    Total: 100 etapas cobrindo contextos reais.
*/

const historia = [
    // --- 1-15: AEROPORTO, RESTAURANTE, HOTEL (Originais mantidas) ---
    {
        "npc": "Where are you going?",
        "opcoes": ["I go to New York", "I'm going to New York", "I going New York"],
        "correta": 1,
        "explicacao": { "pt": "Usamos 'I'm going to' para planos futuros e destino." }
    },
    {
        "npc": "What would you like to eat?",
        "opcoes": ["I want pizza", "I would like pizza", "Give pizza"],
        "correta": 1,
        "explicacao": { "pt": "'I would like' é a forma educada (Gostaria) de pedir algo." }
    },
    {
        "npc": "How long will you stay?",
        "opcoes": ["For five days", "In five days", "Five day"],
        "correta": 0,
        "explicacao": { "pt": "Usamos 'For' para indicar duração de tempo." }
    },
    {
        "npc": "Do you have any bags to check?",
        "opcoes": ["No, only this", "No, just this carry-on", "I no have bags"],
        "correta": 1,
        "explicacao": { "pt": "'Carry-on' é o termo usado para mala de mão." }
    },
    {
        "npc": "Can I see your passport, please?",
        "opcoes": ["Here it is", "See my passport", "Take it"],
        "correta": 0,
        "explicacao": { "pt": "'Here it is' significa 'Aqui está' ao entregar algo." }
    },
    {
        "npc": "Table for how many people?",
        "opcoes": ["Four people", "A table for four, please", "Four table"],
        "correta": 1,
        "explicacao": { "pt": "Forma completa e educada para reservas em restaurantes." }
    },
    {
        "npc": "Are you ready to order?",
        "opcoes": ["Yes, I'm ready", "I want eat now", "Order ready"],
        "correta": 0,
        "explicacao": { "pt": "Resposta padrão para indicar que já escolheu o prato." }
    },
    {
        "npc": "How was your meal?",
        "opcoes": ["It was delicious", "Eating was good", "Very good meal"],
        "correta": 0,
        "explicacao": { "pt": "Usamos 'It was' para descrever algo que aconteceu (passado)." }
    },
    {
        "npc": "Could I have the check, please?",
        "opcoes": ["Give me bill", "Check now", "Yes, here it is"],
        "correta": 0,
        "explicacao": { "pt": "'The check' ou 'The bill' é como pedimos a conta." }
    },
    {
        "npc": "I'd like to check-in, please.",
        "opcoes": ["Name?", "Under what name?", "Who are you?"],
        "correta": 1,
        "explicacao": { "pt": "'Under what name' é como perguntam em qual nome está a reserva." }
    },
    {
        "npc": "Your room is on the third floor.",
        "opcoes": ["Where is elevator?", "Where is the elevator?", "Elevator where?"],
        "correta": 1,
        "explicacao": { "pt": "Sempre usamos 'the' antes de objetos específicos como 'elevator'." }
    },
    {
        "npc": "What time is checkout?",
        "opcoes": ["It is at 11 AM", "Check is 11", "Time 11 o'clock"],
        "correta": 0,
        "explicacao": { "pt": "Horários fixos usam a preposição 'at'." }
    },
    {
        "npc": "Hi! I'm looking for a blue shirt.",
        "opcoes": ["Size?", "What size do you wear?", "Which size you want?"],
        "correta": 1,
        "explicacao": { "pt": "Pergunta padrão de vendedores para saber o tamanho." }
    },
    {
        "npc": "How much does it cost?",
        "opcoes": ["It's 20 dollars", "Is 20 dollars", "Cost 20"],
        "correta": 0,
        "explicacao": { "pt": "Para preços, usamos a estrutura 'It is' ou 'It's'." }
    },
    {
        "npc": "Do you accept credit cards?",
        "opcoes": ["Yes, we do", "Yes, we accept", "Credit card ok"],
        "correta": 0,
        "explicacao": { "pt": "Respostas curtas com 'do' são gramaticalmente ideais." }
    },

    // --- 16-30: DIREÇÕES E TRANSPORTE ---
    {
        "npc": "Excuse me, where is the nearest pharmacy?",
        "opcoes": ["Is there", "It's around the corner", "Pharmacy near"],
        "correta": 1,
        "explicacao": { "pt": "'Around the corner' significa virando a esquina." }
    },
    {
        "npc": "How do I get to the train station?",
        "opcoes": ["Go straight for two blocks", "Take station", "Walking there"],
        "correta": 0,
        "explicacao": { "pt": "'Go straight' significa vá direto/siga em frente." }
    },
    {
        "npc": "Is the museum far from here?",
        "opcoes": ["No, it's within walking distance", "No, is far", "Yes, is near"],
        "correta": 0,
        "explicacao": { "pt": "'Within walking distance' significa que dá para ir a pé." }
    },
    {
        "npc": "Which bus goes to the city center?",
        "opcoes": ["The number 42", "Bus is center", "Any bus"],
        "correta": 0,
        "explicacao": { "pt": "Usamos 'The number...' para identificar linhas de ônibus." }
    },
    {
        "npc": "Does this train stop at Central Park?",
        "opcoes": ["Next stop is Central Park", "Yes, it does", "Park stop"],
        "correta": 1,
        "explicacao": { "pt": "Resposta curta correta para perguntas com 'Does'." }
    },
    {
        "npc": "Where can I buy a ticket?",
        "opcoes": ["At the vending machine", "Buy ticket there", "Ticket machine buy"],
        "correta": 0,
        "explicacao": { "pt": "Máquinas automáticas de bilhetes são chamadas 'vending machines'." }
    },
    {
        "npc": "A round-trip ticket, please.",
        "opcoes": ["One way?", "Going and coming?", "Single or return?"],
        "correta": 2,
        "explicacao": { "pt": "No Reino Unido, 'return' é o mesmo que 'round-trip' (ida e volta)." }
    },
    {
        "npc": "I missed my bus. When is the next one?",
        "opcoes": ["In ten minutes", "Ten minutes later", "Ten minutes after"],
        "correta": 0,
        "explicacao": { "pt": "Usamos 'In' para indicar quanto tempo falta para algo acontecer." }
    },
    {
        "npc": "Is this seat taken?",
        "opcoes": ["No, it's free", "No, you sit", "Yes, is me"],
        "correta": 0,
        "explicacao": { "pt": "'Is this seat taken?' pergunta se o assento está ocupado." }
    },
    {
        "npc": "Could you call a taxi for me, please?",
        "opcoes": ["I call now", "Sure, right away", "Taxi call yes"],
        "correta": 1,
        "explicacao": { "pt": "'Right away' significa imediatamente." }
    },
    {
        "npc": "I'm lost. Can you help me?",
        "opcoes": ["Where are you trying to go?", "Where you go?", "Go where?"],
        "correta": 0,
        "explicacao": { "pt": "Pergunta educada para saber o destino de alguém perdido." }
    },
    {
        "npc": "Turn left at the traffic light.",
        "opcoes": ["Okay, thank you", "Left light", "Left go"],
        "correta": 0,
        "explicacao": { "pt": "Agradecimento simples ao receber uma direção." }
    },
    {
        "npc": "How much is the fare to the airport?",
        "opcoes": ["Is 30 dollars", "It's about 30 dollars", "Price 30"],
        "correta": 1,
        "explicacao": { "pt": "'About' é usado para dar estimativas de preço ou tempo." }
    },
    {
        "npc": "Where is the baggage claim?",
        "opcoes": ["Follow the signs", "Bag go there", "Sign bags"],
        "correta": 0,
        "explicacao": { "pt": "'Follow the signs' significa siga as placas." }
    },
    {
        "npc": "I'd like to rent a car.",
        "opcoes": ["Your license, please?", "Give me car paper", "Car license?"],
        "correta": 0,
        "explicacao": { "pt": "'License' refere-se à CNH (Driver's License)." }
    },

    // --- 31-50: TRABALHO E ENTREVISTA ---
    {
        "npc": "Tell me about yourself.",
        "opcoes": ["I am professional", "I have five years of experience", "I like pizza"],
        "correta": 1,
        "explicacao": { "pt": "Em entrevistas, foque em sua trajetória profissional." }
    },
    {
        "npc": "Why do you want this job?",
        "opcoes": ["I need money", "I want a new challenge", "Job is good"],
        "correta": 1,
        "explicacao": { "pt": "'Challenge' (desafio) é uma palavra positiva em entrevistas." }
    },
    {
        "npc": "What are your strengths?",
        "opcoes": ["I'm a team player", "I am strong", "I work much"],
        "correta": 0,
        "explicacao": { "pt": "'Team player' significa alguém que trabalha bem em equipe." }
    },
    {
        "npc": "Do you have any questions for us?",
        "opcoes": ["No, thanks", "What is the company culture like?", "Money how much?"],
        "correta": 1,
        "explicacao": { "pt": "Demonstrar interesse na cultura da empresa é bem visto." }
    },
    {
        "npc": "We will be in touch.",
        "opcoes": ["Okay, I look forward to hearing from you", "Okay, call me", "Bye"],
        "correta": 0,
        "explicacao": { "pt": "Frase formal para encerrar uma conversa profissional." }
    },
    {
        "npc": "Can you help me with this report?",
        "opcoes": ["I'm a bit busy now", "I can't", "No help"],
        "correta": 0,
        "explicacao": { "pt": "'I'm a bit busy' é uma forma educada de dizer que está ocupado." }
    },
    {
        "npc": "Let's schedule a meeting.",
        "opcoes": ["How about Tuesday?", "Tuesday meeting?", "Meeting when?"],
        "correta": 0,
        "explicacao": { "pt": "'How about...' é usado para sugerir um dia ou horário." }
    },
    {
        "npc": "I'm sorry, I'm late.",
        "opcoes": ["No problem, don't worry", "Late why?", "Is late"],
        "correta": 0,
        "explicacao": { "pt": "Resposta comum para aceitar um pedido de desculpas." }
    },
    {
        "npc": "Could you send me the email?",
        "opcoes": ["I send now", "I'll send it right away", "Email sending"],
        "correta": 1,
        "explicacao": { "pt": "Usamos 'I'll' (I will) para prometer uma ação imediata." }
    },
    {
        "npc": "What do you do for a living?",
        "opcoes": ["I'm an engineer", "I live in Brazil", "I'm fine"],
        "correta": 0,
        "explicacao": { "pt": "'What do you do for a living?' pergunta qual sua profissão." }
    },
    {
        "npc": "I've finished the project.",
        "opcoes": ["Great job!", "Good work!", "Both are correct"],
        "correta": 2,
        "explicacao": { "pt": "Tanto 'Great job' quanto 'Good work' elogiam o desempenho." }
    },
    {
        "npc": "I need to take a day off.",
        "opcoes": ["Are you sick?", "Okay, thanks", "Off day why?"],
        "correta": 0,
        "explicacao": { "pt": "'Day off' é um dia de folga do trabalho." }
    },
    {
        "npc": "Who is in charge here?",
        "opcoes": ["I am the manager", "Manager is there", "Charge who?"],
        "correta": 0,
        "explicacao": { "pt": "'In charge' significa 'no comando' ou 'responsável'." }
    },
    {
        "npc": "Can I have your phone number?",
        "opcoes": ["Sure, it's 555-0199", "Yes, number", "Take number"],
        "correta": 0,
        "explicacao": { "pt": "Forma comum de compartilhar o número de telefone." }
    },
    {
        "npc": "I don't understand this task.",
        "opcoes": ["Let me explain it to you", "Is easy", "Task difficult"],
        "correta": 0,
        "explicacao": { "pt": "Oferecer ajuda para explicar uma tarefa." }
    },
    {
        "npc": "The deadline is tomorrow.",
        "opcoes": ["I'll finish it today", "Tomorrow dead", "Deadline tomorrow"],
        "correta": 0,
        "explicacao": { "pt": "'Deadline' é o prazo final para entrega." }
    },
    {
        "npc": "We need to cut costs.",
        "opcoes": ["I agree", "Costs cut", "Agree I"],
        "correta": 0,
        "explicacao": { "pt": "'I agree' (Eu concordo) é essencial em reuniões." }
    },
    {
        "npc": "Is there a Wi-Fi password?",
        "opcoes": ["Yes, it's 'guest123'", "Wifi yes", "Password wifi?"],
        "correta": 0,
        "explicacao": { "pt": "Perguntar e responder sobre conexão de rede." }
    },
    {
        "npc": "I'm going on a business trip.",
        "opcoes": ["Have a safe flight", "Good trip", "Flight safe"],
        "correta": 0,
        "explicacao": { "pt": "'Have a safe flight' é o desejo padrão para quem vai voar." }
    },
    {
        "npc": "I quit my job.",
        "opcoes": ["Why?", "Job bye", "Why you leave?"],
        "correta": 0,
        "explicacao": { "pt": "'Quit' significa pedir demissão voluntariamente." }
    },

    // --- 51-70: SAÚDE E EMERGÊNCIAS ---
    {
        "npc": "What's the matter?",
        "opcoes": ["I have a headache", "Head hurts", "I pain"],
        "correta": 0,
        "explicacao": { "pt": "Usamos 'I have a...' para sintomas (headache, cold, fever)." }
    },
    {
        "npc": "Are you allergic to anything?",
        "opcoes": ["Yes, to penicillin", "No allergy", "Allergic no"],
        "correta": 0,
        "explicacao": { "pt": "Informação vital em hospitais ou farmácias." }
    },
    {
        "npc": "Where does it hurt?",
        "opcoes": ["Right here", "Pain there", "Here hurts"],
        "correta": 0,
        "explicacao": { "pt": "Forma direta de apontar o local da dor." }
    },
    {
        "npc": "I need an ambulance!",
        "opcoes": ["Calling 911 now", "Ambulance coming", "Wait ambulance"],
        "correta": 0,
        "explicacao": { "pt": "911 é o número de emergência nos EUA/Canadá." }
    },
    {
        "npc": "How often should I take this medicine?",
        "opcoes": ["Three times a day", "Day three", "Three time day"],
        "correta": 0,
        "explicacao": { "pt": "'Three times a day' (Três vezes ao dia)." }
    },
    {
        "npc": "I feel dizzy.",
        "opcoes": ["Sit down for a moment", "Dizzy why?", "Sit there"],
        "correta": 0,
        "explicacao": { "pt": "'Dizzy' significa tonto ou com vertigem." }
    },
    {
        "npc": "Call the police!",
        "opcoes": ["Stay calm, I'm calling", "Police call", "Emergency"],
        "correta": 0,
        "explicacao": { "pt": "Acalmar a vítima enquanto pede ajuda." }
    },
    {
        "npc": "My wallet was stolen.",
        "opcoes": ["We should go to the police station", "Stolen wallet", "Sorry for you"],
        "correta": 0,
        "explicacao": { "pt": "'Stolen' é o particípio de roubar." }
    },
    {
        "npc": "Is it a serious injury?",
        "opcoes": ["No, just a scratch", "Injury no", "Serious no"],
        "correta": 0,
        "explicacao": { "pt": "'Scratch' significa apenas um arranhão." }
    },
    {
        "npc": "I have a fever.",
        "opcoes": ["You should see a doctor", "Fever doctor", "Doctor go"],
        "correta": 0,
        "explicacao": { "pt": "'You should' é usado para dar conselhos." }
    },
    {
        "npc": "I need to see a dentist.",
        "opcoes": ["Is it an emergency?", "Tooth pain?", "Both are fine"],
        "correta": 2,
        "explicacao": { "pt": "Perguntas de triagem comuns para dentistas." }
    },
    {
        "npc": "Take a deep breath.",
        "opcoes": ["Okay", "Breathing", "Breathe deep"],
        "correta": 0,
        "explicacao": { "pt": "Instrução médica comum: Respire fundo." }
    },
    {
        "npc": "Are you on any medication?",
        "opcoes": ["Yes, for blood pressure", "No medicine", "Take pills"],
        "correta": 0,
        "explicacao": { "pt": "'Medication' refere-se a remédios de uso contínuo." }
    },
    {
        "npc": "I've lost my passport.",
        "opcoes": ["Go to your embassy", "Embassy go", "Lost passport embassy"],
        "correta": 0,
        "explicacao": { "pt": "Passaportes perdidos devem ser reportados à embaixada (embassy)." }
    },
    {
        "npc": "My car broke down.",
        "opcoes": ["Do you need a tow truck?", "Car broke", "Truck call?"],
        "correta": 0,
        "explicacao": { "pt": "'Tow truck' significa guincho." }
    },
    {
        "npc": "Fire! Everyone out!",
        "opcoes": ["Use the stairs", "Stairs go", "Fire fire"],
        "correta": 0,
        "explicacao": { "pt": "Instrução de segurança básica em incêndios." }
    },
    {
        "npc": "I'm allergic to peanuts.",
        "opcoes": ["The chef will be informed", "No peanuts", "Peanut allergy"],
        "correta": 0,
        "explicacao": { "pt": "Avisar o chef sobre alergias alimentares graves." }
    },
    {
        "npc": "I have a sore throat.",
        "opcoes": ["Drink some warm tea", "Throat pain", "Tea drink"],
        "correta": 0,
        "explicacao": { "pt": "'Sore throat' é dor de garganta." }
    },
    {
        "npc": "Is there a hospital nearby?",
        "opcoes": ["Yes, two blocks away", "Hospital near", "Go hospital"],
        "correta": 0,
        "explicacao": { "pt": "Direcionando alguém para o hospital mais próximo." }
    },
    {
        "npc": "I need to make an appointment.",
        "opcoes": ["For when?", "When you want?", "Date?"],
        "correta": 0,
        "explicacao": { "pt": "'Appointment' é uma consulta ou compromisso marcado." }
    },

    // --- 71-100: VIDA SOCIAL, TINDER E COTIDIANO ---
    {
        "npc": "Do you come here often?",
        "opcoes": ["It's my first time", "Yes, always", "Often come"],
        "correta": 0,
        "explicacao": { "pt": "Frase clássica para iniciar conversa em bares/cafés." }
    },
    {
        "npc": "What do you like to do in your free time?",
        "opcoes": ["I like hiking", "Free time hiking", "I hike"],
        "correta": 0,
        "explicacao": { "pt": "Falar sobre hobbies: 'I like + verb-ing'." }
    },
    {
        "npc": "Nice to meet you.",
        "opcoes": ["Nice to meet you too", "Me too", "You too"],
        "correta": 0,
        "explicacao": { "pt": "Resposta padrão e completa para apresentações." }
    },
    {
        "npc": "Would you like to grab a coffee sometime?",
        "opcoes": ["I'd love to", "Coffee yes", "Love coffee"],
        "correta": 0,
        "explicacao": { "pt": "'I'd love to' é uma forma gentil de aceitar um convite." }
    },
    {
        "npc": "What's your favorite movie?",
        "opcoes": ["I really like 'Interstellar'", "Movie Interstellar", "Interstellar like"],
        "correta": 0,
        "explicacao": { "pt": "Expressando preferência por filmes." }
    },
    {
        "npc": "You look great today!",
        "opcoes": ["Thanks, that's kind of you", "Thanks, you too", "Kind you"],
        "correta": 0,
        "explicacao": { "pt": "Forma elegante de receber um elogio." }
    },
    {
        "npc": "I'm sorry, I didn't catch your name.",
        "opcoes": ["It's Sarah", "Name Sarah", "Sarah I am"],
        "correta": 0,
        "explicacao": { "pt": "'Didn't catch' significa que não ouviu ou não entendeu." }
    },
    {
        "npc": "Do you have any siblings?",
        "opcoes": ["Yes, one brother", "Siblings yes", "I have brother"],
        "correta": 0,
        "explicacao": { "pt": "'Siblings' refere-se a irmãos e irmãs em geral." }
    },
    {
        "npc": "What's the weather like?",
        "opcoes": ["It's raining cats and dogs", "Rain much", "Dogs and cats rain"],
        "correta": 0,
        "explicacao": { "pt": "Expressão idiomática para 'chovendo muito'." }
    },
    {
        "npc": "I'm so tired.",
        "opcoes": ["You should get some rest", "Tired you", "Rest go"],
        "correta": 0,
        "explicacao": { "pt": "Sugestão para quem está exausto." }
    },
    {
        "npc": "Can I help you with those bags?",
        "opcoes": ["That's very helpful, thanks", "Help bags", "Bags help"],
        "correta": 0,
        "explicacao": { "pt": "Aceitando ajuda de forma educada." }
    },
    {
        "npc": "What are your plans for the weekend?",
        "opcoes": ["I'm staying home", "Weekend home", "Stay home"],
        "correta": 0,
        "explicacao": { "pt": "Usamos o Present Continuous para planos futuros próximos." }
    },
    {
        "npc": "Happy Birthday!",
        "opcoes": ["Thank you so much!", "Birthday thanks", "Happy thanks"],
        "correta": 0,
        "explicacao": { "pt": "Agradecendo parabéns." }
    },
    {
        "npc": "Cheers!",
        "opcoes": ["Cheers!", "Toast!", "Drink!"],
        "correta": 0,
        "explicacao": { "pt": "'Cheers' é o nosso 'Saúde' ao brindar." }
    },
    {
        "npc": "Do you want to go to the party?",
        "opcoes": ["I'm not sure yet", "Party no", "Not sure"],
        "correta": 0,
        "explicacao": { "pt": "'Not sure yet' significa que ainda não decidiu." }
    },
    {
        "npc": "Can you pass me the salt?",
        "opcoes": ["Here you go", "Salt take", "Take salt"],
        "correta": 0,
        "explicacao": { "pt": "'Here you go' é o que dizemos ao entregar algo." }
    },
    {
        "npc": "I'm going to the supermarket.",
        "opcoes": ["Can you get some milk?", "Milk get", "Get milk"],
        "correta": 0,
        "explicacao": { "pt": "Pedindo um favor de compra." }
    },
    {
        "npc": "Excuse me, do you have the time?",
        "opcoes": ["It's half past two", "Time is 2:30", "Two thirty"],
        "correta": 0,
        "explicacao": { "pt": "'Half past two' é uma forma comum de dizer 2:30." }
    },
    {
        "npc": "Bless you!",
        "opcoes": ["Thank you", "Bless thanks", "Thanks you"],
        "correta": 0,
        "explicacao": { "pt": "'Bless you' é o que se diz quando alguém espirra." }
    },
    {
        "npc": "I'm bored.",
        "opcoes": ["Let's watch a movie", "Movie watch", "Bored why?"],
        "correta": 0,
        "explicacao": { "pt": "'Let's' é usado para fazer sugestões em grupo." }
    },
    {
        "npc": "How was your day?",
        "opcoes": ["It was pretty good", "Day good", "Good day"],
        "correta": 0,
        "explicacao": { "pt": "'Pretty good' significa 'muito bom'." }
    },
    {
        "npc": "I'm hungry.",
        "opcoes": ["Me too, let's eat", "Hungry me", "Eat go"],
        "correta": 0,
        "explicacao": { "pt": "Concordando com a fome de alguém." }
    },
    {
        "npc": "Where are you from?",
        "opcoes": ["I'm from Brazil", "Brazil I am", "From Brazil"],
        "correta": 0,
        "explicacao": { "pt": "Resposta padrão para nacionalidade ou origem." }
    },
    {
        "npc": "Do you like to travel?",
        "opcoes": ["Yes, I love it!", "Travel yes", "I like"],
        "correta": 0,
        "explicacao": { "pt": "Expressando entusiasmo por viagens." }
    },
    {
        "npc": "Can I borrow your pen?",
        "opcoes": ["Sure, here it is", "Pen take", "Borrow yes"],
        "correta": 0,
        "explicacao": { "pt": "'Borrow' significa pegar emprestado." }
    },
    {
        "npc": "I'm sorry for your loss.",
        "opcoes": ["Thank you for your support", "Loss thanks", "Sorry thanks"],
        "correta": 0,
        "explicacao": { "pt": "Como responder a pêsames de forma educada." }
    },
    {
        "npc": "Congratulations on your wedding!",
        "opcoes": ["Thank you so much!", "Wedding thanks", "Happy thanks"],
        "correta": 0,
        "explicacao": { "pt": "Agradecendo felicitações de casamento." }
    },
    {
        "npc": "See you later!",
        "opcoes": ["See you!", "Later!", "Bye!"],
        "correta": 0,
        "explicacao": { "pt": "Despedida casual comum." }
    },
    {
        "npc": "Have a nice weekend!",
        "opcoes": ["You too!", "Weekend nice", "Thanks you"],
        "correta": 0,
        "explicacao": { "pt": "'You too' é a resposta curta perfeita para desejos de 'Have a nice...'." }
    },
    {
        "npc": "Good luck!",
        "opcoes": ["Thank you, I'll need it!", "Luck thanks", "I need luck"],
        "correta": 0,
        "explicacao": { "pt": "Agradecendo desejos de boa sorte." }
    }
];