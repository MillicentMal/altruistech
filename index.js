import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://altruistech-eec9c-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const users = ref(database, "users")
const contactForm = ref(database, "contactForm")
const surveyForm = ref(database, "surveyForm")
const signUpForm = ref(database, "signUpForm")



// Contact Form Data
const addButtonEl = document.getElementById("contact-submit")
const name = document.getElementById("contact-name")
const email = document.getElementById("contact-email")
const message = document.getElementById("contact-message")

addButtonEl.addEventListener("click", function() {
    let inputValue = {
        name: name.value, 
        email: email.value, 
        message: message.value, 
    }
    
    push(contactForm, inputValue)
    form.reset();
    console.log(`${inputValue} added to database`)
})


// Survey Form Data
const surveyButton = document.getElementById("survey-submit")
const surveyName = document.getElementById("survey-name")
const surveyEmail = document.getElementById("survey-email")
const surveyMessage = document.getElementById("survey-message")

surveyButton.addEventListener("click", function() {
    let inputValue = {
        name: surveyName.value, 
        email: surveyEmail.value, 
        message: surveyMessage.value, 
    }
    
    push(surveyForm, inputValue)
    form.reset();
    console.log(`${inputValue} added to database`)
})


// SignUp Form Data
const signUpButton = document.getElementById("waitlist-submit")
const signUpName = document.getElementById("waitlist-name")
const signUpEmail = document.getElementById("waitlist-email")
const signUpMessage = document.getElementById("waitlist-message")

signUpButton.addEventListener("click", function() {
    let inputValue = {
        name: signUpName.value, 
        email: signUpEmail.value, 
        message: signUpMessage.value, 
    }
    
    push(signUpForm, inputValue)
    form.reset();
    console.log(`${inputValue} added to database`)
})