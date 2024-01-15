// Get the ID question-title.
var questionTitle = document.querySelector("#question-title");

// Question list.
var qt1 = "Arrays are surrounded by _____ brackets?";
var qt2 = "When using array.push which brackets are used?"; 
var qt3 = "The difference from  == and === is?";
var qt4 = "In CSS selectors the # refers to?";

// Answers list.
var qta1 = ["pointy", "curly", "parenthesis", "square"];
var qta2 = ["square", "parenthesis", "pointy", "curly"]; 
var qta3 = ["== is strict", "=== is strict", "To assign a value", "None of these"];
var qta4 = ["An Instagram search", "A CSS class", "A CSS ID", "A HTML element"];

// Correct Answer Indexes.
var cai = [
    [1, 3],
    [2, 1],
    [3, 1],
    [4, 3]
]

    questionTitle.textContent = qt1;

    
for(var j = 0; j < qta1.length; j++) {
    var ans = document.createElement("button");
    ans.textContent = qta1[j];
    document.getElementById("choices").appendChild(ans);
}

// Generating the answers onto buttons.

var ans = document.createElement("button");
ans.textContent = qta1[j];