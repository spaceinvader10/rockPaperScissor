let gameChoices =['rock', 'paper', 'scissor'];
let gameRecord =[];
let playerSign ="";
let playerWin;
let computerWin;
let target = 'Player Wins!';
let playerScore = 0;
let computerScore = 0;
let game = 5;
let bsign = 'nonfate';


//game function should called the playround function and determine the amount of rounds needed for the game, need to integrate into its own function later
let rock = document.getElementById('playRock');
let paper = document.getElementById('playPaper');
let scissor = document.getElementById('playScissor');

rock.addEventListener('click', function(){
    console.log('rock was selected ');
    bsign = 'rock';
    return playRound(playerSelection(bsign));
})
paper.addEventListener('click', function(){
    console.log('paper was selected ');
    bsign = 'paper';
    return playRound(playerSelection(bsign));
})

scissor.addEventListener('click', ()=>{
    console.log('scissor was selected ');
    bsign = 'scissor';
    return playRound(playerSelection(bsign));
})

  //  return sign = 'rock';)
//console.log(bsign)


function playerSelection(sign) {
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

function playRound(player){

    if(player === undefined){
        console.log('failed player choice');
        return null;
    }

   // if (gameRecord.length < game){


    
        //while the rounds are less than five keep playing until there are 5 rounds
        // console.log(gameRecord);
         playerWin = player;
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
        document.getElementById('userStats').innerHTML = 'Player Score : ' + playerScore + '!';
        document.getElementById('computerStats').innerHTML = 'Computer Score : ' + computerScore + '!';

   // }

// intergrated game logic into the if else
   

    
 //   console.log(gameRecord.length)
    console.log( playerScore > computerScore ? 'Player has won the game!': 'Computer has won the game!');
  //need to build logic for the live feed
    if(playerScore > 3){
        console.log('Best 3 out of 5. Game is done!')
        document.getElementById('liveFeed').innerHTML = 'The winner is the Player : ' + playerScore + ' !';
      
        // else if(computerScore > playerScore){
        //     document.getElementsByTagName('h3').textContent = 'The winner is the Computer: ' + computerScore + ' !';
        // }
        
    }

}


console.log(playerSelection(bsign))
//logic for rock paper scissors

