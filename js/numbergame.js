// An array is a collection of items
// any length > 0 and can have mixed types
// though often a single type of data is used

let nums = [5,1,8,6,2,7];

// console.log(nums[2]);

// // log out each number in order
// for(let i=0; i < nums.length; i+=1) {
//   console.log('num', nums[i]);
// }


// is 4 in the nums array?
let contains4 = false;

for(let i = 0; i < nums.length; i+=1) {
  let currentNum = nums[i];
  if(currentNum === 4) {
    contains4 = true;
    break;
  }
}

console.log('Contains Four', contains4);


let correctNumber = 7;
let guessNumber = 5;
if (myGuess === correctNumber){
    alert("That is correct!");
  }
  else if(myGuess > correctNumber) {
    alert('You guessed ' + myGuess + '. That\'s too high, please try Again!')
  }
  else if(myGuess < correctNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
  }