let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You win");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win !  Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    // console.log("You lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.background = "red";
  }
};

const drow = () => {
  console.log("Game is drow.");
  msg.innerText = "Game is drow, Play again ?";
  msg.style.background = "blue ";
};

// computer choice
const genCompChoice = () => {
  // console.log("computer choice", )
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

// Play game
const playGame = (userChoice) => {
  console.log("user choice => ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice => ", compChoice);

  if (userChoice === compChoice) {
    drow(); // drow game
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "rock" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // user choice
    playGame(userChoice);
    // console.log("choice was licked", userChoice);
  });
});
