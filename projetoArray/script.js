
//const tarefa1 = prompt("Digite a 1ª tarefa");
//const tarefa2 = prompt("Digite a 2ª tarefa");
//const tarefa3 = prompt("Digite a 3ª tarefa");

const tarefas = [];

tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));


const lista = document.querySelector("ul");
lista.innerHTML = lista.innerHTML + `<li>${tarefas[0]}</li>`
lista.innerHTML = lista.innerHTML + `<li>${tarefas[1]}</li>`
lista.innerHTML = lista.innerHTML + `<li>${tarefas[2]}</li>`