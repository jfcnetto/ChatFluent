let etapa = 0;
let pontos = 0;
let streak = 0; // Acertos consecutivos

/**
 * Renderiza a pergunta (NPC) e as opções do usuário
 */
function render() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");

    // Limpa o feedback anterior
    feedbackEl.style.opacity = "0";
    feedbackEl.innerHTML = "";

    // Renderiza a fala do NPC como um balão de chat
    // Ajustado para ler 'npc' do seu modelo de dados
    perguntaEl.innerHTML = `
        <div class="npc-bubble" style="animation: fadeInUp 0.3s ease;">
            ${historia[etapa].npc}
        </div>
    `;

    // Renderiza as opções
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
 * Processa a resposta com base nas regras de pontuação e streak
 */
function responder(btn, i) {
    const feedbackEl = document.getElementById("feedback");
    const pontosEl = document.getElementById("pontos");
    
    // Bloqueia cliques múltiplos durante o feedback
    if (feedbackEl.style.opacity === "1" && i === historia[etapa].correta) return;

    if (i === historia[etapa].correta) {
        // REGRA DE NEGÓCIO: pontuacao += 10 + (streak * 2)
        pontos += 10 + (streak * 2);
        streak++;
        
        // Feedback visual de acerto
        btn.style.borderColor = "#58cc02";
        btn.style.backgroundColor = "#d7ffb8";
        
        // Mostra explicação no idioma base (pt)
        const explicacao = historia[etapa].explicacao['pt'];
        feedbackEl.innerHTML = `<div style="color: #58cc02; font-weight: 900; margin-top: 10px;">✅ ${explicacao}</div>`;
        feedbackEl.style.opacity = "1";

        etapa++;

        // Transição para próxima etapa ou fim
        setTimeout(() => {
            if (etapa < historia.length) {
                render();
            } else {
                finalizarTreino();
            }
        }, 1500);

    } else {
        // REGRA DE NEGÓCIO: Erro zera streak e tira 2 pontos
        streak = 0;
        pontos = Math.max(0, pontos - 2);
        
        // Feedback visual de erro
        btn.style.borderColor = "#ff4b4b";
        btn.style.backgroundColor = "#ffdbdb";
        btn.classList.add("shake-animation");
        
        feedbackEl.innerHTML = `<div style="color: #ff4b4b; font-weight: 900; margin-top: 10px;">❌ Tente novamente</div>`;
        feedbackEl.style.opacity = "1";
        
        // Remove a animação de tremor para permitir repetir
        setTimeout(() => btn.classList.remove("shake-animation"), 500);
    }

    // Atualiza o placar na tela
    pontosEl.innerText = pontos;
}

/**
 * Finaliza o treino e exibe o nível alcançado
 */
function finalizarTreino() {
    let nivel = "Iniciante";
    
    // Lógica de Níveis baseada na especificação
    if (pontos > 300) nivel = "Avançado 🏆";
    else if (pontos > 150) nivel = "Intermediário 💪";
    else if (pontos > 50) nivel = "Básico 🌱";

    // Busca o container de treino para mostrar o resultado final
    const container = document.querySelector(".training-container");
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; animation: fadeInUp 0.5s ease;">
            <h2 style="font-size: 32px; color: var(--primary); margin-bottom: 10px;">¡Excelente trabalho!</h2>
            <div style="background: #f7f7f7; padding: 20px; border-radius: 20px; border: 2px solid var(--border); margin-bottom: 20px;">
                <p style="font-size: 18px; color: var(--text-light); font-weight: 700;">Nível Alcançado:</p>
                <h3 style="font-size: 28px; color: var(--secondary);">${nivel}</h3>
            </div>
            <p style="font-size: 20px; margin-bottom: 30px; font-weight: 900;">Total de Pontos: ${pontos}</p>
            <button onclick="location.reload()" style="width: 100%;">Refazer Lição</button>
        </div>
    `;
}

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", render);