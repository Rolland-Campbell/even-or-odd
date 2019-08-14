//prompt user for number
let inputNum = prompt("pick a whole number");
//puts number into function evenOrOdd, then at end of function shows answer on screen
console.log(evenOrOdd(inputNum))

//function runs sanity check of number
function evenOrOdd(inputNum) {
  // % 2 divides number by 2, returned % is either 0 or remainder
  if (inputNum % 2 == 0) {
    // % 0 is even
    return "even";
  } else {
    // % remainder is odd
    return "odd";
  }
}
