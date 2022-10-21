//Create a conditional that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward too

let age = 22
let answer = ''
if (age < 16) {
    answer = 'You cannot drive'
} else if (age < 18) {
    answer = 'You cannot get in club'
} else if (age < 21) {
    answer = 'You cannot drink'
} else if (age < 25) {
    answer = 'You cannot rent cars affordably'
} else if (age < 30) {
    answer = 'You cannot rent fancy cars'
} else {
    answer = 'There is nothing to look forward to'
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

const h1 = document.querySelector('h1').addEventListener('click', condition).value

function condition(answer) {

}