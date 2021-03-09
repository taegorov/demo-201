'use strict'

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

let deadliftAmount = prompt('Is Tim\'s heaviest deadlift 515 pounds?').toLowerCase();
if (deadliftAmount === 'yes') {
    alert('That is correct!');
} else if (deadliftAmount === 'no') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but that\'s fine');
}
// console.log('answer to "is deadlift 515?" ' + deadliftAmount);

let whichCountry = prompt('Was Tim born in the USA?').toLowerCase();
if (whichCountry === 'no') {
    alert('That is correct!');
} else if (whichCountry === 'yes') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but whatever I guess');
}
// console.log('answer to "born in USA?" ' + whichCountry);

let whichUniversity = prompt('Did Tim go to University of Washington?').toLowerCase();
if (whichUniversity === 'no') {
    alert('That is correct!');
} else if (whichUniversity === 'yes') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but I\'m not your boss');
}
// console.log('answer to "go to UW?" ' + whichUniversity);

let whichIndustry = prompt('Did Tim come from the sales industry?').toLowerCase();
if (whichIndustry === 'yes') {
    alert('That is correct!');
} else if (whichIndustry === 'no') {
    alert('Wrong!');
} else {
    alert('That\'s not yes or no, but do your thing');
}
// console.log('answer to "come from sales?" ' + whichIndustry);

let whichVice = prompt('Will Tim have gone 1 year without alcohol in July?').toLowerCase();
if (whichVice === 'no') {
    alert('That is correct!');
} else if (whichVice === 'yes') {
    alert('Wrong!');
} else {
    alert('You were supposed to enter yes or no');
}
// console.log('answer to "year without alcohol?" ' + whichVice);