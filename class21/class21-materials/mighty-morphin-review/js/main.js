// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'INDEPENDENCE DAY'
// console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let newStr = 'this will be changed'
// alert(newStr.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absFive(n1, n2, n3, n4, n5) {
    let result = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(result))
}
// absFive(12,34,56,77,98)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function minMax(n1, n2, n3) {
    let max = Math.max(n1, n2, n3)
    let min = Math.min(n1, n2, n3)
    console.log(min, max)
}
// minMax(12,34,56)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    let ratio = Math.random()
    if (ratio > 0.5) {
        return 'Heads'
    }
    return 'Tails'
}
// console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function coin(n) {
    for (let i = 0; i < n; i++) {
        console.log(headsOrTails())
    }
}
coin(10)