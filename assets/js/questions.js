// Get the ID question-title.
var questionTitle = document.querySelector("#question-title");
var choicesContainer = document.querySelector("#choices");

var questions = [
    {
     question: '1. What is JavaScript primarily used for?',
     choices:
 [
    ' A) Video Editing',
    'B) Building Interactive Web Pages',
    'C) Database Management',
    'D) Graphic Design'],
 answer: 'B) Building Interactive Web Pages'
    },
    {
        question: '2. which brackets define an array?',
        choices:
    [
       ' A) pointy',
       'B) parentheses',
       'C) curly',
       'D) square'],
    answer: 'D) square'
       },
       {
        question: '1. What is JavaScript primarily used for?',
        choices:
    [
       ' A) Video Editing',
       'B) Building Interactive Web Pages',
       'C) Database Management',
       'D) Graphic Design'],
    answer: 'B) Building Interactive Web Pages'
       },
       {
        question: '1. What is JavaScript primarily used for?',
        choices:
    [
       ' A) Video Editing',
       'B) Building Interactive Web Pages',
       'C) Database Management',
       'D) Graphic Design'],
    answer: 'B) Building Interactive Web Pages'
       },
 {
     question: '2. How do you declare a constant variable in JavaScript?',
     choices:
    [
    'A) let',
     'B) const',
     'C) var',
     'D) const and let'
 ],
     answer: 'B) const'
 }
]
// Setting Globals.
var score = 0;
var currentQuestionIndex = 0;

        function showQuestion() {
            var currentQuestion = questions[currentQuestionIndex];
            questionTitle.textContent = currentQuestion.question;
            var correctAnswer = questions[currentQuestionIndex].answer;
            
            // Clear previous choices
            choicesContainer.innerHTML = "";
     
            // Add the current answers choices to buttons.
            for (var i = 0; i < currentQuestion.choices.length; i++) {
                var choiceButton = document.createElement("button");
                choiceButton.textContent = currentQuestion.choices[i];
                if (choiceButton.innerText == correctAnswer) {
                    choiceButton.setAttribute("id", "correct");
                } else {
                    choiceButton.setAttribute("id", "wrong");
                }
                choiceButton.addEventListener("click", handleChoiceClick);
                choicesContainer.appendChild(choiceButton);
            }
            const buttons = document.getElementsByTagName("button");
        const buttonPressed = e => {
        if (e.target.id === "correct") {
            var snd = new Audio('./assets/sfx/correct.wav');
            snd.play(); 
        } else if (e.target.id === "wrong"){
            var snd = new Audio('./assets/sfx/incorrect.wav');
            snd.play(); 
            timeLeft -= 10;
        }
        }
        for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
        }
        }
        
 function handleChoiceClick() {
            // Handle the user's choice
            // Move to the next question
            currentQuestionIndex++;

            // Check if there are more questions
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                clearInterval(timerInterval);
                // Display a message or perform some action when all questions are answered
                questionTitle.textContent = "Quiz completed!";
                choicesContainer.innerHTML = "";

                var score = calculateScore();
            }
        }

        var finalScoreElement = document.getElementById("final-score");
        var initialsInput = document.getElementById("initials");

        function calculateScore() {
            var score = timeLeft;
            timeLeft = 1;
            finalScoreElement.textContent = score; // Update the #final-score content      
            return score;
        }

function saveScore() {
    var initials = initialsInput.value.trim(); // Get the initials from the input field

    if (initials !== "") {
        var scoreData = {
            initials: initials,
            score: calculateScore()
        };

        // Retrieve existing scores from local storage or initialize an empty array
        var scores = JSON.parse(localStorage.getItem("scores")) || [];

        // Add the new score data to the array
        scores.push(scoreData);

        // Save the updated scores array back to local storage
        localStorage.setItem("scores", JSON.stringify(scores));

        // You can redirect to a highscores page or perform other actions here
        window.location.href = "highscores.html";
    } else {
        alert("Please enter your initials.");
    }
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", saveScore);
        
        // Initial setup
        showQuestion();
