let etapa = 0;
let pontos = 0;

function render(){
document.getElementById("pergunta").innerText = historia[etapa].pergunta;

let html="";
historia[etapa].opcoes.forEach((op,i)=>{
html += `<button onclick="responder(${i})">${op}</button>`;
});

document.getElementById("opcoes").innerHTML = html;
}

function responder(i){
if(i === historia[etapa].correta){
pontos += 10;
document.getElementById("feedback").innerHTML = "✅ Correto";

etapa++;

if(etapa < historia.length){
setTimeout(render,500);
}else{
document.getElementById("pergunta").innerText = "Fim!";
}
}else{
document.getElementById("feedback").innerHTML = "❌ Tente novamente";
}

document.getElementById("pontos").innerText = pontos;
}

render();