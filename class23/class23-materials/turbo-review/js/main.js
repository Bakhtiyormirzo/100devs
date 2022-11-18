// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let str = 'I am a software engineer'
//alert(str.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let words = 'jr. dev mit cmu mechanics'
//console.log(words.replace('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rpsBot() {
    let myRand = Math.random()
    if (myRand < .33) {
        return 'rock'
    } else if (myRand < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
//console.log(rpsBot())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checksWinner(playerChoice) {
    let botChoice = rpsBot()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'rock')) {
        console.log('You Won')
    } else if (playerChoice === botChoice) {
        console.log('Tie')
    } else {
        console.log('You Lose')
    }
}
//console.log(checksWinner('paper'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choices(arr) {
    arr.forEach(choice => checksWinner(choice))
}
choices(['rock', 'paper', 'scissors'])
