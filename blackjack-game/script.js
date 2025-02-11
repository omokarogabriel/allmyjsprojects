const grandParent = document.querySelector("body")
const head = document.querySelector(".header")
const firstpar = document.querySelector(".first-par")
const myCards = document.querySelector(".cards")


let sums = document.querySelector(".sum")
const button = document.querySelector(".start-btn")
const newCard = document.querySelector(".new-card-btn")

const out  = document.querySelector(".output")




let card1 = getRandomNumbers();
let card2 = getRandomNumbers();
let card3 = getRandomNumbers();


function getRandomNumbers() {
    return Math.floor(Math.random() * 13) + 1;
}




let sum;
let hasBlackJack = false;
let isAlive = true;
let allCards = [card1, card2];




// function to render a game
const renderGame = ((e) => {
    //  if the sum of all nums is equal to 21, it means blackjack or winner
    
    sum = card1 + card2;
    
    if (sum < 21) {
        firstpar.textContent = " Kindly Draw a Card?"
        firstpar.style.color = "black";
    }else if (sum === 21) {
        hasBlackJack = true;
        firstpar.textContent = "Yoo! You just got BlackJack, Hurray!"
        firstpar.style.color = "gold";

        if (grandParent) {
            return grandParent.style.color = "green"
        }
    }else {
        firstpar.textContent = "You are out of the game!"
        firstpar.style.color = "red";
        isAlive = false;
    }
    
    myCards.textContent = "Cards:  " + allCards;
    sums.textContent += " " + sum
    
    console.log("render game all cards " + allCards)
    console.log("render game sum " + sum)
})


// function to render a new game again
const newGameRender = ((e) => {
    
    card3 = getRandomNumbers();
    allCards.push(card3);
    console.log("there are " + allCards.length + " numbers in the array")
    sum += card3
    console.log("new game render " + sum)
    // sums.textContent += "Sum: " + card3;
    
    if (sum < 21) {
        firstpar.textContent = " Kindly Draw a Card?"
        firstpar.style.color = "black";
    }else if (sum === 21) {
        hasBlackJack = true;
        firstpar.textContent = "Yoo! You just got BlackJack, Hurray!!"
        firstpar.style.color = "gold";
        
        if (grandParent) {
            grandParent.style.color = "green"
        }
        
    }else {
        firstpar.textContent = "You are out of the game!!"
        firstpar.style.color = "red";
        isAlive = false;
    }

    myCards.textContent += "," + card3;

    sums.textContent = "Sum: " + sum;
    // renderGame();

    console.log(allCards);
})





button.addEventListener("click", (e) => {
    renderGame();

    newCard.addEventListener("click", (e) => {
        newGameRender()
        // generate()
    })
})




