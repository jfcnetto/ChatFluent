/* 
    DATA.JS - Base de Dados de Histórias Interativas 
    Metas: Nível 0 (8 perguntas), Nível 1 (15 perguntas), Nível 2 (25 perguntas).
*/

const historia = [
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
        "explicacao": { "pt": "Agradecimento simples para felicitações." }
    },

    // --- NÍVEL 1: INTERMEDIÁRIO (15 Perguntas) ---
    {
        "npc": "Where are you going?",
        "opcoes": ["I go to New York", "I'm going to New York", "I going New York"],
        "correta": 1,
        "nivel": 1,
        "explicacao": { "pt": "Usamos o Present Continuous para destinos e planos futuros." }
    },
    {
        "npc": "How long will you stay?",
        "opcoes": ["For five days", "In five days", "Five day"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Usamos 'For' para indicar a duração de um período." }
    },
    {
        "npc": "Excuse me, where is the nearest pharmacy?",
        "opcoes": ["Is there", "It's around the corner", "Pharmacy near"],
        "correta": 1,
        "nivel": 1,
        "explicacao": { "pt": "'Around the corner' indica que está muito próximo." }
    },
    {
        "npc": "How do I get to the train station?",
        "opcoes": ["Go straight for two blocks", "Take station", "Walking there"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'Go straight' significa seguir em linha reta." }
    },
    {
        "npc": "I missed my bus. When is the next one?",
        "opcoes": ["In ten minutes", "Ten minutes later", "Ten minutes after"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Usamos 'In' para quanto tempo falta para o evento." }
    },
    {
        "npc": "A round-trip ticket, please.",
        "opcoes": ["One way?", "Going and coming?", "Single or return?"],
        "correta": 2,
        "nivel": 1,
        "explicacao": { "pt": "No Reino Unido, 'return ticket' é ida e volta." }
    },
    {
        "npc": "Could you call a taxi for me, please?",
        "opcoes": ["I call now", "Sure, right away", "Taxi call yes"],
        "correta": 1,
        "nivel": 1,
        "explicacao": { "pt": "'Right away' significa imediatamente." }
    },
    {
        "npc": "Does this train stop at Central Park?",
        "opcoes": ["Yes, it does", "Next stop", "Park stop"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Resposta curta correta para perguntas com 'Does'." }
    },
    {
        "npc": "Where can I buy a ticket?",
        "opcoes": ["At the machine", "Buy there", "Ticket buy"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Compramos bilhetes em 'vending machines'." }
    },
    {
        "npc": "Is the museum far from here?",
        "opcoes": ["It's within walking distance", "No, far", "Yes, near"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Significa que dá para ir caminhando." }
    },
    {
        "npc": "I'd like to rent a car.",
        "opcoes": ["Your license, please?", "Give car", "Car license?"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'License' é a sua carteira de motorista." }
    },
    {
        "npc": "Which bus goes to the center?",
        "opcoes": ["The number 42", "Bus center", "Any bus"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Identificamos ônibus pelo número da linha." }
    },
    {
        "npc": "Turn left at the light.",
        "opcoes": ["Okay, thanks", "Left light", "Left go"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Confirmação simples de direção." }
    },
    {
        "npc": "Is this seat taken?",
        "opcoes": ["No, it's free", "No, sit", "Yes, me"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "Pergunta se o lugar está ocupado." }
    },
    {
        "npc": "How much is the fare?",
        "opcoes": ["It's 2 dollars", "Price 2", "Is 2"],
        "correta": 0,
        "nivel": 1,
        "explicacao": { "pt": "'Fare' é o preço da passagem de transporte." }
    },

    // --- NÍVEL 2: AVANÇADO (25 Perguntas) ---
    {
        "npc": "Tell me about yourself.",
        "opcoes": ["I have five years of experience", "I am pro", "I like pen"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Foque em experiência em entrevistas." }
    },
    {
        "npc": "Why do you want this job?",
        "opcoes": ["I want a new challenge", "Need money", "Job good"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Challenge' (desafio) é muito bem visto." }
    },
    {
        "npc": "The deadline is tomorrow.",
        "opcoes": ["I'll finish it today", "Tomorrow dead", "Deadline ok"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Deadline' é o prazo final de entrega." }
    },
    {
        "npc": "What are your strengths?",
        "opcoes": ["I'm a team player", "I am strong", "Work much"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Team player' sabe trabalhar em equipe." }
    },
    {
        "npc": "I need an ambulance!",
        "opcoes": ["Calling 911 now", "Ambulance coming", "Wait"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "911 é o socorro imediato." }
    },
    {
        "npc": "My car broke down.",
        "opcoes": ["Do you need a tow truck?", "Car broke", "Truck?"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Tow truck' é o serviço de guincho." }
    },
    {
        "npc": "Are you allergic to anything?",
        "opcoes": ["Yes, to penicillin", "No allergy", "Allergic no"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Informação crucial para médicos." }
    },
    {
        "npc": "What are your salary expectations?",
        "opcoes": ["I'm open to negotiation", "I want much", "Big money"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Forma polida de discutir salário." }
    },
    {
        "npc": "Can you handle high-pressure environments?",
        "opcoes": ["Yes, I stay calm", "I try", "Pressure ok"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Diz respeito a trabalhar sob estresse." }
    },
    {
        "npc": "I have a sharp pain in my chest.",
        "opcoes": ["Sit down, I'm calling a doctor", "Pain why?", "Chest pain"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Ação imediata para sintomas graves." }
    },
    {
        "npc": "Your performance was outstanding.",
        "opcoes": ["Thank you, I appreciate it", "I know", "Thanks too"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Recebendo um elogio profissional." }
    },
    {
        "npc": "We need to reschedule the meeting.",
        "opcoes": ["Does Friday work for you?", "Friday meeting?", "Reschedule when?"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Forma comum de sugerir nova data." }
    },
    {
        "npc": "I'd like to report a crime.",
        "opcoes": ["Please, have a seat", "Crime where?", "What crime?"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Atendimento formal na delegacia." }
    },
    {
        "npc": "Is the surgery dangerous?",
        "opcoes": ["There are always risks", "Is safe", "No danger"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Resposta realista de um profissional." }
    },
    {
        "npc": "I have been promoted!",
        "opcoes": ["Congratulations! You deserved it", "Good", "Promoted why?"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Parabenizando por uma promoção." }
    },
    {
        "npc": "What is the company's vision?",
        "opcoes": ["To innovate and lead", "We want sell", "Big vision"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Termos corporativos comuns." }
    },
    {
        "npc": "I am feeling very faint.",
        "opcoes": ["Let me help you to a chair", "Faint no", "Help you?"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Ação para quem está prestes a desmaiar." }
    },
    {
        "npc": "We have a budget deficit.",
        "opcoes": ["We must reduce expenses", "No money", "Deficit bad"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Vocabulário de finanças avançado." }
    },
    {
        "npc": "Can you provide a reference?",
        "opcoes": ["Yes, my previous manager", "Reference yes", "Manager talk"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Indicação profissional de empregos anteriores." }
    },
    {
        "npc": "I've been under a lot of stress.",
        "opcoes": ["You should take some time off", "Stress why?", "Rest no"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Conselho para saúde mental." }
    },
    {
        "npc": "What are the side effects?",
        "opcoes": ["Drowsiness and nausea", "Bad things", "Pills effects"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Efeitos colaterais de medicamentos." }
    },
    {
        "npc": "We need to sign the contract.",
        "opcoes": ["I'll review it tonight", "Sign now", "Contract sign"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Demonstra cuidado profissional." }
    },
    {
        "npc": "The engine is overheating.",
        "opcoes": ["Pull over immediately", "Car hot", "Stop engine"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Ação de segurança para problemas mecânicos." }
    },
    {
        "npc": "I'm looking for a long-term partnership.",
        "opcoes": ["We share that goal", "Partner yes", "Long time"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "Vocabulário de negócios e parcerias." }
    },
    {
        "npc": "Do you have insurance?",
        "opcoes": ["Yes, full coverage", "Insurance yes", "I have"],
        "correta": 0,
        "nivel": 2,
        "explicacao": { "pt": "'Full coverage' é o seguro total." }
    }
];