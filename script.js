
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
        let randomNum = Math.floor(Math.random()*3)+1;

        if(randomNum==1){
            return "rock";
        }
        if(randomNum==2){
            return "paper";
        }
        return "scissors";
    }

    function getHumanChoice(){
        let choice = prompt("Rock, Paper, or Scissors?");
        return choice;
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if(humanChoice=="rock"){
            if(computerChoice=="rock"){
                console.log("It's a tie! You both chose Rock!");
            }else if(computerChoice=="paper"){
                console.log("You lose! Paper beats Rock!");
                computerScore+=1;
            }else if(computerChoice=="scissors"){
                console.log("You win! Rock beats Scissors!");
                humanScore+=1;
            }
        }
        if(humanChoice=="paper"){
            if(computerChoice=="rock"){
                console.log("You win! Paper beats Rock!");
                humanScore+=1;
            }else if(computerChoice=="paper"){
                console.log("It's a tie! You both chose Paper!");
            }else if(computerChoice=="scissors"){
                console.log("You lose! Scissors beats Paper!");
                computerScore+=1;
            }
        }
        if(humanChoice=="scissors"){
            if(computerChoice=="rock"){
                console.log("You lose! Rock beats Scissors!");
                computerScore+=1;
            }else if(computerChoice=="paper"){
                console.log("You win! Scissors beats Paper!");
                humanScore+=1;
            }else if(computerChoice=="scissors"){
                console.log("It's a tie! You both chose Scissors!");
            }
        }
    }

    
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("HUMAN: "+humanScore);
    console.log("COMPUTER: "+computerScore);

}

playGame();