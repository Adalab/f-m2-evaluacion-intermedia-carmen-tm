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

console.log("> " + getRandomNumber(100));

//Configure the form-button to get the number and show it in the console.
//Get button element
const btnTryEl = document.querySelector(".btn--try");
//Get the input element on the form
const inputEl = document.querySelector("#testNumber");

// Check if I have the right elements
// console.log(btnTryEl, inputEl);

//Add handler function to the button
function handlerGame(event) {
    //Need to prevent the default behaviour through the method:
    event.preventDefault();
    console.log("click! working");
}

//Add a listener on the button
btnTryEl.addEventListener("click", handlerGame);