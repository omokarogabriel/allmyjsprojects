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


// let message = ""



// function to render a game
const renderGame = ((e) => {
    //  if the sum of all nums is equal to 21, it means blackjack or winner
    // allCards.push()
    myCards.textContent += " " + allCards;
    
    
    sum = card1 + card2;
    console.log(sum)
    
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

    sums.textContent += " " + sum
    
    myCards.textContent;
    console.log(allCards)
})


// function to render a new game again
const newGameRender = ((e) => {
    allCards.push(card3)
    myCards.textContent += "," + card3;
    

    sum +=card3;
    console.log(sum)
    
    if (sum < 21) {
        firstpar.textContent = " Kindly Draw a Card?"
        firstpar.style.color = "black";
    }else if (sum === 21) {
        hasBlackJack = true;
        firstpar.textContent = "Yoo! You just got BlackJack, Hurray!"
        firstpar.style.color = "gold";
        
        if (grandParent) {
            grandParent.style.color = "green"
        }
        
    }else {
        firstpar.textContent = "You are out of the game!!"
        firstpar.style.color = "red";
        isAlive = false;
    }

    sums.textContent = "Sum: " + sum

    console.log(allCards)
})


// function to generate a continous random numbers
const generate = ((e) => {
    if (sum !== 21 || sum < 21) {
        let random = Math.floor(Math.random() * 11) + 1;
        allCards.push(random);
        // myCards.textContent += "," + random;
        sums.textContent = "Sum:" + sum;
    }
})



button.addEventListener("click", (e) => {
    renderGame();

    newCard.addEventListener("click", (e) => {
        newGameRender()
        generate()
    })
})


// newCard.addEventListener("click", (e) => {
//     newGameRender()
//     // generate()
// })


let myArray = ["apple", "banana", "cherry"]  