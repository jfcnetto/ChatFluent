let etapa = 0;
let pontos = 0;

/**
 * Renderiza a pergunta e as opções com animação de entrada
 */
function render() {
    const perguntaEl = document.getElementById("pergunta");
    const opcoesEl = document.getElementById("opcoes");
    const feedbackEl = document.getElementById("feedback");

    // Limpa o feedback anterior suavemente
    feedbackEl.style.opacity = "0";
    feedbackEl.innerHTML = "";

    // Atualiza o texto da pergunta
    perguntaEl.innerText = historia[etapa].pergunta;

    // Renderiza as opções como cards estilo Duolingo
    let html = "";
    historia[etapa].opcoes.forEach((op, i) => {
        // As opções agora usam a lógica de clique para animação 3D
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
 * Processa a resposta com micro-animações e feedback visual
 * @param {HTMLElement} btn - O botão clicado
 * @param {number} i - Índice da opção
 */
function responder(btn, i) {
    const feedbackEl = document.getElementById("feedback");
    
    // Efeito de feedback visual imediato no botão
    if (i === historia[etapa].correta) {
        pontos += 10;
        btn.style.borderColor = "#58cc02";
        btn.style.backgroundColor = "#d7ffb8";
        
        feedbackEl.innerHTML = `<span style="color: #58cc02">✅ ${explicacoes[idiomaAtual || 'pt']}</span>`;
        feedbackEl.style.opacity = "1";

        etapa++;

        // Transição suave para a próxima lição
        if (etapa < historia.length) {
            setTimeout(render, 800);
        } else {
            setTimeout(finalizarTreino, 500);
        }
    } else {
        // Efeito de erro (tremidinha)
        btn.style.borderColor = "#ff4b4b";
        btn.style.backgroundColor = "#ffdbdb";
        btn.classList.add("shake-animation");
        
        feedbackEl.innerHTML = `<span style="color: #ff4b4b">❌ Tente novamente</span>`;
        feedbackEl.style.opacity = "1";
        
        // Remove a classe de animação para poder repetir se necessário
        setTimeout(() => btn.classList.remove("shake-animation"), 500);
    }

    document.getElementById("pontos").innerText = pontos;
}

function finalizarTreino() {
    const container = document.querySelector(".story-box");
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <h2 style="font-size: 32px; color: var(--primary); margin-bottom: 20px;">¡Excelente trabalho!</h2>
            <p style="font-size: 20px; margin-bottom: 30px;">Você conquistou ${pontos} pontos hoje.</p>
            <button onclick="location.reload()">Refazer Lição</button>
        </div>
    `;
}

// Inicialização
document.addEventListener("DOMContentLoaded", render);