let humanScore=0;
let computerScore=0;

let computerChoice;
let humanChoice;

const computerChoiceDiv = document.createElement("div");
document.body.appendChild(computerChoiceDiv);

const humanChoiceDiv = document.createElement("div");
document.body.appendChild(humanChoiceDiv);

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

const button= document.createElement("button");
button.textContent="Click on me!"
button.setAttribute("id", "button");
document.body.appendChild(button);

function getComputerChoice(){
    let randomInt=(Math.random()*3);
    randomInt=Math.ceil(randomInt);
    switch(randomInt){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}  
function getHumanChoice(){
    let humanChoice=prompt("Rock, Paper, Or Scissors?").toLowerCase().trim();
    let arrayHumanChoice=humanChoice.split('');
    //Alternatively: Use charat() function to capitalize
    arrayHumanChoice[0]=arrayHumanChoice[0].toUpperCase();
    console.log(arrayHumanChoice[0].toUpperCase());
    return arrayHumanChoice.join('');
}
function playRound(computerChoice, humanChoice){    

    if (humanChoice==computerChoice){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;

        resultDiv.textContent=`Draw!`;
        console.log("Draw!");
    }else if (humanChoice=="Rock" && computerChoice=="Paper"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        computerScore+=1;

        resultDiv.textContent=`Result: You lose! Paper beats Rock!`;
        console.log("You lose! Paper beats Rock!");
    }else if (humanChoice=="Paper" && computerChoice=="Rock"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        humanScore+=1;

        resultDiv.textContent=`Result: You win! Paper beats Rock!`;
        console.log("You win! Paper beats Rock!");
    }else if (humanChoice=="Scissors" && computerChoice=="Paper"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        humanScore+=1;

        resultDiv.textContent=`You win! Scissors beat Paper!`;
        console.log("You win! Scissors beat Paper!");
    }else if (humanChoice=="Paper" && computerChoice=="Scissors"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        computerScore+=1;

        resultDiv.textContent=`Result: You lose! Scissors beat Paper!`;
        console.log("You lose! Scissors beat Paper!");;
    }else if (humanChoice=="Scissors" && computerChoice=="Rock"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        computerScore+=1;

        resultDiv.textContent=`Result: You lose! Rock beats Scissors!`;
        console.log("You lose! Rock beats Scissors!");
    }else if (humanChoice=="Rock" && computerChoice=="Scissors"){
        computerChoiceDiv.textContent=`Computer Choice: ${computerChoice}`;
        humanChoiceDiv.textContent=`Human Choice: ${humanChoice}`;
        humanScore+=1;

        resultDiv.textContent=`Result: You win! Rock beats Scissors!`;
        console.log("You win! Rock beats Scissors!");
    }else{
        alert("Invalid input!");
    }
    scoreDiv.textContent=`Score: ${humanScore} ${computerScore}`;
}

function playGame(){

    button.onclick=function() {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice)};
   
}
playGame();