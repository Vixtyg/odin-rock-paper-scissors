let humanScore = 0;
let computerScore = 0;

let computerChoice = "empty";
let humanChoice;

//This is an integer that represents what the player 
//has chosen for him/herself in the game
//(0 is rock, 1 is paper, 2 is scissors)
let humanChoiceIndex = 0;

//this allows us to go through 0,1,2 and cycle back to 0 after 2 (0,1,2,0,1,2)

//We initialize our assets. This is not in a function bc we want to access icons using
//shortened names. if we isolate these vars to function we'd have to reinitialize
//images in every other function
const computerContainerDiv = document.querySelector("#computer-button");

const btnContainer = document.querySelector("#human-button-container");
const innerBtn = document.createElement("button");
const rockIcon = document.createElement('img');
const paperIcon = document.createElement('img');
const scissorsIcon = document.createElement('img');


rockIcon.src = "assets/rock.svg";
paperIcon.src = "assets/paper.svg";
scissorsIcon.src = "assets/scissors.svg";

rockIcon.draggable = false;
paperIcon.draggable = false;
scissorsIcon.draggable = false;

scissorsIcon.setAttribute("class", "flip-180")

const rockIconComputer = document.createElement('img');
const paperIconComputer = document.createElement('img');
const scissorsIconComputer = document.createElement('img');

rockIconComputer.src = "assets/rock.svg";
paperIconComputer.src = "assets/paper.svg";
scissorsIconComputer.src = "assets/scissors.svg";

rockIconComputer.draggable = false;
paperIconComputer.draggable = false;
scissorsIconComputer.draggable = false;

innerBtn.textContent = "Play!";
innerBtn.setAttribute("class", "playButton");
innerBtn.setAttribute("id", "playButtonHover");



btnContainer.appendChild(innerBtn)
btnContainer.appendChild(rockIcon);


function increment() {
    switch (humanChoiceIndex) {
        case 2:
            humanChoiceIndex = 0;
            break
        default:
            humanChoiceIndex += 1;
            break
    }
}
function numberToStrInput(input) {
    switch (input) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}
function strInputToNumber(stringInput) {
    switch (stringInput.toLowerCase()) {
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2
    }
}
function capitalizeFirstLetter(str) {
    let arrayHumanChoice = str.split('');
    //Alternatively: Use charat() function to capitalize
    arrayHumanChoice[0] = arrayHumanChoice[0].toUpperCase();
    return arrayHumanChoice.join('');
}
//function createAndAppendDivs() {
const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.setAttribute("class", "score-tab");

document.body.appendChild(computerChoiceDiv);

const humanChoiceDiv = document.createElement("div");
humanChoiceDiv.setAttribute("class", "score-tab");

document.body.appendChild(humanChoiceDiv);

const resultDiv = document.querySelector('.score-tab');

const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("class", "score-tab");
document.body.appendChild(scoreDiv);
//}
function getComputerChoice() {
    let randomInt = (Math.random() * 3);
    randomInt = Math.ceil(randomInt);
    switch (randomInt) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Or Scissors?").toLowerCase().trim();
}
function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;

        resultDiv.textContent = `Draw!`;
        console.log("Draw!");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        computerScore += 1;

        resultDiv.textContent = `Result: You lose! Paper beats Rock!`;
        console.log("You lose! Paper beats Rock!");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        humanScore += 1;

        resultDiv.textContent = `Result: You win! Paper beats Rock!`;
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        humanScore += 1;

        resultDiv.textContent = `You win! Scissors beat Paper!`;
        console.log("You win! Scissors beat Paper!");
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        computerScore += 1;

        resultDiv.textContent = `Result: You lose! Scissors beat Paper!`;
        console.log("You lose! Scissors beat Paper!");;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        computerScore += 1;

        resultDiv.textContent = `Result: You lose! Rock beats Scissors!`;
        console.log("You lose! Rock beats Scissors!");
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent = `Human Choice: ${humanChoice}`;
        humanScore += 1;

        resultDiv.textContent = `Result: You win! Rock beats Scissors!`;
        console.log("You win! Rock beats Scissors!");
    } else {
        alert("Invalid input!");
    }
    scoreDiv.textContent = `Score: ${humanScore} ${computerScore}`;
}

function playGame() {
    button.onclick = function () {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice)
    };

}

function changeIcon(index) {
    switch (index) {
        case 1:
            btnContainer.removeChild(rockIcon);
            btnContainer.appendChild(paperIcon)
            break
        case 2:
            btnContainer.removeChild(paperIcon);
            btnContainer.appendChild(scissorsIcon)
            break
        case 0:
            btnContainer.appendChild(rockIcon);
            btnContainer.removeChild(scissorsIcon);
            break;
    }
}
function changeIconComputer(index) {
    switch (index) {
        case 1:

            console.log(index);
            computerContainerDiv.appendChild(paperIconComputer)
            break
        case 2:

            console.log(index);
            computerContainerDiv.appendChild(scissorsIconComputer)
            break
        case 0:

            console.log(index);
            computerContainerDiv.appendChild(rockIconComputer);
            break;
    }
}

function removeComputerUi(index) {
    switch (index) {
        case 1:
            computerContainerDiv.removeChild(paperIconComputer)
            break
        case 2:
            computerContainerDiv.removeChild(scissorsIconComputer)
            break
        case 0:
            computerContainerDiv.removeChild(rockIconComputer);
            break;
    }
}

function createComputerUi() {
}
document.querySelector(".human-button").addEventListener("click", (e) => {
    increment();
    changeIcon(humanChoiceIndex);
})
innerBtn.addEventListener("click", (e) => {

    console.log(computerChoice)
    if (computerChoice != "empty") {
        removeComputerUi(strInputToNumber(computerChoice));
    }
    e.stopPropagation();
    computerChoice = getComputerChoice();
    playRound(numberToStrInput(humanChoiceIndex), computerChoice);
    changeIconComputer(strInputToNumber(computerChoice));
})