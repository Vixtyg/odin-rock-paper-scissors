function getComputerChoice(){
    let randomInt=((Math.random())+(Math.random()));
    randomInt=Math.round(randomInt)
    console.log(randomInt);
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
    return humanChoice=prompt("Rock, Paper, Or Scissors?").toLowerCase();
}
console.log(getComputerChoice());

console.log(getComputerChoice());

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getComputerChoice());