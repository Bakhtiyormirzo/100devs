//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5]
//alert(nums.reduce((acc, cur) => acc + cur, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
    let newArr = []
    arr.forEach(n => newArr.push(n**2))
    return newArr 
}
console.log(squared(nums))

//Create a function that takes string
//Print the reverse of that string to the console
let myReverse = str => str.split('').reverse().join('')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let isPalinrome = str => alert(str === myReverse(str))

isPalinrome('racecar')