// Make a timer on the screen displayed in the time selector.(75 seconds)
// Start button with selector of start to start the timer and fetch the questions.
// The selector of question-title for the question to display.
// The selector of choices to display the answer choices.
// The selector of end-screen to submit your score and initials.

// Get the class of the div Timer.
var timer = document.querySelector(".timer");
// Get the ID of the span for Time.
var time = document.querySelector("#time");
// Get the ID of the button Start.
var start = document.querySelector("#start");
// Get the Id end-screen.
var endScreen = document.querySelector("#end-screen");
// Get the ID start-screen .
var startscreen =document.querySelector("#start-screen")
// Get the ID questions.
var questions = document.querySelector("#questions");

// Set the starting time for the timer.
var timeLeft = 10;

// Set the listener for the start button to start the countdown timer.
start = document.addEventListener("click", function setTime() {
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
        
    }
}, 1000); // sets the speed of the timer in milliseconds.
}
);

function sendMessage() {
    startscreen.classList.remove("start");
    startscreen.classList.add("hide");
    questions.classList.remove("hide");
    questions.classList.add("scores");
  }

  