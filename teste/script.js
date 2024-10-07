const container = document.querySelector('.container');
const main = document.querySelector('main'); // Selecione o elemento main aqui

const images = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];

let firstCard = '';
let secondCard = '';
let moves = 0; // Contador de jogadas
let matchedPairs = 0; // Contador de pares encontrados

// Função para solicitar o número de cartas
function numCard() {
    let numCards = parseInt(prompt("Digite um número par de cartas (entre 4 e 14):"));
    while (numCards < 4 || numCards > 14 || numCards % 2 !== 0) {
        numCards = parseInt(prompt("Número inválido. Digite um número par de cartas (entre 4 e 14):"));
    }
    return numCards;
}

const numCards = numCard();

// Função auxiliar para criar elementos com classe
function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Criação do elemento para exibir o contador de jogadas
const moveCounter = createElement('div', 'move-counter');
moveCounter.innerText = 'Jogadas: 0';
// Insere o contador de jogadas no elemento 'main'
main.appendChild(moveCounter);

// Função para revelar a carta
function revealCard(event) {
    const card = event.target.parentNode;

    if (card.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        card.classList.add('reveal-card');
        firstCard = card;
    } else if (secondCard === '') {
        card.classList.add('reveal-card');
        secondCard = card;

        moves++; // Incrementa o contador de jogadas
        moveCounter.innerText = `Jogadas: ${moves}`; // Atualiza o contador no DOM

        checkCard();
    }
};

// Função para criar uma carta
function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const front = document.createElement('div');
    front.classList.add('front');
    const imageFront = document.createElement('img');
    imageFront.src = `images/${image}.gif`;

    const back = document.createElement('div');
    back.classList.add('back');
    const imageBack = document.createElement('img');
    imageBack.src = `images/back.png`;

    front.appendChild(imageFront);
    back.appendChild(imageBack);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-image', image);

    return card;
}

// Função para verificar se as cartas são iguais
function checkCard() {
    const firstImage = firstCard.getAttribute('data-image');
    const secondImage = secondCard.getAttribute('data-image');

    if (firstImage === secondImage) {
        matchedPairs++; // Incrementa o contador de pares encontrados
        firstCard = '';
        secondCard = '';

        // Verifica se todos os pares foram encontrados
        if (matchedPairs === numCards / 2) {
            setTimeout(() => {
                alert(`Parabéns! Você venceu em ${moves} jogadas.`);
            }, 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
        }, 1000);
    }
}

// Função para embaralhar as cartas
function loadGame() {
    const selectedImages = images.slice(0, numCards / 2); 
    const duplicateImages = [...selectedImages, ...selectedImages]; 
    const shuffledArray = duplicateImages.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((image) => {
        const card = createCard(image);
        container.appendChild(card);
    });
}

loadGame();
