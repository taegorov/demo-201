// SWITCH
let userAnswer = prompt('Is my favorite color red or robin\'s egg blue?')

switch (userAnswer.toLowerCase()) {
    case ('red'):
        alert('You are correct!');
        break;
    case ('robin\'s egg blue'):
        alert('What a strange guess, you\'re incorrect');
        break;
    default:
        alert('Not a valid answer');
}

let userResponse = prompt('wanna play?');

// WHILE LOOP
userResponse = userResponse.toLowerCase();

while(userResponse!== 'y') {
    userResponse = prompt('I really need a y');
}
console.log('finally got a y');

//FOR LOOP
for(let counter = 1; counter <= 1; counter += 1) {
    console.log('Jumping Jack', counter);
}
// for the above you can substitute "counter" for "i"