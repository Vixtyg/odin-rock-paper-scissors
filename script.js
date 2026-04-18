function getComputerChoice(){
    let randomInt=((Math.random())+(Math.random()));
    randomInt=Math.round(randomInt)+1;
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