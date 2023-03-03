var playerChoice
var computerChoice

var playerScore = 0
var  computerScore = 0


var result = document.getElementById('result')


function ComputerChoice() {               // get computer choice
  var x = [ "paper", "scissors","rock"];
  var randomIndex = Math.floor(Math.random() * 3);
       document.getElementById("computer-move").src='/image/'+x[randomIndex]+'.webp' // ta3tina taswiret el choice eli 5tarou el computer
          return     x[randomIndex];
          }



function determineWinner(playerChoice, computerChoice) {      //determine the winner and update the score 
  if(playerChoice=== computerChoice) {
     return "Draw!";
        }else if(playerChoice === "rock") {
    if (computerChoice=== "scissors") {
        playerScore++
        updateScore()
      return "You win!";
    } else{
        computerScore++
        updateScore()
      return "Computer win!";
    }
  } else if(playerChoice === "paper") {
    if (computerChoice === "rock") {
        playerScore++
        updateScore()
               return "You win!";
         } else {
            computerScore++
            updateScore()
      return "Computer win!";
             }
             }else if(playerChoice=== "scissors") {
                      if (computerChoice=== "paper") {
                      playerScore++
                      updateScore()
                 return "You win!"
                      } else {
                          computerScore++
                         updateScore()
                     return "Computer win!";
                     }
                 }
             }


document.getElementById("r").addEventListener("click", function() {      // Add click event listeners to the buttons
    playerChoice = "rock"
  document.getElementById("player-move").src='/image/rock.webp'//when we pick rock, player choice pic change to  rock
  computerChoice = ComputerChoice()
  result.innerHTML = determineWinner(playerChoice, computerChoice)//the HTML content of result take the return of the function determinewinner
});

document.getElementById("p").addEventListener("click", function() {
    playerChoice = "paper";
  document.getElementById("player-move").src='/image/paper.webp'//when we pick paper, player choice pic change to paper
  computerChoice = ComputerChoice();
  result.innerHTML = determineWinner(playerChoice, computerChoice);   //the HTML content of result take the return of the function determinewinner
});

document.getElementById("s").addEventListener("click", function() {
    playerChoice = "scissors";
  document.getElementById("player-move").src='/image/scissors.webp' //when we pick scissor, player choice pic change to scissor
  computerChoice = ComputerChoice();
  result.innerHTML = determineWinner(playerChoice, computerChoice);//the HTML content of result take the return of the function determinewinner
})





function updateScore() {
    document.getElementById("person-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
  }
