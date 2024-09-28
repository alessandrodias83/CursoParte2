

const tarefas = [];

const qtde = Number(prompt("Quantas tarefas você quer adicionar?"));

let contador = 0;

while (qtde > contador) {
    tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
    //contador = contador + 1;
    //contador +=1; soma o que quiser, até string
    contador++; /*so aumenta 1 */

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