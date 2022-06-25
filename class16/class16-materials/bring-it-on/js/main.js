// *Variables*
// Create a variable and console log the value
const num = 10
console.log(num)

// Create a variable, add 10 to it, and alert the value
let n = 5
n += 10
alert(n)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(a,b,c,d) {
    alert(a-b-c-d)
}
subtractFourNums(10,2,3,4)

// Create a function that divides one number by another and returns the remainder
function remainder(n1, n2) {
    return n1 % n2
}
remainder(10,3)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1,n2) {
    const sumOfTwo = n1 + n2
    if (sumOfTwo > 50) {
        alert('Jumanji')
    } else {
        alert('Not Jumanji')
    }
}
addTwoNums(50,10)

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA
function multipliesThreeNums(n1,n2,n3) {
    const product = n1*n2*n3
    if (product%3===0) {
        alert('ZEBRA')
    } else {
        alert('Not ZEBRA')
    }
}
multipliesThreeNums(3,4,5)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(word, num) {
    for (let i = 1; i < num+1;i++) {
        console.log(word)
    }
}
wordNum('CMU', 5)