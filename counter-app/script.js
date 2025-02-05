// const a = document.getElementsByTagName("body")
const countEl = document.getElementById("countNumber")
const riseUp = document.querySelector(".increments")
const reduce = document.querySelector(".decrements")
const saves = document.querySelector(".save")
const resets = document.querySelector(".reset")
const p = document.querySelector(".save-count")
const fReset = document.querySelector(".full-reset")


let count = 0
let store = []
let countAndDash = count + " -"

// function increment() {
//    countEl.innerHTML = count;
//    count++
//    console.log(count)
// }


// incremet function

// const increment = (() => {
//     countEl.innerText = count;
//     count++
//     console.log(count)
// })

riseUp.addEventListener("click", (e) => {
    count++;
    countEl.textContent = count;
    console.log(count);
})

// const decrement = (() => {
//     countEl.innerText = count;
//     if (count == 0) {
//         return 
//     }
//     count--
//     console.log(count)
// })

// decrement function

reduce.addEventListener("click", (e) => {
    if (count == 0) {
        return
    }
    count--;
    countEl.textContent = count;
    console.log(count)
})

// const save = (() => {
//     const store = [];
//     let num = countEl.innerText;
//     store.push(num)
//     p.innerText = store
//     console.log(store) 
// })

// save function

saves.addEventListener("click", (e) => {
    
    countAndDash = count + " -"
    store.push(countAndDash)
    p.textContent += countAndDash;

    countEl.textContent = 0;
    count = countEl.textContent;

    
    
})

// const reset = (() => {
//     count = 0
//     countEl.innerText = count
//     console.log(count)
// })


// reset function

resets.addEventListener("click", (e) => {
    count = 0;
    // countEl.textContent = count;
    countAndDash = 0
    p.textContent
    
    console.log(count)
})

// full reset function

// fReset.addEventListener("click", (e) => {
//     count = 0;
//     countEl.textContent = count;

//     p.textContent
    
// })
 