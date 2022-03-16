let firstCard = 3;
let secondCard = 7;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = ""

const startGame = document.getElementById('start-game');
const messageEl = document.getElementById('message-el');
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const newCard = document.getElementById('new-card');


startGame.addEventListener('click', function(){
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  sumEl.textContent = `Sum: ${sum}` ;

  if (sum <= 20) {
      message = "Do you want to draw a new card? 🙂";
  }else if (sum === 21) {
      message = "Wooohoo You've got Blackjack 🥳";
      hasBlackJack = true
  }else {
    message = "You're out of the game 😭";
    isAlive = false
  }
  messageEl.textContent = message;
})


newCard.addEventListener('click', function(){
  console.log('Drawing a new card from the deck!');
})
