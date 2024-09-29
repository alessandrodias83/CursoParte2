
let contador = 3;

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
    while(index < tarefas.length) {
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

