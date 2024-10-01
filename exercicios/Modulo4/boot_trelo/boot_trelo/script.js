const tarefasAFazer = [
  "Estudar",
  "Assistir Friends recitando as falas junto",
  "Ver vídeos de gatinhos até dormir",
];

const tarefasFeitas = [
  "Surtar pela primeira vez hoje",
  "Surtar pela segunda vez hoje",
  "Posição Fetal Nº 4",
  "Fazer carinho no Toninho",
];

function imprimirListaAFazer() {
  const primeiroElemento = document.querySelector(".lista-a-fazer");
  let listaHTML = "";
  
  for (let i = 0; i < tarefasAFazer.length; i++) {
    listaHTML += `<li>${tarefasAFazer[i]}</li>`;
  };
   ListaAFazer.innerHTML = listaHTML;
}

function imprimirListaFeito() {
  const segundoElemento = document.querySelector(".lista-feito");
  let listaHTML = "";
  
  for (let i = 0; i < tarefasFeitas.length; i++) {
    listaHTML += `<li>${tarefasFeitas[i]}</li>`;
  };
   ListaAFazer.innerHTML = listaHTML;
}

imprimirListaAFazer();
imprimirListaFeito();
