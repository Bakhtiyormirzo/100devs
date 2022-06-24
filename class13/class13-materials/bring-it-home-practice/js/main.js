// *Variables*
// Create a variable and console log the value

const a = 9
// console.log(a)


// Create a variable, add 10 to it, and alert the value

let b = 5
b += 10
// alert(b)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract(n1,n2,n3,n4) {
    return n1 - n2 - n3 - n4
}
// alert(subtract(10,2,2,2))


// Create a function that divides one number by another and returns the remainder

function remainder(num1, num2) {
    return num1 % num2
}
// console.log(remainder(10,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function checkJumanji(n1, n2) {
    let sumOfTwoNums = n1 + n2
    if (sumOfTwoNums > 50) {
        alert("Jumanji")
    } else {
        alert("NOT Jumanji")
    }
}
// checkJumanji(30,25)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function checkZebra(n1,n2,n3) {
    const product = n1 * n2 * n3

    if (product % 3 === 0) {
        alert("ZEBRA")
    } else {
        alert("NOT ZABRA")
    }
}

// checkZebra(3,2,4)