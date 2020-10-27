//run npm i yargs
// to run
    //node main.js --move=rock

    const yargs = require('yargs/yargs')
    const { hideBin } = require('yargs/helpers');
const { exit } = require('yargs');
    const argv = yargs(hideBin(process.argv)).argv

//argv.move will hold the player input move (rock, paper, or scissors) if passed in like node main.js --move=rock
//let compMove = 'paper';

//Class for the player's move, takes in the arg.move 
//contains a method to check if there was a valid input
class InputMove {
    constructor (InputMove) {
        this.InputMove = InputMove;
        this.validInput = false;    //set invalid input until checked
    }
    checkInput () {
        if (this.InputMove === 'rock' || this.InputMove === 'paper' || this.InputMove === 'scissors') {
            this.validInput = true;
        }
        if(playerMove.validInput === false) {
            throw new Error ('invalid input you dummy');
        }
    }
}

//Class for stretegy
//takes in player move, and has its own move
//has method that determines the winning move
class Strategy {
    constructor (playerMove) {
        this.playerMove = playerMove.InputMove;
        this.computerMove = ''
    }
    strategizer () {
        if (this.playerMove === 'rock') {
            return this.computerMove = 'paper';
        } else if (this.playerMove === 'paper') {
            return this.computerMove = 'scissors';
        } else if (this.playerMove === 'scissors') {
            return this.computerMove = 'rock';
        } else {
            return "uh oh something went wrong";
        }
    }
}

//create new class for the player's move
let playerMove = new InputMove(argv.move);

//check to make sure that the player's move was valid and set this.validInput to true if valid
playerMove.checkInput();


//create the strategy from the player's move
let compMove = new Strategy(playerMove);
//console.log(compMove);
let output = compMove.strategizer();

//read in the input in the console
if(process.argv.length < 3){  //Expected third argument is the player move
    console.log("Player must submit a move!");
    return -1;
} else{
    //log the result of the game (it is predestined)
    console.log(`Playing a game of Roshambo against the computer.\nPlayer plays ${argv.move}!\nComputer plays ${output}!\n~Computer wins!~`)

}





