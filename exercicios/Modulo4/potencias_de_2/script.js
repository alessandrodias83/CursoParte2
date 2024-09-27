const lista = [1];

function colocarListaNaTela() {
  const container = document.querySelector(".container");
  container.innerHTML = lista;
}

function aumentarLista() {
  const ultimoElemento = lista[lista.length - 1];

  const proximaPotenciaDeDois = ultimoElemento * 2;

  lista.push(proximaPotenciaDeDois);

  colocarListaNaTela();
}

colocarListaNaTela();
