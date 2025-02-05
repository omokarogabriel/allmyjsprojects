const head = document.querySelector(".header")
const firstpar = document.querySelector(".first-par")
const card1 = document.querySelector(".first-card")
const card2 = document.querySelector(".second-card")
const card3 = document.querySelector(".third-card")
const sums = document.querySelector(".sum")
const button = document.querySelector(".start-btn")
// const reset = document.querySelector(".reset-btn")
const out  = document.querySelector(".output")

let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1
let num3 = Math.floor(Math.random() * 10) + 1
let sum;
// let message = ""



// console.log(num1, num2, num3)

button.addEventListener("click", (e) => {
    // if the sum of all nums is equal to 21, it means blackjack or winner
    card1.textContent += num1;
    card2.textContent += num2;
    card3.textContent += num3;


    sum = num1 + num2 + num3;
    if (sum < 21) {
        out.textContent += "Do you want to draw a card?"
    }else if (sum === 21) {
        out.textContent += "Yoo! You just got BlackJack, Hurray!"
    }else {
        out.textContent += "You are out of the game"
    }
    // console.log(message)

    sums.textContent += sum
    
})

// reset.addEventListener("click", (e) => {
//     sum = 0
//     card2.textContent += 0;
//     card1.textContent += 0;
//     card3.textContent += 0;

//    if (sum === 0 && card1.textContent === 0 && card2.textContent === 0 && card3.textContent === 0) {
//     return
//    }
// })