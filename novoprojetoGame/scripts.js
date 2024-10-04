const container = document.querySelectorAll('.container');

const imagens = [
    'bobrossparrot', 
    'explodyparrot', 
    'fiestaparrot', 
    'metalparrot', 
    'revertitparrot', 
    'tripletsparrot', 
    'unicornparrot'
];

let cartasSelecionadas = [];
let jogadas = 0;
let cartasViradasTemporarias = [];
let cartasViradasPermanentes = 0;

function iniciarJogo() {

    let numeroCartas;
    numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Esolha um número par entre 4 e 14."));

    while (isNaN(numeroCartas) || numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14);

    const gamer = document.querySelector('.game');
    gamer.innerHTML = '';

    const duplicarCartas = imagens.slice(0, numeroCartas / 2).flatMap(carta => [carta, carta]);
    duplicarCartas.sort(() => Math.random() - 0.5);

    duplicarCartas.forEach(imagem => {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');
        cartaDiv.innerHTML = `
            <img src="images/back.png" class="back">
            <img src="images/${imagem}.gif" class="front" style="display: none">
        `;

        container.appendChild(cartaDiv);

        cartaDiv.addEventListener('click', () => {
            if (cartasViradasTemporarias.length < 2 && !cartaDiv.classList.contains('matched')) {
                virarCarta(cartaDiv, imagem);
            }
        });
    });

}

iniciarJogo();