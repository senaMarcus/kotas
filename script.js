const btnSoma$ = document.getElementById("soma");
const btnSubtracao$ = document.getElementById("subtracao");
const cotas$ = document.getElementById("quantidade");
const mensalidadeNumb$ = document.getElementById("numberMensalidade");
const caucaoNumb$ = document.getElementById("numberCaucao");

let contador = 1;
var mensalidade = 15;

cotas$.innerText = contador;

btnSoma$.addEventListener("click", function () {
  contador = contador + 1;

  cotas$.innerText = contador;
  mensalidadeNumb$.innerText = (contador * mensalidade).toFixed(2);
  caucaoNumb$.innerText = (contador * mensalidade).toFixed(2);
});

btnSubtracao$.addEventListener("click", function () {
  contador = contador - 1;
  if (contador < 1) {
    contador = 1;
  }
  cotas$.innerText = contador;
  mensalidadeNumb$.innerText = (contador * mensalidade).toFixed(2);
  caucaoNumb$.innerText = (contador * mensalidade).toFixed(2);
});

//não consegui concluir o carousel
//$(".carousel").owlCarousel({});
