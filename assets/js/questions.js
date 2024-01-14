// Get the ID question-title.
var questionTitle = document.querySelector("#question-title");

// Question list.
var qt = [
    "Arrays are surrounded by _____ brackets?", 
"When using array.push which brackets are used?", 
"The difference from  == and === is?",
"In CSS selectors the # refers to?"
]
// Answers list.
var qta = [
    ["pointy", "curly", "parenthesis", "square"], 
["square", "parenthesis", "pointy", "curly"], 
["== is strict", "=== is strict", "To assign a value", "None of these"],
["An Instagram search", "A CSS class", "A CSS ID", "A HTML element"]
]

// Correct Answer Indexes.
var cai = [
    [0, 3],
    [1, 1],
    [2, 1]
]

for (let i = 0; i < qt.length; i++) {
    questionTitle.textContent = qt[i];

}

// Generating the answers onto buttons.
// var ans = document.createElement("button");
// ans.textContent = qta[i][0];
// document.append(ans);