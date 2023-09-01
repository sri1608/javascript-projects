// Generate a random number between 1 and 20
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display a message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to update the score
const updateScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// Function to update the highscore
const updateHighscore = function () {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
};

// Event listener for the "Check!" button
document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".card-container").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "18%";
    document.querySelector(".message").style.fontSize = "35px";

    updateHighscore();

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " Too high! 📈 " : " Too low! 📉 ");
      score--;
      updateScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      updateScore(0);
    }
  }
});

document
  .querySelector(".btn:last-child")
  .addEventListener("click", function () {
    score = 20;
    document.querySelector(".card-container").style.backgroundColor = "#deedfc";
    document.querySelector(".number").style.width = "15%";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").style.fontSize = "24px";
    displayMessage("Start guessing...");
    updateScore(score);

    secretNumber = Math.floor(Math.random() * 20) + 1;
  });
