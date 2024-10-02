const card = document.querySelector(".container");

const personagensCards = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
]


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


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length > 0) {
        clearInterval(this.loop);
        alert(`Parabéns, você ganhou! Tempo: ${timer.innerHTML} segundos`);
    }

}

const checkCards = () => {
    const firstPersonagem = firstCard.getAttribute('data-personagem');
    const secondPersonagem = secondCard.getAttribute('data-personagem');

    if (firstPersonagem === secondPersonagem) {
        firstCard.classList.add('disabled-card');
        secondCard.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
    },500);
}
}

const revealCard = ( {target } ) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (personagem) => {

    const card = createElement("div", "card");
    const front = createElement("div", "front");
    const back = createElement("div", "back");
    const image = createElement("div", "image");

    front.style.backgroundImage = `url('../images/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-personagem", personagem);
    return card;
}

const loadGame = () => {

    const duplicatePersonagensCards = [ ...personagensCards, ...personagensCards];

    const shuffledCards = duplicatePersonagensCards.sort(() => Math.random() - 0.5);
   
    Math.random();
    shuffledArray.forEach((personagem) => {

        const card = createCard(personagem);
        container.appendChild(card);
    });
}


window.onload = () => {
    loadGame();
}