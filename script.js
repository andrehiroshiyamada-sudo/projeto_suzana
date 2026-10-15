// funcao chamada quando clica em "Ver resultado"
function calcular(event) {
  event.preventDefault(); // nao deixa a pagina recarregar

  // pegando o que a pessoa preencheu
  const nome = document.getElementById("nome").value;
  const sono = Number(document.getElementById("sono").value);
  const humor = Number(document.getElementById("humor").value);
  const conversou = document.getElementById("conversou").checked;

  // a pontuacao comeca em zero
  let pontos = 0;

  // dormiu pouco ou demais
  if (sono < 6 || sono > 10) {
    pontos = pontos + 1;
  }

  // humor baixo
  if (humor <= 4) {
    pontos = pontos + 2;
  }

  // nao conversou com ninguem
  if (!conversou) {
    pontos = pontos + 1;
  }

  // escolhe a cor e a mensagem
  let classe = "";
  let mensagem = "";

  if (pontos === 0) {
    classe = "verde";
    mensagem = "Voce esta se cuidando bem. Continue assim!";
  } else if (pontos <= 2) {
    classe = "amarelo";
    mensagem = "Vale prestar atencao em voce. Tente dormir melhor e conversar com alguem.";
  } else {
    classe = "vermelho";
    mensagem = "Procure ajuda. O CVV atende 24 horas pelo 188.";
  }

  // operador ternario: sono bom ou nao
  const textoSono = (sono >= 7 && sono <= 9) ? "esta bom" : "pode melhorar";

  // mostra na tela
  document.getElementById("resultado").innerHTML = `
    <div class="cartao ${classe}">
      <p><strong>${nome}</strong>, sua pontuacao foi ${pontos}.</p>
      <p>Seu sono de ${sono} horas ${textoSono}.</p>
      <p>${mensagem}</p>
    </div>
  `;

  console.log(`${nome} tirou ${pontos} pontos`);
}

// funcao chamada quando clica em "Limpar"
function limpar() {
  document.getElementById("resultado").innerHTML = "";
}
