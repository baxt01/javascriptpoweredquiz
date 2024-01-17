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

var currentQuestionIndex = 0;
var correctAnswer = questions[currentQuestionIndex].answer;

        function showQuestion() {
            var currentQuestion = questions[currentQuestionIndex];
            questionTitle.textContent = currentQuestion.question;

            // Clear previous choices
            choicesContainer.innerHTML = "";

            // Add the current answer choices to buttons
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
  } else {
    var snd = new Audio('./assets/sfx/incorrect.wav');
    snd.play(); 
  }
}
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
        }
        
 function handleChoiceClick() {
            // Handle the user's choice (you can add your logic here if needed)
            
            // Move to the next question
            currentQuestionIndex++;

            // Check if there are more questions
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                // Display a message or perform some action when all questions are answered
                questionTitle.textContent = "Quiz completed!";
                choicesContainer.innerHTML = "";
               
            }
        }

        // Initial setup
        showQuestion();

        



// for (var x = 0; x < questions.length; x++) {
// // Add the First Question to the screen.
// questionTitle.textContent = questions[x].question;
// }
// // Get the first answer set and add them to buttons.
// for (var i = 0; i < questions[0].choices.length; i++) {
//     choices = document.createElement("button");
//     choices.textContent = questions[0].choices[i];
//     choices = document.querySelector("#choices").appendChild(choices);

// }
