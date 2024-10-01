document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            name: 'android',
            img: 'images/android.png'
        },

        {
            name: 'chrome',
            img: 'images/chrome.png'
        },

        {
            name: 'git',
            img: 'images/git.png'
        },

        {
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },

        {
            name: 'android',
            img: 'images/android.png'
        },

        {
            name: 'linux',
            img: 'images/linux.png'
        },

        {
            name: 'github',
            img: 'images/github.png'
        },

        //repetição das cartas
        {
            name: 'android',
            img: 'images/android.png'
        },

        {
            name: 'chrome',
            img: 'images/chrome.png'
        },

        {
            name: 'git',
            img: 'images/git.png'
        },

        {
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },

        {
            name: 'android',
            img: 'images/android.png'
        },

        {
            name: 'linux',
            img: 'images/linux.png'
        },

        {
            name: 'github',
            img: 'images/github.png'
        },

    ]

    //embaralhar cartas
    cards.sort(() => 0.5 - Math.random());
    // carregar elementos html no script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = []; // cartas escolhidas
    let cardsChosenId = []; // ids das cartas escolhidas
    let cardsWon = []; // cartas combinadas 

     // criar um quadro de cartas
     function createBoard() {
        for(let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src','images/board.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
          
        }
    }

    // virar carta
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
    }
}
createBoard();

});