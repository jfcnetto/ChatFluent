/* 
   DATA.JS - Base de Dados de Histórias Interativas 
   Contém 15 etapas com dificuldade progressiva.
*/

const historia = [
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
    }
];