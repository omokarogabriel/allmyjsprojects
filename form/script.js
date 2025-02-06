// document.body.addEventListener("keydown", (e) => {
//     console.log("i just pressed " + e.key) 
// })

// document.body.addEventListener("keydown", (e) => {
    
//     if (e.altKey && e.key === "s") {
//         alert("i pressed the alt key and s")
//     }
// })

// const myform = document.querySelector("#form")
// const fname = document.querySelector("#firstname")
// fname.focus()
// const lname = document.querySelector("#lastname")
// const mail = document.querySelector("#email")
// const pword = document.querySelector("#password")
// const cpword = document.querySelector("#confirm-password")
// const sbutton = document.querySelector("#submit-btn")
const errcpword = document.querySelector(".error-cpword")
// console.log(lname)
// console.log(errcpword)

// fname.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// lname.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// mail.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// pword.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// cpword.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })


// let message;

document.querySelector("#form").addEventListener('submit', (e) => {
    e.preventDefault()

    
    

    let fname = document.querySelector("#firstname").value
    let lname = document.querySelector("#lastname").value
    let email = document.querySelector("#email").value
    let pword = document.querySelector("#password").value
    let cpword = document.querySelector("#confirm-password").value
    let errcpword = document.querySelector(".error-cpword")


    
    
    
    // VALIDATE THE INPUT FIELDS
    
    if (fname === "" || lname === "" || email === "" || pword === "" || cpword === "") {
        alert("All fields are required")
        return
    }
    
    
    // VALIDATE THE EMAIL
    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ is a regular expression that matches an email address.
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert("Invalid email address")
        return
    }

    // VALIDATE THE PASSWORD
    
    // if (pword.length < 8 ||!/[a-z]/.test(pword) ||!/[A-Z]/.test(pword) ||!/\d/.test(pword) ||!/[@$!%*?&]/.test(pword)) {
        //     alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    //     return
    // }

    // VALIDATE THE PASSWORD AND CONFIRM PASSWORD

    if (pword !== cpword) {
        errcpword.textContent = "Passwords do not match";
        return
    }

    let phoneNumber = "2348092461711"
    
    
    let whatsappMessage = `FirstName: ${fname}
                            LastName: ${lname}
                            Email: ${email}
                            Phone Number: ${phoneNumber}
                            Password: ${pword}
    `
    
    // Encode the message to avoid special characters in the URL
    let encodeMessage = encodeURIComponent(whatsappMessage);
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`
    
    window.open(whatsappURL, "_blank")


    // SUBMIT THE FORM
    // alert("Form submitted successfully!")
    console.log(fname)
    console.log(lname)
    console.log(email)
    console.log(pword)
    // console.log(cpword)
    
    console.log("Form submitted successfully!")
    document.querySelector("#form").reset()
    document.querySelector("#firstname").focus()

    
})




