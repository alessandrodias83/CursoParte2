function perguntarCartas() {
    let numCartas;

    while (true) {
        numCartas = parseInt(prompt("Quantas cartas você quer jogar? (números pares de 4 a 14)"), 10);
        if (numCartas >= 4 && numCartas <= 14 && numCartas % 2 === 0) {
            break;
        }
        alert("Número inválido! Por favor, insira um número par de 4 a 14.");
    }
    return numCartas;
}
perguntarCartas();