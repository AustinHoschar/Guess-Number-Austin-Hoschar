//#region Variables
var randomNumber = Math.floor(Math.random() * 20) + 1;
var allGuesses = [];
var playerScore = 0;
var correctGuesses = 0;
var highScore = 0;

//#endregion
function myFunction() {
  var x, text;

  x = document.getElementById("input").value;

  var playerGuesses;
  playerGuesses = document.getElementById("input").value;
  // var arrSet = new Set();
  // console.log(arrSet);
  if (allGuesses.includes(playerGuesses)) {
    document.getElementById("dupNumber").innerHTML = "You already typed that.";
    allGuesses.pop();
  } else {
    document.getElementById("dupNumber").innerHTML =
      "Your all good keep going.";
  }
  allGuesses.push(" " + playerGuesses);
  document.getElementById("numbersGuessed").innerHTML = allGuesses;

  if (playerGuesses == randomNumber) {
    // var text="score is going up";
    // document.getElementById()
    playerScore = playerScore + 5;
    correctGuesses = correctGuesses + 1;
    // randomNumber = Math.floor(Math.random() * 20) + 1;
  } else {
    playerScore = playerScore - 2;
    correctGuesses=correctGuesses;
    var text = "Oh no ... Score is going down. ";
    document.getElementById("numbCorrect").innerHTML =correctGuesses ;
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("numbCorrect").innerHTML = correctGuesses;
  /*Some text above has been copied and pasted sorry if it looks bad*/

  if (x < 1 || x > 20) {
    text = "Hey there buddy, enter a number between 1 AND 20 please.";
    document.getElementById("response").innerHTML = text;
  } else if (x == randomNumber) {
    text = "Wow, good guesser";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number I chose was " + randomNumber;
    // document.getElementById("yourGuess").innerHTML = "You chose " + x;
    randomNumber = Math.round(Math.random() * 19) + 1;
    console.log(randomNumber);
 

  } else {
    text = "nope try again";
    document.getElementById("response").innerHTML = text;
    // document.getElementById("answer").innerHTML ="The number I chose was " + randomNumber;
    // document.getElementById("yourGuess").innerHTML = "You chose " + x;
    // randomNumber = Math.round(Math.random() * 20) + 1;
    console.log(randomNumber);
  }
 
  if (correctGuesses == 10 && playerScore >=highScore){
      highScore=playerScore;
document.getElementById("highScore").innerHTML="HighScore: "+highScore;

console.log(highScore);
playerScore=0;
correctGuesses=0;
allGuesses= [];
}
}

console.log(randomNumber);
