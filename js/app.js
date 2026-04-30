/* 
   CHATFLUENT - CORE APP JS
   Lógica do simulador com sistema de Streak e Pontuação
*/

let etapa = 0;
let pontos = 0;
let streak = 0; // Acertos consecutivos

/**
 * Renderiza a fala do NPC e as opções do usuário
 */
function render() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");

    // Validação de Segurança: Verifica se a variável 'historia' existe e tem a etapa atual
    if (typeof historia === 'undefined' || !historia[etapa]) {
        console.error("Erro: Dados da história não encontrados.");
        perguntaEl.innerHTML = `<div class="npc-bubble">Erro ao carregar dados. Verifique o arquivo data.js</div>`;
        return;
    }

    // Limpa o feedback e prepara a transição
    feedbackEl.style.opacity = "0";
    feedbackEl.innerHTML = "";

    // Renderiza a fala do NPC (Chat Style)
    // Usamos 'npc' conforme sua especificação técnica
    perguntaEl.innerHTML = `
        <div class="npc-bubble" style="animation: fadeInUp 0.3s ease;">
            ${historia[etapa].npc}
        </div>
    `;

    // Renderiza os botões de opções
    let html = "";
    historia[etapa].opcoes.forEach((op, i) => {
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
 * Processa a resposta, calcula pontos e streak
 */
function responder(btn, i) {
    const feedbackEl = document.getElementById("feedback");
    const pontosEl = document.getElementById("pontos");
    
    // Evita múltiplos cliques na resposta correta
    if (feedbackEl.style.opacity === "1" && i === historia[etapa].correta) return;

    if (i === historia[etapa].correta) {
        // REGRA DE NEGÓCIO: bônus por consistência
        pontos += 10 + (streak * 2);
        streak++;
        
        // Feedback Visual (Duolingo Style Green)
        btn.style.borderColor = "#58cc02";
        btn.style.backgroundColor = "#d7ffb8";
        
        // Busca a explicação em português definida no modelo de dados
        const explicacaoTexto = historia[etapa].explicacao['pt'];
        feedbackEl.innerHTML = `<div style="color: #58cc02; font-weight: 900; margin-top: 10px;">✅ ${explicacaoTexto}</div>`;
        feedbackEl.style.opacity = "1";

        etapa++;

        // Aguarda 1.5s para o usuário ler a explicação e avança
        setTimeout(() => {
            if (etapa < historia.length) {
                render();
            } else {
                finalizarTreino();
            }
        }, 1500);

    } else {
        // REGRA DE NEGÓCIO: Erro penaliza e quebra o streak
        streak = 0;
        pontos = Math.max(0, pontos - 2);
        
        // Feedback Visual (Erro Red)
        btn.style.borderColor = "#ff4b4b";
        btn.style.backgroundColor = "#ffdbdb";
        btn.classList.add("shake-animation");
        
        feedbackEl.innerHTML = `<div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Tente novamente</div>`;
        feedbackEl.style.opacity = "1";
        
        // Remove a classe de animação para poder tremer de novo se errar outra
        setTimeout(() => btn.classList.remove("shake-animation"), 500);
    }

    // Atualiza o placar em tempo real
    if(pontosEl) pontosEl.innerText = pontos;
}

/**
 * Exibe tela final com o Nível de Proficiência
 */
function finalizarTreino() {
    let nivel = "Iniciante";
    
    // Lógica de Níveis (Baseada na especificação 0-300+)
    if (pontos > 300) nivel = "Avançado 🏆";
    else if (pontos > 150) nivel = "Intermediário 💪";
    else if (pontos > 50) nivel = "Básico 🌱";

    const container = document.querySelector(".training-container");
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; animation: fadeInUp 0.5s ease;">
            <h2 style="font-size: 32px; color: var(--primary); margin-bottom: 10px;">Excelente trabalho!</h2>
            <div style="background: #f7f7f7; padding: 20px; border-radius: 20px; border: 2px solid var(--border); margin-bottom: 20px;">
                <p style="font-size: 18px; color: var(--text-light); font-weight: 700;">Nível Alcançado:</p>
                <h3 style="font-size: 28px; color: var(--secondary);">${nivel}</h3>
            </div>
            <p style="font-size: 20px; margin-bottom: 30px; font-weight: 900;">Total: ${pontos} pontos</p>
            <button onclick="location.reload()" style="width: 100%;">Refazer Lição</button>
        </div>
    `;
}

// Inicializa o simulador após o carregamento da página
document.addEventListener("DOMContentLoaded", render);