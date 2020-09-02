
$(document).ready(function(){
  $("#play").click(function(){
    $("#play, #title").fadeOut(1000).promise().done(function() {
    $("#Rock, #Paper, #Scissors, #title-choose").fadeIn();
  })});

  $("#Rock").click(function(){
    $("#Rock, #Scissors, #Paper, #title-choose").fadeOut().promise().done(function() {
    $("#player-title, #computer-title, #player-rockImg, #results, #playAgain").fadeIn();
  })});

  $("#Scissors").click(function(){
    $("#Scissors, #Rock, #Paper, #title-choose").fadeOut().promise().done(function() {
    $("#player-title, #computer-title, #player-scissorsImg, #results, #playAgain").fadeIn();
  })});

  $("#Paper").click(function(){
    $("#Paper, #Scissors, #Rock, #title-choose").fadeOut().promise().done(function() {
    $("#player-title, #computer-title, #player-paperImg, #results, #playAgain").fadeIn();

  })});
});
