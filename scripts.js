let gameChoices =['rock', 'paper', 'scissor'];
let gameRecord =[];
let playerSign = false;

while(playerSign === false) {

    let sign = prompt("Choose Rock, Paper, or Scissor to proceed!");
        //want to see the user's response
        if(sign.toLowerCase() === 'rock'|| sign.toLowerCase() ==='paper' || sign.toLowerCase() ==='scissor') {
            playerSign = sign;
            playerSelection(playerSign.toLowerCase());
        } else {
            alert('Please answer with one of the options.');
    }

}



function computerSelection (){

    let random = Math.floor(Math.random()*3);
    let computerResponse = gameChoices[random];
    console.log('The computer has selected '+ computerResponse);

    return computerResponse;

}

computerSelection();


/*
Generate a random computer choice with rock, paper and scissor stored in an array

Have the player choose a choice also from the array
*/

function playerSelection(choice){
    choice = playerSign;
    console.log('The player\'s choice is ' + choice);
    return choice;

}


//compare the results of the player vs the computer and determine the winner

function playRound(playerSelection, computerSelection){

    while (gameRecord.length < 5){
        //while the rounds are less than five keep playing until there are 5 rounds

        //loop needs to happen here or else infinite stuck
        
        //logic for the game
        if (playerSelection === computerSelection){
            console.log('It is a tie!')
        } else if( playerSelection === 'rock' && computerSelection === 'scissor'){
            console.log('Player defeats computer with rock vs scissor');
            gameRecord.push('Player Wins!');
        } else if( playerSelection === 'rock' && computerSelection === 'paper'){
            console.log('Computer defeats player with paper vs rock');
            gameRecord.push('Player Loses!');
        } else if( playerSelection === 'scissor' && computerSelection === 'paper'){
            console.log('Player defeats computer with scissor vs paper');
            gameRecord.push('Player Wins!');
        } else if( playerSelection === 'scissor' && computerSelection === 'rock'){
            console.log('Computer defeats player with rock vs scissor');
            gameRecord.push('Player Loses!');
        }  else if( playerSelection === 'paper' && computerSelection === 'rock'){
            console.log('Player defeats computer with paper vs rock');
            gameRecord.push('Player Wins!');
        } else if( playerSelection === 'paper' && computerSelection === 'scissor'){
            console.log('Computer defeats player with scissor vs paper');
            gameRecord.push('Player Loses!');
        }
    }
    
    

}


playRound(playerSelection(playerSign),computerSelection());
//logic for rock paper scissors