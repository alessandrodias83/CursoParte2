
let contador = 0;
const tarefas = [
    { titulo: "Adicione uma tarefa no botão acima ☝️", status: "progresso" },
    { titulo: "Passe o mouse na tarefa para ver o botão excluir 🗑️", status: "progresso" },
    { titulo: "Clique na tarefa para marca-la como feita ✔️", status: "progresso" },
];

//Objeto precisa ter: título e status

function atualizarTarefas() {
    const ul = document.querySelector("ul");
    ul.innerHTML = ""; // antes de iniciar uma nova tarefa, eu limpo para não duplicar
    contador = 0; // também preciso limpar o contador

    for (let index = 0; index < tarefas.length; index++) {
        let elementoTarefa;
        if (tarefas[index].status === "finalizado") {
           elementoTarefa = `
        <li class="finalizada>
            <div class="btn-delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span>
            </li> 
        `;
            // dentro do objeto preciso indicar o que quero pegar, no caso, o título que foi passado na const tarefas
        } else {
            elementoTarefa = `
        <li>
            <div class="btn-delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span>
            </li> 
        `;
        }
        ul.innerHTML += elementoTarefa;
        contador++; // adiciona o contador

        atualizarContador(); // chamo a função aqui
    }
}

atualizarTarefas();

function adicionarNovaTarefa() {
    const novaTarefa = document.querySelector("input").value; // devo usar .value para "pegar o texto dentro do input"
    tarefas.push(novaTarefa);
    atualizarTarefas();
    document.querySelector("input").value = ""; // essa linha é para limpar o imput para receber uma nova lista
}


function finalizarTarefa(elemento) {

    const li = elemento.parentNode; //peguei o elemento pai do spam no caso o li, assim eu consigo colocar a nova classe em toda a linha


    const estaFinalizada = li.classList.contains("finalizada");
    if (estaFinalizada === true) {
        contador++;
    } else {
        contador--;
    }

    li.classList.toggle("finalizada")
    atualizarContador(); //criei uma função com o mesmo código que se repete, o contador, dessa forma, eu coloco o código em uma função e quando preciso usar, basta chamar a função.
}


function finalizarTodas() {
    const tarefas = document.querySelectorAll("li");

    let index = 0;
    while (index < tarefas.length) {
        tarefas[index].classList.add("finalizada");
        index++;
    }

    contador = 0;
    atualizarContador();


}

function atualizarContador() {
    const elementoContador = document.querySelector("h1"); // alterei o contador da tag h1
    elementoContador.innerHTML = `To-do List(${contador})`
}










/*const tarefas = [];

const qtde = Number(prompt("Quantas tarefas você quer adicionar?"));

let contador = 0;

while (qtde > contador) {
    tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
    //contador = contador + 1;
    //contador +=1; soma o que quiser, até string
    contador++; /*so aumenta 1 */

/*
}
contador = 0;
const lista = document.querySelector("ul");
while(qtde > contador) {
lista.innerHTML += `<li>${tarefas[contador]}</li>`;
contador ++;
}


/*
if - roda o código se a condição for verdadeira - somente 1 vez
while - roda enquanto a condição for verdadeira
*/

