const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
    //first click
        hasFlippedCard = true;
        firstCard = this; }  
    //second click
        else{
            hasFlippedCard = false;
            secondCard = this;

            //cards match?
            
        }
}

cards.forEach(card => card.addEventListener('click', flipCard));