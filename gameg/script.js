function criarJogo() {
    // Solicita o número de cartas
    let numCartas = parseInt(prompt("Digite um número par de cartas (entre 4 e 14):"));
    while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
        numCartas = parseInt(prompt("Número inválido. Digite um número par de cartas (entre 4 e 14):"));
    }

    // Nomes das imagens das cartas
    const nomesImagens = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
    const cartas = nomesImagens.concat(nomesImagens).slice(0, numCartas);

    // Embaralha as cartas
    cartas.sort(() => Math.random() - 0.5);

    // Cria o tabuleiro
    const tabuleiro = document.getElementById('tabuleiro');
    tabuleiro.innerHTML = '';
    let jogadas = 0;
    let cartaVirada = null;

    for (let i = 0; i < numCartas; i++) {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.setAttribute('data-index', i);
        carta.addEventListener('click', () => {
            if (carta.classList.contains('virada') || cartaVirada === carta) return;
            carta.classList.add('virada');
            jogadas++;

            if (cartaVirada === null) {
                cartaVirada = carta;
            } else {
                const img1 = cartaVirada.querySelector('img').src;
                const img2 = carta.querySelector('img').src;
                if (img1 === img2) {
                    cartaVirada = null;
                } else {
                    setTimeout(() => {
                        carta.classList.remove('virada');
                        cartaVirada.classList.remove('virada');
                        cartaVirada = null;
                    }, 1000);
                }
            }

            if (document.querySelectorAll('.virada').length === numCartas) {
                alert(`Você ganhou em ${jogadas} jogadas!`);
            }
        });

        const img = document.createElement('img');
        img.src = `img/${cartas[i]}.gif`;
        carta.appendChild(img);
        tabuleiro.appendChild(carta);
    }
}

criarJogo();