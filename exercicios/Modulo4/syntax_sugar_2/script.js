function adicionarPensamento() {
  var pensamento = prompt("Qual o seu pensamento de açucar? ");

  var lista = document.querySelector(".pensamentos");

  lista.innerHTML += `
    <li onclick="apagarItem(this)">
      <span>
      ${pensamento}
      </span>
    </li>
  `;
}

function apagarItem(elemento) {
 elemento.parentNode.remove();
  alert("Item apagado!");
}
