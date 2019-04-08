"use strict";

console.log(">>> ready");

//The app should create a random number between 1-100, and the player try to guess it. The app gives tips to guess it (is smaller, is bigger...) and track the number of trials, till the player "wins" (match the number).


//Create basic html structure
//TODO: give propper styles>>main.css 

//Generate random number (from Codepen example):
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(`The random number is... ${randomNumber}.`);

//Configure the form-button to get the number and show it in the console.
//Get button element
const btnTryEl = document.querySelector(".btn--try");
//Get the input element on the form
const inputEl = document.querySelector("#testNumber");
//Get the counter element
const counterEl = document.querySelector(".game__counter")
//Get the game description element to show tips
const gameTipsEl = document.querySelector(".game__instructions");

// Create an accumulater of the user trials
let acc = 0;

// Check if I have the right elements
// console.log(btnTryEl, inputEl, counterEl);

// Evaluate if the number of the user (userTrial) is bigger ("demasiado alto"), smaller ("demasiado bajo") or is the one ("HAS GANADO CAMPEONAA!!");

function evaluateNumber(x) {
    const message = "";
    if(x===randomNumber) {
        const message = "HAS GANADO CAMPEONAA!!";
        console.log(message);
        return gameTipsEl.innerHTML = message;
    } else if(x>randomNumber) {
        const message = "Demasiado alto";
        console.log(message);
        return gameTipsEl.innerHTML = message;
    } else {
        const message = "Demasiado bajo"
        console.log(message);
        return gameTipsEl.innerHTML = message;
    }
};

//Add handler function to the button
function handlerGame(event) {
    //Need to prevent the default behaviour through the method:
    event.preventDefault();
    // console.log("his is working :)");

    //Show the input value on the console (converted to number through parsing)
    const userTrial = parseInt(inputEl.value);
    console.log(userTrial);

    //Call the function that evaluates the number and show results 
    evaluateNumber(userTrial);

    //Now count the number of trials through a function
    function countUserTrials() {
        acc = acc + parseInt(1);
        counterEl.innerHTML = acc;
    }
    countUserTrials();
}

//Add a listener on the button
btnTryEl.addEventListener("click", handlerGame);