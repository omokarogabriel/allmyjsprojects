const grandParent = document.querySelector("body")
const head = document.querySelector(".header")
const firstpar = document.querySelector(".first-par")
const myCards = document.querySelector(".cards")


let sums = document.querySelector(".sum")
const button = document.querySelector(".start-btn")
const newCard = document.querySelector(".new-card-btn")

const activePlayer  = document.querySelector(".output-name")


let player = {
    name: "Gabriel",
    chips: 145
}
// console.log(`${player.name} ${player.chips} `)

activePlayer.textContent = player.name + ": $" + player.chips;

function getRandomNumbers() {
    return Math.floor(Math.random() * 13) + 1;
}




let sum;
let hasBlackJack = false;
let isAlive = false;
let allCards = [];
// console.log(allCards);






// function to render a game
const renderGame = ((e) => {
    //  if the sum of all nums is equal to 21, it means blackjack or winner
    let card1 = getRandomNumbers();
    let card2 = getRandomNumbers();

    allCards = [card1, card2];
    
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
    console.log(allCards)
})




// // function to render a new game again

const newGameRender = ((e) => {
   if (!(sum === 21 || sum > 21)) {
    let card3;
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

    console.log(allCards);
   }
})



button.addEventListener("click", (e) => {
    renderGame();

    newCard.addEventListener("click", (e) => {
        newGameRender()
        // generate()
    })
    
})






