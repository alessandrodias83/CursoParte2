const container = document.querySelector('.container');

const images = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];

let jogadas = 0;

function numCard() {
    let numCards = parseInt(prompt("Digite um número par de cartas (entre 4 e 14):"));
    while (numCards < 4 || numCards > 14 || numCards % 2 !== 0) {
        numCards = parseInt(prompt("Número inválido. Digite um número par de cartas (entre 4 e 14):"));
    }
    return numCards;
}

const numCards = numCard();

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

function checkEndGame() {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === numCards) {
        alert(`Parabéns, você venceu com ${jogadas} jogadas!`);
    }
}

function checkCard() {
    const firstImage = firstCard.getAttribute('data-image');
    const secondImage = secondCard.getAttribute('data-image');

    if (firstImage === secondImage) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 1000);
    }
    jogadas++;
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCard();
    }

    target.parentNode.classList.add('reveal-card')
}

function createCard(image) {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${image}.gif)`;
    back.style.backgroundImage = `url('../images/back.png')` ;
   
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-image', image)

    return card;
}


function loadGame() {
    const duplicateImages = [...images, ...images].slice(0, numCards); 
    const shuffledArray = duplicateImages.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((image) => {
        const card = createCard(image);
        container.appendChild(card);
    });
}

loadGame();



