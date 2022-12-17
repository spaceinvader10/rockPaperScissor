let gameChoices =['rock', 'paper', 'scissor'];
let gameRecord =[];
let playerSign ="";
let playerWin;
let computerWin;
let target = 'Player Wins!';
let playerScore = 0;
let computerScore = 0;


function playerSelection () {

    let sign = prompt("Choose Rock, Paper, or Scissor to proceed! A total of five round will be played!");
        //want to see the user's response
        if(sign.toLowerCase() === 'rock'|| sign.toLowerCase() ==='paper' || sign.toLowerCase() ==='scissor') {
            playerSign = sign;
            console.log('The player has selected ' + playerSign);
            return playerSign.toLowerCase();

        } else {
            console.log('Please answer with one of the options.');
        }
}





function computerSelection (){

    let random = Math.floor(Math.random()*3);
    let computerResponse = gameChoices[random];
    console.log('The computer has selected '+ computerResponse);

    return computerResponse;

}


/*
Generate a random computer choice with rock, paper and scissor stored in an array

Have the player choose a choice also from the array
*/



//compare the results of the player vs the computer and determine the winner

function playRound(playerSelection, computerSelection){

    while (gameRecord.length < 5){
        //while the rounds are less than five keep playing until there are 5 rounds
        // console.log(gameRecord);
         playerWin = playerSelection();
         computerWin = computerSelection();
        //loop needs to happen here or else infinite stuck, call the computerSelection and player Selection here
        
        //logic for the game
        if (playerWin === computerWin){
            console.log('It is a tie!')
        } else if( playerWin === 'rock' && computerWin === 'scissor'){
            console.log('Player defeats computer with rock vs scissor');
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'rock' && computerWin === 'paper'){
            console.log('Computer defeats player with paper vs rock');
            gameRecord.push('Player Loses!');
            computerScore++;
        } else if( playerWin === 'scissor' && computerWin === 'paper'){
            console.log('Player defeats computer with scissor vs paper');
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'scissor' && computerWin === 'rock'){
            console.log('Computer defeats player with rock vs scissor');
            gameRecord.push('Player Loses!');
            computerScore++;
        }  else if( playerWin === 'paper' && computerWin === 'rock'){
            console.log('Player defeats computer with paper vs rock');
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'paper' && computerWin === 'scissor'){
            console.log('Computer defeats player with scissor vs paper');
            gameRecord.push('Player Loses!');
            computerScore++;
        }

        console.log('Round '+ (gameRecord.length) + ' Player: ' + playerScore + ' : Computer: ' + computerScore +'.');

    }

// intergrated game logic into the if else
   

    
 //   console.log(gameRecord.length)
    console.log( playerScore > computerScore ? 'Player has won the game!': 'Computer has won the game!');
  
    

}


playRound(playerSelection,computerSelection);
//logic for rock paper scissors