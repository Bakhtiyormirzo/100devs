//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3]
const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
//alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numSquared(arr) {
    let squared = []
    arr.forEach(num => squared.push(Math.pow(num, 2)))
    return squared
}
//console.log(numSquared([1,2,3,4,5]))

//Create a function that takes string
//Print the reverse of that string to the console
function reversed(str) {
    console.log(str.reverse())
}
reversed('Hello')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
