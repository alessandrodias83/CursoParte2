 let pensamentos = [];

let pensamento = prompt("Digite um pensamento:");

function perguntarPensamentos() {


  while (qtde !== "fim") {
    pensamentos.push(pensamento);
    adicionarPensamento(pensamento);
   pensamento = prompt("Digite um pensamento:")
  }


}

function adicionarPensamento(pensamento) {
  const elemento = document.querySelector("ul");
  elemento.innerHTML = elemento.innerHTML + `<li>${pensamento}</li>`;
}

perguntarPensamentos();
