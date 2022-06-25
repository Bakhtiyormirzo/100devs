// *Variables*
// Declare a variable, assign it a value, and alert the value
const me = 'Bakhtiyor'
// alert(me)

// Create a variable, divide it by 10, and console log the value
let num = 5
num /= 10
// console.log(num)

// *Functions*
// Create a function that multiplies 3 numbers and alerts the product
function multipliesThreeNums(n1,n2,n3) {
    alert(n1*n2*n3)
}
// multipliesThreeNums(1,2,3)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function arithmetic(n1,n2,n3,n4) {
    console.log(n1+n2-n3-n4)
}
// arithmetic(10,10,5,5)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function condition(a,b,c) {
    let num = 100
    num = (num + a - b) / c
    if (num > 25) {
        console.log('WE HAVE A WINNNA')
    }
}
// condition(10,10,2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitalization and if the user does not enter a day of the week alert "Try again!"
document.querySelector('#check').addEventListener('click', run)

function run() {
    const day = document.querySelector('#day').value.toLowerCase()
    if (day === 'saturday' || day === 'sunday') {
        alert('weekend')
    } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        alert('week day')
    } else {
        alert('Try again!')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function forLoop(num) {
    for (let i = 1; i <= num; i++) {
        if (i !== 3) {
            console.log(i)
        }
    }
}
forLoop(5)
