let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompChoice = () =>{
    const options =["Rock","Paper","Scissor"];
    const randInx = Math.floor(Math.random()* 3);
    return options[randInx]; 
}

const playgame = (userchoice) => {
    console.log("userChoice = ",userchoice);
    //Generate comp Choice  
    const compChoice = gencompChoice();
    console.log("compChoice =", compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
     playgame(userchoice);
    })
})
