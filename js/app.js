/* 
    CHATFLUENT - CORE APP JS
    Lógica: Níveis Progressivos (8, 15, 25), Seleção Aleatória, 
    Avatar WhatsApp e Pontuação Competitiva com suporte a valores negativos.
*/

// ESTADO GLOBAL DO JOGO
let nivelAtual = 0; 
let etapa = 0;
let pontos = 0;
let streak = 0;
let errosNaEtapa = 0;

// Relatório Final da Sessão
let totalAcertos = 0;
let totalErros = 0;

// Lista de perguntas filtradas para a sessão atual
let perguntasSessao = [];

/**
 * Filtra e embaralha perguntas baseadas no nível e define o tamanho da lição
 */
function prepararSessao() {
    if (typeof historia === 'undefined' || historia.length === 0) {
        console.error("Erro: Banco de dados não encontrado.");
        return;
    }

    let quantidadePorNivel = 8; 
    if (nivelAtual === 1) quantidadePorNivel = 15;
    if (nivelAtual === 2) quantidadePorNivel = 25;

    let bancoFiltrado = historia.filter(p => p.nivel === nivelAtual);

    for (let i = bancoFiltrado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bancoFiltrado[i], bancoFiltrado[j]] = [bancoFiltrado[j], bancoFiltrado[i]];
    }

    perguntasSessao = bancoFiltrado.slice(0, quantidadePorNivel);
    
    etapa = 0;
    totalAcertos = 0;
    totalErros = 0;
    streak = 0;
}

/**
 * Renderiza o HUD (progresso) e a interface de Chat
 */
function render() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");
    const progressoEl = document.getElementById("progresso");

    if (!perguntasSessao[etapa]) return;

    const nomesNiveis = ["Básico 🌱", "Intermediário 💪", "Avançado 🏆"];
    if (progressoEl) {
        progressoEl.innerHTML = `<b>${nomesNiveis[nivelAtual]}</b> | Lição ${etapa + 1} de ${perguntasSessao.length}`;
    }

    errosNaEtapa = 0; 
    feedbackEl.style.opacity = "0";
    feedbackEl.innerHTML = "";

    perguntaEl.innerHTML = `
        <div class="chat-row">
            <img src="/ChatFluent/img/avatar-npc.png" class="avatar-npc" alt="Mentor">
            <div class="npc-bubble">
                ${perguntasSessao[etapa].npc}
            </div>
        </div>
    `;

    let html = "";
    perguntasSessao[etapa].opcoes.forEach((op, i) => {
        html += `
            <button class="option-btn" onclick="responder(this, ${i})" style="animation: fadeInUp 0.4s ease forwards ${i * 0.1}s; opacity: 0;">
                ${op}
            </button>`;
    });

    opcoesEl.innerHTML = html;
}

/**
 * Processa a resposta e gerencia pontuação/erros
 */
function responder(btn, i) {
    const feedbackEl = document.getElementById("feedback");
    const pontosEl = document.getElementById("pontos");
    const lang = navigator.language.split('-')[0] || 'en';

    if (feedbackEl.innerHTML.includes("Amazing") || feedbackEl.innerHTML.includes("errors")) return;

    if (i === perguntasSessao[etapa].correta) {
        // --- LÓGICA DE ACERTO COMPETITIVO ---
        if (errosNaEtapa === 0) {
            pontos += 10 + (streak * 2);
            streak++;
            totalAcertos++; 
            feedbackEl.innerHTML = `<div style="color: #58cc02; font-weight: 900; margin-top: 10px;">Perfect! +${10 + (streak-1)*2} pts 🥳</div>`;
        } else {
            pontos += 1;
            streak = 0; 
            totalAcertos++; 
            feedbackEl.innerHTML = `<div style="color: #1cb0f6; font-weight: 900; margin-top: 10px;">Good recovery! +1 pt 👍</div>`;
        }
        
        btn.style.borderColor = "#58cc02";
        btn.style.backgroundColor = "#d7ffb8";
        feedbackEl.style.opacity = "1";

        etapa++;
        
        setTimeout(() => {
            if (etapa < perguntasSessao.length) render();
            else finalizarTreino();
        }, 2000); 

    } else {
        // --- LÓGICA DE ERRO (Agora permite pontos negativos) ---
        errosNaEtapa++;
        streak = 0;
        pontos -= 2; // Removido Math.max(0, ...) para permitir que o valor caia abaixo de zero
        
        btn.style.borderColor = "#ff4b4b";
        btn.style.backgroundColor = "#ffdbdb";
        btn.classList.add("shake-animation");
        
        const dica = perguntasSessao[etapa].explicacao[lang] || perguntasSessao[etapa].explicacao['pt'];

        if (errosNaEtapa >= 2) {
            totalErros++; 
            feedbackEl.innerHTML = `<div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Too many errors. Moving on...</div>
                                    <div class="tip-box">${dica}</div>`;
            feedbackEl.style.opacity = "1";
            etapa++;
            setTimeout(() => {
                if (etapa < perguntasSessao.length) render();
                else finalizarTreino();
            }, 2000);
        } else {
            feedbackEl.innerHTML = `<div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Incorrect. Tip:</div>
                                    <div class="tip-box">${dica}</div>`;
            feedbackEl.style.opacity = "1";
            setTimeout(() => btn.classList.remove("shake-animation"), 500);
        }
    }
    if(pontosEl) pontosEl.innerText = pontos;
}

/**
 * Relatório Final
 */
function finalizarTreino() {
    const container = document.querySelector(".training-container");
    const metaAprovacao = Math.ceil(perguntasSessao.length * 0.8); 
    const passou = totalAcertos >= metaAprovacao;
    
    let acaoBotao = "";
    let mensagemNivel = "";

    if (passou && nivelAtual < 2) {
        mensagemNivel = "Você desbloqueou o próximo nível! 🔓";
        acaoBotao = `<button onclick="irParaProximoNivel()">Ir para o Próximo Nível</button>`;
    } else if (passou && nivelAtual === 2) {
        mensagemNivel = "Parabéns! Você é um mestre do inglês! 🏆";
        acaoBotao = `<button onclick="location.reload()">Reiniciar do Zero</button>`;
    } else {
        mensagemNivel = `Quase lá! Você precisa de ${metaAprovacao} acertos para avançar.`;
        acaoBotao = `<button onclick="location.reload()">Tentar Novamente</button>`;
    }

    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="font-size: 28px; color: var(--primary);">${passou ? 'Excelente!' : 'Continue praticando!'}</h2>
            <p style="margin: 15px 0; font-weight: 700; color: var(--text-light);">${mensagemNivel}</p>
            
            <div class="stats-card" style="display: flex; justify-content: space-around; background: #f7f7f7; padding: 15px; border-radius: 15px; margin-bottom: 20px;">
                <div class="stat"><span>✅ Acertos</span><br><strong>${totalAcertos}</strong></div>
                <div class="stat"><span>❌ Falhas</span><br><strong>${totalErros}</strong></div>
            </div>

            <p style="font-size: 20px; margin: 20px 0; font-weight: 900;">Pontos Acumulados: ${pontos}</p>
            ${acaoBotao}
        </div>
    `;
}

function irParaProximoNivel() {
    nivelAtual++;
    prepararSessao();
    render();
}

document.addEventListener("DOMContentLoaded", () => {
    prepararSessao();
    render();
});