const cardBoard = document.querySelector('#cardBoard');

const imgs = [
    'barco.gif',
    'bob.gif',
    'explod.gif',
    'fiesta.gif',
    'metal.gif',
    'triplo.gif',
    'uni.gif',
];

let cardHTML = '';

imgs.forEach(img => {
    cardHTML += `
      <div class="memory-card" data-card="${img}">
        <img class="front-face" src="img/${img}.gif"/> 
        <img class="back-face" src="img/back.png"/>
        </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
function flipCard() {
    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;

        return false;
    }
    secondCard = this;
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? disabledCards() : true;
}

function disabledCards() {

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);

}

cards.forEach(card => card.addEventListener('click', flipCard))
