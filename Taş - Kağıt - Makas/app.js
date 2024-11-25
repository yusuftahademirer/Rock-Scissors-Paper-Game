const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click" , (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = "Taş"
    }

    if(randomNumber === 2){
        computerChoice = "Kağıt"
    }

    if(randomNumber === 3){
        computerChoice = "Makas"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Berabere !"
    }

    if(computerChoice === "Taş" && userChoice === "Makas"){
        result = "Kaybettin !"
    }

    if(computerChoice === "Taş" && userChoice === "Kağıt"){
        result = "Kazandın !"
    }

    if(computerChoice === "Kağıt" && userChoice === "Makas"){
        result = "Kazandın !"
    }

    if(computerChoice === "Kağıt" && userChoice === "Taş"){
        result = "Kaybettin !"
    }

    if(computerChoice === "Makas" && userChoice === "Taş"){
        result = "Kazandın !"
    }

    if(computerChoice === "Makas" && userChoice === "Kağıt"){
        result = "Kaybettin !"
    }
    
    if(result === "Kazandın !"){
        resultDisplay.style.color = "rgb(0, 100, 0)"
    }

    if(result === "Kaybettin !"){
        resultDisplay.style.color = "rgb(172, 2, 2)"
    }

    if(result === "Berabere !"){
        resultDisplay.style.color = "yellow"
    }
    resultDisplay.innerHTML = result
}

