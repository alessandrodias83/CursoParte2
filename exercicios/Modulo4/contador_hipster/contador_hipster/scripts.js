function contar() {
    let segundos = parseInt(prompt("Quantos segundos você quer?"));
    const contadorDiv = document.querySelector(".contador");
    contadorDiv.innerText = segundos;
}

function contagemSegundos() {
    segundos--;
    contadorDiv.innerText = segundos;
    if(segundos ===0 ) {
        clearInterval(intervalo);
        alert("Hora da janta!");
    }
}

const intervalo = setInterval(contagemSegundos, 1000);