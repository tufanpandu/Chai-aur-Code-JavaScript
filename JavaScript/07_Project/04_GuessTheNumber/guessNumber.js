// Previous Guesses:
// Guesses Remaining: 10
//

// ================= Method = 1 ==============================


let randomNum = parseInt(Math.random()*100 + 1)

const userInput = document.querySelector("#inputNum")
const submit = document.querySelector("#submit")
const result = document.querySelector(".result")
const prevNum = document.querySelector(".prevNum")
const guessLeft = document.querySelector(".guessLeft")
const hero = document.querySelector("#hero")

let previousGuesses = []
let guessCount = 1;

const resetBtn = document.createElement("h2")

let playGame = true

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault()
   const guess =  parseInt(userInput.value)
    validateGuess(guess)
  })
}



//Validate the input value

function validateGuess(guess){
  if(isNaN(guess)){
    displayMassage("Please Enter a valid number.")
  }else if(guess < 1){
    displayMassage("Please Enter number greater then 0 .")
  }else if(guess > 100){
    displayMassage("Please Enter Number lessthen 100.")
  }else{
    //Guess is valid input then push into the prvious guesss
    previousGuesses.push(guess)
    // if guess is exit the limit of guessCount
    /**
     *  - display the the guess
     * - Show Over the game message
     * - endGame()
     */
    if(guessCount === 11){
       updateResult(guess)
       displayMassage(`Game Over . Random number was : ${randomNum}`)
       endGame()
    }else{
      //If guess count is lessthan 11
      updateResult(guess)
      checkGuess(guess)   
    }
  }
}

function checkGuess(guess){
    if(guess === randomNum){
      displayMassage(`You guessed it right.`)
      endGame(); // end the game if your guess is correct.
    }else if(guess < randomNum){
      displayMassage("Your guess is too LOW..")
    }else if(guess > randomNum){
      displayMassage("Your guess is too HIGH")
    }
}


function updateResult(guess){
      userInput.value = ""; // do user input empty
      guessCount++;
      guessLeft.innerHTML = `${11 - guessCount}`
      prevNum.innerHTML += `${guess}, `
}

function displayMassage(message){
result.innerHTML = `${message}`
}


function endGame(){
 /**
  * - Empty the user input
  * - disabled the user input
  * 
  */

 userInput.value = ""; // do user input empty first
 userInput.setAttribute("disabled", " ") ; // disabled the user input box for not allowed to new input by user.
 resetBtn.classList.add("resetBtn")
 resetBtn.innerHTML = "<h2 id='newGame'>Start New Game</h2>"
 hero.append(resetBtn);
 playGame = false;
 startGame()

}

function startGame(){
  const newGame = document.querySelector("#newGame")
  newGame.addEventListener("click", function(e){
    randomNum = parseInt(Math.random()*100 + 1)
    previousGuesses = [];
    guessCount = 1;
    result.innerHTML = "";
    prevNum.innerHTML = "";
    guessLeft.innerHTML = `${11 - guessCount}`;
    userInput.removeAttribute("disabled");
    hero.removeChild(resetBtn);
    playGame = true;
  })
}
































// ====================== Method = 2 ============================



/*
 const submit = document.getElementById("submit")
 let randomNum =
 
 parseInt(Math.random()*100 + 1);
let previousGuesses = [];
let guessesRemaining = 10;


submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    let inputNum = parseInt(document.querySelector("#inputNum").value);
    let result =  document.querySelector(".result");


    if(isNaN(inputNum) || inputNum <= 0 || inputNum > 100){
       result.innerHTML = "Please Enter Valid number between 1 and 100"
    
    }else{
        result.innerHTML = "";
        previousGuesses.push(inputNum)
        guessesRemaining--;
        document.querySelector(".guessLeft").innerHTML=`${guessesRemaining}`
        if(guessesRemaining === 0){
            result.innerHTML = `Sorry, you've run out of guesses. The correct number was ${randomNum}`
            inputNum.value = ""
            guessesRemaining = 10
            previousGuesses = []
            document.querySelector(".prevNum").textContent = ""
            randomNum =  parseInt(Math.random()*100 + 1);
            return;
        }
    }

   let prevArr = previousGuesses.join(", ")
       document.querySelector(".prevNum").textContent = `${prevArr} ,`


   if(inputNum == randomNum){
     result.innerHTML = `Congratulation ! You guessed it right ${randomNum}`
     inputNum.value = ""
     guessesRemaining = 10
     previousGuesses = []
     document.querySelector(".prevNum").textContent = ""
     randomNum =  parseInt(Math.random()*100 + 1);
   }else if( inputNum < randomNum){
     result.innerHTML = "Try a higher number."
   }else{
    result.innerHTML = "Try a lower number"
   }

 

})

*/