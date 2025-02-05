let num1 = 5;
let num2 = 5;

document.querySelector(".first-span").textContent = num1
document.querySelector(".second-span").textContent = num2
const addition = document.querySelector(".add")
const subtraction = document.querySelector(".minus")
const divide = document.querySelector(".division")
const multiplication = document.querySelector(".times")
const paragraph = document.querySelector(".par")

// console.log(num1)
// console.log(num2)
// console.log(addition)
// console.log(subtraction)
// console.log(divide)
// console.log(multiplication)
// console.log(paragraph)


// This Function calls for addition

// const sum = (() => {
//     let sum = num1 + num2
//     paragraph.textContent += sum
//     console.log(sum)
// })

addition.addEventListener("click", (e) => {
    num1 + num2
    let store = num1 + num2
    paragraph.textContent = "Sum: " + store
    console.log(num1 + num2)
})

// function sum() {
//     let sumUp = num1 + num2
//     paragraph.textContent += sumUp
//     console.log(sumUp)
// }

// This function calls for minus

subtraction.addEventListener("click", (e) => {
    num1 - num2
    let store = num1 - num2
    paragraph.textContent ="Subtract: " + store
    console.log(num1 - num2)
})

// This function calls for division

divide.addEventListener("click", (e) => {
    if (num1 >= num2) {
        let store = num1 / num2
        paragraph.textContent = "Division: " + store
    }
    
    console.log(num1 / num2)
})


// This function calls for multiplication
multiplication.addEventListener("click", (e) => {
    num1 * num2
    let store = num1 * num2
    paragraph.textContent = "Multiplication: " + store
    console.log(num1 * num2)
})