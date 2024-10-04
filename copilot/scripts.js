(function() {
    const images = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
    let numCards;
    
    do {
      numCards = parseInt(prompt('Quantas cartas quer jogar? (4 a 14, apenas números pares)'));
    } while (isNaN(numCards) || numCards % 2 !== 0 || numCards < 4 || numCards > 14);
  
    const selectedImages = [];
    while (selectedImages.length < numCards / 2) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      if (!selectedImages.includes(randomImage)) {
        selectedImages.push(randomImage);
      }
    }
    
    const gameImages = [...selectedImages, ...selectedImages].sort(() => Math.random() - 0.5);
  
    const container = document.createElement('div');
    container.id = 'game-container';
    document.body.appendChild(container);
  
    gameImages.forEach(image => {
      const card = document.createElement('div');
      card.className = 'card';
      
      const cardInner = document.createElement('div');
      cardInner.className = 'card-inner';
      
      const cardFront = document.createElement('div');
      cardFront.className = 'card-front';
      cardFront.innerHTML = `<img src="${image}.gif" alt="${image}">`;
      
      const cardBack = document.createElement('div');
      cardBack.className = 'card-back';
      cardBack.innerHTML = `<img src="back.png" alt="Fechado">`;
      
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);
      container.appendChild(card);
    });
  
    let firstCard, secondCard;
    let numMoves = 0;
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function() {
        if (this === firstCard) return;
        
        this.classList.add('flipped');
        numMoves++;
  
        if (!firstCard) {
          firstCard = this;
          return;
        }
  
        secondCard = this;
        if (firstCard.querySelector('.card-front img').src === secondCard.querySelector('.card-front img').src) {
          firstCard = null;
          secondCard = null;
          if (document.querySelectorAll('.card:not(.flipped)').length === 0) {
            setTimeout(() => alert(`Você ganhou em ${numMoves} jogadas!`), 500);
          }
        } else {
          setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
          }, 1000);
        }
      });
    });
  })();
  