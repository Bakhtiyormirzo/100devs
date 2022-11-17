// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' Coffee '
favDrink = favDrink.trim()
//console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'orange apple peach'
//console.log(words.includes('apple'))
//console.log(words.search('apple') !== -1)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rpsBot() {
    let myRand = Math.random()

    if (myRand < 0.33) {
        return 'Rock'
    } else if (myRand < 0.66) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}
//console.log(rpsBot())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
    let botChoice = rpsBot()
    if ( (playerChoice === 'Rock' && botChoice === 'Scissors') || (playerChoice === 'Paper' && botChoice === 'Rock') || (playerChoice === 'Scissor' && botChoice === 'Paper')) {
        console.log('You Won')
    } else if (playerChoice === botChoice) {
        console.log('You Tied')
    } else {
        console.log('You Lose')
    }
}
//checkWin('Rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function arrChoices(choices) {
    choices.forEach(choice => checkWin(choice))
}
arrChoices(['Rock', 'Paper', 'Scissors'])