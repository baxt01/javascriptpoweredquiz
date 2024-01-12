// Make a timer on the screen displayed in the time selector.(75 seconds)
// Start button with selector of start to start the timer and fetch the questions.
// The selector of question-title for the question to display.
// The selector of choices to display the answer choices.
// The selector of end-screen to submit your score and initials.

// Get the class of the div Timer.
var timer = document.querySelector(".timer");
// Get the ID of the span for Time.
var time = document.querySelector("time");
// Get the ID of the button Start.
var start = document.querySelector("start");
// Get the Id end-screen.
var EndScreen = document.querySelector("end-screen");

// Set the starting time for the timer.
var timeLeft = 10;

// Set the listener for the start button to start the countdown timer.
start = document.addEventListener("click", function setTime() {
    // Sets the Interval in a variable.
    var timerInterval = setInterval(function (){
    // Reduces the timer.
    timeLeft --;
    // puts the timer to screen.
    timer.textContent = "Time: " + timeLeft;
    
    // checks if the timer has run out.
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        
    }
}, 1000); // sets the speed of the timer in milliseconds.
}
);

function sendMessage() {
    EndScreen.classList.remove("hide");
    EndScreen.classList.add("scores");
  }

  