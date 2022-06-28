var player1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "images/dice" + player1 + ".svg";
var player1image = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);

var player2 = (Math.floor(Math.random() * 6)) + 1;
var randomDiceImg2 = "images/dice" + player2 + ".svg";
var player2image = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


if (player1 > player2) {
  document.getElementsByTagName("h1")[0].innerHTML = "🏴 Play 1 Wins!"
}
else if (player1 === player2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}
else {
  document.getElementsByTagName("h1")[0].innerHTML = "Play 2 Wins! 🏴"
}
