// Get the class of the div Timer.
var timer = document.querySelector(".timer");
// Get the ID of the span for Time.
var time = document.querySelector("#time");
// Get the Id end-screen.
var endScreen = document.querySelector("#end-screen");
// Get the ID start-screen .
var startscreen =document.querySelector("#start-screen")
// Get the ID questions.
var questionsEl = document.querySelector("#questions");

var finalScore = document.querySelector("#final-score");
// Set the starting time for the timer.
var timeLeft = 75;

// Global Declaration.
var timerInterval;
// Get the start button ID.
// Set the listener for the start button to start the countdown timer.
start = document.querySelector("#start").addEventListener("click", function setTime() {
    // Sets the Interval in a variable.
    sendMessage();
    var timerInterval = setInterval(function (){
    // Reduces the timer.
    timeLeft --;
    // puts the timer to screen.
    timer.textContent = "Time: " + timeLeft;
    
    // checks if the timer has run out.
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        questionsEl.classList.remove("scores") ;
        questionsEl.classList.add("hide");
        endScreen.classList.remove("hide");
        endScreen.classList.add("scores");
    }
}, 1000); // sets the speed of the timer in milliseconds.
}
);

function sendMessage() {
    startscreen.classList.remove("start");
    startscreen.classList.add("hide");
    questionsEl.classList.remove("hide");
    questionsEl.classList.add("scores");
  }

  