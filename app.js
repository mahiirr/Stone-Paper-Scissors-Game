let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompChoice = () =>{
    const options =["Rock","Paper","Scissor"];
    const randInx = Math.floor(Math.random()* 3);
    return options[randInx]; 
}

const drawgame  = () => {
  console.log("It's Draww.");
  msg.innerText="It's Draw Playe again"
  msg.style.backgroundColor="#081b31";

}
 
const showwiner = (userwin, userchoice, compChoice) =>{
    if(userwin){
        console.log("you Win!");
        msg.innerText=`You Win! Your ${userchoice} Beat ${compChoice}`
        msg.style.backgroundColor="Green";

    }else{
      console.log("You Lose.");
      msg.innerText=`You Lost. ${compChoice} Beat ${userchoice}`
      msg.style.backgroundColor="Red";
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
        showwiner(userwin, userchoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
     playgame(userchoice);
    })
})
