// Lista de imagens disponíveis para as cartas
const imagens = [
    'bobrossparrot', 'explodyparrot', 'fiestaparrot', 
    'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'
];

let numeroCartas;
let jogadas = 0;
let cartasViradasTemporarias = [];
let cartasViradasPermanentes = 0;

// Função para perguntar o número de cartas até que um número válido seja inserido
function solicitarNumeroDeCartas() {
    do {
        numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));
    } while (isNaN(numeroCartas) || numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14);
}

// Função para embaralhar o array de cartas
function embaralharCartas(cartas) {
    return cartas.sort(() => Math.random() - 0.5);
}

// Função para criar o tabuleiro de cartas
function criarTabuleiro(cartasParaJogar) {
    const container = document.querySelector('.game-container');
    container.innerHTML = '';

    cartasParaJogar.forEach(imagem => {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');
        cartaDiv.innerHTML = `
            <img src="img/back.png" class="back-face">
            <img src="img/${imagem}.gif" class="front-face" style="display: none;">
        `;
        container.appendChild(cartaDiv);

        cartaDiv.addEventListener('click', () => {
            if (cartasViradasTemporarias.length < 2 && !cartaDiv.classList.contains('matched')) {
                virarCarta(cartaDiv, imagem);
            }
        });
    });
}

// Função para virar uma carta
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

// Função para verificar se as duas cartas viradas formam um par
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

// Função principal para iniciar o jogo
function iniciarJogo() {
    solicitarNumeroDeCartas();

    // Duplicar e embaralhar as cartas
    const cartasParaJogar = imagens.slice(0, numeroCartas / 2).flatMap(carta => [carta, carta]);
    const cartasEmbaralhadas = embaralharCartas(cartasParaJogar);

    // Criar o tabuleiro
    criarTabuleiro(cartasEmbaralhadas);
}

// Iniciar o jogo ao carregar a página
iniciarJogo()