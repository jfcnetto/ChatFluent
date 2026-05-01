/* 
    CHATFLUENT - CORE APP JS
    Lógica: Níveis Progressivos (8, 15, 25), Seleção Aleatória, 
    Avatar WhatsApp e Sistema de Compartilhamento de Desempenho/Site.
*/

// ESTADO GLOBAL DO JOGO
let nivelAtual = 0; 
let etapa = 0;
let pontos = 0;
let streak = 0;
let errosNaEtapa = 0;

// Relatório Final da Sessão
let totalAcertos = 0;
let totalErros = 0; // Erros fatais (perdeu a questão)
let errosTentativa = 0; // Erros cometidos em tentativas individuais

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
    errosTentativa = 0;
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

    const totalAcoes = totalAcertos + errosTentativa + totalErros;
    const percentual = totalAcoes > 0 
        ? Math.round((totalAcertos / totalAcoes) * 100) 
        : 0;

    const nomesNiveis = ["Básico 🌱", "Intermediário 💪", "Avançado 🏆"];
    if (progressoEl) {
        progressoEl.innerHTML = `<b>${nomesNiveis[nivelAtual]}</b> | Lição ${etapa + 1} de ${perguntasSessao.length} <br> <small>Desempenho Real: ${percentual}%</small>`;
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
 * Lógica de compartilhamento de desempenho (Final da Lição)
 */
function compartilharDesempenho() {
    const nomesNiveis = ["Básico 🌱", "Intermediário 💪", "Avançado 🏆"];
    const totalAcoes = totalAcertos + errosTentativa + totalErros;
    const aproveitamento = totalAcoes > 0 ? Math.round((totalAcertos / totalAcoes) * 100) : 0;
    
    const texto = `🔥 No ChatFluent, alcancei ${aproveitamento}% de acerto no nível ${nomesNiveis[nivelAtual]}! 🏆\n\nConsegue bater meu recorde e dominar o inglês também? 🚀`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Meu Desempenho no ChatFluent',
            text: texto,
            url: window.location.href
        }).catch(console.error);
    } else {
        const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto + " " + window.location.href)}`;
        window.open(urlWhatsapp, '_blank');
    }
}

/**
 * Lógica de compartilhamento do SITE (Header/Footer)
 */
function compartilharSite() {
    const texto = "🚀 Confira o ChatFluent! Uma forma incrível e gratuita de praticar inglês com situações reais e gamificação. 🏆";
    const url = window.location.origin + "/ChatFluent/pt/index.html";

    if (navigator.share) {
        navigator.share({
            title: 'ChatFluent - Aprenda Inglês Brincando',
            text: texto,
            url: url
        }).catch(console.error);
    } else {
        const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto + " " + url)}`;
        window.open(urlWhatsapp, '_blank');
    }
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
        errosNaEtapa++;
        errosTentativa++; 
        streak = 0;
        pontos -= 2; 
        
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
    const totalAcoes = totalAcertos + errosTentativa + totalErros;
    const aproveitamento = totalAcoes > 0 ? Math.round((totalAcertos / totalAcoes) * 100) : 0;
    const passou = aproveitamento >= 80;
    
    let acaoBotao = "";
    let mensagemStatus = "";

    if (passou && nivelAtual < 2) {
        mensagemStatus = `<span style="color: #58cc02;">VOCÊ SUBIU DE NÍVEL! 🔓</span>`;
        acaoBotao = `<button onclick="irParaProximoNivel()" style="width:100%; padding:15px; cursor:pointer;">Próximo Nível</button>`;
    } else if (passou && nivelAtual === 2) {
        mensagemStatus = `<span style="color: #58cc02;">MESTRIA TOTAL ALCANÇADA! 🏆</span>`;
        acaoBotao = `<button onclick="location.reload()" style="width:100%; padding:15px; cursor:pointer;">Reiniciar Jornada</button>`;
    } else {
        mensagemStatus = `<span style="color: #ff4b4b;">DESEMPENHO INSUFICIENTE 📚</span><br><small>Refaça a lição para avançar</small>`;
        acaoBotao = `<button onclick="location.reload()" style="width:100%; padding:15px; cursor:pointer;">Tentar Novamente</button>`;
    }

    container.innerHTML = `
        <div id="resultado-final" style="text-align: center; padding: 20px;">
            <h2 style="font-size: 28px; color: var(--primary);">${passou ? 'Excelente!' : 'Não foi dessa vez!'}</h2>
            <p style="margin: 10px 0; font-size: 18px; font-weight: 900;">${mensagemStatus}</p>
            
            <div style="background: #f0f0f0; border-radius: 15px; padding: 15px; margin: 20px 0;">
                <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Seu Aproveitamento Real:</p>
                <h3 style="font-size: 32px; color: ${passou ? '#58cc02' : '#ff4b4b'};">${aproveitamento}%</h3>
                <p style="font-size: 12px; color: #999;">(Meta para avançar: 80%)</p>
            </div>

            <div class="stats-card" style="display: flex; justify-content: space-around; margin-bottom: 20px;">
                <div class="stat"><span>✅ Acertos</span><br><strong>${totalAcertos}</strong></div>
                <div class="stat"><span>⚠️ Erros</span><br><strong>${errosTentativa}</strong></div>
                <div class="stat"><span>❌ Falhas</span><br><strong>${totalErros}</strong></div>
            </div>

            <p style="font-size: 18px; margin-bottom: 20px;">Pontuação Total: <b>${pontos}</b></p>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${acaoBotao}
                <button onclick="compartilharDesempenho()" style="background: #25d366; border-color: #128c7e; width: 100%;">
                    Compartilhar Resultado no WhatsApp 📱
                </button>
            </div>
        </div>
    `;
}

function irParaProximoNivel() {
    nivelAtual++;
    const container = document.querySelector(".training-container");
    container.innerHTML = `
        <div id="pergunta" style="min-height: 85px;"></div>
        <div id="opcoes" class="options"></div>
        <div id="feedback" style="transition: 0.3s; margin-top: 20px; min-height: 30px; text-align: center;"></div>
        <div class="score-badge" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 25px; padding-top: 15px; border-top: 1px solid var(--border);">
            <span>🏆 <span id="pontos">${pontos}</span> pontos</span>
            <span style="color: var(--border);">|</span>
            <span id="progresso"></span>
        </div>
    `;
    prepararSessao();
    render();
}

document.addEventListener("DOMContentLoaded", () => {
    prepararSessao();
    render();
});