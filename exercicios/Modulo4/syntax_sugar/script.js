function perguntarPensamentos() {
  
}

function adicionarPensamento(pensamento) {
  const elemento = document.querySelector("ul");
  elemento.innerHTML = elemento.innerHTML + `<li>${pensamento}</li>`;
}

perguntarPensamentos();
