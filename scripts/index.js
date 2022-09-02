let totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * rpsChoice.length);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");

  if (score === -1) {
    resultDiv.innerHTML = "<h3>You Lose!</h3>";
  } else if (score === 0) {
    resultDiv.innerHTML = "<h3>It's a tie!</h3>";
  } else {
    resultDiv.innerHTML = "<h3>You Won!</h3>";
  }

  handsDiv.innerHTML = `<h3>🧑🏽${playerChoice} VS 🤖${computerChoice}</h3>`;
  playerScoreDiv.innerHTML = `<h3> Your Score: ${totalScore["playerScore"]}</h3>`;
  computerScoreDiv.innerHTML = `<h3> Computer Score: ${totalScore["computerScore"]}</h3>`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  if (score === -1) {
    totalScore["playerScore"] += score;
    totalScore["computerScore"] += 1;
  } else if (score === 0) {
    totalScore["playerScore"] = totalScore["playerScore"];
    totalScore["computerScore"] = totalScore["computerScore"];
  } else {
    totalScore["computerScore"] -= score;
    totalScore["playerScore"] += 1;
  }
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
  computerScoreDiv.innerText = "";
}

playGame();
