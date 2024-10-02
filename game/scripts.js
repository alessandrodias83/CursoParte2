function iniciarJogo() {
    const imagens = [
        'bobrossparrot', 
        'explodyparrot', 
        'fiestaparrot', 
        'metalparrot', 
        'revertitparrot', 
        'tripletsparrot', 
        'unicornparrot'
    ];

    let numeroCartas;
    do {
        numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));
    } while (isNaN(numeroCartas) || numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14);

    const container = document.querySelector('.game-container');
    container.innerHTML = '';

    let cartasSelecionadas = [];
    let jogadas = 0;
    let cartasViradasTemporarias = [];
    let cartasViradasPermanentes = 0;

    // Duplicar e misturar as cartas
    const cartasParaJogar = imagens.slice(0, numeroCartas / 2).flatMap(carta => [carta, carta]);
    cartasParaJogar.sort(() => Math.random() - 0.5);

    // Gerar cartas no DOM
    cartasParaJogar.forEach(imagem => {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');
        cartaDiv.innerHTML = `
            <img src="images/back.png" class="back-face">
            <img src="images/${imagem}.gif" class="front-face" style="display: none;">
        `;
        container.appendChild(cartaDiv);

        cartaDiv.addEventListener('click', () => {
            if (cartasViradasTemporarias.length < 2 && !cartaDiv.classList.contains('matched')) {
                virarCarta(cartaDiv, imagem);
            }
        });
    });

    function virarCarta(cartaDiv, imagem) {
        jogadas++;
        const backFace = cartaDiv.querySelector('.back-face');
        const frontFace = cartaDiv.querySelector('.front-face');
        
        backFace.style.display = 'none';
        frontFace.style.display = 'block';
        cartasViradasTemporarias.push({ cartaDiv, imagem });

        if (cartasViradasTemporarias.length === 2) {
            verificarPar();
        }
    }

    function verificarPar() {
        const [primeiraCarta, segundaCarta] = cartasViradasTemporarias;

        if (primeiraCarta.imagem === segundaCarta.imagem) {
            primeiraCarta.cartaDiv.classList.add('matched');
            segundaCarta.cartaDiv.classList.add('matched');
            cartasViradasTemporarias = [];
            cartasViradasPermanentes += 2;

            if (cartasViradasPermanentes === numeroCartas) {
                setTimeout(() => {
                    alert(`Você ganhou em ${jogadas} jogadas!`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                primeiraCarta.cartaDiv.querySelector('.back-face').style.display = 'block';
                primeiraCarta.cartaDiv.querySelector('.front-face').style.display = 'none';
                segundaCarta.cartaDiv.querySelector('.back-face').style.display = 'block';
                segundaCarta.cartaDiv.querySelector('.front-face').style.display = 'none';
                cartasViradasTemporarias = [];
            }, 1000);
        }
    }
}

iniciarJogo();