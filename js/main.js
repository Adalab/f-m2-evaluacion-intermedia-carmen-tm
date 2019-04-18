"use strict";

console.log(">>> ready to play!");

//The app should create a random number between 1-100, and the player try to guess it. The app gives tips to guess it (is smaller, is bigger...) and track the number of trials, till the player "wins" (match the number).

//Create basic html structure
//TODO: give propper styles>>main.css 

//Configure the form-button to get the number and show it in the console.
//Get button element
const btnTryEl = document.querySelector(".btn--try");
//Get the input element on the form
const inputEl = document.querySelector("#testNumber");
//Get the counter element
const counterEl = document.querySelector(".game__counter");
//Get the game description element to show tips
const gameTipsEl = document.querySelector(".game__instructions");

// Create an accumulator of the user's trials
let acc = 0;

//Generate random number (from Codepen example):
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
//Save my random number in a constant for comparison:
const randomNumber = getRandomNumber(100);
console.log(`The random number is... ${randomNumber}.`);

//Function that accepts a string (a message) as parameter and paints it ito gameTipsEl:
function paintGameTips(a) {
    console.log(a);
    return gameTipsEl.innerHTML = a;
}

//If the input is empty will return a true on the isNaN test, and will call this function
function emptyValue(){
    const message = "No seas tímid@, atrévete a jugar y escribe un número!";
    return paintGameTips(message);
}

//If the input has a value will return false on the isNaN test, and will call this function
function gameTips(x){
    if(x===randomNumber) {
        const message = "HAS GANADO CAMPEONAA!!";
        return paintGameTips(message);

    } else if((x>randomNumber) && (x<=100)) {
        const message = "Demasiado alto...";
        return paintGameTips(message);

    } else if ((x<randomNumber) && (x>0)){
        const message = "Demasiado bajo..."
        return paintGameTips(message);

    } else if((x>100) || (x<0)) {
        const message = "Demasiado lejos...! Sólo números del 1 al 100!";
        return paintGameTips(message);
    }
}

//What about if we use the isNaN() method to test the input?
function evaluateNumber3(x) {
    //Evaluate if the input is truthy (the user wrote a number) or falsy (for example click on the button with an empty value). If there is number, invoke the function for giving tips. If not, display a message encouragig to play.
    // console.log(isNaN(x));
    x ? gameTips(x) : emptyValue();
}

//Count the number of trials through a function
function countUserTrials() {
    //equals to acc += 1
    acc = acc + 1;
    counterEl.innerHTML = acc;
}

//Add handler function to the button
function handlerGame(event) {
    //Need to prevent the default behaviour through the method:
    event.preventDefault();

    //Save user number each time 
    const userTrial = (inputEl.value);
    //Converted to number (parsing)
    const userTrialParsed = parseInt(userTrial);
    // console.log(userTrial, userTrialParsed);

    //Call the function that evaluates the number and show results 
    // evaluateNumber2(userTrial,userTrialParsed);
    evaluateNumber3(userTrialParsed);

    //Call the function that sets the accumulator according to the user's trials; 
    countUserTrials();
}

//Add a listener on the button
btnTryEl.addEventListener("click", handlerGame);