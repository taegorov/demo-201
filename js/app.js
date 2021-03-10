'use strict'

// function getUserName(){
//     let userName = prompt('Please enter your name');
//     if (userName == 'Tim'){
//         alert ('I knew it was you hehe');
//         document.write ('<h2 id="userNameTim">' + 'Welcome, You Beautiful Man' + '</h2>');
//     } else {
//         alert ('Thanks for answering all those questions, ' + userName + '!');
//         document.write ('<h2 id="otherNames">' + 'Welcome to My Humble Website, ' + userName + '</h2>');
//     }
//     return userName;
// }

// let deadliftAmount = prompt('Is Tim\'s heaviest deadlift 515 pounds?').toLowerCase();
// if (deadliftAmount === 'yes') {
//     alert('That is correct!');
// } else if (deadliftAmount === 'no') {
//     alert('Wrong!');
// } else {
//     alert('That\'s not yes or no, but that\'s fine');
// }
// // console.log('answer to "is deadlift 515?" ' + deadliftAmount);

// let whichCountry = prompt('Was Tim born in the USA?').toLowerCase();
// if (whichCountry === 'no') {
//     alert('That is correct!');
// } else if (whichCountry === 'yes') {
//     alert('Wrong!');
// } else {
//     alert('That\'s not yes or no, but whatever I guess');
// }
// // console.log('answer to "born in USA?" ' + whichCountry);

// let whichUniversity = prompt('Did Tim go to University of Washington?').toLowerCase();
// if (whichUniversity === 'no') {
//     alert('That is correct!');
// } else if (whichUniversity === 'yes') {
//     alert('Wrong!');
// } else {
//     alert('That\'s not yes or no, but I\'m not your boss');
// }
// // console.log('answer to "go to UW?" ' + whichUniversity);

// let whichIndustry = prompt('Did Tim come from the sales industry?').toLowerCase();
// if (whichIndustry === 'yes') {
//     alert('That is correct!');
// } else if (whichIndustry === 'no') {
//     alert('Wrong!');
// } else {
//     alert('That\'s not yes or no, but do your thing');
// }
// // console.log('answer to "come from sales?" ' + whichIndustry);

// let whichVice = prompt('Will Tim have gone 1 year without alcohol in July?').toLowerCase();
// if (whichVice === 'no') {
//     alert('That is correct!');
// } else if (whichVice === 'yes') {
//     alert('Wrong!');
// } else {
//     alert('You were supposed to enter yes or no');
// }
// // console.log('answer to "year without alcohol?" ' + whichVice);

// let answer = 4;
// let guesses = 5;
// for (let i = 0; i < guesses; i+=1){
//     let userAnswer = prompt ('Guess a number betweeen 1 and 10');
//     if(userAnswer === answer) {
//         alert('That\'s correct!');
//         break;
//     } else if (userAnswer < 4) {
//         alert('Too low, try again!');
//     } else if (userAnswer > 4) {
//         alert('Too high, try again!');
//     } else {
//         alert('Must enter a number!');
//     }
// }

//Random number generator provided by Roger Huba from Code 102, who referenced w3 Schools
let correctAnswer = Math.floor(Math.random() * 10) + 1;
let guesses = 4;

for (let i = 0; i < guesses; i+=1) {
    let userAnswer = prompt('Please Enter a Number from 1 to 10');
    while (userAnswer < 0 || userAnswer > 10) {
        userAnswer = prompt('I said between 1 to 10, not something ridiculous');
    }
    if (userAnswer == correctAnswer) {
        alert('That\'s correct!');
        break;
    } else if(i === 3 && userAnswer !== correctAnswer){
        alert('One more guess!');
    } else if(userAnswer > correctAnswer){
        alert('Too high, guess again');
    } else if(userAnswer < correctAnswer){
        alert('Too low, guess again');
    } 
}
 alert('The answer was ' + correctAnswer);


let correctAnswerMulti = [2, 3, 4];
let guesses = 7;

for (let i = 0; i < guesses; i+=1) {
    let userAnswerMulti = prompt('Please Enter a Number from 1 to 10');
    while (userAnswer < 0 || userAnswer > 10) {
        userAnswer = prompt('I said between 1 to 10, not something ridiculous');
    }
    if (userAnswer == correctAnswerMulti) {
        alert('That\'s correct!');
        break;
    } else if(i === 4 && userAnswer !== correctAnswerMulti){
        alert('One more guess!');
    } else if(userAnswer > correctAnswerMulti){
        alert('Too high, guess again');
    } else if(userAnswer < correctAnswerMulti){
        alert('Too low, guess again');
    } 
}
 alert('The answer was ' + correctAnswerMulti);
