const grandParent = document.querySelector("body")
const head = document.querySelector(".header")
const firstpar = document.querySelector(".first-par")
const myCards = document.querySelector(".cards")

// const card2 = document.querySelector(".second-card")
// const card3 = document.querySelector(".third-card")

let sums = document.querySelector(".sum")
const button = document.querySelector(".start-btn")
// let newCard = document.querySelector(".card-new-btn")
const out  = document.querySelector(".output")

let card1 = Math.floor(Math.random() * 11) + 1
let card2 = Math.floor(Math.random() * 11) + 1
let card3 = Math.floor(Math.random() * 11) + 1
// console.log(card3)
let sum;
let hasBlackJack = false;
let isAlive = true;
let allCards = [card1, card2];


// let message = ""



// console.log(num1, num2, num3)

button.addEventListener("click", (e) => {
    // if the sum of all nums is equal to 21, it means blackjack or winner
    // card1.textContent += " " +  num1;
    // card2.textContent += " " +  num2;
    // card3.textContent += " " +  num3;

    // allCards.push()
    myCards.textContent += " " + allCards;


    sum = card1 + card2;
    console.log(sum)
    
    if (sum < 21) {
        firstpar.textContent = " Kindly Draw a Card?"
        // Event Listener to get a new card
       document.querySelector(".new-card-btn").addEventListener('click', (e) => {
           myCards.textContent += "," + card3;
           sums.textContent = "Sum: " + ""
           sum += card3;
           sums.textContent += " " + sum
           console.log(sum)
           if (!sum <= 21) {
            firstpar.textContent = "Draw a Card?"
            
           }
        })
    }else if (sum === 21) {
        hasBlackJack = true;
        firstpar.textContent = "Yoo! You just got BlackJack, Hurray!"
    }else {
        firstpar.textContent = "You are out of the game"
        isAlive = false;
    }
    


    
    sums.textContent += " " + sum
    

    myCards.textContent;
    
})

// document.querySelector(".new-card-btn").addEventListener('click', (e) => {
    
//     allCards.push(card3);
//     sum += card3
//    })