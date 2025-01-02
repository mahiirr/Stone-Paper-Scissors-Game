let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompChoice = () =>{
    const options =["Rock","Paper","Scissor"];
    const randInx = Math.floor(Math.random()* 3);
    return options[randInx]; 
}

const drawgame  = () => {
  console.log("It's Draww.");
}
 
const showwiner = (userwin) =>{
    if(userwin){
        console.log("you Win!");
    }else{
      console.log("You Lose.");
    }
}

const playgame = (userchoice) => {
    console.log("user Choice = ",userchoice);

    //Generate comp Choice   
    const compChoice = gencompChoice();
    console.log("comp Choice =", compChoice);

    if(userchoice === compChoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock"){
            //paper scissor 
            userwin = compChoice === "Paper" ? false : true; 
        }else if(userchoice === "Paper"){
            //rock scissor
            userwin = compChoice === "Scissor" ? false : true;
        }else {
           userwin = compChoice === "Rock" ? false : true;
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
