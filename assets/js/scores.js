var highscores = document.getElementById("highscores");

var scores = JSON.parse(localStorage.getItem("scores")) || [];

for (var i = 0; i < scores.length; i++){
var ins = scores[i].initials;
var score = scores[i].score;
var newLi = document.createElement('li');
newLi.textContent = ins + "  " + score;
 highscores.append(newLi);
}