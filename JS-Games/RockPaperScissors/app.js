const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); //or you can use posibleChoices.lenght
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissor";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you Won!";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "you Lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "you Won!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you Lost!";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you Won!";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "you Lost!";
  }
  resultDisplay.innerHTML = result;
}
