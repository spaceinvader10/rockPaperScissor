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
let liveFeeder = document.getElementById('liveFeed');
let liveFeeder2 = document.getElementById('liveFeed2');
let outcome = document.querySelector('#matchOutcome');



//game function should called the playround function and determine the amount of rounds needed for the game, need to integrate into its own function later
let rock = document.getElementById('playRock');
let paper = document.getElementById('playPaper');
let scissor = document.getElementById('playScissor');
let userStat = document.getElementById('userStats');
let computerStat = document.getElementById('computerStats');
let roundStat =  document.getElementById('round');

rock.addEventListener('click', ()=>{
    liveFeeder2.innerHTML= 'Player has selected rock.'
    //console.log('rock was selected.');
    bsign = 'rock';
    return playRound(playerSelection(bsign));
})
paper.addEventListener('click', ()=>{
    liveFeeder2.innerHTML ='Player has selected paper.';
    // console.log('paper was selected ');
    bsign = 'paper';
    return playRound(playerSelection(bsign));
})

scissor.addEventListener('click', ()=>{
    liveFeeder2.innerHTML ='Player has selected scissor.';
    // console.log('scissor was selected ');
    bsign = 'scissor';
    return playRound(playerSelection(bsign));
})

//return sign = 'rock';)
//console.log(bsign)


function playerSelection(sign) {
        //want to see the user's response
        if(sign.toLowerCase() === 'rock'|| sign.toLowerCase() ==='paper' || sign.toLowerCase() ==='scissor') {
            playerSign = sign;
            // console.log('The player has selected ' + playerSign);
            liveFeeder.innerHTML = 'The player has selected ' + playerSign;
            return playerSign.toLowerCase();
            
        }
        //  else {
        //     liveFeeder.innerHTML ='Please answer with one of the options.';
        //     // console.log('Please answer with one of the options.');
        //     return null;
        // }
}





function computerSelection (){

    let random = Math.floor(Math.random()*3);
    let computerResponse = gameChoices[random];
    
    liveFeeder.innerHTML = 'Computer has selected '+ computerResponse;
    // console.log('The computer has selected '+ computerResponse);

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
            outcome.innerHTML = ('It is a tie!');
        } else if( playerWin === 'rock' && computerWin === 'scissor'){
            outcome.innerHTML ='Player defeats computer with rock vs scissor';
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'rock' && computerWin === 'paper'){
            outcome.innerHTML ='Computer defeats player with paper vs rock';
            gameRecord.push('Player Loses!');
            computerScore++;
        } else if( playerWin === 'scissor' && computerWin === 'paper'){
            outcome.innerHTML ='Player defeats computer with scissor vs paper';
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'scissor' && computerWin === 'rock'){
            outcome.innerHTML ='Computer defeats player with rock vs scissor';
            gameRecord.push('Player Loses!');
            computerScore++;
        }  else if( playerWin === 'paper' && computerWin === 'rock'){
            outcome.innerHTML ='Player defeats computer with paper vs rock';
            gameRecord.push('Player Wins!');
            playerScore++;
        } else if( playerWin === 'paper' && computerWin === 'scissor'){
            outcome.innerHTML ='Computer defeats player with scissor vs paper';
            gameRecord.push('Player Loses!');
            computerScore++;
        }

       
        userStat.innerHTML= 'Player Score: ' + playerScore;
        computerStat.innerHTML= 'Computer Score: ' + computerScore;
        roundStat.innerHTML = 'Round: '+ gameRecord.length + '&nbsp' + ' Player: ' + playerScore + ' : Computer: ' + computerScore +'.';


   // }

// intergrated game logic into the if else
   

    
 //   console.log(gameRecord.length)
   //  playerScore > computerScore ? outcome.innerHTML = 'Player has won the game!': outcome.innerHTML = 'Computer has won the game!';
  //need to build logic for the live feed
    if(playerScore >= game && (playerScore > computerScore)){
        outcome.innerHTML ='Best ' + game + ' out of ' + (game + 2) +' Game is done!';
        liveFeeder.innerHTML = 'The winner is the Player : ' + playerScore + ' !';
      
        // else if(computerScore > playerScore){
        //     document.getElementsByTagName('h3').textContent = 'The winner is the Computer: ' + computerScore + ' !';
        // }
        
    }
    if(computerScore >= game && (playerScore < computerScore)){
        outcome.innerHTML ='Best '+ game +' out of ' + (game + 2) + ' Game is done!';
        liveFeeder.innerHTML = 'The winner is the Computer : ' + computerScore + ' !';

        
    }

}


//console.log(playerSelection(bsign))
//logic for rock paper scissors

