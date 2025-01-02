let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const drawgame  = ()=>{
  console.log("It's Draww.");
}

const showwiner = (userwin) =>{
    if(userwin){
        console.log("you Win!");
    }else{
        console.log("You Lose.")
    }
}
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

    if(userchoice === compChoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper scissor 
            userchoice = compChoice === "paper" ? false : true; 
        }else if(userchoice === "paper"){
            //rock scissor
            userchoice = compChoice === "Scissor" ? false : true;
        }else{
           userchoice = compChoice ==="rock" ? false : true;
        }
        showwiner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
     playgame(userchoice);
    })
})
