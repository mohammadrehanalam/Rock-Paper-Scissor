let userScore=0;
let compScore=0;

const icons=document.querySelectorAll(".icon");
let msg=document.querySelector("#msg");
let u=document.querySelector("#user");
let c=document.querySelector("#comp");


const generateCompChoice = () => {
//ROCK,PAPER,SCISSOR
option=["rock","paper","scissor"];
const rad=Math.floor(Math.random()*3);
return option[rad];
}

const gameDraw = () => {
    console.log("GAME WAS A DRAW");
    msg.innerText="GAME WAS A DRAW";
    msg.style.backgroundColor=" #1F2A44";
}

const playGame = (userChoice) => {
console.log("user choice = ", userChoice);
//GENERATE COMPUTER CHOICE
const compChoice = generateCompChoice();
console.log("COMPUTER CHOICE = ",compChoice);
if (userChoice===compChoice) {
    gameDraw();
}else{
    let userWin=true;
    if (userChoice==="rock") {
       userWin= compChoice==="paper"? false : true;
    }
    if (userChoice==="paper") {
      userWin=  compChoice==="scissor"? false : true;
    }
    else{
      userWin=  compChoice==="rock"? false : true;
    }
    showWinnwer(userWin,userChoice,compChoice);
}

}


icons.forEach((icon) => {
    
    
    icon.addEventListener("click",()=>{
        const userChoice = icon.getAttribute("id")
        playGame(userChoice);

    })
});
const showWinnwer = (userWin,userChoice,compChoice) => {
if (userWin) {
    console.log("YOU WIN !");
    userScore++;
    u.innerText=userScore;
    msg.innerText= `YOU WIN ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="rgb(54, 233, 9)";

}
else{
    console.log("YOU LOSE !");
    compScore++;
    c.innerText=compScore;
    msg.innerText= `YOU LOST ! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="rgb(233, 9, 9)";

}
}