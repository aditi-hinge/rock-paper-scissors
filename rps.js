let flowerGif = document.getElementById("flower-gif");
let showFinalResult = document.getElementById("show-final-result");
let currentDisplay = document.getElementById("current-display");
let tieDisplay = document.getElementById("tie-display");
let winDisplay = document.getElementById("win-display");
let lossDisplay = document.getElementById("loss-display");
let newGame = document.getElementById("new-game");
let scoreIntro = document.getElementById("score-intro");

let playerSelection;
let computerSelection;
let tieScore = 0;
let winScore = 0;
let lossScore = 0;

//PLAYER PLAY

let playerChoice = () => {
  document.getElementById("rock").addEventListener("click", () => {
      playerSelection = "rock";
      document.getElementById("rock").classList.add("playing");
      setTimeout(() =>{document.getElementById("rock").classList.remove("playing");}, 200);
      flowerGif.style.visibility = "visible";
      playerImageRock();
      computerChoice();
    });
  document.getElementById("paper").addEventListener("click", () => {
      playerSelection = "paper";
      document.getElementById("paper").classList.add("playing");
      setTimeout(() =>{document.getElementById("paper").classList.remove("playing");}, 200);
      flowerGif.style.visibility = "visible";
      playerImagePaper();
      computerChoice();
    });
  document.getElementById("scissor").addEventListener("click", () => {
      playerSelection = "scissor";
      document.getElementById("scissor").classList.add("playing");
      setTimeout(() =>{document.getElementById("scissor").classList.remove("playing");}, 200);
      flowerGif.style.visibility = "visible";
      playerImageScissor();
      computerChoice();
    });
  return playerSelection;
  };
  playerChoice();
  
//COMPUTER PLAY
  
let hands = ["rock", "paper", "scissor"];
let computerChoice = () => {
  computerSelection = hands[Math.floor(Math.random() * hands.length)];
    if (computerSelection === "rock") {
        computerImageRock();
    } else if (computerSelection === "paper") {
         computerImagePaper();
    } else if (computerSelection === "scissor") {
         computerImageScissor();
    } else {
         return 1;
    }
      return computerSelection;
  };

 //PLAYROUND

let playRound = (playerSelection, computerSelection) => {
  if (
  (playerSelection === "rock" && computerSelection === "rock") ||
  (playerSelection === "paper" && computerSelection === "paper") ||
  (playerSelection === "scissor" && computerSelection === "scissor")
  ){
    currentDisplay.textContent = "Current round: Tie!";
    tieScore++;
    tieDisplay.textContent = "Ties: " + tieScore;
  } else if (
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissor" && computerSelection === "paper") ||
  (playerSelection === "rock" && computerSelection === "scissor")
  ){
    currentDisplay.textContent = "Current round: You Win!";
    winScore++;
    winDisplay.textContent = "Wins: " + winScore;
    displayWinner();
   } else if 
    (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "rock")
    )
   {
    currentDisplay.textContent = "Current round: You Lose!";
    lossScore++;
    lossDisplay.textContent = "Losses: " + lossScore;
    displayWinner();
   } else {
      currentDisplay.textContent = "Current round: Something isn't right..";
  }
}

//NEW GAME FUNCTION

let newGameFunc = () => {
    tieScore = 0;
    winScore = 0;
    lossScore = 0;
    tieDisplay.textContent = "Ties: " + tieScore;
    winDisplay.textContent = "Wins: " + winScore;
    lossDisplay.textContent = "Losses: " + lossScore;  
    currentDisplay.textContent = "Current round: ";
  }
newGame.addEventListener("click", newGameFunc);

//SCOREBOARD

let scoreboard = () => {
  scoreIntro.innerHTML = "YOU &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp COMPUTER";
  tieDisplay.textContent = "Ties: " + tieScore;
  winDisplay.textContent = "Wins: " + winScore;
  lossDisplay.textContent = "Losses: " + lossScore;
  showFinalResult = displayWinner;
  newGame.style.visibility = "visible";
};
    
//GAME FUNCTION
  
let game = () => {
  playRound(playerSelection,computerSelection);
};
  
//EVENT LISTENERS
let img = document.querySelectorAll(".img");
  img.forEach((image) => {
    image.addEventListener("click", () => {
      scoreboard();
      game();
    })
  }
);

//PLAYROUND DISPLAY IMAGES

  //PLAYER
  let playerImageRock = () => {
    document.getElementById('player-image').innerHTML = " ";
    let img = document.createElement("IMG");
    img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/rock.jpg";
    document.getElementById('player-image').appendChild(img);
    img.style.height = "250px";
    img.style.width = "250px";
    img.style.borderRadius = "10px";
    }

  let playerImagePaper = () => {
    document.getElementById('player-image').innerHTML = " ";
    let img = document.createElement("IMG");
    img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/paper.png";
    document.getElementById('player-image').appendChild(img);
    img.style.height = "250px";
    img.style.width = "250px";
    img.style.borderRadius = "10px";
    }
  
  let playerImageScissor = () => {
    document.getElementById('player-image').innerHTML = " ";
    let img = document.createElement("IMG");
    img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/scissors.jpg";
    document.getElementById('player-image').appendChild(img);
    img.style.height = "250px";
    img.style.width = "250px";
    img.style.borderRadius = "10px";
    }

  //COMPUTER

  let computerImageRock = () => {
    document.getElementById('computer-image').innerHTML = " ";
    let img = document.createElement("IMG");
    img.style.visibility = "hidden";
    img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/rock.jpg";
    document.getElementById('computer-image').appendChild(img);
    img.style.visibility = "visible";
    img.style.height = "250px";
    img.style.width = "250px";
    img.style.borderRadius = "10px";
    }

  let computerImagePaper = () => {
      document.getElementById('computer-image').innerHTML = " ";
      let img = document.createElement("IMG");
      img.style.visibility = "hidden";
      img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/paper.png";
      document.getElementById('computer-image').appendChild(img);
      img.style.visibility = "visible";
      img.style.height = "250px";
      img.style.width = "250px";
      img.style.borderRadius = "10px";
      }

    let computerImageScissor = () => {
        document.getElementById('computer-image').innerHTML = " ";
        let img = document.createElement("IMG");
        img.style.visibility = "hidden";
        img.src = "/home/aditi/Downloads/TheOdinProject/rock-paper-scissors/images/scissors.jpg";
        document.getElementById('computer-image').appendChild(img);
        img.style.visibility = "visible";
        img.style.height = "250px";
        img.style.width = "250px";
        img.style.borderRadius = "10px";
        }  

  //DISPLAY WINNER
         
let displayWinner = () => {
  if (winScore === 5) {
    alert("Rejoice! You Won!");
    newGameFunc();
    scoreIntro.textContent = "Click on Rock/Paper/Scissors for new game";
  } else if (lossScore === 5) {
    alert("You lost! Don't be sad, try again :)");
    newGameFunc();
    scoreIntro.textContent = "Click on Rock/Paper/Scissors for new game";
    } else return;
  }
         
  //RESET GAME FUNCTION
   resetGameFunc = () => {
    tieScore = 0;
    winScore = 0;
    lossScore = 0;
    tieDisplay.textContent = "Ties: " + tieScore;
    winDisplay.textContent = "Wins: " + winScore;
    lossDisplay.textContent = "Losses: " + lossScore;  
    currentDisplay.textContent = "Current round: ";
  }
  newGame.addEventListener("click", resetGameFunc);