// random computer choice
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'papper';
        case 2:
            return 'scissors';
    }
}
// Determine winner
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    }
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
}
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    // Loop 5 times player
    for (let i = 0; i < 5; i++) {   
        const playerSelection = prompt('rock , papper or scissors?');
        if (playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'papper'){ 
            alert("You threw  :  " + playerSelection);
            const computerSelection = computerPlay();
            alert("computer threw  :  " + computerSelection);
            const result = playRound(playerSelection, computerSelection);
            alert("The result is  :  " + result);
            if (result.startsWith('You win!')) {
                playerScore++;
            } else if (result.startsWith('You lose!')) {
                computerScore++;
            }
        }else {
            alert('"Error", Please type: rock, scissors or papper.  ' + ' You missed this round ! '); 
        }
    }
        // Display final score and whose won !
        alert("Your score is  :  " + playerScore + " And Computer score is  :  " + computerScore);
        
        if (playerScore > computerScore) {
            alert("Player won ! ");
        } else if (playerScore === computerScore){
            alert("Player and Computer are tie ");
            }else {
                alert("Computer won ! ");
        }
}
playGame();