var player = {
  paper: document.getElementById('Paper').value,
  rock: document.getElementById('Rock').value,
  scissors: document.getElementById('Scissors').value
};

var playerVirtual = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors"
};

//Array options where 'computer' is choosing random options
var options = ["Rock", "Paper", "Scissors"];

//'computer' choose random option from array 'options'
var computer = {
  option: options[Math.floor(Math.random()*options.length)]
};

//if one of the three buttons is clicked, two functions are passed on
document.getElementById("Rock").addEventListener("click", function(){
  rockResult();
  rockFunct();
  computerImgFadeIn();
});

document.getElementById("Paper").addEventListener("click", function(){
  paperResult();
  paperFunct();
  computerImgFadeIn();
});

document.getElementById("Scissors").addEventListener("click", function(){
  scissorsResult();
  scissorsFunct();
  computerImgFadeIn();
});

document.getElementById("playAgain").addEventListener("click", function(){
  window.location.reload();
});

//Show the chosen options
var rockFunct = function(){
   document.getElementById('options').innerHTML =`You chose Rock and the computer chose ${computer.option}`;
   console.log(`player: ${player.rock}`);
};

var paperFunct = function(){
   document.getElementById('options').innerHTML =`You chose Paper and the computer chose ${computer.option}`;
   console.log(`player: ${player.paper}`);
};

var scissorsFunct = function(){
   document.getElementById('options').innerHTML =`You chose Scissors and the computer chose ${computer.option}`;
   console.log(`player: ${player.scissors}`);
};


//The results of the game
var rockResult = function () {
     if (player.rock == playerVirtual.rock && computer.option == player.rock) {
         document.getElementById('result').innerHTML = "It is a draw!!!";
     }else if (player.rock == playerVirtual.rock && computer.option == "Paper") {
         document.getElementById('result').innerHTML = "Computer wins!!!";
     }else if (player.rock == playerVirtual.rock && computer.option == "Scissors") {
         document.getElementById('result').innerHTML = "You win!!!";
     }
};

var paperResult = function() {
  if (player.paper == playerVirtual.paper && computer.option == player.paper) {
      document.getElementById('result').innerHTML = "It is a draw!!!";
  }else if (player.paper == playerVirtual.paper && computer.option == "Rock") {
      document.getElementById('result').innerHTML = "You win!!!";
  }else if (player.paper == playerVirtual.paper && computer.option == "Scissors") {
      document.getElementById('result').innerHTML = "The computer wins!!!";
  }
};

var scissorsResult = function() {
  if (player.scissors == playerVirtual.scissors && computer.option == player.scissors) {
      document.getElementById('result').innerHTML = "It is a draw!!!";
  }else if (player.scissors == playerVirtual.scissors && computer.option == "Paper") {
      document.getElementById('result').innerHTML = "You win!!!";
  }else if (player.scissors == playerVirtual.scissors && computer.option == "Rock") {
      document.getElementById('result').innerHTML = "The computer wins!!!";
  }
};

//Show IMG of 'computer's' chosen option
function computerImgFadeIn(){
  if (computer.option == "Rock") {
     $("#Rock, #Scissors, #Paper, #title-choose").fadeOut().promise().done(function() {
       $("#computer-rockImg").fadeIn(2000);
     });
  }else if (computer.option == "Paper") {
     $("#Rock, #Scissors, #Paper, #title-choose").fadeOut().promise().done(function() {
       $("#computer-paperImg").fadeIn(2000);
     });
  }else if (computer.option == "Scissors") {
     $("#Rock, #Scissors, #Paper, #title-choose").fadeOut().promise().done(function() {
       $("#computer-scissorsImg").fadeIn(2000);
     });
  }
}
