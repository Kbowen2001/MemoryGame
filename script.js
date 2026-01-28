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
            console.log(firstCard.dataset.framework);
            console.log(secondCard.dataset.framework);
        }
}

cards.forEach(card => card.addEventListener('click', flipCard));