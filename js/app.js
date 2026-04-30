/* 
    CHATFLUENT - CORE APP JS
    Lógica: Seleção Aleatória de 15 perguntas, Avatar WhatsApp, Explicação 1º erro, 
    10s de comemoração, PONTUAÇÃO NEGATIVA e RELATÓRIO FINAL.
*/

let etapa = 0;
let pontos = 0;
let streak = 0;
let errosNaEtapa = 0;

// Variáveis para o relatório final
let totalAcertos = 0;
let totalErros = 0;

// Armazenará as 15 perguntas selecionadas aleatoriamente
let perguntasDoDia = [];

/**
 * Função para embaralhar e selecionar as perguntas
 */
function prepararPerguntas() {
    if (typeof historia === 'undefined' || historia.length === 0) {
        console.error("Erro: Banco de dados 'historia' não encontrado.");
        return;
    }

    // Cria uma cópia para não alterar a ordem original do data.js permanentemente
    let copiaBanco = [...historia];

    // Algoritmo de embaralhamento (Fisher-Yates)
    for (let i = copiaBanco.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaBanco[i], copiaBanco[j]] = [copiaBanco[j], copiaBanco[i]];
    }

    // Seleciona apenas as primeiras 15 após o embaralhamento
    perguntasDoDia = copiaBanco.slice(0, 15);
}

/**
 * Renderiza a fala do NPC (com Avatar) e as opções do usuário
 */
function render() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");
    const progressoEl = document.getElementById("progresso");

    // Validação usando o novo array aleatório
    if (!perguntasDoDia[etapa]) {
        console.error("Erro: Pergunta não encontrada.");
        return;
    }

    // ATUALIZA O CONTADOR (Ex: 1 de 15)
    if (progressoEl) {
        progressoEl.innerText = `${etapa + 1} de ${perguntasDoDia.length}`;
    }

    errosNaEtapa = 0; 
    feedbackEl.style.opacity = "0";
    feedbackEl.innerHTML = "";

    // ESTRUTURA ESTILO WHATSAPP
    perguntaEl.innerHTML = `
        <div class="chat-row">
            <img src="/ChatFluent/img/avatar-npc.png" class="avatar-npc" alt="Mentor Nerd">
            <div class="npc-bubble">
                ${perguntasDoDia[etapa].npc}
            </div>
        </div>
    `;

    let html = "";
    perguntasDoDia[etapa].opcoes.forEach((op, i) => {
        html += `
            <button 
                class="option-btn" 
                onclick="responder(this, ${i})"
                style="animation: fadeInUp 0.4s ease forwards ${i * 0.1}s; opacity: 0;"
            >
                ${op}
            </button>`;
    });

    opcoesEl.innerHTML = html;
}

/**
 * Processa a resposta do usuário
 */
function responder(btn, i) {
    const feedbackEl = document.getElementById("feedback");
    const pontosEl = document.getElementById("pontos");
    const lang = navigator.language.split('-')[0] || 'en';

    if (feedbackEl.innerHTML.includes("Amazing") || feedbackEl.innerHTML.includes("Moving on")) return;

    if (i === perguntasDoDia[etapa].correta) {
        pontos += 10 + (streak * 2);
        streak++;
        totalAcertos++; 
        
        btn.style.borderColor = "#58cc02";
        btn.style.backgroundColor = "#d7ffb8";
        
        feedbackEl.innerHTML = `<div style="color: #58cc02; font-weight: 900; margin-top: 10px;">Amazing! Keep going 🥳</div>`;
        feedbackEl.style.opacity = "1";

        etapa++;
        
        setTimeout(() => {
            if (etapa < perguntasDoDia.length) render();
            else finalizarTreino();
        }, 5000); 

    } else {
        errosNaEtapa++;
        streak = 0;
        pontos = pontos - 2;
        
        btn.style.borderColor = "#ff4b4b";
        btn.style.backgroundColor = "#ffdbdb";
        btn.classList.add("shake-animation");
        
        const explicacaoTexto = perguntasDoDia[etapa].explicacao[lang] || perguntasDoDia[etapa].explicacao['pt'];

        if (errosNaEtapa >= 2) {
            totalErros++; 
            feedbackEl.innerHTML = `
                <div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Second error. Moving on...</div>
                <div style="color: var(--text); font-size: 14px; margin-top: 5px; background: #fff4f4; padding: 10px; border-radius: 10px; border: 1px solid #ffdbdb;">
                    <strong>Quick Tip:</strong> ${explicacaoTexto}
                </div>`;
            feedbackEl.style.opacity = "1";

            etapa++;
            setTimeout(() => {
                if (etapa < perguntasDoDia.length) render();
                else finalizarTreino();
            }, 5000);
        } else {
            feedbackEl.innerHTML = `
                <div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Incorrect. Look at the tip:</div>
                <div style="color: var(--text); font-size: 14px; margin-top: 5px; background: #fff4f4; padding: 10px; border-radius: 10px; border: 1px solid #ffdbdb;">
                    ${explicacaoTexto}
                </div>`;
            feedbackEl.style.opacity = "1";
            setTimeout(() => btn.classList.remove("shake-animation"), 500);
        }
    }

    if(pontosEl) pontosEl.innerText = pontos;
}

/**
 * Exibe tela final
 */
function finalizarTreino() {
    let nivel = "Iniciante";
    if (pontos > 300) nivel = "Avançado 🏆";
    else if (pontos > 150) nivel = "Intermediário 💪";
    else if (pontos > 50) nivel = "Básico 🌱";

    const container = document.querySelector(".training-container");
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; animation: fadeInUp 0.5s ease;">
            <h2 style="font-size: 32px; color: var(--primary); margin-bottom: 10px;">Excellent work!</h2>
            
            <div style="background: #f7f7f7; padding: 20px; border-radius: 20px; border: 2px solid var(--border); margin-bottom: 20px;">
                <p style="font-size: 16px; color: var(--text-light); font-weight: 700; margin-bottom: 5px;">Your Proficiency:</p>
                <h3 style="font-size: 24px; color: var(--secondary); margin-bottom: 15px;">${nivel}</h3>
                <hr style="border: 0; border-top: 1px solid var(--border); margin: 10px 0;">
                
                <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                    <div>
                        <p style="font-size: 14px; color: #58cc02; font-weight: 900;">Correct</p>
                        <p style="font-size: 22px; font-weight: 900;">${totalAcertos}</p>
                    </div>
                    <div>
                        <p style="font-size: 14px; color: #ff4b4b; font-weight: 900;">Missed</p>
                        <p style="font-size: 22px; font-weight: 900;">${totalErros}</p>
                    </div>
                </div>
            </div>

            <p style="font-size: 20px; margin-bottom: 30px; font-weight: 900;">Total Score: ${pontos} pts</p>
            <button onclick="location.reload()" style="width: 100%;">Restart Lesson</button>
        </div>
    `;
}

// Inicialização: Prepara as 15 perguntas aleatórias antes de renderizar a primeira
document.addEventListener("DOMContentLoaded", () => {
    prepararPerguntas();
    render();
});