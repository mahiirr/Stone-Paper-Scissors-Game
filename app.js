let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara= document.querySelector("#Your-Score");
const compScorepara = document.querySelector("#Comp-Score");


const gencompChoice = () =>{
    const options =["Rock","Paper","Scissor"];
    const randInx = Math.floor(Math.random()* 3);
    return options[randInx]; 
}

const drawgame  = () => {
  msg.innerText="It's Draw Playe again"
  msg.style.backgroundColor="#081b31";

}
 
//winner Msg Showing
const showwiner = (userwin, userchoice, compChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! Your ${userchoice} Beat ${compChoice}`
        msg.style.backgroundColor="Green";

    }else{
      compScore++;
      compScorepara.innerText=compScore;
      msg.innerText=`You Lost. ${compChoice} Beat ${userchoice}`
      msg.style.backgroundColor="Red";
    }
}

const playgame = (userchoice) => {

    //Generate comp Choice   
    const compChoice = gencompChoice();

    //user win logic
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
