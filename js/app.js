let playerSelection;
const computerSelection = computerPlay();

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice
}

function playRound(playerSelection, computerSelection) {
  switch (computerSelection) {
    case 'rock':
      switch (playerSelection) {
        case 'Rock':
          return `Its a Tie! you both chose Rock`
          break;
        case 'paper':
          return `You Win!, Paper beats Rock!`
          break;
        case 'scissors':
          return `You Lose! Rock Beats Scissors`
          break;
        default:
          return `Incorrect choice, Choose again`;
      }
      break;
    case 'Paper':
      switch (playerSelection) {
        case 'rock':
          return `You Lose! Paper beats Rock`;
          break;
        case 'paper':
          return `Its a Tie! You both chose Paper!`;
          break;
          case 'scissors':
            return `You Win! Scissors beat Paper!`;
          break;
        default:
          return `Incorrect choice, Choose again`;
      }
      break;
    case 'Scissors':
      switch (playerSelection) {
        case 'rock':
          return `You Win! Rock Beats Scissors`;
          break;
        case 'paper':
          return `You Lose! Scissors beats Paper`;
          break;
          case 'scissors':
            return `Its a Tie! You both chose Scissors!`;
            break;
        default:
          return `Incorrect choice, Choose again`
      }
      break;
    default:
      return `Let the games Begin!`
  }
}

function game() {
  let i;
  let userScore = 0;
  let computerScore = 0;
  let tiedScore = 0;

  for (i = 0; i < 5; i++) {

    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection).includes('Win')) {
      userScore++
      console.log(playRound(playerSelection, computerSelection));

    } else if (playRound(playerSelection, computerSelection).includes('Lose')) {
      computerScore++
      console.log(playRound(playerSelection, computerSelection));

    } else if (playRound(playerSelection, computerSelection).includes('Tie')) {
      tiedScore++
      console.log(playRound(playerSelection, computerSelection));

    } else {
      console.log(playRound(playerSelection, computerSelection));

    }

    if (userScore > computerScore) {
      console.log(`You are the Winner!🥳🥳 You Won ${userScore} games. Computer: ${computerScore} . Ties: ${tiedScore}`);

    } else if (userScore < computerScore) {
      console.log(`Sorry you Lost ☹ You: ${userScore} games. Computer: ${computerScore} . Ties: ${tiedScore}`);
    } else {
      console.log(`Its a tie! Your Score: ${userScore}  Computer: ${computerScore} . Ties: ${tiedScore}`);
    }

  }
}
game()