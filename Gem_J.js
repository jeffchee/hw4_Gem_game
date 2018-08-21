$(document).ready(function(){


var win = 0;
var lose = 0;
var randomNum = getRndInteger(19, 120);
var gemNum1 = getRndInteger(1,6);
var gemNum2 = getRndInteger(1,12);
var gemNum3 = getRndInteger(1,12);
var gemNum4 = getRndInteger(7,14);
var score = 0;

$("#score").text(score);
$("#win").text(win);
$("#lose").text(lose);




function startGame() {
if ((score === randomNum)){
  alert("You Win!");
  win++;
  return
}
else if ((score > randomNum)) {
  alert("You Lose!");
  lose++;
  return
}
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



getRndInteger(19, 120);
startGame();


var targetNumberElement = $('#targetNumber');



$('#targetNumber').text(randomNum);
console.log(randomNum);



$(".Number1").on("click",function() {

  console.log("random number is " + gemNum1);
  console.log("current score is " + score);

  gemNum1= parseInt(gemNum1);
  score += gemNum1;
  console.log("new score is " + score);
})


$(".Number2").on("click", function() {

  console.log("random number is " + gemNum2);
  console.log("current score is " + score);
  
  gemNum2= parseInt(gemNum2);
  score+=gemNum2;
  console.log("new score is " + score);
})


$(".Number3").on("click", function() {
  console.log("random number is " + gemNum3);
  console.log("current score is " + score);

  gemNum3= parseInt(gemNum3);
  score+=gemNum3;
  console.log("new score is " + score);
})


$(".Number4").on("click", function() {
  console.log("random number is " + gemNum4);
  console.log("current score is " + score);

  gemNum4= parseInt(gemNum4);
  score+=gemNum4;
  console.log("new score is " + score);
})

})

