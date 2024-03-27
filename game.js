let computer = document.getElementById("Target")
let result = document.getElementById("output")

    
let game = (choice)=>{
    let array = ["ROCK", "PAPER", "SCISSORS"]
    let randomchoice = Math.floor(Math.random()*array.length)
    let compchoice = array[randomchoice];
    computer.textContent= "COMPUTER : " + compchoice;
    let userchoice = choice;
    if(compchoice === userchoice){
        return result.textContent = "Result : Its a draw";
    }else if (userchoice === "ROCK" && compchoice === "PAPER") {
        return result.textContent = "Result : You lose";
    } else if (userchoice === "PAPER" && compchoice === "SCISSORS") {
        return  result.textContent = "Result : You lose";
    } else if (userchoice === "SCISSORS" && compchoice === "ROCK") {
        return  result.textContent = "Result : You lose";
    } else if (userchoice === "ROCK" && compchoice === "SCISSORS") {
        return  result.textContent = "Result : You WIN";
    } else if (userchoice === "PAPER" && compchoice === "ROCK") {
        return  result.textContent = "Result : You WIN";
    } else if (cuserchoice === "SCISSORS" && compchoice === "PAPER") {
        return  result.textContent = "Result : You WIN";
    }
}





