https://github.com/taegorov/demo-201.git

'use strict'


let totalCorrectAnswers = 0;

function getUserName(){
    let userName = prompt('Please enter your name');
    if (userName == 'Tim'){
        alert ('I knew it was you hehe');
        document.write ('<h2 id="userNameTim">' + 'Welcome, You Beautiful Man' + '</h2>');
    } else {
        alert ('Thanks for answering all those questions, ' + userName + '!');
        document.write ('<h2 id="otherNames">' + 'Welcome to My Humble Website, ' + userName + '</h2>');
    }
    return userName;
}

function deadLift(){
let deadliftAmount = prompt('Is Tim\'s heaviest deadlift 515 pounds?').toLowerCase();
if (deadliftAmount === 'yes') {
    alert('That is correct!');
    totalCorrectAnswers += 1;
} else if (deadliftAmount === 'no') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but that\'s fine');
}
}


deadLift();

function motherland(){
let whichCountry = prompt('Was Tim born in the USA?').toLowerCase();
if (whichCountry === 'no') {
    alert('That is correct!');
    totalCorrectAnswers += 1;
} else if (whichCountry === 'yes') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but whatever I guess');
}
}

motherland();


function goCougs(){
let whichUniversity = prompt('Did Tim go to University of Washington?').toLowerCase();
if (whichUniversity === 'no') {
    alert('That is correct!');
    totalCorrectAnswers += 1;
} else if (whichUniversity === 'yes') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but I\'m not your boss');
}
}

goCougs();

function heIsASalesMan(){
let whichIndustry = prompt('Did Tim come from the sales industry?').toLowerCase();
if (whichIndustry === 'yes') {
    alert('That is correct!');
    totalCorrectAnswers += 1;
} else if (whichIndustry === 'no') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but do your thing');
}
}

heIsASalesMan();

function tricksy(){
let whichVice = prompt('Will Tim have gone 1 year without alcohol in July?').toLowerCase();
if (whichVice === 'no') {
    alert('That is correct!');
    totalCorrectAnswers += 1;
} else if (whichVice === 'yes') {
    alert('Wrong!');
} else {
    alert('You were supposed to enter yes or no');
}
}

tricksy();

//Random number generator provided by Roger Huba from Code 102, who referenced w3 Schools

function randomGuess(){
let correctAnswer = Math.floor(Math.random() * 10) + 1;
let guesses = 4;

for (let i = 0; i < guesses; i+=1) {
    let userAnswer = prompt('Please Enter a Number from 1 to 10');
    while (userAnswer < 0 || userAnswer > 10) {
        userAnswer = prompt('I said between 1 to 10, not something ridiculous');
    }
    if (userAnswer == correctAnswer) {
        alert('That\'s correct!');
        totalCorrectAnswers += 1;
        break;
    } else if(i === 2 && userAnswer !== correctAnswer){
        alert('Wrong! One more guess!');
    } else if(userAnswer > correctAnswer){
        alert('Too high, guess again');
    } else if(userAnswer < correctAnswer){
        alert('Too low, guess again');
    } 
}
 alert('The answer was ' + correctAnswer);
}

randomGuess();

function arrayGuess(){
 let correctGuess = [2, 3, 4];
 console.log(correctGuess);
 correctGuess.length;

 let guessesTwo = 6;

 for(let i = 0; i < guessesTwo; i+=1) {
    if(i === 5) {
        alert('Last try!');
    }
    let userGuess = parseInt (prompt('Guess between 1-10 again, this time there\'s more than one right answer'));
    console.log(typeof userGuess);
    while(userGuess < 1 || userGuess > 10) {
        userGuess = parseInt (prompt ('Guess between 1 and 10!'));
    }
let flag = false;
    for(let k = 0; k < correctGuess.length; k+=1) {
        console.log(correctGuess[k], k);
        if(userGuess === correctGuess[k]) {
            alert('You are correct!');
            totalCorrectAnswers += 1;
            i = 7;
            break;
        } else if(userGuess !== correctGuess[k] && k === correctGuess.length - 1 ){
            alert('Incorrect!');
            
        }
    }
       
    if(i === 5 && flag === false){
       alert('The correct numbers were ' + correctGuess);
 }
 }
}

arrayGuess();

 alert('You answered ' + totalCorrectAnswers + ' out of 7 questions correctly!')

