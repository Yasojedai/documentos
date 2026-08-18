function verificar(respostaEscolhida){
  let respostaCorreta = 2;
  let feedback = document.getElementById("mensagem1");
if (respostaEscolhida === respostaCorreta){
  feedback.innerHTML = "parabens";
  feedback.style.color = "green";
} else {
  feedback.innerHTML = "erro X";
  feedback.style.color = "red";
}
}
